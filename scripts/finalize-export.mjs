import {readdir, readFile, writeFile, mkdir, rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const path = `${dir}/${entry.name}`;
    files.push(...(entry.isDirectory() ? await walk(path) : [path]));
  }
  return files;
}

await mkdir('out/_bootstrap', {recursive: true});
const files = await walk('out');
const htmlFiles = files.filter(path => path.endsWith('.html'));
for (const path of htmlFiles) {
  let html = await readFile(path, 'utf8');
  const scripts = [];
  const flight = [];
  html = html.replace(/<script([^>]*)>([\s\S]*?)<\/script>/g, (all, attrs, body) => {
    if (/\bsrc=|application\/ld\+json/.test(attrs) || !body.trim()) return all;
    if (!attrs.trim() && (/^\(self\.__next_f=/.test(body) || /^self\.__next_f\.push\(/.test(body))) {
      flight.push(body);
      return flight.length === 1 ? '<!--NEXT_FLIGHT_BOOTSTRAP-->' : '';
    }
    const filename = `${createHash('sha256').update(body).digest('hex')}.js`;
    scripts.push(writeFile(`out/_bootstrap/${filename}`, body));
    return `<script${attrs} src="/_bootstrap/${filename}"></script>`;
  });
  if (flight.length) {
    const body = flight.join(';\n');
    const filename = `${createHash('sha256').update(body).digest('hex')}.js`;
    scripts.push(writeFile(`out/_bootstrap/${filename}`, body));
    html = html.replace('<!--NEXT_FLIGHT_BOOTSTRAP-->', `<script src="/_bootstrap/${filename}"></script>`);
  }
  await Promise.all(scripts);
  await writeFile(path, html);
}

// Imports already have hashed copies under /_next/static/media. Preserve only
// public files referenced by emitted code, markup or styles in the upload.
const textFiles = (await walk('out')).filter(path => /\.(html|js|css|json|txt)$/.test(path));
const emittedText = (await Promise.all(textFiles.map(path => readFile(path, 'utf8')))).join('\n');
for (const path of files.filter(path => path.startsWith('out/static/'))) {
  const url = path.slice(3);
  if (!emittedText.includes(url) && !emittedText.includes(encodeURI(url))) await rm(path);
}

let headers = `/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; media-src 'self'; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/_bootstrap/*
  Cache-Control: public, max-age=31536000, immutable

/static/*
  Cache-Control: public, max-age=3600, must-revalidate

/*.txt
  Cache-Control: public, max-age=0, must-revalidate
`;
const documentPaths = new Set(['/']);
for (const path of htmlFiles) {
  const url = path.slice(3);
  documentPaths.add(url);
  documentPaths.add(url.replace(/\.html$/, ''));
}
for (const url of documentPaths) headers += `\n${url}\n  Cache-Control: public, max-age=0, must-revalidate\n`;
await writeFile('out/_headers', headers);

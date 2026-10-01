import assert from 'node:assert/strict';
import {readFile, readdir, stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) files.push(...(entry.isDirectory() ? await walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]));
  return files;
}
const routes = ['index', 'register', 'developers', 'gallery', 'sponsors', 'media_partners', 'wallmag', 'EPC', 'HPC', 'music_partner'];
for (const route of routes) {
  const html = await readFile(`out/${route}.html`, 'utf8');
  assert(!/Portfolio archive|Registration demo|Representative demo|portfolio demonstration|Open archived|Play archived/i.test(html), `Added wording on ${route}`);
  assert(!/<script(?![^>]*src=)[^>]*>\s*[^<\s]/.test(html), `Inline script on ${route}`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const url = decodeURI(match[1]);
    if (!/\.(?:js|css|png|jpg|jpeg|webp|avif|svg|woff2|pdf)$/.test(url)) continue;
    assert((await stat(`out${url}`)).isFile(), `Missing local resource ${url}`);
  }
}
const registration = await readFile('out/register.html', 'utf8');
assert(registration.includes('Registration is closed for this edition'));
assert(!/<input|<select|Complete demo|name="email"/.test(registration), 'Registration still collects personal details');
assert(registration.includes('LandingBookImg') && registration.includes('registration-closed-title'), 'Original artwork and accessible dialog missing');
for (const file of await readdir('out/_bootstrap')) {
  const body = await readFile(`out/_bootstrap/${file}`);
  assert.equal(file, `${createHash('sha256').update(body).digest('hex')}.js`, 'Bootstrap hash mismatch');
}
const headers = await readFile('out/_headers', 'utf8');
assert(headers.includes("script-src 'self';") && !headers.includes('unsafe-eval'));
assert(headers.includes("object-src 'none'") && headers.includes('frame-src'));
assert(headers.includes('/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable'));
assert(headers.includes('/_bootstrap/*\n  Cache-Control: public, max-age=31536000, immutable'));
for (const route of routes) assert(headers.includes(`/${route === 'index' ? '' : route}\n  Cache-Control: public, max-age=0, must-revalidate`));
assert(headers.split('\n').every(line => line.length < 2000));
const pdf = await readFile('src/components/PDFDocument.jsx', 'utf8');
assert(pdf.includes('<iframe') && !pdf.includes('react-pdf'), 'Native PDF viewer missing');
for (const file of (await walk('out/static/pdf'))) assert((await stat(file)).size > 0);
assert((await readdir('public/static/fonts')).some(file => file.endsWith('.woff2')));
console.log('All exported routes, wording removal, registration dialog, local resources, bootstrap hashes, CSP, cache policy, PDFs and fonts passed.');

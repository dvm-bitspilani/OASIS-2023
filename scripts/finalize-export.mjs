import {readdir,readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
async function walk(dir){let r=[];for(const e of await readdir(dir,{withFileTypes:true})){let p=dir+'/'+e.name;if(e.isDirectory())r.push(...await walk(p));else r.push(p)}return r}
const pending=[];
await mkdir('out/_archive',{recursive:true});
for(const path of await walk('out')) if(path.endsWith('.html')) {
 let html=await readFile(path,'utf8');
 html=html.replace(/<script([^>]*)>([\s\S]*?)<\/script>/g,(all,attrs,body)=>{
  if(/\bsrc=|application\/ld\+json/.test(attrs)||!body.trim())return all;
  const filename=createHash('sha256').update(body).digest('hex')+'.js';
  pending.push(writeFile('out/_archive/'+filename,body));return `<script${attrs} src="/_archive/${filename}"></script>`;
 });await writeFile(path,html);
}
await Promise.all(pending);
await writeFile('out/_headers',`/*\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; media-src 'self'; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n`);

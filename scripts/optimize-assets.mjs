import sharp from 'sharp';
import {readdir,readFile,writeFile,stat} from 'node:fs/promises';
async function walk(dir){let r=[];for(const e of await readdir(dir,{withFileTypes:true})){let p=dir+'/'+e.name;if(e.isDirectory())r.push(...await walk(p));else r.push(p)}return r}
const sources=await walk('src');const publicFiles=await walk('public');const all=[...sources,...publicFiles];let report=[];
for(const file of all){
 if(file.endsWith('.svg')&&(await stat(file)).size>1000000){let s=await readFile(file,'utf8');let before=Buffer.byteLength(s);const matches=[...s.matchAll(/data:image\/(png|jpeg);base64,([A-Za-z0-9+/=\s]+)/g)];for(const m of matches){const b=await sharp(Buffer.from(m[2],'base64')).webp({quality:85}).toBuffer();s=s.replace(m[0],'data:image/webp;base64,'+b.toString('base64'))}await writeFile(file,s);report.push({file,before,after:Buffer.byteLength(s)});}
 if(/\.(png|jpe?g)$/i.test(file)&&(await stat(file)).size>350000){
 const before=(await stat(file)).size;const out=file.replace(/\.(png|jpe?g)$/i,'.webp');let meta=await sharp(file).metadata();await sharp(file).resize({width:Math.min(meta.width, file.includes('Dev Assets')?480:2400),withoutEnlargement:true}).webp({quality:88}).toFile(out);
 // Rewrite only real imports/references, preserving original backups until verification.
 for(const source of sources.filter(x=>/\.(jsx?|css)$/.test(x))){let s=await readFile(source,'utf8');const basename=file.split('/').pop();const newbase=out.split('/').pop();if(s.includes(basename)){s=s.split(basename).join(newbase);await writeFile(source,s)}}report.push({file,before,after:(await stat(out)).size});
 }
}
await writeFile('evidence/assets.json',JSON.stringify(report,null,2));

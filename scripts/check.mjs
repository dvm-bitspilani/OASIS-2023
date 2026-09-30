import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
const routes=['index','register','developers','sponsors','media_partners','wallmag','EPC','HPC','music_partner'];
for(const route of routes){const html=await readFile(`out/${route}.html`,'utf8');assert(html.includes('Portfolio archive'));assert(!/<script(?![^>]*src=)[^>]*>\s*[^<\s]/.test(html),'inline bootstrap '+route);}
const headers=await readFile('out/_headers','utf8');assert(!headers.includes('unsafe-eval'));assert(headers.split('\n').every(l=>l.length<2000));
assert((await readdir('public/static/fonts')).some(f=>f.endsWith('.woff2')));
console.log('Static routes, archive labels, external bootstrap, CSP and local fonts verified.');

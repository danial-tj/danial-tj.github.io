import {cp,mkdir,readFile,rm} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const out=resolve(root,'dist');
// Only the generated dist directory inside this project may be replaced.
if(dirname(out)!==root)throw new Error('Build output must stay inside the project.');
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
const files=[
  'index.html','src','vendor','assets/fonts',
  'assets/vancouver-geography-v2.png','assets/danial-subtle-stubble-v6.png',
  'assets/projects/concealed-captioning-preview.jpg',
  'assets/projects/aeropilot-preview.jpg','assets/projects/mood-preview.png',
  'assets/projects/market-indicators.jpg','assets/projects/cosmic.jpg',
  'assets/projects/project-illustrations-v1.png'
];
for(const path of files){
  const destination=resolve(out,path);
  await mkdir(dirname(destination),{recursive:true});
  await cp(resolve(root,path),destination,{recursive:true});
}
const html=await readFile(resolve(out,'index.html'),'utf8');
for(const [,asset] of html.matchAll(/(?:src|href)="((?:assets|src|vendor)\/[^"#]+)"/g))await readFile(resolve(out,asset));
console.log('Built standalone site in dist; entry-point assets verified.');

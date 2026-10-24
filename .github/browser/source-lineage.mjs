import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const LEGACY_POLICY='adadca034f3c0724564922209e05f91444a825fe';
export const PINS={
  "assets/js/training-app.js": "7a3db71b7f837e9181cac53fdfc05552188a4c1d42de979f4cde321dde38124a",
  "assets/js/training-data.js": "9aca0086b79e9bcad299bfaaba37622ab4a46136283943a7297eebd73dbcea5f",
  "assets/js/location-custom.js": "ab8668b1e7ee9838c84eae712be07396da35f3d1542ee4ac03faa7cad4a9ef53",
  "assets/js/instruction-update.js": "2a84024f071f936363ab3dca0e93396711211869450e248fa44d6a2aee6ee36b",
  "sw.js": "c3b178cc60efc91094f94b0d02ed17b8437b7e6e81580b319c54753075f7b1f1",
  "tablet.html": "7f2cb10eac5c1b92124ca846533ef67e517890bbaad3af16ad41f278e93cd4f0",
  "assets/css/training.css": "262d5ce2b5f03d86239b22de1b6e27d88e2e62a6b836578cc60ec886c7dee0ea",
  "assets/css/primserv.css": "f9e2c5326bbf33c36e55ea9325bb5f21053234cfc2b6b14fdd1f8a1f2a2e4062"
};
const hash=b=>createHash('sha256').update(b).digest('hex');
export function pinnedLegacy(ref,paths,read){
 assert.equal(ref,LEGACY_POLICY,'Only the original pre15 policy is a legacy source');const files=new Map();
 for(const [p,h] of Object.entries(PINS)){const b=read(ref,p);assert.equal(hash(b),h,`Pinned pre15 bytes: ${p}`);files.set(p,b);}
 for(const p of paths)if(!files.has(p))files.set(p,read(ref,p));return files;
}
export function freshTransition(current,fresh){
 assert(current.has('sw.js')&&fresh.has('sw.js'),'Original workers required');
 const equal=current.size===fresh.size&&[...current].every(([p,b])=>fresh.has(p)&&hash(b)===hash(fresh.get(p)));
 if(!equal)assert.notEqual(hash(current.get('sw.js')),hash(fresh.get('sw.js')),'Changed runtime requires a real original worker transition');
 return !equal;
}

// Personal restart-photo audit on the authorized Linux Actions origin only.
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {createServer} from 'node:http';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import vm from 'node:vm';
assert.equal(process.env.GITHUB_ACTIONS,'true');
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_PACKAGE);
const output=resolve(process.env.BROWSER_REPORT,'restart-photos');await mkdir(output,{recursive:true});
const git=(...a)=>execFileSync('git',a),hash=b=>createHash('sha256').update(b).digest('hex');
const head=process.env.TESTED_HEAD,base=process.env.TESTED_BASE,mode=process.env.DOCUMENT_MODE;
assert.equal(git('rev-parse','HEAD').toString().trim(),head);assert(['first','bogatynia','zgorzelec'].includes(mode));
const report={head,base,mode,acceptance:false,files:{},cases:[],requests:[],blocked:[],errors:[],limits:['Chromium screens only; not physical iPhone Safari or native-speaker certification.','Only the restart photo panel is covered here. Original maps, photos, rules, other reader topics, PDF flows and prior acceptance gates remain separate.','Source text observations require personal screen/content review before any runtime repair.']};
const tracked=new Set(git('ls-tree','-r','--name-only',head).toString().trim().split('\n')),cache=new Map();
function source(p){assert(tracked.has(p));if(!cache.has(p)){const b=git('show',`${head}:${p}`);cache.set(p,b);report.files[p]={bytes:b.length,sha256:hash(b)};}return cache.get(p);}
const window={},dataContext=vm.createContext({window});for(const p of ['assets/js/training-data.js','assets/js/location-custom.js','assets/js/instruction-update.js'])vm.runInContext(source(p).toString(),dataContext,{timeout:3000});
const D=window.CX_DATA,R=D.readerTabs.find(t=>t.id==='restart'),langs=['pl','en','ua','ru','az','es','fil','id','ne'];assert.equal(R.images.length,2);assert.equal(R.imageSteps.length,7);
const prefix='/citronex-zgorzelec-bogatynia-szkolenie/',mime={html:'text/html',css:'text/css',js:'application/javascript',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',svg:'image/svg+xml',pdf:'application/pdf',webmanifest:'application/manifest+json'};
const server=createServer((req,res)=>{const u=new URL(req.url,'http://localhost'),p=u.pathname.startsWith(prefix)?decodeURIComponent(u.pathname.slice(prefix.length))||'index.html':'';report.requests.push({path:p,method:req.method});if(!['GET','HEAD'].includes(req.method)||!tracked.has(p)||!/^([^/]+\.(html|js|webmanifest)|assets\/)/.test(p)){res.writeHead(404).end();return;}const b=source(p);res.writeHead(200,{'Content-Type':mime[p.split('.').pop()]||'application/octet-stream','Content-Length':b.length,'Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:b);});
await new Promise(done=>server.listen(0,'127.0.0.1',done));const origin=`http://127.0.0.1:${server.address().port}`,url=origin+prefix;
const answers=p=>p.evaluate(()=>Object.fromEntries(Object.keys(localStorage).filter(k=>k.startsWith('primserv:training-test:')).sort().map(k=>[k,localStorage.getItem(k)])));
async function center(el){await el.evaluate(e=>e.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'}));await el.page().evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));}
async function geometry(el){return el.evaluate(e=>{const r=e.getBoundingClientRect(),range=document.createRange();range.selectNodeContents(e);const lines=[...range.getClientRects()].filter(r=>r.width&&r.height);return {text:e.textContent.trim(),left:r.left,right:r.right,width:document.documentElement.clientWidth,rootScroll:document.documentElement.scrollWidth,lineCount:lines.length,exposed:lines.length>0&&lines.every(r=>[.05,.25,.5,.75,.95].every(t=>{const x=r.left+r.width*t,y=(r.top+r.bottom)/2;return x>=0&&x<document.documentElement.clientWidth&&y>=0&&y<innerHeight&&e.contains(document.elementFromPoint(x,y));}))};});}
function assertVisible(g){assert(g.exposed&&g.left>=0&&g.right<=g.width&&g.rootScroll<=g.width,'The complete caption/translation is visible without horizontal clipping');}
let browser,ctx,page;
try{
 browser=await chromium.launch({headless:true});report.browser=browser.version();
 for(const width of [320,1280])for(const lang of langs){
  const initial=lang==='pl'?'en':'pl';ctx=await browser.newContext({viewport:{width,height:900}});ctx.setDefaultTimeout(12000);await ctx.tracing.start({screenshots:true,snapshots:true});
  await ctx.route('**/*',route=>{const r=route.request();if(new URL(r.url()).origin!==origin||!['GET','HEAD'].includes(r.method())){report.blocked.push({url:r.url(),method:r.method()});return route.abort();}return route.continue();});
  page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));
  await page.goto(url+`test.html?lang=${lang}&mode=${mode}`);await page.locator('input[name="testAnswer"][value="1"]').check();await page.locator('#testNext').click();const saved=await answers(page);assert(Object.values(saved).some(s=>JSON.parse(s).answers?.some(a=>typeof a==='boolean')));
  await page.goto(url+`reader.html?lang=${initial}&mode=${mode}`);await page.locator('[data-reader-tab="restart"]').click();
  await Promise.all([page.waitForURL(u=>u.searchParams.get('lang')===lang&&u.searchParams.get('mode')===mode&&u.searchParams.get('topic')==='restart'),page.locator('#langSelect').selectOption(lang)]);
  await page.locator('[data-reader-tab="restart"][aria-pressed="true"]').waitFor();assert.equal(await page.locator('#langSelect').inputValue(),lang);assert.equal(await page.locator('html').getAttribute('lang'),lang==='ua'?'uk':lang);assert.deepEqual(await answers(page),saved);
  const panel=page.locator('details.media-details'),summary=panel.locator(':scope > summary');assert.equal(await panel.getAttribute('open'),null);await center(summary);const summaryGeometry=await geometry(summary);assertVisible(summaryGeometry);const stem=`${mode}-${width}-${lang}`;await summary.screenshot({path:join(output,`${stem}-control.png`)});await summary.click();assert.equal(await panel.getAttribute('open'),'');
  const figures=panel.locator('figure.reader-visual');assert.equal(await figures.count(),2);const photos=[];const appVersion=new URL(await page.locator('script[src*="assets/js/training-app.js"]').getAttribute('src'),page.url()).searchParams.get('v');assert(appVersion);
  for(let index=0;index<2;index++){
   const figure=figures.nth(index),image=figure.locator('img');await image.evaluate(e=>e.decode());const dimensions=await image.evaluate(e=>({src:e.getAttribute('src'),naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight,width:e.clientWidth,height:e.clientHeight,objectFit:getComputedStyle(e).objectFit}));
   const imagePath=R.images[index].src,assetURL=new URL(dimensions.src,page.url());assert.equal(assetURL.origin,origin);assert.equal(assetURL.pathname,prefix+imagePath);assert.deepEqual([...assetURL.searchParams],[['v',appVersion]],'The original photo uses the active application asset version');dimensions.sourcePath=imagePath;dimensions.assetVersion=appVersion;assert(dimensions.naturalWidth>0&&dimensions.naturalHeight>0&&dimensions.width>0&&dimensions.width<=width);assert(Math.abs(dimensions.width/dimensions.height-dimensions.naturalWidth/dimensions.naturalHeight)<.01,'Original photo aspect ratio is preserved');source(imagePath);
   await center(image);await image.screenshot({path:join(output,`${stem}-photo-${index}.png`)});
   const translation=figure.locator('.reader-image-translation');await center(translation);const heading=await geometry(translation.locator('strong'));assertVisible(heading);const items=translation.locator('li');assert.equal(await items.count(),7);const text=[];
   for(let i=0;i<7;i++){const g=await geometry(items.nth(i));assert.equal(g.text,R.imageSteps[i][lang]);if(i===6)assert.equal(g.text,R.steps[6][lang],'Both photo reminders retain the complete post-restart connection check');assertVisible(g);text.push(g);}
   await translation.screenshot({path:join(output,`${stem}-translation-${index}.png`)});
   const caption=figure.locator('figcaption');await center(caption);const captionGeometry=await geometry(caption);assert.equal(captionGeometry.text,R.images[index].caption[lang]);assert.equal(await image.getAttribute('alt'),captionGeometry.text);assertVisible(captionGeometry);await caption.screenshot({path:join(output,`${stem}-caption-${index}.png`)});
   photos.push({index,dimensions,heading,translation:text,caption:captionGeometry,sourceFile:report.files[imagePath],screens:{photo:`${stem}-photo-${index}.png`,translation:`${stem}-translation-${index}.png`,caption:`${stem}-caption-${index}.png`}});
  }
  assert.equal(new URL(page.url()).searchParams.get('topic'),'restart');await summary.click();assert.equal(await panel.getAttribute('open'),null);assert.deepEqual(await answers(page),saved);
  const hasQuizTile=D.homeModes.find(m=>m.id===mode).pages.includes('test');let returnRoute;
  if(hasQuizTile){
   await page.locator('.home-return-cta').click();await page.waitForURL(u=>u.pathname.endsWith('/index.html')&&u.searchParams.get('lang')===lang&&u.searchParams.get('mode')===mode);await page.locator('a.tile[href*="test.html"]').click();returnRoute='actual-home-and-quiz-tile';
  }else{
   // First-arrival/Zgorzelec menus intentionally omit the Bogatynia quiz and reader modules.
   // Exercise real browser history for their standalone URLs, without inventing a menu entry.
   await page.goBack({waitUntil:'load'});assert.equal(new URL(page.url()).searchParams.get('lang'),initial);assert.equal(new URL(page.url()).searchParams.get('topic'),'restart');await page.goBack({waitUntil:'load'});returnRoute='actual-browser-history';
  }
  await page.waitForURL(u=>u.pathname.endsWith('/test.html')&&u.searchParams.get('lang')===lang&&u.searchParams.get('mode')===mode);assert.equal(await page.locator('#langSelect').inputValue(),lang);assert.deepEqual(await answers(page),saved);if(await page.locator('#testResume').count())await page.locator('#testResume').click();assert.match(await page.locator('#testProgressText').innerText(),/2\/30/);assert.deepEqual(await answers(page),saved);
  report.cases.push({mode,width,lang,actualLanguageNavigation:true,topicPreserved:true,openClose:true,realQuizLinkReturn:true,returnRoute,answersPreserved:true,summary:summaryGeometry,photos,sourceComparison:{photoLastStep:R.imageSteps[6][lang],procedureLastStep:R.steps[6][lang]},controlScreen:`${stem}-control.png`});await writeFile(join(output,'restart-photo-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({mode,width,lang,photos:2,pass:true}));
  await ctx.tracing.stop({path:join(output,`${stem}-trace.zip`)});await ctx.close();ctx=null;
 }
 assert.equal(report.cases.length,18);assert.deepEqual(report.errors,[]);assert.deepEqual(report.blocked,[]);report.acceptance=true;
}catch(e){report.failure=e.stack;process.exitCode=1;console.error(e.stack);if(page&&!page.isClosed())await page.screenshot({path:join(output,'failure.png'),timeout:10000}).catch(()=>{});}
finally{report.finished=new Date().toISOString();await writeFile(join(output,'restart-photo-report.json'),JSON.stringify(report,null,2));if(ctx){await ctx.tracing.stop({path:join(output,'failure-trace.zip')}).catch(()=>{});await ctx.close();}await browser?.close();server.closeAllConnections();await new Promise(done=>server.close(done));console.log(JSON.stringify({head,mode,cases:report.cases.length,acceptance:report.acceptance,failure:report.failure}));}

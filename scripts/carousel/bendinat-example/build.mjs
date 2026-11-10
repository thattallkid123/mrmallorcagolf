// Example build for the mmg-course-carousel skill (Bendinat, November 2026). Copy to outputs/carousels/<slug>/, put photos + logo.png in src/.
// Logo, wordmark and rule sit at the same position on every slide (LOGO_TOP). Figures here are from the Bendinat review, not live data.
import fs from 'fs';
import { chromium } from 'playwright';

const dir = 'outputs/carousels/bendinat';
const root = 'file:///' + process.cwd().replace(/\\/g, '/');
const abs = (f) => `${root}/${dir}/src/${f}`;

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Jost:wght@300;400;500&display=swap');
:root{--pine:#0B2D26;--cream:#F5F0E2;--gold:#D9B45F;}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1350px;position:relative;overflow:hidden;background:var(--pine);font-family:'Jost',sans-serif;color:var(--cream)}
.photo{position:absolute;inset:0;background-size:cover}
.grad{position:absolute;inset:0;background:linear-gradient(90deg,#0B2D26 0%,#0B2D26 30%,rgba(11,45,38,.88) 42%,rgba(11,45,38,.45) 54%,rgba(11,45,38,0) 68%)}
.grad2{position:absolute;left:0;right:0;bottom:0;height:260px;background:linear-gradient(0deg,rgba(11,45,38,.75),rgba(11,45,38,0))}
.col{position:absolute;left:100px;top:0;bottom:0;width:560px}
.logo{position:absolute;left:0;width:122px;height:122px;filter:brightness(1.35)}
.word{position:absolute;left:0;font-weight:400;font-size:21px;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}
.rule{position:absolute;left:0;width:150px;height:2px;background:var(--gold)}
.label{position:absolute;left:0;font-weight:500;font-size:23px;letter-spacing:.17em;text-transform:uppercase;color:var(--gold);white-space:nowrap}
.serif{font-family:'Cormorant Garamond',serif}
.foot{position:absolute;left:100px;bottom:62px;font-weight:400;font-size:25px;letter-spacing:.06em;color:var(--gold)}
h1{position:absolute;left:0;font-family:'Cormorant Garamond',serif;font-weight:600;color:var(--cream);line-height:.98;letter-spacing:-.01em}
`;

const LOGO_TOP = 130;
const head = () => { const top = LOGO_TOP; return `
<img class="logo" src="${abs('logo.png')}" style="top:${top}px">
<div class="word" style="top:${top + 168}px">Mr Mallorca Golf</div>
<div class="rule" style="top:${top + 235}px"></div>`; };

// real photo, never stretched: width/height keep the 3:4 ratio; left edge softened with a mask
const photo = (f, left, top, w, h, fade, vfade = '') =>
  `<img src="${abs(f)}" style="position:absolute;left:${left}px;top:${top}px;width:${w}px;height:${h}px;-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 ${fade}%)${vfade ? ',' + vfade : ''};-webkit-mask-composite:source-in;mask-composite:intersect">`;

const slides = [];

// 1 Cover
slides.push(`${photo('u3.jpg', 250, 0, 1012, 1350, 32)}<div class="grad2"></div>
<div class="col">${head()}
<div class="label" style="top:422px">Course Guide</div>
<h1 style="top:477px;font-size:140px">Bendinat</h1>
<div class="serif" style="position:absolute;left:0;top:660px;font-size:62px;line-height:1.14;font-weight:500">A PGA Professional’s<br>Honest Review</div></div>
<div class="foot">Mallorca · 2026</div>`);

// 2 Why I recommend it
slides.push(`${photo('u1.jpg', 560, 330, 720, 988, 9, 'linear-gradient(180deg,transparent 0%,#000 10%,#000 88%,transparent 100%)')}
<div class="col">${head()}
<div class="label" style="top:422px">Why I recommend it</div>
<h1 style="top:477px;font-size:84px;width:520px">The back nine is the reason.</h1>
<div class="serif" style="position:absolute;left:0;top:690px;font-size:36px;line-height:1.2;font-weight:500;width:460px">From the 11th there is far more space and driver comes out again. The 11th is a slight dogleg left from an elevated tee, with the mountains ahead.</div>
<div class="serif" style="position:absolute;left:0;top:1000px;font-size:40px;line-height:1.14;font-style:italic;font-weight:500;color:var(--gold)">Narrow front nine.<br>Open back nine.</div></div>
<div class="foot">Bendinat · Mallorca</div>`);

// 3 Why it stands out
const sec = (t, b, top) => `<div style="position:absolute;left:0;top:${top}px;width:330px;height:1.5px;background:var(--gold)"></div><div class="serif" style="position:absolute;left:3px;top:${top + 10}px;font-size:36px;font-weight:500;color:var(--gold);font-variant-numeric:lining-nums">${t}</div><div class="serif" style="position:absolute;left:3px;top:${top + 54}px;font-size:28px;line-height:1.2;font-weight:500;width:380px">${b}</div>`;
slides.push(`${photo('u7.jpg', 380, 0, 1012, 1350, 34)}<div class="grad2"></div><div class="col">${head()}
<div class="label" style="top:422px">Why it stands out</div>
<h1 style="top:470px;font-size:92px;width:480px;line-height:.95">Three holes<br>to remember.</h1>
<div class="serif" style="position:absolute;left:3px;top:680px;font-size:32px;line-height:1.2;font-weight:500;width:400px">My pick of the front nine, then two from the back nine.</div>
${sec('9th', 'Short par 4. Hit over the trees to cut off distance.', 820)}
${sec('12th', 'Short par 3, downhill towards the water.', 950)}
${sec('18th', 'Par 5 finish. I birdied it.', 1080)}
</div><div class="foot" style="font-size:24px;bottom:40px">Course notes</div>`);

// 4 At a glance
const cell = (big, small, x, y, bigSize, mt) => `<div style="position:absolute;left:${x}px;top:${y}px;width:470px;height:225px;text-align:center"><div class="serif" style="font-size:${bigSize}px;line-height:.92;font-weight:500;margin-top:${mt}px">${big}</div>${small}</div>`;
const smallCap = (t, mt) => `<div style="font-size:18px;letter-spacing:.17em;text-transform:uppercase;color:#0B2D26;font-weight:400;margin-top:${mt}px">${t}</div>`;
slides.push(`${photo('u10.jpg', 380, 0, 700, 933, 30, 'linear-gradient(180deg,#000 88%,transparent 100%)')}
<div class="col">${head()}
<div class="label" style="top:422px">Bendinat</div>
<h1 style="top:460px;font-size:136px;width:760px;white-space:nowrap;line-height:1">At a glance</h1>
<div class="serif" style="position:absolute;left:0;top:630px;font-size:48px;font-weight:500;white-space:nowrap">15 min from Palma</div></div>
<div style="position:absolute;left:70px;top:818px;width:940px;height:450px;background:var(--cream);color:#0B2D26">
 <div style="position:absolute;left:470px;top:24px;width:1.5px;height:402px;background:var(--gold)"></div>
 <div style="position:absolute;left:36px;right:36px;top:225px;height:1.5px;background:var(--gold)"></div>
 ${cell('Peak €123 /<br>Low €67', smallCap('2026 Price guide', 16), 0, 0, 64, 40)}
 ${cell('7.5/10', smallCap('Andy’s rating', 20), 470, 0, 112, 36)}
 ${cell('Par 69', smallCap('Handicap limit 36', 16), 0, 225, 92, 28)}
 ${cell('1986', smallCap('Opened, Hawtree design', 18), 470, 225, 92, 28)}
</div>`);

// 5 Full guide
slides.push(`<div class="photo" style="background-image:url(${abs('u2.jpg')});background-position:100% 50%"></div><div class="grad" style="background:linear-gradient(90deg,#0B2D26 0%,#0B2D26 25%,rgba(11,45,38,.8) 45%,rgba(11,45,38,.2) 62%,rgba(11,45,38,0) 75%)"></div>
<div class="col" style="width:440px">${head()}
<div class="label" style="top:422px;font-size:25px">Read the full guide</div>
<h1 style="top:477px;font-size:100px;width:460px">Bendinat review</h1>
<div class="serif" style="position:absolute;left:0;top:720px;font-size:52px;line-height:1.14;font-weight:500">Full course guide<br>on the blog.</div>
<div class="serif" style="position:absolute;left:0;top:900px;font-size:44px;font-weight:500">mrmallorcagolf.com</div>
<div class="serif" style="position:absolute;left:0;top:975px;font-size:52px;font-style:italic;font-weight:500;color:var(--gold)">Link in bio</div></div>
<div class="foot" style="bottom:70px">@realgolfbendinat</div>
<div style="position:absolute;left:580px;top:130px;width:450px;height:1090px;transform:perspective(1800px) rotateY(-9deg) rotateZ(5deg);transform-origin:50% 50%">
 <div style="position:absolute;inset:0;background:#111;border-radius:68px;border:7px solid #2b2b2b;box-shadow:0 30px 70px rgba(0,0,0,.55);overflow:hidden">
  <div style="position:absolute;left:12px;top:12px;right:12px;bottom:12px;border-radius:56px;overflow:hidden;background:#fff">
   <div style="height:96px;background:#fff;position:relative;font-family:Jost,sans-serif;color:#111">
     <div style="position:absolute;left:34px;top:14px;font-weight:500;font-size:19px">9:41</div>
     <div style="position:absolute;left:50%;top:0;width:150px;height:34px;margin-left:-75px;background:#111;border-radius:0 0 20px 20px"></div>
     <div style="position:absolute;left:18px;right:18px;top:48px;height:38px;border-radius:12px;background:#e9e9ec;text-align:center;font-size:19px;line-height:38px">mrmallorcagolf.com</div>
   </div>
   <img src="${abs('article.png')}" style="width:100%;display:block">
  </div></div></div>`);

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
for (let i = 0; i < slides.length; i++) {
  fs.writeFileSync(`${dir}/slide-${i + 1}.html`, `<!doctype html><meta charset="utf-8"><style>${css}</style><body>${slides[i]}</body>`);
  await p.goto(`${root}/${dir}/slide-${i + 1}.html`, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: `${dir}/slide-${i + 1}.png` });
}
await b.close();
console.log('built');

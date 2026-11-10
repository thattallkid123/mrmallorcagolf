// Example build for the mmg-course-carousel skill (Bendinat, November 2026). Copy to outputs/carousels/<slug>/, put photos + logo.png in src/.
// Logo, wordmark and rule sit at the same position on every slide (LOGO_TOP). Figures here are from the Bendinat review, not live data.
import fs from 'fs';
import { chromium } from 'playwright';
const dir = 'outputs/carousels/bendinat';
const root = 'file:///' + process.cwd().replace(/\\/g, '/');
const variant = process.argv[2] || 'B';
const photo = `${root}/${dir}/src/u1.jpg`;
const pos = '0% 50%'; const tx = variant === 'A' ? 80 : 430;
const html = `<!doctype html><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1920px;position:relative;overflow:hidden;background:#0B2D26;font-family:'Cormorant Garamond',serif;color:#F5F0E2}
.p{position:absolute;inset:0;background:url(${photo}) ${pos}/cover no-repeat}
.g{position:absolute;left:0;right:0;bottom:0;height:640px;background:linear-gradient(0deg,rgba(11,45,38,.92) 0%,rgba(11,45,38,.7) 40%,rgba(11,45,38,0) 100%)}
.r{position:absolute;left:${tx + 4}px;width:170px;height:3px;background:#D9B45F}
h1{position:absolute;left:${tx}px;font-weight:600;font-size:150px;line-height:1;letter-spacing:-.01em}
</style><body><div class="p"></div><div class="g"></div>
<div class="r" style="top:1560px"></div><h1 style="top:1600px">Bendinat</h1></body>`;
fs.writeFileSync(`${dir}/highlight-${variant}.html`, html);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
await p.goto(`${root}/${dir}/highlight-${variant}.html`, { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: `${dir}/highlight.png` });
await b.close();

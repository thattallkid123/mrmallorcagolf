import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
await p.goto('https://www.mrmallorcagolf.com/guides/son-vida-review', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
// hide floating overlays (WhatsApp bubble) so they do not cover the article photo
await p.evaluate(() => {
  document.querySelectorAll('body *').forEach((e) => {
    const c = getComputedStyle(e);
    if (c.position === 'fixed' && e.getBoundingClientRect().top > 300) e.style.display = 'none';
  });
});
await p.screenshot({ path: 'outputs/carousels/son-vida/src/article.png' });
await b.close();

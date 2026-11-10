// Example build for the mmg-course-carousel skill (Bendinat, November 2026). Copy to outputs/carousels/<slug>/, put photos + logo.png in src/.
// Logo, wordmark and rule sit at the same position on every slide (LOGO_TOP). Figures here are from the Bendinat review, not live data.
import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
await p.goto('https://www.mrmallorcagolf.com/guides/bendinat-review', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
await p.evaluate(() => {
  document.querySelectorAll('body *').forEach((e) => {
    const c = getComputedStyle(e);
    if (c.position === 'fixed' && e.getBoundingClientRect().top > 300) e.style.display = 'none';
  });
});
await p.screenshot({ path: 'outputs/carousels/bendinat/src/article.png' });
await b.close();

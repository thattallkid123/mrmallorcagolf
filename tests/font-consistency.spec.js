const { expect, test } = require('@playwright/test')

// Runtime regression guard for a font bug found and fixed 2026-08-26:
// a class applied to a raw <button> (or other non-inheriting element) with
// no font-family declared anywhere falls back to the browser's default UI
// font (Arial), because buttons do not inherit font-family from their
// parent by default. This can't be caught reliably by static CSS/regex
// analysis - see scripts/check-font-consistency.mjs for why (it covers the
// companion bug, missing font-weight on .eyebrow/.label classes, which
// *is* reliably catchable statically). This spec renders real pages and
// reads real computed styles instead, the same way the bug was originally
// found by hand.
//
// One route sample per unique page template is enough: font rules live in
// shared component/global CSS, not per-page content, so a bug in a shared
// button class shows up wherever that class is used. Route list mirrors the
// representative sweep done 2026-08-26.

const EN_ROUTES = [
  '/',
  '/about',
  '/coaching',
  '/contact',
  '/play-with-a-pro',
  '/golf-courses',
  '/guides',
  '/guides/best-golf-courses-mallorca',
  '/guides/alcanada-review',
  '/tools',
  '/tools/course-selector',
  '/tools/golf-cost-calculator',
  '/tools/green-fees',
  '/tools/handicap-checker',
  '/tools/hotel-recommender',
  '/tools/golf-day-builder',
  '/signature-day',
  '/plan-your-trip',
  '/subscribe',
  '/privacy-policy',
  '/terms',
]

// Font rules are shared CSS, invariant across locales - a light spot-check
// on the routes most likely to carry locale-specific tier/note copy (where
// the original bug surfaced) is enough to catch a locale-only regression
// (e.g. a locale override reintroducing a hardcoded style).
const LOCALE_SPOT_CHECKS = ['de', 'zh'].flatMap((locale) =>
  ['/', '/play-with-a-pro', '/contact', '/golf-courses'].map((p) => `/${locale}${p}`)
)

const ROUTES = [...EN_ROUTES, ...LOCALE_SPOT_CHECKS]

async function findFontViolations(page) {
  return page.evaluate(() => {
    const bodyStyle = getComputedStyle(document.body)
    const sans = bodyStyle.getPropertyValue('--font-sans').trim()
    const serif = bodyStyle.getPropertyValue('--font-serif').trim()
    const norm = (v) => v.split(',')[0].replace(/["']/g, '').trim().toLowerCase()
    const sansFirst = norm(sans)
    const serifFirst = norm(serif)

    const violations = []
    const root = document.querySelector('main') || document.body
    // Any element that actually renders text is a candidate: buttons are
    // the known non-inheriting case, but this also catches the same bug on
    // any other element type without needing to special-case tag names.
    // Third-party widgets (Leaflet's map controls/attribution) ship their
    // own bundled CSS and are not ours to restyle - same exception category
    // as check-font-usage.mjs's documented API-template exclusion.
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
      acceptNode(el) {
        if (el.closest('script, style, noscript')) return NodeFilter.FILTER_REJECT
        if (el.closest('.leaflet-container')) return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      },
    })
    let el
    while ((el = walker.nextNode())) {
      const directText = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join('')
      if (!directText) continue
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) continue
      const first = norm(getComputedStyle(el).fontFamily)
      if (first !== sansFirst && first !== serifFirst) {
        violations.push({
          tag: el.tagName,
          cls: (el.className && el.className.toString ? el.className.toString() : '').slice(0, 80),
          txt: directText.slice(0, 40),
          fontFamily: getComputedStyle(el).fontFamily,
        })
      }
    }
    return violations
  })
}

test.describe('font consistency - no element silently falls back off-brand', () => {
  for (const route of ROUTES) {
    test(`${route} has no elements rendering in a non-brand font`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' })
      await page.waitForLoadState('load', { timeout: 15000 }).catch(() => {})
      const violations = await findFontViolations(page)
      expect(violations, JSON.stringify(violations, null, 2)).toEqual([])
    })
  }
})

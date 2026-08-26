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
// One route sample per unique *page template* is enough for shared
// component/global CSS bugs (a bug in a shared button class shows up
// wherever that class is used, regardless of which page renders it). But
// guide articles each carry their own hand-written body content, which can
// contain a page-specific inline style or one-off markup a template sample
// would never catch - so every guide slug is listed explicitly rather than
// sampled, for real full-site coverage (added 2026-08-26 in response to an
// explicit "sweep the whole site" ask, expanding on the initial
// representative sweep).

const ALL_GUIDE_SLUGS = [
  '5-day-mallorca-golf-itinerary',
  // 'a-day-at-son-gual' intentionally excluded: the folder exists under
  // src/app/(en)/guides/ but is empty (no page.jsx), 404s, and nothing in
  // the codebase references the slug - orphaned scaffolding, not a live
  // route. Found via this spec 2026-08-26; flagged to Andy rather than
  // deleted, since removing a directory wasn't part of the font-audit ask.
  'alcanada-review',
  'beginners-guide',
  'best-golf-courses-mallorca',
  'best-time-play-golf-mallorca',
  'cost-guide',
  'course-comparison',
  'golf-andratx-review',
  'golf-club-hire-mallorca',
  'golf-cost-mallorca',
  'golf-trip-planning-mallorca',
  'is-mallorca-good-for-golf',
  'mallorca-course-map',
  'on-course-coaching-mallorca',
  'play-with-a-pro-explained',
  'santa-ponsa-1-review',
  'son-antem-west-review',
  'son-gual-review',
  'son-muntaner-review',
  'son-termes-review',
  't-golf-calvia-review',
  'trip-planner',
]

const EN_ROUTES = [
  '/',
  '/about',
  '/coaching',
  '/contact',
  '/play-with-a-pro',
  '/golf-courses',
  '/guides',
  ...ALL_GUIDE_SLUGS.map((slug) => `/guides/${slug}`),
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
// All 6 translated locales (EN is master, NL/SV are unlinked-but-live SEO
// pages - see nl-sv-locales-seo-only), covering both shared-CSS routes and
// one guide article per locale, since translated guide body content is a
// separate data source (guide-post-content-localized.js) from English and
// could carry its own one-off markup issue a CSS-only argument wouldn't rule out.
const LOCALE_SPOT_CHECKS = ['de', 'es', 'fr', 'nl', 'sv', 'zh'].flatMap((locale) =>
  ['/', '/play-with-a-pro', '/contact', '/golf-courses', '/guides/alcanada-review'].map(
    (p) => `/${locale}${p}`
  )
)

const ROUTES = [...EN_ROUTES, ...LOCALE_SPOT_CHECKS]

async function findFontViolations(page) {
  // Wait for webfonts to finish loading before reading computed styles.
  // Without this, a page checked while the custom font is still downloading
  // (more likely under parallel load) reads as "wrong font" even though it
  // resolves correctly a moment later - a real flake seen while wiring this
  // into CI (2026-08-26), not a real bug.
  await page.evaluate(() => document.fonts.ready)
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
      // Explicitly poll until the stylesheet is actually active (not just
      // loaded event fired) before reading computed styles. Under
      // concurrent Playwright load (multiple projects/routes hitting one
      // dev/prod server at once) `waitForLoadState('load')` can time out
      // and its .catch above silently swallows that, so without this the
      // check can run against a page whose CSS hasn't finished applying
      // yet (a real FOUC race, found while wiring this into CI 2026-08-26 -
      // flaked only under multi-project concurrency, never in isolation).
      await page.waitForFunction(
        () => {
          const ff = getComputedStyle(document.body).fontFamily.toLowerCase()
          return ff.includes('jost') || ff.includes('cormorant')
        },
        { timeout: 20000 }
      )
      const violations = await findFontViolations(page)
      expect(violations, JSON.stringify(violations, null, 2)).toEqual([])
    })
  }
})

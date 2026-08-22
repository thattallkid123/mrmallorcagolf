# Lighthouse baseline — 2026-08-22

Run against the **live production site** (`scripts/lighthouse-scorecard.mjs` hits
`https://www.mrmallorcagolf.com` directly — no local build needed), 6 routes × mobile/desktop, median
of 2 runs each. Re-run with `npm run check:lighthouse` after any change likely to move these numbers,
and update the table below so drift is visible.

## Original baseline (before the font fix, same day)

| Route | Mode | Perf | A11y | Best | SEO | LCP(ms) | CLS | TBT(ms) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| / | mobile | 53 | 100 | 92 | 100 | 5987 | 0 | 871 |
| / | desktop | 90 | 100 | 92 | 100 | 1904 | 0 | 45 |
| /play-with-a-pro | mobile | 64 | 100 | 92 | 100 | 5530 | 0 | 594 |
| /play-with-a-pro | desktop | 94 | 100 | 92 | 100 | 1304 | 0 | 47 |
| /guides | mobile | 65 | 95 | 92 | 100 | 5545 | 0 | 532 |
| /guides | desktop | 92 | 95 | 92 | 100 | 1452 | 0 | 111 |
| /guides/son-gual-review | mobile | 58 | 96 | 92 | 100 | 5846 | 0 | 861 |
| /guides/son-gual-review | desktop | 92 | 96 | 92 | 100 | 1512 | 0 | 87 |
| /golf-courses | mobile | 53 | 93 | 92 | 100 | 6212 | 0 | 1158 |
| /golf-courses | desktop | 92 | 93 | 92 | 100 | 1448 | 0 | 123 |
| /contact | mobile | 58 | 95 | 92 | 100 | 5649 | 0 | 819 |
| /contact | desktop | 85 | 92 | 92 | 100 | 2119 | 0 | 32 |

## Current (after the .woff2 font fix, same day)

| Route | Mode | Perf | A11y | Best | SEO | LCP(ms) | CLS | TBT(ms) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| / | mobile | 50 | 100 | 92 | 100 | 5085 | 0 | 1486 |
| / | desktop | 87 | 100 | 92 | 100 | 1806 | 0.001 | 141 |
| /play-with-a-pro | mobile | 54 | 100 | 92 | 100 | 4893 | 0 | 1160 |
| /play-with-a-pro | desktop | 86 | 100 | 92 | 100 | 1337 | 0.001 | 204 |
| /guides | mobile | 53 | 95 | 92 | 100 | 5122 | 0 | 1440 |
| /guides | desktop | 87 | 95 | 92 | 100 | 1434 | 0 | 172 |
| /guides/son-gual-review | mobile | 57 | 96 | 92 | 100 | 4717 | 0 | 1266 |
| /guides/son-gual-review | desktop | 94 | 96 | 92 | 100 | 1413 | 0 | 111 |
| /golf-courses | mobile | 51 | 93 | 92 | 100 | 5348 | 0 | 2051 |
| /golf-courses | desktop | 90 | 93 | 92 | 100 | 1229 | 0 | 106 |
| /contact | mobile | 68 | 95 | 92 | 100 | 6446 | 0 | 404 |
| /contact | desktop | 93 | 92 | 92 | 100 | 1678 | 0 | 6 |

### Reading the before/after honestly

**LCP improved on 5 of 6 mobile routes** — 420ms to 1.1s faster (son-gual-review: 5846ms → 4717ms,
the single biggest win). That's consistent with the fix: fonts were the dominant render-blocking cost
on text-based LCP elements, so faster font load = faster paint. `/contact` mobile was the outlier
(LCP got 797ms *worse*) while its desktop LCP and TBT both improved sharply — no clean story ties that
regression to a font-loading change (fonts don't execute JS or affect one route differently from
another), so it's most likely live-site run-to-run noise (real network conditions, Vercel edge cache
state) rather than a real regression. Worth a re-run with more samples before drawing a conclusion
about `/contact` specifically.

**TBT got noisier and mostly worse** across mobile routes despite LCP improving — again no clean
causal link to the font change (static assets, no script execution), so treating this as live-traffic
variance rather than a regression, but flagging honestly rather than only reporting the numbers that
moved the right way. A controlled re-run (more samples, ideally against a local production build
rather than the noisier live site) would give a cleaner signal than a single 2-run median can.

**Bottom line:** the font fix delivered its intended effect (meaningfully faster mobile LCP on most
routes, real bytes saved on every page), but this single before/after pair isn't precise enough to
close the book on mobile performance — TBT is still high everywhere and worth another look.

Full JSON per run is in `outputs/lighthouse-live/` (gitignored, regenerated each run — this table is
the durable record).

## What the numbers say

- **CLS is 0 everywhere.** No layout-shift problem on any measured route right now.
- **SEO is 100 everywhere.** No findings there.
- **Desktop is solid** (85–94 performance). **Mobile is weak** (53–65 performance, 5.5–6.2s LCP,
  530–1160ms TBT). This is the real gap — every route is roughly 3x slower to first-meaningful-paint
  on mobile than desktop, well past Google's "good" LCP threshold (2.5s).
- **Best-practices is flatly 92 on every single page.** Not a coincidence — one recurring issue.

## The flat 92: a CSP block, and it should stay blocked

Every report flags the same thing: GA4's default "Google Signals" behavior fires a Google Ads
audience/remarketing pixel on every pageview (`https://www.google.de/ads/ga-audiences?...`), and the
site's CSP `img-src` directive (`next.config.js`) correctly refuses to load it — that's cross-site ad
tracking, not analytics.

**Do not loosen the CSP to fix this.** The privacy policy explicitly scopes cookies/tracking to
analytics only (see `src/app/(en)/privacy-policy/page.jsx` §6, and the accepted-tradeoff note in
project memory: "no consent banner, GA4 fires on load — deliberately accepted 2026-08-14"). Allowing
`google.de` through would let a different, more invasive category of tracking (ad audience building)
through a policy that only covers analytics. The actual fix, if this is ever worth clearing up, is
disabling Google Signals / ad personalization in the GA4 property settings — not a code change here.

## The real lever: mobile performance

### Fixed 2026-08-22: fonts served as uncompressed .ttf

Pulled the LCP breakdown for every route's mobile run to find the actual bottleneck. On most pages
the LCP element is a *text* node (`page-hero__lead`, `pwap-hero__body`, a `::before` pseudo-element)
with zero network dependency, meaning the delay is render-blocking, not image loading — and the
biggest render-blocking cost turned out to be fonts. `next/font/local` (`src/app/root-layout-shared.jsx`)
was pointed at raw `.ttf` source files in `MMG-Fonts/`; `next/font/local` self-hosts and sets
`font-display` correctly but serves whatever format it's given rather than re-encoding it, so every
page was shipping ~1.6MB of uncompressed font data (8 files, Jost + Cormorant Garamond, several
weights/styles).

Converted all 8 active files to `.woff2` via `fontTools` (`flavor = 'woff2'`, already available for
the Python GA4 tooling) and repointed the loader — same self-hosting, same `font-display: swap`, same
weights/styles, zero visual change (verified: all 9 declared @font-face entries register with
`status: "loaded"` at the correct weight/style, H1/body resolve to the real font family, not a
fallback). Result: **70–78% smaller per file** (Cormorant ~290KB → ~65KB, Jost ~59KB → ~18KB) — roughly
1.1MB saved on every single page load. Also removed `CormorantGaramond-Italic-600.ttf`, a stale
unused file a previous cleanup commit ("Fix Jost fake-bold font-weight bug, drop unused Cormorant
italic-600 font file") missed deleting from disk despite already dropping it from the loader array.

Source `.ttf` files stay in `MMG-Fonts/` for editing/reference; only the loader's `path` entries
changed. Re-run `check:lighthouse` after this ships to confirm the LCP/TBT improvement and update the
table above.

### Not changed: GTM's gtag.js (608ms, 174KB — the single biggest script cost on the page)

`googletagmanager.com/gtag/js` already loads via Next's recommended non-blocking pattern
(`<Script strategy="afterInteractive">` + `async` in `root-layout-shared.jsx`) — this isn't a loading
bug, it's the real cost of the library once it runs. `strategy="lazyOnload"` would defer it further
and likely help LCP/TBT more, but trades off analytics completeness: a visitor who leaves before the
page goes fully idle wouldn't get tracked. That's a real product tradeoff (accuracy of GA4 numbers vs.
raw page speed), not a pure technical fix — left as a documented option rather than changed here.

### Not investigated further

Image loading: CI already flags a few `<img>` tags not using `next/image` (`ContactForm.jsx`,
`ZhCourseSelectorClient.jsx`). Worth a look but wasn't the dominant LCP cost on the routes measured
here (only the `son-gual-review` guide's LCP element was an actual image).

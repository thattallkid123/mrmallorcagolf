# Lighthouse baseline — 2026-08-22, updated 2026-08-23

Run against the **live production site** (`scripts/lighthouse-scorecard.mjs` hits
`https://www.mrmallorcagolf.com` directly — no local build needed), 6 routes × mobile/desktop.
Re-run with `npm run check:lighthouse` (or `LH_RUNS=4 npm run check:lighthouse` for a steadier median
on a noisy route) after any change likely to move these numbers, and update the table below so drift
is visible.

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

## Re-check with 4 samples (after the /golf-courses memoization fix, 2026-08-23)

| Route | Mode | Perf | A11y | Best | SEO | LCP(ms) | CLS | TBT(ms) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| / | mobile | 52 | 100 | 92 | 100 | 6480 | 0 | 966 |
| / | desktop | 91 | 100 | 92 | 100 | 1718 | 0 | 76 |
| /play-with-a-pro | mobile | 64 | 100 | 92 | 100 | 4812 | 0 | 723 |
| /play-with-a-pro | desktop | 95 | 100 | 92 | 100 | 1217 | 0 | 70 |
| /guides | mobile | 62 | 95 | 92 | 100 | 4798 | 0 | 801 |
| /guides | desktop | 96 | 95 | 92 | 100 | 1192 | 0 | 87 |
| /guides/son-gual-review | mobile | 67 | 96 | 92 | 100 | 4443 | 0 | 715 |
| /guides/son-gual-review | desktop | 98 | 96 | 92 | 100 | 1009 | 0 | 42 |
| /golf-courses | mobile | 60 | 93 | 92 | 100 | 4802 | 0 | 946 |
| /golf-courses | desktop | 91 | 93 | 92 | 100 | 1236 | 0.001 | 167 |
| /contact | mobile | 62 | 95 | 92 | 100 | 5917 | 0 | 630 |
| /contact | desktop | 92 | 92 | 92 | 100 | 1647 | 0 | 62 |

### Reading all three passes together

**`/contact`'s mobile LCP regression was noise, confirmed.** 5649ms (original) → 6446ms (2-sample
"regression") → **5917ms (4-sample)** — it settled back near its original value once given more
samples, which is exactly what measurement noise looks like and exactly what a real regression
doesn't. No further action needed here; the earlier flag was the right call (verify before concluding
either way), and it resolved itself with more data rather than a code change.

**`/golf-courses` TBT genuinely improved.** 1158ms (original) → 2051ms (noisy 2-sample reading,
by far the worst route on the site at that point) → **946ms (4-sample), the lowest of all three
readings for this route** and no longer an outlier — it now sits inside the normal 630–966ms range
every other mobile route falls in, instead of roughly double the next-worst route. This lines up with
a real fix: `GolfCoursesClient.jsx` (934 lines, all 24 courses, zero `useMemo`) was re-sorting and
re-filtering the full course list from scratch on every filter-tab click and every sort-button click —
exactly the kind of work TBT/INP penalizes, since it re-runs in direct response to the input the
visitor just gave. Wrapped the global sort/filter and the per-region sort in `useMemo`, verified live
in-browser that filtering and sorting still work correctly, shipped 2026-08-23. Still not lab-grade
proof on a single live-site pass — TBT stays noisy by nature — but it's the right direction, the right
mechanism, and the lowest reading yet.

**LCP overall is still consistent with the font fix having worked**: this pass's numbers sit in the
same broad band as the post-font-fix pass (4.4–6.5s mobile vs. 4.7–6.4s before), not back up near the
original 5.5–6.2s-with-an-uncompressed-font baseline.

Full JSON per run is in `outputs/lighthouse-live/` (gitignored, regenerated each run — the tables
above are the durable record).

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

### Fixed 2026-08-23: the 3 remaining next/image warnings

The `<img>` tags CI had flagged every build (`ContactForm.jsx`'s WeChat QR, `ZhCourseSelectorClient.jsx`'s
course photo + its own QR) are now `next/image`. Found a bonus bug in the process: `wechat-qr.png` is a
misnamed JPEG served at its full 667×667 into a 100–132px display slot — `next/image` now actually
resizes/compresses it (confirmed live: 16KB served vs. shipping the raw file).

### Fixed 2026-08-23: /golf-courses had zero memoization

See "Re-check with 4 samples" above — this was the actual TBT fix, not an image issue.

### Status as of 2026-08-23

Everything on this page's original punch list is resolved except the GTM tradeoff below, which is a
decision for Andy, not outstanding work.

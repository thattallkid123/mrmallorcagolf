# Lighthouse baseline — 2026-08-22

First committed baseline. Run against the **live production site** (`scripts/lighthouse-scorecard.mjs`
hits `https://www.mrmallorcagolf.com` directly — no local build needed), 6 routes × mobile/desktop,
median of 2 runs each. Re-run with `npm run check:lighthouse` after any change likely to move these
numbers, and update this table so drift is visible.

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

Not investigated in this pass — that's a separate, larger piece of work (likely image loading: the
CI build already flags several `<img>` tags not using `next/image` on `ContactForm.jsx` and
`ZhCourseSelectorClient.jsx`, and TBT in the 500–1200ms range on every route suggests heavy
client-side JS execution before interactivity). Worth a dedicated pass given LCP is nearly 3x the
"good" threshold on mobile across the board — that's the single biggest lever available for organic
conversion, ahead of any copy or metadata change.

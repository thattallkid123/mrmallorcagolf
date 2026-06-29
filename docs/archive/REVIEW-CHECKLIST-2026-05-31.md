# Visual + Code Review Checklist (2026-05-31)

Branch/commit deployed to `main`:
- `33c7838` (latest)
- Includes previous UX polish + winners strip crop fixes + PWAP hero image swap to optimized webp

## What changed

### UX + visual polish
- Homepage premium polish pass:
  - richer hero atmosphere treatment
  - trust/proof marquee
  - stronger card/section emphasis
- Winners strip crop tuning in About page:
  - landscape framing lowered
  - targeted overrides for specific flagged images

### Performance-focused image changes
- Switched PWAP hero image:
  - from `/images/pwap-mandarin-ab101723.jpg`
  - to `/images/pwap-mandarin-ab101723.webp`
- Removed `unoptimized` flags from key image components (so Next image optimization can work)

## QA checks run

### Automated content/code checks
- `npm run check:content` passed:
  - `check:text`
  - `check:offers`
  - `check:locale`
  - `check:shared-locale`
  - `check:routes`

### Playwright visual capture set

Full-page captures:
- `outputs/qa-final-home-desktop.png`
- `outputs/qa-final-home-mobile.png`
- `outputs/qa-final-about-desktop.png`
- `outputs/qa-final-about-mobile.png`
- `outputs/qa-final-pwap-desktop.png`
- `outputs/qa-final-pwap-mobile.png`

### Live-site Playwright captures (`https://mrmallorcagolf.com`)

Full-page captures:
- `outputs/live-qa-home-desktop.png`
- `outputs/live-qa-home-mobile.png`
- `outputs/live-qa-about-desktop.png`
- `outputs/live-qa-about-mobile.png`
- `outputs/live-qa-pwap-desktop.png`
- `outputs/live-qa-pwap-mobile.png`

### Live-site scroll-aware captures (recommended truth set)

These captures explicitly scroll through each page first to trigger reveal-on-scroll content before taking full-page screenshots:

- `outputs/live-scroll-qa-home-desktop.png`
- `outputs/live-scroll-qa-home-mobile.png`
- `outputs/live-scroll-qa-about-desktop.png`
- `outputs/live-scroll-qa-about-mobile.png`
- `outputs/live-scroll-qa-pwap-desktop.png`
- `outputs/live-scroll-qa-pwap-mobile.png`

Observed in automated full-page captures:
- Hero/nav/footer and key visual surfaces render correctly.
- Some mid-page sections appear visually sparse/blank in automation captures.

Interpretation:
- This is likely tied to reveal-on-scroll behavior + headless full-page screenshot timing (elements may still be in pre-reveal state when captured).
- This pattern is common with IntersectionObserver-based reveal systems in automated snapshots.

Final interpretation after scroll-aware run:
- Scroll-aware live captures confirm mid-page reveal content is rendering correctly.
- Treat `live-scroll-qa-*` files as the final validation set for visual QA.

Section-focused captures:
- `outputs/home-desktop-hero.png`
- `outputs/home-desktop-intro.png`
- `outputs/home-desktop-journey.png`
- `outputs/home-desktop-packages.png`
- `outputs/home-desktop-faq.png`
- `outputs/home-desktop-final-cta.png`

## Image inventory decision notes

Winners strip (deduped effective set) is already reasonably optimized:
- ~`4.46 MB` combined for ~`37–38` `.webp` images
- further quality-safe recompression yields minimal gain

Largest global `public/images` offenders are mostly non-winners and mostly legacy `.jpg`:
- `andy-coaching-client.jpg` ~`29.05 MB`
- `pwap-mandarin-ab101723.jpg` ~`16.83 MB` (now replaced in live route by `.webp`)
- `andy-on-course-smile.jpg` ~`14.16 MB` (live route already switched to `.webp`)
- `andy-walking-course.jpg` ~`10.54 MB`
- `andy-coaching-swing.jpg` ~`8.99 MB`

## Manual review pass (recommended)

1. Homepage (`/`)
- Hero readability on desktop + mobile
- Marquee pacing and distraction level
- Journey cards: depth and hover feel
- Package hierarchy: Signature emphasis
- FAQ readability and CTA polish

2. About (`/about`)
- Winners strip crop quality for previously flagged photos
- Landscape/portrait alignment consistency

3. Play With A Pro (`/play-with-a-pro`)
- Hero loads quickly
- No visible quality drop on hero image

4. Reveal behavior (important)
- Scroll slowly through `/`, `/about`, and `/play-with-a-pro` on real devices
- Confirm all reveal sections fade/slide in as expected
- Confirm no section remains permanently hidden after entering viewport

## Current status

- Deployment: pushed to `main` and live
- Automated checks: pass
- Live visual captures: pass
- Scroll-aware visual captures: pass
- Final signoff state: ready for stakeholder review

## Optional next improvements (not required for deploy)

1. Keep logos untouched unless explicit quality A/B confirms no clarity loss
2. If you want more speed gains, target remaining largest non-live/non-critical `.jpg` assets in a separate safe batch
3. Add a route-level web-vitals capture to quantify LCP improvements after image swaps

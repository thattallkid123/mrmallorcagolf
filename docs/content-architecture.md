# Content Architecture

This repo used to be vulnerable to two expensive classes of regressions:

- pricing and offer facts drifting between pages
- encoded or duplicated copy being fixed in one place and reappearing elsewhere

The current setup is designed to stop that cycle.

## Single Sources Of Truth

- `src/lib/offers-content.js`
  - canonical offer IDs
  - solo/group/multi-day pricing
  - contact-form labels
  - play-page metadata and price-bearing shared prose
  - structured data offer catalog

- `src/lib/golf-courses-data.js`
  - canonical course records
  - source pills used to derive price and distance metadata

- `src/lib/golf-courses-helpers.js`
  - shared derivation helpers for course price, distance, and slug/meta lookups

- `src/lib/experience-copy.js`
  - shared localized promo/sidebar copy for guides, about, and golf-course conversion sections

## Runtime Consumers

- homepage content pulls offer pricing and featured-course pricing from shared helpers
- play-with-a-pro content pulls package prices and shared price-bearing body copy from offers
- contact content and API labels pull experience options from offers
- about page sidebar CTA pulls from shared experience copy
- guide sidebar CTA pulls from shared experience copy
- golf-courses sidebar and end CTA pull from shared experience copy

If a future edit needs the same fact or marketing sentence in more than one place, move it into a shared content/helper file instead of copying it again.

## Guardrails

- `npm run check:text`
  - blocks obvious mojibake patterns and UTF-8 BOM-prefixed files

- `npm run check:offers`
  - blocks offer/pricing drift across homepage, play page, contact flow, metadata, and shared CTA consumers

- `npm run check:content`
  - runs text, offer, and locale structure checks together

- `npm run check:ready`
  - runs the full pre-release content/build verification

- `.githooks/pre-commit`
  - runs `npm run check:content` before a local commit is created

- `.github/workflows/verify-content.yml`
  - runs content checks, locale release checks, and a production build on pushes and pull requests

## Safe Editing Workflow

1. Update shared data first.
2. Run `npm run check:content`.
3. Run `npm run build` before push/deploy.

## Automatic Setup

- `npm install` and `npm ci` now run `npm run prepare`
- `prepare` configures `git config core.hooksPath .githooks` for this repo
- if hooks ever stop running locally, rerun `npm run prepare`

## Anti-Pattern To Avoid

Do not repair broken text at render time if the source file can be fixed or normalized instead.
That is how mojibake turns into whack-a-mole.

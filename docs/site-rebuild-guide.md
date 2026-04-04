# Site Rebuild Guide

## Purpose

This guide explains what changed during the multilingual rebuild of Mr Mallorca Golf, why those changes were made, and what the project structure now looks like.

It is written as a permanent reference for:

- future development
- future design passes
- translation work
- blog uploads
- release safety

## Outcome

The site has been moved from a partly duplicated, partly drifting structure into a much more controlled shared-content setup.

The important end state is:

- English is the source of truth
- non-English pages follow the English structure
- shared renderers are used wherever possible
- content lives in shared data files rather than one-off page components
- release checks exist to catch mojibake, hidden English fallback, and locale drift before publishing

## What Changed

### 1. Shared page architecture

The main page families were centralized so they are no longer maintained as many separate page copies:

- homepage
- about
- coaching
- contact
- play-with-a-pro
- guides index
- guide articles
- guide review posts
- golf courses

This means future edits should usually happen in shared content/data files and shared renderers, not by editing many locale route files separately.

### 2. English-first content model

English now acts as the base content model for the site.

That means:

- English defines the structure
- localized versions inherit that structure
- translations should mainly replace text, not layout

This is especially important for:

- blog block order
- image sequence
- CTA structure
- fact boxes
- related article sections

### 3. Shared guide and blog renderers

The live review posts and the upcoming guide articles now use shared renderers.

Key files:

- [GuideArticleView.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/GuideArticleView.jsx)
- [GuidePostView.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/GuidePostView.jsx)
- [PostLayout.jsx](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/app/guides/PostLayout.jsx)

This made it possible to:

- align layout across languages
- reduce design drift
- control image treatment in one place
- refine the editorial/luxury feel site-wide

### 4. Shared content/data files

Main shared content/data files now include:

- [homepage-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/homepage-content.js)
- [about-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/about-content.js)
- [coaching-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/coaching-content.js)
- [contact-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/contact-content.js)
- [play-with-a-pro-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/play-with-a-pro-content.js)
- [guides-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guides-content.js)
- [guide-article-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content.js)
- [guide-article-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-article-content-localized.js)
- [guide-post-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content.js)
- [guide-post-content-localized.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/guide-post-content-localized.js)
- [golf-courses-data.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-data.js)
- [golf-courses-content.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-content.js)
- [golf-courses-translations.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/src/lib/golf-courses-translations.js)

### 5. Locale hygiene and release checks

Several checks were added or tightened so the site can be validated before release.

Important scripts:

- [check-text-corruption.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-text-corruption.js)
- [check-shared-locale-fallbacks.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/check-shared-locale-fallbacks.js)
- [locale-release-check.js](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/scripts/locale-release-check.js)

Important npm commands:

- `npm run check:text`
- `npm run check:locale`
- `npm run check:shared-locale`
- `npm run check:i18n-release`
- `npm run build`

These checks are intended to catch:

- mojibake
- broken symbols
- hidden English fallback in non-English pages
- missing shared locale coverage
- route/build issues

### 6. Blog and guide visual refinement

The shared blog templates were refined to feel more editorial and premium.

Main visual changes:

- calmer article width
- cleaner sidebar spacing
- better figure/caption treatment
- improved shared crop handling
- less banner-like image defaults
- mobile-safe media behavior

Important note:

- half-width images should only be used when intentionally paired with surrounding text
- full-width is now the safe default unless a later custom layout intentionally changes that

### 7. Vall d'Or integration

Vall d'Or was added properly to the golf-courses data instead of only being mentioned in copy.

That included:

- course data
- region summaries
- translations
- image asset
- quick-link anchor handling

## Branch Structure

The repository now has clearer branch names.

### Current branches

- `main`
  - the new real/live version
  - includes i18n and the premium redesign work

- `legacy-live-pre-i18n`
  - the preserved old live version
  - use this if you ever need to inspect or restore the old non-i18n site

- `live-i18n-premium`
  - a clearly named branch holding the new multilingual premium version

- `i18n-premium-draft`
  - a continued working/staging branch for future refinement if needed

## What This Means Going Forward

The intended workflow is now much simpler:

1. Update the English source.
2. Add or improve the localized text.
3. Run release checks.
4. Review the preview.
5. Push to `main` only when it is safe.

The project should no longer depend on keeping many separate locale page files in sync by hand.

## Remaining Philosophy

The system is now designed so:

- English changes should flow more safely through the site
- future languages should inherit structure from English instead of inventing their own
- translation work should be about quality of language, not rescuing broken layout
- future blog uploads should be content updates, not architecture projects

That is the main reason for all the restructuring work.

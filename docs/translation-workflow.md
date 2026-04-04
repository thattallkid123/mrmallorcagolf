# Translation Workflow

## Core Model

- one shared page structure
- one English source
- one localized content layer
- one shared renderer system

The goal is simple:

- English defines structure
- localized pages mirror English structure
- only the text changes by locale unless there is a deliberate design reason not to

## Current State

The multilingual architecture is now in place for:

- homepage
- about
- contact
- coaching
- play-with-a-pro
- guides index
- upcoming guide articles
- live review posts
- golf-courses

English is now the source of truth across the shared content system.

## Source Files

### English source files

- `src/lib/homepage-content.js`
- `src/lib/about-content.js`
- `src/lib/coaching-content.js`
- `src/lib/contact-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/guides-content.js`
- `src/lib/guide-article-content.js`
- `src/lib/guide-post-content.js`
- `src/lib/golf-courses-content.js`
- `src/lib/golf-courses-data.js`

### Localized source files

- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content-localized.js`
- locale sections inside the main shared page files above
- `src/lib/golf-courses-translations.js`

## Translation Standard

Translations should be:

- native sounding
- golf-appropriate
- calm and premium
- structurally aligned to English

Translations should not be:

- literal
- brochure-like
- tacky
- structurally different from English

## Recommended Translation Process

1. Finalize the English page first.
2. Translate only the changed sections or changed page.
3. Use the premium translation prompt.
4. Run the second-pass translation review prompt.
5. Insert the final localized copy into the shared source files.
6. Run:
   - `npm run check:i18n-release`
   - `npm run build`
7. Review the hosted preview on desktop and mobile.

## Prompt Files

- [translation-master-prompt.txt](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-master-prompt.txt)
- [translation-language-notes.txt](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-language-notes.txt)
- [translation-qa-checklist.txt](c:/Users/andyg/Desktop/cursor/mrmallorcagolf-real/docs/translation-qa-checklist.txt)

## Translation Order

Best working order:

1. Spanish
2. German
3. French
4. Dutch
5. Swedish
6. Chinese

## Quality Rules

- Course names remain unchanged.
- Prices, dates, and stats must remain accurate.
- CTA tone should match the body tone.
- Fact boxes, image order, block order, and captions should stay aligned to English.
- Hidden English fallback is a bug.
- Mojibake is a bug.

## Release Checks

Run all of these before pushing:

- `npm run check:text`
- `npm run check:locale`
- `npm run check:shared-locale`
- `npm run check:i18n-release`
- `npm run build`

## Best Practical Advice

If usage is limited:

- use Claude or another model to draft and refine translation
- use Codex to place it into the repo correctly
- use Codex to run the checks and catch layout, route, and locale drift issues

# Mr Mallorca Golf Site Operations

This is a Claude Desktop friendly copy of the site operations skill.

Use it when working on the Mr Mallorca Golf site so future chats understand:

- English is the source of truth
- localized pages should mirror English structure
- shared content files should be edited instead of duplicated page files
- mojibake and hidden English fallback are bugs
- the release checks must be run before publishing

## Main Shared Files

- `src/lib/homepage-content.js`
- `src/lib/about-content.js`
- `src/lib/coaching-content.js`
- `src/lib/contact-content.js`
- `src/lib/play-with-a-pro-content.js`
- `src/lib/guides-content.js`
- `src/lib/guide-article-content.js`
- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content.js`
- `src/lib/guide-post-content-localized.js`
- `src/lib/golf-courses-data.js`
- `src/lib/golf-courses-content.js`
- `src/lib/golf-courses-translations.js`

## Shared Renderers

- `src/app/guides/GuideArticleView.jsx`
- `src/app/guides/GuidePostView.jsx`
- `src/app/guides/PostLayout.jsx`
- `src/components/FillImageFrame.jsx`
- `src/styles/globals.css`

## Required Workflow

1. Finalize English first.
2. Update only the necessary localized sections.
3. Keep non-English pages structurally aligned to English.
4. Run:

```bash
npm run check:i18n-release
npm run build
```

5. Review on desktop and mobile.

## Translation Standard

- premium
- natural
- golf-appropriate
- not literal
- not brochure-like

Preserve:

- facts
- names
- prices
- dates
- structure

## Blog Media Rule

- Full-width media is the safe default.
- Half-width media should only be used when text intentionally pairs with it.

## Branch Meaning

- `main` = current live site
- `legacy-live-pre-i18n` = old site before multilingual rebuild
- `live-i18n-premium` = named branch for the multilingual premium site
- `i18n-premium-draft` = staging/work branch

## Best Low-Usage Advice

You do not need Codex for every future content task.

Use Codex mainly for:

- adding blogs into the correct shared repo files
- checking locale parity and image references
- running release checks before push
- fixing code, layout, or component issues

Use Claude or another model for:

- first-draft translation
- second-pass language refinement
- copy brainstorming outside the repo

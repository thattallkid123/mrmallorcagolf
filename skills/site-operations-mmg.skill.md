# Mr Mallorca Golf Site Operations

Use this skill when updating, extending, translating, or publishing the Mr Mallorca Golf site.

## Use This Skill For

- updating English marketing pages
- adding new guide articles
- adding new live review posts
- updating golf-courses content
- improving translations
- checking locale parity against English
- running release checks before pushing live

## Core Rules

1. English is the source of truth.
2. Update shared content files, not duplicated locale pages.
3. Localized pages should mirror the English structure unless there is a very deliberate exception.
4. Run release checks before pushing.
5. Treat hidden English fallback or mojibake as bugs, not acceptable compromises.

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

## Update Workflow

1. Finalize the English change first.
2. Update the matching localized content only where needed.
3. Keep structure, image rhythm, fact boxes, captions, and CTA layout aligned to English.
4. Run:

```bash
npm run check:i18n-release
npm run build
```

5. Review the preview on desktop and mobile.
6. Only then push or merge.

## Translation Standard

Translate for golfers, not tourists.

Target voice:

- premium
- direct
- credible
- natural
- not literal
- not brochure-like

Preserve:

- course names
- person names
- facts
- prices
- dates
- structure

Avoid:

- AI-sounding contrast phrasing
- tacky tourism copy
- hidden English fallback
- mojibake
- one-off locale layout drift

## Blog / Guide Rules

- Full-width editorial media is the safe default.
- Half-width media should only be used when intentionally paired with text.
- Do not let localized review posts bypass `getGuidePostContent(...)`.
- Do not let localized article pages invent a different block order than English.

## Release Safety

Use these checks:

- `npm run check:text`
- `npm run check:locale`
- `npm run check:shared-locale`
- `npm run check:i18n-release`
- `npm run build`

Important scripts:

- `scripts/check-text-corruption.js`
- `scripts/check-shared-locale-fallbacks.js`
- `scripts/locale-release-check.js`

## Branch Meaning

- `main` = current real/live site
- `legacy-live-pre-i18n` = old site before multilingual rebuild
- `live-i18n-premium` = named branch for the new multilingual premium site
- `i18n-premium-draft` = ongoing staging/work branch

## Low-Usage Advice

You do not need Codex for every future copy task.

Use Codex mainly for:

- placing final English and translated copy into the repo
- adding new guides or review posts into the shared structure
- checking route, anchor, image, and locale parity
- running the release checks

Use another model first if needed for:

- drafting translations
- rewriting tone
- first-pass article expansion

## Best Practice

If a page differs from English structurally, fix the shared system first.

If a translation sounds awkward, fix the language second.

Do not paper over architectural drift with route-level patches unless there is no safe alternative.

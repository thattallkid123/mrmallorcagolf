# Guide Content Rules

This file exists to stop guide structure drift and note-style drift.
For the wider site pattern beyond guides, including homepage/service pages/golf-courses, see `docs/multilingual-content-architecture.md`.

## Scope

English masters:
- `src/lib/guide-article-content.js`
- `src/lib/guide-post-content.js`

Localized overlays:
- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content-localized.js`

## Rules

1. English is the source of truth.
2. Do not add localized guide content that does not exist in English.
3. English guide files own block `type`, order, layout fields, and shared media structure.
4. Localized guide files should contain translated copy overlays only, plus the few locale-specific `href`/media values needed to preserve current routes and output.
5. If you add, remove, or reorder any guide/review `blocks` item, update every localized overlay so it has one block slot per English block.
6. Empty localized block overlay objects (`{}`) are allowed only when that block has no locale-specific text.
7. Placeholder localized repair text is only a temporary deploy-safe bridge. Replace it with proper locale copy before the work is considered finished.

## Blocks Most Likely To Drift

Pay extra attention to:
- `notes`
- `table`
- `cta`
- `facts`
- `pull`
- `heading`
- image blocks

These are the block types most likely to get added in English and missed in localized overlay slots.

## Notes Block Rules

`notes` blocks should stay tightly practical.

Use these four themes:
- best tee time
- wind tip
- where visitors lose shots
- one realistic clubhouse or post-round tip

Avoid:
- generic hype
- invented psychology
- made-up visitor behaviour
- unsupported clubhouse claims
- course comparisons that are not already grounded in the English source

Process:
1. Write and approve the English notes first.
2. Translate those same points into `de`, `es`, `fr`, `nl`, `sv`, and `zh`.
3. Do not improvise different advice per locale.

## Required Checks

After guide structure or localized guide edits, run:

```powershell
npm run check:guide-parity
npm run check:content
npm run check:i18n-release
```

## Commit Expectation

If a commit changes either:
- `src/lib/guide-article-content.js`
- `src/lib/guide-post-content.js`

then it should usually also change the matching localized file, unless the work is intentionally English-only and not exposed on non-English routes.

## Current Architecture

The guide system now separates canonical structure from locale copy:

- `src/lib/guide-article-content.js` and `src/lib/guide-post-content.js` define the canonical page structure.
- `src/lib/guide-article-content-localized.js` and `src/lib/guide-post-content-localized.js` export same-length localized overlays.
- `src/lib/guide-content-localization.js` merges the English structure with the locale overlay at render time.

Localized block overlays must not include structural fields such as:
- `type`
- `containerStyle`
- `imageStyle`
- `fit`

This keeps:
- adding a new block happens once, not seven times
- structure drift becomes much harder
- parity checks become simpler
- translators only touch text, not layout structure

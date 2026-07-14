# Guide Content Rules

This file exists to stop guide structure drift and note-style drift.

## Scope

English masters:
- `src/lib/guide-article-content.js`
- `src/lib/guide-post-content.js`

Localized mirrors:
- `src/lib/guide-article-content-localized.js`
- `src/lib/guide-post-content-localized.js`

## Rules

1. English is the source of truth.
2. Do not add localized guide content that does not exist in English.
3. If you add, remove, or reorder any guide/review `blocks` item, update the localized mirror in the same change.
4. Do not rely on the runtime merge to hide missing translated blocks.
5. Placeholder localized repair text is only a temporary deploy-safe bridge. Replace it with proper locale copy before the work is considered finished.

## Blocks Most Likely To Drift

Pay extra attention to:
- `notes`
- `table`
- `cta`
- `facts`
- `pull`
- `heading`
- image blocks

These are the block types most likely to get added in English and missed in localized files.

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

## Longer-Term Fix

The current system duplicates full block arrays across English and localized content files. That makes drift easy: one block can be inserted into English and silently missed in six locale files.

A stronger long-term approach is to separate:
- block structure
- translatable text

That means:
1. Keep one canonical block structure per guide/post.
2. Store only locale text values separately.
3. Render each locale from the same structure plus locale strings.

Why this helps:
- adding a new block happens once, not seven times
- structure drift becomes much harder
- parity checks become simpler
- translators only touch text, not layout structure

This is useful, but it is a bigger refactor. It is not required for the current release.

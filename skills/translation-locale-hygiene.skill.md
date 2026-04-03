# Translation And Locale Hygiene

Use this skill when updating English marketing copy, translating it into other languages, or verifying that localized pages match the English structure without mojibake, English fallback strings, or stale layout drift.

## Goal

Ship non-English pages that:
- mirror the English page structure and layout
- keep the correct local language on every page
- avoid mojibake, placeholder junk, and broken punctuation
- read naturally for golfers, not like literal machine translation

## Source Of Truth

1. English shared content is always the source of truth.
2. Localized shared content should change only where the text itself needs translating.
3. Layout, imagery, and section structure should inherit from English wherever the system supports it.

## Workflow

1. Finalize the English page first.
2. Update the localized shared content for the target language.
3. Keep the structure aligned with English.
4. Run the full locale release check:

```bash
npm run check:i18n-release
```

5. Spot-check the page in the browser.
6. Only then move on to the next language.

## Translation Rules

- Translate for golfers, not tourists.
- Keep the tone calm, premium, direct, and credible.
- Avoid literal translation if it sounds unnatural.
- Avoid AI-style contrast phrasing and brochure language.
- Preserve all facts, names, prices, dates, and course names.
- Keep golf terminology natural in the target language.
- Preserve headings, section order, CTA structure, captions, and fact boxes.

## Quality Bar

Before approving a translation, check:
- Does it sound like it was written in that language originally?
- Would a local golfer find it natural and credible?
- Are there any English fallback strings left?
- Are there any broken symbols, bad arrows, broken euros, or bad degree signs?
- Do all sections still mirror the English page?

## Repo Checks

The full release check runs:
- `check:text`
- `check:locale`
- `check:shared-locale`
- `build`

## Important Files

- `scripts/check-text-corruption.js`
- `scripts/check-locale-content.js`
- `scripts/check-shared-locale-fallbacks.js`
- `scripts/locale-release-check.js`

## Practical Reminder

If a localized page looks structurally different from English, fix the shared source first.
If a localized page reads awkwardly, fix the translation second.
Do not paper over structural problems with route-level copy patches.

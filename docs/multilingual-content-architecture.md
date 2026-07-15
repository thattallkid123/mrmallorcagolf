# Multilingual Content Architecture

This document defines the preferred pattern for multilingual content across the site.

The goal is simple:

- English owns structure.
- Locales own translated copy.
- Shared data stays shared.
- Checks catch drift before it reaches production.

Currently implemented:

- guide articles
- guide review posts
- homepage
- play-with-a-pro
- about
- coaching
- contact
- golf courses
- guides index
- plan-your-trip

## Merge Modes

There are two merge modes in the codebase now:

- `mergeGuideContent`
- `mergeLocalizedContent`

Use `mergeGuideContent` for guide systems where structure must stay tightly locked to English and parity checks enforce it.

Use `mergeLocalizedContent` for larger page content where the aim is still English-first structure, but the migration needs to preserve a few legacy locale-only keys or array-length differences while we reduce duplication safely.

## Use These Content Types

### 1. Canonical structured content

Use this for pages or sections with repeated layout, fixed ordering, or block arrays.

Examples:
- homepage sections
- Play With A Pro page sections
- golf-courses hero/FAQ/explorer copy
- guide articles and review posts
- about page chapters
- contact page form sections

Rules:
- Keep one English source of truth for structure.
- Locales should not redefine block order, block type, layout props, or repeated section shape unless there is a deliberate product reason.
- If English gains a new section or block, every locale overlay must gain the matching slot in the same change.

### 2. Locale overlays

Use overlays for translated text and a small number of locale-specific values that are genuinely content, such as:

- titles
- body copy
- captions
- CTA labels
- related-link titles
- locale-specific `href` values where the route differs by locale

Rules:
- Overlays should be same-shape or same-length relative to the English structure they localize.
- Empty overlay objects are acceptable when a block has no locale-specific text.
- Do not store structural keys in overlays unless there is a deliberate exception and it is documented.

Structural keys to keep in English:
- `type`
- `containerStyle`
- `imageStyle`
- `fit`
- repeated section ordering
- shared image/layout metadata unless the locale truly needs a different asset

### 3. Shared factual data

Use shared data files for facts that should not be translated independently.

Examples:
- course pricing
- scorecards
- access rules
- offer pricing
- structured course metadata

Rules:
- Keep these facts in one canonical place.
- Pages should derive visible labels or pricing from the shared source instead of hardcoding duplicates across locales.

### 4. UI translation dictionaries

Use small translation maps for isolated interface labels rather than full page overlays.

Examples:
- button labels
- filter labels
- small tool UI text
- region labels

Rules:
- Prefer this for compact UI surfaces with little or no page structure.
- Do not force a large overlay model onto simple translation-only files.

## When To Use Which Pattern

Use English structure plus locale overlays when:
- the page is long
- most locales follow the same layout
- sections are repeated objects or arrays
- English edits have historically caused locale drift

Use translation dictionaries when:
- the surface is mostly labels
- there is no meaningful repeated content structure
- the page already derives most content from shared data

Use shared factual data when:
- the value should stay identical across locales except for formatting
- a pricing, route, or course fact should never be hand-maintained in seven places

## Recommended Priority

Best next candidates after the current rollout:

1. any future long-form multilingual landing page added to the site
2. any page that starts growing repeated section arrays or block-like content in more than one locale

Lower priority or already reasonably separated:

- `src/lib/golf-courses-translations.js`
- `src/lib/course-selector-translations.js`
- shared course/pricing/scorecard data files
- `src/lib/signature-day-content.js`

## Maintenance Rules

When editing a structured multilingual content file:

1. Update the English structure first.
2. Update the locale overlays in the same change.
3. Preserve shared facts in their canonical source.
4. Snapshot or compare resolved output before and after refactors when the file is large.
5. Run the relevant checks before considering the work done.
6. Prefer the strict guide merge when the structure is already aligned; use the broader page merge only when preserving existing locale output requires it.

For golf-courses specifically:

1. Keep `src/lib/golf-courses-content.js` as the canonical page-content structure.
2. Keep `src/lib/golf-courses-content-localized.js` to text overlays only.
3. Let `src/app/(en)/golf-courses/GolfCoursesClient.jsx` derive filter-region labels from `regionHeaders`, not a second translation map.
4. Keep per-course card translation copy in `src/lib/golf-courses-translations.js` until those card bodies need a larger structural refactor of their own.

## Checks

Current guide-specific checks:

- `npm run check:guide-parity`
- `npm run check:content`
- `npm run check:i18n-release`

The site now also relies on resolved getter checks for broader page content, including:

- `scripts/audit-locale-parity.js`
- `scripts/check-shared-locale-fallbacks.js`
- `scripts/check-localized-overlay-integrity.js`

What each broad check is for:

- `scripts/check-shared-locale-fallbacks.js`
  Scans resolved locale getters for obvious English fallback strings.
- `scripts/audit-locale-parity.js`
  Compares resolved locale output shape against English.
- `scripts/check-localized-overlay-integrity.js`
  Validates raw overlay files themselves: supported locales only, no missing locale overlays, no unknown keys, and no type/array-shape mismatches against English canonical content.

The overlay-integrity script carries a short, explicit allowlist for a few legacy exceptions that still exist for output-preservation reasons. If you add to that allowlist, document why the exception is necessary and prefer removing the exception in a later cleanup rather than letting it grow casually.

## Why This Pattern Wins

It reduces:
- structure drift
- hidden locale regressions
- duplicated maintenance
- “fix English, forget six locales” mistakes

It improves:
- translation quality
- change safety
- review clarity
- long-term upkeep

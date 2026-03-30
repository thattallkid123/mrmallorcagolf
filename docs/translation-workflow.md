# Translation Workflow

## Source of Truth

- English content is the source copy.
- Non-English locales should be updated from structured translation data, not by duplicating full page components.

## Review Flow

1. Update the English source.
2. Draft translations for changed keys only.
3. Review each locale for meaning, tone, and local phrasing.
4. Run `npm run check:text`.
5. Run `npm run check:locale`.
6. Run `npm run build`.
7. Commit and push as a checkpoint.

## Translation Standards

- Preserve meaning before preserving sentence shape.
- Prefer natural local phrasing over literal translation.
- Keep golf terminology consistent by locale.
- Avoid leaving English CTA or section labels in non-English routes.
- For high-value pages, do a human review before publishing.

## Current Priorities

- Migrate the homepage family to shared i18n data.
- Migrate golf-courses to shared locale data.
- Reduce duplicated page components over time.

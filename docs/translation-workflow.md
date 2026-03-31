# Translation Workflow

## Simple idea

- One shared page structure.
- One English source.
- One translation data file per language.
- Fewer duplicated React pages.

This is the direction of the draft branch.

## Source of truth

- English is the source copy.
- Non-English locales should be updated from structured content files, not by duplicating whole page components.

## Current state

The draft branch already has shared English content files for:

- homepage
- about
- contact
- coaching
- play-with-a-pro
- guides index
- the 3 live English guide posts
- part of golf-courses

The next later phase is moving non-English routes onto the same system.

## Update flow

1. Update the English source content.
2. Draft translations only for the changed keys or changed sections.
3. Review each locale for meaning, tone, and golf terminology.
4. Run `npm run check:text`.
5. Run `npm run check:locale`.
6. Run `npm run build`.
7. Commit and push to the draft branch as a checkpoint.
8. Release slowly, page family by page family.

## Translation standards

- Meaning matters more than literal sentence shape.
- Natural local phrasing is better than stiff direct translation.
- Course names should not be translated.
- Credentials such as `UK PGA Advanced Professional` should stay consistent.
- Golf terms should be used consistently by language.
- Avoid leaving English labels, CTAs, or body paragraphs inside non-English routes.

## Quality checks

- Use `check:text` to catch broken characters.
- Use `check:locale` to catch obvious locale mistakes.
- Compare the draft page against the live/original page before release.
- For important pages, do a final human review before publishing.

## Best release pattern

- Keep using a draft branch.
- Push small checkpoints often.
- Review the branch preview.
- Merge or release only one slice at a time.

This lowers risk and makes it much easier to spot what changed if something looks wrong.

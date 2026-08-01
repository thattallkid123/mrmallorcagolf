# Content Workflow

This file is the quick map. For course review work, `COURSE_BLOG_PIPELINE.md` is the full source of truth.

## Before Any Content Work

Read these first:

1. `BRANCHES.md`
2. `COURSE_BLOG_PIPELINE.md`
3. `MMG_BRAND_VOICE_GUIDELINES.md`
4. `CLAUDE.md`

For workspace/project selection, read:

```text
$env:MMG_WORKSPACE_ROOT\PROJECTS.md
```

Use this repo:

```text
$env:MMG_WORKSPACE_ROOT\mrmallorcagolf-real
```

## Course Guide Checklist

For a new or newly translated course review:

1. Confirm target branch or branches.
2. Confirm whether the guide is live-ready or draft-only.
3. Process images according to `COURSE_BLOG_PIPELINE.md`.
4. Add or update the English guide first.
5. Add all supported locale versions only after the English version is approved, unless Andy explicitly asks for all languages in one pass.
6. Keep guide ordering identical across locales.
7. Add the guide image mapping in `GuidesIndexView.jsx`.
8. Add metadata and route files in the same pattern as existing guide posts.
9. Update course data/docs if the course has now been played by Andy.
10. Run all checks before pushing.

## Current Locale Set

English default plus:

```text
de, es, fr, nl, sv, zh
```

Do not add a localized page that is not present in English.

## Shared Branch Content Rule

Course guide content usually belongs on both `main` and `itinerary-preview`.

For shared content changes:

1. Finish and test on one branch.
2. Commit the content-only change.
3. Cherry-pick that commit to the other branch.
4. Re-run checks on the second branch.
5. Push both branches.

Do not use a broad merge if the commit also contains branch-specific homepage, itinerary, or service-positioning changes.

## Guide Ordering

When adding a course review to the guide index, keep the order consistent in every locale file and any shared image maps.

For the Son Antem West task, place it:

```text
Golf Andratx
Son Antem West
Son Termes
```

## Required Checks

Run these before pushing:

```powershell
npm run check:content
npm run build
npm run check:visual
```

If localized guide content changed, also run the i18n release check:

```powershell
npm run check:i18n-release
```

## Playwright

Playwright is installed in this repo.

Use:

```powershell
npm run check:visual
```

The visual smoke test checks `/` and `/about` on desktop and mobile Chrome for:
- broken key images
- horizontal overflow
- credential logo rendering
- winners proof strip rendering
- career strip rendering
- console errors

Add more Playwright tests when a new page or flow becomes important enough to protect.

## Deployment

Vercel deploys automatically from GitHub.

Production:

```text
main -> www.mrmallorcagolf.com
```

Preview:

```text
itinerary-preview -> Vercel preview / branch URL
```

After pushing, confirm deployment status with Vercel before handing over a link.

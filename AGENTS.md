# Agent Instructions

Before working in this repo, read these files:

1. `README.md`
2. `CLAUDE.md`
3. `BRANCHES.md`
4. `CONTENT_WORKFLOW.md`
5. `MMG_WORK_STATUS.md`

For course reviews, translations, or guide index work, also read:

1. `COURSE_BLOG_PIPELINE.md`
2. `MMG_BRAND_VOICE_GUIDELINES.md`

Workspace selection lives one folder up:

```text
C:\Users\andyg\Desktop\cursor\PROJECTS.md
```

Branch rules:

- `main` is the live coaching/current site.
- `itinerary-preview` is the future trip-led / itinerary-led version.
- Shared factual content, course reviews, translations, course data, docs, tooling, and bug fixes usually belong on both branches.
- Itinerary-specific homepage, planner, Plan Trip, service-positioning, and copy experiments should not be copied to `main` unless Andy explicitly asks.

Before changing branches or stashing, inspect:

```powershell
git status --short --branch
git stash list
```

Never overwrite, reset, or discard uncommitted work unless Andy explicitly asks.

Before pushing meaningful changes, run:

```powershell
npm run check:content
npm run build
npm run check:visual
```

For localized guide work, also run:

```powershell
npm run check:i18n-release
```

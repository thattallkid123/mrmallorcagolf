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

- As of 2026-05-22, `main` is the active Mr Mallorca Golf source of truth and already includes the itinerary-focused release.
- Start every MMG site coding session by checking `git status --short --branch`; if not already there, switch to `main` before editing unless Andy explicitly asks for another branch.
- `main` is the Vercel live branch / production baseline.
- Old focus branches such as `itinerary-focused-may-2026`, `itinerary-preview`, and `old-pwap-focused-may-2026` are historical/reference branches, not active work targets.
- For larger or risky changes, create a short-lived branch from `main` using the `codex/` prefix, then merge or PR it back deliberately.

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

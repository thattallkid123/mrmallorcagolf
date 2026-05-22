# Branch Workflow

As of 2026-05-22, keep this repo simple:

- `main` is the active Mr Mallorca Golf source of truth.
- `main` is the Vercel live branch / production baseline for `www.mrmallorcagolf.com`.
- `main` already includes the itinerary-focused release.
- Do not use old focus branches for new work unless Andy explicitly asks.

Before editing, check:

```powershell
git status --short --branch
git switch main
```

## Active Branch

Use `main` for normal MMG site work:

- Homepage visual fixes
- Itinerary planner and Plan Trip journey
- Contact form option changes
- Play With A Pro positioning
- Course reviews and translations
- Shared image assets
- SEO metadata fixes
- Tests, tooling, docs, and deployment checks

For larger or risky changes, create a short-lived branch from `main` using the `codex/` prefix, then merge or open a PR back to `main` deliberately.

## Historical Branches

These branches are archive/reference only:

- `itinerary-focused-may-2026`
- `itinerary-preview`
- `old-pwap-focused-may-2026`
- `legacy-live-pre-i18n`

Do not make routine changes on these branches. If a future chat lands there accidentally, switch back to `main` before editing.

## GitHub / PR Guidance

Direct push to `main` is fine for small, low-risk content fixes after checks pass.

Use a GitHub PR when:

- A change affects contact/enquiry behavior
- A change rewrites main page positioning
- A change adds a new system, script, or dependency
- Andy wants to compare versions before promoting something live

If using a PR, keep it small and name it clearly, for example:

```text
Fix homepage mobile CTA spacing
```

Always run the checks before merging or pushing:

```powershell
npm run check:content
npm run build
npm run check:visual
```

# Mr Mallorca Golf

Next.js 15 App Router site for `mrmallorcagolf.com`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15 App Router
- React 18
- Plain CSS in `src/styles/globals.css`
- Deployed on Vercel via GitHub

## Structure

- `src/app/` - pages and routes
- `src/components/` - shared components
- `src/lib/` - content/data/helpers
- `src/styles/globals.css` - CSS variables and shared styles
- `public/` - static assets

## Agent / Content Docs

Before substantial work, read:

- `BRANCHES.md` - what belongs on `main` vs `itinerary-preview`
- `CONTENT_WORKFLOW.md` - content checklist and shared branch rules
- `docs/ROUTING_AND_CONTENT_SYSTEM.md` - locale routes, guide slug system, and parity checks
- `COURSE_BLOG_PIPELINE.md` - full course review publishing process
- `G:\My Drive\Mr Mallorca Golf\Systems & Planning\MMG_BRAND_VOICE_GUIDELINES.md` - canonical writing rules and brand voice
- `CLAUDE.md` - project context and recurring commands

## Pricing Workflow

When pricing changes, use this order:

1. `docs/pricing-change-checklist.md` - step-by-step pricing update flow
2. `docs/content-architecture.md` - pricing visibility map
3. `docs/CONTENT_STRUCTURE.md` - source order for course data and pricing masters
4. `CLAUDE.md` - repo-wide pricing handoff notes
5. `docs/pricing-surfaces-inventory.md` - quick reminder list of every surface to update

For Santa Ponsa 2 and 3, keep the pricing recorded in the master/reference layer even if the public website does not show a standard bookable green-fee pill. The access path is restricted; the pricing itself is not secret.

Workspace selection lives one level up:

```text
$env:MMG_WORKSPACE_ROOT\PROJECTS.md
```

## Checks

Run before pushing meaningful changes:

```bash
npm run check:content
npm run build
npm run check:visual
```

Quick gate used before deploy:

```bash
npm run check:ready
```

For localized guide work, also run:

```bash
npm run check:i18n-release
```

If port `3000` is occupied, run visual checks on another port:

```powershell
$env:PLAYWRIGHT_PORT='3100'; npm.cmd run check:visual
```

## Deployment

Vercel auto-deploys from GitHub.

- `main` deploys production
- `itinerary-preview` deploys preview / branch builds

See `BRANCHES.md` before moving changes between branches.

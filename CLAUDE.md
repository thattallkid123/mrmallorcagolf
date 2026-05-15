# Mr Mallorca Golf — Claude Session Context

## Quick commands

| Task | Command |
|------|---------|
| Build locally | `npm run dev` |
| Pre-deploy check | `npm run predeploy` |
| Deploy | `git add -A && git commit -m "..." && git push` |
| GA4 report | `python ga4_analytics/ga4_report.py` |

**Local path:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

## Sources of truth

- **Brand voice & writing:** `MMG_BRAND_VOICE_GUIDELINES.md` (repo root, also in Drive `Active/`)
- **Course review pipeline:** `COURSE_BLOG_PIPELINE.md` (mandatory read before any course post)
- **Work tracking:** `MMG_WORK_STATUS.md`
- **Drive (Google Docs):** `C:\Users\andyg\Documents\Mr Mallorca Golf\Active\` — brand, pricing, master docs
- **Git commits:** Read `CHANGELOG.md` for recent work

## Tech stack

- Next.js 14 App Router, React 18, JSX only (no TypeScript)
- Vercel deployment from `main` branch (auto-deploys on push)
- Languages: EN (default) + DE, ES, FR, NL, SV, ZH
- No database, no auth, no payment gateway (offline bank transfer only)

## Critical rules

- **Writing:** Read `MMG_BRAND_VOICE_GUIDELINES.md` before any draft. Mandatory self-check before shipping.
- **Course reviews:** MANDATORY: read `COURSE_BLOG_PIPELINE.md` + `MMG_BRAND_VOICE_GUIDELINES.md` before starting.
- **Course photos:** Always `ImageOps.exif_transpose()` from original source files. Never crop. Max 1600px, WebP quality 82.
- **Import paths:** English `../../components/`, language pages `../../../components/`
- **Content:** English is master. Do NOT add to language pages not present in English.
- **Pre-deploy:** Always run `npm run predeploy` (runs checks + build in one command).

## What not to do

- No TypeScript, CSS modules, or Tailwind
- Do not create new components unless clearly reusable
- Do not add `use client` unless page needs interactivity
- Do not modify English master when only fixing a language page
- Do not use Edit tool on `guide-post-content.js` or `guides-content.js` — use Python byte replacement instead

---

**For full reference docs:** See `docs/` folder or Drive `Active/` folder for mirrors.

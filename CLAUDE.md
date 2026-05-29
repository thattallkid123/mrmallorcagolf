# Mr Mallorca Golf - Claude Session Context

## 🖥️ New PC Setup — Fill This In First

If you're on a **new machine**, update the paths below before doing anything else.
Claude will use these instead of the defaults throughout this file.

```
REPO_ROOT=C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
GOOGLE_DRIVE=C:\Users\andyg\My Drive
DOCUMENTS=C:\Users\andyg\Documents
PROJECTS_FILE=C:\Users\andyg\Desktop\cursor\PROJECTS.md
```

**Steps when setting up on a new PC:**
1. Mount the repo folder in Cowork (same as you do now)
2. Update the four paths above to match where things landed on the new machine
3. Confirm Google Drive is synced and the `Mr Mallorca Golf\Reference\` folder is available
4. Run `npm install` in the repo root before any dev work
5. Apply Windows settings: see `WINDOWS_SETTINGS_MIGRATION.md` in the repo root

**Typical path changes to check:**
- Username different? (`andyg` → whatever) — update all four paths above
- Google Drive in a different location? (e.g. `G:\My Drive` or `C:\Users\...\Google Drive`) — update `GOOGLE_DRIVE`
- Repo cloned to a different folder? — update `REPO_ROOT` and `PROJECTS_FILE`

---

## Quick Commands

| Task | Command |
|------|---------|
| Build locally | `npm run dev` |
| Content checks | `npm run check:content` |
| Build check | `npm run build` |
| Visual smoke checks | `npm run check:visual` |
| Pre-deploy check | `npm run predeploy` if available, otherwise run the three checks above |
| Deploy | `git add -A && git commit -m "..." && git push` |
| GA4 report | `python ga4_analytics/ga4_report.py` |

**Local path:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

## Start Here

Before substantial work, read:

1. `BRANCHES.md`
2. `CONTENT_WORKFLOW.md`
3. `COURSE_BLOG_PIPELINE.md` for course reviews
4. `MMG_BRAND_VOICE_GUIDELINES.md` for any writing
5. `MMG_WORK_STATUS.md` for current priorities

## Course scorecard data (par / SI / distances)

**Source of truth:** `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\Scorecards\Scorecard PDFs\` — official club PDFs for all 24 courses.  
**Human-readable master:** `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\SCORECARD_MASTER.md` — read this before touching any par/SI data.  
**Repo scorecard Excel:** `MMG_Scorecards.xlsx` in repo root — par/SI per hole, PDF-verified.

There is **no auto-sync** for par/SI. When scorecard data changes, update manually:
1. PDF in `Reference/Scorecards/Scorecard PDFs/`
2. `Reference/SCORECARD_MASTER.md` (in Drive)
3. `MMG_Scorecards.xlsx` (in repo)
4. `src/lib/golf-courses-data.js` — par value in `pills` text only
5. Any blog post content mentioning that course's par

## Course pricing data — sync chain

**The system:** Edit Excel → run script → JSON + readable MD regenerate automatically.

| File | Role | Edit? |
|---|---|---|
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_EDIT-THIS.xlsx` | Source of truth for green fees, buggy, clubs | ✅ Edit this |
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_DO-NOT-EDIT.json` | Generated JSON master | ❌ Script only |
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_READABLE_DO-NOT-EDIT.md` | Human-readable output | ❌ Script only |
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_MARKET_PRICING_RESEARCH_2026.csv` | Raw research reference | Update when new data arrives |

**After editing the Excel, run:**
```
python scripts/sync-pricing.py
```

**What the sync does NOT cover** — must update manually when pricing changes:
- `src/lib/golf-courses-data.js` — pills text (e.g. `Peak €22 / Low €14`)
- `src/lib/guide-article-content.js` — EN blog post pricing references
- `src/lib/guide-article-content-localized.js` — all 6 language versions
- Any `guide-post-content.js` entries mentioning specific prices

`src/lib/mallorca-tracker-courses.js` uses placeholder data for a prototype — do not update from pricing data.

Writing guardrails are in the repo at `MMG_BRAND_VOICE_GUIDELINES.md` — do NOT use the old `MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md`, it is superseded.

Workspace selection lives one folder up:

```text
C:\Users\andyg\Desktop\cursor\PROJECTS.md
```

## Sources of Truth

- **Brand voice & writing:** `MMG_BRAND_VOICE_GUIDELINES.md` in repo root, also mirrored in Drive `Active/`
- **Course review pipeline:** `COURSE_BLOG_PIPELINE.md`
- **Branch rules:** `BRANCHES.md`
- **Content checklist:** `CONTENT_WORKFLOW.md`
- **Work tracking:** `MMG_WORK_STATUS.md`
- **Drive docs:** `C:\Users\andyg\Documents\Mr Mallorca Golf\Active\`
- **Public course/contact info:** `Documents/Active/MMG_CONTACTS_PUBLIC.xlsx`
- **Private contact info:** `Documents/Private/Workbooks/MMG_CONTACTS_PRIVATE.xlsx`

Never reference private contact details in public content.

## Branch Rule

- `main` is the live coaching/current site.
- `itinerary-preview` is the future trip-led / itinerary-led version.
- Shared factual content, course reviews, translations, course data, docs, tooling, and bug fixes should usually be kept on both branches.
- Strategy-specific homepage, itinerary planner, Plan Trip, service-positioning, and copy experiments can diverge.

## Tech Stack

- Next.js 14 App Router, React 18, JSX only
- Vercel deployment from GitHub
- Languages: EN default + DE, ES, FR, NL, SV, ZH
- No database, no auth, no payment gateway

## Critical Rules

- **Writing:** Read `MMG_BRAND_VOICE_GUIDELINES.md` before any draft. Mandatory self-check before shipping.
- **Course reviews:** Read `COURSE_BLOG_PIPELINE.md` before starting.
- **Course photos:** Always `ImageOps.exif_transpose()` from original source files. Never crop blog images. Max 1600px, WebP quality 82.
- **Import paths:** English pages use `../../components/`; language pages use `../../../components/`.
- **Content:** English is master. Do not add localized content that is not present in English.
- **Large content files:** Do not use fragile editor operations on `guide-post-content.js` or `guides-content.js`; use precise scripted/byte replacement.
- **Pre-deploy:** Run `npm run check:content`, `npm run build`, and `npm run check:visual`.

## Adding Or Translating A Course Review

Read `CONTENT_WORKFLOW.md`, `BRANCHES.md`, `COURSE_BLOG_PIPELINE.md`, and `MMG_BRAND_VOICE_GUIDELINES.md`.

For shared guide content, update both `main` and `itinerary-preview` unless Andy explicitly says otherwise.

## What Not To Do

- Do not bring itinerary-specific homepage/planner/service-positioning changes into `main` unless Andy explicitly asks.
- Do not create new frameworks, Tailwind, TypeScript, databases, auth, or CMS without approval.
- Do not modify English master copy when only fixing a language page.
- Do not invent image captions.
- Do not change testimonials unless Andy explicitly asks.

---

For full reference docs, see `docs/` and Drive `Active/`.

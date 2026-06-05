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
| Content validation | `npm run check:content-validation` — catches structural errors |
| Locale parity check | `npm run check:locale-parity` — verifies 6-language consistency |
| Build check | `npm run build` |
| Visual smoke checks | `npm run check:visual` |
| Pre-deploy check | `npm run predeploy` if available, otherwise run the checks above |
| Deploy | `git add -A` then `git commit -m "..."` then `git push` — **PowerShell does not support `&&`, always use separate lines** |
| GA4 report | `python ga4_analytics/ga4_report.py` |

**Local path:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

## Organization Rule: Code in Repo, Business in Google Drive

**Repo root contains ONLY code & development docs:**
- Code: `src/`, `public/`, `scripts/`, `docs/`
- Dev docs: `BRANCHES.md`, `CONTENT_WORKFLOW.md`, `COURSE_BLOG_PIPELINE.md`, `MMG_BRAND_VOICE_GUIDELINES.md`, `MMG_WORK_STATUS.md`, `README.md`, `CHANGELOG.md`
- Config: `package.json`, build files, git files

**ALL business docs live in Google Drive:** `C:\Users\andyg\My Drive\Mr Mallorca Golf\`
- Financial: `Financial/2026/`
- Strategy & operations: `Systems & Planning/`
- Tax & compliance: `Tax & Compliance/2026/`
- Courses: `Courses/` (reviews, scorecards, assets)
- Partnerships: `Partnerships/`
- Archive: `Archive/` (old/temp files)
- **Master reference:** `MMG_MASTER_CONTROL_CENTER.md` (start here for business questions)

## Start Here

**For code/website work:**
1. `BRANCHES.md` (git rules)
2. `CONTENT_WORKFLOW.md` (content structure)
3. `COURSE_BLOG_PIPELINE.md` (course reviews)
4. `MMG_BRAND_VOICE_GUIDELINES.md` (writing voice)
5. `MMG_WORK_STATUS.md` (current priorities)

**For business/financial work:**
- Read: `Google Drive / Mr Mallorca Golf / MMG_MASTER_CONTROL_CENTER.md` (everything links from here)

**Infrastructure & Validation:**
- `docs/LOCALE_PARITY_CHECKLIST.md` — 6-language structure consistency
- `docs/CONTENT_STRUCTURE.md` — Which file controls what (critical)
- `docs/CODEBASE_IMPROVEMENTS.md` — Infrastructure, validation, path aliases
- `POWERSHELL_SYNTAX_REMINDER.md` — PowerShell doesn't support `&&`

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

**Google Drive (C:\Users\andyg\My Drive\Mr Mallorca Golf):**
- **Master control:** `MMG_MASTER_CONTROL_CENTER.md` ← Start here for all business questions
- **Financial:** `Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx` (live tracker)
- **Systems & planning:** `Systems & Planning/` (business plan, pricing, checklists)
- **Courses:** `Courses/[CourseName]/` (reviews, scorecards, assets)
- **Partnerships:** `Partnerships/[Partner]/` (contacts, agreements, notes)
- **Tax & compliance:** `Tax & Compliance/2026/` (documentation, Q&A with gestor)
- **Archive:** `Archive/` (old audits, temp files, old trackers)
- **Reference (existing):** `Reference/` (scorecard PDFs, pricing research)
- **Active (existing):** `Active/MMG_BRAND_VOICE_GUIDELINES.md`, contacts, master data
- **To Do (existing):** `To Do/ACTION_LIST.md` ← Single source of truth for active work

**Repo (code & development only):**
- **Branch rules:** `BRANCHES.md`
- **Content workflow:** `CONTENT_WORKFLOW.md`
- **Course review pipeline:** `COURSE_BLOG_PIPELINE.md`
- **Status & priorities:** `MMG_WORK_STATUS.md`
- **Brand voice:** `MMG_BRAND_VOICE_GUIDELINES.md` (writing guide for all content)

Never reference private contact details in public content.

**Scorecard sync note:** Official scorecard PDFs live in `Reference/Scorecards/Scorecard PDFs/`. Individual course folders in `Courses/` link to or sync these for easy access during content creation.

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

- **Do not add business/financial files to this repo.** Code only. Everything else → Google Drive.
- Do not bring itinerary-specific homepage/planner/service-positioning changes into `main` unless Andy explicitly asks.
- Do not create new frameworks, Tailwind, TypeScript, databases, auth, or CMS without approval.
- Do not modify English master copy when only fixing a language page.
- Do not invent image captions.
- Do not change testimonials unless Andy explicitly asks.

---

## 🧹 Repository Cleanup

See `REPO_CLEANUP_CHECKLIST.txt` in repo root for old file removal tasks.

---

For full reference docs, see `docs/` and Drive `Active/`.

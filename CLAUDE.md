# Mr Mallorca Golf - Claude Session Context

---

##  DOCUMENT RULE

**No extra documents. Analysis and decisions happen in chat only.**
If you need me to evaluate something, I ask in the conversation and work from there. CLAUDE.md stays clean  it's reference only.

---

##  CRITICAL RULE (READ EVERY SESSION)

**If I need access to a folder or file to do work, I MUST ASK YOU TO MOUNT IT.**

I will NEVER work around missing access. I will NEVER assume a folder exists. I will NEVER create workarounds that bypass mounted folders.

**When I need a folder:**
1. I stop and ask: "I need access to [path]  can you mount it?"
2. You approve or decline
3. If approved, you mount it
4. I proceed with the work

**Examples:**
- "I need to read/edit/delete files in Downloads  can you mount it?"
- "I need to check Desktop files  can you mount C:\Users\andyg\Desktop?"
- "I need access to [project folder]  can you mount it?"

**Why this matters:** Working around missing access creates:
- Files scattered in wrong places (Downloads, temp folders, wrong projects)
- Hard-to-trace dependencies
- Cleanup work later
- Confusion about where files should go

**This rule applies to EVERY task, EVERY session, with NO exceptions.**

---

##  New PC Setup  Fill This In First

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
- Username different? (`andyg`  whatever)  update all four paths above
- Google Drive in a different location? (e.g. `G:\My Drive` or `C:\Users\...\Google Drive`)  update `GOOGLE_DRIVE`
- Repo cloned to a different folder?  update `REPO_ROOT` and `PROJECTS_FILE`

---

## File Access Rule (IMPORTANT)

**If I need access to a folder, I will ask you to mount it via Cowork.**

Rather than working around missing access or assuming a folder isn't available, I will ask directly. You can always say no, but mounting is better than creating workarounds that complicate the workflow.

**Example:** "I need access to C:\Users\andyg\Downloads  can you mount it?"

Common folders to mount: Downloads, Documents, specific project folders.

**This keeps the workflow simple and transparent.**

---

## File Organization Principle (FINAL  ENFORCED)

**This has been decided. All future work must follow this. Audit completed June 2026.**

### Repository (mrmallorcagolf-real/) = Website Code ONLY
- Website source code: `src/`, `public/`, `scripts/`, `tests/`
- Development documentation: `BRANCHES.md`, `CONTENT_WORKFLOW.md`, `COURSE_BLOG_PIPELINE.md`
- Code configuration: `package.json`, `next.config.js`, build files
- **NO business/operational/financial/partnership/content-drafting docs**
- **NO contact files (those belong in Drive/Private/Workbooks/)**

### Google Drive (C:\Users\andyg\My Drive\Mr Mallorca Golf\) = Business + Operations

**Clearly-named folders  no ambiguity about what's inside:**

- **PWAP/**  Post-round coaching feedback (client reviews, feedback templates)
- **Business Operations & Financial/**  Autonomo setup, Tax filings, Accounting (invoices, expenses, statements)
- **Partnerships/**  Contracts, relationships, outreach emails
- **Bookings/**  Client itineraries, proposals, terms, booking logic
- **Content/**  Blog drafts, Chinese content, research, SEO strategy, email templates, article guides
- **Systems & Planning/**  Operational workflows, checklists, control panels, business logic docs, booking rules
  - **Skills/**  Master skill files (source of truth for SKILLS_SYNC.ps1)
- **Media/**  Photos, carousels, brand assets, carousel creation guides, photo usage rules, inventory
- **Reference/**  Scorecard master, pricing research, trip guides, brand guidelines, course prestige docs
- **To Do/**  Historical (superseded by Google Tasks webhook)
- **Private/**
  - **Workbooks/**  All contacts (courses, partners, China operators, sensitive data)
  - **Templates/**  Outreach email templates, booking templates, proposal templates
- **Archive/**  Historical docs (old projects, superseded versions, handover docs)

## File Hygiene Rule

**Planning/working documents:**
- While planning: Create working docs with clear names (e.g., `AUDIT_PLAN.md`)
- After task complete: Either consolidate into existing docs or ask if needs keeping
- Default: **Delete working docs after task done** (recycle bin, not permanent)
- Keep only: Final outputs, decision records, reference docs

**Example:**
- Create `AUDIT_PLAN.md` while planning cleanup
- Complete cleanup, consolidate findings
- Delete `AUDIT_PLAN.md` (working doc no longer needed)

**Do not accumulate "process" files  keep only outcomes.**

---

## Quick Commands

| Task | Command |
|------|---------|
| Build locally | `npm run dev` |
| Content checks | `npm run check:content` |
| Content validation | `npm run check:content-validation` - catches structural errors |
| Locale parity check | `npm run check:locale-parity` - verifies 6-language consistency |
| i18n release check | `npm run check:i18n-release` - run after any shared content or locale-facing edit |
| Build check | `npm run build` |
| Visual smoke checks | `npm run check:visual` |
| Pre-deploy check | `npm run predeploy` if available, otherwise run the checks above |
| Deploy | `git add -A` then `git commit -m "..."` then `git push` - **PowerShell does not support `&&`, always use separate lines** |
| GA4 report | `python ga4_analytics/ga4_report.py` |
**Local path:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

## Start Here

**For operations & monitoring:**
1. `MMG Analytics Dashboard.gsheet` (Google Drive / Systems & Planning/)  Live GA4/Search Console monitoring dashboard
2. `MMG_CONTROL_PANEL_INTEGRATED.md` (repo root)  Systems architecture, workflows, weekly/monthly checklists
3. `MMG_MASTER_CONTROL_CENTER.md` (Google Drive root)  Business operations & financial tracking

**For code/website work:**
1. `BRANCHES.md` (git rules)
2. `CONTENT_WORKFLOW.md` (content structure)
3. `COURSE_BLOG_PIPELINE.md` (course reviews)
4. `MMG_BRAND_VOICE_GUIDELINES.md` (writing voice)  in Drive/Systems & Planning/

**For current priorities/status:**
- Check: `MMG_MASTER_TASK_TRACKER.md` (Google Drive / Systems & Planning/)  QUICK STATUS section shows what's in progress, queued, or not started
- Or: Google Tasks for immediate action items (synced to control panel)

**For business/financial work:**
- Read: `Google Drive / Mr Mallorca Golf / MMG_MASTER_CONTROL_CENTER.md` (everything links from here)

**Infrastructure & Validation:**
- `docs/LOCALE_PARITY_CHECKLIST.md`  6-language structure consistency
- `docs/CONTENT_STRUCTURE.md`  Which file controls what (critical)
- `docs/CODEBASE_IMPROVEMENTS.md`  Infrastructure, validation, path aliases
- `POWERSHELL_SYNTAX_REMINDER.md`  PowerShell doesn't support `&&`

## Course scorecard data (par / SI / distances)

**Source of truth:** `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\Scorecards\Scorecard PDFs\`  official club PDFs for all 24 courses.  
**Human-readable master:** `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\SCORECARD_MASTER.md`  read this before touching any par/SI data.  
**Repo scorecard Excel:** `MMG_Scorecards.xlsx` in repo root  par/SI per hole, PDF-verified.

There is **no auto-sync** for par/SI. When scorecard data changes, update manually:
1. PDF in `Reference/Scorecards/Scorecard PDFs/`
2. `Reference/SCORECARD_MASTER.md` (in Drive)
3. `MMG_Scorecards.xlsx` (in repo)
4. `src/lib/golf-courses-data.js`  par value in `pills` text only
5. Any blog post content mentioning that course's par

**Note:** Official scorecard PDFs live in `Reference/Scorecards/Scorecard PDFs/`. Individual course folders in `Courses/` link to or sync these for easy access during content creation.

## Course pricing data  sync chain

**The system:** Edit Excel  run script  JSON + readable MD regenerate automatically.

| File | Role | Edit? |
|---|---|---|
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_EDIT-THIS.xlsx` | Source of truth for green fees, buggy, clubs |  Edit this |
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_DO-NOT-EDIT.json` | Generated JSON master |  Script only |
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_READABLE_DO-NOT-EDIT.md` | Human-readable output |  Script only |
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_MARKET_PRICING_RESEARCH_2026.csv` | Raw research reference | Update when new data arrives |

**After editing the Excel, run:**
```
python scripts/sync-pricing.py
```

For the full pricing visibility map where prices appear on the site, in local tools, and in manual channels, see `docs/content-architecture.md`.
When Andy asks to change pricing, follow `docs/pricing-change-checklist.md` plus the visibility map before editing only one page or file. That includes the website, the `mmg-tools` apps, the static apps, internal docs, and any private encyclopaedia/reference notes if Andy wants the price kept on record but not public. Santa Ponsa 2 and 3 pricing can live in those private reference notes even when the courses are not generally bookable.

**What the sync does NOT cover**  must update manually when pricing changes:
- `src/lib/golf-courses-data.js`  pills text (e.g. `Peak 22 / Low 14`)
- `src/lib/guide-article-content.js`  EN blog post pricing references
- `src/lib/guide-article-content-localized.js`  all 6 language versions
- Any `guide-post-content.js` entries mentioning specific prices

`src/lib/mallorca-tracker-courses.js` uses placeholder data for a prototype  do not update from pricing data.

Writing guardrails are in the repo at `MMG_BRAND_VOICE_GUIDELINES.md`  do NOT use the old `MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md`, it is superseded.

Workspace selection lives one folder up:

```text
C:\Users\andyg\Desktop\cursor\PROJECTS.md
```

## Sources of Truth

**Google Drive (C:\Users\andyg\My Drive\Mr Mallorca Golf):**
- **Master control:** `MMG_MASTER_CONTROL_CENTER.md`  Start here for all business questions
- **Financial:** `Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx` (live tracker) + `MMG_Business_Model.pdf` (pricing model)
- **Systems & planning:** `Systems & Planning/` (business plan, pricing, checklists)
- **Contacts & partnerships:** `Private/Workbooks/MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` (3 sheets: Golf Courses 24 + Affiliates 40 + China Operators 15)
- **Client bookings & revenue:** `Private/Workbooks/MMG_CLIENT_BOOKINGS_AND_REVENUE.xlsx` (client tracker: names, dates, courses, revenue, follow-ups)
- **Courses:** `Courses/[CourseName]/` (reviews, scorecards, assets)
- **Tax & compliance:** `Tax & Compliance/2026/` (documentation, Q&A with gestor)
- **Archive:** `Archive/` (old audits, temp files, control panel backups)
- **Reference:** `Reference/` (scorecard PDFs, pricing research)
- **Skills:** `Skills/MMG_SKILL_*.md` (12 skills  blog, seo, social, carousel, chinese, pipeline, design, nextjs, business-ops, partnerships, repurpose, chinese-backlog)
- **Tasks:** Google Tasks (synced to control panel)  see Task Management section below

**Repo (code & development only):**
- **Operations:** `MMG_CONTROL_PANEL_INTEGRATED.md` (systems architecture + GA4 workflow + weekly/monthly checklists)
- **Branch rules:** `BRANCHES.md`
- **Content workflow:** `CONTENT_WORKFLOW.md`
- **Course review pipeline:** `COURSE_BLOG_PIPELINE.md`
- **Brand voice:** `MMG_BRAND_VOICE_GUIDELINES.md` (in Drive/Systems & Planning/)
- **Skills sync:** `SKILLS_SYNC.ps1` (automation script: Google Drive  Cowork & Repo)

Never reference private contact details in public content.

## Task Management

**Where tasks go:** Google Tasks

**Webhook for automation scripts:**
```
POST https://script.google.com/macros/s/AKfycbw0RzUzzrXzn3inKcggu0deF05wbL2xGlR1r-tiMTR00nwLb03Lrx6lDWg8LGqbhUt7/exec
```

**JSON format:**
```json
{
  "title": "Task name",
  "description": "Details (optional)",
  "dueDate": "YYYY-MM-DD (optional)"
}
```

**Why this setup:**
- Independent of Claude tokens (works even if Claude isn't available)
- Syncs to Andy's control panel automatically
- Single source of truth for all active work
- Scripts, analytics reports, and Claude can all write to it

**Full integration details:** `C:\Users\andyg\.claude\projects\C--Users-andyg-Downloads\memory\mmg-google-tasks-webhook.md`

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
- **Shared locale edits:** If you add a new key to shared content used across locales, either add it for de/es/fr/nl/sv/zh in the same edit or provide an explicit getter fallback. Do not leave English-only structure gaps.
- **Release gate for locale-facing work:** After editing shared content, locale content, metadata, or localized page copy, run `npm run check:i18n-release` before commit.
- **Large content files:** Do not use fragile editor operations on `guide-post-content.js` or `guides-content.js`; use precise scripted/byte replacement.
- **Pre-deploy:** Run `npm run check:content`, `npm run build`, and `npm run check:visual`.

## Analytics And SEO Rules

- Treat GA4 and Search Console reports as decision aids, not as content by themselves. Every insight must map to a specific page, query, or event.
- When a report surfaces a problem, translate it into a page-level action: title/meta, intro, internal links, trust copy, or enquiry path.
- Do not guess that a feature or file is missing. Check the source first, especially for items like `llms.txt`, figure captions, or localized content parity.
- For SEO or CRO work, only ship changes that clearly improve CTR, enquiry conversion, trust, course-choice clarity, or premium positioning.
- For China-facing copy, pull proof from existing verified sources first (`about-content.js`, `contact-content.js`, `homepage-content.js`) and reuse the real Shanghai, Mandarin, Douyin, and WeChat details already in the repo.
- Chinese pages do not need to be literal translations of English pages. Localize them for the Chinese audience and business goal, while keeping factual claims consistent with the verified source material.

## Adding Or Translating A Course Review

Read `CONTENT_WORKFLOW.md`, `BRANCHES.md`, `COURSE_BLOG_PIPELINE.md`, and `MMG_BRAND_VOICE_GUIDELINES.md`.

For shared guide content, update both `main` and `itinerary-preview` unless Andy explicitly says otherwise.

## What Not To Do

- **Do not add business/financial files to this repo.** Code only. Everything else  Google Drive.
- Do not bring itinerary-specific homepage/planner/service-positioning changes into `main` unless Andy explicitly asks.
- Do not create new frameworks, Tailwind, TypeScript, databases, auth, or CMS without approval.
- Do not modify English master copy when only fixing a language page.
- Do not invent image captions.
- Do not assume analytics, `llms.txt`, or caption gaps without checking the source file first.
- Do not change testimonials unless Andy explicitly asks.

---

##  Repository Cleanup

See `REPO_CLEANUP_CHECKLIST.txt` in repo root for old file removal tasks.

---

For full reference docs, see `docs/` and Drive `Systems & Planning/`.

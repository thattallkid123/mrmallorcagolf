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

##  Two-Machine Setup (Old PC + New PC)

Both machines are active. Neither is canonical — GitHub is the source of truth for code, Google Drive for business docs.

**Old PC (andyg)**
```
REPO_ROOT=C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
GOOGLE_DRIVE=C:\Users\andyg\My Drive
DOCUMENTS=C:\Users\andyg\Documents
PROJECTS_FILE=C:\Users\andyg\Desktop\cursor\PROJECTS.md
```

**New PC (Andy)** — Desktop is inside OneDrive folder on this machine
- REPO_ROOT: `C:\OneDrive\Desktop\cursor\mrmallorcagolf-real`
- GOOGLE_DRIVE: `C:\Users\Andy\My Drive`
- DOCUMENTS: `C:\Users\Andy\Documents`
- PROJECTS_FILE: `C:\OneDrive\Desktop\cursor\PROJECTS.md`

**Two-PC daily rule:**
- Before leaving a machine: `git push` and let Drive sync finish
- Before starting on the other machine: `git pull`
- Only edit on one machine at a time

**Secrets (not in git — must exist on both machines):**
- `token.json` (repo root) — Google OAuth token for the control panel
- `.env` and `.env.local` (repo root) — API keys (Resend, etc.)
- `.github-token`
- `ga4_analytics/ga4_oauth_client.json`, `ga4_token.json`
- `search_console/search_console_token.json`
- `seo_analytics/google_token.json`
- `zoho_mail/zoho_config.json`

**Claude/Codex config** lives at `~/.claude/` and `~/.codex/` on each machine. Sign in fresh on each — do not copy credentials between machines. Skills, agents, and memory folders should match.

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
- **Business Operations & Financial/**  Autonomo setup, accounting (invoices, expenses, bank statements), tax calculator, finance guides
  - **Tax & Compliance/** - Tax filings, gestor Q&A, quarterly/annual returns, compliance guides (nested here)
- **Partnerships/**  Contracts, relationships, outreach emails
- **Bookings/**  Client itineraries, proposals, terms, booking logic
- **Content/**  Blog drafts, Chinese content, research, SEO strategy, email templates, article guides
- **Systems & Planning/**  Operational workflows, checklists, control panels, business logic docs, booking rules
- **Skills/**  Master skill files (source of truth for SKILLS_SYNC.ps1)
- **Scripts/** - Automation scripts: Python (analytics, trends, scorecard sync) + PowerShell (setup check, skills sync)
- **Media/**  Photos, carousels, blog images, photo/carousel usage guides, inventory
- **Brand Assets/** - Logos (all colours), font/colour template, email signature
- **Reference/**  Scorecard master, pricing research, trip guides, brand guidelines, course prestige docs
- **Private/**
  - **Workbooks/**  All contacts (courses, partners, China operators, sensitive data)
  - **Templates/**  Outreach email templates, booking templates, proposal templates
- **Archive/**  Historical docs (old projects, superseded versions, handover docs)

### Google Drive Naming Rules

Generated client/admin documents use one date placement:

```text
MMG_<Document_Type>_YYYY-MM-DD_<Client>[_Qualifier].ext
```

Invoice PDFs also include the legal invoice number after the date:

```text
MMG_Invoice_YYYY-MM-DD_INV-YYYY-###_ClientName.pdf
```

Examples: `MMG_Gift_Voucher_2026-06-22_Gero.pdf`, `MMG_Itinerary_2026-05-01_Philipp.pdf`, `MMG_Proposal_2026-05-01_Philipp_Internal.pdf`, `MMG_Booking_Terms_2026-09.docx`. PWAP review folders use `YYYY-MM-DD_Client`; PDFs use `MMG_Player_Review_YYYY-MM-DD_Client.pdf`. Partnership contracts use `MMG_Partnership_Partner_Name_v2.docx`. Templates keep `Template` at the end, e.g. `MMG_Gift_Voucher_Template.pptx`.

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

**Build scripts and intermediate files:** If a task requires helper scripts, extracted text files, or intermediate outputs (e.g. a `build_doc.js` script, a `content.txt` extraction), delete these automatically before reporting the task as done. Only the final deliverable remains.

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

Completion gate for repo work:
- A push is not complete just because GitHub accepted it.
- Do not report repo work as done until the required local checks have passed after the final edit set in the same worktree.
- Minimum gate for site content or pricing work: `npm run check:content`.
- Minimum gate for deploy-sensitive site work: `npm run check:content` and `npm run build`, plus any locale or visual checks required by the change.
- If a push happens before checks are green, treat the task as still in progress until the failures are fixed and the checks pass.

## Start Here

**For operations & monitoring:**
1. `MMG Analytics Dashboard.gsheet` (Google Drive / Systems & Planning/)  Live GA4/Search Console monitoring dashboard
2. `MMG_CONTROL_PANEL_INTEGRATED.md` (repo root)  Systems architecture, workflows, weekly/monthly checklists
3. `MMG_MASTER_CONTROL_CENTER.md` (Google Drive root)  Business operations & financial tracking

**For AI coaching / strategic context:**
- `MMG_BUSINESS_BRIEF.md` (Google Drive root)  Complete business context doc — drop into AI projects alongside any OS file. Covers brand, pricing, clients, partners, China strategy, Yina's role, ideas pipeline. Refresh monthly.
- `Systems & Planning/AI Coach/` — four business coach OS files (drop one or more alongside the Brief for strategic coaching sessions):
  - `HORMOZI_OPERATING_SYSTEM.md` — offer mechanics, pricing, Stage I discipline, lead generation
  - `PRIESTLEY_OPERATING_SYSTEM.md` — oversubscribed positioning, 5 Ps, personal brand as business, 24 assets
  - `BLAIRENNS_OPERATING_SYSTEM.md` — expert selling without pitching, hotel GM conversations, premium pricing psychology
  - `CHINA_OS.md` — everything China in one file: digital strategy, traveller profile (Dragon Trail/Hurun/Ctrip), Douyin/Xiaohongshu/WeChat mechanics, seasonal calendar, Yina's role
  - `SOCIAL_MEDIA_WESTERN_OS.md` — Instagram + YouTube (Strong Media hooks/captions/filming, algorithm mechanics, MMG content pillars)
  - `HOW_TO_USE_THIS_SYSTEM.md` — setup guide for claude.ai Projects, which files to combine per question type, example questions

**For code/website work:**
1. `BRANCHES.md` (git rules)
2. `CONTENT_WORKFLOW.md` (content structure)
3. `COURSE_BLOG_PIPELINE.md` (course reviews)
4. `MMG_BRAND_VOICE_GUIDELINES.md` (writing voice)  in Drive/Systems & Planning/

**For current priorities/status:**
- Check: Google Tasks (canonical — synced to control panel)

### Lead Magnets, Tools, And Newsletter Status (22 June 2026)

The PDF lead magnets, HTML planning tools, MailerLite groups/automations, immediate Resend delivery emails, optional planning-notes opt-in, and Course Selector personalization are set up and tested.

Current state:
- Website-side PDF/tool result emails send the promised download/result immediately.
- MailerLite nurtures are active and delayed so they follow the immediate website email rather than duplicate it.
- Course Selector sends `selector_answers`, `selector_shortlist`, and `selector_shortlist_names` to MailerLite.
- MailerLite `Email 1 - Shortlist` uses the proper `selector_shortlist_names` variable; raw placeholder text no longer appears in preview.
- Course images remain on website result cards only, not in emails. Keep emails light unless there is a clear reason to add images later.
- The detailed handover/audit lives at `C:\Users\andyg\Downloads\mrmallorcagolf-lead-magnets-CTA-and-mailing-list-handover-june-2026.md`.

Next newsletter step:
- Do not build a heavy newsletter programme yet. The system is now mainly waiting for real subscribers.
- When there is enough list activity, start with a light monthly "Mallorca golf planning notes" email: one course note, one planning tip, one course worth considering, and a soft reply CTA.
- Tone: useful, practical, first-hand. Not generic tourism copy and not a hard sales newsletter.

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
For a shorter reminder list of every surface to check, see `docs/pricing-surfaces-inventory.md`.

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
- **Business Brief:** `MMG_BUSINESS_BRIEF.md` (root)  AI coaching context, business story, current status
- **Course encyclopaedia:** `MMG_ENCYCLOPAEDIA_DATA_MASTER.md` (root)  All 24 courses, facts, pricing, access rules
- **Financial:** `Business Operations & Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx` (live tracker) + `MMG_Business_Model.pdf` (pricing model)
- **Systems & planning:** `Systems & Planning/` (business plan, pricing, checklists)
- **Contacts & partnerships:** `Private/Workbooks/MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` (3 sheets: Golf Courses 24 + Affiliates 39 incl. website/phone/location + China Operators 15)
- **Client bookings & revenue:** `Private/Workbooks/MMG_CLIENT_BOOKINGS_AND_REVENUE.xlsx` (client tracker: names, dates, courses, revenue, follow-ups)
- **Courses:** `Courses/[CourseName]/` (reviews, scorecards, assets)
- **Tax & compliance:** `Business Operations & Financial/Tax & Compliance/2026/` (documentation, Q&A with gestor)
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
- **Prototype images (tools, quizzes, selectors):** Use `/images/*-card.webp` for course guide card images; use `/images/courses/*.webp` for full course detail images. Do NOT use external stock photos (Unsplash, etc.). All images sourced from `public/images/` folder. See [Prototype Image Reference](#prototype-image-reference) below.
- **Import paths:** English pages use `../../components/`; language pages use `../../../components/`.
- **Content:** English is master. Do not add localized content that is not present in English.
- **Shared locale edits:** If you add a new key to shared content used across locales, either add it for de/es/fr/nl/sv/zh in the same edit or provide an explicit getter fallback. Do not leave English-only structure gaps.
- **Release gate for locale-facing work:** After editing shared content, locale content, metadata, or localized page copy, run `npm run check:i18n-release` before commit.
- **Text-change checklist:** When changing copy on any locale page, check the shared components it flows through as well:
  - contact page cards, success CTA, floating contact button, and mobile CTAs
  - page-level CTA labels used by `Plan Your Trip`, `Play With A Pro`, and `Signature Day`
  - Chinese-specific contact handling must use WeChat language and anchors, not English WhatsApp wording
  - Chinese pages should localize visible service labels too: `Play With A Pro`, `Plan Your Trip`, `Signature Day`, and `A Day With Andy` should read as Chinese-facing names on zh pages unless an English brand/proper noun is genuinely required
  - FAQ styling is shared globally; if you change FAQ copy, inspect the rendered accordion on mobile and desktop so borders, spacing, and open-state formatting stay clean
  - when changing any locale text, check the shared source files plus the rendered zh routes (`/zh`, `/zh/contact`, `/zh/play-with-a-pro`, `/zh/plan-your-trip`, `/zh/signature-day`) in one pass before declaring done
  - check visible text and hidden metadata together: breadcrumb JSON-LD, og/twitter tags, alt text, and CTA labels can still leak English even when the page body looks translated
  - run `npm run check:locale-leaks` and `npm run build` after the edit, then scan the rendered Chinese pages for any remaining English copy or mixed-language CTA labels
- **Large content files:** Do not use fragile editor operations on `guide-post-content.js` or `guides-content.js`; use precise scripted/byte replacement.
- **Pre-deploy:** Run `npm run check:content`, `npm run build`, and `npm run check:visual`.
- **Push completion rule:** A successful `git push` only means the branch updated. It does not count as complete until the required local checks pass after the last change.

## Analytics And SEO Rules

- Treat GA4 and Search Console reports as decision aids, not as content by themselves. Every insight must map to a specific page, query, or event.
- When a report surfaces a problem, translate it into a page-level action: title/meta, intro, internal links, trust copy, or enquiry path.
- Do not guess that a feature or file is missing. Check the source first, especially for items like `llms.txt`, figure captions, or localized content parity.
- For SEO or CRO work, only ship changes that clearly improve CTR, enquiry conversion, trust, course-choice clarity, or premium positioning.
- For China-facing copy, pull proof from existing verified sources first (`about-content.js`, `contact-content.js`, `homepage-content.js`) and reuse the real Shanghai, Mandarin, Douyin, and WeChat details already in the repo.
- Chinese pages do not need to be literal translations of English pages. Localize them for the Chinese audience and business goal, while keeping factual claims consistent with the verified source material.

## Prototype Image Reference

**Location:** `prototypes/` folder contains interactive tools, quizzes, and selectors (HTML + inline JS).

**Image sourcing rule:** All prototype images come from `public/images/`. Do NOT use external stock photos (Unsplash, Pexels, etc.). All images are WebP, optimized, and deployed with the site.

**Available image paths:**

| Path | Courses Covered | Use Case |
|------|---|---|
| `/images/*-card.webp` | alcanada, son-gual, t-golf-calvia, son-muntaner, santa-ponsa, andratx | Guide listing cards (homepage, guides page) |
| `/images/courses/*.webp` | All 24 courses including son-vida, son-quint, bendinat, capdepera, canyamel, pula, son-servera, maioris, vall-dor, + others | Detail pages, quizzes, recommenders |

**How to use in prototypes:**

```html
<!-- For guide card images (if available) -->
<img src="/images/son-gual-card.webp" alt="Son Gual course view">

<!-- For course detail images (fallback for all courses) -->
<img src="/images/courses/bendinat.webp" alt="Bendinat coastal course">
```

**When adding a new prototype:**
1. Check if card images exist for your courses (`/images/*-card.webp`)
2. If not, use course detail images (`/images/courses/*.webp`)
3. Never hardcode Unsplash, Pexels, or other external URLs
4. Add `loading="lazy"` and appropriate `alt` text to all images
5. Test that images load when prototype is served from the site

**If an image is missing:**
- For guide cards: request from `Drive/Media/` or use course detail image as fallback
- For course detail images: check `public/images/courses/` first; if missing, it needs to be added to the project

## Prototype Deployment Checklist

**Before deploying any prototype to the /zh site:**

1. **Images**
   - [ ] All course images load via `/images/` paths (not external Unsplash/Pexels)
   - [ ] WeChat QR code exists at `public/images/wechat-qr.png`
   - [ ] Images tested on site (not just standalone HTML)

2. **Contact details**
   - [ ] WeChat ID: `andygriffiths1` (in code + image)
   - [ ] WhatsApp: `+34624466702` (from `WhatsAppButton.jsx`)
   - [ ] Contact links point to `/zh/contact`, `/zh/play-with-a-pro`, `/zh/guides`

3. **Email integration**
   - [ ] Email endpoint exists (`/api/zh-selector-email` for course selector)
   - [ ] Resend API key configured (not MailerLite)
   - [ ] Email template tested with real data

4. **Analytics**
   - [ ] Baidu Analytics wired up (GA4 blocked in mainland China)
   - [ ] Track events: `zh_selector_start`, `zh_answer_selected`, `zh_recommendation_viewed`, `zh_email_results`, `zh_wechat_click`, `zh_booking_click`

5. **Localization**
   - [ ] Run `npm run check:locale-parity` to verify /zh consistency
   - [ ] Check for English leaks in Chinese content
   - [ ] Verify all contact labels use Chinese (not English WhatsApp/WeChat)

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

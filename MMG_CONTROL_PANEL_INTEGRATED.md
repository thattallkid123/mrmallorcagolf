# Mr Mallorca Golf — Integrated Control Panel

**Last updated:** June 5, 2026
**Status:** All systems live and in sync

---

## 🚀 LAUNCH CONTROL PANEL

**To open the dashboard:**
```
cd C:\Users\andyg\Desktop\cursor\mmg-tools
.\MMG-UNIFIED-CONTROL.cmd
```

Or double-click: `C:\Users\andyg\Desktop\cursor\mmg-tools\MMG-UNIFIED-CONTROL.cmd`

This launches the unified control panel dashboard in your browser.

---

## 🎯 Scripts Reference

All scripts are in: `C:\Users\andyg\Desktop\cursor\mmg-tools\scripts\` or `C:\Users\andyg\Desktop\cursor\mmg-tools\`

### ✅ SKILLS_SYNC.ps1
**What it does:** Syncs all 10 MMG skills from Google Drive (master) to Cowork and Repo
**When to run:** After editing any skill file in Drive
**Command:**
```powershell
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
.\SKILLS_SYNC.ps1
```
**Time:** 1 minute
**Expected output:** "All skills synced successfully"

### ✅ Run-ClaudeBackup.ps1
**What it does:** Backs up Claude configuration and settings
**When to run:** Weekly or after major changes
**Command:**
```powershell
cd C:\Users\andyg\Desktop\cursor\mmg-tools\scripts
.\Run-ClaudeBackup.ps1
```
**Time:** 2 minutes
**Location:** Backup saved to `claude-config-backup/`

### ✅ deploy.ps1
**What it does:** Deploys code changes to live (git push to Vercel)
**When to run:** After code changes are committed
**Command:**
```powershell
cd C:\Users\andyg\Desktop\cursor\mmg-tools
.\deploy.ps1
```
**Time:** 2 minutes (+ Vercel build time ~2 min)
**Expected:** Site live at mrmallorcagolf.com

### ✅ run-weekly-business-check.ps1
**What it does:** Runs weekly GA4, Search Console, and business metrics checks
**When to run:** Every Friday morning
**Command:**
```powershell
cd C:\Users\andyg\Desktop\cursor\mmg-tools\scripts
.\run-weekly-business-check.ps1
```
**Time:** 5 minutes
**Outputs:** GA4 report, Search Console data, indexing status

### ✅ mmg.cmd
**What it does:** Main command launcher for various mmg-tools operations
**When to run:** For quick operations or from control panel
**Usage:**
```
mmg.cmd [command]
```
**Common commands:**
```
mmg pricing      → Sync pricing from Excel to JSON
mmg site         → Update site content
mmg status-sync  → Update course status
mmg help         → Show all available commands
```

---

## 📊 Quick Command Reference

| Task | Command | Time |
|---|---|---|
| **Update a skill** | Edit Drive → Run `.\SKILLS_SYNC.ps1` | 2 min |
| **Backup Claude config** | `.\Run-ClaudeBackup.ps1` | 2 min |
| **Deploy code changes** | Commit → `.\deploy.ps1` | 4 min |
| **Weekly business check** | `.\run-weekly-business-check.ps1` | 5 min |
| **Log a booking** | Add row to Ledger tab | 1 min |
| **Check business status** | Read `MMG_MASTER_CONTROL_CENTER.md` | 5 min |
| **Find a contact** | Search `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` | 1 min |

---

## 🔄 System Architecture

```
GOOGLE DRIVE (Master)
├─ Active/Skills/MMG_SKILL_*.md (9 files) ← SOURCE OF TRUTH
├─ Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx
├─ Systems & Planning/ (all operational docs)
├─ Private/Workbooks/ (contacts, CRM)
└─ Courses/, Tax & Compliance/, Archive/

        ↓ (via SKILLS_SYNC.ps1)

COWORK (Skills)              REPO (Code)
├─ blog-writing             ├─ src/, public/, scripts/
├─ seo-content              ├─ CLAUDE.md, BRANCHES.md
├─ social-media-mmg         ├─ skills/ (synced copies)
├─ carousel                 └─ MMG_CONTROL_PANEL_INTEGRATED.md
├─ chinese-content
├─ content-pipeline
├─ frontend-design-mmg
├─ nextjs-mrmallorcagolf
└─ mmg-business-operations
```

**Golden Rule:** Google Drive is the master. Everything syncs outward.

---

## 📊 Weekly Workflow (30 minutes total)

### Morning Check (5 minutes)
```powershell
# 1. Check site status
# Visit: https://mrmallorcagolf.com
# Look for broken links, missing images, 404s in console (F12 > Console)

# 2. Check llms.txt is live
# Visit: https://mrmallorcagolf.com/llms.txt
# Should show plain text starting with "Mr Mallorca Golf"

# 3. Check Vercel deployment (if you pushed code this week)
# Visit: https://vercel.com/andygriffiths/mrmallorcagolf
# Look for green checkmark on latest deployment
```

### Google Analytics (5 minutes)
```
1. Go to: https://analytics.google.com
2. Select: Mr Mallorca Golf property
3. Check (last 7 days):
   - Users (up/flat/down?)
   - Sessions (compare to previous week)
   - Bounce rate (target: <60%)
   - Top pages (Homepage? PWAP? Courses guide?)
   - Top traffic source (Organic? Direct? Social?)

4. Log it in your monitoring sheet (see template below)
```

### Google Search Console (5 minutes)
```
1. Go to: https://search.google.com/search-console
2. Select: Mr Mallorca Golf property
3. Check:
   - Coverage (any new errors? Should be green)
   - Performance (impressions, clicks, avg position)
   - Top queries (what searches are finding you?)

4. Red flag: If impressions drop >20% week-on-week, check Search Console for crawl errors
```

### Monitoring Log Template

Save this to a spreadsheet and update every Friday:

```
Date     | Users | Sessions | Bounce% | Top Page       | Top Query        | Notes
---------|-------|----------|---------|----------------|------------------|--------
Jun 5    | 245   | 312      | 42%     | Golf Courses   | mallorca golf    | All good
Jun 12   | 251   | 325      | 41%     | PWAP           | son gual review  | GA working
```

**Success targets (by Oct 2026):**
- 300+ users/month
- 50+ sessions/month from organic search
- 2+ blog posts ranking in Google top 10
- Zero site errors
- CTR improving month-on-month

---

## 🛠️ Three Core Workflows

### Workflow 1: Update a Skill

**When:** You want to change how Claude works (update course list, keywords, business rules, etc.)

```powershell
# Step 1: Edit the file in Google Drive
# File: C:\Users\andyg\My Drive\Mr Mallorca Golf\Active\Skills\MMG_SKILL_*.md
# Example: MMG_SKILL_BLOG_WRITING.md for course updates

# Step 2: Run sync script (from repo root)
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
.\SKILLS_SYNC.ps1

# Step 3: Verify output
# Look for: "All skills synced successfully"
# Cowork will auto-load new skill on refresh
```

**Skills available:**
1. MMG_SKILL_BLOG_WRITING.md → blog-writing
2. MMG_SKILL_SEO_CONTENT.md → seo-content
3. MMG_SKILL_SOCIAL_MEDIA.md → social-media-mmg
4. MMG_SKILL_CAROUSEL.md → mr-mallorca-golf-carousel
5. MMG_SKILL_CHINESE_CONTENT.md → chinese-content
6. MMG_SKILL_CONTENT_PIPELINE.md → content-pipeline
7. MMG_SKILL_FRONTEND_DESIGN.md → frontend-design-mmg
8. MMG_SKILL_NEXTJS.md → nextjs-mrmallorcagolf
9. MMG_SKILL_BUSINESS_OPERATIONS.md → mmg-business-operations
10. MMG_SKILL_PARTNERSHIPS.md → mmg-partnerships (NEW)

---

### Workflow 2: Deploy Code Changes

**When:** You've edited Next.js, components, scripts, or site content

```powershell
# Step 1: Pre-flight checks
npm run build              # Check for errors
npm run check:content      # Validate content structure
npm run check:visual       # Visual smoke test

# Step 2: Commit
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
git add -A
git commit -m "feature: describe what changed"

# Step 3: Push
git push

# Step 4: Verify on Vercel
# Go to: https://vercel.com/andygriffiths/mrmallorcagolf
# Watch for green checkmark (deployment success)
```

**Important:** PowerShell doesn't support `&&`. Use separate commands.

---

### Workflow 3: Monthly Business Operations

**When:** Bookings come in, month-end close, or tax payment due

```
EVERY BOOKING:
├─ Create invoice (copy MMG_INVOICE_TEMPLATE.md)
├─ Save to Financial/2026/Invoices/
├─ Add row to MMG_TAX_CALCULATOR_2026.xlsx (Ledger tab)
└─ Done

END OF MONTH (Days 1–5 of next month):
├─ Open MMG_TAX_CALCULATOR_2026.xlsx
├─ Review Ledger tab (all entries logged?)
├─ Check Quarterly Summary tab (tax due coming?)
├─ Bank reconciliation vs Santander statements
└─ Backup file (File → Download as xlsx)

BEFORE QUARTERLY TAX PAYMENT (10 days before due date):
├─ Check Quarterly Summary tab
├─ Calculate: Quarterly Profit × 20%
├─ Ask gestor to confirm if unsure
├─ Transfer to tax authority on due date
└─ Save confirmation in Tax & Compliance/2026/
```

**Master reference:** `MMG_MASTER_CONTROL_CENTER.md` (Google Drive root)

---

---

## 📊 GA4 & Analytics

**Property ID:** G-0Z2BRNWB4N
**Dashboard:** https://analytics.google.com/analytics/web/

**Weekly checks (Friday morning):**
1. Users (last 7 days) — trend up/flat/down?
2. Sessions (last 7 days) — compare to previous week
3. Bounce rate — target <60% for service site
4. Top pages — which get the most traffic?
5. Top traffic source — Direct? Organic? Social? Referral?

**Monthly summary (first Friday of month):**
- Total users (last 30 days)
- Total sessions
- CTR trend
- Top 10 pages
- Top 5 traffic sources

**Success metrics (target by Oct 2026):**
- 300+ users/month
- 50+ sessions/month from organic search
- 2+ blog posts ranking in Google top 10
- Zero site errors
- CTR improving month-on-month

---

## 🔍 Google Search Console

**Property:** https://search.google.com/search-console/mrmal lorcagolf.com

**Weekly checks:**
1. Coverage — any new errors?
2. Performance — impressions, clicks, avg position
3. Top queries — what searches find you?
4. Look for drops >5% week-on-week

**Monthly deep dive:**
- Impressions (last 28 days) vs previous month
- Clicks vs previous month
- CTR — healthy is 2-5% for service sites
- Top 10 queries — are SEO targets ranking?
- Top 10 pages — which get most impressions?

---

## 🎨 Brand Identity

### Brand Colors
- **Primary Green:** `#2D4A3E` (dark teal) — premium, professional
- **Accent Gold:** `#B8973C` (warm gold) — luxury, warmth
- **Background:** `#F7F4EF` (off-white) — clean, premium feel
- **Text:** `#1A1916` (near-black) — readability

### Typography
- **Headlines:** Lora (serif, elegant)
- **Body:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI) — clean, modern
- **Spacing:** Generous (premium feel)

### Brand Voice
- Professional but approachable
- Premium positioning (coaching, not commodity)
- Expert authority (UK PGA Advanced Professional)
- Client-focused (bespoke, personalized)

**See:** `MMG_BRAND_VOICE_GUIDELINES.md` (repo root) for full writing guidelines

### Logo & Assets
- Logo: MMG wordmark in dark green
- All assets in: `C:\Users\andyg\My Drive\Mr Mallorca Golf\Active\`

---

## 📂 Where Everything Lives

| What | Location | Read/Write | Purpose |
|---|---|---|---|
| **Skills (master)** | Drive `Active/Skills/` | ✅ Edit here | Source of truth |
| **Skills (Cowork)** | AppData `skills-plugin/.../skills/` | ← Synced | Claude in Cowork |
| **Skills (Repo)** | Repo `skills/` | ← Synced | Claude Code |
| **Code** | Repo `src/`, `public/`, `scripts/` | ✅ Edit | Next.js app |
| **Dev docs** | Repo root | ✅ Edit | Development |
| **Financial** | Drive `Financial/2026/` | ✅ Edit (Ledger only) | Tracker + tax |
| **Business ops** | Drive root `MMG_MASTER_CONTROL_CENTER.md` | ✅ Reference | Single source |
| **Contacts** | Drive `Private/Workbooks/` | ✅ Edit | Courses + outreach |
| **Courses** | Drive `Courses/` + `Reference/` | ✅ Reference | Reviews + data |
| **Invoices** | Drive `Financial/2026/Invoices/` | ✅ Store | Bookings |
| **Tax** | Drive `Tax & Compliance/2026/` | ✅ Store | Forms + docs |

---

## ⚙️ Automation: SKILLS_SYNC.ps1

**File:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\SKILLS_SYNC.ps1`

**What it does:**
- Reads all 9 MMG_SKILL_*.md files from Google Drive (master)
- Copies to Cowork (`/skills-plugin/.../skills/blog-writing/SKILL.md`, etc.)
- Copies to Repo (`/repo/skills/blog-writing.skill.md`, etc.)
- Reports success/failure for each skill

**To run:**
```powershell
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
.\SKILLS_SYNC.ps1
```

**Expected output:**
```
MMG Skills Sync Script
======================
Syncing: MMG_SKILL_BLOG_WRITING.md
  ✓ Copied to Cowork
  ✓ Copied to Repo
... (8 more skills)
All skills synced successfully
```

---

## 🔑 Key Files (Know These Paths)

**Google Drive:**
- `MMG_MASTER_CONTROL_CENTER.md` — Read for anything operational
- `Active/Skills/MMG_SKILL_*.md` — All 10 skills live here
- `Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx` — Single financial tracker
- `Reference/SCORECARD_MASTER.md` — Course par/SI (read-only)
- `Private/Workbooks/MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` — All contacts
- `MMG_SKILL_USAGE_GUIDE.md` — Maps skills to folders

**Repo:**
- `CLAUDE.md` — Session context & paths
- `BRANCHES.md` — Git branch rules
- `CONTENT_WORKFLOW.md` — Content structure
- `COURSE_BLOG_PIPELINE.md` — Course review pipeline
- `MMG_BRAND_VOICE_GUIDELINES.md` — Writing rules
- `SKILLS_SYNC.ps1` — Automation script
- `skills/` — Synced copies of all 10 skills (read-only)

---

## ✅ Checklist: First Time Setup

- [ ] Google Drive mounted locally (`C:\Users\andyg\My Drive\`)
- [ ] Repo cloned (`C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\`)
- [ ] `npm install` run in repo root
- [ ] PowerShell open and ready
- [ ] Read `CLAUDE.md` in repo for project context
- [ ] Read `MMG_MASTER_CONTROL_CENTER.md` in Drive root for business context
- [ ] GA4 property verified in Google Analytics (ID: G-0Z2BRNWB4N)
- [ ] Google Search Console connected to site
- [ ] Weekly monitoring log started (spreadsheet or notes)

---

## 🚨 When Something Breaks

| Problem | Solution |
|---|---|
| Skill not updating in Cowork | Run `.\SKILLS_SYNC.ps1` again |
| Site down or looks wrong | Check Vercel status + GitHub Actions for failed builds |
| GA4 not tracking | Clear browser cache, wait 24h, verify GA4 code in repo |
| Search Console errors | Usually auto-resolve in 24-48h; check if persistent |
| Git commit fails | Check `git status`, resolve conflicts, try again |
| PowerShell syntax error | Review `POWERSHELL_SYNTAX_REMINDER.md` in repo |
| Don't know where a file is | Search `MMG_MASTER_CONTROL_CENTER.md` or this file |

---

## 🔄 Update This Panel When

- New skills are added (update skill list)
- Paths change (update locations table)
- New monitoring metrics emerge (add to GA4 section)
- New workflows are discovered (document them)

---

## Quick Links

- **Google Analytics:** https://analytics.google.com
- **Google Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Vercel Dashboard:** https://vercel.com/andygriffiths/mrmallorcagolf
- **GitHub Repo:** https://github.com/thattallkid123/mrmallorcagolf
- **Site:** https://mrmallorcagolf.com
- **llms.txt:** https://mrmallorcagolf.com/llms.txt

---

**This is your one-stop reference.** Bookmark it. When you're unsure what to do next, come back here.

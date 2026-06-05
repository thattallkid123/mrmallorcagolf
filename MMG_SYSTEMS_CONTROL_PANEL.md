# Mr Mallorca Golf — Systems Control Panel

**Last updated:** June 5, 2026  
**Status:** All systems live and in sync

---

## 🎯 The Architecture (One Picture)

```
┌─────────────────────────────────────────────────────────────┐
│                    GOOGLE DRIVE (Master)                    │
│              C:\Users\andyg\My Drive\Mr Mallorca Golf        │
│                                                              │
│  ├─ Active/Skills/                                          │
│  │  └─ MMG_SKILL_*.md (9 files) ← SOURCE OF TRUTH          │
│  │                                                           │
│  ├─ Financial/2026/                                         │
│  │  └─ MMG_TAX_CALCULATOR_2026.xlsx (canonical tracker)    │
│  │                                                           │
│  ├─ Systems & Planning/                                     │
│  │  ├─ MMG_MASTER_CONTROL_CENTER.md (single source)        │
│  │  ├─ MMG_INVOICE_TEMPLATE.md                             │
│  │  └─ ... (all operational docs)                          │
│  │                                                           │
│  ├─ Private/Workbooks/                                      │
│  │  └─ MMG_CONTACTS_COURSES_AND_COURTESY.xlsx              │
│  │                                                           │
│  └─ Courses/, Tax & Compliance/, Archive/                  │
│     (all business files live here)                         │
│                                                              │
└──────────────────────────┬──────────────────────────────────┘
         ▼                  ▼
    ┌────────────┐    ┌──────────────┐
    │   COWORK   │    │     REPO     │
    │  (Skills)  │    │    (Code)    │
    └────────────┘    └──────────────┘
   (synchronized       (synchronized
    via script)        via script)
```

**Golden Rule:** Google Drive is the master. Everything syncs outward.

---

## 📋 Quick Command Reference

| What You Want | Command | Where | Time |
|---|---|---|---|
| **Update a skill** | Edit file in Drive → Run `.\SKILLS_SYNC.ps1` | Google Drive → PowerShell | 2 min |
| **Commit code changes** | `git add -A` → `git commit -m "..."` → `git push` | Repo root (PowerShell) | 3 min |
| **Log a booking** | Add row to Ledger tab | `Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx` | 1 min |
| **Check business ops** | Read entire doc | `MMG_MASTER_CONTROL_CENTER.md` (Drive root) | 5 min |
| **See all course data** | Reference scorecard master | `Reference/SCORECARD_MASTER.md` (Drive) | 2 min |
| **Find a contact** | Search by course or type | `Private/Workbooks/MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` | 1 min |
| **View skill usage** | Reference mapping table | `Active/MMG_SKILL_USAGE_GUIDE.md` (Drive) | 2 min |

---

## 🔄 The Three Workflows

### Workflow 1: Update a Skill

**When:** You want to change how Claude works on a task (e.g., update course list, change keywords, new business rules)

```powershell
# Step 1: Edit the skill in Google Drive
# File: C:\Users\andyg\My Drive\Mr Mallorca Golf\Active\Skills\MMG_SKILL_*.md
# (Example: MMG_SKILL_BLOG_WRITING.md)

# Step 2: Run the sync script (from repo root)
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
.\SKILLS_SYNC.ps1

# Step 3: Verify
# Look for: "✓ All skills synced successfully"
# Check Cowork — new skill version auto-loads on refresh
```

**What the script does:**
- Reads all 9 MMG_SKILL_*.md files from Google Drive (master)
- Copies to Cowork (`/skills-plugin/.../skills/blog-writing/SKILL.md`, etc.)
- Copies to Repo (`/repo/skills/blog-writing.skill.md`, etc.)
- Reports success/failure for each skill

**Skills that exist:**
1. `MMG_SKILL_BLOG_WRITING.md` → Cowork: `blog-writing`, Repo: `blog-writing.skill.md`
2. `MMG_SKILL_SEO_CONTENT.md` → Cowork: `seo-content`, Repo: `seo-content.skill.md`
3. `MMG_SKILL_SOCIAL_MEDIA.md` → Cowork: `social-media-mmg`, Repo: `social-media-mmg.skill.md`
4. `MMG_SKILL_CAROUSEL.md` → Cowork: `mr-mallorca-golf-carousel`, Repo: `mr-mallorca-golf-carousel.skill.md`
5. `MMG_SKILL_CHINESE_CONTENT.md` → Cowork: `chinese-content`, Repo: `chinese-content.skill.md`
6. `MMG_SKILL_CONTENT_PIPELINE.md` → Cowork: `content-pipeline`, Repo: `content-pipeline.skill.md`
7. `MMG_SKILL_FRONTEND_DESIGN.md` → Cowork: `frontend-design-mmg`, Repo: `frontend-design-mmg.skill.md`
8. `MMG_SKILL_NEXTJS.md` → Cowork: `nextjs-mrmallorcagolf`, Repo: `nextjs-mrmallorcagolf.skill.md`
9. `MMG_SKILL_BUSINESS_OPERATIONS.md` → Cowork: `mmg-business-operations`, Repo: `mmg-business-operations.skill.md`

---

### Workflow 2: Deploy Code Changes

**When:** You've edited code (Next.js, components, scripts) and need to push to live

```powershell
# Step 1: Verify your changes
npm run build           # Check for errors
npm run check:content   # Validate content structure
npm run check:visual    # Visual smoke check

# Step 2: Commit
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
git add -A
git commit -m "feature: describe what changed"

# Step 3: Push
git push

# Step 4: Verify on Vercel
# Check: https://vercel.com/andygriffiths/mrmallorcagolf (deployment logs)
```

**Important:** PowerShell doesn't support `&&`. Use separate commands.

---

### Workflow 3: Monthly Business Operations

**When:** A booking comes in, or month-end, or tax payment due

```
EVERY BOOKING:
├─ Create invoice (copy MMG_INVOICE_TEMPLATE.md)
├─ Save to Financial/2026/Invoices/
├─ Add row to MMG_TAX_CALCULATOR_2026.xlsx (Ledger tab)
└─ Done (1–2 min)

END OF MONTH (first week):
├─ Open MMG_TAX_CALCULATOR_2026.xlsx
├─ Review Ledger tab (all entries logged?)
├─ Check Quarterly Summary tab (tax due coming?)
├─ Bank reconciliation (vs Santander statements)
└─ Backup file (File → Download as xlsx)

BEFORE TAX PAYMENT (10 days before due date):
├─ Check Quarterly Summary tab
├─ Calculate: Quarterly Profit × 20%
├─ Ask gestor to confirm if unsure
├─ Transfer to tax authority on due date
└─ Save confirmation in Tax & Compliance/2026/
```

**Master reference:** `MMG_MASTER_CONTROL_CENTER.md` (Google Drive root)

---

## 📂 Where Everything Lives

| What | Location | Read/Write | Purpose |
|---|---|---|---|
| **Skills (master)** | Drive `Active/Skills/` | ✅ Edit here first | Source of truth for all Claude skills |
| **Skills (Cowork)** | AppData `skills-plugin/.../skills/` | ← Synced (read via Cowork) | Claude in Cowork sessions |
| **Skills (Repo)** | Repo `skills/` | ← Synced (read by Claude Code) | Claude Code in terminal |
| **Code** | Repo `src/`, `public/`, `scripts/` | ✅ Edit | Next.js app (deploy to Vercel) |
| **Dev docs** | Repo root (CLAUDE.md, BRANCHES.md, etc.) | ✅ Edit | Development guidelines |
| **Financial tracker** | Drive `Financial/2026/` | ✅ Edit (Ledger only) | Income/expense entry + tax estimates |
| **Business operations** | Drive root `MMG_MASTER_CONTROL_CENTER.md` | ✅ Read & reference | Single source of truth for all ops |
| **Contacts** | Drive `Private/Workbooks/` | ✅ Edit | Courses, courtesy rates, partnerships |
| **Courses** | Drive `Courses/` + Drive `Reference/` | ✅ Reference | Course notes, scorecards, assets |
| **Invoice template** | Drive `Systems & Planning/` | ✅ Copy for each booking | Booking documentation |
| **Tax & compliance** | Drive `Tax & Compliance/2026/` | ✅ Store docs | Tax forms, gestor notes, receipts |

---

## ⚙️ System Sync Script Details

**File:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\SKILLS_SYNC.ps1`

**What it does:**
```powershell
# Reads from Google Drive (master)
Source: C:\Users\andyg\My Drive\Mr Mallorca Golf\Active\Skills\

# Copies to Cowork
Target 1: C:\Users\andyg\AppData\Roaming\Claude\local-agent-mode-sessions\skills-plugin\...\skills\

# Copies to Repo
Target 2: C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\skills\
```

**To run:**
```powershell
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
.\SKILLS_SYNC.ps1
```

**Expected output:**
```
MMG Skills Sync Script
======================
Source (master): C:\Users\andyg\My Drive\Mr Mallorca Golf\Active\Skills
Target 1 (Cowork): ...
Target 2 (Repo): ...

Syncing: MMG_SKILL_BLOG_WRITING.md
  ✓ Copied to Cowork
  ✓ Copied to Repo

... (8 more skills)

All skills synced successfully
```

---

## 🔑 Key Files (Know These Paths)

**Google Drive:**
- `MMG_MASTER_CONTROL_CENTER.md` — Read this for anything operational
- `Active/Skills/MMG_SKILL_*.md` — All 9 skills live here
- `Financial/2026/MMG_TAX_CALCULATOR_2026.xlsx` — Single financial tracker
- `Reference/SCORECARD_MASTER.md` — Course par/SI (read-only reference)
- `Private/Workbooks/MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` — All contacts
- `MMG_SKILL_USAGE_GUIDE.md` — Maps skills to folders and Cowork names

**Repo:**
- `CLAUDE.md` — Session context & paths
- `BRANCHES.md` — Git branch rules
- `CONTENT_WORKFLOW.md` — Content structure
- `COURSE_BLOG_PIPELINE.md` — Course review pipeline
- `MMG_BRAND_VOICE_GUIDELINES.md` — Writing rules
- `SKILLS_SYNC.ps1` — Automation script (just created)
- `skills/` — Synced copies of all 9 skills (read-only, sync via script)

---

## ✅ Checklist: First Time Setup

- [ ] Google Drive mounted locally (`C:\Users\andyg\My Drive\`)
- [ ] Repo cloned (`C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\`)
- [ ] `npm install` run in repo root
- [ ] PowerShell open and ready
- [ ] Read `CLAUDE.md` in repo for project context
- [ ] Read `MMG_MASTER_CONTROL_CENTER.md` in Drive root for business context

---

## 🚨 Golden Rules

1. **Google Drive is the master** — All skill edits happen there. Then sync.
2. **Run SKILLS_SYNC.ps1 after editing skills** — Keeps Cowork and Repo in sync automatically.
3. **One financial tracker** — `MMG_TAX_CALCULATOR_2026.xlsx` in `Financial/2026/`.
4. **One contacts file** — `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` in `Private/Workbooks/`.
5. **Code goes in repo** — Business files go in Google Drive.
6. **Never invent course data** — Always defer to `SCORECARD_MASTER.md` for par/SI.
7. **No `&&` in PowerShell** — Use separate command lines.

---

## 📞 When You Get Stuck

| Problem | Solution |
|---|---|
| Skill not updating in Cowork | Run `.\SKILLS_SYNC.ps1` again |
| File path not found | Check Windows path separators (`\` not `/`) |
| Git commit fails | Check `git status`, resolve conflicts, try again |
| PowerShell syntax error | Review `POWERSHELL_SYNTAX_REMINDER.md` in repo |
| Don't know where a file is | Search `MMG_MASTER_CONTROL_CENTER.md` or this file |
| Need to understand a system | Read the relevant skill (`MMG_SKILL_*.md`) |

---

## 🔄 Update This Panel When

- New skills are added (update the skill list)
- Paths change (update locations table)
- New workflows emerge (add to workflow section)
- Commands change (update quick reference)

---

**This is your one-stop reference.** Bookmark it. When you're unsure what to do next, come back here.

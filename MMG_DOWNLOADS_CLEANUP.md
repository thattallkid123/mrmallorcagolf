# Downloads Folder Cleanup — FINAL ACTION LIST

**Date:** June 5, 2026  
**Status:** Ready to execute

---

## What's Actually in Downloads (Audit)

### ✅ KEEP (Active, Referenced)
- **MMG_Business_Model.pdf** — Business strategy reference (MOVE TO: Financial/2026/)
- **mmg-crm.xlsx** — Client CRM/booking tracker (KEEP IN Private/Workbooks OR MOVE TO Financial/2026/)
- **MMG_CHINA_GOLF_OPERATORS.xlsx** — 15 Chinese golf operator emails (MERGE INTO: MMG_CONTACTS_COURSES_AND_COURTESY.xlsx or create Partners tab)
- **MMG_MALLORCA_PARTNER_CONTACTS.xlsx** — 40 affiliate/service partners (MERGE INTO: create Partners tab in contacts Excel)

### ❌ DELETE (Old, Superseded, Junk)
- `CLICK_HERE.html` — Old control panel interface (replaced by MMG_CONTROL_PANEL_INTEGRATED.md)
- `MMG-MONITORING-CHECKLIST.md` — Old monitoring checklist (integrated into MMG_CONTROL_PANEL_INTEGRATED.md)
- `NEXT_ACTIONS.md` — Old task list (use Obsidian vault or other task management)
- `FILES_AUDIT.md` — This audit itself (outdated)
- `README_CLEAN.txt` — Cleanup instructions (no longer needed)
- `FOLDER_MAP.txt` — Old folder structure
- `NEW_DASHBOARD_FEATURES.md` — Old dashboard features
- `QUICK_REFERENCE.txt` — Old quick reference
- `OLD_DOCS_READ_ONLY.md` — Archive marker
- `MMG_1_WEEKLY_CONTROL_PANEL_EXECUTION_SYSTEM.md` — Old system (archived in Drive)
- `MMG_2_BLOG_ARTICLE_DIRECTION_AND_NEXT_POSTS.md` — Old content plan (in Drive archive)
- `MMG_3_UHNWI_GROWTH_AND_PARTNERSHIP_PLAN.md` — Old growth plan (in Drive archive)
- `unified-dashboard.html` — Old dashboard (superseded)
- `MMG-UNIFIED-CONTROL.cmd` — Old control panel launcher (dead, server doesn't exist)
- `Claude - Run Backup.lnk` — Old shortcut
- All `~$` lock files (temporary Excel files — ignore)
- All other random old files

---

## What to Do With Active Files

### **File 1: MMG_Business_Model.pdf**
**Status:** ✅ Already moved to Google Drive `Financial/2026/`  
**Verify:** Open Drive → Financial/2026/ → Confirm file is there  
**Action:** Delete from Downloads after verifying

### **File 2: mmg-crm.xlsx** (Client Booking Tracker)
**Content:** 118 rows with client names, dates, courses, revenue, follow-ups, reviews  
**Purpose:** Track bookings, revenue, client feedback, repeat clients  
**Current location:** `Private/Workbooks/`  
**Decision:**  
- ✅ KEEP — This is active business data
- Optional: Move to `Financial/2026/` if you want all business tracking in one folder
- Do NOT consolidate into MMG_CONTACTS_COURSES_AND_COURTESY.xlsx (different purpose — contacts vs bookings)

### **File 3: MMG_CHINA_GOLF_OPERATORS.xlsx** (Email List)
**Content:** 15 Chinese golf operators (Peter, Jessie, Freddy, etc.)  
**Columns:** Email | Name  
**Current Location:** `Private/Workbooks/`  
**Decision:**  
- Merge into `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` as a **new "Partners/Affiliates" tab**
- OR add as a supplementary sheet in the existing file
- Keep the original as reference, don't delete yet

### **File 4: MMG_MALLORCA_PARTNER_CONTACTS.xlsx** (Affiliate Tracker)
**Content:** 40 partners — hotels, concierge, transfer operators, restaurants, experiences  
**Columns:** Company | Category | Primary Contact | Email | Status | First Sent | How? | Last Follow-up | Next Action Date | Notes  
**Current Location:** `Private/Workbooks/`  
**Decision:**  
- Merge into `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` as a **new "Affiliates" tab**
- This is the affiliate/partnership outreach tracker (referenced in mmg-partnerships skill)
- Keep the original as backup

---

## How to Merge China Operators + Partner Contacts

**Option A (Recommended):** Add new tabs to `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx`

1. Open `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx`
2. Create **new sheet:** "Affiliates" (hotels, transfers, restaurants, experiences)
3. Copy all 40 rows from `MMG_MALLORCA_PARTNER_CONTACTS.xlsx` into new Affiliates tab
4. Create **new sheet:** "China Golf Operators"
5. Copy all 15 rows from `MMG_CHINA_GOLF_OPERATORS.xlsx` into new tab
6. Save and close
7. Delete the two old standalone files from `Private/Workbooks/`

**Result:** One master contacts file with 4 tabs:
- Golf Courses (24 courses + courtesy rates + private booking info)
- Affiliates (40 partners + outreach status)
- China Golf Operators (15 operators + emails)

**Option B (If you want separate tracking):** Keep them separate but move to a "Partnerships" folder for organization.

---

## Final Downloads Cleanup

### KEEP in Downloads (Essential References)
- Nothing. Everything should be in Google Drive or repo.

### DELETE from Downloads (All of These)
```
CLICK_HERE.html
MMG-MONITORING-CHECKLIST.md
NEXT_ACTIONS.md
FILES_AUDIT.md
README_CLEAN.txt
FOLDER_MAP.txt
NEW_DASHBOARD_FEATURES.md
QUICK_REFERENCE.txt
OLD_DOCS_READ_ONLY.md
MMG_1_WEEKLY_CONTROL_PANEL_EXECUTION_SYSTEM.md
MMG_2_BLOG_ARTICLE_DIRECTION_AND_NEXT_POSTS.md
MMG_3_UHNWI_GROWTH_AND_PARTNERSHIP_PLAN.md
unified-dashboard.html
MMG-UNIFIED-CONTROL.cmd
Claude - Run Backup.lnk
MMG-weekly-seo/ (folder — old reports)
CONTROL_PANEL_ARCHIVE/ (already moved to Drive/Archive)
All ~$ lock files
```

### Optional Keep (Reference Only)
- `To Keep/` folder (if it has anything useful)

---

## Updated File Locations After Cleanup

**Google Drive (Source of Truth):**
```
Mr Mallorca Golf/
├─ Active/
│  ├─ Skills/ (10 MMG_SKILL_*.md files)
│  ├─ MMG_BRAND_VOICE_GUIDELINES.md
│  └─ ... (other docs)
│
├─ Financial/2026/
│  ├─ MMG_TAX_CALCULATOR_2026.xlsx
│  ├─ MMG_Business_Model.pdf ← (NOW HERE)
│  └─ mmg-crm.xlsx (optional: if you move it here)
│
├─ Private/
│  └─ Workbooks/
│     ├─ MMG_CONTACTS_COURSES_AND_COURTESY.xlsx ← MASTER (4 tabs)
│     ├─ MMG_CONTACTS_PUBLIC.xlsx (public-safe version)
│     ├─ mmg-crm.xlsx (if you keep it here)
│     └─ ... (others deleted)
│
├─ Archive/
│  └─ CONTROL_PANEL_ARCHIVE/ ← (already here)
│
└─ Systems & Planning/
   └─ ... (business docs)
```

**Repo:**
```
mrmallorcagolf-real/
├─ MMG_CONTROL_PANEL_INTEGRATED.md ← NEW (all-in-one reference)
├─ MMG_SYSTEMS_CONTROL_PANEL.md (initial version, can archive)
├─ SKILLS_SYNC.ps1
└─ ... (code)
```

**Downloads:** EMPTY (or only temporary work files)

---

## Execution Checklist

### Step 1: Merge Data (You do this)
- [ ] Open MMG_CONTACTS_COURSES_AND_COURTESY.xlsx in Excel
- [ ] Create new sheet: "Affiliates"
- [ ] Copy all data from MMG_MALLORCA_PARTNER_CONTACTS.xlsx into it
- [ ] Create new sheet: "China Golf Operators"
- [ ] Copy all data from MMG_CHINA_GOLF_OPERATORS.xlsx into it
- [ ] Save the file

### Step 2: Clean Up Old Files (After verification)
- [ ] Verify MMG_Business_Model.pdf is in Drive/Financial/2026/ ✅ (already done)
- [ ] Verify mmg-crm.xlsx decision (keep in Private or move to Financial)
- [ ] Delete MMG_MALLORCA_PARTNER_CONTACTS.xlsx from Private/Workbooks/
- [ ] Delete MMG_CHINA_GOLF_OPERATORS.xlsx from Private/Workbooks/
- [ ] Delete MMG_CONTACTS_PRIVATE.xlsx from Private/Workbooks/
- [ ] Delete old mmg-crm.xlsx from Downloads (if there was one)

### Step 3: Clean Downloads
- [ ] Delete all old control panel files (CLICK_HERE, MMG-UNIFIED-CONTROL, etc.)
- [ ] Delete all old docs (MMG_1, MMG_2, MMG_3, etc.)
- [ ] Delete NEXT_ACTIONS.md (use Obsidian vault instead)
- [ ] Delete all reference docs (FILES_AUDIT, README_CLEAN, etc.)
- [ ] Keep Downloads empty for temporary work only

### Step 4: Verify Everything
- [ ] MMG_CONTROL_PANEL_INTEGRATED.md is in repo root ✅
- [ ] All 10 skills are in Drive/Active/Skills/ ✅
- [ ] SKILLS_SYNC.ps1 has all 10 skills ✅
- [ ] CLAUDE.md is updated ✅
- [ ] No confusion about where to find what ✅

---

## Result

**Everything is organized:**
- ✅ Code in Repo
- ✅ Business data in Google Drive
- ✅ Consolidated contacts (courses + affiliates + china ops in one Excel)
- ✅ Control panel is ONE clear doc (MMG_CONTROL_PANEL_INTEGRATED.md)
- ✅ 10 skills synced via SKILLS_SYNC.ps1
- ✅ Downloads is clean (empty or temp work only)

**No more confusion. Everything clear.**

---

**Ready to execute?**

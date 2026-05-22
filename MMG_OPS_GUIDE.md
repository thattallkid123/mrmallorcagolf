# MMG Operations Guide

Your reference for every common task. Short steps only — no fluff.

---

## The Two Repos

| Repo | What it is | Where |
|------|-----------|-------|
| `mrmallorcagolf-real` | The public website (mrmallorcagolf.com) | `Desktop/cursor/mrmallorcagolf-real` |
| `mmg-tools` | The internal app + pricing tools | `Desktop/cursor/mmg-tools` |

**The command menu for mmg-tools** — double-click `MMG - Tools Command Menu` shortcut, or open a terminal in `mmg-tools` and run `.\mmg.ps1`

---

## 1. Update Pricing (green fees, buggy, clubs, TO discount)

**Edit on phone or PC → sync on PC → live in minutes**

1. Open **Google Drive → Reference → `MMG_COURSE_PRICING_MASTER.xlsx`**
   - Phone: tap in Drive app → opens in Google Sheets, edit, auto-saves
   - PC: double-click → Excel, edit, Ctrl+S
2. Find the course row. Change the number. Save.
3. On PC, double-click **`MMG - Update Pricing and Deploy`** shortcut
   — or in a terminal in `mmg-tools`: `.\mmg.ps1 pricing`

That's it. It syncs the JSON, updates internal/calculator/day-cost apps, commits and pushes. Netlify deploys automatically.

**Column cheatsheet (Pricing tab):**

| Column | What it means |
|--------|--------------|
| low / mid / peak | Green fee tiers in EUR |
| buggyMin / buggyMax | Buggy hire range (0 = included or N/A) |
| clubsMin / clubsMax | Club hire range in EUR |
| toDiscount | Tour operator discount % (Arabella = 15, blank = none) |
| gcType | 2for1 / disc / special / pkg / none |
| golfcard | TRUE = Golf Card Mallorca accepted |
| licence | TRUE = 3 EUR daily golf licence applies |

**Yellow rows** = Arabella group (Son Quint, Son Muntaner, Son Vida, Palma P+P) — all 15% TO discount.

---

## 2. Log Course Intel (perks, deals, news, content ideas)

**When you hear anything interesting about a course — free balls, summer buggy deal, renovation, etc.**

1. Open **Google Drive → Reference → `MMG_COURSE_PRICING_MASTER.xlsx`**
2. Go to the **Course Intel** tab
3. Add a new row:

| Column | What to put |
|--------|------------|
| courseId | e.g. `alcanada`, `son_gual` — must match Pricing tab |
| course | Friendly name, e.g. `Alcanada` |
| date | Today's date, e.g. `2026-05-16` |
| type | `perk` / `deal` / `news` / `content` |
| detail | Exactly what you heard, plain English |
| source | `direct` / `whatsapp` / `email` / `website` / `friend` |
| routes | Where it should go: `blog`, `social`, `internal` |
| used | Leave as `FALSE` |

4. Save the file.
5. On PC, in a terminal in `mmg-tools`: `.\mmg.ps1 intel`

This exports everything unused to **`COURSE_INTEL_QUEUE.md`** in your Drive Reference folder — sorted by type, ready to use as a content brief or reference.

**Colour guide in the sheet:**
Yellow = perk · Blue = deal · Purple = news · Orange = content idea · Green = already used

---

## 3. Publish a New Blog Post (Course Review)

1. Have your notes ready (scores, impressions, any photos).
2. Open **Cowork / Claude** and say:
   > *"I want to write a course review for [Course Name]. Here are my notes: …"*
3. Review the draft, ask Claude to adjust anything.
4. Once happy, deploy (see Section 5).

Claude reads `MMG_BRAND_VOICE_GUIDELINES.md` and `COURSE_BLOG_PIPELINE.md` automatically before writing.

---

## 4. Add Course Photos

1. Keep originals untouched — never edit the source files.
2. Tell Claude: *"Process photos for [course name]"* and point it to the folder.
3. Claude auto-rotates (EXIF), resizes to max 1600px, saves as WebP quality 82.
4. Place processed images in `public/images/[course-name]/`.
5. Deploy (Section 5).

---

## 5. Deploy the Website

**Any change to mrmallorcagolf.com needs this.**

Open a terminal in `mrmallorcagolf-real`:

```
npm run predeploy
```

Fix any errors it flags. Then:

```
git add -A && git commit -m "describe what changed" && git push
```

Vercel auto-deploys. Live in ~1–2 minutes. Check: [mrmallorcagolf.com](https://mrmallorcagolf.com)

---

## 6. Add or Fix a Translation

1. Always change English first and deploy.
2. Tell Claude: *"Update the [DE/ES/FR/NL/SV/ZH] version of [page] to match English"*
3. Claude edits the file. Run predeploy, then deploy (Section 5).

**Rule:** Never add content to a language page that isn't in the English master.

---

## 7. Weekly Monitoring (Every Friday, ~15 min)

Full checklist: `Downloads/MMG-MONITORING-CHECKLIST.md`

Quick version:
- [Google Analytics](https://analytics.google.com) — users, sessions, top pages
- [Search Console](https://search.google.com/search-console) — coverage errors, clicks, top queries
- Visit [mrmallorcagolf.com](https://mrmallorcagolf.com) — click around, look for anything broken

---

## 8. Backup Claude Config

Double-click **`Claude - Run Backup`** shortcut in Downloads.

Copies your Claude skills, plugins, and settings to `Desktop/cursor/claude-config-backup` and pushes to git.

---

## 9. Key File Locations

| What | Where |
|------|-------|
| Pricing + Intel Excel | Google Drive → Reference → `MMG_COURSE_PRICING_MASTER.xlsx` |
| Pricing JSON (master) | Google Drive → Reference → `MMG_COURSE_PRICING_MASTER.json` |
| Pricing readable view | Google Drive → Reference → `MMG_COURSE_PRICING_MASTER_READABLE.md` |
| Course intel queue | Google Drive → Reference → `COURSE_INTEL_QUEUE.md` |
| Brand voice guide | `mrmallorcagolf-real/MMG_BRAND_VOICE_GUIDELINES.md` |
| Course blog pipeline | `mrmallorcagolf-real/COURSE_BLOG_PIPELINE.md` |
| Work status / to-do | `mrmallorcagolf-real/MMG_WORK_STATUS.md` |
| Weekly monitoring | `Downloads/MMG-MONITORING-CHECKLIST.md` |

---

## 10. When Things Go Wrong

| Problem | Fix |
|---------|-----|
| `npm run predeploy` fails | Read the error → ask Claude: *"predeploy failing: [paste error]"* |
| Site looks broken after deploy | Check [Vercel dashboard](https://vercel.com/dashboard) → ask Claude with the error |
| Pricing not updating on internal app | Run `.\mmg.ps1 pricing` again in mmg-tools |
| Internal app showing wrong TO discount | Check `toDiscount` in Excel, re-run `.\mmg.ps1 pricing` |
| Intel queue not exporting | Run `.\mmg.ps1 intel` in mmg-tools |
| Not sure what to work on next | Check `MMG_WORK_STATUS.md` |

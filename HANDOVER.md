# Mr Mallorca Golf — Site Direction Handover
**Date:** May 2026  
**Branch:** `itinerary-preview`  
**Preview URL:** https://mrmallorcagolf-live-git-itinerar-b2066d-andys-projects-a93bc04b.vercel.app  
**Live site:** mrmallorcagolf.com (on `main` — unchanged)

---

## Why the site is changing direction

The old framing led with Play With a Pro as the headline product. The problem: most visitors want a golf trip, not a coaching day. PWAP as the front door was filtering out the majority of potential customers.

The new direction: **trip planning first, PWAP as a premium add-on**. Andy's value is that he knows the island, the courses, and can help visitors avoid expensive guesswork. The itinerary planner makes that tangible immediately — visitor lands, builds a draft trip, sends it to Andy. PWAP sits inside the trip as something worth adding, not the thing you're selling.

Core promise: *"I know the island, I know the courses, and I can help you avoid expensive guesswork."*

---

## Voice

First person throughout. Andy as guide, not agency.

- "I would base you around Palma" — not "we recommend"
- "Here is what I would do with your trip" — not "our team curates"

Check every page for "Andy has..." or "we offer..." and rewrite in first person. This applies everywhere.

---

## What was built on this branch

### Itinerary planner (`/itinerary`)
Interactive trip builder. Visitor selects: trip length, group type, golf appetite, base/region, season, budget, and priority chips (championship courses, scenery, low travel time, dining, day with Andy, club hire, transfers). Output panel shows Andy's first draft: recommended base, 3-course mix, trip rhythm, seasonal advice, add-ons. WhatsApp CTA pre-fills a message with the full draft.

Files: `src/app/itinerary/page.jsx` and `src/app/itinerary/ItineraryPlanner.jsx`

### Credential logo bar (homepage)
Currently **text-only as a placeholder** — this still needs finishing (see below).

### Credentials grid (homepage, further down)
6-cell grid, all uniform: italic gold number mark, serif title, detail paragraph. Intentional — keep as-is.

### Play With a Pro page
Rewritten to lead with what the guest experiences. Positioned as insider access and curation, not a coaching product.

### About page sidebar
Was slipping into third person — corrected to first person.

---

## Credential logo bar — what it should look like (NOT done yet)

**Reference:** https://www.montclairchef.com/ — scroll below the hero. Clean horizontal strip of logos on white, uniform height, no text labels. That is the target.

**The four credentials (in this order):**
1. Trackman Master
2. PGA Advanced Professional
3. TPI Level 3
4. US Kids Top 50 Coach

Order is deliberate: Trackman first (modern technical depth), PGA Advanced (teaching credential), TPI (biomechanics), US Kids Top 50 (structured, patient coach).

**What's needed:** clean horizontal wordmark SVGs or transparent PNGs — not circular badge seals, those are unreadable at small sizes. If only badges are available from the official bodies, the text-only treatment stays.

**Where to put logo files:** `public/images/credentials/`  
Filenames: `logo-trackman.svg`, `logo-pga.svg`, `logo-tpi.svg`, `logo-uskids.svg`

**Where to edit:** `src/app/HomePageInner.jsx` — section with class `cred-logo-bar`. Replace the text-only blocks with `<Image>` components at ~44px height, white background, no labels. CSS is in `src/styles/globals.css` under `.cred-logo-bar`.

**Secondary strip** (About page / below the four credentials): Pebble Beach · Costa Cruises · Evian · Doral · Open Championship · China national team coaching. This is proof-of-range, not equal to the four above.

---

## Photos — where things live

**Live site reads from:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\public\images\`

A file only goes live when it is copied into that folder and referenced in the code. Nothing in Documents or Drive is live by default.

Key subfolders:
- `public\images\courses` — all-courses page images
- `public\images\career\` — 8 career strip cards (all placeholders, need real photos — see below)
- `public\images\credentials\` — where credential logos should go (folder may need creating)
- `public\images\[slug]-blog\` — blog/review post images

**Source/reference library** (not live): `C:\Users\andyg\Documents\Mr Mallorca Golf\Media\`  
Andy's own photos for future use: `Media\My Photos\Fueled Photos\Site Selects\`  
Prepared course replacements: `Media\My Photos\Future Course Picks\` (Alcanada, Santa Ponsa 1, Son Gual)

---

## What still needs doing

### Before merging to live

1. **Credential logo bar** — get real horizontal wordmark SVGs/PNGs for Trackman, PGA, TPI, US Kids. Drop into `public/images/credentials/`. Update `HomePageInner.jsx` with `<Image>` components. Match the Montclair strip reference above.

2. **Career strip photos** — 8 photo cards exist but all are placeholders. Real WebP photos needed. Drop into `public/images/career/` with these exact filenames: `pebble-beach.webp`, `the-open.webp`, `evian.webp`, `doral.webp`, `cruise.webp`, `tpi.webp`, `shanghai.webp`, `egypt.webp`. Max 1600px wide, WebP quality 82, always run `ImageOps.exif_transpose()` on originals first.

3. **Mobile polish** on `/itinerary` — check layout on small screens.

4. **Clean up temp files** before merging: `.edge-qa-profile-*`, `.next-dev-300*.log`, `itinerary-desktop.png`, `itinerary-mobile.png` from the repo root.

5. **Run checks and build:**
```powershell
npm run check:content
npm run build
```

### After merge

6. **Contact form** — enquiries currently silently lost. Needs Zoho SMTP or Resend configured via Vercel environment variables.

7. **Floating WhatsApp button** — sitewide, bottom corner. Number: `wa.me/34624466702`

8. **Google Analytics** — GA4 tag on all pages, not yet live.

9. **Homepage meta title + description** — deferred until itinerary direction lands. Highest-impact SEO change.

---

## Deploy

```powershell
cd "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
git add .
git commit -m "describe change"
git push
```

Vercel rebuilds in ~60 seconds. To merge branch to live when ready:
```powershell
git checkout main
git merge itinerary-preview
git push
```

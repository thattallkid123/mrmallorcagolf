# Pricing Surfaces Inventory

Use this as the exact map when a price changes. Status column updated 2026-06-18 after €495 → €695 pass.

**Current pricing:** Solo €695 · Group €950 total · Signature Day €3,000+ · Trip planning: enquiry only

---

## Core offer pricing (repo — auto-verified)

| File | Status |
|---|---|
| `src/lib/offers-content.js` | ✅ Verified €695 / €950 |
| `src/lib/play-with-a-pro-content.js` | ✅ Verified €695 / €950 (all 7 locales) |
| `src/lib/plan-your-trip-content.js` | ✅ Verified €695 / €950 (all 7 locales) |
| `src/lib/homepage-content.js` | ✅ Verified €695 / €950 (all 7 locales) |
| `src/lib/contact-content.js` | ✅ Verified (no hardcoded price — form labels only) |
| `src/lib/page-metadata.js` | Check if price appears in meta descriptions |
| `src/lib/signup-config.js` | ✅ No hardcoded price |

## Lead magnet and MailerLite surfaces

| Surface | Status |
|---|---|
| `src/app/api/lead-magnet-signup/route.js` | ✅ No hardcoded price |
| `public/downloads/trip-planner.pdf` | ⚠️ Manual — original tracked version. No PWAP price in extracted text |
| `public/downloads/cost-guide.pdf` | ⚠️ Manual — original tracked version. €950 in text = green fee range, not PWAP |
| `public/downloads/course-comparison.pdf` | ⚠️ Manual — original tracked version. No PWAP price in extracted text |
| `public/downloads/beginners-guide.pdf` | ⚠️ Manual — original tracked version. No PWAP price in extracted text |
| `scripts/generate-lead-magnet-pdfs.py` | Check if PWAP price is hardcoded |
| MailerLite live form copy | ❌ Manual update needed — check MailerLite dashboard |
| MailerLite nurture email sequence | ❌ Manual update needed — check MailerLite dashboard |

## HTML tools / prototypes (repo)

| File | Status |
|---|---|
| `prototypes/index.html` | ✅ No hardcoded price |
| `prototypes/golf-cost-calculator/index.html` | ✅ Verified €695 / €950 |
| `prototypes/course-selector-simple/index.html` | Check — no price found in last scan |
| `prototypes/hotel-recommender/index.html` | Check — no price found in last scan |
| `src/app/(en)/tools/golf-day-builder/` | Live route — pulls prices dynamically from canonical course data, no manual update needed |

## Course pricing and golf-cost reference layers

| File | Status |
|---|---|
| `C:\Users\andyg\My Drive\Mr Mallorca Golf\Reference\MMG_COURSE_PRICING_MASTER_EDIT-THIS.xlsx` | Source of truth for green fees — edit here first |
| `src/lib/golf-courses-data.js` | Pills text (e.g. `Peak 22 / Low 14`) — manual update |
| `src/lib/golf-courses-content.js` | Course content data |
| `src/lib/guide-post-content.js` | Blog post pricing references |
| `mmg-tools/day-cost/` | ✅ Updated in Jun 2026 pass |
| `mmg-tools/guide/` | Check |
| `mmg-tools/internal/` | ✅ Updated in Jun 2026 pass |
| `standalone-apps/mallorca-hub/index.html` | ✅ Updated in Jun 2026 pass |

## Docs that mention pricing

| File | Status |
|---|---|
| `docs/pricing-change-checklist.md` | ✅ Current |
| `docs/archive/pricing-handover-2026-06-18.md` | Archived — records the Jun 2026 decision |
| `docs/pricing-surfaces-inventory.md` | ✅ This file — updated 2026-06-18 |
| `docs/content-architecture.md` | Check for hardcoded price references |
| `CLAUDE.md` | No hardcoded price (pricing rules link out to checklist) |

## External / manual surfaces

Only surfaces that actually show a price are listed. Confirmed 2026-06-18.

| Surface | Contains price? | Status |
|---|---|---|
| Google Business Profile (description, services, Q&A) | Yes | ❌ Manual update needed |
| about.me profile | Yes | ❌ Manual update needed |
| Trustpilot business profile | Yes | ❌ Manual update needed |
| WhatsApp business profile/about text | Yes | ❌ Manual update needed |
| WhatsApp saved replies | Yes | ❌ Manual update needed |
| Brochures, PDFs, rate cards shared externally | Yes | ❌ Check and update manually |
| MailerLite live form copy | No price | ✅ No action needed |
| MailerLite nurture email sequence | No price | ✅ No action needed |
| LinkedIn profile / featured services | No price | ✅ No action needed |
| Email signature and autoresponder | No price | ✅ No action needed |
| Google Reviews request copy | No price | ✅ No action needed |
| Social bios, pinned posts, highlights | No price | ✅ No action needed |

---

## Search terms to use for a price change scan

Old pricing being replaced:
- Whatever the previous price was (check `docs/pricing-handover-*.md` for history)

New pricing to confirm:
- `695`
- `950`
- `3000` / `3,000`

Rendered phrases:
- `Solo from`
- `Groups from`
- `EUR 950 total`
- `EUR 950 en total`
- `EUR 950 au total`
- `EUR 950 in totaal`
- `EUR 950 totalt`

Encoding failures:
- Search for mojibake around euro signs, bullets, arrows, or accented place names if snippets look corrupted.

---

## Regeneration commands

```bash
# Repo content checks
npm run check:content

# Rebuild lead magnet PDFs after PDF text changes
python scripts/generate-lead-magnet-pdfs.py
# or
npm run generate:lead-magnet-pdfs
```

---

## Rule of thumb

- If the price is repo-driven, update the source and regenerate any derived asset in the same pass.
- If the price is external, mark it ❌ in this file before calling the task complete.
- When the manual updates are done, update this file to ✅ so the next person knows.
- Create a new `docs/pricing-handover-YYYY-MM-DD.md` for each price change to log the decision.

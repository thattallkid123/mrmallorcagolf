## 2026-05-18

- [site] Fixed guide/review inline links rendering as literal HTML across guide pages and locales.

## 2026-05-15

- [seo] Meta title rewrites for CTR: golf-cost guide, is-mallorca-good, play-with-a-pro, son-muntaner, homepage
- [seo] Internal linking: /golf-courses links added in Son Gual/Alcanada/Son Muntaner verdicts; cross-links between the three reviews; links from golf-cost, is-mallorca, best-golf-courses articles
- [admin] CLAUDE.md: fixed stale file reference, added MMG_WORK_STATUS.md auto-read, corrected GA4 workflow
- [admin] Analytics dashboard rebuilt with GA4 + Search Console combined (4 tabs: overview, queries, pages, actions)
- [admin] Fortnightly analytics reminder scheduled: Fri 29 May, then ongoing fortnightly

## 2026-05-15

- [site] T Golf Calvià: added de/es/fr/nl/sv/zh translations to guide-post-content-localized.js
- [site] T Golf Calvià: added to non-English liveGuides in guides-content.js (all 6 locales, after Andratx)
- [site] T Golf Calvià: created language page JSX files for all 6 locales
- [site] T Golf Calvià: optimised metadata (title, description, imagePath → .jpg) for all locales
- [admin] Updated CLAUDE.md and COURSE_BLOG_PIPELINE.md with photo processing rules and large-file edit ban

## 2026-05-14

- [site] Image optimization: converted all JPG/JPEG references to WebP (498 code replacements across 6 lib files), created 213 WebP files, original JPGs preserved for backup
- [content] T Golf Calvià review: fixed sideways photos (rotated all 7 properly + restored 0-byte photo 2 from git), optimised file sizes 78% (9.96MB → 2.16MB), new 900x386 card image from photo 3, new 1200x630 social preview JPG, content audited against voice guide (Majorca → Mallorca, euros → €, Calvià accents)
- [admin] Consolidated MMG_BRAND_VOICE_GUIDELINES.md as single source of truth, removed reference to legacy MMG_AI_MISTAKES file
- [admin] Created COURSE_BLOG_PIPELINE.md — one-pass workflow for future course blogs (transcript + numbered photo links → live post)
- [admin] Updated BUGS.md with EXIF transpose lesson and pipeline reference
- [content] T Golf Calvià review: page created, 7 photos processed, content added — hidden from guides index pending approval

## 2026-05-11

- [site] Quick-win UX fixes: centred Beehiiv newsletter on homepage and contact page
- [site] Added regional course pills to golf-courses geography section (replaced flying text with visual pill layout)
- [site] Updated € pricing across all 6 language versions of club hire guide (€30–60 airline fees detail)
- [site] Fixed contact form: made handicap field smaller with "optional" label, expanded dates field to textarea

## 2026-05-10

- [admin] Set up GA4 analytics script — `python ga4_analytics/ga4_report.py` pulls live data from Google Analytics
- [admin] Created MMG Analytics GCP project (precise-ascent-495813-r0), enabled GA4 Data + Admin APIs, OAuth client configured
- [admin] Built MMG analytics live artifact dashboard in Cowork sidebar (mmg-analytics)

## 2026-05-09

### Mr Mallorca Golf
- [content] Generated MMG_BRAND_VOICE_GUIDELINES.md from published blog posts, Instagram content, and email corpus — saved to repo root
- [admin] Updated CLAUDE.md to reference brand voice guidelines so they are loaded automatically every session
- [social] Wrote Instagram intro/bio post for @mrmallorcagolf covering Andy's background, China, play-with-a-pro, and lifestyle details
- [social] Attempted to rebuild Alcanada, Son Muntaner, and Santa Ponsa 1 carousels to match Son Gual gold standard; concluded ChatGPT image generation is the right tool for pixel-accurate carousel slides
- [site] Fixed PWA apple-touch-icon on MMG apps — iOS ignores SVG for home screen icons; switched to PNG, updated apple-touch-icon link in HTML head
- [site] Audited all MMG apps for consistent favicon and PWA icon setup

### Tech / AI Workflow
- [site] Fixed Strokes Gained app header logo back to original green webp, fixed status pill padding overflow on mobile

---

## 2026-05-08

### Mr Mallorca Golf
- [admin] Appended full 24-course scorecard data (par, SI, distances, CR/slope) to GDrive Reference/MMG_COURSE_MARKET_REFERENCE_2026.md
- [admin] Moved mallorca-course-scorecards.docx and translation-notes.md to GDrive Reference/
- [admin] Deleted stale desktop copies of MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md, MMG_WHICH_FILES_TO_USE.md, signature images, temp PS1 scripts, and audit CSVs from C:\Users\andyg\Desktop\cursor
- [admin] Moved mallorca_golf_calculator.html to GDrive Tools/
- [admin] Deleted incorrectly-placed docs/MMG_COURSE_MARKET_REFERENCE_2026.md from repo
- [admin] Cleaned Cursor folder — deleted confirmed-safe dead code (src/, golf-carousel-studio/, consolidation-logs/); verified archive-to-review photos and main repo are in sync
- [admin] Built MMG-Master-Template.pptx (15 slides): brand reference (colours, typography, logos, gradient guide), Son Gual example carousel, blank 5-slide carousel template with placeholder text and embedded pine gradient PNG
- [admin] Fixed logo slide in MMG-Master-Template — now shows all 8 logo variants with correct contrasting backgrounds; corrected gradient how-to instructions to use Insert Photo → Send to Back workflow

### Tech / AI Workflow
- [admin] Wrote NEW-LAPTOP-SETUP.md with full machine transfer checklist (tools, repos, npm install, Claude folders, fonts, Zoho re-auth)
- [admin] Fixed Windows registry so PS1 files show "Run with PowerShell" in right-click menu

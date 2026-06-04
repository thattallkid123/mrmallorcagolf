## 2026-06-02

### Mr Mallorca Golf
- [site] Website photo positioning: added 3 premium Andy shots to homepage intro and PWAP page; homepage hero now shows Andy smiling on-course (warm, approachable), PWAP page hero and mid-section show coaching moments with clients
- [site] Fixed PWAP page layout: removed 6-photo collage from pricing section, restored clean pricing copy ("all inclusive" framing), moved collage to dedicated grid between "Which course?" and "What's included" blocks with proper crop and spacing
- [site] Fixed carousel image display: changed objectFit from 'cover' to 'contain' so full photos visible without face cropping, supports portrait and landscape dimensions
- [site] Fixed page width constraint: added max-width: 1200px wrapper to `.pwap-day` section so layout matches other pages (was breaking out of bounds on mobile)
- [site] Fixed "Which course?" carousel: switched to single 6-photo auto-scroll carousel (1px/frame, 1.8s pause on interaction), removed duplicate carousel, matches career-strip and proof-of-work scroll behavior
- [site] PWAP copy: removed "the round has a rhythm to it" and "background shapes the day but doesn't dominate" banned constructions, tightened to "A round of golf, played properly"
- [site] Fixed locale parity CI error: added missing 6th Signature Day feature ("Priority booking") to DE/ES/FR/NL/SV/ZH; all non-EN locales now match EN feature count
- [site] Credentials logos: reduced from 72px to 56px tall, lowered to 55% opacity (icons more subtle), fixed mobile wrapping to stay 4-in-a-row, added colour on hover, balanced padding top/bottom to 88px each side
- [admin] Reorganized MMG course research files: triaged `MMG_COURSES_RESEARCH_2026.docx` (March, research notes, 30.7KB) vs `MMG_COURSE_MARKET_REFERENCE_2026.md` (May 1, public reference, 41.5KB); confirmed .md is working version with all 24 courses, par/SI, pricing benchmarks
- [automation] Installed Playwright in mrmallorcagolf-real repo; built all-locale check to validate content parity across 7 languages

### Personal Systems
- [admin] Set up Autonomo business file structure: clarified `MMG_Financial_Reference_2026_v3.xlsx` already existed in Drive Active, deleted Downloads duplicate and superseded cashflow file, confirmed Autonomo projection files in Drive To Do
- [business] Spain self-employed tax setup: created comprehensive Autonomo tracker Excel workbook with 5 tabs (Ledger, Invoices, Tax Calculator, Tax Brackets, Gestor Questions) for tracking income/expenses, generating quarterly Modelo 130 estimates, and preparing for gestor meeting
- [business] Cuota Cero Baleares 2026 deadline flagged (10 June 2026); application starts at caib.es/seucaib, eligible for ~€960 subsidy over 12 months; also Makro card instant via app with NIE + RETA doc

### Tech / AI Workflow
- [automation] Created changelog automation task: reads session history, generates entries with proper tags and dates, maintains state file to avoid duplicates

## 2026-05-25

### Mr Mallorca Golf
- [business] Researched UHNWI partnership opportunities in Mallorca: Mandarin Oriental Punta Negra (opens 1 Jun 2026), Mashie Golf (11k UK members), IPM Group yachts, villa/concierge channels; saved strategy doc to Drive Active with Tier 1 outreach targets
- [admin] Corrected UHNWI strategy doc: Chinese visa-free policy applies to Spain→China not Chinese into Spain; corrected arrival stats and China growth angle

### Personal Systems
- [admin] Set up Autonomo business file structure: clarified `MMG_Financial_Reference_2026_v3.xlsx` already existed in Drive Active, deleted Downloads duplicate and superseded cashflow file, confirmed Autonomo projection files in Drive To Do

## 2026-05-24

### Mr Mallorca Golf
- [site] Fixed GitHub itinerary-preview styling: 4-card grid on homepage (auto-fit), note below features, Enquire button spacing/padding tightened across all pricing cards
- [site] Restructured site pricing and packages on itinerary-preview branch (work in progress, workspace instability)
- [admin] Cleaned up GitHub branches: identified stale branches (aeo-seo, seo-i18n-foundation, legacy-live-pre-i18n, test/email-identity), deleted email test branch, clarified what each branch is for
- [admin] Generated public Vercel share link for itinerary-preview (24hr link for stakeholder review)
- [admin] Created HANDOVER.md for itinerary-preview branch with site direction rationale, voice rules, photo locations, and outstanding task list
- [admin] Built `MMG_REPO_TIDY_AND_DIRECTION.md` and saved to Drive Active — comprehensive handover doc for switching to lighter models for mechanical cleanup tasks

### Tech / AI Workflow
- [automation] Installed Playwright in mrmallorcagolf-real repo and created `render-page.mjs` headless renderer for visual QA

## 2026-05-23

### Mr Mallorca Golf
- [site] Guides page redesigned: course reviews as scroll carousel (light bg) + articles as second dark-row carousel; hover zoom fully contained (no colour bleed)
- [site] Fixed em dashes in `whatNext` body copy across all 7 locale contact form panels
- [admin] Organized Reference/scorecards/ folder: 17 PDF scorecards confirmed, 1 image (Son Servera), 3 HTML offcourse pages, 3 data-only entries; wrote INDEX.md with all 24 courses par+SI
- [admin] Built `MMG_Scorecards.xlsx` from SCORECARD_MASTER.md — 3 tabs (Codex Flat 396 rows, Hole by Hole, Course Summary); verified all 24 courses against source, fixed Vall d'Or SI typo
- [admin] Renamed Reference folder files with EDIT-THIS / DO-NOT-EDIT signals; updated internal markdown references to match
- [admin] Created player review folder structure in Drive Private/Coaching/ — archived Jo and Julien May 2025 PDFs, wrote MMG_PLAYER_REVIEW_GUIDE.md as baseline for future post-round feedback docs
- [admin] Improved MMG Control Panel HTML: added 📋 copy-path button per favourite so paths paste directly into Explorer address bar
- [business] Son Antem East blog post git issues resolved (stale lock file, branch conflicts); committed fix to main via PowerShell

### Personal Systems
- [site] Fixed Spanish language speaking app: removed stale `speechUnlocking` variable references causing silent `driveLoop` crash; pushed to GitHub/Netlify

## 2026-05-22

- [site] Localized the embedded Plan Your Trip planner across all 7 locales while keeping the visible header switch at 5 languages.
- [site] Promoted the itinerary-focused release to `main` and kept the older PWAP-focused version available as a rollback branch.
- [content] Added release notes and version-handoff files so future changes and rollback steps are easy to recover.
- [admin] Named the release branches `itinerary-focused-may-2026` and `old-pwap-focused-may-2026` for clearer future reference.
- [seo] Verified locale metadata, alternates, and shared route coverage still resolve cleanly after the release.

## 2026-05-21

- [site] Added the 4th `Plan Your Trip` card to the homepage packages and updated the PWAP card copy to match the itinerary-first release.
- [site] Reworked the homepage package grid spacing, note placement, and enquiry button layout so the four-card presentation stays tidy.
- [site] Centered the homepage pro link and aligned the itinerary package cards so the release reads consistently across views.
- [site] Added the first version of the itinerary preview and service-page refinements that led into the final release.

## 2026-05-20

- [site] Moved the credential logos to just below the About page hero for a cleaner introduction.

## 2026-05-19

- [content] Refined service-page copy, including the hosted journey note and preview text, as the itinerary direction took shape.
- [site] Softened hero overlays, lightened the CTA pill, and removed the quick-picks sidebar from the preview build.
- [site] Removed the Plan Your Trip CTA from the why-trust section and trimmed the PWAP CTAs while the new itinerary direction was being tested.
- [site] Removed the homepage featured courses carousel and tightened the signature copy / pricing layout during the preview pass.

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

- [site] Quick-win UX fixes: centred the newsletter signup on homepage and contact page
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

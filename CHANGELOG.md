# MMG Changelog

One line per thing done, most recent first.
Structure: Date → Project heading → [tag] entry.
Tags: [site] code/deploy | [content] writing/copy | [social] posts/strategy | [admin] tools/files/email | [seo] search | [business] pricing/ops | [design] visual/brand | [research] investigation/analysis

---

## 2026-05-05
- [content] Added Golf de Andratx course review (golf-andratx-review), hidden from index pending approval
- [site] Copied and renamed 6 course photos to public/images/golf-andratx-blog/
- [site] Added golf-andratx-review entry to COURSE_REVIEW_DETAILS in GuidePostView.jsx
- [admin] Updated CLAUDE.md writing guardrails to reference MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md as mandatory
- [site] Added golf-andratx-review translations (de, es, fr, nl, sv, zh) to guide-post-content-localized.js
- [site] Created 6 language page files for golf-andratx-review (de/es/fr/nl/sv/zh)

## 2026-05-02

### Mr Mallorca Golf
- [admin] Consolidated full project history into master changelog with new project-heading structure
- [admin] Set up automated daily changelog task in Cowork (runs 9 PM, writes to CHANGELOG.md automatically)
- [admin] Updated CLAUDE.md with changelog generation workflow instructions

---

## 2026-05-01

### Mr Mallorca Golf
- [site] Fixed nav link order — About moved to first position across all seven language configs
- [site] Fixed all hardcoded English strings across all 7 locales
- [site] Fixed ZH metadata across all pages (home, courses, guides, about, contact, coaching, play-with-a-pro, subscribe)
- [site] Diagnosed character-encoding garbling on Vercel as old deployed files, not new zip files; confirmed site-complete.zip files clean UTF-8
- [seo] Fixed GSC indexing issues — robots.txt sitemap URL corrected, son-muntaner-review added, coaching pages noindex
- [admin] Audited all eight skills and rebuilt blog-writing, social-media-mmg, and carousel-mmg with voice patterns and AI-pattern elimination
- [admin] Produced 10_VOICE_REFERENCE_v2.docx; wrote PROJECT_INSTRUCTIONS.md for Claude.ai Project Instructions field
- [admin] Fixed Docs 02, 03, 07, and 11 for credentials, pricing, and old green fees; produced MMG_PROJECT_FILES.zip
- [admin] Wrote Claude Code and Cursor setup briefs; produced commit-and-deploy.md with 10 logical commit groups
- [site] Identified 51 uncommitted files and committed shoot photos as first logical commit
- [admin] Rebuilt four core skills with keyword data, design reference, and edited post content
- [seo] Wrote full SEO and analytics setup brief for Claude Code
- [admin] Updated CONTACTS_AND_EMAILS.xlsx with T Golf Palma Puntiró reply and Elena Schmidkunz contact
- [admin] Created CHANGELOG.md and BUGS.md

### Home Assistant
- [admin] Built automation suite: intercom notifications, Alarmo presence arming, DreameBot scheduling, and Piper TTS morning greeting with weather

---

## 2026-04-30

### Mr Mallorca Golf
- [site] Fixed internal proposal PDF page formatting; added "Clear all" button to itinerary app to reset all client fields
- [admin] Built MMG Day Cost Guide HTML tool v1–v7 with course photos, toggles, map, and EN/DE/ES language switching
- [admin] Added 24 Mallorca courses with green fees, buggy, club hire, licence, and range-ball data; removed courtesy access from client-facing tool
- [admin] Rewrote result card descriptions — deal type, valid dates, tee time restriction on separate structured lines
- [admin] Added "Card & Pass Guide" comparison table (Golf Pass vs Golfcard vs à la Card) with per-course ✓/✗ and honest "is it worth it?" assessment
- [site] Applied copy polish across seven languages and produced mmg_copy_polish.zip
- [content] Fixed AI-pattern sentences, "highest qualification" credential claim, and "UK UK PGA" duplication across all language files
- [content] Produced comprehensive site feedback and mmg_copy_working_doc.docx

---

## 2026-04-29

### Mr Mallorca Golf
- [site] Polished Mallorca Deal 2026 itinerary app — logo flush top-left, tighter header, name-first title, gold rule, buggy/clubs detail display
- [admin] Built MMG Financial Reference spreadsheet v3 with Booking Log, Andy Profit, Day Cost Calculator, Annual Income Planner, Course Contacts, Courtesy & Rounds Log, and TO Notes tabs
- [admin] Added Iris and Julian bookings to booking log; added courtesy agreements for 23 courses
- [admin] Built per-course accurate pricing, TO rate margin calculator, annual income planner, pre-booking checklist, and course contacts tabs
- [business] Confirmed Son Muntaner played April 11 2026 and updated courtesy log

### Personal Systems
- [admin] Reviewed E:\OneDrive and C:\Users\andyg\Documents for consolidation opportunities; produced onedrive-documents-consolidation-review.md
- [admin] Wrote and ran consolidate-onedrive-documents.ps1 to migrate finance, MIGA, writing, fitness, language, marketing, travel, and golf files into OneDrive
- [admin] Wrote and ran migrate-remaining-documents-to-e.ps1 and streaming variant to continue migrating safe Documents content to E:\OneDrive
- [admin] Migrated Andy教练 content into Golf Education\Andy Griffiths Golf\Andy Coach Chinese Materials
- [admin] Migrated Dali 2021 and Student Letters into MIGA student resource folders; deleted verified-empty local folders
- [admin] Produced consolidation completion report summarising migrated folders, skipped items, protected areas, and restore notes

---

## 2026-04-28

### Mr Mallorca Golf
- [site] Built full translated Son Gual reviews for all six languages: DE, FR, ES, ZH, SV, and NL
- [site] Rebuilt all seven language guides index pages showing only Son Gual with "more coming soon" in each language
- [site] Updated PostLayout with multilingual sidebar so breadcrumbs, buttons, and section labels render in page language
- [site] Rebuilt site-complete.zip with 75 files; fixed PostImage duplication errors and Python ternary syntax errors in DE/ES/FR guide pages
- [admin] Updated publishing-schedule.docx with multilingual process section, URL structure reference, and exact Claude translation prompts
- [business] Researched Mallorca caddy rates, videographer costs, and TO privatisation terms
- [business] Built full pricing architecture: Solo €495, Group €950, Premium from €3,000; confirmed floor at €3,000 solo / €5,000+ group
- [business] Mapped TO discount structure from 2025 Alcanada contract (15% standard, 25% early bird)
- [admin] Read and interpreted Alcanada 2025 TO contract terms; produced MMG Handover Brief .docx

---

## 2026-04-27

### Mr Mallorca Golf
- [business] Updated Solo pricing to €495, Group to €950 fixed for 2–3 players; defined add-ons model
- [business] Established cancellation policy wording around 48-hour course rule
- [site] Drafted updated /play-with-a-pro copy: hero, pricing cards, multi-day replacement; removed lunch from all tiers
- [content] Reviewed MMG AI style guardrails and applied to subsequent writing
- [business] Drafted Google Business and WhatsApp descriptions with corrected pricing

---

## 2026-04-25

### Mr Mallorca Golf — Site, SEO, and Social Previews
- [site] Fixed iOS map crash bug in golf-courses page; reverted accidental Vercel push and restored clean production state
- [site] Fixed og:image to direct JPG path for WhatsApp/social previews; fixed home screen web app manifest
- [seo] Tightened SEO meta and social preview assets; audited and hardened mmg-seo plugin with MMG-specific workflows and playbook
- [seo] Updated layout.jsx so main site uses correct schema, canonical social image data, and crawler-friendly metadata
- [social] Generated and deployed public/images/social-preview.jpg at exact 1200×630 and updated all page metadata to use it
- [site] Improved main-site performance: lazy GA loading, below-fold content-visibility, simplified logo images, static asset cache headers, HSTS
- [site] Fixed nav/footer logo accessibility text; corrected mojibake in visible navigation and footer text
- [seo] Reviewed PageSpeed results: desktop 100 Performance, 96 Accessibility, 100 Best Practices, 100 SEO
- [site] Added PWA/Add-to-Home-Screen support to mmg-tools with manifests, service workers, Apple touch icons, and branded home-screen icons for Guide, Day Costs, and Deals tools
- [site] Fixed mrmallorcagolf-real/src/app/manifest.js so main website installs as "Mr Mallorca Golf" and opens /
- [social] Added robots.txt allowlists and X-Robots-Tag headers for Facebook/Twitter crawlers across Netlify tool sites
- [admin] Updated mmg-tools README and SETUP docs for calculator.mrmallorcagolf.com Netlify alias and DNS setup

### Mr Mallorca Golf — Son Termes Multilingual Rollout
- [content] Translated Son Termes review into de, es, fr, nl, sv, and zh; added locale route files and moved it into the shared multilingual review system
- [seo] Added Son Termes to each locale's visible guides index, localized metadata/H1/guide copy, and verified live translated URLs rendered cleanly

### Personal Systems
- [admin] Built interactive daily system HTML app with habit tracking, schedule blocks, and Spanish learning section

---

## 2026-04-24

### Mr Mallorca Golf
- [content] Published Son Termes course review — blog post, images, translated across all 6 locales; migrated to GuidePostView system with full-res images
- [site] Fixed em dashes in Son Termes content; fixed Browse All Courses button (white-on-white bug)
- [seo] Added schema markup, internal linking, about/contact SEO structure, newsletter embed fixes; improved multilingual redirect hygiene
- [seo] Improved homepage metadata, social metadata, canonical/hreflang output, Chinese locale handling, and legacy /coaching redirect hygiene
- [seo] Strengthened internal linking and structured data across play-with-a-pro, golf-courses, about, contact, guides, newsletter, and a-day pages
- [site] Fixed selfie crop, polaroid frame, packages photo, who 3-col, testimonials 2-col, and tablet breakpoints
- [content] Produced Son Muntaner review blog post from Andy's voice notes; confirmed green fees as dynamic pricing ~€127–€254
- [site] Produced son-muntaner-review page.jsx ready for Claude Code
- [admin] Rebuilt blog-writing, social-media-mmg, and carousel-mmg skills; corrected credentials and pricing across Docs 02, 03, 07, and 11

---

## 2026-04-23

### Mr Mallorca Golf
- [site] Landscape-cropped all banner photos with consistent objectPosition; replaced full-bleed PWAP banners with contained inline photos
- [site] Added client photos across homepage, PWAP, contact, and guides; redesigned PWAP page with polaroid-style selfie and fixed packages layout
- [admin] Fixed JS error `GOLFCARD_VOUCHER is not defined` — object was defined after `calc()` call; fixed script order
- [admin] Embedded real RGBA transparent PNG logo; added per-course Golfcard voucher terms from East Mallorca Golf reference
- [admin] Corrected MMG pricing to €495/€950/€3,000+ throughout tool; removed fake testimonial and monetise section from client-facing file

---

## 2026-04-22

### Mr Mallorca Golf
- [admin] Built publishing-schedule.docx with eight-post schedule, social pairings, and next seven posts to write
- [admin] Rebuilt site-complete.zip with SV/NL removed from nav and single Son Gual post on guides index
- [admin] Built three-tab structure for Day Cost tool: Deal Calculator / All Deals & Cards / Card & Pass Guide
- [admin] Added Son Servera punch card, Mallorca Golf Holidays 2026 package data, WhatsApp CTA, and Play with a Pro section
- [admin] Added affiliate buy links for Golf Pass, Golfcard, and à la Card; grouped courses by region matching live site
- [admin] Fixed language toggle EN/DE/ES root cause (i18n key mismatch); fixed OPTGROUP labels; tagged all hardcoded English elements

---

## 2026-04-21

### Mr Mallorca Golf
- [business] Researched Golf Pass Mallorca (€89), Mallorca Golfcard 2026 (€164), and à la Card (€109) — confirmed terms, pricing, and Andy's direct relationships as differentiation
- [admin] Built v1 Day Cost Guide calculator: season detection, tee time logic, Golf Pass/Golfcard/punch card calculation, breakeven analysis for 21 courses
- [admin] Added punch card data for Son Servera, Son Termes, Vall d'Or, Capdepera, Pula; scraped live pages for 2026 pricing
- [site] Synced all 7 language play-with-a-pro pages to confirmed English master tiers
- [admin] Updated MMG_MASTER with confirmed word-for-word copy for all three service tiers
- [admin] Built four-sheet CRM workbook: Client CRM, Enquiry Tracker, Partners & Referrals, Day Debrief Template
- [admin] Built hotel concierge pitch document and press/media pitch document
- [business] Built Year 1 monthly cash-flow model with three-sheet Excel workbook and 266 formulas
- [business] Added autónomo and Spanish tax section to Master Plan: tarifa plana, IVA, IRPF, VeriFactu, Beckham Law
- [business] Built Mr Mallorca Golf Master Plan v1 and v2 covering vision, income architecture, lifestyle strategy, content strategy, tax, phased plan, and principles
- [business] Mapped €100K and €1M revenue paths; defined 90-day action plan covering Google reviews, hotel relationships, digital products, YouTube, and press
- [content] Produced site audit Word document with 10 areas, scores, copy rewrites, and 17-item to-do table; wrote six hero headline options
- [content] Wrote FAQ rewrite, "Why Mallorca" homepage replacement, CTA hierarchy swap, and multi-day close fix
- [seo] Identified six invisible guide posts needing index addition as quick SEO win
- [site] Wrote Cloudflare Cache Rule brief for /zh performance in China

---

## 2026-04-20

### Mr Mallorca Golf
- [site] Completed pricing update €495/€950/€3000+ across all pages and all 7 languages
- [site] Fixed group pricing display bug via Codex; removed stale em dashes introduced during Codex run
- [site] Fixed CI — removed reference to deleted FillImageFrame.jsx
- [site] Aligned homepage tiers with play-with-a-pro structure (3 tiers, no pricing shown on homepage)

---

## 2026-04-19

### Mr Mallorca Golf
- [site] Removed dead code, fixed Nav locale detection, repaired pre-commit hook
- [site] Fixed broken imports from deleted FillImageFrame and experience-copy; decoded escaped unicode in Footer
- [admin] Added email signature banner asset
- [business] Managed Iris enquiry and confirmed booking: Alcanada May 1, ladies clubs, buggy, €595 fee

---

## 2026-04-18

### Mr Mallorca Golf — Website, Guides, and Publishing
- [site] Built /guides index page, PostLayout component with sidebar/pull quotes/fact boxes, and individual pages for all eight posts
- [site] Added Guides link to nav for all seven languages; built translated guides index pages for six non-English languages
- [content] Wrote all eight guide posts in Andy's voice from Doc 11 content
- [seo] Set metadata for all eight posts, each targeting a specific keyword from Doc 09
- [site] Added newsletter subscribe page, footer link, and homepage section; integrated Beehiiv embed
- [seo] Added telephone + logo to JSON-LD schema and created robots.txt with sitemap
- [admin] Set up Beehiiv — configured newsletter.mrmallorcagolf.com and Cloudflare DNS records
- [social] Advised on Instagram/TikTok/YouTube/Reddit strategy and provided 3 IG bio options for launch

### Mr Mallorca Golf — Discount, Licensing, and Business Research
- [research] Compiled full island-wide Mallorca golf discount guide covering cards, bonos, broker deals, and memberships
- [admin] Built interactive reference widget with five tabs covering all 2026 green-fee data and scenario recommendations
- [business] Researched IAGTO membership, Spanish travel agency licence, CIAN requirements, and Balearic legal obligations
- [business] Mapped phased business strategy: coaching → affiliate/content → card product → packaged itineraries
- [business] Identified affiliate revenue opportunities and assessed Mr Mallorca Golf Card concept
- [admin] Outlined autónomo setup requirements, professional indemnity insurance, and gestora recommendation

---

## 2026-04-17

### Mr Mallorca Golf
- [seo] Updated Google Analytics ID to G-0Z2BRNWB4N; added AEO llms.txt and FAQPage schema; advised against API catalog/OAuth/MCP for content site
- [site] Fixed Chinese golf courses locale strings
- [site] Standardised pricing display across live Next.js site and course-directory UI: peak/low pricing, peak-price sorting, dynamic-pricing markers, alphabetical regional lists
- [content] Replaced stale Mallorca pricing and course-count references across homepage, guides, localized content, and course data with 24-course / 21-green-fee-visitor market facts
- [content] Corrected individual course pricing for Son Muntaner, Alcanada, Son Gual, Andratx, Son Vida, Son Antem, Pula, and others
- [content] Reworked best-golf-courses-mallorca guide pages to embed the interactive course directory
- [content] Patched mojibake and corrupted text across shared source files, homepage content, course data, guide content, and localized content
- [admin] Added and strengthened repo guardrails in CLAUDE.md, .cursorrules, and project instruction docs to treat mojibake as a release blocker
- [admin] Added and validated release checks (check:text, check:locale, build verification) before shipping
- [site] Built and deployed checked production site to mrmallorcagolf-live Vercel project; cleaned up project linkage to stop double-shipping
- [admin] Updated standalone HTML guide package in Downloads/MMG-Guide-2026 to match newer pricing model and Son Muntaner status

---

## 2026-04-16

### Mr Mallorca Golf
- [admin] Built Mallorca golf pricing verification master CSV covering all 24 courses with sourced green fees
- [admin] Audited GitHub/Vercel state, verified origin/main as production source of truth, and corrected handover guidance for repo, branch, and Vercel project mapping
- [site] Removed dead localized package arrays from play-with-a-pro-content.js and homepage-content.js; verified with check:i18n-release and full next build; pushed cleanup commits
- [admin] Deleted obsolete GitHub branches course-finder, live-i18n-premium, and i18n-premium-draft; left main, legacy-live-pre-i18n, and seo-i18n-foundation

---

## 2026-04-15

### Mr Mallorca Golf
- [admin] Built next-steps.docx with 30-item task list, Google setup steps, photos brief, and revenue stages table
- [admin] Built handover.docx with 11 sections covering credentials, stack, architecture, content, photos, and next tasks
- [admin] Assessed all 12 project docs — identified outdated handover files, confirmed seven docs still current
- [admin] Rebuilt launch-guide-v2.docx with guides-section deployment step and updated checklist
- [admin] Produced CODEX-HANDOVER.md briefing Codex on repo state, branch, and safe coding rules

---

## 2026-04-13

### Mr Mallorca Golf
- [admin] Reconciled live site code onto GitHub main; verified Vercel auto-deploy for mrmallorcagolf-live; restored normal GitHub → Vercel → production flow
- [admin] Renamed and reorganized Vercel projects so current site runs from mrmallorcagolf-live with old site preserved separately as backup
- [seo] Verified robots.txt and sitemap.xml on live domain; standardised canonicals to https://www.mrmallorcagolf.com; submitted sitemap to Google Search Console
- [business] Hidden pricing on homepage and rerouted package CTAs to /play-with-a-pro so homepage sells experience while detail page carries pricing
- [content] Refined homepage and experience copy — removed over-promises, old Signature Day naming, and transport as a default inclusion
- [site] Updated homepage stats and messaging across languages including final simplified course-count presentation
- [content] Created MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md in Documents\Mr Mallorca Golf\Active as always-on anti-AI writing rules
- [site] Replaced mrmallorcagolf-real/CLAUDE.md with cleaned repo brief pointing to MMG_PROJECT_BRIEF_SHORT.md, MMG_MASTER.md, and the guardrails file
- [admin] Added MMG_WHICH_FILES_TO_USE.md as permanent cheat sheet for which MMG files to attach for writing, site work, carousels, and Chinese content
- [business] Confirmed lean always-on Claude Project file set; removed noisy attachments from active use

---

## 2026-04-12

### Mr Mallorca Golf — Content and Strategy
- [content] Compiled Mallorca Golf Complete Guide 2026 covering all 24 courses, coach directory, and tour history
- [business] Produced Mr Mallorca Golf Brand Strategy document with competitor landscape, website audit, social media strategy, and 90-day plan

### Mr Mallorca Golf — Meta AI Audit (Claude Code)
- [admin] Verified production path as GitHub thattallkid123/mrmallorcagolf on main with Vercel project mrmallorcagolf-live
- [admin] Created clean isolated worktree at mrmallorca-meta-ai-audit on branch after-meta-ai-audit from origin/main to avoid touching the dirty local clone
- [site] Reworked HomePageInner.jsx into a more luxury-led structure: stronger hero, credibility strip, value pillars, hosted-day stats, upgraded testimonials, and cleaner final CTA
- [content] Added English Meta-audit homepage positioning overrides in homepage-content.js: new hero copy, credibility messaging, private-day framing, updated FAQ and CTA language
- [site] Rebuilt PlayWithAProView.jsx into a clearer conversion page with sharper hero, cleaner pricing, inclusion/exclusion breakdown, comparison table, and stronger close
- [content] Added English Meta-audit pricing overrides in play-with-a-pro-content.js: €595 solo, €1,195 group, clearer inclusions, comparison rows, and revised final CTA
- [site] Extended globals.css with new homepage and play-with-a-pro styling including credibility strip, pillar cards, hosted stats, comparison table, and responsive updates
- [business] Reviewed Meta AI luxury redesign brief: kept strongest positioning ideas, cautioned against fake scarcity, recommended phased rollout focused on perceived value and enquiries
- [admin] Confirmed unreliable local preview process had been used; paused Meta audit after establishing live/local/preview states needed strict reconciliation before further redesign
- [site] Removed em dashes site-wide across all locales and content files
- [site] Removed dead localised homepage package arrays, stale play-with-a-pro tiers, and stale hero prices; removed unused legacy locale homepages and course finder app
- [content] Added Son Muntaner guide review to live site

---

## 2026-04-11

### Tech / AI Workflow
- [admin] Built lean CLAUDE.md, TOKEN_OPTIMISATION_GUIDE.md, and PowerShell setup script to reduce Claude/Cursor token consumption

### Mr Mallorca Golf
- [admin] Added MMG_SKILL_USAGE_GUIDE.md in Documents\Mr Mallorca Golf\Active documenting where MMG docs, live skills, repo skills, and archived voice references live
- [admin] Fixed downloaded carousel-creator.skill by unpacking it into a proper folder skill under .claude and mirroring into Active\Skills
- [admin] Updated Tools\Sync-MMGSkills.ps1 so MMG backup skill set now syncs carousel-creator alongside existing MMG skills
- [admin] Rebuilt .skill files for all core skills; wrote install-skills-content.js helper for skill bootstrapping
- [content] Confirmed active voice guidance now lives only in MMG_MASTER.md, MMG_SKILL_BLOG_WRITING.md, MMG_SKILL_SOCIAL_MEDIA.md, and MMG_SKILL_CAROUSEL.md
- [business] Produced reusable new-chat handoff for Codex listing live MMG source-of-truth docs, current pricing, brand rules, and correct skill folders

---

## 2026-04-10

### Mr Mallorca Golf — Site Build and Deployment
- [admin] Built launch-guide-v2.docx in A4 portrait format with six parts, 25-item checklist, and troubleshooting table
- [site] Rebuilt site-complete.zip replacing final-site.zip as definitive deployment file
- [site] Fixed three self-audit bugs: duplicate font imports in layout.jsx, wrong footer Play with a Pro label, nav language switcher CSS targeting span instead of a elements
- [site] Deployed audit redesign publicly on mrmallorca-audit.vercel.app then moved working version onto real domain while keeping old site as backup
- [site] Integrated multilingual live site into audit build
- [content] Propagated audit-era homepage, play-with-a-pro, about, contact, and golf-courses structure across all supported languages; cleaned up English leakage
- [content] Refined homepage stats, transport copy, and course counts across multiple iterations
- [site] Removed homepage green-fee stat and hid pricing section
- [content] Added Son Muntaner into live guides system with images and localized routes; improved guide translation quality
- [seo] Added shared guide structured data (BlogPosting and Review schema), cleaned sitemap/indexability rules, added real outbound partner links in club-hire guide
- [seo] Fixed canonical host strategy around www.mrmallorcagolf.com; aligned sitemap and metadata; prepared URL lists for Search Console
- [site] Fixed corrupted separators, obscured imagery, header CTA alignment, language switcher readability, and hero/stat sections across desktop and mobile
- [site] Compressed heaviest public images (contact.webp, guide.webp) and confirmed clean build with optimized assets
- [business] Adjusted package and pricing presentation for luxury audit direction including solo all-inclusive vs group pricing and multi-day framing
- [admin] Synced audit email env vars, tested live contact form successfully, and documented real QA enquiries sent during verification
- [admin] Added release/translation workflow docs and scripts for locale parity, English-leak detection, and repeatable i18n QA

### Mr Mallorca Golf — File Organisation and Documentation
- [admin] Reorganized MMG business material into Active, Reference, Private, Content, Media, Misc, and Archive under Documents\Mr Mallorca Golf
- [admin] Created Archive\2026-04-10 and moved old Claude/Downloads/original MMG files into dated archive
- [content] Rewrote Active\MMG_MASTER.md as main MMG source-of-truth file covering positioning, credentials, pricing rules, public vs private data, and first-hand course rules
- [content] Rewrote Active\MMG_PROJECT_BRIEF_SHORT.md as lightweight launcher brief aligned with cleaned master doc
- [business] Corrected MMG public pricing in active docs: replaced legacy €350/€450 model with current play-with-a-pro pricing structure
- [content] Created Reference\MMG_COURSE_MARKET_REFERENCE_2026.md to separate public course/green-fee research from Andy's service pricing
- [admin] Created Private\MMG_INTERNAL_CONTACTS_AND_COURTESY.md to separate courtesy rounds and internal relationship details from public-facing material
- [content] Created Active\MMG_MEDIA_POLICY.md and Active\MMG_MEDIA_INVENTORY.md to define owned, approved, and reference-only image usage rules
- [admin] Renamed and normalized key MMG files and folders for consistency; deleted redundant Documents\Claude Skills copy
- [admin] Added Tools\Sync-MMGSkills.ps1, Tools\Check-MMGSetup.ps1, and Tools\README.md to simplify skill syncing and MMG setup checks
- [social] Consolidated carousel-related materials; audited media and removed true duplicates; created My Photos\Future Course Picks for owned course replacements
- [admin] Added two new sheets to MMG_MALLORCA_PARTNER_CONTACTS.xlsx with 30 prioritised new prospects and 30 draft outreach messages

---

## 2026-04-09

### Mr Mallorca Golf
- [social] Produced Masters-week Instagram content; built nine-slide Alcanada carousel with JPGs, PPTX, and captions; built quick-post sets for Son Gual, Alcanada, and Santa Ponsa
- [site] Applied full brand/pricing audit to mrmallorca-audit (English): Nav reduced from 7 to 5 items, Coaching removed, pricing changed from 3-tier to 2-card, green fee absorbed for solo, /a-day narrative page created, About narrative paragraph added, JSON-LD schema updated
- [site] Created initial Vercel preview deployments for the audit build and confirmed redesigned multilingual site generated as a full production build
- [seo] Added guide/review schema wiring and supporting metadata updates so guide pages emit structured data consistently
- [admin] Confirmed five-language visible switcher setup while preserving hidden locale routes for direct access and future reuse

---

## 2026-04-07

### Mr Mallorca Golf
- [site] Produced i18n translation roadmap for 42 translation units across DE, ES, FR, NL, SV, and ZH; identified Phase 0 encoding corruption as prerequisite fix
- [business] Conducted strategic brand and pricing audit; identified photography as biggest conversion gap; identified Chinese market opportunity
- [admin] Built React course finder with 22 Mallorca courses, seasonal pricing, region filters, and hidden admin delete (key: mmg-admin-2026)
- [admin] Updated contacts spreadsheet with courtesy-round replies from seven courses
- [content] Applied Myron Golden framework to business and site; wrote YouTube, Instagram, and Google Business descriptions
- [content] Updated about.me bio to remove Emerald List and recentre on MMG
- [admin] Consolidated project docs into MMG_MASTER.md; created language guide post stubs for Alcanada and Santa Ponsa 1

---

## 2026-04-05

### Mr Mallorca Golf
- [site] Built /guides section with all eight posts, PostLayout, and language index pages; self-audited and fixed three bugs before finalising
- [site] Updated Nav with working seven-language switcher, real routes, no toast messages; updated Footer with SV/NL
- [site] Fixed Swedish accent-stripping bugs; fixed About H1 wrong text in FR, ES, ZH, SV, NL; fixed Chinese double-punctuation bug
- [admin] Rebuilt final-site.zip with all fixes

---

## 2026-04-01

### Mr Mallorca Golf
- [site] Finished shared multilingual draft architecture on i18n-premium-draft, moving homepage, about, contact, coaching, play-with-a-pro, golf-courses, guides index, and live guide reviews onto shared renderers and content files across locales
- [content] Completed English master source for all current and upcoming guide articles; added shared article and rendering support for seven upcoming guide routes in de/es/fr/nl/sv/zh
- [admin] Clarified branch roles (main live, seo-i18n-foundation historical cleanup, i18n-premium-draft active draft); prepared Claude handover materials
- [seo] Kept sv and nl routes available while confirming they should stay hidden from the top-right language switcher
- [business] Agreed next phase is translation completion, draft testing, then staged merge/release decisions rather than pushing draft live immediately

---

## 2026-03-31

### Mr Mallorca Golf
- [seo] Cleaned sitemap/robots/canonical/hreflang setup, unified site to non-www, restored static rendering, marked draft guides as noindex, and centralized metadata helpers
- [site] Fixed enquiry form and questionnaire end-to-end: wired forms to real API, hardened request handling with validation/rate limiting/sanitization, confirmed live email delivery
- [site] Improved performance and frontend quality: moved fonts to next/font, compressed oversized images, adopted next/image, fixed homepage course-card links, coaching layout balance, and golf-courses section styling
- [content] Repaired mangled/encoded multilingual text, fixed localized pages still showing English copy, cleaned guide-page readability and text contrast, restored missing homepage winners section
- [admin] Added repo guardrails for text corruption and locale QA; created status/workflow docs; set up phased i18n rollout plan that became the i18n-premium-draft branch
- [business] Documented Search Console follow-up steps, indexing expectations, and longer-term plan to use English as source of truth with shared templates plus per-language content

---

## 2026-03-30

### Mr Mallorca Golf
- [business] Built 90-day action plan targeting hotel concierge and superyacht crew manager channels with budget under €1,000

---

## 2026-03-28

### Mr Mallorca Golf
- [admin] Built deployment guide Word document in A4 portrait format with colour coding and 25-item checklist
- [admin] Clarified deployment: Cloudflare Pages site to be removed before Vercel DNS cutover
- [site] Confirmed next.config.js correct for Vercel standalone deployment

---

## 2026-03-25

### Mr Mallorca Golf
- [seo] Confirmed GA4 (G-0Z2BRNWB4N), Google Search Console (77 pages indexed), Bing Webmaster Tools, and Google Business Profile all active
- [seo] Added IndexNow key for Bing; added GA4 tracking, updated sitemap, added OG image
- [seo] Produced Claude Code brief covering GA4 script, robots.txt, sitemap verification, and Open Graph tags
- [site] Fixed mobile hero image positions on about and coaching pages; added hero photos and nav improvements across all languages

---

## 2026-03-24

### Mr Mallorca Golf
- [admin] Built eight SKILL.md files: blog-writing, seo-content, nextjs-mrmallorcagolf, frontend-design-mmg, content-pipeline, social-media-mmg, chinese-content, carousel-mmg
- [admin] Deployed skills to repo as docs/skills/ with .cursorrules; embedded keyword research data into seo-content skill
- [site] Confirmed contact form wired to Formspree and working

### Tech / AI Workflow
- [admin] Explained GitHub workflow and deploy process; recommended Claude Code to reduce copy/paste workflow
- [admin] Confirmed GitHub connection in Claude.ai project is manual snapshot, not live sync
- [admin] Established commit rule: small logical commits, never huge batched sessions

---

## 2026-03-22–23

### Mr Mallorca Golf
- [site] Applied copy and polish updates across all language pages; built complete translated guide posts for six languages × three posts
- [site] Fixed GolfCoursesClient language bug; redesigned contact form as prominent card layout; added WeChat card to Chinese contact page
- [site] Wired contact form to Resend across all 7 languages; fixed Alcanada and Santa Ponsa translations
- [seo] Added Bing Webmaster Tools verification, hreflang language alternates, robots.txt; expanded sitemap to 98 URLs
- [admin] Built core prompt library Word document and Claude skill documents
- [content] Drafted YouTube and Instagram strategy; outlined newsletter framing and digital products roadmap
- [business] Confirmed workflow split: Claude.ai for creation and voice, Cowork for file execution and scheduling

---

## 2026-03-21

### Mr Mallorca Golf
- [site] Built multilingual golf courses page with 22 courses and course images; built all 10 guide posts, WhatsApp floating button, JSON-LD schema, and sitemap with 80 URLs
- [site] Fixed mobile course card layout and nav breakpoint; added Son Gual blog photos, Douyin strip, Why Mallorca section, and CareerStrip to all language homepages
- [content] Wrote UX/conversion review and testimonial corrections

---

## 2026-03-19–20

### Mr Mallorca Golf
- [site] Major multilingual build deployed across seven languages; fixed pricing, stats sync, and encoding issues
- [site] Fixed nav order, guides messaging, localised guide import paths, guide build issues; updated Next.js
- [site] Initial commit and first deploy to Vercel
- [business] Finalised green fee kept separate from day rate

---

## 2026-03-18

### Mr Mallorca Golf
- [site] Completed all 48 language files: six languages × eight pages per language; added Swedish and Dutch
- [site] Diagnosed and fixed UTF-8 encoding corruption across all 36 .jsx files using Python byte-level fix
- [site] Fixed broken arrow characters, JSX syntax errors, font-size bug on .btn class, and French unescaped apostrophe syntax error
- [site] Confirmed site compiles cleanly on localhost:3000 with Guides visible in nav
- [admin] Produced all-lang-pages zip; wrote DEPLOYMENT_GUIDE.md covering GitHub setup, Vercel connection, preview URL, and safe domain switch steps
- [admin] Confirmed live site at mrmallorcagolf.com remained on Cloudflare Pages and was untouched throughout

---

## 2026-03-17

### Mr Mallorca Golf
- [site] Converted mrmallorcagolf.com from static HTML to Next.js 14 App Router
- [site] Built all six English pages and core components: Nav.jsx, Footer.jsx, PageLayout.jsx, RevealObserver.jsx, GolfCoursesClient.jsx
- [site] Fixed nav order, removed Journal link, added mobile hamburger menu and language switcher toast notifications to all pages
- [site] Fixed Play with a Pro hero spacing, dark-section text contrast, and contact form WhatsApp number; created sitemap.xml
- [admin] Iterated favicon design — settled on pine green background, gold vertical bar, flag ghost, Georgia serif wordmark
- [admin] Updated PROJECT_HANDOVER_FINAL.md, NEXT_STEPS_GUIDE.md, PROJECT_INSTRUCTIONS.md, and DESIGN_HANDOVER.md
- [content] Added Adam's full testimonial to Play with a Pro; updated Doc 11; translated homepage into DE, FR, ES, and ZH
- [seo] Decided to add SV and NL for Scandinavian and Dutch golf tourism SEO; created and submitted sitemap.xml
- [business] Confirmed no Sanity CMS needed; rebuilt guide PDF as 28-page beginner-friendly guide with Quick Start edition

---

## 2026-03-16

### Mr Mallorca Golf
- [business] Evaluated technical stack and recommended Next.js + Cloudflare Pages; confirmed full site architecture and early pricing model (Mallorca Round €500, Signature Day €650)
- [design] Analysed Cabot Cape Breton, Aman, Links Magazine, and Sidetracked as design references; established cream/pine/gold design system with Cormorant Garamond and Jost Light
- [design] Explored 40+ logo concepts; chose Mountain-M direction: two Tramuntana peaks forming an M with gold flag on summit
- [site] Built all six core HTML pages: index, about, play-with-a-pro, coaching, contact, golf-courses; added language-demo.html with EN/DE/FR/ES/ZH switcher
- [site] Built logos.html through logos-final.html with refined Mountain-M mark, lockup suite, and size-scaling tests
- [admin] Built PROJECT_HANDOVER.md and NEXT_STEPS_GUIDE.md as first comprehensive handover documents
- [content] Absorbed full Doc 11 (2,193 lines) covering all eight pages and eight blog posts; established voice and copy direction
- [seo] Defined blog publishing order by keyword priority; confirmed SEO metadata, schema, and internal linking strategy
- [admin] Researched domain registration and recommended Cloudflare Registrar
- [content] Developed "How I Built a Professional Website" sellable PDF guide, 28 pages with Quick Start edition

---

## 2026-03-13

### Mr Mallorca Golf
- [business] Ran full strategy session; confirmed three-tier package architecture (The Mallorca Round, The Signature Day, The Full Experience); produced MrMallorcaGolf_MasterStrategy.docx
- [admin] Set up Claude Project structure with nine reference documents; clarified US Kids Golf Top 50 credential as awarded designation
- [admin] Removed inaccurate references to Trackman and club hire as active service components from docs
- [content] Produced podcast/interview prep guide with 23 structured answers in Andy's voice
- [content] Drafted Reddit replies for nine Mallorca golf audience types; produced blog article topic list across 10 categories
- [content] Built membership and discount knowledge brief with verification flags; corrected public-facing claims on Michelin, continent count, and courtesy-round policies

### Personal Systems
- [admin] Produced DJI Pocket 3 filming guide covering golf-ball tracking, Med-Tele mode, and D-Log M colour workflow

---

## 2026-03-12

### Mr Mallorca Golf
- [site] Built Next.js project with multilingual App Router architecture and core pages
- [admin] Built project dashboard React app and HTML version for home screen
- [content] Produced photographer shoot brief; tracked courtesy-round policies across courses

### Home Assistant
- [admin] Fixed intercom notification blocking; updated morning greeting automation with weather logic
- [admin] Diagnosed Yina's Open Door notification failure as Tailscale missing on her phone
- [admin] Switched TTS from Google Translate to Piper; set up Piper add-on and Wyoming Protocol integration
- [admin] Fixed Tailscale External URL on Andy's iPhone and enabled Local Push

---

## 2026-03-11

### Mr Mallorca Golf
- [content] Scraped CostaLessGolf for all 22 Mallorca course pages; corrected green-fee pricing across seven courses
- [content] Added Andy's first-hand Santa Ponsa 1, 2, and 3 reviews to course database
- [admin] Built Excel contacts database with course contacts and green fees

### Home Assistant
- [admin] Diagnosed notification failure and restored phone notifications on both phones
- [admin] Produced Alarmo triggered-alert setup guide HTML; wrote Alarmo YAML automations with voice warning and HomePod siren
- [admin] Produced full interactive Home Assistant setup guide HTML covering all seven automations; confirmed entity IDs and final verified YAML

---

## 2026-03-10

### Mr Mallorca Golf
- [content] Wrote full website copy drafts v1 and v2 from Andy's voice reference document
- [seo] Built SEO keyword strategy and competitor analysis
- [content] Wrote outreach email templates for golf courses, club hire, and membership enquiries
- [business] Built business roadmap with revenue stages 1–5

### Home Assistant
- [admin] Reviewed Home Assistant integrations and 70-device setup overview
- [admin] Identified IntercomPlus (ESP32 ESPHome, LD2410 mmWave, MAX98357 speaker) and Fermax intercom with custom Weirdfish Studio PCB
- [admin] Mapped full device inventory; produced initial automation recommendations

---

## 2026-03-09

### Mr Mallorca Golf
- [business] Initial Mr Mallorca Golf strategy session: business model, service packages, target audience, and Play with a Pro positioning
- [content] Built website architecture plan and wrote first page-by-page content drafts
- [seo] Compared SEO tools and recommended stack

---

## 2026-03-07

### Personal Systems
- [admin] Produced Bryan Johnson Blueprint Protocol cheat sheet Word document

### Mr Mallorca Golf
- [business] Mapped eight business model types to the Mallorca context; drafted two Claude Project instruction documents

---

## 2026-03-05

### Mr Mallorca Golf
- [site] Built Mallorca Golf Course Comparison React tool with 21 courses, seasonal pricing, region filters, and audience filters
- [content] Established course review rule: Andy's own notes only, not assumed AI course knowledge

---

## 2026-03-03

### Personal Systems
- [admin] Designed 6-day calisthenics programme covering planche, front lever, handstand push-up, one-arm chin-up, pistol squat, and Nordic curl progressions
- [admin] Built React tracking app for the calisthenics programme

---

## 2026-03-02

### Mr Mallorca Golf
- [seo] Produced keyword research workbook covering Google, Bing, YouTube, TikTok, ChatGPT, Gemini, US market terms, and phased content strategy

---

## 2026-03-01

### Mallorca Hub
- [site] Built v12 with tag normalisation system, planner deduplication, and lunch timing fix

### Mr Mallorca Golf
- [admin] Built and updated CONTACTS_AND_EMAILS.xlsx with named course contacts, green fees, membership data, and courtesy information
- [admin] Added Membership Rates 2026 tab with course-by-course fees, couple/family rates, waiting-list status, and named contacts
- [content] Produced full blog draft: "Golf Memberships in Mallorca: What It Actually Costs in 2026"
- [admin] Established CONTACTS_AND_EMAILS.xlsx as canonical filename with no version numbers

---

## 2026-02-28

### Mallorca Hub
- [site] Built v10 with KNOWN expanded to 442 entries and iOS-compatible TripAdvisor/Maps anchors
- [site] Built v11 with geographic clustering planner, opening-hours enforcement, and iOS navigation fix

---

## 2026-02-27

### Mallorca Hub
- [site] Built v8 with iOS Safari TripAdvisor link fixes and area-filter reset on category change
- [site] Built v9 with 30+ Menú del Día entries and Weekend Planner rebuilt around Fiesta/Market/Explore/Sport toggles

---

## 2026-02-26

### Mallorca Hub
- [site] Built v5 with weather API replacement, geolocation distance, and 120+ known entries
- [site] Built v6 with iOS Safari fixes, price badges, and Hidden Gems category
- [site] Built v7 with sunrise/sunset calculator, 234 Discover entries, sorting/filtering, and 121 GPS coordinates

---

## 2026-02-25

### Mallorca Hub
- [site] Built v3 with festival date fixes, map embed, Google Places search, and Discover tab with 100+ curated places
- [site] Built v4 with restaurant notes preview, bulk multi-select, weather widget, drive time, and offline PWA mode

---

## 2026-02-24

### Mallorca Hub
- [site] Built v1 — single-file HTML app with localStorage, 12 place types, and festival calendar
- [site] Built v2 redesign with autocomplete search, custom tags, and expanded festival calendar
- [site] Built v2b with KML import and 125 personal places from Google My Maps pre-loaded

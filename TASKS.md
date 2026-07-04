# MMG Project Tasks

## Active / In Progress

### Trip Quote Builder — Chinese Version
**Status:** TODO  
**Priority:** High  
**Why:** Chinese golf tourists need the cost calculator + Quote Builder conversion funnel  
**What to do:**
- [ ] Duplicate `src/app/(en)/tools/golf-cost-calculator/GolfCostCalculatorClient.jsx` → `src/app/zh/tools/golf-cost-calculator/ZhGolfCostCalculatorClient.jsx`
- [ ] Translate all labels, buttons, explanations to Chinese
- [ ] Translate Quote Builder form fields: 邮箱, 首选日期, 其他信息等
- [ ] Adapt email template: notify Andy it's from Chinese user
- [ ] Consider WeChat contact over WhatsApp in Chinese version
- [ ] Create `src/app/zh/tools/golf-cost-calculator/page.jsx` route file
- [ ] Test full flow: calculator → Quote Builder → email submission
- [ ] Verify MailerLite integration (add to same or new group)

**Estimate:** 2-3 hours  
**Owner:** —

---

### Publish Sprint — Clear the Content Backlog
**Status:** TODO  
**Priority:** Highest (from full site audit, 2026-07-04)  
**Why:** 16 unpublished course reviews + 12 guide article drafts sit in Drive while the live site has 8 of 24 course reviews. Organic search is 3 sessions/week — it can only grow through new indexed pages, not more SEO polish. This is the single biggest growth lever.  
**What to do:**
- [ ] Andy records voice memos for the 4 "priority articles" in `Drive/MMG_UNPUBLISHED_ARTICLES_VOICE_MEMO_QUESTIONS.md`: Solo Golf Trip, Best Courses for Beginners, Golf Holiday Itinerary, Best Time of Year
- [ ] Turn each memo into a publishable guide via the existing pipeline (drafts already exist in `Drive/Content/Unpublished Guide Articles/`)
- [ ] Publish at a steady cadence: minimum 2 guides/month
- [ ] Course reviews: publish next verified course from `Drive/Content/Unpublished Course Reviews/` as played

**Estimate:** ongoing — ~2-3 hours per guide once memo exists  
**Owner:** Andy (memos) + Claude (production)

---

### Consolidate the Tools Estate
**Status:** TODO  
**Priority:** High (from full site audit, 2026-07-04)  
**Why:** Tool sprawl and drift: the handicap checker is a static file outside the design system, the green-fees prototype goes nowhere, the cost calculator exists in two parallel copies, and the tools index copy contradicts itself.  
**What to do:**
- [ ] Promote `public/handicap-checker.html` to a proper `/tools/handicap-checker` Next.js route (use the `new-prototype` skill promotion flow)
- [ ] Add handicap checker to the `/tools` index page, sitemap, and IndexNow lists
- [ ] Fix tools index copy: meta says "Four free tools", hidden hero sub says "Five" — neither counts the checker
- [ ] Decide on `prototypes/green-fees.html`: promote to a live route or park it
- [ ] Adopt rule: once a tool is live, delete/freeze its `prototypes/` copy (cost calculator currently maintained in two places)
- [ ] Then freeze — no new tools until an existing one demonstrably produces enquiries

**Estimate:** one session  
**Owner:** —

---

### Link-in-Bio Landing Page for Social Traffic
**Status:** TODO  
**Priority:** Medium (from full site audit, 2026-07-04)  
**Why:** 10 of 16 weekly sessions are organic social (mostly US), bouncing off the homepage in ~6 seconds. The full homepage isn't built for that audience.  
**What to do:**
- [ ] Build a lightweight one-screen page (e.g. `/start`): who Andy is, one guide, one tool, WhatsApp/WeChat CTA
- [ ] Point Instagram/Douyin bio links at it
- [ ] Track clicks with existing `trackEvent`/`trackLead` helpers

**Estimate:** half a session  
**Owner:** —

---

### Repo Hygiene Sweep
**Status:** TODO  
**Priority:** Low (from full site audit, 2026-07-04) — 15 minutes  
**What to do:**
- [ ] Move `MMG-Booking-Terms-Sep2026.docx` from repo root to `Drive/Bookings/` (violates "no business docs in repo" rule)
- [ ] Delete `token.json.bak` (stale secrets backup)
- [ ] Remove `netlify.toml` (site deploys on Vercel)
- [ ] Consider moving `push.sh` and `Run Claude Config Backup.bat` into `scripts/`

**Owner:** —

---

## Completed ✅

### Site Audit + Action Items Logged
**Status:** DONE  
**Completed:** 2026-07-04  
- [x] Full audit: website, tools, prototypes, analytics, docs, Drive organisation
- [x] Four action items added to Active (publish sprint, tools consolidation, link-in-bio page, repo hygiene)
- [x] Committed (8468b0f) and Vercel deploy confirmed READY

### Can I Play It? Handicap & Access Checker
**Status:** DONE (as static page — see "Consolidate the Tools Estate" for promotion to /tools route)  
**Completed:** 2026-07-04  
- [x] All 24 courses with verified access rules from encyclopaedia master
- [x] MailerLite form wired (ID 192036664270390915)
- [x] Live at /handicap-checker.html (commits 4ee3520, 13aba95)
- [ ] Not yet on /tools index, sitemap, or IndexNow — tracked in Active

### Green Fee Comparison Table — Prototype
**Status:** DONE (prototype only — promote-or-park decision tracked in Active)  
**Completed:** 2026-07-04  
- [x] Sortable/filterable table, all 24 courses, links to 8 live reviews (commit feb52ac)

### Trip Quote Builder — Live Tool
**Status:** DONE  
**Completed:** 2026-07-04  
- [x] Frontend CTA + slide-in panel
- [x] Backend API route `/api/trip-quote-submit`
- [x] Resend email to andy@mrmallorcagolf.com
- [x] MailerLite group integration
- [x] Env vars configured (.env.local)
- [x] Committed to main, deployed live
- [x] Prototype also updated for dev testing

---

## Backlog / Future

(Add future tasks here as they come up)

---

**How to use:** Add tasks to "Active / In Progress", move to "Completed ✅" when done. Reference this from other chats by filename: `TASKS.md`

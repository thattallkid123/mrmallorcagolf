# MMG Site Audit & Tasks

**What this file is:** the running record of the tools/conversion build-out that started with the
full site audit on **3–4 July 2026**. It tracks what has been shipped, why, how to test it, and
what is still open. It is both an audit log and a task list — one source of truth so the work
doesn't drift across separate docs.

**How to use:** shipped work lives under "Shipped — how to test & what's next". Open work lives
under "Active / In Progress". Move items between them as they land. Reference by filename:
`SITE_AUDIT_AND_TASKS.md`.

---

## ⚡ Current status — what's left to do / test / approve / push

**Last session: 4 Jul 2026 (round 2).** Rebuilt the handicap checker as a proper route with an
instant results email, promoted the green-fees table live, and dropped the calculator-subdomain 301.

### Shipped this session (round 2) — all built, tested, needs push
1. **Handicap checker rebuilt as a native route** `/tools/handicap-checker` (React, site header/footer,
   in sitemap + IndexNow, old `/handicap-checker.html` 301'd to it, static file deleted). Now has an
   **optional area question** and an **instant results email**: on submitting their address it emails
   the golfer their full course access list + a handicap-tier recommendation + area-based picks, via
   Resend (`/api/handicap-checker-submit`), and adds them to the MailerLite group with fields.
   **Verified:** 24 courses evaluate/group correctly; area rec works; email sends; MailerLite
   subscriber + fields populate.
2. **Green-fee comparison table promoted live** `/tools/green-fees` (React, sitemap + IndexNow, all 24
   courses, filter/sort, mobile cards). **Verified:** renders, filters, sorts; cross-links to guides
   and the course selector. Added cards for both on `/tools` and the handicap checker to the homepage
   strip.

### Why "2× email" is no longer needed
The handicap checker now **sends its own results email instantly** (Resend), so its "get your access
list by email" promise is kept **without** any MailerLite automation. The Trip Quote Builder's promise
is Andy's personal reply, so it needs no automated email either. **Zero MailerLite automations are
required** for both live tools to be honest. Nurture automations are now optional extra value (see
Active) — nothing is broken without them.

### Needs your decision / approval
- **Add "Tools" to the top nav?** Still not in the main nav (Home · About · Play With A Pro · Plan
  Your Trip · Golf Courses · Guides · Enquire). You said "not for now" — left as-is. Reachable via the
  homepage strip, in-guide links, footer, `/tools`.
- **Calculator subdomain** (`calculator.mrmallorcagolf.com`): it's a *different* tool — a "Deal
  Calculator" (green-fee/2-for-1 style), not the trip cost calculator — so **no 301 was done**. It
  needs its own look: what is it, do you still want it, does it duplicate anything? (See Active.)

### Left to test with your own eyes (after deploy)
- Open `/tools/handicap-checker` on production, run it, enter your email, confirm the **results email
  actually arrives** in a real inbox (Resend delivery to external addresses).
- Open `/tools/green-fees` and sanity-check a few prices against your rate cards.
- Course selector, day builder, hotel recommender: result-screen flows still not driven end-to-end
  (trust line + load confirmed only). Worth a manual click-through.

### Fixed in round 1 (earlier same day, already live)
1. **Handicap checker was completely broken in production** — 89 smart quotes used as JS string
   delimiters (fatal syntax error). Fixed. *(Now superseded by the full route rebuild above.)*
2. **Its email capture referenced an undefined `MAILERLITE_GROUP`** — fixed. Also created the missing
   Trip Quote Builder MailerLite fields so quote submissions enrich the CRM record.

---

## Shipped — how to test & what's next

Everything in this section is **live on www.mrmallorcagolf.com** unless a line says "prototype only".

### 1. Shareable results URLs (tool prototypes)
**Shipped:** 3 Jul 2026 (commit `522b1b0`).
**Where:** the five files under `prototypes/` — course selector, cost calculator, day builder,
hotel recommender, and the zh selector. **Prototype only — not yet in the live Next.js tools.**
**What was built:** when a tool reaches its results screen it encodes the user's answers as
`?r=<base64>` in the URL, shows a "Share your results" block with a **Copy link** button, and a
**Share on WhatsApp** button (English tools only — WhatsApp is blocked in mainland China, so the zh
selector gets copy-link only). Opening the shared link replays the same result.
**Why:** turns one visitor into several. A golfer who gets a shortlist can send it to their group,
which pulls three or four more people onto the site to decide together.
**How to test:** open `prototypes/course-selector/index.html` in a browser, complete the quiz, then
on the results screen click Copy link and paste it into a new tab — the same shortlist should load.
Repeat for the other four prototypes.
**What's next / gap:** this feature only exists in the prototypes. The **live** tools
(`src/app/(en)/tools/...`) do **not** have shareable URLs yet. Porting it is a real task — see
Active item "Port shareable results URLs to the live tools". Until then, sharing works only if
someone is on the old prototype HTML, which normal visitors never see.

### 2. Inline funnel CTAs on course review pages
**Shipped:** 3 Jul 2026 (commit `04d763e`).
**Where:** every course review guide, rendered by `src/app/(en)/guides/GuidePostView.jsx`
(`FunnelCtaBlock`, strings in `FUNNEL_CTA_STRINGS`). Live on all 8 published reviews, all 7 locales.
**What was built:** a two-link callout injected just before the booking CTA at the bottom of each
review. Link one → `/tools` ("not sure this course fits? 60-second match"), link two → `/contact`
("get a quote"). The course name is filled in dynamically, and the block is locale-prefixed on
non-English routes (`/de/...`, `/zh/...` etc.).
**Why:** a review is the most-read page type and the highest-intent moment. Previously it dead-ended
at a single booking button; now it routes an undecided reader into the tools and a decided one into
an enquiry.
**How to test:** open e.g. `/guides/son-gual-review`, scroll to just above the booking CTA, confirm
the two links appear with "Son Gual" in the copy and both go to the right pages. Check one locale,
e.g. `/de/guides/son-gual-review`, reads in German and links stay locale-prefixed.
**Note for new courses:** the block activates from `COURSE_REVIEW_DETAILS` in `GuidePostView.jsx` —
adding a new course there is now a documented step in the `publish-course-guide` skill (commit
`50173d7`).
**What's next:** once the handicap checker is a real route, add it as a third link for courses with
strict limits (Son Gual, Andratx). Consider A/B wording on link one.

### 3. "Can I Play It?" Handicap & Access Checker
**Shipped:** 3 Jul 2026 (commits `4ee3520`, `13aba95`); surfaced on `/tools` + homepage 4 Jul.
**Where:** now a native route at **/tools/handicap-checker** (`src/app/(en)/tools/handicap-checker/`,
API `src/app/api/handicap-checker-submit/route.js`). The old `/handicap-checker.html` 301s here.
**What was built:** enter handicap index (or "no official handicap"), gender, certificate status
(yes / digital app / no), and group size → instant list of which of the 24 courses you can book,
which need a certificate, and where Andy can arrange access for borderline cases. Course data is
from the encyclopaedia master (verified access rules). Optional email capture wired to MailerLite
(form ID `192036664270390915`) — "get your access list by email plus occasional planning notes".
**Why:** handicap limits and certificate rules are the #1 pre-booking anxiety, and MMG publishes the
verified figures competitors only guess at. Genuinely useful, a natural email capture, and every
result is a soft enquiry ("a few shots over? Andy can often arrange it, especially midweek").
**Status (4 Jul):** was shipped **broken** — smart-quote syntax error killed the script and the
email capture referenced an undefined var. **Both fixed and verified working locally this session**
(pending commit/push). See "Fixed this session" at the top.
**How to test:** open **/handicap-checker.html**, enter e.g. handicap 28 / male / no certificate /
1 player and confirm the course list splits correctly (5 bookable / 13 enquire / 6 certificate for
that input). Submit the email form and confirm the address lands in the "Handicap Access Checker"
MailerLite group.
**Known gap (tracked in Active):** it's a **static file**, not a Next.js route — so it has no site
header/footer, no metadata/OG, and is **not in the sitemap or IndexNow**. Its only current traffic
is the new `/tools` card and homepage strip link. Promoting it to `/tools/handicap-checker` is the
top consolidation task.

### 4. Trip Quote Builder (live cost calculator)
**Shipped:** 3 Jul 2026 (commit `bf17826`; earlier funnel `e8d48e7`).
**Where:** `src/app/(en)/tools/golf-cost-calculator/GolfCostCalculatorClient.jsx`, live at
**/tools/golf-cost-calculator**. Backend route `src/app/api/trip-quote-submit/route.js`.
**What was built:** after the calculator shows an estimate, a premium CTA ("Get a real quote from
Andy") opens a slide-in panel **pre-filled** with the user's inputs — number of golfers, days,
rounds, budget, suggested courses, and the estimate. It collects email (required), preferred dates
(optional), and notes (optional), then sends the lead to Andy via **Resend** and adds them to the
MailerLite "Trip Quote Builder" group. Success message: "Andy will come back to you personally —
usually within a few hours."
**Why:** this closes the biggest conversion leak — the gap between a free estimate and an actual
enquiry. The warmest traffic (someone who just costed their trip) now converts inline as a
structured lead instead of hitting a blank contact form.
**Status (4 Jul):** tested end-to-end this session via the API — Resend email to Andy sends, and the
subscriber lands in the MailerLite "Trip Quote Builder" group with all 8 fields populated (the
missing MailerLite fields were created this session). **Working.**
**How to test:** open **/tools/golf-cost-calculator**, complete all steps to the estimate, click the
quote CTA, fill the panel with a test email, submit. Confirm (a) the success message shows, (b) an
email arrives at andy@mrmallorcagolf.com with the pre-filled trip details, (c) the address appears
in the MailerLite Trip Quote Builder group with fields filled. Requires `RESEND_*` and MailerLite
env vars in `.env.local` (already configured).
**What's next:** a Chinese version is the top Active task (see below). Consider also firing the quote
CTA from the course selector shortlist, not just the calculator.

### 5. Green Fee Comparison Table
**Shipped:** 3 Jul 2026 (prototype); **promoted live 4 Jul** at **/tools/green-fees**
(`src/app/(en)/tools/green-fees/`).
**What was built:** all 24 courses with encyclopaedia-sourced peak/low fees, buggy cost, walking
rules, handicap limits and a one-line verdict. Sortable and filterable by area, budget and walking;
card layout on mobile; links to the 8 live review guides.
**Why:** "Mallorca green fees" is high-intent search, and a maintained, dated table is the kind of
reference forums and Reddit link to. Freshness is a trust signal stale competitor pages can't match.
**How to test:** open `prototypes/green-fees.html` in a browser; sort by fee, filter by area and by
walking, and confirm the review links open the right guides.
**What's next (tracked in Active):** promote to a live route (e.g. `/green-fees`) driven from the
pricing master JSON so `mmg.ps1 pricing` keeps it current, with a visible "Prices updated [date]"
stamp. This is the strongest remaining pure-SEO play and it's ~90% built.

### 6. Tool trust signals + homepage tools strip
**Shipped:** 4 Jul 2026 (commit `4d3478c`, Vercel READY).
**Where:** new `src/components/ToolTrustLine.jsx` (Trustpilot mini badge + "Built by Andy
Griffiths · UK PGA Advanced Professional, based in Mallorca") added under the hero on all four
English tools — course selector, cost calculator, day builder, hotel recommender. New
`src/components/HomeToolsStrip.jsx` replaces the single course-selector card on the English homepage
with a four-card strip (course finder, handicap checker, cost calculator, hotel recommender) plus
"See all free tools", the no-sign-up fineprint, and the Trustpilot badge. The `/tools` index gained
a "Can I play it?" card and a Trustpilot text badge in Andy's note.
**Why:** the tool pages carried none of the social proof the service pages have — adding one line of
credibility above the first question lifts both completion and email opt-in. The homepage was
under-selling the suite by showing only one of five tools.
**How to test:** open **/tools/course-selector**, **/tools/golf-cost-calculator**,
**/tools/golf-day-builder**, **/tools/hotel-recommender** and confirm the Trustpilot + PGA line sits
under each hero. Open the **homepage** (English) and confirm the four-card tools strip replaced the
old single card; check it on mobile (cards stack). Confirm the trust line does **not** appear on the
Chinese course selector (it's gated to `lang === 'en'`).
**What's next:** localise the trust line if/when tools get German versions; consider adding a real
testimonial line, not just the badge.

---

## Active / In Progress

### Port shareable results URLs to the live tools
**Priority:** Medium. **Why:** the share feature (item 1) only exists in the prototypes; live tool
users can't share. Reimplement the `?r=base64` encode/replay + copy-link + WhatsApp share inside the
four live `src/app/(en)/tools/...` clients (and the zh selector, copy-link only).

### Trip Quote Builder — Chinese version
**Priority:** High. **Why:** Chinese golf tourists need the calculator + quote funnel too.
- [ ] Duplicate `GolfCostCalculatorClient.jsx` → `src/app/zh/tools/golf-cost-calculator/ZhGolfCostCalculatorClient.jsx`
- [ ] Translate all labels, buttons, explanations, and quote form fields (邮箱, 首选日期, 其他信息)
- [ ] Adapt the email so Andy sees it's from a Chinese user; prefer WeChat over WhatsApp
- [ ] Add `src/app/zh/tools/golf-cost-calculator/page.jsx` route
- [ ] Test full flow calculator → quote → email; wire MailerLite group
**Estimate:** 2–3 hours.

### Promote the handicap checker to a real route — DONE (4 Jul)
- [x] Rebuilt as `/tools/handicap-checker` (React route, native chrome); added to `/tools` card,
      homepage strip, sitemap, IndexNow; 301'd the old `.html`; deleted the static file
- [x] Added instant Resend results email + optional area question + MailerLite group/fields
- [ ] **Still open:** add it as a third inline-CTA link on strict-limit course reviews (Son Gual,
      Andratx)

### Promote the green fees table to a live route — DONE (4 Jul)
- [x] Promoted `prototypes/green-fees.html` → `/tools/green-fees` (React route, sitemap, IndexNow,
      `/tools` card); visible "Last updated: July 2026" stamp; cross-links to guides + selector
- [ ] **Still open:** wire the fee numbers to the pricing master JSON so `mmg.ps1 pricing` keeps them
      in sync automatically (currently hardcoded from the encyclopaedia master — accurate as of Jul 2026)

### Optional: MailerLite nurtures for the two newest groups
**Priority:** Medium (nice-to-have, not required — the tools are honest without these; see status
block). **Why:** the "Trip Quote Builder" and "Handicap Access Checker" groups capture subscribers
but have **no automation** yet, so no *ongoing* nurture beyond the immediate email/handicap results.
The other 5 tools each have a nurture. This is now extra value, not a broken promise.
- [ ] (Optional) Build a short "Handicap Access Checker" nurture sequence — the instant results email
      is already handled in code, so this is follow-up value only. Trigger = joins that group.
- [ ] (Optional) Build a "Trip Quote Builder" nurture / holding email. Trigger = joins that group.
- [ ] Must be built in the MailerLite visual automation builder (not reliably creatable via API).
      I can draft the email copy in brand voice on request.

### Investigate the Deal Calculator subdomain
**Priority:** Medium. **Why:** `calculator.mrmallorcagolf.com` is a separate "Deal Calculator" tool,
not the trip cost calculator — so it was NOT 301'd. Needs a proper look.
- [ ] Confirm what it does and whether it's still wanted
- [ ] Decide: fold into the main site as a tool, retire it, or leave it — then handle SEO accordingly

### Email capture on Day Builder and Hotel Recommender
**Priority:** High. **Why:** course selector and handicap checker capture email; these two don't.
- [ ] Add an optional "email me this plan / shortlist" step at the results stage of each, reusing
      the MailerLite JSONP pattern from `CourseSelectorToolClient.jsx` (new group + form per tool)

### Consolidate the tools estate (audit item, 4 Jul)
**Priority:** High. **Why:** sprawl and drift.
- [ ] Fix `/tools` index copy count (meta/hero said "Four"/"Five", neither counted the checker)
- [ ] Rule: once a tool is live, delete/freeze its `prototypes/` copy (the cost calculator is
      currently maintained in two places)
- [ ] Then freeze — no new tools until an existing one demonstrably produces enquiries

### Add "Tools" to the top navigation (needs approval)
**Priority:** High-value quick win. **Why:** tools are invisible on every page except the homepage.
- [ ] Add a "Tools" link → `/tools` in `src/components/Nav.jsx` for all 7 locales (Tools / Werkzeuge
      / Outils / Herramientas / Hulpmiddelen / Verktyg / 工具)
- [ ] Check the nav doesn't overflow on mobile with the extra item

### Broken prototype HTML files — DONE (deleted 4 Jul)
- [x] `prototypes/handicap-checker.html` — deleted (superseded by live `public/handicap-checker.html`)
- [x] `prototypes/golf-day-builder/` — deleted (superseded by the React component); removed its dead
      link from `prototypes/index.html`
- [ ] **Still open:** extend the `check:content` corruption checker to scan `public/*.html` so broken
      static HTML can't ship again (this is the gap that let the handicap checker ship broken)

### Publish sprint — clear the content backlog (audit item, 4 Jul)
**Priority:** Highest for growth. **Why:** 16 unpublished course reviews + 12 guide drafts sit in
Drive while only 8 of 24 reviews are live. Organic growth comes from new indexed pages, not more
polish.
- [ ] Andy records voice memos for the 4 priority articles (Solo Golf Trip, Beginners, Itinerary,
      Best Time of Year) in `Drive/MMG_UNPUBLISHED_ARTICLES_VOICE_MEMO_QUESTIONS.md`
- [ ] Turn each into a guide via the pipeline; publish min. 2 guides/month
- [ ] Publish the next verified course review as played

### Link-in-bio landing page for social traffic (audit item, 4 Jul)
**Priority:** Medium. **Why:** ~10 of 16 weekly sessions are social (mostly US), bouncing off the
homepage in ~6s.
- [ ] Build a one-screen `/start`: who Andy is, one guide, one tool, WhatsApp/WeChat CTA
- [ ] Point Instagram/Douyin bios at it; track with `trackEvent`/`trackLead`

### Repo hygiene sweep (audit item, 4 Jul) — ~15 min
- [ ] Move `MMG-Booking-Terms-Sep2026.docx` out of repo root to `Drive/Bookings/`
- [ ] Delete `token.json.bak`; remove `netlify.toml` (deploys on Vercel)
- [ ] Consider moving `push.sh` and `Run Claude Config Backup.bat` into `scripts/`

---

## Medium term

- **Tool-to-tool handoff.** Pass results forward via query params so the suite feels like one
  journey: selector shortlist → pre-selected courses in the calculator → into the hotel recommender
  → into the quote builder. This is also the groundwork for the future app.
- **"When to play" season pages.** Per-course best months, seasonal fee bands (from pricing JSON),
  wind timing, booking lead times. Biggest untapped search intent
  ("mallorca golf in november", "son gual green fee 2026").
- **MMG Difficulty / Honest Handicap Fit index.** Andy-scored per-course rating (wind, forced
  carries, walkability, plays-X-harder-than-card). Authority/backlink play; also upgrades the
  selector's matching logic.

---

## Long term / parked

- **The app** — all tools + itinerary in one place, with **tee-time booking**. Blocked on tee-time
  API access (no course/aggregator API available yet). Revisit when a booking API or direct course
  integrations become possible. The tool-handoff work above is the stepping stone.
- **AI trip concierge** — chat grounded in course reviews + pricing + access rules. Build after the
  data layer (green fees, season pages, difficulty index) is solid.
- **Quarterly "State of Mallorca Golf Travel" report** from aggregated MailerLite tool submissions.
  Start once list volume justifies it.
- **Localised tools (DE first)** — parked by Andy for now; English + zh only. Andy doesn't speak
  German, so this waits until there's a translation/QA path.

---

## Completed ✅ (context)

- **Site audit + action items logged** — 4 Jul 2026 (`8468b0f`). Full audit of website, tools,
  prototypes, analytics, docs, Drive organisation.
- Items 1–6 above are the shipped features from the 3–4 Jul build-out.

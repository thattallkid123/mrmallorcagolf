# Mr Mallorca Golf — Website Repo (mrmallorcagolf-real)

> **Scope:** This is the **website and code repo only** (`mrmallorcagolf-real`). For internal tooling, control panel, pricing sync scripts, and standalone apps, switch to `mmg-tools/` and read its documentation:
>
> - **`UPDATE-WORKFLOWS.md`** — what to edit and what command to run (start here)
> - **`DATA-FLOWS.md`** — complete data flow maps  
> - **`SOURCE-OF-TRUTH-MAP.md`** — canonical source for each data type
> - **`CLAUDE.md`** — operating contract and rules

> **Skills:** Recurring workflows are encoded as skills in `.claude/skills/` (see `.claude/skills/README.md`). Prefer invoking the relevant skill — `/publish-course-guide`, `/pricing-change`, `/ship`, `/localize-check`, `/meta-ctr`, `/update-testimonials`, `/add-site-photos`, `/seo-review`, `/new-prototype`, `/expand-guide`, `/scorecard-update`, `/health-check`, `/email-newsletter` — over re-deriving these from this file.

---

## DOCUMENT RULE

**No extra documents. Analysis and decisions happen in chat only.** If you need me to evaluate something, I ask in the conversation and work from there. CLAUDE.md stays clean — it's reference only.

---

## CRITICAL RULE (READ EVERY SESSION)

**If I need access to a folder or file to do work, I MUST ASK YOU TO MOUNT IT.**

I will NEVER work around missing access. I will NEVER assume a folder exists. I will NEVER create workarounds that bypass mounted folders. When I need a folder: I stop and ask ("I need access to [path] — can you mount it?"), you approve or decline, and only then do I proceed. Working around missing access scatters files in wrong places and creates hard-to-trace cleanup. This applies to EVERY task, EVERY session, NO exceptions.

---

## PUBLIC COPY PREFLIGHT (MANDATORY)

Before drafting or editing any public Mr Mallorca Golf copy, read the canonical Drive voice guide:

```text
G:\My Drive\Mr Mallorca Golf\Systems & Planning\MMG_BRAND_VOICE_GUIDELINES.md
```

This applies to guides, service pages, offer copy, metadata, CTAs, translations, email/newsletter copy, and any visible marketing text. `npm run check:voice` is only a safety net for hard bans; it does not replace the by-eye voice-guide check. If the Drive file is not mounted or cannot be read, stop and ask Andy to mount it before writing public copy.

---

## Two-Machine Setup (Old PC + New PC)

The new PC is primary as of 30 July 2026; the old PC is secondary and its scheduled MMG tasks are disabled. GitHub is the source of truth for code, Google Drive for business docs.

**Old PC — secondary**
- Manual worker root and retired-workspace path: see `cursor\CLAUDE.md` (canonical — do not duplicate here, the two have drifted apart before).
- Use `$env:MMG_WORKSPACE_ROOT` and `$env:MMG_DRIVE_ROOT` instead of hardcoded paths when possible.

**New PC (Andy) — primary** — Desktop is inside OneDrive folder on this machine
- REPO_ROOT: `C:\OneDrive\Desktop\cursor\mrmallorcagolf-real`
- GOOGLE_DRIVE: `G:\My Drive` (Drive is a mapped letter on this machine, not a folder under the user profile)
- DOCUMENTS: `C:\Users\Andy\Documents`
- PROJECTS_FILE: `C:\OneDrive\Desktop\cursor\PROJECTS.md`

**`MMG_DRIVE_ROOT` is authoritative over any path written here.** Scripts read it and fall back to a hardcoded default that is only right on one machine — `scripts/export-live-guide-content.mjs` defaults to `G:\My Drive\Mr Mallorca Golf`, which fails the pre-push hook on the old PC. Set the env var per machine and the fallback never matters.

**Two-PC daily rule:** before leaving a machine `git push` and let Drive sync finish; before starting on the other `git pull`; only edit on one machine at a time. Run `Start-Session.ps1` (workspace root, works from either repo) at the start of a session — it fetches, reports ahead/behind vs origin, and lists uncommitted changes so a stale pull or an accidental overwrite doesn't happen.

**Secrets (not in git — must exist on both machines):** `.env` and `.env.local` (API keys — Resend etc.); `.github-token`; `ga4_analytics/ga4_oauth_client.json`, `ga4_token.json`; `search_console/search_console_token.json`; `seo_analytics/google_token.json`; `zoho_mail/zoho_config.json`.

**Python dependencies (not automatic — a migration will silently lose these):** run `python -m pip install -r requirements.txt` on any new machine or after a Python reinstall, then confirm GA4 actually works with `python ga4_analytics/ga4_report.py`. The July 2026 migration lost `google-analytics-data` with nothing recording that it was needed; every weekly business check ran without GA4 data for weeks, logging "GA4 unavailable" where nobody was looking. `pip install` succeeding is not proof — run the report.

**Claude/Codex config** lives at `~/.claude/` and `~/.codex/` on each machine. Sign in fresh on each — do not copy credentials between machines. Skills, agents, and memory folders should match.

**Machine-portability gotchas** (all three caused real data loss or blind sessions in the July 2026 move):
- **Claude memory is keyed by absolute path.** It lives in `~/.claude/projects/<mangled-path>/memory/` — this repo is `C--OneDrive-Desktop-cursor-mrmallorcagolf-real` on the new PC and `C--Users-andyg-Desktop-cursor-mrmallorcagolf-real` on the old one. Copying a backup verbatim puts it under a key nothing reads. Restore into the key that already exists on that machine.
- **The workspace root repo (`cursor`) now has its own private GitHub remote.** Its `CLAUDE.md`, `AGENTS.md`, `PROJECTS.md`, `WHERE_THINGS_LIVE.md`, and the `WORKING_PREFERENCES.md` under its own docs folder live in `thattallkid123/mmg-workspace-root`; pull it like any other repo before cross-workspace work.
- **Never put a credential in `~/.claude/settings.json` or Codex approval rules.** Both are synced to the backup repo. Use an env var or a gitignored file. `Run-ClaudeBackup.ps1` now blocks the commit if it finds a secret-shaped string.

---

## File Organization Principle

**Repository = website code only.** No business/operational/financial/partnership/content-drafting docs. No contact files (those belong in `Drive/Private/Workbooks/`).

**Drive structure, naming conventions, and privacy rules** → see `cursor/CLAUDE.md` (workspace file, always loaded).

## Repo Hygiene Rules

- **Outputs are ephemeral.** Logs, screenshots, Lighthouse reports, and visual audits go to `outputs/` (gitignored). Delete after a task — never move to `docs/` or anywhere tracked.
- **No Drive duplicates in `docs/`.** If a doc lives in Google Drive, note the Drive path in `docs/README.md` rather than keeping a copy here.
- **Session notes go straight to `docs/archive/`.** Checklists, handover prompts, session summaries, `*_JUNE_*`-style files belong there immediately. `docs/` root is for live reference only.
- **Sensitive data never in the repo.** Full privacy rules live in `cursor/CLAUDE.md` (canonical — do not duplicate here). Repo-specific note: this repo reads contact/courtesy data from generated JSON (gitignored) only.

## File Hygiene Rule

- While planning: create working docs with clear names (e.g. `AUDIT_PLAN.md`).
- After a task: consolidate into existing docs or ask if it needs keeping. **Default: delete working docs** (recycle bin, not permanent). Keep only final outputs, decision records, reference docs.
- **Build scripts and intermediate files** (helper scripts, extracted text, intermediate outputs): delete automatically before reporting the task done. Only the final deliverable remains.

---

## Quick Commands

| Task | Command |
|------|---------|
| Build locally | `npm run dev` |
| Content checks | `npm run check:content` |
| Locale parity check | `npm run check:locale-parity` — verifies 6-language consistency; runs automatically as part of `check:content` |
| i18n release check | `npm run check:i18n-release` — run after any shared content or locale-facing edit |
| Build check | `npm run build` |
| Visual smoke checks | `npm run check:visual` |
| Pre-deploy check (full bundle) | `npm run check:ready` (alias: `npm run predeploy`) — runs `check:content` + `check:i18n-release` + `build` |
| GA4 report | `python ga4_analytics/ga4_report.py` |
| Update Google rating | Edit `REVIEW_RATING` and `REVIEW_COUNT` at the top of `src/components/ReviewBadge.jsx` — those two constants drive the badge on every page + the `aria-label`. Then commit and push. |

**Local path:** `C:\OneDrive\Desktop\cursor\mrmallorcagolf-real`. PowerShell does not support `&&` — use separate lines or `;`.

## Completion Gate (MANDATORY — READ EVERY SESSION)

**A task is NOT done until the changes are live on mrmallorcagolf.com.** Edited-locally, committed, or pushed-to-GitHub are all incomplete. The finish line is a **green GitHub Actions run AND a confirmed READY Vercel deployment** — these are two independent pipelines that can disagree (Vercel does not wait for or depend on CI passing), so a Ready Vercel deployment alone is not proof the push is good. Full sequence: the `/ship` skill.

Steps in order — do not skip, do not report done early:
1. Local checks pass: `npm run check:content` (always). Add `npm run build` for structural/deploy-sensitive changes. Add `npm run check:i18n-release` if localized content changed.
2. Commit with a clear message.
3. Push to GitHub (`git push`). Vercel auto-deploys from `main`.
4. Confirm **both**: `gh run list --limit 1` (watch/fix if it's running or red) AND the Vercel deployment reaching READY (Vercel MCP `list_deployments` or the dashboard). A passing local `check:content` before commit does not guarantee CI passes — CI can fail on things a local run can't see (e.g. a check that only works because a file/sibling-repo happens to exist on this machine).
5. Only then say the task is done.

**If any step is blocked** (hook failure, build error, Vercel error) — fix it. Do not close out the task or leave the repo broken. **Before starting new work each session, run `git status`;** if there are complete-looking uncommitted changes, ask whether to commit them first.

**Build gotcha:** if `npm run build` compiles and prerenders all pages successfully but then fails with `ENOENT` on a freshly-written `.next` file — `middleware-manifest.json`, `proxy.js.nft.json`, a page's `.js` module, `_ssgManifest.js`, or similar, the specific file varies — that's OneDrive's real-time sync racing Next's own output writer during "Collecting build traces" / "Finalizing page optimization," not a real regression from the change just made. Fix: delete `.next` and rebuild. On Windows, `rm -rf .next` can itself fail with "Directory not empty" (a lingering locked handle); use `Remove-Item -Recurse -Force -Confirm:$false .next` in PowerShell instead. A single clean rebuild doesn't always clear it — retry (sometimes 2-3x) before suspecting the code. CI (GitHub Actions, no OneDrive) is unaffected and is the authoritative build check either way per the Completion Gate above.

## Start Here

**Operations & monitoring:** `MMG_ANALYTICS_DASHBOARD.gsheet` (Drive / Systems & Planning) — live GA4/Search Console; `MMG_MASTER_CONTROL_CENTER.md` (Drive root) — business ops & financial tracking.

**AI coaching / strategic context:** `MMG_BUSINESS_BRIEF.md` (Drive root) — complete business context, refresh monthly. `Systems & Planning/AI Coach/` — business-coach OS files (Hormozi, Priestley, Blair/Enns, China, Western social) plus `MMG_AI_COACH_HOW_TO_USE_THIS_SYSTEM.md` (which files to combine per question type). For strategic sessions on claude.ai, not code work.

**Code/website work:** `BRANCHES.md` (git rules), `CONTENT_WORKFLOW.md` (content structure), `COURSE_BLOG_PIPELINE.md` (course reviews), `BUGS.md` (resolved bugs and recurring pitfalls — read before any deploy), `MMG_BRAND_VOICE_GUIDELINES.md` (writing voice, in Drive/Systems & Planning).

**Current priorities/status:** use the current conversation, handover, and live Drive masters. Do not assume Google Tasks is canonical unless Andy explicitly says it is.

**Infrastructure & validation:** `docs/LOCALE_PARITY_CHECKLIST.md` (6-language structure), `docs/CONTENT_STRUCTURE.md` (which file controls what — critical), `docs/CODEBASE_IMPROVEMENTS.md` (infrastructure, validation, path aliases).

### Lead Magnets, Tools, And Newsletter Status (22 June 2026)

PDF lead magnets, HTML planning tools, MailerLite groups/automations, immediate Resend delivery emails, optional planning-notes opt-in, and Course Selector personalization are set up and tested. Website-side PDF/tool emails send the promised download/result immediately; MailerLite nurtures are delayed to follow (not duplicate) that email. Course Selector sends `selector_answers`, `selector_shortlist`, `selector_shortlist_names` to MailerLite; `Email 1 - Shortlist` uses the real `selector_shortlist_names` variable. Course images stay on website result cards only, not in emails.

Next newsletter step: do not build a heavy programme yet — the system is mostly waiting for real subscribers. When list activity justifies it, start with a light monthly "Mallorca golf planning notes" email (one course note, one planning tip, one course worth considering, soft reply CTA). Tone: useful, practical, first-hand — not generic tourism copy, not a hard-sales newsletter.

## Course scorecard data (par / SI / distances)

**Par / SI / tee data now sync from the MMG tools scorecard pipeline.** Ultimate truth is the official club PDFs in Drive `Reference/Scorecards/Scorecard PDFs/`. The editable machine master is `mmg-tools\pricing\edit\confirmed\scorecards.json`; run `.\mmg.ps1 scorecards` from mmg-tools to refresh `src/lib/scorecard-data.js` (plus the scoring apps) from it. `Reference/MMG_SCORECARD_MASTER.md` is a human-readable legacy reference only — do not edit it as a sync source. Validation commands: `.\mmg.ps1 scorecard-audit` (PDF vs master) and `.\mmg.ps1 scorecard-sources` (PDF vs central JSON vs strokes-gained). Course-listing par pills are checked against the scorecard master by `npm run check:course-data` (`check-scorecard-data.js`); editorial/blog copy that mentions par or length is still a manual surface and should be checked separately. For the full manual chain (PDF → `scorecards.json` → generated scorecard data → `src/lib/golf-courses-data.js` pills text → any blog content mentioning that par), use the `/scorecard-update` skill.

## Course pricing data — sync chain

Edit the pricing master Google Sheet, then from mmg-tools run `.\mmg.ps1 pricing-publish` (or double-click `UPDATE MMG PRICING.cmd` on the Desktop) — the one guarded pass that publishes both the MMG tool outputs and the public website price pills/tool fallbacks in one step. (The older two-step `.\mmg.ps1 pricing` then `.\mmg.ps1 site` still works but is superseded — `pricing-publish` is the current canonical route and also runs automatically every Monday 7am.) The generated `MMG_COURSE_PRICING_MASTER_*` files in Drive `Reference/` are script-output only — never edit them.

For any price change use the `/pricing-change` skill (full surface sweep). Reference maps: `docs/content-architecture.md`, `docs/pricing-change-checklist.md`, `docs/pricing-surfaces-inventory.md` (its "Course pricing and golf-cost reference layers" section — the rest of that file is MMG *service* pricing, a different domain; the full course-pricing architecture is `mmg-tools/SOURCE-OF-TRUTH-MAP.md` §1). Santa Ponsa 2 and 3 can stay in private reference notes even when not bookable.

**Auto-synced when you run `.\mmg.ps1 pricing-publish` (or the older `.\mmg.ps1 site` step):**
- Course-listing pills in `src/lib/golf-courses-data.js` (e.g., `Peak €165 / Low €115`)

**Manual edits required when pricing changes** (narrative context, not auto-synced by the pricing publish — but validated against canonical by `npm run check:pricing-narrative`):
- `src/lib/guide-article-content.js` — EN blog post pricing references
- `src/lib/guide-article-content-localized.js` — all 6 language versions
- Any `guide-post-content.js` entries mentioning specific prices
- `scripts/generate-lead-magnet-pdfs.py` — downloadable PDF prices, validated by `npm run check:lead-magnet-prices`; after fixing figures, regenerate with `npm run generate:lead-magnet-pdfs`

`src/lib/mallorca-tracker-courses.js` holds live course data for the strokes-gained tool, not placeholder content — its scorecard facts (par/tees) are refreshed by `.\mmg.ps1 scorecards` and checked against the scorecard master by `npm run check:course-data` (`check-tracker-course-pack.js`, `check-strokes-gained-export.js`). Writing guardrails: `MMG_BRAND_VOICE_GUIDELINES.md` (NOT the superseded `MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md`).

## Sources of Truth

**Google Drive (`G:\My Drive\Mr Mallorca Golf`):**
- **Master control:** `MMG_MASTER_CONTROL_CENTER.md` — start here for business questions
- **Business Brief:** `MMG_BUSINESS_BRIEF.md` (root) — AI coaching context, business story, status
- **Stable course facts:** `mmg-tools/pricing/edit/confirmed/course-facts-master.json`, edited through the MMG Control Panel and published with `.\mmg.ps1 course-facts`. Website access/coordinate/fact helpers are generated outputs.
- **Course Encyclopaedia:** Drive `MMG_ENCYCLOPAEDIA_DATA_MASTER.md` — editorial voice, firsthand experience, rankings, restaurants and content angles. It is not the authority for pricing, access or other synced operational facts.
- **Financial:** `Business Operations & Financial/MMG_INCOME_AND_EXPENSES_2026.xlsx` + `Business Operations & Financial/MMG_EXTRA_COACHING_2026.xlsx`
- **Systems & planning:** `Systems & Planning/`
- **Course contacts & courtesy:** Courtesy master Google Sheet (Golf Courses tab — 24 courses, contacts, booking, courtesy; plus Affiliates and China Operators tabs). The old `MMG_CONTACTS_COURSES_AND_COURTESY.xlsx` is retired/archived.
- **Client bookings & revenue:** `Private/Workbooks/MMG_CLIENT_BOOKINGS_AND_REVENUE.xlsx`
- **Courses:** `Courses/[CourseName]/` (reviews, scorecards, assets)
- **Tax & compliance:** `Business Operations & Financial/Tax & Compliance/2026/`
- **Reference:** `Reference/` (scorecard PDFs, pricing research)
- **Knowledge skills:** `Skills/MMG_SKILL_*.md` — 0 currently synced (no matching folders exist under `~/.claude/skills/`; see `SKILLS_SYNC.ps1` output). Separate from the repo code-workflow skills in `.claude/skills/`.
- **Tasks:** no settled canonical task system at the moment — see Task Management below.

**Repo (code & development only):** `BRANCHES.md` (git rules), `CONTENT_WORKFLOW.md`, `COURSE_BLOG_PIPELINE.md`, `MMG_BRAND_VOICE_GUIDELINES.md` (in Drive/Systems & Planning), `SKILLS_SYNC.ps1` (Drive → Cowork knowledge-skill sync).

Never reference private contact details in public content.

## Task Management

> **Status (2026-07-16): do not treat Google Tasks as the live MMG source of truth.** The old webhook path is not reliable and Andy is moving away from that setup. Use the current task, handover file, and live Drive masters instead.

## Branch Rule

- `main` is the live site and the single source of truth. Do all work here.
- `itinerary-preview` is **retired** — the itinerary release was merged into `main` (22 May 2026) and the branch has not moved since. It is preserved for reference/recovery in git (`origin/itinerary-preview` and local `snapshot/archive-itinerary-preview`) but is no longer dual-maintained. Do not update it or split content across branches unless Andy explicitly asks to revive that direction.

## Tech Stack

Next.js 15 App Router, React 18, JSX only. Vercel deployment from GitHub. Languages: EN default + DE, ES, FR, NL, SV, ZH. No database, no auth, no payment gateway.

**NL and SV are SEO-only, unlinked from navigation on purpose** (`NAV_LOCALES` in `src/lib/site.js` deliberately excludes them; `ALL_LOCALES` has all 7). Pages exist and are maintained at full parity for organic search, but there is no nav link, language switcher entry, or other on-site path to them. This is intentional, not a gap — do not add them to nav links or flag their absence as a bug.

## Critical Rules

- **Fonts:** Never hardcode `font-family: 'Jost'` or `font-family: 'Cormorant Garamond'`. Always use CSS variables: `font-family: var(--font-sans)` and `font-family: var(--font-serif)`. Hardcoding causes fallback fonts (Arial, Georgia) to render before the webfont loads. Read `docs/FONT_LOADING_RULE.md` for full context and audit status.
- **Writing:** Read `MMG_BRAND_VOICE_GUIDELINES.md` before any draft. Mandatory self-check before shipping.
- **Course reviews:** Read `COURSE_BLOG_PIPELINE.md` before starting.
- **Course photos:** Always `ImageOps.exif_transpose()` from original source files. Never crop blog images. Max 1600px, WebP quality 82. (Full workflow: `/add-site-photos`.)
- **Prototype images:** Use `/images/*-card.webp` for guide card images, `/images/courses/*.webp` for full course detail images. No external stock photos (Unsplash etc.) — all from `public/images/`. See `docs/prototype-guide.md`.
- **Import paths:** Section pages live under a locale directory — `src/app/(en)/…` for English (route group) and `src/app/<lang>/…` for other locales — so both sit the same depth from `src/components`. A page such as `src/app/(en)/golf-courses/GolfCoursesView.jsx` imports via `../../../components/`. Count directory levels rather than assuming a fixed depth; deeper nesting adds another `../`.
- **Content:** English is master. Do not add localized content not present in English.
- **Guide translation parity:** English is master. If you add, remove, or reorder guide/review `blocks`, update the localized mirror files in the same change and run `npm run check:guide-parity`, `npm run check:content`, and `npm run check:i18n-release`. See `docs/guide-content-rules.md`.
- **Guide notes blocks:** Keep `notes` practical and course-grounded. Approve the English notes first, then translate the same points into de/es/fr/nl/sv/zh. See `docs/guide-content-rules.md`.
- **Guide dual-title structure:** `guide-post-content-localized.js` and `guide-article-content-localized.js` both have matching `metadata.title` and `meta.title` fields. Both fields control SERP display and page title display respectively — keep them synchronized when editing. When shortening guide titles for SERP compliance, update both fields together to avoid inconsistency.
- **Shared locale edits:** If you add a new key to shared content used across locales, add it for de/es/fr/nl/sv/zh in the same edit or provide an explicit getter fallback. No English-only structure gaps.
- **Multilingual content architecture:** For the wider site pattern beyond guides, use the English-canonical-plus-locale-overlay workflow in `docs/multilingual-content-architecture.md`.
- **Release gate for locale-facing work:** After editing shared content, locale content, metadata, or localized page copy, run `npm run check:i18n-release` before commit.
- **Text-change checklist:** When changing copy on any locale page, also check the shared components it flows through — full checklist in the `/localize-check` skill. Key points: contact page cards / success CTA / floating + mobile CTAs; page-level CTA labels for Plan Your Trip, Play With A Pro, Signature Day; Chinese contact uses WeChat language + anchors (not English WhatsApp); zh service labels read Chinese-facing; FAQ styling is shared (inspect the rendered accordion on mobile + desktop); for localized button/card labels, verify rendered desktop and mobile widths across all locales because longer translations can overflow even when English is clean; check hidden metadata too (breadcrumb JSON-LD, og/twitter, alt text, CTA labels); run `npm run check:locale-leaks` + `npm run build`, then scan the rendered zh routes (`/zh`, `/zh/contact`, `/zh/play-with-a-pro`, `/zh/plan-your-trip`, `/zh/signature-day`) in one pass.
- **Large content files:** Do not use fragile editor operations on `guide-post-content.js` or `guides-content.js`; use precise scripted/byte replacement.
- **Pre-deploy:** See Completion Gate below for the required steps. `npm run check:visual` (Playwright) is not part of that gate — it's slow and prone to timing out across the full multi-locale suite, so it's a manual check to run when a change is visual/layout-affecting, not a blocking requirement on every push.
- **Push completion rule:** A successful `git push` only means the branch updated. Not complete until the required local checks pass after the last change (see Completion Gate).

## API Route & Integration Security (check before shipping either)

Full audit: 2026-08-14 security review (contact form, Resend, OAuth handling, API routes, `npm audit`, CSP). No committed secrets, no injection paths found. Fixed then: unauthenticated `/api/cron/indexnow` (now `CRON_SECRET`-gated, plus a missing `GET` handler — Vercel cron sends GET, not POST), an SSRF in `/api/og`'s `image` param (now same-origin-only), and a lowered rate limit on `/api/send-itinerary` (sends mail to a caller-supplied address).

**Every new route under `src/app/api/` must open with the four guards from `src/lib/request-safety.js`, in this order** — copy an existing route (`contact/route.js` is the reference) rather than writing them fresh:

1. `isAllowedOrigin(request)` → 403
2. `isJsonRequest(request)` → 415
3. `isPayloadTooLarge(request, <cap>)` → 413
4. `await checkRateLimit(getClientKey(request, '<scope>'), <n>, <windowMs>)` → 429

Then: every user string through `sanitizeText`/`sanitizeMultilineText` with a length cap; every value reaching email HTML through `escapeHtml`; every `tool`/`guide`/type discriminator checked against an allow-list object, never used to build a path, URL, or template name. Add a `website` honeypot to any route a form posts to. Never return a raw `error.message` to the caller.

**Cron routes are the exception:** they get no `Origin` header, so they need `Authorization: Bearer ${process.env.CRON_SECRET}` instead (Vercel injects this automatically once `CRON_SECRET` is set as a Vercel env var — must match `.env.local`). Vercel cron sends **GET**, not POST.

**Never** interpolate a request value into a `fetch()` host, a filesystem path, or a `dangerouslySetInnerHTML` payload. Server-side `fetch`/image targets must be same-origin (a path, not an absolute URL) or a hardcoded third-party host.

**New third-party integration?** Key goes in `.env.local` + Vercel env vars — never a source file, never a log line. Confirm the vendor's outbound domain is in the `connect-src` CSP directive in `next.config.js`.

**Periodically (roughly quarterly, or before a batch of new routes/integrations):** run `npm audit` (DoS-only advisories in build-time deps are low-priority, don't chase them) and confirm `UPSTASH_REDIS_REST_URL`/`_TOKEN` are still set in Vercel — without them the rate limiter silently degrades to per-instance in-memory and the configured limits stop meaning much.

### Privacy surface — re-check when ANY new data-collecting feature ships

A new form, tool, quiz, integration, or API route means the privacy policy is now **presumed stale until checked**. This is a code task, not a legal one: the job is keeping `src/app/(en)/privacy-policy/page.jsx` + `src/app/es/privacy-policy/page.jsx` factually matched to what the code does. Andy makes the legal calls; you keep the description honest.

Run this before shipping any feature that accepts a visitor keystroke or fires a third-party request:

1. **New field collected?** If it reaches a third party, it must be named in Data Sharing (§7). "Email address and related signup data" does not cover handicap, trip dates, budget band, group size, or free-text notes — list what actually leaves the site.
2. **New processor?** Any new vendor receiving personal data (email sender, list host, storage, rate-limit backend, analytics) goes in §7 *by name*, with where it processes. Adding a key to `.env.local` and adding a vendor to §7 are the same task — do both or neither.
3. **New cookie, localStorage key, or third-party script?** §6 currently claims cookies are analytics-only. If that stops being true, §6 is wrong. Functional/UI state (e.g. `HomepageLeadPopup` dismissal) is consent-exempt and fine — advertising or cross-site anything is not.
4. **Does it enrol anyone in email that isn't what they asked for?** §3 promises "no unsolicited marketing without explicit consent". A form whose stated purpose is a PDF/result but which also adds the address to a nurture group breaks that promise in code. Keep the marketing opt-in a separate, unchecked, clearly-labelled box (the `subscribeNewsletter` pattern in `LeadMagnetPage.jsx` is the reference — copy it).
5. **Point-of-collection notice.** GDPR Art. 13 wants the notice where data is entered, not only in the footer. New forms get a privacy-policy link next to the submit button.
6. **Bump `Last updated:`** on both EN and ES policy pages in the same commit, and mirror any wording change into ES — they drift silently because only EN gets edited.
7. **New locale-facing legal need?** `LEGAL_LOCALES` in `src/lib/site.js` is `{en, es}`; every other locale falls back to English via `getLegalPath` (graceful, not a 404 — don't "fix" it by adding broken routes).

**Why this is a standing rule:** audited 2026-08-14 and the policy was last edited 7 June 2026 while five data-collecting routes landed 14 June – 4 July. Nothing was malicious — each feature just shipped without anyone re-reading the policy, so it silently stopped describing the site. Nothing automated catches this: `check:content` and the locale checks validate structure and copy, never whether a stated data practice is still true.

## Analytics And SEO Rules

### Canonical Domain — ALWAYS www

**The canonical domain is `https://www.mrmallorcagolf.com`. Never use the non-www version.**
- All internal links, hardcoded URLs, structured-data `@id` values, OG `url` tags, canonical tags, sitemap entries, and any new content must reference `www.mrmallorcagolf.com`.
- The non-www → www 301 redirect is live in `vercel.json`. Do not remove or alter it.
- `SITE_ORIGIN` in `src/lib/site.js` is `https://www.mrmallorcagolf.com` — use this constant everywhere instead of hardcoding the domain.
- Fix any hardcoded `mrmallorcagolf.com` (without www) in code immediately.
- In Search Console, always submit/inspect URLs as `https://www.mrmallorcagolf.com/...` — re-indexing both causes months of consolidation delay.

### Technical SEO

Full inventory (sitemap, robots, RSS, llms.txt, structured data, hreflang, OG image system, IndexNow) is in `docs/seo-reference.md`. Recurring gotcha when publishing/updating a guide: update dates in `src/app/sitemap.js` and `src/app/feed.xml/route.js`, and the URL lists in `scripts/indexnow-ping.mjs` + `src/app/api/cron/indexnow/route.js`. The `/publish-course-guide` skill handles all four.

### Meta Descriptions — CTR Approach

CTR on high-impression pages is the primary SEO lever. Rules + the key-pages tracking table live in the `/meta-ctr` skill and `docs/seo-reference.md`. In short: lead with the specific number/fact, answer the real question, under 155 chars, no filler endings. **Code gotcha:** use double quotes for JS strings containing apostrophes — the SWC compiler treats curly apostrophes (U+2019) as string terminators in single-quoted strings.

### Analytics Workflow

- Treat GA4 and Search Console reports as decision aids, not content. Every insight must map to a specific page, query, or event, and end as a page-level action (title/meta, intro, internal links, trust copy, enquiry path).
- Do not guess a feature or file is missing (llms.txt, captions, localized parity) — check the source first.
- Only ship SEO/CRO changes that clearly improve CTR, enquiry conversion, trust, course-choice clarity, or premium positioning.
- GA4 property ID `G-0Z2BRNWB4N`. GA4 is excluded on `/zh` routes (Chinese compliance).
- For China-facing copy, pull proof from existing verified sources first (`about-content.js`, `contact-content.js`, `homepage-content.js`) and reuse the real Shanghai/Mandarin/Douyin/WeChat details already in the repo. zh pages need not be literal translations — localize for the Chinese audience while keeping factual claims consistent with the verified source.

## Publishing / Expanding Course Guides

- **New guide:** `/publish-course-guide` skill — full chain (photos → `guide-post-content.js` → `page.jsx` routing → sitemap + IndexNow + RSS → OG verify → deploy).
- **Expanding a live guide:** `/expand-guide` skill.
- **Content standards + verified course-facts table:** `docs/course-guide-standards.md`. If any required fact is missing, ask Andy before publishing.
- Publish to `main` only. (`itinerary-preview` is retired — see Branch Rule.)

## Prototypes (tools, quizzes, selectors)

Image sourcing rules, available `/images/` paths, and the /zh deployment checklist: `docs/prototype-guide.md`. Build/promote workflow: `/new-prototype` skill. Never use external stock photos — all images from `public/images/`.

## What Not To Do

- **Do not add business/financial files to this repo.** Code only. Everything else → Google Drive.
- Do not bring itinerary-specific homepage/planner/service-positioning changes into `main` unless Andy explicitly asks.
- Do not create new frameworks, Tailwind, TypeScript, databases, auth, or CMS without approval.
- Do not modify English master copy when only fixing a language page.
- Do not invent image captions.
- Do not assume analytics, `llms.txt`, or caption gaps without checking the source file first.
- Do not change testimonials unless Andy explicitly asks.

---

For full reference docs, see `docs/` and Drive `Systems & Planning/`.

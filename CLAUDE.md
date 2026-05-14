# Mr Mallorca Golf - Claude Code Context

## Quick reference — tools Andy runs regularly

| Task | Command |
|------|---------|
| GA4 analytics report | `python ga4_analytics/ga4_report.py` |
| GA4 report (7 days) | `python ga4_analytics/ga4_report.py --days 7` |
| Send emails via Zoho | `python zoho_mail/zoho_mail.py send-all` |
| Check Zoho connection | `python zoho_mail/zoho_mail.py accounts` |
| Build site locally | `npm run dev` |
| Check before deploy | `npm run build` |
| Deploy to production | git add -A → commit → push to main (Vercel auto-deploys) |
| Update analytics dashboard | `python ga4_analytics/ga4_report.py` (Claude runs this directly, no paste needed) |

GA4 credentials: `ga4_analytics/ga4_credentials.json` (gitignored)
GA4 OAuth token: `ga4_analytics/ga4_token.json` (gitignored, auto-refreshes)
GCP project: `precise-ascent-495813-r0` (MMG Analytics)

## Source of truth
All brand, content, and pricing files: `C:\Users\andyg\Documents\Mr Mallorca Golf` (Google Drive synced).
Files inside this repo are stale copies — Documents folder always wins.

Key files to upload for content or copy work (if Google Drive folder not mounted):
- `Active/MMG_MASTER.md` — brand, tone, credentials, service pricing
- `Reference/MMG_COURSE_MARKET_REFERENCE_2026.md` — course green fees and market info

Writing guardrails are in the repo at `MMG_BRAND_VOICE_GUIDELINES.md` — do NOT use the old `MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md`, it is superseded.

## Contacts & privacy split
- `Documents/Active/MMG_CONTACTS_PUBLIC.xlsx` — green fees, websites, public info only
- `Documents/Private/Workbooks/MMG_CONTACTS_PRIVATE.xlsx` — contact names, emails, courtesy terms. NEVER reference in public content. Share rows in chat only when needed for outreach tasks.

## Work status & priorities
Read `MMG_WORK_STATUS.md` at session start to understand what's in progress and what's next.

## Local project path
`C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real`

Use this for all git and npm commands. Overrides any other path in skills or older docs.

## Deploying to production

Vercel deploys automatically on push to `main`. Run `npm run build` in the sandbox first to confirm no errors. Then give Andy this block to paste into his terminal:

```
cd C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real
git add -A
git commit -m "<message>"
git push
```

Live at mrmallorcagolf.com within ~2 minutes.

## Tech stack
- Next.js 14 App Router, React 18, JSX only (no TypeScript)
- Resend for contact form, Google Analytics only third-party script
- No database, no auth, no CMS
- Deployed via Vercel from `main`

Languages: `en` default + `de`, `es`, `fr`, `nl`, `sv`, `zh`

## Critical import path rule
Most common source of build failures:
- English pages: `../../components/ComponentName`
- Language pages: `../../../components/ComponentName`
- `GolfCoursesClient` from a language page: `../../golf-courses/GolfCoursesClient`

Never use `./GolfCoursesClient` or `../../components/GolfCoursesClient`.

## Homepage course ids
```js
{ cls: 'course-card--1', id: 'golf-son-gual' }
{ cls: 'course-card--2', id: 'club-de-golf-alcanada' }
{ cls: 'course-card--3', id: 'son-muntaner' }
{ cls: 'course-card--4', id: 'golf-santa-ponsa-1' }
{ cls: 'course-card--5', id: 'golf-de-andratx' }
```

## Adding a New Course Review

**MANDATORY:** Read `COURSE_BLOG_PIPELINE.md` in full before doing anything. Then read `MMG_BRAND_VOICE_GUIDELINES.md`. Only then start work. These two files govern everything — photos, writing, site wiring, deploy order.

Key rules that must never be skipped:
- Always `ImageOps.exif_transpose()` every photo from the original source file before saving
- Never crop blog post images — save the full rotated image at max 1600px
- For the card image, use `public/images/courses/[slug].webp` if it exists (aerial shot), otherwise ask Andy
- Never use the Edit tool on `guide-post-content.js` or `guides-content.js` — use Python byte replacement only
- Ask all gap questions in ONE message before writing anything
- Run brand voice self-check before showing Andy any draft

Full technical reference (code boilerplate, block types, translation rules) is in the `nextjs-mrmallorcagolf` skill.

Summary of steps:

1. Copy photos to `public/images/[slug]-blog/`. Apply `ImageOps.exif_transpose`, resize to max 1600px, WebP quality 82.
2. Create `[slug]-card.webp` (900×386) and `[slug]-social.jpg` (1200×630) from the strongest landscape composition.
3. Add entry to `guide-post-content.js` and `COURSE_REVIEW_DETAILS` in `GuidePostView.jsx`. Use `[slug]-social.jpg` as `imagePath`.
4. Create English `src/app/guides/[slug]/page.jsx`.
5. Run `npm run check:text`, `npm run check:i18n-release`, `npm run build` — all must pass.
6. Push. Do NOT add translations or `guides-content.js` entry until Andy approves at the live URL.
7. After approval: add `guides-content.js` entry (English), then all 6 language translations per Step 7 in `COURSE_BLOG_PIPELINE.md`. All locale carousel orders must match English exactly.
8. Append one line to `CHANGELOG.md`.

## Guides Index — Image Cards (guides-content.js)
The guides index (`/guides`) shows course reviews as a horizontal scroll photo carousel and articles as an image card grid. Every guide entry in the **English** `liveGuides` array in `guides-content.js` must include:

```js
img: '/images/[slug]-blog/[hero].webp',  // card image path
imgPosition: 'center 40%',               // CSS object-position for cropping
```

For course reviews: prefer the `-card.webp` file from `public/images/` (e.g. `/images/son-gual-card.webp`).
For articles: use the best editorial photo from the guide's blog image folder.
Non-English locale entries do NOT need `img`/`imgPosition` — the view falls back to the static `GUIDE_IMAGES` map in `GuidesIndexView.jsx`. When adding a new guide, also add it to that map.

## Content rules
- English is always the master. Do not add content to language pages not present in English.
- Contact email: `andy@mrmallorcagolf.com`
- Mojibake, broken accents, and hidden English fallback are release-blocking bugs
- Keep all content files in UTF-8. Fix corrupted source text — do not add render-time cleanup.
- Before any deploy: run `npm run check:text`, `npm run check:i18n-release`, `npm run build`
- If a localized page or guide is touched, verify no stray English strings in non-English output
- Do not paste text from Word, Excel, PDFs, or websites without checking accents, punctuation, and encoding
- Phone numbers should be links, not visible public page copy
- Club hire is blog/affiliate content only — not a service Andy provides
- Trackman is a credential, not a Mallorca service unit
- Never invent image captions. Use `[CAPTION]` if unknown.
- Testimonials stay word for word unless Andy explicitly asks to change them
- Santa Ponsa 2 must never appear as a shoot location in copy or alt text

## Writing guardrails

**Single source of truth:** `C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\MMG_BRAND_VOICE_GUIDELINES.md`

This is the only writing guide Claude should consult. It contains voice persona, sentence-level patterns from Andy's published posts, channel rules (blog, formal email, client email, Instagram MMG, Instagram personal), hard bans, verdict patterns, and a mandatory self-check. Mirror copy lives in Drive at `Active/MMG_BRAND_VOICE_GUIDELINES.md` for iOS / fresh chats.

**Read it before any draft. The self-check is mandatory, not optional.**

Quick reference for hard bans:
- Em dashes (search every one before pushing)
- "Majorca" → always "Mallorca"
- "euros" → always €
- stunning, breathtaking, nestled, seamless, elevate, unforgettable, hidden gem, curated, bespoke, vibrant, bustling, exceptional
- "The best part?", "More than just", "Whether you're...", "From X to Y", "In the heart of...", "It's not X, it's Y"
- Generic AI openings, travel-brochure filler, fake authority language

The old `Active/MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md` in Drive is superseded by `MMG_BRAND_VOICE_GUIDELINES.md`.

Use first person only for courses Andy has personally played.

## Business context
- Owner: Andy Griffiths, UK PGA Advanced Professional
- Based in Mallorca since March 2025
- Payments are offline bank transfer only. No payment gateway on site.
- Privacy and legal pages align with GDPR and Spanish LOPDGDD.

## Zoho Mail tool
Python script for sending emails from andy@mrmallorcagolf.com via the Zoho API. Files in `zoho_mail/`:
- `zoho_auth.py` — run once to authorise (or if token expires)
- `zoho_mail.py` — main send tool
- `zoho_config.json` — stores refresh token (do not commit to git)

```
python zoho_mail.py accounts                                       # check connection
python zoho_mail.py send-all                                       # send all emails in EMAILS list
python zoho_mail.py send --to "x@y.com" --subject "S" --body "B"  # single email
```

API base: `https://mail.zoho.eu/api` | Account ID: `8339683000000002002` | Auth: OAuth2 refresh token in `zoho_config.json`

## Changelog
Append to `CHANGELOG.md` at the end of every session.
- One line per meaningful thing done, grouped under `## YYYY-MM-DD` (most recent first)
- Format: `- [tag] description`
- Tags: `[site]` code/deploy | `[content]` writing/copy | `[social]` posts/strategy | `[admin]` tools/files/email | `[seo]` search | `[business]` pricing/ops
- For coding sessions: read `BUGS.md` before making any changes

## What not to do
- No TypeScript, CSS modules, or Tailwind
- Do not create new components unless clearly reusable
- Do not add `use client` unless the page needs interactivity
- Do not modify English master pages when only fixing a language page
- Do not trust old pricing or legacy prompts over the Active MMG docs

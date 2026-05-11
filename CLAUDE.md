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
| Update analytics dashboard | Run GA4 report, paste output to Claude, Claude refreshes artifact |

GA4 credentials: `ga4_analytics/ga4_credentials.json` (gitignored)
GA4 OAuth token: `ga4_analytics/ga4_token.json` (gitignored, auto-refreshes)
GCP project: `precise-ascent-495813-r0` (MMG Analytics)

## Source of truth
All brand, content, and pricing files: `C:\Users\andyg\Documents\Mr Mallorca Golf` (Google Drive synced).
Files inside this repo are stale copies — Documents folder always wins.

Key files to upload for content or copy work:
- `Active/MMG_MASTER.md` — brand, tone, credentials, service pricing
- `Active/MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md` — writing guardrails (full authority)
- `Reference/MMG_COURSE_MARKET_REFERENCE_2026.md` — course green fees and market info

## Contacts & privacy split
- `Documents/Active/MMG_CONTACTS_PUBLIC.xlsx` — green fees, websites, public info only
- `Documents/Private/Workbooks/MMG_CONTACTS_PRIVATE.xlsx` — contact names, emails, courtesy terms. NEVER reference in public content. Share rows in chat only when needed for outreach tasks.

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
Full procedure with boilerplate code is in the `nextjs-mrmallorcagolf` skill — use that. Summary of steps:

1. Copy photos to `public/images/[slug]-blog/`, get naturalWidth/naturalHeight for each
2. Add entry to `guide-post-content.js` and `COURSE_REVIEW_DETAILS` in `GuidePostView.jsx`
3. Create English `src/app/guides/[slug]/page.jsx`
4. Add all 6 language translations to `guide-post-content-localized.js`
5. Create 6 language `page.jsx` files
6. Run `npm run check:i18n-release` and `npm run build` — must pass
7. Push. Do NOT add to `guides-content.js` until Andy approves at the live URL.

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

**Brand voice guidelines (generated from published content — read this for any writing task):**
`C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\MMG_BRAND_VOICE_GUIDELINES.md`

This file contains the full voice persona, sentence-level patterns from Andy's actual posts, channel-by-channel tone rules (blog, formal email, client email, Instagram MMG, Instagram personal), hard bans, verdict phrase patterns, and self-check. Read it before any draft.

Full guardrails also in `Active/MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md` (Google Drive) — upload if available. The blog-writing skill also enforces these with examples and a self-check step.

Hard bans: em dashes, "stunning/breathtaking/nestled/seamless/elevate/unforgettable/hidden gem/curated/bespoke/vibrant/bustling/exceptional", "The best part?", "More than just", "Whether you're...", "From X to Y", "In the heart of...", generic AI openings, travel-brochure filler, fake authority language, "not X but Y" framing.

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

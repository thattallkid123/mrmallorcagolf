# Mr Mallorca Golf — Claude Code Context

## Project overview
Private golf day experiences site for Andy Griffiths (PGA Advanced Professional), based in Mallorca, Spain. Launched March 2025. Deployed on Vercel at `mrmallorcagolf.com`.

## Tech stack
- **Next.js 14** (App Router, JSX not TSX — no TypeScript)
- **React 18**
- **Resend** for contact form email delivery
- **Google Analytics** (only third-party script)
- No database, no auth, no CMS
- Deployed via **Vercel** (auto-deploys from `main` branch on GitHub)

## Routing structure
```
src/app/
  page.jsx                  → / (English homepage, uses HomePageInner.jsx)
  HomePageInner.jsx         → shared homepage component
  [page]/page.jsx           → English pages (2 levels deep)
  [lang]/[page]/page.jsx    → Language pages (3 levels deep)

Languages: en (default), de, es, fr, nl, sv, zh
Language pages live at: /de/, /es/, /fr/, /nl/, /sv/, /zh/
```

## Critical import path rule
**This is the most common source of build failures.**

- English pages (`src/app/[page]/page.jsx`) → `../../components/ComponentName`
- Language pages (`src/app/[lang]/[page]/page.jsx`) → `../../../components/ComponentName`
- GolfCoursesClient from a language page → `../../golf-courses/GolfCoursesClient`

Never use `./GolfCoursesClient` or `../../components/GolfCoursesClient` — both will fail.

## Key components
- `src/components/PageLayout.jsx` — wraps every page with nav + footer
- `src/components/Footer.jsx` — footer with language switcher and legal links
- `src/components/RevealObserver.jsx` — scroll-reveal animations
- `src/components/CareerStrip.jsx` — career timeline strip (about page only)
- `src/app/golf-courses/GolfCoursesClient.jsx` — shared client component for all golf-courses pages

## Styles
Single global stylesheet: `src/styles/globals.css`
CSS variables (defined in `:root`): `--deep`, `--pine`, `--gold`, `--gold-light`, `--taupe`
No CSS modules, no Tailwind.

## Pages
| Route | File |
|---|---|
| / | src/app/page.jsx + HomePageInner.jsx |
| /about | src/app/about/page.jsx |
| /coaching | src/app/coaching/page.jsx |
| /play-with-a-pro | src/app/play-with-a-pro/page.jsx |
| /golf-courses | src/app/golf-courses/page.jsx |
| /contact | src/app/contact/page.jsx |
| /privacy-policy | src/app/privacy-policy/page.jsx |
| /terms | src/app/terms/page.jsx |
| /guides/[slug] | src/app/guides/[slug]/page.jsx |

All language variants follow the same pattern under `/de/`, `/es/`, `/fr/`, `/nl/`, `/sv/`, `/zh/`.

## Homepage courses array
Each language's HomePage file has a `courses` array with `id` fields used for deep-link navigation:
```js
{ cls: 'course-card--1', id: 'golf-son-gual', ... }
{ cls: 'course-card--2', id: 'club-de-golf-alcanada', ... }
{ cls: 'course-card--3', id: 'son-muntaner', ... }
{ cls: 'course-card--4', id: 'golf-santa-ponsa-1', ... }
{ cls: 'course-card--5', id: 'golf-de-andratx', ... }
```
onClick navigates to `/golf-courses#[id]`. "View all 22 courses" links to `/golf-courses#all-courses`.

## Content rules
- English is always the master — all other languages should match its structure exactly
- Do not add content to language pages that isn't in the English version
- Andy's voice: direct, credential-led, no fluff. No emojis. No exclamation marks.
- Contact email: andy@mrmallorcagolf.com

## Business context
- Owner: Andy Griffiths (UK PGA Advanced Professional)
- Operating in Spain as autónomo (registration pending as of March 2025)
- Privacy/legal pages comply with GDPR + Spanish LOPDGDD
- Payments: offline bank transfer only — no payment gateway on site
- Analytics: Google Analytics only (IP anonymisation enabled)

## What NOT to do
- Don't add TypeScript — project is intentionally JSX only
- Don't add CSS modules or Tailwind — everything goes in globals.css
- Don't create new components unless clearly reusable across 3+ pages
- Don't add 'use client' to pages that don't need interactivity — most pages are server components
- Don't modify the English master pages when only fixing a language page
- Don't use relative imports that skip levels (e.g. `../../../golf-courses/` from an English page)

# Mr Mallorca Golf - Claude Code Context

## Always-read MMG docs
Use these as the active MMG source of truth before relying on skills or older prompts:

- `C:\Users\andyg\Documents\Mr Mallorca Golf\Active\MMG_PROJECT_BRIEF_SHORT.md`
- `C:\Users\andyg\Documents\Mr Mallorca Golf\Active\MMG_MASTER.md`
- `C:\Users\andyg\Documents\Mr Mallorca Golf\Active\MMG_AI_MISTAKES_AND_STYLE_GUARDRAILS.md`

If any skill, prompt, or older file conflicts with those docs, the Active MMG docs win.
For Mallorca course pricing, seasonality, and access facts inside the repo, also check `docs/mallorca-market-reference-2026-04.md`.

## Project overview
Private golf day experiences site for Andy Griffiths, PGA Advanced Professional, based in Mallorca, Spain. Deployed on Vercel at `mrmallorcagolf.com`.

## Tech stack
- Next.js 14 App Router
- React 18
- JSX only, no TypeScript
- Resend for contact form email delivery
- Google Analytics as the only third-party script
- No database, no auth, no CMS
- Deployed via Vercel from `main`

## Routing structure
```text
src/app/
  page.jsx
  HomePageInner.jsx
  [page]/page.jsx
  [lang]/[page]/page.jsx
```

Languages: `en` default, plus `de`, `es`, `fr`, `nl`, `sv`, `zh`

## Critical import path rule
This is the most common source of build failures.

- English pages: `../../components/ComponentName`
- Language pages: `../../../components/ComponentName`
- `GolfCoursesClient` from a language page: `../../golf-courses/GolfCoursesClient`

Never use `./GolfCoursesClient` or `../../components/GolfCoursesClient`.

## Key components
- `src/components/PageLayout.jsx`
- `src/components/Footer.jsx`
- `src/components/RevealObserver.jsx`
- `src/components/CareerStrip.jsx`
- `src/app/golf-courses/GolfCoursesClient.jsx`

## Styles
Single global stylesheet: `src/styles/globals.css`

CSS variables in `:root`:
- `--deep`
- `--pine`
- `--gold`
- `--gold-light`
- `--taupe`

No CSS modules. No Tailwind.

## Core pages
- `/`
- `/about`
- `/coaching`
- `/play-with-a-pro`
- `/golf-courses`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/guides/[slug]`

All language variants follow the same structure under `/de/`, `/es/`, `/fr/`, `/nl/`, `/sv/`, `/zh/`.

## Homepage course ids
The homepage course cards deep-link into `/golf-courses` using these ids:

```js
{ cls: 'course-card--1', id: 'golf-son-gual' }
{ cls: 'course-card--2', id: 'club-de-golf-alcanada' }
{ cls: 'course-card--3', id: 'son-muntaner' }
{ cls: 'course-card--4', id: 'golf-santa-ponsa-1' }
{ cls: 'course-card--5', id: 'golf-de-andratx' }
```

## Content rules
- English is always the master
- Do not add content to language pages that is not present in English
- Contact email is `andy@mrmallorcagolf.com`

## Writing guardrails
- No em dashes
- No generic AI openings
- No travel-brochure filler
- No fake authority language
- No inflated luxury wording
- No "not X, but Y" framing
- No "here's the truth" hooks
- No empty three-part fragment lines
- Prefer specific observations over polished filler
- Use first person only for courses Andy has genuinely played
- If writing sounds generic or inflated, rewrite it

## Business context
- Owner: Andy Griffiths, UK PGA Advanced Professional
- Based in Mallorca since March 2025
- Privacy and legal pages align with GDPR and Spanish LOPDGDD
- Payments are offline bank transfer only
- No payment gateway on site

## What not to do
- Do not add TypeScript
- Do not add CSS modules or Tailwind
- Do not create new components unless clearly reusable
- Do not add `use client` unless the page needs interactivity
- Do not modify English master pages when only fixing a language page
- Do not trust old pricing or legacy prompts over the Active MMG docs

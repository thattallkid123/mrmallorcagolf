---
name: new-prototype
description: Build a new interactive tool, quiz, or selector — from standalone prototype in prototypes/ through promotion to a live Next.js route, including the full zh deployment checklist (WeChat, Resend email, Baidu analytics). Use when Andy wants a new tool/quiz/calculator/selector built or an existing prototype put live on the site.
---

# New Prototype / Interactive Tool

Two stages: a standalone HTML prototype for iteration, then promotion to a Next.js route when it goes live. Don't skip stage 1 — Andy reviews prototypes before anything ships.

## Stage 1 — Prototype in `prototypes/`

- One folder per tool: `prototypes/{tool-name}/index.html` (HTML + inline JS/CSS, self-contained). Add a card link in `prototypes/index.html`.
- **Images: only `/images/...` paths — never Unsplash/Pexels/external URLs.**
  - Guide card images if they exist: `/images/{slug}-card.webp` (alcanada, son-gual, t-golf-calvia, son-muntaner, santa-ponsa, andratx)
  - Fallback for all 24 courses: `/images/courses/{slug}.webp`
  - `loading="lazy"` and honest `alt` text on every image
- Course facts/pricing shown in the tool must match `src/lib/golf-courses-data.js` — don't invent or copy from external sites. (`src/lib/mallorca-tracker-courses.js` is placeholder data — never source from it.)

## Stage 2 — Promote to a live route

Follow the existing pattern: EN tool routes live under `src/app/(en)/tools/{tool}/` or a top-level route like `(en)/course-selector/`; locale variants under `src/app/{locale}/tools/{tool}/`. The zh course selector (`src/app/zh/course-selector/ZhCourseSelectorClient.jsx` + `src/app/api/zh-selector-email/route.js`) is the reference implementation for a zh tool with email capture.

- English pages import from `../../components/`; locale pages from `../../../components/`.
- Add the route to `src/app/sitemap.js` and metadata via `src/lib/page-metadata.js` (description per the `meta-ctr` skill).
- Email capture: Resend for immediate delivery (see `zh-selector-email/route.js`); MailerLite fields for nurture (`selector_answers`-style variables) if EN-facing.

## zh deployment checklist (all boxes before live)

1. **Images:** all via `/images/` paths; WeChat QR exists at `public/images/wechat-qr.png`; tested on the site, not just standalone HTML
2. **Contact:** WeChat ID `andygriffiths1` (code + image); WhatsApp `+34624466702` (from `WhatsAppButton.jsx`); links point to `/zh/contact`, `/zh/play-with-a-pro`, `/zh/guides`
3. **Email:** endpoint exists (pattern: `/api/zh-selector-email`), uses Resend (NOT MailerLite for zh), template tested with real data
4. **Analytics:** Baidu Analytics wired (GA4 is blocked in mainland China and excluded on `/zh` routes). Track: `zh_{tool}_start`, `zh_answer_selected`, `zh_recommendation_viewed`, `zh_email_results`, `zh_wechat_click`, `zh_booking_click`
5. **Localization:** `npm run check:locale-parity`; no English leaks (`npm run check:locale-leaks`); all contact labels in Chinese; service names use their Chinese-facing versions (see `localize-check` skill)

## Ship

`npm run check:content` + `npm run build` (+ locale checks if any locale route was touched), then the `ship` skill. Spot-check the tool on production, including on a phone — these tools are mostly used on mobile.

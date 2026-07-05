---
name: publish-course-guide
description: End-to-end workflow for publishing a new course review guide on mrmallorcagolf.com — photos, content entry, routing, sitemap, IndexNow, RSS, OG verification, deploy. Use whenever Andy has played a new course and wants the review published, or says "publish the [course] guide".
---

# Publish A New Course Guide

Follow every step in order. A guide is not published until the Vercel deployment is READY and the post-deploy pings have run. Read `COURSE_BLOG_PIPELINE.md` and `MMG_BRAND_VOICE_GUIDELINES.md` before drafting any copy.

## Step 0 — Gather required facts (block if missing)

Do NOT publish a guide missing any of these. Ask Andy once (never drip-feed):

- **Pricing & access:** green fee range (peak/low, with year), handicap limit men/women, certificate required at booking?, €3 daily federation licence applies?
- **Practicalities:** drive time from Palma (minutes), walking rules, buggy rules (mandatory/optional/included when), singles bookable?, dress code notes
- **On-course:** who it genuinely suits, wind exposure (which holes/time of day), the "surprise" detail, signature hole, any confusion point, the honest negative (one per post, specific)
- **Facilities:** restaurant/terrace verdict, practice facilities, club hire + pricing

Cross-check known facts against the table in `docs/course-guide-standards.md` ("Course-specific known facts"). Never guess or copy from external sites.

## Step 1 — Photos

- Process per `COURSE_BLOG_PIPELINE.md` Step 2: `ImageOps.exif_transpose()` on every photo from **original source files**, never re-process a WebP, **no cropping**, max 1600px longest edge, WebP quality 82, each file <600 KB, folder <4 MB.
- Save to `public/images/{slug}-blog/` named `{slug}-1.webp`, `{slug}-2.webp`, …
- Pick the **hero** for OG: landscape, wide fairway/green/clubhouse shot, key content in the middle band (OG overlay darkens top/bottom thirds).
- Card image: prefer a centre crop of `public/images/courses/{slug}.webp` → 900×386 → `public/images/{slug}-card.webp`. Never a close-up or people shot.
- WebP→JPEG conversion for OG is automatic on `npm run build` (prebuild). To run alone: `npm run convert-og-images`.

## Step 2 — Content entry

- Add the entry to `src/lib/guide-post-content.js` following the existing pattern. **This file is large — use scripted/precise byte replacement, never fragile editor operations.**
- Set `imagePath` to the WebP hero (e.g. `'/images/{slug}-blog/{slug}-1.webp'`) — OG converts `.webp` → `.jpg` automatically.
- Include a `{ type: 'heading', text: 'Common Questions' }` block + paragraphs covering: handicap limit/certificate, walking vs buggy, who it suits, the surprise detail, one local-knowledge tip.
- Meta description: follow the `meta-ctr` skill rules (lead with the number/fact, <155 chars, double quotes if the string contains apostrophes).

## Step 3 — Routing

- Create `src/app/(en)/guides/{slug}/page.jsx` by copying an existing review (e.g. `son-termes-review/page.jsx`) and changing the slug — it appears 2× (getGuidePostContent + metadata).
- Course reviews do NOT go in `ARTICLE_SLUGS` in `src/lib/site.js` (that's article guides only).
- **Add the course to `COURSE_REVIEW_DETAILS`** in `src/app/(en)/guides/GuidePostView.jsx`. This object powers two things: the Review schema (structured data) and the inline funnel CTA that appears just before the booking CTA on every course review. Without this entry, neither feature activates. Fields: `name` (official course name), `ratingValue` (1–5), `addressLocality` (town).

## Step 4 — Discovery surfaces (all four, easy to miss)

1. `src/app/sitemap.js` — add `'/guides/{slug}': 'YYYY-MM-DD'` (today) to `LAST_MODIFIED_BY_PATH`
2. `scripts/indexnow-ping.mjs` — add the full URL to `URLS`
3. `src/app/api/cron/indexnow/route.js` — add the same URL
4. `src/app/feed.xml/route.js` — add `'{slug}': 'YYYY-MM-DD'` to `GUIDE_DATES`

Always use `https://www.mrmallorcagolf.com/...` (www — never non-www).

## Step 5 — Verify OG before deploying

Run `npm run dev`, open:
`http://localhost:3000/api/og?title=YOUR+TITLE&badge=Course+Review&image=%2Fimages%2F{slug}-blog%2F{slug}-1.jpg`

Confirm the course photo fills the frame (NOT the pine-gradient fallback), logo top-left, badge top-right, title readable. If the gradient shows, run `npm run convert-og-images` and retry.

## Step 6 — Ship

Use the `ship` skill: `npm run check:content` → `npm run build` → commit → push → confirm Vercel deployment READY. Then, after deploy is live: `npm run indexnow`.

## Brand-voice gate

Before commit, self-check the draft against `MMG_BRAND_VOICE_GUIDELINES.md` (in Drive/Systems & Planning). One honest negative, first-hand detail, no tourism filler, no invented captions.

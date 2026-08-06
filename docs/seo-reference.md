# SEO Reference — Infrastructure & CTR Tracking

Detailed reference for SEO/analytics work. The always-on *rules* (canonical www, meta-description CTR rules, analytics workflow) live in CLAUDE.md; this file holds the deeper detail. Used by the `/seo-review` and `/meta-ctr` skills.

## Technical SEO — What's In Place (June 2026)

- **Sitemap:** `/sitemap.xml` — dynamic, multilingual, all 7 locales. Last-modified dates are hardcoded in `src/app/sitemap.js` — update when content changes.
- **robots.txt:** `public/robots.txt` — permissive, disallows `/api/`, `/admin/`, PDFs. References sitemap.
- **RSS feed:** `/feed.xml` — live as of June 2026. Covers all guides (course reviews + articles). Update `GUIDE_DATES` in `src/app/feed.xml/route.js` when new guides are published.
- **llms.txt:** `public/llms.txt` — AI agent discovery file. Keep updated when major pages or offers change.
- **No-Vary-Search headers:** All routes ignore UTM parameters for cache purposes. Configured in `next.config.js`.
- **Structured data:** Person, LocalBusiness, Organization, WebSite, Article, CollectionPage, BreadcrumbList, FAQPage — all in `root-layout-shared.jsx` and page-level components.
- **RSS alternate link:** Declared in root metadata `alternates.types` — auto-discovered by browsers and feed readers.
- **hreflang:** Configured via `getAlternates()` in `site.js` for all 7 locales with `x-default`.
- **OG images:** Dynamic branded images at `/api/og?title=...&badge=...&image=...` (1200×630). Design: course hero photo as background, dark overlay, MMG logo top-left, gold "Course Review" (or custom badge) top-right, white title bottom-left. Falls back to pine gradient if no JPEG/PNG is provided — this should never happen for a live guide with photos. Both course reviews (`buildGuidePostMetadata`) and article guides (`buildGuideArticleMetadata`) generate the OG URL automatically from the guide's `imagePath`.
- **OG image conversion (automated):** `scripts/convert-og-images.mjs` runs automatically before every build (`"prebuild"` in package.json) and converts all WebP images in `public/images/` to JPEG. satori (ImageResponse) does not support WebP — only JPEG/PNG. No manual action needed: upload WebP → next build auto-converts → OG picks up JPEG. To run without a full build: `npm run convert-og-images`.
- **OG photo guidelines:** Use **landscape** photos for best results — the OG frame is 2:1 wide, so portrait shots get cropped. Wide fairway, green, or clubhouse shots work best. The overlay darkens the top and bottom thirds, so keep the key visual content in the middle band of the image. For course reviews, the `imagePath` in the guide content object controls which photo is used as the OG background.
- **OG placeholder for draft courses:** All 24 course thumbnail photos already exist at `/images/courses/{course-name}.jpg`. If a draft guide needs a temporary OG before the blog photos are uploaded, use `imagePath: '/images/courses/son-vida.jpg'` (swap for the correct course). Switch to the proper blog hero photo once uploaded.
- **To preview any OG image:** `http://localhost:3000/api/og?title=YOUR+TITLE&badge=Course+Review&image=%2Fimages%2Fcourses%2Fson-vida.jpg` — swap values as needed. On production: same URL with `https://www.mrmallorcagolf.com`.
- **Static fallback social image:** `public/images/social-preview.jpg` (1200×630, referenced in `guide-article-content.js` and `page-metadata.js` as the default og:image where no per-page dynamic OG applies) is generated from `public/images/hero-main.jpg` by `node scripts/generate-social-preview.js`. Re-run it only if the homepage hero photo changes.
- **IndexNow:** Key file at `/8165a51f1761605d62f207e8043a2027.txt`. Vercel cron runs `GET /api/cron/indexnow` daily at 06:00 UTC to ping Bing/IndexNow with all guide URLs. Manual trigger also available via `npm run indexnow`. Add new guide URLs to both `scripts/indexnow-ping.mjs` and `src/app/api/cron/indexnow/route.js` when publishing new guides. For an ad-hoc single-URL ping (e.g. right after publishing, before the guide is added to the tracked list), use `.\scripts\indexnow-ping.ps1 "guides/your-slug"` — it hits the same `/api/cron/indexnow` endpoint directly.

## Meta Descriptions — key pages tracking (updated June 2026)

| Page | Impressions (90d) | CTR before | Description now leads with |
|------|------------------|------------|---------------------------|
| Son Gual review | 864 | 0.5% | `€110–€165 + handicap certificate required` |
| Son Muntaner review | 586 | 0.7% | `Spain's Best Golf Course 2025` |
| Golf Cost Mallorca | 671 | 0.5% | Named course prices (Pollensa/Son Gual/Son Muntaner) |
| Best Golf Courses | 1,815 | 1.2% | (current — monitor) |

Update this table when descriptions change, with the date, so CTR effects can be judged after ~4 weeks of Search Console data.

### 2026-07-17 CTR round

Prior round's changes didn't move the needle (some went backwards) — this round is a second attempt, judge again in ~4 weeks:

| Page | Impressions (28d) | CTR before | Change made |
|------|------------------|------------|-------------|
| Golf Cost Mallorca | 329 | 0.3% | Description now opens with the direct price answer (`A round costs €55–€250; most courses charge €90–€150`) instead of a course-name list |
| Son Muntaner review | 738 | 0.4% | Title now leads with a question hook (`Worth €260?`) instead of a price range |
| Homepage | 460 (non-brand) | 0.2% | Title/description rewritten around concrete proof (24 courses, PGA Advanced Professional living on the island) instead of generic service names |
| /golf-courses hub | 413 | 0.7% | Description now leads with the number (`All 24 Mallorca golf courses... green fees €55-€250`) |
| Best Golf Courses guide | 2,356 | 1.5% | Description now includes "Majorca" alongside "Mallorca" to catch the "majorca golf courses" query cluster (18–28 impressions/query, position 19–29) |

Also shipped this round (not CTR-focused, judge via enquiry events instead): every course review (8) and the Best Golf Courses guide now link to `/plan-your-trip`, mirrored across all 6 non-English locales. Homepage intro section gained a second link to the Best Golf Courses guide.

### 2026-08-06 length-compliance backlog clearance (not a CTR round)

`npm run check:meta-length` had a 56-issue backlog (mostly non-English `metadata.title`/`.description` values that had never been checked against the brand-suffix-aware SERP budget). Fixed all 56 in one pass and wired the check into `check:content`/`predeploy` so it can't recur silently. This was a batch technical-debt clearance, not a targeted CTR experiment — most of the touched strings are locale variants of lower-traffic pages (e.g. Golf de Andratx and Son Antem West reviews in de/es/fr/nl/sv), not pulled from a Search Console impressions/CTR review. Do not read CTR movement on these pages as validating the specific wording; if a high-impression page's CTR moves, that's coincidental to this pass, not the point of it. Full page/locale change list is in that day's git commit, not duplicated here.

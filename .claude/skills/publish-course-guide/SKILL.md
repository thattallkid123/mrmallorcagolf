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
- **Two separate photo decisions — ask Andy about both, don't assume they're the same image:**
  1. **Article lead image** (first block, `priority: true`) — the photo that opens the written piece. Often the most natural narrative opener (course entrance, first tee) rather than the most scenic shot.
  2. **OG/social preview image** (`metadata.imagePath`) — what shows up as the link thumbnail on WhatsApp/Twitter/iMessage. Usually the most visually striking landscape-ish shot, which is frequently a *different* photo from the lead image (found 2026-09-24, Son Quint: lead was the entrance sign, OG was a back-nine mountain approach — a scenic par-3-over-water shot was in between). Present Andy the numbered photo set and ask which he wants for each, rather than picking one photo to serve both jobs.
- Card image: prefer a centre crop of `public/images/courses/{slug}.webp` → 900×386 → `public/images/{slug}-card.webp`. Never a close-up or people shot.
- WebP→JPEG conversion for OG is automatic on `npm run build` (prebuild). To run alone: `npm run convert-og-images`. If you change `metadata.imagePath` after the JPG already exists, delete the stale `{old-file}.jpg` first — `convert-og-images.mjs` skips generation when a same-stem JPG already exists, so an orphaned file from the previous hero choice will sit there unused rather than error.

**Typical length, for calibration:** across the 9 live/in-progress course reviews, 5-9 images (avg ~7) and 800-1,250 words of body copy (avg ~1,000), 28-34 content blocks total. A post well outside that range on either axis is worth a second look — too short usually means a thin round with not enough distinct holes covered, too long usually means padding rather than more first-hand detail.

## Step 2 — Content entry

- Add the entry to `src/lib/guide-post-content.js` following the existing pattern. **This file is large — use scripted/precise byte replacement, never fragile editor operations.**
- Set `imagePath` to whichever photo Andy picked as the OG/social image in Step 1 (not automatically the lead/hero image — see Step 1). OG converts `.webp` → `.jpg` automatically.
- Include a `{ type: 'heading', text: 'Common Questions' }` block + paragraphs covering: handicap limit/certificate, walking vs buggy, who it suits, the surprise detail, one local-knowledge tip.
- Meta description: follow the `meta-ctr` skill rules (lead with the number/fact, <155 chars, double quotes if the string contains apostrophes).
- Course/hole lengths: use metres, not yards — every existing review and the course-listing pills use metres exclusively (confirmed 2026-09-09 by grepping the whole content tree; only two "yards" hits existed anywhere and both were added that same day). Yards only belongs in first-person shot-distance mentions ("I had 120 yards left for my second"), never as the course or hole length unit — this applies even when the sentence is describing a tee shot with an iron off the tee, not just approach shots (mixed up 2026-09-24, Son Quint: "230 yards with an iron" got written as "230m" because it read like a hole-length statement rather than a personal club-selection detail).
- A course fact that's marketed/official but that Andy didn't personally witness (a signature hole he didn't play, a view blocked by weather, a feature mentioned in verified site data but not in his round notes) — don't silently state it as observed fact, and don't silently drop it either. Ask how he wants it framed, or frame it honestly as unconfirmed/missed (Son Quint's hole 8 "tee off toward Palma Cathedral" fact was real per `course-facts-data.js`, but Andy's round notes never mentioned seeing it — the honest version was "the fog hadn't lifted and the cathedral never showed itself," which is both more interesting and doesn't claim an experience he didn't have).
- **Verify the new key landed as a top-level sibling, not nested inside the previous entry.** `node --check` only confirms valid JS syntax, not correct object nesting — a byte-replacement anchor that matches one brace too early will silently nest the new review inside the previous one's object (both are valid JS, so syntax check passes either way). After inserting, always run:
  ```
  node -e "import('./src/lib/guide-post-content.js').then(m => console.log('son-quint-review' in m.GUIDE_POST_CONTENT))"
  ```
  and confirm it prints `true` at the top level, not just that the string exists somewhere in the file via grep (found 2026-09-24: the anchor `"  },\n  'next-key': {\n"` matched one closing brace too early and nested the whole new entry as a sibling of `en` inside the previous course's object — `grep` found the key text fine, syntax check passed, but `GUIDE_POST_CONTENT['son-quint-review']` was `undefined`). Prefer anchoring on the unique next-key line alone (`"  'next-key': {\n"`) rather than including the preceding closing brace(s) in the anchor, since brace-count-before-a-key is easy to get wrong when a course has multiple nested closes (`en` close, then outer-key close) at similar indentation.

## Step 2.5 — Listing placement

Ask Andy where the course should sit in its region block in `src/lib/golf-courses-data.js` (e.g. "keep it where alphabetical/entry order would put it, or next to a specific course?"). This file is not touched by `scaffold-guide.mjs` — adding the course-listing card entry (name, img, location, pills, difficulty, text, footer, reviewSlug) here is a separate manual step, easy to skip since nothing else in this workflow fails if it's missed. Group by rough difficulty/tier within the region where Andy has a preference, rather than defaulting to end-of-region.

## Step 3 — Routing

Run `node scripts/scaffold-guide.mjs --slug {slug} --name "<official course name>" --locality "<town>" --rating <1-5>` (requires step 2 done first — it reads the title from `guide-post-content.js`). This creates `src/app/(en)/guides/{slug}/page.jsx`, adds the `COURSE_REVIEW_DETAILS` entry in `src/app/(en)/guides/GuidePostView.jsx`, and adds the slug to `REVIEW_POST_SLUGS` in `src/lib/site.js`, skipping any part that already exists.

- Course reviews do NOT go in `ARTICLE_SLUGS` in `src/lib/site.js` (that's article guides only) — `REVIEW_POST_SLUGS` is the correct list and the script now maintains it for you.
- `COURSE_REVIEW_DETAILS` powers two things: the Review schema (structured data) and the inline funnel CTA that appears just before the booking CTA on every course review. Without this entry, neither feature activates.
- `REVIEW_POST_SLUGS` drives locale route generation and `convert-og-images.mjs`'s scan for social JPGs to generate. Missing it doesn't fail the build — it just silently skips the new guide's locale routes and OG image (found 2026-09-09 shipping the T Golf Palma review: `check:content` was green, `npm run build` succeeded, and only a direct look at the OG jpg and locale routes caught the gap). If you ever add an entry to this list by hand instead of via the script, re-run `npm run convert-og-images` afterwards.

## Step 4 — Discovery surfaces

Run `node scripts/sync-discovery.mjs --add {slug}` — adds the slug to all four surfaces in one command (`sitemap.js`, `feed.xml/route.js`, `indexnow-ping.mjs`, `api/cron/indexnow/route.js`). `npm run check:discovery` (part of `check:content`) fails the build if the four ever disagree with each other or with the live guide content, so a missed surface can't ship silently.

## Step 5 — Verify OG before deploying

There is no `/api/og` route — it was removed in favour of a direct static JPG (see `BUGS.md`, "og:image not showing on WhatsApp/social previews": WhatsApp and some crawlers don't follow redirects, so `og:image`/`twitter:image` point straight at the same-stem `.jpg`). Verify the real thing instead:

1. `npm run convert-og-images` (also runs automatically as part of `npm run build`) — confirm it reports the new `{slug}-1.jpg` converted, not skipped. Requires the slug to be in `REVIEW_POST_SLUGS` (Step 3) or it won't be scanned at all.
2. `npm run dev`, then `curl -s http://localhost:3000/guides/{slug} | grep 'og:image'` — confirm it resolves to `https://www.mrmallorcagolf.com/images/{slug}-blog/{slug}-1.jpg`, not a route.
3. Open that JPG directly and confirm it's a real course photo, right way up, landscape enough to read at thumbnail size (this file is the direct source photo, not a branded overlay — there is no logo/badge/title rendered onto it).

## Step 5.5 — Ship English-only for Andy's read (mandatory gate, do this before translating)

**Andy reads the English draft at its live URL before any translation work starts.** This was previously implicit in Step 6's "stays out of the carousel until approved" language but not explicit enough about translations specifically (flagged 2026-09-24, Son Quint) — translating into 6 languages is real work, and content he hasn't approved yet is likely to change (as Son Quint's did: photo order, wording, a factual framing choice all changed after his first read).

To ship an English-only draft without it needing all 6 locale entries (which `check:guide-parity` and `check:shared-locale` otherwise require):

1. Add the new slug to `EN_ONLY_REVIEW_POST_SLUGS` in `src/lib/site.js` instead of leaving it in `REVIEW_POST_SLUGS` (the scaffold script adds it to `REVIEW_POST_SLUGS` by default — move it).
2. Run the full Step 7 ship sequence. The page builds as a single static English route (`/guides/{slug}`), no locale variants, not in the carousel, and content checks pass without translations.
3. Give Andy the live URL. Iterate on his feedback in English only — this is the cheap phase to catch wording, ordering, and fact issues in.
4. **Only once he explicitly approves:** move the slug from `EN_ONLY_REVIEW_POST_SLUGS` back to `REVIEW_POST_SLUGS`, write the 6 locale translations per `COURSE_BLOG_PIPELINE.md` Step 7 (golf terminology table, one script per the "how to do translations efficiently" section), then proceed to Step 6 below.

## Step 6 — Go live in the carousel (after Andy approves)

Steps 1-5 make the page reachable and indexable, but it stays out of the public guides index/carousel until this step — that gap is intentional, it's what lets Andy review the real page at its live preview URL before anyone finds it organically. Do NOT do this step until he has approved the content.

Three registrations, none handled by any script (found 2026-09-09, the same day as the `REVIEW_POST_SLUGS` gap in Step 3 — the same class of miss: `check:content` and `npm run build` both stay green with all three missing):

1. Add `reviewSlug: '{slug}'` to the course's own entry in `src/lib/golf-courses-data.js` (the course-listing pill data) — links the course-listing card to the review in both directions.
2. Add `'{slug}'` to `COURSE_REVIEW_SLUGS` in `src/lib/guides-content.js` — without this, `syncGuideKeywordFacts()` can't find the course via `reviewSlug`, and the card's Par/€ keywords never sync to live pricing/scorecard data; they just sit frozen as whatever static text you typed.
3. Add a card entry to `liveGuides` in `src/lib/guides-content.js` (en): `slug`, `badge`, `badgeGold` (true for the higher-rated/premium-tier reviews — follow the pattern of the existing gold-badged entries), `img` (the Step 1 card image), `imgPosition`, `title`, `intro`, `readTime`, `keywords`. Then add a matching overlay to all 6 locale blocks in `src/lib/guides-content-localized.js` — same fields except `img`/`imgPosition`, which inherit from English.
4. **Separate repo, separate app, easy to forget:** in `mmg-tools/guide/index.html` (the Course Guides Netlify PWA), the course's `course-card` div already exists for every listed course but has no "Read full review" link until you add one (found 2026-09-12, T Golf Palma: published on the site for days before this app was updated). Add, right after that course's `</details>` and before its `compare-add-btn`: `<a class="course-review-link" href="https://www.mrmallorcagolf.com/guides/{slug}" target="_blank" rel="noopener" data-i18n="readFullReview">Read full review &#8594;</a>` — copy the exact pattern from an existing course-review-link (e.g. `t-golf-calvia`). Bump the date suffix in `guide/sw.js`'s `VERSION` constant (PWA cache rule), then commit/push to `mmg-tools` `master` per its own repo rules — this file is NOT part of the mrmallorcagolf `main` deploy.
5. Update Andy's own played-course count in Drive `MMG_ENCYCLOPAEDIA_DATA_MASTER.md` — the "Coverage Status" section near the top (`Played courses: X/X` list + `Researched courses: Y/Y` list + "Firsthand-play gaps still to convert later" count), and move the course's own entry from "## N Researched Courses (Not Yet Played)" up into "## N Played Courses (Completed Entries)" with a full `THE EXPERIENCE` / `ANDY'S TAKE` write-up added (source it from this guide's approved review text — do not invent new opinions), renumbering only the entries that shift. This file lives in Drive only, not either git repo, and **a cloud/remote session cannot write to it** — the Google Drive MCP connector is read-only (search/read/metadata; no content-write tool) — so this step has to be done from a session with real local filesystem access to `G:\` (a PC-based `claude`/`claude rc` session), even if the rest of this skill ran from the cloud (confirmed 2026-09-12, T Golf Palma).

## Step 7 — Ship

Use the `ship` skill: `npm run check:content` → `npm run build` → commit → push → confirm Vercel deployment READY. Then, after deploy is live: `npm run indexnow`.

## Brand-voice gate

**This is a mandatory self-read before Andy ever sees the draft, not just a reminder to run `npm run check:voice`.** `check:voice` only catches em dashes and the fixed banned-word list; it does not catch vague enthusiasm, repetition, or internal logic errors, and none of those failure modes will show up again as a passing check giving false confidence (found 2026-09-24, Son Quint draft: `check:voice` was green the whole time while the draft had "genuinely" used twice — banned as filler — plus vague claims and 6x repetition of "tight/tighter" that a human caught on first read and the tooling never would).

Before presenting any drafted review to Andy, actually do these passes against the new block text (not the whole file):

1. **Banned words and em dashes.** Grep the new block specifically for the full list in `MMG_BRAND_VOICE_GUIDELINES.md` section 3 — don't rely on memory of the list, re-read it. `check:voice` covers this at commit time too, but catching it before Andy reads the draft is the point.
2. **Repetition scan.** Grep the new block for its own distinctive words/phrases (adjectives like "tight", "firm", "proper", stock phrases like "plenty to think about", "good fit for") and count occurrences. Two or more real repeats of the same word/phrase (beyond course/hole names, which are expected to repeat) means vary the wording before showing the draft.
3. **Vague-claim scan.** Per the voice guide's abstraction rule (section 4): does every "best", "great", "proper", "genuinely" claim get cashed out with a specific, a consequence, or an instruction in the same sentence? "One of the best moments of the round" with nothing concrete attached is the failure mode — cut it or replace with the specific detail that made it good.
4. **Internal-consistency read.** Read the draft in narrative order as if hearing it for the first time, checking that claims don't contradict earlier established facts in the same piece — especially "first time", "no chance to", "hadn't yet" type statements against what hole/moment in the round they're attached to (found 2026-09-24: a "leap into the unknown" framing was attached to the 9th hole, after 8 holes had already been played, when the actual fact — no time on the range before the round — belonged to the 1st tee, not the 9th).
5. **One honest negative, first-hand detail, no tourism filler, no invented captions** — the original checklist, still required.

Only after this self-read should the draft go to Andy. Treat his first read as a second pass, not the first line of defence.

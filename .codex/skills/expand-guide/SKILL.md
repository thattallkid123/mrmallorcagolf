---
name: expand-guide
description: Lengthen or improve an existing published guide — add Common Questions sections, new facts, or new photos, then refresh the discovery surfaces so search engines re-crawl it. Use when Andy wants to expand, update, or add FAQs to a guide that is already live.
---

# Expand An Existing Guide

For updating a live guide — not publishing a new one (that's `publish-course-guide`).

## 1. What to add

The highest-value expansion is a **Common Questions** section — these are the long-tail ranking signals:

```js
{ type: 'heading', text: 'Common Questions' },
{ type: 'paragraph', ... }  // one or two blocks
```

Cover, in Andy's voice (read `MMG_BRAND_VOICE_GUIDELINES.md` first):
1. Handicap limit and certificate requirement
2. Walking vs. buggy options
3. Who the course suits best (level of golfer)
4. One thing that surprises first-time visitors
5. A local-knowledge tip (first tee, wind timing, post-round lunch)

**Facts only from verified sources:** the "Course-specific known facts" table in `docs/course-guide-standards.md`, `guide-post-content.js` itself, or Andy directly. Blank cells in that table mean *unverified* — ask Andy, never guess or copy from external sites. If Andy confirms a new fact, update that table in the same commit.

## 2. Editing the content file

- `src/lib/guide-post-content.js` and `guides-content.js` are large — **use scripted/precise byte replacement, never fragile editor operations.**
- English is master. If the guide has localized versions (`guide-article-content-localized.js`), add the same content for all 6 locales in the same edit — no English-only gaps. Run `npm run check:guide-locale-leaks` if localized guide content changed.
- If the answer to a Common Question changes the page's search intent match, re-check the meta description against the `meta-ctr` skill while you're in the file.

## 3. Refresh discovery surfaces

An expanded guide should be re-crawled: run `node scripts/sync-discovery.mjs --bump {slug}` — bumps today's date in `sitemap.js` and `feed.xml/route.js`, and adds the slug to the IndexNow surfaces if it was somehow missing. After deploy: `npm run indexnow`.

## 4. Ship

`npm run check:content` → `npm run build` → the `ship` skill → post-deploy `npm run indexnow`. If photos were added, follow `add-site-photos` for processing.

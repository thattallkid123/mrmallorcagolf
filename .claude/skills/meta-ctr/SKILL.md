---
name: meta-ctr
description: Rules for writing or rewriting meta descriptions and titles to lift CTR on mrmallorcagolf.com. Use when adding metadata for a new page/guide, or when Search Console shows high impressions with low CTR and Andy wants descriptions improved.
---

# Meta Descriptions — CTR Rules

Low CTR on high-impression pages is the primary SEO lever. Every description is a search-result ad, not a summary.

## Writing rules

1. **Lead with the specific number or fact** the searcher wants: price (`€110–€165`), award (`Spain's Best Golf Course 2025`), requirement (`handicap certificate required`), distance (`20 minutes from Palma`).
2. **Answer the real question** — "is it worth the price", "who should book it", "can beginners play it" — not "honest review inside".
3. **Under 155 characters.** Count them. Over 155 gets truncated at the exact point the payoff usually sits.
4. **No filler endings:** never "Honest PGA verdict inside", "find out more", "read now", "click here".
5. **Apostrophe rule:** use double quotes for JS strings containing apostrophes — the SWC compiler treats curly apostrophes (`'` U+2019) as string terminators in single-quoted strings.

## Where descriptions live

- Course reviews / articles: `metadata.description` in the guide's entry in `src/lib/guide-post-content.js` or `src/lib/guide-article-content.js` (+ `guide-article-content-localized.js` for the 6 other languages)
- Static pages: `src/lib/page-metadata.js`
- Localized descriptions follow the same CTR rules in each language — translate the approach, not just the words

## Process

1. Pull the target pages: high impressions + low CTR from Search Console (or `npm run ops:weekly` output). Always inspect URLs as `https://www.mrmallorcagolf.com/...` (www). For queries specific to one page, filter Search Console's `searchAnalytics.query` API by a `page` dimensionFilterGroup — the standalone `search_console_report.py` script has no `--page` flag.
2. **Diagnose before rewriting.** If a page has decent position (top 10) but flat ~0% CTR across many distinct queries (not just one weak query), don't assume the copy is uncompelling — check what Google is actually showing first (`document.title`, `<meta name="description">`, length included). A title or description that's too long doesn't get a "worse" version shown — Google truncates or algorithmically rewrites it, discarding your copy entirely. Rewriting the wording again without fixing the length repeats the same failure. This happened on `/guides/son-muntaner-review` and `/guides/golf-cost-mallorca`: both titles were rewritten multiple times over months to try to lift CTR, but the *raw* string kept growing (adding price ranges, taglines) and no one accounted for the suffix (see below), so the rendered title in the SERP was 75–90 characters the whole time — none of the rewrites ever actually reached users differently.
3. Draft the new title/description; verify with `npm run check:meta-length` (scans `page-metadata.js` + guide metadata + their `-localized.js` overlay files — titles and descriptions, all 7 locales). It's a standalone command, not yet in `check:content` — as of 2026-07-27 it has a large backlog (~195 findings sitewide, mostly pre-existing) that needs working through page by page, not fixed in one pass.
4. Update the key-pages tracking table in `docs/seo-reference.md` so the next session knows what changed and why.
5. Ship via the `ship` skill (`check:content`; add `check:i18n-release` if localized metadata changed).
6. Note the change date — CTR effects need ~4 weeks of Search Console data before judging.

## Titles (same lever, same length trap as descriptions)

**The 60-character budget is for the title as Google actually displays it — not the string you type.** Every page title gets `" | Mr Mallorca Golf"` (19 characters) appended automatically by the root layout's Next.js metadata template (`src/app/root-layout-shared.jsx`). This is invisible in the source file — a guide's `metadata.title` string never includes the brand suffix — so a raw title that "looks like" 55 characters in the code is actually 74 in the SERP. `check:meta-length` adds the 19-char suffix back before comparing against 60, so **trust the script's total, not a manual character count of the raw string.** Practical raw-string budget: ~40 characters.

Front-load the query words, keep the brand suffix (don't try to omit it — it isn't part of the string, it's structural), stay under the 60-char *total*. Don't churn titles and descriptions on the same page in the same week if you want to attribute the effect.

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

1. Pull the target pages: high impressions + low CTR from Search Console (or `npm run ops:weekly` output). Always inspect URLs as `https://www.mrmallorcagolf.com/...` (www).
2. Draft the new description; verify <155 chars (`node -e "console.log('...'.length)"`).
3. Update the key-pages tracking table in `docs/seo-reference.md` so the next session knows what changed and why.
4. Ship via the `ship` skill (`check:content`; add `check:i18n-release` if localized metadata changed).
5. Note the change date — CTR effects need ~4 weeks of Search Console data before judging.

## Titles (same lever)

If a title also underperforms: front-load the query words, keep the brand suffix, stay under ~60 visible characters. Don't churn titles and descriptions on the same page in the same week if you want to attribute the effect.

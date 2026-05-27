# Search Console + Indexing Workflow (Weekly)

## Goal
- Keep priority URLs indexed.
- Raise CTR on near-ranking queries.
- Turn quick wins into content and internal-link actions.

## Weekly Run Order
1. `npm run ops:weekly`
2. Review:
   - `outputs/site-ops/weekly/weekly-seo-performance-latest.md`
   - `search_console/reports/search-console-YYYY-MM-DD.txt`
   - `search_console/reports/url-indexing-YYYY-MM-DD.txt`
3. Refresh performance check:
   - `npm run check:lighthouse`
4. Log actions in changelog/work notes before implementation.

## Triage Rules
- `Position <= 15` and `CTR < 2%`: rewrite title/meta + first 120 words.
- `Position 16-35` and impressions rising: add 3-5 internal links from related guides.
- High impressions, 0 clicks: produce one specific FAQ or comparison section on target page.
- URL indexing status not OK: inspect canonical, noindex, robots, then request indexing after fix.

## Indexing Checklist Per URL
- Canonical points to preferred locale URL.
- URL included in sitemap and returns `200`.
- Not blocked by robots.
- No accidental `noindex`.
- Internal links from at least 2 relevant pages.

## Weekly Deliverables
- Updated `weekly-seo-performance-latest.md`
- Updated Lighthouse scorecard
- 3-5 content opportunities from Search Console quick wins
- Short implementation queue (this week / next week)

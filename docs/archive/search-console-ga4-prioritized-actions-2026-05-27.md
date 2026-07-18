# Search Console + GA4 Prioritized Actions (Worker C)

Date: 2026-05-27  
Inputs used:
- `search_console/reports/search-console-2026-05-27.csv`
- `search_console/reports/search-console-2026-05-27.txt`
- `search_console/reports/url-indexing-2026-05-27.txt`
- `ga4_analytics/reports/ga4-weekly-2026-05-25.txt`
- Fresh GA4 API run (30-day window) via `ga4_analytics/ga4_report.py` on 2026-05-27

## Executive Priorities
- P0: Fix canonical host consistency and homepage query CTR gap.
- P1: Improve high-impression guide pages with low/zero CTR where rankings are already close to page 1.
- P2: Expand locale-specific relevance for pages with impressions but weak rankings.

## Evidence Snapshot
- Search Console (last 28 days): 31 clicks, 1,677 impressions, 1.8% CTR, avg position 25.5.
- URL Indexing API: 10/10 checked URLs = `OK` (no immediate coverage blocker).
- GA4 (last 30 days run): 424 sessions, 281 users, 136 organic-search sessions.
- Highest impression pages include:
  - `/es/golf-courses` (168 impr, 0 clicks, best pos ~52.7)
  - `/golf-courses` (161 impr, 0 clicks, best pos ~6.0)
  - homepage buckets split across host variants (`mrmallorcagolf.com/` and `www.mrmallorcagolf.com/`).

## Prioritized Actions With Route-Level Fix Mapping

### P0 (Immediate, highest impact)
1. Canonical host normalization mismatch
- Evidence:
  - Search Console top rows include mixed URL hosts (`https://mrmallorcagolf.com/` and `https://www.mrmallorcagolf.com/...`).
  - Homepage/query performance appears split across host variants.
- Route(s):
  - `/` and all templates emitting canonical/hreflang.
- Required fix mapping:
  - Enforce one canonical host (`https://www.mrmallorcagolf.com`) in metadata utilities.
  - Ensure hreflang alternates all point to canonical-host URLs only.
  - Confirm sitemap entries use canonical host only.
- Expected outcome:
  - Consolidated signals, cleaner page-level reporting, better CTR/ranking stability.

2. Homepage high-intent query CTR gap
- Evidence:
  - `/` for `clases de golf mallorca`: 34 impr, pos 11.9, 0 clicks.
- Route(s):
  - `/` (and Spanish entry if intent is Spanish-first on homepage sectioning).
- Required fix mapping:
  - Title/description aligned to lessons intent in Spanish + Mallorca.
  - Above-the-fold intro paragraph to explicitly answer beginner lessons intent.
  - Internal links from homepage to `/es/guides/golf-cost-mallorca` and relevant lesson/planning pages with descriptive anchors.
- Expected outcome:
  - Lift CTR on near-page-1 lesson-intent terms.

### P1 (Next sprint, strong upside)
1. `/guides/son-gual-review` CTR rescue (already near page 1)
- Evidence:
  - Query `golf son gual mallorca reviews`: 32 impr, pos 10.4, 0 clicks.
- Route(s):
  - `/guides/son-gual-review`
- Required fix mapping:
  - Rewrite title/meta to include “review”, “green fees”, “course conditions”, “who it suits”.
  - Add concise answer block near top (`Is Son Gual worth playing?`).
  - Add internal links from `/guides` and `/golf-courses` hub text to this guide.
- Expected outcome:
  - CTR uplift without needing major rank movement.

2. `/guides/son-muntaner-review` CTR rescue (near page 1)
- Evidence:
  - Query `son muntaner golf club reviews`: 23 impr, pos 6.7, 0 clicks.
- Route(s):
  - `/guides/son-muntaner-review`
- Required fix mapping:
  - Sharpen title/snippet for review intent + practical planning details.
  - Add summary table at top (difficulty, value, location, booking notes).
  - Improve FAQ schema alignment with actual on-page Q&A.
- Expected outcome:
  - Fast CTR gains due to existing strong rank position.

3. `/golf-courses` has high impressions but no clicks
- Evidence:
  - 161 impressions, 0 clicks, best position ~6.0 (mixed-query set indicates snippet mismatch).
- Route(s):
  - `/golf-courses`
- Required fix mapping:
  - Refocus title/meta to “best golf courses in Mallorca” with clear differentiator.
  - Improve intro copy for list-intent and add quick-jump structured sections.
  - Ensure schema for ItemList/CollectionPage is valid and complete.
- Expected outcome:
  - Better snippet relevance for list/comparison intent; improved CTR.

### P2 (Scale/expansion)
1. Spanish `golf-courses` relevance gap
- Evidence:
  - `/es/golf-courses`: 168 impr, 0 clicks, best position ~52.7.
- Route(s):
  - `/es/golf-courses`
- Required fix mapping:
  - Rework Spanish page for native query patterns (`campos de golf en mallorca`, etc.).
  - Expand unique Spanish intro/FAQ (not direct translation only).
  - Add locale-specific internal links from `/es` guides to `/es/golf-courses`.
- Expected outcome:
  - Ranking improvement from deep pages into evaluable CTR range.

2. Locale guide clusters with impressions but weak rank (DE/SV/NL)
- Evidence:
  - `/de/guides/best-golf-courses-mallorca` (27 impr, 0 clicks, best pos ~66.5)
  - `/sv/golf-courses` (14 impr, 0 clicks, best pos ~48)
- Route(s):
  - `/de/guides/best-golf-courses-mallorca`
  - `/sv/golf-courses`
  - Related locale hubs.
- Required fix mapping:
  - Locale-native keyword targeting in titles/H1/intro.
  - Strengthen hub-to-guide internal linking in each locale tree.
  - Validate hreflang reciprocity for these locale clusters.
- Expected outcome:
  - Improved discoverability for non-EN locales.

## Operational Reporting Cadence (Search Console + GA4)
1. Weekly:
- Regenerate Search Console and URL indexing reports.
- Regenerate GA4 report (30-day rolling window preferred for stability).
- Re-rank opportunities by `(impressions x (1-CTR))` where position <= 20 first.

2. After each SEO deploy:
- Re-check canonical/hreflang/sitemap host consistency.
- Submit top 5 updated URLs for indexing request.
- Compare 7-day post-change deltas for clicks/CTR on targeted query-page pairs.

## Recommended Ownership Handoff
- SEO content/meta implementation owner:
  - P0 homepage + host canonical normalization first.
  - P1 guide snippets and hub copy second.
- Technical SEO owner:
  - Canonical/hreflang/sitemap consistency validation and schema checks.
- Analytics owner:
  - Weekly report generation and priority refresh using this document as source of truth.

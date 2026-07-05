---
name: seo-review
description: Run and interpret GA4 / Search Console analytics and turn findings into page-level actions for mrmallorcagolf.com. Use for "how is the site doing", weekly/monthly SEO reviews, CTR investigations, or prioritizing SEO work.
---

# SEO & Analytics Review

Reports are decision aids, not deliverables. **Every insight must map to a specific page, query, or event — and end as a concrete action** (title/meta, intro, internal links, trust copy, or enquiry path). No action, no mention.

## Running the reports

```
python ga4_analytics/ga4_report.py    # GA4 report (property G-0Z2BRNWB4N)
npm run ops:daily                     # health check + master priority report
npm run ops:weekly                    # SEO performance + master priority report
npm run ops:monthly                   # technical audit + master priority report
```

Notes: GA4 is excluded on `/zh` routes (Chinese compliance) — zh traffic gaps are expected, not a bug. In Search Console, always inspect/submit URLs as `https://www.mrmallorcagolf.com/...` (www) — touching the non-www property causes months of consolidation delay.

## Interpretation order

1. **High impressions + low CTR** — the primary lever. Fix via the `meta-ctr` skill; log changes in the `docs/seo-reference.md` CTR table with dates; judge after ~4 weeks of data.
2. **Rising queries with no dedicated page/section** — candidate for a guide expansion (add a Common Questions block) or a new guide via `publish-course-guide`.
3. **Pages with traffic but no enquiries** — check the enquiry path: contact CTAs present, trust copy near the ask, price clarity.
4. **Technical flags** (indexing, canonical, hreflang) — verify in the source before acting. **Never assume a feature or file is missing** (llms.txt, captions, locale parity) — check `public/`, `src/lib/site.js`, and the actual page first.

## Shipping bar

Only ship changes that clearly improve one of: CTR, enquiry conversion, trust, course-choice clarity, or premium positioning. If a finding doesn't move one of those, note it and skip it.

## Output format

Short prioritized list, each item: **page → observation (with numbers) → specific action → expected effect**. Anything requiring Andy (external profiles, new content decisions, photo needs) goes in a separate "for Andy" list. Deliver in chat — no report files in the repo (outputs are ephemeral; anything generated goes to `outputs/` and gets deleted).

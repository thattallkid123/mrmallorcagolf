# Site Ops Automation (PC-Run)

This setup runs SEO/performance monitoring automatically from your Windows PC.

## What Runs

1. Daily health check
- Host redirect sanity (`mrmallorcagolf.com` -> `www.mrmallorcagolf.com`)
- `robots.txt` and `sitemap.xml` availability
- Core-route canonical/title/description checks

2. Weekly SEO/performance
- Search Console report (`search_console_report.py`)
- URL indexing report (`url_indexing_report.py`)
- GA4 report (`ga4_report.py`)
- Lighthouse scorecard (`scripts/lighthouse-scorecard.mjs`)

3. Monthly technical audit
- Sitemap crawl sample (up to 150 URLs)
- Status, canonical host consistency, title/description/H1/schema presence checks

4. Master priority report
- Aggregates latest outputs and ranks issues into `P0`, `P1`, `P2`.

## One-Time Setup

From repo root:

```powershell
npm run ops:install-tasks
```

This installs three Windows Scheduled Tasks:
- `MMG-Daily-Health-Check` (daily 07:00)
- `MMG-Weekly-SEO-Performance` (Monday 08:00)
- `MMG-Monthly-Technical-Audit` (every 4 weeks Sunday 09:00)

## Manual Run Commands

```powershell
npm run ops:daily
npm run ops:weekly
npm run ops:monthly
npm run ops:master
```

## Output Locations

- Daily: `outputs/site-ops/daily/`
- Weekly: `outputs/site-ops/weekly/`
- Monthly: `outputs/site-ops/monthly/`
- Master priorities: `outputs/site-ops/master-priority-latest.md`
- Search Console raw reports: `search_console/reports/`
- Lighthouse scorecards: `outputs/lighthouse-live/`

## Operating Notes

- Keep your PC on (or configured to wake) at scheduled times.
- If Google tokens expire, re-auth and rerun:
  - `python ga4_analytics/ga4_auth.py`
  - `python search_console/search_console_auth.py`
- If a scheduled run fails, open the latest markdown in `outputs/site-ops/*` first; stderr is included.

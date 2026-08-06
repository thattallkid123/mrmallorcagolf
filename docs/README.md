# docs/ — Repo reference index

Live, code-adjacent reference docs for `mrmallorcagolf-real`. These are mastered in this repo (git), not synced copies of anything in Google Drive or `Documents/`. Business/brand/financial source-of-truth docs live in Google Drive — see `WHERE_THINGS_LIVE.md` at the workspace root.

## Hygiene rule

Anything added here should be a **live reference**, not a session log. Dated checklists, one-off handover notes, and completed-audit writeups belong in `docs/archive/` from the start. If a file in this root stops being actively useful, move it to `docs/archive/` rather than deleting it, and remove its row below.

## Files here

| File | Purpose |
|---|---|
| `CONTENT_STRUCTURE.md` | Which file controls what content — the map to check before editing |
| `content-architecture.md` | How content flows through the site's shared components |
| `multilingual-content-architecture.md` | English-canonical-plus-locale-overlay pattern for site-wide (non-guide) content |
| `TRANSLATION_BOUNDARIES.md` | What must vs. must not be translated |
| `translation-workflow.md` | Single source of truth for multilingual release readiness |
| `LOCALE_PARITY_CHECKLIST.md` | 7-language structure checklist |
| `STALE_ENGLISH_PREVENTION.md` | How to ensure de/es/fr/nl/sv/zh pages have no hardcoded English text |
| `FONT_LOADING_RULE.md` | Why fonts must use `var(--font-sans)`/`var(--font-serif)`, never a hardcoded font-family name |
| `guide-content-rules.md` | Rules for guide/review `blocks`, notes, and locale parity |
| `course-guide-standards.md` | Content standards + verified course-facts table for reviews |
| `ROUTING_AND_CONTENT_SYSTEM.md` | App Router routing conventions |
| `pricing-surfaces-inventory.md` | MMG *service* pricing (PWAP, Signature Day) surface inventory. Course/green-fee pricing is a separate system — see its one section here plus `mmg-tools/SOURCE-OF-TRUTH-MAP.md` §1 |
| `pricing-change-checklist.md` | Checklist companion to the `/pricing-change` skill |
| `seo-reference.md` | Sitemap, robots, RSS, llms.txt, structured data, hreflang, OG images, IndexNow, CTR tracking table |
| `SEARCH_CONSOLE_INDEXING_WORKFLOW.md` | Search Console submission/indexing steps |
| `site-ops-automation.md` | `ops:daily` / `ops:weekly` / `ops:monthly` automation reference |
| `prototype-guide.md` | Image sourcing rules and `/images/` paths for tools/prototypes |
| `growth-roadmap.md` | Live course-review backlog and content-priority tracking |
| `site-quickstart.md` | One-command readiness check pointer |
| `site-handover-guide.md` | Short handover orientation |
| `site-rebuild-guide.md` | History/context of the multilingual rebuild |
| `CODEBASE_IMPROVEMENTS.md` | Infrastructure, validation, and path-alias notes |

## Archive

`docs/archive/` holds dated session notes, completed audits, and superseded checklists — historical reference only, never load-bearing. Nothing there is expected to stay current.

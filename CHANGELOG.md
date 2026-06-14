# MMG Project Changelog

**How this works:**
- **Claude Code + Codex chats:** Use `chatbackup` beeftext template at end of session → auto-updates this file + creates Google Tasks (hourly sync)
- **Cowork tasks:** Handled by separate weekly scheduled pull → no manual entries needed
- **Format:** Entries grouped by date, tagged by type ([site] [admin] [automation] etc.)

## 2026-06-11

### Claude Code Work
- [site] Tightened China-facing homepage copy with Shanghai, Mandarin, Douyin, and WeChat proof
- [site] Added explicit localization rule so Chinese pages can be market-localized rather than literal translations
- [site] Updated Chinese homepage metadata to better match China search intent
- [site] Refreshed `public/llms.txt` date after confirming the file already existed
- [site] Confirmed figure captions are already implemented in the guide system, so no caption-gap fix was required
- [site] Tightened SEO metadata for Play With A Pro, Plan Your Trip, Contact, and Signature Day
- [site] Surfaced the existing `golf-courses` start-here / quick-picks guidance block above the explorer
- [site] Kept locale checks and production build green after the edits

## 2026-06-10

### Claude Code Work
- [site] Fixed sticky mobile CTA bar — padding, flex text centering, iPhone safe-area inset handling
- [site] Fixed WhatsApp bubble overlapping sticky CTA — moved WhatsAppButton from inline styles to CSS classes, added body class toggle (`sticky-cta-active`) to hide bubble when CTA is visible
- [site] Fixed pre-commit hook failure — unescaped apostrophe in `homepage-content.js:308` FAQ answer breaking `check:offers` script
- [site] Committed and pushed all fixes to GitHub, Vercel deployment triggered

- [admin] Fixed Google Tasks webhook integration — created Google Apps Script for automatic task creation from Claude
- [admin] Cleaned up CLAUDE.md — removed broken file references (MMG_WORK_STATUS.md), updated structure, clarified Task Management section
- [admin] Created documentation validation system — pre-commit hook automatically validates CLAUDE.md references on every commit
- [admin] Updated memory system with Google Tasks webhook details for future Claude sessions
- [admin] Fixed scroll position persistence on page navigation — implemented ScrollToTop component with usePathname hook, deployed to Vercel
- [admin] Set up Google Tasks integration — enhanced Apps Script with create/complete/update/get actions, added reusable client utility module
- [automation] Created automatic hourly CHANGELOG sync to Google Tasks — reads entries, creates tasks, marks completed, runs every hour
- [admin] Built session logging automation — created chatbackup beeftext template for auto-generating CHANGELOG entries and Google Tasks from chat transcripts
- [admin] Fixed TDZ bug on Backup tab — moved editModal listener into DOMContentLoaded
- [admin] Added Run button to all Scripts tab cards with live output display
- [admin] Switched Tasks tab from custom Drive JSON to Google Tasks API (phone sync)
- [admin] Added OAuth Tasks scope, four new API routes (list/add/toggle/delete)
- [admin] Enabled safe script runner — server looks up commands by index, never executes request body
- [admin] Created Load Control Panel.bat and Run Backup.bat in repo
- [admin] Fixed MailerLite .env key (was commented out)
- [admin] Deleted token.json to trigger re-auth with new Tasks scope
- [admin] Diagnosed Google Tasks API not enabled in Cloud project — user enabled via console
- [admin] Built HERMES_START.ps1 clean-start script — kills stale processes, clears lock file, resets gateway state, auto-starts gateway; created desktop shortcut
- [admin] Fixed recurring Telegram gateway failure — traced to stale lock file at `~/.local/state/hermes/gateway-locks/`; lock-clear now part of start script
- [admin] Fixed `No module named openai` — installed via uv pip into hermes venv; added to SETUP.ps1
- [admin] Fixed `ImportError: skill_matches_environment` — version mismatch after Repair install; cleared stale `.pyc` bytecode cache
- [admin] Fixed `'str' object has no attribute 'get'` — Hermes updated quick_commands format from plain strings to `type: exec/alias` dicts; rewrote all quick_commands
- [site] Rewrote `mmg_greenfee_tracker.py` — replaced abstract day-offset windows with real weekday/weekend calendar dates (WD_Near/WE_Near etc.), added WE_Premium column, updated cron to Mon/Wed/Sat 3x weekly
- [site] Added Monthly Archive sheet to green fee tracker — auto-snapshots all courses once per month, builds Jan–Dec seasonal comparison over time
- [site] Created `mmg_teesheet_prices.py` — monthly scraper hitting individual club websites for morning/afternoon/twilight pricing, runs 1st of each month
- [site] Created `mmg_price_log.py` — manual price logger for twilight/time-of-day rates Andy is quoted; accepts `Course | slot | price | notes` format
- [site] Created `mmg_todo.py` — reads ACTION_LIST.md, outputs unchecked items grouped by section; powers `/todo` slash command
- [admin] Updated `cron/jobs.json` — added monthly tee-time scrape cron; green fee scrape now 3x weekly
- [admin] Fixed `openpyxl not installed` crashing green fee tracker cron — installed into Hermes venv; added utf-8 stdout guard for Windows cp1252 emoji encoding; tracker now runs clean end-to-end
- [admin] Fixed Email 1 personalization — replaced plain-text `{{ selector_shortlist_names }}` with proper MailerLite native variable via ProseMirror editor API
- [admin] Removed stray `/personal` text block and `Mr Mallorca Golf` sign-off from Email 1; confirmed all 4 Course Selector Welcome Sequence emails sign off as "Andy" only
- [site] Removed `redirectOnSuccess` from `CourseSelectorClient.jsx` so course selector results stay visible after email signup — deployed to Vercel
- [admin] Created `MMG Control Panel.bat` on Desktop as one-click launcher for the control panel server

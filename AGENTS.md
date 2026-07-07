# Agent Instructions — mrmallorcagolf

**Full project instructions live in `CLAUDE.md` at the repo root. Read it before doing any work — it is the source of truth for rules, checks, and workflows regardless of which agent you are.**

Quick orientation:

- Next.js 15 App Router site for mrmallorcagolf.com, deployed to Vercel from `main`. 7 locales (EN master + DE/ES/FR/NL/SV/ZH). No database, no auth.
- Canonical domain is always `https://www.mrmallorcagolf.com` (www, never non-www).
- Pre-deploy checks: `npm run check:content` always; add `npm run build` for structural changes and `npm run check:i18n-release` for locale-facing changes. A task is not done until the change is live on the site.
- English is master content — never add localized content that isn't in English first.

## Skills

Procedural workflow skills (publishing guides, pricing changes, deployment gate, photos, localization checks, etc.) live in:

- `.claude/skills/` — master copy (Claude Code and Cursor read this)
- `.codex/skills/` — mirror for Codex (same content)

The two directories are kept identical by `npm run skills:sync` (copies `.claude/skills/` → `.codex/skills/`). **Edit skills only in `.claude/skills/`, then run the sync and commit both.** See `.claude/skills/README.md` for the skill index.

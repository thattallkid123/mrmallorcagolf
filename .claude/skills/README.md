# Repo Skills (Claude Code)

Procedural skills for this repo's recurring workflows. Claude Code auto-discovers them from `.claude/skills/`, and each can be invoked directly as a slash command (e.g. `/publish-course-guide`) or triggers automatically when a matching task comes up.

These are **separate from the Drive-mastered `MMG_SKILL_*` docs** synced by `SKILLS_SYNC.ps1` (writing voice, social, business ops — knowledge skills, mastered in Google Drive). The skills here are code-workflow procedures, mastered in this repo, versioned in git.

| Skill | Use when |
|---|---|
| `publish-course-guide` | Publishing a new course review end-to-end |
| `pricing-change` | Any price changes anywhere |
| `verify-course-pricing` | Checking whether recorded course pricing is still true (annual check) — distinct from applying a known change |
| `ship` | Deploying any change — the mandatory completion gate |
| `localize-check` | Any copy change touching locales or shared content |
| `meta-ctr` | Writing/rewriting meta descriptions and titles |
| `update-testimonials` | Andy asks to change testimonials or Google review numbers |
| `add-site-photos` | New photos (clients, courses, heroes) onto the site |
| `seo-review` | GA4/Search Console review → page-level actions |
| `new-prototype` | New interactive tool/quiz/selector, incl. zh deployment checklist |
| `expand-guide` | Adding Common Questions / new facts to a live guide |
| `scorecard-update` | Par/SI/distance changes and the periodic "is what's recorded still true" check — mostly automated now (one command + two genuinely-manual steps), not a hand chain |
| `health-check` | Read-only recon sweep for drift/cleanup candidates across repo, tools, and Drive |
| `email-newsletter` | Launching a newsletter programme, drafting an issue, or wiring a new lead-magnet email sequence |
| `api-route-safety` | Adding or editing anything under `src/app/api/`, or any new form/tool/integration that collects data |

**This table is a quick-scan aid, not the source of truth for what a skill
does or which skills exist** — each skill's own frontmatter `description` is
authoritative, and Claude Code's live skill list (shown at the top of every
session) is generated from those files directly, so it can't go stale the
way a hand-copied table can. Confirmed drifting 2026-09-05: this table still
called `scorecard-update` "the manual four-step chain" after that skill was
rewritten to describe a mostly-automated one, and `api-route-safety` was
missing entirely despite existing since before this table's last edit — the
table update didn't happen in the same commit as either skill change,
despite the rule below already saying it should. If this table and a
skill's own file ever disagree, the skill file is correct.

## Using these skills in other tools

- **Claude Code:** reads `.claude/skills/` automatically (this folder). Invoke as `/skill-name` or let them trigger.
- **Cursor:** reads `.claude/skills/` at project level natively — nothing extra to do.
- **Codex:** reads `.codex/skills/`, a committed mirror of this folder. `AGENTS.md` at the repo root points Codex at the project rules.
- **Cowork:** does not see these (it loads the Drive-mastered `MMG_SKILL_*` knowledge skills via `SKILLS_SYNC.ps1`). These are code workflows and only make sense with the repo present.

## Editing rules

- Keep each skill procedural: ordered steps, exact file paths, verification commands.
- **Edit only in `.claude/skills/`** (master). Then run `npm run skills:sync` to refresh `.codex/skills/` and commit both directories together.
- When a workflow changes (new file in the publish chain, new pricing surface), update the skill in the same commit as the change — stale skills are worse than no skills.
- **When you add, remove, or meaningfully change what a skill does, update this table's row in the same commit.** This is a separate step from updating the skill file itself - the two drifted apart in practice (see the note above the table) despite this rule already existing, precisely because it's easy to fix the skill and forget the summary lives in a second place too.

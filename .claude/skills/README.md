# Repo Skills (Claude Code)

Procedural skills for this repo's recurring workflows. Claude Code auto-discovers them from `.claude/skills/`, and each can be invoked directly as a slash command (e.g. `/publish-course-guide`) or triggers automatically when a matching task comes up.

These are **separate from the Drive-mastered `MMG_SKILL_*` docs** synced by `SKILLS_SYNC.ps1` (writing voice, social, business ops — knowledge skills, mastered in Google Drive). The skills here are code-workflow procedures, mastered in this repo, versioned in git.

| Skill | Use when |
|---|---|
| `publish-course-guide` | Publishing a new course review end-to-end |
| `pricing-change` | Any price changes anywhere |
| `ship` | Deploying any change — the mandatory completion gate |
| `localize-check` | Any copy change touching locales or shared content |
| `meta-ctr` | Writing/rewriting meta descriptions and titles |
| `update-testimonials` | Andy asks to change testimonials or Google review numbers |
| `add-site-photos` | New photos (clients, courses, heroes) onto the site |
| `seo-review` | GA4/Search Console review → page-level actions |
| `new-prototype` | New interactive tool/quiz/selector, incl. zh deployment checklist |
| `expand-guide` | Adding Common Questions / new facts to a live guide |
| `scorecard-update` | Par/SI/distance changes — the manual four-step chain |
| `health-check` | Read-only recon sweep for drift/cleanup candidates across repo, tools, and Drive |

## Using these skills in other tools

- **Claude Code:** reads `.claude/skills/` automatically (this folder). Invoke as `/skill-name` or let them trigger.
- **Cursor:** reads `.claude/skills/` at project level natively — nothing extra to do.
- **Codex:** reads `.codex/skills/`, a committed mirror of this folder. `AGENTS.md` at the repo root points Codex at the project rules.
- **Cowork:** does not see these (it loads the Drive-mastered `MMG_SKILL_*` knowledge skills via `SKILLS_SYNC.ps1`). These are code workflows and only make sense with the repo present.

## Editing rules

- Keep each skill procedural: ordered steps, exact file paths, verification commands.
- **Edit only in `.claude/skills/`** (master). Then run `npm run skills:sync` to refresh `.codex/skills/` and commit both directories together.
- When a workflow changes (new file in the publish chain, new pricing surface), update the skill in the same commit as the change — stale skills are worse than no skills.

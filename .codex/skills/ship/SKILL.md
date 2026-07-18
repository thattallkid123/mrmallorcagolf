---
name: ship
description: The mandatory completion gate for deploying any change to mrmallorcagolf.com — which checks to run for which change type, commit, push, and confirm the Vercel deployment is READY. Use before declaring ANY site task done, or when asked to deploy/ship/push changes live.
---

# Ship — Completion Gate

**A task is NOT done until the change is live on www.mrmallorcagolf.com.** Edited-locally, committed, or pushed-to-GitHub are all incomplete states. Never report done early.

## 0. Pre-flight

- `git status` — if there are stale uncommitted changes from earlier work that look complete, ask Andy whether to commit them first. Don't silently bundle unrelated changes into this commit.
- Confirm you're on `main` — the single active branch (see `BRANCHES.md`). `itinerary-preview` and other historical branches are retired/reference-only; do not split work across branches unless Andy explicitly asks.

## 1. Checks — pick by change type

| Change touched… | Run |
|---|---|
| Any content at all (always) | `npm run check:content` |
| Structural / routing / config / anything deploy-sensitive | add `npm run build` |
| Shared content, locale content, metadata, localized copy | add `npm run check:i18n-release` |
| Chinese-facing copy | add `npm run check:locale-leaks`, then eyeball rendered `/zh` routes |
| Layout / visual components | add `npm run check:visual` |
| Everything at once (safest for big changes) | `npm run check:ready` |

Fix every failure before moving on. Do not commit over a red check, and do not leave the repo broken.

## 2. Commit

Clear, descriptive message stating what changed and where. No model identifiers in the message.

## 3. Push

`git push -u origin <branch>`. On network failure only, retry up to 4× with backoff (2s/4s/8s/16s). A successful push is NOT completion — it only means the branch updated.

## 4. Confirm BOTH the GitHub Actions run and the Vercel deployment

These are two independent pipelines that can disagree — Vercel builds on its own schedule and does not wait for or depend on GitHub Actions passing. A green Vercel deployment does NOT mean CI is green. Check both, every time, even for a small change:

- **GitHub Actions:** `gh run list --limit 1` (or `gh run list --branch main --limit 1`) for the push that was just made, then `gh run watch <run-id> --exit-status` if it's still in progress, or `gh run view <run-id> --log-failed` if it failed. If it failed, pull the failing step's log, fix the root cause (not a skip/bypass), commit, push, and re-check from here — do not move on with a red run.
- **Vercel:** confirm the new deployment reaches **READY** via the Vercel MCP `list_deployments` / `get_deployment` tools, or the dashboard. If it errors, pull the build logs (`get_deployment_build_logs`), fix, and repeat from step 1.

Never report a task done on the strength of "I pushed" or "Vercel is Ready" alone — both checks are required, and a passing local `check:content` run before commit does not guarantee CI passes (CI can fail on things local runs can't see, e.g. a check that silently relies on a file/repo that only exists on this machine).

## 5. Post-deploy (when applicable)

- New/updated guide URLs: `npm run indexnow` (after the deploy is live, not before).
- Spot-check the changed page on production — including one non-EN locale if locale content changed.

Only after step 4 (and 5 where applicable) may you tell Andy the task is done.

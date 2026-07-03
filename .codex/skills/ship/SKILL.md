---
name: ship
description: The mandatory completion gate for deploying any change to mrmallorcagolf.com — which checks to run for which change type, commit, push, and confirm the Vercel deployment is READY. Use before declaring ANY site task done, or when asked to deploy/ship/push changes live.
---

# Ship — Completion Gate

**A task is NOT done until the change is live on www.mrmallorcagolf.com.** Edited-locally, committed, or pushed-to-GitHub are all incomplete states. Never report done early.

## 0. Pre-flight

- `git status` — if there are stale uncommitted changes from earlier work that look complete, ask Andy whether to commit them first. Don't silently bundle unrelated changes into this commit.
- Confirm you're on the right branch (`main` = live site; `itinerary-preview` = trip-led variant; shared factual content usually goes to both — see `BRANCHES.md`).

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

## 4. Confirm the deployment

Vercel auto-deploys `main`. Confirm the new deployment reaches **READY**:

- Use the Vercel MCP `list_deployments` / `get_deployment` tools, or the dashboard.
- If the deployment errors, pull the build logs (`get_deployment_build_logs`), fix, and repeat from step 1. Never close the task on a failed deploy.

## 5. Post-deploy (when applicable)

- New/updated guide URLs: `npm run indexnow` (after the deploy is live, not before).
- Spot-check the changed page on production — including one non-EN locale if locale content changed.

Only after step 4 (and 5 where applicable) may you tell Andy the task is done.

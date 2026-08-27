#!/usr/bin/env node
/**
 * check-privacy-surface.mjs
 *
 * CLAUDE.md's own /api-route-safety skill says the privacy-policy re-check
 * "is human, and it is the one that has actually slipped before" — nothing
 * mechanical enforces it, it depends on someone remembering. Confirmed by an
 * audit 2026-08-27: the privacy policy was last touched 14 Aug; an API route
 * changed 22 Aug; nobody had looked since.
 *
 * This does not judge whether the policy is CORRECT — that still needs a
 * human. It snapshots the set of data-collecting API route files (content
 * hash per file) and fails when that set changes from the last accepted
 * snapshot, forcing a deliberate look before the change ships silently.
 *
 * Deliberately snapshot-based rather than parsing field names out of each
 * route's `request.json()` body: routes here use several different shapes
 * (destructured, `payload.x`, FormData), so a per-field parser would be
 * fragile and route-specific. A content hash catches any change to the
 * route — new field, removed field, changed behavior — without needing to
 * understand each one's JS.
 *
 * On failure:
 *   1. Read the diff for the listed route(s) and check it against the
 *      current privacy policy at src/app/(en)/privacy-policy/.
 *   2. Update the policy if the route now collects/stores/sends anything new.
 *   3. Run: npm run check:privacy-surface -- --accept
 *      to record the new snapshot once the policy has been checked.
 *
 * Routes under src/app/api/cron/ are excluded: they take no user input,
 * they are internal scheduled triggers (see /api-route-safety's own route
 * categories), so they carry no privacy-surface risk.
 */

import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const API_ROOT = join(REPO_ROOT, 'src', 'app', 'api')
const SNAPSHOT_PATH = join(__dirname, '.privacy-surface-snapshot.json')

function findRoutes(dir, found = []) {
  if (!existsSync(dir)) return found
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) findRoutes(full, found)
    else if (entry.name === 'route.js' || entry.name === 'route.jsx') found.push(full)
  }
  return found
}

function hashContent(text) {
  // Ignore line-ending style (this repo has mixed CRLF/LF working copies,
  // same reasoning as check-skills-mirror.mjs) so that is not false drift.
  return createHash('sha256').update(text.replace(/\r\n/g, '\n')).digest('hex').slice(0, 16)
}

const allRoutes = findRoutes(API_ROOT)
const dataRoutes = allRoutes.filter((p) => !relative(API_ROOT, p).split(/[\\/]/).includes('cron'))

const current = {}
for (const abs of dataRoutes) {
  const rel = relative(REPO_ROOT, abs).replace(/\\/g, '/')
  current[rel] = hashContent(readFileSync(abs, 'utf8'))
}

const accepting = process.argv.includes('--accept')

if (accepting) {
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(current, null, 2) + '\n', 'utf8')
  console.log(`Privacy surface snapshot updated (${Object.keys(current).length} route(s)). Commit .privacy-surface-snapshot.json.`)
  process.exit(0)
}

if (!existsSync(SNAPSHOT_PATH)) {
  mkdirSync(dirname(SNAPSHOT_PATH), { recursive: true })
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(current, null, 2) + '\n', 'utf8')
  console.log(`Privacy surface check: no snapshot found, created one for ${Object.keys(current).length} route(s). Commit .privacy-surface-snapshot.json.`)
  process.exit(0)
}

const previous = JSON.parse(readFileSync(SNAPSHOT_PATH, 'utf8'))

const added = Object.keys(current).filter((k) => !(k in previous))
const removed = Object.keys(previous).filter((k) => !(k in current))
const changed = Object.keys(current).filter((k) => k in previous && previous[k] !== current[k])

if (added.length || removed.length || changed.length) {
  console.error('Privacy surface check failed — the data-collecting API surface has changed since the last accepted snapshot:\n')
  for (const r of added) console.error(`  + new route: ${r}`)
  for (const r of removed) console.error(`  - removed route: ${r}`)
  for (const r of changed) console.error(`  ~ changed: ${r}`)
  console.error(
    '\nCheck the privacy policy (src/app/(en)/privacy-policy/) against what this route now does, ' +
    'update it if needed, then run:\n  npm run check:privacy-surface -- --accept\nto record the new snapshot.'
  )
  process.exit(1)
}

console.log(`Privacy surface check passed — ${Object.keys(current).length} data-collecting route(s) match the last accepted snapshot.`)

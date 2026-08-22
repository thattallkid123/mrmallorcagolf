/**
 * check-api-safety.mjs
 *
 * Enforces the API route guard contract that used to live as ~40 lines of
 * prose in CLAUDE.md. Prose relies on someone reading it; this fails the
 * build. Detail and rationale now live in the /api-route-safety skill.
 *
 * Three route categories:
 *   1. JSON routes      — must use all four guards from src/lib/request-safety.js
 *   2. Cron routes      — no Origin header, so CRON_SECRET bearer auth instead
 *   3. Public GET       — explicit allowlist, each with a stated reason
 *
 * A new route under src/app/api/ that matches none of these fails, which is
 * the point: adding a route is a deliberate decision about which contract it
 * is under, not something to leave unstated.
 *
 * Run: npm run check:api-safety   (wired into check:content)
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve, relative } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const API_ROOT = join(REPO_ROOT, 'src', 'app', 'api')

const REQUIRED_JSON_GUARDS = [
  'isAllowedOrigin',
  'isJsonRequest',
  'isPayloadTooLarge',
  'checkRateLimit',
]

// Public routes that deliberately take no JSON guards, with the reason and
// the property that IS required instead. Adding an entry here is a security
// decision — it should be rare and obvious in review.
// No routes currently need this — /api/og was deleted (see "Drop redundant
// text-on-image OG cards" in git log) when og:image switched to plain course
// photos. Add an entry here only for a route that genuinely must be public
// GET (crawlers/scrapers), with a stated reason and a required-property check.
const PUBLIC_GET_ROUTES = {}

// Word-boundary match, NOT substring: a plain `includes('checkRateLimit')`
// also matches `checkRateLimitXX`, so a renamed/typo'd guard would pass
// silently. Verified by deliberately breaking a route and confirming this
// fails — do the same if you change this matcher.
function usesIdentifier(source, name) {
  return new RegExp(`(?<![\\w$])${name}(?![\\w$])`).test(source)
}

function findRoutes(dir, found = []) {
  if (!existsSync(dir)) return found
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) findRoutes(full, found)
    else if (entry.name === 'route.js' || entry.name === 'route.jsx') found.push(full)
  }
  return found
}

function main() {
  const routes = findRoutes(API_ROOT)
  if (routes.length === 0) {
    console.error('❌ check:api-safety — no API routes found; expected at least one. Has src/app/api moved?')
    process.exitCode = 1
    return
  }

  const failures = []

  for (const abs of routes) {
    const rel = relative(REPO_ROOT, abs).split('\\').join('/')
    const source = readFileSync(abs, 'utf8')

    const allowed = PUBLIC_GET_ROUTES[rel]
    if (allowed) {
      if (!usesIdentifier(source, allowed.mustContain)) {
        failures.push(
          `${rel}\n    allowlisted as: ${allowed.reason}\n    but lost its required guard "${allowed.mustContain}" — ${allowed.mustContainWhy}`,
        )
      }
      continue
    }

    // Cron routes get no Origin header, so they authenticate by bearer secret.
    if (rel.includes('/api/cron/')) {
      if (!usesIdentifier(source, 'CRON_SECRET')) {
        failures.push(`${rel}\n    cron route without CRON_SECRET bearer auth — it is publicly callable as written`)
      }
      if (!/export\s+(async\s+)?function\s+GET/.test(source)) {
        failures.push(`${rel}\n    cron route with no GET handler — Vercel cron sends GET, not POST`)
      }
      continue
    }

    const missing = REQUIRED_JSON_GUARDS.filter((guard) => !usesIdentifier(source, guard))
    if (missing.length > 0) {
      failures.push(
        `${rel}\n    missing guard(s): ${missing.join(', ')}\n    copy src/app/api/contact/route.js, or allowlist it in this script with a stated reason`,
      )
    }
  }

  if (failures.length > 0) {
    console.error(`❌ check:api-safety — ${failures.length} route(s) not meeting the guard contract:\n`)
    for (const f of failures) console.error(`  ${f}\n`)
    console.error('See the /api-route-safety skill for the full contract and rationale.')
    process.exitCode = 1
    return
  }

  const jsonCount = routes.length - Object.keys(PUBLIC_GET_ROUTES).length
  console.log(
    `✅ check:api-safety passed — ${routes.length} route(s): ${jsonCount} guarded, ${Object.keys(PUBLIC_GET_ROUTES).length} allowlisted public.`,
  )
}

main()

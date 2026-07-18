/**
 * sync-discovery.mjs
 *
 * Guide discovery surfaces (sitemap dates, RSS feed dates, IndexNow ping
 * list, IndexNow cron route) are four hand-maintained lists that must all
 * agree on the same set of guide slugs. Publishing/expanding a guide used to
 * mean four separate manual edits — this script does the edit or the check.
 *
 * Usage:
 *   node scripts/sync-discovery.mjs --add <slug> [--date YYYY-MM-DD]
 *     Adds the slug to all four surfaces (skips a surface if already present).
 *   node scripts/sync-discovery.mjs --bump <slug> [--date YYYY-MM-DD]
 *     Updates the slug's date in sitemap.js + feed.xml/route.js (defaults to
 *     today), and adds it to the URL-only surfaces if missing.
 *   node scripts/sync-discovery.mjs --check
 *     Fails if the four surfaces disagree with each other or with the
 *     canonical guide slug set (GUIDE_POST_CONTENT + GUIDE_ARTICLE_CONTENT).
 *
 * Run --check via: npm run check:discovery (wired into check:content)
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const SITEMAP_PATH = join(REPO_ROOT, 'src/app/sitemap.js')
const FEED_PATH = join(REPO_ROOT, 'src/app/feed.xml/route.js')
const INDEXNOW_SCRIPT_PATH = join(REPO_ROOT, 'scripts/indexnow-ping.mjs')
const INDEXNOW_CRON_PATH = join(REPO_ROOT, 'src/app/api/cron/indexnow/route.js')

function today() {
  return new Date().toISOString().slice(0, 10)
}

function importLib(rel) {
  return import(pathToFileURL(join(REPO_ROOT, rel)).href)
}

async function canonicalSlugs() {
  const { GUIDE_POST_CONTENT } = await importLib('src/lib/guide-post-content.js')
  const { GUIDE_ARTICLE_CONTENT } = await importLib('src/lib/guide-article-content.js')
  const slugs = new Set()
  for (const [slug, content] of Object.entries(GUIDE_POST_CONTENT || {})) {
    if (content?.en?.metadata?.title) slugs.add(slug)
  }
  for (const [slug, content] of Object.entries(GUIDE_ARTICLE_CONTENT || {})) {
    if (content?.metadata?.title) slugs.add(slug)
  }
  return slugs
}

// --- Per-surface extract / insert -----------------------------------------

const SURFACES = [
  {
    name: 'sitemap.js',
    path: SITEMAP_PATH,
    extract: (text) => new Set([...text.matchAll(/^\s*'\/guides\/([a-z0-9-]+)':\s*'(\d{4}-\d{2}-\d{2})'/gm)].map((m) => m[1])),
    hasSlug: (text, slug) => new RegExp(`^\\s*'/guides/${slug}':`, 'm').test(text),
    addLine: (slug, date) => `  '/guides/${slug}': '${date}',`,
    bump: (text, slug, date) => text.replace(new RegExp(`(^\\s*'/guides/${slug}':\\s*)'\\d{4}-\\d{2}-\\d{2}'`, 'm'), `$1'${date}'`),
    anchor: /^\s*'\/guides\/[a-z0-9-]+':\s*'\d{4}-\d{2}-\d{2}',/gm,
  },
  {
    name: 'feed.xml/route.js',
    path: FEED_PATH,
    extract: (text) => new Set([...text.matchAll(/^\s*'([a-z0-9-]+)':\s*'(\d{4}-\d{2}-\d{2})'/gm)].map((m) => m[1])),
    hasSlug: (text, slug) => new RegExp(`^\\s*'${slug}':`, 'm').test(text),
    addLine: (slug, date) => `  '${slug}': '${date}',`,
    bump: (text, slug, date) => text.replace(new RegExp(`(^\\s*'${slug}':\\s*)'\\d{4}-\\d{2}-\\d{2}'`, 'm'), `$1'${date}'`),
    anchor: /^\s*'[a-z0-9-]+':\s*'\d{4}-\d{2}-\d{2}',/gm,
  },
  {
    name: 'indexnow-ping.mjs',
    path: INDEXNOW_SCRIPT_PATH,
    extract: (text) => new Set([...text.matchAll(/\/guides\/([a-z0-9-]+)'/g)].map((m) => m[1])),
    hasSlug: (text, slug) => text.includes(`/guides/${slug}'`),
    addLine: (slug) => `  'https://www.mrmallorcagolf.com/guides/${slug}',`,
    bump: null,
    anchor: /^\s*'https:\/\/www\.mrmallorcagolf\.com\/guides\/[a-z0-9-]+',/gm,
  },
  {
    name: 'api/cron/indexnow/route.js',
    path: INDEXNOW_CRON_PATH,
    extract: (text) => new Set([...text.matchAll(/'\/guides\/([a-z0-9-]+)'/g)].map((m) => m[1])),
    hasSlug: (text, slug) => text.includes(`/guides/${slug}'`),
    addLine: (slug) => `  '/guides/${slug}',`,
    bump: null,
    anchor: /^\s*'\/guides\/[a-z0-9-]+',/gm,
  },
]

function insertAfterLastMatch(text, anchorRe, newLine) {
  const matches = [...text.matchAll(anchorRe)]
  if (matches.length === 0) {
    throw new Error(`No existing /guides/ entries found to anchor the insertion near — add the first entry by hand.`)
  }
  const last = matches[matches.length - 1]
  const insertAt = last.index + last[0].length
  return text.slice(0, insertAt) + '\n' + newLine + text.slice(insertAt)
}

function addSlug(surface, slug, date) {
  let text = readFileSync(surface.path, 'utf8')
  if (surface.hasSlug(text, slug)) {
    console.log(`  = ${surface.name}: already present, skipped`)
    return
  }
  text = insertAfterLastMatch(text, surface.anchor, surface.addLine(slug, date))
  writeFileSync(surface.path, text)
  console.log(`  + ${surface.name}: added`)
}

function bumpSlug(surface, slug, date) {
  let text = readFileSync(surface.path, 'utf8')
  if (!surface.hasSlug(text, slug)) {
    addSlug(surface, slug, date)
    return
  }
  if (!surface.bump) {
    console.log(`  = ${surface.name}: no date field on this surface, already present`)
    return
  }
  const updated = surface.bump(text, slug, date)
  if (updated === text) {
    console.log(`  ! ${surface.name}: found the slug but could not update its date — check the line by hand`)
    return
  }
  writeFileSync(surface.path, updated)
  console.log(`  ~ ${surface.name}: date bumped to ${date}`)
}

async function check() {
  const canonical = await canonicalSlugs()
  const surfaceSlugs = SURFACES.map((surface) => ({
    surface,
    slugs: surface.extract(readFileSync(surface.path, 'utf8')),
  }))

  const problems = []

  for (const { surface, slugs } of surfaceSlugs) {
    const missing = [...canonical].filter((slug) => !slugs.has(slug))
    const orphaned = [...slugs].filter((slug) => !canonical.has(slug))
    if (missing.length) problems.push(`${surface.name} is missing: ${missing.join(', ')}`)
    if (orphaned.length) problems.push(`${surface.name} has stale/unknown slugs not in guide content: ${orphaned.join(', ')}`)
  }

  if (problems.length) {
    console.error('Discovery surface check failed:')
    for (const p of problems) console.error(`  - ${p}`)
    process.exit(1)
  }

  console.log(`Discovery surface check passed — ${canonical.size} guide slug(s) agree across sitemap, feed, and both IndexNow surfaces.`)
}

// --- CLI --------------------------------------------------------------------

const args = process.argv.slice(2)
const mode = args.find((a) => a.startsWith('--') && ['--add', '--bump', '--check'].includes(a))
const slug = args.includes('--add') ? args[args.indexOf('--add') + 1] : args.includes('--bump') ? args[args.indexOf('--bump') + 1] : null
const dateArgIndex = args.indexOf('--date')
const date = dateArgIndex !== -1 ? args[dateArgIndex + 1] : today()

if (mode === '--check') {
  await check()
} else if (mode === '--add') {
  if (!slug) { console.error('Usage: node scripts/sync-discovery.mjs --add <slug> [--date YYYY-MM-DD]'); process.exit(1) }
  console.log(`Adding '${slug}' (${date}) to all discovery surfaces:`)
  for (const surface of SURFACES) addSlug(surface, slug, date)
} else if (mode === '--bump') {
  if (!slug) { console.error('Usage: node scripts/sync-discovery.mjs --bump <slug> [--date YYYY-MM-DD]'); process.exit(1) }
  console.log(`Bumping '${slug}' to ${date} across discovery surfaces:`)
  for (const surface of SURFACES) bumpSlug(surface, slug, date)
} else {
  console.error('Usage:')
  console.error('  node scripts/sync-discovery.mjs --add <slug> [--date YYYY-MM-DD]')
  console.error('  node scripts/sync-discovery.mjs --bump <slug> [--date YYYY-MM-DD]')
  console.error('  node scripts/sync-discovery.mjs --check')
  process.exit(1)
}

/**
 * price-sweep.mjs
 *
 * Speeds up step 3 of the /pricing-change skill: grepping the OLD price
 * (plus its rendered locale phrase variants) across every surface category
 * in docs/pricing-surfaces-inventory.md, then confirming the NEW price
 * appears where expected. This does not edit anything — it's a reporting
 * aid, the edits and judgment calls stay manual.
 *
 * Usage:
 *   node scripts/price-sweep.mjs --old 165 --new 175 [--label "Son Gual peak"]
 *
 * Only matches the old/new value as a standalone number (word-boundary), so
 * searching "65" won't false-positive on "165".
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const WORKSPACE_ROOT = resolve(REPO_ROOT, '..')

const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'dist', 'build', 'out', '.vercel', '.netlify'])
const TEXT_EXT = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx', '.html', '.md'])

// Surface groups mirror docs/pricing-surfaces-inventory.md so the report
// reads in the same order as the checklist.
const SURFACE_GROUPS = [
  { label: 'Core offers', paths: ['src/lib/offers-content.js', 'src/lib/play-with-a-pro-content.js', 'src/lib/plan-your-trip-content.js', 'src/lib/homepage-content.js', 'src/lib/page-metadata.js'] },
  { label: 'Guide/blog narrative', paths: ['src/lib/guide-post-content.js', 'src/lib/guide-post-content-localized.js', 'src/lib/guide-article-content.js', 'src/lib/guide-article-content-localized.js'] },
  { label: 'Course pricing reference', paths: ['src/lib/golf-courses-data.js', 'src/lib/golf-courses-content.js'] },
  { label: 'Tools / prototypes (repo)', paths: ['prototypes', 'src/app/(en)/tools'] },
  { label: 'Lead magnets', paths: ['src/lib/signup-config.js', 'src/app/api/lead-magnet-signup/route.js', 'scripts/generate-lead-magnet-pdfs.py'] },
  { label: 'Docs', paths: ['docs/pricing-change-checklist.md', 'docs/pricing-surfaces-inventory.md', 'docs/content-architecture.md', 'CLAUDE.md'] },
]

// Sibling repos — only searched if mounted/present on disk.
const SIBLING_REPOS = [
  { label: 'mmg-tools', dir: join(WORKSPACE_ROOT, 'mmg-tools') },
  { label: 'standalone-apps/mallorca-hub', dir: join(WORKSPACE_ROOT, 'standalone-apps', 'mallorca-hub') },
]

const EXTERNAL_MANUAL_SURFACES = [
  'Google Business Profile (description, services, Q&A)',
  'about.me profile',
  'Trustpilot / Google Reviews business profile',
  'WhatsApp business profile/about text + saved replies',
  'Brochures, PDFs, rate cards shared externally',
  'MailerLite live form copy + nurture sequence (check if a price is mentioned)',
]

function localePhraseVariants(value) {
  return [
    `€${value}`,
    `EUR ${value}`,
    `Solo from €${value}`,
    `Groups from €${value}`,
    `EUR ${value} total`,
    `EUR ${value} en total`,
    `EUR ${value} au total`,
    `EUR ${value} in totaal`,
    `EUR ${value} totalt`,
  ]
}

function wordBoundaryNumberRegex(value) {
  const escaped = String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?<!\\d)${escaped}(?!\\d)`)
}

function* walk(dir) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else {
      yield full
    }
  }
}

function searchPath(targetPath, valueRegex) {
  const hits = []
  const absolute = targetPath
  if (!existsSync(absolute)) return { missing: true, hits }

  const stat = statSync(absolute)
  const files = stat.isDirectory() ? [...walk(absolute)] : [absolute]

  for (const file of files) {
    const ext = file.slice(file.lastIndexOf('.'))
    if (!TEXT_EXT.has(ext)) continue
    let text
    try {
      text = readFileSync(file, 'utf8')
    } catch {
      continue
    }
    const lines = text.split('\n')
    lines.forEach((line, i) => {
      if (valueRegex.test(line)) {
        hits.push({ file: file.replace(WORKSPACE_ROOT + '\\', '').replace(WORKSPACE_ROOT + '/', ''), line: i + 1, text: line.trim().slice(0, 160) })
      }
    })
  }
  return { missing: false, hits }
}

function report(value, groups) {
  const regex = wordBoundaryNumberRegex(value)
  console.log(`\n=== Sweep for "${value}" ===`)
  let total = 0
  for (const group of groups) {
    console.log(`\n-- ${group.label} --`)
    for (const p of group.paths) {
      const full = join(REPO_ROOT, p)
      const { missing, hits } = searchPath(full, regex)
      if (missing) {
        console.log(`  ${p}: (not found on disk — skipped)`)
        continue
      }
      if (hits.length === 0) {
        console.log(`  ${p}: no match`)
      } else {
        total += hits.length
        for (const h of hits) console.log(`  ${h.file}:${h.line}: ${h.text}`)
      }
    }
  }
  for (const repo of SIBLING_REPOS) {
    console.log(`\n-- ${repo.label} --`)
    if (!existsSync(repo.dir)) {
      console.log(`  (not mounted/available — list this repo as pending in the report)`)
      continue
    }
    const { hits } = searchPath(repo.dir, regex)
    if (hits.length === 0) {
      console.log(`  no match`)
    } else {
      total += hits.length
      for (const h of hits) console.log(`  ${h.file}:${h.line}: ${h.text}`)
    }
  }
  console.log(`\nTotal matches for "${value}": ${total}`)
  return total
}

// --- CLI ---------------------------------------------------------------

const args = process.argv.slice(2)
const oldIdx = args.indexOf('--old')
const newIdx = args.indexOf('--new')
const labelIdx = args.indexOf('--label')

if (oldIdx === -1 || newIdx === -1) {
  console.error('Usage: node scripts/price-sweep.mjs --old <value> --new <value> [--label "description"]')
  process.exit(1)
}

const oldValue = args[oldIdx + 1]
const newValue = args[newIdx + 1]
const label = labelIdx !== -1 ? args[labelIdx + 1] : null

if (label) console.log(`Price sweep: ${label} (${oldValue} -> ${newValue})`)

console.log('\nLocale phrase variants to eyeball manually (freeform prose won\'t show up in the grep above):')
for (const phrase of localePhraseVariants(oldValue)) console.log(`  old: ${phrase}`)
for (const phrase of localePhraseVariants(newValue)) console.log(`  new: ${phrase}`)

const oldCount = report(oldValue, SURFACE_GROUPS)
const newCount = report(newValue, SURFACE_GROUPS)

console.log('\n=== External / manual surfaces — report these to Andy, mark done when confirmed ===')
for (const s of EXTERNAL_MANUAL_SURFACES) console.log(`  ❌ ${s}`)

console.log(`\nSummary: "${oldValue}" found ${oldCount} time(s) (expect 0 in live surfaces after the change), "${newValue}" found ${newCount} time(s) (expect >0 where the new price should appear).`)
console.log('Remember: this is a raw number sweep — it does not understand context (a matched line may be a stroke index, a year, or an unrelated number). Read each hit before editing.')

/**
 * check-tool-price-sync.mjs
 *
 * Standing guardrail for the one place a canonical price is hardcoded inside a
 * TOOL rather than pulled from data: the golf-cost-calculator states the Play
 * With A Pro price ("€695 solo or €950 total") as literal text. If PWAP pricing
 * changes in the content files but this tool copy is missed, it silently goes
 * stale. This asserts the tool's stated PWAP figures still exist in the
 * canonical PWAP content file.
 *
 * Add a new entry to CHECKS when another tool starts hardcoding a canonical
 * price. Tools that read prices dynamically (golf-day-builder) need no entry.
 *
 * Run: npm run check:tool-prices
 */

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const CHECKS = [
  {
    label: 'golf-cost-calculator PWAP price',
    toolFile: 'src/lib/golf-cost-calculator-translations.js',
    canonicalFile: 'src/lib/play-with-a-pro-content.js',
    // Pull the two figures the tool states, then require both in the canonical file.
    extract: /€(\d+)\s*solo\s*or\s*€(\d+)\s*total/i,
  },
]

function read(rel) {
  const abs = join(REPO_ROOT, rel)
  if (!existsSync(abs)) return null
  return readFileSync(abs, 'utf8')
}

function numberPresent(text, n) {
  return new RegExp(`\\b${n}\\b`).test(text)
}

function main() {
  const errors = []

  for (const check of CHECKS) {
    const toolText = read(check.toolFile)
    const canonicalText = read(check.canonicalFile)
    if (toolText === null) {
      errors.push(`${check.label}: tool file missing (${check.toolFile})`)
      continue
    }
    if (canonicalText === null) {
      errors.push(`${check.label}: canonical file missing (${check.canonicalFile})`)
      continue
    }
    const m = toolText.match(check.extract)
    if (!m) {
      errors.push(`${check.label}: could not find the stated price pattern in the tool — update the extract regex if the copy changed`)
      continue
    }
    const figures = m.slice(1)
    const missing = figures.filter((n) => !numberPresent(canonicalText, n))
    if (missing.length) {
      errors.push(
        `${check.label}: tool states €${figures.join(' / €')} but €${missing.join(', €')} not found in ${check.canonicalFile} — the tool copy is out of sync with canonical PWAP pricing.`,
      )
    }
  }

  if (errors.length === 0) {
    console.log(`✅ Tool price sync check passed — ${CHECKS.length} hardcoded tool price(s) match canonical.`)
    return
  }

  console.error('❌ Tool price sync check FAILED:\n')
  for (const e of errors) console.error(`  - ${e}`)
  console.error('\nUpdate the tool copy to the current canonical price, or fix the extract regex if the wording changed.')
  process.exitCode = 1
}

main()

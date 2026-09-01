/**
 * check-tool-green-fees.mjs
 *
 * Guardrail for hardcoded green-fee prices in interactive tools. The live UI
 * should read from src/lib/course-pricing-data.js where possible; this script
 * catches stale fallback/base prices before they can drift quietly.
 *
 * Run: npm run check:tool-green-fees
 */

import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const { getCoursePricingByName } = await import(
  pathToFileURL(join(REPO_ROOT, 'src/lib/course-pricing-data.js')).href
)

// Reserva Rotana genuinely has no public numeric fee ("Included for hotel
// guests"), so there is nothing this script can check - skip entirely.
// Palma Pitch & Putt used to need its own "9 holes / 18 holes" parse path.
// It doesn't any more: that label format was removed 2026-09-01 because
// low/peak are both 18-hole figures, so it printed the 18-hole low labelled
// as a 9-hole price. The course now uses the same "Peak / Low" label as
// every other course, Pollenca included (also 9 holes), so the standard
// parser covers it. Do not re-add a per-course exemption here: it used to be
// skipped entirely, which is exactly how its missing "(dynamic)" marker went
// unnoticed after the 2026-08-30 reclassification - a check that silently
// exempts a course is a check that can't catch drift on it.
const SELECTOR_SPECIAL_IDS = new Set([
  'reserva-rotana',
])

function read(rel) {
  const abs = join(REPO_ROOT, rel)
  if (!existsSync(abs)) return null
  return readFileSync(abs, 'utf8')
}

function unescapeJsString(value) {
  return value.replace(/\\'/g, "'")
}

function parseSelectorBlocks(text) {
  const blocks = []
  const objectRegex = /\{\s*id\s*:\s*'([^']+)'[\s\S]*?\n\s*\}/g
  let match
  while ((match = objectRegex.exec(text))) {
    const block = match[0]
    const id = match[1]
    const nameMatch = block.match(/\bname\s*:\s*'((?:\\'|[^'])+)'/)
    const feeMatch = block.match(/\bgreenFee\s*:\s*'([^']+)'/)
    if (!nameMatch || !feeMatch) continue
    blocks.push({
      id,
      name: unescapeJsString(nameMatch[1]),
      fee: feeMatch[1],
    })
  }
  return blocks
}

function parseGreenFeesRows(text) {
  const rows = []
  const rowRegex = /\{\s*name\s*:\s*'((?:\\'|[^'])+)'[\s\S]*?\}/g
  let match
  while ((match = rowRegex.exec(text))) {
    const row = match[0]
    if (!/\bpeak\s*:/.test(row) || !/\blow\s*:/.test(row)) continue
    const peakMatch = row.match(/\bpeak\s*:\s*(\d+)/)
    const lowMatch = row.match(/\blow\s*:\s*(\d+)/)
    if (!peakMatch || !lowMatch) continue
    rows.push({
      name: unescapeJsString(match[1]),
      peak: Number(peakMatch[1]),
      low: Number(lowMatch[1]),
    })
  }
  return rows
}

function feeNumbers(fee) {
  const match = fee.match(/Peak\s*€(\d+)\s*\/\s*Low\s*€(\d+)/)
  if (!match) return null
  return {
    peak: Number(match[1]),
    low: Number(match[2]),
  }
}

function main() {
  const errors = []
  const selectorText = read('src/app/(en)/tools/course-selector/CourseSelectorToolClient.jsx')
  const greenFeesText = read('src/app/(en)/tools/green-fees/GreenFeesClient.jsx')
  const dayBuilderComponentText = read('src/app/(en)/golf-day-builder/GolfDayBuilderClient.jsx')
  const dayBuilderLogicText = read('src/lib/golf-day-builder-logic.js')
  const dayBuilderText = [dayBuilderComponentText, dayBuilderLogicText].filter(Boolean).join('\n')
  const greenFeesPrototypeText = read('prototypes/green-fees.html')

  if (!selectorText) errors.push('course-selector file not found')
  if (!greenFeesText) errors.push('green-fees file not found')
  if (!dayBuilderComponentText) errors.push('golf-day-builder file not found')
  if (!dayBuilderLogicText) errors.push('golf-day-builder-logic file not found')
  if (errors.length) {
    for (const error of errors) console.error(`  - ${error}`)
    process.exitCode = 1
    return
  }

  let selectorChecked = 0
  for (const course of parseSelectorBlocks(selectorText)) {
    if (SELECTOR_SPECIAL_IDS.has(course.id)) continue
    const pricing = getCoursePricingByName(course.name)
    if (!pricing) continue

    const fee = feeNumbers(course.fee)
    if (!fee) continue
    selectorChecked += 1

    if (fee.peak !== pricing.peak || fee.low !== pricing.low) {
      errors.push(
        `course-selector "${course.name}" fallback is Peak €${fee.peak} / Low €${fee.low}; canonical is Peak €${pricing.peak} / Low €${pricing.low}`,
      )
    }
    if (pricing.dynamic && !course.fee.includes('(dynamic)')) {
      errors.push(`course-selector "${course.name}" fallback should include "(dynamic)"`)
    }
    if (!pricing.dynamic && course.fee.includes('(dynamic)')) {
      errors.push(`course-selector "${course.name}" fallback should not include "(dynamic)"`)
    }
  }

  let greenFeesChecked = 0
  for (const row of parseGreenFeesRows(greenFeesText)) {
    const pricing = getCoursePricingByName(row.name)
    if (!pricing) continue
    greenFeesChecked += 1

    if (row.peak !== pricing.peak || row.low !== pricing.low) {
      errors.push(
        `green-fees "${row.name}" base row is Peak €${row.peak} / Low €${row.low}; canonical is Peak €${pricing.peak} / Low €${pricing.low}`,
      )
    }
  }

  const facilityClaimFiles = [
    ['green-fees', greenFeesText],
    ['golf-day-builder', dayBuilderText],
    ['green-fees prototype', greenFeesPrototypeText],
  ]
  const exclusiveTrackmanClaim = /\b(?:only|unique)\b.{0,80}\btrackman\b|\btrackman\b.{0,80}\b(?:only|unique)\b/is
  for (const [label, text] of facilityClaimFiles) {
    if (text && exclusiveTrackmanClaim.test(text)) {
      errors.push(`${label} must not claim that a Mallorca TrackMan Range is unique or the only one`)
    }
  }

  const santaPonsa3Block = dayBuilderText?.match(/\{\s*id:\s*["']santa-ponsa-3["'][\s\S]*?\n\s*\}/)?.[0] || ''
  if (!santaPonsa3Block.includes('Par 30')) {
    errors.push('golf-day-builder Santa Ponsa 3 must match the scorecard master: Par 30')
  }
  if (/arranged access|access arranged through Andy/i.test(dayBuilderText)) {
    errors.push('golf-day-builder must describe Santa Ponsa 2/3 as members only; guests must play with a member')
  }

  if (errors.length === 0) {
    console.log(
      `✅ Tool green-fee check passed — ${selectorChecked} selector fallback(s) and ${greenFeesChecked} green-fees row(s) match canonical pricing.`,
    )
    return
  }

  console.error(`❌ Tool green-fee check FAILED — ${errors.length} issue(s):\n`)
  for (const error of errors) console.error(`  - ${error}`)
  console.error('\nUpdate tool prices to match src/lib/course-pricing-data.js.')
  process.exitCode = 1
}

main()

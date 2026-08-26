#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const WORKSPACE_ROOT = resolve(REPO_ROOT, '..')

const { SERVICE_PRICES } = await import(pathToFileURL(join(REPO_ROOT, 'src/lib/service-pricing-data.js')).href)

const solo = Number(SERVICE_PRICES.solo)
const group = Number(SERVICE_PRICES.group)
const premium = Number(SERVICE_PRICES.premium)

const legacySoloPrices = [350, 495, 595, 695].filter((price) => price !== solo)

const activeWebsiteFiles = [
  'src/lib/offers-content.js',
  'src/lib/play-with-a-pro-content.js',
  'src/lib/play-with-a-pro-content-localized.js',
  'src/lib/contact-content.js',
  'src/lib/contact-content-localized.js',
  'src/lib/homepage-content.js',
  'src/lib/homepage-content-localized.js',
  'src/lib/plan-your-trip-content.js',
  'src/lib/plan-your-trip-content-localized.js',
  'src/lib/golf-cost-calculator-translations.js',
  'src/lib/service-pricing-data.js',
  'src/app/(en)/play-with-a-pro/PlayWithAProView.jsx',
  'src/app/(en)/contact/ContactFormPanel.jsx',
  'src/app/(en)/tools/golf-cost-calculator/GolfCostCalculatorClient.jsx',
  'prototypes/golf-cost-calculator/index.html',
  'public/llms.txt',
]

const exactChecks = [
  {
    file: join(REPO_ROOT, 'src/app/(en)/play-with-a-pro/PlayWithAProView.jsx'),
    label: 'Play With A Pro JSON-LD lowPrice',
    regex: new RegExp(`\\blowPrice:\\s*${solo}\\b`),
  },
  {
    file: join(REPO_ROOT, 'src/app/(en)/contact/ContactFormPanel.jsx'),
    label: 'Contact form solo fallback',
    regex: new RegExp(`\\['pwap-solo',\\s*'Solo',\\s*'€${solo}'\\]`),
  },
  {
    file: join(REPO_ROOT, 'prototypes/golf-cost-calculator/index.html'),
    label: 'Prototype calculator package note',
    regex: new RegExp(`€${solo}\\s+solo\\s+or\\s+€${group}\\s+total`, 'i'),
  },
  {
    file: join(REPO_ROOT, 'public/llms.txt'),
    label: 'llms.txt solo offer',
    regex: new RegExp(`Solo[^\\n]*€${solo}`, 'i'),
  },
]

const mallorcaHubRoot = join(WORKSPACE_ROOT, 'standalone-apps/mallorca-hub')
const mallorcaHubChecks = [
  {
    file: join(WORKSPACE_ROOT, 'standalone-apps/mallorca-hub/course-facts.js'),
    label: 'Mallorca Hub generated solo service price',
    regex: new RegExp(`"solo":\\s*${solo}\\b`),
  },
  {
    file: join(WORKSPACE_ROOT, 'standalone-apps/mallorca-hub/index.html'),
    label: 'Mallorca Hub fallback solo service price',
    regex: new RegExp(`MMG_HUB_SERVICE_PRICES\\|\\|\\{solo:${solo},group:${group},premium:${premium}\\}`),
  },
]

function rel(file) {
  return file.startsWith(WORKSPACE_ROOT) ? file.slice(WORKSPACE_ROOT.length + 1).replace(/\\/g, '/') : file
}

function read(file) {
  if (!existsSync(file)) return null
  return readFileSync(file, 'utf8')
}

const errors = []
let skippedMallorcaHubChecks = 0

for (const check of exactChecks) {
  const text = read(check.file)
  if (text === null) {
    errors.push(`${check.label}: missing ${rel(check.file)}`)
    continue
  }
  if (!check.regex.test(text)) {
    errors.push(`${check.label}: expected current service price in ${rel(check.file)}`)
  }
}

if (existsSync(mallorcaHubRoot)) {
  for (const check of mallorcaHubChecks) {
    const text = read(check.file)
    if (text === null) {
      errors.push(`${check.label}: missing ${rel(check.file)}`)
      continue
    }
    if (!check.regex.test(text)) {
      errors.push(`${check.label}: expected current service price in ${rel(check.file)}`)
    }
  }
} else {
  skippedMallorcaHubChecks = mallorcaHubChecks.length
}

for (const relative of activeWebsiteFiles) {
  const file = join(REPO_ROOT, relative)
  const text = read(file)
  if (text === null) {
    errors.push(`Service pricing surface missing: ${relative}`)
    continue
  }
  for (const oldPrice of legacySoloPrices) {
    const oldPricePattern = new RegExp(`(?:€\\s*${oldPrice}\\b|\\b${oldPrice}\\s*EUR\\b|\\b${oldPrice}\\s*欧元\\b)`)
    if (oldPricePattern.test(text)) {
      errors.push(`${relative}: contains legacy solo service price ${oldPrice}`)
    }
  }
}

if (skippedMallorcaHubChecks) {
  console.log(`Skipped ${skippedMallorcaHubChecks} Mallorca Hub sibling-repo check(s) because standalone-apps is not checked out here.`)
}

if (errors.length) {
  console.error('Service pricing surface check FAILED:')
  for (const error of errors) console.error(`- ${error}`)
  console.error('')
  console.error('Update the canonical service price sync coverage, then rerun npm run check:service-pricing.')
  process.exit(1)
}

console.log(`Service pricing surface check passed. Solo €${solo}, group €${group}, premium €${premium}+ are aligned on active guarded surfaces.`)

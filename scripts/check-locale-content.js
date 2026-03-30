const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, 'src', 'app')
const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']
const FILE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx'])

const ENGLISH_MARKERS = [
  'Book Your Day',
  'See the Experiences',
  'Get in touch',
  'How it works',
  'Featured Courses',
  'Ready to play',
  'Everything arranged',
  'Hosted Golf Day',
  'Play with a Pro',
]

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, results)
      continue
    }

    if (!FILE_EXTENSIONS.has(path.extname(entry.name))) continue
    results.push(fullPath)
  }

  return results
}

const findings = []

for (const locale of LOCALES) {
  const localeDir = path.join(APP_DIR, locale)
  if (!fs.existsSync(localeDir)) continue

  for (const file of walk(localeDir)) {
    const content = fs.readFileSync(file, 'utf8')
    const matches = ENGLISH_MARKERS.filter((marker) => content.includes(marker))

    if (matches.length === 0) continue

    findings.push({
      file: path.relative(ROOT, file),
      matches,
    })
  }
}

if (findings.length > 0) {
  console.error('Potential untranslated English copy found in locale files:\n')

  for (const finding of findings) {
    console.error(`- ${finding.file}`)
    console.error(`  ${finding.matches.join(', ')}`)
  }

  process.exit(1)
}

console.log('No obvious English copy found in non-English locale files.')

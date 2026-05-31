import fs from 'fs'
import path from 'path'

import { ALL_LOCALES } from '../src/lib/site.js'

const ROOT = path.resolve('src', 'app')
const REQUIRED_RELATIVE_FILES = [
  'page.jsx',
  path.join('about', 'page.jsx'),
  path.join('contact', 'page.jsx'),
  path.join('coaching', 'page.jsx'),
  path.join('golf-courses', 'page.jsx'),
  path.join('guides', 'page.jsx'),
  path.join('guides', '[slug]', 'page.jsx'),
  path.join('plan-your-trip', 'page.jsx'),
  path.join('play-with-a-pro', 'page.jsx'),
]

const missing = []

for (const locale of ALL_LOCALES.filter((item) => item !== 'en')) {
  const localeRoot = path.join(ROOT, locale)
  for (const relativeFile of REQUIRED_RELATIVE_FILES) {
    const absolutePath = path.join(localeRoot, relativeFile)
    if (!fs.existsSync(absolutePath)) {
      missing.push(path.relative(process.cwd(), absolutePath))
    }
  }
}

if (missing.length > 0) {
  console.error('Missing expected locale route files:')
  for (const file of missing) {
    console.error(`- ${file}`)
  }
  process.exit(1)
}

console.log('Locale route file checks passed.')

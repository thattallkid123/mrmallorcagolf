import fs from 'fs'
import path from 'path'

import { ALL_LOCALES } from '../src/lib/site.js'

const ROOT = path.resolve('src', 'app')
const GUIDE_FACTORY = path.join(ROOT, '_locale', 'guide-slug-factory.jsx')
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
const invalid = []

const guideFactorySource = fs.readFileSync(GUIDE_FACTORY, 'utf8')
if (
  !guideFactorySource.includes('export async function createGuideSlugMetadata') ||
  !guideFactorySource.includes('export async function createGuideSlugPage') ||
  !guideFactorySource.includes('const { slug } = await params')
) {
  invalid.push(path.relative(process.cwd(), GUIDE_FACTORY))
}

for (const locale of ALL_LOCALES.filter((item) => item !== 'en')) {
  const localeRoot = path.join(ROOT, locale)
  for (const relativeFile of REQUIRED_RELATIVE_FILES) {
    const absolutePath = path.join(localeRoot, relativeFile)
    if (!fs.existsSync(absolutePath)) {
      missing.push(path.relative(process.cwd(), absolutePath))
    }
  }

  const guideSlugPage = path.join(localeRoot, 'guides', '[slug]', 'page.jsx')
  if (fs.existsSync(guideSlugPage)) {
    const source = fs.readFileSync(guideSlugPage, 'utf8')
    if (
      !source.includes('export async function generateMetadata') ||
      !source.includes('export default async function Post')
    ) {
      invalid.push(path.relative(process.cwd(), guideSlugPage))
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

if (invalid.length > 0) {
  console.error('Localized dynamic guide routes must await Next params:')
  for (const file of invalid) {
    console.error(`- ${file}`)
  }
  process.exit(1)
}

console.log('Locale route file checks passed.')

const fs = require('fs')
const path = require('path')

const SUPPORTED_LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

function read(file) {
  return fs.readFileSync(path.join(__dirname, '..', file), 'utf8')
}

function extractTopLevelSlugs(source) {
  return [...source.matchAll(/^  '([^']+)': \{$/gm)].map((match) => match[1])
}

function extractLocalesForSlug(source, slug) {
  const slugRegex = new RegExp(`^  '${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{$`, 'm')
  const slugMatch = slugRegex.exec(source)

  if (!slugMatch) return []

  const start = slugMatch.index
  const nextMatch = /^  '([^']+)': \{$/gm
  nextMatch.lastIndex = start + 1
  const following = nextMatch.exec(source)
  const end = following ? following.index : source.length
  const block = source.slice(start, end)

  return [...block.matchAll(/^    (de|es|fr|nl|sv|zh): \{$/gm)].map((match) => match[1])
}

function checkCoverage(englishFile, localizedFile, label) {
  const englishSource = read(englishFile)
  const localizedSource = read(localizedFile)
  const slugs = extractTopLevelSlugs(englishSource)
  const failures = []

  for (const slug of slugs) {
    const locales = extractLocalesForSlug(localizedSource, slug)
    const missing = SUPPORTED_LOCALES.filter((locale) => !locales.includes(locale))

    if (missing.length > 0) {
      failures.push({ slug, missing })
    }
  }

  if (failures.length > 0) {
    console.warn(`Warning: missing localized coverage found in ${label}:`)
    failures.forEach(({ slug, missing }) => {
      console.warn(`- ${slug}: ${missing.join(', ')}`)
    })
    return
  }

  console.log(`${label} locale coverage looks complete.`)
}

checkCoverage('src/lib/guide-article-content.js', 'src/lib/guide-article-content-localized.js', 'Guide articles')
checkCoverage('src/lib/guide-post-content.js', 'src/lib/guide-post-content-localized.js', 'Guide review posts')

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

function countImageBlocks(source, slug, locale) {
  const slugRegex = new RegExp(`^  '${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{$`, 'm')
  const slugMatch = slugRegex.exec(source)
  if (!slugMatch) return null

  const start = slugMatch.index
  const nextSlug = /^  '([^']+)': \{$/gm
  nextSlug.lastIndex = start + 1
  const following = nextSlug.exec(source)
  const end = following ? following.index : source.length
  const slugBlock = source.slice(start, end)

  const localeRegex = new RegExp(`^    ${locale}: \\{$`, 'm')
  const localeMatch = localeRegex.exec(slugBlock)
  if (!localeMatch) return null

  const localeStart = localeMatch.index
  const nextLocale = /^    (de|es|fr|nl|sv|zh|en): \{$/gm
  nextLocale.lastIndex = localeStart + 1
  const nextLocaleMatch = nextLocale.exec(slugBlock)
  const localeEnd = nextLocaleMatch ? nextLocaleMatch.index : slugBlock.length
  const localeBlock = slugBlock.slice(localeStart, localeEnd)

  return (localeBlock.match(/type:\s*'image'/g) || []).length
}

function checkImageParity(englishFile, localizedFile, label) {
  const englishSource = read(englishFile)
  const localizedSource = read(localizedFile)
  const slugs = extractTopLevelSlugs(englishSource)

  for (const slug of slugs) {
    const enCount = (englishSource.match(new RegExp(`'${slug}'[\\s\\S]*?type:\\s*'image'`, 'g')) || []).length

    // Count images in the English slug block only
    const slugRegex = new RegExp(`^  '${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{$`, 'm')
    const slugMatch = slugRegex.exec(englishSource)
    if (!slugMatch) continue

    const start = slugMatch.index
    const nextSlug = /^  '([^']+)': \{$/gm
    nextSlug.lastIndex = start + 1
    const following = nextSlug.exec(englishSource)
    const end = following ? following.index : englishSource.length
    const enBlock = englishSource.slice(start, end)
    const enImageCount = (enBlock.match(/type:\s*'image'/g) || []).length

    if (enImageCount === 0) continue

    for (const locale of SUPPORTED_LOCALES) {
      const localeImageCount = countImageBlocks(localizedSource, slug, locale)
      if (localeImageCount === null) continue

      const diff = Math.abs(enImageCount - localeImageCount)
      if (diff > 1) {
        console.warn(
          `Warning: ${label} image count differs for ${slug}/${locale}: ` +
          `English has ${enImageCount}, ${locale} has ${localeImageCount}`
        )
      }
    }
  }
}

checkCoverage('src/lib/guide-article-content.js', 'src/lib/guide-article-content-localized.js', 'Guide articles')
checkCoverage('src/lib/guide-post-content.js', 'src/lib/guide-post-content-localized.js', 'Guide review posts')
checkImageParity('src/lib/guide-post-content.js', 'src/lib/guide-post-content-localized.js', 'Guide review posts')

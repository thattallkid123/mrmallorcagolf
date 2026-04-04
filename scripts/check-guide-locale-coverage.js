const fs = require('fs')
const path = require('path')
const { pathToFileURL } = require('url')

const SUPPORTED_LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

function toFileUrl(relPath) {
  return pathToFileURL(path.join(__dirname, '..', relPath)).href
}

// Count type:'image' blocks inside a named slug block in source text
function countImagesInSourceBlock(source, slug) {
  const slugRegex = new RegExp(`^  '${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{$`, 'm')
  const slugMatch = slugRegex.exec(source)
  if (!slugMatch) return 0

  const start = slugMatch.index
  const nextSlug = /^  '([^']+)': \{$/gm
  nextSlug.lastIndex = start + 1
  const following = nextSlug.exec(source)
  const end = following ? following.index : source.length
  const block = source.slice(start, end)

  return (block.match(/type:\s*'image'/g) || []).length
}

async function main() {
  const [siteModule, articleModule, postModule] = await Promise.all([
    import(toFileUrl('src/lib/site.js')),
    import(toFileUrl('src/lib/guide-article-content-localized.js')),
    import(toFileUrl('src/lib/guide-post-content-localized.js')),
  ])

  const articleSlugs = [...siteModule.ARTICLE_SLUGS]
  const postSlugs = [...siteModule.REVIEW_POST_SLUGS]

  // Check article locale coverage via module evaluation (handles REPAIRED merge pattern)
  const missingArticles = []
  for (const slug of articleSlugs) {
    const missing = SUPPORTED_LOCALES.filter(
      (locale) => !articleModule.getLocalizedGuideArticleContent(slug, locale)
    )
    if (missing.length > 0) missingArticles.push({ slug, missing })
  }

  if (missingArticles.length > 0) {
    missingArticles.forEach(({ slug, missing }) =>
      console.warn(`Warning: Guide article missing locales — ${slug}: ${missing.join(', ')}`)
    )
  } else {
    console.log('Guide articles locale coverage looks complete.')
  }

  // Check review post locale coverage
  const missingPosts = []
  for (const slug of postSlugs) {
    const missing = SUPPORTED_LOCALES.filter(
      (locale) => !postModule.getLocalizedGuidePostContent(slug, locale)
    )
    if (missing.length > 0) missingPosts.push({ slug, missing })
  }

  if (missingPosts.length > 0) {
    missingPosts.forEach(({ slug, missing }) =>
      console.warn(`Warning: Guide review post missing locales — ${slug}: ${missing.join(', ')}`)
    )
  } else {
    console.log('Guide review posts locale coverage looks complete.')
  }

  // Image block count parity — use runtime evaluation so POST_IMAGE_PATCHES are reflected
  // Warning only, not a hard fail
  const repoRoot = path.join(__dirname, '..')
  const enSource = fs.readFileSync(path.join(repoRoot, 'src/lib/guide-post-content.js'), 'utf8')

  for (const slug of postSlugs) {
    const enImageCount = countImagesInSourceBlock(enSource, slug)
    if (enImageCount === 0) continue

    for (const locale of SUPPORTED_LOCALES) {
      const localized = postModule.getLocalizedGuidePostContent(slug, locale)
      if (!localized) continue
      const localeImageCount = (localized.blocks || []).filter((b) => b.type === 'image').length

      if (Math.abs(enImageCount - localeImageCount) > 1) {
        console.warn(
          `Warning: Image count differs for ${slug}/${locale}: ` +
          `English has ${enImageCount}, ${locale} has ${localeImageCount}`
        )
      }
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

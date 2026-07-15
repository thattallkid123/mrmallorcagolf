const path = require('path')
const { pathToFileURL } = require('url')

const SUPPORTED_LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

function toFileUrl(relPath) {
  return pathToFileURL(path.join(__dirname, '..', relPath)).href
}

async function main() {
  const [siteModule, articleModule, postModule, resolvedPostModule] = await Promise.all([
    import(toFileUrl('src/lib/site.js')),
    import(toFileUrl('src/lib/guide-article-content-localized.js')),
    import(toFileUrl('src/lib/guide-post-content-localized.js')),
    import(toFileUrl('src/lib/guide-post-content.js')),
  ])

  const articleSlugs = [...siteModule.ARTICLE_SLUGS]
  const postSlugs = [...siteModule.REVIEW_POST_SLUGS]

  const missingArticles = []
  for (const slug of articleSlugs) {
    const missing = SUPPORTED_LOCALES.filter((locale) => !articleModule.getLocalizedGuideArticleContent(slug, locale))
    if (missing.length > 0) missingArticles.push({ slug, missing })
  }

  if (missingArticles.length > 0) {
    missingArticles.forEach(({ slug, missing }) =>
      console.warn(`Warning: Guide article missing locales - ${slug}: ${missing.join(', ')}`),
    )
  } else {
    console.log('Guide articles locale coverage looks complete.')
  }

  const missingPosts = []
  for (const slug of postSlugs) {
    const missing = SUPPORTED_LOCALES.filter((locale) => !postModule.getLocalizedGuidePostContent(slug, locale))
    if (missing.length > 0) missingPosts.push({ slug, missing })
  }

  if (missingPosts.length > 0) {
    missingPosts.forEach(({ slug, missing }) =>
      console.warn(`Warning: Guide review post missing locales - ${slug}: ${missing.join(', ')}`),
    )
  } else {
    console.log('Guide review posts locale coverage looks complete.')
  }

  // Warning only, not a hard fail. Use resolved content here because localized
  // overlays inherit canonical English image blocks at render time.
  for (const slug of postSlugs) {
    const english = resolvedPostModule.getGuidePostContent(slug, 'en')
    const enImageCount = (english?.blocks || []).filter((block) => block.type === 'image').length
    if (enImageCount === 0) continue

    for (const locale of SUPPORTED_LOCALES) {
      const localized = resolvedPostModule.getGuidePostContent(slug, locale)
      if (!localized) continue
      const localeImageCount = (localized.blocks || []).filter((block) => block.type === 'image').length

      if (Math.abs(enImageCount - localeImageCount) > 1) {
        console.warn(
          `Warning: Image count differs for ${slug}/${locale}: ` +
            `English has ${enImageCount}, ${locale} has ${localeImageCount}`,
        )
      }
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

const { pathToFileURL } = require('url')
const path = require('path')

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']
const ENGLISH_MARKERS = [
  'Play-with-a-Pro',
  'Course Review',
  'Read time',
  'Updated 2026',
  'Get in touch',
  'Book Your Day',
  'See the Experiences',
  'Proof of work',
  'How it works',
  'Ready to play',
  'Featured Courses',
]

function toFileUrl(relPath) {
  return pathToFileURL(path.join(__dirname, '..', relPath)).href
}

function walkStrings(value, visit, trail = []) {
  if (typeof value === 'string') {
    visit(value, trail)
    return
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => walkStrings(item, visit, [...trail, index]))
    return
  }

  if (value && typeof value === 'object') {
    for (const [key, nested] of Object.entries(value)) {
      walkStrings(nested, visit, [...trail, key])
    }
  }
}

async function main() {
  const [siteModule, articleModule, postModule] = await Promise.all([
    import(toFileUrl('src/lib/site.js')),
    import(toFileUrl('src/lib/guide-article-content-localized.js')),
    import(toFileUrl('src/lib/guide-post-content-localized.js')),
  ])

  const findings = []

  for (const slug of siteModule.ARTICLE_SLUGS) {
    for (const locale of LOCALES) {
      const content = articleModule.getLocalizedGuideArticleContent(slug, locale)
      if (!content) continue

      walkStrings(content, (text, trail) => {
        const marker = ENGLISH_MARKERS.find((entry) => text.includes(entry))
        if (!marker) return
        findings.push({
          type: 'article',
          slug,
          locale,
          path: trail.join('.'),
          marker,
          text,
        })
      })
    }
  }

  for (const slug of siteModule.REVIEW_POST_SLUGS) {
    for (const locale of LOCALES) {
      const content = postModule.getLocalizedGuidePostContent(slug, locale)
      if (!content) continue

      walkStrings(content, (text, trail) => {
        const marker = ENGLISH_MARKERS.find((entry) => text.includes(entry))
        if (!marker) return
        findings.push({
          type: 'post',
          slug,
          locale,
          path: trail.join('.'),
          marker,
          text,
        })
      })
    }
  }

  if (findings.length > 0) {
    console.error('Potential untranslated English copy found in localized guide/review content:\n')
    for (const finding of findings.slice(0, 80)) {
      console.error(`- ${finding.type}:${finding.slug}/${finding.locale} @ ${finding.path}`)
      console.error(`  marker: ${finding.marker}`)
      console.error(`  text: ${finding.text}`)
    }
    if (findings.length > 80) {
      console.error(`\n...and ${findings.length - 80} more`)
    }
    process.exit(1)
  }

  console.log('No tracked English leaks found in localized guide/review content.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

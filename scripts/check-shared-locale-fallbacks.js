const CHECKS = [
  {
    label: 'HOME_CONTENT',
    modulePath: '../src/lib/homepage-content.js',
    exportName: 'HOME_CONTENT',
  },
  {
    label: 'ABOUT_CONTENT',
    modulePath: '../src/lib/about-content.js',
    exportName: 'ABOUT_CONTENT',
  },
  {
    label: 'COACHING_CONTENT',
    modulePath: '../src/lib/coaching-content.js',
    exportName: 'COACHING_CONTENT',
  },
  {
    label: 'CONTACT_CONTENT',
    modulePath: '../src/lib/contact-content.js',
    exportName: 'CONTACT_CONTENT',
  },
  {
    label: 'PLAY_WITH_A_PRO_CONTENT',
    modulePath: '../src/lib/play-with-a-pro-content.js',
    exportName: 'PLAY_WITH_A_PRO_CONTENT',
  },
  {
    label: 'GUIDES_CONTENT',
    modulePath: '../src/lib/guides-content.js',
    exportName: 'GUIDES_CONTENT',
  },
]

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']
const GUIDE_ARTICLE_SLUGS = [
  'best-golf-courses-mallorca',
  'best-time-play-golf-mallorca',
  'golf-club-hire-mallorca',
  'golf-cost-mallorca',
  'golf-trip-planning-mallorca',
  'is-mallorca-good-for-golf',
  'a-day-at-son-gual',
]
const GUIDE_POST_SLUGS = ['son-gual-review', 'alcanada-review', 'santa-ponsa-1-review']
const guideArticleModule = require('../src/lib/guide-article-content-localized.js')
const guidePostModule = require('../src/lib/guide-post-content-localized.js')

const ENGLISH_MARKERS = [
  'Book Your Day',
  'Explore Courses',
  'Get in touch',
  'How it works',
  'Featured Courses',
  'Ready to play',
  'Everything arranged',
  'Hosted Golf Day',
  'Play with a Pro',
  'Get in Touch',
  'See the Experiences',
  'Coming Soon',
  'Course Review',
  'Course Guide',
  'Updated 2026',
  'Lessons delivered',
  'Competition winners coached',
  'Within 24 hours',
]

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

const findings = []

for (const check of CHECKS) {
  const module = require(check.modulePath)
  const source = module[check.exportName]

  if (!source || typeof source !== 'object') continue

  for (const locale of LOCALES) {
    const content = source[locale]
    if (!content) continue

    walkStrings(content, (text, trail) => {
      const marker = ENGLISH_MARKERS.find((entry) => text.includes(entry))
      if (!marker) return

      findings.push({
        module: check.label,
        locale,
        path: trail.join('.'),
        marker,
        text,
      })
    })
  }
}

for (const slug of GUIDE_ARTICLE_SLUGS) {
  for (const locale of LOCALES) {
    const localized = guideArticleModule.getLocalizedGuideArticleContent(slug, locale)
    if (!localized) {
      findings.push({
        module: 'GUIDE_ARTICLE_CONTENT',
        locale,
        path: slug,
        marker: 'MISSING_LOCALIZED_ARTICLE',
        text: `Missing localized article content for ${slug}/${locale}`,
      })
    }
  }
}

for (const slug of GUIDE_POST_SLUGS) {
  for (const locale of LOCALES) {
    const localized = guidePostModule.getLocalizedGuidePostContent(slug, locale)
    if (!localized) {
      findings.push({
        module: 'GUIDE_POST_CONTENT',
        locale,
        path: slug,
        marker: 'MISSING_LOCALIZED_POST',
        text: `Missing localized guide post content for ${slug}/${locale}`,
      })
    }
  }
}

if (findings.length > 0) {
  console.error('Potential English fallback strings found in shared locale content:\n')

  for (const finding of findings.slice(0, 60)) {
    console.error(`- ${finding.module}.${finding.locale}.${finding.path}`)
    console.error(`  marker: ${finding.marker}`)
    console.error(`  text: ${finding.text}`)
  }

  if (findings.length > 60) {
    console.error(`\n...and ${findings.length - 60} more`)
  }

  process.exit(1)
}

console.log('No obvious English fallback strings found in shared locale content.')

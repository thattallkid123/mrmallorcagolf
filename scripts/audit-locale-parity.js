const { pathToFileURL } = require('url')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']
const IGNORED_PATHS = [
  /^home\.[^.]+\.whyMallorca(?:\.|$)/,
  /^golf-courses\.[^.]+\.ui(?:\.|$)/,
  /^guides-index\.[^.]+\.liveGuides\[\d+\]\.img$/,
  /^guides-index\.[^.]+\.liveGuides\[\d+\]\.imgPosition$/,
  /^play-with-a-pro\.[^.]+\.packages\.multiDay\.detail$/,
  /^guide-post\.[^.]+\.[^.]+\.blocks(?:\.|\[|$)/,
]

const WARNING_ARRAY_PATHS = [
  /^guide-article\.[^.]+\.[^.]+\.meta\.related$/,
  /^guide-post\.[^.]+\.[^.]+\.meta\.related$/,
  /^guide-post\.[^.]+\.[^.]+\.blocks$/,
]

const WARNING_PATHS = [
  /^guide-post\.[^.]+\.[^.]+\.blocks(?:\.|\[|$)/,
]

function toFileUrl(relPath) {
  return pathToFileURL(path.join(ROOT, relPath)).href
}

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
}

function isIgnoredPath(trail) {
  return IGNORED_PATHS.some((pattern) => pattern.test(trail))
}

function isWarningArrayPath(trail) {
  return WARNING_ARRAY_PATHS.some((pattern) => pattern.test(trail))
}

function addFinding(target, message, trail) {
  if (isIgnoredPath(trail)) return
  target.push(message)
}

function findingTarget(trail, issues, warnings) {
  return WARNING_PATHS.some((pattern) => pattern.test(trail)) ? warnings : issues
}

function compareShape(base, candidate, trail, issues, warnings) {
  if (isIgnoredPath(trail)) return

  if (Array.isArray(base)) {
    if (!Array.isArray(candidate)) {
      addFinding(findingTarget(trail, issues, warnings), `${trail}: expected array, got ${typeof candidate}`, trail)
      return
    }

    if (base.length !== candidate.length) {
      const target = isWarningArrayPath(trail) ? warnings : issues
      addFinding(target, `${trail}: array length ${candidate.length} != English ${base.length}`, trail)
    }

    const sampleCount = Math.min(base.length, candidate.length)
    for (let index = 0; index < sampleCount; index += 1) {
      compareShape(base[index], candidate[index], `${trail}[${index}]`, issues, warnings)
    }
    return
  }

  if (isPlainObject(base)) {
    if (!isPlainObject(candidate)) {
      addFinding(findingTarget(trail, issues, warnings), `${trail}: expected object, got ${Array.isArray(candidate) ? 'array' : typeof candidate}`, trail)
      return
    }

    for (const key of Object.keys(base)) {
      if (!(key in candidate)) {
        addFinding(findingTarget(`${trail}.${key}`, issues, warnings), `${trail}.${key}: missing`, `${trail}.${key}`)
        continue
      }
      compareShape(base[key], candidate[key], `${trail}.${key}`, issues, warnings)
    }
    return
  }

  if (typeof base !== typeof candidate) {
    addFinding(findingTarget(trail, issues, warnings), `${trail}: expected ${typeof base}, got ${typeof candidate}`, trail)
  }
}

function auditContentGetter(name, getContent, getEnglishForLocale = null) {
  const defaultEnglish = getContent('en')
  const results = []

  for (const locale of LOCALES) {
    const english = getEnglishForLocale ? getEnglishForLocale(locale) : defaultEnglish
    const candidate = getContent(locale)
    const issues = []
    const warnings = []

    if (!candidate) {
      issues.push(`${name}.${locale}: missing content`)
    } else {
      compareShape(english, candidate, `${name}.${locale}`, issues, warnings)
    }

    results.push({ locale, issues, warnings })
  }

  return results
}

function normalizeGuidesIndexShape(english, candidate, locale, hasLocaleRoute) {
  if (!candidate || !hasLocaleRoute) return { english, candidate }

  const englishLiveGuides = (english.liveGuides || []).filter((guide) =>
    hasLocaleRoute(`/guides/${guide.slug}`, locale)
  )

  return {
    english: {
      ...english,
      liveGuides: englishLiveGuides,
    },
    candidate,
  }
}

function auditGuides(name, slugs, getContent) {
  const results = []

  for (const slug of slugs) {
    const english = getContent(slug, 'en')

    for (const locale of LOCALES) {
      const candidate = getContent(slug, locale)
      const issues = []
      const warnings = []

      if (!candidate) {
        issues.push(`${name}.${slug}.${locale}: missing content`)
      } else {
        compareShape(english, candidate, `${name}.${slug}.${locale}`, issues, warnings)
      }

      results.push({ locale, issues, warnings })
    }
  }

  return results
}

function printAudit(name, entries) {
  const issues = entries.flatMap((entry) => entry.issues)
  const warnings = entries.flatMap((entry) => entry.warnings || [])

  if (!issues.length) {
    console.log(warnings.length ? `${name}: OK (${warnings.length} editorial warning(s))` : `${name}: OK`)
    for (const warning of warnings.slice(0, 20)) {
      console.log(`  - warning: ${warning}`)
    }
    if (warnings.length > 20) {
      console.log(`  - ...and ${warnings.length - 20} more warning(s)`)
    }
    return 0
  }

  console.log(`${name}:`)
  for (const issue of issues) {
    console.log(`  - ${issue}`)
  }
  return issues.length
}

async function main() {
  const [
    homepage,
    playWithAPro,
    about,
    contact,
    coaching,
    golfCourses,
    guides,
    guideArticles,
    guidePosts,
    site,
  ] = await Promise.all([
    import(toFileUrl('src/lib/homepage-content.js')),
    import(toFileUrl('src/lib/play-with-a-pro-content.js')),
    import(toFileUrl('src/lib/about-content.js')),
    import(toFileUrl('src/lib/contact-content.js')),
    import(toFileUrl('src/lib/coaching-content.js')),
    import(toFileUrl('src/lib/golf-courses-content.js')),
    import(toFileUrl('src/lib/guides-content.js')),
    import(toFileUrl('src/lib/guide-article-content.js')),
    import(toFileUrl('src/lib/guide-post-content.js')),
    import(toFileUrl('src/lib/site.js')),
  ])

  const getGuidesIndexEnglish = (locale) =>
    normalizeGuidesIndexShape(
      guides.getGuidesContent('en'),
      guides.getGuidesContent(locale),
      locale,
      site.hasLocaleRoute
    ).english

  const audits = [
    ['home', auditContentGetter('home', homepage.getHomeContent)],
    ['play-with-a-pro', auditContentGetter('play-with-a-pro', playWithAPro.getPlayWithAProContent)],
    ['about', auditContentGetter('about', about.getAboutContent)],
    ['contact', auditContentGetter('contact', contact.getContactContent)],
    ['coaching', auditContentGetter('coaching', coaching.getCoachingContent)],
    ['golf-courses', auditContentGetter('golf-courses', golfCourses.getGolfCoursesContent)],
    ['guides-index', auditContentGetter('guides-index', guides.getGuidesContent, getGuidesIndexEnglish)],
    [
      'guide-articles',
      auditGuides(
        'guide-article',
        Object.keys(guideArticles.GUIDE_ARTICLE_CONTENT),
        guideArticles.getGuideArticleContent
      ),
    ],
    [
      'guide-posts',
      auditGuides(
        'guide-post',
        Object.keys(guidePosts.GUIDE_POST_CONTENT),
        guidePosts.getGuidePostContent
      ),
    ],
  ]

  let total = 0
  for (const [name, entries] of audits) {
    total += printAudit(name, entries)
  }

  if (total > 0) {
    console.error(`\nLocale parity audit found ${total} issue(s).`)
    process.exit(1)
  }

  console.log('\nAll locale structures match English.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

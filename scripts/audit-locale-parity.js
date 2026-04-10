const { getHomeContent } = require('../src/lib/homepage-content.js')
const { getPlayWithAProContent } = require('../src/lib/play-with-a-pro-content.js')
const { getAboutContent } = require('../src/lib/about-content.js')
const { getContactContent } = require('../src/lib/contact-content.js')
const { getCoachingContent } = require('../src/lib/coaching-content.js')
const { getGolfCoursesContent } = require('../src/lib/golf-courses-content.js')
const { getGuidesContent } = require('../src/lib/guides-content.js')
const { GUIDE_ARTICLE_CONTENT, getGuideArticleContent } = require('../src/lib/guide-article-content.js')
const { GUIDE_POST_CONTENT, getGuidePostContent } = require('../src/lib/guide-post-content.js')
const locales = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
}

function compareShape(base, candidate, path, issues) {
  if (Array.isArray(base)) {
    if (!Array.isArray(candidate)) {
      issues.push(`${path}: expected array, got ${typeof candidate}`)
      return
    }
    if (base.length !== candidate.length) {
      issues.push(`${path}: array length ${candidate.length} != english ${base.length}`)
    }

    const sampleCount = Math.min(base.length, candidate.length)
    for (let i = 0; i < sampleCount; i += 1) {
      compareShape(base[i], candidate[i], `${path}[${i}]`, issues)
    }
    return
  }

  if (isPlainObject(base)) {
    if (!isPlainObject(candidate)) {
      issues.push(`${path}: expected object, got ${typeof candidate}`)
      return
    }

    for (const key of Object.keys(base)) {
      if (!(key in candidate)) {
        issues.push(`${path}.${key}: missing`)
        continue
      }
      compareShape(base[key], candidate[key], `${path}.${key}`, issues)
    }
    return
  }

  if (typeof base !== typeof candidate) {
    issues.push(`${path}: expected ${typeof base}, got ${typeof candidate}`)
  }
}

function auditSection(name, getContent) {
  const english = getContent('en')
  const output = []

  for (const locale of locales) {
    const candidate = getContent(locale)
    const issues = []
    compareShape(english, candidate, `${name}.${locale}`, issues)
    output.push({ locale, issues })
  }

  return output
}

function auditLocalizedGuides() {
  const results = []

  for (const slug of Object.keys(GUIDE_ARTICLE_CONTENT)) {
    const english = getGuideArticleContent(slug, 'en')
    for (const locale of locales) {
      const candidate = getGuideArticleContent(slug, locale)
      if (!candidate) {
        results.push({ locale, issues: [`guide-article.${slug}.${locale}: missing localized content`] })
        continue
      }
      const issues = []
      compareShape(english, candidate, `guide-article.${slug}.${locale}`, issues)
      results.push({ locale, issues })
    }
  }

  for (const slug of Object.keys(GUIDE_POST_CONTENT)) {
    const english = getGuidePostContent(slug, 'en')
    for (const locale of locales) {
      const candidate = getGuidePostContent(slug, locale)
      if (!candidate) {
        results.push({ locale, issues: [`guide-post.${slug}.${locale}: missing localized content`] })
        continue
      }
      const issues = []
      compareShape(english, candidate, `guide-post.${slug}.${locale}`, issues)
      results.push({ locale, issues })
    }
  }

  return results
}

const audits = [
  ['home', auditSection('home', getHomeContent)],
  ['play', auditSection('play', getPlayWithAProContent)],
  ['about', auditSection('about', getAboutContent)],
  ['contact', auditSection('contact', getContactContent)],
  ['coaching', auditSection('coaching', getCoachingContent)],
  ['golf-courses', auditSection('golf-courses', getGolfCoursesContent)],
  ['guides-index', auditSection('guides-index', getGuidesContent)],
  ['guides', auditLocalizedGuides()],
]

let total = 0

for (const [name, entries] of audits) {
  const sectionIssues = entries.flatMap((entry) => entry.issues)
  if (!sectionIssues.length) {
    console.log(`${name}: OK`)
    continue
  }

  total += sectionIssues.length
  console.log(`${name}:`)
  for (const issue of sectionIssues) {
    console.log(`  - ${issue}`)
  }
}

if (total > 0) {
  process.exitCode = 1
} else {
  console.log('All locale structures match English.')
}

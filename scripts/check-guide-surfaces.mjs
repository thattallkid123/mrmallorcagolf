// Guards the places a published course review has to be registered.
//
// Found 2026-09-26: /tools/green-fees showed Son Quint as "Coming soon" three
// days after its review went live, because ~10 surfaces each kept their own
// hand-typed link and nothing checked them. Most of those are now derived from
// `reviewSlug` in golf-courses-data.js (green-fees, both course selectors, the
// Chinese selector, the par check, the font test), so they cannot drift. This
// check covers what cannot be derived:
//
//   - the reviewSlug itself exists for every slug in REVIEW_POST_SLUGS, and
//     vice versa (a slug listed before it is live would link to a page that
//     does not exist in every locale)
//   - a carousel card exists in every locale
//   - public/llms.txt lists the review
//   - every course name a tool or selector uses resolves to a course. A name
//     that matches nothing (T Golf Palma was spelled without its brackets on
//     the green-fees tool) silently shows "Coming soon" forever, and the
//     slug checks above cannot see it
//   - if the sibling mmg-tools repo is checked out: the Course Guides PWA data
//     (guide/course-sync.js, generated from golf-courses-data.js by
//     `node scripts/sync-pricing.js` in mmg-tools) carries the reviewSlug, and
//     the pricing consumer-map lists the review's localized copy. CI has no
//     sibling checkout, so those are skipped there and enforced locally by the
//     pre-push hook.

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { GOLF_COURSE_DATA } from '../src/lib/golf-courses-data.js'
import { REVIEW_POST_SLUGS } from '../src/lib/site.js'
import { getGuidesContent } from '../src/lib/guides-content.js'
import { findCourseForReview } from '../src/lib/golf-courses-helpers.js'
import { ZH_COURSE_EDITORIAL } from '../src/lib/zh-course-editorial.js'

const repoRoot = path.join(fileURLToPath(new URL('..', import.meta.url)))
const LOCALES = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh']
const failures = []

const coursesBySlug = new Map()
for (const region of GOLF_COURSE_DATA) {
  for (const course of region.courses) {
    if (!course.reviewSlug) continue
    const list = coursesBySlug.get(course.reviewSlug) || []
    list.push(course.name)
    coursesBySlug.set(course.reviewSlug, list)
  }
}

for (const [slug, names] of coursesBySlug) {
  if (names.length > 1) failures.push(`reviewSlug "${slug}" is set on more than one course: ${names.join(', ')}`)
  if (!REVIEW_POST_SLUGS.has(slug)) {
    failures.push(
      `"${names[0]}" has reviewSlug "${slug}" but that slug is not in REVIEW_POST_SLUGS (site.js). ` +
        'Keep reviewSlug off until the review is live in every locale.',
    )
  }
}

const llms = readFileSync(path.join(repoRoot, 'public', 'llms.txt'), 'utf8')
const cardsByLocale = Object.fromEntries(
  LOCALES.map((locale) => [locale, new Set((getGuidesContent(locale).liveGuides || []).map((g) => g.slug))]),
)

// Every course name each surface uses must resolve to a course, or its review link
// can never appear. Names are scanned out of the source (the components do not export them).
const unesc = (value) => value.split("\\'").join("'")
const nameSources = [
  {
    file: 'src/app/(en)/tools/green-fees/GreenFeesClient.jsx',
    pattern: /^\s*\{ name: (?:'([^']+)'|"([^"]+)")/gm,
  },
  {
    file: 'src/app/(en)/tools/course-selector/CourseSelectorToolClient.jsx',
    pattern: /id:'[^']+', name:'((?:[^'\\]|\\.)+)'/g,
  },
  {
    file: 'src/app/(en)/course-selector/CourseSelectorClient.jsx',
    pattern: /^\s*name: '((?:[^'\\]|\\.)+)'/gm,
  },
]
for (const { file, pattern } of nameSources) {
  const source = readFileSync(path.join(repoRoot, file), 'utf8')
  const names = [...source.matchAll(pattern)].map((m) => unesc(m[1] || m[2]))
  if (names.length === 0) {
    failures.push(`${file}: found no course names to check, so this check can no longer see that file (its layout changed?)`)
  }
  for (const name of names) {
    if (!findCourseForReview(name)) {
      failures.push(
        `${file} uses the course name "${name}", which matches no course in golf-courses-data.js, so it can never show a review link. ` +
          'Add an alias to REVIEW_LOOKUP_NAME_FIX in golf-courses-helpers.js.',
      )
    }
  }
}
for (const name of Object.keys(ZH_COURSE_EDITORIAL)) {
  if (!findCourseForReview(name)) {
    failures.push(`zh-course-editorial.js key "${name}" matches no course in golf-courses-data.js`)
  }
}

const toolsRoot = path.join(repoRoot, '..', 'mmg-tools')
const guideSyncPath = path.join(toolsRoot, 'guide', 'course-sync.js')
const consumerMapPath = path.join(toolsRoot, 'pricing', 'edit', 'confirmed', 'consumer-map.json')
const siblingPresent = existsSync(guideSyncPath) && existsSync(consumerMapPath)
const guideSyncReviewSlugs = new Set()
if (siblingPresent) {
  const payload = readFileSync(guideSyncPath, 'utf8').replace(/^window\.MMG_GUIDE_COURSE_SYNC\s*=\s*/, '').replace(/;\s*$/, '')
  for (const course of Object.values(JSON.parse(payload).courses || {})) {
    if (course.reviewSlug) guideSyncReviewSlugs.add(course.reviewSlug)
  }
}
const consumerMap = siblingPresent ? readFileSync(consumerMapPath, 'utf8') : ''

for (const slug of REVIEW_POST_SLUGS) {
  if (!coursesBySlug.has(slug)) {
    failures.push(
      `"${slug}" is in REVIEW_POST_SLUGS but no course in golf-courses-data.js has reviewSlug "${slug}". ` +
        'Green-fees, both course selectors and the Chinese selector derive their links from it, so they will show no guide.',
    )
  }
  for (const locale of LOCALES) {
    if (!cardsByLocale[locale].has(slug)) {
      failures.push(`"${slug}" has no carousel card in the "${locale}" guides content (guides-content*.js)`)
    }
  }
  if (!llms.includes(`/guides/${slug})`)) {
    failures.push(`"${slug}" is not listed in public/llms.txt (AI crawlers are told the review does not exist)`)
  }
  if (siblingPresent) {
    if (!guideSyncReviewSlugs.has(slug)) {
      failures.push(
        `"${slug}" is not in mmg-tools/guide/course-sync.js, so the Course Guides app shows no review link. ` +
          'Run `node scripts/sync-pricing.js` in mmg-tools, then commit and push it (separate repo, separate deploy).',
      )
    }
    if (!consumerMap.includes(`guide-post-content-localized/${slug}.js`)) {
      failures.push(
        `"${slug}" localized copy is not in mmg-tools consumer-map.json blog-price-mentions, so a price change will not flag it as stale`,
      )
    }
  }
}

if (failures.length > 0) {
  console.error('Guide surface check failed:')
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

console.log(
  `Guide surface check passed - ${REVIEW_POST_SLUGS.size} reviews registered on all derived and listed surfaces` +
    (siblingPresent ? ' (incl. mmg-tools).' : ' (mmg-tools not checked out here, sibling checks skipped).'),
)

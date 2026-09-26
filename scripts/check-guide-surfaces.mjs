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
//   - if the sibling mmg-tools repo is checked out: the Course Guides PWA links
//     to it and the pricing consumer-map lists its localized copy. CI has no
//     sibling checkout, so those two are skipped there and enforced locally by
//     the pre-push hook.

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { GOLF_COURSE_DATA } from '../src/lib/golf-courses-data.js'
import { REVIEW_POST_SLUGS } from '../src/lib/site.js'
import { getGuidesContent } from '../src/lib/guides-content.js'

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

const toolsRoot = path.join(repoRoot, '..', 'mmg-tools')
const guidePwaPath = path.join(toolsRoot, 'guide', 'index.html')
const consumerMapPath = path.join(toolsRoot, 'pricing', 'edit', 'confirmed', 'consumer-map.json')
const siblingPresent = existsSync(guidePwaPath) && existsSync(consumerMapPath)
const guidePwa = siblingPresent ? readFileSync(guidePwaPath, 'utf8') : ''
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
    if (!guidePwa.includes(`/guides/${slug}`)) {
      failures.push(`"${slug}" has no "Read full review" link in mmg-tools/guide/index.html (separate repo, separate deploy)`)
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

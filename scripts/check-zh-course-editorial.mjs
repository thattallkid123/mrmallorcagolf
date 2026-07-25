// Guards the Chinese course editorial against the two ways it broke before.
//
// 1. It used to hardcode green fees, which silently drifted from the pricing
//    sync (Son Quint peak read EUR115 against a canonical EUR172). So: no price
//    literals allowed in the editorial file at all.
// 2. Its guide links used bare slugs like /zh/guides/son-gual, when every real
//    route carries a -review suffix. All 16 links 404ed. So: every non-null
//    guideSlug must be a known review slug.
//
// Also checks the editorial covers exactly the canonical course set, so a course
// added to pricing cannot quietly go missing from the Chinese tools.

import { readFileSync } from 'node:fs'
import { ZH_COURSE_EDITORIAL } from '../src/lib/zh-course-editorial.js'
import { COURSE_PRICING_BY_NAME } from '../src/lib/course-pricing-data.js'
import { REVIEW_POST_SLUGS } from '../src/lib/site.js'

const failures = []

const editorialNames = Object.keys(ZH_COURSE_EDITORIAL)
const canonicalNames = Object.keys(COURSE_PRICING_BY_NAME)

for (const name of editorialNames) {
  if (!COURSE_PRICING_BY_NAME[name]) {
    failures.push(`"${name}" has Chinese editorial but no canonical pricing entry`)
  }
}
for (const name of canonicalNames) {
  if (!ZH_COURSE_EDITORIAL[name]) {
    failures.push(`"${name}" is in canonical pricing but has no Chinese editorial`)
  }
}

for (const [name, entry] of Object.entries(ZH_COURSE_EDITORIAL)) {
  if (entry.guideSlug !== null && !REVIEW_POST_SLUGS.has(entry.guideSlug)) {
    failures.push(
      `"${name}" points at guide slug "${entry.guideSlug}", which is not a published review slug`,
    )
  }
  for (const field of ['zhTagline', 'regionZh', 'difficulty', 'forWho', 'why', 'andy']) {
    if (!entry[field] || !String(entry[field]).trim()) {
      failures.push(`"${name}" is missing required editorial field "${field}"`)
    }
  }
}

// No price literals: the file must never reintroduce hardcoded fees.
const source = readFileSync(new URL('../src/lib/zh-course-editorial.js', import.meta.url), 'utf8')
const priceLiterals = source.match(/€\s?\d/g)
if (priceLiterals) {
  failures.push(
    `zh-course-editorial.js contains ${priceLiterals.length} price literal(s). ` +
      'Read prices from course-pricing-data.js instead so they follow the pricing sync.',
  )
}

if (failures.length > 0) {
  console.error('Chinese course editorial check failed:')
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

const withGuide = editorialNames.filter((n) => ZH_COURSE_EDITORIAL[n].guideSlug).length
console.log(
  `Chinese course editorial check passed - ${editorialNames.length} courses match canonical pricing, ` +
    `${withGuide} link to published Chinese guides, no hardcoded prices.`,
)

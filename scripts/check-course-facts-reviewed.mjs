#!/usr/bin/env node
// Fails when a course that has a published review still carries a
// "not played" / "unconfirmed published-review candidate" note in the course
// facts. Those notes are written while a course is researched second-hand;
// once Andy has played it and the review is live they are false.
// T Golf Palma kept one for weeks after its review went live (found 2026-10-10).
//
// Fix: open the course in the MMG Control Panel (Course Master), replace the
// note with what the review says (e.g. the hole Andy names as the best), then
// run `.\mmg.ps1 course-facts` in mmg-tools. Never edit course-facts-data.js.

import { COURSE_FACTS } from '../src/lib/course-facts-data.js'
import { getCourseReviewSlug } from '../src/lib/golf-courses-helpers.js'

const STALE = /not played|has not played|unconfirmed\s*-\s*published-review candidate|not Andy's firsthand/i

const failures = []
for (const facts of Object.values(COURSE_FACTS)) {
  const names = [facts.name, ...(facts.matchNames || [])]
  const slug = names.map((n) => getCourseReviewSlug(n)).find(Boolean)
  if (!slug) continue
  for (const [field, value] of Object.entries(facts)) {
    if (typeof value === 'string' && STALE.test(value)) {
      failures.push(`${facts.name} (${slug}) ${field}: ${value}`)
    }
  }
}

if (failures.length) {
  console.error('Course facts still say "not played" for a course with a live review:')
  for (const f of failures) console.error(`  - ${f}`)
  console.error('Update the Course Master from the review (MMG Control Panel), then run .\\mmg.ps1 course-facts in mmg-tools.')
  process.exit(1)
}
console.log('Course facts check passed - no reviewed course is still marked as not played.')

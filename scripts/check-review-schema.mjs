#!/usr/bin/env node
// Fails when a course review's structured-data rating is outside the 1-5 scale
// the Review schema declares (bestRating 5, worstRating 1). Son Vida shipped
// with ratingValue 7 (Andy's 7/10 typed unconverted) and Google Search Console
// emailed "Rating value is out of range (in reviewRating)" on 2026-10-12.
//
// The reviews state Andy's rating out of 10; ratingValue is that halved.

import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(fileURLToPath(new URL('..', import.meta.url)))
const file = 'src/app/(en)/guides/GuidePostView.jsx'
const text = readFileSync(path.join(root, file), 'utf8')

const start = text.indexOf('const COURSE_REVIEW_DETAILS = {')
const end = text.indexOf('\n}', start)
if (start === -1 || end === -1) {
  console.error(`check:review-schema could not find COURSE_REVIEW_DETAILS in ${file}`)
  process.exit(1)
}

const failures = []
let count = 0
for (const m of text.slice(start, end).matchAll(/'([a-z0-9-]+)': \{[^}]*?ratingValue:\s*([0-9.]+)/g)) {
  count += 1
  const value = Number(m[2])
  if (!(value >= 1 && value <= 5)) failures.push(`${m[1]}: ratingValue ${m[2]}`)
}
if (count === 0) {
  console.error('check:review-schema found no ratingValue entries, so the pattern needs updating')
  process.exit(1)
}
if (failures.length) {
  console.error('Review schema rating outside the 1-5 scale (halve the /10 rating):')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}
console.log(`Review schema check passed - ${count} course review rating(s) are within 1-5.`)

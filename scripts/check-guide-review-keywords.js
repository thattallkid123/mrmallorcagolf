const { pathToFileURL } = require('url')
const path = require('path')

function extractParValue(text) {
  const match = text.match(/(?:Par|标准杆)\s*([0-9]+)/i)
  return match ? Number(match[1]) : null
}

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const [{ GUIDES_CONTENT }, { SCORECARD_DATA }, { GOLF_COURSE_DATA }] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'guides-content.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'scorecard-data.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'golf-courses-data.js')).href),
  ])

  // Derived, not typed: a review's course is whichever course entry carries its reviewSlug.
  const REVIEW_SLUG_TO_COURSE = {}
  for (const region of GOLF_COURSE_DATA) {
    for (const course of region.courses) {
      if (course.reviewSlug) REVIEW_SLUG_TO_COURSE[course.reviewSlug] = course.name
    }
  }

  const issues = []

  for (const [locale, content] of Object.entries(GUIDES_CONTENT)) {
    for (const guide of content.liveGuides || []) {
      const courseName = REVIEW_SLUG_TO_COURSE[guide.slug]
      if (!courseName) continue

      const expectedPar = SCORECARD_DATA[courseName]?.par
      if (!Number.isFinite(expectedPar)) {
        issues.push(`${locale}:${guide.slug} has no par in scorecard data for "${courseName}", so its keywords cannot be verified`)
        continue
      }

      const keywordPar = extractParValue(guide.keywords || '')
      if (keywordPar != null && keywordPar !== expectedPar) {
        issues.push(`${locale}:${guide.slug} keywords say Par ${keywordPar}, scorecard says Par ${expectedPar}`)
      }
    }
  }

  if (issues.length > 0) {
    console.error('Guide review keyword issues found:')
    issues.forEach((issue) => console.error(`- ${issue}`))
    process.exit(1)
  }

  console.log('Guide review keyword par values match scorecard data.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

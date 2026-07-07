const { pathToFileURL } = require('url')
const path = require('path')

function normalizeSet(values) {
  return [...values].sort((a, b) => a - b).join(',')
}

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const [{ SCORECARD_DATA }, { GOLF_COURSE_DATA }] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'scorecard-data.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'golf-courses-data.js')).href),
  ])

  const issues = []
  const courseNames = GOLF_COURSE_DATA.flatMap((region) => region.courses.map((course) => course.name))
  const courseNameSet = new Set(courseNames)
  const scorecardNames = Object.keys(SCORECARD_DATA)

  for (const name of courseNames) {
    if (!SCORECARD_DATA[name]) {
      issues.push(`Missing scorecard data for course listing: ${name}`)
    }
  }

  for (const name of scorecardNames) {
    if (!courseNameSet.has(name)) {
      issues.push(`Scorecard course is not in GOLF_COURSE_DATA: ${name}`)
    }
  }

  for (const [name, scorecard] of Object.entries(SCORECARD_DATA)) {
    const expectedHoleCount = scorecard.holes.length === 9 ? 9 : 18
    const expectedStrokeIndexes = new Set(Array.from({ length: expectedHoleCount }, (_, index) => index + 1))
    const parSum = scorecard.holes.reduce((sum, [par]) => sum + par, 0)
    const strokeIndexes = new Set(scorecard.holes.map(([, strokeIndex]) => strokeIndex))

    if (![9, 18].includes(scorecard.holes.length)) {
      issues.push(`${name}: expected 9 or 18 holes, found ${scorecard.holes.length}`)
    }

    if (parSum !== scorecard.par) {
      issues.push(`${name}: par total ${scorecard.par} does not match hole sum ${parSum}`)
    }

    if (normalizeSet(strokeIndexes) !== normalizeSet(expectedStrokeIndexes)) {
      issues.push(`${name}: stroke indexes should be 1-${expectedHoleCount}, found ${normalizeSet(strokeIndexes)}`)
    }
  }

  for (const region of GOLF_COURSE_DATA) {
    for (const course of region.courses) {
      const scorecard = SCORECARD_DATA[course.name]
      if (!scorecard) continue

      const parPill = course.pills.find((pill) => /Par\s+\d+/i.test(pill))
      const displayPar = parPill?.match(/Par\s+(\d+)/i)?.[1]

      if (displayPar && Number(displayPar) !== scorecard.par && course.name !== 'Palma Pitch & Putt') {
        issues.push(`${course.name}: card displays Par ${displayPar}, scorecard master is Par ${scorecard.par}`)
      }
    }
  }

  if (issues.length > 0) {
    console.error('Scorecard data issues found:')
    issues.forEach((issue) => console.error(`- ${issue}`))
    process.exit(1)
  }

  console.log(`Scorecard data covers ${scorecardNames.length} courses and matches course listings.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

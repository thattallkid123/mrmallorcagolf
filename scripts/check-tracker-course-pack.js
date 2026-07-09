const { pathToFileURL } = require('url')
const path = require('path')

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const [{ MALLORCA_TRACKER_COURSES }, { SCORECARD_DATA }] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'mallorca-tracker-courses.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'scorecard-data.js')).href),
  ])

  const issues = []
  const trackerByName = Object.fromEntries(
    MALLORCA_TRACKER_COURSES.map((course) => [course.canonicalName || course.name, course])
  )
  const scorecardNames = Object.keys(SCORECARD_DATA)

  for (const name of scorecardNames) {
    const trackerCourse = trackerByName[name]
    const scorecard = SCORECARD_DATA[name]

    if (!trackerCourse) {
      issues.push(`Tracker pack missing course: ${name}`)
      continue
    }

    if (trackerCourse.holes.length !== scorecard.holes.length) {
      issues.push(`${name}: tracker has ${trackerCourse.holes.length} holes but scorecard has ${scorecard.holes.length}`)
    }

    if (trackerCourse.tees.length !== scorecard.tees.length) {
      issues.push(`${name}: tracker has ${trackerCourse.tees.length} tees but scorecard has ${scorecard.tees.length}`)
    }

    for (let index = 0; index < scorecard.holes.length; index += 1) {
      const [par, strokeIndex] = scorecard.holes[index]
      const trackerHole = trackerCourse.holes[index]
      if (!trackerHole) continue

      if (trackerHole.par !== par || trackerHole.strokeIndex !== strokeIndex) {
        issues.push(`${name}: hole ${index + 1} par/SI mismatch in tracker`)
      }
    }

    for (const tee of scorecard.tees) {
      const trackerTee = trackerCourse.tees.find((item) => item.name === tee.name)
      if (!trackerTee) {
        issues.push(`${name}: tracker missing tee ${tee.name}`)
        continue
      }

      if (trackerTee.totalLengthMeters !== tee.totalLengthMeters) {
        issues.push(`${name}: tee ${tee.name} total length mismatch`)
      }

      if (trackerTee.courseRating !== tee.courseRating || trackerTee.slope !== tee.slope) {
        issues.push(`${name}: tee ${tee.name} rating/slope mismatch`)
      }

      tee.holeLengthsMeters.forEach((length, index) => {
        const trackerLength = trackerCourse.holes[index]?.tees?.[tee.name]?.lengthMeters
        if (trackerLength !== length) {
          issues.push(`${name}: tee ${tee.name} hole ${index + 1} length mismatch`)
        }
      })
    }
  }

  for (const name of Object.keys(trackerByName)) {
    if (!SCORECARD_DATA[name]) {
      issues.push(`Tracker course is not in scorecard master: ${name}`)
    }
  }

  if (issues.length > 0) {
    console.error('Tracker course pack issues found:')
    issues.forEach((issue) => console.error(`- ${issue}`))
    process.exit(1)
  }

  console.log(`Tracker pack matches scorecard data for ${MALLORCA_TRACKER_COURSES.length} courses.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

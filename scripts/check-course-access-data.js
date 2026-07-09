const { pathToFileURL } = require('url')
const path = require('path')

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const [
    { COURSE_ACCESS_ALIASES, COURSE_ACCESS_LIST, COURSE_ACCESS_BY_NAME, resolveCourseAccessName },
    { GOLF_COURSE_DATA },
    { SCORECARD_DATA },
  ] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'course-access-data.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'golf-courses-data.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'scorecard-data.js')).href),
  ])

  const issues = []
  const allowedAccessTypes = new Set(['public', 'members_arranged', 'hotel_guests'])
  const liveCourseNames = GOLF_COURSE_DATA.flatMap((region) => region.courses.map((course) => course.name))
  const sortedNames = [...COURSE_ACCESS_LIST].map((entry) => entry.name)
  const alphabeticNames = [...sortedNames].sort((a, b) => a.localeCompare(b))

  if (sortedNames.join('|') !== alphabeticNames.join('|')) {
    issues.push('COURSE_ACCESS_LIST is not alphabetical by course name.')
  }

  const resolvedLiveCourseNames = liveCourseNames.map((name) => resolveCourseAccessName(name) || name)

  for (const name of liveCourseNames) {
    if (!resolveCourseAccessName(name)) {
      issues.push(`Missing course-access data for live course: ${name}`)
    }
  }

  for (const entry of COURSE_ACCESS_LIST) {
    if (!resolvedLiveCourseNames.includes(entry.name)) {
      issues.push(`Course-access entry is not present in GOLF_COURSE_DATA: ${entry.name}`)
    }

    if (!allowedAccessTypes.has(entry.accessType)) {
      issues.push(`${entry.name}: invalid accessType "${entry.accessType}"`)
    }

    if (typeof entry.holes !== 'number' || ![9, 18].includes(entry.holes)) {
      issues.push(`${entry.name}: holes must be 9 or 18`)
    }

    if (entry.handicapRequired) {
      if (!Number.isFinite(entry.handicapMen) && !Number.isFinite(entry.handicapWomen)) {
        issues.push(`${entry.name}: handicapRequired is true but no handicap limit is set`)
      }
    } else if (entry.certificateRequired) {
      issues.push(`${entry.name}: certificateRequired cannot be true when handicapRequired is false`)
    }

    const scorecard = SCORECARD_DATA[entry.name]
    if (scorecard && scorecard.holes.length !== entry.holes) {
      issues.push(`${entry.name}: access data says ${entry.holes} holes but scorecard has ${scorecard.holes.length}`)
    }
  }

  for (const [alias, canonicalName] of Object.entries(COURSE_ACCESS_ALIASES)) {
    if (!COURSE_ACCESS_BY_NAME[canonicalName]) {
      issues.push(`Alias "${alias}" points to unknown course "${canonicalName}"`)
      continue
    }

    const resolved = resolveCourseAccessName(alias)
    if (resolved !== canonicalName) {
      issues.push(`Alias "${alias}" resolves to "${resolved}" instead of "${canonicalName}"`)
    }
  }

  if (issues.length > 0) {
    console.error('Course access data issues found:')
    issues.forEach((issue) => console.error(`- ${issue}`))
    process.exit(1)
  }

  console.log(`Course access data covers ${COURSE_ACCESS_LIST.length} live courses with valid aliases.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

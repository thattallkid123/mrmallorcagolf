const path = require('path')
const { pathToFileURL } = require('url')

function normalizeId(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const courseDataPath = path.join(repoRoot, 'src', 'lib', 'golf-courses-data.js')
  const guidePostPath = path.join(repoRoot, 'src', 'lib', 'guide-post-content.js')

  const [{ getHomeContent }, courseDataModule, guidePostModule, siteModule] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'homepage-content.js')).href),
    import(pathToFileURL(courseDataPath).href),
    import(pathToFileURL(guidePostPath).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'golf-courses-helpers.js')).href),
  ])

  const homeContent = getHomeContent('en')
  const featuredCourseNames = (homeContent.courses?.items || []).map((item) => item.name).filter(Boolean)
  const uniqueFeatured = [...new Set(featuredCourseNames)]
  const destinationNames = new Set(Object.keys(siteModule.COURSE_DESTINATIONS))
  const missing = uniqueFeatured.filter((name) => !destinationNames.has(name))

  if (missing.length > 0) {
    console.error('Missing course destinations for featured homepage courses:')
    missing.forEach((name) => console.error(`- ${name}`))
    process.exit(1)
  }

  const courseIds = new Set((courseDataModule.GOLF_COURSES_DATA || []).map((course) => normalizeId(course.name)))
  const reviewSlugs = new Set(Object.keys(guidePostModule.GUIDE_POST_CONTENT || {}))
  const invalidDestinations = []

  for (const [name, destination] of Object.entries(siteModule.COURSE_DESTINATIONS)) {
    if (destination.type === 'review' && !reviewSlugs.has(destination.slug)) {
      invalidDestinations.push(`${name}: missing review slug ${destination.slug}`)
    }

    if (destination.type === 'guide' && !courseIds.has(destination.id)) {
      invalidDestinations.push(`${name}: missing course-guide anchor ${destination.id}`)
    }
  }

  if (invalidDestinations.length > 0) {
    console.error('Invalid course destination mappings found:')
    invalidDestinations.forEach((item) => console.error(`- ${item}`))
    process.exit(1)
  }

  const anchorMismatches = []

  for (const course of courseDataModule.GOLF_COURSES_DATA || []) {
    const courseName = course.name
    const expectedId = siteModule.slugifyCourseName(courseName)
    const shortId = siteModule.getShortCourseId(courseName)

    if (shortId !== expectedId) {
      anchorMismatches.push(`${courseName}: short anchor ${shortId} does not match card id ${expectedId}`)
    }
  }

  if (anchorMismatches.length > 0) {
    console.error('Course anchor mappings are out of sync:')
    anchorMismatches.forEach((item) => console.error(`- ${item}`))
    process.exit(1)
  }

  console.log('Featured homepage course destinations and course anchors look complete and valid.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

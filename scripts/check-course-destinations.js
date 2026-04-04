const fs = require('fs')
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
  const homepagePath = path.join(repoRoot, 'src', 'lib', 'homepage-content.js')
  const courseDataPath = path.join(repoRoot, 'src', 'lib', 'golf-courses-data.js')
  const guidePostPath = path.join(repoRoot, 'src', 'lib', 'guide-post-content.js')

  const homepageSource = fs.readFileSync(homepagePath, 'utf8')
  const courseDataSource = fs.readFileSync(courseDataPath, 'utf8')
  const guidePostSource = fs.readFileSync(guidePostPath, 'utf8')

  const siteModule = await import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'golf-courses-helpers.js')).href)
  const englishFeaturedBlock = homepageSource.match(
    /en:\s*\{[\s\S]*?courses:\s*\{[\s\S]*?items:\s*\[([\s\S]*?)\n\s*\],\n\s*\},\n\s*experience:/
  )

  if (!englishFeaturedBlock) {
    console.error('Could not locate the English featured-course block in homepage-content.js')
    process.exit(1)
  }

  const featuredCourseNames = [...englishFeaturedBlock[1].matchAll(/name:\s*'([^']+)'/g)].map((match) => match[1])
  const uniqueFeatured = [...new Set(featuredCourseNames)]
  const destinationNames = new Set(Object.keys(siteModule.COURSE_DESTINATIONS))
  const missing = uniqueFeatured.filter((name) => !destinationNames.has(name))

  if (missing.length > 0) {
    console.error('Missing course destinations for featured homepage courses:')
    missing.forEach((name) => console.error(`- ${name}`))
    process.exit(1)
  }

  const courseIds = new Set([...courseDataSource.matchAll(/name:\s*'([^']+)'/g)].map((match) => normalizeId(match[1])))
  const reviewSlugs = new Set([...guidePostSource.matchAll(/^  '([^']+)': \{$/gm)].map((match) => match[1]))
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

  for (const match of courseDataSource.matchAll(/name:\s*'([^']+)'/g)) {
    const courseName = match[1]
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

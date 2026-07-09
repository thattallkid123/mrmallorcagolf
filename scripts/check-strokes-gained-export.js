const fs = require('fs')
const path = require('path')
const vm = require('vm')
const { pathToFileURL } = require('url')

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const mmgToolsRoot = path.join(repoRoot, '..', 'mmg-tools')
  const exportPath = path.join(mmgToolsRoot, 'strokes-gained', 'course-data.js')

  const [{ MALLORCA_TRACKER_COURSES }] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'mallorca-tracker-courses.js')).href),
  ])

  if (!fs.existsSync(exportPath)) {
    console.error(`Missing strokes-gained export: ${exportPath}`)
    process.exit(1)
  }

  const source = fs.readFileSync(exportPath, 'utf8')
  const sandbox = { window: {} }
  vm.createContext(sandbox)
  vm.runInContext(source, sandbox)

  const exportedCourses = sandbox.window.MMG_STROKES_GAINED_COURSES

  if (!Array.isArray(exportedCourses)) {
    console.error('Strokes-gained export does not define window.MMG_STROKES_GAINED_COURSES')
    process.exit(1)
  }

  const expected = JSON.stringify(MALLORCA_TRACKER_COURSES)
  const actual = JSON.stringify(exportedCourses)

  if (expected !== actual) {
    console.error('Strokes-gained export is stale: exported course pack differs from mallorca-tracker-courses.js')
    process.exit(1)
  }

  console.log(`Strokes-gained export matches tracker pack for ${exportedCourses.length} courses.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

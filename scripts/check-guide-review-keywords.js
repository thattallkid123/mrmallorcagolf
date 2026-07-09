const { pathToFileURL } = require('url')
const path = require('path')

const REVIEW_SLUG_TO_COURSE = {
  'alcanada-review': 'Club de Golf Alcanada',
  'golf-andratx-review': 'Golf de Andratx',
  'santa-ponsa-1-review': 'Golf Santa Ponsa 1',
  'son-antem-west-review': 'Golf Son Antem West',
  'son-gual-review': 'Son Gual',
  'son-muntaner-review': 'Son Muntaner',
  'son-termes-review': 'Golf Son Termes',
  't-golf-calvia-review': 'T Golf Calvià (Poniente)',
}

function extractParValue(text) {
  const match = text.match(/(?:Par|æ ‡å‡†æ†)\s*([0-9]+)/i)
  return match ? Number(match[1]) : null
}

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const [{ GUIDES_CONTENT }, { SCORECARD_DATA }] = await Promise.all([
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'guides-content.js')).href),
    import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'scorecard-data.js')).href),
  ])

  const issues = []

  for (const [locale, content] of Object.entries(GUIDES_CONTENT)) {
    for (const guide of content.liveGuides || []) {
      const courseName = REVIEW_SLUG_TO_COURSE[guide.slug]
      if (!courseName) continue

      const expectedPar = SCORECARD_DATA[courseName]?.par
      if (!Number.isFinite(expectedPar)) continue

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

const fs = require('fs')
const path = require('path')

const repoRoot = path.join(__dirname, '..')
const publicRoot = path.join(repoRoot, 'public')

const SOURCE_FILES = [
  'src/lib/homepage-content.js',
  'src/lib/guide-article-content.js',
  'src/lib/guide-article-content-localized.js',
  'src/lib/guide-post-content.js',
  'src/lib/guide-post-content-localized.js',
  'src/lib/golf-courses-data.js',
  'src/lib/golf-courses-content.js',
  'src/lib/golf-courses-translations.js',
  'src/app/HomePageInner.jsx',
  'src/components/FillImageFrame.jsx',
]

const IMAGE_REGEXES = [
  /(?:src|img|imagePath):\s*'((?:\/images\/)[^']+)'/g,
  /backgroundImage:\s*`url\((\/images\/[^)]+)\)`/g,
  /backgroundImage:\s*"url\((\/images\/[^)]+)\)"/g,
  /backgroundImage:\s*'url\((\/images\/[^)]+)\)'/g,
]

const missing = []

for (const relativeFile of SOURCE_FILES) {
  const absoluteFile = path.join(repoRoot, relativeFile)
  const source = fs.readFileSync(absoluteFile, 'utf8')
  const matches = IMAGE_REGEXES.flatMap((regex) => [...source.matchAll(regex)])

  for (const match of matches) {
    const imagePath = match[1]
    const absoluteImage = path.join(publicRoot, imagePath.replace(/^\//, ''))

    if (!fs.existsSync(absoluteImage)) {
      missing.push({ file: relativeFile, imagePath })
    }
  }
}

if (missing.length > 0) {
  console.error('Missing local image references found:')
  missing.forEach(({ file, imagePath }) => console.error(`- ${file}: ${imagePath}`))
  process.exit(1)
}

console.log('Local image references look complete.')

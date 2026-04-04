const fs = require('fs')
const path = require('path')
const { pathToFileURL } = require('url')

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const siteModule = await import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'site.js')).href)
  const slugs = [...siteModule.REVIEW_POST_SLUGS, ...siteModule.ARTICLE_SLUGS]
  const missing = []

  for (const locale of siteModule.LOCALE_PREFIXES) {
    for (const slug of slugs) {
      const relativePath = path.join('src', 'app', locale, 'guides', slug, 'page.jsx')
      const absolutePath = path.join(repoRoot, relativePath)

      if (!fs.existsSync(absolutePath)) {
        missing.push(relativePath)
      }
    }
  }

  if (missing.length > 0) {
    console.error('Missing localized guide route files:')
    missing.forEach((relativePath) => console.error(`- ${relativePath}`))
    process.exit(1)
  }

  console.log('Localized guide route files look complete.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

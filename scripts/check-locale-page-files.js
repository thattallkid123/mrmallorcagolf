const fs = require('fs')
const path = require('path')
const { pathToFileURL } = require('url')

async function main() {
  const repoRoot = path.join(__dirname, '..')
  const siteModule = await import(pathToFileURL(path.join(repoRoot, 'src', 'lib', 'site.js')).href)
  const missingDynamicRoutes = []

  for (const locale of siteModule.LOCALE_PREFIXES) {
    const relativePath = path.join('src', 'app', locale, 'guides', '[slug]', 'page.jsx')
    const absolutePath = path.join(repoRoot, relativePath)

    if (!fs.existsSync(absolutePath)) {
      missingDynamicRoutes.push(relativePath)
    }
  }

  if (missingDynamicRoutes.length > 0) {
    console.error('Missing localized dynamic guide route files:')
    missingDynamicRoutes.forEach((relativePath) => console.error(`- ${relativePath}`))
    process.exit(1)
  }

  console.log('Localized dynamic guide route files look complete.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

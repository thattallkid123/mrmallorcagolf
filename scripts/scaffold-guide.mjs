/**
 * scaffold-guide.mjs
 *
 * Step 3 of the /publish-course-guide skill ("Routing") involves copying an
 * existing review's page.jsx and adding a COURSE_REVIEW_DETAILS entry by
 * hand. This scaffolds both from the content already entered in
 * guide-post-content.js, so there's nothing left to type but the facts that
 * don't exist anywhere yet (rating, locality).
 *
 * Prerequisite: the slug must already have an entry in
 * src/lib/guide-post-content.js (step 2 of the skill) — this script reads
 * the title from there but does not write guide content.
 *
 * Usage:
 *   node scripts/scaffold-guide.mjs --slug son-new-review --name "Golf Son New" --locality "Palma" [--rating 4]
 *
 * For course REVIEWS only (guide-post-content.js / COURSE_REVIEW_DETAILS).
 * Guide ARTICLES use a different route pattern (ARTICLE_SLUGS in site.js)
 * and are not covered here.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const GUIDE_VIEW_PATH = join(REPO_ROOT, 'src/app/(en)/guides/GuidePostView.jsx')

function importLib(rel) {
  return import(pathToFileURL(join(REPO_ROOT, rel)).href)
}

function pageTemplate(slug) {
  return `import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../GuidePostView'

const content = getGuidePostContent('${slug}', 'en')

export const metadata = buildGuidePostMetadata({
  slug: '${slug}',
  locale: 'en',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="en" meta={content.meta} blocks={content.blocks} />
}
`
}

async function main() {
  const args = process.argv.slice(2)
  const get = (flag) => {
    const i = args.indexOf(flag)
    return i === -1 ? null : args[i + 1]
  }

  const slug = get('--slug')
  const name = get('--name')
  const locality = get('--locality')
  const rating = get('--rating') || '4'

  if (!slug || !name || !locality) {
    console.error('Usage: node scripts/scaffold-guide.mjs --slug <slug> --name "<official course name>" --locality "<town>" [--rating <1-5>]')
    process.exit(1)
  }

  const { GUIDE_POST_CONTENT } = await importLib('src/lib/guide-post-content.js')
  if (!GUIDE_POST_CONTENT?.[slug]?.en?.metadata?.title) {
    console.error(`'${slug}' has no entry in src/lib/guide-post-content.js yet. Do step 2 of the publish-course-guide skill first.`)
    process.exit(1)
  }

  // 1. page.jsx
  const pageDir = join(REPO_ROOT, 'src/app/(en)/guides', slug)
  const pagePath = join(pageDir, 'page.jsx')
  if (existsSync(pagePath)) {
    console.log(`= src/app/(en)/guides/${slug}/page.jsx: already exists, skipped`)
  } else {
    mkdirSync(pageDir, { recursive: true })
    writeFileSync(pagePath, pageTemplate(slug))
    console.log(`+ src/app/(en)/guides/${slug}/page.jsx: created`)
  }

  // 2. COURSE_REVIEW_DETAILS entry in GuidePostView.jsx
  let viewText = readFileSync(GUIDE_VIEW_PATH, 'utf8')
  if (new RegExp(`'${slug}':\\s*\\{`).test(viewText)) {
    console.log(`= GuidePostView.jsx: COURSE_REVIEW_DETAILS entry already exists, skipped`)
  } else {
    const marker = /const COURSE_REVIEW_DETAILS = \{\n/
    if (!marker.test(viewText)) {
      console.error('Could not find "const COURSE_REVIEW_DETAILS = {" in GuidePostView.jsx — add the entry by hand.')
      process.exit(1)
    }
    const entry = `  '${slug}': {\n    name: '${name}',\n    ratingValue: ${rating},\n    addressLocality: '${locality}',\n  },\n`
    viewText = viewText.replace(marker, (m) => m + entry)
    writeFileSync(GUIDE_VIEW_PATH, viewText)
    console.log(`+ GuidePostView.jsx: COURSE_REVIEW_DETAILS entry added`)
  }

  console.log('\nStill manual: discovery surfaces (run `node scripts/sync-discovery.mjs --add ' + slug + '`), photos, and the OG verify step.')
}

main()

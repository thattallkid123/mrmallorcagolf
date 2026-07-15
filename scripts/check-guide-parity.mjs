/**
 * check-guide-parity.mjs
 *
 * Guardrail for guide translation drift.
 *
 * English guide content owns canonical block structure: order, type, media
 * layout, and non-localized behavior. Locale files are overlays for translated
 * copy plus the few locale-specific link/media values needed to preserve the
 * current pages.
 *
 * For every translated guide, this check verifies:
 *   - the locale entry exists
 *   - the locale overlay has one block slot per canonical English block
 *   - localized blocks do not reintroduce structural fields such as `type`
 *
 * Run: npm run check:guide-parity
 */

import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// 'slug:locale' entries allowed to have no translation yet (staged rollouts).
const MISSING_ALLOW = new Set([])

const STRUCTURAL_BLOCK_KEYS = new Set(['type', 'containerStyle', 'imageStyle', 'fit'])

function importLib(rel) {
  return import(pathToFileURL(join(REPO_ROOT, rel)).href)
}

function structuralBlockKeys(block) {
  if (!block || typeof block !== 'object') return []
  return Object.keys(block).filter((key) => STRUCTURAL_BLOCK_KEYS.has(key))
}

function compareGroup({ label, slugs, locales, getEnglish, getLocalized, enOnlySlugs }) {
  const failures = []

  for (const slug of slugs) {
    const english = getEnglish(slug)
    if (!english) {
      failures.push({ kind: 'orphan-slug', label, slug, detail: 'localized content exists but no English master entry' })
      continue
    }

    const englishBlockCount = english?.blocks?.length || 0

    for (const locale of locales) {
      const key = `${slug}:${locale}`
      const localized = getLocalized(slug, locale)

      if (!localized) {
        if (enOnlySlugs?.has(slug) || MISSING_ALLOW.has(key)) continue
        failures.push({ kind: 'missing-locale', label, slug, locale, detail: `no ${locale} entry (falls back to English)` })
        continue
      }

      const localizedBlockCount = localized?.blocks?.length || 0
      if (englishBlockCount !== localizedBlockCount) {
        failures.push({
          kind: 'block-count-mismatch',
          label,
          slug,
          locale,
          detail: `English has ${englishBlockCount} blocks; ${locale} overlay has ${localizedBlockCount}. Add/remove overlay slots to match the canonical structure.`,
        })
      }

      localized?.blocks?.forEach((block, index) => {
        const structuralKeys = structuralBlockKeys(block)
        if (structuralKeys.length === 0) return
        failures.push({
          kind: 'structural-overlay',
          label,
          slug,
          locale,
          detail: `block ${index} contains structural key(s): ${structuralKeys.join(', ')}. Keep structure in the English guide content file.`,
        })
      })
    }
  }

  return failures
}

async function main() {
  const [site, articlesEn, articlesLoc, postsEn, postsLoc] = await Promise.all([
    importLib('src/lib/site.js'),
    importLib('src/lib/guide-article-content.js'),
    importLib('src/lib/guide-article-content-localized.js'),
    importLib('src/lib/guide-post-content.js'),
    importLib('src/lib/guide-post-content-localized.js'),
  ])

  const locales = site.ALL_LOCALES.filter((locale) => locale !== 'en')

  const articleSlugs = new Set([
    ...site.ARTICLE_SLUGS,
    ...Object.keys(articlesEn.GUIDE_ARTICLE_CONTENT),
    ...Object.keys(articlesLoc.LOCALIZED_GUIDE_ARTICLE_CONTENT),
  ])
  const postSlugs = new Set([
    ...site.REVIEW_POST_SLUGS,
    ...site.EN_ONLY_REVIEW_POST_SLUGS,
    ...Object.keys(postsEn.GUIDE_POST_CONTENT),
    ...Object.keys(postsLoc.LOCALIZED_GUIDE_POST_CONTENT),
  ])

  const failures = [
    ...compareGroup({
      label: 'article',
      slugs: articleSlugs,
      locales,
      getEnglish: (slug) => articlesEn.getGuideArticleContent(slug, 'en'),
      getLocalized: (slug, locale) => articlesLoc.getLocalizedGuideArticleContent(slug, locale),
    }),
    ...compareGroup({
      label: 'post',
      slugs: postSlugs,
      locales,
      getEnglish: (slug) => postsEn.getGuidePostContent(slug, 'en'),
      getLocalized: (slug, locale) => postsLoc.getLocalizedGuidePostContent(slug, locale),
      enOnlySlugs: site.EN_ONLY_REVIEW_POST_SLUGS,
    }),
  ]

  const checked = (articleSlugs.size + postSlugs.size) * locales.length
  if (failures.length === 0) {
    console.log(
      `Guide parity check passed - ${articleSlugs.size} articles + ${postSlugs.size} posts x ${locales.length} locales (${checked} pairs), overlays match canonical English block counts.`,
    )
    return
  }

  console.error(`Guide parity check FAILED - ${failures.length} issue(s):\n`)
  for (const f of failures) {
    const where = f.locale ? `${f.slug} [${f.locale}]` : f.slug
    console.error(`  [${f.kind}] ${f.label} ${where}`)
    console.error(`    ${f.detail}\n`)
  }
  console.error(
    'Fix the localized overlay so it has one overlay slot per English block, and keep block type/order/layout in the English guide content file.',
  )
  process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

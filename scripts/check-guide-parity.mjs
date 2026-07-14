/**
 * check-guide-parity.mjs
 *
 * Guardrail for translation drift in the guide content. For every guide slug,
 * compares the section structure — the ordered sequence of block types and the
 * block count — of each localized version against the English master:
 *
 *   articles:  guide-article-content.js  vs  guide-article-content-localized.js
 *   posts:     guide-post-content.js     vs  guide-post-content-localized.js
 *
 * Why raw entries, not rendered output: the runtime merge (alignLocalizedBlocks)
 * silently drops EN blocks a translation is missing, so the live locale page
 * hides exactly the drift this check exists to catch. We therefore compare the
 * EN master objects against getLocalizedGuideArticleContent / -PostContent,
 * which return the raw localized entry with the file's own repair/injection
 * patches applied.
 *
 * Failure categories:
 *   structure-mismatch — a locale's block-type sequence differs from EN
 *   missing-locale     — a translated guide has no entry for a locale
 *                        (EN_ONLY_REVIEW_POST_SLUGS are exempt)
 *   orphan-slug        — localized content exists for a slug with no EN master
 *
 * Intentional divergences (e.g. a zh version restructured for the Chinese
 * audience) go in STRUCTURE_ALLOW below with a comment.
 *
 * Run: npm run check:guide-parity   (standalone — wire into check:content once
 * the existing translation drift it found on 2026-07-14 has been fixed)
 */

import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// 'slug:locale' entries whose structure is allowed to differ from EN on purpose.
const STRUCTURE_ALLOW = new Set([])

// 'slug:locale' entries allowed to have no translation yet (staged rollouts).
const MISSING_ALLOW = new Set([])

function importLib(rel) {
  return import(pathToFileURL(join(REPO_ROOT, rel)).href)
}

function typeSequence(content) {
  return (content?.blocks || []).map((block) => block?.type ?? '(untyped)')
}

function typeCounts(sequence) {
  const counts = {}
  for (const type of sequence) counts[type] = (counts[type] || 0) + 1
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([type, n]) => `${n} ${type}`)
    .join(', ')
}

function firstDivergence(enSeq, locSeq) {
  const max = Math.max(enSeq.length, locSeq.length)
  for (let i = 0; i < max; i++) {
    if (enSeq[i] !== locSeq[i]) {
      return { index: i, en: enSeq[i] ?? '(end)', loc: locSeq[i] ?? '(end)' }
    }
  }
  return null
}

function compareGroup({ label, slugs, locales, getEnglish, getLocalized, enOnlySlugs }) {
  const failures = []

  for (const slug of slugs) {
    const english = getEnglish(slug)
    if (!english) {
      failures.push({ kind: 'orphan-slug', label, slug, detail: 'localized content exists but no English master entry' })
      continue
    }
    const enSeq = typeSequence(english)

    for (const locale of locales) {
      const key = `${slug}:${locale}`
      const localized = getLocalized(slug, locale)

      if (!localized) {
        if (enOnlySlugs?.has(slug) || MISSING_ALLOW.has(key)) continue
        failures.push({ kind: 'missing-locale', label, slug, locale, detail: `no ${locale} entry (falls back to English)` })
        continue
      }

      if (STRUCTURE_ALLOW.has(key)) continue

      const locSeq = typeSequence(localized)
      if (enSeq.join('|') === locSeq.join('|')) continue

      const div = firstDivergence(enSeq, locSeq)
      failures.push({
        kind: 'structure-mismatch',
        label,
        slug,
        locale,
        detail:
          `en ${enSeq.length} blocks vs ${locale} ${locSeq.length} blocks; ` +
          `first divergence at block ${div.index} (en: ${div.en}, ${locale}: ${div.loc})\n` +
          `      en: ${typeCounts(enSeq)}\n` +
          `      ${locale}: ${typeCounts(locSeq)}`,
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

  // Union of the canonical slug sets and whatever the content files actually
  // hold, so an orphaned or unregistered entry still gets checked.
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
      getEnglish: (slug) => articlesEn.GUIDE_ARTICLE_CONTENT[slug],
      getLocalized: (slug, locale) => articlesLoc.getLocalizedGuideArticleContent(slug, locale),
    }),
    ...compareGroup({
      label: 'post',
      slugs: postSlugs,
      locales,
      getEnglish: (slug) => postsEn.GUIDE_POST_CONTENT[slug]?.en,
      getLocalized: (slug, locale) => postsLoc.getLocalizedGuidePostContent(slug, locale),
      enOnlySlugs: site.EN_ONLY_REVIEW_POST_SLUGS,
    }),
  ]

  const checked = (articleSlugs.size + postSlugs.size) * locales.length
  if (failures.length === 0) {
    console.log(
      `✅ Guide parity check passed — ${articleSlugs.size} articles + ${postSlugs.size} posts × ${locales.length} locales (${checked} pairs), structure matches English.`,
    )
    return
  }

  console.error(`❌ Guide parity check FAILED — ${failures.length} issue(s):\n`)
  for (const f of failures) {
    const where = f.locale ? `${f.slug} [${f.locale}]` : f.slug
    console.error(`  [${f.kind}] ${f.label} ${where}`)
    console.error(`    ${f.detail}\n`)
  }
  console.error(
    'Fix the translation so its block structure mirrors the English master.\n' +
      'If a divergence is intentional (e.g. a restructured zh version), add\n' +
      '"slug:locale" to STRUCTURE_ALLOW in scripts/check-guide-parity.mjs with a comment.',
  )
  process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

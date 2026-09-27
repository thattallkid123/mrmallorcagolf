/**
 * check-guide-pill-labels.mjs
 *
 * Guardrail against a specific class of locale drift: the English guide
 * article/review content gets restructured (blocks added, removed, or
 * reordered) but a locale overlay is never rebuilt to match. Because
 * `mergeGuideContent` overlays translated text onto the English block array
 * purely by position, a stale overlay can end up translating the WRONG
 * block — most visibly when leftover paragraph-length text lands in a
 * `facts`/`notes`/`list` item's short-label slot, rendering a full sentence
 * where the UI expects a two-to-four-word stat caption.
 *
 * Found 2026-09-27: the Son Muntaner review's es/de/fr/nl/sv/zh overlays
 * had exactly this — a facts pill rendering "Info / Respuesta rápida:
 * merece la pena reservar Son Muntaner?" instead of a value+caption pair.
 * check:guide-parity (block count) and check:i18n-release (English-leak
 * detection) both passed clean throughout, because neither checks that
 * translated content still means what the current English block means.
 *
 * This check is a blunt but effective proxy: a genuine stat-pill label or
 * notes/list label is short by construction (rendered as a small caption
 * under a large stat number, or as a bold heading above body text). Any
 * label far longer than the longest legitimate English label sitewide is
 * almost certainly misplaced body text, not a caption.
 *
 * Item shapes by block type (see guide-article-content.js / guide-post-
 * content.js authoring convention):
 *   - 'facts': items are [value, label]     -> label is items[i][1]
 *   - 'notes': items are [label, text]      -> label is items[i][0]
 *   - 'list':  items are {label, text}      -> label is items[i].label
 *
 * Run: npm run check:guide-pill-labels
 */

import { pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// Longest legitimate English label sitewide is "Guest green fee on the day
// we played" (37 chars) — some translations of it run to ~48 chars, so the
// threshold sits above that with headroom. A real label describes a stat or
// a short heading, never a sentence; genuine misalignment bugs (see the
// Son Muntaner incident above) produced labels 90+ chars long, comfortably
// clear of this line.
const MAX_LABEL_LENGTH = 55

function importLib(rel) {
  return import(pathToFileURL(join(REPO_ROOT, rel)).href)
}

function labelFromItem(blockType, item) {
  if (blockType === 'facts') return Array.isArray(item) ? item[1] : undefined
  if (blockType === 'notes') return Array.isArray(item) ? item[0] : undefined
  if (blockType === 'list') return item && typeof item === 'object' ? item.label : undefined
  return undefined
}

function checkBlocks({ label, slug, locale, blocks }) {
  const failures = []
  if (!Array.isArray(blocks)) return failures

  blocks.forEach((block, blockIndex) => {
    if (!block || !['facts', 'notes', 'list'].includes(block.type) || !Array.isArray(block.items)) return

    block.items.forEach((item, itemIndex) => {
      const text = labelFromItem(block.type, item)
      if (typeof text !== 'string') return
      if (text.length > MAX_LABEL_LENGTH) {
        failures.push({
          label,
          slug,
          locale,
          blockIndex,
          blockType: block.type,
          itemIndex,
          text,
        })
      }
    })
  })

  return failures
}

async function main() {
  const [site, articlesEn, postsEn] = await Promise.all([
    importLib('src/lib/site.js'),
    importLib('src/lib/guide-article-content.js'),
    importLib('src/lib/guide-post-content.js'),
  ])

  const locales = site.ALL_LOCALES

  const articleSlugs = Object.keys(articlesEn.GUIDE_ARTICLE_CONTENT)
  const postSlugs = Object.keys(postsEn.GUIDE_POST_CONTENT)

  const failures = []
  let checked = 0

  for (const slug of articleSlugs) {
    for (const locale of locales) {
      const content = articlesEn.getGuideArticleContent(slug, locale)
      checked += 1
      failures.push(...checkBlocks({ label: 'article', slug, locale, blocks: content?.blocks }))
    }
  }

  for (const slug of postSlugs) {
    for (const locale of locales) {
      const content = postsEn.getGuidePostContent(slug, locale)
      checked += 1
      failures.push(...checkBlocks({ label: 'post', slug, locale, blocks: content?.blocks }))
    }
  }

  if (failures.length === 0) {
    console.log(
      `Pill label length check passed - scanned ${checked} rendered page(s) (${articleSlugs.length} articles + ${postSlugs.length} posts x ${locales.length} locales), every facts/notes/list label is <= ${MAX_LABEL_LENGTH} chars.`,
    )
    return
  }

  console.error(`Pill label length check FAILED - ${failures.length} oversized label(s):\n`)
  for (const f of failures) {
    console.error(`  [${f.label}] ${f.slug} [${f.locale}] blocks[${f.blockIndex}] (${f.blockType}) items[${f.itemIndex}]`)
    console.error(`    "${f.text.slice(0, 80)}${f.text.length > 80 ? '…' : ''}" (${f.text.length} chars)\n`)
  }
  console.error(
    `A facts/notes/list label over ${MAX_LABEL_LENGTH} chars usually means a locale overlay is misaligned with the current English block order (see the comment at the top of this script for the Son Muntaner incident this guards against). Check the locale file's raw block array against the English block order and rebuild the overlay rather than trimming the text.`,
  )
  process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

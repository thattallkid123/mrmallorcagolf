import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { ARTICLE_SLUGS, REVIEW_POST_SLUGS, SITE_ORIGIN } from '../src/lib/site.js'
import { getGuideArticleContent } from '../src/lib/guide-article-content.js'
import { getGuidePostContent } from '../src/lib/guide-post-content.js'

const DEFAULT_OUTPUT_DIR = path.join(
  os.homedir(),
  'My Drive',
  'Mr Mallorca Golf',
  'Content',
  'Blog Content',
)

const OUTPUT_DIR = process.env.MMG_BLOG_EXPORT_DIR || DEFAULT_OUTPUT_DIR
const EXPORT_STARTED_AT = new Date()

const FILE_NAME_OVERRIDES = new Map([
  ['a-day-at-son-gual', 'Guide Article - A Day at Son Gual.txt'],
  ['alcanada-review', "Course Review - Club de Golf Alcanada - A PGA Professional's Honest Review (2026).txt"],
  ['best-golf-courses-mallorca', "Guide Article - The Best Golf Courses in Mallorca - A PGA Professional's Honest Guide (2026).txt"],
  ['best-time-play-golf-mallorca', 'Guide Article - The Best Time of Year to Play Golf in Mallorca - Month by Month (2026).txt'],
  ['golf-andratx-review', "Course Review - Golf de Andratx Review - A PGA Professional's Honest Take (2026).txt"],
  ['golf-club-hire-mallorca', 'Guide Article - Golf Club Hire in Mallorca - Everything You Need to Know (2026).txt'],
  ['golf-cost-mallorca', 'Guide Article - How Much Does Golf Cost In Mallorca - A Complete 2026 Breakdown.txt'],
  ['golf-trip-planning-mallorca', 'Guide Article - How to Plan the Perfect Golf Trip to Mallorca - Courses, Base & Tee Times.txt'],
  ['is-mallorca-good-for-golf', "Guide Article - Is Mallorca Good For Golf - A PGA Professional's Answer.txt"],
  ['santa-ponsa-1-review', "Course Review - Golf Santa Ponsa 1, Mallorca - A PGA Professional's Honest Review (2026).txt"],
  ['son-antem-west-review', "Course Review - Son Antem West Golf Club, Mallorca - A PGA Professional's Honest Review (2026).txt"],
  ['son-gual-review', 'Course Review - Son Gual Golf Mallorca Review 2026 - Is It Worth It - Green Fees Wind And Verdict.txt'],
  ['son-muntaner-review', 'Course Review - Son Muntaner Golf Mallorca Review 2026 - Best In Spain But Is It Worth It.txt'],
  ['son-termes-review', "Course Review - Son Termes Golf, Mallorca - A PGA Professional's Honest Review (2026).txt"],
  ['t-golf-calvia-review', "Course Review - T Golf Calvià Review - A PGA Professional's Honest Take (2026).txt"],
])

function stripHtml(value = '') {
  return String(value)
    .replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, '$2 ($1)')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>\s*<p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&euro;/gi, 'EUR')
    .replace(/\s+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function safeFileName(title) {
  return stripHtml(title)
    .replace(/[<>:"/\\|?*]/g, ' - ')
    .replace(/\s*&\s*/g, ' And ')
    .replace(/\s+-\s+-\s+/g, ' - ')
    .replace(/\s+/g, ' ')
    .replace(/\.$/, '')
    .trim()
    .slice(0, 170)
}

function absoluteUrl(value) {
  if (!value) return ''
  if (/^https?:\/\//i.test(value)) return value
  return `${SITE_ORIGIN}${value.startsWith('/') ? value : `/${value}`}`
}

function pushLine(lines, value = '') {
  const clean = stripHtml(value)
  if (clean) lines.push(clean)
}

function renderTable(block) {
  const rows = []
  if (Array.isArray(block.headers)) rows.push(block.headers)
  if (Array.isArray(block.rows)) rows.push(...block.rows)
  if (!rows.length) return []

  return rows.map((row) => row.map((cell) => stripHtml(cell)).join(' | '))
}

function renderListItems(items = []) {
  return items
    .map((item) => {
      if (Array.isArray(item)) return `- ${item.map((part) => stripHtml(part)).filter(Boolean).join(': ')}`
      if (typeof item === 'object' && item !== null) {
        const label = stripHtml(item.label)
        const text = stripHtml(item.text)
        return `- ${[label, text].filter(Boolean).join(' ')}`
      }
      return `- ${stripHtml(item)}`
    })
    .filter((line) => line !== '- ')
}

function renderBlock(block) {
  const lines = []

  switch (block.type) {
    case 'heading':
      pushLine(lines, `\n## ${block.text}`)
      break
    case 'subheading':
      pushLine(lines, `\n### ${block.text}`)
      break
    case 'paragraph':
      pushLine(lines, block.text)
      break
    case 'image':
      pushLine(lines, `Image: ${block.alt || block.src}`)
      pushLine(lines, absoluteUrl(block.src))
      pushLine(lines, block.caption ? `Caption: ${block.caption}` : '')
      break
    case 'splitImages':
      for (const item of block.items || []) {
        pushLine(lines, `Image: ${item.alt || item.src}`)
        pushLine(lines, absoluteUrl(item.src))
        pushLine(lines, item.caption ? `Caption: ${item.caption}` : '')
      }
      break
    case 'facts':
      lines.push('\nFacts')
      lines.push(...renderListItems(block.items))
      break
    case 'notes':
      pushLine(lines, `\n${block.title || 'Notes'}`)
      lines.push(...renderListItems(block.items))
      break
    case 'list':
      lines.push(...renderListItems(block.items))
      break
    case 'table':
      lines.push('\nTable')
      lines.push(...renderTable(block))
      break
    case 'pull':
    case 'quoteBox':
      pushLine(lines, `Quote: ${block.text}`)
      pushLine(lines, block.attribution ? `Attribution: ${block.attribution}` : '')
      break
    case 'cta':
      pushLine(lines, `CTA: ${block.text}`)
      pushLine(lines, block.linkLabel ? `Link: ${block.linkLabel} ${absoluteUrl(block.href)}` : absoluteUrl(block.href))
      break
    default:
      pushLine(lines, JSON.stringify(block))
      break
  }

  return lines.filter(Boolean)
}

function renderContent({ kind, slug, content }) {
  const title = content.meta?.title || content.metadata?.title || slug
  const canonical = content.metadata?.canonical || `${SITE_ORIGIN}/guides/${slug}`
  const description = content.metadata?.description || content.meta?.intro || ''
  const lines = [
    title,
    '='.repeat(stripHtml(title).length),
    '',
    `Source: Mr Mallorca Golf live site content module`,
    `Type: ${kind}`,
    `Slug: ${slug}`,
    `URL: ${canonical}`,
    `Updated on site: ${content.meta?.updated || 'Not specified'}`,
    `Read time: ${content.meta?.readTime || 'Not specified'}`,
    `Exported: ${EXPORT_STARTED_AT.toISOString()}`,
    '',
  ]

  pushLine(lines, `Description: ${description}`)
  pushLine(lines, `Intro: ${content.meta?.intro || ''}`)

  if (content.metadata?.image || content.metadata?.imagePath) {
    lines.push('')
    pushLine(lines, `Hero image: ${absoluteUrl(content.metadata.image || content.metadata.imagePath)}`)
    pushLine(lines, `Hero image alt: ${content.metadata.imageAlt || ''}`)
  }

  lines.push('\nContent')
  lines.push('-------')

  for (const block of content.blocks || []) {
    lines.push(...renderBlock(block))
    lines.push('')
  }

  if (content.meta?.related?.length) {
    lines.push('\nRelated')
    lines.push('-------')
    for (const item of content.meta.related) {
      lines.push(`- ${stripHtml(item.title)}: ${SITE_ORIGIN}/guides/${item.slug}`)
    }
  }

  return `${lines.join('\n').replace(/\n{4,}/g, '\n\n\n').trim()}\n`
}

function writeContentFile(item) {
  const text = renderContent(item)
  const title = item.content.meta?.title || item.content.metadata?.title || item.slug
  const fileName = FILE_NAME_OVERRIDES.get(item.slug) || `${safeFileName(title)}.txt`
  const outputPath = path.join(OUTPUT_DIR, fileName)
  removeOlderExportForSlug(item.slug, outputPath)
  fs.writeFileSync(outputPath, text, 'utf8')
  return { ...item, fileName, outputPath, bytes: Buffer.byteLength(text, 'utf8') }
}

function removeOlderExportForSlug(slug, keepPath) {
  for (const entry of fs.readdirSync(OUTPUT_DIR, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.txt')) continue

    const candidate = path.join(OUTPUT_DIR, entry.name)
    if (candidate === keepPath) continue

    const text = fs.readFileSync(candidate, 'utf8')
    if (text.includes(`Slug: ${slug}`) && text.includes('Source: Mr Mallorca Golf live site content module')) {
      fs.unlinkSync(candidate)
    }
  }
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const items = [
    ...[...REVIEW_POST_SLUGS].map((slug) => ({
      kind: 'Course review',
      slug,
      content: getGuidePostContent(slug, 'en'),
    })),
    ...[...ARTICLE_SLUGS].map((slug) => ({
      kind: 'Guide article',
      slug,
      content: getGuideArticleContent(slug, 'en'),
    })),
  ]

  const written = items.map(writeContentFile)
  const manifestLines = [
    'MMG Live Site Content Export Manifest',
    '====================================',
    '',
    `Exported: ${EXPORT_STARTED_AT.toISOString()}`,
    `Repo: ${path.dirname(path.dirname(fileURLToPath(import.meta.url)))}`,
    `Destination: ${OUTPUT_DIR}`,
    `Files exported: ${written.length}`,
    '',
    'Files',
    '-----',
    ...written.map((item) => `- ${item.fileName} | ${item.kind} | ${item.slug} | ${item.bytes} bytes`),
    '',
    'Rule',
    '----',
    'Generated files are named `Course Review - ...` or `Guide Article - ...` so the folder is clear at a glance.',
    'Run `npm run export:blog-content` after live site content changes. The local git pre-push hook runs this automatically before pushes from this PC.',
    '',
  ]

  fs.writeFileSync(path.join(OUTPUT_DIR, 'MMG Live Site Content Export Manifest.txt'), manifestLines.join('\n'), 'utf8')

  console.log(`Exported ${written.length} live site content files to ${OUTPUT_DIR}`)
}

main()

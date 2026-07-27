/**
 * check-meta-length.mjs
 *
 * Guardrail for the meta-ctr skill's manual gotchas:
 *   1. Descriptions over 155 chars get truncated mid-payoff in search results.
 *   2. Titles over the SERP display budget get truncated or algorithmically
 *      rewritten by Google — silently discarding whatever CTR copy was
 *      written, no matter how good it is. The root layout appends
 *      " | Mr Mallorca Golf" (TITLE_SUFFIX_LENGTH chars) to every page title
 *      via the Next.js metadata title template, so the raw string in source
 *      has less room than it looks like — this check adds the suffix back
 *      before comparing against the limit.
 *   3. A curly apostrophe (U+2019 '...') inside a single-quoted JS string is
 *      valid JS syntax but the SWC compiler treats it as a string terminator,
 *      silently corrupting the build. Always double-quote strings with
 *      apostrophes instead.
 *
 * Regex-scans string literals rather than importing the modules, so it
 * catches the raw source text exactly as SWC will see it.
 *
 * Run: npm run check:meta-length
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const MAX_DESCRIPTION_LENGTH = 155
const TITLE_SUFFIX = ' | Mr Mallorca Golf'
const MAX_TITLE_DISPLAY_LENGTH = 60 // total as shown in the SERP, i.e. raw title + TITLE_SUFFIX

// page-metadata.js has no on-page/related title noise — every `title:` is a
// real SEO title. guide-*-content(.js|-localized.js) also carry on-page
// display titles (meta.title) and related-link labels (related[].title),
// so their title check is scoped to only the `metadata: { title: ... }` block.
const DESCRIPTION_FILES = [
  'src/lib/page-metadata.js',
  'src/lib/guide-post-content.js',
  'src/lib/guide-post-content-localized.js',
  'src/lib/guide-article-content.js',
  'src/lib/guide-article-content-localized.js',
]

const UNSCOPED_TITLE_FILES = ['src/lib/page-metadata.js']

const SCOPED_TITLE_FILES = [
  'src/lib/guide-post-content.js',
  'src/lib/guide-post-content-localized.js',
  'src/lib/guide-article-content.js',
  'src/lib/guide-article-content-localized.js',
]

// Matches `description: 'text'`, `description: "text"`, or the JSON-quoted
// `"description": "text"` style used by the -localized.js overlay files,
// optionally split across a line break between the colon and the string.
const DESCRIPTION_RE = /"?description"?:\s*\n?\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g

// Matches any `title:` / `"title":` line — safe only where every title in
// the file is a real SEO title (page-metadata.js).
const UNSCOPED_TITLE_RE = /"?title"?:\s*\n?\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g

// Matches `title:` / `"title":` only when it is the property immediately
// following a `metadata: {` / `"metadata": {` opening — the real SEO title,
// not meta.title (on-page display) or related[].title (related-link labels).
const SCOPED_TITLE_RE = /"?metadata"?:\s*\{\s*\n?\s*"?title"?:\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length
}

function checkStrings(text, regex, { label, maxLength, suffixLength = 0 }) {
  const findings = []
  for (const match of text.matchAll(regex)) {
    const [, quote, content] = match
    const line = lineOf(text, match.index)

    if (quote === "'" && content.includes('’')) {
      findings.push({ line, type: 'compiler-trap', detail: `single-quoted ${label} contains a curly apostrophe (U+2019) — switch to double quotes` })
    }
    const effectiveLength = content.length + suffixLength
    if (effectiveLength > maxLength) {
      const suffixNote = suffixLength ? ` (${content.length} raw + ${suffixLength}-char brand suffix)` : ''
      findings.push({ line, type: 'too-long', detail: `${effectiveLength} chars${suffixNote} (max ${maxLength})` })
    }
  }
  return findings
}

function checkFile(relPath) {
  const fullPath = join(REPO_ROOT, relPath)
  const text = readFileSync(fullPath, 'utf8')
  const findings = []

  if (DESCRIPTION_FILES.includes(relPath)) {
    findings.push(...checkStrings(text, DESCRIPTION_RE, { label: 'description', maxLength: MAX_DESCRIPTION_LENGTH }))
  }
  if (UNSCOPED_TITLE_FILES.includes(relPath)) {
    findings.push(...checkStrings(text, UNSCOPED_TITLE_RE, { label: 'title', maxLength: MAX_TITLE_DISPLAY_LENGTH, suffixLength: TITLE_SUFFIX.length }))
  }
  if (SCOPED_TITLE_FILES.includes(relPath)) {
    findings.push(...checkStrings(text, SCOPED_TITLE_RE, { label: 'title', maxLength: MAX_TITLE_DISPLAY_LENGTH, suffixLength: TITLE_SUFFIX.length }))
  }

  findings.sort((a, b) => a.line - b.line)
  return findings
}

const ALL_FILES = [...new Set([...DESCRIPTION_FILES, ...UNSCOPED_TITLE_FILES, ...SCOPED_TITLE_FILES])]

let totalFindings = 0
for (const relPath of ALL_FILES) {
  const findings = checkFile(relPath)
  for (const f of findings) {
    console.error(`${relPath}:${f.line} [${f.type}] ${f.detail}`)
    totalFindings++
  }
}

if (totalFindings > 0) {
  console.error(`\nMeta length check failed — ${totalFindings} issue(s) found.`)
  process.exit(1)
}

console.log(`Meta length check passed — scanned ${ALL_FILES.length} file(s): descriptions under ${MAX_DESCRIPTION_LENGTH} chars, titles under ${MAX_TITLE_DISPLAY_LENGTH} chars including the "${TITLE_SUFFIX}" brand suffix, no curly-apostrophe compiler traps.`)

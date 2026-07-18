/**
 * check-meta-length.mjs
 *
 * Guardrail for the meta-ctr skill's two manual gotchas:
 *   1. Descriptions over 155 chars get truncated mid-payoff in search results.
 *   2. A curly apostrophe (U+2019 '...') inside a single-quoted JS string is
 *      valid JS syntax but the SWC compiler treats it as a string terminator,
 *      silently corrupting the build. Always double-quote strings with
 *      apostrophes instead.
 *
 * Regex-scans description string literals rather than importing the modules,
 * so it catches the raw source text exactly as SWC will see it.
 *
 * Run: npm run check:meta-length
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const MAX_LENGTH = 155

const FILES = [
  'src/lib/page-metadata.js',
  'src/lib/guide-post-content.js',
  'src/lib/guide-post-content-localized.js',
  'src/lib/guide-article-content.js',
  'src/lib/guide-article-content-localized.js',
]

// Matches `description: 'text'` or `description: "text"`, optionally split
// across a line break between the colon and the string (existing style in
// page-metadata.js).
const DESCRIPTION_RE = /description:\s*\n?\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length
}

function checkFile(relPath) {
  const fullPath = join(REPO_ROOT, relPath)
  const text = readFileSync(fullPath, 'utf8')
  const findings = []

  for (const match of text.matchAll(DESCRIPTION_RE)) {
    const [, quote, content] = match
    const line = lineOf(text, match.index)

    if (quote === "'" && content.includes('’')) {
      findings.push({ line, type: 'compiler-trap', detail: `single-quoted description contains a curly apostrophe (U+2019) — switch to double quotes` })
    }
    if (content.length > MAX_LENGTH) {
      findings.push({ line, type: 'too-long', detail: `${content.length} chars (max ${MAX_LENGTH})` })
    }
  }

  return findings
}

let totalFindings = 0
for (const relPath of FILES) {
  const findings = checkFile(relPath)
  for (const f of findings) {
    console.error(`${relPath}:${f.line} [${f.type}] ${f.detail}`)
    totalFindings++
  }
}

if (totalFindings > 0) {
  console.error(`\nMeta description check failed — ${totalFindings} issue(s) found.`)
  process.exit(1)
}

console.log(`Meta description check passed — scanned ${FILES.length} file(s), all descriptions under ${MAX_LENGTH} chars with no curly-apostrophe compiler traps.`)

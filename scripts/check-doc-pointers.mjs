/**
 * check-doc-pointers.mjs
 *
 * Guardrail for documentation rot. Scans the instruction/reference docs and
 * skill files for backtick-wrapped repo paths (e.g. `src/lib/site.js`,
 * `docs/seo-reference.md`, `src/app/(en)/golf-courses/`) and fails if any of
 * them no longer exist in the repo. Catches the "dead pointer" drift that a
 * one-off audit fixes but that silently returns as files move or get deleted.
 *
 * Deliberately conservative to avoid false positives:
 *   - only checks tokens that start with a known top-level repo directory
 *   - skips template placeholders (wildcards, YYYY-MM-DD, <Type>, {var}, …, **)
 *   - skips fenced ``` code blocks (usually shell/example snippets)
 *   - skips sections under a "removal record" heading (Repo Cleanup, Removed,
 *     Deprecated, Archive, Changelog, History) which intentionally list files
 *     that were deleted
 *
 * Run: npm run check:pointers   (standalone — not yet wired into pre-commit)
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// Top-level repo directories a checkable path may start with.
const REPO_DIR_PREFIXES = [
  'src/',
  'docs/',
  'scripts/',
  'public/',
  'prototypes/',
  'styles/',
  '.claude/',
]

// Headings whose section is a record of removed/archived files, not live refs.
const REMOVAL_HEADING = /clean\s*up|removed|deleted|retired|archiv|history|changelog|deprecat/i

// Tokens containing any of these are templates/globs, not concrete paths.
const PLACEHOLDER = /[*<>{}\[\]]|\.\.\.|…|YYYY|MM(?![a-z])|DD(?![a-z])|\bNAME\b|\bType\b/

// Explicit allowlist of paths known to be legitimately absent (add sparingly).
const ALLOW = new Set([])

function listDocFiles() {
  const files = []
  // Root instruction/reference docs
  for (const name of [
    'CLAUDE.md',
    'AGENTS.md',
    'BRANCHES.md',
    'CONTENT_WORKFLOW.md',
    'COURSE_BLOG_PIPELINE.md',
    'README.md',
  ]) {
    const p = join(REPO_ROOT, name)
    if (existsSync(p)) files.push(p)
  }
  // docs/*.md — excluding the archive (historical, pointers may be stale on purpose)
  const docsDir = join(REPO_ROOT, 'docs')
  if (existsSync(docsDir)) {
    for (const name of readdirSync(docsDir)) {
      if (name.endsWith('.md')) files.push(join(docsDir, name))
    }
  }
  // .claude/skills/**/SKILL.md + README
  const skillsDir = join(REPO_ROOT, '.claude', 'skills')
  if (existsSync(skillsDir)) {
    for (const entry of readdirSync(skillsDir)) {
      const entryPath = join(skillsDir, entry)
      if (entry.endsWith('.md') && statSync(entryPath).isFile()) {
        files.push(entryPath)
      } else if (statSync(entryPath).isDirectory()) {
        const skillFile = join(entryPath, 'SKILL.md')
        if (existsSync(skillFile)) files.push(skillFile)
      }
    }
  }
  return files
}

function looksLikeRepoPath(token) {
  return REPO_DIR_PREFIXES.some((prefix) => token.startsWith(prefix))
}

function cleanToken(raw) {
  // strip trailing sentence punctuation that commonly abuts an inline path
  return raw.replace(/[.,;:)]+$/, '').trim()
}

function pathExists(token) {
  const rel = token.replace(/\/$/, '')
  return existsSync(join(REPO_ROOT, rel))
}

function checkFile(absPath) {
  const rel = absPath.slice(REPO_ROOT.length + 1).replace(/\\/g, '/')
  const lines = readFileSync(absPath, 'utf8').split('\n')
  const misses = []
  let inFence = false
  let inRemovalSection = false

  lines.forEach((line, idx) => {
    // Track fenced code blocks
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      return
    }
    if (inFence) return

    // Track removal-record sections by heading
    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (heading) {
      inRemovalSection = REMOVAL_HEADING.test(heading[2])
      return
    }
    if (inRemovalSection) return

    // Extract backtick-wrapped tokens
    const tokens = line.match(/`([^`]+)`/g)
    if (!tokens) return

    for (const wrapped of tokens) {
      const token = cleanToken(wrapped.slice(1, -1))
      if (!looksLikeRepoPath(token)) continue
      if (PLACEHOLDER.test(token)) continue
      if (token.includes(' ')) continue
      if (ALLOW.has(token)) continue
      if (!pathExists(token)) {
        misses.push({ line: idx + 1, token })
      }
    }
  })

  return { rel, misses }
}

function main() {
  const files = listDocFiles()
  const results = files.map(checkFile).filter((r) => r.misses.length > 0)

  const total = results.reduce((n, r) => n + r.misses.length, 0)

  if (total === 0) {
    console.log(`✅ Doc pointer check passed — scanned ${files.length} files, no dead repo paths.`)
    return
  }

  console.error(`❌ Doc pointer check FAILED — ${total} dead repo path(s):\n`)
  for (const { rel, misses } of results) {
    console.error(`  ${rel}`)
    for (const { line, token } of misses) {
      console.error(`    line ${line}: ${token}`)
    }
    console.error('')
  }
  console.error(
    'Fix the reference, or if the path was intentionally removed, move it under a\n' +
      '"Removed"/"Cleanup"/"Archive" heading (those sections are skipped), or add it to\n' +
      'the ALLOW set in scripts/check-doc-pointers.mjs with a comment.',
  )
  process.exitCode = 1
}

main()

/**
 * check-doc-commands.mjs
 *
 * Guardrail against docs and skills telling you to run a command that doesn't
 * exist. Scans CLAUDE.md, README.md, docs/ and .claude/skills/ for
 * `npm run <script>` references and fails if any names a script that isn't in
 * package.json.
 *
 * Found 2026-08-14: docs/CODEBASE_IMPROVEMENTS.md told the reader to run
 * `npm run check:content-validation` in three separate places. That script had
 * been retired months earlier and replaced by check:locale-parity - the doc
 * carried a note saying so at the very top, but anyone landing mid-document
 * (which is how these get read) would copy a command that just errors.
 *
 * docs/archive/ is skipped on purpose: archived session notes are a historical
 * record of what was true at the time, not instructions to follow now.
 *
 * Run standalone:
 *   node scripts/check-doc-commands.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve, relative } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const pkg = JSON.parse(readFileSync(join(REPO_ROOT, 'package.json'), 'utf8'))
const defined = new Set(Object.keys(pkg.scripts || {}))

const SCAN_ROOTS = ['docs', '.claude/skills']
const SCAN_FILES = ['CLAUDE.md', 'README.md']
// Historical records, not live instructions.
const SKIP_DIRS = new Set(['archive', 'node_modules', '.next', '.git'])

const targets = []
for (const f of SCAN_FILES) {
  const p = join(REPO_ROOT, f)
  if (existsSync(p)) targets.push(p)
}
function walk(dir) {
  if (!existsSync(dir)) return
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(p)
    } else if (/\.(md|mjs|js|jsx)$/.test(entry.name)) {
      targets.push(p)
    }
  }
}
for (const r of SCAN_ROOTS) walk(join(REPO_ROOT, r))

const problems = []
for (const file of targets) {
  const text = readFileSync(file, 'utf8')
  const lines = text.split(/\r?\n/)
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/npm run ([a-zA-Z0-9:_-]+)/g)) {
      const script = m[1]
      if (defined.has(script)) continue
      // Allow an explicit retirement marker on the same line, so a doc can
      // still discuss a removed script honestly without failing the check.
      if (/RETIRED|retired|no longer exists|no longer in package\.json/.test(line)) continue
      problems.push({ file: relative(REPO_ROOT, file), line: i + 1, script })
    }
  })
}

if (problems.length === 0) {
  console.log(`✅ Doc command check passed — scanned ${targets.length} file(s), every referenced npm script exists.`)
  process.exit(0)
}

console.error(`Docs reference ${problems.length} npm script(s) that do not exist in package.json:\n`)
for (const p of problems) {
  console.error(`  ${p.file}:${p.line}  ->  npm run ${p.script}`)
}
console.error('\nFix: point the doc at the real script, or mark the line RETIRED if you are')
console.error('deliberately describing a removed one.')
process.exit(1)

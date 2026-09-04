#!/usr/bin/env node
// Parse-only gate: fails the commit if any staged JS/JSX file does not parse.
//
// Added after 16 separate commits fixed the same class of bug (typographic
// quote characters used as string DELIMITERS, e.g. title: 'text' with a
// U+2018/2019 opening/closing the string instead of a straight quote) —
// each one a syntax error that reached main because nothing pre-commit
// actually parsed the file. check-text-corruption.js validates string
// *content*, not string *syntax*, so it can't see this class at all.
//
// Uses ESLint's parser in isolation (--no-eslintrc, no rules) purely to get
// a real JSX-aware parse pass/fail — this is not a lint check and enforces
// no style rules.

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..')

function getStagedFiles() {
  try {
    const out = execFileSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACM'], {
      cwd: repoRoot,
      encoding: 'utf8',
    })
    return out.split('\n').filter(Boolean)
  } catch {
    return null
  }
}

function getAllFiles() {
  const out = execFileSync('git', ['ls-files'], { cwd: repoRoot, encoding: 'utf8' })
  return out.split('\n').filter(Boolean)
}

const IGNORE_DIRS = ['node_modules/', '.next/', 'outputs/', 'out/', 'dist/', 'build/']

let files = getStagedFiles()
// Fall back to a full repo scan when not run as a git hook (e.g. `npm run check:content`).
if (files === null || files.length === 0) files = getAllFiles()

const targets = files.filter(
  (f) =>
    /\.(js|jsx|mjs)$/.test(f) &&
    !IGNORE_DIRS.some((d) => f.startsWith(d)) &&
    // `git ls-files` / a staged diff can list a path that was just deleted
    // (deletion not yet staged, or `--diff-filter=ACM` still matched a rename);
    // ESLint errors on a glob with zero matches instead of skipping it.
    fs.existsSync(path.join(repoRoot, f))
)

if (targets.length === 0) {
  console.log('No JS/JSX files to parse-check.')
  process.exit(0)
}

// Invoke ESLint's JS entry point directly with `node` rather than the
// node_modules/.bin wrapper — on Windows the .bin wrapper is a .cmd file,
// which execFileSync cannot spawn without shell:true (EINVAL).
//
// Resolve via require() rather than a hardcoded `repoRoot/node_modules` path:
// a git worktree (this repo's own pattern for background agents) is a real
// directory nested under the main checkout but has no node_modules of its
// own, so the hardcoded join silently pointed at a path that doesn't exist.
// require.resolve walks up ancestor directories the way Node normally
// resolves packages, so it finds the main checkout's node_modules from a
// nested worktree without needing a separate install there.
const require = createRequire(import.meta.url)
let eslintEntry
try {
  eslintEntry = require.resolve('eslint/bin/eslint.js', { paths: [repoRoot] })
} catch {
  eslintEntry = path.join(repoRoot, 'node_modules', 'eslint', 'bin', 'eslint.js')
}

try {
  execFileSync(
    process.execPath,
    [
      eslintEntry,
      '--no-eslintrc',
      '--no-ignore',
      '--no-inline-config',
      // @typescript-eslint/parser (not the default espree) because espree on
      // the ESLint 8.x pinned here doesn't understand import-attribute syntax
      // (`import x from './y.json' with { type: 'json' }`), which is real,
      // valid, already-shipped code in this repo (ReviewBadge.jsx, root-layout-shared.jsx).
      '--parser',
      '@typescript-eslint/parser',
      '--parser-options=ecmaVersion:latest,sourceType:module,ecmaFeatures:{"jsx":true}',
      '--rule',
      '{}',
      '--format',
      'compact',
      ...targets,
    ],
    { cwd: repoRoot, stdio: 'inherit' }
  )
  console.log(`Parse check passed: ${targets.length} file(s).`)
} catch (error) {
  console.error('\nOne or more files failed to parse. This is a syntax error, not a style issue —')
  console.error('the most common cause is a typographic quote (‘ ’ “ ”) used as a')
  console.error('string delimiter instead of a straight quote. Fix the syntax, do not silence this check.')
  process.exit(error.status || 1)
}

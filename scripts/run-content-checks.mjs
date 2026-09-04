#!/usr/bin/env node
// Fast runner for `npm run check:content`.
//
// The old version chained ~20 `npm run check:x` calls with `&&`, which is
// correct but slow: each `npm run` pays its own process-startup cost (~1.3s
// on Windows) on top of the check itself, and the whole chain runs serially
// even though every check here is a read-only validation against files
// already on disk. This runs the same underlying scripts directly with
// `node`, in parallel, and reports every failure instead of stopping at the
// first one.
//
// All scripts below are read-only when invoked this way — sync-social-proof.mjs
// and sync-discovery.mjs only write when NOT passed --check, so passing
// --check keeps them side-effect-free and safe to run concurrently with
// everything else.
//
// If you add a new `check:*` script to package.json, add it here too —
// scripts/check-doc-commands.mjs cross-checks docs against package.json
// scripts, not against this list.

import { fork } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..')

const CHECKS = [
  { name: 'check:text', script: 'check-text-corruption.js' },
  { name: 'check:js-parse', script: 'check-js-parse.mjs' },
  { name: 'check:fonts', script: 'check-font-usage.mjs' },
  { name: 'check:font-consistency', script: 'check-font-consistency.mjs' },
  { name: 'check:skills-mirror', script: 'check-skills-mirror.mjs' },
  { name: 'check:skills-readme', script: 'check-skills-readme.mjs' },
  { name: 'check:privacy-surface', script: 'check-privacy-surface.mjs' },
  { name: 'check:testimonial-integrity', script: 'check-testimonial-integrity.mjs' },
  { name: 'check:social-proof', script: 'sync-social-proof.mjs', args: ['--check'] },
  { name: 'check:offers', script: 'check-offers-consistency.js' },
  { name: 'check:service-pricing', script: 'check-service-pricing-surfaces.mjs' },
  { name: 'check:locale', script: 'check-locale-content.js' },
  { name: 'check:shared-locale (fallbacks)', script: 'check-shared-locale-fallbacks.js' },
  { name: 'check:shared-locale (overlay)', script: 'check-localized-overlay-integrity.js' },
  { name: 'check:routes (parity)', script: 'check-route-parity.mjs' },
  { name: 'check:routes (locale files)', script: 'check-locale-route-files.mjs' },
  { name: 'check:course-data (destinations)', script: 'check-course-destinations.js' },
  { name: 'check:course-data (scorecard)', script: 'check-scorecard-data.js' },
  { name: 'check:course-data (access)', script: 'check-course-access-data.js' },
  { name: 'check:course-data (tracker)', script: 'check-tracker-course-pack.js' },
  { name: 'check:course-data (strokes-gained)', script: 'check-strokes-gained-export.js' },
  { name: 'check:course-data (zh editorial)', script: 'check-zh-course-editorial.mjs' },
  { name: 'check:pointers', script: 'check-doc-pointers.mjs' },
  { name: 'check:doc-commands', script: 'check-doc-commands.mjs' },
  { name: 'check:links', script: 'check-internal-links.mjs' },
  { name: 'check:voice', script: 'check-voice.mjs' },
  { name: 'check:api-safety', script: 'check-api-safety.mjs' },
  { name: 'check:tool-prices', script: 'check-tool-price-sync.mjs' },
  { name: 'check:tool-green-fees', script: 'check-tool-green-fees.mjs' },
  { name: 'check:pricing-narrative', script: 'check-pricing-narrative.mjs' },
  { name: 'check:lead-magnet-prices', script: 'check-lead-magnet-prices.mjs' },
  { name: 'check:guide-parity', script: 'check-guide-parity.mjs' },
  { name: 'check:locale-parity', script: 'check-locale-parity.js' },
  { name: 'check:discovery', script: 'sync-discovery.mjs', args: ['--check'] },
  { name: 'check:meta-length', script: 'check-meta-length.mjs' },
  { name: 'check:guide-review-keywords', script: 'check-guide-review-keywords.js' },
]

function runCheck({ name, script, args = [] }) {
  return new Promise((resolve) => {
    const scriptPath = path.join(repoRoot, 'scripts', script)
    const stdout = []
    const stderr = []

    const child = fork(scriptPath, args, {
      cwd: repoRoot,
      stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
      execArgv: ['--no-warnings'],
    })

    child.stdout.on('data', (chunk) => stdout.push(chunk))
    child.stderr.on('data', (chunk) => stderr.push(chunk))

    child.on('exit', (code) => {
      resolve({
        name,
        code: code ?? 1,
        stdout: Buffer.concat(stdout).toString('utf8'),
        stderr: Buffer.concat(stderr).toString('utf8'),
      })
    })

    child.on('error', (error) => {
      resolve({
        name,
        code: 1,
        stdout: Buffer.concat(stdout).toString('utf8'),
        stderr: `${Buffer.concat(stderr).toString('utf8')}\n${error.stack || error.message}`,
      })
    })
  })
}

async function main() {
  const started = Date.now()
  const results = await Promise.all(CHECKS.map(runCheck))
  const elapsed = ((Date.now() - started) / 1000).toFixed(1)

  const failed = results.filter((r) => r.code !== 0)

  for (const result of results) {
    if (result.code !== 0) continue
    if (result.stdout.trim()) process.stdout.write(result.stdout)
  }

  if (failed.length > 0) {
    console.error(`\n❌ ${failed.length} check(s) failed (${elapsed}s):\n`)
    for (const result of failed) {
      console.error(`--- ${result.name} (exit ${result.code}) ---`)
      if (result.stdout.trim()) process.stdout.write(result.stdout)
      if (result.stderr.trim()) process.stderr.write(result.stderr)
      console.error('')
    }
    process.exit(1)
  }

  console.log(`\n✅ All ${results.length} content checks passed (${elapsed}s)`)
}

main()

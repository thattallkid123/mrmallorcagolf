// Mirrors .claude/skills/ (master) into .codex/skills/ so OpenAI Codex
// picks up the same repo skills. Cursor reads .claude/skills/ natively,
// so no copy is needed for it.
//
// Run after adding or editing any skill:  npm run skills:sync
// Then commit both directories together.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(root, '.claude', 'skills')
const DEST = path.join(root, '.codex', 'skills')

if (!fs.existsSync(SRC)) {
  console.error(`Source not found: ${SRC}`)
  process.exit(1)
}

// Remove skills in DEST that no longer exist in SRC, then copy everything.
if (fs.existsSync(DEST)) {
  for (const entry of fs.readdirSync(DEST)) {
    if (!fs.existsSync(path.join(SRC, entry))) {
      fs.rmSync(path.join(DEST, entry), { recursive: true })
      console.log(`removed stale: ${entry}`)
    }
  }
}

fs.mkdirSync(DEST, { recursive: true })
fs.cpSync(SRC, DEST, { recursive: true })

const skills = fs
  .readdirSync(SRC, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)

console.log(`Synced ${skills.length} skills to .codex/skills/: ${skills.join(', ')}`)
console.log('Remember to commit both .claude/skills/ and .codex/skills/.')

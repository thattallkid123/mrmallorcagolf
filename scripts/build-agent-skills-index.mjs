#!/usr/bin/env node
// Builds public/.well-known/agent-skills/index.json from the SKILL.md files
// beside it, computing each sha256 digest from the exact file bytes.
//   node scripts/build-agent-skills-index.mjs          write the index
//   node scripts/build-agent-skills-index.mjs --check  fail if it is stale
// Run in check:content so a SKILL.md edit cannot ship with an old digest.

import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = path.join(repoRoot, 'public', '.well-known', 'agent-skills')
const indexPath = path.join(dir, 'index.json')
const ORIGIN = 'https://www.mrmallorcagolf.com'

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return {}
  const out = {}
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i > 0) out[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  return out
}

const skills = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(path.join(dir, d.name, 'SKILL.md')))
  .map((d) => {
    // Hash the LF form: .gitattributes forces LF in the repo and on Vercel, so a
    // CRLF checkout on Windows must produce the same digest as the deployed file.
    const bytes = Buffer.from(readFileSync(path.join(dir, d.name, 'SKILL.md'), 'utf8').replace(/\r\n/g, '\n'), 'utf8')
    const fm = frontmatter(bytes.toString('utf8'))
    if (fm.name !== d.name) throw new Error(`${d.name}/SKILL.md: frontmatter name "${fm.name}" must match the folder`)
    if (!fm.description) throw new Error(`${d.name}/SKILL.md: missing description`)
    return {
      name: d.name,
      type: 'skill-md',
      description: fm.description,
      url: `${ORIGIN}/.well-known/agent-skills/${d.name}/SKILL.md`,
      digest: `sha256:${createHash('sha256').update(bytes).digest('hex')}`,
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

const next = JSON.stringify(
  { $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills },
  null,
  2,
) + '\n'

if (process.argv.includes('--check')) {
  const current = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : ''
  if (current !== next) {
    console.error('agent-skills index is stale: run `node scripts/build-agent-skills-index.mjs` and commit the result.')
    process.exit(1)
  }
  console.log(`agent-skills index OK (${skills.length} skill${skills.length === 1 ? '' : 's'})`)
} else {
  writeFileSync(indexPath, next)
  console.log(`wrote ${path.relative(repoRoot, indexPath)} (${skills.length} skills)`)
}

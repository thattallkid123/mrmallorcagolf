#!/usr/bin/env node
// Builds the mmg-voice-check skill from the Drive voice guide, so the rules and the voice gate
// live in one file (Systems & Planning\MMG_BRAND_VOICE_GUIDELINES.md) and the skill can never
// drift from it. Run by SKILLS_SYNC.ps1 and CODEX_SKILLS_SYNC.ps1 before they copy skills, and by
// hand with `npm run build:voice-skill`. Edit the guide, never the generated skill file.
import fs from 'node:fs'
import path from 'node:path'

const driveRoot = process.env.MMG_DRIVE_ROOT || 'G:\\My Drive\\Mr Mallorca Golf'
const guide = path.join(driveRoot, 'Systems & Planning', 'MMG_BRAND_VOICE_GUIDELINES.md')
const skill = path.join(driveRoot, 'Skills', 'MMG_SKILL_VOICE_CHECK.md')

if (!fs.existsSync(guide)) {
  console.error(`Voice guide not found: ${guide}`)
  process.exit(1)
}
let body = fs.readFileSync(guide, 'utf8').replace(/^\uFEFF/, '')
if (!body.includes('## 6. The voice gate')) {
  console.error('The voice guide has no "## 6. The voice gate" section; refusing to build a skill without the checklist.')
  process.exit(1)
}

const frontmatter = `---
name: mmg-voice-check
description: Mr Mallorca Golf writing guide and voice gate. Use before writing or editing anything in Andy's voice (site pages, blog posts, course reviews, guides, emails, Instagram captions, client documents, PWAP notes, in-app text) and run its section 6 voice gate on every draft before Andy sees it. Also use when Andy says "does this sound like me", "voice check this" or "check this against the guide".
---

> Generated from Drive \`Systems & Planning\\MMG_BRAND_VOICE_GUIDELINES.md\` by
> \`mrmallorcagolf-real/scripts/build-voice-skill.mjs\`. Edit the guide, not this file.

`
const out = frontmatter + body
const prev = fs.existsSync(skill) ? fs.readFileSync(skill, 'utf8') : ''
if (prev === out) {
  console.log('mmg-voice-check skill already matches the voice guide.')
} else {
  fs.writeFileSync(skill, out, 'utf8')
  console.log(`mmg-voice-check skill rebuilt from the voice guide (${out.length} chars).`)
}

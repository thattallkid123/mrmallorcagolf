#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..')
const srcRoot = path.join(repoRoot, 'src')

const titleKeys = new Set([
  'title',
  'heading',
  'headline',
  'heroTitle',
  'heroHeadline',
  'pageTitle',
  'h1',
  'h2',
  'primaryCta',
  'secondaryCta',
  'linkLabel',
])

const ignorePathParts = [
  `${path.sep}api${path.sep}`,
  `${path.sep}zh${path.sep}`,
]

const errors = []

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue
      walk(full, files)
    } else if (/\.(js|jsx|mjs|css)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

function rel(file) {
  return path.relative(repoRoot, file).replaceAll(path.sep, '/')
}

function isIgnored(file) {
  return ignorePathParts.some((part) => file.includes(part))
}

function startsLowercase(value) {
  const firstLetter = String(value).match(/\p{L}/u)
  if (!firstLetter) return false
  const char = firstLetter[0]
  const lower = char.toLocaleLowerCase()
  const upper = char.toLocaleUpperCase()
  return char === lower && char !== upper
}

function checkTextTransforms(file, text) {
  const patterns = [
    /\btext-transform\s*:\s*(capitalize|lowercase)\b/gi,
    /\btextTransform\s*:\s*['"`](capitalize|lowercase)['"`]/gi,
  ]

  for (const pattern of patterns) {
    let match
    while ((match = pattern.exec(text))) {
      const line = text.slice(0, match.index).split(/\r?\n/).length
      errors.push(`${rel(file)}:${line} uses automatic ${match[1]} casing; author the intended label instead.`)
    }
  }
}

function checkTitleLikeStrings(file, text) {
  if (isIgnored(file)) return

  const linePattern = /^\s*([A-Za-z][A-Za-z0-9_]*)\s*:\s*['"`]([^'"`\n]+)['"`]/gm
  let match
  while ((match = linePattern.exec(text))) {
    const [, key, value] = match
    if (!titleKeys.has(key)) continue
    if (!startsLowercase(value)) continue
    const line = text.slice(0, match.index).split(/\r?\n/).length
    errors.push(`${rel(file)}:${line} has ${key}: "${value}" starting lowercase.`)
  }

  const headingPattern = /<(h1|h2|h3|h4)[^>]*>\s*([a-z][^<>{}]*)</g
  while ((match = headingPattern.exec(text))) {
    const line = text.slice(0, match.index).split(/\r?\n/).length
    errors.push(`${rel(file)}:${line} has <${match[1]}> text starting lowercase: "${match[2].trim()}".`)
  }
}

for (const file of walk(srcRoot)) {
  const text = fs.readFileSync(file, 'utf8')
  checkTextTransforms(file, text)
  checkTitleLikeStrings(file, text)
}

if (errors.length) {
  console.error('Title casing check failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Title casing check passed - authored titles avoid lowercase starts and automatic capitalize/lowercase styling.')

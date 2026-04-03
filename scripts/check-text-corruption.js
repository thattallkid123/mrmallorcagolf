const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const INCLUDE_EXTENSIONS = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
  '.css',
  '.md',
  '.txt',
  '.xml',
  '.yml',
  '.yaml',
])

const IGNORE_DIRS = new Set([
  '.git',
  '.next',
  'node_modules',
  'out',
  'dist',
  'build',
])

const IGNORE_FILES = new Set([
  path.join('scripts', 'check-text-corruption.js'),
  'package-lock.json',
])

const suspiciousPatterns = [
  /Ãƒ./g,
  /Ã¢[â‚¬â„¢Å“â‚¬"Â¦Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿]/g,
  /Ã‚(?=\S)/g,
  /Ã¯Â¿Â½/g,
  /ï¿½/g,
  /\?\?\?\?/g,
  /[A-Za-zÀ-ÿ]\?[A-Za-zÀ-ÿ]/g,
  /\?\d/g,
  /\d\?(?=[A-Za-zÀ-ÿ])/g,
]

function stripIgnoredSequences(text) {
  return text
    .replace(/\b[a-z]+:\/\/\S+/gi, ' ')
    .replace(/\bmailto:\S+/gi, ' ')
    .replace(/\bhttps?:\/\/\S+/gi, ' ')
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      walk(fullPath, files)
      continue
    }

    if (!INCLUDE_EXTENSIONS.has(path.extname(entry.name))) continue
    if (IGNORE_FILES.has(path.relative(ROOT, fullPath))) continue
    files.push(fullPath)
  }

  return files
}

function collectMatches(text) {
  const hits = []
  const sanitized = stripIgnoredSequences(text)

  for (const pattern of suspiciousPatterns) {
    const matches = sanitized.match(pattern)
    if (matches) hits.push(...matches)
  }

  return [...new Set(hits)]
}

const files = walk(ROOT)
const findings = []

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const matches = collectMatches(content)

  if (matches.length === 0) continue

  findings.push({
    file: path.relative(ROOT, file),
    matches: matches.slice(0, 8),
  })
}

if (findings.length > 0) {
  console.error('Potential text corruption found:\n')

  for (const finding of findings) {
    console.error(`- ${finding.file}`)
    console.error(`  ${finding.matches.join(', ')}`)
  }

  process.exit(1)
}

console.log('No obvious text corruption patterns found.')

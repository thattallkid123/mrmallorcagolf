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
])

const suspiciousPatterns = [
  /Ã./g,
  /â[€™œ€"¦¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿]/g,
  /Â(?=\S)/g,
  /ï¿½/g,
  /�/g,
]

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

  for (const pattern of suspiciousPatterns) {
    const matches = text.match(pattern)
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

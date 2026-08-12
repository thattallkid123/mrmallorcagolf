#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, resolve, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const srcRoot = join(root, 'src')
const exts = new Set(['.js', '.jsx', '.css'])
const errors = []

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (exts.has(extname(name))) out.push(p)
  }
  return out
}

function report(file, lineNo, line, reason) {
  errors.push(`${file}:${lineNo}: ${reason}\n  ${line.trim()}`)
}

for (const file of walk(srcRoot)) {
  const rel = relative(root, file).replace(/\\/g, '/')
  if (rel.startsWith('src/app/api/')) continue
  const lines = readFileSync(file, 'utf8').split(/\r?\n/)
  lines.forEach((line, index) => {
    const lineNo = index + 1
    const jsxFont = line.match(/fontFamily\s*:\s*['"`]([^'"`]*)['"`]/)
    if (jsxFont) {
      const value = jsxFont[1].trim()
      if (!/^(var\(--font-(sans|serif)\)|inherit|initial|unset)$/.test(value) && /(Jost|Cormorant Garamond|Georgia|Times New Roman|sans-serif|serif)/.test(value)) {
        report(rel, lineNo, line, 'use var(--font-sans) or var(--font-serif), not a hardcoded fontFamily')
      }
    }
    const cssFont = line.match(/font-family\s*:\s*([^;}]*)/i)
    if (cssFont) {
      const value = cssFont[1].trim()
      if (!/^(var\(--font-(sans|serif)\)|inherit|initial|unset)(?:\s*!important)?$/.test(value) && /(Jost|Cormorant Garamond|Georgia|Times New Roman|sans-serif|serif)/.test(value)) {
        report(rel, lineNo, line, 'use var(--font-sans) or var(--font-serif), not a hardcoded font-family')
      }
    }
  })
}

if (errors.length) {
  console.error('Font usage check failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Font usage check passed - rendered site UI uses font variables.')
console.log('  Excluded: src/app/api email/notification templates.')
#!/usr/bin/env node
// voice:draft. The mechanical half of the mmg-voice-check skill, for any draft in Andy's
// voice (blog, review, guide, email, caption, client document), before Andy reads it.
//
//   npm run voice:draft -- path/to/draft.md [more files]
//   (paste an email or caption into a .txt file in the scratchpad first)
//
// It reports hard bans (em dashes, banned words and constructions, from the same rules
// check:voice uses), words and phrases repeated three or more times, the abstraction words
// that must be cashed out in the same sentence, and the sentence statistics the voice guide
// measures the published guides by. Exit code 1 means a hard ban; the rest is for the
// judgement pass in the skill, which this does not replace.
import fs from 'node:fs'
import path from 'node:path'
import { EM_DASH, BANNED_WORDS, BANNED_TRANSITIONS, BANNED_CLAIMS, BANNED_CONSTRUCTIONS, ALLOWED_PHRASES } from './lib/voice-rules.mjs'

const files = process.argv.slice(2)
if (!files.length) {
  console.error('Usage: npm run voice:draft -- <file> [file...]')
  process.exit(2)
}

const STOP = new Set(('a an the and or but so of to in on at by for from with as is are was were be been being it its this that these those there their they them then than '
  + 'i me my we our you your he she his her not no do does did have has had will would can could should may might just very also into over up out off about after before '
  + 'when where which who what how all any each more most some such only own same too here one two three four five first second third if because while '
  + 'hole holes course courses round rounds green greens tee tees fairway fairways par golf mallorca palma minutes min yards metres m eur').split(' '))
const ABSTRACTIONS = ['trouble', 'generous', 'tests you', 'test you', 'demanding', 'forgiving', 'challenging', 'tricky', 'proper', 'great', 'best', 'tight']

const wordRe = (w) => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
let hard = 0

for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8')
  let text = raw.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')
  for (const p of ALLOWED_PHRASES) text = text.replace(new RegExp(p, 'gi'), ' ')
  const out = []
  const line = (s) => out.push(s)

  // hard bans
  const bans = []
  if (text.includes(EM_DASH)) bans.push(`em dash x${text.split(EM_DASH).length - 1}`)
  for (const w of BANNED_WORDS) if (wordRe(w).test(text)) bans.push(`banned word "${w}"`)
  for (const w of BANNED_TRANSITIONS) if (wordRe(w).test(text)) bans.push(`banned transition "${w}"`)
  for (const { label, re } of [...BANNED_CLAIMS, ...BANNED_CONSTRUCTIONS]) {
    const hits = [...new Set([...text.matchAll(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'))].map((m) => m[0]))]
    if (hits.length) bans.push(`${label}: "${hits.join('", "')}"`)
  }
  if (/\bMajorca\b/.test(text)) bans.push('"Majorca" (write Mallorca)')
  if (/\b\d+\s*(?:euros?|EUR)\b|\bEUR\s*\d/.test(text)) bans.push('"euros"/"EUR" (write €210)')
  hard += bans.length

  // sentences and stats
  const sentences = text.replace(/\s+/g, ' ').split(/(?<=[.!?])\s+(?=[A-Z0-9"'€])/).map((s) => s.trim()).filter((s) => /[a-z]/i.test(s))
  const words = (s) => s.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w))
  const lens = sentences.map((s) => words(s).length)
  const n = sentences.length || 1
  const pct = (k) => `${Math.round((100 * k) / n)}%`
  const avg = lens.reduce((a, b) => a + b, 0) / n

  // repetition
  const tokens = text.toLowerCase().replace(/[’']/g, "'").match(/[a-zà-ÿ'][a-zà-ÿ'-]*/g) || []
  const count = (arr) => arr.reduce((m, k) => m.set(k, (m.get(k) || 0) + 1), new Map())
  const repWords = [...count(tokens.filter((t) => t.length > 3 && !STOP.has(t)))].filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1])
  const grams = (k) => tokens.slice(0, tokens.length - k + 1).map((_, i) => tokens.slice(i, i + k)).filter((g) => g.some((t) => !STOP.has(t) && t.length > 2)).map((g) => g.join(' '))
  const repPhrases = [...count([...grams(2), ...grams(3)])].filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1])

  // abstractions to cash out
  const abstract = []
  for (const s of sentences) for (const a of ABSTRACTIONS) if (wordRe(a).test(s)) abstract.push(`"${a}": ${s.length > 160 ? s.slice(0, 157) + '...' : s}`)

  line(`\n== ${path.basename(f)}: ${words(text).length} words, ${sentences.length} sentences`)
  line(bans.length ? `HARD BANS (${bans.length}), rewrite before Andy sees it:\n  - ${bans.join('\n  - ')}` : 'Hard bans: none.')
  line(repWords.length || repPhrases.length
    ? `REPEATED 3+ times, vary or cut (course names and golf basics already excluded):\n  ${[...repPhrases.slice(0, 15), ...repWords.slice(0, 20)].map(([k, c]) => `${k} x${c}`).join(', ')}`
    : 'Repetition: nothing used three or more times.')
  if (abstract.length) line(`ABSTRACTIONS, each must be cashed out in the same sentence (a hole, a consequence, an instruction):\n  - ${abstract.slice(0, 20).join('\n  - ')}`)
  line(`Rhythm (published guides in brackets): average ${avg.toFixed(1)} words (15.6), over 30 words ${pct(lens.filter((l) => l > 30).length)} (5%), under 8 words ${pct(lens.filter((l) => l < 8).length)} (16%), with I/my/me ${pct(sentences.filter((s) => /\b(?:I|my|me)\b/.test(s)).length)} (8%), with a digit ${pct(sentences.filter((s) => /\d/.test(s)).length)} (24%).`)
  line('Next: the judgement pass in the mmg-voice-check skill (experience earned? reviewer-speak? you do something, not feel it? facts in the order they happened? matches Andy\'s notes?).')
  console.log(out.join('\n'))
}
process.exit(hard ? 1 : 0)

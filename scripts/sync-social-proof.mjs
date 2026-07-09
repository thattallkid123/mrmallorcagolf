import fs from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const masterPath =
  'C:\\Users\\andyg\\My Drive\\Mr Mallorca Golf\\Reference\\MMG_TESTIMONIALS_AND_FEEDBACK.md'
const socialProofPath = path.join(repoRoot, 'src', 'data', 'site-social-proof.json')

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function countPublicReadyGoogleReviews(text) {
  const sectionRegex = /^###\s+(.+)\r?\n([\s\S]*?)(?=^###\s+|^##\s+|\Z)/gm
  let count = 0

  for (const match of text.matchAll(sectionRegex)) {
    const body = match[2]
    const hasStatus = body.includes('**Status:**')
    const hasExcerpt = body.includes('**Short excerpt:**')
    const isPublicReady = /public-ready/i.test(body)
    const isGoogleReview = /Google review|Google Business Profile review/i.test(body)
    if (hasStatus && hasExcerpt && isPublicReady && isGoogleReview) {
      count += 1
    }
  }

  return count
}

function syncSocialProof({ checkOnly = false } = {}) {
  const masterText = readUtf8(masterPath)
  const current = JSON.parse(readUtf8(socialProofPath))
  const next = {
    ...current,
    reviewCount: countPublicReadyGoogleReviews(masterText),
  }

  const nextText = `${JSON.stringify(next, null, 2)}\n`
  const prevText = readUtf8(socialProofPath)
  const changed = prevText !== nextText

  if (!checkOnly && changed) {
    fs.writeFileSync(socialProofPath, nextText, 'utf8')
  }

  return changed
}

const checkOnly = process.argv.includes('--check')
const changed = syncSocialProof({ checkOnly })

if (checkOnly && changed) {
  console.error('Social proof data is out of sync with the testimonial master.')
  process.exit(1)
}

console.log(changed ? 'Social proof synced.' : 'Social proof already in sync.')

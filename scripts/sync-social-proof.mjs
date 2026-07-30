import fs from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const socialProofPath = path.join(repoRoot, 'src', 'data', 'site-social-proof.json')
const driveRoot = process.env.MMG_DRIVE_ROOT || 'G:\\My Drive\\Mr Mallorca Golf'
const defaultMasterPath = path.join(driveRoot, 'Reference', 'MMG_TESTIMONIALS_AND_FEEDBACK.md')

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function resolveMasterPath() {
  const candidates = [
    process.env.MMG_TESTIMONIAL_MASTER_PATH,
    path.join(repoRoot, 'MMG_TESTIMONIALS_AND_FEEDBACK.md'),
    defaultMasterPath,
  ].filter(Boolean)

  return candidates.find((candidate) => fs.existsSync(candidate)) ?? null
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
  const current = JSON.parse(readUtf8(socialProofPath))
  const masterPath = resolveMasterPath()

  if (!masterPath) {
    if (checkOnly) {
      console.warn(
        'Skipping social proof sync check because no testimonial master file was found. ' +
          'Set MMG_TESTIMONIAL_MASTER_PATH or add MMG_TESTIMONIALS_AND_FEEDBACK.md at the repo root to enable it.',
      )
      return false
    }

    throw new Error(
      'No testimonial master file found. Set MMG_TESTIMONIAL_MASTER_PATH or add MMG_TESTIMONIALS_AND_FEEDBACK.md at the repo root.',
    )
  }

  const masterText = readUtf8(masterPath)
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

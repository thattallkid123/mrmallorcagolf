// Social platforms are more reliable with JPEG than WebP, so guide metadata
// uses a same-stem JPEG copy. Generate only those metadata images instead of
// duplicating every WebP under public/images.

import sharp from 'sharp'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getGuideArticleContent } from '../src/lib/guide-article-content.js'
import { getGuidePostContent } from '../src/lib/guide-post-content.js'
import {
  ALL_LOCALES,
  ARTICLE_SLUGS,
  EN_ONLY_ARTICLE_SLUGS,
  EN_ONLY_REVIEW_POST_SLUGS,
  REVIEW_POST_SLUGS,
} from '../src/lib/site.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesRoot = join(__dirname, '..', 'public', 'images')

function addWebPPath(paths, imageValue) {
  if (typeof imageValue !== 'string' || !/\.webp(?:[?#].*)?$/i.test(imageValue)) return

  const pathname = imageValue.startsWith('http') ? new URL(imageValue).pathname : imageValue
  if (!pathname.startsWith('/images/')) {
    throw new Error(`Guide social image must be under /images/: ${imageValue}`)
  }

  paths.add(decodeURIComponent(pathname.slice('/images/'.length)))
}

function collectSocialWebPs() {
  const paths = new Set()
  const reviewSlugs = new Set([...REVIEW_POST_SLUGS, ...EN_ONLY_REVIEW_POST_SLUGS])

  for (const slug of reviewSlugs) {
    const locales = EN_ONLY_REVIEW_POST_SLUGS.has(slug) ? ['en'] : ALL_LOCALES
    for (const locale of locales) {
      addWebPPath(paths, getGuidePostContent(slug, locale)?.metadata?.imagePath)
    }
  }

  for (const slug of ARTICLE_SLUGS) {
    const locales = EN_ONLY_ARTICLE_SLUGS.has(slug) ? ['en'] : ALL_LOCALES
    for (const locale of locales) {
      addWebPPath(paths, getGuideArticleContent(slug, locale)?.metadata?.image)
    }
  }

  return [...paths].sort()
}

const socialWebPs = collectSocialWebPs()
let converted = 0
let skipped = 0

if (process.argv.includes('--list')) {
  socialWebPs.forEach((relativePath) => console.log(`/images/${relativePath}`))
}

for (const relativePath of socialWebPs) {
  const src = join(imagesRoot, ...relativePath.split('/'))
  const dest = src.replace(/\.webp$/i, '.jpg')

  if (!existsSync(src)) {
    throw new Error(`Missing guide social-image source: /images/${relativePath}`)
  }
  if (existsSync(dest)) {
    skipped++
    continue
  }

  await sharp(src).jpeg({ quality: 85, mozjpeg: true }).toFile(dest)
  console.log(`Converted social image: /${relativePath}`)
  converted++
}

console.log(
  `✓ Guide social images ready: ${socialWebPs.length} required, ${converted} converted, ${skipped} already existed.`,
)

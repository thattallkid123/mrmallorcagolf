// Converts all WebP images in public/images to JPEG for OG image generation.
// satori (Next.js ImageResponse) does not support WebP.
// Runs automatically before every build via "prebuild" in package.json.
// Safe to run repeatedly — skips files that already have a JPEG version.

import sharp from 'sharp'
import { readdirSync, statSync, existsSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesRoot = join(__dirname, '..', 'public', 'images')

function findWebPs(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...findWebPs(full))
    } else if (extname(entry).toLowerCase() === '.webp') {
      results.push(full)
    }
  }
  return results
}

const webps = findWebPs(imagesRoot)
let converted = 0
let skipped = 0

for (const src of webps) {
  const dest = src.replace(/\.webp$/i, '.jpg')
  if (existsSync(dest)) {
    skipped++
    continue
  }
  try {
    await sharp(src).jpeg({ quality: 85, mozjpeg: true }).toFile(dest)
    console.log(`Converted: ${src.replace(imagesRoot, '')}`)
    converted++
  } catch {
    console.warn(`Skipped (unreadable): ${src.replace(imagesRoot, '')}`)
  }
}

if (converted > 0) console.log(`\n✓ ${converted} image(s) converted, ${skipped} already existed.`)
else console.log(`✓ OG images up to date (${skipped} JPEG versions already exist).`)

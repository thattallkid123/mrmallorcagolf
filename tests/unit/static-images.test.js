import { afterEach, expect, test } from 'vitest'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import sharp from 'sharp'
import { generateImageVariants } from '../../scripts/generate-image-variants.mjs'
import { staticImageUrl } from '../../src/lib/static-image-url'

const directories = []
afterEach(async () => { for (const directory of directories.splice(0)) await fs.rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }) })

test('responsive images preserve orientation, transparency, sources and invalidate changed content', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'mmg-responsive-test-'))
  directories.push(directory)
  const publicDirectory = path.join(directory, 'public')
  const outputDirectory = path.join(publicDirectory, 'images/responsive')
  const manifestPath = path.join(directory, 'manifest.json')
  await fs.mkdir(path.join(publicDirectory, 'images'), { recursive: true })
  const source = path.join(publicDirectory, 'images/portrait.jpg')
  const png = path.join(publicDirectory, 'images/logo.png')
  await sharp({ create: { width: 800, height: 400, channels: 3, background: 'red' } }).jpeg().withMetadata({ orientation: 6 }).toFile(source)
  await sharp({ create: { width: 100, height: 50, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).png().toFile(png)
  const original = await fs.readFile(source)
  const options = { publicDirectory, outputDirectory, manifestPath }
  const first = await generateImageVariants(options)
  expect(await fs.readFile(source)).toEqual(original)
  const url = staticImageUrl(first, { src: '/images/portrait.jpg', width: 384 })
  const metadata = await sharp(await fs.readFile(path.join(publicDirectory, url))).metadata()
  expect(metadata.width).toBe(384)
  expect(metadata.height).toBe(768)
  expect(metadata.orientation).toBeUndefined()
  const logo = staticImageUrl(first, { src: '/images/logo.png', width: 1920 })
  const logoMetadata = await sharp(await fs.readFile(path.join(publicDirectory, logo))).metadata()
  expect(logoMetadata.width).toBe(100)
  expect(logoMetadata.hasAlpha).toBe(true)
  const before = await fs.stat(path.join(publicDirectory, url))
  expect(await generateImageVariants(options)).toEqual(first)
  expect((await fs.stat(path.join(publicDirectory, url))).mtimeMs).toBe(before.mtimeMs)
  await sharp({ create: { width: 800, height: 400, channels: 3, background: 'blue' } }).jpeg().toFile(source)
  const second = await generateImageVariants(options)
  expect(second['/images/portrait.jpg'].key).not.toBe(first['/images/portrait.jpg'].key)
  await expect(fs.access(path.join(publicDirectory, url))).rejects.toThrow()
})

test('image URLs stay static for every size and supported quality', () => {
  const manifest = { '/images/photo.webp': { key: 'abc', widths: [128, 384, 640, 1080, 1600] } }
  for (const width of [32, 64, 128, 256, 384, 640, 828, 1080, 1200, 1920]) {
    const url = staticImageUrl(manifest, { src: '/images/photo.webp', width, quality: 88 })
    expect(url).toMatch(/^\/images\/responsive\/abc-[0-9]+-q88\.webp$/)
    const selected = Number(url.match(/abc-([0-9]+)/)[1])
    expect(selected).toBeGreaterThanOrEqual(Math.min(width, 1600))
  }
  expect(staticImageUrl(manifest, { src: '/logo.svg', width: 64 })).toBe('/logo.svg')
})

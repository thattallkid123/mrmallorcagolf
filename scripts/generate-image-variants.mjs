// Create responsive derivatives from the committed, web-sized source assets.
// Never overwrite sources. Run automatically before dev and production builds.
import fs from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const SOURCE_EXTENSIONS = /\.(?:jpe?g|jfif|png|webp|avif)$/i
const WIDTHS = [128, 384, 640, 828, 1080, 1200, 1920]
const QUALITIES = [75, 88]
const RECIPE = 'responsive-webp-v1'

async function walk(directory, excludedDirectory) {
  const files = []
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name)
    if (absolute === excludedDirectory) continue
    if (entry.isDirectory()) files.push(...await walk(absolute, excludedDirectory))
    else if (entry.isFile() && SOURCE_EXTENSIONS.test(entry.name)) files.push(absolute)
  }
  return files.sort()
}

export async function generateImageVariants({ publicDirectory, outputDirectory, manifestPath }) {
  const sources = await walk(publicDirectory, outputDirectory)
  await fs.mkdir(outputDirectory, { recursive: true })
  const expectedFiles = new Set()
  const generatedKeys = new Set()
  const manifest = {}
  let created = 0
  let reused = 0
  let cursor = 0
  // Limit simultaneous encodes so local and Vercel builds stay within memory.
  async function worker() {
    while (cursor < sources.length) {
      const source = sources[cursor++]
      const input = await fs.readFile(source)
      const metadata = await sharp(input).metadata()
      if ((metadata.pages || 1) > 1) continue
      const sourceWidth = metadata.autoOrient?.width || ([5, 6, 7, 8].includes(metadata.orientation) ? metadata.height : metadata.width)
      if (!sourceWidth) throw new Error('Cannot determine image width: ' + source)
      const maxWidth = Math.min(sourceWidth, WIDTHS.at(-1))
      const widths = [...new Set([...WIDTHS.filter(width => width < maxWidth), maxWidth])]
      const key = createHash('sha256').update(RECIPE).update(input).digest('hex').slice(0, 24)
      const src = '/' + path.relative(publicDirectory, source).split(path.sep).join('/')
      manifest[src] = { key, widths }
      if (generatedKeys.has(key)) continue
      generatedKeys.add(key)
      for (const width of widths) {
        for (const quality of QUALITIES) {
          const filename = key + '-' + width + '-q' + quality + '.webp'
          expectedFiles.add(filename)
          const destination = path.join(outputDirectory, filename)
          try { await fs.access(destination); reused++; continue } catch { /* New derivative. */ }
          const temporary = destination + ".tmp"
          await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(temporary)
          await fs.rename(temporary, destination)
          created++
        }
      }
    }
  }
  await Promise.all(Array.from({ length: 2 }, worker))
  // Only prune files owned by this generator, inside its exact output directory.
  for (const filename of await fs.readdir(outputDirectory)) {
    if (/^[a-f0-9]{24}-[0-9]+-q(?:75|88)\.webp$/.test(filename) && !expectedFiles.has(filename)) {
      await fs.unlink(path.join(outputDirectory, filename))
    }
  }
  const ordered = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b, 'en')))
  const text = JSON.stringify(ordered, null, 2) + '\n'
  await fs.mkdir(path.dirname(manifestPath), { recursive: true })
  let previous = ''
  try { previous = await fs.readFile(manifestPath, 'utf8') } catch { /* First build. */ }
  if (text !== previous) await fs.writeFile(manifestPath, text)
  console.log('Responsive images: ' + Object.keys(ordered).length + ' sources, ' + created + ' created, ' + reused + ' reused.')
  return ordered
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL('../', import.meta.url))
  generateImageVariants({
    publicDirectory: path.join(root, 'public'),
    outputDirectory: path.join(root, 'public/images/responsive'),
    manifestPath: path.join(root, 'src/data/image-variants.generated.json'),
  }).catch(error => { console.error(error); process.exitCode = 1 })
}

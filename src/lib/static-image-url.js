// Resolve build-generated image variants without calling a transformation service.
export function staticImageUrl(manifest, { src, width, quality = 75 }) {
  const image = manifest[src]
  // SVG, animated images and non-public sources are served directly.
  if (!image) return src
  const selectedWidth = image.widths.find(candidate => candidate >= width) || image.widths.at(-1)
  const selectedQuality = quality >= 82 ? 88 : 75
  if (selectedWidth === image.widths.at(-1) && image.originalQualities?.includes(selectedQuality)) return src
  return '/images/responsive/' + image.key + '-' + selectedWidth + '-q' + selectedQuality + '.webp'
}

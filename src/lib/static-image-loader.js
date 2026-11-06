'use client'

import manifest from '../data/image-variants.generated.json'
import { staticImageUrl } from './static-image-url'

export default function staticImageLoader(options) {
  return staticImageUrl(manifest, options)
}

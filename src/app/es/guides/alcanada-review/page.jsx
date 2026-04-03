import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../../../guides/GuidePostView'

const content = getGuidePostContent('alcanada-review', 'es')

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'es',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="es" meta={content.meta} blocks={content.blocks} />
}

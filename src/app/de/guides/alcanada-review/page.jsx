import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../../../guides/GuidePostView'

const content = getGuidePostContent('alcanada-review', 'de')

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'de',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="de" meta={content.meta} blocks={content.blocks} />
}

import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../../../guides/GuidePostView'

const content = getGuidePostContent('son-termes-review', 'sv')

export const metadata = buildGuidePostMetadata({
  slug: 'son-termes-review',
  locale: 'sv',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="sv" meta={content.meta} blocks={content.blocks} />
}

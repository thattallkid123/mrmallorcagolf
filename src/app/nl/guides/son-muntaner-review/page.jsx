import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../../../guides/GuidePostView'

const content = getGuidePostContent('son-muntaner-review', 'nl')

export const metadata = buildGuidePostMetadata({
  slug: 'son-muntaner-review',
  locale: 'nl',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="nl" meta={content.meta} blocks={content.blocks} />
}

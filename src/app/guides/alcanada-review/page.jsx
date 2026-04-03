import { buildGuidePostMetadata } from '../../../lib/page-metadata'
import { getGuidePostContent } from '../../../lib/guide-post-content'
import GuidePostView from '../GuidePostView'

const content = getGuidePostContent('alcanada-review', 'en')

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'en',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="en" meta={content.meta} blocks={content.blocks} />
}

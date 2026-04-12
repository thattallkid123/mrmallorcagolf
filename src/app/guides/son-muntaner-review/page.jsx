import { buildGuidePostMetadata } from '../../../lib/page-metadata'
import { getGuidePostContent } from '../../../lib/guide-post-content'
import GuidePostView from '../GuidePostView'

const content = getGuidePostContent('son-muntaner-review', 'en')

export const metadata = buildGuidePostMetadata({
  slug: 'son-muntaner-review',
  locale: 'en',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="en" meta={content.meta} blocks={content.blocks} />
}

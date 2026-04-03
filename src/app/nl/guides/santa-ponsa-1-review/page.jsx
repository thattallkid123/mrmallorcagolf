import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getLocalizedGuidePostContent } from '../../../../lib/guide-post-content-localized'
import GuidePostView from '../../../guides/GuidePostView'

const content = getLocalizedGuidePostContent('santa-ponsa-1-review', 'nl')

export const metadata = buildGuidePostMetadata({
  slug: 'santa-ponsa-1-review',
  locale: 'nl',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale='nl' meta={content.meta} blocks={content.blocks} />
}

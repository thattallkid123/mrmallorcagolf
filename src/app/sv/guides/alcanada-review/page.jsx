import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getLocalizedGuidePostContent } from '../../../../lib/guide-post-content-localized'
import GuidePostView from '../../../guides/GuidePostView'

const content = getLocalizedGuidePostContent('alcanada-review', 'sv')

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'sv',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale='sv' meta={content.meta} blocks={content.blocks} />
}

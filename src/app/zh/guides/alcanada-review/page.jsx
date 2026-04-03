import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getLocalizedGuidePostContent } from '../../../../lib/guide-post-content-localized'
import GuidePostView from '../../../guides/GuidePostView'

const content = getLocalizedGuidePostContent('alcanada-review', 'zh')

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'zh',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale='zh' meta={content.meta} blocks={content.blocks} />
}

import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../../../guides/GuidePostView'

const content = getGuidePostContent('son-gual-review', 'de')

export const metadata = buildGuidePostMetadata({
  slug: 'son-gual-review',
  locale: 'de',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="de" meta={content.meta} blocks={content.blocks} />
}

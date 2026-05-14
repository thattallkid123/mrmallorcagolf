import { buildGuidePostMetadata } from '../../../../lib/page-metadata'
import { getGuidePostContent } from '../../../../lib/guide-post-content'
import GuidePostView from '../../../guides/GuidePostView'

const content = getGuidePostContent('t-golf-calvia-review', 'de')

export const metadata = buildGuidePostMetadata({
  slug: 't-golf-calvia-review',
  locale: 'de',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

export default function Post() {
  return <GuidePostView locale="de" meta={content.meta} blocks={content.blocks} />
}

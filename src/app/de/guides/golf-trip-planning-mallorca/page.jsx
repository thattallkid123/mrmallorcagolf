import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-trip-planning-mallorca')

export const metadata = buildGuideArticleMetadata('golf-trip-planning-mallorca', 'de')

export default function Post() {
  return <GuideArticleView locale="de" meta={content.meta} blocks={content.blocks} />
}

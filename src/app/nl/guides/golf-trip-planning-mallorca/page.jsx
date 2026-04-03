import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-trip-planning-mallorca', 'nl')

export const metadata = buildGuideArticleMetadata('golf-trip-planning-mallorca', 'nl')

export default function Post() {
  return <GuideArticleView locale="nl" meta={content.meta} blocks={content.blocks} />
}

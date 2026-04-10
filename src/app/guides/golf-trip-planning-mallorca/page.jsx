import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-trip-planning-mallorca')

export const metadata = buildGuideArticleMetadata('golf-trip-planning-mallorca')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

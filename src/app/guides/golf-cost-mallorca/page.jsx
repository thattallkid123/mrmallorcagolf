import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-cost-mallorca')

export const metadata = buildGuideArticleMetadata('golf-cost-mallorca')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

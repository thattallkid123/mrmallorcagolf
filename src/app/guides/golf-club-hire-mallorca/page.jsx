import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-club-hire-mallorca')

export const metadata = buildGuideArticleMetadata('golf-club-hire-mallorca')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('best-time-play-golf-mallorca')

export const metadata = buildGuideArticleMetadata('best-time-play-golf-mallorca')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

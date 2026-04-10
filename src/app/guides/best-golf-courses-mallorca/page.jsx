import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

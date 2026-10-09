import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('southwest-mallorca-golf-courses-compared')

export const metadata = buildGuideArticleMetadata('southwest-mallorca-golf-courses-compared')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

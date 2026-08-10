import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('5-day-mallorca-golf-itinerary')

export const metadata = buildGuideArticleMetadata('5-day-mallorca-golf-itinerary')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
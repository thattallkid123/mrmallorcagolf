import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-mallorca-golf-courses-higher-handicappers')

export const metadata = buildGuideArticleMetadata('best-mallorca-golf-courses-higher-handicappers')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca', 'sv')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca', 'sv')

export default function Post() {
  return <GuideArticleView locale="sv" meta={content.meta} blocks={content.blocks} />
}

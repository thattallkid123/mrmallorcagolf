import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-club-hire-mallorca', 'sv')

export const metadata = buildGuideArticleMetadata('golf-club-hire-mallorca', 'sv')

export default function Post() {
  return <GuideArticleView locale="sv" meta={content.meta} blocks={content.blocks} />
}

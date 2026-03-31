import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-time-play-golf-mallorca', 'fr')

export const metadata = buildGuideArticleMetadata('best-time-play-golf-mallorca', 'fr')

export default function Post() {
  return <GuideArticleView locale="fr" meta={content.meta} blocks={content.blocks} />
}

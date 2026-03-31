import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca', 'fr')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca', 'fr')

export default function Post() {
  return <GuideArticleView locale="fr" meta={content.meta} blocks={content.blocks} />
}

import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('is-mallorca-good-for-golf', 'fr')

export const metadata = buildGuideArticleMetadata('is-mallorca-good-for-golf', 'fr')

export default function Post() {
  return <GuideArticleView locale="fr" meta={content.meta} blocks={content.blocks} />
}

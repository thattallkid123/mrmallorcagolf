import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('is-mallorca-good-for-golf')

export const metadata = buildGuideArticleMetadata('is-mallorca-good-for-golf', 'es')

export default function Post() {
  return <GuideArticleView locale="es" meta={content.meta} blocks={content.blocks} />
}

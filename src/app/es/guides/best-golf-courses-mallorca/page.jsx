import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca', 'es')

export default function Post() {
  return <GuideArticleView locale="es" meta={content.meta} blocks={content.blocks} />
}

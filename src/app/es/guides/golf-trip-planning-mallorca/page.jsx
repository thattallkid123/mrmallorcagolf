import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-trip-planning-mallorca', 'es')

export const metadata = buildGuideArticleMetadata('golf-trip-planning-mallorca', 'es')

export default function Post() {
  return <GuideArticleView locale="es" meta={content.meta} blocks={content.blocks} />
}

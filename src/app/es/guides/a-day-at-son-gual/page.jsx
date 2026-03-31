import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual')

export const metadata = buildGuideArticleMetadata('a-day-at-son-gual', 'es')

export default function Post() {
  return <GuideArticleView locale="es" meta={content.meta} blocks={content.blocks} />
}

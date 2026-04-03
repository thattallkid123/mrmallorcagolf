import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual', 'fr')

export const metadata = buildGuideArticleMetadata('a-day-at-son-gual', 'fr')

export default function Post() {
  return <GuideArticleView locale="fr" meta={content.meta} blocks={content.blocks} />
}

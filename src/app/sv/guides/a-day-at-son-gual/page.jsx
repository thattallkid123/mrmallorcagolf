import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual', 'sv')

export const metadata = buildGuideArticleMetadata('a-day-at-son-gual', 'sv')

export default function Post() {
  return <GuideArticleView locale="sv" meta={content.meta} blocks={content.blocks} />
}

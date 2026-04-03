import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual', 'nl')

export const metadata = buildGuideArticleMetadata('a-day-at-son-gual', 'nl')

export default function Post() {
  return <GuideArticleView locale="nl" meta={content.meta} blocks={content.blocks} />
}

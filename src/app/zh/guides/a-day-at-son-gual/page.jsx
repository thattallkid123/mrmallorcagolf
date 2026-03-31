import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual', 'zh')

export const metadata = buildGuideArticleMetadata('a-day-at-son-gual', 'zh')

export default function Post() {
  return <GuideArticleView locale="zh" meta={content.meta} blocks={content.blocks} />
}

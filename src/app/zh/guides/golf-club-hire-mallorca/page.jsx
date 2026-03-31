import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('golf-club-hire-mallorca', 'zh')

export const metadata = buildGuideArticleMetadata('golf-club-hire-mallorca', 'zh')

export default function Post() {
  return <GuideArticleView locale="zh" meta={content.meta} blocks={content.blocks} />
}

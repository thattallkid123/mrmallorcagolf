import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-time-play-golf-mallorca', 'zh')

export const metadata = buildGuideArticleMetadata('best-time-play-golf-mallorca', 'zh')

export default function Post() {
  return <GuideArticleView locale="zh" meta={content.meta} blocks={content.blocks} />
}

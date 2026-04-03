import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-time-play-golf-mallorca', 'de')

export const metadata = buildGuideArticleMetadata('best-time-play-golf-mallorca', 'de')

export default function Post() {
  return <GuideArticleView locale="de" meta={content.meta} blocks={content.blocks} />
}

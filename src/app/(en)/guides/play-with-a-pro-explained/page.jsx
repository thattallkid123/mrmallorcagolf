import GuideArticleView from '../GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('play-with-a-pro-explained')

export const metadata = buildGuideArticleMetadata('play-with-a-pro-explained')

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}

import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca', 'de')

export default function Post() {
  return <GuideArticleView locale="de" meta={content.meta} blocks={content.blocks} />
}

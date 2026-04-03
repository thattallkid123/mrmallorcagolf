import GuideArticleView from '../../../guides/GuideArticleView'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('is-mallorca-good-for-golf', 'de')

export const metadata = buildGuideArticleMetadata('is-mallorca-good-for-golf', 'de')

export default function Post() {
  return <GuideArticleView locale="de" meta={content.meta} blocks={content.blocks} />
}

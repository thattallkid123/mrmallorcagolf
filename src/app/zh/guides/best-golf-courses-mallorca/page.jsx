import GuideArticleView from '../../../guides/GuideArticleView'
import GolfCoursesClient from '../../../golf-courses/GolfCoursesClient'
import { buildGuideArticleMetadata, getGuideArticleContent } from '../../../../lib/guide-article-content'

const content = getGuideArticleContent('best-golf-courses-mallorca', 'zh')

export const metadata = buildGuideArticleMetadata('best-golf-courses-mallorca', 'zh')

export default function Post() {
  return (
    <GuideArticleView locale="zh" meta={content.meta} blocks={content.blocks}>
      <GolfCoursesClient lang="zh" />
    </GuideArticleView>
  )
}

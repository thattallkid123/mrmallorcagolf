export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/course-selector', 'zh', {

  title: '马略卡高尔夫球场推荐',
  description: '回答7个问题，找到最适合你的马略卡高尔夫球场。',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import ZhCourseSelectorClient from '../../course-selector/ZhCourseSelectorClient'

export default function ZhCourseSelectorTool() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <ZhCourseSelectorClient />
    </PageLayout>
  )
}

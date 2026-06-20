export const dynamic = 'force-dynamic'

export const metadata = {
  title: '马略卡高尔夫球场推荐',
  description: '回答7个问题，找到最适合你的马略卡高尔夫球场。',
  robots: { index: false, follow: false },
}

import PageLayout from '../../../../components/PageLayout'
import ZhCourseSelectorClient from '../../course-selector/ZhCourseSelectorClient'

export default function ZhCourseSelectorTool() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <ZhCourseSelectorClient />
    </PageLayout>
  )
}

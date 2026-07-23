import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: '马略卡全部 24 座高尔夫球场地图 | 互动指南',
  description: '展示马略卡全部 24 座高尔夫球场的互动地图。可按区域筛选（帕尔马、西南、南部、东部、北部），点击定位每座球场。',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          全部 24 座球场地图
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          马略卡全部 24 座高尔夫球场尽在一张互动地图。可按区域筛选，或点击球场进行定位。有两个标记各代表两座球场：Santa Ponsa 2 和 3，以及 Son Antem East 和 West。
        </p>
        <CourseMapView lang="zh" />
      </div>
    </PageLayout>
  )
}

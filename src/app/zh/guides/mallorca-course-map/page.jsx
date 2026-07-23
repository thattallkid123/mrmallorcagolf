// Template for locale-specific course map page
// Replace zh with actual locale

import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Map of All 24 Golf Courses in Mallorca | Interactive Guide',
  description: 'Interactive map showing all 24 Mallorca golf courses. Filter by region (Palma, Southwest, South, East, North). Click to locate each course.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Map of All 24 Courses
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          All 24 Mallorca golf courses on one interactive map. Filter by region, click a course name to locate it on the map, or hover over a pin to see which courses share a location.
        </p>
        <CourseMapView lang="zh" />
      </div>
    </PageLayout>
  )
}

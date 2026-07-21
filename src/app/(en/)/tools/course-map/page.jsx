export const metadata = {
  title: 'Map of 24 Golf Courses in Mallorca | Mr Mallorca Golf',
  description: 'Interactive map showing all 24 Mallorca golf courses. Filter by region (Palma, Southwest, South, East, North). Click to locate each course.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export default function CourseMapTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Where to Play in Mallorca
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          All 24 courses on the island, mapped and filterable by region. Click a course name to locate it, or hover over a pin to see which courses are nearby.
        </p>
        <CourseMapView lang="en" />
      </div>
    </PageLayout>
  )
}

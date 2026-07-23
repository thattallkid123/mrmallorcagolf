import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Map of All 24 Golf Courses in Mallorca | Interactive Guide',
  description: 'Interactive map of all 24 Mallorca golf courses. Filter by region (Palma, Southwest, South, East, North) and click to locate each course.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'calc(var(--nav-h) + 40px) 24px 80px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Map of All 24 Courses
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          All 24 Mallorca golf courses on one interactive map. Filter by region, or click a course to locate it. A couple of pins hold two courses each: Santa Ponsa 2 and 3, and Son Antem East and West.
        </p>
        <CourseMapView lang="en" />
      </div>
    </PageLayout>
  )
}

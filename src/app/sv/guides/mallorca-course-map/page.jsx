import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Karta över alla 24 golfbanor på Mallorca | Interaktiv guide',
  description: 'Interaktiv karta över alla 24 golfbanor på Mallorca. Filtrera efter region (Palma, sydväst, söder, öster, norr) och hitta varje bana.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'calc(var(--nav-h) + 40px) 24px 80px' }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Karta över alla 24 banor
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          Alla 24 golfbanor på Mallorca på en interaktiv karta. Filtrera efter region eller klicka på en bana för att hitta den. Två nålar rymmer två banor var: Santa Ponsa 2 och 3, samt Son Antem East och West.
        </p>
        <CourseMapView lang="sv" />
      </div>
    </PageLayout>
  )
}

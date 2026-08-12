import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Karte aller 24 Golfplätze auf Mallorca | Interaktiver Überblick',
  description: 'Interaktive Karte mit allen 24 Golfplätzen auf Mallorca. Filtern Sie nach Region (Palma, Südwesten, Süden, Osten, Norden) und finden Sie jeden Platz.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'calc(var(--nav-h) + 40px) 24px 80px' }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Karte aller 24 Plätze
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          Alle 24 Golfplätze Mallorcas auf einer interaktiven Karte. Filtern Sie nach Region oder klicken Sie auf einen Platz, um ihn zu finden. Zwei Markierungen stehen für je zwei Plätze: Santa Ponsa 2 und 3 sowie Son Antem East und West.
        </p>
        <CourseMapView lang="de" />
      </div>
    </PageLayout>
  )
}

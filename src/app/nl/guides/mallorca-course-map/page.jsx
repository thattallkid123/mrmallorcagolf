import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Kaart van alle 24 golfbanen op Mallorca | Interactief overzicht',
  description: 'Interactieve kaart met alle 24 golfbanen op Mallorca. Filter op regio (Palma, zuidwesten, zuiden, oosten, noorden) en vind elke baan.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'calc(var(--nav-h) + 40px) 24px 80px' }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Kaart van alle 24 banen
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          Alle 24 golfbanen van Mallorca op één interactieve kaart. Filter op regio of klik op een baan om die te vinden. Twee pinnen staan elk voor twee banen: Santa Ponsa 2 en 3, en Son Antem East en West.
        </p>
        <CourseMapView lang="nl" />
      </div>
    </PageLayout>
  )
}

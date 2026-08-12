import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Mapa de los 24 campos de golf de Mallorca | Guía interactiva',
  description: 'Mapa interactivo con los 24 campos de golf de Mallorca. Filtra por región (Palma, suroeste, sur, este, norte) y localiza cada campo.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'calc(var(--nav-h) + 40px) 24px 80px' }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Mapa de los 24 campos
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          Los 24 campos de golf de Mallorca en un mapa interactivo. Filtra por región o haz clic en un campo para localizarlo. Un par de marcadores agrupan dos campos cada uno: Santa Ponsa 2 y 3, y Son Antem East y West.
        </p>
        <CourseMapView lang="es" />
      </div>
    </PageLayout>
  )
}

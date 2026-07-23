import PageLayout from '../../../../components/PageLayout'
import CourseMapView from '../../../../components/CourseMapView'

export const metadata = {
  title: 'Carte des 24 parcours de golf de Majorque | Guide interactif',
  description: 'Carte interactive des 24 parcours de golf de Majorque. Filtrez par région (Palma, sud-ouest, sud, est, nord) et localisez chaque parcours.',
  robots: { index: true, follow: true },
}

export default function MallorcaCourseMapGuide() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#1A1916', marginBottom: 24 }}>
          Carte des 24 parcours
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', color: '#6B6862', marginBottom: 32, maxWidth: '640px', lineHeight: 1.6 }}>
          Les 24 parcours de golf de Majorque sur une carte interactive. Filtrez par région ou cliquez sur un parcours pour le localiser. Deux repères regroupent chacun deux parcours : Santa Ponsa 2 et 3, et Son Antem East et West.
        </p>
        <CourseMapView lang="fr" />
      </div>
    </PageLayout>
  )
}

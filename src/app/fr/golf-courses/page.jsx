import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Guide Golf Majorque 2026 â€” Tous les Parcours de l\'ÃŽle',
  description: 'Le guide complet du golf Ã  Majorque â€” 22 parcours, green fees, Ã©valuations de difficultÃ©, et recommandations honnÃªtes d\'un professionnel PGA basÃ© sur l\'Ã®le. Ã‰dition 2026.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/fr/golf-courses',
    languages: {
      'en': 'https://mrmallorcagolf.com/golf-courses',
      'de': 'https://mrmallorcagolf.com/de/golf-courses',
      'es': 'https://mrmallorcagolf.com/es/golf-courses',
      'fr': 'https://mrmallorcagolf.com/fr/golf-courses',
      'nl': 'https://mrmallorcagolf.com/nl/golf-courses',
      'sv': 'https://mrmallorcagolf.com/sv/golf-courses',
      'zh': 'https://mrmallorcagolf.com/zh/golf-courses',
      'x-default': 'https://mrmallorcagolf.com/golf-courses',
    }
  }
}

export default function GolfCourses() {
  return (
    <>
    <link rel="preload" as="image" href="/images/golf-courses.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Parcours de Golf Ã  Majorque</span></p>
          <h1>Golf Ã  Majorque 2026 â€”<br />Un Guide InitiÃ©</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Parcours Couverts</span>
            <span className="page-hero__tag">Green Fees ActualisÃ©s 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… Avis d\'Expert Directe</span>
            <span className="page-hero__tag">Professionnel PGA</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient lang="fr" />

    </PageLayout>
    </>
  )
}






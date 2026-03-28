import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import GolfCoursesClient from './GolfCoursesClient'

export const metadata = {
  title: 'Guide Golf Majorque 2026 — Tous les Parcours de l\'Île',
  description: 'Le guide complet du golf à Majorque — 22 parcours, green fees, évaluations de difficulté, et recommandations honnêtes d\'un professionnel PGA basé sur l\'île. Édition 2026.',
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
          <p className="breadcrumb"><Link href="/">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Parcours de Golf à Majorque</span></p>
          <h1>Golf à Majorque 2026 —<br />Un Guide Initié</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Parcours Couverts</span>
            <span className="page-hero__tag">Green Fees Actualisés 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Avis d\'Expert Directe</span>
            <span className="page-hero__tag">Professionnel PGA</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient lang="fr" />

    </PageLayout>
    </>
  )
}





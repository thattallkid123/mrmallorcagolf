import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'
import { buildGolfCoursesMetadata } from '../../../lib/page-metadata'

export const metadata = buildGolfCoursesMetadata('fr')

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






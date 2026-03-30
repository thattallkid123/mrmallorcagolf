import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'
import { buildGolfCoursesMetadata } from '../../../lib/page-metadata'

export const metadata = buildGolfCoursesMetadata('nl')

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
          <p className="breadcrumb"><Link href="/nl">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golfbanen op Mallorca</span></p>
          <h1>Golf op Mallorca 2026 —<br />Een Insidergids</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Banen</span>
            <span className="page-hero__tag">Greenfees 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Expertbeoordelingen uit de eerste hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient lang="nl" />

    </PageLayout>
    </>
  )
}






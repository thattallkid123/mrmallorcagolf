import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golfgids 2026 — Alle banen op het eiland',
  description: 'De complete gids voor golf op Mallorca — alle 22 banen, greenfees, moeilijkheidsgraden en eerlijke aanbevelingen van een PGA professional op het eiland. 2026 editie.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/nl/golf-courses',
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






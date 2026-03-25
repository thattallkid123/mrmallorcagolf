import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golfführer 2026 — Alle Plätze der Insel',
  description: 'Der vollständige Golfführer für Mallorca — alle 22 Plätze, Greenfees, Schwierigkeitsbewertungen und ehrliche Empfehlungen eines PGA Professionals auf der Insel. Ausgabe 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/golf-courses' },
}

export default function GolfCoursesDE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 40%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/de">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golfplätze auf Mallorca</span></p>
          <h1>Golf auf Mallorca 2026 —<br />Ein Insiderführer</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Plätze</span>
            <span className="page-hero__tag">Greenfees 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Expertenrezensionen aus erster Hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient lang="de" />
    </PageLayout>
  )
}

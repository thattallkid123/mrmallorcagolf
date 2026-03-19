import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golfguide 2026 — Alla banor pa on',
  description: 'Den kompletta guiden till golf pa Mallorca - alla 22 banor, greenavgifter, svårighetsbetyg och ärliga rekommendationer fran en PGA-proffs pa on.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/golf-courses' },
}

export default function GolfCourses_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/sv">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golfbanor pa Mallorca</span></p>
          <h1>Golf pa Mallorca 2026 —<br />En Insiders Guide</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 banor</span>
            <span className="page-hero__tag">Greenavgifter 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Expertrecensioner fran forsta hand</span>
            <span className="page-hero__tag">PGA-proffs</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient />
    </PageLayout>
  )
}





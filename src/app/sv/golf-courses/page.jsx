import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golfguide 2026 — Alla banor på ön',
  description: 'Den kompletta guiden till golf på Mallorca — alla 22 banor, greenavgifter, svårighetsbetyg och ärliga rekommendationer från en PGA-proffs på ön.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/golf-courses' },
}

export default function GolfCourses_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 40%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/sv">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golfbanor på Mallorca</span></p>
          <h1>Golf på Mallorca 2026 —<br />En Insiders Guide</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 banor</span>
            <span className="page-hero__tag">Greenavgifter 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Expertrecensioner från första hand</span>
            <span className="page-hero__tag">PGA-proffs</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient lang="sv" />
    </PageLayout>
  )
}

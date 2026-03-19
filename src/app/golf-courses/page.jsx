import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import GolfCoursesClient from './GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golf Guide 2026 — Every Course on the Island',
  description: 'The complete guide to golf in Mallorca — all 22 courses, green fees, difficulty ratings, and honest recommendations from a PGA professional based on the island. 2026 edition.',
}

export default function GolfCourses() {
  return (
    <PageLayout>
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golf Courses in Mallorca</span></p>
          <h1>Golf in Mallorca 2026 —<br />An Insider&apos;s Guide</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Courses Covered</span>
            <span className="page-hero__tag">Green Fees Updated 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Expert First-Hand Reviews</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient />

    </PageLayout>
  )
}





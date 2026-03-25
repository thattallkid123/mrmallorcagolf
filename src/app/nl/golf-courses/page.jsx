import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golfgids 2026 — Alle banen op het eiland',
  description: 'De complete gids voor golf op Mallorca — alle 22 banen, greenfees, moeilijkheidsgraden en eerlijke aanbevelingen van een PGA professional op het eiland.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/golf-courses' },
}

export default function GolfCourses_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <header className="page-hero" style={{position:'relative',overflow:'hidden'}}>
  <Image
    src="/images/golf-courses.jpg"
    alt=""
    fill
    priority
    sizes="100vw"
    style={{objectFit:'cover', objectPosition:'center 40%'}}
  />
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%)'}} />

        <div className="page-hero__inner" style={{position:'relative',zIndex:1}}>
          <p className="breadcrumb"><Link href="/nl">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golfbanen op Mallorca</span></p>
          <h1>Golf op Mallorca 2026 —<br />Een Insidergids</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 banen</span>
            <span className="page-hero__tag">Greenfees 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Expertbeoordelingen uit de eerste hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient lang="nl" />
    </PageLayout>
  )
}

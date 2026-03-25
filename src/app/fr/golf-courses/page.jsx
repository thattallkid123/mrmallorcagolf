import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: "Guide Golf Majorque 2026 — Tous les parcours de l'ile",
  description: "Le guide complet du golf a Majorque - 22 parcours, green fees, difficultes et recommandations d'un PGA professionnel base sur l'ile.",
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/golf-courses' },
}

export default function GolfCourses_FR() {
  return (
    <PageLayout lang="fr">
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
          <p className="breadcrumb"><Link href="/fr">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Parcours de golf a Majorque</span></p>
          <h1>Golf a Majorque 2026 —<br />Le Guide de l'Initié</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Parcours couverts</span>
            <span className="page-hero__tag">Green Fees 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… Avis d'expert de premiere main</span>
            <span className="page-hero__tag">Professionnel PGA</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient lang="fr" />
    </PageLayout>
  )
}

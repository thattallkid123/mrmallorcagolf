import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Guia de Golf en Mallorca 2026 — Todos los campos de la isla',
  description: 'La guia completa del golf en Mallorca — 22 campos, green fees, dificultades y recomendaciones honestas de un PGA profesional en la isla.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/golf-courses' },
}

export default function GolfCourses_ES() {
  return (
    <PageLayout lang="es">
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
          <p className="breadcrumb"><Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Campos de golf en Mallorca</span></p>
          <h1>Golf en Mallorca 2026 —<br />La Guia del Experto</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 campos</span>
            <span className="page-hero__tag">Green Fees 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Resenas de experto de primera mano</span>
            <span className="page-hero__tag">Profesional PGA</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient lang="es" />
    </PageLayout>
  )
}

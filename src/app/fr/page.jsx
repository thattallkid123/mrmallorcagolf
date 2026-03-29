import HomePageFR from './HomePageFR'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf â€” Les meilleurs parcours de Majorque avec un PGA Professionnel',
  description: 'ExpÃ©riences golf privÃ©es Ã  Majorque avec un PGA Advanced Professional. JournÃ©es complÃ¨tes sur Son Gual, Alcanada et plus â€” coaching sur parcours, tout organisÃ©.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr' },
}

export default function HomeFR() {
  return (
    <>
      <Nav transparent={true} lang="fr" />
      <RevealObserver />
      <main><HomePageFR /></main>
      <Footer lang="fr" />
    </>
  )
}


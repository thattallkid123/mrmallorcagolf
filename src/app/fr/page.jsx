import HomePageFR from './HomePageFR'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf — Les meilleurs parcours de Majorque avec un PGA Professionnel',
  description: 'Expériences golf privées à Majorque avec un PGA Advanced Professional. Journées complètes sur Son Gual, Alcanada et plus — coaching sur parcours, tout organisé.',
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

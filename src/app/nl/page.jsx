import HomePageNL from './HomePageNL'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf — De beste golfbanen van Mallorca met een PGA Professional',
  description: 'Privégolfervaringen op Mallorca met een PGA Advanced Professional. Volle dagen op Son Gual, Alcanada en meer — coaching op de baan, alles geregeld.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl' },
}

export default function HomeNL() {
  return (
    <>
      <Nav transparent={true} lang="nl" />
      <RevealObserver />
      <main><HomePageNL /></main>
      <Footer lang="nl" />
    </>
  )
}


import HomePageSV from './HomePageSV'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf — Mallorcas bästa golfbanor med en PGA-proffs',
  description: 'Privata golfupplevelser på Mallorca med en PGA Advanced Professional. Heldagar på Son Gual, Alcanada och mer — coaching på banan, allt ordnat.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv' },
}

export default function HomeSV() {
  return (
    <>
      <Nav transparent={true} lang="sv" />
      <RevealObserver />
      <main><HomePageSV /></main>
      <Footer lang="sv" />
    </>
  )
}


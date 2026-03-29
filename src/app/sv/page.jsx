import HomePageSV from './HomePageSV'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf â€” Mallorcas bÃ¤sta golfbanor med en PGA-proffs',
  description: 'Privata golfupplevelser pÃ¥ Mallorca med en PGA Advanced Professional. Heldagar pÃ¥ Son Gual, Alcanada och mer â€” coaching pÃ¥ banan, allt ordnat.',
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


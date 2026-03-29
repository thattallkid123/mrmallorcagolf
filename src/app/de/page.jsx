import HomePageDE from './HomePageDE'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf â€” Mallorcas beste GolfplÃ¤tze mit einem PGA Professional',
  description: 'Private Golferlebnisse auf Mallorca mit einem PGA Advanced Professional. GanztÃ¤gige Runden auf Son Gual, Alcanada und mehr â€” Coaching auf dem Platz, alles arrangiert.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de' },
}

export default function HomeDE() {
  return (
    <>
      <Nav transparent={true} lang="de" />
      <RevealObserver />
      <main><HomePageDE /></main>
      <Footer lang="de" />
    </>
  )
}


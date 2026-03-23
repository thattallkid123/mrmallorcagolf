import HomePageInner from './HomePageInner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'

export const metadata = {
  title: "Mr Mallorca Golf — Play Mallorca's Best Courses with a PGA Professional",
  description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more — on-course coaching, everything arranged.',
}

export default function Home() {
  return (
    <>
      <Nav transparent={true} />
      <RevealObserver />
      <main>
        <HomePageInner />
      </main>
      <Footer />
    </>
  )
}





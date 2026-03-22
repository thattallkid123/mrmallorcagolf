import HomePageInner from './HomePageInner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'

export const metadata = {
  title: "Mr Mallorca Golf — Play Mallorca's Best Courses with a PGA Professional",
  description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more — on-course coaching, everything arranged.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com',
    languages: {
      'en': 'https://mrmallorcagolf.com',
      'de': 'https://mrmallorcagolf.com/de',
      'es': 'https://mrmallorcagolf.com/es',
      'fr': 'https://mrmallorcagolf.com/fr',
      'zh': 'https://mrmallorcagolf.com/zh',
      'sv': 'https://mrmallorcagolf.com/sv',
      'nl': 'https://mrmallorcagolf.com/nl',
      'x-default': 'https://mrmallorcagolf.com',
    },
  },
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





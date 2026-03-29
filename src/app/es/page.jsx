import HomePageES from './HomePageES'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf â€” Los mejores campos de Mallorca con un Profesional PGA',
  description: 'Experiencias de golf privadas en Mallorca con un PGA Advanced Professional. DÃ­as completos en Son Gual, Alcanada y mÃ¡s â€” coaching en campo, todo organizado.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es' },
}

export default function HomeES() {
  return (
    <>
      <Nav transparent={true} lang="es" />
      <RevealObserver />
      <main><HomePageES /></main>
      <Footer lang="es" />
    </>
  )
}


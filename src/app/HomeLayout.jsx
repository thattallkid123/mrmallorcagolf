import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HomeLayout({ lang = 'en', children }) {
  return (
    <>
      <RevealObserver />
      <Nav lang={lang} transparent={true} />
      <main>{children}</main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

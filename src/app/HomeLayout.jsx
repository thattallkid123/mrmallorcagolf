import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ScrollToTopOnRouteChange from '../components/ScrollToTopOnRouteChange'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HomeLayout({ lang = 'en', children }) {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Nav lang={lang} transparent={true} />
      <main>{children}</main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

import Nav from './Nav'
import Footer from './Footer'
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange'
import WhatsAppButton from './WhatsAppButton'

export default function PageLayout({ children, lang, navTransparent = true }) {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Nav lang={lang} transparent={navTransparent} />
      <main>{children}</main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

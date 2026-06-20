import Nav from './Nav'
import Footer from './Footer'
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange'
import WhatsAppButton from './WhatsAppButton'
import ScrollDepthTracker from './ScrollDepthTracker'

export default function PageLayout({
  children,
  lang,
  navTransparent = true,
  showScrollReset = false,
  showWhatsAppButton = true,
  trackScrollDepth = false,
}) {
  return (
    <>
      {showScrollReset ? <ScrollToTopOnRouteChange /> : null}
      {trackScrollDepth ? <ScrollDepthTracker /> : null}
      <Nav lang={lang} transparent={navTransparent} />
      <main>{children}</main>
      <Footer lang={lang} />
      {showWhatsAppButton ? <WhatsAppButton lang={lang} /> : null}
    </>
  )
}

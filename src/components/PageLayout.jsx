import Nav from './Nav'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function PageLayout({ children, lang, navTransparent = true }) {
  return (
    <>
      <Nav lang={lang} transparent={navTransparent} />
      <main>{children}</main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

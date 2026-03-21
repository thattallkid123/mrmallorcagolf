import Nav from './Nav'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function PageLayout({ children, lang }) {
  return (
    <>
      <Nav lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}

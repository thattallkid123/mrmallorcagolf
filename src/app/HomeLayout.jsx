import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'

export default function HomeLayout({ lang = 'en', children }) {
  const navProps = lang === 'en' ? { transparent: true } : { transparent: true, lang }
  const footerProps = lang === 'en' ? {} : { lang }

  return (
    <>
      <Nav {...navProps} />
      <RevealObserver />
      <main>{children}</main>
      <Footer {...footerProps} />
    </>
  )
}

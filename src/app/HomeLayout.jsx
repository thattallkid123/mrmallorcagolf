import HomeNav from '../components/HomeNav'
import HomeFooter from '../components/HomeFooter'

export default function HomeLayout({ lang = 'en', children }) {
  return (
    <>
      <HomeNav lang={lang} />
      <main>{children}</main>
      <HomeFooter lang={lang} />
    </>
  )
}

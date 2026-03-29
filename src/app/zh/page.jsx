import HomePageZH from './HomePageZH'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf â€” ä¸ŽPGAèŒä¸šçƒæ‰‹åŒæ¸¸é©¬ç•¥å¡å²›æœ€ä½³çƒåœº',
  description: 'é©¬ç•¥å¡å²›é¡¶çº§ç§äººé«˜å°”å¤«ä½“éªŒï¼Œç”±PGAé«˜çº§èŒä¸šæ•™ç»ƒå…¨ç¨‹é™ªåŒã€‚Son Gualã€Alcanadaç­‰é¡¶çº§çƒåœºï¼Œä¸“ä¸šæŒ‡å¯¼ï¼Œå…¨ç¨‹å®‰æŽ’ã€‚',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh' },
}

export default function HomeZH() {
  return (
    <>
      <Nav transparent={true} lang="zh" />
      <RevealObserver />
      <main><HomePageZH /></main>
      <Footer lang="zh" />
    </>
  )
}


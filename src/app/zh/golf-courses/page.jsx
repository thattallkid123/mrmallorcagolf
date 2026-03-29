import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'é©¬æ´›å¡é«˜å°”å¤«æŒ‡å—2026 â€” å²›ä¸Šçš„æ¯ä¸€ä¸ªçƒåœº',
  description: 'å®Œæ•´çš„é©¬æ´›å¡é«˜å°”å¤«æŒ‡å—â€”â€”æ‰€æœ‰22ä¸ªçƒåœºã€æžœå²­è´¹ã€éš¾åº¦ç­‰çº§å’ŒPGAèŒä¸šé€‰æ‰‹çŽ°åœºçš„è¯šå®žæŽ¨èã€‚2026ç‰ˆã€‚',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/zh/golf-courses',
    languages: {
      'en': 'https://mrmallorcagolf.com/golf-courses',
      'de': 'https://mrmallorcagolf.com/de/golf-courses',
      'es': 'https://mrmallorcagolf.com/es/golf-courses',
      'fr': 'https://mrmallorcagolf.com/fr/golf-courses',
      'nl': 'https://mrmallorcagolf.com/nl/golf-courses',
      'sv': 'https://mrmallorcagolf.com/sv/golf-courses',
      'zh': 'https://mrmallorcagolf.com/zh/golf-courses',
      'x-default': 'https://mrmallorcagolf.com/golf-courses',
    }
  }
}

export default function GolfCourses() {
  return (
    <>
    <link rel="preload" as="image" href="/images/golf-courses.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">é¦–é¡µ</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>é©¬æ´›å¡é«˜å°”å¤«çƒåœº</span></p>
          <h1>2026å¹´é©¬æ´›å¡é«˜å°”å¤« â€”<br />å†…éƒ¨äººæŒ‡å—</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">æ¶µç›–22ä¸ªçƒåœº</span>
            <span className="page-hero__tag">æžœå²­è´¹å·²æ›´æ–°2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… ä¸“å®¶ç¬¬ä¸€æ‰‹è¯„æµ‹</span>
            <span className="page-hero__tag">PGAèŒä¸šé€‰æ‰‹</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient lang="zh" />

    </PageLayout>
    </>
  )
}






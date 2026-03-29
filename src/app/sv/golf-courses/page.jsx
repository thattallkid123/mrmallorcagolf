import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'

export const metadata = {
  title: 'Mallorca Golfguide 2026 â€” Alla banor pÃ¥ Ã¶n',
  description: 'Den kompletta guiden till golf pÃ¥ Mallorca â€” alla 22 banor, greenavgifter, svÃ¥righetsbetyg och Ã¤rliga rekommendationer frÃ¥n en PGA-professional baserad pÃ¥ Ã¶n. 2026-utgÃ¥van.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/sv/golf-courses',
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
          <p className="breadcrumb"><Link href="/">Hem</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Golfbanor pÃ¥ Mallorca</span></p>
          <h1>Golf pÃ¥ Mallorca 2026 â€”<br />En Insiders Guide</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">22 Banor tÃ¤ckta</span>
            <span className="page-hero__tag">Greenavgifter uppdaterade 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… Expert First-Hand Reviews</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient lang="sv" />

    </PageLayout>
    </>
  )
}






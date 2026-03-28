import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import GolfCoursesClient from './GolfCoursesClient'

export const metadata = {
  title: '马洛卡高尔夫指南2026 — 岛上的每一个球场',
  description: '完整的马洛卡高尔夫指南——所有22个球场、果岭费、难度等级和PGA职业选手现场的诚实推荐。2026版。',
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
          <p className="breadcrumb"><Link href="/zh">首页</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>马洛卡高尔夫球场</span></p>
          <h1>2026年马洛卡高尔夫 —<br />内部人指南</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">涵盖22个球场</span>
            <span className="page-hero__tag">果岭费已更新2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ 专家第一手评测</span>
            <span className="page-hero__tag">PGA职业选手</span>
          </div>
        </div>
      </header>

      <GolfCoursesClient lang="zh" />

    </PageLayout>
    </>
  )
}





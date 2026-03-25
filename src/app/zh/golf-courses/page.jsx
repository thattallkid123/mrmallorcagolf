import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../../app/golf-courses/GolfCoursesClient'

export const metadata = {
  title: '马略卡岛高尔夫指南2026 — 岛上所有球场',
  description: '马略卡岛高尔夫完整指南——22个球场、果岭费、难度评级以及岛上PGA职业球手的真实推荐。2026版。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/golf-courses' },
}

export default function GolfCourses_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 40%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">首页</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>马略卡岛高尔夫球场</span></p>
          <h1>马略卡岛高尔夫2026 —<br />内行人指南</h1>
          <div className="page-hero__meta">
            <span className="page-hero__tag">涵盖22个球场</span>
            <span className="page-hero__tag">2026年果岭费</span>
            <span className="page-hero__tag page-hero__tag--gold">★ 专家亲身评测</span>
            <span className="page-hero__tag">PGA职业球手</span>
          </div>
        </div>
      </header>
      <GolfCoursesClient lang="zh" />
    </PageLayout>
  )
}

import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import GolfCoursesClient from '../../golf-courses/GolfCoursesClient'
import { buildGolfCoursesMetadata } from '../../../lib/page-metadata'

export const metadata = buildGolfCoursesMetadata('zh')

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






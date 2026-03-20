import HomePageZH from './HomePageZH'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Mr Mallorca Golf — 与PGA职业球手同游马略卡岛最佳球场',
  description: '马略卡岛顶级私人高尔夫体验，由PGA高级职业教练全程陪同。Son Gual、Alcanada等顶级球场，专业指导，全程安排。',
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

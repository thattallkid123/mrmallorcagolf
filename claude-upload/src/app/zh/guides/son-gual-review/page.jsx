import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: "Son Gual  PGA2026",
  description: "PGASon Gual",
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides/son-gual-review' },
}

const meta = {
  badge: '', badgeGold: true, readTime: '6', updated: '20263',
  title: "Son GualPGA2026",
  intro: "",
  lang: 'zh',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada2026' },
    { slug: 'best-golf-courses-mallorca', title: '2026' },
    { slug: 'golf-cost-mallorca', title: '' },
    { slug: 'best-time-play-golf-mallorca', title: '' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <PostLayout meta={meta} lang="zh">

        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}></p>

        <p>Son Gual</p>

        <h2></h2>
        <p>Son GualPGA</p>
        <p>Son Gual</p>

        <h2></h2>
        <p>Son Gual</p>

        <div className="post-pull">
          <p>""</p>
        </div>

        <h2></h2>
        <p>1</p>
        <p>30</p>

        <h2></h2>
        <p>2007215812</p>

        <h2></h2>
        <p>202411</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">80165</span><span className="post-fact__label">2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label"></span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label"></span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label"></span></div>
        </div>

        <h2>2026</h2>
        <p>111211519803591116578115son-gual.com</p>
        <p>35454515WHS</p>

        <h2></h2>
        <p>Son Gual</p>

        <div className="post-cta">
          <p>Son Gual</p>
          <a href="/zh/play-with-a-pro"> </a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

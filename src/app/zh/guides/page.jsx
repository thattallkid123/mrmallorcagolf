import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: '马略卡岛高尔夫指南 — 球场评测与实用建议',
  description: 'PGA职业球手带来的马略卡岛高尔夫诚实指南。球场评测、果岭费用及行程规划 — 2026年更新版。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides' },
}

export default function GuidesIndex_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/zh" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>中文</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>指南</span>
          </p>
          <h1>马略卡岛高尔夫。<br />诚实指南。</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>球场评测、行程规划与果岭费用 — 由每周在此打球的PGA职业球手亲笔撰写。</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">2026年更新</span>
            <span className="page-hero__tag page-hero__tag--gold">★ 亲身体验评测</span>
            <span className="page-hero__tag">PGA职业球手</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        {/* COMING SOON — above the live guide */}
        <div style={{marginBottom:'2px',padding:'20px 24px',background:'var(--cream)',border:'1px solid var(--linen)',borderBottom:'none'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.5rem'}}>更多指南即将上线</p>
          <p style={{fontSize:'0.9rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:0}}>我正在逐一亲身体验岛上每个高尔夫球场，因此还有大量指南正在撰写中，即将陆续发布。真实评测，绝非宣传手册。敬请关注Alcanada评测、最佳球场综述、果岭费用详解及行程规划指南。</p>
        </div>

        {/* SON GUAL — live */}
        <Link href="/zh/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>球场评测</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>阅读约6分钟</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gual高尔夫球场马略卡岛 — PGA职业球手诚实点评（2026）</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>岛上我打球最多的球场。风的特性、果岭难度、收关几洞 — 以及奥巴马和纳达尔为何一再回访。</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>锦标赛级 · 标准杆72 · €80–165 · 需差点证明</p>
        </Link>

      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好上场了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>在这些球场之一与PGA职业球手并肩同场，来一场专属私人对决。</h2>
          <p>告诉我您的出行日期和期望。我会在24小时内亲自回复。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>了解体验项目 →</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">联系我们</Link>
        </div>
      </section>
    </PageLayout>
  )
}

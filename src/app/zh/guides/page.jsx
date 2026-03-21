import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: '马略卡岛高尔夫指南 — 球场评测与建议',
  description: '由PGA职业教练撰写的马略卡岛高尔夫诚实指南。球场评测、果岭费用及行程规划 — 2026年更新版。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides' },
}

const guides = [
  { slug: 'son-gual-review', badge: '球场评测', badgeGold: true, title: 'Son Gual高尔夫球场，马略卡 — PGA职业教练诚实评测（2026）', intro: '我在岛上打得最多的球场。风、果岭、收官几洞 — 以及奥巴马和纳达尔一再回来的原因。', readTime: '7分钟', keywords: '锦标赛级 · 标准杆72 · €80–165 · 需要差点证明' },
  { slug: 'alcanada-review', badge: '球场评测', badgeGold: true, title: '阿尔卡纳达高尔夫球场 — PGA职业教练诚实评测（2026）', intro: '我带客人来打球时，最希望他们能带着故事回家的球场。灯塔改变了一切。', readTime: '7分钟', keywords: '海滨球场 · 标准杆72 · €115–220 · 劳力士挑战巡回赛总决赛' },
  { slug: 'santa-ponsa-1-review', badge: '球场评测', badgeGold: true, title: '圣蓬萨1号高尔夫球场，马略卡 — PGA职业教练诚实评测（2026）', intro: '欧洲最长球场之一，拥有DP世界巡回赛历史，真正能帮助球手重拾一号木信心的球场。', readTime: '6分钟', keywords: '锦标赛级 · 标准杆72 · €77–126 · 对外开放' },
  { slug: 'best-golf-courses-mallorca', badge: '球场综述', badgeGold: true, title: '马略卡岛最佳高尔夫球场 — 诚实指南（2026）', intro: '马略卡岛拥有比大多数游客想象的更出色的高尔夫资源。22个球场，其中多个达到欧巡赛标准。', readTime: '8分钟', keywords: 'Son Gual · Alcanada · Son Muntaner · Golf de Andratx' },
  { slug: 'is-mallorca-good-for-golf', badge: '总览', badgeGold: false, title: '马略卡岛适合打高尔夫吗？PGA职业教练的回答', intro: '是的。但这是完整的答案 — 因为马略卡适合高尔夫的方式，从外部并不总是显而易见。', readTime: '6分钟', keywords: '世界级球场 · 全年开放 · 22个球场 · 球场之外' },
  { slug: 'best-time-play-golf-mallorca', badge: '最佳时节', badgeGold: false, title: '马略卡岛打高尔夫的最佳时节 — 月度指南（2026）', intro: '简短答案：10–11月和2–4月。但全年球场状况都比大多数人预期的要好。', readTime: '4分钟', keywords: '季节指南 · 逐月分析 · 果岭费时机' },
  { slug: 'golf-cost-mallorca', badge: '果岭费用', badgeGold: false, title: '马略卡岛打高尔夫要多少钱？2026完整费用明细', intro: '一轮球的费用从20欧到220欧不等，取决于球场和时间。由每周在此打球的人给出的诚实解析。', readTime: '5分钟', keywords: '果岭费 · 球杆租借 · 球车 · 全天费用' },
  { slug: 'golf-trip-planning-mallorca', badge: '行程规划', badgeGold: false, title: '如何规划完美的马略卡岛高尔夫之旅', intro: '没有旅游宣传，没有废话。哪些球场、何时前往、几轮球、如何出行 — 由一位住在这里的人告诉你。', readTime: '7分钟', keywords: '最佳时间 · 推荐球场 · 交通出行 · 周边活动' },
  { slug: 'golf-club-hire-mallorca', badge: '实用指南', badgeGold: false, title: '马略卡岛高尔夫球杆租借 — 全面指南（2026）', intro: '自带球具还是租借？哪些公司值得信赖，哪些应该避开。', readTime: '6分钟', keywords: '租借公司 · 价格 · 球场租借 · 实用建议' },
]

export default function GuidesIndex_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/zh" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>ZH</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Guides</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: '马略卡岛高尔夫。<br />诚实指南。'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            球场评测、行程规划与果岭费用 — 由每周在此打球的PGA职业教练撰写。
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">2026年更新</span>
            <span className="page-hero__tag page-hero__tag--gold">★ 亲身评测</span>
            <span className="page-hero__tag">PGA职业教练</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {guides.map((g) => (
            <Link key={g.slug} href={`/zh/guides/${g.slug}`} className="reveal"
              style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:g.badgeGold?'rgba(184,151,60,.12)':'rgba(45,74,62,.07)',color:g.badgeGold?'var(--gold)':'var(--taupe)',border:`1px solid ${g.badgeGold?'rgba(184,151,60,.25)':'var(--linen)'}`,flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好上场了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>在其中一个球场打一场私人球，有PGA职业教练全程陪同。</h2>
          <p>告诉我您的日期和期望，我将在24小时内亲自回复。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>查看体验套餐 →</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">联系我们</Link>
        </div>
      </section>
    </PageLayout>
  )
}

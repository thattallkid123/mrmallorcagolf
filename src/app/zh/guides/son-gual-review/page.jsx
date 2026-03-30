import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'son-gual-review',
  locale: 'zh',
  title: "Son Gual高尔夫球场马略卡岛 — PGA职业球手诚实点评（2026）",
  description: "PGA职业球手对马略卡岛Son Gual高尔夫球场的亲身评测。",
  imagePath: '/images/son-gual-blog/sg-hero.webp',
})

const meta = {
  badge: '球场评测', badgeGold: true, readTime: '阅读约6分钟', updated: '2026年3月',
  title: "Son Gual高尔夫球场马略卡岛 — PGA职业球手诚实点评（2026）",
  intro: "岛上我打球最多的球场。风的特性、果岭难度、收关几洞 — 以及奥巴马和纳达尔为何一再回访。",
  lang: 'zh',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada高尔夫球场 — 诚实点评 2026' },
    { slug: 'best-golf-courses-mallorca', title: '马略卡岛最佳高尔夫球场 2026' },
  ],
}


export default function Post() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <PostLayout meta={meta} lang="zh">
        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}>本文原版为英文，已翻译为简体中文。</p>

        <p>Son Gual是我在马略卡岛打球最多的球场，也是客户询问去哪打球时我最常推荐的地方。它确实很难，凡是预期轻松一天的人都会大吃一惊。</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-hero.webp" alt="Son Gual Golf Course" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>第一发球台</h2>
        <p>我第一次打Son Gual时，站在黑色发球台，风从左侧猛吹，同行的是一位PGA职业球友。当时在录制视频博客，这本身就增添了一份压力。我确实有点紧张。</p>
        <p>开球略微打在杆面偏跟处，但飞行距离比预期还远，勉强避开了沙坑。Son Gual沙坑极多，恰好布置在略有偏差的球着地之处。越看那些沙坑，它们似乎越变越大。</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-1.jpg" alt="Son Gual fairway" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>风的特性</h2>
        <p>Son Gual仿佛有自己独立的气候圈。我从家出发时风平浪静，到达第一发球台时，才发现风已经刮得很猛——而且这一刮就是四个小时。</p>
        <div className="post-pull"><p>"我在风平浪静的早晨出门，到了第一发球台才发现风势强劲。这一刮就是整整四个小时。"</p></div>
        <h2>果岭</h2>
        <p>快速、高台，对近杆失误毫不留情。一月份，果岭与果岭边缘的草坪修剪得如此紧密，对于那个季节来说实属罕见。</p>
        <p>那天与我同行的一位球友以为自己站在果岭上，便伸手拿了推杆。其实她距果岭还有约30码的边缘地带要走。球场的养护工作就是这么细致入微。</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-2.jpg" alt="Son Gual greens" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>球场介绍</h2>
        <p>托马斯·希梅尔2007年的设计巧妙利用了地形高差。第2洞拥有欧洲最大沙坑之一。从第15洞开始的收官段落被广泛认为是欧洲高尔夫最精彩的收官序列之一。</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'21/9'}}>
          <img src="/images/son-gual-blog/sg-3.webp" alt="Son Gual panoramic" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%'}} />
        </div>
        <h2>名人到访</h2>
        <p>拉法·纳达尔经常在此打球——据他本人说，这是他在岛上最喜欢的球场。巴拉克·奥巴马于2024年11月到访。</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-4.jpg" alt="Son Gual Golf" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€80–165</span><span className="post-fact__label">2026年果岭费区间</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">难度评级</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">锦标赛级布局</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">托马斯·希梅尔设计</span></div>
        </div>
        <h2>2026年果岭费</h2>
        <p>淡季：€115。1月维护期：仅限9洞，€80。春秋旺季：€165。夏季：€115。详情请参阅son-gual.com。</p>
        <p>会所职业店租杆：卡拉威€35，泰特列斯特€45。球车€45，电动手推车起价€15。须提供WHS差点证明。</p>
        <h2>总结</h2>
        <p>Son Gual是我在马略卡岛最喜欢的球场。无论与我游历各地打过的哪个球场相比，它都毫不逊色。</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-5.jpg" alt="Son Gual closing holes" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-cta">
          <p>我经常带客户前往Son Gual。您是否想与一位熟悉每个球洞的人同场竞技？</p>
          <a href="/zh/play-with-a-pro">了解与职业球手同场体验 →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}


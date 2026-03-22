import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'


function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}
export const metadata = {
  title: "Club de Golf Alcanada — A PGA Professional",
  description: "Alcanada golf course Mallorca reviewed by a PGA professional who plays it regularly. The lighthouse, the greens, the restaurant terrace, and the green fees for 2026.",
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "我带人来打球时希望他们能带着故事离开的球场。灯塔改变了一切。",
  lang: 'zh',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <PostLayout meta={meta} lang="zh">

        <PostImage
          src="/images/alcanada-blog/alc-7.jpg"
          alt="黄金时刻的Alcanada高尔夫俱乐部 — 灯塔与海湾"
          caption="黄金时刻的Alcanada。灯塔矗立在近海的小岛上——从18个球洞中的16个都能看到。"
        />

        <p>Alcanada是我带人打球时希望他们能带着故事回家的球场。这可能是全岛最令人难忘的一轮球。灯塔改变了一切。</p>

        <h2>环境</h2>
        <p>Robert Trent Jones Jr.设计了Alcanada，他对这段海岸线的处理令人叹服。站在后发球台上，灯塔在身后，地中海在四周延伸，这是那种罕见的高尔夫时刻——周围的景色让你忘记了自己打了多少杆。</p>
        <p>Alcanada的灯塔矗立在近岸的一座小岛上，从18个球洞中的16个都能看到。在一个晴朗的早晨，水面平静，光线穿越海湾，这是我在世界任何地方打过球的最美丽的环境之一。</p>

        <PostImage
          src="/images/alcanada-blog/alc-6.jpg"
          alt="客户在Alcanada击打开球，背景是灯塔"
          caption="身后是灯塔，左侧是大海，球道在前方延伸下去。"
        />

        <h2>后发球台</h2>
        <p>站在高处的后发球台是一种独特的体验。你感到无所不能——与其他一切都如此遥远，下面的人看起来像小点点。灯塔在身后，海湾向远处延伸，而你即将把球杆打向某个未知的深处。就是这种感觉。</p>

        <div className="post-pull">
          <p>"站在Alcanada的后发球台上令人难以置信。你感到无所不能。与世界其他地方如此遥远。每个人看起来都像一个小点，而你站在那里，高高在上，准备把driver打向某个深渊。"</p>
        </div>

        <PostImage
          src="/images/alcanada-blog/alc-2.jpg"
          alt="Alcanada果岭，背后是大海和山脉"
          caption="在晴朗的早晨可以看到海湾对面的Tramuntana山脉。"
        />

        <h2>果岭</h2>
        <p>正是在这里，Alcanada赢得了举办精英赛事的资格。在经历了一个困难的球洞之后，你来到坡度极大、速度极快、几乎没有简单推杆的果岭前。整个球场分布着58个沙坑，几乎每个洞都需要精准的进攻杆。</p>
        <p>果岭上坡度、速度和微妙弯曲的组合，正是将这个球场从单纯的风景胜地提升为真正考验技术球手的地方。</p>

        <PostImage
          src="/images/alcanada-blog/alc-5.jpg"
          alt="Alcanada球手，背后是地中海"
          caption="Alcanada的后发球台远高于球道。每次爬上去都值得。"
        />

        <h2>劳力士挑战巡回赛总决赛</h2>
        <p>Alcanada是劳力士挑战巡回赛总决赛的举办地——将于2026年10月第六次回归。这不是一个为巡回赛活动专门打扮的球场。这是一个始终配得上巡回赛的球场。打那些决定职业球手本赛季巡回赛资格的球洞，当你站在发球台上时会切身感受到这一点。</p>

        <PostImage
          src="/images/alcanada-blog/alc-1.jpg"
          alt="Alcanada劳力士大奖赛 — 第16洞"
          caption="Alcanada劳力士挑战巡回赛总决赛。将于2026年10月第六次回归。"
        />

        <h2>设计传承</h2>
        <p>Robert Trent Jones Jr.的父亲设计了Valderrama——1997年莱德杯的举办地——以及Pebble Beach的Spyglass Hill。RTJ Jr.还设计了昆明的春城湖畔高尔夫，被《高尔夫文摘》评为中国第一球场。这份传承是真实的，从Alcanada的路线规划中可以看出——没有什么是随意的，一切都充分利用了地形。</p>

        <PostImage
          src="/images/alcanada-blog/alc-4.jpg"
          alt="一群球手在夏日傍晚的Alcanada"
          caption="夏日傍晚的一轮球。Alcanada七月的光线别有一番景致。"
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">2026年果岭费范围</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">难度</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">沙坑数</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">距帕尔马</span></div>
        </div>

        <h2>实用信息</h2>
        <p>2026年果岭费：淡季（1月、12月）€115，旺季（3月至5月、9月至10月）€220。完整季节价格详见golf-alcanada.com。非西班牙高尔夫联合会会员需购买每日高尔夫许可证（每人€3）。</p>
        <p>球杆租赁：TaylorMade套装每18洞€38。球车€48，电动推车€20。Toptracer练习场非常适合正式热身——请善加利用。</p>
        <p>地址：Port d'Alcúdia，帕尔马以北约50分钟车程。留出充裕时间，不要匆忙离开。</p>

        <h2>餐厅露台</h2>
        <p>岛上打完球后吃午餐的最佳去处之一。餐厅由Grupo Babuxa经营——帕尔马知名Casa Gallega餐厅背后的集团——地中海料理，海景露台直面Alcanada灯塔。套餐午餐每人约€30。把它纳入计划——这不是一个让你匆忙离开的地方。</p>

        <PostImage
          src="/images/alcanada-blog/alc-hero.jpg"
          alt="Alcanada会所露台"
          caption="会所露台。"
        />

        <h2>总结</h2>
        <p>如果我想让某人爱上马略卡的高尔夫，Alcanada就是我会带他去的球场。果岭会考验你。北上的路程值得。之后的午餐不容错过。</p>

        <div className="post-cta">
          <p>Alcanada是我两个专业陪打日的核心球场之一。想要正式体验一下吗？</p>
          <a href="/zh/play-with-a-pro">了解专业陪打体验 →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}

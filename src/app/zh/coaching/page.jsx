import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: '马洛卡球场实地高尔夫教练 — PGA职业选手',
  description: '由PGA高级职业选手安迪·格里菲思提供的马洛卡球场实地高尔夫教练。真实条件下的真实改善——面向访客和常驻高尔夫球手。',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/zh/coaching',
    languages: {
      'en': 'https://mrmallorcagolf.com/coaching',
      'de': 'https://mrmallorcagolf.com/de/coaching',
      'es': 'https://mrmallorcagolf.com/es/coaching',
      'fr': 'https://mrmallorcagolf.com/fr/coaching',
      'nl': 'https://mrmallorcagolf.com/nl/coaching',
      'sv': 'https://mrmallorcagolf.com/sv/coaching',
      'zh': 'https://mrmallorcagolf.com/zh/coaching',
      'x-default': 'https://mrmallorcagolf.com/coaching',
    }
  }
}

const improvements = [
  { num: '01', title: '球场管理', text: '大多数业余高尔夫球手失分的主要原因是决策失误，而不是挥杆失误。选择正确的球杆、目标和球形——这些将90分与80分区分开来。我们在真实的时间内、真实的球洞上、真实的比分处于风险中的情况下进行工作。' },
  { num: '02', title: '压力下的击球选择', text: "在压力下崩溃的决策——当5号铁可以赢得这个洞时打出1号木，当安全打法能得分时打出英雄球——在球场上会以一种练习场永远看不到的方式暴露出来。我看到它们，命名它们，我们一起解决它们。" },
  { num: '03', title: '阅读果岭和坡度', text: '在真实球场果岭上推杆和切杆从根本上不同于练习果岭。速度、坡度、纹路、当下的压力——所有这些都改变了有效的方法。我们在实际条件下练习它。' },
  { num: '04', title: '在风中打球', text: "马洛卡多风。Son Gual特别在自己的风生态系统中。侧风中的选杆、弹道管理、在球似乎漂移时信任你的瞄准——这是你只有在真正刮风时才能处理的东西。" },
  { num: '05', title: '心理游戏和例程', text: '打坏球后你如何跟自己说话。你如何走向下一个发球台。你是否有赛前例程，以及在压力下它是否坚持。心理方面在练习场上完全看不见——只有当后果是真实的时才出现。' },
  { num: '06', title: '找到唾手可得的果实', text: "大多数高尔夫球手进步最快不是通过重建挥杆，而是通过一两个小的解锁。一位客户一生都在用劈杆切球。一次对话，换一根球杆，立即改善。没有技术工作。这种事情只在球场上才会出现。" },
  { num: '07', title: '真实条件下的一致性', text: "不平的谎言、紧球道、长草——球场要求的击球是练习场从不要求的。经常打这些球，实时反馈，这就是你建立一个在计数时出现的球感的方式。", full: true },
]

export default function Coaching() {
  return (
    <>
    <link rel="preload" as="image" href="/images/coaching-hero.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero coaching-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, 60% 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">首页</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>球场实地教练</span></p>
          <h1>打得更好的高尔夫。<br />无需改变一切。</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>面向访客和常驻高尔夫球手的球场实地教练。真实条件、真实决策、真实改善——没有技术过载，不会在第3洞就被遗忘。</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">为什么练习场还不够</p>
          <h2>你的练习场成绩没有在球场上转化，是有原因的。</h2>
          <p>练习场是平坦的、有控制的、无后果的。你在完美的垫子上击球，没有风、没有斜坡、没有计分、没人看着。然后你走上第1发球台，什么都转不了。</p>
          <p>球场实地教练把课程放在真正有帮助的地方。在球道上。在深草区。在有斜坡的球位上，伴随着你没有预料到的风。有一个真正重要的分数。那就是球局改变的地方——那就是我们工作的地方。</p>
          <div className="analogy-box">
            <p>&ldquo;想想拳击。你可以在垫子上训练几个星期，感到准备好了。然后你进行你的第一次对打，一切都改变了。高尔夫是一样的。第1发球台不是练习场。&rdquo;</p>
            <cite>— 安迪·格里菲思，PGA高级职业选手</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>问卷调查</p>
          <p>课程前的简短问卷塑造了这一天的形状。是什么困扰你，差距在哪里，成功看起来是什么样的。</p>
          <p>当我们走到第一发球台时，我已经知道要寻找什么。反馈是情境性的和诚实的——不是应用于每个人的通用课程计划。</p>
          <p>课程在Son Gual、Alcanada或匹配你的水平和目标的球场进行。</p>
          <Link href="/zh/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>讨论课程 &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="安迪·格里菲思在马洛卡球场教练高尔夫"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">实际改善的东西</p>
          <h2>和我一起打一轮时会改变的。</h2>
          <p className="improvements__sub">以及为什么它以练习场工作很少做到的方式坚持。</p>
        </div>
        <div className="improvements-grid">
          {improvements.map((imp, i) => (
            <div key={i} className={`improvement reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}${imp.full ? ' improvement--full' : ''}`}>
              <span className="improvement__num">{imp.num}</span>
              <h3>{imp.title}</h3>
              <p>{imp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">它如何工作</p>
          <h2>三个阶段。一次改变你如何打球的课程。</h2>
          <p>课程在Son Gual、Alcanada或匹配你的水平和目标的球场的球道上进行。我们一起打球，教练实时发生，反馈是情境性和诚实的——不是应用于每个人的通用课程计划。</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: '问卷调查', text: "课程前，你完成一份简短表格。是什么困扰你，差距在哪里，好的一天看起来是什么样的。到第一发球台时，我已经有了一幅画面。" },
            { num: '02', title: '这一轮', text: "我们一起打球。教练实时发生——正确时刻的正确观察。不是跑步评论。不是课程。改变你的分数的东西。" },
            { num: '03', title: '赛后总结', text: "午餐时，我们讨论改善的内容、继续进行的内容以及要带走的内容。诚实而清晰。让整个一天有意义的对话。" },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>这对谁有效</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>如果任何一个听起来很熟悉，这对你有效。</h2>
        </div>
        <div className="who-grid">
          {[
            { title: '访客高尔夫球手', text: '在岛上的时间内有重点的改善——不仅仅是打一轮。' },
            { title: '常驻高尔夫球手', text: '与一位打你玩的同样球场的专业人士进行常规工作。' },
            { title: '练习场/球场差距', text: '你的练习游戏从不转移。这就是我们修复的地方。' },
            { title: '更聪明，不是重建', text: '你想打得更好，没有从头开始的完整技术改造。' },
          ].map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好打得更好了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>取得联系以讨论课程。</h2>
          <p>告诉我你的游戏在哪里以及你想从中得到什么。我会围绕这个建立课程——不是一个通用程序。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>取得联系 &rarr;</Link>
          <Link href="/zh/play-with-a-pro" className="btn btn--outline-white">查看全部体验</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: '马略卡岛球场实地高尔夫指导 — PGA职业教练',
  description: '英国英国PGA高级职业教练Andy Griffiths在马略卡岛提供球场实地高尔夫指导。真实条件下的真实进步——面向来岛访问及岛上常驻球手。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/coaching' },
}

export default function Coaching_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">首页</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>球场实地指导</span></p>
          <h1>打出更好的高尔夫。<br />无需彻底改变。</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>面向来岛访问及常驻高尔夫球手的球场实地指导。真实条件，真实决策，真实进步——没有技术过载，也不会让大多数练习课在打到第3洞时就被遗忘。</p>
        </div>
      </header>

      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">为什么练习场远远不够</p>
          <h2>您的练习场状态无法在球场上重现，是有原因的。</h2>
          <p>练习场是平坦的、可控的、没有后果的。您在完美的发球垫上击球，没有风，没有坡度，成绩不计分。然后站上第一个发球台——什么都没法转化。</p>
          <p>球场实地指导把课程放在真正有效的地方。在球道上，在草深处，在意外的坡度上，面对没有预料到的侧风，在真正计分的情况下。那才是球技改变的地方——那才是我们工作的地方。</p>
          <div className="analogy-box">
            <p>&ldquo;想想拳击。你可以在沙袋上训练几个星期，感觉准备好了。然后进行第一次实战对练，一切都变了。高尔夫也一样。第一个发球台不是练习场。&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>赛前问卷</p>
          <p>课前的一份简短问卷，让我们在开始之前就已了解这一天的重点。您的困惑所在、差距所在、以及您对成功的定义。</p>
          <p>当我们走到第一个发球台时，我已经知道该关注什么。反馈是情境化且直接的——不是套用在所有人身上的通用教案。</p>
          <p>课程地点为Son Gual、Alcanada，或根据您的水平和目标匹配的其他球场。</p>
          <Link href="/zh/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>咨询课程安排 →</Link>
        </div>
      </section>

      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">真正会改变的东西</p>
          <h2>与我同打一轮，这些方面会发生变化。</h2>
          <p className="improvements__sub">以及为什么这种改变会留下来——这是练习场训练很少能做到的。</p>
        </div>
        <div className="improvements-grid">
          <div className="improvement reveal"><span className="improvement__num">01</span><h3>球场管理</h3><p>大多数业余球手失分的主要原因是决策失误，而非挥杆失误。选对球杆、目标和弹道——这才是将90分与80分区分开来的关键。</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">02</span><h3>压力下的击球选择</h3><p>那些在压力下崩溃的决策——明明五号铁赢得了这个洞，却拿出了一号木——在球场上会以一种练习场永远看不到的方式暴露出来。</p></div>
          <div className="improvement reveal"><span className="improvement__num">03</span><h3>读果岭与坡度</h3><p>在真实果岭上推杆和切杆，与在练习果岭上完全不同。球速、坡度、纹路、当下的压力感——这一切都会改变什么方法有效。</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">04</span><h3>在风中打球</h3><p>马略卡岛多风，Son Gual球场尤其拥有独特的风向生态。侧风下的选杆、弹道控制、在球似乎飘离时信任自己的瞄准——这些只有在真正刮风时才能练到。</p></div>
          <div className="improvement reveal"><span className="improvement__num">05</span><h3>心理与例行程序</h3><p>打了坏球之后你如何和自己说话。你如何走向下一个发球台。你有没有击球前例行程序，以及它在压力下是否还能保持。心理层面在练习场完全看不见。</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">06</span><h3>找到触手可及的突破</h3><p>大多数球手进步最快，靠的不是重建挥杆，而是一两个小小的关键解锁。一位球员一生都在用劈起杆切球。一次谈话，换一根球杆，立竿见影。</p></div>
          <div className="improvement reveal improvement--full"><span className="improvement__num">07</span><h3>真实条件下的稳定性</h3><p>不平的球位、窄道、长草区——球场要求的击球，练习场从不提出。在真实条件下反复打出这些球，配合实时反馈，才是打造一个在关键时刻不掉链子的球技的方式。</p></div>
        </div>
      </section>

      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">具体如何进行</p>
          <h2>三个阶段。一次改变您球技的课程。</h2>
          <p>课程在Son Gual、Alcanada或匹配球场的实地进行。我们一起打球，指导实时进行，反馈因情境而异、直接真实。</p>
        </div>
        <div className="how-steps reveal">
          <div className="how-step"><span className="how-step__num">01</span><div><h3>问卷填写</h3><p>课前，您填写一份简短表格。您的困惑所在、差距何处、何为成功。到第一个发球台时，我已有了画面。</p></div></div>
          <div className="how-step"><span className="how-step__num">02</span><div><h3>打球</h3><p>我们一起打球。指导实时发生——在正确的时机给出正确的观察。不是持续跑动式评论，而是真正改变您成绩的那一点。</p></div></div>
          <div className="how-step"><span className="how-step__num">03</span><div><h3>赛后复盘</h3><p>午餐期间，我们回顾进步之处、需要继续努力的方向，以及可以带走的东西。直接，清晰。</p></div></div>
        </div>
      </section>

      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>适合哪些人</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>如果以下任何一点让您感同身受，这正是为您设计的。</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><h3>来访高尔夫球手</h3><p>在岛上逗留期间的专项提升——不仅仅是打一轮球。</p></div>
          <div className="who-card reveal reveal-delay-1"><h3>常驻高尔夫球手</h3><p>与一位打同样球场的职业教练进行常规训练，持续、可量化的进步。</p></div>
          <div className="who-card reveal reveal-delay-2"><h3>练习场与球场的落差</h3><p>您的练习状态从未在球场上重现。这正是我们要解决的。</p></div>
          <div className="who-card reveal"><h3>更聪明，而非重建</h3><p>您想打得更好，但不想从头到尾推倒重来。</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好打出更好的成绩了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>联系我，一起安排一次课程。</h2>
          <p>告诉我您的球技现状和期望目标。我将围绕这些来设计课程——而非套用通用方案。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>立即联系 →</Link>
          <Link href="/zh/play-with-a-pro" className="btn btn--outline-white">查看全部体验项目</Link>
        </div>
      </section>
    </PageLayout>
  )
}

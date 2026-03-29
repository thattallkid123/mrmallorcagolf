import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: '关于安迪·格里菲思 — PGA职业选手，马洛卡',
  description: "安迪·格里菲思是英国PGA高级职业选手，现居马洛卡。曾任职于佩布尔滩、埃维昂，在中国执教11年。",
  alternates: {
    canonical: 'https://mrmallorcagolf.com/zh/about',
    languages: {
      'en': 'https://mrmallorcagolf.com/about',
      'de': 'https://mrmallorcagolf.com/de/about',
      'es': 'https://mrmallorcagolf.com/es/about',
      'fr': 'https://mrmallorcagolf.com/fr/about',
      'nl': 'https://mrmallorcagolf.com/nl/about',
      'sv': 'https://mrmallorcagolf.com/sv/about',
      'zh': 'https://mrmallorcagolf.com/zh/about',
      'x-default': 'https://mrmallorcagolf.com/about',
    }
  }
}

const credentials = [
  { title: '英国PGA高级职业选手', detail: '已进行超过15,000小时的教练课程' },
  { title: '应用高尔夫管理研究', detail: '伯明翰大学' },
  { title: 'TPI 3级认证', detail: '泰特利斯特表现研究所' },
  { title: 'Trackman大师认证', detail: '中国首位' },
  { title: 'US Kids Golf认证', detail: '全球前50名教练' },
  { title: '在上海11年', detail: '流利的普通话' },
  { title: '中国国家队', detail: '青少年精英及竞技教练' },
  { title: '数十亿次观看', detail: '抖音高尔夫教学视频内容' },
  { title: '出版作家', detail: 'BOOK_LINK', isBookLink: true },
  { title: '现居马洛卡', detail: '自2025年3月起' },
]


export default function About() {
  return (
    <>
    <link rel="preload" as="image" href="/images/about-secondary.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero about-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to top, rgba(26,25,22,0.88) 0%, rgba(26,25,22,0.4) 35%, transparent 65%), linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
        backgroundSize: 'auto, auto, cover',
        backgroundPosition: 'center, center, center 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">首页</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>关于</span></p>
          <h1>体验背后<br />的专业人士。</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA高级职业选手</span>
            <span className="cred-tag">Trackman大师认证</span>
            <span className="cred-tag">TPI 3级</span>
            <span className="cred-tag">现居马洛卡</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">职业早期</p>
            <h2>跟随两个大陆上最优秀的教练。</h2>
            <p>我从小就打高尔夫，最好成绩达到+1让杆数，但很早就意识到执教才是我的方向。在伯明翰大学学习应用高尔夫管理并获得PGA职业证书后，我开始建立职业生涯，跟随欧洲和北美最有经验的教练。</p>
            <p>早期的职业生涯让我来到了一些非凡的地方。我曾在佩布尔滩、多拉尔、埃维昂（女子大满贯赛）和英国公开赛期间执教。我还在一艘邮轮上执教了一个赛季，进行了世界航程——超过40个国家，我作为职业选手几乎无法涉及的地方都有了高尔夫体验。</p>
            <div className="pull-quote"><p>&ldquo;每个环境都不同。每个高尔夫球手都不同。这种多样性在早期塑造了之后的一切。&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">上海，2014–2025</p>
            <h2>在中国顶级执教十一年。</h2>
            <p>2014年，我搬到了上海。我带着明确的目标——为中国最好的学院建立教学项目——并在那里度过了成功的11年。</p>
            <p>中国在那个时期是一个非凡的执教环境。课程收费约每小时€500。客户期望真正的、可衡量的进步。这就是标准。职业标准与我在任何地方工作的要求一样高。</p>
            <p>我成为了该国首位Trackman大师，教练了来自中国国家队的运动员，并在抖音上建立了教练影响力，达到了数十亿次观看。我还精通了普通话，这改变了我与选手和家庭能够建立的教练关系的深度。</p>
            <p>经过11年，我已经实现了我的目标。我的长女在2023年出生。回到家乡的想法，以及建立自己事业的机会，变得无法抗拒。</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">马洛卡，2025–</p>
            <h2>22条球道，一座岛屿，以及通过重新开始打球而磨练的执教理念。</h2>
            <p>2025年3月，我与妻子伊娜搬到了马洛卡。更靠近英国的家人，全年阳光充足，一个真正非凡的高尔夫岛屿，大多数人没有充分认可。</p>
            <p>我开始认真打球了。在岛上每条球道之间打球。重新体验站在第一发球台并真正关心成绩的感觉。那种竞争本能——在多年全职执教中处于休眠状态——很快就回来了。</p>
            <div className="pull-quote"><p>&ldquo;从重新开始打球而来的执教理念很简单：最快的进步发生在球道上，而不是练习场。真实的条件，真实的决定。从中获得的进步往往会坚持。&rdquo;</p></div>
            <p>一位在亚洲执教超过十年的PGA职业选手，现在在欧洲最好的高尔夫岛之一举办私人高尔夫日。如果这听起来像是你正在寻找的那种日子——请与我联系。</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              alt="安迪·格里菲思 — 英国PGA高级职业选手，马洛卡"
              width={600}
              height={420}
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">证书</p>
            <ul className="cred-list">
              {credentials.map((c, i) => (
                <li key={i} className="cred-item">
                  <span className="cred-check">&#10003;</span>
                  <span className="cred-text"><strong>{c.title}</strong>{c.isBookLink ? (<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>《打出去——充实人生的高尔夫之旅》，2016年（亚马逊）</a>) : c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>与我一起在马洛卡的最佳球场打高尔夫。</h3>
            <p>私人日程在Son Gual、Alcanada及其他地点。全部安排妥当。全程在球道上的教练。</p>
            <Link href="/zh/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>查看体验 &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好打高尔夫了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>PGA高级职业选手。一个非凡的高尔夫岛屿。你的一轮。</h2>
          <p>告诉我你的日期、差点和你想要的东西。我会为你量身定制这一天。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>查看体验 &rarr;</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">取得联系</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}






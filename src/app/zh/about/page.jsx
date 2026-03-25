import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: '关于 Andy Griffiths — PGA职业球手，马略卡岛',
  description: 'Andy Griffiths是驻马略卡岛的英国英国PGA高级职业教练。曾执教于圆石滩、依云、在中国执教11年。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/about' },
}

export default function About_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <header className="page-hero" style={{position:'relative',overflow:'hidden'}}>
  <Image
    src="/images/about-secondary.jpg"
    alt=""
    fill
    priority
    sizes="100vw"
    style={{objectFit:'cover', objectPosition:'center 65%'}}
  />
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%)'}} />

        <div className="page-hero__inner" style={{position:'relative',zIndex:1}}>
          <p className="breadcrumb"><Link href="/zh">首页</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>关于Andy</span></p>
          <h1>幕后职业球手。</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">早年生涯</p>
            <h2>跟随两大洲最优秀的教练。</h2>
            <p>我自幼打高尔夫，差点曾达到+1，但很早便知道教练才是我的方向。在伯明翰大学完成高尔夫管理学专业学习、取得PGA职业资格后，我开始追随欧洲和北美最有经验的教练，逐步构建自己的职业生涯。</p>
            <p>那些早期岁月把我带到了一些非凡的地方。我先后在圆石滩、多拉尔、法国依云女子大满贯赛场以及英国公开赛执教，并在环球邮轮上度过了一整个赛季——途经四十余个国家，在大多数职业球手从未踏足的地方打过球。</p>
            <div className="pull-quote"><p>&ldquo;每一个环境都不同。每一位高尔夫球手都不同。正是这种早期的多元化经历，塑造了此后一切。&rdquo;</p></div>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">上海，2014–2025</p>
            <h2>在中国高坛执教十一年。</h2>
            <p>2014年，我移居上海，目标明确——为中国最好的高尔夫学院建立教学体系，并在此成功坚守了十一年。</p>
            <p>那个时期的中国是一个非凡的执教环境。高尔夫课程每小时收费约合500欧元，客户期待的是切实可见的进步，而非单纯的鼓励。对职业水准的要求之高，不亚于我曾工作过的任何地方。</p>
            <p>我成为全国首位Trackman大师认证教练，执教过中国国家队球员，并在抖音打造了一个浏览量高达数亿次的高尔夫教学账号。我还精通了普通话，这从根本上加深了与球员及家长之间的教练关系。</p>
            <p>十一年后，我实现了当初来此的目标。2023年，我的第一个女儿出生。回归家乡的渴望，以及构建属于自己事业的机会，已无法再被忽视。</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">马略卡岛，2025年至今</p>
            <h2>二十二个球场、一座岛，以及重返球场后磨砺出的执教哲学。</h2>
            <p>2025年3月，我与妻子Yina移居马略卡岛。这里离英国家人更近，全年阳光充沛，是一座真正卓越的高尔夫之岛，却往往被低估。</p>
            <p>我重新认真打起了球，一个接一个地探访岛上的每一个球场，重新体验站在第一个开球台上、真正在乎成绩的感觉。那种久违的竞技本能——在全职执教的岁月里沉睡已久——很快便回来了。</p>
            <div className="pull-quote"><p>&ldquo;重返球场后形成的执教理念很简单：最快速的进步发生在球场上，而非练习场。真实的条件，真实的决策，真实的后果。&rdquo;</p></div>
            <p>一位在亚洲执教逾十年的PGA职业球手，如今在欧洲最佳高尔夫之岛之一主持私人高尔夫日。如果这正是您所寻找的体验——请与我联系。</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <div style={{position:'relative',width:'100%',height:'420px'}}>
  <Image
    src="/images/about-andy-colour.jpg"
    alt="Andy Griffiths — UK PGA Advanced Professional, Mallorca"
    fill
    sizes="(max-width:768px) 100vw, 400px"
    style={{objectFit:'cover', objectPosition:'center top'}}
  />
</div>
          </div>
          <div className="creds reveal">
            <p className="creds__label">资质认证</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>UKPGA高级职业教练</strong>逾15,000小时执教经验</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>高尔夫管理学研究</strong>伯明翰大学</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>TPI三级认证</strong>Titleist表现学院</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Trackman大师认证</strong>中国首位</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>美国青少年高尔夫</strong>全球Top 50教练</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>在上海执教11年</strong>普通话流利</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>中国国家队</strong>精英青少年与竞技教练</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>数亿次播放量</strong>抖音高尔夫教学视频内容</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>已出版作者</strong>《<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)",textDecoration:"none"}}>Putting It Out There — A Life in Full Swing, 2016 (Amazon)</a>》，2016年</span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>现居马略卡岛</strong>自2025年3月起</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>与我同游马略卡岛最佳球场。</h3>
            <p>在Son Gual、Alcanada等球场的私人专属日。全程安排，球场实地指导。</p>
            <Link href="/zh/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>了解体验项目 →</Link>
          </div>
        </aside>
      </div>

      <CareerStrip label="执教地点与经历" heading="职业生涯的足迹。" />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>英国英国PGA高级职业教练。卓越的高尔夫之岛。您的球局。</h2>
          <p>告诉我您的日期、差点和期望。我将围绕您来规划这一天。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>了解体验项目 →</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">联系我</Link>
        </div>
      </section>
    </PageLayout>
  )
}

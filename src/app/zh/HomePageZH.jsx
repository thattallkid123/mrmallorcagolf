'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ 专家首选', region: '帕尔马 · 距市中心11公里', name: 'Son Gual', meta: ['锦标赛级','Par 72','€80–165'], stars: '★★★★★', difficulty: '难度 9/10', excerpt: 'Thomas Himmel 2007年设计作品，拥有独特的风向生态系统。终局四洞（15至18洞）堪称欧洲高尔夫最精彩的收官段落之一。' },
  { cls: 'course-card--2', badge: '★ 专家首选', region: 'Alcúdia · 马略卡岛北部', name: 'Alcanada', meta: ['海岸球场','Par 72','€95–175'], stars: '★★★★★', difficulty: '难度 8/10', excerpt: 'Robert Trent Jones Jr. 最具风景之作。第17洞——越过海湾的Par 3，灯塔就在旗杆正后方——是西班牙最受拍摄的球洞之一。' },
  { cls: 'course-card--3', badge: '2025年西班牙最佳', region: 'Son Vida · 帕尔马', name: 'Son Muntaner', meta: ['DP世界巡回赛','Par 72'], stars: '★★★★★', difficulty: '难度 7/10', excerpt: '荣获2025年世界高尔夫奖"西班牙最佳高尔夫球场"。俯瞰帕尔马湾美景，第15洞旁矗立着一棵千年橄榄树。' },
  { cls: 'course-card--4', badge: null, region: '圣蓬萨 · 西南部', name: 'Santa Ponsa 1', meta: ['DP世界巡回赛赛场','Par 72','€77–126'], stars: '★★★★☆', difficulty: '难度 8/10', excerpt: '2021年DP世界巡回赛马略卡公开赛举办地，岛上最长球场之一。' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · 西南部', name: 'Golf de Andratx', meta: ['最具挑战性','Par 70','€96–140'], stars: '★★★★☆', difficulty: '难度 9/10', excerpt: '第6洞以609米成为西班牙最长Par 5。球场建于海岸山丘之间，毫无妥协。请备足备用球，放下自我。' },
]

const faqs = [
  { q: '我需要是一位优秀的高尔夫球手吗？', a: '完全不需要。体验会根据您的水平调整——初学者和职业选手都能从中受益。唯一的要求，是希望享受一次真正与众不同的高尔夫体验。' },
  { q: '您通常在哪个球场？', a: '视您的情况而定。Son Gual和Alcanada是我的首选球场，适合认真的全日体验。对于初学者、团体或较短的球局，有更合适的选择——我会直接告诉您哪个更适合您。' },
  { q: '如何预订？', a: '直接联系我。告诉我您的日期和需求——我会在24小时内亲自回复。没有预订系统，无需等待。' },
  { q: '适合团体参与吗？', a: '当然。无论是单人、双人、朋友团还是企业团建，均可安排。至尊定制体验尤其受到商务团体和来岛高管的欢迎。' },
  { q: '一年中哪个时间最适合前来？', a: '十月、十一月、三月和四月是最佳时期，球场状态、天气、性价比与打球节奏的综合体验最佳。马略卡岛全年均可打球——一月份的球道状态，比英格兰八月的球道更为出色。' },
]

// Career venues for scrolling strip (replaces static grid)
const CAREER_VENUES = [
  { name: 'Pebble Beach', detail: 'California, USA' },
  { name: 'The Open Championship', detail: 'UK' },
  { name: 'Evian Championship', detail: "France · Women's Major" },
  { name: 'Doral', detail: 'Miami, USA' },
  { name: 'World Cruise', detail: '40+ Countries' },
  { name: 'TPI Oceanside', detail: 'California, USA' },
  { name: 'Egypt International Pro-Am', detail: 'Cairo, Egypt' },
  { name: 'Shanghai', detail: 'China · 11 Years' },
]

function CareerStrip() {
  const trackRef = useRef(null)
  const allVenues = [...CAREER_VENUES, ...CAREER_VENUES]
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf
    const tick = () => {
      pos += 0.4
      if (pos >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <section style={{background:'var(--deep)',padding:'clamp(48px,6vw,72px) 0',overflow:'hidden'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 clamp(20px,5vw,60px)',marginBottom:'2.5rem'}}>
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.75rem'}}>Venues &amp; experience</p>
        <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.8rem,3vw,2.6rem)'}}>Where the career was built.</h2>
      </div>
      <div style={{position:'relative',overflow:'hidden'}}>
        <div ref={trackRef} style={{display:'flex',gap:2,willChange:'transform',width:'max-content'}}>
          {allVenues.map((v, i) => (
            <div key={i} style={{flexShrink:0,width:240,padding:'28px 24px',background:'rgba(255,255,255,0.04)',borderLeft:'1px solid rgba(255,255,255,0.06)',textAlign:'center'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,color:'#fff',marginBottom:'0.4rem'}}>{v.name}</p>
              <p style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',fontFamily:"'Jost',sans-serif"}}>{v.detail}</p>
            </div>
          ))}
        </div>
        <div style={{position:'absolute',top:0,left:0,width:120,height:'100%',background:'linear-gradient(to right,var(--deep),transparent)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',top:0,right:0,width:120,height:'100%',background:'linear-gradient(to left,var(--deep),transparent)',pointerEvents:'none'}}/>
      </div>
    </section>
  )
}

export default function HomePageZH() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  const onMouseDown = (e) => { isDragging.current = true; trackRef.current.style.cursor = 'grabbing'; startX.current = e.pageX - trackRef.current.offsetLeft; scrollLeftStart.current = trackRef.current.scrollLeft }
  const onMouseLeave = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseMove = (e) => { if (!isDragging.current) return; e.preventDefault(); const x = e.pageX - trackRef.current.offsetLeft; trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4 }

  return (
    <>
      <section className="hero">
        <div className="hero__bg" style={{backgroundImage:'linear-gradient(160deg, rgba(26,25,22,0.35) 0%, rgba(26,25,22,0.72) 70%), linear-gradient(to bottom, rgba(26,25,22,0.08) 0%, rgba(26,25,22,0.55) 100%), url(/images/hero-main.jpg)',backgroundSize:'auto, auto, cover',backgroundPosition:'center, center, center 50%'}}></div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA高级职业教练 · 马略卡岛</p>
          <h1 className="serif-display hero__title">
            在马略卡岛最好的球场挥杆。<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>身边有职业球手陪伴。</em>
          </h1>
          <p className="hero__sub">球场上的高端体验与专业指导——为那些想在岛上充分享受高尔夫的球员而设。</p>
          <div className="hero__actions">
            <Link href="/zh/play-with-a-pro" className="btn btn--gold">了解体验项目 →</Link>
            <Link href="/zh/golf-courses" className="btn btn--outline-white">探索球场</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA高级职业教练</em></p>
          <p className="hero__trust-line"><em>Trackman大师认证</em></p>
          <p className="hero__trust-line"><em>在上海执教11年</em></p>
          <p className="hero__trust-line">圆石滩 · 依云 · 英国公开赛</p>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>与众不同之处</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            马略卡岛上的高尔夫体验，大多通过平台预订。<br />这里提供的，是截然不同的东西。
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            与一位曾在三大洲顶级赛事中执教的PGA高级职业教练共度私人球场之旅——从中国国家队球员到欧洲、亚洲及美国重大赛事场地的高尔夫爱好者，他积累了丰富的执教经验。这一天背后的专业实力，决定了体验的高度。球打得更好。建议来自真正的内行。
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1"><div className="intro__stat-num">18</div><div className="intro__stat-label">年高尔夫教学</div></div>
          <div className="intro__stat reveal reveal-delay-2"><div className="intro__stat-num">15,000+</div><div className="intro__stat-label">课时</div></div>
          <div className="intro__stat reveal reveal-delay-3"><div className="intro__stat-num">300+</div><div className="intro__stat-label">锦标赛冠军</div></div>
        </div>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">预订流程</p>
          <h2 className="serif-display">三个步骤，成就一段难忘的球场之旅。</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal"><span className="how__num">01</span><h3>联系我</h3><p>告诉我您的行程日期、差点以及期望。我会在24小时内亲自回复。</p></div>
          <div className="how__step reveal reveal-delay-1"><span className="how__num">02</span><h3>我为您规划全天</h3><p>球场推荐、开球时间、午餐、交通——一切在您抵达前安排妥当。</p></div>
          <div className="how__step reveal reveal-delay-2"><span className="how__num">03</span><h3>到达，挥杆</h3><p>您唯一需要做的，就是享受这一轮球。并且打出超乎预期的成绩。</p></div>
        </div>
      </section>

                  {/* 欧洲大部分球场冬季关闭，马略卡不会。一月份，这里的球道依然完美如初。LACEHOLDER */}
      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div>
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>为何选择马略卡岛</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>马略卡岛拥有欧巡赛级别的球场。很多游客只打了几个，却不知道还错过了什么。</h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>欧洲大部分球场冬季关闭，马略卡不会。一月份，这里的球道依然完美如初。</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {[['22','个岛上球场'],['300+','天年均日照'],['1–12月','全年可打球']].map(([num,label],i) => (
              <div key={i} style={{padding:'24px 0',borderBottom:'1px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'baseline',gap:16}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,color:'var(--gold)',lineHeight:1}}>{num}</span>
                <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.35)',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif"}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="courses">
        <div className="courses__header">
          <div className="courses__header-left"><p className="eyebrow">精选球场</p><h2 className="serif-display">马略卡岛最佳球场——亲身体验，真实点评。</h2></div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg></button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg></button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c,i) => (
            <article key={i} className={`course-card ${c.cls}`} onClick={() => router.push('/zh/golf-courses')} style={{cursor:'pointer'}}>
              <div className="course-card__bg"></div><div className="course-card__overlay"></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">{c.meta.map((m,j)=><span key={j}>{j>0&&<span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.3)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>)}</div>
                <div className="course-card__rating"><span className="course-card__stars">{c.stars}</span><span className="course-card__rating-label"> · {c.difficulty}</span></div>
                <p className="course-card__excerpt">{c.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link href="/zh/golf-courses" className="btn btn--dark">查看全部22个球场 →</Link>
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">体验详情</p>
          <h2 className="serif-display">马略卡岛上的大多数高尔夫日，不过是一个开球时间和一句道别。</h2>
          <span className="gold-rule"></span>
          <p>我在中国执教逾十年。那时的高尔夫课程每小时收费约500欧元，客户期待的是切实可见的进步——而非单纯的鼓励。在此之前，我曾在圆石滩、英国公开赛、法国依云锦标赛执教，并在一次环球邮轮旅行中途经四十余个国家。</p>
          <p>这段经历影响着我陪伴每一位客户的方式。全程提供真实的专业建议——球场策略、决策思维，以及大多数高尔夫球手从未听过的那些关键点。这将是一段在回程飞机上还会津津乐道的体验。</p>
          <p>一切均已安排妥当。球场、开球时间、午餐桌位。您唯一要做的，就是上场挥杆——并且打出超出预期的表现。</p>
          <Link href="/zh/play-with-a-pro" className="btn btn--dark">了解体验项目 →</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: 'i', title: '全程安排妥当', text: '球场、开球时间、接送、午餐——在您到达之前，一切均已处理完毕。' },
            { icon: '→', title: '球场实地指导', text: '在真实条件下取得真实进步。不是课堂讲解，不是跑动式评论，而是在关键时刻给出恰到好处的提示。' },
            { icon: '◇', title: '真正私密', text: '只有您与一位PGA高级职业教练同场。没有陌生人加入您的组别。整轮球完全围绕您的技术特点而设计。' },
            { icon: '+', title: '独家球场通道', text: '部分仅限会员的球场，普通游客无法自行预订——包括圣蓬萨2号场、3号场及其他球场，均可为客户安排。' },
          ].map((f,i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text"><h4>{f.title}</h4><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__header reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>球员真实评价</p>
          <h2 className="serif-display" style={{color:'#fff'}}>他们的亲身感受。</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal"><p>「与Andy同场打球是一次非凡的体验。他拥有无与伦比的洞察力，传授方式既细腻又贴心。仅仅18洞之后，我发现了自己潜力的新高度。」</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>「对每一杆背后思考的深度理解，极大地提升了我的决策能力。最令我印象深刻的瞬间：看着Andy用三号铁越过一个有树木的右曲道狗腿，220米精准落在果岭上。令人叹为观止的技艺。」</p><span className="testimonial__author">— Finlay</span></div>
        </div>
      </section>

            {/* CAREER STRIP */}
      <CareerStrip />

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">体验方案</p>
          <h2 className="serif-display">专为您量身打造的私人高尔夫体验。</h2>
          <p>三个方案。全部私人定制，全程亲自陪同。区别在于这一天的完整程度。</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">马略卡经典之旅</p>
            <h3 className="package__name">与职业球手同场</h3>
            <p className="package__price">每人起价500欧元</p>
            <div className="package__divider"></div>
            <ul className="package__features">{['根据您的球技量身推荐球场','开球时间预订及全程安排','赛前简报与热身','与Andy同打18洞','全程球场实地指导','赛后复盘——直接，清晰'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/zh/contact" className="btn btn--dark">立即咨询 →</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">招牌全日体验</p>
            <h3 className="package__name">全程陪同高尔夫日</h3>
            <p className="package__price">每人起价650欧元</p>
            <div className="package__divider"></div>
            <ul className="package__features">{['包含马略卡经典之旅全部内容','Son Gual或Alcanada——岛上两大顶级球场','球场餐厅悠闲午餐','精心挑选的惊喜礼品','从容节奏——完整的一天，而非仓促的一轮'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/zh/contact" className="btn btn--gold">立即咨询 →</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">至尊定制体验</p>
            <h3 className="package__name">高尔夫私人定制之旅</h3>
            <p className="package__price">价格面议</p>
            <div className="package__divider"></div>
            <ul className="package__features">{['多球场全日游或完整行程规划','帕尔马出发私人专车','精选餐厅晚宴','合作场馆水疗或恢复疗程','全程礼宾协调服务','适合团体、企业及个性化定制需求'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/zh/contact" className="btn btn--dark">立即咨询 →</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">常见问题</p>
          <h2 className="serif-display">联系我之前，人们常问的问题。</h2>
          <p>仍有疑问？直接联系我——我会在24小时内亲自回复。</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f,i) => (
            <div key={i} className={`faq__item${openFaq===i?' open':''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq===i?-1:i)}>{f.q}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg></div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好在马略卡岛畅享高尔夫了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>联系我，<br />其余一切交给我。</h2>
          <p>告诉我您的日期、差点以及对这一天的期望。我会亲自给您回复并提供建议——通常在24小时之内。</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">「球打得更好。建议来自真正的内行。」</p>
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>预订您的高尔夫日 →</Link>
          <Link href="/zh/golf-courses" className="btn btn--outline-white">探索球场</Link>
        </div>
      </section>
    </>
  )
}

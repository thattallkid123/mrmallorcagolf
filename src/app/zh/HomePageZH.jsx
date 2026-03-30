'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expert Pick', region: 'Palma · 11km from city', name: 'Son Gual', meta: ['Championship', 'Par 72', '€80–165'], stars: '★★★★★', difficulty: '9/10 Difficulty', excerpt: "Thomas Himmel's 2007 design sits in its own wind ecosystem. The closing stretch — holes 15–18 — is among the finest four holes in European golf.", img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ Expert Pick', region: 'Alcúdia · North Mallorca', name: 'Alcanada', meta: ['Coastal', 'Par 72', '€115–220'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: "Robert Trent Jones Jr. at his most scenic. The lighthouse visible from 16 of 18 holes. One of the most photographed courses in Spain.", img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: 'Best in Spain 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour', 'Par 72'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: "Named Best Golf Course in Spain at the 2025 World Golf Awards. Views across the Bay of Palma. A thousand-year-old olive tree on the 15th.", img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Southwest', name: 'Santa Ponsa 1', meta: ['DP World Tour host', 'Par 72', '€77–126'], stars: '★★★★☆', difficulty: '8/10 Difficulty', excerpt: "Hosted the 2021 DP World Tour Mallorca Open. One of Europe's longest courses — the 10th hole alone stretches 590 metres.", img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Southwest', name: 'Golf de Andratx', meta: ['Most challenging', 'Par 72', '€96–140'], stars: '★★★★☆', difficulty: '9/10 Difficulty', excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', img: '/images/andratx.webp' },
]

const WINNER_IMAGES = [
  "/images/winners/012ce2fdc02bf1fef437a1d98c25be1540117c3805.jpg",
  "/images/winners/0134a9b7aac8ad0d0656f04a253c43088b7331ce8f.jpg",
  "/images/winners/013bf5d9686d01b02fce51ef1123c10b7450176d15.jpg",
  "/images/winners/0144db5d1b7e24d0c6caa972462828fa30285c221b.jpg",
  "/images/winners/01642ab42974ebfa93f60beb07ab37157b87a3a515.jpg",
  "/images/winners/0166d35c197839412b807e6f1f9d74f3019ed0cdc7.jpg",
  "/images/winners/01896bd5845040a4f9957ce34acc61c2e68540c266.jpg",
  "/images/winners/01995db72802106453cf4aad2953648cec12aacd7e.jpg",
  "/images/winners/01ae26f53c5692f97b8207b9f36ca1cbbefa4618cc.jpg",
  "/images/winners/01c93d14fd4089f7fa1a956671b90967a1c09ed13f.jpg",
  "/images/winners/01f43146e7bbd479cd809b6daabd9b105b0008ca18.jpg",
  "/images/winners/01fe13d3c84b1236db2811859106a909c2227f8aa5.jpg",
  "/images/winners/2017_06_11_19_32_56.jpg",
  "/images/winners/2017_07_24_07_54_26.jpg",
  "/images/winners/2017_12_07_03_05_56.jpg",
  "/images/winners/2018_08_10_17_45_12.jpg",
  "/images/winners/2018_08_11_14_58_16.jpg",
  "/images/winners/2019_06_14_17_33_00.jpg",
  "/images/winners/2019_07_13_06_48_15.jpg",
  "/images/winners/2020_11_25_12_20_00.jpg",
  "/images/winners/2021_02_18_21_57_59.jpg",
  "/images/winners/2021_04_18_20_01_18.jpg",
  "/images/winners/2022_07_17_20_47_02.jpg",
  "/images/winners/2022_07_18_17_01_28.jpg",
  "/images/winners/2022_07_31_22_36_45.jpg",
  "/images/winners/2022_08_18_17_44_28.jpg",
  "/images/winners/2022_10_03_08_30_13.jpg",
  "/images/winners/2022_10_07_19_28_31.jpg",
  "/images/winners/2022_10_24_23_15_14.jpg",
  "/images/winners/2023_06_13_11_53_03.jpg",
  "/images/winners/2023_06_18_23_58_15.jpg",
  "/images/winners/2023_08_29_22_35_30.jpg",
  "/images/winners/2023_10_23_18_34_53.jpg",
  "/images/winners/2023_12_03_16_55_19.jpg",
  "/images/winners/2024_04_07_21_05_51.jpg",
  "/images/winners/2024_06_28_12_16_55.jpg",
  "/images/winners/2024_07_30_08_11_08.jpg",
]


const ADAM_TESTIMONIAL = "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough."

const faqs = [
  { q: '我必须是一个好的高尔夫球手吗？', a: '绝对不是。这个体验会根据你的水平调整——初学者和职业球手都能受益。唯一的要求就是想要一次真正与众不同的高尔夫体验。' },
  { q: '你们使用哪个球场？', a: '这取决于你。Son Gual和Alcanada是我进行严肃全天活动的首选。对于初学者、团体或较短的回合，有更好的选择——我会诚实地告诉你哪个球场适合。' },
  { q: '我如何预订？', a: '联系我。告诉我你的日期和你在寻找什么——我会在24小时内亲自回复。没有预订系统。没有等待。' },
  { q: '这适合团体吗？', a: '适合。这个体验适用于个人、情侣、朋友群体和公司活动。完整体验特别受欢迎，适合访问岛屿的商务团体和高管。' },
  { q: '什么是访问的最佳季节？', a: '十月、十一月、三月和四月。球场状况、天气、价格和打球速度的最佳组合。该岛全年都可以打球——一月份这里的草坪状况比八月份英格兰的草坪更好。' },
]

const FEATURE_ICONS = {
  arranged: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></svg>),
  coaching: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>),
  private: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  access: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>),
}


export default function HomePageZH() {
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  const onMouseDown = (e) => { isDragging.current = true; trackRef.current.style.cursor = 'grabbing'; startX.current = e.pageX - trackRef.current.offsetLeft; scrollLeftStart.current = trackRef.current.scrollLeft }
  const onMouseLeave = () => { isDragging.current = false; if (trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if (trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseMove = (e) => { if (!isDragging.current) return; e.preventDefault(); const x = e.pageX - trackRef.current.offsetLeft; trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4 }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{
          backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.35) 0%, rgba(26,25,22,0.72) 70%), linear-gradient(to bottom, rgba(26,25,22,0.08) 0%, rgba(26,25,22,0.55) 100%), url(/images/hero-main.jpg)',
          backgroundSize: 'auto, auto, cover',
          backgroundPosition: 'center, center, center 50%',
        }}></div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA职业教练 · 马略卡岛</p>
          <h1 className="serif-display hero__title">
            玩遍马略卡岛<br />最佳球场。<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>身边有职业教练。</em>
          </h1>
          {/* Sub-headline removed — headline is strong enough alone */}
          <div className="hero__actions">
            <Link href="/zh/contact" className="btn btn--gold">预订你的一天</Link>
            <a href="#courses" className="btn btn--outline-white">探索球场</a>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA职业教练</em></p>
          <p className="hero__trust-line"><em>Trackman Master Certified</em></p>
          <p className="hero__trust-line"><em>18年高尔夫教练经验</em></p>
          <p className="hero__trust-line">Pebble Beach · Evian · The Open</p>
        </div>
        {/* Scroll indicator removed — not needed on homepage only */}
      </section>

      {/* INTRO */}
      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>什么使其特殊</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            马略卡岛上许多高尔夫体验都通过平台预订。<br />这个不同。
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.65)',lineHeight:1.85}}>
            这是一个由拥有超过二十年教练经验的PGA职业教练主持的私人日活动，跨越三个大洲——中国的国家队球员、欧洲的主要赛事场地、亚洲和美国的业余和职业高尔夫球手。这一天背后的知识造就了差异。高尔夫更好。见解是真实的。
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1">
            <div className="intro__stat-num">18</div>
            <div className="intro__stat-label">年高尔夫教练经验</div>
          </div>
          <div className="intro__stat reveal reveal-delay-2">
            <div className="intro__stat-num">15,000+</div>
            <div className="intro__stat-label">进行的训练课程</div>
          </div>
          <div className="intro__stat reveal reveal-delay-3">
            <div className="intro__stat-num">300+</div>
            <div className="intro__stat-label">赛事获胜者培训</div>
          </div>
        </div>
      </section>

      {/* DOUYIN STRIP */}
      <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}>
        <p style={{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.65)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}>
          Andy 教练 &nbsp;·&nbsp; 抖音上超过3亿次高尔夫教练视频浏览 &nbsp;·&nbsp; 全球信任的教练内容
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">它如何工作</p>
          <h2 className="serif-display">三步走向你不会忘记的一轮。</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal">
            <span className="how__num">01</span>
            <h3>联系我</h3>
            <p>告诉我你的日期、你的差点和你在寻找什么。我会在24小时内亲自回复。</p>
          </div>
          <div className="how__step reveal reveal-delay-1">
            <span className="how__num">02</span>
            <h3>我为你安排你的一天</h3>
            <p>球场推荐、开球时间、午餐、交通——在你到达之前一切都已安排。</p>
          </div>
          <div className="how__step reveal reveal-delay-2">
            <span className="how__num">03</span>
            <h3>来打球</h3>
            <p>你的工作是享受这个球场。大多数人的表现比预期更好。</p>
          </div>
        </div>
      </section>

      {/* WHY MALLORCA */}
      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div className="reveal">
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>为什么选择马略卡岛</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>马略卡岛有欧洲巡回赛标准的球场。许多游客打了几个，想知道他们错过了什么。</h2>
            <p style={{fontSize:'1rem',color:'rgba(255,255,255,.76)',lineHeight:1.85,marginBottom:'1.25rem'}}>欧洲最好的高尔夫球场大多在冬天关闭。马略卡岛没有。一月份，当英格兰的球场沼泽化并关闭时，Son Gual的草坪完美无瑕，第一杆处空空如也。十月到四月是最好的时间——较低的果岭费、较安静的球场、令人羞愧的条件相比夏季的其他任何地方。</p>
            <p style={{fontSize:'1rem',color:'rgba(255,255,255,.76)',lineHeight:1.85}}>一小时车程内有二十二个球场。其中几个已举办过DP World Tour、Rolex Challenge Tour Grand Final，并吸引了Robert Trent Jones Jr.和Jack Nicklaus的设计委托。这不是一个碰巧有高尔夫的岛屿。这是一个严肃的目的地，大多数游客从未真正探索过。</p>
          </div>
          <div className="reveal reveal-delay-1">
            {[
              { num: '22', label: '岛上的球场' },
              { num: '300+', label: '年日照天数' },
              { num: '1月–12月', label: '全年赛季' },
              { num: '€80–220', label: '果岭费范围' },
            ].map((s, i) => (
              <div key={i} style={{padding:'1.5rem 0',borderBottom:'1px solid rgba(255,255,255,.08)',display:'flex',alignItems:'center',gap:'1.5rem'}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'2.2rem',fontWeight:500,color:'var(--gold)',flexShrink:0,width:120}}>{s.num}</span>
                <span style={{fontSize:'0.9rem',color:'rgba(255,255,255,.7)',fontFamily:"'Jost',sans-serif",fontWeight:300}}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses" id="courses">
        <div className="courses__header">
          <div className="courses__header-left">
            <p className="eyebrow">精选球场</p>
            <h2 className="serif-display">马略卡岛最好的球场，已游玩和评级。</h2>
          </div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)} aria-label="Scroll left">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L5 8l5 5"/></svg>
            </button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)} aria-label="Scroll right">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5"/></svg>
            </button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c, i) => (
            <Link key={i} href="/zh/golf-courses" className={`course-card ${c.cls}`}>
              <div className="course-card__bg" style={{backgroundImage:`url(${c.img})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
              <div className="course-card__overlay" style={{background:'linear-gradient(to top, rgba(10,9,7,0.97) 0%, rgba(10,9,7,0.6) 50%, rgba(10,9,7,0.2) 80%, transparent 100%)'}}></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">
                  {c.meta.map((m, j) => (<span key={j}>{j > 0 && <span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.4)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>))}
                </div>
                <div className="course-card__rating">
                  <span className="course-card__stars">{c.stars}</span>
                  <span className="course-card__rating-label"> · {c.difficulty}</span>
                </div>
                {/* Excerpt always visible — not hover-only */}
                <p className="course-card__excerpt course-card__excerpt--visible">{c.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link href="/zh/golf-courses" className="btn btn--dark">查看全部22个球场 →</Link>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">这个体验</p>
          <h2 className="serif-display">马略卡岛上大多数高尔夫日都是开球时间和挥手告别。</h2>
          <span className="gold-rule"></span>
          <p>我在中国训练了超过十年，高尔夫课程每小时500欧元，顾客想要真实的改进，而不仅仅是鼓励。在此之前，我在Pebble Beach、Open Championship、Evian训练，并在一个环游四十个国家的世界邮轮上度过了一个赛季。</p>
          <p>这个背景塑造了我举办的每一轮。这是在马略卡岛最好的球场之一进行的私人日。整个回合中的真实建议——球场策略、决策制定、标准课程中很少出现的东西。一个你在返回航班上仍在谈论的一天。</p>
          <p>一切都在你到达之前安排好——球场、开球时间、午餐。你在这一天的唯一工作是打球。</p>
          <Link href="/zh/play-with-a-pro" className="btn btn--dark">探索体验</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: FEATURE_ICONS.arranged, title: '一切已安排', text: '球场、开球时间、交通、午餐——在你到达之前一切都已设置好。' },
            { icon: FEATURE_ICONS.coaching, title: '球场教练', text: '在真实条件下的真实改进。没有课程。没有评论。在正确的时刻给出的正确观察。' },
            { icon: FEATURE_ICONS.private, title: '完全私密', text: '只有你和一位PGA职业教练。你的球队里没有陌生人。一轮完全是为你的比赛量身定制的。' },
            { icon: FEATURE_ICONS.access, title: '获得更多', text: '仅限会员的球场，大多数访问高尔夫球手无法独立预订——Santa Ponsa 2 & 3及更多。' },
          ].map((f, i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text"><h3>{f.title}</h3><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>


      {/* JO PULL QUOTE */}
      <section style={{background:'var(--pine)',padding:'clamp(48px,6vw,72px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:720,margin:'0 auto',textAlign:'center'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.3rem,2.5vw,1.9rem)',fontStyle:'italic',fontWeight:400,color:'#fff',lineHeight:1.45,marginBottom:'1.25rem'}}>
            &ldquo;在仅仅18洞之后，我发现了我潜力的新界限。&rdquo;
          </p>
          <p style={{fontSize:'9px',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold-light)',fontFamily:"'Jost',sans-serif"}}>— Jo，在Son Gual的一天之后</p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">体验和包裹</p>
          <h2 className="serif-display">一位教练。一个球场。你的一天。</h2>
          <p>三个体验级别。都是私人的，都由Andy亲自主持。</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">马略卡圆形</p>
            <h3 className="package__name">与专业人士一起打球</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['适合你的比赛和差点的球场','有保障和完全有序的开球时间','赛前简报和热身','18洞旁边Andy','整个回合中的球场教练','赛后简报——诚实而清晰'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'0.5rem'}}>€350 pp + 果岭费</p>
            <p style={{fontSize:'0.75rem',color:'var(--taupe)',marginBottom:'1.25rem',lineHeight:1.5}}>果岭费另计——通常每个球场和季节€80–220 pp。</p>
            <Link href="/zh/contact" className="btn btn--dark">查询</Link>
          </div>

          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">签名日</p>
            <h3 className="package__name">举办的高尔夫日</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['马略卡圆形的所有内容','Son Gual或Alcanada——岛上最好的两个球场','在球场餐厅享用长午餐','精选惊喜礼物','轻松的节奏——整天，而不是匆忙的回合'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'0.5rem',color:'var(--gold-light)'}}>起€450 pp + 果岭费</p>
            <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.62)',marginBottom:'1.25rem',lineHeight:1.5}}>果岭费另计——通常每个球场和季节€80–220 pp。</p>
            <Link href="/zh/contact" className="btn btn--gold">查询</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">完整体验</p>
            <h3 className="package__name">定制高尔夫之旅</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {[
                '多球场日或完整的4天旅程',
                '从帕尔马酒店或别墅出发的私人交通',
                '在精心挑选的马略卡餐厅用餐',
                '在合作伙伴地点进行水疗或恢复课程',
                '沿Tramuntana的日落驾车',
                '在山上进行热气球飞行',
                '在马略卡葡萄园进行葡萄酒品鉴',
                '为团体和公司提供完整的礼宾服务',
              ].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>定制行程——按需提供</p>
            <Link href="/zh/contact" className="btn btn--dark">查询</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">问题</p>
          <h2 className="serif-display">人们在联系前问的东西。</h2>
          <p>告诉我你的日期、你的差点和你在寻找什么。我会在24小时内亲自回复。</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f, i) => (
            <div key={i} className={`faq__item${openFaq === i ? ' open' : ''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg>
              </div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好正确地玩马略卡岛了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>联系我。<br />其余的已解决。</h2>
          <p>告诉我你的日期、你的差点和你对这一天的期望。我会亲自在24小时内回复建议。</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;高尔夫更好。见解是真实的。&rdquo;</p>
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px',letterSpacing:'0.18em'}}>预订你的一天</Link>
          <a href="https://wa.me/34624466702" className="btn btn--outline-white" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

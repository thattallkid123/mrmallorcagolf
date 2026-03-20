'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const courses = [
  {
    cls: 'course-card--1',
    badge: '★ Expert Pick',
    region: 'Palma · 11km from city',
    name: 'Son Gual',
    meta: ['Championship', 'Par 72', '€80–165'],
    stars: '★★★★★',
    difficulty: '9/10 Difficulty',
    excerpt: "Thomas Himmel's 2007 design sits in its own wind ecosystem. The closing stretch — holes 15–18 — is among the finest four holes in European golf.",
    img: '/images/son-gual.jpg',
  },
  {
    cls: 'course-card--2',
    badge: '★ Expert Pick',
    region: 'Alcúdia · North Mallorca',
    name: 'Alcanada',
    meta: ['Coastal', 'Par 72', '€115–220'],
    stars: '★★★★★',
    difficulty: '7/10 Difficulty',
    excerpt: "Robert Trent Jones Jr. at his most scenic. The lighthouse visible from 16 of 18 holes. One of the most photographed courses in Spain.",
    img: '/images/alcanada.jpg',
  },
  {
    cls: 'course-card--3',
    badge: 'Best in Spain 2025',
    region: 'Son Vida · Palma',
    name: 'Son Muntaner',
    meta: ['DP World Tour', 'Par 72'],
    stars: '★★★★★',
    difficulty: '7/10 Difficulty',
    excerpt: "Named Best Golf Course in Spain at the 2025 World Golf Awards. Views across the Bay of Palma. A thousand-year-old olive tree on the 15th.",
    img: '/images/son-muntaner.webp',
  },
  {
    cls: 'course-card--4',
    badge: null,
    region: 'Santa Ponsa · Southwest',
    name: 'Santa Ponsa 1',
    meta: ['DP World Tour host', 'Par 72', '€77–126'],
    stars: '★★★★☆',
    difficulty: '8/10 Difficulty',
    excerpt: "Hosted the 2021 DP World Tour Mallorca Open. One of Europe's longest courses — the 10th hole alone stretches 590 metres.",
    img: '/images/santa-ponsa.webp',
  },
  {
    cls: 'course-card--5',
    badge: null,
    region: 'Camp de Mar · Southwest',
    name: 'Golf de Andratx',
    meta: ['Most challenging', 'Par 72', '€96–140'],
    stars: '★★★★☆',
    difficulty: '9/10 Difficulty',
    excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.',
    img: '/images/andratx.webp',
  },
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

const faqs = [
  { q: 'Do I need to be a good golfer?', a: 'Not at all. The experience adjusts to your game — beginners and scratch players both get something from the day. The only requirement is wanting a genuinely different golfing experience.' },
  { q: 'Which course do you use?', a: "It depends on you. Son Gual and Alcanada are my primary venues for a serious full day. For beginners, groups, or shorter rounds, there are better options — and I'll tell you honestly which one fits." },
  { q: 'How do I book?', a: "Get in touch. Tell me your dates and what you're looking for — I come back personally within 24 hours. No booking systems. No waiting." },
  { q: 'Is this suitable for a group?', a: 'Yes. The experiences work for solos, pairs, groups of friends, and corporate days. The Full Experience is particularly popular for business groups and executives visiting the island.' },
  { q: 'When is the best time of year to visit?', a: 'October, November, March, and April. Best combination of course conditions, weather, value, and pace of play. The island is playable year-round — in January the fairways here are better than August fairways in England.' },
]

// SVG icons for the four feature tiles
const FEATURE_ICONS = {
  arranged: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  coaching: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  private: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  access: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
      <circle cx="11" cy="11" r="8"/>
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
    </svg>
  ),
}

function WinnersStrip() {
  const trackRef = useRef(null)
  // Duplicate images for seamless loop
  const allImgs = [...WINNER_IMAGES, ...WINNER_IMAGES]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    const speed = 0.5
    let raf
    const tick = () => {
      pos += speed
      if (pos >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section style={{background:'var(--deep)',padding:'60px 0',overflow:'hidden'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 clamp(20px,5vw,60px)',marginBottom:'2rem'}}>
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Competition winners coached</p>
        <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.6rem,3vw,2.4rem)',marginBottom:'.75rem'}}>300+ competition winners, across three continents.</h2>
        <p style={{fontSize:'.95rem',fontWeight:300,color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:560}}>From club champions to national team players in China. The coaching philosophy is the same at every level: find what actually moves the needle, and work on that.</p>
      </div>
      <div style={{position:'relative',overflow:'hidden'}}>
        <div
          ref={trackRef}
          style={{display:'flex',gap:8,willChange:'transform',width:'max-content'}}
        >
          {allImgs.map((src, i) => (
            <div key={i} style={{flexShrink:0,width:180,height:220,overflow:'hidden',background:'var(--pine)'}}>
              <img
                src={src}
                alt="Competition winner"
                style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center'}}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div style={{position:'absolute',top:0,left:0,width:80,height:'100%',background:'linear-gradient(to right, var(--deep), transparent)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',top:0,right:0,width:80,height:'100%',background:'linear-gradient(to left, var(--deep), transparent)',pointerEvents:'none'}}/>
      </div>
    </section>
  )
}

export default function HomePageInner() {
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  }

  const onMouseDown = (e) => {
    isDragging.current = true
    trackRef.current.style.cursor = 'grabbing'
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeftStart.current = trackRef.current.scrollLeft
  }
  const onMouseLeave = () => { isDragging.current = false; if (trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if (trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          {/* Replace with: <img src="/images/hero.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%'}} /> */}
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA Advanced Professional · Mallorca</p>
          <h1 className="serif-display hero__title">
            Play Mallorca&apos;s<br />Best Courses.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>With a Pro by Your Side.</em>
          </h1>
          <p className="hero__sub">On-course experiences and coaching — for golfers who want more from their time on the island.</p>
          <div className="hero__actions">
            <Link href="/play-with-a-pro" className="btn btn--gold">See the Experiences</Link>
            <Link href="/golf-courses" className="btn btn--outline-white">Explore Courses</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master Certified</em></p>
          <p className="hero__trust-line"><em>18 Years Coaching Experience</em></p>
          <p className="hero__trust-line">Pebble Beach · Evian · The Open</p>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>What sets this apart</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Many golf experiences in Mallorca are booked through a platform.<br />This is something else.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.65)',lineHeight:1.85}}>
            A private day hosted by a PGA Advanced Professional who has coached at the highest level across three continents — from national team players in China to golfers at major championship venues across Europe, Asia, and the United States. The expertise behind the day is what makes the difference. The golf is better. The insight is genuine.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1">
            <div className="intro__stat-num">18</div>
            <div className="intro__stat-label">Years coaching golf</div>
          </div>
          <div className="intro__stat reveal reveal-delay-2">
            <div className="intro__stat-num">15,000+</div>
            <div className="intro__stat-label">Lessons delivered</div>
          </div>
          <div className="intro__stat reveal reveal-delay-3">
            <div className="intro__stat-num">300+</div>
            <div className="intro__stat-label">Competition winners coached</div>
          </div>
        </div>
      </section>

      {/* DOUYIN STRIP */}
      <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}>
        <p style={{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.4)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}>
          Andy 教练 &nbsp;·&nbsp; 300 million+ golf coaching video views on TikTok &nbsp;·&nbsp; Coaching content trusted worldwide
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">How it works</p>
          <h2 className="serif-display">Three steps to a round you&apos;ll remember.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal">
            <span className="how__num">01</span>
            <h3>Get in touch</h3>
            <p>Tell me your dates, your handicap, and what you&apos;re looking for. I come back personally within 24 hours.</p>
          </div>
          <div className="how__step reveal reveal-delay-1">
            <span className="how__num">02</span>
            <h3>I build your day</h3>
            <p>Course recommendation, tee time, lunch, transport — everything sorted before you arrive.</p>
          </div>
          <div className="how__step reveal reveal-delay-2">
            <span className="how__num">03</span>
            <h3>Show up and play</h3>
            <p>Your only job is to enjoy the round. And play better than you expected.</p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses">
        <div className="courses__header">
          <div className="courses__header-left">
            <p className="eyebrow">Featured Courses</p>
            <h2 className="serif-display">Mallorca&apos;s finest, played and reviewed.</h2>
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
        <div
          className="courses__track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {courses.map((c, i) => (
            <article key={i} className={`course-card ${c.cls}`}>
              <div className="course-card__bg" style={{backgroundImage:`url(${c.img})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
              <div className="course-card__overlay" style={{background:'linear-gradient(to top, rgba(10,9,7,0.97) 0%, rgba(10,9,7,0.6) 50%, rgba(10,9,7,0.2) 80%, transparent 100%)'}}></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">
                  {c.meta.map((m, j) => (
                    <span key={j}>{j > 0 && <span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.4)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>
                  ))}
                </div>
                <div className="course-card__rating">
                  <span className="course-card__stars">{c.stars}</span>
                  <span className="course-card__rating-label"> · {c.difficulty}</span>
                </div>
                <p className="course-card__excerpt">{c.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">The experience</p>
          <h2 className="serif-display">Most golf days in Mallorca are a tee time and a wave goodbye.</h2>
          <span className="gold-rule"></span>
          <p>I spent over a decade coaching in China, where golf lessons ran at €500 an hour and clients expected serious, measurable improvement — not just encouragement. Before that, I coached at Pebble Beach, The Open Championship, Evian, and spent a season on a world cruise across forty countries.</p>
          <p>That background shapes every round I host. This is a private day on one of Mallorca&apos;s finest courses. Genuine advice throughout — course strategy, decision-making, the things most golfers never get told. A day you&apos;ll still be talking about on the flight home.</p>
          <p>Everything is arranged. The course. The tee time. The lunch table. The only thing you have to do is play — and play better than you expected.</p>
          <Link href="/play-with-a-pro" className="btn btn--dark">See the Experiences</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: FEATURE_ICONS.arranged, title: 'Everything arranged', text: 'Course, tee time, transport, lunch — fully handled before you arrive.' },
            { icon: FEATURE_ICONS.coaching, title: 'On-course coaching', text: 'Real improvement in real conditions. Not a lesson. Not a commentary. The right observation at the right moment.' },
            { icon: FEATURE_ICONS.private, title: 'Genuinely private', text: "Just you and a PGA Advanced Professional. No strangers in your group. A round shaped entirely around your game." },
            { icon: FEATURE_ICONS.access, title: 'Access to more', text: "Members-only courses most visiting golfers can't book independently — Santa Ponsa 2 & 3, plus others." },
          ].map((f, i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text">
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WINNERS STRIP */}
      <WinnersStrip />

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials__header reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>What golfers say</p>
          <h2 className="serif-display" style={{color:'#fff'}}>In their own words.</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal">
            <p>&ldquo;Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. I have felt suffocated by well-meaning coaches in the past, but Andy is a cut above. After just 18 holes together, I&apos;ve discovered a new ceiling to my potential.&rdquo;</p>
            <span className="testimonial__author">— Jo</span>
          </div>
          <div className="testimonial reveal reveal-delay-1">
            <p>&ldquo;The insight into what calculations go into each shot has helped me improve my decision making immensely. The moment that stood out was watching Andy hit a 3-iron 220 metres over a dog leg right with trees and stick it on the green. Amazing talent.&rdquo;</p>
            <span className="testimonial__author">— Finlay</span>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Experiences &amp; Packages</p>
          <h2 className="serif-display">Private golf experiences designed around you.</h2>
          <p>Three levels. All private. All personally guided. The difference is how complete the day is.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">The Mallorca Round</p>
            <h3 className="package__name">Play with a Pro</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Course matched to your game & handicap','Tee time secured and fully handled','Pre-round briefing and warm-up','18 holes alongside Andy','On-course coaching throughout','Post-round debrief — honest and clear'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>€350 pp + green fee</p>
            <Link href="/contact" className="btn btn--dark">Enquire</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">The Signature Day</p>
            <h3 className="package__name">Hosted Golf Day</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {["Everything in The Mallorca Round","Son Gual or Alcanada — two of the island's finest","Long lunch at the course restaurant","Curated surprise gift","Unhurried pace — a full day, not a rushed round"].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem',color:'var(--gold-light)'}}>From €450 pp + green fee</p>
            <Link href="/contact" className="btn btn--gold">Enquire</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">The Full Experience</p>
            <h3 className="package__name">Bespoke Golf Journey</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Multi-course day or full itinerary','Private transport from Palma','Dinner at a handpicked restaurant','Spa or recovery session','Full concierge — groups & corporates'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>Custom itinerary</p>
            <Link href="/contact" className="btn btn--dark">Enquire</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Questions</p>
          <h2 className="serif-display">Things people ask before getting in touch.</h2>
          <p>Still unsure? Get in touch directly — I respond personally within 24 hours.</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f, i) => (
            <div key={i} className={`faq__item${openFaq === i ? ' open' : ''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10"/>
                </svg>
              </div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play Mallorca properly?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Get in touch.<br />I&apos;ll sort the rest.</h2>
          <p>Tell me your dates, your handicap, and what you want from the day. I&apos;ll come back with a recommendation — personally, within 24 hours.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;The golf is better. The insight is genuine.&rdquo;</p>
          <Link href="/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px',letterSpacing:'0.18em'}}>Book Your Day</Link>
          <Link href="/golf-courses" className="btn btn--outline-white">Explore the Courses</Link>
        </div>
      </section>
    </>
  )
}

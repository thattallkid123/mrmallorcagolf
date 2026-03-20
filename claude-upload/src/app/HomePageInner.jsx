'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expert Pick', region: 'Palma · 11km from city', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Difficulty', excerpt: 'Thomas Himmels 2007 design sits in its own wind ecosystem. The closing stretch — holes 15–18 — is among the finest four holes in European golf.' },
  { cls: 'course-card--2', badge: '★ Expert Pick', region: 'Alcúdia · North Mallorca', name: 'Alcanada', meta: ['Coastal','Par 72','€95–175'], stars: '★★★★★', difficulty: '8/10 Difficulty', excerpt: 'Robert Trent Jones Jr. at his most scenic. The 17th — a par-3 over an inlet with the lighthouse directly behind the pin — is one of the most photographed holes in Spain.' },
  { cls: 'course-card--3', badge: 'Best in Spain 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: 'Named Best Golf Course in Spain at the 2025 World Golf Awards. Views across the Bay of Palma. A thousand-year-old olive tree on the 15th.' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Southwest', name: 'Santa Ponsa 1', meta: ['DP World Tour host','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Difficulty', excerpt: 'Hosted the 2021 DP World Tour Mallorca Open. One of the longest courses on the island.' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Southwest', name: 'Golf de Andratx', meta: ['Most challenging','Par 70','€96–140'], stars: '★★★★☆', difficulty: '9/10 Difficulty', excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.' },
]

const faqs = [
  { q: 'Do I need to be a good golfer?', a: 'Not at all. The experience adjusts to your game — beginners and scratch players both get something from the day. The only requirement is wanting a genuinely different golfing experience.' },
  { q: 'Which course do you use?', a: 'It depends on you. Son Gual and Alcanada are my primary venues for a serious full day. For beginners, groups, or shorter rounds, there are better options — and Ill tell you honestly which one fits.' },
  { q: 'How do I book?', a: 'Get in touch. Tell me your dates and what youre looking for — I come back personally within 24 hours. No booking systems. No waiting.' },
  { q: 'Is this suitable for a group?', a: 'Yes. The experiences work for solos, pairs, groups of friends, and corporate days. The Full Experience is particularly popular for business groups and executives visiting the island.' },
  { q: 'When is the best time of year to visit?', a: 'October, November, March, and April. Best combination of course conditions, weather, value, and pace of play. The island is playable year-round — in January the fairways here are better than August fairways in England.' },
]

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
  const onMouseLeave = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
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
          {/* Replace with: <img src="/images/hero.jpg" alt="Andy Griffiths walking a fairway at Son Gual, Mallorca" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%'}} /> */}
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
          <p className="hero__trust-line"><em>11 Years in Shanghai</em></p>
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
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            A private day hosted by a PGA Advanced Professional who has coached at the highest level across three continents — from national team players in China to golfers at major championship venues across Europe, Asia, and the United States. The expertise behind the day is what makes the difference. The golf is better. The insight is genuine.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1">
            <div className="intro__stat-num">11</div>
            <div className="intro__stat-label">Years coaching in China</div>
          </div>
          <div className="intro__stat reveal reveal-delay-2">
            <div className="intro__stat-num">40+</div>
            <div className="intro__stat-label">Countries coached in</div>
          </div>
          <div className="intro__stat reveal reveal-delay-3">
            <div className="intro__stat-num">22</div>
            <div className="intro__stat-label">Mallorca courses explored</div>
          </div>
        </div>
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
              <div className="course-card__bg"></div>
              <div className="course-card__overlay"></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">
                  {c.meta.map((m, j) => (
                    <span key={j}>{j > 0 && <span className="course-card__meta-dot" style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.3)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>
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
            { icon: 'i', title: 'Everything arranged', text: 'Course, tee time, transport, lunch — fully handled before you arrive.' },
            { icon: ' ', title: 'On-course coaching', text: 'Real improvement in real conditions. Not a lesson. Not a commentary. The right observation at the right moment.' },
            { icon: '◇', title: 'Genuinely private', text: 'Just you and a PGA Advanced Professional. No strangers in your group. A round shaped entirely around your game.' },
            { icon: '+', title: 'Access to more', text: 'Members-only courses that most visiting golfers cant book independently — Santa Ponsa 2 & 3, plus others.' },
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
            <p className="package__price">From €500 per person</p>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Course recommendation matched to your game','Tee time secured and fully handled','Pre-round briefing and warm-up','18 holes alongside Andy','On-course coaching throughout','Post-round debrief — honest and clear'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <Link href="/contact" className="btn btn--dark">Enquire</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">The Signature Day</p>
            <h3 className="package__name">Hosted Golf Day</h3>
            <p className="package__price">From €650 per person</p>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Everything in The Mallorca Round','Son Gual or Alcanada — two of the islands finest','Long lunch at the course restaurant','Curated surprise gift','Unhurried pace — a full day, not a rushed round','Two golfers minimum; up to four'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <Link href="/contact" className="btn btn--gold">Enquire</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">The Full Experience</p>
            <h3 className="package__name">Bespoke Golf Journey</h3>
            <p className="package__price">On enquiry</p>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Multi-course day or full itinerary','Private transport from Palma','Dinner at a handpicked restaurant','Spa or recovery session at a partner venue','Full concierge coordination','For groups, corporates, and bespoke requests'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
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


'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
<<<<<<< HEAD

const courses = [
  { cls: 'course-card--1', badge: '★ Expert Pick', region: 'Palma · 11km from city', name: 'Son Gual', meta: ['Championship', 'Par 72', '€80–165'], stars: '★★★★★', difficulty: '9/10 Difficulty', excerpt: "Thomas Himmel's 2007 design sits in its own wind ecosystem. The closing stretch — holes 15–18 — is among the finest four holes in European golf.", img: '/images/son-gual.jpg', href: '/guides/son-gual-review' },
  { cls: 'course-card--2', badge: '★ Expert Pick', region: 'Alcúdia · North Mallorca', name: 'Alcanada', meta: ['Coastal', 'Par 72', '€115–220'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: "Robert Trent Jones Jr. at his most scenic. The lighthouse visible from 16 of 18 holes. One of the most photographed courses in Spain.", img: '/images/alcanada.jpg', href: '/guides/alcanada-review' },
  { cls: 'course-card--3', badge: 'Best in Spain 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour', 'Par 72'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: "Named Best Golf Course in Spain at the 2025 World Golf Awards. Views across the Bay of Palma. A thousand-year-old olive tree on the 15th.", img: '/images/son-muntaner.webp', href: '/golf-courses#son-muntaner' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Southwest', name: 'Santa Ponsa 1', meta: ['DP World Tour host', 'Par 72', '€77–126'], stars: '★★★★☆', difficulty: '8/10 Difficulty', excerpt: "Hosted the 2021 DP World Tour Mallorca Open. One of Europe's longest courses — the 10th hole alone stretches 590 metres.", img: '/images/santa-ponsa.webp', href: '/guides/santa-ponsa-1-review' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Southwest', name: 'Golf de Andratx', meta: ['Most challenging', 'Par 72', '€96–140'], stars: '★★★★☆', difficulty: '9/10 Difficulty', excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', img: '/images/andratx.webp', href: '/golf-courses#golf-de-andratx' },
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
  { q: 'Do I need to be a good golfer?', a: 'Not at all. The experience adjusts to your game — beginners and scratch players both get something from the day. The only requirement is wanting a genuinely different golfing experience.' },
  { q: 'Which course do you use?', a: "It depends on you. Son Gual and Alcanada are my primary venues for a serious full day. For beginners, groups, or shorter rounds, there are better options — and I'll tell you honestly which one fits." },
  { q: 'How do I book?', a: "Get in touch. Tell me your dates and what you're looking for — I come back personally within 24 hours. No booking systems. No waiting." },
  { q: 'Is this suitable for a group?', a: 'Yes. The experiences work for solos, pairs, groups of friends, and corporate days. The Full Experience is particularly popular for business groups and executives visiting the island.' },
  { q: 'When is the best time of year to visit?', a: 'October, November, March, and April. Best combination of course conditions, weather, value, and pace of play. The island is playable year-round — in January the fairways here are better than August fairways in England.' },
]
=======
import { getHomeContent } from '../lib/homepage-content'
>>>>>>> i18n-premium-draft

const FEATURE_ICONS = {
  arranged: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  coaching: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
  private: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  access: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  ),
}

function localizePath(path, locale) {
  if (!path || path.startsWith('http') || path.startsWith('#')) return path
  return locale === 'en' ? path : `/${locale}${path}`
}

export default function HomePageInner({ locale = 'en' }) {
  const home = getHomeContent(locale)
  const contactHref = locale === 'en' ? '/contact' : `/${locale}/contact`
  const golfCoursesHref = locale === 'en' ? '/golf-courses' : `/${locale}/golf-courses`
  const playWithAProHref = locale === 'en' ? '/play-with-a-pro' : `/${locale}/play-with-a-pro`
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  const onMouseDown = (e) => {
    isDragging.current = true
    trackRef.current.style.cursor = 'grabbing'
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeftStart.current = trackRef.current.scrollLeft
  }
  const onMouseLeave = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }
  const onMouseUp = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4
  }

  return (
    <>
      <section className="hero">
        <div
          className="hero__bg"
          style={{
            backgroundImage:
              'linear-gradient(160deg, rgba(26,25,22,0.35) 0%, rgba(26,25,22,0.72) 70%), linear-gradient(to bottom, rgba(26,25,22,0.08) 0%, rgba(26,25,22,0.55) 100%), url(/images/hero-main.jpg)',
            backgroundSize: 'auto, auto, cover',
            backgroundPosition: 'center, center, center 50%',
          }}
        ></div>
        <div className="hero__content">
          <p className="hero__eyebrow">{home.hero.eyebrow}</p>
          <h1 className="serif-display hero__title">
            {home.hero.titleLines[0]}
            <br />
            {home.hero.titleLines[1]}
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 400, opacity: 0.85 }}>{home.hero.emphasis}</em>
          </h1>
          <div className="hero__actions">
            <Link href={contactHref} className="btn btn--gold">
              {home.hero.primaryCta}
            </Link>
            <a href="#courses" className="btn btn--outline-white">
              {home.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>
            {home.intro.eyebrow}
          </p>
          <h2 className="serif-display" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#fff', marginBottom: '1.5rem' }}>
            {home.intro.title}
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.74)', lineHeight: 1.85 }}>{home.intro.body}</p>
        </div>
        <div className="intro__right">
          {home.intro.stats.map((stat, index) => (
            <div key={stat.label} className={`intro__stat reveal reveal-delay-${index + 1}`}>
              <div className="intro__stat-num">{stat.value}</div>
              <div className="intro__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--deep)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem clamp(20px,5vw,60px)' }}>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.74)', fontFamily: "'Jost',sans-serif", fontWeight: 300, lineHeight: 1.6 }}>
          {home.socialProof}
        </p>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">{home.how.eyebrow}</p>
          <h2 className="serif-display">{home.how.title}</h2>
        </div>
        <div className="how__steps">
          {home.how.steps.map((step, index) => (
            <div key={step.number} className={`how__step reveal${index ? ` reveal-delay-${index}` : ''}`}>
              <span className="how__num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--deep)', padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          <div className="reveal">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,.35)', marginBottom: '1rem' }}>
              {home.whyMallorca.eyebrow}
            </p>
            <h2 className="serif-display" style={{ color: '#fff', fontSize: 'clamp(1.5rem,4vw,2.6rem)', marginBottom: '1.5rem' }}>
              {home.whyMallorca.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.76)', lineHeight: 1.85, marginBottom: '1.25rem' }}>{home.whyMallorca.paragraphs[0]}</p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.76)', lineHeight: 1.85 }}>{home.whyMallorca.paragraphs[1]}</p>
          </div>
          <div className="reveal reveal-delay-1">
            {home.whyMallorca.stats.map((stat) => (
              <div key={stat.label} style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.2rem', fontWeight: 500, color: 'var(--gold)', flexShrink: 0, width: 120 }}>{stat.value}</span>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,.78)', fontFamily: "'Jost',sans-serif", fontWeight: 300 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="courses" id="courses">
        <div className="courses__header">
          <div className="courses__header-left">
            <p className="eyebrow">{home.courses.eyebrow}</p>
            <h2 className="serif-display">{home.courses.title}</h2>
          </div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)} aria-label="Scroll left">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)} aria-label="Scroll right">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
<<<<<<< HEAD
          {courses.map((c, i) => (
            <Link key={i} href={c.href} className={`course-card ${c.cls}`}>
              <div className="course-card__bg" style={{backgroundImage:`url(${c.img})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
              <div className="course-card__overlay" style={{background:'linear-gradient(to top, rgba(10,9,7,0.97) 0%, rgba(10,9,7,0.6) 50%, rgba(10,9,7,0.2) 80%, transparent 100%)'}}></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
=======
          {home.courses.items.map((course) => (
            <Link key={course.name} href={localizePath(course.href, locale)} className={`course-card ${course.cls}`}>
              <div className="course-card__bg" style={{ backgroundImage: `url(${course.img})`, backgroundSize: 'cover', backgroundPosition: 'center 28%' }}></div>
              <div className="course-card__overlay" style={{ background: 'linear-gradient(to top, rgba(10,9,7,0.97) 0%, rgba(10,9,7,0.6) 50%, rgba(10,9,7,0.2) 80%, transparent 100%)' }}></div>
              {course.badge && <span className="course-card__badge">{course.badge}</span>}
>>>>>>> i18n-premium-draft
              <div className="course-card__content">
                <p className="course-card__region">{course.region}</p>
                <h3 className="course-card__name">{course.name}</h3>
                <div className="course-card__meta">
                  {course.meta.map((meta, index) => (
                    <span key={`${course.name}-${meta}`}>
                      {index > 0 && <span style={{ display: 'inline-block', width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '0 7px', verticalAlign: 'middle' }}></span>}
                      {meta}
                    </span>
                  ))}
                </div>
                <div className="course-card__rating">
                  <span className="course-card__stars">{course.stars}</span>
                  <span className="course-card__rating-label"> · {course.difficulty}</span>
                </div>
                <p className="course-card__excerpt course-card__excerpt--visible">{course.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href={golfCoursesHref} className="btn btn--dark">
            {home.courses.viewAll}
          </Link>
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">{home.experience.eyebrow}</p>
          <h2 className="serif-display">{home.experience.title}</h2>
          <span className="gold-rule"></span>
          {home.experience.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <Link href={playWithAProHref} className="btn btn--dark">
            {home.experience.button}
          </Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {home.experience.features.map((feature, index) => (
            <div key={feature.title} className="what__feature">
              <div className="what__feature-icon">{[FEATURE_ICONS.arranged, FEATURE_ICONS.coaching, FEATURE_ICONS.private, FEATURE_ICONS.access][index]}</div>
              <div className="what__feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--pine)', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.45, marginBottom: '1.25rem' }}>
            &ldquo;{home.quote.text}&rdquo;
          </p>
          <p style={{ fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: "'Jost',sans-serif" }}>- {home.quote.attribution}</p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__header reveal">
          <p className="eyebrow eyebrow--gold">{home.winners.eyebrow}</p>
          <h2 className="serif-display" style={{ color: '#fff', marginBottom: '1.1rem' }}>
            {home.winners.title}
          </h2>
          <p style={{ maxWidth: 720, margin: '0 auto', color: 'rgba(255,255,255,0.76)', fontSize: '0.95rem', lineHeight: 1.85 }}>
            {home.winners.intro}
          </p>
        </div>
        <figure className="winners-board">
          <img
            src="/images/winners-collage.jpg"
            alt="A collage of competition winners coached by Andy over the years"
            className="winners-board__img"
            loading="lazy"
          />
        </figure>
        <div className="testimonials__grid" style={{ marginTop: 2 }}>
          <div className="testimonial reveal" style={{ flex: '1 1 auto', maxWidth: 1100, margin: '0 auto' }}>
            <p>{home.winners.testimonial}</p>
            <span className="testimonial__author">- {home.winners.attribution}</span>
          </div>
        </div>
      </section>

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">{home.packages.eyebrow}</p>
          <h2 className="serif-display">{home.packages.title}</h2>
          <p>{home.packages.intro}</p>
        </div>
        <div className="packages__grid">
          {home.packages.items.map((pkg, index) => (
            <div key={pkg.name} className={`package${pkg.featured ? ' package--featured' : ''} reveal${index ? ` reveal-delay-${index}` : ''}`}>
              <p className="package__tier">{pkg.tier}</p>
              <h3 className="package__name">{pkg.name}</h3>
              <div className="package__divider"></div>
              <ul className="package__features">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="package__price" style={{ marginTop: '1.25rem', marginBottom: pkg.note ? '0.5rem' : '1.25rem', color: pkg.featured ? 'var(--gold-light)' : undefined }}>
                {pkg.price}
              </p>
              {pkg.note && <p className={`package__note${pkg.featured ? ' package__note--featured' : ''}`}>{pkg.note}</p>}
              <Link href={contactHref} className={`btn ${pkg.featured ? 'btn--gold' : 'btn--dark'}`}>
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">{home.faq.eyebrow}</p>
          <h2 className="serif-display">{home.faq.title}</h2>
          <p>{home.faq.intro}</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {home.faq.items.map((faq, index) => (
            <div key={faq.q} className={`faq__item${openFaq === index ? ' open' : ''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                {faq.q}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </div>
              <div className="faq__a">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">{home.finalCta.eyebrow}</p>
          <h2 className="serif-display" style={{ color: '#fff' }}>
            {home.finalCta.title.split('. ').map((line, index, arr) => (
              <span key={index}>
                {line}
                {index < arr.length - 1 ? '.' : ''}
                {index < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p>{home.finalCta.body}</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;{home.finalCta.quote}&rdquo;</p>
          <Link href={contactHref} className="btn btn--gold" style={{ fontSize: 11, padding: '15px 36px', letterSpacing: '0.18em' }}>
            {home.finalCta.primaryCta}
          </Link>
          <a href="https://wa.me/34624466702" className="btn btn--outline-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {home.finalCta.secondaryCta}
          </a>
        </div>
      </section>
    </>
  )
}


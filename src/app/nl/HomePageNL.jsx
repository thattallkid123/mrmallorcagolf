'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expertenkeuze', region: 'Palma · 11km van centrum', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Moeilijkheid', excerpt: 'Thomas Himmels ontwerp uit 2007 heeft zijn eigen windecosysteem. De slotreeks — holes 15–18 — behoort tot de vier beste holes in het Europese golf.' },
  { cls: 'course-card--2', badge: '★ Expertenkeuze', region: 'Alcúdia · Noord-Mallorca', name: 'Alcanada', meta: ['Kust','Par 72','€95–175'], stars: '★★★★★', difficulty: '8/10 Moeilijkheid', excerpt: 'Robert Trent Jones Jr. op zijn schilderachtigst. Hole 17 — een par 3 over een inham met de vuurtoren direct achter de vlag — is een van de meest gefotografeerde holes van Spanje.' },
  { cls: 'course-card--3', badge: 'Beste van Spanje 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Moeilijkheid', excerpt: 'Verkozen tot beste golfbaan van Spanje bij de World Golf Awards 2025. Uitzicht over de Baai van Palma. Een duizend jaar oude olijfboom bij hole 15.' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Zuidwest', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Moeilijkheid', excerpt: 'Gastgever van de DP World Tour Mallorca Golf Open 2021. Een van de langste banen van het eiland.' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Zuidwest', name: 'Golf de Andratx', meta: ['Meest uitdagend','Par 70','€96–140'], stars: '★★★★☆', difficulty: '9/10 Moeilijkheid', excerpt: 'Hole 6 is de langste par 5 van Spanje met 609 meter. Gebouwd in kustbergen zonder compromis. Neem reserveballen mee en laat uw ego thuis.' },
]

const faqs = [
  { q: 'Moet ik een goede golfer zijn?', a: 'Helemaal niet. De ervaring past zich aan uw niveau aan — beginners en scratch-spelers halen er beide wat uit. De enige vereiste is een genuien andere golfervaring willen.' },
  { q: 'Welke baan gebruikt u?', a: 'Dat hangt van u af. Son Gual en Alcanada zijn mijn primaire banen voor een serieuze volledige dag. Voor beginners, groepen of kortere rondes zijn er betere opties — en ik vertel u eerlijk welke past.' },
  { q: 'Hoe reserveer ik?', a: 'Neem contact op. Vertel me uw data en wat u zoekt — ik reageer persoonlijk binnen 24 uur. Geen reserveringssystemen. Geen wachten.' },
  { q: 'Is dit geschikt voor een groep?', a: 'Ja. De ervaringen werken voor solo\'s, koppels, vriendengroepen en bedrijfsdagen. De Volledige Ervaring is bijzonder populair bij bedrijfsgroepen en leidinggevenden die het eiland bezoeken.' },
  { q: 'Wanneer is de beste tijd om te komen?', a: 'Oktober, november, maart en april. De beste combinatie van baancondities, weer, prijs-kwaliteit en speeltempo. Het eiland is het hele jaar bespeelbaar — in januari zijn de fairways hier beter dan Engelse fairways in augustus.' },
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

export default function HomePageNL() {
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
        <div className="hero__bg"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA Advanced Professional · Mallorca</p>
          <h1 className="serif-display hero__title">
            Speel de beste<br />golfbanen van Mallorca.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Met een pro aan uw zijde.</em>
          </h1>
          <p className="hero__sub">Golfervaringen en coaching op de baan — voor golfers die meer uit hun tijd op het eiland willen halen.</p>
          <div className="hero__actions">
            <Link href="/nl/play-with-a-pro" className="btn btn--gold">Bekijk de ervaringen →</Link>
            <Link href="/nl/golf-courses" className="btn btn--outline-white">Verken de banen</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master gecertificeerd</em></p>
          <p className="hero__trust-line"><em>11 jaar in Shanghai</em></p>
          <p className="hero__trust-line">Pebble Beach · Évian · The Open</p>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Wat het verschil maakt</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Veel golfervaringen op Mallorca worden via een platform geboekt.<br />Dit is iets anders.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            Een privédag met een PGA Advanced Professional die op het hoogste niveau op drie continenten heeft gecoacht — van Chinese nationale teamspelers tot golfers op grote wedstrijdlocaties in Europa, Azië en de VS. De expertise achter de dag maakt het verschil. Het golf is beter. De inzichten zijn echt.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1"><div className="intro__stat-num">18</div><div className="intro__stat-label">Jaar golfcoaching</div></div>
          <div className="intro__stat reveal reveal-delay-2"><div className="intro__stat-num">15.000+</div><div className="intro__stat-label">Gegeven lessen</div></div>
          <div className="intro__stat reveal reveal-delay-3"><div className="intro__stat-num">300+</div><div className="intro__stat-label">Toernooiwinnaars begeleid</div></div>
        </div>
      </section>

      
      {{/* DOUYIN STRIP */}}
      <section style={{{{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}}}>
        <p style={{{{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.4)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}}}>
          Andy 教练 &nbsp;·&nbsp; 300 miljoen+ golfcoaching videoweergaven op TikTok &nbsp;·&nbsp; Coaching-inhoud wereldwijd vertrouwd
        </p>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">Hoe het werkt</p>
          <h2 className="serif-display">Drie stappen naar een ronde die u niet vergeet.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal"><span className="how__num">01</span><h3>Neem contact op</h3><p>Vertel me uw data, uw handicap en wat u zoekt. Ik reageer persoonlijk binnen 24 uur.</p></div>
          <div className="how__step reveal reveal-delay-1"><span className="how__num">02</span><h3>Ik bouw uw dag</h3><p>Baanaanbeveling, starttijd, lunch, vervoer — alles geregeld voordat u aankomt.</p></div>
          <div className="how__step reveal reveal-delay-2"><span className="how__num">03</span><h3>Aankom en speel</h3><p>Uw enige taak is van de ronde genieten. En beter spelen dan verwacht.</p></div>
        </div>
      </section>

                  {/* De meeste banen in Europa sluiten in de winter. Mallorca niet. In januari zijn de fairways hier onberispelijk.LACEHOLDER */}
      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div>
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>Waarom Mallorca</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>Mallorca heeft banen van European Tour-niveau. Veel bezoekers spelen er een paar en vragen zich af wat ze gemist hebben.</h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>De meeste banen in Europa sluiten in de winter. Mallorca niet. In januari zijn de fairways hier onberispelijk.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {[['22','banen op het eiland'],['300+','zonnedagen per jaar'],['Jan–Dec','Helaarrond seizoen']].map(([num,label],i) => (
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
          <div className="courses__header-left"><p className="eyebrow">Uitgelichte banen</p><h2 className="serif-display">Mallorca's beste banen — gespeeld en beoordeeld.</h2></div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg></button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg></button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c,i) => (
            <article key={i} className={`course-card ${c.cls}`}>
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
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">De ervaring</p>
          <h2 className="serif-display">De meeste golfdagen op Mallorca zijn een starttijd en een vaarwel.</h2>
          <span className="gold-rule"></span>
          <p>Ik bracht meer dan een decennium door met coachen in China, waar golflessen zo'n €500 per uur kostten en klanten serieuze, meetbare verbetering verwachtten — geen aanmoediging. Daarvoor coachte ik op Pebble Beach, The Open Championship, Évian, en bracht een seizoen door op een wereldreis door veertig landen.</p>
          <p>Die achtergrond vormt elke ronde die ik begeleid. Echte adviezen gedurende de dag — baanstrategie, besluitvorming, de dingen die de meeste golfers nooit horen. Een dag waar u nog over praat in het vliegtuig naar huis.</p>
          <p>Alles is geregeld. De baan. De starttijd. De lunchtafel. Uw enige taak is spelen — en beter spelen dan verwacht.</p>
          <Link href="/nl/play-with-a-pro" className="btn btn--dark">Bekijk de ervaringen →</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: 'i', title: 'Alles geregeld', text: 'Baan, starttijd, vervoer, lunch — volledig afgehandeld voordat u aankomt.' },
            { icon: '→', title: 'Coaching op de baan', text: 'Echte verbetering in echte omstandigheden. Geen les. Geen commentaar. De juiste observatie op het juiste moment.' },
            { icon: '◇', title: 'Echt privé', text: 'Alleen u en een PGA Advanced Professional. Geen vreemden in uw groep. Een ronde volledig gevormd rond uw spel.' },
            { icon: '+', title: 'Toegang tot meer', text: 'Ledenbanen die de meeste bezoekers niet zelfstandig kunnen boeken — Santa Ponsa 2 & 3, en meer.' },
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
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>Wat golfers zeggen</p>
          <h2 className="serif-display" style={{color:'#fff'}}>In hun eigen woorden.</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Golf spelen met Andy was een geweldige ervaring. Hij heeft een ongeëvenaard niveau van inzicht en brengt het op een subtiele en empathische manier over. Na slechts 18 holes heb ik een nieuw plafond voor mijn potentieel ontdekt.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Het inzicht in de berekeningen achter elk schot heeft mijn besluitvorming enorm verbeterd. Het moment dat opviel was zien hoe Andy een 3-ijzer 220 meter sloeg over een dogleg rechts met bomen en het op de green plaatste. Buitengewoon talent.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
        </div>
      </section>

            {/* CAREER STRIP */}
      <CareerStrip />

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Ervaringen &amp; Pakketten</p>
          <h2 className="serif-display">Privégolfervaringen ontworpen rondom u.</h2>
          <p>Drie niveaus. Allemaal privé. Allemaal persoonlijk begeleid. Het verschil zit in hoe compleet de dag is.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">De Mallorca Ronde</p><h3 className="package__name">Spelen met een Pro</h3><p className="package__price">Vanaf €500 per persoon</p><div className="package__divider"></div>
            <ul className="package__features">{['Baanaanbeveling afgestemd op uw spel','Starttijd geboekt en volledig geregeld','Briefing en warming-up','18 holes naast Andy','Coaching op de baan gedurende de ronde','Nabespreking — eerlijk en duidelijk'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/nl/contact" className="btn btn--dark">Aanvragen →</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">De Signature Dag</p><h3 className="package__name">Begeleide Golfdag</h3><p className="package__price">Vanaf €650 per persoon</p><div className="package__divider"></div>
            <ul className="package__features">{['Alles van De Mallorca Ronde','Son Gual of Alcanada','Uitgebreide lunch op de baan','Geselecteerde verrassingsgift','Ontspannen tempo — een volle dag'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/nl/contact" className="btn btn--gold">Aanvragen →</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">De Volledige Ervaring</p><h3 className="package__name">Maatwerk Golfreis</h3><p className="package__price">Op aanvraag</p><div className="package__divider"></div>
            <ul className="package__features">{['Meerbanendag of volledig programma','Privévervoer vanuit Palma','Diner bij handgekozen restaurant','Spa- of herstelsessie','Volledige conciergecordinatie','Voor groepen, bedrijven & maatwerk'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/nl/contact" className="btn btn--dark">Aanvragen →</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Vragen</p>
          <h2 className="serif-display">Wat mensen vragen voordat ze contact opnemen.</h2>
          <p>Nog onzeker? Neem direct contact op — ik reageer persoonlijk binnen 24 uur.</p>
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
          <p className="eyebrow eyebrow--gold">Klaar om Mallorca goed te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Neem contact op.<br />Ik regel de rest.</h2>
          <p>Vertel me uw data, uw handicap en wat u van de dag verwacht. Ik reageer met een aanbeveling — persoonlijk, binnen 24 uur.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;Het golf is beter. De inzichten zijn echt.&rdquo;</p>
          <Link href="/nl/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Reserveer uw dag →</Link>
          <Link href="/nl/golf-courses" className="btn btn--outline-white">Verken de banen</Link>
        </div>
      </section>
    </>
  )
}

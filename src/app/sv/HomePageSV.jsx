'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expertval', region: 'Palma · 11km från centrum', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Svårighet', excerpt: 'Thomas Himmels design från 2007 har sitt eget vindekosystem. Avslutningssträckan — hål 15–18 — räknas bland Europas fyra bästa hål.' },
  { cls: 'course-card--2', badge: '★ Expertval', region: 'Alcúdia · Norra Mallorca', name: 'Alcanada', meta: ['Kust','Par 72','€95–175'], stars: '★★★★★', difficulty: '8/10 Svårighet', excerpt: 'Robert Trent Jones Jr. på sitt mest storslagna. Hål 17 — ett par 3 över en vik med fyren direkt bakom flaggan — är ett av Spaniens mest fotograferade hål.' },
  { cls: 'course-card--3', badge: 'Bäst i Spanien 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Svårighet', excerpt: 'Utsett till Spaniens bästa golfbana vid World Golf Awards 2025. Utsikt över Palmas bukt. Ett tusenårigt olivträd vid hål 15.' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Sydväst', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Svårighet', excerpt: 'Arrangerade DP World Tour Mallorca Golf Open 2021. En av öns längsta banor.' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Sydväst', name: 'Golf de Andratx', meta: ['Mest utmanande','Par 70','€96–140'], stars: '★★★★☆', difficulty: '9/10 Svårighet', excerpt: 'Hål 6 är Spaniens längsta par 5 med 609 meter. Byggd i kustbergen utan kompromisser. Ta med reservbollar och lägg egot hemma.' },
]

const faqs = [
  { q: 'Behöver jag vara en bra golfare?', a: 'Inte alls. Upplevelsen anpassas efter din nivå — nybörjare och scratch-spelare får båda ut något av dagen. Det enda kravet är att du vill ha en genuint annorlunda golfupplevelse.' },
  { q: 'Vilken bana använder du?', a: 'Det beror på dig. Son Gual och Alcanada är mina primära banor för en seriös heldag. För nybörjare, grupper eller kortare rundor finns bättre alternativ — och jag berättar ärligt vilken som passar.' },
  { q: 'Hur bokar jag?', a: 'Hör av dig. Berätta om dina datum och vad du söker — jag återkommer personligen inom 24 timmar. Inga bokningssystem. Inget väntande.' },
  { q: 'Passar detta för en grupp?', a: 'Ja. Upplevelserna fungerar för solon, par, vängrupper och företagsdagar. Den Kompletta Upplevelsen är särskilt populär bland företagsgrupper och chefer som besöker ön.' },
  { q: 'När är bästa tiden att besöka?', a: 'Oktober, november, mars och april. Bäst kombination av banförhållanden, väder, värde och speltempo. Ön går att spela året runt — i januari är fairways här bättre än engelska fairways i augusti.' },
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

export default function HomePageSV() {
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
            Spela Mallorcas<br />bästa golfbanor.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Med en proffs vid din sida.</em>
          </h1>
          <p className="hero__sub">Golfupplevelser och coaching på banan — för golfare som vill få ut mer av sin tid på ön.</p>
          <div className="hero__actions">
            <Link href="/sv/play-with-a-pro" className="btn btn--gold">Se upplevelserna →</Link>
            <Link href="/sv/golf-courses" className="btn btn--outline-white">Utforska banorna</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master certifierad</em></p>
          <p className="hero__trust-line"><em>11 år i Shanghai</em></p>
          <p className="hero__trust-line">Pebble Beach · Évian · The Open</p>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Vad som skiljer detta åt</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Många golfupplevelser på Mallorca bokas via en plattform.<br />Det här är något annat.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            En privat dag med en PGA Advanced Professional som coachat på högsta nivå på tre kontinenter — från det kinesiska landslaget till golfare på stora tävlingsarenor i Europa, Asien och USA. Expertisen bakom dagen gör skillnaden. Golfen är bättre. Insikterna är äkta.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1"><div className="intro__stat-num">18</div><div className="intro__stat-label">År golfcoaching</div></div>
          <div className="intro__stat reveal reveal-delay-2"><div className="intro__stat-num">15.000+</div><div className="intro__stat-label">Lektioner givna</div></div>
          <div className="intro__stat reveal reveal-delay-3"><div className="intro__stat-num">300+</div><div className="intro__stat-label">Turneringsvinnare coachade</div></div>
        </div>
      </section>

      
      {/* DOUYIN STRIP */}
      <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}>
        <p style={{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.4)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}>
          Andy 教练 &nbsp;·&nbsp; 300 miljoner+ golfcoaching videovisningar på TikTok &nbsp;·&nbsp; Coaching-innehåll betrott världen över
        </p>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">Så fungerar det</p>
          <h2 className="serif-display">Tre steg till en runda du kommer minnas.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal"><span className="how__num">01</span><h3>Hör av dig</h3><p>Berätta om dina datum, ditt handicap och vad du söker. Jag återkommer personligen inom 24 timmar.</p></div>
          <div className="how__step reveal reveal-delay-1"><span className="how__num">02</span><h3>Jag bygger din dag</h3><p>Banrekommendation, starttid, lunch, transport — allt ordnat innan du anländer.</p></div>
          <div className="how__step reveal reveal-delay-2"><span className="how__num">03</span><h3>Kom och spela</h3><p>Ditt enda jobb är att njuta av rundan. Och spela bättre än du förväntade dig.</p></div>
        </div>
      </section>

                  {/* De flesta banor i Europa stänger på vintern. Mallorca inte. I januari är fairwaysarna oklanderliga.LACEHOLDER */}
      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div>
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>Varför Mallorca</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>Mallorca har banor på European Tour-nivå. Många besökare spelar ett par och undrar vad de missat.</h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>De flesta banor i Europa stänger på vintern. Mallorca inte. I januari är fairwaysarna oklanderliga.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {[['22','banor på ön'],['300+','soldagar per år'],['Jan–Dec','Helårssäsong']].map(([num,label],i) => (
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
          <div className="courses__header-left"><p className="eyebrow">Utvalda banor</p><h2 className="serif-display">Mallorcas bästa — spelade och recenserade.</h2></div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg></button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg></button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c,i) => (
            <Link key={i} href="/sv/golf-courses" style={{textDecoration:'none',display:'block'}}><article className={`course-card ${c.cls}`}>
              <div className="course-card__bg"></div><div className="course-card__overlay"></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">{c.meta.map((m,j)=><span key={j}>{j>0&&<span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.3)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>)}</div>
                <div className="course-card__rating"><span className="course-card__stars">{c.stars}</span><span className="course-card__rating-label"> · {c.difficulty}</span></div>
                <p className="course-card__excerpt">{c.excerpt}</p>
              </div>
            </article></Link>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link href="/sv/golf-courses" className="btn btn--dark">Se alla 22 banor →</Link>
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">Upplevelsen</p>
          <h2 className="serif-display">De flesta golfdagar på Mallorca är en starttid och ett adjö.</h2>
          <span className="gold-rule"></span>
          <p>Jag tillbringade drygt ett decennium med att coacha i Kina, där golflektioner kostade 500 € i timmen och klienterna förväntade sig seriösa, mätbara förbättringar — inte bara uppmuntran. Dessförinnan coachade jag på Pebble Beach, vid The Open Championship, i Évian, och tillbringade en säsong på en världsresa ombord på ett kryssningsfartyg i fyrtio länder.</p>
          <p>Den bakgrunden formar varje runda jag är värd för. Äkta råd genomgående — banstrategi, beslutsfattande, saker de flesta golfare aldrig hör. En dag du fortfarande pratar om på flyget hem.</p>
          <p>Allt är ordnat. Banan. Starttiden. Lunchbordet. Ditt enda jobb är att spela — och spela bättre än förväntat.</p>
          <Link href="/sv/play-with-a-pro" className="btn btn--dark">Se upplevelserna →</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: 'i', title: 'Allt ordnat', text: 'Bana, starttid, transport, lunch — helt hanterat innan du anländer.' },
            { icon: '→', title: 'Coaching på banan', text: 'Riktig förbättring i riktiga förhållanden. Ingen lektion. Ingen löpande kommentar. Rätt observation vid rätt tillfälle.' },
            { icon: '◇', title: 'Genuint privat', text: 'Bara du och en PGA Advanced Professional. Inga okända i din grupp. En runda formad helt runt ditt spel.' },
            { icon: '+', title: 'Tillgång till mer', text: 'Banor enbart för medlemmar som de flesta besökare inte kan boka självständigt — Santa Ponsa 2 & 3, och fler.' },
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
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>Vad golfare säger</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Med egna ord.</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Att golfa med Andy var en enastående upplevelse. Han har en oöverträffad nivå av insikt och förmedlar den på ett sätt som är både subtilt och empatiskt. Efter bara 18 hål tillsammans har jag upptäckt en ny gräns för min potential.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Insikten i beräkningarna bakom varje slag har förbättrat mitt beslutsfattande enormt. Det ögonblick som stack ut var att se Andy slå ett 3-järn 220 meter över ett dogleg höger med träd och lägga det på greenen. Fantastiskt talent.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
        </div>
      </section>

            {/* CAREER STRIP */}
      <CareerStrip />

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Upplevelser &amp; Paket</p>
          <h2 className="serif-display">Privata golfupplevelser formade runt dig.</h2>
          <p>Tre nivåer. Alla privata. Alla personligt guidade. Skillnaden är hur komplett dagen är.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">Mallorca-rundan</p><h3 className="package__name">Spela med ett proffs</h3><p className="package__price">Från 500 € per person</p><div className="package__divider"></div>
            <ul className="package__features">{['Banrekommendation matchad efter ditt spel','Starttid säkrad och fullt hanterad','Briefing och uppvärmning innan rundan','18 hål bredvid Andy','Coaching på banan genomgående','Genomgång efter rundan — ärlig och tydlig'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/sv/contact" className="btn btn--dark">Förfrågan →</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">Signature-dagen</p><h3 className="package__name">Guidad golfdag</h3><p className="package__price">Från 650 € per person</p><div className="package__divider"></div>
            <ul className="package__features">{['Allt i Mallorca-rundan','Son Gual eller Alcanada — två av öns finaste','Lång lunch på banrestaurangen','Utvald överraskning','Avspänt tempo — en hel dag, inte en jäktad runda'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/sv/contact" className="btn btn--gold">Förfrågan →</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">Den Kompletta Upplevelsen</p><h3 className="package__name">Skräddarsydd golfreasa</h3><p className="package__price">På förfrågan</p><div className="package__divider"></div>
            <ul className="package__features">{['Flerbanorsdag eller fullständigt program','Privat transport från Palma','Middag på handplockat restaurang','Spa eller återhämtning hos partneranläggning','Fullständig concierge-koordination','För grupper, företag och skräddarsydda önskemål'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/sv/contact" className="btn btn--dark">Förfrågan →</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Frågor</p>
          <h2 className="serif-display">Saker folk frågar innan de hör av sig.</h2>
          <p>Fortfarande osäker? Hör av dig direkt — jag svarar personligen inom 24 timmar.</p>
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
          <p className="eyebrow eyebrow--gold">Redo att spela Mallorca ordentligt?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Hör av dig.<br />Jag ordnar resten.</h2>
          <p>Berätta om dina datum, ditt handicap och vad du vill ha ut av dagen. Jag återkommer med en rekommendation — personligen, inom 24 timmar.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;Golfen är bättre. Insikterna är äkta.&rdquo;</p>
          <Link href="/sv/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Boka din dag →</Link>
          <Link href="/sv/golf-courses" className="btn btn--outline-white">Utforska banorna</Link>
        </div>
      </section>
    </>
  )
}

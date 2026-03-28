'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', id: 'golf-son-gual', badge: '★ Expert Pick', region: 'Palma · 11km from city', name: 'Son Gual', meta: ['Championship', 'Par 72', '€80–165'], stars: '★★★★★', difficulty: '9/10 Difficulty', excerpt: "Thomas Himmel's 2007 design sits in its own wind ecosystem. The closing stretch — holes 15–18 — is among the finest four holes in European golf.", img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', id: 'club-de-golf-alcanada', badge: '★ Expert Pick', region: 'Alcúdia · North Mallorca', name: 'Alcanada', meta: ['Coastal', 'Par 72', '€115–220'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: "Robert Trent Jones Jr. at his most scenic. The lighthouse visible from 16 of 18 holes. One of the most photographed courses in Spain.", img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', id: 'son-muntaner', badge: 'Best in Spain 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour', 'Par 72'], stars: '★★★★★', difficulty: '7/10 Difficulty', excerpt: "Named Best Golf Course in Spain at the 2025 World Golf Awards. Views across the Bay of Palma. A thousand-year-old olive tree on the 15th.", img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', id: 'golf-santa-ponsa-1', badge: null, region: 'Santa Ponsa · Southwest', name: 'Santa Ponsa 1', meta: ['DP World Tour host', 'Par 72', '€77–126'], stars: '★★★★☆', difficulty: '8/10 Difficulty', excerpt: "Hosted the 2021 DP World Tour Mallorca Open. One of Europe's longest courses — the 10th hole alone stretches 590 metres.", img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', id: 'golf-de-andratx', badge: null, region: 'Camp de Mar · Southwest', name: 'Golf de Andratx', meta: ['Most challenging', 'Par 72', '€96–140'], stars: '★★★★☆', difficulty: '9/10 Difficulty', excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', img: '/images/andratx.webp' },
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
  { q: 'Muss ich ein guter Golfer sein?', a: 'Überhaupt nicht. Das Erlebnis passt sich Deinem Spiel an — Anfänger und Scratch-Golfer profitieren beide davon. Die einzige Voraussetzung ist der Wunsch nach einem wirklich anderen Golferlebnis.' },
  { q: 'Welchen Platz nutzt ihr?', a: 'Das hängt von dir ab. Son Gual und Alcanada sind meine Hauptanlaufstellen für einen ernsthaften ganzen Tag. Für Anfänger, Gruppen oder kürzere Runden gibt es bessere Optionen — und ich sage dir ehrlich, welcher Platz passt.' },
  { q: 'Wie buche ich?', a: 'Melde dich an. Sag mir deine Termine und was du suchst — ich antworte persönlich innerhalb von 24 Stunden. Keine Buchungssysteme. Kein Warten.' },
  { q: 'Ist das für eine Gruppe geeignet?', a: 'Ja. Die Erlebnisse funktionieren für Einzelne, Paare, Freundesgruppen und Firmenmessen. Das Full Experience ist besonders beliebt für Geschäftsgruppen und Führungskräfte, die die Insel besuchen.' },
  { q: 'Welche ist die beste Jahreszeit zum Besuch?', a: 'Oktober, November, März und April. Beste Kombination aus Platzkonditionen, Wetter, Preis und Spielgeschwindigkeit. Die Insel ist das ganze Jahr über spielbar — im Januar sind die Fairways hier besser als die Fairways im August in England.' },
]

const FEATURE_ICONS = {
  arranged: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></svg>),
  coaching: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>),
  private: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  access: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>),
}


export default function HomePageDE() {
  const router = useRouter()
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
          <p className="hero__eyebrow">PGA-Fachmann · Mallorca</p>
          <h1 className="serif-display hero__title">
            Spiele Mallorkas<br />beste Plätze.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Mit einem Profi an deiner Seite.</em>
          </h1>
          {/* Sub-headline removed — headline is strong enough alone */}
          <div className="hero__actions">
            <Link href="/de/contact" className="btn btn--gold">Buche deinen Tag</Link>
            <a href="#courses" className="btn btn--outline-white">Erkunde die Plätze</a>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA-Fachmann</em></p>
          <p className="hero__trust-line"><em>Trackman Master Certified</em></p>
          <p className="hero__trust-line"><em>18 Jahre Golf-Coaching</em></p>
          <p className="hero__trust-line">Pebble Beach · Evian · The Open</p>
        </div>
        {/* Scroll indicator removed — not needed on homepage only */}
      </section>

      {/* INTRO */}
      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Was macht das besonders</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Viele Golf-Erlebnisse auf Mallorca werden über eine Plattform gebucht.<br />Das ist etwas anderes.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.65)',lineHeight:1.85}}>
            Ein privater Tag unter Leitung eines PGA-Fachmanns mit über zwei Jahrzehnten Coaching-Erfahrung auf drei Kontinenten — nationale Mannschaftsspieler in China, Major Championship Venues in Europa, Amateur- und Profigolfer in Asien und den USA. Das Know-how hinter dem Tag macht den Unterschied. Das Golf ist besser. Die Einsicht ist echt.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1">
            <div className="intro__stat-num">18</div>
            <div className="intro__stat-label">Jahre Golf-Coaching</div>
          </div>
          <div className="intro__stat reveal reveal-delay-2">
            <div className="intro__stat-num">15.000+</div>
            <div className="intro__stat-label">Trainingseinheiten durchgeführt</div>
          </div>
          <div className="intro__stat reveal reveal-delay-3">
            <div className="intro__stat-num">300+</div>
            <div className="intro__stat-label">Wettkampfsieger trainiert</div>
          </div>
        </div>
      </section>

      {/* DOUYIN STRIP */}
      <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}>
        <p style={{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.65)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}>
          Andy 教练 &nbsp;·&nbsp; 300 Millionen+ Golf-Coaching-Video-Views auf TikTok &nbsp;·&nbsp; Coaching-Inhalte weltweit vertraut
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">So funktioniert es</p>
          <h2 className="serif-display">Drei Schritte zu einer Runde, die du nicht vergessen wirst.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal">
            <span className="how__num">01</span>
            <h3>Melde dich an</h3>
            <p>Sag mir deine Termine, deinen Handicap und was du suchst. Ich antworte persönlich innerhalb von 24 Stunden.</p>
          </div>
          <div className="how__step reveal reveal-delay-1">
            <span className="how__num">02</span>
            <h3>Ich plane deinen Tag</h3>
            <p>Platzempfehlung, Abschlagzeit, Mittagessen, Transport — alles ist organisiert, bevor du ankommst.</p>
          </div>
          <div className="how__step reveal reveal-delay-2">
            <span className="how__num">03</span>
            <h3>Komm und spiele</h3>
            <p>Deine Aufgabe ist es, den Platz zu genießen. Die meisten Menschen spielen besser als erwartet.</p>
          </div>
        </div>
      </section>

      {/* WHY MALLORCA */}
      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div className="reveal">
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>Warum Mallorca</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>Mallorca hat Plätze nach European Tour Standard. Viele Besucher spielen ein paar und fragen sich, was sie verpasst haben.</h2>
            <p style={{fontSize:'1rem',color:'rgba(255,255,255,.6)',lineHeight:1.85,marginBottom:'1.25rem'}}>Die meisten besten Golfplätze Europas schließen im Winter. Mallorca nicht. Im Januar, wenn Plätze in England sumpfig und geschlossen sind, sind Son Guels Fairways makellos und der erste Abschlag leer. Oktober bis April ist die beste Zeit — niedrigere Green Fees, ruhigere Plätze, Konditionen, die einen Sommerrunde überall sonst beschämen würden.</p>
            <p style={{fontSize:'1rem',color:'rgba(255,255,255,.6)',lineHeight:1.85}}>Zweiundzwanzig Plätze innerhalb einer Stunde Fahrt. Mehrere haben die DP World Tour ausgetragen, das Rolex Challenge Tour Grand Final und zogen Design-Aufträge von Robert Trent Jones Jr. und Jack Nicklaus an. Das ist keine Insel, die zufällig Golf hat. Das ist ein ernstes Ziel, das die meisten Besucher nie richtig erkunden.</p>
          </div>
          <div className="reveal reveal-delay-1">
            {[
              { num: '22', label: 'Plätze auf der Insel' },
              { num: '300+', label: 'Sonnentage pro Jahr' },
              { num: 'Jan–Dez', label: 'ganzjährige Saison' },
              { num: '€80–220', label: 'Green Fee Bereich' },
            ].map((s, i) => (
              <div key={i} style={{padding:'1.5rem 0',borderBottom:'1px solid rgba(255,255,255,.08)',display:'flex',alignItems:'center',gap:'1.5rem'}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'2.2rem',fontWeight:500,color:'var(--gold)',flexShrink:0,width:120}}>{s.num}</span>
                <span style={{fontSize:'0.9rem',color:'rgba(255,255,255,.5)',fontFamily:"'Jost',sans-serif",fontWeight:300}}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses" id="courses">
        <div className="courses__header">
          <div className="courses__header-left">
            <p className="eyebrow">Ausgewählte Plätze</p>
            <h2 className="serif-display">Mallorkas beste Plätze, gespielt und bewertet.</h2>
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
            <article key={i} className={`course-card ${c.cls}`} onClick={() => router.push('/de/golf-courses#' + c.id)} style={{cursor:'pointer'}}>
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
            </article>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link href="/de/golf-courses#all-courses" className="btn btn--dark">Alle 22 Plätze anschauen →</Link>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">Das Erlebnis</p>
          <h2 className="serif-display">Die meisten Golftage auf Mallorca sind eine Abschlagzeit und ein Winken zum Abschied.</h2>
          <span className="gold-rule"></span>
          <p>Ich habe über ein Jahrzehnt in China trainiert, wo Golf-Lektionen 500 Euro pro Stunde kosteten und Kunden echte Verbesserung wollten, nicht nur Ermutigung. Davor trainierte ich in Pebble Beach, der Open Championship, Evian und verbrachte eine Saison auf einer Weltkreuzfahrt über vierzig Länder.</p>
          <p>Dieser Hintergrund prägt jede Runde, die ich veranstalte. Das ist ein privater Tag auf einem der besten Plätze Mallorkas. Echte Beratung während der ganzen Runde — Platzstrategie, Entscheidungsfindung, Dinge, die selten in einer Standard-Lektion vorkommen. Ein Tag, über den du noch auf dem Rückflug sprichst.</p>
          <p>Alles ist vor deiner Ankunft organisiert — Platz, Abschlagzeit, Mittagessen. Deine einzige Aufgabe am Tag ist zu spielen.</p>
          <Link href="/de/play-with-a-pro" className="btn btn--dark">Entdecke die Erlebnisse</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: FEATURE_ICONS.arranged, title: 'Alles organisiert', text: 'Platz, Abschlagzeit, Transport, Mittagessen — alles ist vor deiner Ankunft geregelt.' },
            { icon: FEATURE_ICONS.coaching, title: 'Coaching auf dem Platz', text: 'Echte Verbesserung unter echten Bedingungen. Keine Lektion. Kein Kommentar. Die richtige Beobachtung zum richtigen Zeitpunkt.' },
            { icon: FEATURE_ICONS.private, title: 'Vollständig privat', text: 'Nur du und ein PGA-Fachmann. Keine Fremden in deiner Gruppe. Eine Runde vollständig um dein Spiel herum.' },
            { icon: FEATURE_ICONS.access, title: 'Zugang zu mehr', text: 'Nur-Mitglieder-Plätze, die die meisten besuchenden Golfer nicht unabhängig buchen können — Santa Ponsa 2 & 3 und weitere.' },
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
            &ldquo;Nach nur 18 Löchern zusammen habe ich eine neue Grenze meines Potenzials entdeckt.&rdquo;
          </p>
          <p style={{fontSize:'9px',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold-light)',fontFamily:"'Jost',sans-serif"}}>— Jo, nach einem Tag in Son Gual</p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Erlebnisse &amp; Pakete</p>
          <h2 className="serif-display">Ein Trainer. Ein Platz. Dein Tag.</h2>
          <p>Drei Erlebnis-Ebenen. Alle privat, alle persönlich von Andy geleitet.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">Die Mallorca-Runde</p>
            <h3 className="package__name">Mit einem Pro spielen</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Platz passend zu deinem Spiel und Handicap','Abschlagzeit gesichert und vollständig geregelt','Vorbriefing und Aufwärmung','18 Löcher neben Andy','Coaching auf dem Platz während der ganzen Runde','Nachbriefing — ehrlich und klar'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'0.5rem'}}>€350 pp + Green Fee</p>
            <p style={{fontSize:'0.75rem',color:'var(--taupe)',marginBottom:'1.25rem',lineHeight:1.5}}>Green Fees sind zusätzlich — typischerweise €80–220 pp je nach Platz und Jahreszeit.</p>
            <Link href="/de/contact" className="btn btn--dark">Anfrage</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">Der Signature Day</p>
            <h3 className="package__name">Gehosteter Golftag</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Alles in der Mallorca-Runde','Son Gual oder Alcanada — zwei der besten Plätze der Insel','Langes Mittagessen im Platzrestaurant','Kuratiertes Überraschungsgeschenk','Entspanntes Tempo — ein voller Tag, keine gehastete Runde'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'0.5rem',color:'var(--gold-light)'}}>Ab €450 pp + Green Fee</p>
            <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.4)',marginBottom:'1.25rem',lineHeight:1.5}}>Green Fees sind zusätzlich — typischerweise €80–220 pp je nach Platz und Jahreszeit.</p>
            <Link href="/de/contact" className="btn btn--gold">Anfrage</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">Das komplette Erlebnis</p>
            <h3 className="package__name">Maßgeschneiderte Golf-Reise</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {[
                'Multi-Platz-Tag oder vollständige 4-Tage-Reiseroute',
                'Privater Transport von Palma Hotels oder Villen',
                'Abendessen in einem handverlesenen Mallorca Restaurant',
                'Spa- oder Recovery-Sitzung an einem Partner-Ort',
                'Sonnenuntergangsfahrt entlang des Tramuntana',
                'Heißluftballonfahrt über die Berge',
                'Weinverkostung in einem mallorquinischen Weingut',
                'Vollständiger Concierge für Gruppen und Firmen',
              ].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>Maßgeschneiderte Reiseroute — auf Anfrage</p>
            <Link href="/de/contact" className="btn btn--dark">Anfrage</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Fragen</p>
          <h2 className="serif-display">Dinge, die die Leute fragen, bevor sie sich melden.</h2>
          <p>Sag mir deine Termine, deinen Handicap und was du suchst. Ich antworte persönlich innerhalb von 24 Stunden.</p>
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
          <p className="eyebrow eyebrow--gold">Bereit, Mallorca richtig zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Meld dich an.<br />Der Rest ist erledigt.</h2>
          <p>Sag mir deine Termine, deinen Handicap und was du vom Tag erwartest. Ich antworte mit einer Empfehlung — persönlich, innerhalb von 24 Stunden.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;Das Golf ist besser. Die Einsicht ist echt.&rdquo;</p>
          <Link href="/de/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px',letterSpacing:'0.18em'}}>Buche deinen Tag</Link>
          <a href="https://wa.me/34624466702" className="btn btn--outline-white" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

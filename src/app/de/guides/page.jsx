import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca GolffÃ¼hrer â€” Platz-Bewertungen & Tipps',
  description: 'Ehrliche Golfratgeber fÃ¼r Mallorca von einem PGA Professional. Platz-Bewertungen, Greenfees und Reiseplanung â€” aktualisiert 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Son Gual Golf Mallorca â€” Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Mein meistgespielter Platz auf der Insel. Der Wind, die Greens, die SchlusslÃ¶cher â€” und warum Obama und Nadal immer wiederkommen.', readTime: '7 Min.', keywords: 'Championship Â· Par 72 Â· â‚¬80â€“165 Â· Handicap erforderlich' },
  { slug: 'alcanada-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Club de Golf Alcanada â€” Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Der Platz, zu dem ich Leute bringe, wenn ich mÃ¶chte, dass sie mit einer Geschichte nach Hause kommen. Der Leuchtturm verÃ¤ndert alles.', readTime: '7 Min.', keywords: 'KÃ¼ste Â· Par 72 Â· â‚¬115â€“220 Â· Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca â€” Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Einer der lÃ¤ngsten PlÃ¤tze in Europa, DP World Tour-Geschichte und ein Platz, der das Vertrauen mit dem Driver wirklich zurÃ¼ckgibt.', readTime: '6 Min.', keywords: 'Championship Â· Par 72 Â· â‚¬77â€“126 Â· Ã–ffentlicher Zugang' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'Das Erlebnis', badgeGold: false, title: 'Ein Tag in Son Gual mit einem PGA Professional', intro: 'Was wirklich passiert, wenn man einen ganzen Tag auf Mallorcas bestem Platz mit einem Coach verbringt, der ihn fast jede Woche spielt.', readTime: '5 Min.', keywords: 'Son Gual Â· Mit Profi spielen Â· Ganztageserlebnis' },
  { slug: 'best-golf-courses-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Die besten GolfplÃ¤tze auf Mallorca â€” Ehrliches Ranking eines PGA-Professionals', intro: 'Zweiundzwanzig PlÃ¤tze auf der Insel. So wÃ¼rde ich sie fÃ¼r einen Besucher mit begrenzter Zeit und hohen AnsprÃ¼chen einordnen.', readTime: '8 Min.', keywords: 'Alle Level Â· Greenfees im Vergleich Â· Aktualisiert 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Ratgeber', badgeGold: false, title: 'Ist Mallorca gut fÃ¼r Golf? Eine ehrliche Antwort von jemandem, der hier lebt', intro: 'Die ehrliche Version â€” was die Insel besser macht als Portugal, wo sie zurÃ¼ckfÃ¤llt und fÃ¼r wen sie geeignet ist.', readTime: '5 Min.', keywords: 'Mallorca vs. Portugal Â· PlatzqualitÃ¤t Â· FÃ¼r alle Level' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Die beste Reisezeit fÃ¼r Golf auf Mallorca â€” Monat fÃ¼r Monat', intro: 'Oktober wÃ¤re meine Wahl. Hier ist warum, und was jeder Monat tatsÃ¤chlich in Bezug auf Wetter, Preise und Besucheraufkommen bietet.', readTime: '6 Min.', keywords: 'Wetter Â· Greenfees nach Saison Â· Besucheraufkommen' },
  { slug: 'golf-cost-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Was kostet Golf auf Mallorca? Greenfees, LeihausrÃ¼stung und versteckte Kosten', intro: 'Das vollstÃ¤ndige Bild, was ein Golftrip hier wirklich kostet â€” Greenfees, LeihausrÃ¼stung, Caddies und wo man sparen kann.', readTime: '5 Min.', keywords: 'â‚¬77â€“220 Greenfees Â· LeihausrÃ¼stung Â· Caddies Â· Preise 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Einen Golftrip nach Mallorca planen â€” Alles, was Sie wissen mÃ¼ssen', intro: 'FlÃ¼ge, PlÃ¤tze, UnterkÃ¼nfte in PlatznÃ¤he, Transfers. Der praktische ReisefÃ¼hrer, den ich mir gewÃ¼nscht hÃ¤tte, als ich hierher zog.', readTime: '7 Min.', keywords: 'Reiseplanung Â· Unterkunft Â· Anreise' },
]

export default function GuidesIndex_DE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/de" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>DE</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Ratgeber</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Mallorca Golf.<br />Ehrliche Ratgeber.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Platz-Bewertungen, Reiseplanung und Greenfees â€” geschrieben von einem PGA Professional, der hier jede Woche spielt.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Aktualisiert 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… Bewertungen aus erster Hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {liveGuides.map((g) => (
            <Link key={g.slug} href={`/de/guides/${g.slug}`} className="reveal"
              style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </Link>
          ))}

          {comingSoonGuides.map((g) => (
            <div key={g.slug} className="reveal"
              style={{display:'block',borderBottom:'1px solid var(--linen)',padding:'32px 0',pointerEvents:'none',userSelect:'none'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(45,74,62,.07)',color:'var(--taupe)',border:'1px solid var(--linen)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:600,color:'var(--deep)',alignSelf:'center',marginLeft:'auto',background:'var(--gold)',padding:'5px 12px'}}>
                  DemnÃ¤chst
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Eine private Runde auf einem dieser PlÃ¤tze â€” mit einem PGA Professional an Ihrer Seite.</h2>
          <p>Teilen Sie mir Ihre Daten und WÃ¼nsche mit. Ich melde mich persÃ¶nlich innerhalb von 24 Stunden.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Erlebnisse entdecken â†’</Link>
          <Link href="/de/contact" className="btn btn--outline-white">Kontakt aufnehmen</Link>
        </div>
      </section>
    </PageLayout>
  )
}


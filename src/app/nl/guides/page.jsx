import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfgids â€” Baanbeoordelingen & tips',
  description: 'Eerlijke golfgidsen voor Mallorca van een PGA Professional. Baanbeoordelingen, greenfees en reisplanning â€” bijgewerkt voor 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Son Gual Golf Mallorca â€” Eerlijke beoordeling van een PGA Professional (2026)', intro: 'Mijn meest gespeelde baan op het eiland. De wind, de greens, de slothole â€” en waarom Obama en Nadal blijven terugkomen.', readTime: '7 min', keywords: 'Championship Â· Par 72 Â· â‚¬80â€“165 Â· Handicap vereist' },
  { slug: 'alcanada-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Club de Golf Alcanada â€” Eerlijke beoordeling van een PGA Professional (2026)', intro: 'De baan waar ik mensen naartoe breng als ik wil dat ze met een verhaal thuiskomen. De vuurtoren verandert alles.', readTime: '7 min', keywords: 'Kustbaan Â· Par 72 Â· â‚¬115â€“220 Â· Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca â€” Eerlijke beoordeling van een PGA Professional (2026)', intro: 'Een van de langste banen in Europa, DP World Tour-geschiedenis en een baan die je vertrouwen met de driver Ã©cht teruggeeft.', readTime: '6 min', keywords: 'Championship Â· Par 72 Â· â‚¬77â€“126 Â· Toegankelijk voor bezoekers' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'De Ervaring', badgeGold: false, title: 'Een dag op Son Gual met een PGA Professional', intro: 'Wat er werkelijk gebeurt als je een volledige dag doorbrengt op het mooiste parcours van Mallorca met een coach die het bijna elke week speelt.', readTime: '5 min', keywords: 'Son Gual Â· Spelen met een Pro Â· Dagervaring' },
  { slug: 'best-golf-courses-mallorca', badge: 'Gids', badgeGold: false, title: 'De beste golfbanen van Mallorca â€” Eerlijke ranking van een PGA Professional', intro: 'TweeÃ«ntwintig banen op het eiland. Zo zou ik ze rangschikken voor een bezoeker met beperkte tijd en hoge verwachtingen.', readTime: '8 min', keywords: 'Alle niveaus Â· Greenfees vergeleken Â· Bijgewerkt 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Gids', badgeGold: false, title: 'Is Mallorca goed voor golf? Een eerlijk antwoord van iemand die hier woont', intro: 'De ongefiltreerde versie â€” wat het eiland beter doet dan Portugal, waar het tekortschiet en voor wie het geschikt is.', readTime: '5 min', keywords: 'Mallorca vs Portugal Â· Kwaliteit banen Â· Alle niveaus' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Gids', badgeGold: false, title: 'De beste tijd om golf te spelen op Mallorca â€” Maand voor maand', intro: 'Oktober is de maand die ik zou kiezen. Dit is waarom, en wat elke maand werkelijk biedt qua weer, prijs en drukte.', readTime: '6 min', keywords: 'Weer Â· Greenfees per seizoen Â· Drukte' },
  { slug: 'golf-cost-mallorca', badge: 'Gids', badgeGold: false, title: 'Hoeveel kost golf op Mallorca? Greenfees, verhuur en verborgen kosten', intro: 'Het volledige beeld van wat een golfreis hier werkelijk kost â€” greenfees, verhuur, caddies en waar je kunt besparen zonder in te leveren.', readTime: '5 min', keywords: 'â‚¬77â€“220 greenfees Â· Verhuur Â· Caddies Â· Prijzen 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Gids', badgeGold: false, title: 'Een golfreis naar Mallorca plannen â€” Alles wat je moet weten', intro: 'Vluchten, banen, verblijf bij de golf, hoe je je verplaatst. De praktische gids die ik had willen hebben toen ik hier aankwam.', readTime: '7 min', keywords: 'Reisplanning Â· Verblijf Â· Vervoer' },
]

export default function GuidesIndex_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/nl" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>NL</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Gidsen</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf op Mallorca.<br />Eerlijke gidsen.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Baanbeoordelingen, reisplanning en greenfees â€” geschreven door een PGA Professional die hier elke week speelt.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Bijgewerkt 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… Beoordelingen uit eerste hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {liveGuides.map((g) => (
            <Link key={g.slug} href={`/nl/guides/${g.slug}`} className="reveal"
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
                  Binnenkort
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
          <p className="eyebrow eyebrow--gold">Klaar om te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Een privÃ©ronde op een van deze banen, met een PGA Professional naast je.</h2>
          <p>Vertel me je data en wat je zoekt. Ik reageer persoonlijk binnen 24 uur.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Bekijk de ervaringen â†’</Link>
          <Link href="/nl/contact" className="btn btn--outline-white">Neem contact op</Link>
        </div>
      </section>
    </PageLayout>
  )
}


import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfgids — Baanbeoordelingen & tips',
  description: 'Eerlijke golfgidsen voor Mallorca van een PGA Professional. Baanbeoordelingen, greenfees en reisplanning — bijgewerkt voor 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/guides' },
}

const guides = [
  { slug: 'son-gual-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Son Gual Golf Mallorca — Eerlijke beoordeling van een PGA Professional (2026)', intro: 'Mijn meest gespeelde baan op het eiland. De wind, de greens, de slothole — en waarom Obama en Nadal blijven terugkomen.', readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap vereist' },
  { slug: 'alcanada-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Club de Golf Alcanada — Eerlijke beoordeling van een PGA Professional (2026)', intro: 'De baan waar ik mensen naartoe breng als ik wil dat ze met een verhaal thuiskomen. De vuurtoren verandert alles.', readTime: '7 min', keywords: 'Kustbaan · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Eerlijke beoordeling van een PGA Professional (2026)', intro: 'Een van de langste banen in Europa, DP World Tour-geschiedenis en een baan die je vertrouwen met de driver écht teruggeeft.', readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Toegankelijk voor bezoekers' },
  ,
  ,
  
]

export default function GuidesIndex_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/nl" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>NL</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>2026</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf op Mallorca.<br />Eerlijke gidsen.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Baanbeoordelingen, reisplanning en greenfees — geschreven door een PGA Professional die hier elke week speelt.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Bijgewerkt 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Beoordelingen uit eerste hand</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {guides.map((g) => (
            <Link key={g.slug} href={`/nl/guides/${g.slug}`} className="reveal"
              style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:g.badgeGold?'rgba(184,151,60,.12)':'rgba(45,74,62,.07)',color:g.badgeGold?'var(--gold)':'var(--taupe)',border:`1px solid ${g.badgeGold?'rgba(184,151,60,.25)':'var(--linen)'}`,flexShrink:0,alignSelf:'center'}}>
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
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Klaar om te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Een privéronde op een van deze banen, met een PGA Professional naast je.</h2>
          <p>Vertel me je data en wat je zoekt. Ik reageer persoonlijk binnen 24 uur.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Bekijk de ervaringen →</Link>
          <Link href="/nl/contact" className="btn btn--outline-white">Neem contact op</Link>
        </div>
      </section>
    </PageLayout>
  )
}

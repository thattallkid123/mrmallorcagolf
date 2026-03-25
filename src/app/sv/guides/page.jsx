import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfguide — Banomdömen & tips',
  description: 'Ärliga golfguider för Mallorca av en PGA Professional. Banomdömen, greenfees och reseplanering — uppdaterade för 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/guides' },
}

const guides = [
  { slug: 'son-gual-review', badge: 'Banomdöme', badgeGold: true, title: 'Son Gual Golf Mallorca — Ärlig recension av en PGA Professional (2026)', intro: 'Min mest spelade bana på ön. Vinden, greenerna, avslutningshålen — och varför Obama och Nadal alltid kommer tillbaka.', readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap krävs' },
  { slug: 'alcanada-review', badge: 'Banomdöme', badgeGold: true, title: 'Club de Golf Alcanada — Ärlig recension av en PGA Professional (2026)', intro: 'Banan jag tar folk till när jag vill att de ska åka hem med en historia. Fyren förändrar allt.', readTime: '7 min', keywords: 'Kustbana · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Banomdöme', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Ärlig recension av en PGA Professional (2026)', intro: 'En av Europas längsta banor, DP World Tour-historia och en bana som verkligen återger självförtroendet med drivern.', readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Öppen för besökare' },
  ,
  ,
  
]

export default function GuidesIndex_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 40%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/sv" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>SV</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>2026</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf på Mallorca.<br />Ärliga guider.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Banomdömen, reseplanering och greenfees — skrivna av en PGA Professional som spelar här varje vecka.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Uppdaterad 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Förstahandsomdömen</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {guides.map((g) => (
            <Link key={g.slug} href={`/sv/guides/${g.slug}`} className="reveal"
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
          <p className="eyebrow eyebrow--gold">Redo att spela?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>En privat runda på en av dessa banor, med en PGA Professional vid din sida.</h2>
          <p>Berätta dina datum och vad du söker. Jag svarar personligen inom 24 timmar.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Se upplevelserna →</Link>
          <Link href="/sv/contact" className="btn btn--outline-white">Kontakta oss</Link>
        </div>
      </section>
    </PageLayout>
  )
}

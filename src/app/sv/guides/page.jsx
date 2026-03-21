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
  { slug: 'best-golf-courses-mallorca', badge: 'Banöversikt', badgeGold: true, title: 'De Bästa Golfbanorna på Mallorca — Ärlig guide (2026)', intro: 'Mallorca erbjuder mer utmärkt golf än de flesta besökare förväntar sig. Tjugotvå banor, varav flera håller DP World Tour-standard.', readTime: '8 min', keywords: 'Son Gual · Alcanada · Son Muntaner · Golf de Andratx' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Översikt', badgeGold: false, title: 'Är Mallorca Bra för Golf? En PGA Professionals svar', intro: 'Ja. Men här är det fullständiga svaret — för Mallorca är bra för golf på sätt som inte är uppenbara utifrån.', readTime: '6 min', keywords: 'Världsklassbanor · Hela året · 22 banor · Bortom golfen' },
  { slug: 'best-time-play-golf-mallorca', badge: 'När man ska åka', badgeGold: false, title: 'Den Bästa Tiden att Spela Golf på Mallorca — Månad för månad (2026)', intro: 'Kort svar: oktober–november och februari–april. Men ön spelar bättre året runt än de flesta förväntar sig.', readTime: '4 min', keywords: 'Säsongsguide · Månad för månad · Greenfee-timing' },
  { slug: 'golf-cost-mallorca', badge: 'Greenfees', badgeGold: false, title: 'Vad Kostar Golf på Mallorca? Fullständig genomgång 2026', intro: 'En runda kan kosta €20 eller €220 beroende på bana och tidpunkt. Ärlig genomgång av någon som spelar här nästan varje vecka.', readTime: '5 min', keywords: 'Greenfees · Klubbuthyrning · Buggy · Kostnader för en hel dag' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Reseplanering', badgeGold: false, title: 'Hur Planerar Man den Perfekta Golfresan till Mallorca', intro: 'Ingen turisttext, inget fyllnadsmaterial. Vilka banor, när åka, hur många rundor, hur ta sig runt — av någon som bor här.', readTime: '7 min', keywords: 'När besöka · Banor · Transport · Vad man kan göra' },
  { slug: 'golf-club-hire-mallorca', badge: 'Praktisk guide', badgeGold: false, title: 'Hyra Golfklubbor på Mallorca — Allt du behöver veta (2026)', intro: 'Ta med egna klubbor eller hyra? Vilka företag är värda det och vilka bör man undvika.', readTime: '6 min', keywords: 'Uthyrningsföretag · Priser · Pro shops · Tips' },
]

export default function GuidesIndex_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero">
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

import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mallorca Golfguide â€” BanomdÃ¶men & tips',
  description: 'Ã„rliga golfguider fÃ¶r Mallorca av en PGA Professional. BanomdÃ¶men, greenfees och reseplanering â€” uppdaterade fÃ¶r 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'BanomdÃ¶me', badgeGold: true, title: 'Son Gual Golf Mallorca â€” Ã„rlig recension av en PGA Professional (2026)', intro: 'Min mest spelade bana pÃ¥ Ã¶n. Vinden, greenerna, avslutningshÃ¥len â€” och varfÃ¶r Obama och Nadal alltid kommer tillbaka.', readTime: '7 min', keywords: 'Championship Â· Par 72 Â· â‚¬80â€“165 Â· Handicap krÃ¤vs' },
  { slug: 'alcanada-review', badge: 'BanomdÃ¶me', badgeGold: true, title: 'Club de Golf Alcanada â€” Ã„rlig recension av en PGA Professional (2026)', intro: 'Banan jag tar folk till nÃ¤r jag vill att de ska Ã¥ka hem med en historia. Fyren fÃ¶rÃ¤ndrar allt.', readTime: '7 min', keywords: 'Kustbana Â· Par 72 Â· â‚¬115â€“220 Â· Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'BanomdÃ¶me', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca â€” Ã„rlig recension av en PGA Professional (2026)', intro: 'En av Europas lÃ¤ngsta banor, DP World Tour-historia och en bana som verkligen Ã¥terger sjÃ¤lvfÃ¶rtroendet med drivern.', readTime: '6 min', keywords: 'Championship Â· Par 72 Â· â‚¬77â€“126 Â· Ã–ppen fÃ¶r besÃ¶kare' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'Upplevelsen', badgeGold: false, title: 'En dag pÃ¥ Son Gual med en PGA-professionell', intro: 'Vad som faktiskt hÃ¤nder nÃ¤r du tillbringar en hel dag pÃ¥ Mallorcas finaste bana med en coach som spelar den nÃ¤stan varje vecka.', readTime: '5 min', keywords: 'Son Gual Â· Spela med ett proffs Â· Heldagsupplevelse' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guide', badgeGold: false, title: 'De bÃ¤sta golfbanorna pÃ¥ Mallorca â€” En PGA-professionells Ã¤rliga ranking', intro: 'TjugotvÃ¥ banor pÃ¥ Ã¶n. SÃ¥ hÃ¤r skulle jag rangordna dem fÃ¶r en besÃ¶kare med begrÃ¤nsad tid och hÃ¶ga krav.', readTime: '8 min', keywords: 'Alla nivÃ¥er Â· Greenfees jÃ¤mfÃ¶rt Â· Uppdaterad 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guide', badgeGold: false, title: 'Ã„r Mallorca bra fÃ¶r golf? Ett Ã¤rligt svar frÃ¥n nÃ¥gon som bor hÃ¤r', intro: 'Den ofiltrerade versionen â€” vad Ã¶n gÃ¶r bÃ¤ttre Ã¤n Portugal, var den faller kort och vem den passar.', readTime: '5 min', keywords: 'Mallorca vs Portugal Â· Banornas kvalitet Â· Alla nivÃ¥er' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guide', badgeGold: false, title: 'BÃ¤sta tiden att spela golf pÃ¥ Mallorca â€” MÃ¥nad fÃ¶r mÃ¥nad', intro: 'Oktober Ã¤r den mÃ¥nad jag skulle vÃ¤lja. HÃ¤r Ã¤r varfÃ¶r, och vad varje mÃ¥nad faktiskt levererar nÃ¤r det gÃ¤ller vÃ¤der, pris och trÃ¤ngsel.', readTime: '6 min', keywords: 'VÃ¤der Â· Greenfees per sÃ¤song Â· TrÃ¤ngsel' },
  { slug: 'golf-cost-mallorca', badge: 'Guide', badgeGold: false, title: 'Vad kostar golf pÃ¥ Mallorca? Greenfees, uthyrning och dolda kostnader', intro: 'Den fullstÃ¤ndiga bilden av vad en golfresa hit faktiskt kostar â€” greenfees, uthyrning, caddies och var du kan spara utan att kompromissa.', readTime: '5 min', keywords: 'â‚¬77â€“220 greenfees Â· Uthyrning Â· Caddies Â· Priser 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guide', badgeGold: false, title: 'Planera en golfresa till Mallorca â€” Allt du behÃ¶ver veta', intro: 'Flyg, banor, boende nÃ¤ra golfen, hur du tar dig runt. Den praktiska guiden jag Ã¶nskade att det funnits nÃ¤r jag flyttade hit.', readTime: '7 min', keywords: 'Reseplanering Â· Boende Â· Transport' },
]

export default function GuidesIndex_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/sv" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>SV</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Guider</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf pÃ¥ Mallorca.<br />Ã„rliga guider.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            BanomdÃ¶men, reseplanering och greenfees â€” skrivna av en PGA Professional som spelar hÃ¤r varje vecka.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Uppdaterad 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… FÃ¶rstahandsomdÃ¶men</span>
            <span className="page-hero__tag">PGA Professional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {liveGuides.map((g) => (
            <Link key={g.slug} href={`/sv/guides/${g.slug}`} className="reveal"
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
                  Kommer snart
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
          <p className="eyebrow eyebrow--gold">Redo att spela?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>En privat runda pÃ¥ en av dessa banor, med en PGA Professional vid din sida.</h2>
          <p>BerÃ¤tta dina datum och vad du sÃ¶ker. Jag svarar personligen inom 24 timmar.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Se upplevelserna â†’</Link>
          <Link href="/sv/contact" className="btn btn--outline-white">Kontakta oss</Link>
        </div>
      </section>
    </PageLayout>
  )
}


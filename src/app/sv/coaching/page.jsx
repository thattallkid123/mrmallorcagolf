import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'On-Course Golfcoaching i Mallorca â€” PGA-professional',
  description: 'On-course golfcoaching i Mallorca med PGA Advanced Professional Andy Griffiths. Verklig fÃ¶rbÃ¤ttring i verkliga fÃ¶rhÃ¥llanden â€” fÃ¶r besÃ¶kande och bosatta golfare.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/sv/coaching',
    languages: {
      'en': 'https://mrmallorcagolf.com/coaching',
      'de': 'https://mrmallorcagolf.com/de/coaching',
      'es': 'https://mrmallorcagolf.com/es/coaching',
      'fr': 'https://mrmallorcagolf.com/fr/coaching',
      'nl': 'https://mrmallorcagolf.com/nl/coaching',
      'sv': 'https://mrmallorcagolf.com/sv/coaching',
      'zh': 'https://mrmallorcagolf.com/zh/coaching',
      'x-default': 'https://mrmallorcagolf.com/coaching',
    }
  }
}

const improvements = [
  { num: '01', title: 'Banhantering', text: 'De flesta amatÃ¶rgolfare fÃ¶rlorar majoriteten av sina slag pÃ¥ fel beslut, inte fel swing. Att vÃ¤lja rÃ¤tt klubba, mÃ¥l, form â€” dessa skiljer en 90 frÃ¥n en 80. Vi arbetar med dem i realtid, pÃ¥ riktiga hÃ¥l, med en verklig poÃ¤ng pÃ¥ spel.' },
  { num: '02', title: 'Slagsval under press', text: "Besluten som kollapsar under press â€” drivan nÃ¤r en 5-jÃ¤rn vinner hÃ¥let, hero-skottet nÃ¤r det sÃ¤kra spelet fÃ¥r samma poÃ¤ng â€” blir synliga pÃ¥ banan pÃ¥ ett sÃ¤tt de aldrig gÃ¶r pÃ¥ rangen. Jag ser dem, namnger dem, och vi arbetar genom dem tillsammans." },
  { num: '03', title: 'LÃ¤sa greener och sluttningar', text: 'Att putta och chippa pÃ¥ en bana-green Ã¤r fundamentalt annorlunda Ã¤n en trÃ¤ningsgreen. Hastigheten, sluttningen, grÃ¤set, pressens moment â€” allt fÃ¶rÃ¤ndrar vad som fungerar. Vi trÃ¤nar det under de faktiska fÃ¶rhÃ¥llandena.' },
  { num: '04', title: 'Spela i vind', text: "Mallorca Ã¤r blÃ¥sigt. Son Gual lever i sitt eget vindekosystem. Klubbval i sidvind, banhantering, att lita pÃ¥ ditt mÃ¥l nÃ¤r bollen verkar driva â€” detta Ã¤r nÃ¥got du bara kan arbeta med nÃ¤r det faktiskt blÃ¥ser." },
  { num: '05', title: 'Mentalt spel och rutin', text: 'Hur du pratar med dig sjÃ¤lv efter ett dÃ¥ligt slag. Hur du nÃ¤rmar dig nÃ¤sta tee. Huruvida du har en fÃ¶rslagsrutin och om den hÃ¥ller under press. Den mentala sidan Ã¤r helt osynlig pÃ¥ rangen â€” den dyker bara upp nÃ¤r konsekvenserna Ã¤r verkliga.' },
  { num: '06', title: 'Hitta lÃ¥gt hÃ¤ngande frukter', text: "De flesta golfare fÃ¶rbÃ¤ttras snabbast inte frÃ¥n att bygga om sin swing utan frÃ¥n en eller tvÃ¥ smÃ¥ olÃ¥sta. En klient hade chippat med en pitching wedge hela sitt liv. En konversation, en klubbfÃ¶rÃ¤ndring, omedelbar fÃ¶rbÃ¤ttring. Ingen teknisk arbete. Det sÃ¤ttet av ting dyker bara upp pÃ¥ banan." },
  { num: '07', title: 'Konsekvens i verkliga fÃ¶rhÃ¥llanden', text: "OjÃ¤mna liggningar, tÃ¤ta fairways, course rough â€” banan krÃ¤ver skott som rangen aldrig frÃ¥gar efter. Att spela dem regelbundet, med feedback i realtid, Ã¤r hur du bygger ett spel som visar upp sig nÃ¤r det rÃ¤knas.", full: true },
]

export default function Coaching() {
  return (
    <>
    <link rel="preload" as="image" href="/images/coaching-hero.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero coaching-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, 60% 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Hem</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>On-Course Coaching</span></p>
          <h1>BÃ¤ttre golf.<br />Utan att Ã¤ndra allt.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>On-course coaching fÃ¶r besÃ¶kande och bosatta golfare. Verkliga fÃ¶rhÃ¥llanden, verkliga beslut, verklig fÃ¶rbÃ¤ttring â€” och ingen teknisk Ã¶verbelastning som lÃ¤mnar de flesta rangesessioner oanvÃ¤nda vid hÃ¥let 3.</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">VarfÃ¶r rangen inte rÃ¤cker</p>
          <h2>Det finns en anledning till att ditt rangspel inte syns pÃ¥ banan.</h2>
          <p>Rangen Ã¤r platt, kontrollerad och konsekvensfri. Du slÃ¥r frÃ¥n en perfekt matta utan vind, utan sluttningar, utan poÃ¤ng pÃ¥ spel, och utan nÃ¥gon som tittar. Sedan stÃ¥r du pÃ¥ 1:a tee och ingenting Ã¶verfÃ¶rs.</p>
          <p>On-course coaching sÃ¤tter lektionen dÃ¤r den faktiskt hjÃ¤lper. PÃ¥ fairwayen. I roughen. PÃ¥ en sluttning med en ovÃ¤ntat vind. Med en poÃ¤ng som spelar roll. Det Ã¤r dÃ¤r spel fÃ¶rÃ¤ndras â€” och det Ã¤r dÃ¤r vi arbetar.</p>
          <div className="analogy-box">
            <p>&ldquo;TÃ¤nk pÃ¥ boxning. Du kan trÃ¤na pÃ¥ kuddar i veckor och kÃ¤nna dig redo. Sedan har du ditt fÃ¶rsta sparringpass och allt fÃ¶rÃ¤ndras. Golf Ã¤r detsamma. FÃ¶rsta teet Ã¤r inte driving rangen.&rdquo;</p>
            <cite>â€” Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>FrÃ¥geformulÃ¤ret</p>
          <p>Ett kort frÃ¥geformulÃ¤r fÃ¶re sessionen formar dagen innan vi bÃ¶rjar. Vad som frustrerar dig, var gapen Ã¤r, vad framgÃ¥ng ser ut.</p>
          <p>NÃ¤r vi nÃ¥r fÃ¶rsta teet har jag redan en bild av vad jag ska leta efter. Feedbacken Ã¤r situationell och Ã¤rlig â€” inte en generisk lektionsplan tillÃ¤mpad pÃ¥ alla.</p>
          <p>Sessioner Ã¤ger rum pÃ¥ Son Gual, Alcanada, eller en bana matchad till din nivÃ¥ och mÃ¥l.</p>
          <Link href="/sv/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Diskutera en session &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="Andy Griffiths coaching golf pÃ¥ en Mallorca-bana"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Vad som faktiskt fÃ¶rbÃ¤ttras</p>
          <h2>HÃ¤r Ã¤r vad som fÃ¶rÃ¤ndras under en runda med mig.</h2>
          <p className="improvements__sub">Och varfÃ¶r det fastnar pÃ¥ ett sÃ¤tt rangearbete sÃ¤llan gÃ¶r.</p>
        </div>
        <div className="improvements-grid">
          {improvements.map((imp, i) => (
            <div key={i} className={`improvement reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}${imp.full ? ' improvement--full' : ''}`}>
              <span className="improvement__num">{imp.num}</span>
              <h3>{imp.title}</h3>
              <p>{imp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">Hur det fungerar</p>
          <h2>Tre steg. En session som fÃ¶rÃ¤ndrar hur du spelar.</h2>
          <p>Sessioner Ã¤ger rum on-course pÃ¥ Son Gual, Alcanada, eller en bana matchad till din nivÃ¥ och mÃ¥l. Vi spelar tillsammans, coachingen hÃ¤nder i realtid, och feedbacken Ã¤r situationell och Ã¤rlig â€” inte en generisk lektionsplan tillÃ¤mpad pÃ¥ alla.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'FrÃ¥geformulÃ¤ret', text: "FÃ¶re sessionen fyller du i ett kort formulÃ¤r. Vad som frustrerar dig, var gapen Ã¤r, vad en bra dag ser ut. Vid fÃ¶rsta teet har jag redan en bild." },
            { num: '02', title: 'Rundan', text: "Vi spelar tillsammans. Coaching hÃ¤nder i realtid â€” rÃ¤tt observation vid rÃ¤tt Ã¶gonblick. Inte en lÃ¶pande kommentar. Inte en lektion. Det som fÃ¶rÃ¤ndrar ditt poÃ¤ng." },
            { num: '03', title: 'Eftersamtalet', text: "Vid lunch gÃ¥r vi genom vad som fÃ¶rbÃ¤ttrades, vad du ska arbeta med, och vad du tar med dig. Ã„rligt och tydligt. Konversationen som fÃ¥r hela dagen att bli vettigt." },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Vem det Ã¤r fÃ¶r</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Om nÃ¥got av detta lÃ¥ter bekant, Ã¤r det fÃ¶r dig.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'BesÃ¶kande golfare', text: 'Fokuserad fÃ¶rbÃ¤ttring under din tid pÃ¥ Ã¶n â€” inte bara en runda.' },
            { title: 'Bosatta golfare', text: 'Regelbundet arbete med en professionell som spelar samma banor som du.' },
            { title: 'Rang/bana-glappet', text: 'Ditt Ã¶vningsspel Ã¶verfÃ¶rs aldrig. Det Ã¤r hÃ¤r vi fixar det.' },
            { title: 'Smartare, inte ombyggd', text: 'Du vill spela bÃ¤ttre utan en fullstÃ¤ndig teknisk ombyggnad frÃ¥n grunden.' },
          ].map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela bÃ¤ttre?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Kontakta mig fÃ¶r att diskutera en session.</h2>
          <p>BerÃ¤tta var ditt spel Ã¤r och vad du vill ha frÃ¥n det. Jag bygger sessionen omkring det â€” inte ett generiskt program.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Kontakta mig &rarr;</Link>
          <Link href="/sv/play-with-a-pro" className="btn btn--outline-white">Se Hela Upplevelserna</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}






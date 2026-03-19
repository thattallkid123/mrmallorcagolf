import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Om Andy Griffiths — PGA-proffs, Mallorca',
  description: 'Andy Griffiths är en brittisk PGA Advanced Professional baserad på Mallorca. Tidigare Pebble Beach, Évian, 11 år coaching i Kina.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/about' },
}

export default function About_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/sv">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Om Andy</span></p>
          <h1>Proffset<br />bakom Upplevelsen.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Tidig karriär</p>
            <h2>Följa de bästa coacherna på två kontinenter.</h2>
            <p>Jag växte upp med golf, kom ner till +1 i handicap men visste tidigt att coaching var vägen för mig. Efter studier i Applied Golf Management vid University of Birmingham och PGA-examen började jag bygga en karriär genom att följa de mest erfarna coacherna runt om i Europa och Nordamerika.</p>
            <p>De tidiga åren förde mig till extraordinära platser. Jag coachade på Pebble Beach, Doral, Évian under dam-majorn och The Open Championship. Jag tillbringade en säsong som golfcoach ombord på ett kryssningsfartyg på en världsresa — över fyrtio länder, golf på platser de flesta professionella aldrig kommer nära.</p>
            <div className="pull-quote"><p>&ldquo;Varje miljö var annorlunda. Varje golfspelare var annorlunda. Den variationen, tidigt, är det som formade allt som kom efter.&rdquo;</p></div>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Elva år i toppen av kinesiskt golf.</h2>
            <p>2014 flyttade jag till Shanghai. Jag hade specifika mål — att bygga upp undervisningsprogrammet för Kinas bästa akademi — och stannade kvar i elva framgångsrika år.</p>
            <p>Kina under den perioden var en extraordinär miljö att coacha i. Lektioner kostade runt 500 € per timme. Klienter förväntade sig seriös, mätbar förbättring — inte bara uppmuntran.</p>
            <p>Jag blev landets första Trackman Master, coachade spelare från det kinesiska landslaget och byggde en coachingnärvaro på Douyin som nådde hundratals miljoner visningar. Jag blev också flytande i mandarin, vilket fördjupade relationen till spelare och familjer.</p>
            <p>Efter elva år hade jag uppnått det jag kom för. Min första dotter föddes 2023. Dragningskraften att komma närmre hem, och chansen att bygga något eget, gick inte längre att ignorera.</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Tjugotvå banor, en ö och en coachingfilosofi skärpt av att spela igen.</h2>
            <p>Jag flyttade till Mallorca i mars 2025 med min fru Yina. Närmre familjen i Storbritannien, sol året runt, en genuint exceptionell golfö som de flesta inte ger tillräckligt erkännande.</p>
            <p>Jag började spela på allvar igen. Arbetade mig igenom varje bana på ön. Återupptäckte känslan av att stå på en första tee och faktiskt bry sig om resultatet.</p>
            <div className="pull-quote"><p>&ldquo;Coachingfilosofin som kommit av att spela igen är enkel: de snabbaste förbättringarna sker på banan, inte på rangen. Riktiga förhållanden, riktiga beslut, riktiga konsekvenser.&rdquo;</p></div>
            <p>En PGA-professionell som tillbringade mer än ett decennium med att coacha i Asien, nu värd för privata golfdagar på en av Europas bästa golfö. Om det låter som den dag du letar efter — hör av dig.</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="creds reveal">
            <p className="creds__label">Meriter</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>PGA Advanced Professional (UK)</strong>Den högsta kvalifikationen inom brittisk golfcoaching</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Applied Golf Management</strong>University of Birmingham</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>TPI Nivå 3 certifierad</strong>Titleist Performance Institute</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Trackman Master certifierad</strong>Först i Kina</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>US Kids Golf Top 50</strong>Coach världen över</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>11 år i Shanghai</strong>Flytande mandarin</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Kinesiska landslaget</strong>Elit junior- och tävlingscoaching</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Hundratals miljoner visningar</strong>Golfcoachinginnehåll på Douyin</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Publicerad författare</strong>Putting It Out There — A Life in Full Swing, 2016</span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Bosatt på Mallorca</strong>Sedan mars 2025</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Spela Mallorcas finaste banor med mig vid din sida.</h3>
            <p>Privata dagar på Son Gual, Alcanada och mer. Allt ordnat. Coaching på banan.</p>
            <Link href="/sv/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Se upplevelserna →</Link>
          </div>
        </aside>
      </div>

      <section className="venues reveal">
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Arenor & erfarenhet</p>
        <h2>Där karriären byggdes.</h2>
        <div className="venues__grid">
            <div key={0} className="venue"><p className="venue__name">Pebble Beach</p><p className="venue__detail">Kalifornien, USA</p></div>
            <div key={1} className="venue"><p className="venue__name">The Open Championship</p><p className="venue__detail">Storbritannien</p></div>
            <div key={2} className="venue"><p className="venue__name">Evian Championship</p><p className="venue__detail">Frankrike · Dam-major</p></div>
            <div key={3} className="venue"><p className="venue__name">Doral</p><p className="venue__detail">Miami, USA</p></div>
            <div key={4} className="venue"><p className="venue__name">Shanghai</p><p className="venue__detail">Kina · 11 år</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>En PGA Advanced Professional. En exceptionell golfö. Din runda.</h2>
          <p>Berätta om dina datum, ditt handicap och vad du söker. Jag bygger dagen runt dig.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Se upplevelserna →</Link>
          <Link href="/sv/contact" className="btn btn--outline-white">Hör av dig</Link>
        </div>
      </section>
    </PageLayout>
  )
}

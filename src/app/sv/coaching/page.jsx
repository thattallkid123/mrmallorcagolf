import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Golfcoaching på banan i Mallorca — UK UK PGA-proffs',
  description: 'Golfcoaching på banan i Mallorca med UK UK PGA Advanced Professional Andy Griffiths. Riktig förbättring i riktiga förhållanden — för besökande och bosatta golfare.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/coaching' },
}

export default function Coaching_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/sv">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Coaching på banan</span></p>
          <h1>Bättre golf.<br />Utan att ändra allt.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>Coaching på banan för besökande och bosatta golfare. Riktiga förhållanden, riktiga beslut, riktig förbättring — och ingen teknisk överbelastning som gör att de flesta rangesessioner är glömdå vid hål 3.</p>
        </div>
      </header>

      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Varför rangen inte räcker</p>
          <h2>Det finns en anledning till att ditt rangspel inte syns på banan.</h2>
          <p>Rangen är platt, kontrollerad och utan konsekvenser. Du slår från en perfekt matta utan vind, utan sluttningar, utan poäng på spel, och utan någon som tittar. Sen kliver du upp på hål 1 och inget förs över.</p>
          <p>Coaching på banan sätter lektionen där den faktiskt hjälper. På fairwayen. I roughen. På en sluttning med ett oväntat vind. Med en poäng som spelär roll. Det är där spel förändras — och det är där vi arbetar.</p>
          <div className="analogy-box">
            <p>&ldquo;Tänk på boxning. Du kan tränå på kuddär i veckor och kännå dig redo. Sedan här du din första sparring och allt förändras. Golf är likadant. Första teet är inte driving rangen.&rdquo;</p>
            <cite>— Andy Griffiths, UK UK PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Frågeformuläret</p>
          <p>Ett kort frågeformulär innan sessionen ger dagen form innan vi börjar. Vad som frustrerär dig, vär luckornå är, hur framgång ser ut.</p>
          <p>När vi når det första teet här jag redan en bild av vad jag ska se efter. Feedbacken är situationell och ärlig — inte ett generiskt lektionsplan.</p>
          <p>Sessioner sker på Son Gual, Alcanada, eller en banå matchad efter din nivå och dinå mål.</p>
          <Link href="/sv/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Diskutera en session →</Link>
        </div>
      </section>

      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Vad som faktiskt förbättras</p>
          <h2>Det här förändras under en rundå med mig.</h2>
          <p className="improvements__sub">Och varför det fastnär på ett sätt rangearbete sällan gör.</p>
        </div>
        <div className="improvements-grid">
          <div className="improvement reveal"><span className="improvement__num">01</span><h3>Banhantering</h3><p>De flesta amateurgolfare förlorär merparten av sinå slag på felaktiga beslut, inte felaktiga svingar. Att välja rätt klubba, mål, form — det är det som separerär ett 90:a från ett 80:a.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">02</span><h3>Slagsval under press</h3><p>Besluten som faller ihop under press — drivan när ett 5-järn vinner hålet — blir synliga på banan på ett sätt de aldrig är på rangen.</p></div>
          <div className="improvement reveal"><span className="improvement__num">03</span><h3>Läså greener och sluttningar</h3><p>Att putta och chippå på en bana-green är fundamentalt annorlundå än en övningsgreen. Hastigheten, sluttningen, gräset, pressens moment — allt förändrär vad som fungerar.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">04</span><h3>Spela i vind</h3><p>Mallorca är blåsigt. Son Gual lever i ett eget vindekosystem. Klubbval i sidvind, banhantering — det kan du bara jobba med när det faktiskt blåser.</p></div>
          <div className="improvement reveal"><span className="improvement__num">05</span><h3>Mentalt spel och rutin</h3><p>Hur du pratär med dig själv efter ett dåligt slag. Hur du angriper nästa tee. Om du här en förslagsrutin och om den håller under press. Den mentala sidan är helt osynlig på rangen.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">06</span><h3>Hitta lågt hängande frukt</h3><p>De flesta golfare förbättras snabbast inte från att bygga om sin swing utan från en eller två små lösningar. En klient hade chippat med en pitching wedge hela livet. Ett samtal, ett klubbyte, omedelbär förbättring.</p></div>
          <div className="improvement reveal improvement--full"><span className="improvement__num">07</span><h3>Konsekvens i riktiga förhållanden</h3><p>Ojämnå liggar, smala fairways, rough — banan kräver slag rangen aldrig frågär efter. Att spela dem regelbundet, med feedback i realtid, är hur du bygger ett spel som dyker upp när det räknas.</p></div>
        </div>
      </section>

      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">Hur det fungerar</p>
          <h2>Tre steg. En session som förändrär hur du spelar.</h2>
          <p>Sessioner sker på banan på Son Gual, Alcanada, eller en anpassad bana. Vi spelär tillsammans, coachingen sker i realtid, feedbacken är situationell och ärlig.</p>
        </div>
        <div className="how-steps reveal">
          <div className="how-step"><span className="how-step__num">01</span><div><h3>Frågeformuläret</h3><p>Innan sessionen fyller du i ett kort formulär. Vad som frustrerär dig, vär luckornå är, hur en bra dag ser ut. Vid det första teet här jag redan en bild.</p></div></div>
          <div className="how-step"><span className="how-step__num">02</span><div><h3>Rundan</h3><p>Vi spelär tillsammans. Coaching sker i realtid — rätt observation vid rätt tillfälle. Inte en löpande kommentar. Saken som förändrär din poäng.</p></div></div>
          <div className="how-step"><span className="how-step__num">03</span><div><h3>Genomgången</h3><p>Över lunchen går vi igenom vad som förbättrades, vad du ska jobba med, och vad du tär med dig. Ärligt och tydligt.</p></div></div>
        </div>
      </section>

      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Vem det är för</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Om något av detta låter bekant, är det för dig.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><h3>Besökande golfare</h3><p>Fokuserad förbättring under din tid på ön — inte bara en runda.</p></div>
          <div className="who-card reveal reveal-delay-1"><h3>Bosatta golfare</h3><p>Regelbundet arbete med en professionell som spelär samma banor som du.</p></div>
          <div className="who-card reveal reveal-delay-2"><h3>Rang/bana-glappet</h3><p>Ditt övningsspel förs aldrig över. Här fixär vi det.</p></div>
          <div className="who-card reveal"><h3>Smartare, inte ombyggd</h3><p>Du vill spela bättre utan en fullständig teknisk ombyggnad från grunden.</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela bättre?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Hör av dig för att diskutera en session.</h2>
          <p>Berätta vär ditt spel är och vad du vill ha ut av det. Jag bygger sessionen runt det — inte ett generiskt program.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Hör av dig →</Link>
          <Link href="/sv/play-with-a-pro" className="btn btn--outline-white">Se Hela Upplevelserna</Link>
        </div>
      </section>
    </PageLayout>
  )
}

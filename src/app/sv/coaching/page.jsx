import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import { buildCoachingMetadata } from '../../../lib/page-metadata'

export const metadata = buildCoachingMetadata('sv')

const improvements = [
  { num: '01', title: 'Banhantering', text: 'De flesta amatörgolfare förlorar majoriteten av sina slag på fel beslut, inte fel swing. Att välja rätt klubba, mål, form — dessa skiljer en 90 från en 80. Vi arbetar med dem i realtid, på riktiga hål, med en verklig poäng på spel.' },
  { num: '02', title: 'Slagsval under press', text: "Besluten som kollapsar under press — drivan när en 5-järn vinner hålet, hero-skottet när det säkra spelet får samma poäng — blir synliga på banan på ett sätt de aldrig gör på rangen. Jag ser dem, namnger dem, och vi arbetar genom dem tillsammans." },
  { num: '03', title: 'Läsa greener och sluttningar', text: 'Att putta och chippa på en bana-green är fundamentalt annorlunda än en träningsgreen. Hastigheten, sluttningen, gräset, pressens moment — allt förändrar vad som fungerar. Vi tränar det under de faktiska förhållandena.' },
  { num: '04', title: 'Spela i vind', text: "Mallorca är blåsigt. Son Gual lever i sitt eget vindekosystem. Klubbval i sidvind, banhantering, att lita på ditt mål när bollen verkar driva — detta är något du bara kan arbeta med när det faktiskt blåser." },
  { num: '05', title: 'Mentalt spel och rutin', text: 'Hur du pratar med dig själv efter ett dåligt slag. Hur du närmar dig nästa tee. Huruvida du har en förslagsrutin och om den håller under press. Den mentala sidan är helt osynlig på rangen — den dyker bara upp när konsekvenserna är verkliga.' },
  { num: '06', title: 'Hitta lågt hängande frukter', text: "De flesta golfare förbättras snabbast inte från att bygga om sin swing utan från en eller två små olåsta. En klient hade chippat med en pitching wedge hela sitt liv. En konversation, en klubbförändring, omedelbar förbättring. Ingen teknisk arbete. Det sättet av ting dyker bara upp på banan." },
  { num: '07', title: 'Konsekvens i verkliga förhållanden', text: "Ojämna liggningar, täta fairways, course rough — banan kräver skott som rangen aldrig frågar efter. Att spela dem regelbundet, med feedback i realtid, är hur du bygger ett spel som visar upp sig när det räknas.", full: true },
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
          <h1>Bättre golf.<br />Utan att ändra allt.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>On-course coaching för besökande och bosatta golfare. Verkliga förhållanden, verkliga beslut, verklig förbättring — och ingen teknisk överbelastning som lämnar de flesta rangesessioner oanvända vid hålet 3.</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Varför rangen inte räcker</p>
          <h2>Det finns en anledning till att ditt rangspel inte syns på banan.</h2>
          <p>Rangen är platt, kontrollerad och konsekvensfri. Du slår från en perfekt matta utan vind, utan sluttningar, utan poäng på spel, och utan någon som tittar. Sedan står du på 1:a tee och ingenting överförs.</p>
          <p>On-course coaching sätter lektionen där den faktiskt hjälper. På fairwayen. I roughen. På en sluttning med en oväntat vind. Med en poäng som spelar roll. Det är där spel förändras — och det är där vi arbetar.</p>
          <div className="analogy-box">
            <p>&ldquo;Tänk på boxning. Du kan träna på kuddar i veckor och känna dig redo. Sedan har du ditt första sparringpass och allt förändras. Golf är detsamma. Första teet är inte driving rangen.&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Frågeformuläret</p>
          <p>Ett kort frågeformulär före sessionen formar dagen innan vi börjar. Vad som frustrerar dig, var gapen är, vad framgång ser ut.</p>
          <p>När vi når första teet har jag redan en bild av vad jag ska leta efter. Feedbacken är situationell och ärlig — inte en generisk lektionsplan tillämpad på alla.</p>
          <p>Sessioner äger rum på Son Gual, Alcanada, eller en bana matchad till din nivå och mål.</p>
          <Link href="/sv/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Diskutera en session &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="Andy Griffiths coaching golf på en Mallorca-bana"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Vad som faktiskt förbättras</p>
          <h2>Här är vad som förändras under en runda med mig.</h2>
          <p className="improvements__sub">Och varför det fastnar på ett sätt rangearbete sällan gör.</p>
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
          <h2>Tre steg. En session som förändrar hur du spelar.</h2>
          <p>Sessioner äger rum on-course på Son Gual, Alcanada, eller en bana matchad till din nivå och mål. Vi spelar tillsammans, coachingen händer i realtid, och feedbacken är situationell och ärlig — inte en generisk lektionsplan tillämpad på alla.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'Frågeformuläret', text: "Före sessionen fyller du i ett kort formulär. Vad som frustrerar dig, var gapen är, vad en bra dag ser ut. Vid första teet har jag redan en bild." },
            { num: '02', title: 'Rundan', text: "Vi spelar tillsammans. Coaching händer i realtid — rätt observation vid rätt ögonblick. Inte en löpande kommentar. Inte en lektion. Det som förändrar ditt poäng." },
            { num: '03', title: 'Eftersamtalet', text: "Vid lunch går vi genom vad som förbättrades, vad du ska arbeta med, och vad du tar med dig. Ärligt och tydligt. Konversationen som får hela dagen att bli vettigt." },
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
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Vem det är för</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Om något av detta låter bekant, är det för dig.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'Besökande golfare', text: 'Fokuserad förbättring under din tid på ön — inte bara en runda.' },
            { title: 'Bosatta golfare', text: 'Regelbundet arbete med en professionell som spelar samma banor som du.' },
            { title: 'Rang/bana-glappet', text: 'Ditt övningsspel överförs aldrig. Det är här vi fixar det.' },
            { title: 'Smartare, inte ombyggd', text: 'Du vill spela bättre utan en fullständig teknisk ombyggnad från grunden.' },
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
          <p className="eyebrow eyebrow--gold">Redo att spela bättre?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Kontakta mig för att diskutera en session.</h2>
          <p>Berätta var ditt spel är och vad du vill ha från det. Jag bygger sessionen omkring det — inte ett generiskt program.</p>
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






import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Golf Coaching op de Baan in Mallorca — PGA Professional',
  description: 'Golfcoaching op de baan in Mallorca met PGA Advanced Professional Andy Griffiths. Echte verbetering in echte omstandigheden — voor bezoekende en vaste golfers.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/coaching' },
}

export default function Coaching_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/nl">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Coaching op de baan</span></p>
          <h1>Beter golf spelen.<br />Zonder alles te veranderen.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>Coaching op de baan voor bezoekende en vaste golfers. Echte omstandigheden, echte beslissingen, echte verbetering — en geen technische overbelasting die de meeste rangesessies voor het 3e hole al doet vergeten.</p>
        </div>
      </header>

      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Waarom de driving range niet genoeg is</p>
          <h2>Er is een reden waarom uw rangespel zich niet vertaalt naar de baan.</h2>
          <p>De range is vlak, gecontroleerd en zonder gevolgen. U slaat vanaf een perfecte mat zonder wind, zonder hellingen, zonder score op het spel. Dan staat u op de eerste tee en niets ervan gaat mee.</p>
          <p>Coaching op de baan zet de les waar hij echt helpt. Op de fairway. In de rough. Op een helling met een wind die u niet verwachtte. Met een score die telt. Dáár veranderen spellen — en daar werken wij.</p>
          <div className="analogy-box">
            <p>&ldquo;Denk aan boksen. U kunt wekenlang op de boksbal trainen en klaar voelen. Dan heeft u uw eerste sparring en alles verandert. Golf is hetzelfde. De eerste tee is niet de driving range.&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>De vragenlijst</p>
          <p>Een korte vragenlijst vóór de sessie geeft de dag vorm voordat we beginnen. Wat u frustreert, waar de hiaten zijn, hoe succes eruitziet.</p>
          <p>Wanneer we de eerste tee bereiken, heb ik al een beeld van wat ik moet observeren. De feedback is situationeel en eerlijk — geen generiek lesplan voor iedereen.</p>
          <p>Sessies vinden plaats op Son Gual, Alcanada, of een baan afgestemd op uw niveau en doelen.</p>
          <Link href="/nl/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Een sessie bespreken →</Link>
        </div>
      </section>

      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Wat er werkelijk verbetert</p>
          <h2>Dit verandert er tijdens een ronde met mij.</h2>
          <p className="improvements__sub">En waarom het blijft hangen op een manier die rangewerk zelden doet.</p>
        </div>
        <div className="improvements-grid">
          <div className="improvement reveal"><span className="improvement__num">01</span><h3>Baanbeheer</h3><p>De meeste amateurgolfers verliezen het grootste deel van hun slagen door de verkeerde beslissing, niet de verkeerde swing. De juiste club, het juiste doel, de juiste vlucht kiezen — dát scheidt een 90 van een 80.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">02</span><h3>Slagkeuze onder druk</h3><p>De beslissingen die onder druk instorten — de driver terwijl een 5-ijzer het hole wint — worden zichtbaar op de baan op een manier die ze op de range nooit zijn.</p></div>
          <div className="improvement reveal"><span className="improvement__num">03</span><h3>Greens en hellingen lezen</h3><p>Putten en chippen op een echte green is fundamenteel anders dan op een oefengreen. De snelheid, de helling, het gras, de druk van het moment — alles verandert wat werkt.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">04</span><h3>Spelen in de wind</h3><p>Mallorca is winderig. Son Gual leeft in zijn eigen windecosysteem. Clubkeuze in een zijwind — dit is iets wat u alleen kunt oefenen als het echt waait.</p></div>
          <div className="improvement reveal"><span className="improvement__num">05</span><h3>Mentaal spel en routine</h3><p>Hoe u tegen uzelf praat na een slechte slag. Hoe u de volgende tee aanpakt. Of u een pre-shot routine heeft en of die standhoudt onder druk. De mentale kant is volledig onzichtbaar op de range.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">06</span><h3>De laaghangige vruchten vinden</h3><p>De meeste golfers verbeteren het snelst niet door hun swing te herbouwen maar door een of twee kleine ontgrendelingen. Een klant had zijn hele leven met een pitching wedge gechipped. Eén gesprek, een clubwisseling, onmiddellijke verbetering.</p></div>
          <div className="improvement reveal improvement--full"><span className="improvement__num">07</span><h3>Consistentie in echte omstandigheden</h3><p>Ongelijke lies, smalle fairways, rough — de baan vraagt om slagen die de range nooit vereist. Ze regelmatig spelen, met real-time feedback, is hoe u een spel bouwt dat ertoe doet wanneer het telt.</p></div>
        </div>
      </section>

      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">Hoe het werkt</p>
          <h2>Drie stappen. Één sessie die verandert hoe u speelt.</h2>
          <p>Sessies vinden op de baan plaats bij Son Gual, Alcanada, of een afgestemde baan. We spelen samen, de coaching gebeurt in real-time, en de feedback is situationeel en eerlijk.</p>
        </div>
        <div className="how-steps reveal">
          <div className="how-step"><span className="how-step__num">01</span><div><h3>De vragenlijst</h3><p>Vóór de sessie vult u een kort formulier in. Wat u frustreert, waar de hiaten zijn, hoe een goede dag eruitziet. Bij de eerste tee heb ik al een beeld.</p></div></div>
          <div className="how-step"><span className="how-step__num">02</span><div><h3>De ronde</h3><p>We spelen samen. Coaching gebeurt in real-time — de juiste observatie op het juiste moment. Geen lopend commentaar. Het ding dat uw score verandert.</p></div></div>
          <div className="how-step"><span className="how-step__num">03</span><div><h3>De nabespreking</h3><p>Over de lunch bespreken we wat verbeterde, wat u moet werken, en wat u meeneemt. Eerlijk en duidelijk.</p></div></div>
        </div>
      </section>

      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Voor wie dit is</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Als een van deze situaties bekend klinkt, is dit voor u.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><h3>Bezoekende golfers</h3><p>Gerichte verbetering tijdens uw verblijf op het eiland — niet alleen een ronde.</p></div>
          <div className="who-card reveal reveal-delay-1"><h3>Vaste golfers</h3><p>Regelmatig werk met een professional die op dezelfde banen speelt als u.</p></div>
          <div className="who-card reveal reveal-delay-2"><h3>Het range/baan-gat</h3><p>Uw oefenspel vertaalt zich nooit. Hier lossen we dat op.</p></div>
          <div className="who-card reveal"><h3>Slimmer, niet herbouwd</h3><p>U wilt beter spelen zonder een volledige technische verbouwing van de grond af.</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Klaar om beter te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Neem contact op om een sessie te bespreken.</h2>
          <p>Vertel me hoe uw spel ervoor staat en wat u ervan wilt. Ik bouw de sessie daromheen — geen generiek programma.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Neem contact op →</Link>
          <Link href="/nl/play-with-a-pro" className="btn btn--outline-white">Bekijk Volledige Ervaringen</Link>
        </div>
      </section>
    </PageLayout>
  )
}

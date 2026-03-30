import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import { buildCoachingMetadata } from '../../../lib/page-metadata'

export const metadata = buildCoachingMetadata('nl')

const improvements = [
  { num: '01', title: 'Baanbeheer', text: 'De meeste amateurholfeurs verliezen het gros van hun slagen door verkeerde beslissingen, niet door verkeerde swing. De juiste club kiezen, doel, vorm — deze dingen scheiden een 90 van een 80. We werken eraan in real-time, op echte holes, met een echte score op het spel.' },
  { num: '02', title: 'Shotkeuzse onder druk', text: "De beslissingen die onder druk instorten — de driver als een 5-iron de hole wint, de heldenslag als de veilige slag hetzelfde scoort — worden zichtbaar op de baan op een manier die op de driving range nooit gebeurt. Ik zie ze, noem ze, en we werken er samen doorheen." },
  { num: '03', title: 'Greens en hellingen lezen', text: 'Putten en chippen op een baan-green verschilt fundamenteel van een oefenen-green. De snelheid, de helling, het graan, de druk van het moment — het verandert alles wat werkt. We oefenen het in de echte omstandigheden.' },
  { num: '04', title: 'Spelen in wind', text: "Mallorca is winderig. Son Gual leeft vooral in zijn eigen windsysteem. Clubkeuze in zijwind, baan-beheer, vertrouwen in uw doelstelling als de bal lijkt te drijven — dit is iets wat u alleen kunt oefenen als het werkelijk waait." },
  { num: '05', title: 'Mentaal spel en routine', text: 'Hoe u tegen jezelf praat na een slechte slag. Hoe u de volgende tee benadert. Of u een pre-shot routine hebt en of deze onder druk stand houdt. De mentale kant is volledig onzichtbaar op de driving range — het verschijnt alleen als de gevolgen echt zijn.' },
  { num: '06', title: 'Laaghangende vruchten vinden', text: "De meeste golfers verbeteren het snelst niet door hun swing helemaal opnieuw op te bouwen, maar door één of twee kleine ontsluitingen. Een klant had zijn hele leven met een pitching wedge gechipt. Één gesprek, een clubwissel, onmiddellijke verbetering. Geen technisch werk. Dat soort dingen verschijnt alleen op de baan." },
  { num: '07', title: 'Consistentie in echte omstandigheden', text: "Ongelijke ligging, nauwe fairways, baan-rough — de baan vraagt shots die de driving range nooit stelt. Ze regelmatig spelen, met real-time feedback, is hoe u een spel bouwt dat verschijnt als het telt.", full: true },
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
          <p className="breadcrumb"><Link href="/nl">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>On-Course Coaching</span></p>
          <h1>Beter Golf.<br />Zonder Alles Veranderen.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>On-course coaching voor bezoekers en ingezetenen. Echte omstandigheden, echte beslissingen, echte verbetering — en geen van de technische overload die de meeste driving range sessies ongebruikt laat bij de 3e hole.</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Waarom de driving range niet genoeg is</p>
          <h2>Er is een reden waarom uw driving range spel niet op de baan verschijnt.</h2>
          <p>De driving range is vlak, gecontroleerd en zonder gevolgen. U slaat af vanaf een perfect mat zonder wind, hellingen, geen score op het spel en niemand die kijkt. Dann staat u op de eerste tee en niks ervan wordt overgedragen.</p>
          <p>On-course coaching zet de les waar het werkelijk helpt. Op de fairway. In het rough. Op een hellende lie met wind die u niet verwachtte. Met een score die ergens toe doet. Dat is waar spellen veranderen — en dat is waar we werken.</p>
          <div className="analogy-box">
            <p>&ldquo;Denk eraan als boksen. U kunt weken op de pads trainen en u voelt klaar. Dan heeft u uw eerste sparringsessie en alles verandert. Golf is hetzelfde. De eerste tee is niet de driving range.&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>De vragenlijst</p>
          <p>Een korte vragenlijst vóór de sessie geeft vorm aan de dag voordat we beginnen. Wat frustret u, waar zijn de gaten, wat succes eruit ziet.</p>
          <p>Op het moment dat we de eerste tee bereiken, heb ik al een beeld van waar ik op moet letten. De feedback is situationeel en eerlijk — geen generiek lesplan dat op iedereen wordt toegepast.</p>
          <p>Sessies vinden plaats op Son Gual, Alcanada, of een baan die past bij uw niveau en doelen.</p>
          <Link href="/nl/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Bespreek een Sessie →</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="Andy Griffiths coaching golf op een Mallorca baan"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Wat wordt werkelijk beter</p>
          <h2>Hier is wat verandert tijdens een ronde met mij.</h2>
          <p className="improvements__sub">En waarom het blijft hangen op een manier die driving range werk zelden doet.</p>
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
          <p className="eyebrow">Hoe het werkt</p>
          <h2>Drie stadia. Één sessie die verandert hoe u speelt.</h2>
          <p>Sessies vinden plaats on-course op Son Gual, Alcanada, of een baan die past bij uw niveau en doelen. We spelen samen, de coaching gebeurt in real-time, en de feedback is situationeel en eerlijk — geen generiek lesplan dat op iedereen wordt toegepast.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'De vragenlijst', text: "Vóór de sessie vult u een korte vorm in. Wat frustret u, waar zijn de gaten, wat ziet een goede dag eruit. Op de eerste tee heb ik al een beeld." },
            { num: '02', title: 'De ronde', text: "We spelen samen. Coaching gebeurt in real-time — de juiste opmerking op het juiste moment. Geen lopend commentaar. Geen les. Het ding dat uw score verandert." },
            { num: '03', title: 'De debriefing', text: "Tijdens de lunch behandelen we wat verbeterd, waar u aan kunt werken en wat u kunt meenemen. Eerlijk en duidelijk. Het gesprek dat de hele dag logisch maakt." },
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
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Voor wie dit is</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Als een van deze herkenbaar klinkt, is dit voor u.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'Bezoekers', text: 'Gerichte verbetering tijdens uw tijd op het eiland — niet zomaar een ronde.' },
            { title: 'Ingezetenen', text: 'Regelmatig werk met een professional die dezelfde banen speelt als u.' },
            { title: 'De range/course kloof', text: 'Uw oefenspel wordt nooit overgedragen. Hier helpen we dat.' },
            { title: 'Slimmer, niet herbouwed', text: 'U wilt beter spelen zonder volledig opnieuw op te starten.' },
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
          <p className="eyebrow eyebrow--gold">Klaar om beter te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Neem contact op om een sessie te bespreken.</h2>
          <p>Vertel me waar uw spel is en wat u ervan wilt. Ik bouw de sessie daaromheen — geen generiek programma.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Neem Contact Op →</Link>
          <Link href="/nl/play-with-a-pro" className="btn btn--outline-white">Bekijk Volledige Ervaringen</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}






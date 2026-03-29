import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'On-Course Golf Coaching auf Mallorca — PGA Professional',
  description: 'On-Course Golf Coaching auf Mallorca mit PGA Advanced Professional Andy Griffiths. Echte Verbesserung in echten Bedingungen — für besuchende und ansässige Golfer.',
  alternates: {
    canonical: 'https://www.mrmallorcagolf.com/de/coaching',
    languages: {
      'en': 'https://www.mrmallorcagolf.com/coaching',
      'de': 'https://www.mrmallorcagolf.com/de/coaching',
      'es': 'https://www.mrmallorcagolf.com/es/coaching',
      'fr': 'https://www.mrmallorcagolf.com/fr/coaching',
      'nl': 'https://www.mrmallorcagolf.com/nl/coaching',
      'sv': 'https://www.mrmallorcagolf.com/sv/coaching',
      'zh': 'https://www.mrmallorcagolf.com/zh/coaching',
      'x-default': 'https://www.mrmallorcagolf.com/coaching',
    }
  }
}

const improvements = [
  { num: '01', title: 'Platzmanagement', text: 'Die meisten Amateurgolfer verlieren die Mehrzahl ihrer Schläge durch die falsche Entscheidung, nicht den falschen Schwung. Die richtige Keule wählen, das richtige Ziel, die richtige Flugkurve — das trennt eine 90 von einer 80. Wir arbeiten daran in Echtzeit, auf echten Löchern, mit einem echten Ergebnis auf dem Spiel.' },
  { num: '02', title: 'Schlagauswahl unter Druck', text: "Die Entscheidungen, die unter Druck zusammenbrechen — der Driver, wenn ein 5er Eisen das Loch gewinnt, der Heldenschuss, wenn der sichere Schlag gleich zählt — werden auf dem Platz sichtbar, wie sie es auf dem Platz nie sind. Ich sehe sie, benenne sie und wir arbeiten zusammen daran." },
  { num: '03', title: 'Grüns und Hänge lesen', text: 'Putten und Chippen auf einem Platzgrün ist grundlegend anders als auf einem Traininggrün. Die Geschwindigkeit, die Neigung, das Gras, der Druck des Moments — alles ändert, was funktioniert. Wir trainieren es in den aktuellen Bedingungen.' },
  { num: '04', title: 'Im Wind spielen', text: "Mallorca ist windig. Son Gual besonders lebt in seinem eigenen Wind-Ökosystem. Schlägerauswahl in einem Seitenwind, Flugbahnmanagement, dem Ziel vertrauen, wenn der Ball zu driften scheint — das ist etwas, das Sie nur arbeiten können, wenn es wirklich bläst." },
  { num: '05', title: 'Mentalspiel und Routine', text: 'Wie du mit dir selbst sprichst nach einem schlechten Schlag. Wie du den nächsten Abschlag angehst. Ob du eine Pre-Shot-Routine hast und ob sie unter Druck hält. Die mentale Seite ist auf dem Platz völlig unsichtbar — sie zeigt sich nur, wenn die Konsequenzen real sind.' },
  { num: '06', title: 'Low-Hanging Fruit finden', text: "Die meisten Golfer verbessern sich am schnellsten nicht durch Schwungumbau, sondern durch ein oder zwei kleine Entsperrungen. Ein Kunde chippt sein ganzes Leben lang mit einem Pitching Wedge. Ein Gespräch, ein Schläger-Wechsel, sofortige Verbesserung. Keine technische Arbeit. Diese Art von Dingen kommt nur auf dem Platz ans Licht." },
  { num: '07', title: 'Konsistenz in echten Bedingungen', text: "Unebene Lügen, enge Fairways, Platzraugh — der Platz fordert Schläge, die der Platz nie verlangt. Diese regelmäßig zu spielen, mit Feedback in Echtzeit, ist, wie du ein Spiel aufbaust, das zählt, wenn es darauf ankommt.", full: true },
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
          <p className="breadcrumb"><Link href="/de">Startseite</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>On-Course Coaching</span></p>
          <h1>Besserer Golf.<br />Ohne alles zu ändern.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>On-Course Coaching für besuchende und ansässige Golfer. Echte Bedingungen, echte Entscheidungen, echte Verbesserung — und keine technische Überladung, die die meisten Platz-Sessions bis zum 3. Loch ungenutzt lässt.</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Warum der Platz nicht genug ist</p>
          <h2>Es gibt einen Grund, warum dein Platzspiel nicht auf dem Golfplatz auftaucht.</h2>
          <p>Der Platz ist flach, kontrolliert und konsequenzfrei. Du schießt von einer perfekten Matte ohne Wind, ohne Neigungen, ohne Ergebnis auf der Linie und ohne Zuschauer. Dann stellst du dich auf den 1. Abschlag und nichts davon überträgt sich.</p>
          <p>On-Course Coaching setzt die Lektion dahin, wo sie wirklich hilft. Auf dem Fairway. Im Rough. Auf einem geneigten Lüge mit einem Wind, den du nicht erwartet hast. Mit einem Ergebnis, das zählt. Das ist, wo sich Spiele ändern — und das ist, wo wir arbeiten.</p>
          <div className="analogy-box">
            <p>&ldquo;Denk daran wie Boxen. Du kannst Wochen lang an den Pads trainieren und dich bereit fühlen. Dann hast du deine erste Sparring-Session und alles ändert sich. Golf ist gleich. Der 1. Abschlag ist nicht der Driving-Range.&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Der Fragebogen</p>
          <p>Ein kurzer Fragebogen vor der Session formt den Tag, bevor wir anfangen. Was frustriert dich, wo sind die Lücken, wie sieht Erfolg aus.</p>
          <p>Wenn wir den 1. Abschlag erreichen, habe ich bereits ein Bild von dem, was ich suche. Das Feedback ist situativ und ehrlich — kein generischer Lektionsplan, der auf jeden angewendet wird.</p>
          <p>Sessions finden in Son Gual, Alcanada oder einem Platz statt, der deinem Niveau und deinen Zielen entspricht.</p>
          <Link href="/de/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Besprechen Sie eine Sitzung &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="Andy Griffiths coaching golf on a Mallorca course"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Was sich tatsächlich verbessert</p>
          <h2>Hier ist, was sich während einer Runde mit mir ändert.</h2>
          <p className="improvements__sub">Und warum es auf eine Weise kleben bleibt, die Platz-Arbeit selten tut.</p>
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
          <p className="eyebrow">Wie es funktioniert</p>
          <h2>Drei Phasen. Eine Session, die ändert, wie du spielst.</h2>
          <p>Sessions finden on-course auf Son Gual, Alcanada oder einem Platz statt, der deinem Niveau und deinen Zielen entspricht. Wir spielen zusammen, das Coaching findet in Echtzeit statt, und das Feedback ist situativ und ehrlich — kein generischer Lektionsplan, der auf jeden angewendet wird.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'Der Fragebogen', text: "Vor der Session füllst du ein kurzes Formular aus. Was frustriert dich, wo sind die Lücken, wie sieht ein guter Tag aus. Beim 1. Abschlag habe ich bereits ein Bild." },
            { num: '02', title: 'Die Runde', text: "Wir spielen zusammen. Coaching findet in Echtzeit statt — die richtige Beobachtung im richtigen Moment. Nicht ein laufender Kommentar. Nicht eine Lektion. Das, was dein Ergebnis ändert." },
            { num: '03', title: 'Das Debriefing', text: "Beim Mittagessen besprechen wir, was sich verbessert hat, woran du arbeiten musst und was du mitnehmen kannst. Ehrlich und klar. Das Gespräch, das den ganzen Tag sinnvoll macht." },
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
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Für wen das ist</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Wenn einige dieser Dinge vertraut klingen, ist das für dich.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'Besuchende Golfer', text: 'Fokussierte Verbesserung während deiner Zeit auf der Insel — nicht nur eine Runde.' },
            { title: 'Ansässige Golfer', text: 'Regelmäßige Arbeit mit einem Professional, der die gleichen Plätze spielt wie du.' },
            { title: 'Die Platz-zu-Kurs-Lücke', text: 'Dein Trainings-Spiel überträgt sich nie. Das ist, wo wir das beheben.' },
            { title: 'Smarter, nicht umgebaut', text: 'Du möchtest besser spielen ohne einen vollständigen technischen Umbau von vorne.' },
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
          <p className="eyebrow eyebrow--gold">Bereit, besser zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Kontaktieren Sie mich, um eine Session zu besprechen.</h2>
          <p>Erzähle mir, wo dein Spiel ist und was du davon möchtest. Ich werde die Session darum herum aufbauen — nicht ein generisches Programm.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Kontakt &rarr;</Link>
          <Link href="/de/play-with-a-pro" className="btn btn--outline-white">Siehe Vollständige Erfahrungen</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





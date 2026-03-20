import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Golf-Coaching auf dem Platz in Mallorca — PGA Professional',
  description: 'On-Course Golfcoaching in Mallorca mit PGA Advanced Professional Andy Griffiths. Echte Verbesserung unter echten Bedingungen — für Urlaubs- und Residenzgolfer.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/coaching' },
}

const improvements = [
  { num: '01', title: 'Platzmanagement', text: 'Die meisten Amateurgolfer verlieren den Großteil ihrer Schläge durch die falsche Entscheidung, nicht durch den falschen Schwung. Die richtige Wahl von Schläger, Ziel und Ballflug trennt ein 90er-Ergebnis von einem 80er. Wir arbeiten daran in Echtzeit, auf echten Löchern, mit einem echten Score auf dem Spiel.' },
  { num: '02', title: 'Schlägerwahl unter Druck', text: 'Die Entscheidungen, die unter Druck auseinanderfallen — der Driver, wenn ein 5-Eisen das Loch gewinnt, der Heldenball, wenn der sichere Schlag dasselbe Ergebnis bringt — werden auf dem Platz sichtbar, wie nie auf der Range. Ich sehe sie, benenne sie, und wir arbeiten sie gemeinsam durch.' },
  { num: '03', title: 'Grüns und Gefälle lesen', text: 'Putten und Chippen auf einem echten Grün ist grundlegend anders als auf einem Übungsgrün. Die Geschwindigkeit, das Gefälle, das Grain, der Druck des Moments — das alles verändert, was funktioniert. Wir üben es in den echten Bedingungen.' },
  { num: '04', title: 'Spielen im Wind', text: 'Mallorca ist windig. Son Gual hat besonders sein eigenes Windökosystem. Schlägerwahl im Seitenwind, Trajektorienmanagement, dem Ziel vertrauen, wenn der Ball zu driften scheint — das kann man nur üben, wenn es tatsächlich bläst.' },
  { num: '05', title: 'Mentales Spiel und Routine', text: 'Wie Sie nach einem schlechten Schlag mit sich reden. Wie Sie den nächsten Abschlag angehen. Ob Sie eine Pre-Shot-Routine haben und ob sie unter Druck hält. Die mentale Seite ist auf der Range völlig unsichtbar — sie zeigt sich nur, wenn die Konsequenzen real sind.' },
  { num: '06', title: 'Die niedrig hängenden Früchte finden', text: 'Die meisten Golfer verbessern sich am schnellsten nicht durch den Umbau ihres Schwungs, sondern durch ein oder zwei kleine Schlüssel. Ein Klient hatte sein ganzes Leben mit einem Pitching Wedge gechippt. Ein Gespräch, ein Schlägerwechsel, sofortige Verbesserung. Keine technische Arbeit. Das zeigt sich nur auf dem Platz.' },
  { num: '07', title: 'Konstanz unter echten Bedingungen', text: 'Unebene Lagen, enge Fairways, Rough — der Platz fordert Schläge, die die Range nie verlangt. Sie regelmäßig zu spielen, mit Feedback in Echtzeit, ist der Weg, ein Spiel aufzubauen, das zählt, wenn es darauf ankommt.', full: true },
]

export default function CoachingDE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/de">Start</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Coaching auf dem Platz</span></p>
          <h1>Besser Golf spielen.<br />Ohne alles umzukrempeln.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>Coaching auf dem Platz für Urlaubs- und Residenzgolfer. Echte Bedingungen, echte Entscheidungen, echte Verbesserung — ohne die technische Überfrachtung, die die meisten Rangestunden bis zum 3. Loch vergessen lässt.</p>
        </div>
      </header>

      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Warum die Range nicht ausreicht</p>
          <h2>Es gibt einen Grund, warum Ihr Range-Spiel sich nicht auf dem Platz zeigt.</h2>
          <p>Die Range ist flach, kontrolliert und konsequenzfrei. Sie schlagen von einer perfekten Matte, ohne Wind, ohne Gefälle, ohne Score auf dem Spiel und ohne Zuschauer. Dann stehen Sie am 1. Abschlag und nichts davon überträgt sich.</p>
          <p>Coaching auf dem Platz setzt die Lektion dort an, wo sie wirklich hilft. Auf dem Fairway. Im Rough. Auf einer schrägen Lage mit einem Wind, den Sie nicht erwartet haben. Mit einem Score, der zählt. Dort verändern sich Spiele — und dort arbeiten wir.</p>
          <div className="analogy-box">
            <p>&ldquo;Stellen Sie sich Boxen vor. Sie können wochenlang am Sandsack trainieren und sich bereit fühlen. Dann haben Sie Ihr erstes Sparring und alles ändert sich. Golf ist dasselbe. Der erste Abschlag ist nicht die Driving Range.&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Der Fragebogen</p>
          <p>Ein kurzer Fragebogen vor der Session gibt dem Tag vor dem Start Form. Was Sie frustriert, wo die Lücken sind, wie Erfolg für Sie aussieht.</p>
          <p>Wenn wir den ersten Abschlag erreichen, habe ich bereits ein Bild davon, worauf ich achten muss. Das Feedback ist situativ und ehrlich — kein generischer Lehrplan, der auf jeden angewendet wird.</p>
          <p>Sessions finden auf Son Gual, Alcanada oder einem Platz statt, der zu Ihrem Level und Ihren Zielen passt.</p>
          <Link href="/de/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Session besprechen &rarr;</Link>
        </div>
      </section>

      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Was sich wirklich verbessert</p>
          <h2>Das ändert sich während einer Runde mit mir.</h2>
          <p className="improvements__sub">Und warum es auf eine Weise bleibt, wie Range-Arbeit es selten tut.</p>
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

      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">Wie es funktioniert</p>
          <h2>Drei Phasen. Eine Session, die Ihr Spiel verändert.</h2>
          <p>Sessions finden auf dem Platz auf Son Gual, Alcanada oder einem Platz statt, der zu Ihrem Level und Ihren Zielen passt. Wir spielen gemeinsam, das Coaching passiert in Echtzeit, und das Feedback ist situativ und ehrlich.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'Der Fragebogen', text: 'Vor der Session füllen Sie ein kurzes Formular aus. Was Sie frustriert, wo die Lücken sind, wie ein guter Tag aussieht. Beim ersten Abschlag habe ich bereits ein Bild.' },
            { num: '02', title: 'Die Runde', text: 'Wir spielen gemeinsam. Coaching passiert in Echtzeit — die richtige Beobachtung im richtigen Moment. Kein laufender Kommentar. Keine Lektion. Das Ding, das Ihren Score verändert.' },
            { num: '03', title: 'Das Debriefing', text: 'Beim Mittagessen besprechen wir, was sich verbessert hat, woran Sie weiterarbeiten sollten, und was Sie mitnehmen. Ehrlich und klar. Das Gespräch, das den ganzen Tag Sinn ergibt.' },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Für wen das ist</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Wenn Ihnen davon etwas bekannt vorkommt, ist das für Sie.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'Urlaubsgolfer', text: 'Gezielte Verbesserung während Ihrer Zeit auf der Insel — nicht nur eine Runde.' },
            { title: 'Residenzgolfer', text: 'Regelmäßige Arbeit mit einem Professional, der dieselben Plätze spielt wie Sie.' },
            { title: 'Die Range-Platz-Lücke', text: 'Ihr Übungsspiel überträgt sich nie. Hier schließen wir diese Lücke.' },
            { title: 'Smarter, nicht umgebaut', text: 'Sie wollen besser spielen, ohne einen vollständigen technischen Umbau von Grund auf.' },
          ].map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit, besser zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Melden Sie sich, um eine Session zu besprechen.</h2>
          <p>Sagen Sie mir, wo Ihr Spiel steht und was Sie wollen. Ich baue die Session darum auf — kein generisches Programm.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Kontakt aufnehmen &rarr;</Link>
          <Link href="/de/play-with-a-pro" className="btn btn--outline-white">Gesamterlebnisse ansehen</Link>
        </div>
      </section>
    </PageLayout>
  )
}

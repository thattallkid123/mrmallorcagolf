import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mit einem Profi spielen — Private Golftage auf Mallorca',
  description: 'Eine private Golfrunde auf Mallorca, gespielt an der Seite von UK PGA Advanced Professional Andy Griffiths. Coaching auf dem Platz, voller Tag arrangiert. Ab €350 € pro Person.',
  alternates: { canonical: 'https://www.mrmallorcagolf.com/de/play-with-a-pro' },
}

const whoCards = [
  { num: '01', title: 'Der Urlaubsgolfer', text: 'Ein Handicap-Golfer, der seine Mallorca-Runde wirklich unvergesslich machen will — nicht nur eine online gebuchte Abschlagzeit und ein Abschiedswinken am 18. Loch.' },
  { num: '02', title: 'Die Range-Platz-Lücke', text: 'Golfer, deren Übungsspiel sich nie auf dem Platz überträgt. Das Problem ist fast immer Platzmanagement und Entscheidungsfindung — nicht der Schwung.' },
  { num: '03', title: 'Die Führungskräftegruppe', text: 'Unternehmensgruppen, Executives, die die Insel besuchen, und alle, die einen hochwertigen, vollständig organisierten Tag mit echtem Golfwissen wünschen.' },
  { num: '04', title: 'Der Anfänger', text: 'Gelegenheitsgolfer, die Expertenbegleitung ohne Einschüchterung wollen. Der Tag dreht sich nie um Scores — er dreht sich um Verbesserung und Genuss.' },
  { num: '05', title: 'Der Residenzgolfer', text: 'Auf der Insel ansässig und auf der Suche nach regelmäßiger Arbeit mit einem Professional, der dieselben Plätze spielt. Ernsthafte, messbare Verbesserung über Zeit.' },
  { num: '06', title: 'Wer mehr will', text: 'Die einzige Voraussetzung ist der Wunsch nach einem genuinen Golferlebnis. Alles andere passt sich Ihnen an.' },
]

const testimonials = [
  { text: 'Das Golfen mit Andy war ein großartiges Erlebnis. Er besitzt ein unvergleichliches Gespür und vermittelt es auf eine Art, die sowohl subtil als auch einfühlsam ist. Ich habe mich in der Vergangenheit von gutgemeinten Coaches erdrückt gefühlt, aber Andy ist eine Klasse für sich. Nach nur 18 Löchern habe ich eine neue Grenze meines Potenzials entdeckt. Und seine einfachen Tipps haben mein Putting sofort verbessert.', author: 'Jo' },
  { text: 'Was ich am meisten genoss, war das Wohlgefühl, das er mir auf dem Platz gab. Der Einblick in die Überlegungen hinter jedem Schlag hat meine Entscheidungsfindung enorm verbessert. Ich würde den Tag Freundesgruppen, Urlaubsgruppen und auch Familien empfehlen, die Golf als gemeinsames Erlebnis entdecken wollen.', author: 'Finlay' },
  { text: 'Andy hat komplett verändert, wie ich über Platzmanagement denke. Ich hatte jahrelang gespielt, ohne die Entscheidungen hinter jedem Schlag wirklich zu verstehen. Nach 18 Löchern mit ihm auf Son Gual spielte ich mein bestes Ergebnis dort und verstand tatsächlich, warum. Der ganze Tag — vom Briefing bis zum Mittagessen — war genau das, was ein großartiger Golftag sein soll.', author: 'Adam' },
]

export default function PlayWithAProDE() {
  return (
    <PageLayout lang="de">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/de" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Start</Link> &nbsp;/&nbsp; <span>Mit einem Profi spielen</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Private Golftage · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Ein privater Golftag<br />auf Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Keine Lektion. Keine Standard-Runde. Ein privater Tag auf einem der schönsten Plätze der Insel, begleitet von einem UK PGA Professional mit zwei Jahrzehnten Erfahrung auf drei Kontinenten.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>€350 p.P. + Green Fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/de/contact" className="btn btn--gold">Ihren Tag buchen &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Pakete ansehen</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Was der Tag beinhaltet</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Bevor Sie ankommen, weiß ich bereits, worauf ich achten muss.</h2>
          <p>Vor Ihrer Ankunft füllen Sie einen kurzen Fragebogen aus. Was Sie frustriert. Wo die Lücke zwischen Ihrem Range-Spiel und Ihrem Score liegt. Wie ein guter Tag für Sie aussieht. Wenn wir den ersten Abschlag erreichen, weiß ich bereits, worauf ich achten muss.</p>
          <p>Während der Runde wird das Coaching natürlich eingewoben — kein laufender Kommentar, sondern die richtige Beobachtung im richtigen Moment. Platzmanagement-Entscheidungen, die Sie noch nicht bedacht haben. Die spezifischen Anpassungen, die wirklich etwas bewegen.</p>
          <p>Ich habe in Umgebungen gecoacht, in denen ernsthafte, messbare Verbesserung erwartet wurde — Nationalspieler in China, Golf-Enthusiasten durch ganz Asien. Dieselbe Aufmerksamkeit fließt in jede Runde, die ich begleite.</p>
          <div className="pull-quote"><p>&ldquo;Was die meisten Golfer feststellen: Sie gehen spürbar besser spielend und selbstbewusster nach Hause als sie angekommen sind — und verstehen warum, was der Teil ist, der bleibt.&rdquo;</p></div>
          <p>Das Debriefing beim Mittagessen ist keine Zusammenfassung. Es ist das Gespräch, das den ganzen Tag Sinn ergibt.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Bereits gebucht?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Vor-Runden-Fragebogen ausfüllen &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Dauert 3 Minuten. Hilft mir, den Tag auf Sie abzustimmen, bevor wir den ersten Abschlag erreichen.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Was inbegriffen ist</h3>
            <ul className="included-list">
              {[
                ['Platzauswahl', 'Auf Ihr Spiel, Handicap und Ihre Wünsche abgestimmt'],
                ['Abschlagzeit', 'Gesichert und vollständig organisiert — Sie müssen nur erscheinen'],
                ['Vorrunden-Briefing', 'Was Sie vom Platz erwarten können, worauf Sie achten sollten'],
                ['18 Löcher an Andys Seite', 'Nicht nebenher laufen — spielen, als Ihr Partner'],
                ['Coaching auf dem Platz', 'Platzmanagement, Schlägerwahl, Entscheidungsfindung'],
                ['Nachbesprechung', 'Was sich verbessert hat, woran Sie weiterarbeiten, klar und ehrlich'],
                ['Mittagessen', 'Im Platzrestaurant oder einem handverlesenen Restaurant (Signature-Tag)'],
              ].map(([title, detail], i) => (
                <li key={i} className="included-item">
                  <span className="included-dot"></span>
                  <p><strong>{title}</strong>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Welcher Platz?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Der Platz wird immer gemeinsam mit Ihnen gewählt.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Eine Gruppe mit Anfängern, ein kürzerer Halbtag, eine Familie mit Junioren — es gibt Plätze, die für all das besser geeignet sind, und ich sage Ihnen ehrlich, welcher. Manche sind nur für Mitglieder zugänglich und können nicht unabhängig gebucht werden. Dieser Zugang kann für Klienten arrangiert werden.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Für wen das ist</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>Das Erlebnis passt sich Ihrem Spiel an.</h2>
        </div>
        <div className="who-grid">
          {whoCards.map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}>
              <span className="who-card__icon">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Was Golfer sagen</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>In ihren eigenen Worten.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <p>&ldquo;{t.text}&rdquo;</p>
              <span className="testimonial__author">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Erlebnisse &amp; Pakete</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Drei Stufen. Alle privat. Alle persönlich begleitet.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>Der Unterschied liegt darin, wie vollständig der Tag ist. Alle drei beinhalten dasselbe Niveau an Coaching-Expertise auf dem Platz.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Die Mallorca-Runde</p>
            <h3 className="tier__name">Mit einem Profi spielen</h3>
            <p className="tier__price">€350 p.P. + Green Fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Platz auf Ihr Spiel & Handicap abgestimmt','Abschlagzeit gesichert und vollständig organisiert','Vorrunden-Briefing und Aufwärmen','18 Löcher an Andys Seite','Coaching auf dem Platz','Nachbesprechung — ehrlich und klar'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/de/contact" className="tier__btn">Anfragen &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">Der Signature-Tag</p>
            <h3 className="tier__name">Geführter Golftag</h3>
            <p className="tier__price">Ab €450 p.P. + Green Fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Alles aus der Mallorca-Runde','Son Gual oder Alcanada','Ausgedehntes Mittagessen im Platzrestaurant','Ausgewähltes Überraschungsgeschenk','Entspanntes Tempo — ein voller Tag'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/de/contact" className="tier__btn">Anfragen &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">Das Gesamterlebnis</p>
            <h3 className="tier__name">Maßgeschneiderte Golfreise</h3>
            <p className="tier__price">Auf Anfrage</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Mehrstündiger Tag oder vollständiges Programm','Privater Transfer ab Palma','Abendessen im handverlesenen Restaurant','Spa- oder Erholungseinheit','Vollständige Concierge-Koordination','Für Gruppen, Unternehmen & individuelle Anfragen'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/de/contact" className="tier__btn">Anfragen &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit, Mallorca richtig zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Melden Sie sich und lassen Sie uns Ihren Tag arrangieren.</h2>
          <p>Teilen Sie mir Ihre Daten, Ihr Handicap und Ihre Wünsche mit. Ich melde mich mit einer Empfehlung — persönlich, innerhalb von 24 Stunden.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Ihren Tag buchen &rarr;</Link>
          <Link href="/de/golf-courses" className="btn btn--outline-white">Die Plätze erkunden</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Vor-Runden-Fragebogen &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

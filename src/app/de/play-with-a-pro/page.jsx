import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Mit einem Profi spielen â€” Private Golftage auf Mallorca',
  description: 'Eine private Golfrunde auf Mallorca, gespielt an der Seite von UK PGA Advanced Professional Andy Griffiths. Coaching auf dem Platz, voller Tag arrangiert. Ab â‚¬350 â‚¬ pro Person.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/play-with-a-pro' },
}

const whoCards = [
  { num: '01', title: 'Der Urlaubsgolfer', text: 'Ein Handicap-Golfer, der seine Mallorca-Runde wirklich unvergesslich machen will â€” nicht nur eine online gebuchte Abschlagzeit und ein Abschiedswinken am 18. Loch.' },
  { num: '02', title: 'Die Range-Platz-LÃ¼cke', text: 'Golfer, deren Ãœbungsspiel sich nie auf dem Platz Ã¼bertrÃ¤gt. Das Problem ist fast immer Platzmanagement und Entscheidungsfindung â€” nicht der Schwung.' },
  { num: '03', title: 'Die FÃ¼hrungskrÃ¤ftegruppe', text: 'Unternehmensgruppen, Executives, die die Insel besuchen, und alle, die einen hochwertigen, vollstÃ¤ndig organisierten Tag mit echtem Golfwissen wÃ¼nschen.' },
  { num: '04', title: 'Der AnfÃ¤nger', text: 'Gelegenheitsgolfer, die Expertenbegleitung ohne EinschÃ¼chterung wollen. Der Tag dreht sich nie um Scores â€” er dreht sich um Verbesserung und Genuss.' },
  { num: '05', title: 'Der Residenzgolfer', text: 'Auf der Insel ansÃ¤ssig und auf der Suche nach regelmÃ¤ÃŸiger Arbeit mit einem Professional, der dieselben PlÃ¤tze spielt. Ernsthafte, messbare Verbesserung Ã¼ber Zeit.' },
  { num: '06', title: 'Wer mehr will', text: 'Die einzige Voraussetzung ist der Wunsch nach einem genuinen Golferlebnis. Alles andere passt sich Ihnen an.' },
]

const testimonials = [
  { text: 'Das Golfen mit Andy war ein groÃŸartiges Erlebnis. Er besitzt ein unvergleichliches GespÃ¼r und vermittelt es auf eine Art, die sowohl subtil als auch einfÃ¼hlsam ist. Ich habe mich in der Vergangenheit von gutgemeinten Coaches erdrÃ¼ckt gefÃ¼hlt, aber Andy ist eine Klasse fÃ¼r sich. Nach nur 18 LÃ¶chern habe ich eine neue Grenze meines Potenzials entdeckt. Und seine einfachen Tipps haben mein Putting sofort verbessert.', author: 'Jo' },
  { text: 'Was ich am meisten genoss, war das WohlgefÃ¼hl, das er mir auf dem Platz gab. Der Einblick in die Ãœberlegungen hinter jedem Schlag hat meine Entscheidungsfindung enorm verbessert. Ich wÃ¼rde den Tag Freundesgruppen, Urlaubsgruppen und auch Familien empfehlen, die Golf als gemeinsames Erlebnis entdecken wollen.', author: 'Finlay' },
  { text: 'Andy hat komplett verÃ¤ndert, wie ich Ã¼ber Platzmanagement denke. Ich hatte jahrelang gespielt, ohne die Entscheidungen hinter jedem Schlag wirklich zu verstehen. Nach 18 LÃ¶chern mit ihm auf Son Gual spielte ich mein bestes Ergebnis dort und verstand tatsÃ¤chlich, warum. Der ganze Tag â€” vom Briefing bis zum Mittagessen â€” war genau das, was ein groÃŸartiger Golftag sein soll.', author: 'Adam' },
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
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Private Golftage Â· Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Ein privater Golftag<br />auf Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Keine Lektion. Keine Standard-Runde. Ein privater Tag auf einem der schÃ¶nsten PlÃ¤tze der Insel, begleitet von einem UK PGA Professional mit zwei Jahrzehnten Erfahrung auf drei Kontinenten.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>â‚¬350 p.P. + Green Fee</p>
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
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Bevor Sie ankommen, weiÃŸ ich bereits, worauf ich achten muss.</h2>
          <p>Vor Ihrer Ankunft fÃ¼llen Sie einen kurzen Fragebogen aus. Was Sie frustriert. Wo die LÃ¼cke zwischen Ihrem Range-Spiel und Ihrem Score liegt. Wie ein guter Tag fÃ¼r Sie aussieht. Wenn wir den ersten Abschlag erreichen, weiÃŸ ich bereits, worauf ich achten muss.</p>
          <p>WÃ¤hrend der Runde wird das Coaching natÃ¼rlich eingewoben â€” kein laufender Kommentar, sondern die richtige Beobachtung im richtigen Moment. Platzmanagement-Entscheidungen, die Sie noch nicht bedacht haben. Die spezifischen Anpassungen, die wirklich etwas bewegen.</p>
          <p>Ich habe in Umgebungen gecoacht, in denen ernsthafte, messbare Verbesserung erwartet wurde â€” Nationalspieler in China, Golf-Enthusiasten durch ganz Asien. Dieselbe Aufmerksamkeit flieÃŸt in jede Runde, die ich begleite.</p>
          <div className="pull-quote"><p>&ldquo;Was die meisten Golfer feststellen: Sie gehen spÃ¼rbar besser spielend und selbstbewusster nach Hause als sie angekommen sind â€” und verstehen warum, was der Teil ist, der bleibt.&rdquo;</p></div>
          <p>Das Debriefing beim Mittagessen ist keine Zusammenfassung. Es ist das GesprÃ¤ch, das den ganzen Tag Sinn ergibt.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Bereits gebucht?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Vor-Runden-Fragebogen ausfÃ¼llen &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Dauert 3 Minuten. Hilft mir, den Tag auf Sie abzustimmen, bevor wir den ersten Abschlag erreichen.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Was inbegriffen ist</h3>
            <ul className="included-list">
              {[
                ['Platzauswahl', 'Auf Ihr Spiel, Handicap und Ihre WÃ¼nsche abgestimmt'],
                ['Abschlagzeit', 'Gesichert und vollstÃ¤ndig organisiert â€” Sie mÃ¼ssen nur erscheinen'],
                ['Vorrunden-Briefing', 'Was Sie vom Platz erwarten kÃ¶nnen, worauf Sie achten sollten'],
                ['18 LÃ¶cher an Andys Seite', 'Nicht nebenher laufen â€” spielen, als Ihr Partner'],
                ['Coaching auf dem Platz', 'Platzmanagement, SchlÃ¤gerwahl, Entscheidungsfindung'],
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
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Der Platz wird immer gemeinsam mit Ihnen gewÃ¤hlt.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Eine Gruppe mit AnfÃ¤ngern, ein kÃ¼rzerer Halbtag, eine Familie mit Junioren â€” es gibt PlÃ¤tze, die fÃ¼r all das besser geeignet sind, und ich sage Ihnen ehrlich, welcher. Manche sind nur fÃ¼r Mitglieder zugÃ¤nglich und kÃ¶nnen nicht unabhÃ¤ngig gebucht werden. Dieser Zugang kann fÃ¼r Klienten arrangiert werden.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">FÃ¼r wen das ist</p>
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
              <span className="testimonial__author">â€” {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Erlebnisse &amp; Pakete</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Drei Stufen. Alle privat. Alle persÃ¶nlich begleitet.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>Der Unterschied liegt darin, wie vollstÃ¤ndig der Tag ist. Alle drei beinhalten dasselbe Niveau an Coaching-Expertise auf dem Platz.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Die Mallorca-Runde</p>
            <h3 className="tier__name">Mit einem Profi spielen</h3>
            <p className="tier__price">â‚¬350 p.P. + Green Fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Platz auf Ihr Spiel & Handicap abgestimmt','Abschlagzeit gesichert und vollstÃ¤ndig organisiert','Vorrunden-Briefing und AufwÃ¤rmen','18 LÃ¶cher an Andys Seite','Coaching auf dem Platz','Nachbesprechung â€” ehrlich und klar'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/de/contact" className="tier__btn">Anfragen &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">Der Signature-Tag</p>
            <h3 className="tier__name">GefÃ¼hrter Golftag</h3>
            <p className="tier__price">Ab â‚¬450 p.P. + Green Fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Alles aus der Mallorca-Runde','Son Gual oder Alcanada','Ausgedehntes Mittagessen im Platzrestaurant','AusgewÃ¤hltes Ãœberraschungsgeschenk','Entspanntes Tempo â€” ein voller Tag'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/de/contact" className="tier__btn">Anfragen &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">Das Gesamterlebnis</p>
            <h3 className="tier__name">MaÃŸgeschneiderte Golfreise</h3>
            <p className="tier__price">Auf Anfrage</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['MehrstÃ¼ndiger Tag oder vollstÃ¤ndiges Programm','Privater Transfer ab Palma','Abendessen im handverlesenen Restaurant','Spa- oder Erholungseinheit','VollstÃ¤ndige Concierge-Koordination','FÃ¼r Gruppen, Unternehmen & individuelle Anfragen'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/de/contact" className="tier__btn">Anfragen &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit, Mallorca richtig zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Melden Sie sich und lassen Sie uns Ihren Tag arrangieren.</h2>
          <p>Teilen Sie mir Ihre Daten, Ihr Handicap und Ihre WÃ¼nsche mit. Ich melde mich mit einer Empfehlung â€” persÃ¶nlich, innerhalb von 24 Stunden.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/de/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Ihren Tag buchen &rarr;</Link>
          <Link href="/de/golf-courses" className="btn btn--outline-white">Die PlÃ¤tze erkunden</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Vor-Runden-Fragebogen &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}


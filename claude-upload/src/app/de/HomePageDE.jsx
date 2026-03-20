'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expertenempfehlung', region: 'Palma · 11km vom Stadtzentrum', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Schwierigkeit', excerpt: 'Thomas Himmels Design von 2007 liegt in seinem eigenen Windökosystem. Die Schlussserie — Löcher 15–18 — gehört zu den besten vier Löchern im europäischen Golf.' },
  { cls: 'course-card--2', badge: '★ Expertenempfehlung', region: 'Alcúdia · Nordmallorca', name: 'Alcanada', meta: ['Küste','Par 72','€95–175'], stars: '★★★★★', difficulty: '8/10 Schwierigkeit', excerpt: 'Robert Trent Jones Jr. von seiner malerischsten Seite. Das 17. Loch — ein Par 3 über eine Bucht mit dem Leuchtturm direkt hinter der Fahne — gehört zu den meistfotografierten Löchern Spaniens.' },
  { cls: 'course-card--3', badge: 'Bester in Spanien 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Schwierigkeit', excerpt: 'Bei den World Golf Awards 2025 zum besten Golfplatz Spaniens gewählt. Blick über die Bucht von Palma. Ein tausend Jahre alter Olivenbaum am 15. Loch.' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Südwesten', name: 'Santa Ponsa 1', meta: ['DP World Tour Gastgeber','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Schwierigkeit', excerpt: 'Gastgeber des DP World Tour Mallorca Golf Open 2021. Einer der längsten Plätze der Insel.' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Südwesten', name: 'Golf de Andratx', meta: ['Anspruchsvollster Platz','Par 70','€96–140'], stars: '★★★★☆', difficulty: '9/10 Schwierigkeit', excerpt: 'Das 6. Loch ist mit 609 Metern das längste Par 5 Spaniens. In Küstenhügel gebaut, ohne Kompromisse. Bringen Sie Reservebälle und kein Ego mit.' },
]

const faqs = [
  { q: 'Muss ich ein guter Golfer sein?', a: 'Überhaupt nicht. Das Erlebnis passt sich Ihrem Spiel an — Anfänger und Scratch-Golfer profitieren gleichermaßen. Die einzige Voraussetzung ist der Wunsch nach einem wirklich anderen Golferlebnis.' },
  { q: 'Welchen Platz nutzen Sie?', a: 'Das hängt von Ihnen ab. Son Gual und Alcanada sind meine Hauptplätze für einen ernsthaften Ganztag. Für Anfänger, Gruppen oder kürzere Runden gibt es bessere Optionen — und ich sage Ihnen ehrlich, welche passt.' },
  { q: 'Wie kann ich buchen?', a: 'Nehmen Sie Kontakt auf. Teilen Sie mir Ihre Daten und Wünsche mit — ich melde mich persönlich innerhalb von 24 Stunden. Kein Buchungssystem. Kein Warten.' },
  { q: 'Ist das für eine Gruppe geeignet?', a: 'Ja. Die Erlebnisse eignen sich für Einzelpersonen, Paare, Freundesgruppen und Firmen-Events. Das Gesamterlebnis ist besonders beliebt bei Unternehmensgruppen und Führungskräften.' },
  { q: 'Wann ist die beste Reisezeit?', a: 'Oktober, November, März und April. Die beste Kombination aus Platzbedingungen, Wetter, Preis-Leistung und Spieltempo. Die Insel ist ganzjährig bespielbar — im Januar sind die Fairways hier besser als im August in England.' },
]

export default function HomePageDE() {
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  const onMouseDown = (e) => { isDragging.current = true; trackRef.current.style.cursor = 'grabbing'; startX.current = e.pageX - trackRef.current.offsetLeft; scrollLeftStart.current = trackRef.current.scrollLeft }
  const onMouseLeave = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseMove = (e) => { if (!isDragging.current) return; e.preventDefault(); const x = e.pageX - trackRef.current.offsetLeft; trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4 }

  return (
    <>
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA Advanced Professional · Mallorca</p>
          <h1 className="serif-display hero__title">
            Mallorcas beste<br />Golfplätze spielen.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Mit einem Profi an Ihrer Seite.</em>
          </h1>
          <p className="hero__sub">Golferlebnisse und Coaching auf dem Platz — für Golfer, die mehr aus ihrer Zeit auf der Insel herausholen wollen.</p>
          <div className="hero__actions">
            <Link href="/de/play-with-a-pro" className="btn btn--gold">Die Erlebnisse entdecken →</Link>
            <Link href="/de/golf-courses" className="btn btn--outline-white">Plätze erkunden</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master zertifiziert</em></p>
          <p className="hero__trust-line"><em>11 Jahre in Shanghai</em></p>
          <p className="hero__trust-line">Pebble Beach · Evian · The Open</p>
        </div>
        <div className="hero__scroll"><span>Scrollen</span><div className="hero__scroll-line"></div></div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Was dieses Erlebnis besonders macht</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Viele Golferlebnisse auf Mallorca werden über eine Plattform gebucht.<br />Das hier ist etwas anderes.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            Ein privater Tag mit einem PGA Advanced Professional, der auf höchstem Niveau auf drei Kontinenten trainiert hat — von Nationalspielern in China bis zu Golfern an großen Turnierorten in Europa, Asien und den USA. Das Fachwissen hinter dem Tag macht den Unterschied. Das Golf ist besser. Die Einblicke sind echt.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1"><div className="intro__stat-num">11</div><div className="intro__stat-label">Jahre Coaching in China</div></div>
          <div className="intro__stat reveal reveal-delay-2"><div className="intro__stat-num">40+</div><div className="intro__stat-label">Länder, in denen trainiert wurde</div></div>
          <div className="intro__stat reveal reveal-delay-3"><div className="intro__stat-num">22</div><div className="intro__stat-label">Mallorca-Plätze erkundet</div></div>
        </div>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">So funktioniert es</p>
          <h2 className="serif-display">Drei Schritte zu einer Runde, die Sie nicht vergessen werden.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal"><span className="how__num">01</span><h3>Kontakt aufnehmen</h3><p>Teilen Sie mir Ihre Daten, Ihr Handicap und Ihre Wünsche mit. Ich antworte persönlich innerhalb von 24 Stunden.</p></div>
          <div className="how__step reveal reveal-delay-1"><span className="how__num">02</span><h3>Ich plane Ihren Tag</h3><p>Platzempfehlung, Abschlagzeit, Mittagessen, Transfer — alles geregelt, bevor Sie ankommen.</p></div>
          <div className="how__step reveal reveal-delay-2"><span className="how__num">03</span><h3>Ankommen und spielen</h3><p>Ihre einzige Aufgabe ist es, die Runde zu genießen. Und besser zu spielen als erwartet.</p></div>
        </div>
      </section>

      <section className="courses">
        <div className="courses__header">
          <div className="courses__header-left"><p className="eyebrow">Ausgewählte Plätze</p><h2 className="serif-display">Mallorcas beste Plätze — gespielt und bewertet.</h2></div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg></button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg></button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c, i) => (
            <article key={i} className={`course-card ${c.cls}`}>
              <div className="course-card__bg"></div><div className="course-card__overlay"></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">{c.meta.map((m,j) => <span key={j}>{j>0 && <span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.3)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>)}</div>
                <div className="course-card__rating"><span className="course-card__stars">{c.stars}</span><span className="course-card__rating-label"> · {c.difficulty}</span></div>
                <p className="course-card__excerpt">{c.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">Das Erlebnis</p>
          <h2 className="serif-display">Die meisten Golftage auf Mallorca sind eine Abschlagzeit und ein Abschiedswink.</h2>
          <span className="gold-rule"></span>
          <p>Ich habe über ein Jahrzehnt in China trainiert, wo Golfstunden 500 € pro Stunde kosteten und die Klienten ernsthafte, messbare Verbesserungen erwarteten — keine bloße Ermutigung. Davor habe ich in Pebble Beach, bei The Open Championship und in Évian gecoacht und eine Saison auf einer Weltreise durch vierzig Länder verbracht.</p>
          <p>Dieser Hintergrund prägt jede Runde, die ich begleite. Echte Ratschläge — Platzstrategie, Entscheidungsfindung, die Dinge, die die meisten Golfer nie erfahren. Ein Tag, über den Sie noch im Flugzeug nach Hause reden werden.</p>
          <p>Alles ist arrangiert. Der Platz. Die Abschlagzeit. Der Mittagstisch. Ihre einzige Aufgabe ist es zu spielen — und besser zu spielen als erwartet.</p>
          <Link href="/de/play-with-a-pro" className="btn btn--dark">Die Erlebnisse entdecken →</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: 'i', title: 'Alles arrangiert', text: 'Platz, Abschlagzeit, Transfer, Mittagessen — alles erledigt, bevor Sie ankommen.' },
            { icon: '→', title: 'Coaching auf dem Platz', text: 'Echte Verbesserung unter echten Bedingungen. Keine Lektion. Kein Kommentar. Die richtige Beobachtung im richtigen Moment.' },
            { icon: '◇', title: 'Wirklich privat', text: 'Nur Sie und ein PGA Advanced Professional. Keine Fremden in Ihrer Gruppe. Eine Runde, die ganz auf Ihr Spiel zugeschnitten ist.' },
            { icon: '+', title: 'Zugang zu mehr', text: 'Mitgliederplätze, die die meisten Besucher nicht unabhängig buchen können — Santa Ponsa 2 & 3 und weitere.' },
          ].map((f,i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text"><h4>{f.title}</h4><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__header reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>Was Golfer sagen</p>
          <h2 className="serif-display" style={{color:'#fff'}}>In ihren eigenen Worten.</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Das Golfen mit Andy war ein großartiges Erlebnis. Er besitzt ein unvergleichliches Gespür und vermittelt es auf eine Art, die sowohl subtil als auch einfühlsam ist. Nach nur 18 Löchern habe ich eine neue Grenze meines Potenzials entdeckt.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Der Einblick in die Überlegungen hinter jedem Schlag hat meine Entscheidungsfindung enorm verbessert. Der Moment, der herausstach, war, als Andy mit einem 3-Eisen 220 Meter über einen Dogleg rechts mit Bäumen schlug und es auf dem Grün platzierte. Erstaunliches Talent.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
        </div>
      </section>

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Erlebnisse &amp; Pakete</p>
          <h2 className="serif-display">Private Golferlebnisse, die auf Sie zugeschnitten sind.</h2>
          <p>Drei Stufen. Alle privat. Alle persönlich begleitet. Der Unterschied liegt darin, wie vollständig der Tag ist.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">Die Mallorca-Runde</p><h3 className="package__name">Mit einem Profi spielen</h3><p className="package__price">Ab 500 € pro Person</p><div className="package__divider"></div>
            <ul className="package__features">{['Platzempfehlung passend zu Ihrem Spiel','Abschlagzeit gesichert und vollständig organisiert','Vorrunden-Briefing und Aufwärmen','18 Löcher an der Seite von Andy','Coaching auf dem Platz während der gesamten Runde','Nachbesprechung — ehrlich und klar'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/de/contact" className="btn btn--dark">Anfragen →</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">Der Signature-Tag</p><h3 className="package__name">Geführter Golftag</h3><p className="package__price">Ab 650 € pro Person</p><div className="package__divider"></div>
            <ul className="package__features">{['Alles aus der Mallorca-Runde','Son Gual oder Alcanada — zwei der schönsten Plätze der Insel','Ausgedehntes Mittagessen im Platzrestaurant','Ausgewähltes Überraschungsgeschenk','Entspanntes Tempo — ein voller Tag, keine gehetzten 18 Löcher','Mindestens zwei Golfer, bis zu vier'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/de/contact" className="btn btn--gold">Anfragen →</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">Das Gesamterlebnis</p><h3 className="package__name">Maßgeschneiderte Golfreise</h3><p className="package__price">Auf Anfrage</p><div className="package__divider"></div>
            <ul className="package__features">{['Mehrstündiger Tag oder vollständiges Reiseprogramm','Privater Transfer ab Palma','Abendessen in einem handverlesenen Restaurant','Spa- oder Erholungseinheit in einer Partnereinrichtung','Vollständige Concierge-Koordination','Für Gruppen, Unternehmen und individuelle Anfragen'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/de/contact" className="btn btn--dark">Anfragen →</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Fragen</p>
          <h2 className="serif-display">Fragen, die vor dem Kontakt gestellt werden.</h2>
          <p>Noch unsicher? Kontaktieren Sie mich direkt — ich antworte persönlich innerhalb von 24 Stunden.</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f,i) => (
            <div key={i} className={`faq__item${openFaq===i?' open':''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq===i?-1:i)}>{f.q}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg></div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Bereit, Mallorca richtig zu spielen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Melden Sie sich.<br />Ich kümmere mich um den Rest.</h2>
          <p>Teilen Sie mir Ihre Daten, Ihr Handicap und Ihre Wünsche mit. Ich melde mich mit einer Empfehlung — persönlich, innerhalb von 24 Stunden.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;Das Golf ist besser. Die Einblicke sind echt.&rdquo;</p>
          <Link href="/de/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Ihren Tag buchen →</Link>
          <Link href="/de/golf-courses" className="btn btn--outline-white">Die Plätze erkunden</Link>
        </div>
      </section>
    </>
  )
}

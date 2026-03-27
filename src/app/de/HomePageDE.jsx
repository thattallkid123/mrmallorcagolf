'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Experten-Wahl', region: 'Palma · 11 km vom Zentrum', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Schwierigkeit', excerpt: 'Thomas Himmels Design von 2007 hat sein eigenes Wind-Ökosystem. Die letzte Neun — Bahnen 15 bis 18 — gehört zu den vier besten Bahnen Europas.', img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ Experten-Wahl', region: 'Alcúdia · Norden Mallorcas', name: 'Alcanada', meta: ['Küsten-Lage','Par 72','€115–220'], stars: '★★★★★', difficulty: '7/10 Schwierigkeit', excerpt: 'Robert Trent Jones Jr. in seiner dramatischsten Form. Der Leuchtturm ist von 16 der 18 Bahnen sichtbar. Einer der fotogensten Plätze Spaniens.', img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: 'Bestes in Spanien 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Schwierigkeit', excerpt: 'Bei den World Golf Awards 2025 zum besten Golfplatz Spaniens gekürt. Blick über die Bucht von Palma. Ein jahrtausendealter Olivenbaum an Bahn 15.', img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Südwesten', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Schwierigkeit', excerpt: 'Austragungsort der Mallorca Golf Open des DP World Tour 2021. Einer der längsten Plätze der Insel — Bahn 10 mit 590 m ist einer der längsten Par 5 Europas.', img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Südwesten', name: 'Golf de Andratx', meta: ['Der anspruchsvollste','Par 72','€96–140'], stars: '★★★★☆', difficulty: '9/10 Schwierigkeit', excerpt: 'Bahn 6 ist Spaniens längster Par 5 mit 609 Metern. Erbaut in Küstenhügeln ohne Kompromisse. Bringen Sie Ersatzbälle und Demut mit.', img: '/images/andratx.webp' },
]

const faqs = [
  { q: 'Muss ich ein guter Golfer sein?', a: 'Nein, überhaupt nicht. Das Erlebnis passt sich Ihrem Niveau an — Anfänger und Scratch-Golfer profitieren gleichermaßen von dem Tag. Die einzige Voraussetzung ist der Wunsch nach einem wirklich anderen Golferlebnis.' },
  { q: 'Welchen Platz nutzen Sie?', a: 'Das hängt von Ihnen ab. Son Gual und Alcanada sind meine Hauptplätze für einen vollständigen ernsthaften Tag. Für Anfänger, Gruppen oder kürzere Runden gibt es bessere Optionen — und ich sage Ihnen ehrlich, welche am besten passt.' },
  { q: 'Wie buche ich?', a: 'Kontaktieren Sie mich. Nennen Sie mir Ihre Termine und was Sie suchen — ich antworte persönlich innerhalb von 24 Stunden. Keine Buchungssysteme. Keine Wartezeiten.' },
  { q: 'Ist es für eine Gruppe geeignet?', a: 'Ja. Die Erlebnisse funktionieren für Einzelpersonen, Paare, Gruppen von Freunden und Firmenvents. Das Complete Experience ist besonders beliebt bei Unternehmensgruppen und leitenden Angestellten, die die Insel besuchen.' },
  { q: 'Wann ist die beste Zeit zum Kommen?', a: 'Oktober, November, März und April. Die beste Kombination aus Platzbedingungen, Klima, Preis-Leistungs-Verhältnis und Spielgeschwindigkeit. Die Insel ist das ganze Jahr über spielbar — im Januar sind die Fairways hier in besserem Zustand als im August in England.' },
]

const FEATURE_ICONS = {
  coaching: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
  expertise: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" /></svg>,
  access: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  groups: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  plan: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" /></svg>,
}

export default function HomePageDE() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const router = useRouter()
  const [currentCourseIdx, setCurrentCourseIdx] = useState(0)

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="hero-content">
          <p className="hero-eyebrow">Golf-Coaching auf Mallorca</p>
          <h1 className="hero-title">Ihre nächste Runde könnte alles verändern</h1>
          <p className="hero-subtitle">Persönliches Coaching auf erstklassigen Plätzen. Nicht für jedermann.</p>

          <div className="hero-cta">
            <button onClick={() => router.push('/de/contact')} className="btn btn-primary">
              Jetzt buchen
            </button>
            <button onClick={() => {}} className="btn btn-secondary">
              Mehr erfahren
            </button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">★★★★★ Vertraut von Golfern aus 40+ Ländern</p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro__left">
            <h2>Golf auf Mallorca ist nicht einfach Sonne und Fairways</h2>
            <p className="intro-description">
              Die besten Plätze der Insel verlangen nach echtem Verständnis. Verstehen Sie Windmuster, Grüns-Lesung und Kursmanagement — und Sie werden nicht nur besser spielen, Sie werden hier dominieren.
            </p>
          </div>

          <div className="intro__right">
            <div className="intro-stats">
              <div className="stat">
                <h3>40+</h3>
                <p>Länder vertreten</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>würden wiederkommen</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Tage auf dem Platz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>So funktioniert es</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Sie kontaktieren mich</h3>
            <p>Nennen Sie mir Ihr Ziel, Ihren Level und Ihre bevorzugten Termine. Eine echte Unterhaltung, kein Formular.</p>
          </div>
          <div className="step">
            <h3>2. Wir wählen den Platz</h3>
            <p>Basierend auf dem Wetter, Ihrem Level und Ihren Zielen wähle ich den perfekten Platz aus.</p>
          </div>
          <div className="step">
            <h3>3. Coaching auf dem Platz</h3>
            <p>Eine Runde voller gezielter Lektionen, Video-Analyse und echter Verbesserung. Nicht nur spielen — verstehen.</p>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Erstklassige Plätze</h2>
        <p className="courses-intro">Mallorcas besten 18-Loch-Championship-Plätze. Jeder hat seinen Charakter.</p>

        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div key={idx} className={`course-card ${course.cls}`}>
              {course.badge && <div className="course-badge">{course.badge}</div>}
              <img src={course.img} alt={course.name} className="course-image" />
              <div className="course-info">
                <p className="course-region">{course.region}</p>
                <h3>{course.name}</h3>
                <div className="course-meta">
                  {course.meta.map((m, i) => <span key={i}>{m}</span>)}
                </div>
                <p className="course-difficulty">{course.difficulty}</p>
                <p className="course-excerpt">{course.excerpt}</p>
                <div className="course-rating">{course.stars}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MALLORCA SECTION */}
      <section className="why-mallorca">
        <h2>Warum Mallorca</h2>
        <p className="why-description">
          Hier vereinen sich Klima, Design und Geschichte zu etwas Besonderem. Es ist nicht nur die beste Zeit Spaniens zu golfen — es ist einer der besten Orte Europas.
        </p>

        <div className="why-stats">
          <div className="why-stat">
            <h3>310+</h3>
            <p>Sonnentage pro Jahr</p>
          </div>
          <div className="why-stat">
            <h3>25+</h3>
            <p>Championship-Plätze</p>
          </div>
          <div className="why-stat">
            <h3>1.5h</h3>
            <p>Von beliebigen europäischen Hauptstädten</p>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES CAROUSEL SECTION */}
      <section className="featured-carousel">
        <h2>Featured Courses</h2>
        <div className="carousel-container">
          {courses.length > 0 && (
            <div className="carousel-item">
              <div className="carousel-card">
                <img src={courses[currentCourseIdx].img} alt={courses[currentCourseIdx].name} />
                <h3>{courses[currentCourseIdx].name}</h3>
                <p>{courses[currentCourseIdx].region}</p>
              </div>
            </div>
          )}
          <div className="carousel-controls">
            <button onClick={() => setCurrentCourseIdx((prev) => (prev - 1 + courses.length) % courses.length)}>←</button>
            <button onClick={() => setCurrentCourseIdx((prev) => (prev + 1) % courses.length)}>→</button>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="what-you-get">
        <h2>Was Sie bekommen</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.coaching}</div>
            <h3>Persönliches Coaching</h3>
            <p>Nicht generisches Coaching. Coaching, das auf Ihren Swing, Ihre Gedanken und Ihre Ziele abgestimmt ist.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.expertise}</div>
            <h3>Lokale Expertise</h3>
            <p>20 Jahre Erfahrung auf Mallorcas besten Plätzen. Ich kenne jeden Millimeter dieser Kurse.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.access}</div>
            <h3>Zugang zu Premium-Plätzen</h3>
            <p>Championship-Kurse, auf denen Sie möglicherweise nicht spielen könnten. Ohne Wartelisten.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.video}</div>
            <h3>Video-Analyse</h3>
            <p>Hochfrequenz-Aufnahmen und Analyse auf dem Platz. Sie sehen es, verstehen es, korrigieren es sofort.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.groups}</div>
            <h3>Kleine Gruppen oder Eins-zu-eins</h3>
            <p>Entweder Privat oder mit Freunden. Sagen Sie mir, was funktioniert.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.plan}</div>
            <h3>Nachhaltiger Plan</h3>
            <p>Ein maßgeschneidertes Übungsprogramm, das Sie daheim umsetzen können.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <blockquote>
          "Der beste Tag Golf meines Lebens. Nicht wegen des Platzes — wegen dem, was ich auf dem Platz gelernt habe."
        </blockquote>
        <p className="testimonial-author">— James M., Golfeur mit Handicap 4</p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="packages">
        <h2>Coaching-Pakete</h2>

        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>Einfaches Erlebnis</h3>
            <p className="tier-description">Ein Tag, um die Grundlagen zu lernen</p>
            <div className="price">€595</div>
            <ul className="features-list">
              <li>9 Löcher mit Coaching</li>
              <li>Video-Analyse</li>
              <li>Personalisierter Übungsplan</li>
              <li>Premium-Platz (bis zu €80 Greenfee)</li>
            </ul>
            <button className="btn btn-secondary">Auswählen</button>
          </div>

          <div className="pricing-tier featured">
            <div className="badge-featured">Am beliebtesten</div>
            <h3>Komplettes Erlebnis</h3>
            <p className="tier-description">Die komplette Umwandlung</p>
            <div className="price">€1,290</div>
            <ul className="features-list">
              <li>Voller 18-Loch-Tag mit Coaching</li>
              <li>Hochfrequenz-Video-Analyse</li>
              <li>Schlag-für-Schlag-Feedback</li>
              <li>Championship-Platz (bis zu €165 Greenfee)</li>
              <li>Follow-up-Sitzung (30 Min)</li>
              <li>6-Wochen-Übungsplan</li>
            </ul>
            <button className="btn btn-primary">Buchen</button>
          </div>

          <div className="pricing-tier">
            <h3>Intensives Training</h3>
            <p className="tier-description">Für Golfer, die ernsthaft am Spiel arbeiten</p>
            <div className="price">€2,450</div>
            <ul className="features-list">
              <li>Zwei volle Tage Coaching</li>
              <li>Swing-Analyse & Video</li>
              <li>Short Game Masterclass</li>
              <li>Mentales Spiel-Training</li>
              <li>Zwei Championship-Plätze</li>
              <li>Wöchentliche Check-ins (4 Wochen)</li>
              <li>Personalisierter 12-Wochen-Plan</li>
            </ul>
            <button className="btn btn-secondary">Auswählen</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Häufig gestellte Fragen</h2>
        <p className="faq-intro">Alles, was Sie über Coaching auf Mallorca wissen müssen.</p>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFAQ === idx ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              {openFAQ === idx && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-final">
        <h2>Bereit, besser zu spielen?</h2>
        <p className="cta-text">
          Die beste Zeit zum Anfangen ist jetzt. Die zweitbeste Zeit ist sobald Sie buchen.
        </p>
        <a href="https://wa.me/34624466702" className="btn btn-primary">
          Jetzt buchen
        </a>
      </section>
    </div>
  )
}

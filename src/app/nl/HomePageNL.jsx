'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expertskeuze', region: 'Palma · 11 km van centrum', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Moeilijkheid', excerpt: 'Thomas Himmels design uit 2007 heeft zijn eigen wind-ecosysteem. De slotnegen — holes 15 tot 18 — behoren tot de vier beste holes in Europees golf.', img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ Expertskeuze', region: 'Alcúdia · Noord-Mallorca', name: 'Alcanada', meta: ['Kustligging','Par 72','€115–220'], stars: '★★★★★', difficulty: '7/10 Moeilijkheid', excerpt: 'Robert Trent Jones Jr. in zijn meest dramatische vorm. De vuurtoren is zichtbaar vanaf 16 van de 18 holes. Een van de meest gefotografeerde banen van Spanje.', img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: 'Beste van Spanje 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Moeilijkheid', excerpt: 'Gekozen tot beste golfbaan van Spanje op de World Golf Awards 2025. Uitzicht over de Baai van Palma. Een duizendjarige olijfboom op hole 15.', img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Zuidwesten', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Moeilijkheid', excerpt: 'Thuisbasis van de Mallorca Golf Open van de DP World Tour 2021. Een van de langste banen op het eiland — hole 10 met 590m is een van Europas langste par 5s.', img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Zuidwesten', name: 'Golf de Andratx', meta: ['De meest veeleisende','Par 72','€96–140'], stars: '★★★★☆', difficulty: '9/10 Moeilijkheid', excerpt: 'Hole 6 is Spanje\'s langste par 5 met 609 meter. Gebouwd in kusthogens zonder compromissen. Breng reserveballen en bescheidenheid mee.', img: '/images/andratx.webp' },
]

const faqs = [
  { q: 'Moet ik een goede golfer zijn?', a: 'Nee, helemaal niet. De ervaring past zich aan uw niveau aan — beginners en scratch-golfers profiteren evenzeer van de dag. De enige vereiste is het verlangen naar een echt ander golferlebenis.' },
  { q: 'Welke baan gebruikt u?', a: 'Dat hangt van u af. Son Gual en Alcanada zijn mijn belangrijkste banen voor een volledige, serieuze dag. Voor beginners, groepen of kortere rondes zijn er betere opties — en ik zal u eerlijk zeggen wat het best past.' },
  { q: 'Hoe boek ik?', a: 'Neem contact met mij op. Geef mij uw datums en wat u zoekt — ik antwoord persoonlijk binnen 24 uur. Geen boeking-systemen. Geen wachttijden.' },
  { q: 'Is het geschikt voor een groep?', a: 'Ja. De ervaringen werken voor individuen, koppels, vriendengroepen en bedrijfsbijeenkomsten. De Complete Experience is vooral populair bij bedrijfsgroepen en leidinggevenden die het eiland bezoeken.' },
  { q: 'Wat is de beste tijd om te komen?', a: 'Oktober, november, maart en april. De beste combinatie van baan-omstandigheden, klimaat, prijs-kwaliteitsverhoud en speelsnelheid. Het eiland is het hele jaar speelbaar — in januari zijn de fairways hier in betere conditie dan in augustus in Engeland.' },
]

const FEATURE_ICONS = {
  coaching: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
  expertise: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" /></svg>,
  access: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  groups: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  plan: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" /></svg>,
}

export default function HomePageNL() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const router = useRouter()
  const [currentCourseIdx, setCurrentCourseIdx] = useState(0)

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="hero-content">
          <p className="hero-eyebrow">Golfen coachen op Mallorca</p>
          <h1 className="hero-title">Uw volgende ronde kan alles veranderen</h1>
          <p className="hero-subtitle">Persoonlijk coachen op premier banen. Niet voor iedereen.</p>

          <div className="hero-cta">
            <button onClick={() => router.push('/nl/contact')} className="btn btn-primary">
              Nu boeken
            </button>
            <button onClick={() => {}} className="btn btn-secondary">
              Meer info
            </button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">★★★★★ Vertrouwd door golfers uit 40+ landen</p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro__left">
            <h2>Golfen op Mallorca is niet zomaar zon en fairways</h2>
            <p className="intro-description">
              De beste banen op het eiland vereisen echt begrip. Begrijp windpatronen, greenlezen en baanadministratie — en u zult niet alleen beter spelen, u zult hier domineren.
            </p>
          </div>

          <div className="intro__right">
            <div className="intro-stats">
              <div className="stat">
                <h3>40+</h3>
                <p>Landen vertegenwoordigd</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>zouden terugkomen</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Dagen op de baan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>Hoe het werkt</h2>

        <div className="steps">
          <div className="step">
            <h3>1. U neemt contact op</h3>
            <p>Vertel me uw doel, uw niveau en uw voorkeursdatums. Een echt gesprek, geen formulier.</p>
          </div>
          <div className="step">
            <h3>2. We kiezen de baan</h3>
            <p>Op basis van weer, uw niveau en uw doelen kies ik de perfecte baan.</p>
          </div>
          <div className="step">
            <h3>3. Coachen op de baan</h3>
            <p>Een ronde vol gerichte lessen, video-analyse en echte verbetering. Niet zomaar spelen — begrijpen.</p>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Banen van wereldklasse</h2>
        <p className="courses-intro">Mallorca\'s beste 18-gats banen. Elk heeft zijn karakter.</p>

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
        <h2>Waarom Mallorca</h2>
        <p className="why-description">
          Hier combineren klimaat, ontwerp en geschiedenis zich tot iets speciaals. Het is niet alleen het beste moment om in Spanje te golfen — het is een van de beste plaatsen in Europa.
        </p>

        <div className="why-stats">
          <div className="why-stat">
            <h3>310+</h3>
            <p>Zonnige dagen per jaar</p>
          </div>
          <div className="why-stat">
            <h3>25+</h3>
            <p>Kampioenschapsbanen</p>
          </div>
          <div className="why-stat">
            <h3>1.5u</h3>
            <p>Van elke Europese hoofdstad</p>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES CAROUSEL SECTION */}
      <section className="featured-carousel">
        <h2>Aanbevolen banen</h2>
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
        <h2>Wat u krijgt</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.coaching}</div>
            <h3>Persoonlijk coachen</h3>
            <p>Geen generiek coachen. Coachen afgestemd op uw swing, gedachten en doelen.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.expertise}</div>
            <h3>Lokale expertise</h3>
            <p>20 jaar ervaring op Mallorca\'s beste banen. Ik ken elke millimeter van deze banen.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.access}</div>
            <h3>Toegang tot premium banen</h3>
            <p>Kampioenschapsbanen waar u mogelijk niet kon spelen. Geen wachtlijsten.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.video}</div>
            <h3>Video-analyse</h3>
            <p>Hoogfrequentie-opnamen en analyse op de baan. U ziet het, begrijpt het, corrigeert het onmiddellijk.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.groups}</div>
            <h3>Kleine groepen of één-op-één</h3>
            <p>Privé of met vrienden. Zeg me wat werkt.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.plan}</div>
            <h3>Duurzaam plan</h3>
            <p>Een op maat gemaakt trainingsschema dat u thuis kunt uitvoeren.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <blockquote>
          "De beste golfdag van mijn leven. Niet vanwege de baan — vanwege wat ik op de baan leerde."
        </blockquote>
        <p className="testimonial-author">— James M., Golfer met handicap 4</p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="packages">
        <h2>Coachingpakketten</h2>

        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>Eenvoudige ervaring</h3>
            <p className="tier-description">Een dag om de basis te leren</p>
            <div className="price">€595</div>
            <ul className="features-list">
              <li>9 holes met coaching</li>
              <li>Video-analyse</li>
              <li>Gepersonaliseerd trainingsplan</li>
              <li>Premium baan (tot €80 greenfee)</li>
            </ul>
            <button className="btn btn-secondary">Selecteer</button>
          </div>

          <div className="pricing-tier featured">
            <div className="badge-featured">Meest populair</div>
            <h3>Complete ervaring</h3>
            <p className="tier-description">De volledige transformatie</p>
            <div className="price">€1,290</div>
            <ul className="features-list">
              <li>Volledige dag 18 holes met coaching</li>
              <li>Hoogfrequentie video-analyse</li>
              <li>Slag-voor-slag feedback</li>
              <li>Kampioenschapsbaan (tot €165 greenfee)</li>
              <li>Vervolgzitting (30 min)</li>
              <li>6-weken trainingsplan</li>
            </ul>
            <button className="btn btn-primary">Boeken</button>
          </div>

          <div className="pricing-tier">
            <h3>Intensieve training</h3>
            <p className="tier-description">Voor golfers die serieus aan hun spel werken</p>
            <div className="price">€2,450</div>
            <ul className="features-list">
              <li>Twee volledige coaching dagen</li>
              <li>Swing-analyse & Video</li>
              <li>Short Game Masterclass</li>
              <li>Mentaal spel training</li>
              <li>Twee kampioenschapsbanen</li>
              <li>Wekelijkse check-ins (4 weken)</li>
              <li>Gepersonaliseerd 12-weken plan</li>
            </ul>
            <button className="btn btn-secondary">Selecteer</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Veelgestelde vragen</h2>
        <p className="faq-intro">Alles wat u moet weten over coachen op Mallorca.</p>

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
        <h2>Klaar om beter te spelen?</h2>
        <p className="cta-text">
          Het beste moment om te starten is nu. Het tweede beste moment is zodra u boekt.
        </p>
        <a href="https://wa.me/34624466702" className="btn btn-primary">
          Nu boeken
        </a>
      </section>
    </div>
  )
}

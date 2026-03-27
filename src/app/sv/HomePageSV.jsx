'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Expertvalmalt', region: 'Palma · 11 km från centrum', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Svårighet', excerpt: 'Thomas Himmels design från 2007 har sitt eget vind-ekosystem. De sista nio hålen — hål 15 till 18 — hör till de fyra bästa hålen inom europas golf.', img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ Expertvalmalt', region: 'Alcúdia · Norra Mallorca', name: 'Alcanada', meta: ['Kustläge','Par 72','€115–220'], stars: '★★★★★', difficulty: '7/10 Svårighet', excerpt: 'Robert Trent Jones Jr. i sin mest dramatiska form. Fyren är synlig från 16 av 18 hål. En av Spaniens mest fotograferade banor.', img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: 'Bäst i Spanien 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Svårighet', excerpt: 'Utnämnd till Spaniens bästa golfbana på World Golf Awards 2025. Utsikt över Palmabukten. Ett tusenårigt olivträd på hål 15.', img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Sydväst', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Svårighet', excerpt: 'Hemvist för Mallorca Golf Open på DP World Tour 2021. En av öns längsta banor — hål 10 med 590 m är ett av Europas längsta par 5.', img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Sydväst', name: 'Golf de Andratx', meta: ['Den mest utmanande','Par 72','€96–140'], stars: '★★★★☆', difficulty: '9/10 Svårighet', excerpt: 'Hål 6 är Spaniens längsta par 5 med 609 meter. Byggd i kustnära höjder utan kompromisser. Ta med extra bollar och ödmjukhet.', img: '/images/andratx.webp' },
]

const faqs = [
  { q: 'Måste jag vara en bra golfspelare?', a: 'Nej, absolut inte. Upplevelsen anpassas till din nivå — både nybörjare och scratch-golfare gynnas lika mycket av dagen. Den enda förutsättningen är önskan om en verkligt annorlunda golferlebelse.' },
  { q: 'Vilken bana använder du?', a: 'Det beror på dig. Son Gual och Alcanada är mina huvudbanor för en helt seriös dag. För nybörjare, grupper eller kortare omgångar finns bättre alternativ — och jag berättar ärlighet vilken som passar bäst.' },
  { q: 'Hur bokar jag?', a: 'Kontakta mig. Berätta för mig dina datum och vad du letar efter — jag svarar personligt inom 24 timmar. Inga bokningssystem. Ingen väntetid.' },
  { q: 'Är det lämpat för en grupp?', a: 'Ja. Upplevelserna fungerar för individer, par, vängrupper och företagsarrangemang. Complete Experience är särskilt populärt bland företagsgrupper och ledande befattningshavare som besöker ön.' },
  { q: 'Vilken är den bästa tiden att komma?', a: 'Oktober, november, mars och april. Den bästa kombinationen av banförhållanden, klimat, pris-prestandaförhållande och spelhastighet. Ön är spelletsam året runt — i januari är fairways här i bättre skick än i augusti i England.' },
]

const FEATURE_ICONS = {
  coaching: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
  expertise: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" /></svg>,
  access: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  groups: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  plan: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" /></svg>,
}

export default function HomePageSV() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const router = useRouter()
  const [currentCourseIdx, setCurrentCourseIdx] = useState(0)

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="hero-content">
          <p className="hero-eyebrow">Golfcoachning på Mallorca</p>
          <h1 className="hero-title">Din nästa omgång kan förändra allt</h1>
          <p className="hero-subtitle">Personlig coaching på premier banor. Inte för alla.</p>

          <div className="hero-cta">
            <button onClick={() => router.push('/sv/contact')} className="btn btn-primary">
              Boka nu
            </button>
            <button onClick={() => {}} className="btn btn-secondary">
              Läs mer
            </button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">★★★★★ Pålitlig av golfare från 40+ länder</p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro__left">
            <h2>Golf på Mallorca är inte bara sol och fairways</h2>
            <p className="intro-description">
              De bästa banorna på ön kräver verklig förståelse. Förstå vindmönster, läs gröner och banadministration — och du kommer inte bara att spela bättre, du kommer att dominera här.
            </p>
          </div>

          <div className="intro__right">
            <div className="intro-stats">
              <div className="stat">
                <h3>40+</h3>
                <p>Länder representerade</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>skulle återvända</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Dagar på banan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>Så fungerar det</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Du kontaktar mig</h3>
            <p>Berätta för mig ditt mål, din nivå och dina önskade datum. En verklig konversation, ingen blankett.</p>
          </div>
          <div className="step">
            <h3>2. Vi väljer banan</h3>
            <p>Baserat på väder, din nivå och dina mål väljer jag den perfekta banan.</p>
          </div>
          <div className="step">
            <h3>3. Coaching på banan</h3>
            <p>En omgång full av riktad undervisning, videoanalys och verklig förbättring. Inte bara spela — förstå.</p>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Världsklassbranor</h2>
        <p className="courses-intro">Mallorcas bästa 18-håls banor. Var och en har sin karaktär.</p>

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
        <h2>Varför Mallorca</h2>
        <p className="why-description">
          Här kombineras klimat, design och historia till något särskilt. Det är inte bara den bästa tiden att spela golf i Spanien — det är en av Europas bästa platser.
        </p>

        <div className="why-stats">
          <div className="why-stat">
            <h3>310+</h3>
            <p>Soliga dagar per år</p>
          </div>
          <div className="why-stat">
            <h3>25+</h3>
            <p>Mästerskapsbanor</p>
          </div>
          <div className="why-stat">
            <h3>1.5h</h3>
            <p>Från vilken europeisk huvudstad som helst</p>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES CAROUSEL SECTION */}
      <section className="featured-carousel">
        <h2>Utvalda banor</h2>
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
        <h2>Vad du får</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.coaching}</div>
            <h3>Personlig coaching</h3>
            <p>Ingen generisk coaching. Coaching anpassad till din swing, dina tankar och dina mål.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.expertise}</div>
            <h3>Lokal expertis</h3>
            <p>20 års erfarenhet på Mallorcas bästa banor. Jag känner varje millimeter av dessa banor.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.access}</div>
            <h3>Tillgång till premiumbannor</h3>
            <p>Mästerskapsbanor där du kanske inte kunde spela. Utan väntelistor.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.video}</div>
            <h3>Videoanalys</h3>
            <p>Högfrekventa inspelningar och analys på banan. Du ser det, förstår det, korrigerar det omedelbar.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.groups}</div>
            <h3>Små grupper eller en-mot-en</h3>
            <p>Privat eller med vänner. Säg mig vad som fungerar.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.plan}</div>
            <h3>Hållbar plan</h3>
            <p>Ett skräddarsytt träningsschema som du kan implementera hemma.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <blockquote>
          "Den bästa golfomgången i mitt liv. Inte på grund av banan — på grund av vad jag lärde mig på banan."
        </blockquote>
        <p className="testimonial-author">— James M., Golfspelare med handicap 4</p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="packages">
        <h2>Coachingpaket</h2>

        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>Enkel upplevelse</h3>
            <p className="tier-description">En dag för att lära sig grunderna</p>
            <div className="price">€595</div>
            <ul className="features-list">
              <li>9 hål med coaching</li>
              <li>Videoanalys</li>
              <li>Personaliserad träningsplan</li>
              <li>Premiumbana (upp till €80 greenfee)</li>
            </ul>
            <button className="btn btn-secondary">Välj</button>
          </div>

          <div className="pricing-tier featured">
            <div className="badge-featured">Mest populär</div>
            <h3>Fullständig upplevelse</h3>
            <p className="tier-description">Den fullständiga omvandlingen</p>
            <div className="price">€1,290</div>
            <ul className="features-list">
              <li>Full 18-håls dag med coaching</li>
              <li>Högfrekvent videoanalys</li>
              <li>Slag-för-slag feedback</li>
              <li>Mästersskapsbana (upp till €165 greenfee)</li>
              <li>Uppfoljningssession (30 min)</li>
              <li>6-veckors träningsplan</li>
            </ul>
            <button className="btn btn-primary">Boka</button>
          </div>

          <div className="pricing-tier">
            <h3>Intensiv träning</h3>
            <p className="tier-description">För golfare som arbetar seriöst med sitt spel</p>
            <div className="price">€2,450</div>
            <ul className="features-list">
              <li>Två fullas coachingdagar</li>
              <li>Swing-analys & Video</li>
              <li>Short Game Masterclass</li>
              <li>Mental spelträning</li>
              <li>Två mästerskapsbanor</li>
              <li>Veckovisa check-ins (4 veckor)</li>
              <li>Personaliserad 12-veckorsplan</li>
            </ul>
            <button className="btn btn-secondary">Välj</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Vanliga frågor</h2>
        <p className="faq-intro">Allt du behöver veta om coaching på Mallorca.</p>

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
        <h2>Redo att spela bättre?</h2>
        <p className="cta-text">
          Den bästa tiden att börja är nu. Den näst bästa tiden är så snart du bokar.
        </p>
        <a href="https://wa.me/34624466702" className="btn btn-primary">
          Boka nu
        </a>
      </section>
    </div>
  )
}

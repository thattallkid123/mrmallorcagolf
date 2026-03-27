'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Choix des experts', region: 'Palma · 11 km du centre', name: 'Son Gual', meta: ['Championnat','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Difficulté', excerpt: 'Le design de Thomas Himmel de 2007 possède son propre écosystème de vent. Les neuf derniers — les trous 15 à 18 — font partie des quatre meilleurs trous d\'Europe.', img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ Choix des experts', region: 'Alcúdia · Nord de Majorque', name: 'Alcanada', meta: ['Emplacement côtier','Par 72','€115–220'], stars: '★★★★★', difficulty: '7/10 Difficulté', excerpt: 'Robert Trent Jones Jr. sous sa forme la plus dramatique. Le phare est visible de 16 des 18 trous. L\'un des parcours les plus photographiés d\'Espagne.', img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: 'Meilleur d\'Espagne 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Difficulté', excerpt: 'Élu meilleur parcours de golf d\'Espagne aux World Golf Awards 2025. Vues sur la baie de Palma. Un olivier millénaire au trou 15.', img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Sud-ouest', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Difficulté', excerpt: 'Siège de l\'Open de Majorque du DP World Tour 2021. L\'un des parcours les plus longs de l\'île — le trou 10 avec 590 m est l\'un des plus longs par 5 d\'Europe.', img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Sud-ouest', name: 'Golf de Andratx', meta: ['Le plus exigeant','Par 72','€96–140'], stars: '★★★★☆', difficulty: '9/10 Difficulté', excerpt: 'Le trou 6 est le plus long par 5 d\'Espagne avec 609 mètres. Construit dans les collines côtières sans compromis. Apportez des balles de secours et l\'humilité.', img: '/images/andratx.webp' },
]

const faqs = [
  { q: 'Dois-je être un bon golfeur ?', a: 'Non, absolument pas. L\'expérience s\'adapte à votre niveau — les débutants et les golfeurs au handicap zéro bénéficient également de la journée. La seule condition est le désir d\'une expérience de golf vraiment différente.' },
  { q: 'Quel parcours utilisez-vous ?', a: 'Cela dépend de vous. Son Gual et Alcanada sont mes parcours principaux pour une journée complète et sérieuse. Pour les débutants, les groupes ou les tours plus courts, il y a de meilleures options — et je vous dirai honnêtement ce qui convient le mieux.' },
  { q: 'Comment puis-je réserver ?', a: 'Contactez-moi. Donnez-moi vos dates et ce que vous recherchez — je répondrai personnellement dans les 24 heures. Pas de systèmes de réservation. Pas d\'attente.' },
  { q: 'Est-ce adapté à un groupe ?', a: 'Oui. Les expériences fonctionnent pour les individus, les couples, les groupes d\'amis et les événements d\'entreprise. L\'expérience complète est particulièrement populaire auprès des groupes d\'entreprises et des cadres visitant l\'île.' },
  { q: 'Quelle est la meilleure époque pour venir ?', a: 'Octobre, novembre, mars et avril. La meilleure combinaison de conditions de parcours, de climat, de rapport qualité-prix et de vitesse de jeu. L\'île est jouable toute l\'année — en janvier, les fairways sont ici en meilleur état qu\'en août en Angleterre.' },
]

const FEATURE_ICONS = {
  coaching: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
  expertise: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" /></svg>,
  access: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  groups: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  plan: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" /></svg>,
}

export default function HomePageFR() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const router = useRouter()
  const [currentCourseIdx, setCurrentCourseIdx] = useState(0)

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="hero-content">
          <p className="hero-eyebrow">Coaching au golf à Majorque</p>
          <h1 className="hero-title">Votre prochaine ronde pourrait tout changer</h1>
          <p className="hero-subtitle">Coaching personnel sur les meilleurs parcours. Pas pour tout le monde.</p>

          <div className="hero-cta">
            <button onClick={() => router.push('/fr/contact')} className="btn btn-primary">
              Réserver maintenant
            </button>
            <button onClick={() => {}} className="btn btn-secondary">
              En savoir plus
            </button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">★★★★★ Approuvé par des golfeurs de 40+ pays</p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro__left">
            <h2>Le golf à Majorque n\'est pas juste du soleil et des fairways</h2>
            <p className="intro-description">
              Les meilleurs parcours de l\'île exigent une compréhension réelle. Comprenez les schémas de vent, la lecture des greens et la gestion du parcours — et vous ne jouerez pas seulement mieux, vous dominerez ici.
            </p>
          </div>

          <div className="intro__right">
            <div className="intro-stats">
              <div className="stat">
                <h3>40+</h3>
                <p>Pays représentés</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>reviendraient</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Jours sur le parcours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>Comment ça marche</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Vous me contactez</h3>
            <p>Donnez-moi votre objectif, votre niveau et vos dates préférées. Une vraie conversation, pas un formulaire.</p>
          </div>
          <div className="step">
            <h3>2. Nous choisissons le parcours</h3>
            <p>En fonction de la météo, de votre niveau et de vos objectifs, je choisis le parcours parfait.</p>
          </div>
          <div className="step">
            <h3>3. Coaching sur le parcours</h3>
            <p>Une ronde remplie de leçons ciblées, d\'analyse vidéo et d\'amélioration réelle. Pas juste jouer — comprendre.</p>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Parcours de classe mondiale</h2>
        <p className="courses-intro">Les meilleurs parcours de 18 trous à Majorque. Chacun a son caractère.</p>

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
        <h2>Pourquoi Majorque</h2>
        <p className="why-description">
          Ici, le climat, le design et l\'histoire se combinent en quelque chose de spécial. C\'est non seulement le meilleur moment en Espagne pour jouer au golf — c\'est l\'un des meilleurs endroits d\'Europe.
        </p>

        <div className="why-stats">
          <div className="why-stat">
            <h3>310+</h3>
            <p>Jours ensoleillés par an</p>
          </div>
          <div className="why-stat">
            <h3>25+</h3>
            <p>Parcours de championnat</p>
          </div>
          <div className="why-stat">
            <h3>1.5h</h3>
            <p>À partir de n\'importe quelle capitale européenne</p>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES CAROUSEL SECTION */}
      <section className="featured-carousel">
        <h2>Parcours en vedette</h2>
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
        <h2>Ce que vous obtenez</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.coaching}</div>
            <h3>Coaching personnel</h3>
            <p>Pas de coaching générique. Coaching adapté à votre swing, vos pensées et vos objectifs.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.expertise}</div>
            <h3>Expertise locale</h3>
            <p>20 ans d\'expérience sur les meilleurs parcours de Majorque. Je connais chaque millimètre de ces parcours.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.access}</div>
            <h3>Accès aux parcours premium</h3>
            <p>Parcours de championnat où vous ne pouviez peut-être pas jouer. Sans listes d\'attente.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.video}</div>
            <h3>Analyse vidéo</h3>
            <p>Enregistrement haute fréquence et analyse sur le parcours. Vous le voyez, vous le comprenez, vous le corrigez immédiatement.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.groups}</div>
            <h3>Petits groupes ou en tête à tête</h3>
            <p>Privé ou avec des amis. Dites-moi ce qui fonctionne.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.plan}</div>
            <h3>Plan durable</h3>
            <p>Un programme d\'entraînement sur mesure que vous pouvez mettre en œuvre à la maison.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <blockquote>
          "Le meilleur jour de golf de ma vie. Pas à cause du parcours — à cause de ce que j\'ai appris sur le parcours."
        </blockquote>
        <p className="testimonial-author">— James M., Golfeur avec handicap 4</p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="packages">
        <h2>Forfaits de coaching</h2>

        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>Expérience simple</h3>
            <p className="tier-description">Une journée pour apprendre les bases</p>
            <div className="price">€595</div>
            <ul className="features-list">
              <li>9 trous avec coaching</li>
              <li>Analyse vidéo</li>
              <li>Plan d\'entraînement personnalisé</li>
              <li>Parcours premium (jusqu\'à €80 green fees)</li>
            </ul>
            <button className="btn btn-secondary">Choisir</button>
          </div>

          <div className="pricing-tier featured">
            <div className="badge-featured">Le plus populaire</div>
            <h3>Expérience complète</h3>
            <p className="tier-description">La transformation complète</p>
            <div className="price">€1,290</div>
            <ul className="features-list">
              <li>Journée complète de 18 trous avec coaching</li>
              <li>Analyse vidéo haute fréquence</li>
              <li>Retour coup par coup</li>
              <li>Parcours de championnat (jusqu\'à €165 green fees)</li>
              <li>Session de suivi (30 min)</li>
              <li>Plan d\'entraînement de 6 semaines</li>
            </ul>
            <button className="btn btn-primary">Réserver</button>
          </div>

          <div className="pricing-tier">
            <h3>Formation intensive</h3>
            <p className="tier-description">Pour les golfeurs qui travaillent sérieusement</p>
            <div className="price">€2,450</div>
            <ul className="features-list">
              <li>Deux jours complets de coaching</li>
              <li>Analyse du swing et vidéo</li>
              <li>Masterclass du jeu court</li>
              <li>Entraînement du jeu mental</li>
              <li>Deux parcours de championnat</li>
              <li>Check-ins hebdomadaires (4 semaines)</li>
              <li>Plan personnalisé de 12 semaines</li>
            </ul>
            <button className="btn btn-secondary">Choisir</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Questions fréquemment posées</h2>
        <p className="faq-intro">Tout ce que vous devez savoir sur le coaching à Majorque.</p>

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
        <h2>Prêt à mieux jouer ?</h2>
        <p className="cta-text">
          Le meilleur moment pour commencer est maintenant. Le deuxième meilleur est dès que vous réservez.
        </p>
        <a href="https://wa.me/34624466702" className="btn btn-primary">
          Réserver maintenant
        </a>
      </section>
    </div>
  )
}

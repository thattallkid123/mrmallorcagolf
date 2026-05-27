import Image from 'next/image'
import { getHomeContent } from '../lib/homepage-content'
import { SITE_ORIGIN, buildLocalePath } from '../lib/site'

const FEATURE_ICONS = {
  arranged: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  coaching: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
  private: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  access: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  ),
}

const ITINERARY_PLANNER_PATH = '/itinerary'


function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildHomeFaqSchema(home, locale) {
  if (!home.faq?.items?.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${SITE_ORIGIN}${buildLocalePath('/', locale)}`,
    mainEntity: home.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function localizePath(path, locale) {
  if (!path || path.startsWith('http') || path.startsWith('#')) return path
  return locale === 'en' ? path : `/${locale}${path}`
}



export default function HomePageInner({ locale = 'en' }) {
  const home = getHomeContent(locale)
  const faqSchema = buildHomeFaqSchema(home, locale)
  const contactHref = locale === 'en' ? '/contact' : `/${locale}/contact`
  const golfCoursesHref = locale === 'en' ? '/golf-courses' : `/${locale}/golf-courses`
  const playWithAProHref = locale === 'en' ? '/play-with-a-pro' : `/${locale}/play-with-a-pro`
  const itineraryHref = home.hero.primaryHref || ITINERARY_PLANNER_PATH
  const sharedPackageCta = null

  return (
    <>
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="/images/home-hero-mandarin.webp"
            alt="Golf day in Mallorca with PGA Advanced Professional Andy Griffiths"
            fill
            priority
            quality={88}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
          />
        </div>
        <div className="hero__bg"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">{home.hero.eyebrow}</p>
          <h1 className="serif-display hero__title">
            {home.hero.titleLines[0]}
            <br />
            {home.hero.titleLines[1]}
            {home.hero.emphasis ? (
              <>
                <br />
                <em style={{ fontStyle: 'italic', fontWeight: 400, opacity: 0.85 }}>{home.hero.emphasis}</em>
              </>
            ) : null}
          </h1>
          <div className="hero__cta-stack">
            <div className="hero__actions">
              <a href={itineraryHref} className="btn btn--gold">
                {home.hero.primaryCta}
              </a>
              <a href={golfCoursesHref} className="btn btn--outline-white">
                {home.hero.secondaryCta}
              </a>
            </div>
            <a href={playWithAProHref} className="hero__pwap-link">
              <span>Add Play With A Pro</span>
            </a>
          </div>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow">
            {home.intro.eyebrow}
          </p>
          <h2 className="serif-display">
            {home.intro.title}
          </h2>
          {home.intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            Looking for quick answers first? Start with{' '}
            <a href={golfCoursesHref}>all Mallorca golf courses</a>, then compare{' '}
            <a href={locale === 'en' ? '/guides/son-gual-review' : `/${locale}/guides/son-gual-review`}>Son Gual</a>{' '}
            and{' '}
            <a href={locale === 'en' ? '/guides/son-muntaner-review' : `/${locale}/guides/son-muntaner-review`}>Son Muntaner</a>{' '}
            before booking.
          </p>
          {home.intro.services ? (
            <div className="intro__services">
              {home.intro.services.map((service) => (
                <a key={service.title} href={localizePath(service.href, locale)} className="intro-service">
                  <strong>{service.title}</strong>
                  <span>{service.text}</span>
                  <em>{service.cta}</em>
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div className="intro__media" aria-label="Andy Griffiths">
          <Image
            src="/images/home-plan-play-mandarin.webp"
            alt="Andy Griffiths watching a golfer putt at Mandarin Oriental Mallorca"
            fill
            quality={90}
            sizes="(max-width: 900px) 100vw, 420px"
            style={{ objectFit: 'cover', objectPosition: '50% 46%' }}
          />
        </div>
      </section>


      {home.journey ? (
        <section className="journey">
          <div className="journey__header reveal">
            <p className="eyebrow">{home.journey.eyebrow}</p>
            <h2 className="serif-display">{home.journey.title}</h2>
          </div>
          <div className="journey__grid">
            {home.journey.items.map((item, index) => {
              const JOURNEY_IMAGES = [
                '/images/son-gual-card.webp',
                '/images/alcanada-card.webp',
                '/images/client-alcanada.webp',
              ]
              const img = JOURNEY_IMAGES[index]
              return (
                <a
                  key={item.title}
                  href={localizePath(item.href, locale)}
                  className={`journey-card journey-card--photo reveal${index ? ` reveal-delay-${index}` : ''}`}
                >
                  {img && (
                    <div className="journey-card__photo">
                      <Image
                        src={img}
                        alt={item.title}
                        fill
                        quality={88}
                        sizes="(max-width: 768px) 100vw, 420px"
                        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                      />
                      <div className="journey-card__overlay" />
                    </div>
                  )}
                  <div className="journey-card__body">
                    <span className="journey-card__num">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="journey-card__cta">{item.cta}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      ) : null}



      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">{home.experience.eyebrow}</p>
          <h2 className="serif-display">{home.experience.title}</h2>
          <span className="gold-rule"></span>
          {home.experience.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

        </div>
        <div className="what__right reveal reveal-delay-1">
          {home.experience.features && home.experience.features.length > 0 ? (
            home.experience.features.map((feature, index) => (
              <div key={feature.title} className="what__feature">
                <div className="what__feature-icon">{[FEATURE_ICONS.arranged, FEATURE_ICONS.coaching, FEATURE_ICONS.private, FEATURE_ICONS.access][index]}</div>
                <div className="what__feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3' }}>
              <Image
                src="/images/client-alcanada.webp"
                alt="Andy with a client at Alcanada golf course"
                fill
                quality={88}
                sizes="(max-width: 768px) 100vw, 560px"
                style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
              />
            </div>
          )}
        </div>
      </section>

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">{home.packages.eyebrow}</p>
          <h2 className="serif-display">{home.packages.title}</h2>
          <p>{home.packages.body}</p>
        </div>
        <div className="packages__grid packages__grid--paid" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {home.packages.items.map((pkg, index) => (
            <div key={`${pkg.eyebrow}-${pkg.name}-${index}`} className={`tier${pkg.featured ? ' tier--feature' : ''} reveal${index ? ` reveal-delay-${index}` : ''}`}>
              <p className="tier__name-small">{pkg.eyebrow}</p>
              <h3 className="tier__name">{pkg.name}</h3>
              {pkg.price && <p className="tier__price">{pkg.price}</p>}
              <div className="tier__rule"></div>
              <ul className="tier__features">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {pkg.note && <p className={`tier__note${pkg.featured ? ' tier__note--feature' : ''}`}>{pkg.note}</p>}
              {!sharedPackageCta ? (
                <a href={pkg.href || contactHref} className="tier__btn">
                  {pkg.cta}
                </a>
              ) : null}
            </div>
          ))}
        </div>
        {sharedPackageCta ? (
          <div className="packages__shared-cta reveal">
            <a href={sharedPackageCta.href || contactHref} className="tier__btn">
              {sharedPackageCta.cta}
            </a>
          </div>
        ) : null}
      </section>

      {/* Jo's quote - social proof after packages, before final CTA */}
      <section style={{ background: 'var(--pine)', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.45, marginBottom: '1.25rem' }}>
            &ldquo;{home.quote.text}&rdquo;
          </p>
          <p style={{ fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: "'Jost',sans-serif" }}>- {home.quote.attribution}</p>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">{home.faq.eyebrow}</p>
          <h2 className="serif-display">{home.faq.title}</h2>
          <p>{home.faq.intro}</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {home.faq.items.map((faq, index) => (
            <details key={faq.q} className="faq__item" open={index === 0}>
              <summary className="faq__q">
                {faq.q}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <div className="faq__a">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">{home.finalCta.eyebrow}</p>
          <h2 className="serif-display" style={{ color: '#fff' }}>
            {home.finalCta.title.split('. ').map((line, index, arr) => (
              <span key={index}>
                {line}
                {index < arr.length - 1 ? '.' : ''}
                {index < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p>{home.finalCta.body}</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;{home.finalCta.quote}&rdquo;</p>
          <a href={ITINERARY_PLANNER_PATH} className="btn btn--gold" style={{ fontSize: 11, padding: '15px 36px', letterSpacing: '0.18em' }}>
            {home.finalCta.primaryCta}
          </a>
          <a href="https://wa.me/34624466702" className="btn btn--outline-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {home.finalCta.secondaryCta}
          </a>
        </div>
      </section>
    </>
  )
}

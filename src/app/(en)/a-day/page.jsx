'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import PageLayout from '../../../components/PageLayout'
import StickyMobileCta from '../../../components/StickyMobileCta'
import { getOfferById, OFFER_IDS } from '../../../lib/offers-content.js'
import { DEFAULT_SOCIAL_IMAGE } from '../../../lib/page-metadata.js'
import { SITE_ORIGIN } from '../../../lib/site.js'

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function buildArticleSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A Day at Son Gual with Andy',
    description: "What actually happens when you spend a full day on Mallorca's finest course with a PGA Advanced Professional who plays it most weeks.",
    author: {
      '@type': 'Person',
      name: 'Andy Griffiths',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mr Mallorca Golf',
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: `${SITE_ORIGIN}/a-day`,
    image: DEFAULT_SOCIAL_IMAGE.url,
    about: [
      { '@type': 'Thing', name: 'Son Gual Golf Club' },
      { '@type': 'Thing', name: 'Private golf days in Mallorca' },
    ],
  }
}

function buildBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'A Day at Son Gual',
        item: `${SITE_ORIGIN}/a-day`,
      },
    ],
  }
}

export default function ADayPage() {
  const soloOffer = getOfferById(OFFER_IDS.solo)
  const groupOffer = getOfferById(OFFER_IDS.group)
  const stripViewportRef = useRef(null)
  const stripTrackRef = useRef(null)

  const dayPhotos = [
    { src: '/images/client-alcanada.webp', alt: 'Andy with a client at Alcanada', position: 'center 38%' },
    { src: '/images/son-antem-west-review-blog/son-antem-west-4.webp', alt: 'Andy with two guests on a play-with-a-pro day at Son Antem West', position: 'center 42%' },
    { src: '/images/client-group-alcanada.webp', alt: 'Group golf day with sea views', position: 'center 44%' },
    { src: '/images/client-group-valley.webp', alt: 'Group of four golfers in Mallorca', position: 'center 36%' },
    { src: '/images/client-son-gual.webp', alt: 'Andy and client at Son Gual', position: 'center 32%', variant: 'portrait' },
    { src: '/images/client-group-pond.webp', alt: 'Group day with water views', position: 'center 26%', variant: 'portrait' },
  ]
  const dayPhotosLoop = [...dayPhotos, ...dayPhotos]

  useEffect(() => {
    const viewport = stripViewportRef.current
    const track = stripTrackRef.current
    if (!viewport || !track) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let pausedUntil = 0
    let raf
    let halfWidth = 0

    const setHalfWidth = () => {
      halfWidth = track.scrollWidth / 2
    }

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1800
    }

    const normalizeLoopPosition = () => {
      if (!halfWidth) return
      if (viewport.scrollLeft >= halfWidth) viewport.scrollLeft -= halfWidth
      if (viewport.scrollLeft < 0) viewport.scrollLeft += halfWidth
    }

    const tick = () => {
      if (performance.now() > pausedUntil) {
        viewport.scrollLeft = Math.round(viewport.scrollLeft + 1)
        normalizeLoopPosition()
      }
      raf = requestAnimationFrame(tick)
    }

    setHalfWidth()
    window.addEventListener('resize', setHalfWidth)

    viewport.addEventListener('pointerdown', pauseBriefly)
    viewport.addEventListener('wheel', pauseBriefly, { passive: true })
    viewport.addEventListener('touchstart', pauseBriefly, { passive: true })
    viewport.addEventListener('scroll', normalizeLoopPosition, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', setHalfWidth)
      viewport.removeEventListener('pointerdown', pauseBriefly)
      viewport.removeEventListener('wheel', pauseBriefly)
      viewport.removeEventListener('touchstart', pauseBriefly)
      viewport.removeEventListener('scroll', normalizeLoopPosition)
    }
  }, [])

  return (
    <PageLayout>
      <JsonLd data={buildArticleSchema()} />
      <JsonLd data={buildBreadcrumbSchema()} />
      {/* HERO */}
      <section className="hero a-day-hero">
        <div className="hero__content">
          <p className="hero__eyebrow">A Full Day on Course · Mallorca</p>
          <h1 className="serif-display hero__title a-day-hero__title">
            What &ldquo;Play with a Pro&rdquo;
            <br />
            <em>actually looks like.</em>
          </h1>
          <p className="a-day-hero__lead">
            What a full day on course actually looks like. How it changes what you see in your game.
            What people take home that they didn't expect.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '1.5rem' }}>
            <Link href="/play-with-a-pro#packages" className="btn btn--gold">
              See pricing
            </Link>
            <Link href="/play-with-a-pro" className="btn btn--outline-white">
              More info
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="a-day-quote">
        <div className="a-day-quote__inner">
          <p className="serif-display a-day-quote__text">
            &ldquo;After just 18 holes together, I&rsquo;ve discovered a new ceiling to my
            potential.&rdquo;
          </p>
          <p className="a-day-quote__credit">
            Jo
          </p>
        </div>
      </section>

      {/* NARRATIVE */}
      <article className="a-day-article">

        {/* WHY PLAY WITH A PRO */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">Why play with a pro</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              Seeing your decisions. Seeing your mistakes. Asking the right questions.
            </h2>
            <p className="a-day-section__copy">
              Playing alone, you can miss what&rsquo;s actually happening. A shot that felt solid but came off the club slightly different. A decision that worked out but was based on incomplete information. A habit you&rsquo;ve built over weeks that you don&rsquo;t see because you&rsquo;re inside it.
            </p>
            <p className="a-day-section__copy">
              When I&rsquo;m there, I see those things. Not to criticise. To show you what&rsquo;s actually possible if the decision changes. That&rsquo;s the product. Clarity about what you&rsquo;re doing and why it matters.
            </p>
            <p className="a-day-section__copy">
              A lot of coaching is about swing positions and mechanics. This day is different. It&rsquo;s about the low-hanging fruit. What&rsquo;s the one thing in your shot selection or course management that, if it changes, makes the biggest difference. Practice types that actually work for how you learn. Questions about your own game that a practice range can&rsquo;t answer. Not a full overhaul. Just the clarity to know what to work on and how.
            </p>
          </div>
        </section>

        {/* QUESTIONS BEFORE YOU COME */}
        <section className="a-day-section a-day-section--cream">
          <div className="a-day-section__inner">
            <p className="eyebrow">Before the day</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              What if I play badly. I haven&rsquo;t played for a long time.
            </h2>
            <p className="a-day-section__copy">
              I hear this more than anything else. The concern is real. You book a day, you show up, and your swing feels unfamiliar. Your short game is rusty. You&rsquo;re reading the fairway wrong. None of that is the point.
            </p>
            <p className="a-day-section__copy">
              A day like this isn&rsquo;t measured against your handicap or your best round. It&rsquo;s measured against what changes in how you see the game. Adam played since he was five, figured he had the fundamentals down. One day on course shifted his whole approach to shot selection. Jo hadn&rsquo;t played in years. The day opened something up for him that a week at a practice range could not.
            </p>
            <p className="a-day-section__copy">
              The score matters less than the questions it provokes. What was the right club there. How would I have played that differently. What do I actually need to work on when I get home. Those are the things that stay.
            </p>
            <p className="a-day-section__copy">
              Before we go anywhere near the first tee, we sit down and talk. Your game, what you&rsquo;ve been working on, what&rsquo;s been frustrating you, what a good day looks like from where you&rsquo;re standing. This conversation shapes everything that happens next. It&rsquo;s not a questionnaire. It&rsquo;s how I understand what you actually need.
            </p>
          </div>
        </section>

        {/* GOLFER CAROUSEL */}
        <div className="pwap-day-strip" aria-label="Play With A Pro round photos" ref={stripViewportRef}>
          <div className="pwap-day-strip__track" ref={stripTrackRef}>
            {dayPhotosLoop.map((photo, index) => (
              <figure
                key={`${photo.src}-${index}`}
                className={`pwap-day-strip__card${photo.variant === 'portrait' ? ' pwap-day-strip__card--portrait' : ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 920px) 78vw, 360px"
                  style={{ objectFit: 'cover', objectPosition: photo.position || 'center center' }}
                />
              </figure>
            ))}
          </div>
        </div>

        {/* THE COURSE AND DECISIONS */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">During the round</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              The decisions here are real.
            </h2>
            <p className="a-day-section__copy">
              The course is chosen to match your game. A proper test, but not unfair. Wind, conditions, narrow fairways, water—the decisions you make change with what's in front of you, and getting them right or wrong matters. That&rsquo;s why playing with someone matters.
            </p>
            <p className="a-day-section__copy">
              On a range, a tip about club selection or alignment is abstract. You hear it, you file it, you move to the next shot. On course, when the wind is pushing, the fairway is narrow, and the score is real, the same information becomes concrete. You feel it. That difference is what makes things stick.
            </p>
            <p className="a-day-section__copy">
              The coaching arrives at the right moment. On the tee into the wind where the decision is contested. On the approach where club selection changes the hole. On the putt where reading the break from the right side makes one more shot possible. Not a running commentary. Just the observation that changes the hole.
            </p>
            <p className="a-day-section__copy">
              Finlay said it best: &ldquo;The insight into what calculations go into each shot has helped me improve my decision making immensely.&rdquo; That&rsquo;s what you take from a full day on a course where the decisions matter.
            </p>
          </div>
        </section>

        {/* MIDDLE PULL QUOTE */}
        <div className="a-day-midquote">
          <div className="a-day-quote__inner">
            <p className="serif-display a-day-quote__text">
              &ldquo;The insight into what calculations go into each shot has helped me improve my
              decision making immensely.&rdquo;
            </p>
            <p className="a-day-quote__credit">
              Finlay
            </p>
          </div>
        </div>

        {/* LUNCH AND REFLECTION */}
        <section className="a-day-section a-day-section--cream">
          <div className="a-day-section__inner">
            <p className="eyebrow">At lunch</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              Where the day gets talked through properly.
            </h2>
            <p className="a-day-section__copy">
              Lunch is unhurried. We talk through the round. What clicked, what didn&rsquo;t, what to take home. Most people realise something shifts in how they see the game. Not a list of fixes to work on. Something closer to clearer decisions, less noise in your head about the shot. A better sense of what you&rsquo;re actually capable of.
            </p>
            <p className="a-day-section__copy">
              Jo put it simply: &ldquo;After just 18 holes together, I&rsquo;ve discovered a new ceiling to my potential.&rdquo; That&rsquo;s the shift that happens when the decisions are real and someone who sees the game clearly is watching.
            </p>
            <p className="a-day-section__copy">
              The day doesn&rsquo;t end with a handshake at the 18th. It ends when you&rsquo;re done talking. That&rsquo;s the pace we work at.
            </p>
          </div>
        </section>

        {/* WHAT CHANGES */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">Afterward</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              The gap between what you expected and what you got.
            </h2>
            <p className="a-day-section__copy">
              Most coaching produces a list. Things to practise, positions to find, habits to break. A day like this produces something different. Because the decisions were real and the shots had consequences, what you learned is stored differently. It stays.
            </p>
            <p className="a-day-section__copy">
              The score card will show what it shows. The real product is the shift in how you approach the next round. The questions you ask before you play. The reads you trust. The decisions you make with more clarity because you made them on a course where they mattered.
            </p>
          </div>
        </section>

      </article>

      {/* WHAT'S INCLUDED */}
      <div className="a-day-facts">
        <div className="a-day-facts__grid">
          {[
            { label: 'Format', value: '18 holes, full day' },
            { label: 'Course selection', value: 'Matched to your game and handicap' },
            { label: "What's included", value: 'Course, tee time, coaching, strategy' },
            { label: 'Lunch', value: 'Included and unhurried' },
            { label: 'Duration', value: 'Typically 5–6 hours' },
            { label: 'Day rate', value: `${soloOffer.priceDisplay} solo · ${groupOffer.priceDisplay} group (course fee additional)` },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="a-day-facts__label">
                {label}
              </p>
              <p className="serif-display a-day-facts__value">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/golf-courses" className="btn btn--dark">
            See which courses work for you
          </Link>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play</p>
          <h2 className="serif-display cta-final__heading-light">
            Tell me when you&rsquo;re coming.
          </h2>
          <p>
            Tell me your dates, how many of you there are, and what you&rsquo;re looking for. I come
            back personally within 24 hours.
          </p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/contact" className="btn btn--gold cta-final__primary-lg">
            Get in touch
          </Link>
          <Link href="/play-with-a-pro" className="btn btn--outline-white">
            See pricing →
          </Link>
        </div>
      </section>

      <StickyMobileCta
        primaryHref="/contact"
        primaryLabel="Get in touch"
        secondaryHref="https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20a%20day%20at%20Son%20Gual."
        secondaryLabel="Message on WhatsApp"
      />
    </PageLayout>
  )
}

import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import { getOfferById, OFFER_IDS } from '../../lib/offers-content.js'

export const metadata = {
  title: 'A Day at Son Gual with Andy | Mr Mallorca Golf',
  description:
    "What actually happens when you spend a full day on Mallorca's finest course with a PGA Advanced Professional who plays it most weeks. From the drive up to the last green.",
}

export default function ADayPage() {
  const soloOffer = getOfferById(OFFER_IDS.solo)
  const groupOffer = getOfferById(OFFER_IDS.group)

  return (
    <PageLayout>
      {/* HERO */}
      <section className="hero a-day-hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Son Gual · Palma · A Full Day</p>
          <h1 className="serif-display hero__title a-day-hero__title">
            A Day at Son Gual
            <br />
            <em>with Andy.</em>
          </h1>
          <p className="a-day-hero__lead">
            What actually happens from the drive up to the last green — and what most people take
            home that they didn't expect.
          </p>
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
            Jo — after a day at Son Gual
          </p>
        </div>
      </section>

      {/* NARRATIVE */}
      <article className="a-day-article">

        {/* THE APPROACH */}
        <section className="a-day-section a-day-section--cream">
          <div className="a-day-section__inner">
            <p className="eyebrow">The approach</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              The drive up tells you something about what&rsquo;s coming.
            </h2>
            <p className="a-day-section__copy">
              Son Gual sits eleven kilometres south of Palma. The access road climbs through low
              scrubland and then opens out, and before you&rsquo;ve stepped out of the car you can
              see the layout of the course from the high point of the car park. It&rsquo;s one of
              those rare moments on a golf course where the scale of the thing becomes clear all at
              once — you realise this is going to take the full day, and that&rsquo;s exactly what
              it deserves.
            </p>
            <p className="a-day-section__copy">
              We meet at the clubhouse. There&rsquo;s no rush. Before we go anywhere near the first
              tee, we sit down and talk — your game, what you&rsquo;ve been working on, what&rsquo;s
              been frustrating you, what a good day looks like from where you&rsquo;re standing.
              This isn&rsquo;t a questionnaire you fill in. It&rsquo;s a conversation, and it shapes
              everything that happens over the next five hours.
            </p>
            <p className="a-day-section__copy">
              Most people come in expecting to be assessed. What they find instead is that they&rsquo;re
              being listened to. The difference is significant.
            </p>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <div className="a-day-image-break">
          <div className="a-day-image-break__panel a-day-image-break__panel--walk" />
          <div className="a-day-image-break__panel a-day-image-break__panel--chip" />
        </div>

        {/* THE ROUND */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">The round</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              The coaching doesn&rsquo;t feel like coaching.
            </h2>
            <p className="a-day-section__copy">
              Son Gual has its own wind. Thomas Himmel&rsquo;s 2007 design is built into an exposed
              plateau, and the prevailing breeze changes the calculus on almost every hole. The
              decisions you have to make here are real ones — getting them right or wrong matters.
            </p>
            <p className="a-day-section__copy">
              The coaching that happens during a round here isn&rsquo;t a running commentary. It&rsquo;s
              the right observation at the right moment — on the tee into the wind, the approach where
              club selection is genuinely contested, the putt where reading the slope from the right
              side makes a one-putt possible. The observations arrive when they can still change the
              hole.
            </p>
            <p className="a-day-section__copy">
              What most guests notice is that the insight lands differently on a course. On a range,
              a tip is abstract. On the course, when the shot is real and the score matters, the same
              information becomes concrete. You feel the difference immediately.
            </p>
            <p className="a-day-section__copy">
              The closing stretch from the 15th through the 18th is among the finest in European golf.
              By the time you reach it, you have the course in your body.
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

        {/* LUNCH */}
        <section className="a-day-section a-day-section--cream">
          <div className="a-day-section__inner">
            <p className="eyebrow">The lunch</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              The best part of the day, according to almost everyone.
            </h2>
            <p className="a-day-section__copy">
              Son Gual&rsquo;s restaurant sits above the course with a view across the layout
              you&rsquo;ve just played. Lunch is unhurried — this is Mallorca, not a corporate golf
              day in Surrey — and it&rsquo;s where the round gets talked through properly. What
              clicked, what didn&rsquo;t, what to take home.
            </p>
            <p className="a-day-section__copy">
              It&rsquo;s also where most people realise that what they got from the day is harder to
              describe than they expected. Not a list of fixes. Something closer to a change in how
              they think about the game — clearer decisions, less noise, a better sense of what
              they&rsquo;re actually capable of.
            </p>
            <p className="a-day-section__copy">
              The day doesn&rsquo;t end with a handshake at the 18th. It ends when you&rsquo;re done.
              That&rsquo;s the pace we work at.
            </p>
          </div>
        </section>

        {/* WHAT YOU TAKE HOME */}
        <section className="a-day-section a-day-section--white">
          <div className="a-day-section__inner">
            <p className="eyebrow">What you take home</p>
            <div className="a-day-rule" />
            <h2 className="serif-display a-day-section__title">
              Not a swing tip. A different way of thinking about the game.
            </h2>
            <p className="a-day-section__copy">
              Most coaching produces a list — things to practise, positions to find, habits to break.
              A day like this produces something different. Because the decisions were real and the
              shots had consequences, what you learned is stored differently. It stays.
            </p>
            <p className="a-day-section__copy">
              Adam had played golf since he was five and was sure he had the fundamentals covered.
              One session changed that view — not because the coaching was brutal, but because seeing
              it happen on a real course, in real conditions, made it impossible to ignore.
            </p>
            <p className="a-day-section__copy">
              That&rsquo;s the product. Not 18 holes. The gap between what you expected and what you
              actually got.
            </p>
          </div>
        </section>

      </article>

      {/* COURSE FACTS */}
      <div className="a-day-facts">
        <div className="a-day-facts__grid">
          {[
            { label: 'Course', value: 'Son Gual Golf Club' },
            { label: 'Location', value: 'Palma, 11 km south' },
            { label: 'Design', value: 'Thomas Himmel, 2007' },
            { label: 'Par', value: '72 · Championship' },
            { label: 'Green fee', value: 'Typically €109–165 per person' },
            { label: 'Day rate', value: `${soloOffer.priceDisplay} solo all inclusive · ${groupOffer.priceDisplay} group + green fees` },
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
    </PageLayout>
  )
}

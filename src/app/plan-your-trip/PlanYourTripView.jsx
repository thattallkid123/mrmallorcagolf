'use client'

import Link from 'next/link'
import ItineraryPlanner from '../itinerary/ItineraryPlanner'

export default function PlanYourTripView() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="pyt-hero">
        <div className="pyt-hero__inner">
          <p className="pyt-eyebrow">Plan Your Mallorca Golf Trip</p>
          <h1 className="pyt-hero__title">Start with the courses. Let me build the trip properly.</h1>
          <p className="pyt-hero__body">
            The free tool is a simple starting point. It helps you see which Mallorca courses
            might suit your group. The professional planning service is where the real trip
            gets built: base, route, number of rounds, tee times, buggies, rentals, and the
            details around the golf.
          </p>
          <div className="pyt-option-strip" aria-label="Plan Your Trip options">
            <a href="#free-course-finder" className="pyt-option-card">
              <span>Basic</span>
              <strong>Free course finder</strong>
              <em>On-site tool. A shortlist only.</em>
            </a>
            <a href="#professional-planning" className="pyt-option-card pyt-option-card--gold">
              <span>Professional</span>
              <strong>Paid trip planning</strong>
              <em>The real service: route, bookings, base, and add-ons.</em>
            </a>
          </div>
        </div>
      </section>

      {/* ── BASIC: FREE TOOL ── */}
      <section className="pyt-section pyt-section--light" id="free-course-finder">
        <div className="pyt-section__inner pyt-section__inner--wide">
          <div className="pyt-tier-header">
            <span className="pyt-tier-badge">Basic</span>
            <h2 className="pyt-tier-title">Use the free course finder</h2>
            <p className="pyt-tier-body">
              Answer a few questions and the tool will suggest courses to consider based on
              your group, level, region, and budget. It is not a route, a booking plan, or a
              day-by-day itinerary. Use it to get your bearings before asking me to plan the
              trip properly.
            </p>
          </div>
          <ItineraryPlanner embedded />
        </div>
      </section>

      {/* ── PROFESSIONAL: PAID ── */}
      <section className="pyt-section pyt-section--dark" id="professional-planning">
        <div className="pyt-section__inner">
          <div className="pyt-tier-header">
            <span className="pyt-tier-badge pyt-tier-badge--gold">Professional</span>
            <h2 className="pyt-tier-title">Let me plan it properly</h2>
            <p className="pyt-tier-body">
              Send me your dates, group size, and what you are hoping for. I will recommend
              the right courses for your game, advise on where to base yourself and why,
              work out the routing and number of rounds, book the tee times, arrange buggies
              and club rentals, and suggest dining options that work around the golf. Price
              on enquiry.
            </p>
          </div>

          <ul className="pyt-includes">
            <li>Course recommendations matched to your game, group, and budget</li>
            <li>Where to base yourself and why</li>
            <li>Trip routing and number of rounds</li>
            <li>Tee times booked and confirmed</li>
            <li>Buggies and club rentals arranged</li>
            <li>Dining suggestions built around the schedule</li>
            <li>Play With A Pro available as an add-on at any stage</li>
          </ul>

          <div className="pyt-pro-cta">
            <p className="pyt-pro-cta__note">
              Send your dates, group size, handicap range, and any courses already on your
              list. I will come back with the right next step and a quote.
            </p>
            <Link href="/contact" className="pyt-pro-cta__btn">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── PWAP ADD-ON ── */}
      <section className="pyt-section pyt-section--pine">
        <div className="pyt-section__inner pyt-addon">
          <div className="pyt-addon__text">
            <span className="pyt-eyebrow pyt-eyebrow--light">Add-on available at any level</span>
            <h2 className="pyt-addon__title">Play With A Pro</h2>
            <p className="pyt-addon__body">
              A private day on course with me alongside you for all 18 holes. Works as a
              standalone booking or as part of a planned trip. One course, chosen for your
              game, with local course management and coaching woven into the round.
            </p>
            <p className="pyt-addon__price">Solo from <strong>€495</strong> &nbsp;&middot;&nbsp; Groups from <strong>€950</strong> &nbsp;&middot;&nbsp; Green fees additional</p>
          </div>
          <div className="pyt-addon__action">
            <Link href="/play-with-a-pro" className="pyt-addon__btn">
              See Play With A Pro
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

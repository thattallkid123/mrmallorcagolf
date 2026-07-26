import PageLayout from '../../../components/PageLayout'
import Link from 'next/link'
import ReviewBadge from '../../../components/ReviewBadge'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'en', {
  title: 'Free Mallorca Golf Planning Tools',
  description: 'Free tools to plan your Mallorca golf trip: course finder, handicap checker, course comparison, cost calculator, hotel recommender, and day builder.',
  robots: { index: true, follow: true },
})

const TOOLS = [
  {
    href: '/tools/course-selector',
    eyebrow: 'Choose Your Course',
    title: 'Course Finder',
    desc: 'Eight questions. A shortlist of three courses matched to your handicap, group, budget, and what you want from a round.',
    time: '< 1 min',
    cta: 'Find my courses',
  },
  {
    href: '/tools/green-fees',
    eyebrow: 'Choose Your Course',
    title: 'Browse All 24 Courses',
    desc: 'Every course in one table: green fees, buggy costs, walking rules, par, difficulty and handicap limits, with Andy\'s verdict. Or put two or three head to head.',
    time: '< 1 min',
    cta: 'Compare courses',
  },
  {
    href: '/tools/handicap-checker',
    eyebrow: 'Check Access',
    title: 'Check Your Handicap',
    desc: 'Enter your handicap and group size. See instantly which of Mallorca\'s courses you can book, which need a certificate, and where Andy can arrange access.',
    time: '< 1 min',
    cta: 'Check my access',
  },
  {
    href: '/tools/golf-day-builder',
    eyebrow: 'Build Your Trip',
    title: 'Day Planner',
    desc: 'Eight questions. A complete day plan: course, tee time, buggy or walk, where to eat. Built around your group and where you\'re based.',
    time: '< 2 min',
    cta: 'Build my day',
  },
  {
    href: '/tools/golf-cost-calculator',
    eyebrow: 'Build Your Trip',
    title: 'Trip Estimator',
    desc: 'Three steps. A realistic cost estimate for your whole trip: green fees, accommodation, transport, dining, and a suggested course mix.',
    time: '< 2 min',
    cta: 'Estimate my trip',
  },
  {
    href: '/tools/hotel-recommender',
    eyebrow: 'Build Your Trip',
    title: 'Find Hotels',
    desc: 'Six questions. A shortlist of hotels matched to your courses, group size, and travel style. Covers the main areas of the island.',
    time: '< 1 min',
    cta: 'Find hotels',
  },
]

export default function ToolsIndex() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <style>{`
        .ti-hero {
          background: #2D4A3E;
          color: #F7F4EF;
          padding: 100px 24px 28px;
          text-align: center;
        }
        .ti-eyebrow {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #CBA968;
          margin-bottom: 10px;
        }
        .ti-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          line-height: 1.1;
          color: #F7F4EF;
          max-width: 640px;
          margin: 0 auto;
        }
        .ti-sub {
          display: block;
        }
        .ti-carousel {
          max-width: 1120px;
          margin: 0 auto;
          padding: 40px clamp(20px, 4vw, 40px) 24px;
        }
        .ti-carousel__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }
        .ti-carousel__label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #B8973C;
        }
        .ti-carousel__hint {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #C4BAA9;
        }
        .ti-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 6px 0 18px;
        }
        @media (max-width: 900px) { .ti-track { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .ti-track { grid-template-columns: 1fr; } }
        .ti-card {
          min-height: 260px;
          background: #fff;
          border: 1px solid rgba(26,25,22,0.09);
          border-radius: 18px;
          padding: 30px 28px;
          box-shadow: 0 4px 24px rgba(18,17,15,0.06);
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          color: inherit;
          transition: transform .3s cubic-bezier(0.22,1,0.36,1), box-shadow .3s;
        }
        .ti-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 48px rgba(18,17,15,0.11);
        }
        .ti-card-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #B8973C;
          margin-bottom: 10px;
        }
        .ti-card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 500;
          color: #1A1916;
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .ti-card.ti-card--zh .ti-card-title {
          font-weight: 400;
        }
        .ti-card-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: .93rem;
          line-height: 1.65;
          color: #8A7F74;
          margin-bottom: 20px;
          flex: 1;
        }
        .ti-card-footer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: auto;
        }
        .ti-card-cta {
          display: inline-block;
          background: #2D4A3E;
          color: #F7F4EF;
          font-family: 'Jost', sans-serif;
          font-size: .82rem;
          font-weight: 400;
          letter-spacing: .06em;
          padding: 11px 24px;
          border-radius: 99px;
          text-decoration: none;
          transition: background .2s;
        }
        .ti-card-cta:hover { background: #3D6455; }
        .ti-card-time {
          font-family: 'Jost', sans-serif;
          font-size: .75rem;
          color: #C4BAA9;
          letter-spacing: .04em;
        }
        .ti-andy-wrap {
          max-width: 760px;
          margin: 0 auto;
          padding: 12px 20px 80px;
        }
        .ti-divider {
          height: 1px;
          background: #EDE9E1;
          margin: 24px 0 36px;
        }
        .ti-andy {
          background: #F7F4EF;
          border-radius: 16px;
          padding: 28px 28px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .ti-andy-bar {
          width: 3px;
          border-radius: 2px;
          background: #B8973C;
          flex-shrink: 0;
          align-self: stretch;
        }
        .ti-andy-label {
          font-family: 'Jost', sans-serif;
          font-size: .68rem;
          font-weight: 500;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #B8973C;
          margin-bottom: 6px;
        }
        .ti-andy-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.08rem;
          font-style: italic;
          color: #2C2A27;
          line-height: 1.65;
        }
      `}</style>

      <section className="ti-hero">
        <span className="ti-eyebrow">Free tools</span>
        <h1 className="ti-h1">Plan your Mallorca golf trip</h1>
        <p className="ti-sub">Free tools to plan your Mallorca golf trip. No sign-up needed. Each takes under two minutes: a course shortlist, a handicap check, a green-fee comparison, a cost estimate, a hotel match, or a full day plan.</p>
      </section>

      <section className="ti-carousel">
        <div className="ti-carousel__header">
          <span className="ti-carousel__label">Choose a tool</span>
        </div>
        <div className="ti-track" aria-label="Free tools carousel">
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} className={`ti-card${tool.zh ? ' ti-card--zh' : ''}`}>
              <div className="ti-card-eyebrow">{tool.eyebrow}</div>
              <div className="ti-card-title">{tool.title}</div>
              <div className="ti-card-desc">{tool.desc}</div>
              <div className="ti-card-footer">
                <span className="ti-card-cta">{tool.cta}</span>
                <span className="ti-card-time">{tool.zh ? tool.time : `Takes ${tool.time}`}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="ti-andy-wrap">
        <div className="ti-divider" />

        <div className="ti-andy">
          <div className="ti-andy-bar" />
          <div>
            <div className="ti-andy-label">Andy Griffiths · UK PGA Advanced Professional</div>
            <p className="ti-andy-text">
              These tools give you a starting point: a shortlist, an estimate, a plan. When you're ready to make it real, I confirm tee times, arrange access at members-only courses, and build the trip around your golf. Nothing to pay until you decide to book.
            </p>
            <div style={{ marginTop: 14 }}>
              <ReviewBadge variant="text" theme="light" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

import PageLayout from '../../../components/PageLayout'
import Link from 'next/link'
import TrustpilotBadge from '../../../components/TrustpilotBadge'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'en', {
  title: 'Free Mallorca Golf Planning Tools | Mr Mallorca Golf',
  description: 'Free tools to plan your Mallorca golf trip: course finder, handicap checker, cost calculator, hotel recommender, and day builder.',
  robots: { index: true, follow: true },
})

const TOOLS = [
  {
    href: '/tools/course-selector',
    eyebrow: 'Course matching',
    title: 'Find your Mallorca course',
    desc: 'Eight questions. A shortlist of three courses matched to your handicap, group, budget, and what you want from a round.',
    time: '< 1 min',
    cta: 'Find my courses',
  },
  {
    href: '/tools/handicap-checker',
    eyebrow: 'Access check',
    title: 'Can I play it?',
    desc: 'Enter your handicap and group size. See instantly which of Mallorca\'s courses you can book, which need a certificate, and where Andy can arrange access.',
    time: '< 1 min',
    cta: 'Check my access',
  },
  {
    href: '/tools/green-fees',
    eyebrow: 'Price comparison',
    title: 'Green fee comparison',
    desc: 'All 24 courses in one honest table: approximate green fees, buggy costs, walking rules and handicap limits, with a one-line verdict from Andy on each.',
    time: '< 1 min',
    cta: 'Compare green fees',
  },
  {
    href: '/tools/golf-day-builder',
    eyebrow: 'Day planning',
    title: 'Golf day builder',
    desc: 'Eight questions. A complete day plan: course, tee time, buggy or walk, where to eat. Built around your group and where you\'re based.',
    time: '< 2 min',
    cta: 'Build my day',
  },
  {
    href: '/tools/golf-cost-calculator',
    eyebrow: 'Budget planning',
    title: 'Golf trip cost calculator',
    desc: 'Three steps. A realistic cost estimate for your whole trip: green fees, accommodation, transport, dining, and a suggested course mix.',
    time: '< 2 min',
    cta: 'Estimate my trip',
  },
  {
    href: '/tools/hotel-recommender',
    eyebrow: 'Hotel matching',
    title: 'Golf hotel recommender',
    desc: 'Six questions. A shortlist of hotels matched to your courses, group size, and travel style. Covers the main areas of the island.',
    time: '< 1 min',
    cta: 'Find hotels',
  },
  {
    href: '/zh/tools/course-selector',
    eyebrow: '中文工具',
    title: '马略卡高尔夫球场推荐',
    desc: '七个问题，找到最适合你的马略卡岛高尔夫球场。根据你的水平、预算和风格量身推荐。',
    time: '不到1分钟',
    cta: '开始推荐',
    zh: true,
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
          display: none;
        }
        .ti-carousel {
          padding: 40px 0 24px clamp(20px, 4vw, 40px);
          overflow: hidden;
        }
        .ti-carousel__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-right: clamp(20px, 4vw, 40px);
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
          display: flex;
          gap: 18px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding: 6px clamp(20px, 4vw, 40px) 18px 0;
          overscroll-behavior-x: contain;
          touch-action: pan-x;
        }
        .ti-track::-webkit-scrollbar { display: none; }
        .ti-card {
          flex: 0 0 clamp(240px, 18vw, 270px);
          min-height: 280px;
          scroll-snap-align: start;
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
        @media (max-width: 600px) {
          .ti-card { flex: 0 0 82vw; }
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
        <p className="ti-sub">Five free tools. No sign-up needed. Each one takes under two minutes: a course shortlist, a cost estimate, a hotel match, or a full day plan.</p>
      </section>

      <section className="ti-carousel">
        <div className="ti-carousel__header">
          <span className="ti-carousel__label">Choose a tool</span>
          <span className="ti-carousel__hint">{'<- scroll ->'}</span>
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
              <TrustpilotBadge variant="text" theme="light" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

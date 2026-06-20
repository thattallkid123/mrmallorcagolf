import PageLayout from '../../../components/PageLayout'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Free Mallorca Golf Planning Tools | Mr Mallorca Golf',
  description: 'Five free tools to plan your Mallorca golf trip: course finder, cost calculator, hotel recommender, day builder, and Chinese course selector.',
  robots: { index: true, follow: true },
}

const TOOLS = [
  {
    href: '/tools/course-selector',
    eyebrow: 'Course matching',
    title: 'Find your Mallorca course',
    desc: 'Eight questions. A shortlist of three courses matched to your handicap, group, budget, and what you want from a round.',
    time: '< 1 min',
    cta: 'Find my courses',
    accent: '#2D4A3E',
  },
  {
    href: '/tools/golf-cost-calculator',
    eyebrow: 'Budget planning',
    title: 'Golf trip cost calculator',
    desc: 'Three steps. A realistic cost estimate for your whole trip — green fees, accommodation, transport, dining — with a suggested course mix.',
    time: '< 2 min',
    cta: 'Estimate my trip',
    accent: '#B8973C',
  },
  {
    href: '/tools/hotel-recommender',
    eyebrow: 'Hotel matching',
    title: 'Golf hotel recommender',
    desc: 'Six questions. A shortlist of hotels matched to your courses, group size, and travel style. Covers the main areas of the island.',
    time: '< 1 min',
    cta: 'Find hotels',
    accent: '#2D4A3E',
  },
  {
    href: '/tools/golf-day-builder',
    eyebrow: 'Day planning',
    title: 'Golf day builder',
    desc: 'Eight questions. A complete day plan — course, tee time, buggy or walk, where to eat — built around your group and the part of the island you\'re based in.',
    time: '< 2 min',
    cta: 'Build my day',
    accent: '#B8973C',
  },
  {
    href: '/zh/tools/course-selector',
    eyebrow: '中文工具',
    title: '马略卡高尔夫球场推荐',
    desc: '七个问题，找到最适合你的马略卡岛高尔夫球场。根据你的水平、预算和风格量身推荐。',
    time: '< 1 分钟',
    cta: '开始推荐',
    accent: '#2D4A3E',
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
          padding: 64px 24px 56px;
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
          margin-bottom: 16px;
        }
        .ti-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          line-height: 1.1;
          color: #F7F4EF;
          max-width: 640px;
          margin: 0 auto;
        }
        .ti-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(247,244,239,0.78);
          max-width: 500px;
          margin: 18px auto 0;
        }
        .ti-wrap {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 18px 80px;
        }
        .ti-grid {
          display: grid;
          gap: 20px;
        }
        .ti-card {
          background: #fff;
          border: 1px solid rgba(26,25,22,0.09);
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 4px 24px rgba(18,17,15,0.06);
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          color: inherit;
          transition: transform .3s cubic-bezier(0.22,1,0.36,1), box-shadow .3s;
        }
        .ti-card:hover {
          transform: translateY(-3px);
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
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
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
        .ti-divider {
          height: 1px;
          background: #EDE9E1;
          margin: 40px 0 36px;
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
        <p className="ti-sub">Five free tools. No sign-up needed. Each one takes under two minutes and gives you something useful — a course shortlist, a cost estimate, a hotel match, or a full day plan.</p>
      </section>

      <div className="ti-wrap">
        <div className="ti-grid">
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} className="ti-card">
              <div className="ti-card-eyebrow">{tool.eyebrow}</div>
              <div className="ti-card-title">{tool.title}</div>
              <div className="ti-card-desc">{tool.desc}</div>
              <div className="ti-card-footer">
                <span className="ti-card-cta">{tool.cta}</span>
                <span className="ti-card-time">Takes {tool.time}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="ti-divider" />

        <div className="ti-andy">
          <div className="ti-andy-bar" />
          <div>
            <div className="ti-andy-label">Andy Griffiths · UK PGA Advanced Professional</div>
            <p className="ti-andy-text">
              These tools give you a starting point — a shortlist, an estimate, a plan. When you're ready to make it real, I confirm tee times, arrange access at members-only courses, and build the trip around your golf. Everything is free until you decide to book.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

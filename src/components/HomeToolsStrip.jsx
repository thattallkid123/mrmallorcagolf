import Link from 'next/link'
import ReviewBadge from './ReviewBadge'

const STRIP_TOOLS = [
  {
    href: '/tools/course-selector',
    label: 'Course finder',
    desc: 'A shortlist of three courses matched to your group.',
  },
  {
    href: '/tools/handicap-checker',
    label: 'Can I play it?',
    desc: 'Check handicap limits and certificate rules for every course.',
  },
  {
    href: '/tools/golf-cost-calculator',
    label: 'Trip cost calculator',
    desc: 'A realistic estimate for green fees, hotel, transport, and dining.',
  },
  {
    href: '/tools/hotel-recommender',
    label: 'Hotel recommender',
    desc: 'Where to stay, matched to the courses you want to play.',
  },
]

export default function HomeToolsStrip() {
  return (
    <aside className="home-tools-strip">
      <style>{`
        .home-tools-strip {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }
        .hts-eyebrow {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #B8973C;
          margin-bottom: 10px;
        }
        .hts-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          line-height: 1.15;
          color: #1A1916;
          max-width: 620px;
          margin: 0 auto 26px;
        }
        .hts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }
        @media (max-width: 900px) {
          .hts-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .hts-grid { grid-template-columns: 1fr; }
        }
        .hts-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #fff;
          border: 1px solid rgba(26,25,22,0.09);
          border-radius: 14px;
          padding: 20px 18px;
          text-align: left;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 3px 16px rgba(18,17,15,0.05);
          transition: transform .25s cubic-bezier(0.22,1,0.36,1), box-shadow .25s;
        }
        .hts-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(18,17,15,0.10);
        }
        .hts-card-label {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #1A1916;
          line-height: 1.2;
        }
        .hts-card-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: .86rem;
          line-height: 1.55;
          color: #8A7F74;
        }
        .hts-card-go {
          margin-top: auto;
          font-family: 'Jost', sans-serif;
          font-size: .78rem;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #B8973C;
          padding-top: 8px;
        }
        .hts-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .hts-all {
          display: inline-block;
          background: #2D4A3E;
          color: #F7F4EF;
          font-family: 'Jost', sans-serif;
          font-size: .84rem;
          letter-spacing: .06em;
          padding: 12px 28px;
          border-radius: 99px;
          text-decoration: none;
          transition: background .2s;
        }
        .hts-all:hover { background: #3D6455; }
        .hts-fineprint {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: .78rem;
          color: #8A7F74;
        }
      `}</style>

      <span className="hts-eyebrow">Free planning tools</span>
      <h2 className="hts-title">Plan your Mallorca golf trip in ten minutes</h2>

      <div className="hts-grid">
        {STRIP_TOOLS.map(tool => (
          <Link key={tool.href} href={tool.href} className="hts-card">
            <span className="hts-card-label">{tool.label}</span>
            <span className="hts-card-desc">{tool.desc}</span>
            <span className="hts-card-go">Start →</span>
          </Link>
        ))}
      </div>

      <div className="hts-footer">
        <Link href="/tools" className="hts-all">Explore all planning tools</Link>
        <p className="hts-fineprint">No sign-up needed. Built by a UK PGA Advanced Professional based in Mallorca.</p>
        <ReviewBadge variant="mini" />
      </div>
    </aside>
  )
}

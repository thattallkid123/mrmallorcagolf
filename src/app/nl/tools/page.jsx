import PageLayout from '../../../components/PageLayout'
import Link from 'next/link'
import ReviewBadge from '../../../components/ReviewBadge'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'nl', {
  title: 'Gratis Mallorca Golf Planningstools',
  description: 'Gratis tools om je Mallorca golftrip te plannen: baanfinder, handicapchecker, baanvergelijker, kostencalculator, hoteladviezer en dagplanner.',
  robots: { index: true, follow: true },
})

const TOOLS = [
  {
    href: '/nl/tools/course-selector',
    eyebrow: 'Baanmatchning',
    title: 'Vind je Mallorca golfbaan',
    desc: 'Acht vragen. Een persoonlijke lijst met drie banen, afgestemd op je handicap, groep, budget en voorkeur.',
    time: '< 1 min',
    cta: 'Vind mijn banen',
  },
  {
    href: '/nl/tools/handicap-checker',
    eyebrow: 'Toegangscontrole',
    title: 'Kan ik hier spelen?',
    desc: 'Voer je handicap en groepsgrootte in. Zie direct welke Mallorca-banen je kunt reserveren, waar je een certificaat nodig hebt en waar Andy toegang kan regelen.',
    time: '< 1 min',
    cta: 'Controleer mijn toegang',
  },
  {
    href: '/nl/tools/green-fees',
    eyebrow: 'Baanvergelijking',
    title: 'Vergelijk alle 24 banen',
    desc: 'Elke Mallorca-baan in één tabel: greenfees, buggy-kosten, loopregels, par, moeilijkheidsgraad en handicaplimits, met Andys oordeel. Of vergelijk twee of drie rechtstreeks.',
    time: '< 1 min',
    cta: 'Vergelijk banen',
  },
  {
    href: '/nl/tools/golf-day-builder',
    eyebrow: 'Dagplanning',
    title: 'Golfdag planner',
    desc: 'Acht vragen. Een compleet dagplan: baan, starttijd, buggy of lopen, waar je eet. Afgestemd op je groep en locatie.',
    time: '< 2 min',
    cta: 'Plan mijn dag',
  },
  {
    href: '/nl/tools/golf-cost-calculator',
    eyebrow: 'Budgetplanning',
    title: 'Golftrip kostencalculator',
    desc: 'Drie stappen. Een realistische kostenschatting voor je hele trip: greenfees, accommodatie, vervoer, eten en een voorgestelde baanmix.',
    time: '< 2 min',
    cta: 'Schat mijn trip',
  },
  {
    href: '/nl/tools/hotel-recommender',
    eyebrow: 'Hotelkeuze',
    title: 'Golfhoteladviezer',
    desc: 'Zes vragen. Een lijst met hotels afgestemd op je banen, groepsgrootte en reizigerstijl. Beslaat de belangrijkste gebieden van het eiland.',
    time: '< 1 min',
    cta: 'Vind hotels',
  },
]

export default function ToolsIndexNl() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
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
        <span className="ti-eyebrow">Gratis tools</span>
        <h1 className="ti-h1">Plan je Mallorca golftrip</h1>
        <p className="ti-sub">Gratis tools om je Mallorca golftrip te plannen. Geen aanmelden nodig. Elke tool duurt minder dan twee minuten: een baanlijstje, een handicapcheck, een baanvergelijking, een kostenschatting, een hotelkeuze of een compleet dagplan.</p>
      </section>

      <section className="ti-carousel">
        <div className="ti-carousel__header">
          <span className="ti-carousel__label">Kies een tool</span>
        </div>
        <div className="ti-track" aria-label="Gratis tools carousel">
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} className="ti-card">
              <div className="ti-card-eyebrow">{tool.eyebrow}</div>
              <div className="ti-card-title">{tool.title}</div>
              <div className="ti-card-desc">{tool.desc}</div>
              <div className="ti-card-footer">
                <span className="ti-card-cta">{tool.cta}</span>
                <span className="ti-card-time">Duurt {tool.time}</span>
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
              Deze tools geven je een startpunt: een lijstje, een schatting, een plan. Als je klaar bent om het werkelijk te maken, bevestig ik starttijden, regel ik toegang op privébanen en bouw ik de reis rond je golf op. Niets te betalen tot je besluit te reserveren.
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

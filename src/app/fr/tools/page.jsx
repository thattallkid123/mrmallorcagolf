import PageLayout from '../../../components/PageLayout'
import Link from 'next/link'
import ReviewBadge from '../../../components/ReviewBadge'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'fr', {
  title: 'Outils gratuits de planification de golf à Majorque',
  description: 'Outils gratuits pour planifier votre séjour de golf à Majorque : sélecteur de parcours, vérificateur de handicap, comparateur de parcours, calculatrice de coûts, recommandeur d\'hôtel et planificateur de journée.',
  robots: { index: true, follow: true },
})

const TOOLS = [
  {
    href: '/fr/tools/course-selector',
    eyebrow: 'Choisissez votre parcours',
    title: 'Sélecteur de parcours',
    desc: 'Huit questions. Une liste personnalisée de trois parcours, adaptée à votre handicap, groupe, budget et préférences de jeu.',
    time: '< 1 min',
    cta: 'Trouvez mes parcours',
  },
  {
    href: '/fr/tools/handicap-checker',
    eyebrow: 'Vérifiez l\'accès',
    title: 'Vérifiez votre handicap',
    desc: 'Entrez votre handicap et la taille de votre groupe. Vérifiez instantanément quels parcours de Majorque vous pouvez réserver, où un certificat est nécessaire et où Andy peut arranger l\'accès.',
    time: '< 1 min',
    cta: 'Vérifier mon accès',
  },
  {
    href: '/fr/tools/green-fees',
    eyebrow: 'Choisissez votre parcours',
    title: 'Explorez les 24 parcours',
    desc: 'Tous les parcours de Majorque en un tableau : droits verts, coûts de buggy, règles de marche, par, difficulté et limites de handicap, avec le verdict d\'Andy. Ou comparez deux ou trois face à face.',
    time: '< 1 min',
    cta: 'Comparer les parcours',
  },
  {
    href: '/fr/tools/golf-day-builder',
    eyebrow: 'Planifiez votre voyage',
    title: 'Planificateur de journée',
    desc: 'Huit questions. Un plan de journée complet : parcours, heure de départ, buggy ou à pied, où manger. Construit autour de votre groupe et de votre localisation.',
    time: '< 2 min',
    cta: 'Planifiez ma journée',
  },
  {
    href: '/fr/tools/golf-cost-calculator',
    eyebrow: 'Planifiez votre voyage',
    title: 'Estimateur de budget',
    desc: 'Trois étapes. Une estimation réaliste des coûts pour tout votre séjour : droits verts, hébergement, transport, repas et une sélection de parcours suggérée.',
    time: '< 2 min',
    cta: 'Estimez mon voyage',
  },
  {
    href: '/fr/tools/hotel-recommender',
    eyebrow: 'Planifiez votre voyage',
    title: 'Trouvez des hôtels',
    desc: 'Six questions. Une liste d\'hôtels adaptée à vos parcours, taille de groupe et style de voyage. Couvre les principales zones de l\'île.',
    time: '< 1 min',
    cta: 'Trouvez des hôtels',
  },
]

export default function ToolsIndexFr() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
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
        <span className="ti-eyebrow">Outils gratuits</span>
        <h1 className="ti-h1">Planifiez votre séjour de golf à Majorque</h1>
        <p className="ti-sub">Outils gratuits pour planifier votre séjour de golf à Majorque. Pas d\'inscription. Chaque outil prend moins de deux minutes : une liste de parcours, une vérification de handicap, une comparaison de parcours, une estimation de coûts, une recommandation d\'hôtel ou un plan de journée complet.</p>
      </section>

      <section className="ti-carousel">
        <div className="ti-carousel__header">
          <span className="ti-carousel__label">Choisir un outil</span>
        </div>
        <div className="ti-track" aria-label="Carrousel d\'outils gratuits">
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} className="ti-card">
              <div className="ti-card-eyebrow">{tool.eyebrow}</div>
              <div className="ti-card-title">{tool.title}</div>
              <div className="ti-card-desc">{tool.desc}</div>
              <div className="ti-card-footer">
                <span className="ti-card-cta">{tool.cta}</span>
                <span className="ti-card-time">Prend {tool.time}</span>
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
              Ces outils vous donnent un point de départ : une liste, une estimation, un plan. Quand vous êtes prêt à le concrétiser, je confirme les heures de départ, j\'arrange l\'accès aux parcours privés et je construis le voyage autour de votre golf. Rien à payer jusqu\'à ce que vous décidiez de réserver.
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

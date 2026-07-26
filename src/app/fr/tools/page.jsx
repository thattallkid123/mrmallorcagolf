import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'fr', {
  title: 'Outils gratuits de planification de golf à Majorque',
  description: "Outils gratuits pour planifier votre séjour de golf à Majorque : sélecteur de parcours, vérificateur de handicap, comparateur de parcours, calculatrice de coûts, recommandeur d'hôtel et planificateur de journée.",
  robots: { index: true, follow: true },
})

export default function ToolsIndexFr() {
  return <ToolsIndexView locale="fr" />
}

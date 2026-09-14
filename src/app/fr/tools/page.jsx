import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'fr', {
  title: 'Outils Gratuits de Golf à Majorque',
  description: "Outils gratuits pour planifier votre golf à Majorque : sélecteur de parcours, calculatrice de coûts et recommandeur d'hôtel.",
  robots: { index: true, follow: true },
})

export default function ToolsIndexFr() {
  return <ToolsIndexView locale="fr" />
}

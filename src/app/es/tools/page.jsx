import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'es', {
  title: 'Herramientas de Golf Gratis en Mallorca',
  description: 'Herramientas gratuitas para planificar tu golf en Mallorca: buscador de campos, calculadora de costos y recomendador de hoteles.',
  robots: { index: true, follow: true },
})

export default function ToolsIndexEs() {
  return <ToolsIndexView locale="es" />
}

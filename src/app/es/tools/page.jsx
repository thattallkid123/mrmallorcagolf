import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'es', {
  title: 'Herramientas gratuitas de planificación de golf en Mallorca',
  description: 'Herramientas gratuitas para planificar tu viaje de golf en Mallorca: buscador de campos, verificador de handicap, comparador de campos, calculadora de costos, recomendador de hoteles y planificador de día.',
  robots: { index: true, follow: true },
})

export default function ToolsIndexEs() {
  return <ToolsIndexView locale="es" />
}

import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'nl', {
  title: 'Gratis Mallorca Golf Planningstools',
  description: 'Gratis tools om je Mallorca golftrip te plannen: baanfinder, handicapchecker, baanvergelijker, kostencalculator, hoteladviezer en dagplanner.',
  robots: { index: true, follow: true },
})

export default function ToolsIndexNl() {
  return <ToolsIndexView locale="nl" />
}

import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'sv', {
  title: 'Gratis golfplaneringsverktyg för Mallorca',
  description: 'Gratis verktyg för att planera din Mallorca-golfresa: baanselector, handikapscheck, baanjämförelse, kostnadsräknare, hoteljämförare och dagplanerare.',
  robots: { index: true, follow: true },
})

export default function ToolsIndexSv() {
  return <ToolsIndexView locale="sv" />
}

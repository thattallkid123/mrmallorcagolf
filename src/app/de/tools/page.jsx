import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'de', {
  title: 'Kostenlose Mallorca Golf Planungstools',
  description: 'Kostenlose Tools zur Planung deiner Mallorca-Golfreise: Golfplatz-Finder, Handicap-Checker, Golfplatz-Vergleich, Kostenrechner, Hotel-Empfehlung und Tagesplaner.',
  robots: { index: true, follow: true },
})

export default function ToolsIndexDe() {
  return <ToolsIndexView locale="de" />
}

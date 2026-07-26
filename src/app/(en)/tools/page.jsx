import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'en', {
  title: 'Free Mallorca Golf Planning Tools',
  description: 'Free tools to plan your Mallorca golf trip: course finder, handicap checker, course comparison, cost calculator, hotel recommender, and day builder.',
  robots: { index: true, follow: true },
})

export default function ToolsIndex() {
  return <ToolsIndexView locale="en" />
}

import { buildPlayWithAProExplainedMetadata } from '../../../../lib/page-metadata'
import { getPlayWithAProExplainedContent } from '../../../../lib/play-with-a-pro-explained-content'
import PlayWithAProExplainedView from './PlayWithAProExplainedView'

export const metadata = buildPlayWithAProExplainedMetadata('en')

export default function PlayWithAProExplainedPage() {
  return <PlayWithAProExplainedView content={getPlayWithAProExplainedContent('en')} locale="en" />
}

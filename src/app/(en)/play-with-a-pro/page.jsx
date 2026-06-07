import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('en')

export default function PlayWithAPro() {
  return <PlayWithAProView content={getPlayWithAProContent('en')} locale="en" />
}

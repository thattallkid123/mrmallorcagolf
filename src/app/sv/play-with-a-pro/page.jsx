import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('sv')

export default function PlayWithAProSV() {
  return <PlayWithAProView content={getPlayWithAProContent('sv')} locale="sv" />
}

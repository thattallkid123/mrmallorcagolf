import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('nl')

export default function PlayWithAProNL() {
  return <PlayWithAProView content={getPlayWithAProContent('nl')} locale="nl" />
}

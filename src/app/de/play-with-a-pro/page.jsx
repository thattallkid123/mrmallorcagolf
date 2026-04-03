import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('de')

export default function PlayWithAProDE() {
  return <PlayWithAProView content={getPlayWithAProContent('de')} locale="de" />
}

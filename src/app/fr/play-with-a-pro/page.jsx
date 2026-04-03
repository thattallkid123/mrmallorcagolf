import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('fr')

export default function PlayWithAProFR() {
  return <PlayWithAProView content={getPlayWithAProContent('fr')} locale="fr" />
}

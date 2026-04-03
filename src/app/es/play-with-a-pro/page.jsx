import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('es')

export default function PlayWithAProES() {
  return <PlayWithAProView content={getPlayWithAProContent('es')} locale="es" />
}

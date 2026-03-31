import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'
import { getPlayWithAProContent } from '../../../lib/play-with-a-pro-content'
import PlayWithAProView from '../../play-with-a-pro/PlayWithAProView'

export const metadata = buildPlayWithAProMetadata('zh')

export default function PlayWithAProZH() {
  return <PlayWithAProView content={getPlayWithAProContent('zh')} locale="zh" />
}

import ToolsIndexView from '../../../components/ToolsIndexView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools', 'zh', {
  title: '免费马略卡高尔夫规划工具',
  description: '免费工具帮助你规划马略卡高尔夫之旅：球场匹配器、差点检查器、球场对比、成本计算器、酒店推荐和日程规划。',
  robots: { index: true, follow: true },
})

export default function ToolsIndexZh() {
  return <ToolsIndexView locale="zh" />
}

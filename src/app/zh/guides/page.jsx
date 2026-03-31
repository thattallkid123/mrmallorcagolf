import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('zh')

const liveGuides = [
  { slug: 'son-gual-review', badge: '球场评测', badgeGold: true, title: 'Son Gual高尔夫球场，马略卡 — PGA职业教练诚实评测（2026）', intro: '我在岛上打得最多的球场。风、果岭、收官几洞 — 以及奥巴马和纳达尔一再回来的原因。', readTime: '7分钟', keywords: '锦标赛级 · 标准杆72 · €80–165 · 需要差点证明' },
  { slug: 'alcanada-review', badge: '球场评测', badgeGold: true, title: '阿尔卡纳达高尔夫球场 — PGA职业教练诚实评测（2026）', intro: '我带客人来打球时，最希望他们能带着故事回家的球场。灯塔改变了一切。', readTime: '7分钟', keywords: '海滨球场 · 标准杆72 · €115–220 · 劳力士挑战巡回赛总决赛' },
  { slug: 'santa-ponsa-1-review', badge: '球场评测', badgeGold: true, title: '圣蓬萨1号高尔夫球场，马略卡 — PGA职业教练诚实评测（2026）', intro: '欧洲最长球场之一，拥有DP世界巡回赛历史，真正能帮助球手重拾一号木信心的球场。', readTime: '6分钟', keywords: '锦标赛级 · 标准杆72 · €77–126 · 对外开放' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: '亲历体验', badgeGold: false, title: '与PGA职业球手共度Son Gual的一天', intro: '当你与一位几乎每周都在马略卡岛最佳球场挥杆的教练共度一整天，究竟会发生什么。', readTime: '5分钟', keywords: 'Son Gual · 与职业球手同场 · 全天体验' },
  { slug: 'best-golf-courses-mallorca', badge: '指南', badgeGold: false, title: '马略卡岛最佳高尔夫球场——PGA职业球手诚实排名', intro: '岛上二十二个球场，我将如何为时间有限、标准不低的游客一一排序。', readTime: '8分钟', keywords: '适合各水平 · 果岭费对比 · 2026年更新' },
  { slug: 'is-mallorca-good-for-golf', badge: '指南', badgeGold: false, title: '马略卡岛适合打高尔夫吗？一位住在这里的人给出诚实答案', intro: '不加滤镜的真实版本——这座岛在哪些方面胜过葡萄牙，哪些方面有所不足，以及它适合哪类球手。', readTime: '5分钟', keywords: '马略卡 vs 葡萄牙 · 球场品质 · 适合各水平' },
  { slug: 'best-time-play-golf-mallorca', badge: '指南', badgeGold: false, title: '马略卡岛打高尔夫的最佳时间——按月详解', intro: '如果只能选一个月，我会选十月。原因在此，以及每个月在天气、价格和人流方面的真实表现。', readTime: '6分钟', keywords: '天气 · 按季节果岭费 · 人流量' },
  { slug: 'golf-cost-mallorca', badge: '指南', badgeGold: false, title: '马略卡岛打高尔夫要多少钱？果岭费、租杆费及隐性费用全解析', intro: '一次马略卡高尔夫之旅的真实花销——果岭费、租杆、球童，以及在哪里可以省钱而不降低体验。', readTime: '5分钟', keywords: '€77–220果岭费 · 租杆 · 球童 · 2026年价格' },
  { slug: 'golf-trip-planning-mallorca', badge: '指南', badgeGold: false, title: '规划马略卡高尔夫之旅——你需要了解的一切', intro: '机票、球场、住宿选择、如何在景点之间穿梭。这是我搬来这里时希望早已存在的实用指南。', readTime: '7分钟', keywords: '行程规划 · 住宿 · 交通' },
]

export default function GuidesIndex_ZH() {
  const content = {
    hero: {
      breadcrumbHome: 'ZH',
      breadcrumbCurrent: '高尔夫指南',
      title: '马略卡高尔夫. 诚实指南.',
      lead: '球场评测、行程规划与果岭费信息 - 由每周都在这里打球的 PGA 职业教练撰写。',
      tags: ['Updated 2026', '亲身评测', 'PGA Professional'],
    },
    liveGuides,
    comingSoonGuides,
    comingSoonLabel: '即将推出',
    finalCta: {
      eyebrow: '准备好下场了吗？',
      title: '在 PGA 职业教练陪同下，私享这些球场中的一座。',
      body: '告诉我你的日期和需求，我会在 24 小时内亲自回复。',
      primaryCta: '查看体验 →',
      secondaryCta: '立即联系',
    },
  }

  return <GuidesIndexView locale="zh" pageLang="zh" content={content} />
}
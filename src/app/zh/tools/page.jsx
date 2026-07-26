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

const TOOLS = [
  {
    href: '/zh/tools/course-selector',
    eyebrow: '选择球场',
    title: '球场查找器',
    desc: '七个问题。根据你的差点、小组人数、预算和球场偏好，获得三个球场的个性化列表。',
    time: '不到1分钟',
    cta: '开始推荐',
  },
  {
    href: '/zh/tools/green-fees',
    eyebrow: '选择球场',
    title: '探索所有24个球场',
    desc: '一个表格展示所有马略卡球场：球场费用、球车成本、步行规则、杆数、难度和差点限制，附加Andy的评价。或者并列对比两个或三个球场。',
    time: '不到1分钟',
    cta: '对比球场',
  },
  {
    href: '/zh/tools/handicap-checker',
    eyebrow: '验证权限',
    title: '检查你的差点',
    desc: '输入你的差点和小组人数。立即查看马略卡哪些球场可以预订，哪些需要证书，Andy可以在哪里协助安排进场。',
    time: '不到1分钟',
    cta: '检查我的权限',
  },
  {
    href: '/zh/tools/golf-day-builder',
    eyebrow: '规划你的行程',
    title: '日程规划工具',
    desc: '七个问题。完整的日程计划：球场选择、开球时间、球车或步行、用餐地点。根据你的小组和所在位置定制。',
    time: '不到2分钟',
    cta: '规划我的一天',
  },
  {
    href: '/zh/tools/golf-cost-calculator',
    eyebrow: '规划你的行程',
    title: '成本估算工具',
    desc: '三个步骤。获得整个行程的现实成本估计：球场费用、住宿、交通、用餐和建议的球场组合。',
    time: '不到2分钟',
    cta: '估算我的旅行',
  },
  {
    href: '/zh/tools/hotel-recommender',
    eyebrow: '规划你的行程',
    title: '寻找酒店',
    desc: '六个问题。获得根据你的球场、小组人数和旅行风格定制的酒店列表。覆盖岛上的主要地区。',
    time: '不到1分钟',
    cta: '寻找酒店',
  },
]

export default function ToolsIndexZh() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <style>{`
        .ti-hero {
          background: #2D4A3E;
          color: #F7F4EF;
          padding: 100px 24px 28px;
          text-align: center;
        }
        .ti-eyebrow {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #CBA968;
          margin-bottom: 10px;
        }
        .ti-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          line-height: 1.1;
          color: #F7F4EF;
          max-width: 640px;
          margin: 0 auto;
        }
        .ti-sub {
          display: block;
        }
        .ti-carousel {
          max-width: 1120px;
          margin: 0 auto;
          padding: 40px clamp(20px, 4vw, 40px) 24px;
        }
        .ti-carousel__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }
        .ti-carousel__label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #B8973C;
        }
        .ti-carousel__hint {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #C4BAA9;
        }
        .ti-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 6px 0 18px;
        }
        @media (max-width: 900px) { .ti-track { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .ti-track { grid-template-columns: 1fr; } }
        .ti-card {
          min-height: 260px;
          background: #fff;
          border: 1px solid rgba(26,25,22,0.09);
          border-radius: 18px;
          padding: 30px 28px;
          box-shadow: 0 4px 24px rgba(18,17,15,0.06);
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          color: inherit;
          transition: transform .3s cubic-bezier(0.22,1,0.36,1), box-shadow .3s;
        }
        .ti-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 48px rgba(18,17,15,0.11);
        }
        .ti-card-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #B8973C;
          margin-bottom: 10px;
        }
        .ti-card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 500;
          color: #1A1916;
          line-height: 1.15;
          margin-bottom: 10px;
        }
        .ti-card.ti-card--zh .ti-card-title {
          font-weight: 400;
        }
        .ti-card-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: .93rem;
          line-height: 1.65;
          color: #8A7F74;
          margin-bottom: 20px;
          flex: 1;
        }
        .ti-card-footer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: auto;
        }
        .ti-card-cta {
          display: inline-block;
          background: #2D4A3E;
          color: #F7F4EF;
          font-family: 'Jost', sans-serif;
          font-size: .82rem;
          font-weight: 400;
          letter-spacing: .06em;
          padding: 11px 24px;
          border-radius: 99px;
          text-decoration: none;
          transition: background .2s;
        }
        .ti-card-cta:hover { background: #3D6455; }
        .ti-card-time {
          font-family: 'Jost', sans-serif;
          font-size: .75rem;
          color: #C4BAA9;
          letter-spacing: .04em;
        }
        .ti-andy-wrap {
          max-width: 760px;
          margin: 0 auto;
          padding: 12px 20px 80px;
        }
        .ti-divider {
          height: 1px;
          background: #EDE9E1;
          margin: 24px 0 36px;
        }
        .ti-andy {
          background: #F7F4EF;
          border-radius: 16px;
          padding: 28px 28px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .ti-andy-bar {
          width: 3px;
          border-radius: 2px;
          background: #B8973C;
          flex-shrink: 0;
          align-self: stretch;
        }
        .ti-andy-label {
          font-family: 'Jost', sans-serif;
          font-size: .68rem;
          font-weight: 500;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #B8973C;
          margin-bottom: 6px;
        }
        .ti-andy-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.08rem;
          font-style: italic;
          color: #2C2A27;
          line-height: 1.65;
        }
      `}</style>

      <section className="ti-hero">
        <span className="ti-eyebrow">免费工具</span>
        <h1 className="ti-h1">规划你的马略卡高尔夫之旅</h1>
        <p className="ti-sub">免费工具帮助规划你的马略卡高尔夫之旅。无需注册。每个工具耗时不到两分钟：球场列表、差点检查、球场对比、成本估计、酒店推荐或完整的日程计划。</p>
      </section>

      <section className="ti-carousel">
        <div className="ti-carousel__header">
          <span className="ti-carousel__label">选择一个工具</span>
        </div>
        <div className="ti-track" aria-label="免费工具轮播">
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} className="ti-card ti-card--zh">
              <div className="ti-card-eyebrow">{tool.eyebrow}</div>
              <div className="ti-card-title">{tool.title}</div>
              <div className="ti-card-desc">{tool.desc}</div>
              <div className="ti-card-footer">
                <span className="ti-card-cta">{tool.cta}</span>
                <span className="ti-card-time">{tool.time}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="ti-andy-wrap">
        <div className="ti-divider" />

        <div className="ti-andy">
          <div className="ti-andy-bar" />
          <div>
            <div className="ti-andy-label">Andy Griffiths · UK PGA Advanced Professional</div>
            <p className="ti-andy-text">
              这些工具为你提供了一个起点：一份清单、一个估计、一个计划。当你准备好将其变为现实时，我会确认开球时间、安排私人球场进场权限，并围绕你的高尔夫体验打造整个旅程。在你决定预订之前无需支付任何费用。
            </p>
            <div style={{ marginTop: 14 }}>
              <ReviewBadge variant="text" theme="light" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

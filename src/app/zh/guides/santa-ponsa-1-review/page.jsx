import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: '圣蓬萨1号高尔夫球场 - PGA职业教练诚实评测',
  description: '从一位PGA职业教练视角看Santa Ponsa 1。欧巡历史、宽阔球道，以及重新找回一号木信心的球场。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: '球场评测',
  badgeGold: true,
  readTime: '6分钟',
  updated: '2026年3月',
  title: '圣蓬萨1号高尔夫球场 - PGA职业教练诚实评测',
  intro: '这是岛上最长的球场之一。有真正的欧巡历史。球道也足够宽，让你放心掏出一号木。',
  lang: 'zh',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual高尔夫 - 2026诚实评测' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <PostLayout meta={meta} lang="zh">
        <p>Santa Ponsa 1是Santa Ponsa球场群中唯一对公众开放的球场，也是其中真正拥有欧洲巡回赛资历的一座。它曾举办2021年DP World Tour Mallorca Golf Open。这座球场在中断十年之后，把顶级职业高尔夫重新带回了马略卡。最终冠军Jeff Winther在前两轮两次打出62杆。球场完全承受住了那个级别的比赛。</p>

        <h2>为什么它适合我的球风 - 也大概率适合你的</h2>
        <p>我想直接说一点：这座球场让我重新找回了一号木的信心。在Son Gual或Alcanada，经常需要通过球场管理把一号木留在包里，而Santa Ponsa 1完全是另一种对话。这里的球道很宽，前几个洞也很友善，球场确实会奖励你在开球台上更积极的打法。</p>
        <p>以我的距离来说，一个好开球之后，很多四杆洞只剩下一支挖起杆进攻果岭。对于距离更常规的球手来说，一旦起风，它仍然是一场真正的考验，但那是会建立信心，而不是磨掉信心的那种挑战。</p>

        <h2>第10洞</h2>
        <p>第10洞长590米，是欧洲最长的五杆洞之一。逆风打时会显得更长。这个洞有一种很让人满足的打法 - 一号木、混合杆、挖起杆 - 也有一种完全相反的版本，只要这三杆里有一杆失误，结果就会很难受。至于这里的三杆洞，则是另一种极端：距离长、果岭小。与其期待抓鸟，不如先想着控制损失。</p>

        <h2>它与DP World Tour的关系</h2>
        <p>举办2021年Mallorca Golf Open，对整座岛都很重要。这是这里十年来第一次迎来欧洲巡回赛，而Santa Ponsa 1经受住了考验。比赛周的场地状态、在压力下的路线表现，以及既能出低杆又不会让球场失去尊严的难度平衡 - 一切都很到位。这种资历是真实的，访客到了现场就能感受到。</p>

        <h2>Tramuntana山景</h2>
        <p>前九洞中的5、6、7号洞拥有全岛最出色的Tramuntana山景之一。高草、老树、野花，以及背后整片山脉作为背景。这样的风景会让一个坏球稍微没有那么难受。只是稍微而已。</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 77-126</span><span className="post-fact__label">2026年果岭费</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">难度</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">锦标赛布局</span></div>
          <div className="post-fact__item"><span className="post-fact__val">公众开放</span><span className="post-fact__label">对访客开放</span></div>
        </div>

        <h2>2026年果岭费</h2>
        <p>旺季为3月中旬至6月初，以及9月中旬至11月初，价格为EUR 126。中间季节为EUR 106。淡季为EUR 77。完整信息见golf-santaponsa.com。需要提供有效的WHS差点证明。</p>
        <p>球车：18洞EUR 43。球杆租赁：EUR 40。球场对公众开放，可直接预订，不需要会员资格。旺季建议尽早订位；DP World Tour的背景会吸引那些真正懂这座球场价值的访客。</p>

        <h2>结论</h2>
        <p>如果你最近一号木状态不错，而且想把这种感觉继续放大，那就来打Santa Ponsa 1。如果你在Son Gual和Alcanada之外，还想找一场有鲜明对比的高质量高尔夫日 - 更开阔、更能建立信心、又带着真实欧巡历史 - 那就是这里。这里的三杆洞会让你保持诚实，而其他部分会给你很多回报。</p>

        <div className="post-cta">
          <p>想把Santa Ponsa 1安排进你在马略卡的一天高尔夫体验里吗？我可以为你安排。</p>
          <a href="/zh/play-with-a-pro">查看play-with-a-pro体验 →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}

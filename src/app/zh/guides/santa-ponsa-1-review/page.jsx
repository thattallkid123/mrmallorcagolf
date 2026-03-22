import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'


function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}
export const metadata = {
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  description: "Santa Ponsa 1 golf course Mallorca reviewed by a PGA professional. One of Europe",
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  intro: "岛上最长的球场之一。欧巡赛历史。球道宽得足以放出司机杆。",
  lang: 'zh',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <PostLayout meta={meta} lang="zh">

        <PostImage
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — 水面倒影与球道"
          caption="第16洞果岭。湖泊在进攻杆时进入视野，极大地集中了注意力。"
        />

        <p>Santa Ponsa 1是Santa Ponsa集团唯一的公共球场，也是拥有真正欧巡赛历史的球场——它承办了2021年DP World Tour马略卡高尔夫公开赛。正是这个球场在时隔十年后将顶级职业高尔夫带回了这座岛屿。冠军Jeff Winther在开局两轮都打出了62杆。球场为此做好了准备。</p>

        <h2>为什么适合我的球技——也可能适合你的</h2>
        <p>我直说一件事：这个球场帮我重新找回了使用driver的信心。在Son Gual或Alcanada打球时，球场管理往往意味着把driver留在球包里，而Santa Ponsa 1完全是另一种风格。球道宽阔，开场球洞宽松，球场真正奖励从发球台的积极进攻。</p>
        <p>凭借我的距离，打出一个好的开球后，我常常只剩下一支pitching wedge打向par-4果岭。对于距离更普通的球手来说，当风吹来时这个球场会带来真正的考验——但这是那种建立信心而非消磨信心的挑战。</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Santa Ponsa 1球道，背后是山脉"
          caption="球道真的很宽。这是一个邀请你使用driver的球场。"
        />

        <h2>第10洞</h2>
        <p>第10洞长590米，是欧洲最长的par-5之一。逆风打让它感觉更长。这个洞有一个真正令人满意的打法——driver、hybrid、wedge——以及一个因其中一杆出错而大为逊色的版本。par-3洞则是另一个极端：长，且果岭小。减少失误，而非争取鸟忌的机会。</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Santa Ponsa 1球场布局和球道"
          caption="球场布局。风平浪静的日子这个球场会让你感觉很好。加上风，它就配得上每一米的长度。"
        />

        <h2>DP World Tour的渊源</h2>
        <p>承办2021年DP World Tour马略卡高尔夫公开赛对这座岛屿意义重大。这是十年来这里的第一个欧巡赛赛事，而Santa Ponsa 1经受住了审视。赛周的球场状况、压力下的线路安排、不投降前提下可能取得的成绩——一切都运作良好。这份履历是真实的，从球场向访客呈现自己的方式中就能看出来。</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Santa Ponsa 1进攻一个par-3"
          caption="背后是Tramuntana山脉。第5、6、7洞拥有最佳的山景。"
        />

        <h2>山景</h2>
        <p>前九洞的第5、6、7洞提供了岛上最好的Tramuntana山景之一。高草、成熟的树木、野花，以及在一切后面勾勒轮廓的山脉。这样的背景让一次糟糕的挥杆稍微好受一些。稍微。</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths清晨在Santa Ponsa 1"
          caption="早起出发。通常到上午中段，风就会找到球场。"
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">2026年果岭费范围</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">难度</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">锦标赛布局</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">向所有访客开放</span></div>
        </div>

        <h2>2026年果岭费</h2>
        <p>旺季（3月中旬至6月初、9月中旬至11月初）：€126。中季：€106。淡季：€77。完整详情请访问golf-santaponsa.com。需要有效的WHS差点证书。</p>
        <p>球车每18洞€43。球杆租赁€40。球场为公共球场，可自由预订——无需会员资格。旺季请提前预订；DP World Tour的历史吸引了解目的而来的访客。</p>

        <h2>总结</h2>
        <p>如果你的开球状态好，想要感受它带来的愉悦，就来打Santa Ponsa 1。如果你在Son Gual和Alcanada之间纠结，想要在认真的一天中体验一些与两者都不同的东西——更开阔、更能建立信心、附有真正的欧巡赛历史——这就是那个球场。par-3洞会让你保持清醒。其余的球洞会给你一些回报。</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Santa Ponsa 1球场全景"
          caption="后九洞展开。从最后发球台起，第10洞长达590米——欧洲最长的par-5之一。"
        />

        <div className="post-cta">
          <p>想把Santa Ponsa 1纳入马略卡高尔夫一日游吗？我可以安排。</p>
          <a href="/zh/play-with-a-pro">了解专业陪打体验 →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}

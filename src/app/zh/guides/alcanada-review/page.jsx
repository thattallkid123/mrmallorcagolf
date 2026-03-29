import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: '阿尔卡纳达高尔夫球场 - PGA职业教练诚实评测',
  description: '从一位经常下场的PGA职业教练视角看Alcanada。灯塔、果岭、餐厅露台，以及2026年果岭费。',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides/alcanada-review' },
}

const meta = {
  badge: '球场评测',
  badgeGold: true,
  readTime: '6分钟',
  updated: '2026年3月',
  title: '阿尔卡纳达高尔夫球场 - PGA职业教练诚实评测',
  intro: '这是我想让客人带着故事回家的时候会带他们去的球场。灯塔改变了一切。',
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
        <p>如果我想让客人在打完球后带着一个真正的故事回家，我会带他们来Alcanada。它也许是整座岛上最令人难忘的一轮球。灯塔改变了一切。</p>

        <h2>球场环境</h2>
        <p>Robert Trent Jones Jr.设计了Alcanada，而他在这段海岸线上所做的一切都非常出色。当你站在后发球台上，身后是灯塔，四周几乎都是地中海，那是一种少见的高尔夫时刻，周围景色几乎会让你忘记自己的成绩。</p>
        <p>Alcanada灯塔位于岸边外的一座小岛上，从18洞中有16洞都能看到。清晨天晴、海面平静、阳光斜照海湾的时候，这是我在世界任何地方见过最美的高尔夫场景之一。</p>

        <h2>后发球台</h2>
        <p>站在高起的后发球台本身就是一种体验。你会感觉自己高高在上，仿佛与其他一切都隔开了，下面的人看起来就像一个小点。灯塔在你身后，海湾在你眼前，而你即将把一号木挥向远方。那种感觉很特别。</p>

        <div className="post-pull">
          <p>"站在Alcanada的后发球台上真的很震撼。你会感觉自己高高在上，离整个世界都很远。所有人都像小点，而你站在那里，准备把一号木打向一片开阔。"</p>
        </div>

        <h2>果岭</h2>
        <p>这正是Alcanada配得上高级别赛事的地方。打完一个有难度的球洞之后，你会来到起伏很大、速度很快、很少有轻松推杆的果岭。球场总共58个沙坑，几乎在每个洞都要求你的攻果岭球足够精准。</p>
        <p>坡度、速度和微妙线路的组合，让Alcanada远远不只是一个风景漂亮的海边球场。它对好球手的考验是真实存在的。</p>

        <h2>劳力士挑战巡回赛总决赛</h2>
        <p>Alcanada是Rolex Challenge Tour Grand Final的举办地，2026年10月将第六次承办。这不是一座只为办比赛临时包装起来的球场，而是一座本来就配得上顶级赛事的球场。当你站上发球台时，会感觉到这些球洞确实能决定职业球员的赛季命运。</p>

        <h2>设计血统</h2>
        <p>Robert Trent Jones Jr.的父亲设计了Valderrama，也就是1997年莱德杯的举办地，还有Pebble Beach的Spyglass Hill。RTJ Jr.本人还设计了昆明春城高尔夫，被Golf Digest评为中国第一球场。这种设计血统一眼就能在Alcanada上感受到：没有任何东西是随意的，一切都在利用地形。</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 115-220</span><span className="post-fact__label">2026年果岭费</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">难度</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">沙坑数量</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55 km</span><span className="post-fact__label">距帕尔马</span></div>
        </div>

        <h2>实用信息</h2>
        <p>2026年果岭费：淡季为EUR 115，高峰期三月至五月及九月至十月最高为EUR 220。完整价格表见golf-alcanada.com。没有西班牙高协会员资格的球手需额外支付每日EUR 3的高尔夫许可证费用。</p>
        <p>球杆租赁：TaylorMade套杆18洞EUR 38。球车EUR 48，电动手推车EUR 20。这里的Toptracer练习场非常适合认真热身 - 值得利用。</p>
        <p>位置：位于Port d'Alcúdia，距帕尔马以北约50分钟车程。建议留出充足时间，不要打完就匆匆离开。</p>

        <h2>餐厅露台</h2>
        <p>这是岛上最适合打完球后吃午餐的地方之一。餐厅由Grupo Babuxa经营，也就是帕尔马知名Casa Gallega餐厅背后的团队。地中海料理、海景露台、正对Alcanada灯塔。午间套餐大约每人EUR 30。把它算进你的一天里 - 这里不是该匆忙离开的地方。</p>

        <h2>结论</h2>
        <p>如果我想让一个人爱上马略卡的高尔夫，我会带他来Alcanada。果岭会认真考验你。往北开这段路完全值得。打完后的午餐更是这一天不可分割的一部分。</p>

        <div className="post-cta">
          <p>Alcanada是我两条play-with-a-pro核心线路之一。想真正把它打明白吗？</p>
          <a href="/zh/play-with-a-pro">查看play-with-a-pro体验 →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}

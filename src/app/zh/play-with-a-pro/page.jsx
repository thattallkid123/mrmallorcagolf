import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'

export const metadata = buildPlayWithAProMetadata('zh')

export default function PlayWithAPro_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/zh" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>首页</Link> &nbsp;/&nbsp; <span>与职业球手同场</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>私人高尔夫日 · 马略卡岛</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>在马略卡岛的私人高尔夫日。</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>这不是一堂课，也不是普通的一轮球。而是在岛上最顶级的球场之一，与一位曾在三大洲最高级别赛场执教的PGA职业教练共度的私人一天。</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>每人€350 + 果岭费</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/zh/contact" className="btn btn--gold">预订您的高尔夫日 &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">查看方案</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">这一天包含什么</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>在您到达之前，我已经知道该关注什么。</h2>
          <p>在您到达之前，您需要填写一份简短问卷。您的困惑所在，差距何处。当我们走到第一个发球台时，我已经知道该关注什么了。</p>
          <p>打球过程中，指导自然融入其中——不是持续跑动式的评论，而是在正确的时机给出正确的观察。</p>
          <p>我曾在要求严格、进步可量化的环境中执教——中国国家队球员，以及遍布亚洲的高尔夫狂热者。</p>
          <div className="pull-quote"><p>&ldquo;大多数球手会发现：他们离开时打得明显更好、更自信——并且知道原因，而这正是留下来的部分。&rdquo;</p></div>
          <p>午餐时的复盘不是总结。而是让整个一天都有意义的那场对话。</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>已预订？</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>填写您的赛前问卷 &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>仅需3分钟，帮助我在开球前了解您的需求，为您量身定制当天体验。</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>包含内容</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>球场推荐</strong>根据您的球技、差点和期望量身匹配</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>开球时间</strong>已预订，全程安排</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>赛前简报</strong>了解球场，明确关注点</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>与Andy同打18洞</strong>作为您的球伴同场竞技</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>球场实地指导</strong>球场管理、选杆、决策</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>赛后复盘</strong>进步之处，待提升方向</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>午餐</strong>在球场餐厅或精选餐厅（招牌全日体验）</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>选择哪个球场？</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>球场始终与您共同选择。</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>有初学者的团体、较短的半日——总有更合适的球场，我会直接告诉您哪个更适合。部分会员制球场无法自行预订——可为客户安排。</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">适合哪些人</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>体验会根据您的球技量身调整。</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>来访高尔夫球手</h3><p>希望马略卡岛之旅真正难忘，而不只是在线预订一个开球时间。</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>练习场与球场的落差</h3><p>练习成绩无法在球场重现。问题几乎总是球场管理，而非挥杆。</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>企业高管团体</h3><p>商务团体、来岛高管，以及希望拥有全程安排的高端一天的人士。</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>初学者</h3><p>希望有专业陪伴、没有压力的休闲球手。这一天从不围绕成绩转。</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>常驻球手</h3><p>在岛上居住，寻求与打同样球场的职业教练进行定期训练。</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>希望获得更多的人</h3><p>唯一的要求是想要一次真正与众不同的高尔夫体验。</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>球员真实评价</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>他们的亲身感受。</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;与Andy打球是一次非凡的体验。他拥有无与伦比的洞察力，传授方式既细腻又贴心。仅仅18洞之后，我发现了自己潜力的新高度。&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;对每一杆背后思考的理解，极大提升了我的决策能力。最令我印象深刻的瞬间：看着Andy用三号铁越过有树木的右曲道狗腿，220米精准落在果岭上。&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy彻底改变了我对球场管理的认知。在Son Gual与他同打18洞后，我打出了那里最好的成绩，并真正理解了原因。&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">体验方案</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>三个方案。全部私人定制，全程亲自陪同。</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>区别在于这一天的完整程度。三个方案均提供相同水准的球场专业指导。</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">马略卡经典之旅</p>
            <h3 className="tier__name">与职业球手同场</h3>
            <p className="tier__price">每人€350 + 果岭费</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>根据您的球技量身推荐球场</li>
              <li>开球时间预订及全程安排</li>
              <li>赛前简报与热身</li>
              <li>与Andy同打18洞</li>
              <li>全程球场实地指导</li>
              <li>赛后复盘</li>
            </ul>
            <Link href="/zh/contact" className="tier__btn">立即咨询 &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">招牌全日体验</p>
            <h3 className="tier__name">全程陪同高尔夫日</h3>
            <p className="tier__price">每人起价€450 + 果岭费</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>包含马略卡经典之旅全部内容</li>
              <li>Son Gual或Alcanada</li>
              <li>球场餐厅悠闲午餐</li>
              <li>精心挑选的惊喜礼品</li>
              <li>从容节奏——完整的一天</li>
            </ul>
            <Link href="/zh/contact" className="tier__btn">立即咨询 &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">至尊定制体验</p>
            <h3 className="tier__name">高尔夫私人定制之旅</h3>
            <p className="tier__price">价格面议</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>多球场全日游或完整行程规划</li>
              <li>帕尔马出发私人专车</li>
              <li>精选餐厅晚宴</li>
              <li>合作场馆水疗或恢复疗程</li>
              <li>全程礼宾协调服务</li>
              <li>适合团体、企业及个性化定制需求</li>
            </ul>
            <Link href="/zh/contact" className="tier__btn">立即咨询 &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">准备好在马略卡岛畅享高尔夫了吗？</p>
          <h2 className="serif-display" style={{color:'#fff'}}>联系我，让我们安排您的专属一天。</h2>
          <p>告诉我您的日期、差点以及期望。我会亲自回复——通常在24小时内。</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>预订您的高尔夫日 &rarr;</Link>
          <Link href="/zh/golf-courses" className="btn btn--outline-white">探索球场</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">赛前问卷 &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}


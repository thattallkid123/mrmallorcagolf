import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional's Honest Review (2026)",
  description: "Santa Ponsa 1 golf course Mallorca reviewed by a PGA professional. One of Europe's longest courses, DP World Tour history, and a confidence-builder for anyone who loves hitting driver.",
  alternates: { canonical: 'https://mrmallorcagolf.com/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional's Honest Review (2026)",
  intro: "One of Europe's longest courses. DP World Tour history. And a course that genuinely helps you rediscover your driver.",
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
    { slug: 'alcanada-review', title: 'Alcanada Golf — Honest Review 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
    { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
  ],
}

function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <PostImage
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — water reflection and fairway"
          caption="The 16th green. The lake comes into play on the approach and focuses the mind considerably."
        />

        <p>Santa Ponsa 1 is the only public course in the Santa Ponsa group and the one with genuine European Tour pedigree — it hosted the 2021 DP World Tour Mallorca Golf Open. This is the course that brought top-level professional golf back to the island after a decade away. The winner, Jeff Winther, shot 62 twice in the opening rounds. The course was ready for it.</p>

        <h2>Why It Suits My Game — and Probably Yours</h2>
        <p>I'll be direct about something: this course has helped me rediscover confidence with the driver. After rounds at Son Gual or Alcanada, where course management often means leaving driver in the bag, Santa Ponsa 1 is a different conversation entirely. The fairways are wide, the opening holes are generous, and the course genuinely rewards an aggressive approach from the tee.</p>
        <p>With my distance, I'm often left with a pitching wedge into par-4 greens after a good drive. For players with more typical distances, the course presents a proper test when the wind comes in — but it's the kind of challenge that builds confidence rather than grinding it down.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Santa Ponsa 1 fairway with mountains behind"
          caption="The fairways are genuinely wide. This is a course that invites the driver."
        />

        <h2>The 10th Hole</h2>
        <p>At 590 metres, the 10th is one of the longest par-5s in Europe. Playing it into the wind makes it feel even longer. There's a genuinely satisfying version of this hole — hit driver, hit hybrid, hit wedge — and a much less satisfying version where one of those three goes wrong. The par-3s are the other end of the scale: long, with small greens. Damage limitation, not birdie opportunities.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Santa Ponsa 1 course layout and fairways"
          caption="The layout. On a calm day this course flatters you. Add wind and it earns every metre of its length."
        />

        <h2>The DP World Tour Connection</h2>
        <p>Hosting the 2021 DP World Tour Mallorca Golf Open was significant for the island. It was the first European Tour event here in ten years, and Santa Ponsa 1 held up under scrutiny. The course condition in tournament week, the routing under pressure, the scoring that was possible without the course being surrendered — it all worked. That pedigree is real, and it shows in how the course presents itself to visitors.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Santa Ponsa 1 approach to a par 3"
          caption="The Tramuntana mountains behind. Holes 5, 6 and 7 have the best of the mountain views."
        />

        <h2>The Mountain Views</h2>
        <p>Holes 5, 6, and 7 on the front nine offer some of the best Tramuntana views on the island. Tall grass, mature trees, wildflowers, and the mountains framing everything behind. It's the kind of backdrop that makes a bad shot slightly more bearable. Slightly.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths at Santa Ponsa 1 early morning"
          caption="Early start. By mid-morning the wind usually finds the course."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">Green fee range 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Difficulty</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Championship layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Open to all visitors</span></div>
        </div>

        <h2>2026 Green Fees</h2>
        <p>High season (mid-March to early June, mid-September to early November): €126. Mid-season: €106. Low season: €77. Full details at golf-santaponsa.com. A valid WHS handicap certificate is required.</p>
        <p>Buggy €43 for 18 holes. Club hire €40. The course is public and openly bookable — no member access required. Book in advance in peak season; the DP World Tour history draws visitors who know what they're coming for.</p>

        <h2>Verdict</h2>
        <p>If you're driving the ball well and want to feel good about it, play Santa Ponsa 1. If you're between Son Gual and Alcanada for a serious day and want something that contrasts both — more open, more confidence-building, with proper European Tour history attached — this is the course. The par-3s will keep you honest. The rest of the round will give you something back.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Santa Ponsa 1 views across the course"
          caption="The back nine opens up. The 10th is 590 metres from the tips — one of the longest par-5s in Europe."
        />

        <div className="post-cta">
          <p>Want to play Santa Ponsa 1 as part of a Mallorca golf day? I can arrange it.</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience →</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

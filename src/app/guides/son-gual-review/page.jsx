import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: 'Son Gual Golf Mallorca — A PGA Professional's Honest Review (2026)',
  description: 'Son Gual golf course Mallorca reviewed by a PGA professional who plays it regularly. Green fees, difficulty, what to expect, and why Obama and Nadal both keep coming back.',
  alternates: { canonical: 'https://mrmallorcagolf.com/guides/son-gual-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: 'Son Gual Golf Mallorca — A PGA Professional's Honest Review (2026)',
  intro: 'My most-played course on the island. The wind, the greens, the closing stretch — and why Obama and Nadal both keep coming back.',
  related: [
    { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
    { slug: 'alcanada-review', title: 'Alcanada Golf — Honest Review 2026' },
    { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
    { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>Son Gual is my most-played course in Mallorca and the one I recommend most consistently when clients ask where to play. I want to be honest about why — and honest about what makes it hard, because it is hard, and anyone booking expecting a relaxed day will be surprised.</p>

        <h2>The First Tee</h2>
        <p>The first time I played Son Gual, I was on the black tees, wind coming hard off the left, playing alongside a PGA professional friend who plays and scores well. Camera rolling for a vlog, which adds its own pressure. I was genuinely a little nervous.</p>
        <p>The drive came off the heel slightly. Still flew further than expected and avoided the bunkers — just. There are so many bunkers at Son Gual, positioned exactly where slightly mishit shots go. You're factoring in wind, elevation changes, inconsistent ball-striking, and the bunkers seem to grow larger the longer you stand contemplating them.</p>

        <h2>The Wind</h2>
        <p>Son Gual seems to live in its own ecosystem. I'll leave my house in the southwest of the island on a calm morning and arrive at the first tee to find it blowing properly — and it stays that way for four hours. Playing downwind is a pleasure. Into a headwind on a long par four that suddenly becomes a ridiculously long par four — that's a different experience.</p>

        <div className="post-pull">
          <p>"I've left my house on a calm morning and arrived at the first tee to find it blowing hard. It stayed that way for four hours."</p>
        </div>

        <h2>The Greens</h2>
        <p>Fast, raised, and unforgiving of poor approach play. In January, the greens and fringe were so tightly mown it was remarkable for that time of year. Great for spin production, uncomfortable when looking at a tight chip with a small landing area.</p>
        <p>One of my playing partners that day — a former student from China — reached for her putter believing she was on the green. She had about 30 yards of fringe still to cover. The conditioning is that meticulous.</p>

        <h2>The Course</h2>
        <p>Thomas Himmel's 2007 design uses elevation intelligently. The 2nd hole features one of Europe's largest bunkers. The closing stretch from the 15th is widely regarded as one of the finest finishing sequences in European golf — and having played it, I'd agree. Views across the Bay of Palma are best between holes 8–12. The restaurant shares that view and is worth staying for after the round.</p>

        <h2>Notable Visitors</h2>
        <p>Rafa Nadal plays here regularly — his stated favourite course on the island. Barack Obama played in November 2024, and general manager Andreas Pamer described him as genuinely likeable and said he promised to return.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€80–165</span><span className="post-fact__label">Green fee range 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">Difficulty</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Championship layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">Designed by Thomas Himmel</span></div>
        </div>

        <h2>2026 Green Fees</h2>
        <p>Low season (mid-November to December): €115. January maintenance window: €80 for 9 holes only. Peak spring and autumn (March–May, September–November): €165. Summer (July–August): €115. Full seasonal breakdown at son-gual.com.</p>
        <p>Club hire at the pro shop: Callaway €35, Titleist €45 per round. Buggy €45, electric trolley from €15. A valid WHS handicap certificate is required to book.</p>

        <h2>Verdict</h2>
        <p>Son Gual is my favourite course in Mallorca. It would stand up against any course I've played in my travels — the conditioning, the design intelligence, and the setting are exceptional. It's not a course to arrive at without your game in reasonable order, but for any golfer who wants a serious round in a serious setting, this is it.</p>

        <div className="post-cta">
          <p>I take clients to Son Gual regularly. Want to play it with someone who knows every hole?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience �</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}






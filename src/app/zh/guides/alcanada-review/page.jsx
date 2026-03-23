import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: "Club de Golf Alcanada — A PGA Professional",
  description: "Alcanada golf course Mallorca reviewed by a PGA professional who plays it regularly. The lighthouse, the greens, the restaurant terrace, and the green fees for 2026.",
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "我带人来打球时希望他们能带着故事离开的球场。灯塔改变了一切。",
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
        


        <p>Alcanada is the course I take people to when I want them to come home with a story. It might be the most memorable round on the island. The lighthouse changes everything.</p>

        <h2>The Setting</h2>
        <p>Robert Trent Jones Jr. designed Alcanada, and what he did with this stretch of coastline is remarkable. Standing on the back tees with the lighthouse behind you and the Mediterranean in every direction, it's one of those rare golf moments where the surroundings make you forget what you scored.</p>
        <p>The Alcanada lighthouse sits on a small island just off the coast, visible from 16 of the 18 holes. On a clear morning with the water calm and the light coming across the bay, it's one of the most beautiful settings I've played golf in anywhere in the world.</p>

        <h2>The Back Tees</h2>
        <p>Standing on the elevated back tees is its own experience. You feel untouchable — so far from everything else that everyone below looks like a tiny dot. The lighthouse behind you, the bay stretching out, and you're about to hit driver somewhere into the abyss. That's the feeling.</p>

        <div className="post-pull">
          <p>"Standing on the back tees at Alcanada is incredible. You feel untouchable. So far from the rest of the world. Everyone looks like a tiny dot and you're standing there, elevated, ready to hit driver somewhere into the abyss."</p>
        </div>

        <h2>The Greens</h2>
        <p>This is where Alcanada earns its right to host elite events. After navigating a difficult hole, you arrive at greens that are severely undulating, massively fast, and offering very few easy putts. Fifty-eight bunkers across the layout force accurate approaches on almost every hole.</p>
        <p>The combination of slope, speed, and subtle breaks on the greens is what separates this from a merely scenic layout into something that genuinely tests skilful players.</p>

        <h2>The Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada hosts the Rolex Challenge Tour Grand Final — returning for its sixth time in October 2026. This is not a course dressed up for a tour event. It's a course that has always been worthy of one. Playing the same holes that decide a professional's card for the season is something you notice when you're standing on the tee.</p>

        <h2>Design Pedigree</h2>
        <p>Robert Trent Jones Jr.'s father designed Valderrama — the venue of the 1997 Ryder Cup — and Spyglass Hill at Pebble Beach. RTJ Jr. also designed Spring City Golf in Kunming, ranked China's number one course by Golf Digest. The lineage is genuine, and it shows in how Alcanada is routed — nothing feels arbitrary, everything uses the land.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">Green fee range 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Difficulty</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkers</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">From Palma</span></div>
        </div>

        <h2>Practical Information</h2>
        <p>Green fees 2026: €115 low season (January, December) to €220 peak (March–May, September–October). Full seasonal breakdown at golf-alcanada.com. A daily golf licence (€3 per person) is required for non-Spanish Federation members.</p>
        <p>Club hire: TaylorMade sets at €38 per 18 holes. Buggy €48, electric trolley €20. The Toptracer range is excellent for a proper warm-up — use it.</p>
        <p>Location: Port d'Alcúdia, about 50 minutes north of Palma. Allow time and don't rush back.</p>

        <h2>The Restaurant Terrace</h2>
        <p>One of the best places on the island for a post-round lunch. The restaurant is run by Grupo Babuxa — the group behind the well-regarded Casa Gallega restaurants in Palma — Mediterranean cooking with a sea terrace directly facing the Alcanada lighthouse. Their set lunch runs around €30 per person. Factor it in — this is not a place to rush away from.</p>

        <h2>Verdict</h2>
        <p>Alcanada is the course I'd take someone to if I wanted them to fall in love with golf in Mallorca. The greens will test you. The drive north is worth it. The lunch afterwards is non-negotiable.</p>

        <div className="post-cta">
          <p>Alcanada is one of my two anchor courses for play-with-a-pro days. Want to play it properly?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}

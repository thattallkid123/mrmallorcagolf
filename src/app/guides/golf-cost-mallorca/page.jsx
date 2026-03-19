import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: 'How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown',
  description: 'Green fees, club hire, buggies, food — what golf actually costs in Mallorca in 2026. Honest breakdown from a PGA professional who plays here every week.',
  alternates: { canonical: 'https://mrmallorcagolf.com/guides/golf-cost-mallorca' },
}

const meta = {
  badge: 'Green Fees', badgeGold: false, readTime: '5 min read', updated: 'March 2026',
  title: 'How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown',
  intro: 'A round can cost €20 or €220 depending on where you play and when. Heres the honest breakdown for 2026 from someone who plays here most weeks.',
  related: [
    { slug: 'golf-club-hire-mallorca', title: 'Golf Club Hire in Mallorca — Complete Guide' },
    { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
    { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
    { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>Golf in Mallorca ranges from genuinely affordable to seriously expensive — the gap between them is bigger than most visitors expect. Here's an honest breakdown for 2026, from someone who plays here most weeks.</p>

        <h2>Green Fees</h2>

        <h3>Budget (nine-hole, pitch and putt)</h3>
        <p>€20–50. The Arabella Pitch & Putt in Palma is a proper short course at the lower end.</p>

        <h3>Mid-range 18-hole courses</h3>
        <p>Approximately €80–145 depending on season. Son Termes from €80, Bendinat €74–123, Capdepera €65–135, Canyamel €85–145, Son Servera €80–145, Vall d'Or €99–132. These are proper courses in good condition. Always check the course website for current rates — prices shift seasonally.</p>

        <h3>Premium courses</h3>
        <p>Son Gual ranges from €115 in low season to €165 at peak (March–May and September–November). Alcanada ranges from €115 in low season to €220 at peak. Both are published 2026 rate cards. Son Muntaner — named Best Golf Course in Spain at the 2025 World Golf Awards — sits in a similar bracket. Verify current rates at arabellagolfmallorca.com.</p>

        <div className="post-pull">
          <p>"Son Gual at €165 is significantly less than an equivalent course in England would charge. Mid-range courses here offer outstanding value by British standards."</p>
        </div>

        <h3>Best value months</h3>
        <p>January–February and November. Green fees at most courses drop 20–30% compared to peak, and the courses are in excellent condition. Peak is March–May and September–November — busiest, most expensive, and the best conditions of the year.</p>

        <h2>Club Hire</h2>
        <p>Course hire sets: typically €35–50 at the pro shop. Variable quality.</p>
        <p>Specialist hire companies deliver to your hotel, airport, or course. Budget sets from around €25 per day; current-season premium graphite from €55 for 2 days, up to €140 for 10 days. Weekly rates save 20–30%. Book at least a week in advance for best availability and early booking discounts.</p>

        <h2>Buggies and Trolleys</h2>
        <p>Golf buggies run €35–48 depending on the course. Son Gual charges €45, Alcanada €48 — the GPS models give you yardages and hole maps. Pull trolleys €6–8. Electric trolleys €14–25.</p>
        <p>At hillier courses like Bendinat or Son Vida, a buggy earns its cost. At the flatter championship layouts, a trolley is fine.</p>

        <h2>Food and Drink</h2>
        <p>One consistent surprise for visitors: the food is genuinely good. Son Gual's restaurant has views across the Bay of Palma that justify a long lunch. Alcanada's sea terrace is one of the best places on the island after a round. Budget €20–40 per person.</p>

        <h2>Sample Full-Day Costs</h2>
        <p><strong>Relaxed day</strong> (Son Termes, trolley, lunch): approx. €113 per person.</p>
        <p><strong>Mid-range day</strong> (Bendinat, trolley, lunch): approx. €161 peak / €112 low season.</p>
        <p><strong>Premium day</strong> at Son Gual (peak, buggy, lunch): approx. €245 per person.</p>
        <p><strong>Premium day</strong> at Alcanada (peak, buggy, lunch): approx. €306 per person.</p>

        <h2>Is Mallorca Expensive?</h2>
        <p>Compared to the UK: no. Son Gual at €165 is significantly less than an equivalent course in England would charge. Mid-range courses here offer outstanding value by British standards. Compared to the Algarve: similar at the top end, slightly cheaper in the middle. Compared to the Costa del Sol: broadly comparable at premium level.</p>

        <div className="post-cta">
          <p>Want a full premium day arranged — course, coaching, lunch, everything included?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience �</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}







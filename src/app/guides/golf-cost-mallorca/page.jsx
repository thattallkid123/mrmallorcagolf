import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: 'How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown',
  description: 'Golf costs in Mallorca 2026 — green fees, club hire, buggies, food. Complete breakdown from a PGA professional who plays here most weeks.',
  alternates: { canonical: 'https://mrmallorcagolf.com/guides/golf-cost-mallorca' },
}

const meta = {
  badge: 'Green Fees', badgeGold: false, readTime: '5 min read', updated: 'March 2026',
  title: 'How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown',
  intro: 'A round can cost €20 or €220 depending on where you play and when. Here is the honest breakdown for 2026 from someone who plays here most weeks.',
  related: [
    { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
    { slug: 'golf-club-hire-mallorca', title: 'Golf Club Hire in Mallorca' },
    { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
    { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>Golf in Mallorca ranges from genuinely affordable to seriously expensive — the gap between them is bigger than most visitors expect. Here's an honest breakdown for 2026, from someone who plays here most weeks. Incredible value compared to the prices of golf in Shanghai where I spent 11 years, but costs can creep up if you don't plan well.</p>

        <h2>Green Fees</h2>

        <h3>Budget (nine-hole, pitch and putt)</h3>
        <p>€20–50. The Arabella Pitch & Putt in Palma is a proper short course at the lower end. Great for beginners and a low-pressure environment, conveniently close to the bigger siblings in the same complex.</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-golf-cost/Arabella Pitch and Putt.jpg"
            alt="Arabella Pitch and Putt"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', marginTop: '0.25rem' }}>Arabella Pitch & Putt - Perfect for beginners</p>

        <h3>Mid-range 18-hole courses</h3>
        <p>Approximately €80–145 depending on season. Son Termes from €80, Bendinat €74–123, Capdepera €65–135, Canyamel €85–145, Son Servera €80–145, Vall d'Or €99–132. These are proper courses in great conditions and not just an after-thought. Always check the course website for current rates as prices shift seasonally.</p>

        <h3>Premium courses</h3>
        <p>Son Gual ranges from €115 in low season to €165 at peak (March–May and September–November). Alcanada ranges from €115 in low season to €220 at peak. Both are published 2026 rate cards. Son Muntaner — named Best Golf Course in Spain at the 2025 World Golf Awards — sits in a similar bracket. Verify current rates at arabellagolfmallorca.com.</p>
        <p>Many courses have dynamic pricing, so if you are looking to get a tee-time last minute, at a busy course, you'll be paying more for it! Plan early, set your priorities and save a little bit of cash. Additionally, looking on club websites for Black Friday, Christmas and other promotional deals is well worth doing. Many courses partner up to offer discounts on multiple rounds and more. Can frequently save 30-40% if you do this right!</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-golf-cost/Son Gual.jpg"
            alt="Son Gual Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', marginTop: '0.25rem' }}>Son Gual - Premium course, €115–€165</p>

        <div className="post-pull">
          <p>"Son Gual at €165 is less than an equivalent course in England would charge. Mid-range courses here offer good value by British standards."</p>
        </div>

        <h3>Best value months</h3>
        <p>January–February and November. Green fees at most courses drop 20–30% compared to peak, and the courses are in excellent condition. Peak is March–May and September–November — busiest, most expensive, and the best conditions of the year.</p>

        <h2>Club Hire</h2>
        <p>Course hire sets: typically €35–50 at the pro shop. Variable quality.</p>
        <p>Specialist hire companies deliver to your hotel, airport, or course. Budget sets from around €25 per day; current-season premium options from €55 for 2 days and then discount kicks in for longer trips and around €140 for 10 days. Weekly rates save 20–30%. Book at least a week in advance for best availability of the right clubs for you, and early booking discounts.</p>

        <h2>Buggies and Trolleys</h2>
        <p>Golf buggies run €35–48 depending on the course. Son Gual charges €45, Alcanada €48 — the GPS models give you yardages and hole maps. Pull trolleys €6–8. Electric trolleys €14–25.</p>
        <p>At hillier courses like Bendinat, Andratx or Son Vida, a buggy earns its cost. At the flatter courses (Son Antem, Maioris, Santa Ponsa and more), a trolley is fine.</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-golf-cost/T Golf Calvia Buggies.jpg"
            alt="Golf buggies in use"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', marginTop: '0.25rem' }}>Buggies available at €35–€48 per round</p>

        <h2>Food and Drink</h2>
        <p>One consistent surprise for visitors: the food is genuinely good. Son Gual's restaurant has views across the Bay of Palma that justify a long lunch. Alcanada's terrace views is one of the best places on the island after a round. Great food options at Andratx and Pula. Budget €20–40 per person.</p>

        <h2>Sample Full-Day Costs</h2>
        <ul>
          <li><strong>Relaxed day</strong> (Son Termes, trolley, lunch): approx. €110 per person.</li>
          <li><strong>Mid-range day</strong> (Bendinat, trolley, lunch): approx. €160 peak / €110 low season.</li>
          <li><strong>Premium day at Son Gual</strong> (peak, buggy, lunch): approx. €245 per person.</li>
          <li><strong>Premium day at Alcanada</strong> (peak, buggy, lunch): approx. €300 per person.</li>
        </ul>

        <h2>Is Mallorca Expensive?</h2>
        <p>Compared to the UK: no. Many cheaper options than other golfing destinations in Europe. Mid-range courses specifically here offer outstanding value by British standards. Compared to the Algarve: similar at the top end, slightly cheaper in the middle. Compared to the Costa del Sol: broadly comparable at premium level.</p>

        <div className="post-cta">
          <p>Want a full premium day arranged — course, coaching, lunch, everything included?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience →</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

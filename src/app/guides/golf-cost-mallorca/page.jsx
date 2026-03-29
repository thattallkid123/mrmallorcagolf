import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown",
  description: "Golf costs in Mallorca 2026 â€” green fees, club hire, buggies, food. Complete breakdown from a PGA professional who plays here most weeks.",
  alternates: {
    canonical: "https://mrmallorcagolf.com/guides/golf-cost-mallorca",
    languages: {
      'en': "https://mrmallorcagolf.com/guides/golf-cost-mallorca",
      'x-default': "https://mrmallorcagolf.com/guides/golf-cost-mallorca",
    }
  },
  openGraph: {
    type: 'article',
    url: "https://mrmallorcagolf.com/guides/golf-cost-mallorca",
    title: "How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown",
    description: "Golf costs in Mallorca 2026 â€” green fees, club hire, buggies, food. Complete breakdown from a PGA professional who plays here most weeks.",
    publishedTime: '2026-03-01',
    authors: ['Andy Griffiths'],
    images: [{ url: "https://mrmallorcagolf.com/images/blog-golf-cost/Arabella Pitch and Putt.jpg", width: 1200, height: 630, alt: "How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown",
    description: "Golf costs in Mallorca 2026 â€” green fees, club hire, buggies, food. Complete breakdown from a PGA professional who plays here most weeks.",
    images: ["https://mrmallorcagolf.com/images/blog-golf-cost/Arabella Pitch and Putt.jpg"],
  },
}

const meta = {
  badge: 'Green Fees', badgeGold: false, readTime: '5 min read', updated: 'March 2026',
  title: 'How Much Does Golf Cost in Mallorca? A Complete 2026 Breakdown',
  intro: 'A round can cost â‚¬20 or â‚¬220 depending on where you play and when. Here is the honest breakdown for 2026 from someone who plays here most weeks.',
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

        <p>Golf in Mallorca ranges from genuinely affordable to seriously expensive â€” the gap between them is bigger than most visitors expect. Here's an honest breakdown for 2026, from someone who plays here most weeks. Incredible value compared to the prices of golf in Shanghai where I spent 11 years, but costs can creep up if you don't plan well.</p>

        <h2>Green Fees</h2>

        <h3>Budget (nine-hole, pitch and putt)</h3>
        <p>â‚¬20â€“50. The Arabella Pitch & Putt in Palma is a proper short course at the lower end. Great for beginners and a low-pressure environment, conveniently close to the bigger siblings in the same complex.</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-golf-cost/Arabella Pitch and Putt.jpg"
            alt="Arabella Pitch and Putt"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Arabella Pitch & Putt - Perfect for beginners</p>

        <h3>Mid-range 18-hole courses</h3>
        <p>Approximately â‚¬80â€“145 depending on season. Son Termes from â‚¬80, Bendinat â‚¬74â€“123, Capdepera â‚¬65â€“135, Canyamel â‚¬85â€“145, Son Servera â‚¬80â€“145, Vall d'Or â‚¬99â€“132. These are proper courses in great conditions and not just an after-thought. Always check the course website for current rates as prices shift seasonally.</p>

        <h3>Premium courses</h3>
        <p>Son Gual ranges from â‚¬115 in low season to â‚¬165 at peak (Marchâ€“May and Septemberâ€“November). Alcanada ranges from â‚¬115 in low season to â‚¬220 at peak. Both are published 2026 rate cards. Son Muntaner â€” named Best Golf Course in Spain at the 2025 World Golf Awards â€” sits in a similar bracket. Verify current rates at arabellagolfmallorca.com.</p>
        <p>Many courses have dynamic pricing, so if you are looking to get a tee-time last minute, at a busy course, you'll be paying more for it! Plan early, set your priorities and save a little bit of cash. Additionally, looking on club websites for Black Friday, Christmas and other promotional deals is well worth doing. Many courses partner up to offer discounts on multiple rounds and more. Can frequently save 30-40% if you do this right!</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-golf-cost/Son Gual.jpg"
            alt="Son Gual Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Son Gual - Premium course, â‚¬115â€“â‚¬165</p>

        <div className="post-pull">
          <p>"Son Gual at â‚¬165 is less than an equivalent course in England would charge. Mid-range courses here offer good value by British standards."</p>
        </div>

        <h3>Best value months</h3>
        <p>Januaryâ€“February and November. Green fees at most courses drop 20â€“30% compared to peak, and the courses are in excellent condition. Peak is Marchâ€“May and Septemberâ€“November â€” busiest, most expensive, and the best conditions of the year.</p>

        <h2>Club Hire</h2>
        <p>Course hire sets: typically â‚¬35â€“50 at the pro shop. Variable quality.</p>
        <p>Specialist hire companies deliver to your hotel, airport, or course. Budget sets from around â‚¬25 per day; current-season premium options from â‚¬55 for 2 days and then discount kicks in for longer trips and around â‚¬140 for 10 days. Weekly rates save 20â€“30%. Book at least a week in advance for best availability of the right clubs for you, and early booking discounts.</p>

        <h2>Buggies and Trolleys</h2>
        <p>Golf buggies run â‚¬35â€“48 depending on the course. Son Gual charges â‚¬45, Alcanada â‚¬48 â€” the GPS models give you yardages and hole maps. Pull trolleys â‚¬6â€“8. Electric trolleys â‚¬14â€“25.</p>
        <p>At hillier courses like Bendinat, Andratx or Son Vida, a buggy earns its cost. At the flatter courses (Son Antem, Maioris, Santa Ponsa and more), a trolley is fine.</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-golf-cost/T Golf Calvia Buggies.jpg"
            alt="Golf buggies in use"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Buggies available at â‚¬35â€“â‚¬48 per round</p>

        <h2>Food and Drink</h2>
        <p>One consistent surprise for visitors: the food is genuinely good. Son Gual's restaurant has views across the Bay of Palma that justify a long lunch. Alcanada's terrace views is one of the best places on the island after a round. Great food options at Andratx and Pula. Budget â‚¬20â€“40 per person.</p>

        <h2>Sample Full-Day Costs</h2>
        <ul>
          <li><strong>Relaxed day</strong> (Son Termes, trolley, lunch): approx. â‚¬110 per person.</li>
          <li><strong>Mid-range day</strong> (Bendinat, trolley, lunch): approx. â‚¬160 peak / â‚¬110 low season.</li>
          <li><strong>Premium day at Son Gual</strong> (peak, buggy, lunch): approx. â‚¬245 per person.</li>
          <li><strong>Premium day at Alcanada</strong> (peak, buggy, lunch): approx. â‚¬300 per person.</li>
        </ul>

        <h2>Is Mallorca Expensive?</h2>
        <p>Compared to the UK: no. Many cheaper options than other golfing destinations in Europe. Mid-range courses specifically here offer outstanding value by British standards. Compared to the Algarve: similar at the top end, slightly cheaper in the middle. Compared to the Costa del Sol: broadly comparable at premium level.</p>

        <div className="post-cta">
          <p>Want a full premium day arranged â€” course, coaching, lunch, everything included?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience â†’</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}


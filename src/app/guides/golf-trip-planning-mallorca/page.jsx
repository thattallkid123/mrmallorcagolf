import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)",
  description: "Planning a golf trip to Mallorca? Which courses, when to go, how many rounds, transport, clubs, and what to do when you're off the course. By a PGA professional based on the island.",
  alternates: {
    canonical: 'https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
    languages: {
      'en': 'https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
      'de': 'https://mrmallorcagolf.com/de/guides/golf-trip-planning-mallorca',
      'es': 'https://mrmallorcagolf.com/es/guides/golf-trip-planning-mallorca',
      'fr': 'https://mrmallorcagolf.com/fr/guides/golf-trip-planning-mallorca',
      'zh': 'https://mrmallorcagolf.com/zh/guides/golf-trip-planning-mallorca',
      'sv': 'https://mrmallorcagolf.com/sv/guides/golf-trip-planning-mallorca',
      'nl': 'https://mrmallorcagolf.com/nl/guides/golf-trip-planning-mallorca',
      'x-default': 'https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
    },
  },
}

const meta = {
  badge: 'Trip Planning', badgeGold: false, readTime: '7 min read', updated: 'March 2026',
  title: "How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)",
  intro: "No tourism copy, no padding. Which courses, when to go, how many rounds, getting around, and what to do when you're not on the course.",
  related: [
    { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
    { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
    { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
    { slug: 'golf-club-hire-mallorca', title: 'Golf Club Hire in Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>I moved to Mallorca in March 2025 and have been playing golf here every week since. Before that, eleven years in Shanghai â€” a city where serious golfers think nothing of spending â‚¬200 on a single lesson, where access to a course often means a membership costing more than most people's annual salary. Moving here felt like arriving somewhere that had quietly been one of Europe's best-kept golf secrets.</p>
        <p>This is what I'd tell a friend planning a trip. No tourism copy, no padding.</p>

        <h2>When to Go</h2>
        <p>Octoberâ€“November and Februaryâ€“April are the best months. Courses in peak condition, comfortable temperatures (18â€“24Â°C), lower green fees than summer, fewer groups on the course. October is my personal favourite.</p>
        <p>May and June are excellent, but prices rise. Julyâ€“August: hot (35Â°C+), expensive, busiest. Early tee times essential. Decemberâ€“January: cheaper, variable weather but often outstanding. A clear January day here is extraordinary.</p>

        <h2>How Many Rounds?</h2>
        <p>One round per day is comfortable for most golfers â€” the courses are demanding, and summer heat is real. In shoulder season, 36 holes a day is possible if you're motivated. Most visitors on a 5â€“7-day trip play 4â€“5 rounds.</p>

        <h2>Which Courses to Prioritise</h2>
        <p><strong>Serious golfers, limited time:</strong> Son Gual and Alcanada. These are my two if I had one week and two rounds.</p>
        <p><strong>DP World Tour experience:</strong> Son Muntaner (Arabella). Five minutes from Palma, Best in Spain 2025.</p>
        <p><strong>Scenic east coast:</strong> Canyamel and Pula. Worth combining with a night in ArtÃ  or Capdepera town.</p>
        <p><strong>Hardest test:</strong> Golf de Andratx, southwest.</p>
        <p><strong>Beginners or mixed groups:</strong> Son Quint (Arabella), Son Antem East, or shorter courses.</p>

        <div className="post-pull">
          <p>"Son Gual and Alcanada are the two courses I'd play if I had one week on the island. The rest fills a second week."</p>
        </div>

        <h2>Getting Around</h2>
        <p>A hire car is the most practical option. Most of the best courses are 20â€“60 minutes from Palma and public transport doesn't serve them. Roads are good; traffic is manageable outside peak summer.</p>

        <h2>Clubs</h2>
        <p>Bring your own for three rounds or more. Hire for a mixed holiday with one or two rounds planned. See the club hire guide for recommendations on the best companies â€” there are some genuinely good options that deliver to your hotel.</p>

        <h2>What Else to Do</h2>
        <p>Old town Palma is genuinely beautiful. The northwest coast (Valldemossa, DeiÃ , SÃ³ller) is some of the most dramatic scenery in the Mediterranean. The northeast is quieter and wilder. The food â€” local seafood, island wine â€” is excellent.</p>
        <p>A golf trip that doesn't include at least one long lunch somewhere unexpected is only doing half the job. The clubhouse restaurants at Son Gual and Alcanada are both worth staying for. In Palma, the old town around La Llotja has excellent tapas and fresh fish.</p>
        <p>Build in at least one afternoon where you don't have a tee time. The island rewards it. The golf is the reason to come â€” the rest is the reason to come back.</p>

        <div className="post-cta">
          <p>Want the trip arranged properly â€” courses, tee times, restaurants, transport, PGA professional throughout?</p>
          <a href="/contact">Get in touch to start planning â†’</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

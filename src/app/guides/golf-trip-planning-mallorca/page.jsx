import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)",
  description: "Planning a golf trip to Mallorca? Which courses, when to go, how many rounds, transport, clubs, and what to do when youâ€™re off the course. By a PGA professional based on the island.",
  alternates: {
    canonical: "https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca",
    languages: {
      'en': "https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca",
      'x-default': "https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca",
    }
  },
  openGraph: {
    type: 'article',
    url: "https://mrmallorcagolf.com/guides/golf-trip-planning-mallorca",
    title: "How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)",
    description: "Planning a golf trip to Mallorca? Which courses, when to go, how many rounds, transport, clubs, and what to do when youâ€™re off the course. By a PGA professional based on the island.",
    publishedTime: '2026-03-01',
    authors: ['Andy Griffiths'],
    images: [{ url: "https://mrmallorcagolf.com/images/blog-trip-planning/Son Gual.jpg", width: 1200, height: 630, alt: "How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)",
    description: "Planning a golf trip to Mallorca? Which courses, when to go, how many rounds, transport, clubs, and what to do when youâ€™re off the course. By a PGA professional based on the island.",
    images: ["https://mrmallorcagolf.com/images/blog-trip-planning/Son Gual.jpg"],
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

        <p>I moved to Mallorca in March 2025 and have been playing golf here every week since. Before that, eleven years in Shanghai, a city where golfers think nothing of spending â‚¬200 on a single lesson, where access to a course often means a membership costing more than most people's annual salary. Moving here felt like arriving somewhere that had quietly been one of Europe's best-kept golf secrets.</p>
        <p>This is what I'd tell a friend planning a trip without tourism copy and extra fluff.</p>

        <h2>When to Go</h2>
        <p>Octoberâ€“November and Februaryâ€“April are the best months. Courses in peak condition, comfortable temperatures (18â€“24Â°C), lower green fees than summer, fewer groups on the course. October is my personal favourite.</p>
        <p>May and June are excellent, but prices rise. Julyâ€“August: hot (35Â°C+), expensive, busiest. Early tee times essential. Decemberâ€“January: cheaper, variable weather but often outstanding. A clear January day here is extraordinary.</p>

        <h2>How Many Rounds?</h2>
        <p>One round per day is comfortable for most golfers â€” the courses are demanding, and summer heat is real. In cooler times, 36 holes a day is possible if that keen but most "golf only" visitors on a 5â€“7-day trip play 4â€“5 rounds.</p>

        <h2>Which Courses to Prioritise</h2>
        <p><strong>Serious golfers, limited time:</strong> Son Gual and Alcanada. These are my two if I had one week and two rounds.</p>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-trip-planning/Son Gual.jpg"
            alt="Son Gual Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Son Gual - Must-play course for serious golfers</p>
        <p><strong>DP World Tour experience:</strong> Son Muntaner (Arabella). Five minutes from Palma, Best in Spain 2025.</p>
        <p><strong>Scenic east coast:</strong> Canyamel and Pula. Worth combining with a night in ArtÃ  or Capdepera town.</p>
        <p><strong>Hardest test:</strong> Golf de Andratx, southwest.</p>
        <p><strong>Beginners or mixed groups:</strong> Son Quint (Arabella), Son Antem East, or shorter courses.</p>

        <div className="post-pull">
          <p>"Son Gual and Alcanada are the two courses I'd play if I had one week on the island. The rest fills a second week."</p>
        </div>

        <h2>Getting Around</h2>
        <p>A hire car is the most practical option. Most of the best courses are 20â€“60 minutes from Palma and public transport doesn't serve them. Roads are good; traffic is manageable outside peak summer.</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0' }}>
          <Image
            src="/images/blog-trip-planning/Mallorca Car Hire.png"
            alt="Car hire in Mallorca"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666', marginTop: '-0.5rem' }}>Car hire essential for accessing the best courses</p>

        <h2>Clubs</h2>
        <p>Bring your own for three rounds or more. Hire for a mixed holiday with one or two rounds planned. See the club hire guide for recommendations on the best companies, there are some great options that deliver to your hotel or course and make life easier than lugging through an airport and praying for no snapped shafts!</p>

        <h2>What Else to Do</h2>
        <p>Old town Palma is genuinely beautiful. The northwest coast (Valldemossa, DeiÃ , SÃ³ller) is some of the most dramatic scenery in the Mediterranean. The northeast is quieter and wilder. The food â€” local seafood, island wine â€” is excellent.</p>
        <div style={{ position: 'relative', width: '100%', height: '280px', margin: '1.5rem 0' }}>
          <Image
            src="/images/blog-trip-planning/Old Town Palma.jpg"
            alt="Old Town Palma"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666', marginTop: '-0.5rem' }}>Old Town Palma - worth a day away from the course</p>
        <p>A golf trip that doesn't include at least one long lunch somewhere unexpected is only doing half the job. Build in at least one afternoon where you don't have a tee time and explore. The golf might be the reason to come but the rest will make you want to come back soon.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
          <div>
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image
                src="/images/blog-trip-planning/Valldemossa.avif"
                alt="Valldemossa"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Valldemossa - dramatic northwest coast</p>
          </div>
          <div>
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image
                src="/images/blog-trip-planning/Soller.jpeg"
                alt="Soller"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>SÃ³ller - classic Mediterranean town</p>
          </div>
        </div>

        <div className="post-cta">
          <p>Want the trip arranged properly â€” courses, tee times, restaurants, transport, PGA professional throughout?</p>
          <a href="/contact">Get in touch to start planning â†’</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}


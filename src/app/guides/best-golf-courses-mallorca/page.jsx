import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "The Best Golf Courses in Mallorca — A PGA Professional’s Honest Guide (2026)",
  description: "The best golf courses in Mallorca ranked and reviewed by a PGA professional based on the island. Son Gual, Alcanada, Son Muntaner, and more — honest first-hand takes.",
  alternates: {
    canonical: "https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca",
    languages: {
      'en': "https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca",
      'x-default': "https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca",
    }
  },
  openGraph: {
    type: 'article',
    url: "https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca",
    title: "The Best Golf Courses in Mallorca — A PGA Professional’s Honest Guide (2026)",
    description: "The best golf courses in Mallorca ranked and reviewed by a PGA professional based on the island. Son Gual, Alcanada, Son Muntaner, and more — honest first-hand takes.",
    publishedTime: '2026-03-01',
    authors: ['Andy Griffiths'],
    images: [{ url: "https://www.mrmallorcagolf.com/images/blog-best-golf-courses/Son Gual.jpg", width: 1200, height: 630, alt: "The Best Golf Courses in Mallorca — A PGA Professional’s Honest Guide (2026)" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Best Golf Courses in Mallorca — A PGA Professional’s Honest Guide (2026)",
    description: "The best golf courses in Mallorca ranked and reviewed by a PGA professional based on the island. Son Gual, Alcanada, Son Muntaner, and more — honest first-hand takes.",
    images: ["https://www.mrmallorcagolf.com/images/blog-best-golf-courses/Son Gual.jpg"],
  },
}

const meta = {
  badge: 'Course Guide', badgeGold: true, readTime: '8 min read', updated: 'March 2026',
  title: "The Best Golf Courses in Mallorca — A PGA Professional's Honest Guide (2026)",
  intro: "Mallorca has more outstanding golf than most visitors realise. Twenty-two courses, several of genuine European Tour standard. Here's what I know from playing them.",
  related: [
    { slug: 'son-gual-review', title: "Son Gual Golf — Honest Review 2026" },
    { slug: 'alcanada-review', title: "Alcanada Golf — Honest Review 2026" },
    { slug: 'golf-trip-planning-mallorca', title: "How to Plan the Perfect Golf Trip to Mallorca" },
    { slug: 'best-time-play-golf-mallorca', title: "Best Time of Year to Play Golf in Mallorca" },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>Mallorca — or Majorca if you grew up spelling it that way — is a much better golf destination than most people realise. I moved here from Shanghai in March 2025, where I'd spent eleven years coaching in a city of 27 million people with not enough golf courses between them. Mostly built to championship standards as there was no point having anything there that wasn't the "best". Arriving on an island with 22 courses, many hosting international competitions, in conditions that stay quality even through the winter, felt like discovering a secret.</p>
        <p>I'm a PGA Advanced Professional and I'm working my way through every course on the island — playing them, reviewing them honestly, working out what makes each one worth the trip and taking my guests along too to learn. Below is what I know so far.</p>

        <h2>The Top Courses — By Purpose</h2>

        <h3>For a Serious Championship Round: Son Gual</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Son Gual.jpg"
            alt="Son Gual Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Son Gual - Championship Test Course</p>
        <p>My most-played course on the island and the one I recommend most often for a proper test. Thomas Himmel's design sits in its own wind ecosystem in the hills above Palma — I've left my house, full of confidence, on a calm morning and arrived at the first tee to find it blowing hard and staying that way for the whole round. The greens are fast, raised, and unforgiving. The bunkering is aggressive and makes strategy and ball striking need to be top level and the closing stretch is genuinely outstanding.</p>
        <p>Rafa Nadal's stated favourite course on the island. Barack Obama played here in November 2024. Green fees: from €115 in low season to €165 at peak. Handicap certificate required.</p>

        <h3>For the Most Scenic Round: Alcanada</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Alcanada.jpg"
            alt="Alcanada Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Alcanada - Most Scenic Course</p>
        <p>Robert Trent Jones Jr. design in the north of the island, with a lighthouse visible from 16 of the 18 holes. Standing on the back tees on number 7, elevated way above the bay, with everyone below looking like tiny dots and the lighthouse and expanse of water taking up the whole horizon — is one of those moments that reminds you why you play golf. The greens are severe, can get extremely fast, and is a real challenge. The drive north from Palma takes about 50 minutes. Worth every minute.</p>
        <p>Green fees: €115 (low season) to €220 (peak spring and autumn).</p>

        <h3>For a DP World Tour Experience: Son Muntaner</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Son Muntaner.webp"
            alt="Son Muntaner Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Son Muntaner - Spain's Best Golf Course 2025</p>
        <p>Named Best Golf Course in Spain at the 2025 World Golf Awards and well deserved. Hosted the Mallorca Golf Open and Ladies European Tour events. Wide fairways, but a lot of hazards and pine trees to guide you, technically demanding greens, fantastic conditioning and a really good test of golf just five minutes from central Palma.</p>

        <h3>For the Hardest Test: Golf de Andratx</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Andratx.webp"
            alt="Golf de Andratx"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Andratx - Hardest Test on the Island</p>
        <p>Widely considered as 1 of the most difficult course on the island. A championship layout in the southwest with breathtaking scenery and hazards on near enough every hole. The 6th is the longest par 5 in the whole of Spain at 609 metres. Recommended for experienced players, and bring extra balls! Green fees approximately €96 to €140 depending on season.</p>

        <h3>For the Most Beautiful Setting: Canyamel</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Canyamel.webp"
            alt="Canyamel Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Canyamel - Most Photographed Course</p>
        <p>Described by many as the most photographed course on the island. Set in the foothills of the Llevant Natural Park in the east, with sea views throughout. Worth the drive from Palma for the setting, and a genuinely good course beyond the aesthetics.</p>

        <h3>Also Worth Playing: Golf Santa Ponsa 1</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Santa Ponsa 1.jpg"
            alt="Santa Ponsa 1 Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Santa Ponsa 1 - European Tour History</p>
        <p>The only public course in the Santa Ponsa group, with genuine European Tour history — it hosted the 2021 DP World Tour Mallorca Golf Open and 6 European Tour Events. One of the longest courses on the island, with open fairways that reward an aggressive approach from the tee and good opportunities to hit driver.</p>

        <h3>For Beginners or Mixed Groups: Son Quint or Son Antem East</h3>
        <div style={{ position: 'relative', width: '100%', height: '300px', margin: '1.5rem 0 0.5rem 0' }}>
          <Image
            src="/images/blog-best-golf-courses/Tiger and Charlie Son Quint.jpg"
            alt="Son Quint Golf Course"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>Son Quint - Where Tiger Woods and son Charlie played 2022</p>
        <p>Son Quint is the most accessible course in the Arabella group (4 courses in 1 complex) — relatively flat, wide fairways, native planting and low intimidation factor. Set high up, it has great views over Palma. Tiger Woods and his son Charlie played here in July 2022 after the Ryder Cup. Son Antem East in the south is similarly flat and forgiving but with a good amount of water, bunkers and trees to be interesting and with a hotel resort if you want to combine with accommodation.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">22</span><span className="post-fact__label">Courses on the island</span></div>
          <div className="post-fact__item"><span className="post-fact__val">€20–220</span><span className="post-fact__label">Green fee range</span></div>
          <div className="post-fact__item"><span className="post-fact__val">300</span><span className="post-fact__label">Days of sunshine</span></div>
          <div className="post-fact__item"><span className="post-fact__val">12 mo</span><span className="post-fact__label">Playable year-round</span></div>
        </div>

        <h2>Celebrity Connections Worth Knowing</h2>
        <p><strong>Son Gual:</strong> Obama played November 2024. Nadal plays regularly — his stated favourite.</p>
        <p><strong>Son Quint (Arabella):</strong> Tiger Woods and his son Charlie played July 2022, the week after The Open at St Andrews.</p>
        <p><strong>Pula (east):</strong> Federer and Nadal play together when on the island and Nadal is there frequently.</p>
        <p><strong>Son Vida:</strong> Seve Ballesteros won the European Tour event here in 1990.</p>
        <p><strong>Santa Ponsa:</strong> Hosted 6 European Tour Events and all the big names of the time playing, including Spanish legends Seve Ballesteros and José María Olazábal alongside Ian Woosnam, Bernhard Langer and more.</p>

        <h2>The Honest Summary</h2>
        <p>Son Gual and Alcanada are the two courses I'd play if I had one week on the island. Son Muntaner for a DP World Tour experience. Canyamel for the scenery. Andratx for a serious test. Son Quint or Son Antem if you're a beginner or bringing someone new to the game. As I keep exploring more, I am sure I will find more gems as the island has enough quality to fill a week of serious golf. Most visitors play one or two courses and miss a lot of what's available!</p>

        <div className="post-pull">
          <p>"The island has been one of Europe's best-kept golf secrets. I arrived from Shanghai and the conditions in January — when courses in England are closed — genuinely surprised me."</p>
        </div>

        <div className="post-cta">
          <p>Want to play one of these courses with a PGA professional alongside you?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience →</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

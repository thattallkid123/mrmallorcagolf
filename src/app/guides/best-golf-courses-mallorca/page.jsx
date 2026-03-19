import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "The Best Golf Courses in Mallorca â€” A PGA Professional's Honest Guide (2026)",
  description: "The best golf courses in Mallorca ranked and reviewed by a PGA professional based on the island. Son Gual, Alcanada, Son Muntaner, and more â€” honest first-hand takes.",
  alternates: { canonical: 'https://mrmallorcagolf.com/guides/best-golf-courses-mallorca' },
}

const meta = {
  badge: 'Course Guide', badgeGold: true, readTime: '8 min read', updated: 'March 2026',
  title: "The Best Golf Courses in Mallorca â€” A PGA Professional's Honest Guide (2026)",
  intro: "Mallorca has more outstanding golf than most visitors realise. Twenty-two courses, several of genuine European Tour standard. Here's what I know from playing them.",
  related: [
    { slug: 'son-gual-review', title: "Son Gual Golf â€” Honest Review 2026" },
    { slug: 'alcanada-review', title: "Alcanada Golf â€” Honest Review 2026" },
    { slug: 'golf-trip-planning-mallorca', title: "How to Plan the Perfect Golf Trip to Mallorca" },
    { slug: 'best-time-play-golf-mallorca', title: "Best Time of Year to Play Golf in Mallorca" },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>Mallorca â€” or Majorca if you grew up spelling it that way â€” is a better golf destination than most people realise. I moved here from Shanghai in March 2025, where I'd spent eleven years coaching in a city of 27 million people with 12 golf courses between them. Arriving on an island with 22 courses, several of genuine European Tour standard, in conditions that stay immaculate through the winter, felt like discovering a secret.</p>
        <p>I'm a PGA Advanced Professional and I'm working my way through every course on the island â€” playing them, reviewing them honestly, working out what makes each one worth the trip. Below is what I know so far.</p>

        <h2>The Top Courses â€” By Purpose</h2>

        <h3>For a Serious Championship Round: Son Gual</h3>
        <p>My most-played course on the island and the one I recommend most often for a proper test. Thomas Himmel's design sits in its own wind ecosystem in the hills above Palma â€” I've left my house on a calm morning and arrived at the first tee to find it blowing hard and staying that way for four hours. The greens are fast, raised, and unforgiving. The bunkering is aggressive â€” enormous traps positioned exactly where slightly mishit shots go. The closing stretch from the 15th is genuinely outstanding.</p>
        <p>Rafa Nadal's stated favourite course on the island. Barack Obama played here in November 2024. Green fees: from â‚¬115 in low season to â‚¬165 at peak. Handicap certificate required.</p>

        <h3>For the Most Scenic Round: Alcanada</h3>
        <p>Robert Trent Jones Jr. design in the north of the island, with a lighthouse visible from 16 of the 18 holes. Standing on the back tees, elevated above the bay, with everyone below looking like tiny dots and the lighthouse behind you â€” it's one of those moments that reminds you why you play golf. The greens are severe and extremely fast, which is why the course hosts elite-level events. The drive north from Palma takes about 50 minutes. Worth every minute.</p>
        <p>Green fees: â‚¬115 (low season) to â‚¬220 (peak spring and autumn).</p>

        <h3>For a DP World Tour Experience: Son Muntaner</h3>
        <p>Named Best Golf Course in Spain at the 2025 World Golf Awards â€” the only course in the Balearics with this recognition. Hosted the Mallorca Golf Open and the Ladies European Tour event. Wide fairways, technically demanding greens, five minutes from Palma.</p>

        <h3>For the Hardest Test: Golf de Andratx</h3>
        <p>Widely considered the most difficult course on the island. Championship layout in the southwest with breathtaking scenery and hazards on every hole. The 6th is the longest par 5 in Spain at 609 metres. Experienced players only â€” and bring extra balls. Green fees approximately â‚¬96 to â‚¬140 depending on season.</p>

        <h3>For the Most Beautiful Setting: Canyamel</h3>
        <p>Consistently described as the most photographed course on the island. Set in the foothills of the Llevant Natural Park in the east, with sea views throughout. Worth the drive from Palma for the setting, and a genuinely good course beyond the aesthetics.</p>

        <h3>Also Worth Playing: Golf Santa Ponsa 1</h3>
        <p>The only public course in the Santa Ponsa group, with genuine European Tour history â€” it hosted the 2021 DP World Tour Mallorca Golf Open. One of the longest courses on the island, with open fairways that reward an aggressive approach from the tee.</p>

        <h3>For Beginners or Mixed Groups: Son Quint or Son Antem East</h3>
        <p>Son Quint is the most accessible course in the Arabella complex â€” flat, wide fairways, native planting, no intimidation factor. Tiger Woods and his son Charlie played here in July 2022. Son Antem East in the south is similarly flat and forgiving, with a hotel resort if you want to combine with accommodation.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">22</span><span className="post-fact__label">Courses on the island</span></div>
          <div className="post-fact__item"><span className="post-fact__val">â‚¬20â€“220</span><span className="post-fact__label">Green fee range</span></div>
          <div className="post-fact__item"><span className="post-fact__val">300</span><span className="post-fact__label">Days of sunshine</span></div>
          <div className="post-fact__item"><span className="post-fact__val">12 mo</span><span className="post-fact__label">Playable year-round</span></div>
        </div>

        <h2>Celebrity Connections Worth Knowing</h2>
        <p><strong>Son Gual:</strong> Obama played November 2024. Nadal plays regularly â€” his stated favourite.</p>
        <p><strong>Son Quint (Arabella):</strong> Tiger Woods and his son Charlie played July 2022, the week after The Open at St Andrews.</p>
        <p><strong>Pula (east):</strong> Federer and Nadal played together July 2025.</p>
        <p><strong>Son Vida:</strong> Seve Ballesteros won the European Tour here in 1990.</p>

        <h2>The Honest Summary</h2>
        <p>Son Gual and Alcanada are the two courses I'd play if I had one week on the island. Son Muntaner for a DP World Tour experience. Canyamel for the scenery. Andratx for a serious test. Son Quint or Son Antem if you're a beginner or bringing someone new to the game.</p>
        <p>The island has enough quality to fill a week of serious golf. Most visitors play one or two courses and miss most of what's available. That's what this guide is for.</p>

        <div className="post-pull">
          <p>"The island has been one of Europe's best-kept golf secrets. I arrived from Shanghai and the conditions in January â€” when courses in England are closed â€” genuinely surprised me."</p>
        </div>

        <div className="post-cta">
          <p>Want to play one of these courses with a PGA professional alongside you?</p>
          <a href="/play-with-a-pro">See the play-with-a-pro experience â†’</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'

export const metadata = {
  title: "Son Termes Golf, Mallorca — A PGA Professional's Honest Review (2026)",
  description: "Son Termes golf course Mallorca reviewed by a PGA professional. Mountain views, honest course notes, green fees, and who it suits — from someone who played it this week.",
  alternates: { canonical: 'https://mrmallorcagolf.com/guides/son-termes-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '5 min read', updated: 'April 2026',
  title: "Son Termes Golf, Mallorca — A PGA Professional's Honest Review (2026)",
  intro: "Twenty minutes from Palma, up in the Na Burguesa mountains. More character than most courses at this price level — and better views than anywhere else close to the city.",
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
    { slug: 'alcanada-review', title: 'Alcanada Golf — Honest Review 2026' },
    { slug: 'son-muntaner-review', title: 'Son Muntaner — Best Golf Course in Spain 2025' },
    { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
  ],
}

function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && (
        <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <PostImage
          src="/images/son-termes-blog/st-2.jpg"
          alt="Goat on Son Termes golf course Mallorca with Palma in background"
          caption="The ball is mine. The goat was not invited. Back nine, Son Termes."
        />

        <p>I played Son Termes on a Friday morning with a friend on a 20 handicap. By the back nine he was running low on balls. The rough is tight, several tee shots give you very little room, and the course collects misses in a way that is not obvious from the card. That is a reasonable summary of what Son Termes is.</p>

        <p>Son Termes sits in the Na Burguesa mountains above Palma. Twenty minutes from the city centre and a different world. On a clear day from the higher tees you can see Castell de Bellver and the cathedral on the Palma skyline, with the Mediterranean behind them. Coming from Shanghai, where a course this accessible and this scenic would have a five-year waiting list for membership, that still registers.</p>

        <h2>The Walk</h2>

        <p>I always try to walk. On the front nine at Son Termes that is straightforward. On the back nine it becomes a genuine conversation with yourself. Several climbs are steep enough to push the heart rate, and by the time you reach the upper holes two things have happened: the views have improved considerably, and the wind has picked up enough to make distance control on the par 3s harder than the yardages suggest. Most players take a buggy. On a warm day, that is the right call.</p>

        <PostImage
          src="/images/son-termes-blog/st-1.jpg"
          alt="Tee shot at Son Termes golf course Mallorca with mountains behind"
          caption="Tee shot at Son Termes, Na Burguesa mountains behind."
        />

        <h2>How the Course Plays</h2>

        <p>Son Termes is not a long course. Several par 4s are driveable or close to it, leaving short irons or wedges for the approach. For a low handicapper looking for a length test, that is worth knowing going in.</p>

        <p>What it lacks in length it makes up for in character. Blind tee shots, sharp doglegs, artificial water placed to catch the shot most golfers instinctively want to play. Several holes require you to commit to a target you cannot fully see. That keeps the round interesting from start to finish, and it means a second visit will almost always produce a better score.</p>

        <PostImage
          src="/images/son-termes-blog/st-6.jpg"
          alt="Son Termes golf course Mallorca Na Burguesa mountains"
          caption="The course opens up on the back nine and view of the Na Burguesa mountains."
        />

        <h2>Some Holes Worth Mentioning</h2>

        <p>Hole 6 was personally satisfying. Driver almost to the green on the par 5, wedge in, eagle chance narrowly missed. The par 5s here are reachable and the course gives you genuine birdie opportunities with short irons in hand.</p>

        <p>Hole 12 is the short par 3 over wooded ground with the best views on the course. The flag is harder to find than you would expect from the tee, and the surrounding trees frame the hole in a way that makes it one of the more memorable short holes close to Palma.</p>

        <PostImage
          src="/images/son-termes-blog/st-5.jpg"
          alt="Son Termes golf par 3 12th hole green Mallorca with trees behind"
          caption="The 12th. The flag was harder to find than this makes it look."
        />

        <p>Hole 13 plays differently to how it looks on the card. Sharp dogleg, 9 iron from the tee to keep it in play, then close to 175 metres for the approach with limited visibility to the flag. I was in the middle of the fairway and still had a largely blind shot in. Good hole. The course has a few like this, where you commit to a number and find out afterwards whether you were right.</p>

        <p>Hole 18 finishes down a dogleg left, dropping back towards the clubhouse. It is a good closing hole. Sitting on the terrace afterwards watching others navigate those climbs is a satisfying way to end the round.</p>

        <h2>The Goats</h2>

        <p>There were goats on several holes throughout the round. They treated the course as their own, which in fairness it probably was before anyone built a golf club on it. The whole herd came to watch us putt out on 17. One was observing proceedings from a bunker with no interest whatsoever in the concept of raking. A genuinely hazardous animal that we feel should be on the scorecard.</p>

        <h2>The Greens</h2>

        <p>Honest answer: they are not at the level of Son Gual or Alcanada. The surfaces were good and the pace was solid, but if you have played the top courses on the island recently you will notice the difference. For the price and what the rest of the round delivers, that is a fair trade.</p>

        <PostImage
          src="/images/son-termes-blog/st-4.jpg"
          alt="Son Termes golf course Mallorca panoramic view over Na Burguesa mountains and Palma plain"
          caption="The view from the upper holes. Castell de Bellver and the cathedral were visible on the skyline on a clear morning."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">~€110</span><span className="post-fact__label">In-season green fee</span></div>
          <div className="post-fact__item"><span className="post-fact__val">6/10</span><span className="post-fact__label">Difficulty</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Mountain layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">20 min</span><span className="post-fact__label">From central Palma</span></div>
        </div>

        <h2>2026 Green Fees</h2>

        <p>Full in-season pricing is around €110. Check current rates directly with Son Termes before booking as pricing varies seasonally. There is a multi-round deal worth knowing about. More details on that coming soon. The course is approximately 20 minutes from central Palma, up in the Na Burguesa mountains.</p>

        <PostImage
          src="/images/son-termes-blog/st-3.jpg"
          alt="Son Termes golf course Mallorca aerial view over the layout with mountains"
          caption="The course from above. The routing through the mountains is what makes Son Termes different from anything else at this price point on the island."
        />

        <h2>Verdict</h2>

        <p>Son Termes delivers more character than most courses at this price level. The views from the back nine are the best available anywhere this close to Palma. The layout keeps you thinking throughout, and a second visit would unlock a better score. For a visiting golfer who wants something different from the premium courses, or a resident looking for a course with genuine personality at a sensible price, it earns its place on the list.</p>

        <div className="post-cta">
          <p>Thinking of playing Son Termes or want a recommendation for which course suits your game?</p>
          <a href="/contact">Get in touch →</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}

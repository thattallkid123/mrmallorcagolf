import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'
import Link from 'next/link'

export const metadata = {
  title: "A Day at Son Gual — What the Play-With-a-Pro Experience Actually Looks Like",
  description: "From the drive up to the last putt to lunch on the terrace — a specific, honest account of what a play-with-a-pro day at Son Gual looks and feels like.",
  alternates: {
    canonical: "https://mrmallorcagolf.com/guides/a-day-at-son-gual",
    languages: {
      'en': "https://mrmallorcagolf.com/guides/a-day-at-son-gual",
      'x-default': "https://mrmallorcagolf.com/guides/a-day-at-son-gual",
    }
  },
  robots: { index: false, follow: false },
  openGraph: {
    type: 'article',
    url: "https://mrmallorcagolf.com/guides/a-day-at-son-gual",
    title: "A Day at Son Gual — What the Play-With-a-Pro Experience Actually Looks Like",
    description: "From the drive up to the last putt to lunch on the terrace — a specific, honest account of what a play-with-a-pro day at Son Gual looks and feels like.",
    publishedTime: '2026-03-01',
    authors: ['Andy Griffiths'],
    images: [{ url: "https://mrmallorcagolf.com/images/son-gual-blog/sg-hero.webp", width: 1200, height: 630, alt: "A Day at Son Gual — What the Play-With-a-Pro Experience Actually Looks Like" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "A Day at Son Gual — What the Play-With-a-Pro Experience Actually Looks Like",
    description: "From the drive up to the last putt to lunch on the terrace — a specific, honest account of what a play-with-a-pro day at Son Gual looks and feels like.",
    images: ["https://mrmallorcagolf.com/images/son-gual-blog/sg-hero.webp"],
  },
}

const meta = {
  badge: 'The Experience', badgeGold: true, readTime: '4 min read', updated: 'March 2026',
  title: "A Day at Son Gual",
  intro: 'What actually happens — from the drive up to the last putt to lunch on the terrace.',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
    { slug: 'alcanada-review', title: 'Alcanada Golf — Honest Review 2026' },
    { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
    { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>

        <p>Most golf days are forgettable. You play, you leave, you can't remember the score by Thursday. The days that stay with you are the ones where something changed — in your game, in what you understood about the course, or just in the conversation. This is what a day at Son Gual actually looks like.</p>

        <h2>Before You Arrive</h2>
        <p>A week before, I send a short questionnaire. What's frustrating you at the moment? Range game or course game? What would make this day a success for you? Most people write three sentences. That's all I need. By the time we reach the first tee I already know what to watch for.</p>
        <p>Tee times at Son Gual go early. That's not incidental — the course plays very differently in the first two hours of the day. The wind starts later. The fairways are quiet. The light across the Bay of Palma on the approach to the 8th hole at 8am is the kind of thing people send photos of. We aim for that window.</p>

        <h2>The Drive Up</h2>
        <p>Son Gual is 11km from Palma. The drive takes about 20 minutes. Coming from the southwest of the island, you leave the residential roads and the landscape opens out — the kind of change that tells you you're going somewhere worth going. The course sits on elevated ground above the city. You feel it before you see it.</p>

        <h2>The First Tee</h2>
        <p>There's a pre-round briefing at the clubhouse. Coffee, a look at the scorecard, a short conversation about what we're working on. Not a technical lecture. Just enough to make the first tee feel intentional rather than rushed.</p>
        <p>The first hole at Son Gual is a par 5. There are bunkers positioned exactly where a slightly off-centre drive goes. The wind on the first tee can be coming from a completely different direction to the wind on the 7th — Son Gual has its own ecosystem and the conditions change from hole to hole. That's the first thing I point out. It's also the thing that surprises everyone who hasn't played here before.</p>

        <h2>During the Round</h2>
        <p>The coaching is woven in, not delivered as commentary. There's a difference between a running analysis and the one observation at the right moment that actually changes something. I've coached enough rounds to know which one improves scores and which one just fills the air.</p>
        <p>Most golfers lose the majority of their shots to the wrong decision, not the wrong swing. On a course like Son Gual — where the greens are fast and raised and where you miss matters more than how you swing — that becomes very visible, very quickly. We work on it in real conditions with a real score on the line. That's the only context in which it sticks.</p>
        <p>The closing stretch from the 15th is something I look forward to on every round here. Four holes that are genuinely outstanding golf. By the time we reach the 18th, most people are playing noticeably differently than they were on the first tee. That's the point.</p>

        <h2>After the Round</h2>
        <p>The post-round debrief is over lunch on the terrace. The restaurant at Son Gual has views across the Bay of Palma that are worth the visit on their own. The food is good — local wine, Mallorcan cooking, unhurried service. We talk through what improved, what to work on, what the day actually revealed about the game. It's the conversation that makes everything that happened on the course make sense.</p>
        <p>Most clients say they leave with one or two specific things that changed — a different club choice in a situation they'd been getting wrong for years, a clearer sense of what their game is actually capable of, or just a better understanding of how to think around a difficult course. That's what I'm trying to give them. The day at Son Gual is just the context in which it happens.</p>

        <div style={{background:'var(--cream)',border:'1px solid var(--linen)',padding:'28px 32px',margin:'2.5rem 0'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.1rem',fontStyle:'italic',color:'var(--deep)',lineHeight:1.65,marginBottom:'1rem'}}>
            &ldquo;After just 18 holes together, I&apos;ve discovered a new ceiling to my potential. A fantastic professional and a lovely man to boot.&rdquo;
          </p>
          <p style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--taupe)',margin:0}}>— Jo, after a day at Son Gual</p>
        </div>

        <div className="post-cta">
          <p>If this sounds like the kind of day you&apos;re looking for — get in touch. Tell me your dates and I&apos;ll sort the rest.</p>
          <Link href="/contact">Book your day →</Link>
        </div>

      </PostLayout>
    </PageLayout>
  )
}


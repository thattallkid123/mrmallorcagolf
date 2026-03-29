import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'On-Course Golf Coaching in Mallorca — PGA Professional',
  description: 'On-course golf coaching in Mallorca with PGA Advanced Professional Andy Griffiths. Real improvement in real conditions — for visiting and resident golfers.',
  alternates: {
    canonical: 'https://www.mrmallorcagolf.com/coaching',
    languages: {
      'en': 'https://www.mrmallorcagolf.com/coaching',
      'de': 'https://www.mrmallorcagolf.com/de/coaching',
      'es': 'https://www.mrmallorcagolf.com/es/coaching',
      'fr': 'https://www.mrmallorcagolf.com/fr/coaching',
      'nl': 'https://www.mrmallorcagolf.com/nl/coaching',
      'sv': 'https://www.mrmallorcagolf.com/sv/coaching',
      'zh': 'https://www.mrmallorcagolf.com/zh/coaching',
      'x-default': 'https://www.mrmallorcagolf.com/coaching',
    }
  }
}

const improvements = [
  { num: '01', title: 'Course management', text: 'Most amateur golfers lose the majority of their shots to the wrong decision, not the wrong swing. Choosing the right club, target, shape — these separate a 90 from an 80. We work on them in real time, on real holes, with a real score at stake.' },
  { num: '02', title: 'Shot selection under pressure', text: "The decisions that fall apart under pressure — the driver when a 5-iron wins the hole, the hero shot when the safe play scores the same — become visible on the course in a way they never do on a range. I see them, name them, and we work through them together." },
  { num: '03', title: 'Reading greens and slopes', text: 'Putting and chipping on a course green is fundamentally different from a practice green. The speed, the slope, the grain, the pressure of the moment — all of it changes what works. We practise it in the actual conditions.' },
  { num: '04', title: 'Playing in wind', text: "Mallorca is windy. Son Gual especially lives in its own wind ecosystem. Club selection in a crosswind, trajectory management, trusting your aim when the ball seems to be drifting — this is something you can only work on when it's actually blowing." },
  { num: '05', title: 'Mental game and routine', text: 'How you talk to yourself after a bad shot. How you approach the next tee. Whether you have a pre-shot routine and whether it holds under pressure. The mental side is completely invisible on the range — it only shows up when the consequences are real.' },
  { num: '06', title: 'Finding the low-hanging fruit', text: "Most golfers improve fastest not from rebuilding their swing but from one or two small unlocks. A client had been chipping with a pitching wedge his whole life. One conversation, a club change, immediate improvement. No technical work. That kind of thing only surfaces on the course." },
  { num: '07', title: 'Consistency in real conditions', text: "Uneven lies, tight fairways, course rough — the course demands shots the range never asks for. Playing them regularly, with feedback in real time, is how you build a game that shows up when it counts.", full: true },
]

export default function Coaching() {
  return (
    <>
    <link rel="preload" as="image" href="/images/coaching-hero.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero coaching-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, 60% 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>On-Course Coaching</span></p>
          <h1>Better Golf.<br />Without Changing Everything.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>On-course coaching for visiting and resident golfers. Real conditions, real decisions, real improvement — and none of the technical overload that leaves most range sessions unused by the 3rd hole.</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Why the range isn&apos;t enough</p>
          <h2>There&apos;s a reason your range game doesn&apos;t show up on the course.</h2>
          <p>The range is flat, controlled, and consequence-free. You hit off a perfect mat with no wind, no slopes, no score on the line, and no one watching. Then you stand on the 1st tee and none of it transfers.</p>
          <p>On-course coaching puts the lesson where it actually helps. On the fairway. In the rough. On a sloping lie with a wind you didn&apos;t expect. With a score that matters. That&apos;s where games change — and that&apos;s where we work.</p>
          <div className="analogy-box">
            <p>&ldquo;Think of it like boxing. You can train on the pads for weeks and feel ready. Then you have your first sparring session and everything changes. Golf is the same. The first tee is not the driving range.&rdquo;</p>
            <cite>— Andy Griffiths, PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>The questionnaire</p>
          <p>A short questionnaire before the session shapes the day before we start. What&apos;s frustrating you, where the gaps are, what success looks like.</p>
          <p>By the time we reach the first tee, I already have a picture of what to look for. The feedback is situational and honest — not a generic lesson plan applied to everyone.</p>
          <p>Sessions take place at Son Gual, Alcanada, or a course matched to your level and goals.</p>
          <Link href="/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Discuss a Session &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="Andy Griffiths coaching golf on a Mallorca course"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">What actually gets better</p>
          <h2>Here&apos;s what changes during a round with me.</h2>
          <p className="improvements__sub">And why it sticks in a way range work rarely does.</p>
        </div>
        <div className="improvements-grid">
          {improvements.map((imp, i) => (
            <div key={i} className={`improvement reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}${imp.full ? ' improvement--full' : ''}`}>
              <span className="improvement__num">{imp.num}</span>
              <h3>{imp.title}</h3>
              <p>{imp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">How it works</p>
          <h2>Three stages. One session that changes how you play.</h2>
          <p>Sessions take place on-course at Son Gual, Alcanada, or a course matched to your level and goals. We play together, the coaching happens in real time, and the feedback is situational and honest — not a generic lesson plan applied to everyone.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'The questionnaire', text: "Before the session, you complete a short form. What's frustrating you, where the gaps are, what a good day looks like. By the first tee, I already have a picture." },
            { num: '02', title: 'The round', text: "We play together. Coaching happens in real time — the right observation at the right moment. Not a running commentary. Not a lesson. The thing that changes your score." },
            { num: '03', title: 'The debrief', text: "Over lunch, we cover what improved, what to work on, and what to take away. Honest and clear. The conversation that makes the whole day make sense." },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Who this is for</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>If any of these sound familiar, this is for you.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'Visiting golfers', text: 'Focused improvement during your time on the island — not just a round.' },
            { title: 'Resident golfers', text: 'Regular work with a professional who plays the same courses you do.' },
            { title: 'The range/course gap', text: 'Your practice game never transfers. This is where we fix that.' },
            { title: 'Smarter, not rebuilt', text: 'You want to play better without a full technical overhaul from scratch.' },
          ].map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play better?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Get in touch to discuss a session.</h2>
          <p>Tell me where your game is and what you want from it. I&apos;ll build the session around that — not a generic programme.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Get in Touch &rarr;</Link>
          <Link href="/play-with-a-pro" className="btn btn--outline-white">See Full Experiences</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





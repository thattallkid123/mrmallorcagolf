import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Play With a Pro — Private Golf Days in Mallorca',
  description: 'A private round of golf in Mallorca, played alongside UK PGA Advanced Professional Andy Griffiths. On-course coaching, full day arranged. From €350 per person + green fee.',
}

const testimonials = [
  { text: "Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. I have felt suffocated by well-meaning coaches in the past, but Andy is a cut above. After just 18 holes together, I've discovered a new ceiling to my potential. His philosophy of prioritising the low-hanging fruit has given me clarity. What's more, his simple tips instantly transformed my putting.", author: 'Jo' },
  { text: "The thing I most enjoyed was how comfortable he made me feel on the course. The insight into what calculations go into each shot has helped me improve my decision making immensely. I would recommend the day to groups of friends, groups on holiday looking for an entertaining day out, or even a family looking to get involved in golf together.", author: 'Finlay' },
  { text: "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough.", author: 'Adam' },
]

export default function PlayWithAPro() {
  return (
    <>
    <link rel="preload" as="image" href="/images/pwap-hero.jpg" />
    <PageLayout>
      <RevealObserver />

      <section className="pwap-hero" style={{minHeight:'92vh'}}>
        <div className="pwap-hero__bg" style={{
          backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
          backgroundSize: 'auto, auto, cover',
          backgroundPosition: 'center, center, 38% center',
        }}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Home</Link> &nbsp;/&nbsp; <span>Play with a Pro</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Private Golf Days · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>A Private Golf Day<br />in Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'2rem'}}>Not a lesson. Not a standard round. A private day on one of the island&apos;s finest courses, hosted by a PGA Advanced Professional with two decades of coaching across three continents.</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/contact" className="btn btn--gold">Book Your Day &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">See Packages</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">What the day involves</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Before you arrive, I already know what to watch for.</h2>
          <p>Before you arrive, you complete a short questionnaire. What frustrates you. Where the gap is between your range game and your score. What a good day looks like to you. By the time we reach the first tee, I already know what to watch for.</p>
          <p>During the round, the coaching is woven in naturally — not a running commentary, but the right observation at the right moment. Course management decisions you haven&apos;t considered. The adjustments that actually change something, rather than the ones that just sound right.</p>
          <div className="pull-quote"><p>&ldquo;What most golfers find is that they leave playing noticeably better and feeling more confident than they arrived — and understanding why, which is the part that stays with you.&rdquo;</p></div>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Already booked?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Complete your Pre-Round Questionnaire &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Takes 3 minutes. Helps me tailor the day to you before we reach the first tee.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>What&apos;s included</h3>
            <ul className="included-list">
              {[
                ['Course selection', 'Matched to your game, handicap, and what you want from the day'],
                ['Tee time', 'Secured and fully handled — you just turn up'],
                ['Pre-round briefing', 'What to expect from the course, what to watch for'],
                ['18 holes alongside Andy', 'Not walking alongside — playing, as your partner'],
                ['On-course coaching throughout', 'Course management, shot selection, decision-making'],
                ['Post-round debrief', 'What improved, what to work on, clear and honest'],
                ['Lunch', 'At the course restaurant or a handpicked local restaurant (Signature Day)'],
              ].map(([title, detail], i) => (
                <li key={i} className="included-item">
                  <span className="included-dot"></span>
                  <p><strong>{title}</strong>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Which course?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>The course is always chosen with you.</h2>
          <p style={{color:'rgba(255,255,255,.65)',lineHeight:1.8,maxWidth:680}}>A group including beginners, a shorter half-day, a family with juniors — there are courses that work better for all of those, and I&apos;ll tell you which one honestly. Some are members-only and can&apos;t be accessed independently. That access can be arranged for clients who want something off the standard visitor rota.</p>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>What golfers say</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>In their own words.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <p>&ldquo;{t.text}&rdquo;</p>
              <span className="testimonial__author">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Experiences &amp; Packages</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Three levels of experience. All private, all personally guided.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>The difference is how complete the day is. The standard of company is the same across all three.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">The Mallorca Round</p>
            <h3 className="tier__name">Play with a Pro</h3>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Course matched to your game & handicap','Tee time secured and fully handled','Pre-round briefing and warm-up','18 holes alongside Andy','On-course coaching throughout','Post-round debrief — honest and clear'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <p className="tier__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>€350 per person + green fee</p>
            <Link href="/contact" className="tier__btn">Enquire &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">The Signature Day</p>
            <h3 className="tier__name">Hosted Golf Day</h3>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {["Everything in The Mallorca Round","Son Gual or Alcanada — two of the island's finest","Long lunch at the course restaurant","Curated surprise gift","Relaxed, unhurried pace — a full day"].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <p className="tier__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem',color:'var(--gold-light)'}}>From €450 per person + green fee</p>
            <Link href="/contact" className="tier__btn">Enquire &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">The Full Experience</p>
            <h3 className="tier__name">Bespoke Golf Journey</h3>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Multi-course day or full itinerary','Private transport from Palma','Dinner at a handpicked restaurant','Spa or recovery session','Full concierge — groups & corporates'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <p className="tier__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>Custom itinerary</p>
            <Link href="/contact" className="tier__btn">Enquire &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play Mallorca properly?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Get in touch and let&apos;s arrange your day.</h2>
          <p>Tell me your dates, your handicap, and what you want from the day. I&apos;ll come back with a recommendation — personally, within 24 hours.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Book Your Day &rarr;</Link>
          <Link href="/golf-courses" className="btn btn--outline-white">Explore the Courses</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Pre-Round Questionnaire &rarr;</a>
        </div>
      </section>
    </PageLayout>
    </>
  )
}

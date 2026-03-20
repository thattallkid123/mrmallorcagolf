import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'

export const metadata = {
  title: 'Play With a Pro — Private Golf Days in Mallorca',
  description: 'A private round of golf in Mallorca, played alongside PGA Advanced Professional Andy Griffiths. On-course coaching, full day arranged. From €350 per person + green fee.',
}

const whoCards = [
  { num: '01', title: 'The visiting golfer', text: "A handicap golfer who wants their Mallorca round to be genuinely memorable, not just a tee time booked online and a wave goodbye at 18." },
  { num: '02', title: 'The range/course gap', text: "Golfers whose practice game never transfers to the course. The issue is almost always course management and decision-making — not the swing." },
  { num: '03', title: 'The executive group', text: "Corporate groups, executives visiting the island, and anyone who wants a premium, fully arranged day with serious golf expertise throughout." },
  { num: '04', title: 'The beginner', text: "Casual golfers who want expert company without intimidation. The day is never about scores — it's about improvement and enjoyment." },
  { num: '05', title: 'The resident golfer', text: "Based on the island and looking for regular work with a professional who plays the same courses. Serious, measurable improvement over time." },
  { num: '06', title: 'Anyone who wants more', text: "The only requirement is wanting a genuinely different golfing experience. The rest adjusts to you." },
]

const testimonials = [
  { text: "Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. I have felt suffocated by well-meaning coaches in the past, but Andy is a cut above. After just 18 holes together, I've discovered a new ceiling to my potential. His philosophy of prioritising the low-hanging fruit has given me clarity. What's more, his simple tips instantly transformed my putting.", author: 'Jo' },
  { text: "The thing I most enjoyed was how comfortable he made me feel on the course. The insight into what calculations go into each shot has helped me improve my decision making immensely. I would recommend the day to groups of friends, groups on holiday looking for an entertaining day out, or even a family looking to get involved in golf together.", author: 'Finlay' },
  { text: "Andy completely changed how I think about course management. I'd been playing for years without really understanding the decisions behind each shot. After 18 holes with him at Son Gual I shot my best score there and actually understood why. The whole day — from the briefing to the lunch — was exactly what a great golf day should be.", author: 'Adam' },
]

export default function PlayWithAPro() {
  return (
    <PageLayout>
      <RevealObserver />

      {/* HERO */}
      <section className="pwap-hero">
        <div className="pwap-hero__bg"></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Home</Link> &nbsp;/&nbsp; <span>Play with a Pro</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Private Golf Days · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>A Private Golf Day<br />in Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Not a lesson. Not a standard round. A private day on one of the island&apos;s finest courses, hosted by a PGA professional who has coached at the highest level across three continents.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>From &euro;350 per person + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/contact" className="btn btn--gold">Book Your Day &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">See Packages</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE DAY INVOLVES */}
      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">What the day involves</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Before you arrive, I already know what to watch for.</h2>
          <p>Before you arrive, you complete a short questionnaire. What frustrates you. Where the gap is between your range game and your score. What a good day looks like to you. By the time we reach the first tee, I already know what to watch for.</p>
          <p>During the round, the coaching is woven in naturally — not a running commentary, but the right observation at the right moment. Course management decisions you haven&apos;t considered. The specific adjustments that move the needle rather than the ones that just sound technical.</p>
          <p>I&apos;ve coached in environments where the expectation was serious, measurable improvement — national team players in China, golf addicts across Asia whose one goal was to break 100, 90, 80, or scratch. The same attention comes into every round I host.</p>
          <div className="pull-quote"><p>&ldquo;What most golfers find is that they leave playing noticeably better and feeling more confident than they arrived — and understanding why, which is the part that stays with you.&rdquo;</p></div>
          <p>The debrief over lunch isn&apos;t a summary. It&apos;s the conversation that makes the entire day make sense.</p>
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

      {/* WHICH COURSE */}
      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Which course?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Son Gual and Alcanada are the primary venues. But the course is always chosen with you.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>A group including beginners, a shorter half-day, a family with juniors — there are courses that work better for all of those, and I&apos;ll tell you which one honestly. Some are members-only and can&apos;t be accessed independently. That access can be arranged for clients who want something off the standard visitor rota.</p>
        </div>
        <div className="courses-grid">
          <div className="course-choice reveal">
            <p className="region">Palma · 11km · Championship</p>
            <h3>Son Gual</h3>
            <p>My most-played course on the island. Thomas Himmel&apos;s 2007 design sits in its own wind ecosystem. The closing stretch — holes 15 to 18 — is among the finest four holes in European golf. Rafa Nadal&apos;s stated favourite course on the island.</p>
          </div>
          <div className="course-choice reveal">
            <p className="region">Alcúdia · 55km · Coastal</p>
            <h3>Alcanada</h3>
            <p>Arguably Mallorca&apos;s most scenic course. Robert Trent Jones Jr. design. The lighthouse visible from 16 of 18 holes. Hosts the Rolex Challenge Tour Grand Final. The restaurant terrace after the round is one of the best places on the island.</p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Who this is for</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>The experience adjusts to your game.</h2>
        </div>
        <div className="who-grid">
          {whoCards.map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}>
              <span className="who-card__icon">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* PACKAGES */}
      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Experiences &amp; Packages</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Three levels. All private. All personally guided.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>The difference is how complete the day is. All three include the same level of on-course expertise.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">The Mallorca Round</p>
            <h3 className="tier__name">Play with a Pro</h3>
            <p className="tier__price">&euro;350 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Course matched to your game & handicap','Tee time secured and fully handled','Pre-round briefing and warm-up','18 holes alongside Andy','On-course coaching throughout','Post-round debrief — honest and clear'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <p style={{fontSize:'0.78rem',color:'var(--taupe)',margin:'0.75rem 0 1.25rem',lineHeight:1.6}}>Group discounts available for 2+ players.</p>
            <Link href="/contact" className="tier__btn">Enquire &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">The Signature Day</p>
            <h3 className="tier__name">Hosted Golf Day</h3>
            <p className="tier__price">From &euro;450 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {["Everything in The Mallorca Round","Son Gual or Alcanada — two of the island's finest","Long lunch at the course restaurant","Curated surprise gift","Relaxed, unhurried pace — a full day"].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <p style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.45)',margin:'0.75rem 0 1.25rem',lineHeight:1.6}}>Group discounts available for 2+ players.</p>
            <Link href="/contact" className="tier__btn">Enquire &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">The Full Experience</p>
            <h3 className="tier__name">Bespoke Golf Journey</h3>
            <p className="tier__price">Custom pricing based on itinerary</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              {['Multi-course day or full itinerary','Private transport from Palma','Dinner at a handpicked restaurant','Spa or recovery session','Full concierge coordination','For groups, corporates & bespoke requests'].map((f,i)=><li key={i}>{f}</li>)}
            </ul>
            <Link href="/contact" className="tier__btn">Enquire &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Ready to play Mallorca properly?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Get in touch and let&apos;s arrange your day.</h2>
          <p>Tell me your dates, your handicap, and what you want from the day. I&apos;ll come back with a recommendation — personally, within 24 hours.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Book Your Day &rarr;</Link>
          <Link href="/golf-courses" className="btn btn--outline-white">Explore the Courses</Link>
        </div>
      </section>

    </PageLayout>
  )
}

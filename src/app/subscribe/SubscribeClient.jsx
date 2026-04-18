"use client"

import React, { useEffect } from "react"

export default function SubscribeClient() {
  useEffect(() => {
    if (document.querySelector("script[src=\"https://subscribe-forms.beehiiv.com/embed.js\"]")) return
    const script = document.createElement("script")
    script.src = "https://subscribe-forms.beehiiv.com/embed.js"
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <>
      <style>{`
        .sub-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .sub-formbox {
          background: var(--linen);
          border: 1px solid var(--sand);
          padding: clamp(36px, 5vw, 52px);
        }
        .sub-iframe {
          display: block;
          width: 100%;
          max-width: 100%;
          height: 315px;
          border: none;
          margin: 0;
          background: transparent;
          box-shadow: none;
          border-radius: 0 !important;
        }
        @media (max-width: 900px) {
          .sub-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 600px) {
          .sub-formbox { padding: 32px 24px; }
          .sub-iframe { height: 280px; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: "var(--deep)", padding: "clamp(110px,15vw,180px) clamp(24px,6vw,80px) clamp(80px,10vw,130px)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 0.75rem 0" }}>The Newsletter</p>
          <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 auto 1.75rem", display: "block" }} />
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.05, margin: "0 0 1.5rem 0", letterSpacing: "-0.01em" }}>Golf insights from Mallorca</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "rgba(255,255,255,0.72)", lineHeight: 1.85, maxWidth: "540px", margin: 0 }}>Every two weeks, notes on what I&apos;m learning as I play the island &mdash; course observations, condition reports, planning logic, and honest takes on timing and tactics.</p>
        </div>
      </section>

      {/* FORM + BENEFITS */}
      <section style={{ background: "var(--cream)", padding: "clamp(72px,10vw,120px) clamp(24px,6vw,80px)" }}>
        <div className="sub-grid">

          {/* Left: benefits */}
          <div style={{ paddingTop: "4px" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>What you get</p>
            <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 0 1.75rem 0", display: "block" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>One email. No noise.</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: 1.85, margin: "0 0 2rem 0" }}>I&apos;m working my way through every course on the island. Each issue is a dispatch from the fairway &mdash; what I noticed, what works, what I&apos;d do differently. The kind of detail that changes how you plan a golf trip.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              {[
                ["Course observations", "How each track plays in real conditions. Greens, routing, risk points."],
                ["Seasonal timing", "When to go, what changes through the year, which months to avoid."],
                ["Planning logic", "Which courses pair well together and why. How to build a proper week."],
                ["On-course lessons", "Coaching notes from real rounds — applied, not theoretical."],
                ["No spam. Ever.", "One email every two weeks. Unsubscribe in one click."],
              ].map(([title, detail]) => (
                <li key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", fontSize: "1rem", lineHeight: 1.6, flexShrink: 0, marginTop: "2px" }} aria-hidden="true">&mdash;</span>
                  <div>
                    <span style={{ display: "block", fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "var(--deep)", marginBottom: "0.2rem", letterSpacing: "0.02em" }}>{title}</span>
                    <span style={{ display: "block", fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--charcoal)", lineHeight: 1.75 }}>{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form box */}
          <div>
            <div className="sub-formbox">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>Join the list</p>
              <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 0 1.75rem 0", display: "block" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem,2.6vw,2.2rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.1, margin: "0 0 1rem 0" }}>Stay close to the island</h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--charcoal)", lineHeight: 1.8, margin: "0 0 1.75rem 0" }}>Free. Every two weeks. I&apos;ll tell you what I find.</p>
              <div style={{ width: "100%", overflow: "hidden", marginBottom: "0.75rem", background: "transparent" }}>
                <iframe
                  src="https://subscribe-forms.beehiiv.com/e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4"
                  data-test-id="beehiiv-embed"
                  frameBorder="0"
                  scrolling="no"
                  className="beehiiv-embed sub-iframe"
                  title="Subscribe to the Mr Mallorca Golf newsletter"
                />
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "10px", letterSpacing: "0.08em", color: "var(--taupe)", margin: 0, textAlign: "center" }}>Free. Unsubscribe any time.</p>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: "var(--deep)", padding: "clamp(72px,10vw,120px) clamp(24px,6vw,80px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "740px", width: "100%", margin: "0 auto" }}>
          <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem,2.4vw,1.7rem)", fontStyle: "italic", fontWeight: 400, color: "#fff", lineHeight: 1.6, margin: "0 0 1.25rem 0" }}>&ldquo;Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. After just 18 holes together, I&apos;ve discovered a new ceiling to my potential.&rdquo;</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-light)", margin: 0 }}>Jo &mdash; Play-With-a-Pro client</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--cream)", padding: "clamp(72px,10vw,120px) clamp(24px,6vw,80px)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>New here?</p>
          <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 auto 1.75rem", display: "block" }} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>Start with the course guide</h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "1rem", color: "var(--charcoal)", lineHeight: 1.85, margin: "0 0 2.5rem 0", maxWidth: "500px" }}>Full notes on all 24 courses on the island. What each one teaches, which to play first, how to pair them together. Written for golfers with taste and a handicap.</p>
          <a href="/golf-courses" style={{ display: "inline-block", padding: "14px 40px", background: "var(--pine)", color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", cursor: "pointer", transition: "background-color 0.2s" }}>View all 24 courses</a>
        </div>
      </section>
    </>
  )
}
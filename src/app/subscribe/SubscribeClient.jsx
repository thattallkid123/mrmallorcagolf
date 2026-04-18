"use client"

import React, { useEffect } from "react"
import PageLayout from "../../components/PageLayout"

export default function SubscribeClient() {
  useEffect(() => {
    if (document.querySelector("script[src=\"https://subscribe-forms.beehiiv.com/embed.js\"]")) return
    const script = document.createElement("script")
    script.src = "https://subscribe-forms.beehiiv.com/embed.js"
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <PageLayout lang="en" navTransparent={false}>
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
          height: 100px;
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
        }
      `}</style>

      {/* PAGE HEADER */}
      <section style={{ background: "var(--deep)", padding: "clamp(80px,10vw,120px) clamp(24px,6vw,80px) clamp(48px,6vw,72px)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 0.75rem 0" }}>Newsletter</p>
          <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 auto 1.5rem", display: "block" }} />
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>Golf insights from Mallorca</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(0.9rem,1.5vw,1rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: 0 }}>Every two weeks I write up what I find playing the island. What each course actually asks of you, when to go, which ones pair well together, and the kind of detail that changes how you plan a round.</p>
        </div>
      </section>

      {/* FORM + BENEFITS */}
      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,110px) clamp(24px,6vw,80px)" }}>
        <div className="sub-grid">

          {/* Left: what you get */}
          <div style={{ paddingTop: "4px" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>What you get</p>
            <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 0 1.5rem 0", display: "block" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.7rem,2.8vw,2.4rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.08, margin: "0 0 1.1rem 0" }}>One email. No noise.</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: 1.85, margin: "0 0 1.75rem 0" }}>I am working my way through every course on the island. Each issue is a note from the round: what I noticed, what works, what I would do differently. The kind of detail that changes how you plan a golf trip.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                ["Course notes", "How each track plays in real conditions. Greens, routing, where the risk actually sits."],
                ["Timing and seasons", "When to go, what changes through the year, which months to avoid and why."],
                ["Planning logic", "Which courses pair well together. How to build a week that makes sense."],
                ["Coaching observations", "Things I notice on the course that you can apply to your own game."],
                ["No spam", "One email every two weeks. Unsubscribe whenever you like."],
              ].map(([title, detail]) => (
                <li key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", fontSize: "1rem", lineHeight: 1.6, flexShrink: 0, marginTop: "2px" }} aria-hidden="true">&#x2014;</span>
                  <div>
                    <span style={{ display: "block", fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "var(--deep)", marginBottom: "0.2rem" }}>{title}</span>
                    <span style={{ display: "block", fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--charcoal)", lineHeight: 1.75 }}>{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div>
            <div className="sub-formbox">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>Subscribe</p>
              <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 0 1.5rem 0", display: "block" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem,2.4vw,2rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.1, margin: "0 0 0.85rem 0" }}>Stay close to the island</h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--charcoal)", lineHeight: 1.8, margin: "0 0 1.5rem 0" }}>Free. Every two weeks. I will tell you what I find.</p>
              <div style={{ width: "100%", marginBottom: "0.75rem" }}>
                <iframe
                  src="https://subscribe-forms.beehiiv.com/e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4"
                  data-test-id="beehiiv-embed"
                  frameBorder="0"
                  scrolling="no"
                  className="beehiiv-embed sub-iframe"
                  title="Subscribe to the Mr Mallorca Golf newsletter"
                />
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "10px", letterSpacing: "0.06em", color: "var(--taupe)", margin: 0, textAlign: "center" }}>Free. Unsubscribe any time.</p>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: "var(--deep)", padding: "clamp(64px,9vw,110px) clamp(24px,6vw,80px)", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "720px", width: "100%" }}>
          <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.15rem,2.2vw,1.6rem)", fontStyle: "italic", fontWeight: 400, color: "#fff", lineHeight: 1.6, margin: "0 0 1.25rem 0" }}>"Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. After just 18 holes together, I have discovered a new ceiling to my potential."</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-light)", margin: 0 }}>Jo, Play-With-a-Pro client</p>
          </div>
        </div>
      </section>

      {/* COURSE GUIDE CTA */}
      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,110px) clamp(24px,6vw,80px)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>New here?</p>
          <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 auto 1.5rem", display: "block" }} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>Start with the course guide</h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "1rem", color: "var(--charcoal)", lineHeight: 1.85, margin: "0 0 2.5rem 0" }}>Full notes on all 24 courses on the island. What each one teaches, which to play first, how to pair them together.</p>
          <a href="/golf-courses" style={{ display: "inline-block", padding: "14px 40px", background: "var(--pine)", color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>View all 24 courses</a>
        </div>
      </section>
    </PageLayout>
  )
}
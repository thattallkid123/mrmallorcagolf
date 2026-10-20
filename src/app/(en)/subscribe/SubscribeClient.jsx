"use client"

import React from "react"
import Link from "next/link"
import PageLayout from "../../../components/PageLayout"
import EmailSignup from "../../../components/EmailSignup"
import { PLANNING_NOTES_MAILERLITE_ACTION } from "../../../lib/signup-config"

export default function SubscribeClient() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <style>{`
        .sub-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "benefits signup";
          gap: 80px;
          align-items: start;
        }
        .sub-benefits { grid-area: benefits; }
        .sub-signup { grid-area: signup; }
        .sub-formbox {
          background: var(--linen);
          border: 1px solid var(--sand);
          padding: clamp(36px, 5vw, 52px);
        }
        .sub-selector {
          margin: var(--space-3) 0 0;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.75;
          text-align: center;
        }
        .sub-selector a {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--pine);
          text-decoration: underline;
          text-underline-offset: 0.18em;
        }
        .sub-selector a:hover { color: var(--pine-mid); }
        @media (max-width: 900px) {
          .sub-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "signup" "benefits";
            gap: var(--space-7);
          }
        }
        @media (max-width: 600px) {
          .sub-formbox { padding: 32px 24px; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <section style={{ background: "var(--deep)", padding: "clamp(80px,10vw,120px) clamp(24px,6vw,80px) clamp(48px,6vw,72px)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 0.75rem 0" }}>Planning notes</p>
          <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 auto 1.5rem", display: "block" }} />
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 500, color: "#fff", lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>Get the planning notes</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(0.9rem,1.5vw,1rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: 0 }}>Occasional notes on Mallorca courses, green fees and planning a trip. Sign up below and confirm your email address to receive them.</p>
        </div>
      </section>

      {/* FORM + BENEFITS */}
      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,110px) clamp(24px,6vw,80px)" }}>
        <div className="sub-grid">

          {/* Signup comes first for mobile reading and keyboard order. */}
          <div className="sub-signup">
            <div className="sub-formbox">
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>Email delivery</p>
              <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 0 1.5rem 0", display: "block" }} />
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,2.4vw,2rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.1, margin: "0 0 0.85rem 0" }}>Get the planning notes by email</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.9rem", color: "var(--charcoal)", lineHeight: 1.8, margin: "0 0 1.5rem 0" }}>Free. Occasional emails. Confirm your address to join.</p>
              <div style={{ width: "100%", marginBottom: "0.75rem" }}>
                <EmailSignup
                  placeholder="Email address"
                  buttonLabel="Send notes"
                  successMessage="Check your inbox and confirm your email to join."
                  title="Subscribe to Mr Mallorca Golf planning notes"
                  mailerliteFormAction={PLANNING_NOTES_MAILERLITE_ACTION}
                  extraFields={{ signup_source: "planning-notes-page" }}
                  redirectOnSuccess="/course-selector/check-email"
                />
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "10px", letterSpacing: "0.06em", color: "var(--taupe)", margin: 0, textAlign: "center" }}>Free. Unsubscribe any time.</p>
            </div>
            <p className="sub-selector">
              <Link href="/tools/course-selector">Use the course selector without subscribing.</Link>
            </p>
          </div>

          {/* Left: what you get */}
          <div className="sub-benefits" style={{ paddingTop: "4px" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>What you get</p>
            <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 0 1.5rem 0", display: "block" }} />
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.7rem,2.8vw,2.4rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.08, margin: "0 0 1.1rem 0" }}>Course advice for your next trip</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.95rem", color: "var(--charcoal)", lineHeight: 1.85, margin: "0 0 1.75rem 0" }}>Course reviews, seasonal changes and practical advice on choosing rounds around your hotel, handicap and budget.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                ["Choosing courses", "Which courses suit lower handicaps, mixed groups, scenery-first trips, and serious golf days."],
                ["Timing and seasons", "When to go, what changes through the year, and which tee times are worth protecting."],
                ["Planning logic", "Which courses pair well together and how to build a week that makes sense with driving time and budget."],
                ["On-course judgment", "What I notice when I play the courses myself, and what that means for your trip."],
                ["No noise", "Useful notes only. Unsubscribe whenever you like."],
              ].map(([title, detail]) => (
                <li key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-serif)", color: "var(--gold)", fontSize: "1rem", lineHeight: 1.6, flexShrink: 0, marginTop: "2px" }} aria-hidden="true">&#x2022;</span>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.875rem", color: "var(--deep)", marginBottom: "0.2rem" }}>{title}</span>
                    <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.875rem", color: "var(--charcoal)", lineHeight: 1.75 }}>{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: "var(--deep)", padding: "clamp(64px,9vw,110px) clamp(24px,6vw,80px)", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "720px", width: "100%" }}>
          <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.15rem,2.2vw,1.6rem)", fontStyle: "italic", fontWeight: 400, color: "#fff", lineHeight: 1.6, margin: "0 0 1.25rem 0" }}>&ldquo;Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. After just 18 holes together, I have discovered a new ceiling to my potential.&rdquo;</p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-light)", margin: 0 }}>Jo, Play With A Pro client</p>
          </div>
        </div>
      </section>

      {/* COURSE GUIDE CTA */}
      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,110px) clamp(24px,6vw,80px)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--taupe)", margin: "0 0 0.75rem 0" }}>New here?</p>
          <div style={{ width: "36px", height: "1px", background: "var(--gold)", margin: "0 auto 1.5rem", display: "block" }} />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 500, color: "var(--deep)", lineHeight: 1.08, margin: "0 0 1.25rem 0" }}>Start with the course guide</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1rem", color: "var(--charcoal)", lineHeight: 1.85, margin: "0 0 2.5rem 0" }}>Compare all 24 courses and read my reviews before choosing your rounds.</p>
          <a href="/golf-courses" style={{ display: "inline-block", padding: "14px 40px", background: "var(--pine)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>View all 24 courses</a>
        </div>
      </section>
    </PageLayout>
  )
}

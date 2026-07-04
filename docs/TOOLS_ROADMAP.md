# Tools Roadmap — What's Still To Do

Live reference for the tools/platform build-out. Updated 4 July 2026 after the trust-signals + homepage-strip work. Tick items off or move them to done as they ship.

## Done (for context)

- Course selector, day builder, cost calculator, hotel recommender, zh selector — live under `/tools`
- Handicap & Access Checker — live at `/handicap-checker.html` with MailerLite capture
- Trip Quote Builder step in the cost calculator
- Shareable results URLs on the 5 tool prototypes
- Inline funnel CTAs on all course review pages
- Trust signals (Trustpilot mini badge + PGA line) on all four tool pages and `/tools`
- Homepage tools strip (EN) replacing the single course-selector card

## Next up — high priority

1. **Email capture on Day Builder and Hotel Recommender.**
   Course selector and handicap checker have it; these two don't. Add the same optional
   "email me this plan / shortlist" step at the results stage, reusing the existing
   MailerLite JSONP pattern from `CourseSelectorToolClient.jsx` (create a MailerLite
   group + form per tool so nurtures stay separate). Keep it optional, after value is shown.

2. **Promote the handicap checker to a real Next.js route.**
   It's a static file in `public/` — no site nav, no metadata/OG, not in the sitemap or
   IndexNow. Port to `/tools/handicap-checker` using the `new-prototype` skill flow, 301
   the `.html` URL, add to sitemap + IndexNow lists, update the `/tools` card and
   homepage strip links.

3. **Promote the green fees comparison table** (`prototypes/green-fees.html`) to a live
   route (e.g. `/green-fees`), driven from the pricing master JSON so `mmg.ps1 pricing`
   keeps it current. Show a visible "Prices updated [date]" stamp. Strongest remaining
   pure-SEO play.

4. **301 the calculator subdomain.** `calculator.mrmallorcagolf.com` splits link equity;
   redirect it to `/tools/golf-cost-calculator` on www.

## Medium term

5. **Tool-to-tool handoff.** Pass results forward via query params so the suite feels like
   one journey: selector shortlist → pre-selected courses in the cost calculator →
   course list into the hotel recommender → everything into the Trip Quote Builder
   enquiry. This is also the stepping stone to the future app.

6. **"When to play" season pages.** Per-course best months, seasonal green fee bands
   (from pricing JSON), wind timing, booking lead times. Biggest untapped search
   intent ("mallorca golf in november", "son gual green fee 2026").

7. **MMG Difficulty / Honest Handicap Fit index.** Andy-scored per-course rating (wind
   exposure, forced carries, walkability, plays-X-harder-than-card). Authority and
   backlink play; also upgrades the selector's matching logic.

## Long term / parked

8. **The app.** All tools + itinerary in one place, with tee-time booking. Blocked on
   tee-time API access — no course/aggregator API available yet. Revisit when a
   booking API or direct course integrations become possible. The tool-handoff work
   (item 5) is the groundwork.

9. **AI trip concierge.** Chat grounded in course reviews + pricing + access rules.
   Build after the data layer (items 3, 6, 7) is solid.

10. **Quarterly "State of Mallorca Golf Travel" report** from aggregated tool
    submissions in MailerLite. Start once list volume justifies it.

11. **Localized tools (DE first).** Parked by Andy for now — English + zh only.

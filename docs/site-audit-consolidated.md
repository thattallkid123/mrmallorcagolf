# Mr Mallorca Golf — Consolidated Site Audit
*Synthesised from three independent reviews (Kimi 2.6, Meta AI, docx audit) + cross-checked against live codebase. April 2026.*

Items marked **[CONFIRMED IN CODE]** have been verified against the actual source. Items marked **[AUDIT ERROR]** were wrong in the original reviews and should be ignored.

---

## 1. Hero Section

### Current state
```
eyebrow: 'UK PGA Advanced Professional · Mallorca'
titleLines: ["Play Mallorca's", 'Best Courses.']
emphasis: 'With a Pro by Your Side.'
primaryCta: 'Tell Me Your Dates'
secondaryCta: 'What the day looks like'
```

### Issues

**The emphasis line reads as an afterthought** [CONFIRMED IN CODE]. It sits in italics below the main title at reduced opacity (`opacity: 0.85`). The rendered effect is that the most important differentiator — the fact that a PGA pro is with you — appears visually subordinate. The headline "Play Mallorca's Best Courses" could describe any booking platform; it's the "With a Pro by Your Side" that makes it different. These should be rethought as a single unified statement rather than a main line plus a qualifier.

**Suggested rewrite options:**
- "Play Mallorca's best courses. Properly." with the sub becoming "A private day with a PGA Advanced Professional who has arranged everything."
- Or lead with the experience, not the destination: "A private day at Mallorca's best courses." Full stop. One idea, stated once.

**The hero has no price signal at all.** A cold visitor has no idea if this is €150 or €3,000. The `/play-with-a-pro` hero does include the price in body copy: "Solo from €495. Groups from €950." That price anchor should be visible on the homepage too — even a single line. Affluent clients don't need to be protected from the number; showing it reads as confidence.

**No social proof above the fold.** The hero has no credential beyond the eyebrow. A brief trust bar directly below the hero (not buried further down) would do a lot of work quickly.

### Recommended changes
1. Rewrite the H1 into a single unified thought — no em-italics afterthought.
2. Add a one-line price anchor in the hero sub: "Private days from €495."
3. Add a 4-item credential bar directly beneath the hero (see Section 2).

---

## 2. The TikTok / socialProof Line

### Current state (confirmed in code)
```js
socialProof: 'Andy 教练 · 300 million+ golf coaching video views on TikTok · Coaching content trusted worldwide'
```
This renders as a pale strip of small text between the intro and the How It Works section. It is present across every language version.

### Why this is a problem

All three audits flag this independently. The reasoning is sound: "TikTok" signals mass-market content creator. "300 million views" signals viral entertainment. Neither credential means anything to someone considering a €495–€3,000 private golf day. A HNWI considering spending €3,000 on a day sees the word "TikTok" and their mental model shifts from "PGA professional" to "social media person who also does golf."

The Chinese characters "教练" are unexplained to non-Chinese readers and read as either a localisation error or a leftover from a different market.

"Coaching content trusted worldwide" is exactly the kind of filler the writing guardrails prohibit.

### Recommended changes

Replace entirely with credentials that carry weight for the actual target client:

```
'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian'
```

Or, if social reach matters to you as a credibility signal, reframe it:

```
'Andy spent a decade coaching in China — ranked among the most-watched golf coaches online. He moved to Mallorca in 2025 to do something smaller, and more personal.'
```

That keeps the scale signal while contextualising it as a reason he is *here* doing *this*.

---

## 3. Homepage — "How It Works" Section

### Current state (confirmed in code)
```
01 — Get in touch
02 — I build your day
03 — Show up and play
    "Your job is to enjoy the round. Most people play better than they expected to."
```

### Issues

**"Most people"** is democratising language. It's also not quite right — the frame of "most people play better than expected" is slightly apologetic, like you're reassuring someone who's nervous. The actual claim should be more confident: you know what to watch for before they arrive, you've done this before, improvement is the expected outcome, not a pleasant surprise.

**The numbered steps feel like SaaS onboarding.** "01 / 02 / 03" is a UX pattern borrowed from software products. For a luxury concierge service, the numbered sequence signals efficiency, not craft. It works fine at this price point (it's not broken), but there's a version that feels more like a conversation.

**Suggested rewrite for step 3:**
Change "Most people play better than they expected to." to:  
"Your job on the day is to play. Everything else is already handled."

Or fold the whole section into a single elegant summary sentence that links to the full `/play-with-a-pro` detail rather than trying to explain everything on the homepage.

---

## 4. Homepage — "Why Mallorca" Section

### Current state (confirmed in code)
```
Stats: Jan-Dec / 24 courses / 21 open to visitors / 3 private or restricted
Paragraphs: Two blocks covering peak pricing seasons and course access detail
```

### Issues

**This is reference information, not conversion copy.** The detail about peak rates, Reserva Rotana's refurbishment closure, and shareholder-only courses is genuinely useful, but it belongs in a guide page — not on the homepage between the experience section and the course cards. It interrupts the momentum.

**"3 private or restricted" teases access without explaining why you should care.** The implicit message should be: "some of the best courses can't be booked by visitors — I can get you in." That's a powerful differentiator. But the current framing just lists a number.

**The paragraphs contain the word "catches visitors out"** which is slightly adversarial framing. The point is that you know the island, not that visitors are naive.

### Recommended changes

1. Cut the two body paragraphs from the homepage entirely. Keep one line: "Mallorca is playable year-round. The best courses require knowing who to call." Link to a full guide.
2. Reframe the "3 private or restricted" stat as: "Including courses most visitors can't book." That's the sell.
3. Alternatively, replace the whole stats block with a single sentence and move the detail to a "When to Come" guide page.

---

## 5. Homepage — FAQ Section

### Current state (confirmed in code)
The FAQ section uses `<details>/<summary>` accordions and sits between the packages and the newsletter, before the final CTA. Five questions.

### Issues

**Placement kills momentum.** The user has just seen pricing, read testimonials, and is primed to enquire. The FAQ intercepts them with questions they may not have had, adding friction before the CTA.

**The FAQ intro reads awkwardly:**
```
intro: "Tell me your dates, your handicap, and what you're looking for. I come back personally, usually sooner, always within 24 hours."
```
That copy belongs on the contact page, not as the intro to an FAQ block.

### Recommended changes

1. Move the FAQ to `/play-with-a-pro` where it's appropriate to answer pre-booking questions in depth.
2. If keeping it on the homepage, reduce to 2–3 questions max and move it above the packages section rather than after it.
3. Fix the intro copy — give it a proper setup line like "Common questions before booking."

---

## 6. Homepage — Newsletter Section

### Current state (confirmed in code)
```
"Every two weeks I write up what I find playing the island. Course conditions, which courses pair well together, when to come, where to stay, and a few things worth doing when you put the clubs down."
```

### Issues

**The description is honest but uninspiring.** "I write up what I find" is accurate but sounds casual. The newsletter is actually a valuable differentiator — a PGA pro who plays the courses most weeks, reporting on actual conditions, is something no booking platform or review site can replicate.

### Suggested rewrite
```
"Course conditions updated as I play them. Which tee times are worth fighting for, where the greens are running fast, and what's worth knowing before you fly. Sent every two weeks, unsubscribe whenever."
```

Or more direct:
```
"Notes from the island. Every two weeks: which courses I've played, what the conditions were actually like, and anything worth knowing before you book."
```

---

## 7. Homepage — Packages Section (Tier Cards)

### Current state (confirmed in code)
Homepage tier cards for Solo and Group show features but **no price**. CTA is "See pricing" which links to `/play-with-a-pro`. The Signature tier on the homepage version has vaguer features than the `/play-with-a-pro` version.

### Issues

**"See pricing" is a weak CTA for cards that already contain most of the selling information.** The user has read the features and is interested. Sending them to another page to find the price adds a click that exists for no good reason.

**The homepage Signature Experience features are softer than the `/play-with-a-pro` version.** Compare:

Homepage:
```
'Andy coordinates everything and confirms the itinerary with you'
'Caddy, videographer, or premium club hire available as add-ons'
'Michelin lunch and private transfers available'
```

Play With A Pro page:
```
'Michelin-starred lunch or private chef booking'
'Videographer to capture highlights and produce a memento video'
'Spa, massage, and time to decompress properly post-golf'
'Private transfers throughout the day'
```

The `/play-with-a-pro` version is far more specific and persuasive. The homepage is hedging with "available" language.

### Recommended changes

1. Add prices to the homepage tier cards (€495 / €950 / €3,000+). Remove "See pricing" CTA. Change to "Enquire →" that goes directly to `/contact`.
2. Align homepage Signature features to match the fuller `/play-with-a-pro` version.
3. Add one sentence of specificity to the Signature: name the Michelin restaurant (if there's a primary one) and describe what the video product is.

---

## 8. /play-with-a-pro Page

### What works
The structure is strong: hero with price, day description, questionnaire hook, what's included, who it's for, testimonials, packages, final CTA. This is a well-built sales page.

### Issues

**The hero body tries to do too much:**
```
'One course. A full day alongside a PGA Advanced Professional who has arranged everything. Solo from €495. Groups from €950. Green fees additional, confirmed when we speak.'
```
Good information, but "Green fees additional, confirmed when we speak" is a caveat in the first sentence. It's the right disclosure but wrong placement — it slightly undercuts the confident opening. Move the caveat into the package notes (where it already appears) and let the hero breathe.

**"Before you arrive, I already know what to watch for" is the title of the day section.** This is actually the strongest line on the page. Consider bringing it up — or a version of it — into the hero.

**The questionnaire CTA appears three times** (in the day section, in the final CTA, and via the pre-round questionnaire link). For a user who hasn't booked yet, seeing a "Pre-Round Questionnaire" link is confusing — it implies they should complete a questionnaire before enquiring. This should only be visible to people who have already booked, not as a page-level CTA.

**The Signature Experience price (€3,000+) needs more than bullet points to justify itself.** At this price, the user is making a significant decision. The current features list is strong but reads like a spec sheet. One narrative paragraph describing the actual arc of the day — arrival, warm-up, the walk, where lunch is, what the evening looks like — would do more than any bullet point.

**"What's included" uses a mix of styles** — some items have a title + detail, some don't. The post-round debrief just says "What improved, what to work on, clear and honest" which is the most vague item on the list.

### Recommended changes

1. Simplify the hero body. Remove the green fees caveat from the opening sentence.
2. Consider promoting "Before you arrive, I already know what to watch for" to the hero.
3. Remove the questionnaire CTA from the public-facing page. Put it only on the booking confirmation / thank-you page.
4. Add a short narrative paragraph under the Signature tier describing the actual shape of the day.
5. Tighten the "What's included" items so they all have the same structure (title + specific detail).

---

## 9. /about Page

### What exists [AUDIT ERROR — both audits said this page was missing]
The about page exists and is well-built: chapters with labels, a pull-quote, a portrait, a full credential list, a winners collage, and a career strip.

### Issues (what's actually there vs. what could be better)

The sidebar summary is strong:
```
"Andy Griffiths is a PGA Advanced Professional who spent eleven years at the top of coaching in China, becoming the country's first Trackman Master, coaching national team players, and building a following of hundreds of millions of views on Douyin. Before that: Pebble Beach, The Open Championship, Evian. He moved to Mallorca in 2025 to build something of his own."
```

This is the best single-paragraph summary of Andy's story on the site. **It does not appear on the homepage.** The homepage experience section covers the same ground but more briefly. Worth considering whether a version of this sidebar bio should appear in the homepage "experience" section.

**The about page has no photos of Andy with clients.** This is noted across all three audits as the single biggest imagery gap. The page shows a portrait and a winners collage, but no moments from actual days — no one at the first tee, no post-round drink, no coaching moment mid-round. These images don't exist yet (they require a shoot), but this is the highest-impact gap on the entire site.

---

## 10. /guides Pages

### What exists
Full published guides: Son Gual, Alcanada, Santa Ponsa 1. Language versions of all three. Several informational guides (best time to play, golf costs, club hire, trip planning). The `a-day-at-son-gual` experiential piece.

### Issues

**No "Mr Mallorca Notes" box.** This is one of the best suggestions across the audits and it's absent. A styled box inside each guide — with specific, personal observations like best tee time, wind tips, where members typically miss — would be the clearest possible differentiator from every other course review site. Generic reviews describe courses. This box would prove Andy has played them dozens of times.

**Guides don't end with a strong enough CTA.** The best SEO traffic lands on a guide, reads about Son Gual, and should be converted into an enquiry. The current guides likely have a footer CTA but the review content itself doesn't pull the user toward booking with enough intention.

**No comparison between courses.** A "How it compares" table (this course vs. two similar options) is useful for a visitor trying to choose between three courses they don't know. This is decision-support content that only Andy can provide credibly.

**Course photography has no captions.** An image of the 14th at Son Gual with a caption — "The wind shifts here after 2pm. Most visitors aim at the pin. Andy recommends the left edge of the green." — does more for trust than the image alone.

### Recommended changes

1. Add a "Mr Mallorca Notes" box to all three published guides. Template:
   - Best tee time
   - Wind tip
   - Where visitors typically drop shots
   - One thing worth doing at the clubhouse
2. Add figure captions to all course images with hole-specific context.
3. Add a "How it compares" table at the end of each guide.
4. Strengthen the end-of-guide CTA: name the course, give the price, make it feel like the next step is one click away.

---

## 11. Testimonials

### Current state
Three testimonials from Jo, Finlay, and Adam. Jo's appears on the homepage as a pull-quote. All three appear in full on `/play-with-a-pro`. Adam's also appears in the homepage winners section.

### Issues

**No photos.** All three reviews flag this. Faceless quotes are weaker than quotes with a face. Even a headshot at 48px diameter increases credibility significantly.

**Jo's quote is split — headline version on homepage, full version on `/play-with-a-pro`.** This is fine, but the homepage pull-quote ("After just 18 holes together, I've discovered a new ceiling to my potential.") is one of the strongest lines on the site and is somewhat buried between the packages and the FAQ.

**Finlay's quote mentions "groups of friends, groups on holiday, or a family"** which is warm but generic. It doesn't speak to a specific moment or transformation the way Jo's and Adam's do.

### Recommended changes

1. Ask Jo, Finlay, and Adam for a headshot. Small ask, big impact.
2. Add their home club and handicap bracket as attribution metadata (if they consent) — "Jo, HCP 12, Royal Birkdale" is more credible than just "Jo."
3. Move Jo's full quote to a more prominent position — consider placing it directly after the packages section as the final point of social proof before the CTA.

---

## 12. Contact Page

Not read in detail for this audit, but based on cross-references in the code:

**The form should have a "What happens next" note.** Something like: "I read every enquiry personally. You'll hear from me within 24 hours with a course recommendation and next steps." This removes friction and sets expectations. It should appear directly below the form or as a sidebar note.

**WhatsApp CTA exists** (confirmed — WhatsApp button component exists and the final CTA links to `wa.me/34624466702`). This is the right second channel.

---

## 13. Multilingual Versions

**[AUDIT ERROR — both audits said multilingual versions didn't exist.]**

The site has full versions in de, es, fr, nl, sv, and zh. The `socialProof` TikTok line is present in all language overrides. Fix in the English source file and all language versions should inherit the correction (assuming they use the same override pattern).

---

## 14. Imagery Strategy

This is the biggest structural gap and the one that cannot be fixed with code. All three audits agree.

**What exists:** Aerial course photography, Andy mid-swing, a winners collage.

**What's missing:**
- Andy with clients (at the first tee, mid-round, post-round drink)
- Coaching moments during a round
- The social side of the day (lunch table, clubhouse, the 19th hole)
- Detail shots with context (the lighthouse on Alcanada 13 from the tee, not the aerial)
- Post-round debrief moment

**The site sells a shared experience but every image shows either landscape or Andy alone.** That gap is felt even if the user doesn't consciously notice it.

**Recommended action:** Commission a half-day shoot with one real client (or a willing friend) covering: greeting at the clubhouse, pre-round briefing, coaching moment on the tee (looking at the ball, not the camera), the walk between holes, lunch, a post-round drink. 8–10 images from this single shoot would transform the site more than any copy or layout change.

---

## 15. "Gift This Experience" — Missing Revenue Stream

Kimi raises this and it's genuinely underexplored. A significant proportion of high-end experience purchases are gifts — birthdays, retirement, corporate rewards, significant anniversaries. The site has no "gift" framing, no "surprise someone" copy, and no gift certificate mechanism.

This doesn't require a payment gateway (which the site intentionally doesn't have). It just requires:
- A CTA on the contact page: "Buying this as a gift? Let me know and I'll prepare a certificate and keep the day details private until you're ready."
- One sentence on `/play-with-a-pro`: "These days also work well as gifts for milestone birthdays and corporate rewards."

---

## 16. Technical — Confirmed Not Issues

- **/pricing page broken** — [AUDIT ERROR] No pricing page exists or is linked. All pricing links go to `/play-with-a-pro` which works.
- **No multilingual site** — [AUDIT ERROR] de, es, fr, nl, sv, zh all exist.
- **No About page** — [AUDIT ERROR] `/about` exists and is comprehensive.
- **No FAQ** — [AUDIT ERROR] FAQ accordion exists on homepage.
- **No sticky nav** — [AUDIT ERROR] PageLayout handles navigation.

---

## Priority Order — What to Work Through

### Tier 1: Code changes, no new assets required

| # | What | Where | Effort |
|---|------|--------|--------|
| 1 | Replace `socialProof` TikTok line | `homepage-content.js` line 30 (and all language overrides) | 10 min |
| 2 | Add prices to homepage tier cards | `homepage-content.js` packages section | 20 min |
| 3 | Change homepage package CTAs from "See pricing" to "Enquire →" linking to `/contact` | `homepage-content.js` | 10 min |
| 4 | Align homepage Signature features to match the fuller `/play-with-a-pro` version | `homepage-content.js` | 15 min |
| 5 | Rewrite newsletter section copy | `HomePageInner.jsx` | 15 min |
| 6 | Rewrite "Most people play better than they expected to" | `homepage-content.js` how.steps[2] | 5 min |
| 7 | Add "What happens next" note to contact page | contact page | 20 min |
| 8 | Add "gift" sentence to `/play-with-a-pro` | `play-with-a-pro-content.js` | 10 min |
| 9 | Remove questionnaire CTA from public-facing play-with-a-pro page | `PlayWithAProView.jsx` | 15 min |
| 10 | Add price anchor to hero section | `homepage-content.js` hero | 10 min |

### Tier 2: Copy rewrites requiring judgment from Andy

| # | What | Where | Notes |
|---|------|--------|-------|
| 11 | Rewrite H1 hero — unify the two-line split into one clear statement | `homepage-content.js` | Need Andy's steer on direction |
| 12 | Add narrative paragraph for Signature Experience | `play-with-a-pro-content.js` | Andy to describe the actual arc of the day |
| 13 | Rewrite "Why Mallorca" section — cut body paragraphs, reframe the stats | `homepage-content.js` | |
| 14 | Move/reduce FAQ on homepage | `HomePageInner.jsx` + content | |
| 15 | Add figure captions to all guide images | Each guide `.jsx` file | Andy to write the captions |
| 16 | Add "Mr Mallorca Notes" box to all guides | Guide template + content | Andy to supply the notes |
| 17 | Strengthen end-of-guide CTAs | Each guide `.jsx` | |

### Tier 3: Requires new assets (photography)

| # | What | Notes |
|---|------|--------|
| 18 | Commission half-day shoot with client | Biggest single impact on site |
| 19 | Get headshots from Jo, Finlay, Adam | Simple email ask |
| 20 | Add testimonial photos to site once received | Code change after photos arrive |

---

## What Would Move This from Good to Exceptional

Three things, in the order they matter:

**1. The shoot.** One half-day with a willing client, a decent camera, and natural light. Andy at the first tee pointing something out. Andy mid-round doing what he does. A post-round moment. These images would transform the site from "well-designed information site" to "I can picture myself there." Nothing else comes close in terms of conversion impact.

**2. The Mr Mallorca Notes box in every guide.** This is the one content addition that is impossible to replicate. No booking platform, no golf review site, no AI can write: "The wind on 14 switches after 2pm. Members play left of the pin. Visitors aim at it and wonder why they ended up in the bunker." Andy can, because he's been there 40 times. This is the credibility signal that does the real work.

**3. The socialProof line.** It's one string in one file. Fixing it takes five minutes. It's currently undermining every other premium signal on the site.

# Mr Mallorca Golf — Writing Guide

This is the single source of truth for any writing in Andy Griffiths's voice. It lives in the repo root and is loaded automatically every session via `CLAUDE.md`. A mirror copy lives in Google Drive (`Active/MMG_BRAND_VOICE_GUIDELINES.md`) for iOS / fresh chats.

**Read this file before drafting anything. If a draft conflicts with anything here, rewrite the draft.**

---

## 1. Voice in one paragraph

Andy is a UK PGA Advanced Professional, Trackman-certified, TPI Level 3, eleven years coaching in Shanghai (Douyin: Andy 教练, hundreds of millions of views), arrived in Mallorca March 2025 with his wife Yina and their daughters. Low round 67. Held +0.4 before turning pro. Worked at Pebble Beach, Doral, Evian, The Open. He is the *expert outsider, not the established insider*. Honest, specific, calm. Writes as a professional who has just played the course, talking to another golfer about what to expect.

---

## 2. We are / We are not

| We are | We are not |
|---|---|
| Specific (names, numbers, holes, prices) | Vague ("impressive", "demanding") |
| Calm | Exclamatory |
| Direct | Manipulative (rhetorical setups, hooks) |
| Honest (every post has one negative) | Promotional |
| Professional (credentials show through observation) | Authoritative for its own sake |
| Personal (first person only when Andy has played the course) | Generic first person |

---

## 3. Hard bans — rewrite on sight

### Punctuation
- **No em dashes. None. Ever.** Replace with comma, colon, full stop, or rewrite.
- Exclamation marks: max 1–2 per post; zero in emails or formal copy.
- No three-fragment sequences ("The views. The course. The experience.") — delete entirely.

### Banned words
stunning, breathtaking, nestled, seamless, elevate, unforgettable, hidden gem, curated, bespoke, vibrant, bustling, exceptional, world-class (as filler), genuinely (as filler), unparalleled, boasting, holistic, robust, dynamic, cutting-edge, game-changer.

### Banned constructions
- "The best part?" / "Here's the truth" / "What people don't realise..."
- "It's not X, it's Y" / antithesis framing ("distance is available, but accuracy is the real test")
- "More than just..." / "Whether you're..." / "From X to Y..." / "In the heart of..." / "If you're looking for..." / "There is something for everyone"
- Travel-brochure sentence fragments posing as atmosphere
- Generic AI openings: "Nestled in...", "Mallorca is known for...", "If you're planning a golf trip to Mallorca..."

### Banned transitions
Moreover, Furthermore, Additionally, Notably, Indeed, Thus, Subsequently, Consequently. Use plain English: "Also", "And", "So".

### Place-name rules
- **Mallorca**, never Majorca. Even in titles.
- **Calvià** with the accent. Same for any Catalan/Spanish name with diacritics. Mojibake is release-blocking.
- Tramuntana (capitalised, no article — "Tramuntana mountains", not "the Tramuntanas").

### Other hard rules
- Never invent image captions. Use `[CAPTION]` placeholder if unknown.
- Testimonials stay word for word unless Andy explicitly approves a change.
- Santa Ponsa 2 must never appear as a shoot location.
- Club hire is blog/affiliate content only — never a service Andy offers.
- Trackman is a credential, not a Mallorca service unit.
- Phone numbers as links, never as visible page copy.
- € symbol, not "euros". Use the digits with the symbol: €210, not "210 euros" or "EUR 210".

---

## 4. Sentence-level patterns that work

These are pulled from Andy's actual published posts. Use them as anchors.

**The grounding reference** — ties Mallorca observation to Shanghai or England, near the top, once per post:
> "In January, when courses in England are sodden and shuttered, Son Gual's fairways are immaculate and the first tee is empty."
> "After years in China relying on caddies, I prefer to walk..."

**The honest specific** — lived-in detail, not written:
> "My drive came off the heel slightly. Still flew further than expected and avoided the bunkers, just."
> "I teed off at 15:20 on a Tuesday afternoon and the course was quiet enough that I could hear the wind moving through the pine trees between shots."

**The professional judgement** — opinion stated without hedging, not inflated:
> "Son Gual is my favourite course in Mallorca."
> "A GPS or course planner is genuinely worth having here."

**The useful negative** — every post needs at least one:
> "Bunker sand was inconsistent. Some lies firmer, others softer."
> "Signage around restricted buggy areas could be clearer. A couple of times I ended up somewhere that was not obviously marked as off limits."

**The verdict pattern** — rating + one specific strength + one honest limit + what it means for the reader:
> "9/10. T Golf Calvià is one of the best-conditioned courses I have played in Mallorca. The greens are excellent, the fairways are in great shape, and the layout tests you properly, particularly around distance judgement and water, without being unfair. It suits players who want a serious round in good condition. I would not put a high-handicapper here as their first course on a holiday trip."

**Actionable ending** — every post closes with something the reader can do:
> "Want to play it with someone who knows every hole? See the play-with-a-pro experience."

---

## 5. Channel-by-channel rules

### Blog / course reviews (mrmallorcagolf.com)
- 1,000–1,600 words
- Structure: specific-moment hook → course observations → practical info → verdict → CTA
- Drop into the hook, don't introduce it
- Every course post needs at least one honest negative
- Verdict block ends with rating, who it suits, who it doesn't
- First-person only for courses Andy has personally played

### Formal emails (course enquiries, club outreach)
- Open with name and credential: "My name is Andy Griffiths. I am a UK PGA Advanced Professional based in Mallorca..."
- No "I hope this email finds you well"
- One clear ask per email
- Sign off: "Many thanks, Andy Griffiths PGA Advanced Professional"
- Zero exclamation marks

### Client emails (responses to enquiries)
- Acknowledge the client's plan first
- Group clarifying questions in one block, not drip-fed
- Mention play-with-a-pro once, naturally, if relevant
- Helpful first, sales never

### Instagram MMG (@mrmallorcagolf)
- 150–200 words
- Story-led, opens on a moment not a broad statement
- Maximum 3 hashtags
- No "excited to share" / "drop a comment below"
- Soft close, no aggressive CTA
- No ellipses, no arrows

### Instagram personal
- Longer, more reflective
- Failures and recalibrations land here
- Ellipses and arrows OK in moderation
- Still no banned words

---

## 6. The self-check (run before showing Andy any draft)

1. Search every em dash. Remove.
2. Search the banned words list. Remove or rewrite.
3. Search "Majorca" → "Mallorca". Search "euros" → "€".
4. Could the opening sentence appear on any golf site in the world? If yes, rewrite.
5. Does it read like Andy talking to another golfer, or like a content writer? If the latter, rewrite.
6. Is there at least one honest negative?
7. Does the close give the reader something to do?
8. Does anything claim local knowledge Andy hasn't earned? (Arrived March 2025.)
9. Photo captions: are they specific to the actual photo? No invented details.
10. Run `npm run check:text` if the content is in the repo.

---

## 7. What Andy is not writing

Not a luxury travel brochure. Not a golf magazine feature. Not a tourism-board listicle. Not a LinkedIn thought leadership post. Not a press release for the course.

He is writing as a professional who has just played the course, being honest with another golfer about what to expect.

---

*Last updated: May 2026. When a new course gets published and a new sentence pattern emerges, add it to section 4.*

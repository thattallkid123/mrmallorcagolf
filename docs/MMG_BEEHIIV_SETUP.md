# Mr Mallorca Golf — Beehiiv Setup Reference

## Publication
- **Name:** Mr Mallorca Golf
- **URL:** mrmallorcagolf.beehiiv.com
- **Plan:** Max trial (as of April 2026)
- **From name:** Andy / Mr Mallorca Golf
- **Reply-to:** andy@mrmallorcagolf.com

---

## Style Tab — Colours to Set

The site uses a warm cream/dark green/gold palette. Default Beehiiv colours are generic dark blues — change these to match the brand.

**Where to set this:** Beehiiv dashboard left sidebar → Settings → Design (NOT inside the post editor — changes there only affect one post)

| Beehiiv field        | Value     | Notes                          |
|----------------------|-----------|-------------------------------|
| Outside Background   | `#F7F4EF` | --cream (site background)     |
| Post Background      | `#FFFFFF` | white — keeps email clean     |
| Text On Background   | `#2C2A27` | --charcoal                    |
| Primary              | `#2D4A3E` | --pine (buttons, accents)     |
| Text on Primary      | `#FFFFFF` | white text on green buttons   |
| Secondary            | `#1A1916` | --deep (headings)             |
| Links                | `#B8973C` | --gold (matches site links)   |

---

## Style Tab — Typography (Basic)

Set once in Settings → Design, applies to all posts automatically.

| Field | Value | Notes |
|---|---|---|
| Heading font family | Georgia | Closest available to Cormorant Garamond |
| Heading font weight | Regular (not Bold) | Bold is too heavy for this brand |
| Paragraph font family | Inter | Fine as-is |
| Paragraph font weight | Regular | Fine as-is |

---

## Style Tab — Spacing & Borders (Basic)

| Field | Value | Notes |
|---|---|---|
| Margin | 40px | Fine as-is |
| Padding | 40px | Fine as-is |
| Corner radius | **0px** | Change from default 10 — site uses square corners |
| Border thickness | 0px | Fine as-is |

---

## Style Tab — Advanced

General principles (screenshot Advanced tab and add details here when available):
- Button styles: square (radius 0), pine green `#2D4A3E` background, white text
- Divider colour: `#E0D8CB` (--sand)
- Accent/highlight: `#B8973C` (gold)

---

## New Post — What Goes in Each Field

Fill all fields before writing. These are set on the new post screen before you enter the editor.

**Title**
Full headline, shown in the web archive and post page.
Example: `Son Muntaner — Spain's best course, five minutes from Palma`

**Subtitle**
One sentence. What the reader gets from this email.
Example: `Course notes, green fees, and what Best Golf Course in Spain actually means on the ground.`

**Subject line**
What lands in the inbox. Can match the title or be tighter.
Example: `Son Muntaner. Best in Spain. Here's what I found.`

**Preview text**
The grey snippet after subject line in Gmail/Outlook. Override it manually — don't rely on auto-pull.
Example: `I played it on a Saturday morning. Full tee sheet, mixed group. Here's what I found.`

**Thumbnail**
One course photo, 1200x630px. Used for web archive card and social share previews.
Pull from repo: `/public/images/[course-name]-blog/`

**Content tags**
Course name + post type.
Examples: `Son Muntaner`, `Course Review` / `Trip Planning` / `Coaching`

---

## Post Format (copy this structure each time)

```
[Hook — drop reader into a thought, no intro, no welcome]

---

[Section heading]
[2–3 paragraphs]

---

[Section heading]
[2–3 paragraphs]

... repeat ...

---

[Green fees / practical block]

---

[Verdict — 2 short paragraphs]

[Link to full review: mrmallorcagolf.com/guides/[slug]]

[Sign-off — just "Andy", no "best wishes" or "warm regards"]
```

Use Beehiiv's horizontal divider block between sections.

---

## Voice Rules (condensed)

- First person, Andy speaking
- No em dashes
- No "stunning / nestled / breathtaking / world-class"
- No AI openings
- Honest negatives included — they make the positives credible
- Every section ends pointing toward a decision the reader can take
- One Shanghai/credential anchor per post

---

## Post Archive

| # | Subject | Course | Sent | Subscribers at send |
|---|---------|--------|------|-------------|
| 1 | Son Muntaner — Spain's best course, five minutes from Palma | Son Muntaner | [DATE] | 3 |

---

## Embed on Site

Subscribe page `/subscribe` — iframe embed ID:
```
https://subscribe-forms.beehiiv.com/e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4
```

Subscribe widget also appears on the contact page sidebar.

---

## Growing the List

- [ ] Add "Newsletter" to main nav (currently footer-only)
- [ ] Add subscribe prompt at bottom of every guide/blog post
- [ ] Add subscribe prompt on golf-courses page
- [ ] Share each post on Instagram with link in bio
- [ ] Post in r/golf / r/Mallorca linking to review, mention newsletter naturally
- [ ] Add subscribe link to Douyin/WeChat bio when Chinese content starts

---

## Thumbnail Images by Course

| Course | Repo path |
|--------|-----------|
| Son Muntaner | `/public/images/son-muntaner-blog/sm-8.jpg` |
| Son Gual | `/public/images/son-gual-blog/` |
| Alcanada | `/public/images/alcanada-blog/` |
| Santa Ponsa 1 | `/public/images/santa-ponsa-blog/sp-hero.jpg` |

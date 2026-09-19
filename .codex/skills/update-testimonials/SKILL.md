---
name: update-testimonials
description: Add or update client testimonials, the Google reviews rating badge, and other social-proof copy across all 7 locales. Use ONLY when Andy explicitly asks to add/change a testimonial or update the Google review numbers — never change testimonials on your own initiative.
---

# Testimonials & Social Proof

**Hard rule from CLAUDE.md: do not change testimonials unless Andy explicitly asks.** This skill is for when he does.

## Where testimonials live

| Surface | File | Notes |
|---|---|---|
| Homepage "winners" section | `src/lib/homepage-content.js` | `winners.testimonial` + `attribution` — repeated per locale (all 7 in one file) |
| Play With A Pro page | `src/lib/play-with-a-pro-content.js` + `-localized.js` | `testimonials.items[]`, EN has `{text, author}`, locale files have `{text}` only — merged positionally by array index (see Reordering below) |
| Play With A Pro Explained guide | `src/lib/play-with-a-pro-explained-content.js` + `-localized.js` | `quote1`, `quote2`, and `afterRound.quoteText`/`quoteCredit` — same kind of verbatim client quote as `testimonials`, just single-quote pull-quotes instead of a carousel. A strong line from a new testimonial is a good candidate to feature here instead of (or as well as) the carousel. |
| About page | `src/lib/about-content.js` `clients` block (+ `-localized.js`), rendered by `AboutView.jsx` | Three client quotes on how Andy is to be around (Matt, Finlay, Mark), in the `.pull-quote` style with a `<cite>` credit. Locale overlays carry `{text}` only; credits come from EN by index. |
| Contact page | `src/lib/contact-content.js` `trust` (+ `-localized.js`) | One quote in the left-column quote box, shown to someone about to enquire. Currently Mark's "down to earth... so relaxed". |
| Subscribe page | `src/app/(en)/subscribe/SubscribeClient.jsx` | |

Before editing, grep `testimonial` across `src/` — surfaces may have been added since this list was written.

**`src/data/testimonials.json` is dead — never edit it.** It's an orphaned extraction from an old refactor, not imported anywhere in `src/`. The real data lives in the files above.

**The canonical editorial master is Drive `Reference/MMG_TESTIMONIALS_AND_FEEDBACK.md`**, not the repo files. Add every new testimonial there first (same `### Name` / `**Full quote:**` / `**Short excerpt:**` / `**Status:** ✓ Public-ready (Google review)` / `**Where used:**` / `**Notes:**` structure as the existing entries) — the repo files are downstream copies. This file is also what drives the review count (see Reviews badge below), so a testimonial added only in the repo won't bump the count.

**Data existing is not proof it renders.** As of Aug 2026 the Play With A Pro `testimonials` object sat in `play-with-a-pro-content.js`/`-localized.js` but `PlayWithAProView.jsx` never consumed it — 9 client quotes (6 original + 3 added that session) were completely invisible on the live page despite passing every content/locale/build check, because those checks validate data shape, not that a component renders it. After editing testimonial data, grep the page component (`PlayWithAProView.jsx` etc.) for the matching key and confirm it's actually referenced in JSX — then verify on the built/live page, not just via `npm run build` succeeding. (The CSS for a dark-card `.testimonials`/`.testimonial`/`.testimonial__author` layout already exists in `globals.css`, ready to wire in if a surface is missing its render.)

**Convention: first name only, no surnames**, matching the existing set (Jo, Finlay, Adam, John, Synøve, Mark, Julien, Amanda, Sam, Jannie, Paul, Matt, Mark P.). **The author string is also the React key on the carousel, so two clients with the same first name collide** — add a last initial to the newer one (Mark Parker is "Mark P.", Mark McKay stays "Mark"). Don't rename an existing testimonial to disambiguate.

**Quote boxes are deliberately indented** (gold left border plus padding, so the quote text sits ~22px right of the body text around it — `.pull-quote`, `.promise-block`, `.course__note`, `.post-pull`). Andy chose this style; a flush-left version was tried and rejected 2026-09-14. Don't "fix" the indent.

## Adding or replacing a testimonial

1. **Long reviews (over ~100 words) need Andy's trim before they go on the carousel** — a 180-word card was flagged as "way too long" next to the others. Propose a shortened version that keeps his words and the close, and ask before publishing. Keep any lines about Andy as a person for the master's "About Andy" section rather than losing them. **Get the exact wording from Andy** — real client words, real first name (or initial) for attribution. Never invent, embellish, or "improve" a client quote. Trim only with Andy's approval.
2. Confirm the client is fine with public use (ask Andy — his call).
3. Add the entry to the Drive master (`MMG_TESTIMONIALS_AND_FEEDBACK.md`) first, then the English repo master. Keep the original full quote verbatim in the master and record any shortened site version on its own line. **Run `npm run sync:social-proof` and check the count moved by exactly the number of reviews added** — if it doesn't, suspect the parser (a JS-regex `\Z` bug once dropped a review because its text contained a capital Z).
4. **Translate for de/es/fr/nl/sv/zh in the same edit** — no English-only structure gaps. Match the register of the existing translations (see the current Adam testimonial in each locale for tone). For zh, follow the `localize-check` skill rules.
5. Keep factual claims verifiable (competition wins, handicap drops) — if a claim can't be verified, soften it or leave it out.
6. If a photo comes with it, follow the `add-site-photos` skill — check the filename actually names the client (rename the Drive original if it doesn't, e.g. `Son Gual_Johannes.jpg` → `Son Gual_Jannie Davel.jpg` when the client's name was wrong) before processing it into `public/images/`.
7. If the testimonial has an especially strong or illustrative line, consider featuring it as a `quote1`/`quote2` pull-quote on the Play With A Pro Explained guide too (see the table above) — a carousel entry alone gets far less visibility than a mid-page pull-quote, since most visitors won't scroll a horizontal carousel to the end.

## Ordering testimonials

**Order is not automatically ranked — it's whatever order the arrays are in**, historically just chronological by collection date. If Andy wants a stronger review more prominent, don't leave it appended at the end by default; ask, or point out the current (chronological) order and offer to reorder by strength. When reordering:

- The **EN file carries `author`**, the **locale files don't** — they merge positionally by array index (`mergeLocalizedContent` in `guide-content-localization.js` maps `localized.items[i]` onto `base.items[i]`). So a reorder must move each translated quote to the **same index** in every one of the 7 locale blocks as its English counterpart, or a locale will show the wrong name/photo pairing (there's no runtime error — the text will just be silently mismatched).
- After reordering, `npm run check:i18n-release` will only tell you the *lengths* still match, not that the order is right — spot-check by grepping `"author":` in the EN file and eyeballing the sequence, and ideally load the live/preview page in each locale switcher.

## Reviews badge update

**The badge is driven by `src/data/site-social-proof.json`** (`reviewRating`, `reviewCount`, `reviewUrl`), which `src/components/ReviewBadge.jsx` imports — do not hand-edit constants in `ReviewBadge.jsx`, there are none anymore (that was true before the social-proof JSON existed). The site uses **Google reviews** (replaced Trustpilot, July 2026).

The count itself is **not** freely editable: `scripts/sync-social-proof.mjs` regenerates `reviewCount` by counting `### Name` sections in the Drive master (`MMG_TESTIMONIALS_AND_FEEDBACK.md`) that have `**Status:** ...public-ready...` and `Google review` in the body. So:
1. Add the new testimonial's `### Name` section to the Drive master with those markers (see step 3 above).
2. Run `npm run sync:social-proof` to regenerate `site-social-proof.json` — don't hand-edit the count, or `check:social-proof` will flag it as out of sync on the next push (it re-derives from the master and overwrites a hand-edit that happens to match by luck).

## Verify and ship

- `npm run check:i18n-release` (testimonials are locale-facing shared content) — confirms array lengths match, not that order/content is right (see Ordering above)
- `npm run check:content` — this runs **`check:testimonial-integrity`**, which snapshots every testimonial/quote subtree and fails the build on *any* diff (wording, reorder, new entry) as a guard against accidental edits. A real, approved change is expected to fail it once — run `npm run check:testimonial-integrity -- --accept` to lock in the new snapshot, then re-run `check:content` clean. Don't run `--accept` on anything you didn't just get explicit sign-off on.
- It also runs **`check:social-proof`** — if you changed the review count without going through the Drive master + `sync:social-proof` (see above), this fails.
- If a pull-quote (`quote1`/`quote2`/`quoteText`) uses an em dash or other "banned" character verbatim from the client, `check:voice` already exempts `testimonials`, `quote1`, `quote2`, and `quoteText` subtrees from its rules (`scripts/check-voice.mjs` → `EXCLUDED_SUBTREE_KEYS`) — a real client quote is never a voice violation to fix.
- Eyeball the rendered sections — long quotes can break card layouts, especially DE (longest strings) and on mobile
- Ship via the `ship` skill

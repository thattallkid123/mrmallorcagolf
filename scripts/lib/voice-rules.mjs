// The voice rules a pattern can catch, shared by check:voice (every English content
// file, run on commit, push and CI) and voice:draft (any draft, before Andy reads it).
// The canonical rules are the Drive voice guide
// (Systems & Planning\MMG_BRAND_VOICE_GUIDELINES.md); this file only holds the
// ones that are mechanically checkable. Add to it when the guide adds one.

export const EM_DASH = '—'

// Section 3 "Banned words" — filler that reads as brochure/AI copy.
export const BANNED_WORDS = [
  'stunning', 'breathtaking', 'nestled', 'seamless', 'elevate', 'unforgettable',
  'hidden gem', 'curated', 'vibrant', 'bustling', 'exceptional',
  'world-class', 'unparalleled', 'boasting', 'holistic', 'robust', 'dynamic',
  'cutting-edge', 'game-changer',
  // 'bespoke' was removed 2026-08-27 on Andy's explicit call: he uses it
  // deliberately for the Signature Experience. It has also been removed from
  // the banned list in the canonical Drive voice guide, so the two agree.
  // cursor/CLAUDE.md's brand-voice section names these two by name as banned
  // AI clichés — this check had no coverage for them until 2026-08-23.
  'delve into', 'embark on',
]

// Section 3 "Banned transitions" — use plain English instead.
export const BANNED_TRANSITIONS = [
  'Moreover', 'Furthermore', 'Additionally', 'Notably', 'Indeed',
  'Subsequently', 'Consequently',
]

// Claims the site must not make, as opposed to words it must not use.
//
// Added 2026-08-29 after the homepage was found still promising a "guaranteed
// private tee time" and that Andy "always tries to secure the most personal
// tee time possible", hours after the Play With A Pro page had been corrected.
// Neither is true: courses pair bookings, and anyone can book onto the slot
// online or directly with the club right up until the group tees off. Andy
// can reserve the spare slots at cost, which is a purchase, not a promise.
//
// Deliberately targets the guarantee framing, not the phrase "private tee
// time" — Signature Day includes one as standard, so that claim is accurate.
export const BANNED_CLAIMS = [
  {
    label: 'guaranteed private tee time (courses can fill the slot until tee-off)',
    re: /(guarantee\w*[^.!?]{0,40}private tee.?time|private tee.?time[^.!?]{0,40}guarantee\w*)/i,
  },
  {
    label: 'always secures the tee time (overclaims control Andy does not have)',
    re: /\balways\b[^.!?]{0,40}\b(secure|secures|securing|book|books|booking|get|gets|getting)\b[^.!?]{0,40}tee.?time/i,
  },
]

// Section 3 "Banned constructions" and section 4 "No dead metaphor", where the
// construction has a fixed wording a regex can see.
//
// Added 2026-10-08 after seven draft guides passed this check while carrying
// "The honest negative:" 38 times, "they answer different questions", "The
// right answer depends on the golfer, not the map", "Shorter does not mean
// simpler", 13 visible [VERIFY] tags and an "Andy note:". Every one is banned
// in the voice guide; none is a banned *word*, so the check said nothing.
// Antithesis in general ("X, not Y") cannot be caught by pattern without
// flagging honest uses; that stays a judgement call for the mmg-voice-check
// skill. These are the fixed formulas only.
export const BANNED_CONSTRUCTIONS = [
  { label: 'labelled negative "The honest negative:" (state the negative in plain terms)', re: /\bthe honest negative:/i },
  { label: 'comparison filler "answer different questions"', re: /\banswers? different questions\b/i },
  { label: 'comparison filler "do different jobs"', re: /\b(?:do|does|doing) different jobs\b/i },
  { label: 'antithesis "depends on the X, not the Y"', re: /\bdepends? on the [\w-]+(?: [\w-]+)?,? not (?:on )?the\b/i },
  { label: 'antithesis "shorter does not mean simpler"', re: /\b(?:\w+er|similar [\w-]+(?: [\w-]+)?) does not mean (?:\w+er|similar)\b/i },
  { label: 'dead metaphor (say the fact that made you believe it)', re: /\b(?:earns? its place|pays? for itself|punch(?:es)? above its weight|more than makes? up for|worth its weight|does the heavy lifting|ticks every box|well worth it|adds? another dimension)\b/i },
  { label: 'brochure construction', re: /(?:\bthe best part\?|\bhere'?s the truth\b|\bhere is the truth\b|\bwhat people don'?t realise\b|\bmore than just\b|\bwhether you'?re\b|\bin the heart of\b|\bif you'?re looking for\b|\bsomething for everyone\b)/i },
  { label: 'placeholder left in copy', re: /\[(?:VERIFY|ANDY|TODO|TBC|CHECK|CAPTION)[^\]]*\]/ },
  { label: 'note to Andy left in copy (prose says "I", see first-person rule)', re: /\bAndy(?:'s)? notes?:/ },
  // Andy's call on the Son Quint and Son Vida drafts (Sep-Oct 2026): phrases that could sit in
  // any course review. Say the tier, hole or consequence instead (voice guide section 4).
  { label: 'reviewer-speak (name the hole, tier or consequence instead)', re: /\b(?:asks plenty|carries the difficulty|plenty to think about|(?:a |is a )?good fit for)\b/i },
  // Andy's call 2026-10-08: write every course plainly, never disclaim it.
  // "played for" is excluded so a client FAQ ("I haven't played for a long
  // time") is not caught.
  { label: '"I have not played" disclaimer (write the course plainly)', re: /\bI (?:have not|haven't|have never|never) (?:yet )?played (?!for\b)/i },
]

// Legitimate phrases that contain a banned word but are not the banned filler
// use (e.g. "dynamic pricing" is an industry term, not the vague adjective
// "dynamic"). These are blanked out before the banned-word scan.
// "World-class venues" (homepage credentials heading) is an explicit Andy
// exception to the banned-word list: factually true (Pebble Beach, Doral,
// Evian, The Open), not filler, approved 2026-08-13.
export const ALLOWED_PHRASES = ['dynamic pricing', 'pricing is dynamic', 'world-class venues']

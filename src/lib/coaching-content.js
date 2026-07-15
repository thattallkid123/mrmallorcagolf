import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedCoachingContent } from './coaching-content-localized.js'

export const COACHING_CONTENT = {
  en: {
  "locale": "en",
  "imageAlt": "Andy Griffiths coaching golf on a Mallorca course",
  "hero": {
    "breadcrumbHome": "Home",
    "breadcrumbCurrent": "On-Course Coaching",
    "title": "Better Golf, Without a Full Rebuild.",
    "body": "On-course coaching for visiting and resident golfers. We work in real conditions, over real shots, without the technical overload that disappears by the 3rd hole."
  },
  "range": {
    "eyebrow": "Why the range isn't enough",
    "title": "There's a reason your range game doesn't show up on the course.",
    "paragraphs": [
      "The range is flat, controlled, and consequence-free. Then you stand on the 1st tee and none of it transfers.",
      "On-course coaching puts the lesson where it actually matters: on the fairway, in the rough, in the wind, with a score that matters."
    ],
    "quote": "Hitting pads is not sparring. You can look sharp on the pads and still find out very quickly what holds up once someone stands in front of you. Golf is much the same. The range matters, but the course tells the truth.",
    "quoteAttribution": "Andy Griffiths, PGA Advanced Professional",
    "questionnaireEyebrow": "The questionnaire",
    "questionnaireParagraphs": [
      "A short questionnaire shapes the day before we start: what's frustrating you, where the gaps are, and what success looks like.",
      "By the first tee, I already know what to look for. The feedback is situational and honest, not generic.",
      "Sessions take place at Son Gual, Alcanada, or a course matched to your level and goals."
    ],
    "questionnaireCta": "Discuss a Session →"
  },
  "improvements": {
    "eyebrow": "What actually gets better",
    "title": "Here is what tends to change during a round with me.",
    "sub": "And why it usually sticks better than another basket on the range.",
    "items": [
      {
        "num": "01",
        "title": "Course management",
        "text": "Most golfers lose more shots to poor decisions than poor swings. Club, target, shape - these choices separate a 90 from an 80."
      },
      {
        "num": "02",
        "title": "Shot selection under pressure",
        "text": "The decisions that fall apart under pressure become visible on the course in a way they never do on a range."
      },
      {
        "num": "03",
        "title": "Reading greens and slopes",
        "text": "Putting and chipping on a real green is completely different from a practice green. Speed, slope, grain, and pressure all matter."
      },
      {
        "num": "04",
        "title": "Playing in wind",
        "text": "Mallorca is windy. Son Gual especially has its own wind ecosystem. This only gets trained when it is actually blowing."
      },
      {
        "num": "05",
        "title": "Mental game and routine",
        "text": "How you speak to yourself, how you reset, and whether your routine holds up under pressure only shows up when the consequences are real."
      },
      {
        "num": "06",
        "title": "Finding the low-hanging fruit",
        "text": "Most golfers improve fastest through one or two small unlocks, not a total rebuild. Real-world lies, fairways, and rough show you what matters."
      }
    ]
  },
  "how": {
    "eyebrow": "How it works",
    "title": "Three stages. One session built around the shots that matter.",
    "body": "We play together on-course. The coaching happens in real time, and the feedback is practical, honest, and specific to what is happening in front of us.",
    "steps": [
      {
        "num": "01",
        "title": "The questionnaire",
        "text": "You complete a short form before the session so I already have a picture by the first tee."
      },
      {
        "num": "02",
        "title": "The round",
        "text": "We play together. The right observation arrives at the right moment - not as a lecture, but as something that changes your score."
      },
      {
        "num": "03",
        "title": "The debrief",
        "text": "Over lunch, we cover what improved, what to work on, and what to take away."
      }
    ]
  },
  "who": {
    "eyebrow": "Who this is for",
    "title": "If any of these sound familiar, this should help.",
    "cards": [
      {
        "title": "Visiting golfers",
        "text": "Focused improvement during your time on the island."
      },
      {
        "title": "Resident golfers",
        "text": "Regular work with a professional who knows the same courses you play."
      },
      {
        "title": "The range/course gap",
        "text": "Your practice game never transfers."
      },
      {
        "title": "Smarter, not rebuilt",
        "text": "You want to play better without rebuilding everything from scratch."
      }
    ]
  },
  "finalCta": {
    "eyebrow": "Ready to play better?",
    "title": "Get in touch to discuss a session.",
    "body": "Tell me where your game is now and what you want from it. I'll build the session around that.",
    "primaryCta": "Get in Touch →",
    "secondaryCta": "See the golf days"
  }
}
}

export function getCoachingContent(locale = 'en') {
  if (locale === 'en') return COACHING_CONTENT.en
  const localized = getLocalizedCoachingContent(locale)
  return localized
    ? {
        ...mergeLocalizedContent(COACHING_CONTENT.en, localized),
        locale,
      }
    : COACHING_CONTENT.en
}

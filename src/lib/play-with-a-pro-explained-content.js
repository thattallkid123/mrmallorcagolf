// English owns structure. Locale overlays translate copy only.
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlayWithAProExplainedContent } from './play-with-a-pro-explained-content-localized.js'

export const PLAY_WITH_A_PRO_EXPLAINED_CONTENT = {
  en: {
    hero: {
      eyebrow: 'A Full Day on Course · Mallorca',
      titleLine1: 'What "Play With A Pro"',
      titleLine2: 'actually looks like.',
      lead: 'What a full day on course actually looks like, how it changes what you see in your game, and what people take home that they did not expect.',
      primaryCta: 'See pricing',
      secondaryCta: 'More info',
    },
    quote1: {
      text: "After just 18 holes together, I've discovered a new ceiling to my potential.",
      credit: 'Jo',
    },
    whyPlay: {
      eyebrow: 'Why play with a pro',
      title: 'Seeing your decisions. Seeing your mistakes. Asking the right questions.',
      paragraphs: [
        "Playing alone, you can miss what's actually happening. A shot that felt solid but came off the club slightly different. A decision that worked out but was based on incomplete information. A habit you've built over weeks that you don't see because you're inside it.",
        "When I'm there, I see those things. Not to criticise. To show you what's actually possible if the decision changes. That's the product. Clarity about what you're doing and why it matters.",
        "A lot of coaching is about swing positions and mechanics. This day is different. It's about the low-hanging fruit. What's the one thing in your shot selection or course management that, if it changes, makes the biggest difference. Practice types that actually work for how you learn. Questions about your own game that a practice range can't answer. Not a full overhaul. Just the clarity to know what to work on and how.",
      ],
    },
    beforeDay: {
      eyebrow: 'Before the day',
      title: "What if I play badly. I haven't played for a long time.",
      paragraphs: [
        "I hear this more than anything else. The concern is real. You book a day, you show up, and your swing feels unfamiliar. Your short game is rusty. You're reading the fairway wrong. None of that is the point.",
        "A day like this isn't measured against your handicap or your best round. It's measured against what changes in how you see the game. Adam played since he was five, figured he had the fundamentals down. One day on course shifted his whole approach to shot selection. Jo hadn't played in years. The day opened something up for him that a week at a practice range could not.",
        'The score matters less than the questions it provokes. What was the right club there. What do I actually need to work on when I get home. Those are the things that stay.',
        "Before the day, I review your pre-round questionnaire and we speak about your game: what you've been working on, what's been frustrating you, and what a good day looks like from where you're standing. By the time we reach the first tee, I already know what to look for. That context shapes everything that happens next.",
      ],
    },
    duringRound: {
      eyebrow: 'During the round',
      title: 'The decisions here are real.',
      paragraphs: [
        "The course is chosen to match your game. A proper test, but not unfair. Wind, conditions, narrow fairways, water: the decisions you make change with what's in front of you, and getting them right or wrong matters. That's why playing with someone matters.",
        'On a range, a tip about club selection or alignment is abstract. You hear it, you file it, you move to the next shot. On course, when the wind is pushing, the fairway is narrow, and the score is real, the same information becomes concrete. You feel it. That difference is what makes things stick.',
        'The coaching arrives at the right moment: on the tee into the wind where the decision is contested, on the approach where club selection changes the hole, on the putt where reading the break from the right side makes one more shot possible. Not a running commentary. Just the observation that changes the hole.',
      ],
    },
    quote2: {
      text: 'The insight into what calculations go into each shot has helped me improve my decision making immensely.',
      credit: 'Finlay',
    },
    afterRound: {
      eyebrow: 'After the round',
      title: 'What you take from the day.',
      paragraph:
        'When the round is done, you will already have had clear feedback on what worked well, what did not, and what to keep working on. I also send you a written summary afterwards so you do not forget the detail from the day. You finish with a clear picture, not a long list, just the things that will actually make a difference.',
      quoteText:
        'He gave me clear and specific feedback that helped me correct several of my mistakes. Especially my putting, which I have struggled with, has improved a lot.',
      quoteCredit: 'Synøve',
    },
    whatChanges: {
      eyebrow: 'Afterward',
      title: 'The gap between what you expected and what you got.',
      paragraphs: [
        'Most coaching produces a list. Things to practise, positions to find, habits to break. A day like this produces something different. Because the decisions were real and the shots had consequences, what you learned is stored differently. It stays.',
        'The score card will show what it shows. The real product is the shift in how you approach the next round: the questions you ask before you play, the reads you trust, the decisions you make with more clarity because you made them on a course where they mattered.',
      ],
    },
    facts: {
      format: { label: 'Format', value: '18 holes, full day' },
      courseSelection: { label: 'Course selection', value: 'Matched to your game and handicap' },
      included: { label: "What's included", value: 'Course, tee time, coaching, strategy' },
      duration: { label: 'Duration', value: 'Typically 5–6 hours' },
      dayRateLabel: 'Day rate',
      soloLabel: 'solo',
      groupSuffix: 'for 2-3 golfers (course fee additional)',
      seeCoursesCta: 'See which courses work for you',
    },
    finalCta: {
      eyebrow: 'Ready to play',
      title: "Tell me when you're coming.",
      body: "Tell me your dates, how many of you there are, and what you're looking for. I come back personally within 24 hours.",
      primaryCta: 'Get in touch',
      secondaryCta: 'See pricing →',
    },
    sticky: {
      primaryLabel: 'Get in touch',
      secondaryLabel: 'Message on WhatsApp',
      secondaryHref:
        'https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20a%20Play%20With%20a%20Pro%20day.',
    },
  },
}

function getMergedContent(locale = 'en') {
  if (locale === 'en') return PLAY_WITH_A_PRO_EXPLAINED_CONTENT.en
  const localized = getLocalizedPlayWithAProExplainedContent(locale)
  return localized ? mergeLocalizedContent(PLAY_WITH_A_PRO_EXPLAINED_CONTENT.en, localized) : PLAY_WITH_A_PRO_EXPLAINED_CONTENT.en
}

export function getPlayWithAProExplainedContent(locale = 'en') {
  return getMergedContent(locale)
}

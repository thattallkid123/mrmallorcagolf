export const COACHING_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'On-Course Coaching',
      title: 'Better Golf. Without Changing Everything.',
      body:
        "On-course coaching for visiting and resident golfers. Real conditions, real decisions, real improvement - and none of the technical overload that leaves most range sessions unused by the 3rd hole.",
    },
    range: {
      eyebrow: "Why the range isn't enough",
      title: "There's a reason your range game doesn't show up on the course.",
      paragraphs: [
        "The range is flat, controlled, and consequence-free. You hit off a perfect mat with no wind, no slopes, no score on the line, and no one watching. Then you stand on the 1st tee and none of it transfers.",
        "On-course coaching puts the lesson where it actually helps. On the fairway. In the rough. On a sloping lie with a wind you didn't expect. With a score that matters. That's where games change - and that's where we work.",
      ],
      quote:
        'Think of it like boxing. You can train on the pads for weeks and feel ready. Then you have your first sparring session and everything changes. Golf is the same. The first tee is not the driving range.',
      quoteAttribution: 'Andy Griffiths, PGA Advanced Professional',
      questionnaireEyebrow: 'The questionnaire',
      questionnaireParagraphs: [
        "A short questionnaire before the session shapes the day before we start. What's frustrating you, where the gaps are, what success looks like.",
        'By the time we reach the first tee, I already have a picture of what to look for. The feedback is situational and honest - not a generic lesson plan applied to everyone.',
        'Sessions take place at Son Gual, Alcanada, or a course matched to your level and goals.',
      ],
      questionnaireCta: 'Discuss a Session →',
    },
    improvements: {
      eyebrow: 'What actually gets better',
      title: "Here's what changes during a round with me.",
      sub: 'And why it sticks in a way range work rarely does.',
      items: [
        {
          num: '01',
          title: 'Course management',
          text: 'Most amateur golfers lose the majority of their shots to the wrong decision, not the wrong swing. Choosing the right club, target, and shape separates a 90 from an 80. We work on them in real time, on real holes, with a real score at stake.',
        },
        {
          num: '02',
          title: 'Shot selection under pressure',
          text: 'The decisions that fall apart under pressure - the driver when a 5-iron wins the hole, the hero shot when the safe play scores the same - become visible on the course in a way they never do on a range. I see them, name them, and we work through them together.',
        },
        {
          num: '03',
          title: 'Reading greens and slopes',
          text: 'Putting and chipping on a course green is fundamentally different from a practice green. The speed, slope, grain, and pressure of the moment all change what works. We practise it in the actual conditions.',
        },
        {
          num: '04',
          title: 'Playing in wind',
          text: "Mallorca is windy. Son Gual especially lives in its own wind ecosystem. Club selection in a crosswind, trajectory management, and trusting your aim when the ball seems to be drifting - this is something you can only work on when it's actually blowing.",
        },
        {
          num: '05',
          title: 'Mental game and routine',
          text: 'How you talk to yourself after a bad shot. How you approach the next tee. Whether you have a pre-shot routine and whether it holds under pressure. The mental side is completely invisible on the range - it only shows up when the consequences are real.',
        },
        {
          num: '06',
          title: 'Finding the low-hanging fruit',
          text: 'Most golfers improve fastest not from rebuilding their swing but from one or two small unlocks. A client had been chipping with a pitching wedge his whole life. One conversation, a club change, immediate improvement. No technical work. It also brings out the real-world patterns - uneven lies, tight fairways, and course rough - that the range never asks for and that actually decide whether progress holds up on the course.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three stages. One session that changes how you play.',
      body:
        'Sessions take place on-course at Son Gual, Alcanada, or a course matched to your level and goals. We play together, the coaching happens in real time, and the feedback is situational and honest - not a generic lesson plan applied to everyone.',
      steps: [
        {
          num: '01',
          title: 'The questionnaire',
          text: "Before the session, you complete a short form. What's frustrating you, where the gaps are, what a good day looks like. By the first tee, I already have a picture.",
        },
        {
          num: '02',
          title: 'The round',
          text: 'We play together. Coaching happens in real time - the right observation at the right moment. Not a running commentary. Not a lesson. The thing that changes your score.',
        },
        {
          num: '03',
          title: 'The debrief',
          text: 'Over lunch, we cover what improved, what to work on, and what to take away. Honest and clear. The conversation that makes the whole day make sense.',
        },
      ],
    },
    who: {
      eyebrow: 'Who this is for',
      title: 'If any of these sound familiar, this is for you.',
      cards: [
        { title: 'Visiting golfers', text: 'Focused improvement during your time on the island - not just a round.' },
        { title: 'Resident golfers', text: 'Regular work with a professional who plays the same courses you do.' },
        { title: 'The range/course gap', text: 'Your practice game never transfers. This is where we fix that.' },
        { title: 'Smarter, not rebuilt', text: 'You want to play better without a full technical overhaul from scratch.' },
      ],
    },
    finalCta: {
      eyebrow: 'Ready to play better?',
      title: 'Get in touch to discuss a session.',
      body: "Tell me where your game is and what you want from it. I'll build the session around that - not a generic programme.",
      primaryCta: 'Get in Touch →',
      secondaryCta: 'See Full Experiences',
    },
  },
}

export function getCoachingContent(locale = 'en') {
  return COACHING_CONTENT[locale] || COACHING_CONTENT.en
}

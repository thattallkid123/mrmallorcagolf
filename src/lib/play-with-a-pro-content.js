export const PLAY_WITH_A_PRO_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Play with a Pro',
      eyebrow: 'Private Golf Days · Mallorca',
      title: 'A Private Golf Day in Mallorca.',
      body:
        "Not a lesson. Not a standard round. A private day on one of the island's finest courses, hosted by a PGA Advanced Professional with two decades of coaching across three continents.",
      primaryCta: 'Book Your Day →',
      secondaryCta: 'See Packages',
    },
    day: {
      eyebrow: 'What the day involves',
      title: 'Before you arrive, I already know what to watch for.',
      paragraphs: [
        'Before you arrive, you complete a short questionnaire. What frustrates you. Where the gap is between your range game and your score. What a good day looks like to you. By the time we reach the first tee, I already know what to watch for.',
        'During the round, the coaching is woven in naturally: not a running commentary, but the right observation at the right moment. Course management decisions you have not considered. The adjustments that actually change something, rather than the ones that just sound right.',
      ],
      quote:
        'What most golfers find is that they leave playing noticeably better and feeling more confident than they arrived, and understanding why, which is the part that stays with you.',
      questionnaireEyebrow: 'Already booked?',
      questionnaireTitle: 'Complete your Pre-Round Questionnaire →',
      questionnaireBody:
        'Takes 3 minutes. Helps me tailor the day to you before we reach the first tee.',
    },
    included: {
      title: "What's included",
      items: [
        ['Course selection', 'Matched to your game, handicap, and what you want from the day'],
        ['Tee time', 'Secured and fully handled - you just turn up'],
        ['Pre-round briefing', 'What to expect from the course and what to watch for'],
        ['18 holes alongside Andy', 'Not walking alongside - playing, as your partner'],
        ['On-course coaching throughout', 'Course management, shot selection, and decision-making'],
        ['Post-round debrief', 'What improved, what to work on, clear and honest'],
        ['Lunch', 'At the course restaurant or a handpicked local restaurant on the Signature Day'],
      ],
    },
    courses: {
      eyebrow: 'Which course?',
      title: 'The course is always chosen with you.',
      body:
        "A group including beginners, a shorter half-day, a family with juniors - there are courses that work better for all of those, and I'll tell you which one honestly. Some are members-only and cannot be accessed independently. That access can be arranged for clients who want something off the standard visitor rota.",
    },
    testimonialsEyebrow: 'What golfers say',
    testimonialsTitle: 'In their own words.',
    testimonials: [
      {
        text: "Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. I have felt suffocated by well-meaning coaches in the past, but Andy is a cut above. After just 18 holes together, I've discovered a new ceiling to my potential. His philosophy of prioritising the low-hanging fruit has given me clarity. What's more, his simple tips instantly transformed my putting.",
        author: 'Jo',
      },
      {
        text: 'The thing I most enjoyed was how comfortable he made me feel on the course. The insight into what calculations go into each shot has helped me improve my decision making immensely. I would recommend the day to groups of friends, groups on holiday looking for an entertaining day out, or even a family looking to get involved in golf together.',
        author: 'Finlay',
      },
      {
        text: "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough.",
        author: 'Adam',
      },
    ],
    packages: {
      eyebrow: 'Experiences & Packages',
      title: 'Three levels of experience. All private, all personally guided.',
      body:
        'The difference is how complete the day is. The standard of company is the same across all three.',
      tiers: [
        {
          eyebrow: 'The Mallorca Round',
          name: 'Play with a Pro',
          price: '€350 per person + green fee',
          features: [
            'Course matched to your game and handicap',
            'Tee time secured and fully handled',
            'Pre-round briefing and warm-up',
            '18 holes alongside Andy',
            'On-course coaching throughout',
            'Post-round debrief - honest and clear',
          ],
          button: 'Enquire →',
          featured: false,
        },
        {
          eyebrow: 'The Signature Day',
          name: 'Hosted Golf Day',
          price: 'From €450 per person + green fee',
          features: [
            'Everything in The Mallorca Round',
            "Son Gual or Alcanada - two of the island's finest",
            'Long lunch at the course restaurant',
            'Curated surprise gift',
            'Relaxed, unhurried pace - a full day',
          ],
          button: 'Enquire →',
          featured: true,
        },
        {
          eyebrow: 'The Full Experience',
          name: 'Bespoke Golf Journey',
          price: 'Custom itinerary',
          features: [
            'Multi-course day or full itinerary',
            'Private transport from Palma',
            'Dinner at a handpicked restaurant',
            'Spa or recovery session',
            'Full concierge - groups and corporates',
          ],
          button: 'Enquire →',
          featured: false,
        },
      ],
    },
    finalCta: {
      eyebrow: 'Ready to play Mallorca properly?',
      title: "Get in touch and let's arrange your day.",
      body:
        "Tell me your dates, your handicap, and what you want from the day. I'll come back with a recommendation personally within 24 hours.",
      primaryCta: 'Book Your Day →',
      secondaryCta: 'Explore the Courses',
      tertiaryCta: 'Pre-Round Questionnaire →',
    },
    notes: [
      'Questionnaire flow is central to this page and should stay linked to /questionnaire.html.',
      'Package names should stay consistent with homepage packages.',
      'Breadcrumb and CTA wording should match each locale tone.',
    ],
  },
}

export function getPlayWithAProContent(locale = 'en') {
  return PLAY_WITH_A_PRO_CONTENT[locale] || PLAY_WITH_A_PRO_CONTENT.en
}

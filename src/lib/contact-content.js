export const CONTACT_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      eyebrow: 'Get in touch',
      title: "Tell me what you're looking for. I'll sort the rest.",
      intro:
        "There are no booking systems here. Tell me your dates, your handicap, and what you want from the day. I'll come back to you personally, usually within a few hours, always within 24.",
    },
    cards: {
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Message on WhatsApp →',
      responseLabel: 'Response time',
      responseValue: 'Within 24 hours - usually sooner',
      basedLabel: 'Based in',
      basedValue: 'Mallorca, Spain',
    },
    success: {
      title: 'Enquiry received.',
      body:
        "I'll come back to you personally, usually within a few hours, always within 24. If you'd prefer to speak directly, WhatsApp is the fastest route.",
    },
    form: {
      eyebrow: 'Enquiry form',
      title: 'Start planning your day.',
      intro: 'The more detail you give me, the better I can match the day to you.',
      labels: {
        fname: 'First name',
        lname: 'Last name',
        email: 'Email address',
        dates: 'Preferred dates',
        handicap: 'Your handicap',
        groupsize: 'Group size',
        experience: 'Which experience interests you?',
        message: 'Anything else I should know',
      },
      placeholders: {
        fname: 'Andy',
        lname: 'Smith',
        email: 'andy@example.com',
        dates: 'e.g. 15-22 October 2026',
        handicap: "e.g. 14, or 'beginner'",
        message:
          "Goals for the day, courses you've heard of, mixed group, specific requests - anything helps me build the right day for you.",
      },
      groupsizeOptions: [
        { value: '', label: 'Select group size' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - pair' },
        { value: '3-4 - small group', label: '3-4 - small group' },
        { value: '5+ - larger group / corporate', label: '5+ - larger group / corporate' },
      ],
      experiences: [
        ['mallorca-round', 'The Mallorca Round', '€350 + green fee'],
        ['signature-day', 'The Signature Day', 'From €450 + green fee'],
        ['full-experience', 'The Full Experience', 'On enquiry'],
        ['not-sure', 'Not sure yet - advise me', ''],
      ],
      submit: 'Send Enquiry →',
      note: 'I respond personally to every enquiry within 24 hours. Your details are used only to arrange your experience.',
    },
  },
}

export function getContactContent(locale = 'en') {
  return CONTACT_CONTENT[locale] || CONTACT_CONTENT.en
}

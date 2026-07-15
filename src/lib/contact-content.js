import { getContactExperienceOptions } from './offers-content.js'
import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedContactContent } from './contact-content-localized.js'

export const CONTACT_CONTENT = {
  en: {
  "locale": "en",
  "hero": {
    "eyebrow": "Get in touch",
    "title": "Tell me the trip you're building. I'll help make it work.",
    "intro": "If you already have dates, courses, or a rough itinerary, send it over. If you are still early, start with the itinerary planner first. Either way, I reply personally and help you turn the idea into a Mallorca golf plan that makes sense."
  },
  "cards": {
    "emailLabel": "Email",
    "whatsappLabel": "WhatsApp",
    "whatsappValue": "Message on WhatsApp →",
    "responseLabel": "Response time",
    "responseValue": "Within 24 hours - usually sooner",
    "basedLabel": "Based in",
    "basedValue": "Mallorca, Spain"
  },
  "success": {
    "title": "Enquiry received.",
    "body": "I'll come back to you personally, usually within a few hours, always within 24. If you'd prefer to speak directly, WhatsApp is the fastest route."
  },
  "form": {
    "eyebrow": "Enquiry form",
    "title": "Start planning your trip.",
    "intro": "The more detail you give me, the better I can match the courses, add-ons, and timing to your group.",
    "experienceHelpTitle": "Which option fits you?",
    "experienceHelp": "Choose the closest match and I will refine it with you. Trip planning means I shape the route around your dates and group. Play With A Pro means you want Andy on the course with you. If you are not sure yet, choose the unsure option and I will point you in the right direction.",
    "sendPrompt": "Best details to send: dates, group size, hotel area, handicap range, and any courses already on your shortlist. If you are still deciding, just say what you are comparing and I will narrow it down for you.",
    "labels": {
      "fname": "First name",
      "lname": "Last name",
      "email": "Email address",
      "dates": "Preferred trip dates",
      "handicap": "Your handicap",
      "groupsize": "Group size",
      "experience": "What do you want help with?",
      "message": "Anything else I should know"
    },
    "placeholders": {
      "fname": "Andy",
      "lname": "Smith",
      "email": "andy@example.com",
      "dates": "e.g. 15-22 October 2026",
      "handicap": "e.g. 14, or 'beginner'",
      "message": "Dates, hotel area, courses you've heard of, budget, group mix, whether you want me on the course - anything helps me build the right plan."
    },
    "groupsizeOptions": [
      {
        "value": "",
        "label": "Select group size"
      },
      {
        "value": "1 - solo",
        "label": "1 - solo"
      },
      {
        "value": "2 - pair",
        "label": "2 - pair"
      },
      {
        "value": "3-4 - small group",
        "label": "3-4 - small group"
      },
      {
        "value": "5+ - larger group / corporate",
        "label": "5+ - larger group / corporate"
      }
    ],
    "experiences": [
      [
        "pwap-solo",
        "A Day With Andy - Solo",
        "€695"
      ],
      [
        "pwap-group",
        "A Day With Andy - Group",
        "€950 total"
      ],
      [
        "signature-day",
        "Signature Day",
        "From €3,000+"
      ],
      [
        "not-sure",
        "Not sure yet - advise me",
        ""
      ]
    ],
    "submit": "Send Enquiry →",
    "note": "I respond personally to every enquiry within 24 hours. Your details are used only to arrange your day."
  },
  "gift": {
    "heading": "Buying this as a gift?",
    "body": "Let me know in the message above and I'll prepare a certificate and keep the day details private until you're ready to share them."
  },
  "trust": {
    "eyebrow": "Why people enquire",
    "quote": "After just 18 holes together, I've discovered a new ceiling to my potential.",
    "credit": "Jo, Play With A Pro client"
  },
  "whatNext": {
    "heading": "What happens next",
    "body": "I read every enquiry myself. I will come back within 24 hours with the clearest next step: the course logic, planning route, or the best way to add a Play With A Pro day."
  },
  "stayInTouch": {
    "heading": "Stay in touch",
    "body": "Course notes and Mallorca golf insights every two weeks, straight to your inbox."
  },
  "dateCta": "Build Your Itinerary"
}
}

function getMergedContactContent(locale = 'en') {
  if (locale === 'en') return CONTACT_CONTENT.en
  const localized = getLocalizedContactContent(locale)
  return localized
    ? {
        ...mergeLocalizedContent(CONTACT_CONTENT.en, localized),
        locale,
      }
    : CONTACT_CONTENT.en
}

export function getContactContent(locale = 'en') {
  const content = getMergedContactContent(locale)
  return normalizeMojibakeDeep({
    ...content,
    form: {
      ...content.form,
      experiences: getContactExperienceOptions(locale),
    },
  })
}

import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedContactContent } from './contact-content-localized.js'
import { getOfferById, OFFER_IDS } from './offers-content.js'

export const CONTACT_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      eyebrow: 'Get in touch',
      title: 'Tell me about your Mallorca golf plans.',
      intro: 'Play With A Pro, golf trip planning, or both. If you already have dates, courses, or a rough plan, send it over. If you are still deciding, I will help narrow down the right next step.',
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
      body: "I'll come back to you personally, usually within a few hours, always within 24. If you'd rather speak directly, WhatsApp is the fastest route.",
    },
    form: {
      eyebrow: 'Enquiry form',
      title: 'Start the conversation.',
      intro: 'The more detail you give me, the faster I can point you to the right service, courses, and next step.',
      experienceHelpTitle: 'How this works',
      experienceHelp: 'Start with the main thing you want help with. If Play With A Pro is part of it, I will ask which format sounds closest so I can reply with the right next step.',
      sendPrompt: 'Best details to send: dates, group size, hotel area, handicap range, and any courses already on your shortlist. If you are still deciding, just say what you are comparing and I will narrow it down for you.',
      labels: {
        fname: 'First name',
        lname: 'Last name',
        email: 'Email address',
        dates: 'Preferred trip dates',
        handicap: 'Your handicap',
      groupsize: 'Group size',
      experience: 'What would you like help with?',
      serviceType: 'What would you like help with?',
      pwapFormat: 'If Play With A Pro is part of it, which format sounds closest?',
      message: 'Anything else I should know',
      },
      placeholders: {
        fname: 'Andy',
        lname: 'Smith',
        email: 'andy@example.com',
        dates: 'e.g. 15-22 October 2026',
        handicap: "e.g. 14, or 'beginner'",
        message: "Dates, hotel area, courses you've heard of, budget, group mix, whether you want me on the course - anything helps me build the right plan.",
      },
      groupsizeOptions: [
        { value: '', label: 'Select group size' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - pair' },
        { value: '3-4 - small group', label: '3-4 - small group' },
        { value: '5+ - larger group / corporate', label: '5+ - larger group / corporate' },
      ],
      serviceTypes: [
        ['pwap', 'Play With A Pro'],
        ['trip-planning', 'Plan my golf trip'],
        ['both', 'Both'],
        ['not-sure', 'Not sure yet'],
      ],
      experiences: [
        ['pwap-solo', 'Solo', '€695'],
        ['pwap-group', 'Group', '€950 total'],
        ['signature-day', 'Signature Day', 'From €3,000+'],
        ['pwap-not-sure', 'Not sure yet', ''],
      ],
      pwapFormats: [
        ['pwap-solo', 'Solo', '€695'],
        ['pwap-group', 'Group', '€950 total'],
        ['signature-day', 'Signature Day', 'From €3,000+'],
        ['pwap-not-sure', 'Not sure yet', ''],
      ],
      submit: 'Send enquiry →',
      note: 'I respond personally to every enquiry within 24 hours. Your details are used only to arrange your day.',
    },
    gift: {
      heading: 'Buying this as a gift?',
      body: "Let me know in the message above and I'll prepare a certificate and keep the day details private until you're ready to share them.",
    },
    trust: {
      eyebrow: 'Why people enquire',
      quote: "After just 18 holes together, I've discovered a new ceiling to my potential.",
      credit: 'Jo, Play With A Pro client',
    },
    whatNext: {
      heading: 'What happens next',
      body: 'I read every enquiry myself. I will come back within 24 hours with the clearest next step: book Play With A Pro, plan the golf side of the trip, or narrow down the right courses first.',
    },
    stayInTouch: {
      heading: 'Stay in touch',
      body: 'Course notes and Mallorca golf insights every two weeks, straight to your inbox.',
    },
    dateCta: 'Build Your Itinerary',
  },
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
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)
  const premiumOffer = getOfferById(OFFER_IDS.premium, locale)

  return normalizeMojibakeDeep({
    ...content,
    form: {
      ...content.form,
      pwapFormats: [
        ['pwap-solo', content.form?.pwapFormats?.[0]?.[1] || 'Solo', soloOffer.contactPrice],
        ['pwap-group', content.form?.pwapFormats?.[1]?.[1] || 'Group', groupOffer.contactPrice],
        ['signature-day', content.form?.pwapFormats?.[2]?.[1] || premiumOffer.fullLabel || 'Signature Day', premiumOffer.contactPrice],
        ['pwap-not-sure', content.form?.pwapFormats?.[3]?.[1] || 'Not sure yet', ''],
      ],
    },
  })
}

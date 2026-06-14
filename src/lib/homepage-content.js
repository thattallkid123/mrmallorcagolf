import { getHomepageSoloStat, getOfferById, getHomeMultiDayBody, OFFER_IDS } from './offers-content.js'
import { findCourseByName, getCourseDestination, getCoursePriceMeta } from './golf-courses-helpers.js'

export const HOME_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      eyebrow: 'UK PGA Advanced Professional · Mallorca',
      titleLines: ["Play Mallorca's Best Courses", 'with a Pro by Your Side'],
      emphasis: '',
      primaryCta: 'Book a Day with Andy',
      primaryHref: '/play-with-a-pro',
      secondaryCta: 'See the courses',
      trust: [
        'PGA Advanced Professional',
        'Trackman Master Certified',
        '18 Years Coaching Golf',
        'Pebble Beach · Evian · The Open',
      ],
    },
    intro: {
      eyebrow: 'What I do',
      title: 'A private day on the course with a PGA professional. Or let me plan the whole trip around it.',
      paragraphs: [
        'Play With A Pro is the private on-course day. One course, 18 holes, with me alongside you: course management, coaching woven into the round, and the local knowledge that turns a good day into a great one.',
        'Plan Your Trip is the full planning service. If you want me to handle the courses, base, routing, tee times, buggies, and bookings before you arrive, I do that too.',
      ],
      services: [
        {
          title: 'Play With A Pro',
          text: 'A private course day with Andy. Standalone or the centrepiece of a wider trip.',
          cta: 'Book the day',
          href: '/play-with-a-pro',
        },
        {
          title: 'Plan Your Trip',
          text: 'Courses, base, routing, tee times, buggies, rental clubs, and dining suggestions.',
          cta: 'Plan the trip',
          href: '/plan-your-trip',
        },
      ],
      coursesBlurb: "I play and review every course on the island — Son Gual, Alcanada, T Golf Calvia, Son Muntaner, and the rest. If you want to compare courses before booking,",
      coursesBlurbLink: 'see the full list',
      stats: [
        { value: 'Jan-Dec', label: 'year-round season' },
        { value: '24', label: 'courses on the island' },
        getHomepageSoloStat('en'),
        { value: '1', label: 'local plan before you book' },
      ],
    },
    socialProof: 'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian',
    journey: {
      eyebrow: 'Choose your route',
      title: 'Start where you are in the planning process.',
      items: [
        {
          title: 'Play a round with Andy',
          text: 'Book a private day with me: one course, 18 holes, local course management, and coaching woven into the round. Solo or group.',
          cta: 'Book Play With A Pro',
          href: '/play-with-a-pro',
        },
        {
          title: 'I am planning a golf trip',
          text: 'Let me handle the planning: courses matched to your group, base, routing, tee times, buggies, and bookings all taken care of before you arrive.',
          cta: 'Plan the trip',
          href: '/plan-your-trip',
        },
        {
          title: 'I am comparing courses',
          text: 'Read my course guide for honest, first-hand notes on green fees, difficulty, conditioning, scenery, and who each course actually suits.',
          cta: 'Compare courses',
          href: '/golf-courses',
        },
      ],
    },
    how: {
      eyebrow: 'How I help',
      title: 'Plan the trip first. Add the extras where they make sense.',
      body: 'Planning support, a private Play With A Pro day, or both.',
      steps: [
        {
          number: '01',
          title: 'Start with the basics',
          text: 'Use the free tool if you want a first course shortlist. It helps you see what might suit your group before any proper planning starts.',
        },
        {
          number: '02',
          title: 'I build the plan',
          text: 'In the paid planning service, I work through the real trip decisions: base, course order, number of rounds, tee times, buggies, rental clubs, and dining.',
        },
        {
          number: '03',
          title: 'Add what improves it',
          text: 'That might be a Play With A Pro day, better club rental, a cleaner tee-time route, or a restaurant that fits the golf day. Not everything needs adding. The right things do.',
        },
      ],
    },
    whyMallorca: {
      eyebrow: 'Why Mallorca',
      title: 'European Tour-standard courses, year-round conditions, and 24 layouts most visitors never fully explore.',
      paragraphs: [
        'Mallorca is playable every month of the year. The courses range from championship-standard to scenic coastal layouts and quieter inland tracks.',
        'Knowing which course suits your game, which tee times are worth it, and when the conditions are right is much of the difference between a good day and a great one.',
      ],
      stats: [
        { value: 'Jan-Dec', label: 'year-round season' },
        { value: '24', label: 'courses on the island' },
      ],
    },
    courses: {
      eyebrow: 'Featured Courses',
      title: "Mallorca's finest, played and reviewed.",
      viewAll: 'See every Mallorca course →',
      items: [
        {
          cls: 'course-card--1',
          badge: 'Expert Pick',
          region: 'Palma · 11 km from city',
          name: 'Son Gual',
          meta: ['Championship', 'Par 72', '€80-165'],
          stars: '★★★★★',
          difficulty: '9/10 Difficulty',
          excerpt: "Thomas Himmel's 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.",
          img: '/images/son-gual.webp',
          href: '/guides/son-gual-review',
        },
        {
          cls: 'course-card--2',
          badge: 'Expert Pick',
          region: 'Alcudia · North Mallorca',
          name: 'Alcanada',
          meta: ['Coastal', 'Par 72', '€115-220'],
          stars: '★★★★★',
          difficulty: '7/10 Difficulty',
          excerpt: 'Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.',
          img: '/images/alcanada.webp',
          href: '/guides/alcanada-review',
        },
        {
          cls: 'course-card--3',
          badge: 'Best in Spain 2025',
          region: 'Son Vida · Palma',
          name: 'Son Muntaner',
          meta: ['DP World Tour', 'Par 72'],
          stars: '★★★★★',
          difficulty: '7/10 Difficulty',
          excerpt: 'Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.',
          img: '/images/son-muntaner.webp',
          href: '/guides/son-muntaner-review',
        },
        {
          cls: 'course-card--4',
          badge: null,
          region: 'Santa Ponsa · Southwest',
          name: 'Santa Ponsa 1',
          meta: ['DP World Tour host', 'Par 72', '€75-125'],
          stars: '★★★★☆',
          difficulty: '8/10 Difficulty',
          excerpt: 'Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.',
          img: '/images/santa-ponsa.webp',
          href: '/guides/santa-ponsa-1-review',
        },
        {
          cls: 'course-card--5',
          badge: null,
          region: 'Camp de Mar · Southwest',
          name: 'Golf de Andratx',
          meta: ['Most challenging', 'Par 72', '€96-140'],
          stars: '★★★★☆',
          difficulty: '9/10 Difficulty',
          excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.',
          img: '/images/andratx.webp',
          href: '/guides/golf-andratx-review',
        },
      ],
    },
    experience: {
      eyebrow: 'Why trust the plan',
      title: 'I am not writing from a desk. I am on these courses.',
      paragraphs: [
        'I moved to Mallorca to build this properly. I play the courses, track the conditions, talk to the people running them, and keep notes on what actually matters to visiting golfers.',
        'A good plan is not just "Son Gual plus Alcanada". It is where you stay, how far you want to drive, which day deserves the premium green fee, which course suits your group, and where a rest day is smarter than another early tee time.',
        'My coaching background helps, but this site is not only a coaching site. It is here to make Mallorca golf easier to plan, better to play, and more personal once you arrive.',
      ],
      button: 'See the Play With A Pro add-on',
      dateCta: 'Plan Your Trip',
      features: [
        { title: 'Course selection', text: 'I match the course mix to your group, not to a generic top-10 list.' },
        { title: 'Trip logic', text: 'Base, travel time, tee-time rhythm, rest days, lunch, transfers, and budget all matter.' },
        { title: 'Hosted course day', text: 'When you want the day to be more than a tee time, I can join you for 18 holes and coach the decisions as they happen.' },
        { title: 'Local judgement', text: 'Course fit, access, value, driving time, and seasonal conditions change. I keep the plan grounded in what works on the island.' },
      ],
    },
    credentials: {
      eyebrow: 'Meet Andy',
      title: 'The person behind the recommendations.',
      intro: 'I am a UK PGA Advanced Professional based in Mallorca. Before building Mr Mallorca Golf I coached and worked across some very different golf environments: elite coaching in China, Pebble Beach, Doral, Evian, The Open, and a season at sea with Costa Cruises.',
      items: [
        { title: 'PGA Advanced Professional', detail: 'UK PGA qualification, the highest standard in British golf coaching, with more than 15,000 hours on the range and course.' },
        { title: 'Trackman Master', detail: 'The first Trackman Master in China. Data-driven coaching built on the technology that Tour coaches use.' },
        { title: 'TPI Level 3', detail: 'Titleist Performance Institute certification: understanding how the body moves and how it limits or unlocks the swing.' },
        { title: 'US Kids Top 50 Coach', detail: 'Recognised for junior development and long-term player development environments.' },
        { title: '11 years in Shanghai', detail: 'National team players, hundreds of millions of coaching views on Douyin, and real elite coaching environments.' },
        { title: 'World-class venues', detail: 'Pebble Beach, Doral, Evian, The Open Championship, Costa Cruises, and now the courses of Mallorca.' },
      ],
    },
    quote: {
      text: "After just 18 holes together, I've discovered a new ceiling to my potential.",
      attribution: 'Jo, after a day at Son Gual',
    },
    winners: {
      eyebrow: 'Proof of work',
      title: 'Competition winners, ambitious golfers, and plenty in between.',
      intro: 'I have coached elite juniors, club golfers, and plenty of people who simply wanted to stop throwing shots away. The common thread is usually the same: clearer decisions, better patterns, and improvement that still shows up when the card is in your hand.',
      testimonial:
        "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough.",
      attribution: 'Adam',
    },
    packages: {
      eyebrow: 'What I offer',
      title: 'A day on the course with me. Or the whole trip, built around it.',
      body: 'The core service is Play With A Pro, a private day on the course with Andy. You can book it solo, as a group, or as a full Signature Experience. If you want the whole trip planned around it, that is available too.',
      items: [
        {
          eyebrow: 'Play With A Pro',
          name: 'Solo',
          price: '€495',
          features: [
            'Course matched to your game and handicap',
            'Tee time secured and fully handled',
            '18 holes with Andy',
            'On-course coaching during the round',
            'Post-round debrief and next steps',
          ],
          note: "Andy's day rate. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons.",
          cta: 'Enquire →',
          href: '/contact',
          featured: false,
        },
        {
          eyebrow: 'Play With A Pro',
          name: 'Group',
          price: '€950',
          features: [
            'Up to 3 players, one fixed day rate for Andy',
            'Course matched to your group',
            'Tee time secured and fully handled',
            '18 holes with Andy',
            'On-course coaching during the round',
          ],
          note: "Andy's fixed day rate for 2 or 3 golfers. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons.",
          cta: 'Enquire →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: 'Signature Experience',
          name: 'Signature Day',
          price: '€3,000+',
          features: [
            'Course, tee time, and hosted golf day with Andy',
            'Lunch, private chef, or restaurant booking',
            'Private transfers and recovery time',
            'Caddy, videographer, and premium club hire options',
            'Post-round video analysis included',
            'Priority booking: your dates held first',
          ],
          note: 'Personalised from the ground up. Transfers, caddy, golf physio, private chef, videographer, and other add-ons planned around you.',
          cta: 'Enquire →',
          href: '/contact',
          signature: true,
        },
        {
          eyebrow: 'Trip Planning',
          name: 'Plan Your Trip',
          price: 'Price on enquiry',
          features: [
            'No searching apps or websites: tee times handled for you',
            'Courses picked to match your group, level, and budget',
            'Routing and number of rounds planned around your schedule',
            'Buggies, club hire, and transfers all arranged',
            'Restaurant and dining suggestions included',
            'One person to contact for the whole trip',
          ],
          note: '5% management fee applies to green fees and bookings. Confirmed after your first conversation.',
          cta: 'Enquire →',
          href: '/contact',
          featured: false,
        },
      ],
      multiDay: {
        eyebrow: 'Want the full picture?',
        title: 'Add trip planning around your day with Andy.',
        body: 'If you want me to handle the whole trip: courses, base, routing, tee times, buggies, rentals, and dining. I can plan it all around the Play With A Pro day.',
        cta: 'Plan Your Trip',
        href: '/plan-your-trip',
      },
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions before booking.',
      intro: "Anything not covered here is best asked directly. I reply personally.",
      items: [
        {
          q: 'Do I need to be a good golfer?',
          a: 'Not at all. The experience adjusts to your game: beginners and scratch players both get something from the day. The only requirement is wanting a golf day that feels more personal than a standard tee time.',
        },
        {
          q: 'What kind of coaching do you offer?',
          a: "On-course coaching during a full day of play. Not range lessons or individual swing instruction — I work with you playing real holes, where course management and decision-making matter. I help with club choice, scoring decisions, and the patterns that only show up when you're actually playing.",
        },
        {
          q: 'Which course do you use?',
          a: "It depends on you. Son Gual and Alcanada are my primary venues for a serious full day. For beginners, groups, or shorter rounds, there are better options, and I'll tell you honestly which one fits.",
        },
        {
          q: 'How do I book?',
          a: 'Start with the itinerary planner if you are still planning. If you already know your dates and want me involved, send an enquiry and I will come back personally within 24 hours.',
        },
        {
          q: 'Is this suitable for a group?',
          a: 'Yes. The experiences work for solos, pairs, groups of friends, and corporate days. The multi-day option is especially well suited to business groups and executives visiting the island.',
        },
        {
          q: 'When is the best time of year to visit?',
          a: 'For the best conditions, look at late spring and autumn peak windows. For better value, June to August and December to February are usually cheaper. The island is playable year-round, but spring and autumn are no longer the budget season.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Ready to plan it properly?',
      title: "Tell me the trip you want. I'll help build it properly.",
      body: 'Start with your dates, group size, handicap range, budget, and the kind of golf you want. I will help you turn that into a Mallorca golf plan that works on the ground.',
      quote: 'The right course on the right day beats a famous name in the wrong slot.',
      primaryCta: 'Plan Your Trip',
      secondaryCta: 'WhatsApp',
    },
  },
}

function deepMerge(base, override) {
  if (Array.isArray(base) || Array.isArray(override)) {
    return override ?? base
  }
  if (base && typeof base === 'object' && override && typeof override === 'object') {
    const output = { ...base }
    for (const key of Object.keys(override)) {
      output[key] = deepMerge(base[key], override[key])
    }
    return output
  }
  return override ?? base
}

const HOME_OVERRIDES = {
  de: {
    hero: {
      eyebrow: 'PGA Advanced Professional · Mallorca',
      titleLines: ['Spielen Sie Mallorcas', 'beste Plätze.'],
      emphasis: 'Mit einem Profi an Ihrer Seite.',
      primaryCta: 'Tag buchen',
      secondaryCta: 'Plätze ansehen',
    },
    intro: {
      eyebrow: 'Was den Unterschied macht',
      title: 'Die meisten Golftage auf Mallorca beginnen auf einer Buchungsplattform und enden mit einer Rechnung. Hier ist es persönlicher.',
      paragraphs: [
        'Ich begleite private Golftage auf den besten Plätzen der Insel. Das Coaching passiert während der Runde und nicht erst danach als Zusatz. Das Golf ist besser, die Entscheidungen werden klarer und der ganze Tag fühlt sich wirklich gut betreut an.',
        'Mallorca ist das ganze Jahr bespielbahr. Zu wissen, welcher Platz zu Ihrem Spiel passt, wann die Abschlagszeiten es wert sind und wann die Bedingungen stimmen, macht oft den Unterschied zwischen einem guten und einem großartigen Tag.',
      ],
      stats: [
        { value: '18', label: 'Jahre Golf-Coaching' },
        { value: '15.000+', label: 'Coachings durchgeführt' },
        { value: '300+', label: 'Turniersieger betreut' },
      ],
    },
    socialProof: 'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian',
    how: {
      eyebrow: 'So funktioniert es',
      title: 'Drei einfache Schritte.',
      steps: [
        { number: '01', title: 'Schreiben Sie mir', text: 'Nennen Sie mir Ihre Termine, Ihr Handicap und wonach Sie suchen. Ich antworte persönlich innerhalb von 24 Stunden.' },
        { number: '02', title: 'Ich plane den Tag', text: 'Platzempfehlung, Abschlagszeit und Mittagessen stehen fest, bevor Sie ankommen. Transport kann bei Bedarf ergänzt werden.' },
        { number: '03', title: 'Ankommen und spielen', text: 'Ihre Aufgabe ist es nur, die Runde zu genießen. Die meisten spielen besser, als sie erwartet haben.' },
      ],
    },
    whyMallorca: {
      eyebrow: 'Warum Mallorca',
      title: 'Mallorca hat Plätze auf Tour-Niveau. Viele Besucher spielen zwei oder drei und entdecken den Rest nie.',
      paragraphs: [
        'Viele der besten Plätze Europas schließen im Winter. Mallorca nicht. Oktober bis April ist die beste Zeit: niedrigere Greenfees, ruhigere Plätze und Bedingungen, die anderswo selbst im Sommer selten sind.',
        '24 Plätze liegen in Reichweite, mehrere mit echter Tour-Geschichte und ernsthafter Architektur. Mallorca ist ein richtiges Golfziel, und die meisten Besucher kratzen nur an der Oberfläche.',
      ],
      stats: [
        { value: 'Jan-Dez', label: 'ganzjährige Saison' },
        { value: '24', label: 'Plätze auf der Insel' },
        { value: '21', label: 'für Greenfee-Spieler offen' },
        { value: '3', label: 'privat oder eingeschränkt' },
      ],
    },
    courses: { eyebrow: 'Ausgewählte Plätze', title: 'Mallorcas beste Plätze, gespielt und ehrlich bewertet.', viewAll: 'Alle 24 Plätze ansehen →' },
    experience: {
      eyebrow: 'Das Erlebnis',
      title: 'Die meisten Golftage auf Mallorca sind eine Abschlagszeit und ein kurzes Winken zum Abschied.',
      paragraphs: [
        'Ich habe über ein Jahrzehnt in China gecoacht, wo Kunden echte Verbesserung erwarten und keine leeren Floskeln.',
        'Dieser Hintergrund prägt jede Runde, die ich begleite. Wir spielen einen der besten Plätze Mallorcas zusammen, und das Coaching kommt dort, wo es etwas verändert: am Abschlag, in den Wind, rund ums Grün und bei den Entscheidungen, die Schläge kosten.',
        'Alles ist geregelt, bevor Sie ankommen: Platz, Abschlagszeit und Mittagessen. Ihre einzige Aufgabe ist es, zu spielen.',
      ],
      button: 'Erlebnisse ansehen',
      dateCta: 'Meine Daten mitteilen',
      features: [
        { title: 'Alles organisiert', text: 'Platz, Abschlagszeit und Mittagessen stehen vor Ihrer Ankunft fest. Transport kann bei Bedarf ergänzt werden.' },
        { title: 'On-Course-Coaching', text: 'Hilfreiche Beobachtungen mitten in der Runde, wenn sie noch etwas verändern können.' },
        { title: 'Komplett privat', text: 'Nur Sie und ein PGA Advanced Professional. Keine Fremden in Ihrer Gruppe.' },
        { title: 'Mehr Zugang', text: 'Mitgliederplätze, die die meisten Besucher nicht selbst buchen können.' },
      ],
    },
    journey: {
      eyebrow: 'Wählen Sie Ihren Weg',
      title: 'Beginnen Sie dort, wo Sie gerade stehen.',
      items: [
        {
          title: 'Eine Runde mit Andy spielen',
          text: 'Buchen Sie einen privaten Tag mit mir: ein Platz, 18 Löcher, Platzmanagement und Coaching direkt in die Runde eingebaut. Solo oder in der Gruppe.',
          cta: 'Play With A Pro',
          href: '/play-with-a-pro',
        },
        {
          title: 'Ich plane eine Golfreise',
          text: 'Ich übernehme die Planung: Plätze passend zu Ihrer Gruppe, Unterkunftslage, Route, Abschlagszeiten, Buggies und Buchungen – alles geregelt, bevor Sie ankommen.',
          cta: 'Reise planen',
          href: '/plan-your-trip',
        },
        {
          title: 'Ich vergleiche Plätze',
          text: 'Lesen Sie meine Platzberichte für ehrliche Einschätzungen zu Greenfees, Schwierigkeit, Zustand, Landschaft und für wen welcher Platz wirklich geeignet ist.',
          cta: 'Alle Plätze vergleichen',
          href: '/golf-courses',
        },
      ],
    },
    quote: { text: 'Nach nur 18 Löchern zusammen habe ich eine neue Grenze meines Potenzials entdeckt.', attribution: 'Jo, nach einem Tag in Son Gual' },
    winners: {
      eyebrow: 'Belege der Arbeit',
      title: 'Turniersieger, ambitionierte Golfer und viele dazwischen.',
      intro: 'Ich habe Elite-Junioren, Clubgolfer und viele Menschen gecoacht, die einfach aufhören wollten, Schläge unnötig wegzuwerfen. Die Gemeinsamkeit ist fast immer dieselbe: klarere Entscheidungen, bessere Muster und Fortschritt, der auch unter Druck bestehen bleibt.',
      testimonial: 'Ich spiele seit meinem fünften Lebensjahr Golf. Ich dachte, ich bräuchte nur mehr Wiederholungen, keinen Coach. Dann bekam ich eine Stunde mit Andy geschenkt und habe sie ausprobiert. Es hat sich gelohnt. Kleine Anpassungen führten sofort zu konstant besseren Treffern und echtem Fortschritt.',
      attribution: 'Adam',
    },
    packages: {
      eyebrow: 'Erlebnisse und Pakete',
      title: 'Wähle deinen Tag',
      body: 'Alle drei sind privat und von mir persönlich geleitet. Platz, Abschlagszeit und Coaching sind enthalten. Greenfees und Mittagessen separat.',
      items: [
        {
          eyebrow: 'Ein Tag mit Andy',
          name: 'Solo',
          features: [
            'Platz auf Ihr Spiel abgestimmt',
            'Abschlagszeit gesichert',
            'Vorbriefing und Warm-up vor der Runde',
            '18 Löcher mit On-Course-Coaching',
            'Debriefing nach der Runde',
          ],
          note: 'Preise auf der Seite "Der Tag" verfügbar',
          cta: 'Anfragen',
        },
        {
          eyebrow: 'Ein Tag mit Andy',
          name: 'Gruppe',
          features: [
            'Bis zu 3 Spieler - ein fester Tagessatz für Andy',
            'Platz auf Ihre Gruppe abgestimmt',
            'Abschlagszeit gesichert',
            'Vorbriefing und Warm-up vor der Runde',
            '18 Löcher mit On-Course-Coaching',
            'Debriefing nach der Runde',
          ],
          note: 'Preise auf der Seite "Der Tag" verfügbar',
          cta: 'Anfragen',
          featured: true,
        },
        {
          eyebrow: 'Das Signature Experience',
          name: 'Vollständiger Tag',
          features: [
            'Alles im Voraus arrangiert',
            'Platz, Abschlagszeit und Coaching',
            'Add-ons enthalten: Caddie, Golfwagen, Schläger, Premium-Mietgeräte',
            'Michelin-Lunch und private Transfers enthalten',
            'Spa-Zugang und Concierge-Support',
            'Videograf verfügbar, falls gewünscht',
            'Keine Entscheidungen oder Logistik am Tag',
            'Andy koordiniert alles und bestätigt das Programm im Voraus mit Ihnen',
          ],
          note: 'Preise auf der Seite "Der Tag" verfügbar',
          cta: 'Anfragen',
        },
        {
          eyebrow: 'Reiseplanung',
          name: 'Reise planen',
          price: 'Preis auf Anfrage',
          features: [
            'Keine App- oder Websitesuche: Abschlagszeiten werden für Sie übernommen',
            'Plätze passend zu Ihrer Gruppe, Ihrem Niveau und Budget ausgewählt',
            'Empfehlungen zu Unterkunftslage und Route',
            'Ein Reiseplan, der auf der Karte Sinn ergibt',
            'Play With A Pro-Tag kann ergänzt werden',
          ],
          note: 'Preis wird im Gespräch besprochen, nicht kalt auf der Startseite angezeigt. Nennen Sie mir die Reisegröße und ich schlage eine passende Zahl vor.',
          cta: 'Anfragen',
        },
      ],
    },
    faq: {
      eyebrow: 'Fragen',
      title: 'Dinge, die man fragt, bevor man sich meldet.',
      intro: 'Nennen Sie mir Ihre Termine, Ihr Handicap und wonach Sie suchen. Ich antworte persönlich innerhalb von 24 Stunden.',
      items: [
        { q: 'Muss ich ein guter Golfer sein?', a: 'Überhaupt nicht. Das Erlebnis passt sich Ihrem Spiel an. Anfänger und Scratch-Spieler profitieren beide.' },
        { q: 'Welchen Platz nutzen Sie?', a: 'Das hängt von Ihnen ab. Son Gual und Alcanada sind meine Hauptplätze für einen ernsthaften vollen Tag, aber nicht immer die richtige Wahl.' },
        { q: 'Wie buche ich?', a: 'Schreiben Sie mir einfach. Keine Buchungsplattformen. Keine Warteschleife.' },
        { q: 'Ist das für Gruppen geeignet?', a: 'Ja. Für Einzelpersonen, Paare, Freundesgruppen und Firmenrunden.' },
        { q: 'Wann ist die beste Jahreszeit?', a: 'Oktober, November, März und April. Die beste Mischung aus Platzbedingungen, Wetter, Wert und Spielfluss.' },
      ],
    },
    finalCta: {
      eyebrow: 'Bereit, Mallorca richtig zu spielen?',
      title: 'Melden Sie sich. Ich kümmere mich um den Rest.',
      body: 'Nennen Sie mir Ihre Termine, Ihr Handicap und was Sie sich vom Tag wünschen. Ich melde mich persönlich innerhalb von 24 Stunden mit einer Empfehlung.',
      quote: 'Sie werden besseres Golf spielen und verstehen, warum.',
      primaryCta: 'Tag buchen',
      secondaryCta: 'WhatsApp',
    },
  },
  es: {
    hero: {
      eyebrow: 'PGA Advanced Professional · Mallorca',
      titleLines: ['Juega los mejores', 'campos de Mallorca.'],
      emphasis: 'Con un profesional a tu lado.',
      primaryCta: 'Reserva tu día',
      secondaryCta: 'Explorar campos',
      trust: [
        'PGA Advanced Professional',
        'Trackman Master Certified',
        '18 años dedicados al coaching de golf',
        'Pebble Beach · Évian · The Open',
      ],
    },
    intro: {
      eyebrow: 'Qué marca la diferencia',
      title: 'Muchos días de golf en Mallorca empiezan con una plataforma de reservas y acaban con una factura. Esto es más personal.',
      paragraphs: [
        'Organizo días privados de golf en algunos de los mejores campos de la isla, con el coaching integrado en la vuelta y no como un extra al final. Se juega mejor, se toman decisiones más claras y todo el día se siente mejor llevado.',
        'Mallorca se puede jugar todo el año. Saber qué campo encaja con tu juego, qué tee times merecen la pena y cuándo las condiciones son las correctas marca mucho de la diferencia entre un buen día y uno excepcional.',
      ],
      stats: [
        { value: '18', label: 'años dedicados al coaching de golf' },
        { value: '15.000+', label: 'lecciones impartidas' },
        { value: '300+', label: 'ganadores de competición entrenados' },
      ],
    },
    socialProof: 'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian',
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Tres pasos sencillos.',
      steps: [
        { number: '01', title: 'Escríbame', text: 'Dígame sus fechas, su hándicap y lo que busca. Le respondo personalmente en 24 horas.' },
        { number: '02', title: 'Yo construyo el día', text: 'La recomendación de campo, el tee time y el almuerzo quedan resueltos antes de llegar. El transporte puede añadirse si hace falta.' },
        { number: '03', title: 'Llegue y juegue', text: 'Su trabajo es disfrutar la vuelta. La mayoría juega mejor de lo esperado.' },
      ],
    },
    whyMallorca: {
      eyebrow: 'Por qué Mallorca',
      title: 'Mallorca tiene campos de nivel Tour. Muchos visitantes juegan unos pocos y nunca descubren el resto.',
      paragraphs: [
        'Muchos de los mejores campos de Europa cierran en invierno. Mallorca no. De octubre a abril está el punto dulce: green fees más bajos, campos más tranquilos y unas condiciones que en otros lugares serían una ronda de verano.',
        'Hay 24 campos a poca distancia, varios con historia de Tour y una arquitectura seria. Mallorca es un destino de golf de verdad, y la mayoría de los visitantes apenas rascan la superficie.',
      ],
      stats: [
        { value: 'Ene-Dic', label: 'temporada todo el año' },
        { value: '24', label: 'campos en la isla' },
        { value: '21', label: 'abiertos a visitantes' },
        { value: '3', label: 'privados o restringidos' },
      ],
    },
    courses: {
      eyebrow: 'Campos destacados',
      title: 'Los mejores de Mallorca, jugados y revisados.',
      viewAll: 'Ver los 24 campos →',
      items: [
        {
          cls: 'course-card--1',
          badge: 'Selección personal',
          region: 'Palma · 11 km del centro',
          name: 'Son Gual',
          meta: ['Championship', 'Par 72', '€80-165'],
          stars: '★★★★★',
          difficulty: 'Dificultad 9/10',
          excerpt:
            'El diseño de Thomas Himmel, de 2007, vive en su propio ecosistema de viento. El tramo final, del 15 al 18, está entre los mejores de Europa.',
          img: '/images/son-gual.webp',
          href: '/guides/son-gual-review',
        },
        {
          cls: 'course-card--2',
          badge: 'Selección personal',
          region: 'Alcúdia · Norte de Mallorca',
          name: 'Alcanada',
          meta: ['Costa', 'Par 72', '€115-220'],
          stars: '★★★★★',
          difficulty: 'Dificultad 7/10',
          excerpt:
            'Robert Trent Jones Jr. en su versión más escénica. El faro acompaña casi toda la vuelta y el entorno es de los más bonitos de España.',
          img: '/images/alcanada.webp',
          href: '/guides/alcanada-review',
        },
        {
          cls: 'course-card--3',
          badge: 'Mejor campo de España 2025',
          region: 'Son Vida · Palma',
          name: 'Son Muntaner',
          meta: ['DP World Tour', 'Par 72'],
          stars: '★★★★★',
          difficulty: 'Dificultad 7/10',
          excerpt:
            'Elegido mejor campo de golf de España en los World Golf Awards 2025, con vistas a la bahía de Palma y un olivo milenario en el hoyo 15.',
          img: '/images/son-muntaner.webp',
          href: '/guides/son-muntaner-review',
        },
        {
          cls: 'course-card--4',
          badge: null,
          region: 'Santa Ponsa · Suroeste',
          name: 'Santa Ponsa 1',
          meta: ['Sede del DP World Tour', 'Par 72', '€75-125'],
          stars: '★★★★☆',
          difficulty: 'Dificultad 8/10',
          excerpt:
            'Sede del Mallorca Open de 2021. Largo, generoso desde el tee y uno de los mejores lugares de la isla para disfrutar pegando driver.',
          img: '/images/santa-ponsa.webp',
          href: '/guides/santa-ponsa-1-review',
        },
        {
          cls: 'course-card--5',
          badge: null,
          region: 'Camp de Mar · Suroeste',
          name: 'Golf de Andratx',
          meta: ['El reto más serio', 'Par 72', '€96-140'],
          stars: '★★★★☆',
          difficulty: 'Dificultad 9/10',
          excerpt:
            'El hoyo 6 es el par 5 más largo de España, con 609 metros. Construido en colinas costeras sin concesiones. Lleve bolas de sobra y deje el ego fuera.',
          img: '/images/andratx.webp',
          href: '/guides/golf-andratx-review',
        },
      ],
    },
    experience: {
      eyebrow: 'La experiencia',
      title: 'Muchos días de golf en Mallorca son un tee time y un adiós.',
      paragraphs: [
        'Pasé más de una década enseñando en China, donde los clientes esperaban una mejora real y medible, no frases vacías.',
        'Ese bagaje marca cada vuelta que acompaño. Jugamos juntos uno de los mejores campos de Mallorca y el coaching aparece donde de verdad importa: en el tee, en el viento, alrededor del green y sobre los golpes que suelen costar la tarjeta.',
        'Todo está resuelto antes de llegar: campo, hora de salida y almuerzo. Su único trabajo ese día es jugar.',
      ],
      button: 'Ver experiencias',
      dateCta: 'Dígame sus fechas',
      features: [
        {
          title: 'Todo organizado',
          text: 'Campo, tee time, transporte y almuerzo resueltos antes de que llegue.',
        },
        {
          title: 'Coaching en el campo',
          text: 'Observaciones útiles en mitad de la vuelta, cuando todavía pueden cambiar algo.',
        },
        {
          title: 'Completamente privado',
          text: 'Solo usted y un PGA Advanced Professional. Nadie más en el grupo.',
        },
        {
          title: 'Acceso a más',
          text: 'Campos de socios a los que la mayoría de los visitantes no puede acceder por su cuenta.',
        },
      ],
    },
    journey: {
      eyebrow: 'Elige tu punto de partida',
      title: 'Empieza donde estás en el proceso de planificación.',
      items: [
        {
          title: 'Jugar una vuelta con Andy',
          text: 'Reserve un día privado conmigo: un campo, 18 hoyos, gestión del campo y coaching integrado en la vuelta. Solo o en grupo.',
          cta: 'Play With A Pro',
          href: '/play-with-a-pro',
        },
        {
          title: 'Estoy organizando un viaje de golf',
          text: 'Déjeme gestionar la planificación: campos según su grupo, base, rutas, tee times, buggies y reservas, todo resuelto antes de que llegue.',
          cta: 'Plan Your Trip',
          href: '/plan-your-trip',
        },
        {
          title: 'Estoy comparando campos',
          text: 'Lea mis guías de campos para obtener notas honestas y de primera mano sobre green fees, dificultad, estado, paisaje y para quién encaja realmente cada campo.',
          cta: 'Comparar todos los campos',
          href: '/golf-courses',
        },
      ],
    },
    quote: {
      text: 'Después de solo 18 hoyos juntos, sentí que mi techo estaba más arriba de lo que pensaba.',
      attribution: 'Jo, después de un día en Son Gual',
    },
    winners: {
      eyebrow: 'Resultados',
      title: 'Ganadores de competición, golfistas ambiciosos y muchos perfiles intermedios.',
      intro:
        'He entrenado a juniors de élite, jugadores de club y a muchas personas que simplemente querían dejar de regalar golpes. El patrón suele ser el mismo: decisiones más claras, mejores rutinas y una mejora que sigue apareciendo cuando la tarjeta sí importa.',
      testimonial:
        'Juego al golf desde los cinco años. Pensaba que ya tenía la base hecha y que solo necesitaba más repeticiones, no un coach. Luego me regalaron una sesión con Andy y decidí probar. Menos mal. Afinamos detalles de mi swing, el contacto de bola, la transferencia de peso y la mecánica. Incluso cambios pequeños dieron resultados constantes, y estoy seguro de que me ahorrarán entre cinco y diez golpes. Andy fue un auténtico profesional. No puedo agradecérselo lo suficiente.',
      attribution: 'Adam',
    },
    packages: {
      eyebrow: 'Experiencias y paquetes',
      title: 'Elige tu día',
      body: 'Las tres opciones son privadas y las tres las llevo yo personalmente. Campo, hora de salida y coaching incluidos. Green fees y almuerzo aparte.',
      items: [
        {
          eyebrow: 'Play With A Pro',
          name: 'Individual',
          price: '€495',
          features: [
            'Campo adaptado a tu juego y hándicap',
            'Tee time asegurado y gestionado',
            '18 hoyos con Andy',
            'Coaching en el campo durante la vuelta',
            'Debriefing post-vuelta y próximos pasos',
          ],
          note: 'Tarifa diaria de Andy. El green fee y el almuerzo son aparte. Buggy y palos de alquiler disponibles como complementos opcionales.',
          cta: 'Consultar →',
          href: '/contact',
        },
        {
          eyebrow: 'Play With A Pro',
          name: 'Grupo',
          price: '€950',
          features: [
            'Hasta 3 jugadores, una tarifa fija diaria para Andy',
            'Campo adaptado al grupo',
            'Tee time asegurado y gestionado',
            '18 hoyos con Andy',
            'Coaching en el campo durante la vuelta',
          ],
          note: 'Tarifa fija diaria de Andy para 2 o 3 golfistas. El green fee y el almuerzo son aparte. Buggy y palos de alquiler disponibles.',
          cta: 'Consultar →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: 'Experiencia Signature',
          name: 'Día Signature',
          price: '€3.000+',
          features: [
            'Campo, tee time y día de golf con Andy de anfitrión',
            'Almuerzo, chef privado o reserva de restaurante',
            'Traslados privados y tiempo de recuperación',
            'Caddie, videógrafo y alquiler premium de palos',
            'Análisis de vídeo post-vuelta incluido',
            'Reserva prioritaria: tus fechas se bloquean primero',
          ],
          note: 'Personalizado desde cero. Traslados, caddie, fisioterapeuta de golf, chef privado, videógrafo y otros complementos planificados para ti.',
          cta: 'Consultar →',
          href: '/contact',
          signature: true,
        },
        {
          eyebrow: 'Planificación de viaje',
          name: 'Planifica tu viaje',
          price: 'Precio bajo consulta',
          features: [
            'Sin buscar apps ni webs: tee times gestionados por mí',
            'Campos seleccionados según tu grupo, nivel y presupuesto',
            'Consejos de zona de alojamiento y ruta',
            'Un itinerario que tenga sentido sobre el mapa',
            'Se puede añadir un día Play With A Pro',
          ],
          note: 'Precio al hablar, no en un bloque de tarifa frío en la homepage. Cuéntame el tamaño del viaje y te propongo una cifra.',
          cta: 'Consultar →',
          href: '/contact',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Lo que suelen preguntar antes de escribir.',
      intro: 'Dígame sus fechas, su hándicap y lo que busca. Le responderé personalmente en 24 horas.',
      items: [
        {
          q: '¿Hace falta jugar bien?',
          a: 'No. La experiencia se adapta a su nivel. Tanto un principiante como un jugador de scratch pueden sacar mucho del día. Lo único importante es querer algo más personal que un tee time estándar.',
        },
        {
          q: '¿Qué campo utiliza?',
          a: 'Depende de usted. Son Gual y Alcanada son mis sedes principales para un día serio y completo, pero no siempre son la mejor opción. Si viene en grupo, con principiantes o quiere algo más corto, le diré con honestidad qué encaja mejor.',
        },
        {
          q: '¿Cómo se reserva?',
          a: 'Escríbame. Dígame sus fechas y lo que busca, y le contestaré personalmente en 24 horas. Sin plataforma de reservas. Sin esperas.',
        },
        {
          q: '¿Sirve para grupos?',
          a: 'Sí. Funciona para una persona, para parejas, para grupos de amigos y para días corporativos. La experiencia completa encaja especialmente bien con grupos de empresa y directivos que visitan la isla.',
        },
        {
          q: '¿Cuál es la mejor época del año?',
          a: 'Octubre, noviembre, marzo y abril. Es la mejor combinación de estado del campo, clima, precio y ritmo de juego. La isla se juega todo el año: en enero los fairways aquí están mejor que muchos fairways ingleses en agosto.',
        },
      ],
    },
    finalCta: {
      eyebrow: '¿Listo para jugar Mallorca de verdad?',
      title: 'Escríbame. Yo me encargo del resto.',
      body: 'Dígame sus fechas, su hándicap y lo que quiere del día. Le responderé personalmente en 24 horas.',
      quote: 'Jugará mejor y entenderá por qué.',
      primaryCta: 'Reserva tu día',
      secondaryCta: 'WhatsApp',
    },
  },
  fr: {
    hero: { eyebrow: 'PGA Advanced Professional · Majorque', titleLines: ['Jouez les plus beaux', 'parcours de Majorque.'], emphasis: 'Avec un pro à vos côtés.', primaryCta: 'Réserver votre journée', secondaryCta: 'Voir les parcours' },
    intro: {
      eyebrow: 'Ce qui fait la différence',
      title: 'Beaucoup de journées de golf à Majorque commencent sur une plateforme de réservation et se terminent avec une facture. Ici, c’est plus personnel.',
      paragraphs: [
        "J\u2019organise des journ\u00e9es de golf priv\u00e9es sur les meilleurs parcours de l\u2019\u00eele, avec le coaching int\u00e9gr\u00e9 pendant la partie plut\u00f4t qu\u2019ajout\u00e9 apr\u00e8s. On joue mieux, les d\u00e9cisions deviennent plus claires et toute la journ\u00e9e est mieux tenue.",
        "Majorque se joue toute l\u2019ann\u00e9e. Savoir quel parcours correspond \u00e0 votre jeu, quelles heures de d\u00e9part valent le coup et quand les conditions sont r\u00e9unies fait souvent la diff\u00e9rence entre une bonne journ\u00e9e et une excellente.",
      ],
      stats: [
        { value: '18', label: 'années consacrées au coaching golf' },
        { value: '15 000+', label: 'leçons données' },
        { value: '300+', label: 'vainqueurs de compétition accompagnés' },
      ],
    },
    socialProof: 'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian',
    how: { eyebrow: 'Comment cela fonctionne', title: 'Trois étapes simples.', steps: [{ number: '01', title: 'Écrivez-moi', text: 'Donnez-moi vos dates, votre handicap et ce que vous cherchez. Je réponds personnellement sous 24 heures.' }, { number: '02', title: 'Je construis votre journée', text: 'Parcours, heure de départ et déjeuner sont réglés avant votre arrivée. Le transport peut s’ajouter si nécessaire.' }, { number: '03', title: 'Arrivez et jouez', text: 'Votre seul travail est de profiter du tour. La plupart jouent mieux qu’ils ne l’imaginaient.' }] },
    whyMallorca: { eyebrow: 'Pourquoi Majorque', title: 'Majorque a des parcours de niveau Tour. Beaucoup de visiteurs n’en voient qu’une petite partie.', paragraphs: ['Les meilleures conditions tombent souvent en plein tarif, surtout de mi-mars à début juin puis de mi-septembre à mi-novembre. Pour de meilleurs prix, regardez plutôt l’été et l’hiver.', 'Vingt-quatre parcours sont accessibles en peu de temps, plusieurs avec une vraie histoire de Tour et une architecture sérieuse. Majorque est une vraie destination de golf, et la plupart des visiteurs n’en voient qu’une petite partie.'], stats: [{ value: "Jan-Déc", label: "saison toute l'année" }, { value: "24", label: "parcours sur l'île" }, { value: "21", label: "ouverts aux green fees" }, { value: "3", label: "privés ou restreints" }] },
    courses: { eyebrow: 'Parcours en vedette', title: 'Les meilleurs parcours de Majorque, joués et évalués honnêtement.', viewAll: 'Voir les 24 parcours →' },
    experience: {
      eyebrow: 'L’expérience',
      title: 'La plupart des journées de golf à Majorque se limitent à une heure de départ et un signe de la main.',
      paragraphs: ['J’ai passé plus de dix ans à coacher en Chine, dans un contexte où l’on attendait une vraie amélioration, pas des encouragements creux.', 'Cette expérience façonne chaque partie que j’accompagne. Nous jouons ensemble sur l’un des meilleurs parcours de Majorque, et le coaching arrive là où il fait gagner des coups.', 'Tout est réglé avant votre arrivée : parcours, heure de départ et déjeuner. Votre seul travail ce jour-là est de jouer.'],
      button: 'Voir les expériences',
      dateCta: 'Dites-moi vos dates',
      features: [
        { title: 'Tout est organisé', text: 'Parcours, heure de départ, transport et déjeuner sont réglés avant votre arrivée.' },
        { title: 'Coaching sur le parcours', text: 'Des observations utiles au bon moment, tant qu’elles peuvent encore changer quelque chose.' },
        { title: 'Entièrement privé', text: 'Juste vous et un PGA Advanced Professional. Personne d’autre dans votre partie.' },
        { title: 'Accès à davantage', text: 'Des parcours membres que la plupart des visiteurs ne peuvent pas réserver seuls.' },
      ],
    },
    journey: {
      eyebrow: 'Choisissez votre point de départ',
      title: 'Commencez là où vous en êtes dans votre processus de planification.',
      items: [
        {
          title: 'Jouer une partie avec Andy',
          text: 'Réservez une journée privée avec moi : un parcours, 18 trous, gestion de parcours et coaching intégré dans la partie. En solo ou en groupe.',
          cta: 'Play With A Pro',
          href: '/play-with-a-pro',
        },
        {
          title: 'Je prépare un voyage de golf',
          text: 'Laissez-moi gérer la planification : parcours adaptés à votre groupe, base, itinéraire, heures de départ, voiturettes et réservations, tout est prêt avant votre arrivée.',
          cta: 'Plan Your Trip',
          href: '/plan-your-trip',
        },
        {
          title: 'Je compare les parcours',
          text: "Consultez mon guide des parcours pour des notes honnêtes et de première main sur les droits de jeu, la difficulté, l’entretien, le cadre et à qui convient vraiment chaque parcours.",
          cta: 'Comparer tous les parcours',
          href: '/golf-courses',
        },
      ],
    },
    quote: {
      text: 'Après seulement 18 trous ensemble, j’ai découvert un nouveau plafond à mon potentiel.',
      attribution: 'Jo, après une journée à Son Gual',
    },
    packages: {
      eyebrow: 'Expériences et forfaits',
      title: 'Choisissez votre jour',
      body: 'Les trois options sont privées, et les trois sont menées par moi. Parcours, heure de départ et coaching inclus. Droits verts et déjeuner en sus.',
      items: [
        {
          eyebrow: 'Play With A Pro',
          name: 'Solo',
          price: '€495',
          features: [
            'Parcours adapté à votre jeu et votre handicap',
            'Heure de départ sécurisée et gérée',
            '18 trous avec Andy',
            'Coaching sur le parcours pendant la partie',
            'Débriefing après la partie et prochaines étapes',
          ],
          note: 'Tarif journalier d’Andy. Les droits de jeu et le déjeuner sont en sus. Voiturette et clubs de location disponibles en option.',
          cta: 'Demander →',
          href: '/contact',
        },
        {
          eyebrow: 'Play With A Pro',
          name: 'Groupe',
          price: '€950',
          features: [
            'Jusqu’à 3 joueurs, un tarif fixe journalier pour Andy',
            'Parcours adapté au groupe',
            'Heure de départ sécurisée et gérée',
            '18 trous avec Andy',
            'Coaching sur le parcours pendant la partie',
          ],
          note: 'Tarif fixe journalier d’Andy pour 2 ou 3 golfeurs. Droits de jeu et déjeuner en sus. Voiturette et clubs de location disponibles.',
          cta: 'Demander →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: 'Signature Experience',
          name: 'Signature Day',
          price: '€3 000+',
          features: [
            'Parcours, heure de départ et journée de golf animée par Andy',
            'Déjeuner, chef privé ou réservation de restaurant',
            'Transferts privés et temps de récupération',
            'Caddie, vidéaste et location de clubs premium',
            'Analyse vidéo après la partie incluse',
            'Réservation prioritaire : vos dates retenues en premier',
          ],
          note: 'Personnalisé de A à Z. Transferts, caddie, kiné golf, chef privé, vidéaste et autres options planifiés autour de vous.',
          cta: 'Demander →',
          href: '/contact',
          signature: true,
        },
        {
          eyebrow: 'Planification de séjour',
          name: 'Planifier votre séjour',
          price: 'Tarif sur demande',
          features: [
            'Pas besoin de chercher sur des applis : les heures de départ sont gérées pour vous',
            'Parcours choisis selon votre groupe, niveau et budget',
            'Conseils sur la zone d’hébergement et l’itinéraire',
            'Un programme qui a du sens sur la carte',
            'Journée Play With A Pro ajoutée si vous le souhaitez',
          ],
          note: 'Tarif communiqué lors de notre échange, pas affiché sur la page d’accueil. Dites-moi la taille du voyage et je vous propose un chiffre adapté.',
          cta: 'Demander →',
          href: '/contact',
        },
      ],
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Ce que les gens demandent avant de prendre contact.',
      intro: 'Donnez-moi vos dates, votre handicap et ce que vous cherchez. Je réponds personnellement sous 24 heures.',
      items: [
        { q: 'Faut-il être un bon joueur ?', a: 'Pas du tout. L’expérience s’adapte à votre niveau. Débutants comme joueurs scratch peuvent y gagner quelque chose.' },
        { q: 'Quel parcours utilisez-vous ?', a: 'Cela dépend de vous. Son Gual et Alcanada sont mes principales bases pour une vraie grande journée, mais ce ne sont pas toujours les meilleurs choix.' },
        { q: 'Comment réserver ?', a: 'Écrivez-moi simplement. Donnez-moi vos dates et ce que vous cherchez, et je vous répondrai personnellement sous 24 heures. Pas de plateforme de réservation. Pas d’attente.' },
        { q: 'Est-ce adapté aux groupes ?', a: 'Oui. Pour une personne seule, un couple, un groupe d’amis ou une journée d’entreprise.' },
        { q: 'Quelle est la meilleure période ?', a: 'Octobre, novembre, mars et avril. C’est le meilleur mélange de conditions, météo, valeur et rythme de jeu.' },
      ],
    },
    finalCta: { eyebrow: 'Prêt à jouer Majorque comme il faut ?', title: 'Contactez-moi. Je m’occupe du reste.', body: 'Donnez-moi vos dates, votre handicap et ce que vous attendez de la journée. Je reviens vers vous personnellement sous 24 heures.', primaryCta: 'Réserver votre journée', secondaryCta: 'WhatsApp' },
  },
  nl: {
    hero: { eyebrow: 'PGA Advanced Professional · Mallorca', titleLines: ['Speel de beste', 'banen van Mallorca.'], emphasis: 'Met een professional aan uw zijde.', primaryCta: 'Boek uw dag', secondaryCta: 'Bekijk de banen' },
    intro: {
      eyebrow: 'Wat dit anders maakt',
      title: 'De meeste golfdagen op Mallorca beginnen op een boekingsplatform en eindigen met een rekening. Dit is persoonlijker.',
      paragraphs: [
        'Ik organiseer privé-golfdagen op de beste banen van het eiland, met coaching tijdens de ronde in plaats van als extra achteraf. U speelt beter, beslissingen worden duidelijker en de hele dag voelt beter verzorgd.',
        'Mallorca is het hele jaar bespeelbaar. Weten welke baan bij uw spel past, welke starttijden het waard zijn en wanneer de omstandigheden kloppen, maakt veel van het verschil tussen een goede dag en een geweldige.',
      ],
      stats: [
        { value: '18', label: 'jaar golfcoaching' },
        { value: '15.000+', label: 'gegeven lessen' },
        { value: '300+', label: 'begeleide wedstrijdwinnaars' },
      ],
    },
    socialProof: 'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian',
    how: { eyebrow: 'Hoe het werkt', title: 'Drie eenvoudige stappen.', steps: [{ number: '01', title: 'Neem contact op', text: 'Vertel me uw data, handicap en wat u zoekt. Ik reageer persoonlijk binnen 24 uur.' }, { number: '02', title: 'Ik bouw uw dag', text: 'Baanadvies, tee time en lunch worden geregeld vóór uw aankomst. Vervoer kan worden toegevoegd als dat handig is.' }, { number: '03', title: 'Kom en speel', text: 'Uw taak is simpel: genieten van de ronde. De meeste mensen spelen beter dan verwacht.' }] },
    whyMallorca: { eyebrow: 'Waarom Mallorca', title: 'Mallorca heeft banen op Tour-niveau. Veel bezoekers ontdekken maar een klein deel.', paragraphs: ['Veel van Europa’s beste banen sluiten in de winter. Mallorca niet. Van oktober tot april krijgt u lagere greenfees, rustigere banen en omstandigheden die elders midden in de zomer al goed zouden zijn.', 'Er liggen 24 banen binnen bereik, verschillende met echte Tourgeschiedenis en serieuze architectuur. Mallorca is een echte golfbestemming, en de meeste bezoekers zien daar maar een klein deel van.'], stats: [{ value: 'Jan-Dec', label: 'seizoen het hele jaar' }, { value: '24', label: 'banen op het eiland' }, { value: '21', label: 'open voor green fee' }, { value: '3', label: 'privé of beperkt' }] },
    courses: { eyebrow: 'Uitgelichte banen', title: 'De beste van Mallorca, gespeeld en eerlijk beoordeeld.', viewAll: 'Bekijk alle 24 banen →' },
    experience: {
      eyebrow: 'De ervaring',
      title: 'De meeste golfdagen op Mallorca zijn een tee time en een handdruk op de 18e.',
      paragraphs: ['Ik heb meer dan tien jaar in China gecoacht, waar klanten echte verbetering verwachtten in plaats van vage aanmoedigingen.', 'Die achtergrond bepaalt elke ronde die ik begeleid. We spelen samen op een van de beste banen van Mallorca en de coaching komt precies op de momenten waarop die echt iets verandert.', 'Alles is geregeld vóór uw aankomst: baan, starttijd en lunch. Uw enige taak is spelen.'],
      button: 'Bekijk de ervaringen',
      dateCta: 'Vertel me uw data',
      features: [
        { title: 'Alles geregeld', text: 'Baan, tee time en lunch staan vast vóór uw aankomst. Vervoer kan worden toegevoegd als dat handig is.' },
        { title: 'Coaching op de baan', text: 'Nuttige observaties midden in de ronde, zolang ze nog iets kunnen veranderen.' },
        { title: 'Volledig privé', text: 'Alleen u en een PGA Advanced Professional. Geen onbekenden in uw flight.' },
        { title: 'Toegang tot meer', text: 'Ledenbanen die de meeste bezoekers niet zelfstandig kunnen boeken.' },
      ],
    },
    journey: {
      eyebrow: 'Kies uw startpunt',
      title: 'Begin waar u nu staat in het planningsproces.',
      items: [
        {
          title: 'Een ronde spelen met Andy',
          text: 'Boek een privédag met mij: één baan, 18 holes, lokaal baanmanagement en coaching verweven in de ronde. Solo of in een groep.',
          cta: 'Play With A Pro',
          href: '/play-with-a-pro',
        },
        {
          title: 'Ik plan een golfreis',
          text: 'Laat mij de planning overnemen: banen passend bij uw groep, accommodatielocatie, routing, starttijden, buggies en boekingen, alles geregeld voordat u aankomt.',
          cta: 'Plan Your Trip',
          href: '/plan-your-trip',
        },
        {
          title: 'Ik vergelijk banen',
          text: 'Lees mijn baangidsen voor eerlijke, eigen notities over greenfees, moeilijkheidsgraad, conditie, landschap en voor wie elke baan echt geschikt is.',
          cta: 'Alle banen vergelijken',
          href: '/golf-courses',
        },
      ],
    },
    quote: {
      text: 'Na slechts 18 holes samen heb ik een nieuw plafond in mijn potentieel ontdekt.',
      attribution: 'Jo, na een dag op Son Gual',
    },
    packages: {
      eyebrow: 'Ervaringen en pakketten',
      title: 'Kies je dag',
      body: 'Alle drie zijn privé en alle drie worden persoonlijk door mij begeleid. Baan, startijd en coaching inbegrepen. Greenfees en lunch apart.',
      items: [
        {
          eyebrow: 'Play With A Pro',
          name: 'Solo',
          price: '€495',
          features: [
            'Baan afgestemd op uw spel en handicap',
            'Starttijd geregeld en volledig afgehandeld',
            '18 holes met Andy',
            'Coaching op de baan tijdens de ronde',
            'Debriefing na de ronde en vervolgstappen',
          ],
          note: "Andy's dagtarief. Greenfee en lunch zijn apart. Buggy en huurclubs beschikbaar als optionele toevoegingen.",
          cta: 'Aanvragen →',
          href: '/contact',
        },
        {
          eyebrow: 'Play With A Pro',
          name: 'Groep',
          price: '€950',
          features: [
            'Tot 3 spelers, één vast dagtarief voor Andy',
            'Baan afgestemd op uw groep',
            'Starttijd geregeld en volledig afgehandeld',
            '18 holes met Andy',
            'Coaching op de baan tijdens de ronde',
          ],
          note: 'Vast dagtarief van Andy voor 2 of 3 golfers. Greenfee en lunch zijn apart. Buggy en huurclubs beschikbaar.',
          cta: 'Aanvragen →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: 'Signature Experience',
          name: 'Signature Day',
          price: '€3.000+',
          features: [
            'Baan, starttijd en georganiseerde golfdag met Andy',
            'Lunch, privékok of restaurantreservering',
            'Privétransfers en hersteltijd',
            'Caddie, videograaf en premium clubhuur',
            'Videoanalyse na de ronde inbegrepen',
            'Prioriteitsboeking: uw data worden als eerste geblokkeerd',
          ],
          note: 'Volledig op maat samengesteld. Transfers, caddie, golfhysio, privékok, videograaf en andere toevoegingen worden rondom u gepland.',
          cta: 'Aanvragen →',
          href: '/contact',
          signature: true,
        },
        {
          eyebrow: 'Reisplanning',
          name: 'Plan uw reis',
          price: 'Prijs op aanvraag',
          features: [
            'Geen zoeken in apps of websites: starttijden worden voor u geregeld',
            'Banen geselecteerd op basis van uw groep, niveau en budget',
            'Aanbevelingen voor verblijfsgebied en route',
            'Een reisschema dat logisch is op de kaart',
            'Play With A Pro-dag kan worden toegevoegd',
          ],
          note: 'Prijs besproken tijdens ons gesprek, niet weergegeven op de homepage. Vertel me de omvang van de reis en ik kom met een passend bedrag.',
          cta: 'Aanvragen →',
          href: '/contact',
        },
      ],
    },
    faq: {
      eyebrow: 'Vragen',
      title: 'Wat mensen meestal vragen voordat ze contact opnemen.',
      intro: 'Vertel me uw data, handicap en wat u zoekt. Ik reageer persoonlijk binnen 24 uur.',
      items: [
        { q: 'Moet ik een goede golfer zijn?', a: 'Nee. De ervaring past zich aan uw spel aan. Zowel beginners als scratchspelers halen er iets uit.' },
        { q: 'Welke baan gebruikt u?', a: 'Dat hangt van u af. Son Gual en Alcanada zijn mijn hoofdlocaties voor een serieuze volledige dag, maar niet altijd de juiste keuze.' },
        { q: 'Hoe boek ik?', a: 'Neem gewoon contact op. Vertel me uw data en wat u zoekt, en ik kom persoonlijk binnen 24 uur bij u terug. Geen boekingsplatform. Geen wachtrij.' },
        { q: 'Is dit geschikt voor groepen?', a: 'Ja. Voor solo’s, koppels, vriendengroepen en zakelijke dagen.' },
        { q: 'Wat is de beste tijd van het jaar?', a: 'Oktober, november, maart en april. De beste mix van baancondities, weer, waarde en speeltempo.' },
      ],
    },
    finalCta: { eyebrow: 'Klaar om Mallorca goed te spelen?', title: 'Neem contact op. Ik regel de rest.', body: 'Vertel me uw data, handicap en wat u uit de dag wilt halen. Ik kom persoonlijk binnen 24 uur bij u terug.', primaryCta: 'Boek uw dag', secondaryCta: 'WhatsApp' },
  },
  sv: {
    hero: { eyebrow: 'PGA Advanced Professional · Mallorca', titleLines: ['Spela Mallorcas', 'bästa banor.'], emphasis: 'Med ett proffs vid din sida.', primaryCta: 'Boka din dag', secondaryCta: 'Se banorna' },
    intro: {
      eyebrow: 'Det som gör skillnaden',
      title: 'De flesta golfdagar på Mallorca börjar via en bokningsplattform och slutar med en faktura. Det här är mer personligt.',
      paragraphs: [
        'Jag arrangerar privata golfdagar på öns bästa banor, med coachingen invävd i rundan i stället för lagd ovanpå efteråt. Spelet blir bättre, besluten blir tydligare och hela dagen känns mer omhändertagen.',
        'Mallorca är spelbart hela året. Att veta vilken bana som passar ditt spel, vilka starttider som är värda det och när förhållandena stämmer är mycket av skillnaden mellan en bra dag och en riktigt bra.',
      ],
      stats: [
        { value: '18', label: 'år av golfcoaching' },
        { value: '15 000+', label: 'lektioner genomförda' },
        { value: '300+', label: 'tävlingsvinnare coachade' },
      ],
    },
    socialProof: 'PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian',
    how: { eyebrow: 'Så fungerar det', title: 'Tre enkla steg.', steps: [{ number: '01', title: 'Hör av dig', text: 'Berätta dina datum, ditt handicap och vad du letar efter. Jag svarar personligen inom 24 timmar.' }, { number: '02', title: 'Jag bygger dagen', text: 'Bana, starttid och lunch ordnas innan du kommer. Transport kan läggas till vid behov.' }, { number: '03', title: 'Kom och spela', text: 'Din uppgift är att njuta av ronden. De flesta spelar bättre än de trodde.' }] },
    whyMallorca: { eyebrow: 'Varför Mallorca', title: 'Mallorca har banor på tournivå. Många besökare ser bara en liten del av dem.', paragraphs: ['Många av Europas bästa banor stänger under vintern. Mallorca gör det inte. Från oktober till april får du lägre greenfees, lugnare banor och förhållanden som många andra platser bara kan drömma om.', 'Det finns 24 banor inom räckhåll, flera med riktig Tour-historia och seriös design. Mallorca är en riktig golfdestination, och de flesta besökare ser bara en liten del av vad som finns här.'], stats: [{ value: 'Jan-Dec', label: 'säsong året runt' }, { value: '24', label: 'banor på ön' }, { value: '21', label: 'öppna för green fee' }, { value: '3', label: 'privata eller begränsade' }] },
    courses: { eyebrow: 'Utvalda banor', title: 'Mallorcas bästa banor, spelade och ärligt recenserade.', viewAll: 'Se alla 24 banor →' },
    experience: {
      eyebrow: 'Upplevelsen',
      title: 'De flesta golfdagar på Mallorca är bara en starttid och ett handslag på 18:e.',
      paragraphs: ['Jag coachade i Kina i över ett decennium, där kunder förväntade sig verklig förbättring och inte tomma uppmuntringsord.', 'Den bakgrunden följer med i varje rond jag är värd för. Vi spelar tillsammans på en av Mallorcas bästa banor och coachingen kommer där den faktiskt gör skillnad.', 'Allt är ordnat innan du kommer: bana, starttid och lunch. Din enda uppgift den dagen är att spela.'],
      button: 'Se upplevelserna',
      dateCta: 'Berätta dina datum',
      features: [
        { title: 'Allt ordnat', text: 'Bana, starttid och lunch är klara innan du anländer. Transport kan läggas till vid behov.' },
        { title: 'Coaching på banan', text: 'Användbara observationer mitt i rundan, medan de fortfarande kan förändra något.' },
        { title: 'Helt privat', text: 'Bara du och en PGA Advanced Professional. Inga främlingar i gruppen.' },
        { title: 'Tillgång till mer', text: 'Medlemsbanor som de flesta besökare inte kan boka själva.' },
      ],
    },
    journey: {
      eyebrow: 'Välj din utgångspunkt',
      title: 'Börja där du befinner dig i planeringsprocessen.',
      items: [
        {
          title: 'Spela en runda med Andy',
          text: 'Boka en privat dag med mig: en bana, 18 hål, lokalt banhanterande och coaching inbyggd i rundan. Solo eller i grupp.',
          cta: 'Play With A Pro',
          href: '/play-with-a-pro',
        },
        {
          title: 'Jag planerar en golfresa',
          text: 'Låt mig sköta planeringen: banor matchade efter din grupp, boendeplats, rutt, starttider, vagnar och bokningar, allt ordnat innan du anländer.',
          cta: 'Plan Your Trip',
          href: '/plan-your-trip',
        },
        {
          title: 'Jag jämför banor',
          text: 'Läs mina banguider för ärliga, egna anteckningar om greenfees, svårighetsgrad, skick, omgivning och vem varje bana egentligen passar.',
          cta: 'Jämför alla banor',
          href: '/golf-courses',
        },
      ],
    },
    quote: {
      text: 'Efter bara 18 hål tillsammans har jag upptäckt ett nytt tak för min potential.',
      attribution: 'Jo, efter en dag på Son Gual',
    },
    packages: {
      eyebrow: 'Upplevelser och paket',
      title: 'Välj din dag',
      body: 'Alla tre är privata och alla tre leds personligen av mig. Bana, startid och coaching ingår. Green fees och lunch separat.',
      items: [
        {
          eyebrow: 'Play With A Pro',
          name: 'Solo',
          price: '€495',
          features: [
            'Bana matchad efter ditt spel och handicap',
            'Starttid säkrad och fullt hanterad',
            '18 hål med Andy',
            'Coaching på banan under rundan',
            'Debriefing efter rundan och nästa steg',
          ],
          note: 'Andys dagsarvode. Greenfee och lunch är separata. Buggy och hyrklubbar finns som tillval.',
          cta: 'Förfrågan →',
          href: '/contact',
        },
        {
          eyebrow: 'Play With A Pro',
          name: 'Grupp',
          price: '€950',
          features: [
            'Upp till 3 spelare, ett fast dagsarvode för Andy',
            'Bana matchad efter din grupp',
            'Starttid säkrad och fullt hanterad',
            '18 hål med Andy',
            'Coaching på banan under rundan',
          ],
          note: 'Fast dagsarvode för Andy för 2 eller 3 golfare. Greenfee och lunch är separata. Buggy och hyrklubbar finns som tillval.',
          cta: 'Förfrågan →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: 'Signature Experience',
          name: 'Signature Day',
          price: '€3 000+',
          features: [
            'Bana, starttid och golfdag ledd av Andy',
            'Lunch, privatkock eller restaurangbokning',
            'Privata transferer och återhämtningstid',
            'Caddie, videograf och premium klubbuthyrning',
            'Videoanalys efter rundan ingår',
            'Prioritetsbokning: dina datum hålls i förväg',
          ],
          note: 'Personaliserat från grunden. Transferer, caddie, golfsjukgymnast, privatkock, videograf och andra tillägg planeras runt dig.',
          cta: 'Förfrågan →',
          href: '/contact',
          signature: true,
        },
        {
          eyebrow: 'Resplanering',
          name: 'Planera din resa',
          price: 'Pris på begäran',
          features: [
            'Inget sökande i appar eller webbplatser: starttider hanteras åt dig',
            'Banor utvalda för att passa din grupp, nivå och budget',
            'Råd om boende och rutt',
            'Ett schema som är logiskt på kartan',
            'En Play With A Pro-dag kan läggas till',
          ],
          note: 'Pris diskuteras när vi pratar, inte visas på startsidan. Berätta resans storlek och jag föreslår en rimlig siffra.',
          cta: 'Förfrågan →',
          href: '/contact',
        },
      ],
    },
    faq: {
      eyebrow: 'Frågor',
      title: 'Det folk brukar fråga innan de hör av sig.',
      intro: 'Berätta dina datum, ditt handicap och vad du letar efter. Jag svarar personligen inom 24 timmar.',
      items: [
        { q: 'Måste jag vara en bra golfare?', a: 'Nej. Upplevelsen anpassas efter ditt spel. Både nybörjare och scratchspelare får ut något av dagen.' },
        { q: 'Vilken bana använder du?', a: 'Det beror på dig. Son Gual och Alcanada är mina huvudval för en seriös heldag, men inte alltid rätt val.' },
        { q: 'Hur bokar jag?', a: 'Hör bara av dig. Berätta dina datum och vad du söker, så återkommer jag personligen inom 24 timmar. Ingen bokningsplattform. Ingen väntan.' },
        { q: 'Passar det här grupper?', a: 'Ja. För solo, par, kompisgäng och företagsdagar.' },
        { q: 'När är bästa tiden på året?', a: 'Oktober, november, mars och april. Den bästa kombinationen av banförhållanden, väder, värde och speltempo.' },
      ],
    },
    finalCta: { eyebrow: 'Redo att spela Mallorca på riktigt?', title: 'Hör av dig. Jag ordnar resten.', body: 'Berätta dina datum, ditt handicap och vad du vill få ut av dagen. Jag återkommer personligen inom 24 timmar.', primaryCta: 'Boka din dag', secondaryCta: 'WhatsApp' },
  },
  // Chinese copy is market-localized, not a literal translation of the other language versions.
  zh: {
    hero: { eyebrow: '上海 11 年 · 普通话 · PGA 高级职业教练', titleLines: ['打马略卡最好的', '高尔夫球场。'], emphasis: '由 Andy 教练全程陪同。', primaryCta: '预订这一天', secondaryCta: '查看球场' },
    journey: {
      eyebrow: '选择你的方式',
      title: '从你现在所在的位置开始。',
      items: [
        {
          title: '和 Andy 一起打一轮',
          text: '预订与我共度的私人一天：一座球场、18 洞、球场管理指导贯穿全程。单人或小组均可。',
          cta: '了解陪打服务',
          href: '/play-with-a-pro',
        },
        {
          title: '我在计划一趟高尔夫旅行',
          text: '让我来负责所有安排：球场选择、住宿、路线规划、开球时间、球车和预订，全部在你出发前搞定。',
          cta: '了解行程规划',
          href: '/plan-your-trip',
        },
        {
          title: '我在比较各个球场',
          text: '查看我的球场评测，获取关于果岭费、难度、球场状态、风景以及各球场适合哪类球手的第一手诚实评价。',
          cta: '比较全部球场',
          href: '/golf-courses',
        },
      ],
    },
    quote: {
      text: '只打了 18 洞，我就发现自己的潜力还能再往上走一层。',
      attribution: 'Jo，在 Son Gual 打球后',
    },
    intro: {
      eyebrow: '真正拉开差距的地方',
      title: '我在上海待了 11 年，也知道中国客人要的不是一场普通预订，而是清楚、专业、有人把细节都安排好的私人高尔夫一天。',
      paragraphs: [
        '我会在岛上最好的球场陪你打一整天，指导直接发生在球场上，而不是打完以后再补几句建议。球会打得更好，决策会更清楚，整天的体验也会更周到。',
        '我在上海执教过 11 年，和中国国家队球员、高要求家庭以及真正认真看内容的球手合作过，也在抖音上做过大量高尔夫内容。普通话流利，所以沟通、判断和安排都可以更直接。',
      ],
      services: [
        {
          title: '与 Andy 同场',
          text: '一整天的私人陪打：一座球场、18 洞、球场管理指导贯穿全程。单人或小组均可。',
          cta: '了解陪打服务',
          href: '/play-with-a-pro',
        },
        {
          title: '行程规划',
          text: '把球场、住宿基点、路线、开球时间、球车、球杆租赁和餐饮建议都交给我。',
          cta: '了解行程规划',
          href: '/plan-your-trip',
        },
      ],
      coursesBlurb: '全岛 24 座球场，我都亲自打过并认真评价过——Son Gual、Alcanada、Son Muntaner 以及其余所有球场。如果你想在预订前比较球场，',
      coursesBlurbLink: '全部球场在这里',
      stats: [
        { value: '11', label: '年上海执教' },
        { value: '普通话', label: '流利沟通' },
        { value: '抖音', label: '数亿次观看内容' },
      ],
    },
    socialProof: '上海 11 年 · 普通话流利 · 抖音数亿次观看 · 中国国家队 · Trackman 大师认证',
    how: { eyebrow: '流程很简单', title: '三个步骤。', steps: [{ number: '01', title: '联系我', text: '告诉我你的日期、差点、酒店区域和你想要什么样的一天。也可以直接加我微信：andygriffiths1。我会在 24 小时内亲自回复。' }, { number: '02', title: '我来安排这一天', text: '球场建议、开球时间和午餐都会在你到场前安排好。交通如有需要，也可以另外加上。' }, { number: '03', title: '到场开打', text: '你唯一要做的，就是享受这一轮。大多数人都会比自己预想中打得更好。' }] },
    whyMallorca: { eyebrow: '为什么是马略卡', title: '马略卡有真正达到巡回赛水准的球场。很多来这里的人，其实只看到了很小的一部分。', paragraphs: ['欧洲很多顶级球场一到冬天就关门，马略卡不会。每年 10 月到次年 4 月，是这里的甜蜜期：果岭费更低，球场更安静，球况却依然出色。', '全岛共有 24 座球场，距离都不算远，其中不少有巡回赛历史，也有很成熟的设计。马略卡是真正的高尔夫目的地，只是大多数访客还没有真正认识它。'], stats: [{ value: '全年', label: '全年可打' }, { value: '24', label: '岛上球场总数' }, { value: '21', label: '向散客开放' }, { value: '3', label: '私人或受限' }] },
    courses: { eyebrow: '精选球场', title: '马略卡最值得打的球场，我都亲自打过，也认真评过。', viewAll: '查看全部 24 座球场 →' },
    experience: {
      eyebrow: '这一天会是什么样',
      title: '马略卡大多数高尔夫体验，不过就是一个开球时间和一句再见。',
      paragraphs: ['我在中国执教了十多年，客户要的是实实在在的进步，不是空泛的鼓励。', '这段经历决定了我现在带每一轮球的方式。我们会一起打马略卡最好的球场，而指导会出现在真正影响成绩的地方。', '在你到场之前，一切都已经安排好：球场、开球时间和午餐。你那天唯一的任务，就是好好打球。'],
      button: '查看体验',
      dateCta: '告诉我您的日期',
      features: [
        { title: '一切都已安排好', text: '球场、开球时间、交通和午餐都会在你到场前安排妥当。' },
        { title: '下场指导', text: '真正有用的观察会出现在一轮当中，而且是在还来得及改变结果的时候。' },
        { title: '完全私密', text: '只有你和一位 PGA Advanced Professional，不会有陌生人加入。' },
        { title: '更多独家资源', text: '包括大多数访客无法自行预订的会员制球场。' },
      ],
    },
    packages: {
      eyebrow: '体验与套餐',
      title: '选择你的那一天',
      body: '三种方案都是私人的，也都由我亲自带。球场、发球时间和教练费用已包含。果岭费和午餐另计。',
      items: [
        {
          eyebrow: '与 Andy 共打一天',
          name: '单人',
          price: '€495',
          features: [
            '根据你的水平和差点匹配球场',
            '开球时间已全程安排',
            '18 洞与 Andy 同场',
            '一轮中的下场指导',
            '赛后复盘与建议',
          ],
          note: 'Andy 的全天费用。球场果岭费和午餐另计。球车和租用球杆可选配。',
          cta: '发起咨询 →',
          href: '/contact',
          featured: false,
        },
        {
          eyebrow: '与 Andy 共打一天',
          name: '小组',
          price: '€950',
          features: [
            '最多 3 人，Andy 固定全天费用',
            '根据小组情况匹配球场',
            '开球时间已全程安排',
            '18 洞与 Andy 同场',
            '一轮中的下场指导',
          ],
          note: 'Andy 陪 2-3 位球手的固定全天费用。果岭费和午餐另计。球车和租用球杆可选配。',
          cta: '发起咨询 →',
          href: '/contact',
          featured: true,
        },
        {
          eyebrow: '精品体验',
          name: '签名日',
          price: '€3,000+',
          features: [
            '球场、开球时间与 Andy 全程主持',
            '午餐、私厨或餐厅预订',
            '专属接送与休息时间',
            '球童、摄影师和高端球杆租用',
            '赛后视频技术分析',
            '优先锁定：你的日期优先保留',
          ],
          note: '从头到尾个性化定制。接送、球童、高尔夫理疗、私厨、摄影师等配套均按你的需求规划。',
          cta: '发起咨询 →',
          href: '/contact',
          signature: true,
        },
        {
          eyebrow: '行程规划',
          name: '为你规划全程',
          price: '咨询报价',
          features: [
            '无需自己查平台：开球时间全部由我代为处理',
            '球场根据小组水平、差点和预算精选',
            '住宿区域和路线建议',
            '一份在地图上真正合理的行程',
            '可加配 Play With A Pro 一天',
          ],
          note: '费用在咨询时说明——不是冷冰冰的定价页面。告诉我你的旅行规模，我来报一个合理的数字。',
          cta: '发起咨询 →',
          href: '/contact',
          featured: false,
        },
      ],
    },
    faq: {
      eyebrow: '常见问题',
      title: '大家联系我之前最常问的事。',
      intro: '告诉我你的日期、差点和你想要什么样的一天。我会在 24 小时内亲自回复。',
      items: [
        { q: '一定要打得很好吗？', a: '不需要。这个体验会根据你的水平来调整。无论是初学者还是低差点球员，都能从中得到真正的帮助。' },
        { q: '通常会安排在哪个球场？', a: '要看你本人。Son Gual 和 Alcanada 是我做完整高质量一天时最常用的两个球场，但并不是每次都最合适。' },
        { q: '怎么预订？', a: '直接联系我就行。把你的日期和想要的体验告诉我，我会在 24 小时内亲自回复。没有预订平台，也不用排队等。' },
        { q: '适合团体吗？', a: '适合。无论是一人、两人、朋友小团体，还是企业接待日，都可以安排。' },
        { q: '一年里什么时候最好？', a: '十月、十一月、三月和四月。球场状态、天气、性价比和节奏，这几个月的平衡最好。' },
      ],
    },
    finalCta: { eyebrow: '准备好真正打懂马略卡了吗？', title: '联系我，剩下的我来安排。', body: '告诉我你的日期、差点和你希望这一天达到什么效果。也可以直接加我微信：andygriffiths1。我会在 24 小时内亲自回复。', primaryCta: '预订这一天', secondaryCta: '微信联系' },
  },
}

for (const [locale, override] of Object.entries(HOME_OVERRIDES)) {
  HOME_CONTENT[locale] = deepMerge(HOME_CONTENT.en, {
    locale,
    ...override,
  })
}

const HOME_COACHING_FAQ = {
  de: {
    q: 'Bieten Sie Golfunterricht oder Coaching auf Mallorca an?',
    a: 'Ja. Am sinnvollsten ist Coaching direkt auf dem Platz statt einer isolierten Range-Stunde: Schlaegerwahl, Strategie, Entscheidungen und die Schwungmuster, die waehrend einer echten Runde auftauchen.',
  },
  es: {
    q: 'Ofrece clases de golf o coaching en Mallorca?',
    a: 'Si. La version mas util es coaching en el campo, no una clase aislada en el range: seleccion de palo, estrategia, decisiones de juego y los patrones de swing que aparecen durante una vuelta real.',
  },
  fr: {
    q: 'Proposez-vous des cours de golf ou du coaching a Majorque ?',
    a: 'Oui. La version la plus utile se fait sur le parcours plutot que sur un practice : choix de club, strategie, decisions de jeu et tendances de swing visibles en situation reelle.',
  },
  nl: {
    q: 'Geeft u golflessen of coaching op Mallorca?',
    a: 'Ja. De sterkste vorm is coaching op de baan in plaats van een losse les op de driving range: clubkeuze, strategie, beslissingen en de swingpatronen die tijdens een echte ronde zichtbaar worden.',
  },
  sv: {
    q: 'Erbjuder du golflektioner eller coaching pa Mallorca?',
    a: 'Ja. Den mest anvandbara formen ar coaching ute pa banan, inte en separat rangelektion: klubbval, strategi, beslut och de svingmonster som syns nar du spelar en riktig rond.',
  },
  zh: {
    q: '可以在马略卡上高尔夫课或做球场指导吗？',
    a: '可以。最有效的方式不是单独在练习场上一节课，而是在真实球场上指导：选杆、策略、击球决定，以及一轮球中真正暴露出来的挥杆模式。',
  },
}

for (const [locale, faq] of Object.entries(HOME_COACHING_FAQ)) {
  const items = HOME_CONTENT[locale]?.faq?.items
  if (Array.isArray(items) && !items.some((item) => item.q === faq.q)) {
    items.splice(1, 0, faq)
  }
}

const HOME_AUDIT_OVERRIDES = {
  de: {
    intro: {
      stats: [
        { value: '24', label: 'Plätze auf der Insel' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
  },
  es: {
    intro: {
      stats: [
        { value: '24', label: 'campos en la isla' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
  },
  fr: {
    intro: {
      stats: [
        { value: '24', label: "parcours sur l'île" },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
  },
  nl: {
    intro: {
      stats: [
        { value: '24', label: 'banen op het eiland' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
  },
  sv: {
    intro: {
      stats: [
        { value: '24', label: 'banor på ön' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
  },
  zh: {
    intro: {
      stats: [
        { value: '24', label: '岛上球场数量' },
        { value: '英国PGA', label: '高级职业教练' },
      ],
    },
  },
}

const HOME_RELOCALIZED_OVERRIDES = {
  de: {
    packages: {
      
      multiDay: {
        eyebrow: 'Suchen Sie nach etwas Größerem?',
        title: 'Ein mehrtägiges Erlebnis, um Sie herum arrangiert.',
        body: 'Zwei oder drei aufeinanderfolgende Tage über Son Gual, Alcanada und weitere Plätze hinweg - mit privaten Transfers, sorgfältig ausgewählter Gastronomie und Zugang zu Plätzen, die die meisten Besucher nicht buchen können.',
        detail: 'Ab €2.000. Schreiben Sie mir mit Ihren Reisedaten, und ich schicke Ihnen einen passenden Vorschlag.',
        button: 'Mehrtägige Reise anfragen →',
        href: '/de/contact',
      },
    },
  },
  es: {
    packages: {
      
      multiDay: {
        eyebrow: '¿Busca algo más grande?',
        title: 'Una experiencia de varios días, organizada alrededor de usted.',
        body: 'Dos o tres días consecutivos entre Son Gual, Alcanada y más allá, con traslados privados, una selección cuidada de restaurantes y acceso a campos que la mayoría de los visitantes no puede reservar.',
        detail: 'Desde €2.000. Escríbame con sus fechas y le propondré una opción a su medida.',
        button: 'Consultar un viaje de varios días →',
        href: '/es/contact',
      },
    },
  },
  fr: {
    packages: {
      
      multiDay: {
        eyebrow: 'Vous cherchez quelque chose de plus ambitieux ?',
        title: 'Une expérience sur plusieurs jours, organisée autour de vous.',
        body: 'Deux ou trois jours consécutifs entre Son Gual, Alcanada et au-delà, avec transferts privés, bonnes tables soigneusement choisies et accès à des parcours que la plupart des visiteurs ne peuvent pas réserver.',
        detail: 'À partir de 2 000 €. Envoyez-moi vos dates et je vous proposerai une version adaptée.',
        button: 'Demander un séjour sur plusieurs jours →',
        href: '/fr/contact',
      },
    },
  },
  nl: {
    packages: {
      
      multiDay: {
        eyebrow: 'Zoekt u iets groters?',
        title: 'Een meerdaagse ervaring, volledig om u heen opgebouwd.',
        body: 'Twee of drie opeenvolgende dagen langs Son Gual, Alcanada en meer, met privétransfers, zorgvuldig gekozen restaurants en toegang tot banen die de meeste bezoekers niet kunnen boeken.',
        detail: 'Vanaf €2.000. Stuur me uw data en ik werk een passend voorstel uit.',
        button: 'Meerdaagse trip aanvragen →',
        href: '/nl/contact',
      },
    },
  },
  sv: {
    packages: {
      
      multiDay: {
        eyebrow: 'Letar du efter något större?',
        title: 'En flerdagarsupplevelse, planerad runt dig.',
        body: 'Två eller tre dagar i följd över Son Gual, Alcanada och vidare, med privata transfers, noggrant utvalda restauranger och tillgång till banor som de flesta besökare inte kan boka.',
        detail: 'Från €2.000. Skicka dina datum så sätter jag ihop ett förslag som passar.',
        button: 'Fråga om en flerdagarsresa →',
        href: '/sv/contact',
      },
    },
  },
  zh: {
    packages: {
      
      multiDay: {
        eyebrow: '想要更完整的行程？',
        title: '一款围绕您定制的多日体验。',
        body: '连续两到三天，安排 Son Gual、Alcanada 及更多球场，包含私人接送、精心挑选的餐饮，以及多数访客订不到的球场机会。',
        detail: '€2,000 起。把您的日期发给我，我会为您准备合适的方案。',
        button: '咨询多日行程 →',
        href: '/zh/contact',
      },
    },
  },
}

for (const [locale, override] of Object.entries(HOME_AUDIT_OVERRIDES)) {
  HOME_CONTENT[locale] = deepMerge(HOME_CONTENT[locale], override)
}

for (const [locale, override] of Object.entries(HOME_RELOCALIZED_OVERRIDES)) {
  HOME_CONTENT[locale] = deepMerge(HOME_CONTENT[locale], override)
}

const HOME_HUMANIZED_OVERRIDES = {
  de: {
    hero: {
      eyebrow: 'PGA Advanced Professional auf Mallorca',
      trust: [
        'PGA Advanced Professional',
        'Trackman Master zertifiziert',
        '18 Jahre Golfcoaching',
        'Pebble Beach · Evian · The Open',
      ],
    },
    packages: {
      intro: 'Beide Varianten sind privat, und ich begleite beide persönlich. Solo ist inklusive Greenfee und Lunch. Für Gruppen von 2 oder 3 gilt ein fester Tagessatz, die Greenfees bestätigen wir gemeinsam.',
      multiDay: {
        cta: 'Mehrtägige Reise anfragen',
      },
    },
  },
  es: {
    hero: {
      eyebrow: 'PGA Advanced Professional en Mallorca',
      trust: [
        'PGA Advanced Professional',
        'Certificado Trackman Master',
        '18 años dedicados al coaching de golf',
        'Pebble Beach · Évian · The Open',
      ],
    },
    packages: {
      intro: 'Las dos opciones son privadas y las acompaño personalmente. El formato individual lo incluye todo. Los grupos de 2 o 3 tienen una tarifa fija por el día, y los green fees se confirman aparte.',
      multiDay: {
        cta: 'Consultar un viaje de varios días',
      },
    },
  },
  fr: {
    hero: {
      eyebrow: 'Professionnel PGA confirmé à Majorque',
      trust: [
        'Professionnel PGA confirmé',
        'Certifié Trackman Master',
        '18 ans de coaching de golf',
        'Pebble Beach · Évian · The Open',
      ],
    },
    winners: {
      eyebrow: 'Preuves sur le terrain',
      title: 'Des vainqueurs en compétition, des joueurs ambitieux, et tout ce qu’il y a entre les deux.',
      intro: 'J’ai accompagné des juniors de haut niveau, des joueurs de club et beaucoup de personnes qui voulaient simplement arrêter de gâcher des coups. Le fil conducteur est presque toujours le même : des décisions plus claires, de meilleurs schémas, et un progrès qui tient encore quand la carte compte.',
      testimonial: 'Je joue au golf depuis l’âge de cinq ans. Je pensais avoir les bases et avoir surtout besoin de répétitions, pas d’un coach. Puis on m’a offert une séance avec Andy, et j’ai décidé d’essayer. J’ai bien fait. Nous avons travaillé les détails fins du swing, la qualité du contact, le transfert d’appui et la mécanique. Même de petits ajustements ont produit des résultats réguliers, et je suis convaincu qu’ils peuvent me faire gagner 5 à 10 coups avec une seule séance. Andy a été irréprochable du début à la fin. Je ne le remercierai jamais assez.',
      attribution: 'Adam',
    },
    packages: {
      intro: 'Les deux formats sont privés, et je les accompagne moi-même. En solo, tout est compris. Pour les groupes de 2 ou 3, il y a un tarif fixe pour la journée, et les green fees sont confirmés séparément.',
      multiDay: {
        cta: 'Demander un séjour sur plusieurs jours',
      },
    },
  },
  nl: {
    hero: {
      eyebrow: 'PGA Advanced Professional op Mallorca',
      trust: [
        'PGA Advanced Professional',
        'Trackman Master gecertificeerd',
        '18 jaar golfcoaching',
        'Pebble Beach · Evian · The Open',
      ],
    },
    winners: {
      eyebrow: 'Bewijs op de baan',
      title: 'Wedstrijdwinnaars, ambitieuze golfers en alles ertussenin.',
      intro: 'Ik heb elitejeugd, clubgolfers en genoeg spelers begeleid die simpelweg wilden stoppen met onnodig slagen weg te geven. De rode draad is bijna altijd dezelfde: helderdere beslissingen, betere patronen en vooruitgang die ook standhoudt wanneer de kaart telt.',
      testimonial: 'Ik speel golf sinds mijn vijfde. Ik dacht dat de basis er wel was en dat ik vooral meer herhalingen nodig had, niet per se een coach. Toen kreeg ik een les met Andy cadeau en besloot ik het toch te proberen. Gelukkig maar. We gingen door de fijnere details van mijn swing, beter balcontact, gewichtsverplaatsing en mechaniek. Zelfs kleine aanpassingen gaven meteen constantere resultaten, en ik ben ervan overtuigd dat ze me met één sessie al vijf tot tien slagen kunnen schelen. Andy was van begin tot eind een absolute professional. Ik kan hem niet genoeg bedanken.',
      attribution: 'Adam',
    },
    packages: {
      intro: 'Beide opties zijn privé en ik begeleid ze persoonlijk. Solo is volledig inbegrepen. Voor groepen van 2 of 3 geldt één vaste dagprijs, met greenfees die we apart bevestigen.',
      multiDay: {
        cta: 'Meerdaagse trip aanvragen',
      },
    },
  },
  sv: {
    hero: {
      eyebrow: 'PGA Advanced Professional på Mallorca',
      trust: [
        'PGA Advanced Professional',
        'Trackman Master-certifierad',
        '18 år av golfcoaching',
        'Pebble Beach · Evian · The Open',
      ],
    },
    winners: {
      eyebrow: 'Bevis i verkligheten',
      title: 'Tävlingsvinnare, ambitiösa golfare och många däremellan.',
      intro: 'Jag har coachat elitjuniorer, klubbgolfare och många som bara ville sluta kasta bort slag. Den gemensamma nämnaren brukar vara densamma: tydligare beslut, bättre mönster och en utveckling som fortfarande syns när scorekortet faktiskt räknas.',
      testimonial: 'Jag har spelat golf sedan jag var fem. Jag trodde att jag hade grunderna och mest behövde fler repetitioner, inte en coach. Sedan fick jag en lektion med Andy i present och bestämde mig för att ge det en chans. Det är jag glad för. Vi jobbade igenom de finare detaljerna i svingen, bättre bollträff, viktförflyttning och mekanik. Även små justeringar gav stabila resultat direkt, och jag är övertygad om att de kan spara fem till tio slag för mig efter bara en session. Andy var oerhört professionell hela vägen. Jag kan inte tacka honom nog.',
      attribution: 'Adam',
    },
    packages: {
      intro: 'Båda alternativen är privata och leds personligen av mig. Solo inkluderar greenfee och lunch. För grupper på 2 eller 3 gäller ett fast dagspris, och green fees bekräftar vi separat.',
      multiDay: {
        cta: 'Fråga om en flerdagarsresa',
      },
    },
  },
  zh: {
    hero: {
      eyebrow: '英国 PGA 高级职业教练 · 马略卡',
      trust: [
        '英国 PGA 高级职业教练',
        'Trackman Master 认证',
        '18 年高尔夫执教经验',
        'Pebble Beach · Évian · The Open',
      ],
    },
    winners: {
      eyebrow: '真正的成绩',
      title: '有比赛冠军，也有认真想进步的球手，和介于两者之间的很多人。',
      intro: '我带过精英青少年、俱乐部球手，也带过很多只是想少丢几杆的人。共同点通常都一样：决策更清楚，击球模式更稳定，而且这种进步到了真正记分的时候依然能体现出来。',
      testimonial: '我从五岁开始打高尔夫。我一直以为自己的基本功已经有了，只需要多打一点，而不是找教练。后来有人送了我一节 Andy 的课，我决定试试看。结果证明这决定很值。我们把挥杆里的细节、扎实击球、重心转移和动作机制都重新梳理了一遍。哪怕只是很小的调整，也带来了持续稳定的效果，我很有信心，仅凭这一节课就能让我少打 5 到 10 杆。Andy 从头到尾都非常专业，我真的非常感谢他。',
      attribution: 'Adam',
    },
    packages: {
      intro: '这两种安排都是私人的，也都由我亲自带着走。单人方案全部包含在内。2 或 3 人的小组按固定日费计价，果岭费另外确认。',
      multiDay: {
        cta: '咨询多日行程',
      },
    },
  },
}

for (const [locale, override] of Object.entries(HOME_HUMANIZED_OVERRIDES)) {
  HOME_CONTENT[locale] = deepMerge(HOME_CONTENT[locale], override)
}

const HOME_NO_PRICE_OVERRIDES = {
  en: {
    intro: {
      stats: [
        { value: '24', label: 'Courses on the island' },
        { value: 'Private', label: 'Solo and small-group days' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: 'Both are private, arranged by me, and played on one of the island\'s finest courses. The homepage stays light; the full experience and pricing sit on the next page.',
      items: [
        {
          note: 'Pricing shared personally once I know your dates, group size, and the right course for the day.',
          price: null,
        },
        {
          note: 'A fixed day rate for Andy, with the exact course plan and green fees confirmed when we speak.',
          price: null,
        },
      ],
      multiDay: {
        body: 'Two or three consecutive days across Son Gual, Alcanada, and beyond, with private transfers, handpicked dining, and access to courses most visitors cannot book. Pricing is shared once I know your dates and what kind of trip you want.',
      },
    },
  },
  de: {
    intro: {
      stats: [
        { value: '24', label: 'Plätze auf der Insel' },
        { value: 'Privat', label: 'Solo- und Kleingruppentage' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: 'Beide Varianten sind privat, werden von mir persönlich begleitet und auf einem der besten Plätze der Insel gespielt. Über den Preis sprechen wir direkt, sobald ich Ihre Daten und die passende Runde kenne.',
      items: [
        {
          note: 'Den Preis teile ich Ihnen persönlich mit, sobald ich Ihre Reisedaten, Gruppengröße und den passenden Platz kenne.',
          price: null,
        },
        {
          note: 'Für Gruppen gilt ein fester Tagessatz für Andy; Platzwahl und Greenfees bestätigen wir gemeinsam im Gespräch.',
          price: null,
        },
      ],
      multiDay: {
        body: 'Zwei oder drei aufeinanderfolgende Tage über Son Gual, Alcanada und weitere Plätze hinweg, mit privaten Transfers, sorgfältig ausgewählter Gastronomie und Zugang zu Plätzen, die die meisten Besucher nicht buchen können. Den Preis bespreche ich mit Ihnen, sobald ich Ihre Daten und den gewünschten Rahmen kenne.',
      },
    },
  },
  es: {
    intro: {
      stats: [
        { value: '24', label: 'campos en la isla' },
        { value: 'Privado', label: 'días para uno o grupos pequeños' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: 'Ambas opciones son privadas, las organizo personalmente y se juegan en algunos de los mejores campos de la isla. El precio se comparte cuando hablamos, no dentro de un sistema de reserva frío.',
      items: [
        {
          note: 'Le comparto el precio personalmente cuando conozca sus fechas, el tamaño del grupo y el campo adecuado para el día.',
          price: null,
        },
        {
          note: 'Para grupos hay una tarifa fija del día de Andy; el plan exacto y los green fees se confirman al hablar.',
          price: null,
        },
      ],
      multiDay: {
        body: 'Dos o tres días consecutivos entre Son Gual, Alcanada y más allá, con traslados privados, restaurantes elegidos con criterio y acceso a campos que la mayoría de los visitantes no puede reservar. El precio se comparte cuando conozca sus fechas y el tipo de viaje que quiere hacer.',
      },
    },
  },
  fr: {
    intro: {
      stats: [
        { value: '24', label: 'parcours sur l’île' },
        { value: 'Privé', label: 'journées solo et petits groupes' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: 'Les deux formats sont privés, organisés personnellement par moi, et joués sur l’un des plus beaux parcours de l’île. Le tarif est partagé lors de notre échange, pas affiché comme sur une simple plateforme de réservation.',
      items: [
        {
          note: 'Je vous communique le tarif personnellement une fois vos dates, la taille du groupe et le bon parcours définis.',
          price: null,
        },
        {
          note: "Pour les groupes, il y a un tarif fixe pour la journée d’Andy ; le déroulé précis et les green fees sont confirmés ensemble.",
          price: null,
        },
      ],
      multiDay: {
        body: 'Deux ou trois jours consécutifs entre Son Gual, Alcanada et au-delà, avec transferts privés, belles tables soigneusement choisies et accès à des parcours que la plupart des visiteurs ne peuvent pas réserver. Le tarif est communiqué une fois vos dates et le type de séjour définis.',
      },
    },
  },
  nl: {
    intro: {
      stats: [
        { value: '24', label: 'banen op het eiland' },
        { value: 'Privé', label: 'dagen voor solo en kleine groepen' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: 'Beide opties zijn privé, worden persoonlijk door mij begeleid en gespeeld op een van de beste banen van het eiland. De prijs deel ik wanneer we spreken, niet als een koud boekingsblok op de homepage.',
      items: [
        {
          note: 'Ik deel de prijs persoonlijk zodra ik uw data, groepsgrootte en de juiste baan voor die dag ken.',
          price: null,
        },
        {
          note: 'Voor groepen geldt een vaste dagprijs voor Andy; het precieze plan en de greenfees bevestigen we samen.',
          price: null,
        },
      ],
      multiDay: {
        body: 'Twee of drie opeenvolgende dagen langs Son Gual, Alcanada en meer, met privétransfers, zorgvuldig gekozen restaurants en toegang tot banen die de meeste bezoekers niet kunnen boeken. De prijs bespreek ik zodra ik uw data en het soort reis ken dat u wilt.',
      },
    },
  },
  sv: {
    intro: {
      stats: [
        { value: '24', label: 'banor på ön' },
        { value: 'Privat', label: 'dagar för solo och små grupper' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: 'Båda alternativen är privata, leds personligen av mig och spelas på någon av öns bästa banor. Priset delar jag när vi pratar, inte som en stel prisruta på startsidan.',
      items: [
        {
          note: 'Jag delar priset personligen när jag vet dina datum, gruppstorlek och vilken bana som passar bäst för dagen.',
          price: null,
        },
        {
          note: 'För grupper gäller ett fast dagspris för Andy; exakt upplägg och green fees bekräftas när vi pratar.',
          price: null,
        },
      ],
      multiDay: {
        body: 'Två eller tre dagar i följd över Son Gual, Alcanada och vidare, med privata transfers, noggrant utvalda restauranger och tillgång till banor som de flesta besökare inte kan boka. Priset delar jag när jag känner till dina datum och vilken typ av resa du vill ha.',
      },
    },
  },
  zh: {
    intro: {
      stats: [
        { value: '24', label: '岛上球场数量' },
        { value: '私人', label: '单人或小团体安排' },
        { value: 'PGA', label: 'Advanced Professional' },
      ],
    },
    packages: {
      intro: '两种方案都是私人定制，由我亲自陪同，也都会安排在岛上最值得打的球场之一。价格会在沟通后明确告知，而不是在首页像普通预订页一样直接摆出来。',
      items: [
        {
          note: '当我了解您的日期、人数以及最适合的球场之后，会亲自把价格发给您。',
          price: null,
        },
        {
          note: '小组方案按 Andy 的固定日费安排，具体球场与果岭费会在沟通后确认。',
          price: null,
        },
      ],
      multiDay: {
        body: '连续两到三天，安排 Son Gual、Alcanada 以及更多球场，包含私人接送、精心挑选的餐饮，以及多数访客订不到的球场机会。价格会在了解您的日期和想要的行程之后再与您确认。',
      },
    },
  },
}

for (const [locale, override] of Object.entries(HOME_NO_PRICE_OVERRIDES)) {
  HOME_CONTENT[locale] = deepMerge(HOME_CONTENT[locale], override)
}

const HOME_PACKAGE_ITEMS = {
  en: [
    {
      tier: 'Solo',
      eyebrow: 'A Day With Andy',
      name: 'Solo',
      features: [
        'Course matched to your game and handicap',
        'Tee time secured and fully handled',
        '18 holes with Andy',
        'On-course coaching during the round',
        'Post-round debrief',
      ],
      note: "Andy's day rate. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
      cta: 'Enquire',
      href: '/contact',
    },
    {
      tier: 'Group',
      eyebrow: 'A Day With Andy',
      name: 'Group',
      featured: true,
      features: [
        'Up to 3 players, one fixed day rate for Andy',
        'Course matched to your group',
        'Tee time secured and fully handled',
        '18 holes with Andy',
        'On-course coaching during the round',
      ],
      note: "Andy's fixed day rate for 2 or 3 golfers. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
      cta: 'Enquire',
      href: '/contact',
    },
    {
      tier: 'Signature Day',
      eyebrow: 'Signature Day',
      name: 'Signature Day',
      price: '€3,000+',
      signature: true,
      features: [
        'Course, tee time, and hosted golf day',
        'Lunch, private chef, or restaurant booking',
        'Private transfers and recovery time',
        'Caddy, videographer, and premium club hire options',
        'Post-round video analysis included',
        'Priority booking — your dates held first',
      ],
      note: 'Personalised from the ground up. Transfers, caddy, golf physio, private chef, videographer, and other add-ons can be planned around you before the day.',
      cta: 'Enquire',
      href: '/contact',
    },
    {
      tier: 'Trip Planning',
      eyebrow: 'Trip Planning',
      name: 'Plan Your Trip',
      price: 'Price on enquiry',
      featured: false,
      features: [
        'No searching apps or websites - tee times handled for you',
        'Courses picked to match your group, level, and budget',
        'Routing and number of rounds planned around your schedule',
        'Buggies, club hire, and transfers all arranged',
        'Restaurant and dining suggestions included',
        'One person to contact for the whole trip',
      ],
      note: '5% management fee applies to green fees and bookings. Confirmed after your first conversation.',
      cta: 'Enquire',
      href: '/contact',
    },
  ],
  de: [
    {
      tier: 'Solo',
      eyebrow: 'A Day With Andy',
      name: 'Solo',
      features: [
        'Platz passend zu Ihrem Spiel',
        'Startzeit gesichert',
        'Spielplan und Warm-up vor der Runde',
        '18 Löcher mit Andy',
        'Coaching auf dem Platz',
        'Auswertung nach der Runde',
      ],
      note: 'Greenfee und optionale Extras werden im Gespräch bestätigt.',
      cta: 'Preise ansehen',
    },
    {
      tier: 'Gruppe',
      eyebrow: 'A Day With Andy',
      name: 'Gruppe',
      featured: true,
      features: [
        'Bis zu 3 Spieler, ein fester Tagessatz für Andy',
        'Platz passend zur Gruppe',
        'Startzeit gesichert',
        'Spielplan und Warm-up vor der Runde',
        '18 Löcher mit Andy',
        'Coaching auf dem Platz',
      ],
      note: 'Greenfees werden gemeinsam im Gespräch bestätigt.',
      cta: 'Preise ansehen',
    },
    {
      tier: 'Das Signature-Erlebnis',
      eyebrow: 'The Signature Experience',
      name: 'Full Day',
      price: '€3,000+',
      signature: true,
      features: [
        'Alles im Voraus organisiert',
        'Platz, Startzeit und Coaching',
        'Caddie, Videograf oder Premium-Leihausrüstung möglich',
        'Michelin-Lunch und private Transfers verfügbar',
        'Andy koordiniert alles und bestätigt das Programm',
        'Vorrangige Buchung: Ihre Termine werden zuerst reserviert',
      ],
      note: 'Preis auf Anfrage.',
      cta: 'Preise ansehen',
    },
  ],
  es: [
    {
      tier: 'Solo',
      eyebrow: 'A Day With Andy',
      name: 'Solo',
      features: [
        'Campo elegido según su juego',
        'Hora de salida asegurada',
        'Plan de juego y calentamiento',
        '18 hoyos con Andy',
        'Coaching durante la vuelta',
        'Análisis posterior',
      ],
      note: 'Green fee y opcionales se confirman al hablar.',
      cta: 'Ver precios',
    },
    {
      tier: 'Grupo',
      eyebrow: 'A Day With Andy',
      name: 'Grupo',
      featured: true,
      features: [
        'Hasta 3 jugadores, tarifa fija por el día de Andy',
        'Campo elegido según el grupo',
        'Hora de salida asegurada',
        'Plan de juego y calentamiento',
        '18 hoyos con Andy',
        'Coaching durante la vuelta',
      ],
      note: 'Green fees se confirman al hablar.',
      cta: 'Ver precios',
    },
    {
      tier: 'La Experiencia Signature',
      eyebrow: 'The Signature Experience',
      name: 'Full Day',
      price: '€3,000+',
      signature: true,
      features: [
        'Todo organizado de antemano',
        'Campo, hora de salida y coaching',
        'Caddie, videógrafo o equipo premium disponibles',
        'Almuerzo Michelin y traslados privados disponibles',
        'Andy coordina todo y confirma el itinerario',
        'Reserva prioritaria: sus fechas se apartan primero',
      ],
      note: 'Precio bajo consulta.',
      cta: 'Ver precios',
    },
  ],
  fr: [
    {
      tier: 'Solo',
      eyebrow: 'A Day With Andy',
      name: 'Solo',
      features: [
        'Parcours choisi selon votre jeu',
        'Heure de départ sécurisée',
        'Plan de jeu et échauffement',
        '18 trous avec Andy',
        'Coaching pendant la partie',
        'Debriefing après la partie',
      ],
      note: 'Green fee et options confirmés lors de notre échange.',
      cta: 'Voir les tarifs',
    },
    {
      tier: 'Groupe',
      eyebrow: 'A Day With Andy',
      name: 'Groupe',
      featured: true,
      features: [
        'Jusqu\'à 3 joueurs, tarif fixe pour la journée d\'Andy',
        'Parcours choisi selon le groupe',
        'Heure de départ sécurisée',
        'Plan de jeu et échauffement',
        '18 trous avec Andy',
        'Coaching pendant la partie',
      ],
      note: 'Green fees confirmés lors de notre échange.',
      cta: 'Voir les tarifs',
    },
    {
      tier: 'The Signature Experience',
      eyebrow: 'The Signature Experience',
      name: 'Full Day',
      price: '€3,000+',
      signature: true,
      features: [
        'Tout organisé en amont',
        'Parcours, départ et coaching',
        'Caddie, vidéaste ou équipement premium disponibles',
        'Déjeuner Michelin et transferts privés disponibles',
        'Andy coordonne tout et confirme le programme',
        'Réservation prioritaire: vos dates réservées en premier',
      ],
      note: 'Tarif sur demande.',
      cta: 'Voir les tarifs',
    },
  ],
  nl: [
    {
      tier: 'Solo',
      eyebrow: 'A Day With Andy',
      name: 'Solo',
      features: [
        'Baan gekozen op basis van uw spel',
        'Starttijd vastgelegd',
        'Spelplan en warming-up',
        '18 holes met Andy',
        'Coaching tijdens de ronde',
        'Nabespreking na de ronde',
      ],
      note: 'Greenfee en optionele extras worden bevestigd wanneer we spreken.',
      cta: 'Bekijk prijzen',
    },
    {
      tier: 'Groep',
      eyebrow: 'A Day With Andy',
      name: 'Groep',
      featured: true,
      features: [
        'Tot 3 spelers, vaste dagprijs voor Andy',
        'Baan gekozen voor uw groep',
        'Starttijd vastgelegd',
        'Spelplan en warming-up',
        '18 holes met Andy',
        'Coaching tijdens de ronde',
      ],
      note: 'Greenfees bevestigd wanneer we spreken.',
      cta: 'Bekijk prijzen',
    },
    {
      tier: 'The Signature Experience',
      eyebrow: 'The Signature Experience',
      name: 'Full Day',
      price: '€3,000+',
      signature: true,
      features: [
        'Alles vooraf geregeld',
        'Baan, starttijd en coaching',
        'Caddie, videograaf of premium uitrusting mogelijk',
        'Michelin-lunch en privétransfer beschikbaar',
        'Andy coördineert alles en bevestigt het programma',
        'Prioriteitsboeking: uw data als eerste vastgelegd',
      ],
      note: 'Prijs op aanvraag.',
      cta: 'Bekijk prijzen',
    },
  ],
  sv: [
    {
      tier: 'Solo',
      eyebrow: 'A Day With Andy',
      name: 'Solo',
      features: [
        'Bana vald efter ditt spel',
        'Starttid säkrad',
        'Spelplan och uppvärmning',
        '18 hål med Andy',
        'Coaching under rundan',
        'Genomgång efter rundan',
      ],
      note: 'Green fee och tillval bekräftas när vi pratar.',
      cta: 'Se priser',
    },
    {
      tier: 'Grupp',
      eyebrow: 'A Day With Andy',
      name: 'Grupp',
      featured: true,
      features: [
        'Upp till 3 spelare, ett fast dagspris för Andy',
        'Bana vald för din grupp',
        'Starttid säkrad',
        'Spelplan och uppvärmning',
        '18 hål med Andy',
        'Coaching under rundan',
      ],
      note: 'Green fees bekräftas när vi pratar.',
      cta: 'Se priser',
    },
    {
      tier: 'The Signature Experience',
      eyebrow: 'The Signature Experience',
      name: 'Full Day',
      price: '€3,000+',
      signature: true,
      features: [
        'Allt ordnat i förväg',
        'Bana, starttid och coaching',
        'Caddie, videograf eller premiumutrustning möjlig',
        'Michelin-lunch och privata transfers tillgängliga',
        'Andy koordinerar allt och bekräftar programmet',
        'Prioritetsbokning: dina datum reserveras först',
      ],
      note: 'Pris på förfrågan.',
      cta: 'Se priser',
    },
  ],
  zh: [
    {
      tier: '单人',
      eyebrow: '与 Andy 同场',
      name: '单人',
      features: [
        '根据您的球技匹配球场',
        '开球时间已预订',
        '赛前计划与热身',
        '与 Andy 同打 18 洞',
        '球场上的实时指导',
        '赛后复盘',
      ],
      note: '果岭费及可选项目在沟通后确认。',
      cta: '查看价格',
    },
    {
      tier: '小组',
      eyebrow: '与 Andy 同场',
      name: '小组',
      featured: true,
      features: [
        '最多 3 位球手，Andy 收取固定日费',
        '根据小组情况匹配球场',
        '开球时间已预订',
        '赛前计划与热身',
        '与 Andy 同打 18 洞',
        '球场上的实时指导',
      ],
      note: '果岭费在沟通后单独确认。',
      cta: '查看价格',
    },
    {
      tier: '签名体验',
      eyebrow: '签名体验',
      name: '全天体验',
      price: '€3,000+',
      signature: true,
      features: [
        '所有安排提前落实',
        '球场、开球时间与指导',
        '球童、摄影师或高级球具租赁均可安排',
        '米其林级午餐和私人接送可选',
        'Andy 统筹安排并提前与您确认行程',
        '优先预订：您的日期优先锁定',
      ],
      note: '价格面议。',
      cta: '查看价格',
    },
  ],
}

const HOME_UI_COPY = {
  en: {
    coursesHint: 'Swipe or scroll to browse',
    newsletterEyebrow: 'THE NEWSLETTER',
    newsletterTitle: 'Golf insights delivered.',
    newsletterBody:
      'Course conditions updated as I play them. Which tee times are worth fighting for, where the greens are running fast, and what is worth knowing before you fly. Sent every two weeks, unsubscribe whenever.',
  },
  de: {
    coursesHint: 'Wischen oder scrollen, um zu schauen',
    newsletterEyebrow: 'DER NEWSLETTER',
    newsletterTitle: 'Golf-Einblicke direkt ins Postfach.',
    newsletterBody:
      'Platzbedingungen, sobald ich sie spiele. Welche Startzeiten es wert sind, wofür die Grüns schnell laufen und was Sie vor dem Abflug wissen sollten. Alle zwei Wochen, jederzeit abbestellbar.',
  },
  es: {
    coursesHint: 'Deslice o haga scroll para ver más',
    newsletterEyebrow: 'BOLETÍN',
    newsletterTitle: 'Ideas de golf en su bandeja de entrada.',
    newsletterBody:
      'Condiciones actualizadas a medida que juego. Qué tee times merecen la pena, dónde ruedan rápidos los greens y qué conviene saber antes de volar. Enviado cada dos semanas, puede darse de baja cuando quiera.',
  },
  fr: {
    coursesHint: 'Faites défiler ou glissez pour parcourir',
    newsletterEyebrow: 'LA NEWSLETTER',
    newsletterTitle: 'Des infos golf livrées régulièrement.',
    newsletterBody:
      'Des notes de parcours mises à jour au fil de mes parties. Les heures de départ qui valent le coup, les greens qui roulent vite et ce qu’il faut savoir avant de prendre l’avion. Toutes les deux semaines, désinscription à tout moment.',
  },
  nl: {
    coursesHint: 'Veeg of scroll om te bekijken',
    newsletterEyebrow: 'DE NIEUWSBRIEF',
    newsletterTitle: 'Golfinzichten in uw inbox.',
    newsletterBody:
      'Baancondities zodra ik ze speel. Welke starttijden de moeite waard zijn, waar de greens snel lopen en wat u vóór vertrek wilt weten. Eens per twee weken, op elk moment uit te schakelen.',
  },
  sv: {
    coursesHint: 'Svep eller scrolla för att bläddra',
    newsletterEyebrow: 'NYHETSBREVET',
    newsletterTitle: 'Golfinsikter direkt till dig.',
    newsletterBody:
      'Banförhållanden uppdaterade när jag spelar dem. Vilka starttider som är värda att jaga, var greenerna rullar snabbt och vad som är bra att veta innan du flyger. Varannan vecka, avregistrera när du vill.',
  },
  zh: {
    coursesHint: '左右滑动或滚动浏览',
    newsletterEyebrow: '电子简报',
    newsletterTitle: '高尔夫洞见，定期送达。',
    newsletterBody:
      '我会在打球时同步更新球场状况。哪些开球时间值得争取、果岭滚速有多快、出发前哪些信息最重要。每两周发送一次，随时可退订。',
  },
}

const HOME_EXTRA_PACKAGE_ITEM = {
  en: {
    tier: 'Trip Planning',
    eyebrow: 'Trip Planning',
    name: 'Plan Your Trip',
    price: 'Price on enquiry',
    featured: true,
    features: [
      'No searching apps or websites - tee times handled for you',
      'Courses picked to match your group, level, and budget',
      'Routing and number of rounds planned around your schedule',
      'Buggies, club hire, and transfers all arranged',
      'Restaurant and dining suggestions included',
      'One person to contact for the whole trip',
    ],
    note: '5% management fee applies to green fees and bookings. Confirmed after your first conversation.',
    cta: 'Enquire',
    href: '/contact',
  },
  de: {
    tier: 'Reiseplanung',
    eyebrow: 'Reiseplanung',
    name: 'Ihre Reise planen',
    price: 'Preis auf Anfrage',
    featured: true,
    features: [
      'Keine Apps oder Websites durchsuchen - Abschlagszeiten werden für Sie organisiert',
      'Plätze passend zu Gruppe, Spielstärke und Budget',
      'Route und Rundenzahl passend zu Ihrem Zeitplan',
      'Buggys, Schlägerverleih und Transfers organisiert',
      'Restaurant- und Essensvorschläge inklusive',
      'Eine feste Ansprechperson für die gesamte Reise',
    ],
    note: '5 % Verwaltungsgebühr auf Greenfees und Buchungen. Wird nach dem ersten Gespräch bestätigt.',
    cta: 'Anfragen',
    href: '/de/contact',
  },
  es: {
    tier: 'Planificación del viaje',
    eyebrow: 'Planificación del viaje',
    name: 'Planifique su viaje',
    price: 'Precio a consultar',
    featured: true,
    features: [
      'Sin buscar en apps ni webs - yo me encargo de los tee times',
      'Campos elegidos según su grupo, nivel y presupuesto',
      'Ruta y número de vueltas planificados según su calendario',
      'Buggies, alquiler de palos y traslados organizados',
      'Sugerencias de restaurantes y comidas incluidas',
      'Una sola persona para todo el viaje',
    ],
    note: 'Se aplica una comisión de gestión del 5 % sobre green fees y reservas. Se confirma tras la primera conversación.',
    cta: 'Consultar',
    href: '/es/contact',
  },
  fr: {
    tier: 'Planification du séjour',
    eyebrow: 'Planification du séjour',
    name: 'Planifiez votre séjour',
    price: 'Prix sur demande',
    featured: true,
    features: [
      'Pas d’apps ni de sites à chercher - les heures de départ sont gérées pour vous',
      'Parcours choisis selon votre groupe, votre niveau et votre budget',
      'Itinéraire et nombre de tours pensés selon votre planning',
      'Buggies, location de clubs et transferts organisés',
      'Suggestions de restaurants et de repas incluses',
      'Une seule personne à contacter pour tout le voyage',
    ],
    note: 'Frais de gestion de 5 % sur les green fees et les réservations. Confirmé après votre premier échange.',
    cta: 'Demander',
    href: '/fr/contact',
  },
  nl: {
    tier: 'Reisplanning',
    eyebrow: 'Reisplanning',
    name: 'Plan uw reis',
    price: 'Prijs op aanvraag',
    featured: true,
    features: [
      'Geen apps of websites zoeken - tee times worden voor u geregeld',
      'Baankeuze afgestemd op uw groep, niveau en budget',
      'Route en aantal rondes gepland rond uw schema',
      'Buggies, clubhuur en transfers geregeld',
      'Restaurant- en diningtips inbegrepen',
      'Eén aanspreekpunt voor de hele reis',
    ],
    note: 'Er geldt een beheersfee van 5 % op greenfees en boekingen. Bevestigd na het eerste gesprek.',
    cta: 'Aanvragen',
    href: '/nl/contact',
  },
  sv: {
    tier: 'Reseplanering',
    eyebrow: 'Reseplanering',
    name: 'Planera din resa',
    price: 'Pris på förfrågan',
    featured: true,
    features: [
      'Inga appar eller webbplatser att leta i - tee times ordnas åt dig',
      'Banor valda efter grupp, nivå och budget',
      'Rutt och antal rundor planerade efter ditt schema',
      'Golfbil, hyrklubbor och transfers ordnade',
      'Restaurang- och matförslag ingår',
      'En person att kontakta för hela resan',
    ],
    note: '5 % administrationsavgift tillkommer på greenfee och bokningar. Bekräftas efter ert första samtal.',
    cta: 'Förfrågan',
    href: '/sv/contact',
  },
  zh: {
    tier: '行程规划',
    eyebrow: '行程规划',
    name: '规划您的行程',
    price: '咨询定价',
    featured: true,
    features: [
      '不用再翻应用或网站 - 开球时间我来安排',
      '根据您的团队、水平和预算挑选球场',
      '按您的行程安排路线和打球轮次',
      '球车、球杆租赁和接送全部协调',
      '附带餐厅与用餐建议',
      '整个行程只联系一个人',
    ],
    note: '果岭费和预订需收取 5% 管理费。第一次沟通后确认。',
    cta: '咨询',
    href: '/zh/contact',
  },
}

function normalizeHomePackageItems(locale, items = []) {
  const englishItems = HOME_PACKAGE_ITEMS.en
  const localizedItems = []

  for (let index = 0; index < englishItems.length; index += 1) {
    const englishItem = englishItems[index]
    const item = items[index] || (index === englishItems.length - 1 ? HOME_EXTRA_PACKAGE_ITEM[locale] : englishItem)

    localizedItems.push({
      ...item,
      features: Array.isArray(item.features)
        ? item.features.slice(0, englishItem.features.length)
        : item.features,
    })
  }

  return localizedItems
}

const HOME_FEATURED_BADGE_MAP = {
  de: { 'Expert Pick': 'Expertenwahl', 'Best in Spain 2025': 'Bester Platz Spaniens 2025' },
  es: { 'Expert Pick': 'Selección personal', 'Best in Spain 2025': 'Mejor campo de España 2025' },
  fr: { 'Expert Pick': 'Choix d’expert', 'Best in Spain 2025': 'Meilleur d’Espagne 2025' },
  nl: { 'Expert Pick': 'Expertkeuze', 'Best in Spain 2025': 'Beste van Spanje 2025' },
  sv: { 'Expert Pick': 'Expertval', 'Best in Spain 2025': 'Bäst i Spanien 2025' },
  zh: { 'Expert Pick': '专家推荐', 'Best in Spain 2025': '2025 西班牙最佳' },
}

const HOME_FEATURED_COURSE_CONFIG = [
  {
    courseName: 'Golf Son Gual',
    displayName: 'Son Gual',
    cls: 'course-card--1',
    badge: 'Expert Pick',
    region: 'Palma · 11 km from city',
    metaLead: 'Championship',
    stars: '★★★★★',
    difficulty: '9/10 Difficulty',
    excerpt: "Thomas Himmel's 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.",
    img: '/images/son-gual.webp',
  },
  {
    courseName: 'Club de Golf Alcanada',
    displayName: 'Alcanada',
    cls: 'course-card--2',
    badge: 'Expert Pick',
    region: 'Alcudia · North Mallorca',
    metaLead: 'Coastal',
    stars: '★★★★★',
    difficulty: '7/10 Difficulty',
    excerpt: 'Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.',
    img: '/images/alcanada.webp',
  },
  {
    courseName: 'Son Muntaner',
    displayName: 'Son Muntaner',
    cls: 'course-card--3',
    badge: 'Best in Spain 2025',
    region: 'Son Vida · Palma',
    metaLead: 'DP World Tour',
    stars: '★★★★★',
    difficulty: '7/10 Difficulty',
    excerpt: 'Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.',
    img: '/images/son-muntaner.webp',
  },
  {
    courseName: 'Golf Santa Ponsa 1',
    displayName: 'Santa Ponsa 1',
    cls: 'course-card--4',
    badge: null,
    region: 'Santa Ponsa · Southwest',
    metaLead: 'DP World Tour host',
    stars: '★★★★☆',
    difficulty: '8/10 Difficulty',
    excerpt: 'Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.',
    img: '/images/santa-ponsa.webp',
  },
  {
    courseName: 'Golf de Andratx',
    displayName: 'Golf de Andratx',
    cls: 'course-card--5',
    badge: null,
    region: 'Camp de Mar · Southwest',
    metaLead: 'Most challenging',
    stars: '★★★★☆',
    difficulty: '9/10 Difficulty',
    excerpt: 'The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.',
    img: '/images/andratx.webp',
  },
]

const HOME_FEATURED_REPLACEMENTS = {
  de: [
    ['Palma · 11 km from city', 'Palma · 11 km von der Stadt'],
    ['Alcudia · North Mallorca', 'Alcúdia · Nordmallorca'],
    ['Son Vida · Palma', 'Son Vida · Palma'],
    ['Santa Ponsa · Southwest', 'Santa Ponsa · Südwesten'],
    ['Camp de Mar · Southwest', 'Camp de Mar · Südwesten'],
    ['Championship', 'Championship'],
    ['Difficulty', 'Schwierigkeit'],
    ['Thomas Himmel\'s 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.', 'Thomas Himmels Design von 2007 lebt in seinem eigenen Windsystem. Der Schlussabschnitt von Loch 15 bis 18 gehört zu den stärksten Passagen im europäischen Golf.'],
    ['Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.', 'Robert Trent Jones Jr. von seiner schönsten Seite. Der Leuchtturm bleibt fast die ganze Runde im Blick, und das Setting gehört zu den schönsten in Spanien.'],
    ['Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.', 'Bei den World Golf Awards 2025 als bester Golfplatz Spaniens ausgezeichnet, mit Blick über die Bucht von Palma und einem tausendjährigen Olivenbaum an Loch 15.'],
    ['Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.', 'Austragungsort der DP World Tour Mallorca Open 2021. Lang, großzügig vom Tee und einer der Plätze auf der Insel, auf denen man den Driver frei schwingen kann.'],
    ['The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', 'Loch 6 ist mit 609 Metern das längste Par 5 Spaniens. Kompromisslos in die Küstenhügel gebaut. Nehmen Sie ein paar Bälle mehr mit und lassen Sie das Ego im Bag.'],
  ],
  es: [
    ['Palma · 11 km from city', 'Palma · 11 km de la ciudad'],
    ['Alcudia · North Mallorca', 'Alcúdia · norte de Mallorca'],
    ['Son Vida · Palma', 'Son Vida · Palma'],
    ['Santa Ponsa · Southwest', 'Santa Ponsa · suroeste'],
    ['Camp de Mar · Southwest', 'Camp de Mar · suroeste'],
    ['Championship', 'Championship'],
    ['Difficulty', 'Dificultad'],
    ['Thomas Himmel\'s 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.', 'El diseño de Thomas Himmel de 2007 vive dentro de su propio sistema de viento. El tramo final del 15 al 18 está entre lo mejor del golf europeo.'],
    ['Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.', 'Robert Trent Jones Jr. en su versión más escénica. El faro sigue visible durante gran parte de la vuelta y el entorno es de los más bonitos de España.'],
    ['Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.', 'Nombrado Mejor Campo de Golf de España en los World Golf Awards 2025, con vistas a la bahía de Palma y un olivo milenario en el hoyo 15.'],
    ['Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.', 'Sede del Mallorca Open del DP World Tour en 2021. Largo, generoso desde el tee y uno de los lugares más fáciles de la isla para soltar el driver con libertad.'],
    ['The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', 'El hoyo 6 es el par 5 más largo de España con 609 metros. Trazado en las colinas costeras sin concesiones. Traiga bolas de sobra y deje el ego en casa.'],
  ],
  fr: [
    ['Palma · 11 km from city', 'Palma · 11 km du centre'],
    ['Alcudia · North Mallorca', 'Alcúdia · nord de Majorque'],
    ['Son Vida · Palma', 'Son Vida · Palma'],
    ['Santa Ponsa · Southwest', 'Santa Ponsa · sud-ouest'],
    ['Camp de Mar · Southwest', 'Camp de Mar · sud-ouest'],
    ['Championship', 'Championship'],
    ['Difficulty', 'de difficulté'],
    ['Thomas Himmel\'s 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.', 'Le dessin de Thomas Himmel, signé en 2007, vit dans son propre système de vent. Le final du 15 au 18 compte parmi les meilleures séquences du golf européen.'],
    ['Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.', 'Robert Trent Jones Jr. dans sa version la plus spectaculaire. Le phare reste visible pendant une grande partie du parcours, dans l’un des cadres les plus beaux d’Espagne.'],
    ['Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.', 'Élu meilleur parcours d’Espagne aux World Golf Awards 2025, avec vue sur la baie de Palma et un olivier millénaire au 15.'],
    ['Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.', 'Hôte du Mallorca Open du DP World Tour en 2021. Long, généreux au départ, et l’un des endroits les plus simples de l’île pour laisser partir le driver.'],
    ['The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', 'Le 6 est le plus long par 5 d’Espagne avec 609 mètres. Tracé dans les collines côtières sans concession. Prévoyez quelques balles de plus et laissez l’ego de côté.'],
  ],
  nl: [
    ['Palma · 11 km from city', 'Palma · 11 km van de stad'],
    ['Alcudia · North Mallorca', 'Alcúdia · noordelijk Mallorca'],
    ['Son Vida · Palma', 'Son Vida · Palma'],
    ['Santa Ponsa · Southwest', 'Santa Ponsa · zuidwesten'],
    ['Camp de Mar · Southwest', 'Camp de Mar · zuidwesten'],
    ['Championship', 'Championship'],
    ['Difficulty', 'moeilijkheid'],
    ['Thomas Himmel\'s 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.', 'Het ontwerp van Thomas Himmel uit 2007 leeft in zijn eigen windpatroon. De slotreeks van hole 15 tot en met 18 hoort bij het beste wat Europees golf te bieden heeft.'],
    ['Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.', 'Robert Trent Jones Jr. op zijn meest schilderachtig. De vuurtoren blijft bijna de hele ronde in beeld en het decor hoort bij het mooiste van Spanje.'],
    ['Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.', 'Uitgeroepen tot beste golfbaan van Spanje bij de World Golf Awards 2025, met uitzicht over de baai van Palma en een duizend jaar oude olijfboom bij hole 15.'],
    ['Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.', 'Gastheer van de DP World Tour Mallorca Open in 2021. Lang, royaal vanaf de tee en een van de makkelijkste banen op het eiland om vrijuit de driver te slaan.'],
    ['The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', 'Hole 6 is met 609 meter de langste par 5 van Spanje. Zonder compromissen in de kustheuvels gelegd. Neem extra ballen mee en laat het ego thuis.'],
  ],
  sv: [
    ['Palma · 11 km from city', 'Palma · 11 km från stan'],
    ['Alcudia · North Mallorca', 'Alcúdia · norra Mallorca'],
    ['Son Vida · Palma', 'Son Vida · Palma'],
    ['Santa Ponsa · Southwest', 'Santa Ponsa · sydväst'],
    ['Camp de Mar · Southwest', 'Camp de Mar · sydväst'],
    ['Championship', 'Championship'],
    ['Difficulty', 'svårighet'],
    ['Thomas Himmel\'s 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.', 'Thomas Himmels bana från 2007 lever i sitt eget vindsystem. Slutsträckan från hål 15 till 18 hör till det bästa i europeisk golf.'],
    ['Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.', 'Robert Trent Jones Jr. när han är som mest naturskön. Fyren syns under större delen av rundan och miljön hör till det vackraste i Spanien.'],
    ['Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.', 'Utsedd till Spaniens bästa golfbana vid World Golf Awards 2025, med utsikt över Palmabukten och ett tusenårigt olivträd vid hål 15.'],
    ['Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.', 'Värd för DP World Tour Mallorca Open 2021. Lång, generös från tee och en av de lättaste platserna på ön att slå driver med fri känsla.'],
    ['The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', 'Hål 6 är Spaniens längsta par 5 på 609 meter. Inritad i kustkullarna utan kompromisser. Ta med extra bollar och lämna egot hemma.'],
  ],
  zh: [
    ['Palma · 11 km from city', '帕尔马 · 距市区 11 公里'],
    ['Alcudia · North Mallorca', '阿尔库迪亚 · 马略卡北部'],
    ['Son Vida · Palma', '松维达 · 帕尔马'],
    ['Santa Ponsa · Southwest', '圣蓬萨 · 西南部'],
    ['Camp de Mar · Southwest', '坎普德马尔 · 西南部'],
    ['Championship', '锦标赛级'],
    ['Difficulty', '难度'],
    ['Thomas Himmel\'s 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.', 'Thomas Himmel 于 2007 年设计的这座球场有自己独特的风向体系。第 15 到 18 洞的收官段，是欧洲高尔夫里最精彩的一段之一。'],
    ['Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.', '这是 Robert Trent Jones Jr. 最具风景感的一笔。大半轮都能看见灯塔，整体景观也是西班牙最漂亮的之一。'],
    ['Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.', '在 2025 年世界高尔夫大奖中被评为西班牙最佳球场，能俯瞰帕尔马湾，第 15 洞旁还有一棵千年橄榄树。'],
    ['Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.', '曾举办 2021 年 DP World Tour Mallorca Open。球场长度充足，开球区也相对宽容，是岛上最适合放开挥 driver 的地方之一。'],
    ['The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.', '第 6 洞是西班牙最长的五杆洞，长达 609 米。球场毫不妥协地嵌入海岸丘陵之中。多带几颗球，也别带太多自尊。'],
  ],
}

function localizeHomeFeaturedItems(items = [], locale = 'en') {
  if (locale === 'en') return items
  const badgeMap = HOME_FEATURED_BADGE_MAP[locale] || {}
  const replacements = HOME_FEATURED_REPLACEMENTS[locale] || []

  const translateText = (value) => replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value)

  return items.map((item) => ({
    ...item,
    badge: item.badge ? (badgeMap[item.badge] || translateText(item.badge)) : item.badge,
    region: translateText(item.region),
    meta: item.meta.map((entry) => translateText(entry)),
    difficulty: translateText(item.difficulty),
    excerpt: translateText(item.excerpt),
  }))
}

function getFeaturedHomeCourseItems() {
  return HOME_FEATURED_COURSE_CONFIG.map((item) => {
    const course = findCourseByName(item.courseName)
    const parPill = course?.pills?.find((pill) => /Par\s+\d+/i.test(pill))?.replace(/^\*\s*/, '')
    const meta = course ? getCoursePriceMeta(course) : { peakPrice: null, lowPrice: null }
    const priceLabel =
      typeof meta.peakPrice === 'number' && typeof meta.lowPrice === 'number'
        ? `€${meta.lowPrice}-${meta.peakPrice}`
        : typeof meta.peakPrice === 'number'
          ? `€${meta.peakPrice}`
          : null

    return {
      cls: item.cls,
      badge: item.badge,
      region: item.region,
      name: item.displayName,
      meta: [item.metaLead, parPill, priceLabel].filter(Boolean),
      stars: item.stars,
      difficulty: item.difficulty,
      excerpt: item.excerpt,
      img: item.img,
      href: getCourseDestination(item.displayName, 'en'),
    }
  })
}

export function getHomeContent(locale = 'en') {
  const content = HOME_CONTENT[locale] || HOME_CONTENT.en
  const localizedPackageItems = HOME_PACKAGE_ITEMS[locale] || HOME_PACKAGE_ITEMS.en
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)
  const featuredCourseItems = getFeaturedHomeCourseItems()
  // Keep the visible package prices aligned with the shared offer library.
  const packages = content.packages
    ? {
        ...content.packages,
        items: normalizeHomePackageItems(locale, localizedPackageItems).map((item, index) => ({
          ...item,
          href: item.href || content.packages.items?.[index]?.href || (locale === 'en' ? '/contact' : `/${locale}/contact`),
          price:
            item.tier === soloOffer.shortLabel
              ? soloOffer.priceDisplay
              : item.tier === groupOffer.shortLabel
                ? groupOffer.priceDisplay
                : item.price ?? null,
        })),
        multiDay: content.packages.multiDay
          ? {
              ...content.packages.multiDay,
              body: getHomeMultiDayBody(locale),
            }
          : content.packages.multiDay,
      }
    : content.packages

  if (locale === 'en') {
    return {
      ...content,
      ui: HOME_UI_COPY.en,
      packages,
      courses: content.courses
        ? {
            ...content.courses,
            items: featuredCourseItems,
          }
        : content.courses,
    }
  }

  return {
    ...content,
    ui: HOME_UI_COPY[locale] || HOME_UI_COPY.en,
    experience: content.experience
      ? {
          ...content.experience,
          features: HOME_CONTENT.en.experience?.features?.length ? content.experience.features : [],
        }
      : content.experience,
    packages,
    courses: content.courses
      ? {
          ...content.courses,
          items: localizeHomeFeaturedItems(featuredCourseItems, locale),
        }
      : content.courses,
  }
}

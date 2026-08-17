import { EN_ONLY_ARTICLE_SLUGS, SITE_ORIGIN, buildLocalePath, getHreflangCode } from './site.js'
import { getLocalizedGuideArticleContent } from './guide-article-content-localized.js'
import { mergeGuideContent } from './guide-content-localization.js'

export const GUIDE_ARTICLE_CONTENT = {
  'golf-cost-mallorca': {
    metadata: {
      title: 'Mallorca Golf Green Fees 2026 (€55–€260)',
      description:
        'A round in Mallorca costs €55–€260, most €90–€150. Cheapest Pollença (€55), priciest Son Muntaner (€260). Club hire from €30, buggy €20.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-cost-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/courses/palma-pitch-putt.webp',
      imageAlt: 'Golf Cost in Mallorca 2026: Green Fees €55–€260, Club Hire & What to Budget',
    },
    meta: {
      badge: 'Green Fees',
      badgeGold: false,
      readTime: '5 min read',
      updated: 'March 2026',
      title: 'Golf Cost in Mallorca (2026)',
      intro:
        'Public 18-hole golf in Mallorca runs from about €55 at the value end up to around €260 at Son Muntaner in peak season. Here is the honest 2026 breakdown from someone who plays here most weeks.',
      related: [
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'golf-club-hire-mallorca', title: 'Golf Club Hire in Mallorca' },
        { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          "Golf in Mallorca ranges from genuinely affordable to seriously expensive - the gap between them is bigger than most visitors expect. Here's an honest breakdown for 2026, from someone who plays here most weeks. For a full rundown of every course on the island, see the <a href='/golf-courses'>Mallorca golf courses guide</a>. Incredible value compared to the prices of golf in Shanghai where I spent 11 years, but costs can creep up if you don't plan well.",
      },
      { type: 'heading', text: 'Green Fees' },
      { type: 'subheading', text: 'Budget (nine-hole, pitch and putt)' },
      {
        type: 'paragraph',
        text:
          '€20 for 9 holes or €30 for 18 holes at Palma Pitch & Putt (club hire extra), or around €65-75 if you want the cheapest full-size options such as Golf Pollença in the quieter months. Palma Pitch & Putt is a proper short-course option: great for beginners, good fun for families or mixed groups, and a low-pressure way to get clubs in hand without committing to a full round.',
      },
      {
        type: 'image',
        src: '/images/courses/palma-pitch-putt.webp',
        alt: 'Palma Pitch and Putt',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Palma Pitch & Putt - one of the lower-cost ways to play',
      },
      { type: 'subheading', text: 'Mid-range 18-hole courses' },
      {
        type: 'paragraph',
        text:
          "Roughly €75-145 depending on course, month, and tee time. Bendinat, Son Termes, Capdepera, Canyamel, Son Servera, Vall d'Or, Maioris, Santa Ponsa 1, Pula, and the Son Antem courses all live in this middle bracket at some point in the year. These are proper courses in good condition, not afterthought golf.",
      },
      { type: 'subheading', text: 'Premium courses' },
      {
        type: 'paragraph',
        text:
          'Son Gual sits around €115-165. Alcanada runs roughly €115-230. Son Muntaner reaches around €260 at peak and drops to around €125 in the value window. T Golf Calvià can push to around €210, and Son Vida to around €190. The top end in Mallorca is higher than many older guides suggest.',
      },
      {
        type: 'paragraph',
        text:
          "Around half the island now uses dynamic pricing, including the Arabella courses, both T Golf venues, Pula, Capdepera, and Son Antem East and West. The practical rule is simple: the earlier you book, the better your chance of locking in the lower end of the range. Black Friday, winter, and multi-round partner offers can still save real money if you time them well.",
      },
      {
        type: 'image',
        src: '/images/blog-golf-cost/Son Gual.webp',
        alt: 'Son Gual Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Son Gual - Premium course, €115-€165',
      },
      {
        type: 'pull',
        text:
          'Son Gual at €165 is less than an equivalent course in England would charge. Mid-range courses here offer good value by British standards.',
      },
      { type: 'subheading', text: 'Best value months' },
      {
        type: 'paragraph',
        text:
          'June-August and December-February are usually the value windows. Peak pricing is normally mid-March to early June and mid-September to mid-November. That matters because a lot of older Mallorca golf advice still wrongly treats October to April as the cheap season.',
      },
      { type: 'heading', text: 'Club Hire' },
      {
        type: 'paragraph',
        text:
          'Course hire sets: typically €35-50 at the pro shop. Variable quality.',
      },
      {
        type: 'paragraph',
        text:
          'Specialist hire companies deliver to your hotel, airport, or course. Budget sets from around €25 per day; current-season premium options from €55 for 2 days and then discount kicks in for longer trips and around €140 for 10 days. Weekly rates save 20-30%. Book at least a week in advance for the best availability, the right clubs for you, and early-booking discounts. If club hire matters to your trip, read the full club hire guide as well because the companies, pricing bands, and delivery setups vary more than most people expect.',
      },
      { type: 'heading', text: 'Buggies and Trolleys' },
      {
        type: 'paragraph',
        text:
          'Golf buggies run €35-48 depending on the course. Son Gual charges €45, Alcanada €48 - the GPS models give you yardages and hole maps. Pull trolleys €6-8. Electric trolleys €14-25.',
      },
      {
        type: 'paragraph',
        text:
          'At hillier courses like Bendinat, Andratx or Son Vida, a buggy earns its cost. At the flatter courses (Son Antem, Maioris, Santa Ponsa and more), a trolley can be fine if you fancy the exercise.',
      },
      {
        type: 'image',
        src: '/images/blog-golf-cost/T Golf Calvia Buggies.webp',
        alt: 'Golf buggies in use',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Buggies available at €35-€48 per round',
      },
      { type: 'heading', text: 'Food and Drink' },
      {
        type: 'paragraph',
        text:
          "One consistent surprise for visitors: the food is genuinely good. Son Gual's restaurant has views across the Bay of Palma that justify a long lunch. Alcanada's terrace is one of the best places on the island after a round. Great food options at Andratx and Pula too. Budget €20-40 per person.",
      },
      { type: 'heading', text: 'Sample Full-Day Costs' },
      {
        type: 'list',
        items: [
          { label: 'Relaxed day', text: '(Son Termes, trolley, lunch): approx. €110 per person.' },
          { label: 'Mid-range day', text: '(Bendinat, trolley, lunch): approx. €160 peak / €110 low season.' },
          { label: 'Premium day at Son Gual', text: '(peak, buggy, lunch): approx. €245 per person.' },
          { label: 'Premium day at Alcanada', text: '(peak, buggy, lunch): approx. €300 per person.' },
        ],
      },
      { type: 'heading', text: 'Is Mallorca Expensive?' },
      {
        type: 'paragraph',
        text:
          'Compared to the UK: no. Many cheaper options than other golfing destinations in Europe. Mid-range courses here offer outstanding value by British standards. Compared to the Algarve: similar at the top end, slightly cheaper in the middle. Compared to the Costa del Sol: broadly comparable at premium level.',
      },
      {
        type: 'cta',
        text: 'Want all the green fees, buggy costs, and seasonal pricing in one place? Download the free 2026 Cost Guide PDF.',
        linkLabel: 'Get the free Cost Guide →',
        href: '/guides/cost-guide',
        internal: true,
      },
      {
        type: 'cta',
        text: 'Want a full day arranged - course, tee time, coaching, and everything handled before you arrive?',
        linkLabel: 'Book a Play With A Pro day in Mallorca →',
        href: '/play-with-a-pro',
      },
    ],
  },
  'golf-trip-planning-mallorca': {
    metadata: {
      title: 'Plan Your Mallorca Golf Trip (2026)',
      description:
        'Plan your Mallorca golf trip: courses, when to go, transport, clubs, off-course activities. By a PGA pro on the island.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/courses/bendinat.webp',
      imageAlt: 'How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)',
    },
    meta: {
      badge: 'Trip Planning',
      badgeGold: false,
      readTime: '7 min read',
      updated: 'March 2026',
      title: 'How to Plan the Perfect Golf Trip to Mallorca | Courses, Base & Tee Times',
      intro:
        "No tourism copy, no padding. Which courses, when to go, how many rounds, getting around, and what to do when you're not on the course.",
      related: [
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        { slug: 'golf-club-hire-mallorca', title: 'Golf Club Hire in Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          "I moved to Mallorca in March 2025 and have been playing golf here every week since. Before that, eleven years in Shanghai, a city where golfers often think nothing of spending up to €500 on a single hour long lesson, where access to a course often means a membership costing more than most people's annual salary. Moving here felt like arriving somewhere that had quietly been one of Europe's best-kept golf secrets.",
      },
      {
        type: 'paragraph',
        text: "This is what I'd tell a friend planning a trip without tourism copy and extra fluff.",
      },
      { type: 'heading', text: 'When to Go' },
      {
        type: 'paragraph',
        text:
          'If you want the best conditions, aim for the spring and autumn peak windows. If you want better value, look more closely at June-August and December-February. October is still one of my favourite months to play, but it is no longer the cheap option.',
      },
      {
        type: 'paragraph',
        text:
          'Late spring is excellent but expensive. Summer is hot, but it is also when many courses soften pricing materially, especially if you play early or go twilight. Winter is quieter, cooler, and often one of the best-value times to be here.',
      },
      { type: 'heading', text: 'How Many Rounds?' },
      {
        type: 'paragraph',
        text:
          'One round per day is comfortable for most golfers - the courses are demanding, and summer heat is real. In cooler times, 36 holes a day is possible if you are that keen, but most golf-only visitors on a 5-7-day trip play 4-5 rounds.',
      },
      { type: 'heading', text: 'Which Courses to Prioritise' },
      {
        type: 'paragraph',
        text: 'Serious golfers, limited time: Son Gual and Alcanada. These are my two if I had one week and two rounds.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Son Gual.webp',
        alt: 'Son Gual Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Son Gual - Must-play course for serious golfers',
      },
      {
        type: 'paragraph',
        text: 'DP World Tour experience: Son Muntaner (Arabella). Best in Spain 2025.',
      },
      {
        type: 'paragraph',
        text: 'Scenic east coast: Canyamel and Pula. Worth combining with a night in Artà or Capdepera town.',
      },
      { type: 'paragraph', text: 'Hardest test: Golf de Andratx, southwest.' },
      {
        type: 'paragraph',
        text: 'Beginners or mixed groups: Son Quint (Arabella), Son Antem East, or shorter courses.',
      },
      {
        type: 'pull',
        text:
          'With a week on the island, the quality runs deeper than most visitors expect.',
      },
      { type: 'heading', text: 'Getting Around' },
      {
        type: 'paragraph',
        text:
          "A hire car is the most practical option. Public transport doesn't serve many of the best courses well. Roads are good; traffic is manageable outside peak summer.",
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Mallorca Car Hire.png',
        alt: 'Car hire in Mallorca',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'A hire car is the simplest way to reach the best courses',
        captionSize: '0.9rem',
        captionMargin: '-0.5rem 0 0 0',
      },
      { type: 'heading', text: 'Clubs' },
      {
        type: 'paragraph',
        text:
          'Bring your own for three rounds or more. Hire for a mixed holiday with one or two rounds planned. See the club hire guide for recommendations on the best companies, what they charge, and which setups are worth using. There are some great options that deliver to your hotel or course and make life easier than lugging a travel bag through an airport and praying for no snapped shafts.',
      },
      { type: 'heading', text: 'What Else to Do' },
      {
        type: 'paragraph',
        text:
          'Old town Palma is genuinely beautiful. The northwest coast (Valldemossa, Deià, and Sóller) is some of the most dramatic scenery on the island. The northeast is quieter and wilder. The food - local seafood and island wine - is excellent.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Old Town Palma.webp',
        alt: 'Old Town Palma',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Old Town Palma - worth a day away from the course',
        captionSize: '0.9rem',
        captionMargin: '-0.5rem 0 0 0',
      },
      {
        type: 'paragraph',
        text:
          "A golf trip that doesn't include at least one long lunch somewhere unexpected is only doing half the job. Build in at least one afternoon where you don't have a tee time and explore. The golf might be the reason to come but the rest will make you want to come back soon.",
      },
      {
        type: 'splitImages',
        items: [
          {
            src: '/images/blog-trip-planning/Valldemossa.avif',
            alt: 'Valldemossa',
            caption: 'Valldemossa - dramatic northwest coast',
          },
          {
            src: '/images/blog-trip-planning/Soller.webp',
            alt: 'Soller',
            caption: 'Sóller - classic Mediterranean town',
          },
        ],
      },
      {
        type: 'cta',
        text: 'Want the trip arranged properly - courses, tee times, restaurants, transport, PGA professional throughout?',
        linkLabel: 'Plan your trip →',
        href: '/plan-your-trip',
      },
    ],
  },
  '5-day-mallorca-golf-itinerary': {
    metadata: {
      title: '5-Day Mallorca Golf Itinerary (2026)',
      description:
        'A practical 5-day Mallorca golf itinerary from Palma: Son Quint, Santa Ponsa 1, Son Gual, Alcanada and T Golf Calvià, with routing and dining notes.',
      canonical: 'https://www.mrmallorcagolf.com/guides/5-day-mallorca-golf-itinerary',
      image: 'https://www.mrmallorcagolf.com/images/courses/son-quint.webp',
      imageAlt: '5-day Mallorca golf trip itinerary from a Palma base',
    },
    meta: {
      badge: 'Itinerary',
      badgeGold: true,
      readTime: '8 min read',
      updated: 'August 2026',
      title: '5-Day Mallorca Golf Trip Itinerary from Palma',
      intro:
        'A Palma-based week for club golfers: Son Quint, Santa Ponsa 1, Son Gual, Alcanada and T Golf Calvià, with the long drive kept to one day.',
      related: [
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          'This is the route I would start with for a group staying in Palma. Five rounds, one longer day north, and no hotel move halfway through the week. It keeps the golf strong without turning the trip into a driving schedule.',
      },
      {
        type: 'paragraph',
        text:
          'The five courses are Golf Son Quint, Golf Santa Ponsa 1, Golf Son Gual, Club de Golf Alcanada and T Golf Calvià. Four are close to Palma. Alcanada is the outlier, so it gets its own day.',
      },
      {
        type: 'facts',
        items: [
          ['5', 'Golf days'],
          ['Palma', 'Recommended base'],
          ['4', 'Rounds near Palma'],
          ['1', 'Full day north'],
        ],
      },
      { type: 'heading', text: 'Why Base the Trip in Palma?' },
      {
        type: 'paragraph',
        text:
          'For a first Mallorca golf trip, Palma is usually the easiest base to make work. The airport is close, the restaurant choice is strong, and you have Son Quint, Santa Ponsa, Son Gual, Son Muntaner, Son Vida, Bendinat and T Golf Calvià within sensible reach. If anyone in the group is not playing every day, Palma also gives them a proper trip.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Old Town Palma.webp',
        alt: 'Old Town Palma for a Mallorca golf trip base',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Palma keeps the airport, golf and evenings close enough to make the week simple.',
      },
      { type: 'heading', text: 'Day 1 - Golf Son Quint' },
      { type: 'subheading', text: 'Role in the trip: warm-up round' },
      {
        type: 'paragraph',
        text:
          'I would start at Son Quint. It is close to Palma, the fairways give you room, and the different tee options help a mixed group settle in after travelling. It is still a proper course, with a good view back towards Palma Cathedral from the eighth.',
      },
      {
        type: 'list',
        items: [
          { label: 'Drive from Palma:', text: 'around 15 minutes.' },
          { label: 'Best tee time:', text: 'mid-morning. No need for a dawn start after a flight.' },
          { label: 'Dinner idea:', text: 'El Camino in Palma if you want a lively first evening.' },
          { label: 'Easy swap:', text: 'Palma Pitch and Putt if one player is very new to the game.' },
        ],
      },
      { type: 'heading', text: 'Day 2 - Golf Santa Ponsa 1' },
      { type: 'subheading', text: 'Role in the trip: step up' },
      {
        type: 'paragraph',
        text:
          'Santa Ponsa 1 is a sensible second round. It has more scale than Son Quint, with European Tour history and a 590-metre par 5 tenth, but it is manageable if you choose the right tees. A few tee shots are partly blind, so it helps to know the lines.',
      },
      {
        type: 'image',
        src: '/images/courses/santa-ponsa-1.webp',
        alt: 'Golf Santa Ponsa 1 in Mallorca',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Santa Ponsa 1 works well as the second-day step up.',
      },
      {
        type: 'list',
        items: [
          { label: 'Drive from Palma:', text: 'around 25 minutes.' },
          { label: 'Best tee time:', text: 'early, especially in busy months.' },
          { label: 'Dinner idea:', text: 'Mesón Can Pedro for traditional Mallorcan food. Book ahead.' },
          { label: 'Read more:', text: '<a href="/guides/santa-ponsa-1-review">Golf Santa Ponsa 1 review</a>.' },
        ],
      },
      { type: 'heading', text: 'Day 3 - Golf Son Gual' },
      { type: 'subheading', text: 'Role in the trip: the serious test' },
      {
        type: 'paragraph',
        text:
          'Son Gual belongs in the middle of the trip. By day three, the group has settled, the travel is out of the body, and a serious championship course makes more sense. The raised greens, bunkering and wind make course management as important as ball-striking.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Son Gual.webp',
        alt: 'Son Gual Golf Course in Mallorca',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Son Gual is the round where local strategy can save the most shots.',
      },
      {
        type: 'paragraph',
        text:
          'If you want to include <a href="/play-with-a-pro">Play With A Pro</a> in the trip, this is often the day I would choose. The course asks enough questions for the advice to matter: targets, misses, wind, club choice and short-game decisions.',
      },
      {
        type: 'list',
        items: [
          { label: 'Drive from Palma:', text: 'around 20 minutes.' },
          { label: 'Best tee time:', text: 'early, before the afternoon wind becomes a bigger factor.' },
          { label: 'Worth knowing:', text: 'handicap certificates are commonly required at Son Gual and Alcanada.' },
          { label: 'Dinner idea:', text: 'Marc Fosh or Zaranda back in Palma for a higher-end evening.' },
        ],
      },
      { type: 'heading', text: 'Day 4 - Club de Golf Alcanada' },
      { type: 'subheading', text: 'Role in the trip: the round everyone remembers' },
      {
        type: 'paragraph',
        text:
          'Alcanada is the longer drive, so treat it as a full day. The lighthouse is visible from most holes, the greens are quick and sloping, and the course feels different from the Palma-area rounds. The drawback is simple: if the weather is poor, you have driven fifty minutes for it.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Alcanada.webp',
        alt: 'Club de Golf Alcanada in Mallorca',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Alcanada deserves a full day, not a rushed slot between other plans.',
      },
      {
        type: 'list',
        items: [
          { label: 'Drive from Palma:', text: 'around 50 minutes.' },
          { label: 'Best tee time:', text: 'early for light, pace and calmer wind.' },
          { label: 'Dinner idea:', text: 'Maca de Castro in Port d\'Alcúdia, or return to Palma if the group wants a simpler evening.' },
          { label: 'Read more:', text: '<a href="/guides/alcanada-review">Club de Golf Alcanada review</a>.' },
        ],
      },
      { type: 'heading', text: 'Day 5 - T Golf Calvià' },
      { type: 'subheading', text: 'Role in the trip: strong finish, sensible airport day' },
      {
        type: 'paragraph',
        text:
          'The final day should keep the airport simple. T Golf Calvià gives you a strong finish without sending the group across the island. It is around thirty minutes from Palma and a little over twenty minutes from the airport on the motorway.',
      },
      {
        type: 'image',
        src: '/images/courses/t-golf-calvia.webp',
        alt: 'T Golf Calvià in Mallorca',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'T Golf Calvià keeps the final round strong and the airport day sensible.',
      },
      {
        type: 'list',
        items: [
          { label: 'Drive from Palma:', text: 'around 30 minutes.' },
          { label: 'Best tee time:', text: 'the first slot you can get if flying later that day.' },
          { label: 'Early flight swap:', text: 'Son Termes for a shorter, scenic round close to Palma.' },
          { label: 'Read more:', text: '<a href="/guides/t-golf-calvia-review">T Golf Calvià review</a>.' },
        ],
      },
      { type: 'heading', text: 'Where the Luxury Part Fits' },
      {
        type: 'paragraph',
        text:
          'The golf is the spine of the trip. Around it, you can add a private chef evening, a proper Palma dinner, a vineyard visit, spa time, a coastal drive through Tramuntana, or a quiet afternoon between the harder rounds. I would add those where they help the rhythm of the week.',
      },
      {
        type: 'image',
        src: '/images/blog-is-mallorca-good/Marc Fosh MichelinRestaurant.webp',
        alt: 'High-end dining in Palma during a Mallorca golf trip',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Evening plans should fit the golf, not fight it.',
      },
      { type: 'heading', text: 'What I Would Change for Different Groups' },
      {
        type: 'list',
        items: [
          { label: 'Very strong golfers:', text: 'add Son Muntaner or Andratx and make the golf tougher.' },
          { label: 'Mixed handicaps:', text: 'keep Son Quint, consider Son Antem East or Bendinat, and avoid five hard days in a row.' },
          { label: 'North-based trip:', text: 'build around Alcanada, Pollença, Pula, Canyamel and Capdepera.' },
          { label: 'Four-day long weekend:', text: 'drop either Santa Ponsa 1 or T Golf Calvià depending on flight times.' },
        ],
      },
      {
        type: 'pull',
        text:
          'The right itinerary is not just the five biggest names. It is the five courses that fit your group, in an order that makes sense.',
      },
      {
        type: 'cta',
        text: 'Want this shaped around your dates, group, handicaps, hotel area and budget?',
        linkLabel: 'Plan your Mallorca golf trip ->',
        href: '/plan-your-trip',
      },
    ],
  },
  'best-time-play-golf-mallorca': {
    metadata: {
      title: 'Best Time to Play Golf in Mallorca',
      description:
        'Month-by-month Mallorca golf guide: weather, green fees, conditions, crowds. From a PGA pro on the island.',
      canonical: 'https://www.mrmallorcagolf.com/guides/best-time-play-golf-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/blog-best-time-play/T Golf Calvia Sun.webp',
      imageAlt: 'The Best Time of Year to Play Golf in Mallorca - Month by Month (2026)',
    },
    meta: {
      badge: 'When to Visit',
      badgeGold: false,
      readTime: '4 min read',
      updated: 'March 2026',
      title: 'The Best Time of Year to Play Golf in Mallorca - Month by Month (2026)',
      intro:
        'Short answer: for pure conditions, late spring and autumn. For value, summer mornings, twilight, and winter. The island plays better year-round than most people expect.',
      related: [
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'is-mallorca-good-for-golf', title: 'Is Mallorca Good for Golf?' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          'Short answer: September-November and February-May. The conditions play better year-round than most people expect and even in warmer months you can play early and winter is still very playable. The wrong month for one golfer is the right month for another.',
      },
      {
        type: 'facts',
        items: [
          ['300+', 'Days of sunshine per year'],
          ['12', 'Months playable'],
          ['Oct', 'Personal favourite month'],
          ['30-50%', 'Typical drop from peak to value windows'],
        ],
      },
      { type: 'heading', text: 'January-February' },
      {
        type: 'paragraph',
        text:
          'Quieter, cheaper, and often surprisingly good. 12-16°C. Courses in excellent condition - the January fairways here match August fairways elsewhere in Europe. Some rain risk in January and into February but often still with blue skies after a quick shower. Green fees sit at off-peak lows. If you want quiet courses and genuine value, come now.',
      },
      { type: 'heading', text: 'March-April' },
      {
        type: 'paragraph',
        text:
          '16-20°C, courses in very good shape, and still more manageable than late spring. Prices are already climbing here, and by mid-March many clubs are effectively in peak-season mode. Great golf, but not the bargain window many people assume.',
      },
      {
        type: 'image',
        src: '/images/blog-best-time-play/T Golf Calvia Sun.webp',
        alt: 'Spring golf in Mallorca',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'March-April: spring courses in peak condition, fewer crowds',
      },
      { type: 'heading', text: 'May-June' },
      {
        type: 'paragraph',
        text:
          'Excellent golf weather and some of the best conditioning of the year. This is firmly premium-season pricing. If you want these months, book early and expect to pay the top rates, especially at the better-known courses.',
      },
      { type: 'heading', text: 'July-August' },
      {
        type: 'paragraph',
        text:
          "Hot (30-38°C), and early tee times are essential. But this is where the old Mallorca pricing logic breaks down: many courses actually reduce rates in summer, often by 30-50% compared with peak spring and autumn. If budget matters more than perfect temperatures, summer can make real sense.",
      },
      {
        type: 'pull',
        text:
          'In January, when courses in England and much of Europe are closed, waterlogged, or frozen, the fairways here are immaculate. That still surprises visitors every year.',
      },
      { type: 'heading', text: 'September-October' },
      {
        type: 'paragraph',
        text:
          'Still my favourite stretch for pure golf. Temperatures are comfortable, the courses are in excellent condition, and October especially feels brilliant on the island. But this is also one of the most expensive windows, so talk about it as peak-season golf, not as a bargain period.',
      },
      {
        type: 'paragraph',
        text:
          "Alcanada hosts the Rolex Challenge Tour Grand Final in October 2026 - worth knowing if you want to watch elite-level golf while you're on the island.",
      },
      {
        type: 'image',
        src: '/images/blog-best-time-play/Rolex Challenge Grand Final.webp',
        alt: 'Rolex Challenge Tour Grand Final at Alcanada',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'October: peak conditions and top-level golf events',
      },
      { type: 'heading', text: 'November-December' },
      {
        type: 'paragraph',
        text:
          "November is excellent, but the first half still sits in that expensive autumn window at a lot of clubs. December is where the better value returns. It is cooler and more changeable, but often far better than visitors expect and usually much easier on the wallet.",
      },
      { type: 'heading', text: 'The Verdict' },
      {
        type: 'paragraph',
        text:
          "For the best conditions, I still point people toward late spring and autumn. For better value, I would now look much harder at June-August and December-February. If you want quiet golf and lower rates, winter and summer twilight are both more interesting than older Mallorca advice suggests.",
      },
      {
        type: 'cta',
        text: "Planning a trip? Get in touch - I'll help you choose the right time and the right courses.",
        linkLabel: 'Plan your trip →',
        href: '/plan-your-trip',
      },
    ],
  },
  'best-golf-courses-mallorca': {
    metadata: {
      title: "24 Best Golf Courses in Mallorca, Ranked",
      description:
        'All 24 Mallorca courses ranked by a PGA pro. Green fees €55–€260, difficulty, who each suits.',
      canonical: 'https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/blog-best-golf-courses/Son Gual.webp',
      imageAlt: "The Best Golf Courses in Mallorca - A PGA Professional's Honest Guide (2026)",
    },
    meta: {
      badge: 'Course Guide',
      badgeGold: true,
      readTime: '8 min read',
      updated: 'March 2026',
      title: "Best Golf Courses in Mallorca (2026)",
      intro:
          "Mallorca has more outstanding golf than most visitors realise. Twenty-four courses, several of them capable of hosting European Tour events. Here's what I know from playing them.",
      related: [
        { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
        { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
        { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          'Mallorca - or Majorca if you grew up spelling it that way - is a much better golf destination than most people realise. I moved here from Shanghai in March 2025, where I had spent eleven years coaching in a city of 27 million people with not enough golf courses between them. Mostly built to championship standards as there was no point having anything there that was not the best. Arriving on an island with 24 courses, 21 of them open to green-fee visitors, in conditions that stay quality even through the winter, felt like discovering a secret.',
      },
      {
        type: 'paragraph',
        text:
          "I'm a PGA Advanced Professional and I'm working my way through every course on the island - playing them, reviewing them honestly, working out what makes each one worth the trip and taking my guests along too to learn. You can also browse all 24 courses with green fees and filters on the <a href='/golf-courses'>Mallorca golf courses page</a>. Below is what I know so far.",
      },
      { type: 'heading', text: 'All 24 Mallorca Golf Courses: Quick Reference' },
      {
        type: 'table',
        headers: ['Course', 'Location', 'Par', 'Green Fee', 'Difficulty', 'Stars', 'Best For'],
        rows: [
          ['Son Gual', 'Palma', '72', '\u20AC115-165', '9/10', '5.0', 'Serious championship round'],
          ['Club de Golf Alcanada', "Port d'Alcudia", '72', '\u20AC115-230', '7/10', '5.0', 'Spectacular views, championship quality'],
          ['Son Muntaner', 'Son Vida - Palma', '72', '\u20AC125-260', '7/10', '4.5', 'Best-conditioned, close to Palma'],
          ['T Golf Calvi\u00E0', 'Calvi\u00E0', '72', '\u20AC170-210', '7/10', '5.0', 'Premium all-round experience'],
          ['Golf de Andratx', 'Camp de Mar', '72', '\u20AC90-140', '9/10', '4.0', 'Hardest test on the island'],
          ['Golf Son Vida', 'Son Vida - Palma', '70', '\u20AC80-190', '8/10', '4.5', 'Historic course, Seve won here'],
          ['T Golf Palma (Puntiro)', 'Palma', '71', '\u20AC100-140', '7/10', '4.5', 'Only Nicklaus design on island'],
          ['Golf Santa Ponsa 1', 'Santa Ponsa', '72', '\u20AC77-126', '8/10', '4.0', 'European Tour venue, public access'],
          ['Golf Santa Ponsa 2', 'Santa Ponsa', '72', 'Members only · guest with member', '7/10', '3.5', 'Quiet, members-only feel'],
          ['Golf Santa Ponsa 3', 'Santa Ponsa', '30 (9H)', 'Members only · guest with member', '4/10', '3.0', 'Beginners, approach practice'],
          ['Golf Son Quint', 'Son Vida - Palma', '71', '\u20AC70-140', '5/10', '4.0', 'All levels, Tiger Woods played here'],
          ['Real Golf de Bendinat', 'Bendinat', '70', '\u20AC74-123', '6/10', '3.5', 'Wooded valley, bay views'],
          ['Golf Son Termes', 'Bunyola', '70', '\u20AC90-110', '6/10', '3.5', 'Tramuntana mountain setting'],
          ['Golf Son Antem West', 'Llucmajor', '72', '\u20AC90-135', '7/10', '4.0', 'Resort course, tougher than Son Antem East'],
          ['Golf Son Antem East', 'Llucmajor', '72', '\u20AC90-140', '6/10', '3.5', 'Wide fairways, resort golf'],
          ['Golf Maioris', 'Llucmajor', '72', '\u20AC91-110', '7/10', '3.5', 'Underrated, quieter option'],
          ['Pula Golf', 'Son Servera', '72', '\u20AC80-145', '7/10', '4.0', 'Olazabal redesign, 8 Tour events'],
          ['Golf Club Son Servera', 'Son Servera', '72', '\u20AC80-145', '6/10', '4.0', 'Relaxed parkland, historic'],
          ["Vall d'Or Golf", "S'Horta", '71', '\u20AC99-132', '6/10', '3.5', 'East coast views, strong back nine'],
          ['Capdepera Golf', 'Arta', '72', '\u20AC85-135', '7/10', '3.5', 'Strong back nine and standout mountain hole'],
          ['Canyamel Golf', 'Capdepera', '73', '\u20AC85-145', '6/10', '4.0', 'Most photographed, east coast'],
          ['Golf Pollensa', 'Pollensa', '35 (9H)', '\u20AC65-75', '4/10', '3.5', 'Easy warm-up, Tramuntana views'],
          ['Palma Pitch & Putt', 'Central Palma', '27 (9H)', '\u20AC20-30', '2/10', '3.0', 'Beginners, approach practice'],
          ['Reserva Rotana', 'Manacor', '36 (9H)', 'Hotel guests only', '6/10', '3.5', 'Stay-and-play, private estate'],
        ],
      },
      {
        type: 'cta',
        text: 'Want all 24 courses compared side by side on one page? Download the free Course Comparison Chart.',
        linkLabel: 'Get the free Course Comparison →',
        href: '/guides/course-comparison',
        internal: true,
      },
      { type: 'heading', text: 'The Top Courses - By Purpose' },
      { type: 'subheading', text: 'For a Serious Championship Round: Son Gual' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Son Gual.webp',
        alt: 'Son Gual Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Son Gual - Championship Test Course',
      },
      {
        type: 'paragraph',
        text:
          "My most-played course on the island and the one I recommend most often for a proper test. Thomas Himmel's design sits in its own wind ecosystem in the hills above Palma - I've left my house, full of confidence, on a calm morning and arrived at the first tee to find it blowing hard and staying that way for the whole round. The greens are fast, raised, and unforgiving. The bunkering is aggressive and makes strategy and ball striking need to be top level, and the closing stretch is genuinely outstanding.",
      },
      {
        type: 'paragraph',
        text:
          'Rafa Nadal plays here regularly and has said it is his favourite course on the island. Barack Obama played here in November 2024 and enjoyed it so much he promised to return. Many top amateur and professional events are also held at this popular golf course.',
      },
      { type: 'subheading', text: 'For the Most Scenic Round: Alcanada' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Alcanada.webp',
        alt: 'Alcanada Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Alcanada - Most Scenic Course',
      },
      {
        type: 'paragraph',
        text:
          "Alcanada is the course I choose when someone asks for one day that will stay with them. The views are spectacular from start to finish, but this is not just a pretty round. It is a serious Robert Trent Jones Jr. championship layout with fast, contoured greens and strategic bunkering that asks good questions all day.",
      },
      {
        type: 'paragraph',
        text:
          "Standing on the elevated back tees is its own experience. You feel untouchable - so far from everything else that everyone below looks like a tiny dot. The lighthouse in front of you, the bay stretching out, and you're about to hit driver somewhere into the abyss. That's the feeling.",
      },
      { type: 'subheading', text: 'For an East-Coast Surprise: Capdepera' },
      {
        type: 'paragraph',
        text:
          'Capdepera is better than many visitors expect. The front nine is open and playable, then the back nine climbs into the hills and becomes a more tactical test. The par-3 15th is one of the best holes on the island, with elevated mountain views that make the drive worthwhile even before you putt out.',
      },
      { type: 'subheading', text: 'For a DP World Tour Experience: Son Muntaner' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Son Muntaner.webp',
        alt: 'Son Muntaner Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: "Son Muntaner - Spain's Best Golf Course 2025",
      },
      {
        type: 'paragraph',
        text:
          'Named Best Golf Course in Spain at the 2025 World Golf Awards and well deserved. Hosted the Mallorca Golf Open and Ladies European Tour events. Wide fairways, but a lot of hazards and pine trees to guide you, technically demanding greens, fantastic conditioning and a really good test of golf.',
      },
      { type: 'subheading', text: 'For the Hardest Test: Golf de Andratx' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Andratx.webp',
        alt: 'Golf de Andratx',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Andratx - Hardest Test on the Island',
      },
      {
        type: 'paragraph',
        text:
          'Widely considered one of the most difficult courses on the island. A championship layout in the southwest with dramatic coastal views and hazards on near enough every hole. The 6th is the longest par 5 in the whole of Spain at 609 metres. Recommended for experienced players.',
      },
      {
        type: 'cta',
        text: 'Considering Andratx? I cover the layout, wind, best tee choice, and whether it suits your game.',
        linkLabel: 'Read the Golf de Andratx review →',
        href: '/guides/golf-andratx-review',
      },
      { type: 'subheading', text: 'For the Most Beautiful Setting: Canyamel' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Canyamel.webp',
        alt: 'Canyamel Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Canyamel - Most Photographed Course',
      },
      {
        type: 'paragraph',
        text:
          'Described by many as the most photographed course on the island. Set in the foothills of the Llevant Natural Park in the east, with sea views throughout. A genuinely good course beyond the aesthetics.',
      },
      { type: 'subheading', text: 'Also Worth Playing: Golf Santa Ponsa 1' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Santa Ponsa 1.webp',
        alt: 'Santa Ponsa 1 Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Santa Ponsa 1 - European Tour History',
      },
      {
        type: 'paragraph',
        text:
          'The only public course in the Santa Ponsa group, with genuine European Tour history - it hosted the 2021 European Tour Mallorca Golf Open and six European Tour events. One of the longest courses on the island, with open fairways that reward an aggressive approach from the tee and good opportunities to hit driver.',
      },
      { type: 'subheading', text: 'For Beginners or Mixed Groups: Son Quint or Son Antem East' },
      {
        type: 'image',
        src: '/images/blog-best-golf-courses/Tiger and Charlie Son Quint.webp',
        alt: 'Son Quint Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Son Quint - where Tiger Woods and Charlie played in 2022',
      },
      {
        type: 'paragraph',
        text:
          'Son Quint is the most accessible course in the Arabella group (four courses in one complex) - relatively flat, wide fairways, native planting and low intimidation factor. Set high up, it has great views over Palma. Tiger Woods and his son Charlie played here in July 2022 after The Open. Son Antem East in the south is similarly flat and forgiving but with a good amount of water, bunkers and trees to be interesting and with a hotel resort if you want to combine with accommodation.',
      },
      {
        type: 'facts',
        items: [
          ['24', 'Courses on the island'],
          ['€55-260', '18-hole green fee range'],
          ['300', 'Days of sunshine'],
          ['12 mo', 'Golf played year-round'],
        ],
      },
      { type: 'heading', text: 'Celebrity Connections Worth Knowing' },
      {
        type: 'paragraph',
        text:
          'Son Gual: Obama came and played in 2024. Son Quint (Arabella): Tiger Woods and his son Charlie played in July 2022, the week after The Open at St Andrews. Pula (east): Federer and Nadal play together when on the island and Nadal is there frequently. Son Vida: Seve Ballesteros won the European Tour event there in 1990. Santa Ponsa: hosted six European Tour events and all the big names of the time, including Spanish legends Seve Ballesteros and Jose Maria Olazabal alongside Ian Woosnam, Bernhard Langer and more.',
      },
      { type: 'heading', text: 'The Honest Summary' },
      {
        type: 'paragraph',
        text:
          "If you want the strongest shortlist, start with Son Gual, Alcanada, Son Muntaner, and T Golf Calvia. Add Andratx if you want the hardest test, Capdepera for an underrated east-coast challenge, and Son Antem West if you want a resort setting that still asks for proper golf. Most visitors play one or two courses and miss how deep the quality is here.",
      },
      {
        type: 'pull',
        text:
          "The island has been one of Europe's best-kept golf secrets. I arrived from Shanghai and the conditions in January, when courses in England are closed, genuinely surprised me.",
      },
      {
        type: 'cta',
        text: 'Download the free Course Comparison Chart comparing all 24 Mallorca courses on green fees, difficulty, and who each one suits.',
        linkLabel: 'Download the Course Comparison →',
        href: '/guides/course-comparison',
        internal: true,
      },
      {
        type: 'cta',
        text: 'Want to play one of these courses with a PGA professional alongside you?',
        linkLabel: 'Book a Play With A Pro day in Mallorca →',
        href: '/play-with-a-pro',
      },
    ],
  },
  'golf-club-hire-mallorca': {
    metadata: {
      title: 'Golf Club Hire Mallorca - Prices',
      description:
        'Golf club hire €25–€65/day. Best companies, quality levels, best deals for 2026.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-club-hire-mallorca',
      image: `${SITE_ORIGIN}/images/courses/vall-dor.webp`,
      imageAlt: 'Golf Club Hire in Mallorca - Everything You Need to Know (2026)',
    },
    meta: {
      badge: 'Practical Guide',
      badgeGold: false,
      readTime: '6 min read',
      updated: 'August 2026',
      title: 'Golf Club Hire in Mallorca (2026)',
      intro: 'Should you bring your own clubs? Which hire companies are worth using? What should you pay? Answered honestly.',
      related: [
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          "Club hire is one of the most common themes of questions I get from golfers planning a trip. Should I bring my clubs? Can I hire decent ones? Where from, and how much? Does the course have sets available?",
      },
      {
        type: 'paragraph',
        text:
          'The honest answer: yes, you can hire excellent clubs here. Course hire sets vary from questionable to very good. For any course where quality and familiarity matters, a specialist club hire company is worth using.',
      },
      {
        type: 'paragraph',
        text:
          "Note: I don't offer club hire directly. This guide is purely practical. I can help point you to the right company for your trip if you get in touch.",
      },
      { type: 'heading', text: 'Should You Bring Your Own?' },
      {
        type: 'paragraph',
        text:
          "If you're playing three rounds or more on a dedicated golf trip, think to bring them. Airline fees (typically €30-60 each way) are usually worth it for a proper trip, and there is a real advantage to playing with clubs you know, unless your clubs were hand-me-downs from two generations ago and then it is time for a new set!",
      },
      {
        type: 'paragraph',
        text:
          "If you're on a mixed holiday with a few rounds planned, hiring makes more sense. The specialist companies here have great and up-to-date equipment, and the cost works out lower than checking clubs both ways, plus reduces a lot of the stress as they are experienced at making your life easy.",
      },
      { type: 'heading', text: 'The Main Hire Companies' },
      { type: 'subheading', text: 'Club Rentals Mallorca' },
      {
        type: 'paragraph',
        text:
          'Personal delivery and collection to hotels, courses, and villas all over the island. Current season models include right and left-handed TaylorMade Qi4D, Callaway Rogue ST Max and TaylorMade Kalea for ladies. Graphite regular-flex sets start from €55 for 2 days and drop heavily for longer hires, while steel regular or stiff sets start from €70 for 2 days. Prices include delivery, collection, and advice on what is best for you. Premium end of the market, and east-coast golfers can even use a free golf shuttle service from hotel to course and back again for groups of up to 8. They are a particularly strong choice if you value personal service and straightforward delivery; quote ANDYGOLF10 by <a href="https://wa.me/34722691766">WhatsApp</a> or <a href="mailto:info@clubrentalsmallorca.com">email</a> when booking for priority delivery to your course or hotel, plus a small discount on any golf balls added to the booking.',
      },
      {
        type: 'image',
        src: '/images/blog-golf-club-hire/Callaway Rogue ST Max.webp',
        alt: 'Callaway Rogue ST Max clubs',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Callaway Rogue ST Max - current season equipment',
      },
      { type: 'subheading', text: 'Rent2Play Golf' },
      {
        type: 'paragraph',
        text:
          'Callaway Rogue and TaylorMade Qi4D options as well as some previous-season sets at a lower price. You can add tees, balls and the little extras too, so you are properly set. A 2-day TaylorMade Qi4D rental runs around €62, with airport, hotel, and course delivery possible, and longer trips drop to around €142 for 10 days. A great all-rounder with a growing amount of very happy customers in their Google reviews. Bonus for Mr Mallorca Golf readers: use code MRMALLORCAGOLF for a small complimentary gift, depending on which promotional items are available, or add MRMALLORCAGOLFBALLS for 10% off any purchase of new golf balls with the clubs. Both codes can be used together at checkout.',
      },
      {
        type: 'image',
        src: '/images/blog-golf-club-hire/Qi4D_v1.webp',
        alt: 'TaylorMade Qi4D clubs',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'TaylorMade Qi4D - premium option',
      },
      { type: 'subheading', text: 'MyCaddyMaster' },
      {
        type: 'paragraph',
        text:
          'Some different brands are available with plenty of budget options and shaft flexes more suitable for the senior or slower-swinging golfer. Two-day rentals range from €63 for Cobra Fly XL up to €115 for the XXIO 2026 models. For 10 days, the same sets come in around €87 and €209 if you book online and use their online discount. Airport pickup and drop-off are possible, and if you book early some of the sets can be even cheaper.',
      },
      {
        type: 'image',
        src: '/images/blog-golf-club-hire/Cobra Fly XL.webp',
        alt: 'Cobra Fly XL clubs',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Cobra Fly XL - budget-friendly option',
      },
      { type: 'subheading', text: 'ClubsToHire' },
      {
        type: 'paragraph',
        text:
          'Flexible cancellation and easy online booking. Pricing goes per week, so it can work particularly well for longer hires. The Callaway Quantum Max 2026 model is around €100 for 2 days but only about €120 for 10 days, while cheaper models are available if you are trying to keep costs down.',
      },
      {
        type: 'pull',
        text:
          "For many courses, you need to weigh up hiring current-season equipment from a specialist company rather than using whatever is in the rack at the pro shop. In many cases the clubs at the course are also current-season stock, but this varies and needs to be confirmed.",
      },
      { type: 'heading', text: 'Course Hire Sets' },
      {
        type: 'paragraph',
        text:
          "Most courses have hire sets at the pro shop - typically €35-50. Fine for a mid-range course on a casual day. Different courses have different associations but expect Callaway, Titleist, TaylorMade and Vice Golf. Lots of decent options if you do not want to arrange delivery, but often less choice and less certainty about getting the absolute right setup for you, so early planning is a necessity.",
      },
      { type: 'heading', text: 'Money-Saving Tips' },
      {
        type: 'list',
        items: [
          { label: 'Book 7+ days in advance:', text: '10-20% discount at most companies.' },
          { label: 'Weekly rate:', text: 'saves 20-30% if playing 5+ days.' },
          { label: 'Course pickup:', text: 'free at most companies if timing works, so arrange it and save yourself a headache.' },
          { label: 'Group discount:', text: 'ask for parties of 4 or more.' },
        ],
      },
      {
        type: 'cta',
        text: 'Hiring clubs and want to make a proper day of it at Son Gual or Alcanada?',
        linkLabel: 'See what a full day looks like →',
        href: '/play-with-a-pro',
      },
    ],
  },
  'is-mallorca-good-for-golf': {
    metadata: {
      title: "Is Mallorca Good for Golf? Yes",
      description:
        "24 courses, year-round sunshine, €55–€260. PGA pro's honest answer: courses, conditions, expectations.",
      canonical: 'https://www.mrmallorcagolf.com/guides/is-mallorca-good-for-golf',
      image: 'https://www.mrmallorcagolf.com/images/courses/pollensa.webp',
      imageAlt: "Is Mallorca Good for Golf? A PGA Professional's Answer",
    },
    meta: {
      badge: 'Overview',
      badgeGold: false,
      readTime: '6 min read',
      updated: 'March 2026',
      title: "Is Mallorca Good for Golf? A PGA Professional's Answer",
      intro: "Yes. But here's the proper answer - because Mallorca is good for golf in ways that aren't obvious from the outside.",
      related: [
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
        { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          "Yes. But let me give you the proper answer - because Mallorca is good for golf in ways that aren't obvious from the outside.",
      },
      { type: 'heading', text: 'The Courses Rank With The Best In Europe' },
      {
        type: 'paragraph',
        text:
          "Son Gual ranks among Europe's top courses. Alcanada is one of the most scenic on the continent. Son Muntaner was named Best Golf Course in Spain at the 2025 World Golf Awards. Andratx is one of the hardest courses in Spain. These are not resort tracks but serious layouts built by serious architects.",
      },
      {
        type: 'image',
        src: '/images/blog-is-mallorca-good/Son Gual.webp',
        alt: 'Son Gual Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: "Son Gual - one of Europe's top courses",
        captionSize: '0.9rem',
        captionMargin: '-0.5rem 0 0 0',
      },
      { type: 'heading', text: 'The Conditions Are Excellent Year-Round' },
      {
        type: 'paragraph',
        text:
          '300 days of sunshine. In January, when courses in much of Europe are closed or unplayable, the fairways here are immaculate. I moved from Shanghai, but grew up in the UK, and the off-season course conditions were the first thing that surprised me.',
      },
      { type: 'heading', text: '24 Courses on a Relatively Small Island' },
      {
        type: 'paragraph',
        text:
          'Coming from Shanghai - 27 million people with just 12 courses - the density of quality golf within a maximum one-hour drive here is remarkable. A week on the island can include four or five genuinely different, excellent rounds. Southwest, east coast, north, central Palma: each area has its own character and not just a samey resort track. The full list of every course with green fees and honest ratings is on the <a href="/golf-courses">Mallorca golf courses page</a>.',
      },
      {
        type: 'facts',
        items: [
          ['24', 'Courses on the island'],
          ['3', 'European Tour venues'],
          ['300', 'Days of sunshine'],
          ['100km', 'Island end to end'],
        ],
      },
      { type: 'heading', text: 'The Honest Caveats' },
      { type: 'subheading', text: 'July and August are hot and busy' },
      {
        type: 'paragraph',
        text:
          'Playable, but peak pricing and peak temperatures. Not ideal for a dedicated golf trip. Early morning tee times are needed but with a sea breeze often it is not that bad!',
      },
      { type: 'subheading', text: 'The east coast courses are best grouped together' },
      {
        type: 'paragraph',
        text:
          'Pula, Canyamel, and Capdepera are some of the most beautiful courses on the island. They make sense as a cluster, and it is worth considering a night on the east side to play a few together.',
      },
      {
        type: 'image',
        src: '/images/blog-is-mallorca-good/Capdepera.webp',
        alt: 'Capdepera Golf Course',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Capdepera - worth the drive on the east coast',
      },
      {
        type: 'pull',
        text:
          'Mallorca is one of the best golf destinations in Europe. Not the most famous, but arguably the best combination of course quality, conditions, and scenery on the continent.',
      },
      { type: 'heading', text: "And When You're Not on the Course" },
      {
        type: 'paragraph',
        text:
          "One thing visitors often underestimate: Mallorca is a serious island beyond the golf, which is why so many celebrities, sports stars and others call it home or return year after year. The courses are the anchor, but the days between rounds, or the afternoon after an early finish, are what makes the trip.",
      },
      {
        type: 'paragraph',
        text:
          "The clubhouse restaurants at many of the courses are more than an after-thought, but the island boasts many options from Michelin stars, local favourites and private chef dining experiences. Old town Palma has a dining scene that punches well above its size. The northwest coast - Valldemossa, Deià, Sóller - is UNESCO World Heritage and looks like nothing else in the Mediterranean. The northeast coast and the drive to Alcanada takes you through some of the best scenery on the island. The Ma-10 mountain road from Andratx to Pollença is one of the most dramatic drives in Europe. Build in at least one afternoon where you do not have a tee time.",
      },
      {
        type: 'image',
        src: '/images/blog-is-mallorca-good/Alcanada.webp',
        alt: 'Alcanada and lighthouse',
        caption: 'Alcanada - scenic northeast coast drive',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
      },
      {
        type: 'image',
        src: '/images/blog-is-mallorca-good/Soller.webp',
        alt: 'Soller town',
        caption: 'Sóller - UNESCO World Heritage setting on the northwest coast',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
      },
      { type: 'heading', text: 'Verdict' },
      {
        type: 'paragraph',
        text:
          'Mallorca is one of the best golf destinations in Europe. Not the most famous, but arguably the best combination of course quality, conditions, and scenery on the continent. The golfers who know keep coming back.',
      },
      {
        type: 'cta',
        text: 'Want to see what the best of Mallorca golf looks like, with a PGA professional alongside you?',
        linkLabel: 'Book a Play With A Pro day in Mallorca →',
        href: '/play-with-a-pro',
      },
    ],
  },
  'mallorca-course-map': {
    metadata: {
      title: 'Map - 24 Golf Courses Mallorca',
      description: 'Interactive map showing the locations of all 24 golf courses in Mallorca. Find courses by region and distance from Palma.',
      canonical: 'https://www.mrmallorcagolf.com/guides/mallorca-course-map',
      image: `${SITE_ORIGIN}/images/courses/pula.webp`,
      imageAlt: 'Map of Mallorca Golf Courses',
    },
    meta: {
      badge: 'Reference',
      badgeGold: false,
      readTime: '2 min',
      updated: 'July 2026',
      title: 'Mallorca Golf Courses Map',
      intro: 'All 24 courses on one map. Find by location, distance from Palma, or course name.',
      related: [
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Use this interactive map to explore all 24 golf courses across Mallorca. Filter by region, distance from Palma, or difficulty. Click any course to see full details, green fees, and how to book.',
      },
    ],
  },
}

const GUIDE_ARTICLE_LOCALES = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh']

function withGuideArticleSlug(content, slug) {
  return {
    ...content,
    meta: {
      ...content.meta,
      slug,
    },
  }
}

function injectBlockAfterFirstSubheading(content, subheadingText, blockToInsert) {
  if (!content?.blocks) return content

  const blocks = []
  let inserted = false

  for (const block of content.blocks) {
    blocks.push(block)

    if (!inserted && block.type === 'subheading' && block.text === subheadingText) {
      blocks.push(blockToInsert)
      inserted = true
    }
  }

  return inserted ? { ...content, blocks } : content
}

function addClubRentalsPartnerLink(content) {
  return injectBlockAfterFirstSubheading(content, 'Club Rentals Mallorca', {
    type: 'image',
    src: '/images/blog-golf-club-hire/Logo-Mallorca-Club-Rentals-black EN.png',
    alt: 'Club Rentals Mallorca logo',
    href: 'https://www.clubrentalsmallorca.com/',
    external: true,
    fit: 'contain',
    containerStyle: { margin: '1.25rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '16/5', background: '#f5f1e8' },
    caption: 'Club Rentals Mallorca',
  })
}

const CLUB_HIRE_COMPANY_LINKS = {
  'Club Rentals Mallorca': 'https://www.clubrentalsmallorca.com/',
  'Rent2Play Golf': 'https://rent2play.golf',
  MyCaddyMaster: 'https://www.mycaddymaster.com',
  ClubsToHire: 'https://www.clubstohire.com',
}

function linkClubHireCompanies(content) {
  if (!content?.blocks) return content

  let activeCompanyHref = null

  const blocks = content.blocks.map((block) => {
    if (block.type === 'subheading' && CLUB_HIRE_COMPANY_LINKS[block.text]) {
      activeCompanyHref = CLUB_HIRE_COMPANY_LINKS[block.text]
      return {
        ...block,
        href: activeCompanyHref,
        external: true,
      }
    }

    if (block.type === 'heading') {
      activeCompanyHref = null
      return block
    }

    if (block.type === 'image' && activeCompanyHref && !block.href) {
      return {
        ...block,
        href: activeCompanyHref,
        external: true,
      }
    }

    return block
  })

  return { ...content, blocks }
}

export function getGuideArticleContent(slug, locale = 'en') {
  const baseContent = GUIDE_ARTICLE_CONTENT[slug] || null
  if (!baseContent) return null
  const structuredBase = slug === 'golf-club-hire-mallorca' ? addClubRentalsPartnerLink(baseContent) : baseContent

  if (locale === 'en') {
    const enriched = slug === 'golf-club-hire-mallorca' ? linkClubHireCompanies(structuredBase) : structuredBase
    return withGuideArticleSlug(enriched, slug)
  }

  const localizedContent = getLocalizedGuideArticleContent(slug, locale)
  if (!localizedContent) {
    const enriched = slug === 'golf-club-hire-mallorca' ? linkClubHireCompanies(structuredBase) : structuredBase
    return withGuideArticleSlug(enriched, slug)
  }

  const merged = mergeGuideContent(structuredBase, localizedContent)
  const enriched = slug === 'golf-club-hire-mallorca' ? linkClubHireCompanies(merged) : merged

  return withGuideArticleSlug(enriched, slug)
}

export function buildGuideArticleMetadata(slug, locale = 'en') {
  const content = getGuideArticleContent(slug, locale)
  if (!content) return {}

  const canonical = `${SITE_ORIGIN}${buildLocalePath(`/guides/${slug}`, locale)}`
  const articleLocales = EN_ONLY_ARTICLE_SLUGS.has(slug) ? ['en'] : GUIDE_ARTICLE_LOCALES
  const languages = Object.fromEntries(
    articleLocales.map((lang) => [
      getHreflangCode(lang),
      `${SITE_ORIGIN}${buildLocalePath(`/guides/${slug}`, lang)}`,
    ])
  )
  const badge = content.meta?.badge || 'Golf Guide'
  const rawImageUrl = content.metadata.image?.replace('https://www.mrmallorcagolf.com', SITE_ORIGIN) || ''
  const imagePath = rawImageUrl.replace(SITE_ORIGIN, '').replace(/\.webp$/i, '.jpg')
  const ogImageUrl = `${SITE_ORIGIN}/api/og?title=${encodeURIComponent(content.metadata.title)}&badge=${encodeURIComponent(badge)}&image=${encodeURIComponent(imagePath)}`

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        'x-default': languages.en,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      url: canonical,
      title: content.metadata.title,
      description: content.metadata.description,
      publishedTime: '2026-03-01',
      authors: ['Andy Griffiths'],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: content.metadata.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.title,
      description: content.metadata.description,
      images: [ogImageUrl],
    },
  }
}

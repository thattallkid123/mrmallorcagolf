import { EN_ONLY_ARTICLE_SLUGS, SITE_ORIGIN, buildLocalePath, getHreflangCode } from './site.js'
import { getLocalizedGuideArticleContent } from './guide-article-content-localized.js'
import { mergeGuideContent } from './guide-content-localization.js'

export const GUIDE_ARTICLE_CONTENT = {
  'golf-cost-mallorca': {
    metadata: {
      title: 'Mallorca Golf Green Fees 2026 (€55–€260)',
      description:
        'Mallorca green fees are €55–€260. See buggy costs, value months, dynamic pricing and when to book early for each course.',
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
          "Golf in Mallorca, the largest of Spain's Balearic Islands, ranges from genuinely affordable to seriously expensive - the gap between them is bigger than most visitors expect. Here's an honest breakdown for 2026, from someone who plays here most weeks. For a full rundown of every course on the island, see the <a href='/golf-courses'>Mallorca golf courses guide</a>. Incredible value compared to the prices of golf in Shanghai where I spent 11 years, but costs can creep up if you don't plan well.",
      },
      { type: 'heading', text: 'Green Fees' },
      { type: 'subheading', text: 'Budget (nine-hole, pitch and putt)' },
      {
        type: 'paragraph',
        text:
          'From €17 for 9 holes or €27-30 for 18 holes at Palma Pitch & Putt (club hire extra), or around €65-75 if you want the cheapest full-size options such as Golf Pollença in the quieter months. Palma Pitch & Putt is a proper short-course option: great for beginners, good fun for families or mixed groups, and a low-pressure way to get clubs in hand without committing to a full round.',
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
          "Around half the island now uses dynamic pricing, including the Arabella courses, both T Golf venues, Pula, Capdepera, and Son Antem East and West. The practical rule is simple: the earlier you book, the better your chance of locking in the lower end of the range. Black Friday, winter, and multi-round partner offers can still save real money if you time them well. If you want the course choice and tee times handled before you arrive, start with <a href='/plan-your-trip'>trip planning</a>.",
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
  'where-to-stay-mallorca-golf': {
    metadata: {
      title: 'Where to Stay for Mallorca Golf',
      description:
        'Where to stay for a Mallorca golf trip: Palma, southwest, north or east. Choose your base by drive time, course order and tee times.',
      canonical: 'https://www.mrmallorcagolf.com/guides/where-to-stay-mallorca-golf',
      image: 'https://www.mrmallorcagolf.com/images/blog-trip-planning/Old Town Palma.webp',
      imageAlt: 'Where to stay in Mallorca for golf: choosing the right base for your trip',
    },
    meta: {
      badge: 'Trip Planning',
      badgeGold: false,
      readTime: '6 min read',
      updated: 'September 2026',
      title: 'Where to Stay in Mallorca for Golf',
      intro:
        'The best base depends on the courses you want to play, not just the hotel brochure. Palma, the southwest, the north and the east all work for different golf trips.',
      sidebarPlanning: {
        title: 'Turn this guide into a trip that works.',
        body: 'Send your dates, handicap, hotel area and shortlist. I will tell you which base works, where the courses fit and what order makes sense.',
        primary: 'Plan Your Trip',
        secondary: 'Play With A Pro',
      },
      related: [
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan a Mallorca Golf Trip' },
        { slug: '5-day-mallorca-golf-itinerary', title: '5-Day Mallorca Golf Trip Itinerary' },
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text:
          'The hotel is not the first golf decision. The course order is. Once you know which rounds matter most, the right base becomes much easier to choose.',
      },
      {
        type: 'paragraph',
        text:
          'Mallorca looks small on a map, but golf days do not only happen on the map. They happen after breakfast, in rental cars, with tee times, buggies, club hire, traffic around Palma, and one person in the group who always wants a slower morning.',
      },
      {
        type: 'paragraph',
        text:
          "I would choose the base by asking one question first: which course do you not want to compromise? If that answer is Son Gual, Alcanada, T Golf Calvià or Son Muntaner, the hotel decision starts there.",
      },
      { type: 'heading', text: 'Palma: the easiest base for most golf trips' },
      {
        type: 'paragraph',
        text:
          'Palma is the simplest answer for many groups. You have restaurants, airport access, short drives to the Arabella courses, and workable access to Son Gual, T Golf Palma, Son Antem, Santa Ponsa 1 and T Golf Calvià.',
      },
      {
        type: 'paragraph',
        text:
          'The honest limit: Palma is not next door to everything. Alcanada is still a proper day out, and the eastern courses become less attractive if the group dislikes driving. For a first Mallorca golf trip, though, Palma gives the fewest bad compromises.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/Old Town Palma.webp',
        alt: 'Palma old town, a practical base for a Mallorca golf trip',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Palma works well when the group wants golf, restaurants and simple airport access.',
      },
      { type: 'heading', text: 'Southwest Mallorca: best for Santa Ponsa, Andratx and Calvià' },
      {
        type: 'paragraph',
        text:
          'The southwest makes sense if the trip is built around Santa Ponsa 1, T Golf Calvià, Golf de Andratx, Bendinat or Son Vida. It also works for groups staying around Portals, Santa Ponsa, Camp de Mar or the Calvià coast.',
      },
      {
        type: 'paragraph',
        text:
          'This is a good base when the golf is part of a wider holiday, because the drives stay sensible and the non-golf parts of the trip still work. The trade-off is that Alcanada becomes a long day and the east of the island starts to feel detached from the plan.',
      },
      { type: 'heading', text: 'North Mallorca: choose it for Alcanada, not by accident' },
      {
        type: 'paragraph',
        text:
          'The north is the base to consider if Alcanada is the course you care about most. Staying around Alcúdia, Port de Pollença or the north coast makes the Alcanada day much calmer and opens up Golf Pollença as a lower-pressure option.',
      },
      {
        type: 'paragraph',
        text:
          'The negative is clear: if you also want Son Gual, T Golf Calvià and the Palma courses, the north adds driving. I like Alcanada enough to build a trip around it, but I would not stay north just because one round there appears on the itinerary.',
      },
      {
        type: 'image',
        src: '/images/blog-trip-planning/alcanada-lighthouse-view.webp',
        alt: 'View across the Alcanada course towards the lighthouse',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '5/4' },
        imageStyle: { objectPosition: 'center 45%' },
        caption: 'Alcanada is worth planning around. It is not a quick round from every base.',
      },
      { type: 'heading', text: 'East Mallorca: useful for a quieter golf trip' },
      {
        type: 'paragraph',
        text:
          'The east suits groups who want a quieter rhythm and are happy to play courses like Pula, Capdepera, Canyamel, Son Servera and Vall d’Or. The towns around Artà, Capdepera and the east coast can make a good trip if the golf is planned locally.',
      },
      {
        type: 'paragraph',
        text:
          'I would not base a first-time, high-end golf trip in the east if the group mostly wants Son Gual, Alcanada and the southwest. Too many drives start to dictate the week.',
      },
      { type: 'heading', text: 'What about staying at a golf resort?' },
      {
        type: 'paragraph',
        text:
          'A golf resort can work if convenience matters more than variety. Son Antem is useful for an easy resort rhythm. The Arabella area works well for Son Muntaner, Son Quint and Son Vida. The decision is not only hotel quality, it is whether the nearby courses suit the group.',
      },
      {
        type: 'paragraph',
        text:
          'Local tip: do not let the hotel location choose every course for you. A strong trip can include one convenient round, one serious test, one scenic day, and one easier final round near the airport.',
      },
      { type: 'heading', text: 'My default advice' },
      {
        type: 'paragraph',
        text:
          'For most visiting golfers, start with Palma or the southwest. Add Alcanada as one planned longer day if the group wants the north. Move the base only if the trip is clearly built around that area.',
      },
      {
        type: 'list',
        items: [
          { label: 'Best all-round base:', text: 'Palma, especially for a first trip with restaurants and mixed course choices.' },
          { label: 'Best southwest base:', text: 'Portals, Santa Ponsa, Camp de Mar or nearby if Calvià, Andratx and Santa Ponsa are central.' },
          { label: 'Best north base:', text: 'Alcúdia or Port de Pollença if Alcanada is the anchor round.' },
          { label: 'Best east base:', text: 'Artà, Capdepera or the east coast if the trip is deliberately quieter and more local.' },
        ],
      },
      {
        type: 'paragraph',
        text:
          'The right answer changes with tee times. An 8:00 start at Alcanada from Palma is a different day from an 11:30 start. A final-round tee time near the airport is often worth more than a course ranking.',
      },
      {
        type: 'cta',
        text: 'Want the base, course order and tee times checked before you book the hotel?',
        linkLabel: 'Plan your Mallorca golf trip →',
        href: '/plan-your-trip',
        internal: true,
      },
      {
        type: 'cta',
        text: 'Already know where you are staying? Send dates, group size, handicap range and hotel area. I will tell you which courses make sense.',
        linkLabel: 'Ask me to book tee times →',
        href: '/contact?service=tee-time-booking',
        internal: true,
      },
    ],
  },
  'golf-trip-planning-mallorca': {
    metadata: {
      title: 'Plan Your Mallorca Golf Trip (2026)',
      description:
        'Plan your Mallorca golf trip: courses, tee times, where to stay, how many rounds to play, and when to book. Advice from a PGA pro on the island.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/courses/bendinat.webp',
      imageAlt: 'How to Plan the Perfect Golf Trip to Mallorca (From Someone Who Lives There)',
    },
    meta: {
      badge: 'Trip Planning',
      badgeGold: false,
      readTime: '7 min read',
      updated: 'September 2026',
      title: 'How to Plan a Mallorca Golf Trip | Courses, Base & Tee Times',
      intro:
        "Which courses to play, where to base yourself, when to book tee times, and how to avoid the obvious mistakes in the gaps between rounds.",
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
          "I moved to Mallorca in March 2025 and have been playing golf here every week since. Before that, eleven years in Shanghai, a city where golfers often think nothing of spending up to €500 on a single hour long lesson, where access to a course often means a membership costing more than most people's annual salary. Mallorca is a different golf problem: better access, more choice, and more ways to get the order wrong.",
      },
      {
        type: 'paragraph',
        text: "This is what I'd tell a friend planning the golf before flights and hotels start forcing the decisions.",
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
          'One round per day is comfortable for most golfers. The courses ask enough questions, and summer heat is real. In cooler months, 36 holes in a day is possible if you are that keen, but most golf-only visitors on a 5-7-day trip play 4-5 rounds. The order matters: one easy arrival round, one serious test in the middle, one longer drive when the group has time, and a final round close enough to keep the airport simple.',
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
        text: 'DP World Tour experience near Palma: Son Muntaner. Five minutes from the city, strong conditioning, and named Best Golf Course in Spain 2025.',
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
          'With a week on the island, the mistake is usually not finding good courses. It is putting them in the wrong order.',
      },
      { type: 'heading', text: 'Getting Around' },
      {
        type: 'paragraph',
        text:
          "A hire car is the most practical option. Public transport doesn't serve many of the best courses well. Roads are good, but the east coast still needs honest time in the day. Palma to Alcanada is a proper drive, not a casual add-on before dinner. If nobody in the group wants to drive, plan that before choosing courses.",
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
          'Bring your own clubs for three rounds or more. Hire for a mixed holiday with one or two rounds planned. The club hire guide covers the companies I would look at, what they charge, and which setups are worth using. Book tee times early for March-May and September-October. If you only need the golf booked, that can be arranged without me attending.',
      },
      { type: 'heading', text: 'What Else to Do' },
      {
        type: 'paragraph',
        text:
          'Old town Palma is worth a full afternoon. The northwest coast, especially Valldemossa, Deià, and Sóller, is the obvious non-golf day. The northeast is quieter and wilder. Local seafood and island wine can do more for the trip than another rushed nine holes.',
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
          "A golf trip that doesn't include at least one long lunch somewhere unexpected is only doing half the job. Build in at least one afternoon with no tee time. The golf is the reason to come. The rest is why the trip still feels good when the scorecard does not.",
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
        text: 'Want the golf side arranged properly: courses, routing, tee times, buggies, rentals, and a clear quote before anything is booked?',
        linkLabel: 'Ask Andy to plan the golf →',
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
        src: '/images/blog-trip-planning/alcanada-flag-green.webp',
        alt: 'A flag on the green at Alcanada with the sea and mountains behind',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '5/4' },
        imageStyle: { objectPosition: 'center 40%' },
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
          ['Golf Club Son Servera', 'Son Servera', '72', '\u20AC80-165', '6/10', '4.0', 'Relaxed parkland, historic'],
          ["Vall d'Or Golf", "S'Horta", '71', '\u20AC99-132', '6/10', '3.5', 'East coast views, strong back nine'],
          ['Capdepera Golf', 'Arta', '72', '\u20AC85-135', '7/10', '3.5', 'Strong back nine and standout mountain hole'],
          ['Canyamel Golf', 'Capdepera', '73', '\u20AC85-145', '6/10', '4.0', 'Most photographed, east coast'],
          ['Golf Pollensa', 'Pollensa', '35 (9H)', '\u20AC65-75', '4/10', '3.5', 'Easy warm-up, Tramuntana views'],
          ['Palma Pitch & Putt', 'Son Vida \u00B7 Palma', '27 (9H)', '\u20AC27-30', '2/10', '3.0', 'Beginners, approach practice'],
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
        'Golf club rentals in Mallorca cost €25–€65 a day. Companies compared, club quality, and where to get the best price in 2026.',
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
  'golf-courses-near-palma': {
    metadata: {
      title: 'Golf Courses Near Palma, Compared',
      description:
        'Ten courses within 25 minutes of Palma Cathedral, compared by a PGA pro: handicap limits, walking, and which one to book first.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-courses-near-palma',
      image: 'https://www.mrmallorcagolf.com/images/son-gual-blog/sg-hero.webp',
      imageAlt: 'Son Gual golf course near Palma, Mallorca',
    },
    meta: {
      badge: 'Palma Courses',
      badgeGold: false,
      readTime: '10 min read',
      updated: 'October 2026',
      title: 'Golf Courses Near Palma: Which to Play',
      intro:
        'Ten courses sit within 25 minutes of Palma Cathedral. They run from a nine-hole pitch and putt with no handicap rule to Son Gual, where the limit is 28 for men and the greens punish a loose approach.',
      related: [
        { slug: 'son-gual-review', title: 'Son Gual Golf - Worth It? (2026)' },
        { slug: 'son-muntaner-review', title: 'Son Muntaner Golf - Best in Spain? (2026)' },
        { slug: 't-golf-palma-review', title: 'T Golf Palma - Review (2026)' },
        { slug: 'where-to-stay-mallorca-golf', title: 'Where to Stay in Mallorca for Golf' },
      ],
    },
    blocks: [
      {
        type: 'image',
        src: '/images/son-gual-blog/sg-hero.webp',
        alt: 'Son Gual Golf Course, Mallorca',
        caption: 'Son Gual. 11 km from Palma. Feels considerably further once the wind picks up on the first tee.',
      },
      {
        type: 'paragraph',
        text: 'Staying in Palma gives you the widest choice of golf on the island without a long drive. The table is the short version. The sections after it are what I would tell you if you asked me which one to book.',
      },
      { type: 'heading', text: 'Quick answer' },
      {
        type: 'table',
        headers: ['Course', 'From Palma Cathedral', 'Max handicap (men / ladies)', 'Best for'],
        rows: [
          ['Son Gual', '20 min', '28 / 36', 'A serious championship round'],
          ['Son Muntaner', '15 min', '36 / 36', 'Premium conditioning, buggy included'],
          ['Son Vida', '15 min', '54 / 54', 'History, a short and tight layout'],
          ['Son Quint', '15 min', '54 / 54', 'Groups with mixed handicaps'],
          ['Palma Pitch & Putt', '10 min', 'No certificate', 'New golfers, juniors, short-game practice'],
          ['T Golf Palma', '25 min', '28 / 34', 'Risk-reward holes and a quiet early start'],
          ['Son Termes', '25 min', '36 / 36', 'Character and views at a lower price'],
          ['Son Antem West', '25 min', '36 / 36', 'Relaxed resort golf, flat walking'],
          ['Son Antem East', '25 min', '54 / 54', 'Higher handicappers'],
          ['Maioris', '25 min', '54 / 54', 'A first or last round near the airport'],
        ],
      },
      {
        type: 'paragraph',
        text: 'The handicap figures are each club\'s maximum, and every course except the pitch and putt requires a handicap certificate. Real Golf de Bendinat is also 15 minutes from the city, but it plays like the southwest courses, so it is in my <a href=\'/guides/southwest-mallorca-golf-courses-compared\'>southwest Mallorca comparison</a>.',
      },

      { type: 'heading', text: 'Son Gual: the strongest round near Palma' },
      {
        type: 'paragraph',
        text: 'Son Gual is my most-played course and my favourite on the island. Thomas Himmel\'s 2007 design sits about 20 minutes from the city, and it seems to make its own weather. I can leave a calm morning at home in the southwest and find it blowing properly on the 1st tee. It stays that way for four hours.',
      },
      {
        type: 'paragraph',
        text: 'The greens are fast and raised. In January they were cut so tight that one of my playing partners reached for her putter with about 30 yards of fringe still to cover. The bunkers sit exactly where a slight mishit finishes, and a short-sided chip to a raised green is hard to stop. The closing stretch from the 15th is among the best four holes in European golf. The best views over the Bay of Palma come between the 8th and the 12th.',
      },
      {
        type: 'paragraph',
        text: 'One thing to check before booking: the limit is 28 for men and 36 for ladies. If your game is rusty, I would not make this the first round of the trip. More detail in the <a href=\'/guides/son-gual-review\'>Son Gual review</a>.',
      },

      { type: 'heading', text: 'The Arabella courses: Son Muntaner, Son Vida and Son Quint' },
      {
        type: 'paragraph',
        text: 'Three 18-hole courses and a pitch and putt share one estate in the Son Vida area, a few minutes apart and booked through the same Arabella Golf Mallorca system. I have played all three full courses. The numbers show how differently they are set up: the handicap limit is 36 at Son Muntaner and 54 at the other two, and only Son Muntaner includes the buggy.',
      },
      {
        type: 'table',
        headers: ['', 'Son Muntaner', 'Son Vida', 'Son Quint'],
        rows: [
          ['Opened', '2000', '1964', '2007'],
          ['Par', '72', '70 or 71', '71'],
          ['Max handicap', '36', '54', '54'],
          ['Buggy', 'Included, March to late November', 'Optional', 'Optional'],
          ['Practice', 'Toptracer range', 'Net and putting green only', 'Separate driving range'],
          ['2026 green fee', '€99-€260', '€84-€190', '€76-€172'],
        ],
      },
      { type: 'subheading', text: 'Son Muntaner' },
      {
        type: 'paragraph',
        text: 'Son Muntaner was named Best Golf Course in Spain at the 2025 World Golf Awards, and having played it, the title is earned. The greens are the clearest reason: on a Saturday morning with a full tee sheet they rolled pure and held their pace all the way round, with room to get quicker into summer. The service from arrival to the 18th green is at the same level, and the restaurant is worth staying for.',
      },
      {
        type: 'paragraph',
        text: 'This is a positional course. The opening six holes are tight, with water and defined landing areas, and the layout does not show you everything from the tee. The back nine gives the driver more room, but the greens stay small and look bigger than they are from distance. The 7th is a short par 3 with a severe drop where most people come up short. The 15th has an olive tree of roughly a thousand years in the middle of the fairway, protected as a natural monument, and the hole was built around it. Once you see how the landing areas work, the design feels fair, and a good shot gets a clear reward.',
      },
      {
        type: 'image',
        src: '/images/son-muntaner-blog/sm-7.webp',
        alt: 'Son Muntaner golf hole Mallorca tight par 3 with stone wall and bunker',
        caption: 'The 7th. Short par 3, but the severe drop makes distance control harder than the yardage suggests. Most people come up short.',
      },
      {
        type: 'paragraph',
        text: 'It is 15 minutes from the cathedral, and the buggy comes with the green fee from March to late November, which you will want on the climbs to several tees. One thing to note: bunker sand was inconsistent when I played, firmer in some bunkers and softer in others. It has dynamic pricing, from around €99 at quiet times to €260 at peak, so with flexible dates the same round can cost less than half as much. Full detail in the <a href=\'/guides/son-muntaner-review\'>Son Muntaner review</a>.',
      },
      { type: 'subheading', text: 'Son Vida' },
      {
        type: 'paragraph',
        text: 'Son Vida opened in 1964, the first course on the island, and Seve Ballesteros won the 1990 Open de Baleares here in a playoff. From the yellow tees it measures 5,470m, short by modern standards, and that number misleads people. Most of the greens slope hard and several have two tiers, so an approach on the wrong tier leaves a very difficult putt.',
      },
      {
        type: 'paragraph',
        text: 'The first 12 holes run between houses and the hotel with little spare ground, and the buildings mark the edge of many of them. The last six open out, with more space and clearer choices from the tee, and they are the better holes. The 14th is a 327m dogleg left with water short of the green, where a good drive leaves a short pitch. The 18th is a 460m par 5 with water up the right and the hotel behind the green.',
      },
      {
        type: 'paragraph',
        text: 'There is no driving range, only a net and a putting green, so warm up at Son Muntaner\'s range two minutes away. The card has two versions of the course: par 70, with the 2nd as a 191m par 3, or par 71 with it as a 259m par 4. Sheraton guests get a lower rate, and my client paid €88. More in the <a href=\'/guides/son-vida-review\'>Son Vida review</a>.',
      },
      {
        type: 'image',
        src: '/images/son-vida-blog/son-vida-1.webp',
        alt: 'Stone wall marked 1964 with the Son Vida crest, among trees at Son Vida golf course Mallorca',
        caption: 'The 1964 marker by the 4th tee. Son Vida is the oldest course in Mallorca.',
      },
      { type: 'subheading', text: 'Son Quint' },
      {
        type: 'paragraph',
        text: 'Son Quint is the newest of the three and the one I would book for a group with a wide spread of handicaps. The limit is 54, there are four tee positions, and the front nine is flat and an easy walk. It is an easy course to walk, and even hitting irons off the back tees there is plenty to think about. Several greens sit above the fairway and they are firm, so a short-sided chip runs away from you.',
      },
      {
        type: 'paragraph',
        text: 'The back nine plays like a different course, with more blind shots and tighter lines as the hills get closer. The 12th is a 195m par 3 almost entirely over water. The 13th is a dogleg-left par 5 off a narrow tee. If you walk, follow the buggy path between holes: the signage is not always clear, and twice we set off the wrong way for the next tee. More in the <a href=\'/guides/son-quint-review\'>Son Quint review</a>.',
      },
      {
        type: 'image',
        src: '/images/son-quint-blog/son-quint-3.webp',
        alt: 'The par 3 12th hole at Son Quint golf course Mallorca playing almost entirely over water',
        caption: 'The 12th, almost entirely over water. Take your par and move on.',
      },
      { type: 'subheading', text: 'Palma Pitch & Putt' },
      {
        type: 'paragraph',
        text: 'Palma Pitch & Putt is nine holes, par 27 and 638m in total, with no handicap certificate needed. It sits less than 100 metres from Son Quint\'s driving range. It is an hour of wedges and putting, a first round for a new golfer or a junior, or a warm-up the evening before a full round.',
      },
      { type: 'subheading', text: 'Which Arabella course first' },
      {
        type: 'paragraph',
        text: 'If you are playing one Arabella round, book Son Muntaner. For two, play Son Quint first on its flat front nine, then Son Muntaner as the main round. Son Vida is the third choice, for the history or if you are staying at the Sheraton. It gets busy around the 1st tee by mid-morning, so book early.',
      },

      { type: 'heading', text: 'T Golf Palma: the quiet one under the flight path' },
      {
        type: 'paragraph',
        text: 'Jack Nicklaus designed T Golf Palma, his only course in Mallorca. It opened in 2006 and was fully renovated in 2022, and I gave it 9/10. We had the 7:30 first tee time and nobody in front of us. For most of the round there is no building in view, only the planes coming over from the airport.',
      },
      {
        type: 'paragraph',
        text: 'The course makes you think from the tee. The 8th is 334m with water down the entire right side, and even a safe iron left of it leaves a wedge into a narrow sliver of green. The 15th has water right, trees left and a second carry over water into the green. The 18th is the hardest tee shot to line up on the course: a drive that looks safe from the tee can still go missing.',
      },
      {
        type: 'image',
        src: '/images/t-golf-palma-blog/t-golf-palma-4.webp',
        alt: 'The water hazard down the right of the 8th hole at T Golf Palma under a cloudy sky',
        caption: 'The water down the right on 8. Even the safe route off the tee leaves a demanding second shot into a narrow green.',
      },
      {
        type: 'paragraph',
        text: 'The greens are fast, small and undulating, and the rough grabs the club, so a missed green usually leaves a harder chip than it looks. The limit is 28 for men and 34 for ladies. The range is one of the biggest near Palma, with 42 bays, 14 of them covered. Full detail in the <a href=\'/guides/t-golf-palma-review\'>T Golf Palma review</a>.',
      },

      { type: 'heading', text: 'Son Termes: character at a lower price' },
      {
        type: 'paragraph',
        text: 'Son Termes is par 70 and 5,285m, in the Tramuntana foothills near Bunyola, 25 minutes from the city, with green fees around €90 to €110. I played it with a friend on a 20 handicap who was running low on balls by the back nine. The rough is tight and several tee shots leave very little room. Some are blind: on the 13th, even from the middle of the fairway, you have close to 175 metres to a flag you cannot see.',
      },
      {
        type: 'paragraph',
        text: 'Short holes give a good player chances. Several par 4s are driveable or close to it, and the par 5 6th is reachable for a long hitter. The back nine climbs steeply, so most players take a buggy, and on a clear morning the upper holes look across to Castell de Bellver and the cathedral. Expect goats.',
      },
      {
        type: 'paragraph',
        text: 'One thing to note: the greens are good but below the level of Son Gual or Alcanada. For the price, I think that is a fair trade. More in the <a href=\'/guides/son-termes-review\'>Son Termes review</a>.',
      },
      {
        type: 'image',
        src: '/images/son-termes-blog/st-4.webp',
        alt: 'Son Termes golf course Mallorca panoramic view over the Tramuntana foothills and the Palma plain',
        caption: 'The view from the upper holes. Castell de Bellver and the cathedral were visible on the skyline on a clear morning.',
      },

      { type: 'heading', text: 'Son Antem: two resort courses near Llucmajor' },
      {
        type: 'paragraph',
        text: 'Son Antem is a resort with two courses, a hotel and one of the largest golf academies in Europe, about 25 minutes south of Palma. West is par 72 and 6,293m, flat and easy to walk, in open countryside with no houses in view. The 16th is the best hole, an uphill dogleg-right par 5 through the trees to a small, protected green.',
      },
      {
        type: 'paragraph',
        text: 'Where West falls short: a large part of it is flat and asks little from the tee, so you can play those holes on autopilot. The green fee, €109 to €145, is close to Son Gual\'s. On a Sunday at 7:50 there were already three or four groups waiting on the 1st, so book a weekday morning. More in the <a href=\'/guides/son-antem-west-review\'>Son Antem West review</a>.',
      },
      {
        type: 'paragraph',
        text: 'East is the more open of the two, with wide fairways and five lakes, and its handicap limit is 54 against West\'s 36. For a higher handicapper, East is the Son Antem course I would book.',
      },
      {
        type: 'image',
        src: '/images/son-antem-west-review-blog/son-antem-west-2.webp',
        alt: '16th hole approach at Son Antem West, par 5 through the trees, Mallorca',
        caption: 'Approaching the 16th. An uphill par 5 that winds through the trees before finishing at a small, protected green.',
      },

      { type: 'heading', text: 'Maioris: a first or last round near the airport' },
      {
        type: 'paragraph',
        text: 'Maioris is about 25 minutes from Palma on the Llucmajor side, close enough to the airport to fit around a flight. It is par 72 and 6,300m, with a handicap limit of 54, a driving range with grass as well as mats, and an all-grass chipping area. The last holes include two significant climbs, so take a buggy if your legs are tired from travelling.',
      },

      { type: 'heading', text: 'How I would plan three rounds from Palma' },
      {
        type: 'list',
        items: [
          { label: 'First round:', text: 'Son Quint, T Golf Palma or Son Antem West. Flat walking or a quiet early tee time, and room off the tee while you shake off the flight.' },
          { label: 'Main round:', text: 'Son Gual if your game is in decent order, Son Muntaner if you want the buggy included and the shortest transfer.' },
          { label: 'Third round:', text: 'Son Termes for something different at a lower price, or the drive north to <a href=\'/guides/alcanada-review\'>Alcanada</a> or west to <a href=\'/guides/t-golf-calvia-review\'>T Golf Calvià</a>.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Take the first tee time wherever you can get it. At T Golf Palma we had the course to ourselves at 7:30, and at Son Quint the early start meant a quiet course and freshly cut greens.',
      },
      {
        type: 'cta',
        text: 'Staying in Palma? Send me your handicaps and dates and I will suggest the courses, book the tee times, or play the main round with you.',
        href: '/play-with-a-pro',
        linkLabel: 'Play With A Pro',
        internal: true,
      },
    ],
  },

  'southwest-mallorca-golf-courses-compared': {
    metadata: {
      title: 'Southwest Mallorca Golf Courses Compared',
      description:
        'T Golf Calvià, Golf de Andratx and Santa Ponsa 1 compared by a PGA pro who has played all three, plus Bendinat and the members-only Santa Ponsa courses.',
      canonical: 'https://www.mrmallorcagolf.com/guides/southwest-mallorca-golf-courses-compared',
      image: 'https://www.mrmallorcagolf.com/images/t-golf-calvia-social.jpg',
      imageAlt: 'T Golf Calvià, southwest Mallorca',
    },
    meta: {
      badge: 'Southwest',
      badgeGold: false,
      readTime: '5 min read',
      updated: 'October 2026',
      title: 'Southwest Mallorca Golf Courses Compared',
      intro:
        'T Golf Calvià, Golf de Andratx and Santa Ponsa 1 are the three public courses to choose between in the southwest, and I have played all three. Each tests something different: carries and distance judgement at Calvià, elevation and blind shots at Andratx, length at Santa Ponsa 1.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Review (2026)' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Review (2026)' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Review (2026)' },
        { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca (2026)' },
      ],
    },
    blocks: [
      {
        type: 'image',
        src: '/images/t-golf-calvia-blog/t-golf-calvia-4.webp',
        alt: 'Fairway at T Golf Calvià with windmill and Tramuntana mountains in the background',
        caption: 'The windmills and Tramuntana backdrop are a consistent feature throughout the round.',
      },
      {
        type: 'paragraph',
        text: 'I live in the southwest, so these are the courses closest to home. Real Golf de Bendinat sits between them and Palma, and Santa Ponsa 2 and 3 are members-only. Here is how they compare.',
      },
      { type: 'heading', text: 'Quick answer' },
      {
        type: 'table',
        headers: ['Course', 'Par', 'Max handicap (men / ladies)', 'Walking', 'Difficulty', 'Best for'],
        rows: [
          ['T Golf Calvià', '72', '28 / 34', 'Walkable, buggy more comfortable', '7/10', 'The best-conditioned round in the southwest'],
          ['Golf de Andratx', '72', '28 / 36', 'Buggy compulsory before 2pm', '9/10', 'The hardest test, and the views'],
          ['Santa Ponsa 1', '72', '36 / 36', 'Flat but long', '8/10', 'Hitting driver on wide fairways'],
          ['Real Golf de Bendinat', '69', '36 / 36', 'Very hilly', '6/10', 'A short round near Illetas and Portals'],
          ['Santa Ponsa 2 and 3', '72 and 30', 'Members only', 'Easy', '7/10 and 4/10', 'Only if you play with a member'],
        ],
      },

      { type: 'heading', text: 'T Golf Calvià: the best-conditioned course in the southwest' },
      {
        type: 'paragraph',
        text: 'I teed off at 15:20 on a Tuesday and could hear the wind in the pines between shots. From most fairways there is no road or building in sight, only pine trees, water and the Tramuntana. John Harris designed the course in 1978, and a €10 million renovation rebuilt it. The conditioning is as good as anything I have played on the island, down to a bunker rake designed so the ball rarely rests against it.',
      },
      {
        type: 'paragraph',
        text: 'Fifteen lakes line fairways and force carries from the tee, and several approaches hide the bottom of the flag, so work from your yardage instead of your eye. The 10th is the clearest decision on the course. It doglegs right with a windmill on the left and water on the right, and you choose how much of the water to cut off. The 18th is a tight par 5 that opens up as you go down it, and rewards you for committing to the narrow tee shot.',
      },
      {
        type: 'image',
        src: '/images/t-golf-calvia-blog/t-golf-calvia-7.webp',
        alt: 'Bunker at T Golf Calvià showing the distinctive rake design',
        caption: 'The rake design means the ball rarely comes to rest against the face. A small detail that makes a real difference.',
      },
      {
        type: 'paragraph',
        text: 'I gave it 9/10. The limit is 28 for men and 34 for ladies, and I would not put a higher handicapper here as the first round of a holiday. Book a midweek twilight slot: the twilight rate starts at €150 against a peak fee of €210, and the light is at its best. The range is grass, which not every Mallorca club offers, and with this many carries it is worth hitting balls before the 1st. Full detail in the <a href=\'/guides/t-golf-calvia-review\'>T Golf Calvià review</a>.',
      },

      { type: 'heading', text: 'Golf de Andratx: the hardest test, and the views' },
      {
        type: 'paragraph',
        text: 'Andratx sits in the hills above Camp de Mar and is one of the hardest courses on the island. I rated it 7.5/10. Creeks and water cut across the fairways instead of running alongside them, so being slightly off on your yardage puts you in trouble. Elevation change is constant. Tee shots disappear from view, approaches go to flags you cannot see, and the par 3s play very differently to the card because of the drops.',
      },
      {
        type: 'paragraph',
        text: 'The 6th, the Green Monster, is the longest par 5 in Spain at 609 metres. We had the wind behind us and it still took everything. The 12th is a sharp dogleg right with Camp de Mar below you for the whole hole, one of the best holes I have played in Mallorca. The 15th, Hello Mrs Robinson, plays about 20 yards shorter from a high tee to a well-protected green.',
      },
      {
        type: 'image',
        src: '/images/golf-andratx-blog/andratx-hole-8.webp',
        alt: 'View from hole 8 at Golf de Andratx looking down over the southwest of Mallorca',
        caption: 'Hole 8, A Love of Mallorca. From one of the highest points on the course, looking down over the whole southwest of Mallorca.',
      },
      {
        type: 'paragraph',
        text: 'Practical points: buggies are compulsory before 2pm, the limit is 28 for men and 36 for ladies, and the practice ground is across the road from the clubhouse. For all the height, the sea is only in view from the 2nd. Bring a GPS or course planner, because several approaches are semi-blind. More in the <a href=\'/guides/golf-andratx-review\'>Golf de Andratx review</a>.',
      },

      { type: 'heading', text: 'Santa Ponsa 1: the long, wide one' },
      {
        type: 'paragraph',
        text: 'Santa Ponsa 1 hosted the 2021 European Tour Mallorca Golf Open, the first tour event on the island in ten years, and the winner, Jeff Winther, shot 62 twice. The fairways are wide and the opening holes are generous. After a round at Son Gual or Andratx, where driver often stays in the bag, this is the course that lets you hit it.',
      },
      {
        type: 'paragraph',
        text: 'The length is the catch. The 10th is 590m, one of the longest par 5s in Europe. The par 3s are long with small greens, so they are about damage limitation more than birdie chances. On a calm day the course flatters you. The wind usually arrives by mid-morning, so book early. Holes 5, 6 and 7 have some of the best Tramuntana views on the island.',
      },
      {
        type: 'image',
        src: '/images/santa-ponsa-blog/sp-1.webp',
        alt: 'Santa Ponsa 1 fairway with mountains behind',
        caption: 'The fairways are wide. This is a course that invites the driver.',
      },
      {
        type: 'paragraph',
        text: 'It suits a confident driver of the ball, and it works as an easier round early in a trip before Andratx. The limit is 36, with a certificate required, and buggy hire is €43. More in the <a href=\'/guides/santa-ponsa-1-review\'>Santa Ponsa 1 review</a>.',
      },

      { type: 'heading', text: 'Real Golf de Bendinat' },
      {
        type: 'paragraph',
        text: 'Bendinat is the closest of the group to Palma, about 15 minutes, between Illetas and Portals. Martin Hawtree designed the original nine holes in 1986, and it became 18 in 1995. It is par 69, 5,660m and very hilly, with views over the Bay of Palma, Cabrera and Bendinat Castle. Visitor green fees are limited each day, so book ahead. If you are staying in Illetas or Portals and want a short round without a drive, this is the one to look at.',
      },
      {
        type: 'image',
        src: '/images/courses/bendinat.webp',
        presentation: 'natural',
        naturalWidth: 900,
        naturalHeight: 480,
        alt: 'Real Golf de Bendinat, Mallorca',
      },

      { type: 'heading', text: 'Santa Ponsa 2 and 3: members only' },
      {
        type: 'paragraph',
        text: 'Both are members-only, and guests can play only with a member, so neither belongs in a trip plan unless you know one. Santa Ponsa 2 is an 18-hole course from 1991. Santa Ponsa 3 is nine short holes through a residential area.',
      },

      { type: 'heading', text: 'Which to book' },
      {
        type: 'paragraph',
        text: 'For the best round in the southwest, book T Golf Calvià. For the hardest test and the best views, book Andratx, with a course planner and an early tee time. If you drive it well and want to enjoy that, book Santa Ponsa 1. Check the limits before you plan around Calvià or Andratx: at 28 for men, they rule out many higher handicappers before the course does.',
      },
      {
        type: 'cta',
        text: 'Playing the southwest? Tell me where you are staying and your handicap, and I will book the right course or play it with you.',
        href: '/play-with-a-pro',
        linkLabel: 'Play With A Pro',
        internal: true,
      },
    ],
  },

  'best-mallorca-golf-courses-higher-handicappers': {
    metadata: {
      title: 'Mallorca Golf for Higher Handicappers',
      description:
        'Every Mallorca course\'s handicap limit in one table, the courses I would book for a 20-plus handicapper, and the ones to leave until later in the trip.',
      canonical: 'https://www.mrmallorcagolf.com/guides/best-mallorca-golf-courses-higher-handicappers',
      image: 'https://www.mrmallorcagolf.com/images/son-quint-blog/son-quint-2.webp',
      imageAlt: 'Son Quint golf course with a view over Palma',
    },
    meta: {
      badge: 'Course Choice',
      badgeGold: false,
      readTime: '4 min read',
      updated: 'October 2026',
      title: 'Best Mallorca Golf Courses for Higher Handicappers',
      intro:
        'Almost every course in Mallorca sets a handicap limit, and the limits run from 28 to 54. That number is the first filter. The second is the kind of trouble: water you can see from the tee costs a 25-handicapper far fewer shots than blind tee shots and raised greens.',
      related: [
        { slug: 'son-quint-review', title: 'Son Quint Golf - Review (2026)' },
        { slug: 'son-antem-west-review', title: 'Son Antem West - Review (2026)' },
        { slug: 'son-vida-review', title: 'Son Vida Golf - Review (2026)' },
        { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 Golf - Review (2026)' },
      ],
    },
    blocks: [
      {
        type: 'image',
        src: '/images/son-quint-blog/son-quint-2.webp',
        presentation: 'natural',
        naturalWidth: 1200,
        naturalHeight: 1600,
        alt: 'Olive tree branches framing a view over Palma from the Son Quint fairway',
        caption: 'Olive trees on the front nine at Son Quint, with Palma spread out beyond.',
      },
      {
        type: 'paragraph',
        text: 'This guide is for golfers who play 18 holes regularly and carry a handicap somewhere above 20. If you are newer to the game than that, start at Palma Pitch & Putt, which needs no certificate.',
      },
      { type: 'heading', text: 'Handicap limits at every Mallorca course' },
      {
        type: 'paragraph',
        text: 'These are the maximums on file for 2026.',
      },
      {
        type: 'table',
        headers: ['Course', 'Area', 'Men', 'Ladies'],
        rows: [
          ['Son Quint', 'Palma', '54', '54'],
          ['Son Vida', 'Palma', '54', '54'],
          ['Son Antem East', 'South', '54', '54'],
          ['Maioris', 'South', '54', '54'],
          ['Canyamel', 'East', '36', '45'],
          ['Son Muntaner', 'Palma', '36', '36'],
          ['Son Termes', 'Palma', '36', '36'],
          ['Son Antem West', 'South', '36', '36'],
          ['Santa Ponsa 1', 'Southwest', '36', '36'],
          ['Real Golf de Bendinat', 'Southwest', '36', '36'],
          ['Golf Pollença (9 holes)', 'North', '36', '36'],
          ['Pula', 'East', '36', '36'],
          ['Capdepera', 'East', '36', '36'],
          ['Son Servera', 'East', '36', '36'],
          ['Vall d\'Or', 'East', '36', '36'],
          ['Alcanada', 'North', '33', '35'],
          ['Son Gual', 'Palma', '28', '36'],
          ['Golf de Andratx', 'Southwest', '28', '36'],
          ['T Golf Calvià', 'Southwest', '28', '34'],
          ['T Golf Palma', 'Palma', '28', '34'],
          ['Palma Pitch & Putt', 'Palma', 'No certificate', 'No certificate'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Santa Ponsa 2 and 3 are members-only and Reserva Rotana is for hotel guests, so they are left out.',
      },

      { type: 'heading', text: 'The courses I would book first' },
      { type: 'subheading', text: 'Son Quint' },
      {
        type: 'paragraph',
        text: 'Son Quint takes a handicap of 54, has four tee positions and wide fairways, and the front nine is flat and an easy walk. It is the course I would book when one player in the group is strong and another is still finding the game. The back nine has enough blind shots and tight lines to keep the better player busy.',
      },
      {
        type: 'paragraph',
        text: 'Two things to know. The 12th is a 195m par 3 almost entirely over water, with bunkers covering most of the ground that is not water. And several greens sit above the fairway and they are firm, so take one more club into them than you think. More in the <a href=\'/guides/son-quint-review\'>Son Quint review</a>.',
      },
      { type: 'subheading', text: 'Son Antem East and West' },
      {
        type: 'paragraph',
        text: 'East is the more open of the two Son Antem courses, with wide fairways, five lakes and a limit of 54, and it is flat enough to walk. West takes 36. Its open holes give you a wide landing area and a straightforward approach, so a higher handicapper can swing freely on most of the course.',
      },
      {
        type: 'paragraph',
        text: 'If your short game needs work, Son Antem\'s practice ground is one of the largest in Europe, with an approach green and bunkers to warm up on.',
      },
      {
        type: 'image',
        src: '/images/son-antem-west-review-blog/son-antem-west-4.webp',
        alt: 'Andy Griffiths with clients on a play-with-a-pro day at Son Antem West, Mallorca',
        caption: 'A play-with-a-pro day at Son Antem West. The layout is forgiving enough that guests can play freely.',
      },
      { type: 'subheading', text: 'Maioris' },
      {
        type: 'paragraph',
        text: 'Maioris takes 54 and sits about 25 minutes from Palma. The range has grass tees and there is an all-grass chipping area, so you can warm up properly before the round. The last holes include two significant climbs, so take a buggy if you are not used to hills.',
      },
      { type: 'subheading', text: 'Son Vida, if you hit it straight' },
      {
        type: 'paragraph',
        text: 'Son Vida also takes 54, and at 5,470m from the yellow tees it is short. The catch for a higher handicapper is the first 12 holes, which run tight between houses and the hotel. The greens have two tiers, and finishing on the wrong one leaves a very hard putt. A player who is short but straight will enjoy it. A player who sprays the driver will spend the morning near the boundary. More in the <a href=\'/guides/son-vida-review\'>Son Vida review</a>.',
      },
      { type: 'subheading', text: 'Santa Ponsa 1, if you hit it far' },
      {
        type: 'paragraph',
        text: 'Santa Ponsa 1 takes 36, and the fairways are wide enough to use driver all day. The length is what costs shots: the 10th is 590m and the par 3s are long with small greens. A higher handicapper who hits it a long way will score better here than on most courses with this limit. One who does not will find the par 3s hard work. More in the <a href=\'/guides/santa-ponsa-1-review\'>Santa Ponsa 1 review</a>.',
      },

      { type: 'heading', text: 'Shorter options' },
      {
        type: 'paragraph',
        text: 'Palma Pitch & Putt is nine holes, par 27, 638m in total, with no certificate needed. Golf Pollença in the north is nine holes, par 35, with a limit of 36 and a golf school on site. It includes two of the longest holes in Mallorca, so it is a proper round in half the time.',
      },
      {
        type: 'image',
        src: '/images/courses/palma-pitch-putt.webp',
        presentation: 'natural',
        naturalWidth: 900,
        naturalHeight: 599,
        alt: 'Palma Pitch & Putt, Mallorca',
      },

      { type: 'heading', text: 'Courses to leave until later in the trip' },
      {
        type: 'paragraph',
        text: 'Son Gual, T Golf Calvià, T Golf Palma and Golf de Andratx all cap men at 28, which rules many higher handicappers out before the course does. Within the limit, each has a specific problem for a player still building consistency:',
      },
      {
        type: 'list',
        items: [
          { label: 'Son Gual:', text: 'fast, raised greens and bunkers placed where a slight mishit finishes.' },
          { label: 'T Golf Calvià:', text: '15 lakes and carries from the tee, with approaches that hide the bottom of the flag. I would not make it a higher handicapper\'s first round of a holiday.' },
          { label: 'T Golf Palma:', text: 'water down the whole right side of the 8th and 15th, and rough that grabs the club around small greens.' },
          { label: 'Golf de Andratx:', text: 'blind tee shots, creeks across the fairways, and par 3s that play nothing like their yardage. Buggies are compulsory before 2pm.' },
          { label: 'Alcanada:', text: 'a limit of 33 for men, 58 bunkers and severely undulating greens. Worth the drive once your game is warm.' },
        ],
      },

      { type: 'heading', text: 'Two things that save shots' },
      {
        type: 'list',
        items: [
          { label: 'Play the forward tees for the first round.', text: 'Son Quint has four tee positions. Use them.' },
          { label: 'Take a buggy on the hilly courses.', text: 'The back nine at Son Termes, the last holes at Maioris, and anywhere before 2pm at Andratx, where it is compulsory.' },
        ],
      },
      {
        type: 'cta',
        text: 'Not sure your handicap gets you onto the course you want? Send me your handicap and dates and I will tell you which courses take it, book them, or play the first round with you.',
        href: '/play-with-a-pro',
        linkLabel: 'Play With A Pro',
        internal: true,
      },
    ],
  },

  'best-golf-practice-facilities-mallorca': {
    metadata: {
      title: 'Best Driving Ranges in Mallorca',
      description:
        'TrackMan, Toptracer and grass ranges in Mallorca compared by a PGA professional: where to measure, where to warm up and where to work on the short game.',
      canonical: 'https://www.mrmallorcagolf.com/guides/best-golf-practice-facilities-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/t-golf-calvia-social.jpg',
      imageAlt: 'T Golf Calvià, Mallorca',
    },
    meta: {
      badge: 'Practice',
      badgeGold: false,
      readTime: '4 min read',
      updated: 'October 2026',
      title: 'Best Golf Practice Facilities in Mallorca',
      intro:
        'Four Mallorca clubs have ball tracking built into the range bays, and several more let you hit off grass. Which one to use comes down to the job: measuring your numbers, warming up for a round, or working on the short game.',
      related: [
        { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Review (2026)' },
        { slug: 'golf-andratx-review', title: 'Golf de Andratx - Review (2026)' },
        { slug: 'son-gual-review', title: 'Son Gual Golf - Worth It? (2026)' },
        { slug: 'on-course-coaching-mallorca', title: 'On-Course Golf Coaching in Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'image',
        src: '/images/son-quint-blog/son-quint-7.webp',
        presentation: 'natural',
        naturalWidth: 1200,
        naturalHeight: 1600,
        alt: 'Putting green at Son Quint golf course with an orange Son Quint flag in the foreground',
        caption: 'The putting green at Son Quint.',
      },
      {
        type: 'paragraph',
        text: 'A range session before a Mallorca round has one of three jobs. Measuring tells you your carry distances, the number that matters on courses with water and big drops such as T Golf Calvià and Andratx. Warming up gets the body ready for the 1st tee. Short-game practice is where most strokes come back on a trip. Each facility below is good at some of those jobs and weak at others.',
      },
      { type: 'heading', text: 'Quick answer' },
      {
        type: 'table',
        headers: ['You want', 'Go to', 'What is there'],
        rows: [
          ['Numbers on every ball, open to the public', 'Golf de Andratx or Pula', 'TrackMan range'],
          ['Ball tracking before a big round', 'Son Muntaner or Alcanada', 'Toptracer range'],
          ['Short-game work', 'T Golf Calvià or Golf de Andratx', 'Target greens, chipping areas and bunkers'],
          ['Hitting off grass', 'T Golf Calvià, Maioris, Son Antem or Son Termes', 'Grass tees'],
          ['The biggest practice ground', 'Son Antem', 'Circular range for 200+ players'],
          ['Practice near Palma', 'T Golf Palma', '42 bays, 14 covered, 250m long'],
        ],
      },

      { type: 'heading', text: 'T Golf Calvià: the best grass practice ground' },
      {
        type: 'paragraph',
        text: 'T Golf Calvià has 40 stations on an all-grass range, and seven target greens at different distances protected by ten bunkers. Around them are two putting greens, two chipping greens and two pitching areas with bunkers. Grass is not a given at Mallorca clubs, and the target greens give every ball a real number to aim at.',
      },
      {
        type: 'paragraph',
        text: 'The course is the reason to use it. Fifteen lakes force carries from the tee and several approaches hide the bottom of the flag, so hit enough balls to know your carries before the 1st. More in the <a href=\'/guides/t-golf-calvia-review\'>T Golf Calvià review</a>.',
      },

      { type: 'heading', text: 'Golf de Andratx: TrackMan above Camp de Mar' },
      {
        type: 'paragraph',
        text: 'Andratx has a public TrackMan Range with 21 tees, seven of them covered, plus a short-game area and three practice bunkers. It is across the road from the clubhouse, which makes the warm-up a little unusual. When I played, the short-game area was in great condition for any shot you could want to practise. The range sits on a steep slope, and it does the job of loosening you up.',
      },
      {
        type: 'paragraph',
        text: 'The numbers matter here more than most places. The par 3s play very differently to the card because of the drops. Creeks cross the fairways, so knowing your carry is the difference between a par and a lost ball. Allow time to walk across the road and back. More in the <a href=\'/guides/golf-andratx-review\'>Golf de Andratx review</a>.',
      },

      { type: 'heading', text: 'Pula: the TrackMan range in the east' },
      {
        type: 'paragraph',
        text: 'I visited Pula\'s practice facilities. There is a two-level public TrackMan Range, two putting greens, a pitching green, and a short-game area with bunkers. It is about 70 minutes from Palma, so it makes most sense if you are staying on the east coast.',
      },
      {
        type: 'image',
        src: '/images/courses/pula.webp',
        presentation: 'natural',
        naturalWidth: 900,
        naturalHeight: 599,
        alt: 'Pula Golf, Mallorca',
      },

      { type: 'heading', text: 'Son Gual: range balls with your green fee' },
      {
        type: 'paragraph',
        text: 'Son Gual has no public ball-tracking range. Paying green-fee guests can use the range with tokens at €4 for 24 balls, and a visitor range fee is €20 with 72 balls.',
      },
      {
        type: 'paragraph',
        text: 'Use it before you play. Son Gual\'s greens are fast and raised, so ten minutes on approach distances goes straight onto the scorecard. More in the <a href=\'/guides/son-gual-review\'>Son Gual review</a>.',
      },

      { type: 'heading', text: 'Son Muntaner and Alcanada: Toptracer before a big round' },
      {
        type: 'paragraph',
        text: 'Son Muntaner has a Toptracer range, a chipping area and a putting green, and the practice facilities were at the level of the course when I played. It is also the range for Son Vida, which has only a net and a putting green and sits two minutes away.',
      },
      {
        type: 'paragraph',
        text: 'Alcanada has Toptracer, ten covered mats and ten outdoor ones, a natural-grass area in season, and a short-game area. It is about 50 minutes from Palma, so arrive early and use it before a round on greens that leave very few easy putts.',
      },
      {
        type: 'image',
        src: '/images/son-vida-blog/son-vida-7.webp',
        presentation: 'natural',
        naturalWidth: 1200,
        naturalHeight: 1600,
        alt: 'Red and white Son Vida 1964 flag on the practice putting green with the practice net behind',
        caption: 'The practice putting green, with the net behind.',
      },

      { type: 'heading', text: 'T Golf Palma: the biggest range near Palma' },
      {
        type: 'paragraph',
        text: 'T Golf Palma has 42 bays, 14 of them covered, on a 250-metre range, with putting greens and a large short-game area. If you are staying in the city and want a range session without a long drive, this is the first place I would look. More in the <a href=\'/guides/t-golf-palma-review\'>T Golf Palma review</a>.',
      },

      { type: 'heading', text: 'Son Antem: the academy' },
      {
        type: 'paragraph',
        text: 'I visited Son Antem\'s academy. The circular driving range is built for more than 200 players, with grass and artificial tees, and there is an approach green with bunkers and a putting green of about 1,000m². It is one of the largest golf academies in Europe. If your group wants to practise together before a round, it has the space.',
      },

      { type: 'heading', text: 'Maioris and Son Termes: grass close to Palma' },
      {
        type: 'paragraph',
        text: 'Maioris has a range with grass and mat tees, a large putting green, an all-grass chipping and pitching area with slopes, and a bunker. Son Termes has grass and mat hitting areas, a chipping green and a putting green. Neither has ball tracking, so they suit a warm-up or short-game work more than a measured session.',
      },

      { type: 'heading', text: 'How I would use them on a trip' },
      {
        type: 'list',
        items: [
          { label: 'The day you land:', text: 'an hour at T Golf Palma or Son Muntaner, finishing on the putting green.' },
          { label: 'Before a water course:', text: 'an hour on the grass at T Golf Calvià, so you know your carries before the lakes do.' },
          { label: 'Staying east:', text: 'Pula, for TrackMan on both levels.' },
          { label: 'For numbers:', text: 'TrackMan at Andratx before the round there, or Toptracer at Son Muntaner.' },
        ],
      },
      {
        type: 'cta',
        text: 'The range tells you your numbers. Using them on the course is the part I coach, during a full round where the shots count.',
        href: '/coaching',
        linkLabel: 'On-course coaching',
        internal: true,
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
  // Social platforms already render the title below the image, so the card
  // uses the plain course photo here - same treatment as every other page -
  // rather than a duplicate text-on-image overlay.
  const rawImageUrl = content.metadata.image?.replace('https://www.mrmallorcagolf.com', SITE_ORIGIN) || ''
  const ogImageUrl = rawImageUrl.replace(/\.webp$/i, '.jpg')

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

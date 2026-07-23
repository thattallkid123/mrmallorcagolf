import { SITE_ORIGIN, buildLocalePath, getHreflangCode } from './site.js'
import { getLocalizedGuideArticleContent } from './guide-article-content-localized.js'
import { mergeGuideContent } from './guide-content-localization.js'

export const GUIDE_ARTICLE_CONTENT = {
  'golf-cost-mallorca': {
    metadata: {
      title: 'Mallorca Golf Green Fees 2026 | All 24 Courses, €55–€260',
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
          '€20 for 9 holes or €30 for 18 holes at Palma Pitch & Putt (club hire extra), or around €55-65 if you want the cheapest full-size options such as Golf Pollença in the quieter months. Palma Pitch & Putt is a proper short-course option: great for beginners, good fun for families or mixed groups, and a low-pressure way to get clubs in hand without committing to a full round.',
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
          'Son Gual sits around €115-165. Alcanada runs roughly €115-220. Son Muntaner reaches around €260 at peak and drops to around €125 in the value window. T Golf Calvià can push to around €210, and Son Vida to around €190. The top end in Mallorca is higher than many older guides suggest.',
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
        'Planning a golf trip to Mallorca? Which courses, when to go, how many rounds, transport, clubs, and what to do when you are off the course. By a PGA professional based on the island.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
      image: 'https://www.mrmallorcagolf.com/images/blog-trip-planning/Son Gual.webp',
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
  'best-time-play-golf-mallorca': {
    metadata: {
      title: 'Best Time to Play Golf (2026)',
      description:
        'When is the best time to play golf in Mallorca? Month-by-month guide from a PGA professional based on the island - weather, green fees, course conditions, and crowds.',
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
      title: "Best Golf Courses in Mallorca 2026 | Ranked & Reviewed by a PGA Professional",
      description:
        'All 24 Mallorca (Majorca) golf courses ranked by a PGA pro who plays them. Green fees from €55–€260, difficulty ratings, and an honest verdict on who each course suits. Updated 2026.',
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
          ['Club de Golf Alcanada', "Port d'Alcudia", '72', '\u20AC115-220', '7/10', '5.0', 'Spectacular views, championship quality'],
          ['Son Muntaner', 'Son Vida - Palma', '72', '\u20AC125-260', '7/10', '4.5', 'Best-conditioned, close to Palma'],
          ['T Golf Calvia', 'Calvia', '72', '\u20AC170-210', '7/10', '5.0', 'Premium all-round experience'],
          ['Golf de Andratx', 'Camp de Mar', '72', '\u20AC90-140', '9/10', '4.0', 'Hardest test on the island'],
          ['Golf Son Vida', 'Son Vida - Palma', '70', '\u20AC80-190', '8/10', '4.5', 'Historic course, Seve won here'],
          ['T Golf Palma (Puntiro)', 'Palma', '71', '\u20AC100-140', '7/10', '4.5', 'Only Nicklaus design on island'],
          ['Golf Santa Ponsa 1', 'Santa Ponsa', '72', '\u20AC77-126', '8/10', '4.0', 'European Tour venue, public access'],
          ['Golf Santa Ponsa 2', 'Santa Ponsa', '72', 'Members only · guest with member', '7/10', '3.5', 'Quiet, members-only feel'],
          ['Golf Santa Ponsa 3', 'Santa Ponsa', '30 (9H)', 'Members only · guest with member', '4/10', '3.0', 'Beginners, approach practice'],
          ['Golf Son Quint', 'Son Vida - Palma', '71', '\u20AC70-140', '5/10', '4.0', 'All levels, Tiger Woods played here'],
          ['Real Golf de Bendinat', 'Bendinat', '70', '\u20AC74-123', '6/10', '3.5', 'Wooded valley, bay views'],
          ['Golf Son Termes', 'Bunyola', '70', '\u20AC80-100', '6/10', '3.5', 'Tramuntana mountain setting'],
          ['Golf Son Antem West', 'Llucmajor', '72', '\u20AC90-135', '7/10', '4.0', 'Resort course, tougher than Son Antem East'],
          ['Golf Son Antem East', 'Llucmajor', '72', '\u20AC90-140', '6/10', '3.5', 'Wide fairways, resort golf'],
          ['Golf Maioris', 'Llucmajor', '72', '\u20AC91-110', '7/10', '3.5', 'Underrated, quieter option'],
          ['Pula Golf', 'Son Servera', '72', '\u20AC80-145', '7/10', '4.0', 'Olazabal redesign, 8 Tour events'],
          ['Golf Club Son Servera', 'Son Servera', '72', '\u20AC80-145', '6/10', '4.0', 'Relaxed parkland, historic'],
          ["Vall d'Or Golf", "S'Horta", '71', '\u20AC99-132', '6/10', '3.5', 'East coast views, strong back nine'],
          ['Capdepera Golf', 'Arta', '72', '\u20AC85-135', '7/10', '3.5', 'Strong back nine and standout mountain hole'],
          ['Canyamel Golf', 'Capdepera', '73', '\u20AC85-145', '6/10', '4.0', 'Most photographed, east coast'],
          ['Golf Pollensa', 'Pollensa', '35 (9H)', '\u20AC55-65', '4/10', '3.5', 'Easy warm-up, Tramuntana views'],
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
      title: 'Golf Club Hire in Mallorca 2026 | Prices, Best Companies & Honest Advice',
      description:
        'Golf club hire in Mallorca costs €25–€65/day. I cover the best companies, what quality to expect, whether to bring your own, and where to get the best deal in 2026.',
      canonical: 'https://www.mrmallorcagolf.com/guides/golf-club-hire-mallorca',
      image: `${SITE_ORIGIN}/images/social-preview.webp`,
      imageAlt: 'Golf Club Hire in Mallorca - Everything You Need to Know (2026)',
    },
    meta: {
      badge: 'Practical Guide',
      badgeGold: false,
      readTime: '6 min read',
      updated: 'March 2026',
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
          'Personal delivery and collection to hotels, courses, and villas all over the island. Current season models include right and left-handed TaylorMade Qi4D, Callaway Rogue ST Max and TaylorMade Kalea for ladies. Graphite regular-flex sets start from €55 for 2 days and drop heavily for longer hires, while steel regular or stiff sets start from €70 for 2 days. Prices include delivery, collection, and advice on what is best for you. Premium end of the market, and east-coast golfers can even use a free golf shuttle service from hotel to course and back again for groups of up to 8.',
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
          'Callaway Rogue and TaylorMade Qi4D options as well as some previous-season sets at a lower price. You can add tees, balls and the little extras too, so you are properly set. A 2-day TaylorMade Qi4D rental runs around €62, with airport, hotel, and course delivery possible, and longer trips drop to around €142 for 10 days. A great all-rounder with a growing amount of very happy customers in their Google reviews.',
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
      title: "Is Mallorca Good for Golf? Yes. Here's What to Know (2026)",
      description:
        '24 courses, year-round sunshine, green fees from €55. A PGA professional based in Mallorca since 2025 gives an honest answer on courses, conditions, and what to expect.',
      canonical: 'https://www.mrmallorcagolf.com/guides/is-mallorca-good-for-golf',
      image: 'https://www.mrmallorcagolf.com/images/blog-is-mallorca-good/Son Gual.webp',
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
          'Coming from Shanghai - 27 million people with just 12 courses - the density of quality golf within a maximum one-hour drive here is remarkable. A week on the island can include four or five genuinely different, genuinely excellent rounds. Southwest, east coast, north, central Palma: each area has its own character and not just a samey resort track. The full list of every course with green fees and honest ratings is on the <a href="/golf-courses">Mallorca golf courses page</a>.',
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
  'play-with-a-pro-explained': {
    metadata: {
      title: 'What "Play with a Pro" Actually Looks Like | Mr Mallorca Golf',
      description:
        'A PGA pro joins your group for a full round: reading greens, managing wind, and improving your decisions in real time. Here is exactly what the day looks like.',
      canonical: 'https://www.mrmallorcagolf.com/guides/play-with-a-pro-explained',
      image: 'https://www.mrmallorcagolf.com/images/pwap-hero-mandarin.jpg',
      imageAlt: 'Andy Griffiths PGA pro with a client during a Play with a Pro day in Mallorca',
    },
    meta: {
      badge: 'The Experience',
      badgeGold: false,
      readTime: '5 min read',
      updated: 'June 2026',
      title: 'What "Play with a Pro" Actually Looks Like',
      intro:
        'A full day on course with a PGA professional. What happens, what changes, and what people take home that they did not expect.',
      related: [
        { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
        { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
        { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca' },
        { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
      ],
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Playing alone, you can miss what is actually happening. A shot that felt solid but came off the club slightly different. A decision that worked out but was based on incomplete information. A habit built over weeks that you do not see because you are inside it. When a PGA professional is there, those things become visible.',
      },
      {
        type: 'image',
        src: '/images/client-alcanada.webp',
        alt: 'Andy with a client at Alcanada during a Play with a Pro day',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'A Play with a Pro day at Club de Golf Alcanada',
      },
      { type: 'heading', text: 'Why Play with a Pro' },
      {
        type: 'paragraph',
        text: 'A lot of coaching is about swing positions and mechanics. This day is different. It is about the low-hanging fruit: what is the one thing in your shot selection or course management that, if it changes, makes the biggest difference. Practice types that actually work for how you learn. Questions about your own game that a practice range cannot answer. Not a full overhaul. Just the clarity to know what to work on and how.',
      },
      {
        type: 'pull',
        text: '"After just 18 holes together, I\'ve discovered a new ceiling to my potential."',
        attribution: 'Jo',
      },
      { type: 'heading', text: 'Before the Day' },
      {
        type: 'paragraph',
        text: 'The most common concern before a day like this: what if I play badly, what if I have not played for a long time. A day like this is not measured against your handicap or your best round. It is measured against what changes in how you see the game. Adam played since he was five, figured he had the fundamentals down. One day on course shifted his whole approach to shot selection. Jo had not played in years. The day opened something up for him that a week at a practice range could not.',
      },
      {
        type: 'paragraph',
        text: 'Before the first tee, we sit down and talk. Your game, what you have been working on, what has been frustrating you, what a good day looks like from where you are standing. This conversation shapes everything that happens next. It is not a questionnaire. It is how I understand what you actually need.',
      },
      { type: 'heading', text: 'During the Round' },
      {
        type: 'paragraph',
        text: 'The course is chosen to match your game. A proper test, but not unfair. Wind, conditions, narrow fairways, water: the decisions you make change with what is in front of you, and getting them right or wrong matters. On a range, a tip about club selection or alignment is abstract. On course, when the wind is pushing and the score is real, the same information becomes concrete. You feel it. That difference is what makes things stick.',
      },
      {
        type: 'paragraph',
        text: 'The coaching arrives at the right moment. On the tee into the wind where the decision is contested. On the approach where club selection changes the hole. On the putt where reading the break from the right side makes one more shot possible. Not a running commentary. Just the observation that changes the hole.',
      },
      {
        type: 'pull',
        text: '"The insight into what calculations go into each shot has helped me improve my decision making immensely."',
        attribution: 'Finlay',
      },
      {
        type: 'image',
        src: '/images/client-group-alcanada.webp',
        alt: 'Group golf day with sea views at Alcanada',
        containerStyle: { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' },
        caption: 'Group Play with a Pro days, 2 to 3 golfers',
      },
      { type: 'heading', text: 'After the Round' },
      {
        type: 'paragraph',
        text: 'When the round is done, we take some time to go through what happened. What worked well, what did not, what things to keep working on. This sometimes happens over lunch at the course, sometimes a shorter debrief at the 18th. I will also send you a summary afterwards so you do not forget the detail from the day. You finish with a clear picture, not a long list, just the things that will actually make a difference.',
      },
      {
        type: 'pull',
        text: '"He gave me clear and specific feedback that helped me correct several of my mistakes. Especially my putting, which I have struggled with, has improved a lot."',
        attribution: 'Synøve',
      },
      { type: 'heading', text: 'What\'s Included' },
      {
        type: 'facts',
        items: [
          ['Format', '18 holes, full day'],
          ['Course selection', 'Matched to your game and handicap'],
          ['What\'s included', 'Course, tee time, coaching, strategy'],
          ['Duration', 'Typically 5–6 hours'],
          ['Day rate', '€695 solo · €950 total for 2–3 golfers (course fee and lunch additional)'],
        ],
      },
      {
        type: 'cta',
        text: 'Ready to book a Play with a Pro day in Mallorca?',
        linkLabel: 'See pricing and availability →',
        href: '/play-with-a-pro',
      },
    ],
  },
  'mallorca-course-map': {
    metadata: {
      title: 'Interactive Map of All 24 Mallorca Golf Courses',
      description: 'Interactive map showing the locations of all 24 golf courses in Mallorca. Find courses by region and distance from Palma.',
      canonical: 'https://www.mrmallorcagolf.com/guides/mallorca-course-map',
      image: 'https://www.mrmallorcagolf.com/images/courses/mallorca-map.webp',
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
  const languages = Object.fromEntries(
    GUIDE_ARTICLE_LOCALES.map((lang) => [
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

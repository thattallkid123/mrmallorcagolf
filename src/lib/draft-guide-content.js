import { SITE_ORIGIN } from './site.js'

// Hidden English drafts for Andy's read, served at /draft-guides (noindex,
// unlinked). Rewritten 2026-10-08 from Andy's published reviews and the course
// master. The east Mallorca comparison is on hold (Andy's call) and its draft
// is the only file left in Drive Content\Unpublished Guide Articles. The solo-
// trip guide was dropped and the Arabella comparison merged into
// golf-courses-near-palma; their old Drive drafts were deleted 2026-10-08.
//
// Drive times are from Palma Cathedral (La Seu), taken from the course master
// (travelFromPalmaMinutes), so every guide quotes the same figure. Andy's call
// 2026-10-08: no disclaimers about courses Andy has not played; courses are written plainly.
//
// When a guide goes live: move it to guide-article-content.js and follow
// /publish-course-guide. Then link the near-Palma guide's "southwest Mallorca
// comparison" mention to /guides/southwest-mallorca-golf-courses-compared (plain
// text for now, because the link checker rejects links to unpublished drafts).
const DRAFT_SIDEBAR = {
  title: 'Draft preview for Andy',
  body: 'This page is hidden from the public guide index and blocked from indexing while the English is reviewed.',
  primary: 'Plan Your Trip',
  secondary: 'Play With A Pro',
}

export const DRAFT_GUIDE_CONTENT = {
  'golf-courses-near-palma': {
    metadata: {
      title: 'Golf Courses Near Palma, Compared',
      description:
        'Ten courses within 25 minutes of Palma Cathedral, compared by a PGA pro: handicap limits, walking, and which one to book first.',
      canonical: 'https://www.mrmallorcagolf.com/draft-guides/golf-courses-near-palma',
      image: '/images/son-gual-blog/sg-hero.webp',
      imageAlt: 'Son Gual golf course near Palma, Mallorca',
    },
    meta: {
      slug: 'golf-courses-near-palma',
      badge: 'Palma Courses',
      badgeGold: false,
      readTime: 'Draft preview',
      updated: 'October 2026',
      title: 'Golf Courses Near Palma: Which to Play',
      intro:
        'Ten courses sit within 25 minutes of Palma Cathedral. They run from a nine-hole pitch and putt with no handicap rule to Son Gual, where the limit is 28 for men and the greens punish a loose approach.',
      sidebarPlanning: DRAFT_SIDEBAR,
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
        text: 'The handicap figures are each club\'s maximum, and every course except the pitch and putt requires a handicap certificate. Real Golf de Bendinat is also 15 minutes from the city, but it plays like the southwest courses, so it is in my southwest Mallorca comparison.',
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
      canonical: 'https://www.mrmallorcagolf.com/draft-guides/southwest-mallorca-golf-courses-compared',
      image: '/images/t-golf-calvia-social.jpg',
      imageAlt: 'T Golf Calvià, southwest Mallorca',
    },
    meta: {
      slug: 'southwest-mallorca-golf-courses-compared',
      badge: 'Southwest',
      badgeGold: false,
      readTime: 'Draft preview',
      updated: 'October 2026',
      title: 'Southwest Mallorca Golf Courses Compared',
      intro:
        'T Golf Calvià, Golf de Andratx and Santa Ponsa 1 are the three public courses to choose between in the southwest, and I have played all three. Each tests something different: carries and distance judgement at Calvià, elevation and blind shots at Andratx, length at Santa Ponsa 1.',
      sidebarPlanning: DRAFT_SIDEBAR,
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
      canonical: 'https://www.mrmallorcagolf.com/draft-guides/best-mallorca-golf-courses-higher-handicappers',
      image: '/images/son-quint-blog/son-quint-2.webp',
      imageAlt: 'Son Quint golf course with a view over Palma',
    },
    meta: {
      slug: 'best-mallorca-golf-courses-higher-handicappers',
      badge: 'Course Choice',
      badgeGold: false,
      readTime: 'Draft preview',
      updated: 'October 2026',
      title: 'Best Mallorca Golf Courses for Higher Handicappers',
      intro:
        'Almost every course in Mallorca sets a handicap limit, and the limits run from 28 to 54. That number is the first filter. The second is the kind of trouble: water you can see from the tee costs a 25-handicapper far fewer shots than blind tee shots and raised greens.',
      sidebarPlanning: DRAFT_SIDEBAR,
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
      canonical: 'https://www.mrmallorcagolf.com/draft-guides/best-golf-practice-facilities-mallorca',
      image: '/images/t-golf-calvia-social.jpg',
      imageAlt: 'T Golf Calvià, Mallorca',
    },
    meta: {
      slug: 'best-golf-practice-facilities-mallorca',
      badge: 'Practice',
      badgeGold: false,
      readTime: 'Draft preview',
      updated: 'October 2026',
      title: 'Best Golf Practice Facilities in Mallorca',
      intro:
        'Four Mallorca clubs have ball tracking built into the range bays, and several more let you hit off grass. Which one to use comes down to the job: measuring your numbers, warming up for a round, or working on the short game.',
      sidebarPlanning: DRAFT_SIDEBAR,
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
}

export const DRAFT_GUIDE_SLUGS = Object.keys(DRAFT_GUIDE_CONTENT)

export function getDraftGuideContent(slug) {
  return DRAFT_GUIDE_CONTENT[slug] || null
}

export function buildDraftGuideMetadata(slug) {
  const content = getDraftGuideContent(slug)
  if (!content) return {}
  const image = content.metadata.image.startsWith('http')
    ? content.metadata.image
    : `${SITE_ORIGIN}${content.metadata.image}`

  return {
    title: `Draft: ${content.metadata.title}`,
    description: content.metadata.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    alternates: {
      canonical: content.metadata.canonical,
    },
    openGraph: {
      type: 'article',
      url: content.metadata.canonical,
      siteName: 'Mr Mallorca Golf',
      locale: 'en_GB',
      title: content.metadata.title,
      description: content.metadata.description,
      images: [{ url: image, width: 1200, height: 630, alt: content.metadata.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.title,
      description: content.metadata.description,
      images: [image],
    },
  }
}

import { getLocalizedGuidePostContent } from './guide-post-content-localized.js'

export const GUIDE_POST_CONTENT = {
  'son-gual-review': {
    en: {
      metadata: {
        title: "Son Gual Golf Mallorca - A PGA Professional's Honest Review (2026)",
        description:
          'Son Gual golf course Mallorca reviewed by a PGA Professional who plays it regularly. Green fees, difficulty, what to expect, and why Obama and Nadal both keep coming back.',
        imagePath: '/images/son-gual-blog/sg-hero.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '7 min read',
        updated: 'March 2026',
        title: "Son Gual Golf Mallorca - A PGA Professional's Honest Review (2026)",
        intro:
          'My most-played course on the island. The wind is fickle, the greens are quick, and the closing stretch is as good as anything in Mallorca.',
        related: [
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
          { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
          { slug: 'best-time-play-golf-mallorca', title: 'Best Time of Year to Play Golf in Mallorca' },
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
          text:
            'Son Gual is my most-played course in Mallorca and the one I recommend most consistently when clients ask where to play. I want to be honest about why - and honest about what makes it hard, because it is hard, and anyone booking expecting a relaxed day will be surprised.',
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-clients-group.jpg',
          alt: 'Golfers at Son Gual with Andy Griffiths',
          caption: 'A group day in January. In England the courses are shut. Here the fairways look like this.',
        },
        { type: 'heading', text: 'The First Tee' },
        {
          type: 'paragraph',
          text:
            'The first time I played Son Gual, I was on the black tees, wind coming hard off the left, playing alongside a PGA Professional friend who plays and scores well. The camera was rolling for a vlog too, which adds its own pressure. I was a little nervous.',
        },
        {
          type: 'paragraph',
          text:
            "The drive came off the heel slightly. Still flew further than expected and avoided the bunkers - just. There are so many bunkers at Son Gual, positioned exactly where slightly mishit shots go. You're factoring in wind, elevation changes, inconsistent ball-striking, and the bunkers seem to grow larger the longer you stand contemplating them.",
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-1.jpg',
          alt: 'Son Gual fairway and bunkers',
          caption: 'There are a lot of bunkers at Son Gual. They are positioned exactly where slightly mishit shots go.',
        },
        { type: 'heading', text: 'The Wind' },
        {
          type: 'paragraph',
          text:
            "Son Gual seems to live in its own ecosystem. I'll leave my house in the southwest of the island on a calm morning and arrive at the first tee to find it blowing properly - and it stays that way for four hours. Playing downwind is a pleasure. Into a headwind on a long par four that suddenly becomes a ridiculously long par four - that's a different experience.",
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-swing.jpg',
          alt: 'Client hitting a tee shot at Son Gual',
          caption: "There are plenty of holes where the driver comes out. When the wind is behind you it's as good as it gets. When it's not, you plan differently.",
        },
        { type: 'heading', text: 'The Greens' },
        {
          type: 'paragraph',
          text:
            'Fast, raised, and unforgiving of poor approach play. In January, the greens and fringe were so tightly mown it was remarkable for that time of year. Great for spin production, uncomfortable when looking at a tight chip with a small landing area.',
        },
        {
          type: 'paragraph',
          text:
            'One of my playing partners that day - a student visiting Mallorca from China - reached for her putter believing she was on the green. She had about 30 yards of fringe still to cover. The conditioning is that meticulous.',
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-2.jpg',
          alt: 'Son Gual green and surrounding landscape',
          caption: "Fast, raised greens. Where you miss matters more than how you swing - that's the Son Gual lesson.",
        },
        { type: 'heading', text: 'The Course' },
        {
          type: 'paragraph',
          text:
            "Thomas Himmel's 2007 design uses elevation intelligently. The 2nd hole features one of Europe's largest bunkers. The closing stretch from the 15th is widely regarded as one of the finest finishing sequences in European golf - and having played it, I'd agree. Views across the Bay of Palma are best between holes 8-12. The restaurant shares that view and is worth staying for after the round.",
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-3.webp',
          alt: 'Son Gual closing stretch',
          caption: "The 18th. The closing stretch - holes 15 to 18 - is among the finest four holes in European golf. I'd stand by that.",
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-plane.jpg',
          alt: 'Plane coming into Palma airport over Son Gual golf course',
          caption: 'The Bay of Palma from the higher holes. Holes 8 to 12 have the best of the views.',
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-4.jpg',
          alt: 'Son Gual panoramic view across Palma',
          caption: 'The Tramuntana mountains behind the course. This is what the backdrop looks like from the higher holes.',
        },
        { type: 'heading', text: 'Notable Visitors' },
        {
          type: 'paragraph',
          text:
            'Rafa Nadal plays here regularly and has said it is his favourite course on the island. Barack Obama played here in November 2024 and enjoyed it so much he promised to return. Many top amateur and professional events are also held at this popular golf course.',
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-5.jpg',
          alt: 'Son Gual course detail',
          caption: 'The 10th tee, right in front of the clubhouse. The par-5 stretches out ahead of you.',
        },
        {
          type: 'facts',
          items: [
            ['€80-165', 'Green fee range 2026'],
            ['9/10', 'Difficulty'],
            ['Par 72', 'Championship layout'],
            ['2007', 'Designed by Thomas Himmel'],
          ],
        },
        { type: 'heading', text: '2026 Green Fees' },
        {
          type: 'paragraph',
          text:
            'Low season (mid-November to December): €115. January maintenance window: €80 for 9 holes only. Peak spring and autumn (March-May, September-November): €165. Summer (July-August): €115. Full seasonal breakdown at son-gual.com.',
        },
        {
          type: 'paragraph',
          text:
            'Club hire at the pro shop: Callaway €35, Titleist €45 per round. Buggy €45, electric trolley from €15. A valid WHS handicap certificate is required to book.',
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'paragraph',
          text:
            "Son Gual is my favourite course in Mallorca. The conditioning is superb, the design asks proper questions, and the setting is strong without needing to shout about it. If your game is in decent order and you want a serious round, start here.",
        },
        {
          type: 'cta',
          text: 'I take clients to Son Gual regularly. Want to play it with someone who knows every hole?',
          linkLabel: 'See the play-with-a-pro experience →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
  'alcanada-review': {
    en: {
      metadata: {
        title: "Club de Golf Alcanada - A PGA Professional's Honest Review (2026)",
        description:
          'Alcanada golf course Mallorca reviewed by a PGA Professional who plays it regularly. The lighthouse, the greens, the restaurant terrace, and the green fees for 2026.',
        imagePath: '/images/alcanada-blog/alc-7.jpg',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '7 min read',
        updated: 'March 2026',
        title: "Club de Golf Alcanada - A PGA Professional's Honest Review (2026)",
        intro: 'If I want someone to go home talking about one round, I take them to Alcanada. The lighthouse helps, but the course stands up on its own.',
        related: [
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
          { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-7.jpg',
          alt: 'Club de Golf Alcanada at golden hour with lighthouse and bay',
          caption: 'Alcanada at golden hour. The lighthouse sits on its own island just off the coast and is visible from 16 of the 18 holes.',
        },
        {
          type: 'paragraph',
          text: 'Alcanada is the course I take people to when I want them to go home remembering one round in particular. It might be the most memorable day on the island. The lighthouse and the views on many of the holes help, but the course stands up on its own too.',
        },
        { type: 'heading', text: 'The Setting' },
        {
          type: 'paragraph',
          text: "Robert Trent Jones Jr. designed Alcanada, and what he did with this stretch of coastline is remarkable. Standing on the back tees with the lighthouse behind you and the Mediterranean in every direction, it's one of those rare golf moments where the surroundings make you forget what you scored.",
        },
        {
          type: 'paragraph',
          text: "The Alcanada lighthouse sits on a small island just off the coast, visible from 16 of the 18 holes. On a clear morning with the water calm and the light coming across the bay, it's one of the most beautiful settings I've played golf in anywhere in the world.",
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-6.jpg',
          alt: 'Client hitting a tee shot at Alcanada with lighthouse in the background',
          caption: 'The lighthouse behind, the sea to the left, the fairway dropping away ahead.',
        },
        { type: 'heading', text: 'The Back Tees' },
        {
          type: 'paragraph',
          text: "Standing on the elevated back tees is its own experience. You feel untouchable - so far from everything else that everyone below looks like a tiny dot. The lighthouse in front of you, the bay stretching out, and you're about to hit driver somewhere into the abyss. That's the feeling.",
        },
        {
          type: 'pull',
          text: "Standing on the back tees at Alcanada is incredible. You feel untouchable. So far from the rest of the world. Everyone looks like a tiny dot and you're standing there, elevated, ready to hit driver somewhere into the abyss.",
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-2.jpg',
          alt: 'Alcanada green with sea and mountains visible behind',
          caption: 'On a clear morning you can see the Tramuntana mountains across the bay.',
        },
        { type: 'heading', text: 'The Greens' },
        {
          type: 'paragraph',
          text: 'This is where Alcanada earns its right to host elite events. After navigating a difficult hole, you arrive at greens that are severely undulating, massively fast, and offering very few easy putts. Fifty-eight bunkers across the layout force accurate approaches on almost every hole.',
        },
        {
          type: 'paragraph',
          text: 'The combination of slope, speed, and subtle breaks on the greens is what turns this from a scenic round into a proper test.',
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-5.jpg',
          alt: 'Golfers at Alcanada with the Mediterranean behind',
          caption: 'The back tees at Alcanada are elevated well above the fairway. The walk up is worth it every time.',
        },
        { type: 'heading', text: 'The Rolex Challenge Tour Grand Final' },
        {
          type: 'paragraph',
          text: "Alcanada hosts the Rolex Challenge Tour Grand Final - returning for its sixth time in October 2026. This is not a course dressed up for a tour event. It's a course that has always been worthy of one. Playing the same holes that decide a professional's card for the season is something you notice when you're standing on the tee.",
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-1.jpg',
          alt: 'Rolex Grand Final at Alcanada hole 16',
          caption: 'The Rolex Challenge Tour Grand Final at Alcanada. It returns for its sixth time in October 2026.',
        },
        { type: 'heading', text: 'Design Pedigree' },
        {
          type: 'paragraph',
          text: "Robert Trent Jones Jr.'s father designed Valderrama, the venue of the 1997 Ryder Cup, and Spyglass Hill at Pebble Beach. RTJ Jr. also designed Spring City Golf in Kunming, ranked China's number one course by Golf Digest. The lineage is genuine, and it shows in how Alcanada is routed - nothing feels arbitrary, everything uses the land.",
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-4.jpg',
          alt: 'Group of golfers at Alcanada on a summer evening',
          caption: 'A summer evening round. The light at Alcanada in July is something else.',
        },
        {
          type: 'facts',
          items: [
            ['€115-220', 'Green fee range 2026'],
            ['7/10', 'Difficulty'],
            ['58', 'Bunkers'],
            ['55 km', 'From Palma'],
          ],
        },
        { type: 'heading', text: 'Practical Information' },
        {
          type: 'paragraph',
          text: 'Green fees 2026: €115 low season (January, December) to €220 peak (March-May, September-October). Full seasonal breakdown at golf-alcanada.com. A daily golf licence (€3 per person) is required for non-Spanish Federation members.',
        },
        {
          type: 'paragraph',
          text: 'Club hire: TaylorMade sets at €38 per 18 holes. Buggy €48, electric trolley €20. The Toptracer range is excellent for a proper warm-up - use it.',
        },
        {
          type: 'paragraph',
          text: "Location: Port d'Alcudia, about 50 minutes north of Palma. Allow time and do not rush back.",
        },
        { type: 'heading', text: 'The Restaurant Terrace' },
        {
          type: 'paragraph',
          text: 'One of the best places on the island for a post-round lunch. The restaurant is run by Grupo Babuxa, the group behind the well-regarded Casa Gallega restaurants in Palma, with Mediterranean cooking and a sea terrace directly facing the Alcanada lighthouse. Their set lunch runs around €30 per person. Factor it in - this is not a place to rush away from.',
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-hero.jpg',
          alt: 'Alcanada clubhouse terrace',
          caption: 'The clubhouse terrace.',
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'paragraph',
          text: "Alcanada is the course I'd use if I wanted someone to understand why people come back to golf in Mallorca. The greens will test you, the drive north is worth it, and you should leave enough time for lunch afterwards.",
        },
        {
          type: 'cta',
          text: 'Alcanada is one of my two anchor courses for play-with-a-pro days. Want to play it properly?',
          linkLabel: 'See the play-with-a-pro experience →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
  'son-muntaner-review': {
    en: {
      metadata: {
        title: "Golf Son Muntaner, Mallorca - A PGA Professional's Honest Review (2026)",
        description:
          "Son Muntaner golf course Mallorca reviewed by a PGA professional. Best Golf Course in Spain 2025. Green fees, course conditions, what it actually plays like, and who it suits.",
        imagePath: '/images/son-muntaner-blog/sm-8.jpg',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'April 2026',
        title: "Golf Son Muntaner, Mallorca - A PGA Professional's Honest Review (2026)",
        intro: "Best Golf Course in Spain at the 2025 World Golf Awards. Five minutes from Palma. I played it on a full tee sheet on a Saturday morning. Here's what I found.",
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        ],
      },
      blocks: [
        { type: 'image', src: '/images/son-muntaner-blog/sm-8.jpg', alt: 'Andy Griffiths at Golf Son Muntaner, Mallorca', caption: 'Best Golf Course in Spain, 2025. Managed to smile despite all the missed fairways.' },
        { type: 'paragraph', text: "Son Muntaner was named Best Golf Course in Spain at the 2025 World Golf Awards. I played it on a Saturday morning last week, with a full tee sheet and mixed handicaps in the group. Here's what I found." },
        { type: 'heading', text: 'Getting There' },
        { type: 'paragraph', text: "Five minutes from central Palma. That alone puts it in a different category from most courses on the island worth talking about. Son Gual takes twenty minutes, Alcanada fifty. If you're based in the city and want a serious round without building a half-day around the drive, Son Muntaner is the answer." },
        { type: 'paragraph', text: "The service from arrival through to the round was smooth. The team are attentive without being intrusive. Range balls, practice facilities, and the overall operation all sit at the level the course's reputation would lead you to expect." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-6.jpg', alt: 'Son Muntaner golf course Mallorca looking down the 17th fairway with Bay of Palma in background', caption: 'Looking down the 17th. Five minutes from central Palma and it feels like a different world.' },
        { type: 'heading', text: 'The Walk and Why the Buggy Is Included' },
        { type: 'paragraph', text: "The course is a genuine physical test on foot. Several long climbs up to tees. The buggy is included in the green fee, which is the right call by the club. Most players will want it, and making it a separate charge would feel wrong at this level. After years in China relying on caddies, I prefer to walk, but I understand why most visitors take the buggy here." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-4.jpg', alt: 'Son Muntaner golf course Mallorca elevated fairway view through the Na Burguesa mountains', caption: 'Looking back from one of the longer climbs. The routing through the Na Burguesa mountains is what makes this course feel different from anything else close to Palma.' },
        { type: 'heading', text: 'How the Course Reveals Itself' },
        { type: 'paragraph', text: "My opening stretch was erratic. I made conservative tee choices and still couldn't get a full read on the layout early on. That's not a criticism. It's what the design does. Son Muntaner doesn't show you everything from the tee. The course reveals itself through approach play." },
        { type: 'paragraph', text: "Holding greens from the wrong angle is difficult. There are narrow sections and subtle targets that demand precise positioning rather than just getting the ball somewhere near the flag. Landing areas define the course. Tee shots and layups often require commitment to tight zones that aren't obvious until you reach them. Once you understand that, the design starts to feel fair. Strong shots get clear reward." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-7.jpg', alt: 'Son Muntaner golf hole Mallorca tight par 3 with stone wall and bunker', caption: 'The 7th. Short par 3, but the severe drop makes distance control harder than the yardage suggests. Most people come up short.' },
        { type: 'heading', text: 'The Par 3s' },
        { type: 'paragraph', text: "They use elevation well throughout. Protection comes from the shape and angle of the hole rather than just length, though the longer ones from the back tees are over 200 yards and demand proper club selection. The 13th was a rare moment of clarity on the day." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-1.jpg', alt: 'Andy Griffiths hitting tee shot on 13th par 3 at Son Muntaner Mallorca', caption: 'The 13th. Par 3. An easy birdie today!' },
        { type: 'heading', text: 'Front Nine vs Back Nine' },
        { type: 'paragraph', text: "The front nine, particularly the opening six holes, plays tightly. Water and defined landing areas keep things honest. There's no room for loose driving." },
        { type: 'paragraph', text: "The back nine opens up slightly. More freedom with the driver, though the green complexes stay small and deceptively difficult. Depth perception from distance is a consistent challenge here. Greens look larger than they are, and approach distances look shorter than they play." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-3.jpg', alt: 'Ducks on water hazard at Son Muntaner golf course Mallorca', caption: 'Not something you factor into your pre-shot routine. Back nine company.' },
        { type: 'heading', text: 'The Greens' },
        { type: 'paragraph', text: "Rolling pure at a solid pace, with clear potential to get quicker into summer. That quality rewarded good putting, especially from range. This is where the Best in Spain title starts to make sense. The greens are consistently excellent, and they held up across a full tee sheet on a busy Saturday without losing pace or surface quality." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-5.jpg', alt: 'Son Muntaner 9th green Mallorca with clubhouse behind', caption: 'The 9th green, clubhouse behind. Halfway through and already clear this course rewards patience over power.' },
        { type: 'heading', text: 'Bunkers' },
        { type: 'paragraph', text: "One honest negative: bunker sand was inconsistent. Some lies firmer, others softer, which complicates execution on shots you've planned the same way. Minor on a course of this standard, but worth knowing if greenside sand play is part of your game." },
        { type: 'heading', text: 'The Olive Tree' },
        { type: 'paragraph', text: "Hole 15. The ancient olive tree standing in the middle of the fairway has been there for roughly a thousand years. The Balearic government declared it a natural monument. The course was designed around it." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-2.jpg', alt: 'Ancient olive tree on hole 15 at Son Muntaner golf course Mallorca with Na Burguesa mountains behind', caption: "Hole 15. That olive tree has been standing for roughly a thousand years. The Balearic government declared it a natural monument. Someone decided to build a golf hole around it, and I'm glad they did." },
        { type: 'heading', text: 'The Restaurant' },
        { type: 'paragraph', text: "Not an afterthought. The food matches the standard of the course. Worth staying for after the round rather than heading straight back to Palma." },
        { type: 'facts', items: [['€127–254', 'Green fee range 2026'], ['7/10', 'Difficulty'], ['Par 72', 'Championship layout'], ['Included', 'Buggy in green fee']] },
        { type: 'heading', text: '2026 Green Fees' },
        { type: 'paragraph', text: "Dynamic pricing through the Arabella Golf Mallorca booking system. Peak rate currently €254 for 18 holes. Twilight golf from €127. The gap between peak and twilight is significant enough to be worth looking at if you have flexibility on timing. Check current rates at arabellagolfmallorca.com. Handicap certificate required." },
        { type: 'paragraph', text: "Son Muntaner is part of the Arabella Golf Mallorca group alongside Son Vida and Son Quint. All three courses are accessible from the same resort complex." },
        { type: 'heading', text: 'Verdict' },
        { type: 'paragraph', text: "The Best Golf Course in Spain title is not marketing. Son Muntaner delivers a course that tests positioning, discipline, and clarity of decision-making from the first hole to the last. It rewards control over power and creates scoring opportunities through precision. Five minutes from Palma makes the logistics straightforward. The greens alone justify the trip." },
        { type: 'paragraph', text: "A return visit with more fairways found would unlock a deeper read of the layout. That's the mark of a course worth coming back to." },
        { type: 'cta', text: 'Want to play Son Muntaner with a PGA professional alongside you?', linkLabel: 'See the play-with-a-pro experience →', href: '/play-with-a-pro' },
      ],
    },
  },
  'santa-ponsa-1-review': {
    en: {
      metadata: {
        title: "Golf Santa Ponsa 1, Mallorca - A PGA Professional's Honest Review (2026)",
        description:
          "Santa Ponsa 1 golf course Mallorca reviewed by a PGA Professional. One of Europe's longest courses, DP World Tour history, and a confidence-builder for anyone who loves hitting driver.",
        imagePath: '/images/santa-ponsa-blog/sp-hero.jpg',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'March 2026',
        title: "Golf Santa Ponsa 1, Mallorca - A PGA Professional's Honest Review (2026)",
        intro: "One of Europe's longest courses, real DP World Tour history, and one of the easiest places on the island to enjoy hitting driver.",
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/santa-ponsa-blog/sp-hero.jpg',
          alt: 'Golf Santa Ponsa 1 with water reflection and fairway',
          caption: 'The 16th green. The lake comes into play on the approach and focuses the mind considerably.',
        },
        {
          type: 'paragraph',
          text: 'Santa Ponsa 1 is the only public course in the Santa Ponsa group and the one that was capable of hosting a European Tour event - it hosted the 2021 European Tour Mallorca Golf Open. This is the course that brought top-level professional golf back to the island after a decade away. The winner, Jeff Winther, shot 62 twice in the opening rounds. Good luck getting anywhere near that!',
        },
        { type: 'heading', text: 'Why It Suits My Game - and Probably Yours' },
        {
          type: 'paragraph',
          text: "I'll be direct about something: this course has helped me rediscover confidence with the driver. After rounds at Son Gual or Alcanada, where course management often means leaving driver in the bag, Santa Ponsa 1 feels very different. The fairways are wide, the opening holes are generous, and the course rewards an aggressive approach from the tee.",
        },
        {
          type: 'paragraph',
          text: "With my distance, I'm often left with a pitching wedge into par-4 greens after a good drive. For players with more typical distances, the course presents a proper test when the wind comes in - but it's the kind of challenge that builds confidence rather than grinding it down.",
        },
        {
          type: 'image',
          src: '/images/santa-ponsa-blog/sp-1.jpg',
          alt: 'Santa Ponsa 1 fairway with mountains behind',
          caption: 'The fairways are wide. This is a course that invites the driver.',
        },
        { type: 'heading', text: 'The 10th Hole' },
        {
          type: 'paragraph',
          text: "At 590 metres, the 10th is one of the longest par-5s in Europe. Into the wind it is properly long. There is a satisfying version of the hole where you go driver, hybrid, wedge, and a much less satisfying one where one of those three goes wrong. The par-3s are also long and often with small greens, they are more about damage limitation than birdie chances.",
        },
        {
          type: 'image',
          src: '/images/santa-ponsa-blog/sp-2.jpg',
          alt: 'Santa Ponsa 1 course layout and fairways',
          caption: 'The layout. On a calm day this course flatters you. Add wind and it earns every metre of its length.',
        },
        { type: 'heading', text: 'The European Tour Connection' },
        {
          type: 'paragraph',
          text: 'Hosting the 2021 European Tour Mallorca Open was significant for the island. It was the first European Tour event here in ten years, and Santa Ponsa 1 held up under scrutiny. The course condition in tournament week, and the scoring that was possible without the course being set up in an easy manner, all worked. That quality is real, and it shows in how the course presents itself to visitors.',
        },
        {
          type: 'image',
          src: '/images/santa-ponsa-blog/sp-3.jpg',
          alt: 'Santa Ponsa 1 approach to a par 3',
          caption: 'The Tramuntana mountains behind. Holes 5, 6 and 7 have the best of the mountain views.',
        },
        { type: 'heading', text: 'The Mountain Views' },
        {
          type: 'paragraph',
          text: "Holes 5, 6, and 7 on the front nine offer some of the best Tramuntana views on the island. Tall grass, mature trees, wildflowers, and the mountains framing everything behind. It's the kind of backdrop that makes a bad shot slightly more bearable. Slightly.",
        },
        {
          type: 'image',
          src: '/images/santa-ponsa-blog/sp-5.jpg',
          alt: 'Andy Griffiths at Santa Ponsa 1 early morning',
          caption: 'Early start. By mid-morning the wind usually finds the course.',
        },
        {
          type: 'facts',
          items: [
            ['€77-126', 'Green fee range 2026'],
            ['8/10', 'Difficulty'],
            ['Par 72', 'Championship layout'],
            ['Public', 'Open to all visitors'],
          ],
        },
        { type: 'heading', text: '2026 Green Fees' },
        {
          type: 'paragraph',
          text: 'High season (mid-March to early June, mid-September to early November): €126. Mid-season: €106. Low season: €77. Full details at golf-santaponsa.com. A valid WHS handicap certificate is required.',
        },
        {
          type: 'paragraph',
          text: 'Buggy €43 for 18 holes. Club hire €40. The course is public and openly bookable - no member access required. Book in advance in peak season; the DP World Tour history draws visitors who know what they are coming for.',
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'paragraph',
          text: "If you're driving the ball well and want to enjoy it, play Santa Ponsa 1. If you're choosing between Son Gual and Alcanada for a serious day and want something more open, with proper European Tour history behind it, this is the one. The par-3s will keep you honest. The rest of the round tends to give you something back.",
        },
        {
          type: 'cta',
          text: 'Want to play Santa Ponsa 1 as part of a Mallorca golf day? I can arrange it.',
          linkLabel: 'See the play-with-a-pro experience →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
}

const LOCALIZED_TEXT_KEYS = new Set([
  'title',
  'description',
  'imagePath',
  'badge',
  'readTime',
  'updated',
  'intro',
  'text',
  'caption',
  'alt',
  'label',
  'attribution',
  'linkLabel',
])

function alignLocalizedBlocks(baseBlocks, localizedBlocks) {
  if (!Array.isArray(baseBlocks) || !Array.isArray(localizedBlocks) || localizedBlocks.length === 0) {
    return baseBlocks
  }

  let localizedIndex = 0

  return baseBlocks
    .map((baseBlock) => {
    let matchedLocalizedBlock = null

    for (let i = localizedIndex; i < localizedBlocks.length; i += 1) {
      if (localizedBlocks[i]?.type === baseBlock?.type) {
        matchedLocalizedBlock = localizedBlocks[i]
        localizedIndex = i + 1
        break
      }
    }

    if (!matchedLocalizedBlock) {
      if (baseBlock?.type === 'image') {
        return {
          ...baseBlock,
          caption: null,
        }
      }

      return null
    }

    const mergedBlock = mergeLocalizedValue(baseBlock, matchedLocalizedBlock)

    if (baseBlock?.type === 'image') {
      return {
        ...mergedBlock,
        caption: matchedLocalizedBlock.caption ?? null,
        alt: matchedLocalizedBlock.alt ?? baseBlock.alt,
        containerStyle: baseBlock.containerStyle,
        imageStyle: baseBlock.imageStyle,
      }
    }

    return mergedBlock
    })
    .filter(Boolean)
}

function mergeLocalizedValue(baseValue, localizedValue, key) {
  if (localizedValue == null) return baseValue

  if (Array.isArray(baseValue) && Array.isArray(localizedValue)) {
    if (key === 'blocks') return alignLocalizedBlocks(baseValue, localizedValue)
    if (key === 'related') return localizedValue
    if (baseValue.some(Array.isArray)) return localizedValue
    if (baseValue.every((item) => item == null || typeof item !== 'object')) return localizedValue

    return baseValue.map((item, index) => mergeLocalizedValue(item, localizedValue[index], key))
  }

  if (
    baseValue &&
    localizedValue &&
    typeof baseValue === 'object' &&
    typeof localizedValue === 'object' &&
    !Array.isArray(baseValue) &&
    !Array.isArray(localizedValue)
  ) {
    const merged = { ...baseValue }

    for (const [childKey, childValue] of Object.entries(localizedValue)) {
      if (childKey in baseValue) {
        merged[childKey] = mergeLocalizedValue(baseValue[childKey], childValue, childKey)
      } else if (LOCALIZED_TEXT_KEYS.has(childKey)) {
        merged[childKey] = childValue
      }
    }

    return merged
  }

  if (LOCALIZED_TEXT_KEYS.has(key)) return localizedValue

  return baseValue
}

export function getGuidePostContent(slug, locale = 'en') {
  const guide = GUIDE_POST_CONTENT[slug]
  if (!guide) return null

  const baseContent = guide.en
  if (locale === 'en') return withGuidePostSlug(baseContent, slug)

  const localizedContent = getLocalizedGuidePostContent(slug, locale) || guide[locale]
  if (!localizedContent) return withGuidePostSlug(baseContent, slug)

  return withGuidePostSlug(mergeLocalizedValue(baseContent, localizedContent), slug)
}

function withGuidePostSlug(content, slug) {
  return {
    ...content,
    meta: {
      ...content.meta,
      slug,
    },
  }
}

import { getLocalizedGuidePostContent } from './guide-post-content-localized.js'
import { mergeGuideContent } from './guide-content-localization.js'

export const GUIDE_POST_CONTENT = {
  'son-gual-review': {
    en: {
      metadata: {
        title: 'Son Gual Golf Review: €115-€165 (2026)',
        description:
          "Andy's favourite course in Mallorca: €115-€165, handicap certificate required. Full breakdown and honest verdict.",
        imagePath: '/images/son-gual-blog/sg-hero.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '7 min read',
        updated: 'March 2026',
        title: 'Son Gual Golf - Worth It? (2026)',
        intro:
          'My most-played course on the island. The wind is fickle, the greens are quick, and the closing stretch is as good as anything in Mallorca.',
        related: [
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
          { slug: 'golf-andratx-review', title: 'Golf de Andratx - Honest Review 2026' },
          { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
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
            'Son Gual is my most-played course in Mallorca and the one I recommend most consistently when clients ask where to play. I want to be honest about why - and honest about what makes it hard, because it is hard, and anyone booking expecting a relaxed day will be surprised. If you are also considering <a href="/guides/alcanada-review">Alcanada</a> or <a href="/guides/son-muntaner-review">Son Muntaner</a>, read those reviews too before deciding.',
        },
        { type: 'heading', text: 'Quick Answer: Is Son Gual Worth It?' },
        {
          type: 'paragraph',
          text:
            "Yes, if you want a serious championship round and don't mind paying premium rates. It is one of Mallorca's best-conditioned courses, but it is not a soft holiday knock. If your group wants easier scoring and less pressure, compare <a href='/guides/son-muntaner-review'>Son Muntaner</a> and <a href='/guides/alcanada-review'>Alcanada</a> first.",
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-clients-group.webp',
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
          src: '/images/son-gual-blog/sg-1.webp',
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
          src: '/images/son-gual-blog/sg-swing.webp',
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
          src: '/images/son-gual-blog/sg-2.webp',
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
          src: '/images/son-gual-blog/sg-plane.webp',
          alt: 'Plane coming into Palma airport over Son Gual golf course',
          caption: 'The Bay of Palma from the higher holes. Holes 8 to 12 have the best of the views.',
        },
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-4.webp',
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
          src: '/images/son-gual-blog/sg-5.webp',
          alt: 'Son Gual course detail',
          caption: 'The 10th tee, right in front of the clubhouse. The par-4 stretches out ahead of you.',
        },
        {
          type: 'facts',
          items: [
            ['Peak €165 / Low €115', '2026 price guide'],
            ['9/10', 'Difficulty'],
            ['Par 72', 'Championship layout'],
            ['2007', 'Designed by Thomas Himmel'],
          ],
        },
        { type: 'heading', text: '2026 Green Fees' },
        {
          type: 'paragraph',
          text:
            'Public 18-hole pricing typically runs from €115 to €165. January maintenance windows can dip lower, but that should not be used as the honest comparison rate. Peak spring and autumn sit at €165, with most standard summer/public pricing well above the old maintenance figure. Full seasonal breakdown at son-gual.com.',
        },
        {
          type: 'paragraph',
          text:
            "Club hire at the pro shop: Callaway €35, Titleist €45 per round. Buggy €45, electric trolley from €15. Handicap limit: 33 for men, 35 for ladies. A valid WHS certificate is required at booking. Walking is permitted.",
        },
        {
          type: 'notes',
          title: 'Four things I would know before booking Son Gual',
          items: [
            ['Best tee time', 'Early morning or late afternoon. Son Gual feels calm when you can see over Palma and the course is quiet. The light on the property is at its best at both ends of the day.'],
            ['Wind tip', 'If there is even a hint of breeze, pay attention on the exposed middle stretch. This is one of the few Mallorca courses where being half a club wrong can leave you in exactly the wrong part of the green, and two putts from there are tough.'],
            ['Where visitors miss', 'Most dropped shots come from getting slightly out of position off the tee, finding one of the large bunkers, then short-siding yourself and having a really tricky chip shot around those raised greens.'],
            ['Clubhouse tip', 'If you are making a day of it, eat after the round rather than before. The terrace is a peaceful place to eat good food and watch golfers as they finish their rounds.'],
          ],
        },
        { type: 'heading', text: 'Common Questions' },
        {
          type: 'paragraph',
          text: "Can single players book? Yes. Solo bookings are accepted, though during peak season you are likely to be paired with others on the day. Does the handicap requirement actually mean what it says? Yes. The club enforces it at check-in with a valid WHS certificate.",
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'paragraph',
          text:
            "Son Gual is my favourite course in Mallorca. The conditioning is superb, the design asks proper questions, and the setting is strong without needing to shout about it. If your game is in decent order and you want a serious round, start here. See how it compares on the <a href='/golf-courses'>full Mallorca golf courses page</a>. If Son Gual is going into a longer trip, the <a href='/plan-your-trip'>trip planning guide</a> covers tee times, logistics, and fitting other courses around it.",
        },
        {
          type: 'cta',
          text: 'Playing Son Gual? I guide rounds here regularly and can help you plot a proper way round from the first tee.',
          linkLabel: 'Book a Play With A Pro day in Mallorca →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
  'alcanada-review': {
    en: {
      metadata: {
        title: "Alcanada Golf - Honest Review 2026",
        description:
          "Alcanada: 9/10, €115-€230, 58 bunkers. Andy's honest verdict, including why it's worth the 50-minute drive.",
        imagePath: '/images/alcanada-blog/alc-7.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '7 min read',
        updated: 'March 2026',
        title: "Alcanada Golf - Review (2026)",
        intro: 'If I want someone to go home talking about one round, I take them to Alcanada. The lighthouse helps, but the course stands up on its own.',
        related: [
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'son-muntaner-review', title: 'Son Muntaner Golf - Honest Review 2026' },
          { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Honest Review 2026' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-7.webp',
          alt: 'Club de Golf Alcanada at golden hour with lighthouse and bay',
          caption: 'Alcanada at golden hour. The lighthouse sits on its own island just off the coast and is visible from 16 of the 18 holes.',
        },
        {
          type: 'paragraph',
          text: 'Alcanada is the course I take people to when I want them to go home remembering one round in particular. It might be the most memorable day on the island. The lighthouse and the views on many of the holes help, but the course stands up on its own too. If you are weighing it against <a href="/guides/son-gual-review">Son Gual</a> or <a href="/guides/son-muntaner-review">Son Muntaner</a>, both are worth reading first.',
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
          src: '/images/alcanada-blog/alc-6.webp',
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
          src: '/images/alcanada-blog/alc-2.webp',
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
          src: '/images/alcanada-blog/alc-5.webp',
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
          src: '/images/alcanada-blog/alc-1.webp',
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
          src: '/images/alcanada-blog/alc-4.webp',
          alt: 'Group of golfers at Alcanada on a summer evening',
          caption: 'A summer evening round. The light at Alcanada in July is something else.',
        },
        {
          type: 'facts',
          items: [
            ['Peak €230 / Low €115', '2026 price guide'],
            ['9/10', "Andy's rating"],
            ['58', 'Bunkers'],
            ['55 km', 'From Palma'],
          ],
        },
        { type: 'heading', text: 'Practical Information' },
        {
          type: 'paragraph',
          text: 'Green fees 2026: €115 low season (January, December) to €230 peak (March-May, September-October). Full seasonal breakdown at golf-alcanada.com. A daily golf licence (€3 per person) is required for non-Spanish Federation members.',
        },
        {
          type: 'paragraph',
          text: 'Club hire: TaylorMade sets at €38 per 18 holes. Buggy €48, electric trolley €20. The Toptracer range is excellent for a proper warm-up - use it.',
        },
        {
          type: 'paragraph',
          text: "Location: Port d'Alcudia, about 50 minutes north of Palma. Allow time and do not rush back.",
        },
        {
          type: 'notes',
          title: 'Four things I would know before booking Alcanada',
          items: [
            ['Best tee time', 'Morning is ideal here. The light is at its best and you normally get the gentlest version of the coastal breeze.'],
            ['Wind tip', 'Treat the exposed holes with respect. The sea air can make a comfortable yardage suddenly play a club longer, especially when you are playing into it on the back nine.'],
            ['Where visitors miss', 'The views can make the tee shot feel easier than it is. Pick the line first, especially from the elevated tees, then be ready for fast greens with very few easy putts.'],
            ['Clubhouse tip', 'Leave time for lunch on the terrace. The food is great, the large terrace faces the lighthouse and elongates a great day.'],
          ],
        },
        { type: 'heading', text: 'The Restaurant Terrace' },
        {
          type: 'paragraph',
          text: 'One of the best places on the island for a post-round lunch. The restaurant is run by Grupo Babuxa, the group behind the well-regarded Casa Gallega restaurants in Palma, with Mediterranean cooking and a sea terrace directly facing the Alcanada lighthouse. Their set lunch runs around €30 per person. Factor it in - this is not a place to rush away from.',
        },
        {
          type: 'image',
          src: '/images/alcanada-blog/alc-hero.webp',
          alt: 'Alcanada clubhouse terrace',
          caption: 'The clubhouse terrace.',
        },
        { type: 'heading', text: 'Common Questions' },
        {
          type: 'paragraph',
          text: 'Walking is available with an electric trolley (€20) alongside the buggy (€48), and a daily Federation licence (€3) applies for non-members. Alcanada suits confident golfers wanting a proper, memorable test rather than an easy round: the greens are severely undulating and fast despite the spectacular setting. One thing that surprises first-timers: the views can make the tee shot feel easier than it is, so pick your line before you enjoy the scenery. Best tee time is the morning, for the calmest breeze and best light, and it is worth building in time afterwards for lunch on the terrace facing the lighthouse.',
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'paragraph',
          text: "9/10. Alcanada is the course I'd use if I wanted someone to understand why people come back to golf in Mallorca. The greens will test you, the drive north is worth it, and you should leave enough time for lunch afterwards. Two honest limits: it gets busy in peak season, so book your tee time well ahead, and if you are staying in Palma or the southwest, it is a proper drive, around 50 minutes each way, not a quick round between other plans. Browse all 24 courses and green fees on the <a href='/golf-courses'>Mallorca golf courses page</a>. Planning more than one round on the trip? Start with the <a href='/plan-your-trip'>trip planning guide</a>.",
        },
        {
          type: 'cta',
          text: 'Playing Alcanada? I use it regularly for guided days and can help you turn the views into a real scoring plan.',
          linkLabel: 'Book a Play With A Pro day in Mallorca →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
  'son-muntaner-review': {
    en: {
      metadata: {
        title: "Son Muntaner Review: Spain's Best 2025",
        description:
          "Spain's Best Golf Course 2025 (World Golf Awards). Green fees €110–€260 with buggy, 5 minutes from Palma. A PGA professional's honest verdict.",
        imagePath: '/images/son-muntaner-blog/sm-4.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'April 2026',
        title: "Son Muntaner Golf - Best in Spain? (2026)",
        intro: "Best Golf Course in Spain at the 2025 World Golf Awards. Five minutes from Palma. I played it on a full tee sheet on a Saturday morning. Here's what I found.",
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
          { slug: 'golf-andratx-review', title: 'Golf de Andratx - Honest Review 2026' },
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        ],
      },
      blocks: [
        { type: 'image', src: '/images/son-muntaner-blog/sm-8.webp', alt: 'Andy Griffiths at Golf Son Muntaner, Mallorca', caption: 'Best Golf Course in Spain, 2025. Managed to smile despite all the missed fairways.' },
        { type: 'paragraph', text: "Son Muntaner was named Best Golf Course in Spain at the 2025 World Golf Awards. I played it on a Saturday morning last week, with a full tee sheet and mixed handicaps in the group. Here's what I found." },
        { type: 'heading', text: 'Quick Answer: Who Should Book Son Muntaner?' },
        {
          type: 'paragraph',
          text: "Book Son Muntaner if you want premium conditioning close to Palma, with a buggy included and a layout that rewards positional golf over pure power. If your group prefers a bigger visual experience, compare it with <a href='/guides/alcanada-review'>Alcanada</a>; if you want the sternest championship test, compare <a href='/guides/son-gual-review'>Son Gual</a>.",
        },
        { type: 'facts', items: [['€110-€260', '2026 green fee range'], ['Included', 'Buggy'], ['5 mins', 'From central Palma'], ['7/10', 'Difficulty']] },
        { type: 'heading', text: 'Getting There' },
        { type: 'paragraph', text: "Five minutes from central Palma. That alone puts it in a different category from most courses on the island worth talking about. Son Gual takes twenty minutes, Alcanada fifty. If you're based in the city and want a serious round without building a half-day around the drive, Son Muntaner is the answer." },
        { type: 'paragraph', text: "The service from arrival through to the round was smooth. The team are attentive without being intrusive. Range balls, practice facilities, and the overall operation all sit at the level the course's reputation would lead you to expect." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-6.webp', alt: 'Son Muntaner golf course Mallorca looking down the 17th fairway with Bay of Palma in background', caption: 'Looking down the 17th. Five minutes from central Palma and it feels like a different world.' },
        { type: 'heading', text: 'The Walk and Why the Buggy Is Included' },
        { type: 'paragraph', text: "The course is a genuine physical test on foot. Several long climbs up to tees. The buggy is included in the green fee, which is the right call by the club. Most players will want it, and making it a separate charge would feel wrong at this level. After years in China relying on caddies, I prefer to walk, but I understand why most visitors take the buggy here." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-4.webp', alt: 'Son Muntaner golf course Mallorca elevated fairway view through the Na Burguesa mountains', caption: 'Looking back from one of the longer climbs. The routing through the Na Burguesa mountains is what makes this course feel different from anything else close to Palma.' },
        { type: 'heading', text: 'How the Course Reveals Itself' },
        { type: 'paragraph', text: "My opening stretch was erratic. I made conservative tee choices and still couldn't get a full read on the layout early on. That's not a criticism. It's what the design does. Son Muntaner doesn't show you everything from the tee. The course reveals itself through approach play." },
        { type: 'paragraph', text: "Holding greens from the wrong angle is difficult. There are narrow sections and subtle targets that demand precise positioning rather than just getting the ball somewhere near the flag. Landing areas define the course. Tee shots and layups often require commitment to tight zones that aren't obvious until you reach them. Once you understand that, the design starts to feel fair. Strong shots get clear reward." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-7.webp', alt: 'Son Muntaner golf hole Mallorca tight par 3 with stone wall and bunker', caption: 'The 7th. Short par 3, but the severe drop makes distance control harder than the yardage suggests. Most people come up short.' },
        { type: 'heading', text: 'The Par 3s' },
        { type: 'paragraph', text: "They use elevation well throughout. Protection comes from the shape and angle of the hole rather than just length, though the longer ones from the back tees are over 200 yards and demand proper club selection. The 13th was a rare moment of clarity on the day." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-1.webp', alt: 'Andy Griffiths hitting tee shot on 13th par 3 at Son Muntaner Mallorca', caption: 'The 13th. Par 3. An easy birdie today!' },
        { type: 'heading', text: 'Front Nine vs Back Nine' },
        { type: 'paragraph', text: "The front nine, particularly the opening six holes, plays tightly. Water and defined landing areas keep things honest. There's no room for loose driving." },
        { type: 'paragraph', text: "The back nine opens up slightly. More freedom with the driver, though the green complexes stay small and deceptively difficult. Depth perception from distance is a consistent challenge here. Greens look larger than they are, and approach distances look shorter than they play." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-3.webp', alt: 'Ducks on water hazard at Son Muntaner golf course Mallorca', caption: 'Not something you factor into your pre-shot routine. Back nine company.' },
        { type: 'heading', text: 'The Greens' },
        { type: 'paragraph', text: "Rolling pure at a solid pace, with clear potential to get quicker into summer. That quality rewarded good putting, especially from range. This is where the Best in Spain title starts to make sense. The greens are consistently excellent, and they held up across a full tee sheet on a busy Saturday without losing pace or surface quality." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-5.webp', alt: 'Son Muntaner 9th green Mallorca with clubhouse behind', caption: 'The 9th green, clubhouse behind. Halfway through and already clear this course rewards patience over power.' },
        { type: 'heading', text: 'Bunkers' },
        { type: 'paragraph', text: "One honest negative: bunker sand was inconsistent. Some lies firmer, others softer, which complicates execution on shots you've planned the same way. Minor on a course of this standard, but worth knowing if greenside sand play is part of your game." },
        { type: 'heading', text: 'The Olive Tree' },
        { type: 'paragraph', text: "Hole 15. The ancient olive tree standing in the middle of the fairway has been there for roughly a thousand years. The Balearic government declared it a natural monument. The course was designed around it." },
        { type: 'image', src: '/images/son-muntaner-blog/sm-2.webp', alt: 'Ancient olive tree on hole 15 at Son Muntaner golf course Mallorca with Na Burguesa mountains behind', caption: "Hole 15. That olive tree has been standing for roughly a thousand years. The Balearic government declared it a natural monument. Someone decided to build a golf hole around it, and I'm glad they did." },
        { type: 'heading', text: 'The Restaurant' },
        { type: 'paragraph', text: "Not an afterthought. The food matches the standard of the course. Worth staying for after the round rather than heading straight back to Palma." },
        { type: 'facts', items: [['Peak €260 / Low €110', '2026 price guide'], ['7/10', 'Difficulty'], ['Par 72', 'Championship layout'], ['Included', 'Buggy in green fee']] },
        { type: 'heading', text: '2026 Green Fees' },
        { type: 'paragraph', text: "Dynamic pricing through the Arabella Golf Mallorca booking system. Peak rate currently €260 for 18 holes, with the lowest widely seen later-day rate around €110. That gap is significant enough to be worth tracking if you have flexibility on timing. Check current rates at arabellagolfmallorca.com. Handicap limit is 36 for both men and women. Buggy is included in the green fee from March through late November. A €3 daily Spanish Golf Federation licence is payable at check-in." },
        { type: 'heading', text: 'Common Questions' },
        { type: 'paragraph', text: "First time on this course? Walk to the front of the first tee box and take a proper look before you play. The driving range sits just out of sight to the right and is easy to drift toward from the tee if you have not seen the full picture. Most visitors who go right on the opening hole have simply not had a clear view of where they are going." },
        { type: 'paragraph', text: "Son Muntaner is part of the Arabella Golf Mallorca group alongside Son Vida and Son Quint. All three courses are accessible from the same resort complex." },
        {
          type: 'notes',
          title: 'Four things I would know before booking Son Muntaner',
          items: [
            ['Best tee time', 'If you are staying in Palma, use that proximity and go early. You get the easy transfer, fresher greens, and a slightly calmer start before the tee sheet fills up.'],
            ['Wind tip', 'This is a positional course first. Pick your landing area, not the heroic line, and let the buggy save your legs for later in the round.'],
            ['Where visitors miss', 'Most people attack the greens from the wrong angle, come up short on the elevated par 3s, or underestimate how small the real targets are from distance.'],
            ['Clubhouse tip', 'Stay for food afterwards. The restaurant is better than a quick clubhouse stop and makes sense if you are using Son Muntaner as your Palma day.'],
          ],
        },
        { type: 'heading', text: 'Verdict' },
        { type: 'paragraph', text: "The Best Golf Course in Spain title is not marketing. Son Muntaner delivers a course that tests positioning, discipline, and clarity of decision-making from the first hole to the last. It rewards control over power and creates scoring opportunities through precision. Five minutes from Palma makes the logistics straightforward. The greens alone justify the trip. Compare all courses on the <a href='/golf-courses'>Mallorca golf courses page</a>." },
        { type: 'paragraph', text: "A return visit with more fairways found would unlock a deeper read of the layout. That's the mark of a course worth coming back to. If Son Muntaner is the centrepiece of a longer trip, the <a href='/plan-your-trip'>trip planning guide</a> covers timing and logistics." },
        { type: 'cta', text: 'Playing Son Muntaner? I can help the premium fee feel justified with the right plan off the tee and into the greens.', linkLabel: 'Book a Play With A Pro day in Mallorca →', href: '/play-with-a-pro' },
      ],
    },
  },
  'santa-ponsa-1-review': {
    en: {
      metadata: {
        title: "Santa Ponsa 1 - Honest Review 2026",
        description:
          "Santa Ponsa 1: €77-€126, par 72, one of the longest in Europe. Hosted the DP World Tour in 2021.",
        imagePath: '/images/santa-ponsa-blog/sp-hero.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'March 2026',
        title: "Santa Ponsa 1 Golf - Review (2026)",
        intro: "One of Europe's longest courses, real DP World Tour history, and one of the easiest places on the island to enjoy hitting driver.",
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'alcanada-review', title: 'Alcanada Golf - Honest Review 2026' },
          { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Honest Review 2026' },
          { slug: 'golf-andratx-review', title: 'Golf de Andratx - Honest Review 2026' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/santa-ponsa-blog/sp-hero.webp',
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
          src: '/images/santa-ponsa-blog/sp-1.webp',
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
          src: '/images/santa-ponsa-blog/sp-2.webp',
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
          src: '/images/santa-ponsa-blog/sp-3.webp',
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
          src: '/images/santa-ponsa-blog/sp-5.webp',
          alt: 'Andy Griffiths at Santa Ponsa 1 early morning',
          caption: 'Early start. By mid-morning the wind usually finds the course.',
        },
        {
          type: 'facts',
          items: [
            ['Peak €126 / Low €77', '2026 price guide'],
            ['8/10', 'Difficulty'],
            ['Par 72', 'Championship layout'],
            ['Public', 'Open to all visitors'],
          ],
        },
        { type: 'heading', text: '2026 Green Fees' },
        {
          type: 'paragraph',
          text: 'Peak price is €126 and the low-season entry point is €77. Full details at golf-santaponsa.com. A valid WHS handicap certificate is required.',
        },
        {
          type: 'paragraph',
          text: 'Buggy €43 for 18 holes. Club hire €40. The course is public and openly bookable - no member access required. Book in advance in peak season; the DP World Tour history draws visitors who know what they are coming for.',
        },
        { type: 'heading', text: 'Common Questions' },
        {
          type: 'paragraph',
          text: 'A valid WHS handicap certificate is required at booking; buggy hire is €43 for 18 holes. Santa Ponsa 1 suits confident golfers who want to enjoy hitting driver on wide fairways, and works well as an easier round earlier in a trip before a tougher course like Son Gual or Golf Andratx. One thing that surprises visitors: on a calm day the course flatters you, but add wind and the long par 3s and the 590m 10th hole earn every metre of their length. Best tee time is early, before the usual mid-morning breeze arrives.',
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'notes',
          title: 'Four things I would know before booking Santa Ponsa 1',
          items: [
            ['Best tee time', 'Earlier is better if you can get it. The course is more comfortable before the usual breeze picks up, and the long holes feel much friendlier first thing.'],
            ['Wind tip', 'When the wind arrives, it hits the long par 3s and the 10th hardest. Take enough club and treat the scorecard yardage as the starting point, not the answer.'],
            ['Where visitors miss', 'Most visitors enjoy the wide fairways, get overconfident with driver, then lose shots by attacking the small targets too aggressively from good positions and having tricky chip shots.'],
            ['Clubhouse tip', 'This is a good confidence course (if your driver is good) before a sterner test. If your trip includes Son Gual or Andratx, Santa Ponsa 1 makes sense earlier in the week.'],
          ],
        },
        {
          type: 'paragraph',
          text: "If you're driving the ball well and want to enjoy it, play Santa Ponsa 1. If you're choosing between Son Gual and Alcanada for a serious day and want something more open, with proper European Tour history behind it, this is the one. The par-3s will keep you honest. The rest of the round tends to give you something back. If you're mapping out more than one round, the <a href='/plan-your-trip'>trip planning guide</a> covers how to sequence courses and tee times.",
        },
        {
          type: 'cta',
          text: 'Playing Santa Ponsa 1? I can build it into a Mallorca golf day and help you use the wide fairways properly.',
          linkLabel: 'Book a Play With A Pro day in Mallorca →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },

  'golf-andratx-review': {
    en: {
      metadata: {
        title: "Golf Andratx Review: €115-€140 (2026)",
        description:
          "7.5/10: €125, longest par 5 in Spain, mountain setting. Andy's honest verdict on Golf de Andratx.",
        imagePath: '/images/golf-andratx-blog/andratx-hole-8.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'May 2026',
        title: "Golf de Andratx - Review (2026)",
        intro:
          'We started on the 3rd, the robots were cutting the Green Monster, and by hole 8 we were looking down over the whole southwest of Mallorca. A 7.5 out of 10 and worth the drive.',
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf: Honest Review 2026' },
          { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 - Honest Review 2026' },
          { slug: 'son-termes-review', title: 'Son Termes Golf - Honest Review 2026' },
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/golf-andratx-blog/andratx-hole-8.webp',
          alt: 'View from hole 8 at Golf de Andratx looking down over the southwest of Mallorca',
          caption: 'Hole 8, A Love of Mallorca. From one of the highest points on the course, looking down over the whole southwest of Mallorca.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
          priority: true,
        },
        {
          type: 'paragraph',
          text: 'We teed off just after 8am as one of the first groups out. A small bit of a quirky start: maintenance had the opening two holes out of play, so we began on the 3rd. The practice facilities are on the other side of the road from the clubhouse, which makes the warm-up slightly unusual, but there is a really good area to hit any short game shot you can imagine in great condition and a driving range on a steep slope that does the job of loosening you up before a round.',
        },
        {
          type: 'paragraph',
          text: 'Buggies are mandatory before 2pm and the course was busy from early on. The pace of play was fine, but the morning had a slightly rushed feel at times. As we get into season, this is common everywhere, especially at one of the best and more in-demand courses in the southwest, and that showed. It was a good morning out even if a few things could have been a little smoother.',
        },
        {
          type: 'heading',
          text: 'How the Course Plays',
        },
        {
          type: 'paragraph',
          text: 'Golf Andratx deserves its reputation as one of the more difficult courses on the island. Several shorter par 4s look straightforward until you see where the hazards are placed. Creeks and water cut across fairways rather than running alongside them, so distance control off the tee matters more than length. Being slightly off on your yardage often means being in the water or in trouble.',
        },
        {
          type: 'paragraph',
          text: 'Elevation change is constant. Tee shots where the ball disappears from view, approaches where you are committing to a number without being able to see the flag. The par 3s in particular play very differently to what is written on the card because of the drops involved. A GPS or course planner is genuinely worth having here.',
        },
        {
          type: 'image',
          src: '/images/golf-andratx-blog/andratx-hole-4.webp',
          alt: 'Hole 4, Pine Valley, Golf de Andratx, water surrounding the green',
          caption: 'Hole 4, Pine Valley. The water does not just border this hole, it surrounds it. The green slopes in a way that makes the right number on your approach the priority.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'The wind adds another layer. The course sits up in the mountains above Andratx and Camp del Mar, and when it picks up, distance judgement on the par 3s becomes the main challenge. We played in good conditions early on but felt gusts on the higher holes later in the round.',
        },
        {
          type: 'heading',
          text: 'Some Holes Worth Playing Twice',
        },
        {
          type: 'paragraph',
          text: 'Hole 6, the Green Monster, is the longest par 5 in Spain. When we played, the fairway was being maintained by greenkeeping robots, cutting the grass and you could really see how consistent the surface is at that scale. We had the wind behind us on this hole and it still took everything.',
        },
        {
          type: 'image',
          src: '/images/golf-andratx-blog/andratx-hole-7.webp',
          alt: 'Tee shot on hole 7 at Golf de Andratx with stone walls in front of the green',
          caption: 'Hole 7. The stone walls block your view of the green from the tee. You are picking a line and committing to it without seeing where you are going.',
          presentation: 'natural',
          naturalWidth: 1284,
          naturalHeight: 1643,
        },
        {
          type: 'paragraph',
          text: 'Hole 12 has a sharp dogleg right and views down over Camp del Mar for the whole hole. One of the more memorable on the course. Hole 15, Hello Mrs Robinson, plays around 20 yards shorter from a highly elevated tee, which sounds helpful until you realise the green is well protected and getting the right number in that situation is harder than it looks.',
        },
        {
          type: 'image',
          src: '/images/golf-andratx-blog/andratx-hole-15.webp',
          alt: 'Elevated tee shot on hole 15, Hello Mrs Robinson, at Golf de Andratx',
          caption: 'Hole 15, Hello Mrs Robinson. The drop from the tee plays around 20 yards shorter. Distance control is the whole challenge here.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'Hole 18 finishes with water making the par 5 hard to attack in two, and bunkers protecting well from there. A strong closing hole.',
        },
        {
          type: 'image',
          src: '/images/golf-andratx-blog/andratx-hole-2-camp-del-mar.webp',
          alt: 'Hole 2 at Golf de Andratx with Camp del Mar visible in the background',
          caption: 'Hole 2. Despite spending most of the round high in the mountains, this was the first time the sea came into view. Camp del Mar sits in the background. A good note to finish on.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'heading',
          text: 'Greens and Condition',
        },
        {
          type: 'paragraph',
          text: 'The greens were well maintained and at a good pace. Plenty of slope on several of the shorter holes, which will become a bigger challenge as the greens quicken up through summer. The bunkers were in excellent condition throughout. Consistent sand, well raked. The greenkeeping team were working on multiple areas during our round, and the bunkers showed where their focus has been.',
        },
        {
          type: 'paragraph',
          text: 'The buggies are modern and well equipped. Worth mentioning: somewhere around hole 16 I noticed the buggy screen seemed to be showing where our ball had come to rest on the green. I am not certain that is exactly what it was doing, but after that point it appeared to track ball position with some accuracy. A small detail, but a useful one.',
        },
        {
          type: 'facts',
          items: [
            ['~€125', 'Green fee (May 2026)'],
            ['7.5/10', "Andy's rating"],
            ['Par 72', 'Mountain layout'],
            ['SW Mallorca', 'Above Andratx town'],
          ],
        },
        {
          type: 'heading',
          text: 'Practical Information',
        },
        {
          type: 'paragraph',
          text: "Green fee in May 2026 was around €125 per person. Buggies are mandatory before 2pm and are charged separately. Walking is allowed from 2pm onwards. Golf insurance of €3 is required at check-in. Yellow tees are the right choice for most visiting golfers. The course is in the southwest of the island, around 30 minutes from Palma. Andratx town itself is just a few minutes away. Despite spending almost the entire round high in the mountains, the sea view over Camp de Mar is visible only from hole 2, a detail worth knowing before you build expectations around the water view.",
        },
        {
          type: 'paragraph',
          text: 'The course plays harder than the yardage suggests, particularly on a windy day. A second visit would produce a better score. The layout rewards local knowledge and course management far more than it rewards length.',
        },
        {
          type: 'heading',
          text: 'Common Questions',
        },
        {
          type: 'paragraph',
          text: 'Handicap limit is 28 for men, 36 for ladies, checked at booking. Buggies are mandatory before 2pm; walking is allowed after that. A daily Federation licence (€3) applies if you are not a member of the Spanish Federation. This suits confident golfers who enjoy a strategic test more than length: distance control off the tee matters more than power. One thing that surprises first-timers: despite spending most of the round high in the mountains, the sea view over Camp de Mar is visible only from hole 2, so do not build your expectations around water views. Local tip: bring a GPS or course planner, since several approaches are semi-blind.',
        },
        {
          type: 'heading',
          text: 'Verdict',
        },
        {
          type: 'notes',
          title: 'Four things I would know before booking Golf Andratx',
          items: [
            ['Best tee time', 'Go as early as you reasonably can. The course is in demand, the mountain light is best in the morning, and you give yourself the best chance of beating the stronger wind.'],
            ['Wind tip', 'Use a GPS or proper course guide and trust it. This course punishes half-decisions on carries and exposed par 3s far more than it punishes a committed conservative play.'],
            ['Where visitors miss', 'The common mistake is thinking the challenge is just length. Most big numbers here actually come from poor distance control into cross-fairway hazards, massive elevation changes on short holes and trouble you do not fully see from the tee.'],
            ['Clubhouse tip', 'The practice setup is a little unusual, so arrive with enough time to use the short-game area and settle in before you head to the first tee.'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Golf Andratx is a 7.5 out of 10. The views from the higher holes are the best I have seen in the southwest of the island. The layout is a proper test, the Green Monster is the longest par 5 in Spain and plays every metre of it, and hole 12 over Camp del Mar is one of the best holes I have played in Mallorca. The mandatory buggies before 2pm and a busy morning made it feel more managed than relaxed, but that is the reality of a course in this kind of demand. Worth playing, and worth going back to with a course planner in hand. For help sequencing it with other courses, see the <a href="/plan-your-trip">trip planning guide</a>.',
        },
        {
          type: 'cta',
          text: 'Playing Golf Andratx? I can help with the strategy, the clubbing, and the trouble zones that matter most around this layout.',
          linkLabel: 'Book a Play With A Pro day in Mallorca →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
  'son-termes-review': {
    en: {
      metadata: {
        title: "Son Termes Golf - Honest Review 2026",
        description:
          'Son Termes green fee around €90-110, par 72, 20 minutes from Palma. Mountain views, honest 6/10 verdict.',
        imagePath: '/images/son-termes-blog/st-2.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '5 min read',
        updated: 'April 2026',
        title: "Son Termes Golf, Mallorca: A PGA Professional's Honest Review (2026)",
        intro:
          'Twenty minutes from Palma, up in the Na Burguesa mountains. More character than most courses at this price level, and better views than anywhere else close to the city.',
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf: Honest Review 2026' },
          { slug: 'golf-andratx-review', title: 'Golf de Andratx - Honest Review 2026' },
          { slug: 'son-muntaner-review', title: 'Son Muntaner: Best Golf Course in Spain 2025' },
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/son-termes-blog/st-2.webp',
          alt: 'Goat on Son Termes golf course Mallorca with Palma in background',
          caption: 'The ball is mine. The goat was not invited. Back nine, Son Termes.',
          priority: true,
          presentation: 'natural',
          naturalWidth: 3022,
          naturalHeight: 3153,
        },
        {
          type: 'paragraph',
          text: 'I played Son Termes on a Friday morning with a friend on a 20 handicap. By the back nine he was running low on balls. The rough is tight, several tee shots give you very little room, and the course collects misses in a way that is not obvious from the card. That is a reasonable summary of what Son Termes is.',
        },
        {
          type: 'paragraph',
          text: 'Son Termes sits in the Na Burguesa mountains above Palma. Twenty minutes from the city centre and a different world. On a clear day from the higher tees you can see Castell de Bellver and the cathedral on the Palma skyline, with the Mediterranean behind them. Coming from Shanghai, where a course this accessible and this scenic would have a five-year waiting list for membership, that still registers.',
        },
        { type: 'heading', text: 'The Walk' },
        {
          type: 'paragraph',
          text: 'I always try to walk. On the front nine at Son Termes that is straightforward. On the back nine it becomes a genuine conversation with yourself. Several climbs are steep enough to push the heart rate, and by the time you reach the upper holes two things have happened: the views have improved considerably, and the wind has picked up enough to make distance control on the par 3s harder than the yardages suggest. Most players take a buggy. On a warm day, that is the right call.',
        },
        {
          type: 'image',
          src: '/images/son-termes-blog/st-1.webp',
          alt: 'Tee shot at Son Termes golf course Mallorca with mountains behind',
          caption: 'Tee shot at Son Termes, Na Burguesa mountains behind.',
          presentation: 'natural',
          naturalWidth: 1284,
          naturalHeight: 2103,
        },
        { type: 'heading', text: 'How the Course Plays' },
        {
          type: 'paragraph',
          text: 'Son Termes is not a long course. Several par 4s are driveable or close to it, leaving short irons or wedges for the approach. For a low handicapper looking for a length test, that is worth knowing going in.',
        },
        {
          type: 'paragraph',
          text: 'What it lacks in length it makes up for in character. Blind tee shots, sharp doglegs, artificial water placed to catch the shot most golfers instinctively want to play. Several holes require you to commit to a target you cannot fully see. That keeps the round interesting from start to finish, and it means a second visit will almost always produce a better score.',
        },
        {
          type: 'image',
          src: '/images/son-termes-blog/st-6.webp',
          alt: 'Son Termes golf course Mallorca Na Burguesa mountains',
          caption: 'The course opens up on the back nine and view of the Na Burguesa mountains.',
          presentation: 'natural',
          naturalWidth: 5120,
          naturalHeight: 1198,
        },
        { type: 'heading', text: 'Some Holes Worth Mentioning' },
        {
          type: 'paragraph',
          text: 'Hole 6 was personally satisfying. Driver almost to the green on the par 5, wedge in, eagle chance narrowly missed. The par 5s here are reachable and the course gives you genuine birdie opportunities with short irons in hand.',
        },
        {
          type: 'paragraph',
          text: 'Hole 12 is the short par 3 over wooded ground with the best views on the course. The flag is harder to find than you would expect from the tee, and the surrounding trees frame the hole in a way that makes it one of the more memorable short holes close to Palma.',
        },
        {
          type: 'image',
          src: '/images/son-termes-blog/st-5.webp',
          alt: 'Son Termes golf par 3 12th hole green Mallorca with trees behind',
          caption: 'The 12th. The flag was harder to find than this makes it look.',
          presentation: 'natural',
          naturalWidth: 3024,
          naturalHeight: 4032,
        },
        {
          type: 'paragraph',
          text: 'Hole 13 plays differently to how it looks on the card. Sharp dogleg, 9 iron from the tee to keep it in play, then close to 175 metres for the approach with limited visibility to the flag. I was in the middle of the fairway and still had a largely blind shot in. Good hole. The course has a few like this, where you commit to a number and find out afterwards whether you were right.',
        },
        {
          type: 'paragraph',
          text: 'Hole 18 finishes down a dogleg left, dropping back towards the clubhouse. It is a good closing hole. Sitting on the terrace afterwards watching others navigate those climbs is a satisfying way to end the round.',
        },
        { type: 'heading', text: 'The Goats' },
        {
          type: 'paragraph',
          text: 'There were goats on several holes throughout the round. They treated the course as their own, which in fairness it probably was before anyone built a golf club on it. The whole herd came to watch us putt out on 17. One was observing proceedings from a bunker with no interest whatsoever in the concept of raking. A genuinely hazardous animal that we feel should be on the scorecard.',
        },
        { type: 'heading', text: 'The Greens' },
        {
          type: 'paragraph',
          text: 'Honest answer: they are not at the level of Son Gual or Alcanada. The surfaces were good and the pace was solid, but if you have played the top courses on the island recently you will notice the difference. For the price and what the rest of the round delivers, that is a fair trade.',
        },
        {
          type: 'image',
          src: '/images/son-termes-blog/st-4.webp',
          alt: 'Son Termes golf course Mallorca panoramic view over Na Burguesa mountains and Palma plain',
          caption: 'The view from the upper holes. Castell de Bellver and the cathedral were visible on the skyline on a clear morning.',
          presentation: 'natural',
          naturalWidth: 4032,
          naturalHeight: 3024,
        },
        {
          type: 'facts',
          items: [
            ['~€110', 'In-season green fee'],
            ['6/10', 'Difficulty'],
            ['Par 72', 'Mountain layout'],
            ['20 min', 'From central Palma'],
          ],
        },
        { type: 'heading', text: '2026 Green Fees' },
        {
          type: 'paragraph',
          text: 'Full in-season pricing is around €100. Check current rates directly with Son Termes before booking as pricing varies seasonally. There is a multi-round deal worth knowing about. More details on that coming soon. The course is approximately 20 minutes from central Palma, up in the Na Burguesa mountains.',
        },
        {
          type: 'image',
          src: '/images/son-termes-blog/st-3.webp',
          alt: 'Son Termes golf course Mallorca aerial view over the layout with mountains',
          caption: 'The course from above. The routing through the mountains is what makes Son Termes different from anything else at this price point on the island.',
          presentation: 'natural',
          naturalWidth: 5120,
          naturalHeight: 1198,
        },
        { type: 'heading', text: 'Common Questions' },
        {
          type: 'paragraph',
          text: "Most players take a buggy, especially on warmer days, though walking the front nine is straightforward (the back nine's climbs are the tougher call). Son Termes suits golfers who want character and mountain views over outright length: several par 4s are driveable, and it makes a good, less expensive alternative to the premium courses close to Palma. One thing that surprises first-timers: despite being short, the course collects misses in ways that are not obvious from the card, and you will likely share a few holes with the resident goats. Best tee time is an early start, before the wind builds on the exposed upper holes.",
        },
        { type: 'heading', text: 'Verdict' },
        {
          type: 'notes',
          title: 'Four things I would know before booking Son Termes',
          items: [
            ['Best tee time', 'An earlier start is the safer play, especially if you want to walk during warmer months. The back nine climbs, the wind tends to build, and the course gets tougher the longer you leave it.'],
            ['Wind tip', 'Club up on the exposed short holes once you get into the upper part of the course. The yardage looks modest, but the mountain breeze changes the shot quickly.'],
            ['Where visitors miss', 'Most dropped shots come from assuming a short course must be straightforward. Blind doglegs, water that cuts in, sticky rough, and hidden targets punish anyone switching off.'],
            ['Clubhouse tip', 'If you like courses with personality more than polish, this is a good Palma-area alternative to the premium names. The terrace finish with the mountain views is a great way to finish up.'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Son Termes delivers more character than most courses at this price level. The views from the back nine are the best available anywhere this close to Palma. The layout keeps you thinking throughout, and a second visit would unlock a better score. For a visiting golfer who wants something different from the premium courses, or a resident looking for a course with genuine personality at a sensible price, it earns its place on the list. If you\'re still working out the wider itinerary, the <a href="/plan-your-trip">trip planning guide</a> covers logistics and timing.',
        },
        {
          type: 'cta',
          text: 'Thinking about Son Termes? I can tell you whether it fits your trip and whether it should be the Palma-area round you build around.',
          linkLabel: 'Get in touch →',
          href: '/contact',
        },
      ],
    },
  },
  't-golf-calvia-review': {
    en: {
      metadata: {
        title: 'T Golf Calvià - Honest Review 2026',
        description:
          'Peak €210, twilight €150. 15 lakes, 6,500m back tees, 9/10 conditioning.',
        imagePath: '/images/t-golf-calvia-social.jpg',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'May 2026',
        title: "T Golf Calvià - Review (2026)",
        intro:
          'Fifteen lakes, windmills throughout, and some of the purest greens I have played in Mallorca. A 9 out of 10 and one of the best-conditioned courses on the island.',
        related: [
          { slug: 'son-gual-review', title: 'Son Gual Golf: Honest Review 2026' },
          { slug: 'son-muntaner-review', title: 'Son Muntaner Golf: Honest Review 2026' },
          { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 - Honest Review 2026' },
          { slug: 'son-antem-west-review', title: 'Son Antem West - Honest Review 2026' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-1.webp',
          alt: 'Windmill at T Golf Calvià against a clear blue sky',
          caption: 'The windmills are a distinctive feature of T Golf Calvià.',
          priority: true,
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'I teed off at 15:20 on a Tuesday afternoon and the course was quiet enough that I could hear the wind moving through the pine trees between shots. From most of the fairways you cannot see a road or a building, just pine trees, water and mountains. For a course in the southwest corner of Mallorca, that surprised me.',
        },
        {
          type: 'paragraph',
          text: 'The conditioning is as good as anything I have played on the island. Very tightly mown fairways and fringes, bunkers raked to perfection, and a simple but uncommon rake design that means the ball rarely comes to rest against the rake. It is a small detail, but a really appreciated one.',
        },
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-7.webp',
          alt: 'Bunker at T Golf Calvià showing the distinctive rake design',
          caption: 'The rake design means the ball rarely comes to rest against the face. A small detail that makes a real difference.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'The greens are large and, on the day I played, pure. No excuses for missing putts. Several holes also ask you to trust your distance completely because you cannot see the bottom of the flag from the approach. Players who rely on pin position to judge distance rather than working from yardage will be caught out.',
        },
        {
          type: 'paragraph',
          text: 'The course runs to just under 6,500 metres from the back tees where I played, with 15 lakes and carries from the tee on a number of holes. Windmills are dotted throughout, which is unusual and gives the course its own character. The Mediterranean pine trees and the Tramuntana mountains are consistent from the front nine to the back.',
        },
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-4.webp',
          alt: 'Fairway at T Golf Calvià with windmill and Tramuntana mountains in the background',
          caption: 'The windmills and Tramuntana backdrop are a consistent feature throughout the round.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'heading',
          text: 'Holes Worth Knowing',
        },
        {
          type: 'paragraph',
          text: 'Hole 7 is a dogleg through the trees. Short on the card but the approach distance is harder to read than it looks and players tend to underclub.',
        },
        {
          type: 'paragraph',
          text: 'Hole 8 is a downhill par 4 with a tight landing area off the tee. The approach is a manageable wedge if you find the fairway, but miss it and a front pin gets complicated quickly. The slope makes it difficult to stop the ball.',
        },
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-3.webp',
          alt: 'Hole 8 at T Golf Calvià with palm trees and Tramuntana mountains behind the green',
          caption: 'Hole 8. A good backdrop, but the approach asks more of you than it looks.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'Hole 10 is the clearest decision on the course. Dogleg right with a windmill on the left and water on the right. You can cut off distance over the water depending on how much you want to take on. It is the kind of hole that plays differently depending on where you are in the round.',
        },
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-5.webp',
          alt: 'Fairway and bunkers at T Golf Calvià with the Tramuntana mountains in the background',
          caption: 'The Tramuntana mountains sit in the background on most holes on the back nine.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'Hole 16 is a par 4 with an uphill tee shot framed by rocks and trees. One of the more visually distinct holes on the course and it plays harder than the card suggests.',
        },
        {
          type: 'paragraph',
          text: 'Hole 18 is a tight par 5 that opens up as you move down the fairway. It is a proper finishing hole. It asks you to commit off what looks like a narrow tee shot, and gives you a chance at a reward if you do.',
        },
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-6.webp',
          alt: 'Two golfers on the course at T Golf Calvià with the fairway and mountains behind',
          caption: 'Playing T Golf Calvià with a guest. The course suits players who want a proper test in good condition.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'heading',
          text: 'Practical Information',
        },
        {
          type: 'facts',
          items: [
            ['Up to €210', 'Peak green fee'],
            ['From €150', 'Twilight rate'],
            ['9/10', "Andy's rating"],
            ['6,500m', 'Back tees (Par 72)'],
          ],
        },
        {
          type: 'paragraph',
          text: 'T Golf Calvià runs midweek and multiple-visit offers regularly. Worth checking before you book: t-golf.club/calvia/offers.',
        },
        {
          type: 'paragraph',
          text: 'Service was good throughout. Tees and water provided, friendly caddy master staff. The clubhouse and outdoor seating areas are well done and a good place to spend time before or after the round. The driving range is grass, which is not guaranteed at every Mallorca club.',
        },
        {
          type: 'paragraph',
          text: 'One thing to note: signage around restricted buggy areas could be clearer. A couple of times I ended up somewhere that was not obviously marked as off limits and had to reverse back out. Not a problem once you know the course.',
        },
        { type: 'heading', text: 'Common Questions' },
        {
          type: 'paragraph',
          text: "Handicap limit: 28 for men, 34 for ladies. Walking is possible here, though with the distance and wind exposure a buggy is the more comfortable choice for most. The 15 lakes are not background scenery. They line fairways and force carries on multiple holes. The raised greens and quick fringe areas make approach play the main challenge; this is a course that suits the better golfer rather than someone new to the island.",
        },
        {
          type: 'image',
          src: '/images/t-golf-calvia-blog/t-golf-calvia-2.webp',
          alt: 'Pine trees framing the fairway at T Golf Calvià with water and mountains visible beyond',
          caption: 'From most of the fairways you can see nothing but pine trees, water and mountains.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'heading',
          text: 'Verdict',
        },
        {
          type: 'paragraph',
          text: '9/10. T Golf Calvià is one of the best-conditioned courses I have played in Mallorca. The greens are excellent, the fairways are in great shape, and the layout tests you properly, particularly around distance judgement and water, without being unfair.',
        },
        {
          type: 'notes',
          title: 'Four things I would know before booking T Golf Calvià',
          items: [
            ['Best tee time', 'Midweek twilight is a very good play here. You get the course in beautiful light, quieter rhythm, very reasonable twilight rates as an added benefit.'],
            ['Wind tip', 'Work from your number, not what your eye tells you. The semi-blind approaches and exposed water carries punish anyone who guesses rather than commits.'],
            ['Where visitors miss', 'The usual mistake is underclubbing on the holes that look friendlier than they are, then being aggressive and dragging more water into play.'],
            ['Clubhouse tip', 'Use the grass range before you go out and leave enough time for a drink afterwards. The whole setup feels more complete if you do not treat it as a rushed round.'],
          ],
        },
        {
          type: 'paragraph',
          text: 'It suits players who want a serious round in good condition. I would not put a high-handicapper here as their first course on a holiday trip, but for anyone on a dedicated golf visit it belongs on the itinerary. The twilight rate and the midweek offers make it good value at the right time. Fitting it into a longer trip? The <a href="/plan-your-trip">trip planning guide</a> covers sequencing and timing.',
        },
        {
          type: 'cta',
          text: 'Playing T Golf Calvià? I can help you manage the carries, the green complexes, and the scoring decisions this course asks for.',
          linkLabel: 'Book a Play With A Pro day in Mallorca →',
          href: '/play-with-a-pro',
        },
      ],
    },
  },
  'son-antem-west-review': {
    en: {
      metadata: {
        title: "Son Antem West - Honest Review 2026",
        description:
          'Green fees from €109, par 72, 6,293m. Resort course near Palma, relaxed layout, good conditioning.',
        imagePath: '/images/son-antem-west-review-blog/son-antem-west-1.webp',
      },
      meta: {
        badge: 'Course Review',
        badgeGold: true,
        readTime: '6 min read',
        updated: 'May 2026',
        title: "Son Antem West Golf Club, Mallorca - A PGA Professional's Honest Review (2026)",
        intro: 'A resort course 15-20 minutes from Palma. Good conditioning, open countryside, and a layout that suits a wide range of players.',
        related: [
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 't-golf-calvia-review', title: 'T Golf Calvià - Honest Review 2026' },
          { slug: 'santa-ponsa-1-review', title: 'Santa Ponsa 1 - Honest Review 2026' },
          { slug: 'son-gual-review', title: 'Son Gual Golf: Honest Review 2026' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/son-antem-west-review-blog/son-antem-west-1.webp',
          alt: 'Water hazard on Son Antem West golf course, Llucmajor, Mallorca',
          caption: 'One of the water holes on the West course. The course sits in Llucmajor, about 15-20 minutes from Palma, open countryside, no houses visible.',
          priority: true,
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'Three or four groups were already queuing on the first tee when we arrived at 7:50 on a Sunday morning. We had booked early specifically to get ahead of the pace-of-play that resort courses can suffer from. We had not got ahead of it.',
        },
        {
          type: 'paragraph',
          text: 'That is a useful thing to know about Son Antem West before you even hit a shot. It is a popular resort course in a well-run complex close to Palma, and it operates accordingly. Go in expecting that and you will enjoy the round. Go in expecting a quiet, unhurried experience and you may not.',
        },
        {
          type: 'heading',
          text: 'First Impression',
        },
        {
          type: 'paragraph',
          text: 'Driving into the resort, the scale of it is immediately clear. Residences, extensive green space, a golf academy, paddle tennis courts, a hotel. It reads as a complete golf destination. The check-in was organised, the staff helpful, and a small shop near the entrance made it straightforward to pick up a coffee and a snack before the round. Useful detail at 7:45 in the morning.',
        },
        {
          type: 'paragraph',
          text: 'Out on the course, the setting opens up. The West course sits in open Mallorcan countryside near Llucmajor, 15 to 20 minutes from Palma. There are no houses visible from the fairways, the Randa mountains sit in the background on the back nine, and the wildlife is a constant presence. Rabbits cross the fairways regularly. Herons and various birds are around the water holes throughout the round. It does not feel like a suburban golf course, which helps.',
        },
        {
          type: 'image',
          src: '/images/son-antem-west-review-blog/son-antem-west-6.webp',
          alt: 'Birds on the fairway at Son Antem West with water and green behind, Mallorca',
          caption: 'Wildlife is a regular presence on the back nine. Rabbits, herons, and various birds, particularly around the water holes.',
          presentation: 'natural',
          naturalWidth: 885,
          naturalHeight: 1200,
        },
        {
          type: 'heading',
          text: 'The Course',
        },
        {
          type: 'paragraph',
          text: 'Francisco Lopez Segalés designed Son Antem West, which opened in 1995. It plays to a par 72 and measures 6,293 metres from the back tees. The layout is generally open, the fairways generous, and most tee shots carry little penalty for being slightly offline. That makes it accessible for mixed-ability groups and holiday golfers, and clearly that is what it was designed for.',
        },
        {
          type: 'paragraph',
          text: 'The holes that stand out are the tree-lined ones. On those holes the tee shot is tighter, the line matters more, and the shape of the approach changes depending on which side of the fairway you find. The more open sections of the course are pleasant but give you little to think about off the tee. You pick a target and swing.',
        },
        {
          type: 'image',
          src: '/images/son-antem-west-review-blog/son-antem-west-5.webp',
          alt: 'Andy Griffiths watching a client hit an iron shot on a tree-lined hole at Son Antem West',
          caption: 'A driver on one of the back nine holes. The course was in good condition throughout.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'paragraph',
          text: 'A few holes are worth knowing about specifically. The 10th is a dogleg-right with water short of the green. The approach has a decision to it: take the water on or lay up, depending on how the tee shot came off. The 12th is a relatively open par 4, but the Randa mountain backdrop makes it one of the better-looking holes on the back nine. The 16th is the best hole on the course: an uphill dogleg-right par 5 through the trees, finishing at a small, protected green. The 18th has water covering much of the left side off the tee.',
        },
        {
          type: 'image',
          src: '/images/son-antem-west-review-blog/son-antem-west-2.webp',
          alt: '16th hole approach at Son Antem West, par 5 through the trees, Mallorca',
          caption: 'Approaching the 16th. An uphill par 5 that winds through the trees before finishing at a small, protected green.',
          presentation: 'natural',
          naturalWidth: 1445,
          naturalHeight: 1600,
        },
        {
          type: 'image',
          src: '/images/son-antem-west-review-blog/son-antem-west-3.webp',
          alt: '18th hole at Son Antem West, water hazard left of fairway, Mallorca',
          caption: 'Looking back down the 18th. Water covers much of the left side off the tee.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'heading',
          text: 'The Greens',
        },
        {
          type: 'paragraph',
          text: 'Small and undulating, and they roll very purely. The speed was good, not especially quick, but consistent and true. The surfaces themselves were in good shape for a course carrying that many rounds on a Sunday. Several greens are raised or slope away from the player. Worth knowing before you chip: the ball releases considerably further after landing than it looks like it will. A lower, running shot is often the better option over trying to land something soft on the edge.',
        },
        {
          type: 'heading',
          text: 'Conditioning',
        },
        {
          type: 'paragraph',
          text: 'Very good for the traffic it was handling. The fairways were solid, the greens rolled consistently, and the presentation held up well across the round. There was very little wind, which meant conditions were about as straightforward as they get here. From the back tees the course did not feel especially long even in calm air.',
        },
        {
          type: 'heading',
          text: 'Walkability',
        },
        {
          type: 'paragraph',
          text: 'Walking is completely fine. The routing is straightforward and the terrain is flat. There were a couple of moments between holes where the path was not entirely clear on foot, but nothing significant. For anyone who prefers to walk rather than take a buggy, this is an easy course to do it on.',
        },
        {
          type: 'image',
          src: '/images/son-antem-west-review-blog/son-antem-west-4.webp',
          alt: 'Andy Griffiths with clients on a play-with-a-pro day at Son Antem West, Mallorca',
          caption: 'A play-with-a-pro day at Son Antem West. The layout is forgiving enough that guests can play freely.',
          presentation: 'natural',
          naturalWidth: 1200,
          naturalHeight: 1600,
        },
        {
          type: 'heading',
          text: 'The Honest Part',
        },
        {
          type: 'paragraph',
          text: 'A large part of Son Antem West is strategically flat. The open holes give you a wide landing area, a straightforward approach, and a small green to aim at. You can play those holes on autopilot. Compared to Son Gual, Alcanada, or Andratx, the course covers less ground mentally. At green fees in the same range, it competes with those courses on price while offering less in terms of how much the layout stays with you.',
        },
        {
          type: 'facts',
          items: [
            ['€109-145', 'Green fee'],
            ['7/10', 'My rating'],
            ['Par 72', '6,293m'],
            ['Llucmajor', '15-20 min from Palma'],
          ],
        },
        {
          type: 'heading',
          text: 'Practical Information',
        },
        {
          type: 'paragraph',
          text: 'Green fee: €105 on the day we played. The resort is well set up before and after the round. There is a small shop near check-in for coffee, water, and snacks, which is genuinely useful if you are on an early tee time. Buggy hire is available. Walking is straightforward throughout.',
        },
        {
          type: 'paragraph',
          text: 'Location: Llucmajor, about 15 to 20 minutes south of Palma. Easy to reach and easy to combine with a day or two in the city.',
        },
        {
          type: 'heading',
          text: 'Common Questions',
        },
        {
          type: 'paragraph',
          text: 'Walking is straightforward here: the routing is flat and easy on foot, with buggy hire also available. Son Antem West suits holiday golfers and mixed-ability groups who want an enjoyable, accessible round close to Palma; it is not the course to pick if you specifically want a layout that tests you from start to finish. One thing that surprises visitors: several greens are raised or slope away from the player, and the ball releases considerably further after landing than it looks like it will, so a lower running chip is often the safer play. Best tee time is a weekday morning; Sundays can back up early because the course is popular with resort golfers.',
        },
        {
          type: 'heading',
          text: 'Verdict',
        },
        {
          type: 'notes',
          title: 'Four things I would know before booking Son Antem West',
          items: [
            ['Best tee time', 'Weekday mornings are the sweet spot if you can manage them. Sundays can back up early, even on the first wave, because the course is so popular with resort golfers.'],
            ['Wind tip', 'On a calm day it is very playable, which is exactly why it works for mixed groups. If the breeze gets up, focus on landing areas and use the flatter routing to stay patient.'],
            ['Where visitors miss', 'The big mistake is going on autopilot because the fairways look generous. Being on the wrong side of the fairway still matters, some of the smaller greens need accurate club selection and the chip shots roll on.'],
            ['Clubhouse tip', 'The small shop by check-in is useful if you are on an early start. Coffee, water, and a snack there makes the opening stretch feel a lot easier.'],
          ],
        },
        {
          type: 'paragraph',
          text: '7/10. Son Antem West is a well-run resort course with good conditioning, reliable service, and a layout that suits a wide range of players. The 16th is the best hole, the tree-lined sections are the most engaging, and the wildlife and open countryside make the setting better than the course alone. It suits holiday golfers, mixed groups, and anyone who wants an enjoyable and accessible round close to Palma. It is not the right choice if you are specifically looking for a course that will test you from start to finish. See how it fits alongside the others on the <a href="/golf-courses">full Mallorca golf courses page</a>. If you\'re planning several rounds around it, the <a href="/plan-your-trip">trip planning guide</a> covers timing and logistics.',
        },
        {
          type: 'cta',
          text: 'Playing Son Antem West? I use it for relaxed, well-run guided days and can help you decide if it fits your group better than the bigger names.',
          linkLabel: 'See the play-with-a-pro experience',
          href: '/play-with-a-pro',
        },
      ],
    },
  },


  'on-course-coaching-mallorca': {
    en: {
      metadata: {
        title: 'On-Course Golf Coaching in Mallorca',
        description:
          'On-course coaching with a UK PGA Advanced Professional, 11 years in Shanghai. Real feedback, mid-round.',
        imagePath: '/images/son-gual-blog/sg-swing.webp',
      },
      meta: {
        badge: 'Coaching Guide',
        badgeGold: true,
        readTime: '5 min read',
        updated: 'May 2026',
        title: 'On-Course Golf Coaching in Mallorca. Play Better, Right Now',
        intro:
          'Most lessons happen on a range. On-course coaching happens where the game actually is. Here is what it involves, who it suits, and what you can expect from a day with me.',
        related: [
          { slug: 'best-golf-courses-mallorca', title: 'Best Golf Courses in Mallorca 2026' },
          { slug: 'son-gual-review', title: 'Son Gual Golf - Honest Review 2026' },
          { slug: 'golf-cost-mallorca', title: 'How Much Does Golf Cost in Mallorca?' },
          { slug: 'golf-trip-planning-mallorca', title: 'How to Plan the Perfect Golf Trip to Mallorca' },
        ],
      },
      blocks: [
        {
          type: 'image',
          src: '/images/son-gual-blog/sg-swing.webp',
          alt: 'Andy Griffiths coaching on the golf course in Mallorca',
          caption: 'On-course coaching at Son Gual. The range tells you one thing. The course tells you something different.',
        },
        {
          type: 'paragraph',
          text: 'Range lessons fix range problems. On-course coaching fixes golf problems. The difference matters more than most people realise until they have experienced both.',
        },
        {
          type: 'paragraph',
          text: 'I am a PGA Advanced Professional. I have spent over a decade coaching at every level. The sessions I find most effective, and the ones clients talk about longest afterwards, are the ones that happen on the course itself, in real situations, under conditions that cannot be replicated on a practice ground.',
        },
        { type: 'heading', text: 'What On-Course Coaching Actually Involves' },
        {
          type: 'paragraph',
          text: 'We play a round together. That is the structure. But instead of just playing, we work through every decision point as it happens: club selection in crosswinds, where to miss a green, how to read a sloped lie, when to take on a carry over water and when to lay up. Pre-shot routine. Course management. Mental game under pressure.',
        },
        {
          type: 'paragraph',
          text: 'I also watch your swing in the conditions that actually affect it. Ground firmness, slope, rough, wind. Not a flat practice bay. I see things on a course I would not see on a range, and the feedback is immediately relevant because you are about to hit the next shot.',
        },
        { type: 'heading', text: 'Who It Suits' },
        {
          type: 'paragraph',
          text: 'On-course coaching works well for a wide range of players. If you play to a reasonable standard but feel your course management is holding you back, a round with me will address that directly. If you are visiting Mallorca and want to get the most out of playing Son Gual, Alcanada, or any of the other courses here, it is the fastest way to improve your enjoyment and your score.',
        },
        {
          type: 'paragraph',
          text: 'It is also a very good option for pairs or small groups. Two or three players who want coaching alongside each other, in a relaxed format, on a course they want to play. That is exactly how the Play With A Pro days are structured.',
        },
        { type: 'heading', text: 'The Courses We Use' },
        {
          type: 'paragraph',
          text: 'Most Play With A Pro days take place at <a href="/guides/son-gual-review">Son Gual</a>, my most-played course on the island and one of the best tests of course management available here. We also use <a href="/guides/alcanada-review">Alcanada</a> for groups who want the most scenic round, and other courses depending on the group level and what they want to work on.',
        },
        { type: 'heading', text: 'What You Get Out of It' },
        {
          type: 'paragraph',
          text: 'Most players leave with three or four specific things to work on. Not a list of twenty swing faults, but the handful of things that are actually costing them shots in real rounds. You will also have a better understanding of how to manage a golf course: where to take risk, where to be conservative, and how to make decisions under pressure.',
        },
        {
          type: 'paragraph',
          text: 'Beyond the coaching, you are getting a round in Mallorca on one of the island outstanding courses, with someone who knows every hole and can make the day genuinely enjoyable. That combination is what the <a href="/play-with-a-pro">Play With A Pro experience</a> is built around.',
        },
        { type: 'heading', text: 'Common Questions' },
        {
          type: 'paragraph',
          text: "On-course coaching works well for a wide range of players, from those whose course management is holding back a reasonable standard of golf to visitors who want to get more out of playing courses like Son Gual or Alcanada. It is also a good option for pairs or small groups coached together. Sessions mostly take place at Son Gual, Andy's most-played course on the island, or Alcanada for groups who want the most scenic round; other courses are used depending on the group and what they want to work on. Most players leave with three or four specific things to work on, rather than a long list of swing faults, plus a clearer sense of course management: where to take risk and where to play safe.",
        },
        { type: 'heading', text: 'A Note on Range Lessons' },
        {
          type: 'paragraph',
          text: 'I do also offer range and practice-facility sessions for players who want to work on specific technical elements before taking them to the course. The two approaches work well together. But if you have limited time in Mallorca and want the fastest, most practical improvement to your actual game, on-course is the place to start.',
        },
        {
          type: 'cta',
          text: 'Interested in a Play With A Pro day? On-course coaching on one of Mallorca best courses.',
          linkLabel: 'See how it works →',
          href: '/play-with-a-pro',
          internal: true,
        },
      ],
    },
  },

}

export function getGuidePostContent(slug, locale = 'en') {
  const guide = GUIDE_POST_CONTENT[slug]
  if (!guide) return null

  const baseContent = guide.en
  if (locale === 'en') return withGuidePostSlug(baseContent, slug)

  const localizedContent = getLocalizedGuidePostContent(slug, locale) || guide[locale]
  if (!localizedContent) return withGuidePostSlug(baseContent, slug)

  return withGuidePostSlug(mergeGuideContent(baseContent, localizedContent), slug)
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

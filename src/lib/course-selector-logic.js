/* =====================================================================
   QUESTIONS + BRANCHING LOGIC
===================================================================== */
export const QUESTIONS = [
  {
    id:'ability', title:'How would you describe your golf?',
    sub:'Honest answers get better recommendations.', cols:true,
    options:[
      {value:'beginner',label:'Beginner',desc:'New to the game, or play rarely'},
      {value:'casual',label:'Casual golfer',desc:'A few rounds a year, here to enjoy it'},
      {value:'confident',label:'Confident player',desc:'Regular golfer, mid handicap'},
      {value:'low',label:'Low handicap',desc:'Single figures, want a proper test'},
    ]
  },
  {
    id:'group', title:'Who is coming on the trip?',
    sub:'', cols:true,
    options:[
      {value:'solo',label:'Just me',desc:'Solo golf trip'},
      {value:'couple',label:'A couple',desc:'Golf plus time together'},
      {value:'friends',label:'Friends group',desc:'3 to 8 players'},
      {value:'family',label:'Family',desc:'Mixed ages and abilities'},
      {value:'corporate',label:'Corporate or VIP',desc:'Client golf, done properly'},
    ]
  },
  {
    id:'style', title:'What kind of trip is this?',
    sub:'Pick all that apply.', cols:true, multi:true,
    options:[
      {value:'luxury',label:'Luxury',desc:'The best of everything'},
      {value:'scenic',label:'Scenic',desc:'Views first, score second'},
      {value:'relaxed',label:'Relaxed',desc:'Easy-going holiday golf'},
      {value:'serious',label:'Serious golf',desc:'The golf is the point'},
      {value:'family',label:'Family-friendly',desc:'Everyone gets a good day'},
      {value:'bucket-list',label:'Bucket list',desc:'The famous ones, played properly'},
    ]
  },
  {
    id:'area', title:'Where are you staying, or hoping to?',
    sub:'', cols:true,
    options:[
      {value:'Southwest',label:'Southwest',desc:'Santa Ponsa, Portals, Camp de Mar'},
      {value:'Palma',label:'Palma and around',desc:'City, Son Vida, airport side'},
      {value:'North',label:'North and east',desc:'Alcúdia, Pollença, Artà, Cala Millor'},
      {value:'South',label:'South',desc:'Llucmajor, Son Antem, near airport'},
      {value:'flexible',label:'Flexible',desc:'Happy to travel for the right course'},
    ]
  },
  {
    id:'budget', title:'How do you think about green fees?',
    sub:'Fees shown later are seasonal indications, confirmed at booking.', cols:false,
    skipIf:(a) => Array.isArray(a.style) ? a.style.includes('luxury') : a.style === 'luxury',
    autoValue:'premium',
    options:[
      {value:'value',label:'Best value',desc:'Good golf at sensible money'},
      {value:'mid',label:'Mid-range',desc:'Happy to pay for quality'},
      {value:'premium',label:'Premium',desc:'The best courses, whatever the fee'},
    ]
  },
  {
    id:'difficulty', title:'How tough do you want the courses?',
    sub:'', cols:false,
    skipIf:(a) => a.ability === 'beginner',
    autoValue:'forgiving',
    options:[
      {value:'forgiving',label:'Forgiving',desc:'Wide fairways, keep the ball in play'},
      {value:'balanced',label:'Balanced',desc:'A fair test without punishment'},
      {value:'challenging',label:'Challenging',desc:'Bring it on'},
    ]
  },
  {
    id:'walking', title:'Walk or ride?',
    sub:'Some Mallorca courses are seriously hilly. Andratx is buggy-only territory.', cols:false,
    options:[
      {value:'walk',label:'I like to walk',desc:'Prefer walkable courses'},
      {value:'buggy',label:'Buggy please',desc:'Happy riding, hills welcome'},
      {value:'either',label:'No preference',desc:'Whatever suits the course'},
    ]
  },
  {
    id:'extras', title:'Anything else Andy should arrange?',
    sub:'Choose any that apply. This shapes the trip plan, not the course match.', cols:true, multi:true,
    options:[
      {value:'coaching',label:'Coaching with Andy',desc:'Lessons or a Play With A Pro round'},
      {value:'dining',label:'Restaurants',desc:'Where to eat near your courses'},
      {value:'hotel',label:'Hotel',desc:'Stay matched to your courses'},
      {value:'transport',label:'Transport',desc:'Transfers and logistics'},
      {value:'nongolf',label:'Non-golf days',desc:'Beaches, towns, Tramuntana'},
    ]
  },
]

export function optionLabels(question, value) {
  if (!question || value == null) return []
  const values = Array.isArray(value) ? value : [value]
  return values
    .map(v => question.options.find(option => option.value === v)?.label || String(v))
    .filter(Boolean)
}

export function selectorAnswerSummary(answers) {
  return QUESTIONS
    .map(question => {
      const labels = optionLabels(question, answers[question.id])
      if (!labels.length) return null
      return `${question.title} ${labels.join(', ')}`
    })
    .filter(Boolean)
    .join(' | ')
}

export function selectorShortlistSummary(courses) {
  return courses
    .map((course, index) => `${index + 1}. ${course.displayName || course.name} - ${course.areaLabel} - ${course.greenFee}`)
    .join(' | ')
}

export function selectorShortlistNames(courses) {
  return courses.map(course => course.displayName || course.name).join(', ')
}

/* =====================================================================
   SCORING ENGINE
===================================================================== */
export function scoreCourse(c, answers) {
  let s = 0
  if (c.tags.ability.includes(answers.ability)) s += 30; else s -= 25
  if (answers.ability === 'beginner' && c.diff10 >= 8) s -= 100
  const styles = Array.isArray(answers.style) ? answers.style : (answers.style ? [answers.style] : [])
  const styleMatches = styles.filter(st => c.tags.style.includes(st)).length
  s += styleMatches > 0 ? Math.min(22, 14 + styleMatches * 8) : 0
  const zone = a => (a === 'North' || a === 'East') ? 'NE' : a
  if (answers.area === 'flexible') s += 8
  else if (zone(c.area) === zone(answers.area)) s += 20
  else if (answers.area === 'South' && c.area === 'Palma') s += 8
  else if (answers.area === 'Palma' && c.area === 'South') s += 8
  else s -= 12
  if (c.tags.budget.includes(answers.budget)) s += 16
  else if (answers.budget === 'premium') s += 4
  else s -= 10
  const wantDiff = {forgiving:5, balanced:6.5, challenging:8.5}[answers.difficulty] || 6.5
  s += Math.max(0, 12 - Math.abs(c.diff10 - wantDiff) * 3)
  if (answers.walking === 'walk') s += (c.walkability - 3) * 5
  if (answers.walking === 'buggy' && c.walkability <= 2) s += 3
  if (c.tags.group.includes(answers.group)) s += 6
  if (answers.group === 'corporate' && c.prestige >= 4) s += 8
  return s
}

export const DIFF_LABEL = d => d >= 9 ? `Hard · ${d}/10` : d >= 7 ? `Testing · ${d}/10` : d >= 5 ? `Fair · ${d}/10` : `Gentle · ${d}/10`

export function personalMatchLine(c, rank, answers, t) {
  const ml = t.matchLines
  const reasons = []
  if (c.tags.ability.includes(answers.ability)) {
    const p = ml.ability[answers.ability]
    if (p) reasons.push(p)
  }
  if (c.tags.style.includes(answers.style)) {
    const p = ml.style[answers.style]
    if (p) reasons.push(p)
  }
  if (answers.area !== 'flexible' && c.area === answers.area) reasons.push(ml.location)
  if (c.tags.budget.includes(answers.budget)) {
    const p = ml.budget[answers.budget]
    if (p) reasons.push(p)
  }
  const prefix = ml.prefix[rank] || 'Recommended'
  if (!reasons.length) return `${prefix}: ${ml.fallback}`
  return `${prefix}: ${reasons.join(', ')}.`
}

export function getCourseFactsLine(course) {
  const facts = []
  if (Number.isFinite(course.coursePar)) facts.push(`Par ${course.coursePar}`)
  if (Number.isFinite(course.holeCount)) facts.push(`${course.holeCount} holes`)
  if (course.accessRequirement) facts.push(course.accessRequirement)
  if (course.accessType) facts.push(course.accessType)
  return facts.join(' · ')
}

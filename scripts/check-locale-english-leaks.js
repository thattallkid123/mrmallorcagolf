const { getHomeContent } = require('../src/lib/homepage-content.js')
const { getGolfCoursesContent } = require('../src/lib/golf-courses-content.js')
const { GOLF_COURSE_UI_TRANSLATIONS } = require('../src/lib/golf-courses-translations.js')

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

const PATTERNS = [
  'Proof of work',
  'PGA Advanced Professional · Mallorca',
  'Expert Pick',
  'Best in Spain 2025',
  'Difficulty',
  'Public access',
  'From €95',
  'Par 72 · Est. 1964',
  'Seve won here in 1990',
  'Southwest',
  'All Courses',
  'Get in touch',
  'courses covered',
  'Green fees updated',
  'Shouye',
  'Mallorca Gaoerfu Qiu Chang',
  'Mallorca qiuchang',
]

function flatten(value, path = 'root', acc = []) {
  if (typeof value === 'string') {
    acc.push({ path, value })
    return acc
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => flatten(item, `${path}[${index}]`, acc))
    return acc
  }

  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => flatten(item, `${path}.${key}`, acc))
  }

  return acc
}

let failures = 0

for (const locale of LOCALES) {
  const targets = {
    home: getHomeContent(locale),
    golfHero: getGolfCoursesContent(locale).hero,
    golfRegions: getGolfCoursesContent(locale).regionHeaders,
    golfUi: GOLF_COURSE_UI_TRANSLATIONS[locale],
  }

  for (const [scope, target] of Object.entries(targets)) {
    for (const entry of flatten(target, scope)) {
      for (const pattern of PATTERNS) {
        if (entry.value.includes(pattern)) {
          failures += 1
          console.log(`${locale}: ${entry.path} -> contains "${pattern}"`)
        }
      }
    }
  }
}

if (failures > 0) {
  console.error(`Found ${failures} possible English leaks.`)
  process.exit(1)
}

console.log('No tracked English leaks found in resolved locale content.')

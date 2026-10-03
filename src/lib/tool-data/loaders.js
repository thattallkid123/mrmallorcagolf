// Loads one language's tool-data overlay on the server, so only that language is
// bundled with the page. Paths are literal on purpose: the bundler can only split
// what it can see. English has no overlay (the English master is the data).

const COURSE_SELECTOR = {
  de: () => import('./course-selector.de'),
  es: () => import('./course-selector.es'),
  fr: () => import('./course-selector.fr'),
  nl: () => import('./course-selector.nl'),
  sv: () => import('./course-selector.sv'),
}

export async function loadCourseSelectorData(lang) {
  const load = COURSE_SELECTOR[lang]
  return load ? (await load()).default : null
}

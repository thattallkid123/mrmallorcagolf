// Applies a language overlay from src/lib/tool-data/green-fees.<lang>.js onto the
// English course rows in GreenFeesClient.jsx. Only the editorial verdict and the
// two short fee words are English data; every other label is already translated.

export function localizeGreenFeesCourse(course, data) {
  const verdict = data?.verdicts?.[course.name]
  if (!verdict) return course
  const L = data.labels
  const words = { Hotel: L.hotel, 'Incl.': L.incl }
  return {
    ...course,
    verdict,
    peakText: words[course.peakText] || course.peakText,
    lowText: words[course.lowText] || course.lowText,
  }
}

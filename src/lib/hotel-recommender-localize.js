// Applies a language overlay from src/lib/tool-data/hotel-recommender.<lang>.js
// onto the English master in hotel-recommender-logic.js. Matching and scoring
// always run on the English data; only what the visitor reads is swapped.

export function localizeHotel(hotel, data) {
  const copy = data?.hotels?.[hotel.id]
  if (!copy) return hotel
  // pillKeys keeps the English pill text: pillClass() colours pills by those words.
  return { ...hotel, ...copy, pillKeys: hotel.pills }
}

export function localizeQuestions(questions, data) {
  const copy = data?.questions
  if (!copy) return questions
  return questions.map((q) => {
    const c = copy[q.key]
    if (!c) return q
    return {
      ...q,
      title: c.title,
      sub: c.sub,
      opts: q.opts.map((o) => ({ ...o, ...(c.opts[o.val] || {}) })),
    }
  })
}

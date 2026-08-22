// Assembles per-guide localized copy overlays. English guide content files own block type, order, and layout structure.
// Each guide's translations live in guide-post-content-localized/<slug>.js — edit there, not here.
import sonGualReview from './guide-post-content-localized/son-gual-review.js'
import alcanadaReview from './guide-post-content-localized/alcanada-review.js'
import santaPonsa1Review from './guide-post-content-localized/santa-ponsa-1-review.js'
import sonTermesReview from './guide-post-content-localized/son-termes-review.js'
import sonMuntanerReview from './guide-post-content-localized/son-muntaner-review.js'
import tGolfCalviaReview from './guide-post-content-localized/t-golf-calvia-review.js'
import golfAndratxReview from './guide-post-content-localized/golf-andratx-review.js'
import sonAntemWestReview from './guide-post-content-localized/son-antem-west-review.js'
import onCourseCoachingMallorca from './guide-post-content-localized/on-course-coaching-mallorca.js'

export const LOCALIZED_GUIDE_POST_CONTENT = {
  'son-gual-review': sonGualReview,
  'alcanada-review': alcanadaReview,
  'santa-ponsa-1-review': santaPonsa1Review,
  'son-termes-review': sonTermesReview,
  'son-muntaner-review': sonMuntanerReview,
  't-golf-calvia-review': tGolfCalviaReview,
  'golf-andratx-review': golfAndratxReview,
  'son-antem-west-review': sonAntemWestReview,
  'on-course-coaching-mallorca': onCourseCoachingMallorca,
}

export function getLocalizedGuidePostContent(slug, locale) {
  return LOCALIZED_GUIDE_POST_CONTENT[slug]?.[locale] || null
}

// Source chain:
// - Par/SI: Google Drive Reference/SCORECARD_MASTER.md, updated 2026-05-20.
// - Tee totals/rating/slope: imported from mmg-tools/scoring-companion/scorecards.json.
//
// `teeVerification` is intentionally explicit so we know which tee data has been
// checked against a machine-readable PDF and which rows still need PDF/OCR review.

const VERIFIED_PDF_TEXT = 'verified_pdf_text'
const IMPORTED_FROM_SCORING_COMPANION = 'imported_from_scoring_companion'

function tee(name, label, totalLengthMeters, courseRating, slope) {
  return { name, label, totalLengthMeters, courseRating, slope }
}

// Each hole tuple is [par, strokeIndex].
export const SCORECARD_DATA = {
  'Golf Son Gual': {
    par: 72,
    holes: [[4, 7], [4, 15], [4, 13], [5, 11], [3, 5], [5, 9], [4, 1], [4, 17], [3, 3], [4, 10], [4, 4], [5, 14], [4, 12], [4, 16], [3, 18], [4, 6], [3, 8], [5, 2]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('black', 'Black', 6621, 75.7, 138),
      tee('white', 'White', 6257, 73.5, 133),
      tee('yellow', 'Yellow', 5983, 72.2, 130),
      tee('blue', 'Blue', 5475, 75.6, 134),
      tee('red', 'Red', 4961, 72, 127),
    ],
  },
  'Golf Son Vida': {
    par: 70,
    holes: [[4, 13], [3, 3], [4, 1], [3, 15], [4, 5], [5, 7], [4, 9], [3, 17], [4, 11], [3, 14], [5, 2], [3, 16], [5, 12], [4, 10], [4, 6], [3, 18], [4, 4], [5, 8]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('yellow', 'Yellow', 5601, 70.6, 132),
      tee('red', 'Red', 4738, 71.6, 132),
    ],
  },
  'Son Muntaner': {
    par: 72,
    holes: [[4, 13], [5, 3], [4, 15], [4, 7], [3, 11], [4, 5], [3, 17], [5, 1], [4, 9], [4, 4], [3, 12], [4, 8], [3, 18], [4, 14], [5, 2], [5, 16], [4, 10], [4, 6]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6305, 74.1, 133),
      tee('yellow', 'Yellow', 5985, 72.4, 133),
      tee('blue', 'Blue', 5430, 75.6, 131),
      tee('red', 'Red', 5098, 73.2, 130),
    ],
  },
  'Golf Son Quint': {
    par: 71,
    holes: [[4, 9], [4, 4], [3, 17], [4, 8], [4, 11], [4, 3], [5, 12], [4, 13], [3, 14], [4, 16], [4, 6], [3, 5], [5, 1], [3, 18], [4, 15], [4, 2], [5, 10], [4, 7]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6199, 72.9, 136),
      tee('yellow', 'Yellow', 5929, 71.4, 134),
      tee('blue', 'Blue', 5498, 75.4, 137),
      tee('red', 'Red', 5130, 73, 129),
    ],
  },
  'T Golf Palma (Puntiró)': {
    par: 71,
    holes: [[4, 7], [3, 12], [4, 3], [5, 9], [4, 1], [3, 17], [4, 13], [4, 6], [4, 14], [4, 10], [5, 11], [4, 5], [3, 18], [5, 16], [4, 2], [3, 8], [4, 15], [4, 4]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6027, 71.7, 128),
      tee('yellow', 'Yellow', 5546, 69.1, 127),
      tee('blue', 'Blue', 5065, 72.2, 131),
      tee('red', 'Red', 4530, 68.7, 126),
    ],
  },
  'Palma Pitch & Putt': {
    par: 54,
    holes: [[3, 17], [3, 13], [3, 11], [3, 5], [3, 9], [3, 15], [3, 1], [3, 7], [3, 3], [3, 18], [3, 14], [3, 12], [3, 6], [3, 10], [3, 16], [3, 2], [3, 8], [3, 4]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('standard', 'Standard', 638, 24.4, 55),
    ],
  },
  'Golf Son Termes': {
    par: 70,
    holes: [[4, 17], [4, 9], [4, 13], [4, 1], [5, 3], [5, 7], [3, 15], [4, 5], [3, 11], [4, 2], [4, 12], [3, 18], [4, 4], [4, 10], [3, 14], [4, 8], [4, 6], [4, 16]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 5582, 70.7, 137),
      tee('yellow', 'Yellow', 5282, 68.9, 135),
      tee('blue', 'Blue', 4912, 73.8, 134),
      tee('red', 'Red', 4510, 72, 131),
    ],
  },
  'Golf Santa Ponsa 1': {
    par: 72,
    holes: [[4, 4], [5, 2], [3, 18], [4, 6], [4, 14], [5, 12], [3, 16], [4, 10], [4, 8], [5, 1], [4, 15], [3, 7], [5, 11], [4, 9], [3, 17], [4, 3], [4, 13], [4, 5]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6543, 75.1, 133),
      tee('yellow', 'Yellow', 6219, 73.3, 131),
      tee('blue', 'Blue', 5617, 76.3, 138),
      tee('red', 'Red', 5250, 74.4, 132),
    ],
  },
  'Golf Santa Ponsa 2': {
    par: 72,
    holes: [[4, 2], [3, 16], [5, 8], [4, 18], [4, 4], [4, 6], [3, 12], [5, 10], [4, 14], [4, 9], [4, 1], [3, 17], [4, 15], [4, 5], [5, 11], [4, 13], [5, 3], [3, 7]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6053, 72.8, 134),
      tee('yellow', 'Yellow', 5706, 71.1, 131),
      tee('blue', 'Blue', 5128, 73.2, 134),
      tee('red', 'Red', 4872, 71.6, 131),
    ],
  },
  'Golf Santa Ponsa 3': {
    par: 30,
    holes: [[4, 1], [4, 5], [3, 9], [3, 8], [3, 7], [4, 2], [3, 4], [3, 6], [3, 3]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('yellow', 'Yellow', 1599, 30, 29),
      tee('red', 'Red', 1332, 30, 72),
    ],
  },
  'Real Golf de Bendinat': {
    par: 69,
    holes: [[4, 15], [3, 11], [4, 9], [3, 7], [4, 1], [4, 3], [3, 5], [4, 17], [4, 13], [4, 2], [4, 14], [3, 18], [4, 10], [5, 12], [4, 8], [4, 16], [3, 6], [5, 4]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('yellow', 'Yellow', 5657, 68.9, 128),
      tee('red', 'Red', 4990, 69.5, 125),
    ],
  },
  'T Golf Calvià (Poniente)': {
    par: 72,
    holes: [[4, 4], [5, 6], [4, 2], [4, 16], [5, 18], [3, 12], [4, 10], [4, 14], [3, 8], [4, 3], [5, 1], [3, 17], [4, 15], [4, 9], [3, 11], [4, 7], [4, 13], [5, 5]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6430, 74.4, 135),
      tee('yellow', 'Yellow', 5992, 72.1, 132),
      tee('blue', 'Blue', 5533, 75.5, 131),
      tee('red', 'Red', 5130, 73, 125),
    ],
  },
  'Golf de Andratx': {
    par: 72,
    holes: [[4, 11], [3, 7], [4, 17], [3, 9], [5, 5], [5, 1], [4, 15], [4, 3], [3, 13], [5, 8], [4, 2], [4, 6], [4, 10], [4, 18], [3, 16], [4, 14], [4, 12], [5, 4]],
    teeVerification: VERIFIED_PDF_TEXT,
    tees: [
      tee('white', 'White', 6089, 73.7, 144),
      tee('yellow', 'Yellow', 5683, 71.6, 138),
      tee('blue', 'Blue', 5268, 75.4, 144),
      tee('red', 'Red', 4913, 73.4, 139),
    ],
  },
  'Golf Maioris': {
    par: 72,
    holes: [[4, 12], [4, 8], [3, 18], [5, 2], [5, 14], [4, 6], [4, 4], [3, 16], [4, 10], [5, 1], [3, 17], [4, 9], [3, 15], [5, 13], [4, 7], [4, 11], [4, 5], [4, 3]],
    teeVerification: VERIFIED_PDF_TEXT,
    tees: [
      tee('white', 'White', 6347, 74.8, 142),
      tee('yellow', 'Yellow', 6024, 72.4, 137),
      tee('blue', 'Blue', 5738, 77.6, 143),
      tee('red', 'Red', 5254, 74.7, 139),
    ],
  },
  'Golf Son Antem East': {
    par: 72,
    holes: [[5, 9], [3, 17], [4, 7], [4, 5], [3, 15], [4, 13], [5, 1], [4, 3], [4, 11], [5, 14], [4, 6], [4, 12], [3, 16], [4, 10], [4, 8], [3, 18], [4, 4], [5, 2]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6274, 73.2, 137),
      tee('yellow', 'Yellow', 5935, 71.5, 135),
      tee('blue', 'Blue', 5447, 75.8, 135),
      tee('red', 'Red', 5084, 74.1, 132),
    ],
  },
  'Golf Son Antem West': {
    par: 72,
    holes: [[4, 12], [3, 16], [5, 10], [4, 4], [4, 8], [4, 14], [5, 6], [3, 18], [4, 2], [4, 7], [3, 17], [4, 9], [5, 13], [4, 5], [4, 11], [5, 3], [3, 15], [4, 1]],
    teeVerification: VERIFIED_PDF_TEXT,
    tees: [
      tee('white', 'White', 6488, 73.4, 139),
      tee('yellow', 'Yellow', 6113, 71.4, 136),
      tee('blue', 'Blue', 5616, 75.7, 138),
      tee('red', 'Red', 5263, 73.7, 134),
    ],
  },
  'Capdepera Golf': {
    par: 72,
    holes: [[5, 8], [3, 14], [5, 2], [3, 18], [4, 12], [4, 10], [3, 4], [5, 16], [4, 6], [4, 17], [3, 5], [5, 1], [4, 13], [4, 3], [3, 11], [4, 15], [4, 9], [5, 7]],
    teeVerification: VERIFIED_PDF_TEXT,
    tees: [
      tee('white', 'White', 5890, 71.2, 129),
      tee('yellow', 'Yellow', 5589, 69.7, 127),
      tee('blue', 'Blue', 5066, 72, 126),
      tee('red', 'Red', 4726, 69.9, 120),
    ],
  },
  'Canyamel Golf': {
    par: 73,
    holes: [[4, 16], [4, 2], [4, 11], [5, 5], [3, 18], [4, 13], [5, 9], [3, 7], [4, 1], [4, 12], [4, 17], [4, 6], [5, 4], [3, 14], [5, 3], [4, 10], [5, 15], [3, 8]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6204, 73.3, 143),
      tee('yellow', 'Yellow', 5953, 72.1, 142),
      tee('red', 'Red', 5303, 74.9, 138),
    ],
  },
  'Pula Golf': {
    par: 72,
    holes: [[4, 6], [3, 16], [4, 4], [4, 18], [4, 14], [5, 12], [4, 10], [3, 8], [5, 2], [5, 13], [4, 9], [5, 17], [3, 7], [4, 11], [4, 3], [4, 5], [4, 1], [3, 15]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6297, 74.4, 139),
      tee('yellow', 'Yellow', 5869, 72, 135),
      tee('blue', 'Blue', 5452, 75.3, 139),
      tee('red', 'Red', 5107, 73.3, 134),
    ],
  },
  'Golf Club Son Servera': {
    par: 72,
    holes: [[4, 11], [4, 6], [3, 12], [4, 7], [5, 1], [4, 5], [4, 3], [3, 15], [5, 13], [4, 10], [4, 17], [4, 4], [3, 18], [4, 8], [5, 9], [5, 14], [4, 2], [3, 16]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6450, null, null),
      tee('yellow', 'Yellow', 6109, 70, 129),
      tee('blue', 'Blue', 5762, null, null),
      tee('red', 'Red', 5543, 73.1, 129),
    ],
  },
  'Reserva Rotana': {
    par: 36,
    holes: [[4, 5], [3, 7], [5, 2], [4, 6], [4, 8], [4, 4], [4, 1], [5, 3], [3, 9]],
    teeVerification: VERIFIED_PDF_TEXT,
    tees: [
      tee('yellow', 'Yellow', 3114, 36.5, 125),
      tee('red', 'Red', 2594, 34.9, 120),
    ],
  },
  "Vall d'Or Golf": {
    par: 71,
    holes: [[3, 7], [4, 1], [5, 13], [3, 15], [4, 9], [4, 3], [4, 5], [4, 17], [5, 11], [4, 4], [5, 12], [3, 14], [5, 10], [4, 18], [3, 16], [4, 2], [4, 8], [3, 6]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 5538, 70, 131),
      tee('yellow', 'Yellow', 5335, 69.1, 129),
      tee('blue', 'Blue', 5024, 72.5, 127),
      tee('red', 'Red', 4742, 71.2, 126),
    ],
  },
  'Club de Golf Alcanada': {
    par: 72,
    holes: [[5, 11], [4, 4], [4, 12], [3, 16], [4, 7], [3, 17], [5, 3], [4, 1], [4, 5], [4, 10], [5, 6], [4, 8], [5, 18], [3, 14], [4, 13], [4, 2], [3, 9], [4, 15]],
    teeVerification: IMPORTED_FROM_SCORING_COMPANION,
    tees: [
      tee('white', 'White', 6499, 73.8, 129),
      tee('yellow', 'Yellow', 6152, 72.4, 135),
      tee('green', 'Green', 5844, 71.7, 127),
      tee('blue', 'Blue', 5645, 75.5, 128),
      tee('red', 'Red', 5241, 72.7, 123),
    ],
  },
  'Golf Pollença': {
    par: 35,
    holes: [[3, 5], [5, 3], [4, 2], [3, 6], [4, 8], [4, 9], [4, 1], [3, 7], [5, 4]],
    teeVerification: VERIFIED_PDF_TEXT,
    tees: [
      tee('yellow', 'Yellow', 2608, 33.6, 113),
      tee('red', 'Red', 2342, 33.6, 113),
    ],
  },
}

export const SCORECARD_TEE_VERIFICATION = {
  VERIFIED_PDF_TEXT,
  IMPORTED_FROM_SCORING_COMPANION,
}

export function getScorecardByCourseName(name) {
  return SCORECARD_DATA[name] || null
}

export function getScorecardHoles(name) {
  return getScorecardByCourseName(name)?.holes || []
}

export function getScorecardTees(name) {
  return getScorecardByCourseName(name)?.tees || []
}

export function getScorecardTeeVerification(name) {
  return getScorecardByCourseName(name)?.teeVerification || null
}

// Mallorca golf course coordinates [latitude, longitude] for the map view.
// Keys MUST match the `name` field in golf-courses-data.js exactly (full names).
//
// Sources: OpenStreetMap (Nominatim + Photon geocoders), cross-checked against
// each course's own listing. 22 of 24 are confirmed against the OSM
// `golf_course` tag. The two marked APPROX below could not be resolved cleanly
// by the geocoders — verify these against the course's Google listing.
export const COURSE_COORDINATES = {
  // Palma
  'Golf Son Gual': [39.5662, 2.8003],
  'Golf Son Vida': [39.5908, 2.5939],
  'Son Muntaner': [39.5828, 2.6074],
  'Golf Son Quint': [39.5913, 2.6044],
  'T Golf Palma (Puntiró)': [39.5863, 2.7862],
  'Palma Pitch & Putt': [39.5470, 2.6790], // APPROX — verify
  'Golf Son Termes': [39.6728, 2.6583],

  // Southwest
  'Golf Santa Ponsa 1': [39.5119, 2.4993],
  'Golf Santa Ponsa 2': [39.5133, 2.5012],
  'Golf Santa Ponsa 3': [39.5106, 2.5031],
  'Real Golf de Bendinat': [39.5455, 2.5834],
  'T Golf Calvià (Poniente)': [39.4921, 2.5148],
  'Golf de Andratx': [39.5414, 2.4202],

  // South
  'Golf Maioris': [39.4555, 2.7480], // APPROX — verify
  'Golf Son Antem East': [39.4755, 2.8300],
  'Golf Son Antem West': [39.4780, 2.8255],

  // East
  'Capdepera Golf': [39.6993, 3.3978],
  'Canyamel Golf': [39.6741, 3.4317],
  'Pula Golf': [39.6475, 3.3840],
  'Golf Club Son Servera': [39.6406, 3.4120],
  "Vall d'Or Golf": [39.4327, 3.2188],
  'Reserva Rotana': [39.6061, 3.1839],

  // North
  'Club de Golf Alcanada': [39.8383, 3.1592],
  'Golf Pollença': [39.8592, 3.0358],
}

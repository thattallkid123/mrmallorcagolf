import images from '../data/hotel-image-sources.json'

const AREAS = {
  palma: { image: '/trip-preferences-assets/card-area-palma.webp', name: 'Palma', kind: 'area' },
  southwest: { image: '/trip-preferences-assets/card-area-southwest.webp', name: 'Port Adriano', kind: 'area' },
  north: { image: '/images/courses/alcanada.webp', name: 'Alcanada', kind: 'area' },
  east: { image: '/images/areas/canyamel-beach.webp', name: 'Canyamel', kind: 'area' },
  northwest: { image: '/images/blog-trip-planning/Soller.webp', name: 'Sóller', kind: 'area' },
}
const VILLA = { image: '/trip-preferences-assets/card-stay-villa.webp', kind: 'villa' }
const STYLES = {
  boutique: { image: '/images/hotels/born-hotel.webp', name: 'Hotel Born', kind: 'property' },
  resort: { image: '/images/trip-ideas/stay-golf.webp', name: 'Cap Vermell Grand Hotel', kind: 'property' },
  classic: { image: '/images/trip-ideas/stay-city.webp', name: 'Hotel Saratoga', kind: 'property' },
  villa: VILLA,
  countryside: { image: '/trip-preferences-assets/card-stay-finca.webp', name: 'Son Gener', kind: 'property' },
}

export function getHotelPhoto(hotel) {
  if (hotel.type === 'villa') return VILLA
  return images[hotel.id] || AREAS[hotel.area] || AREAS.palma
}

export function getHotelChoicePhoto(question, value) {
  return (question === 'area' ? AREAS : question === 'style' ? STYLES : {})[value] || null
}

export function toolDirectoryPhoto(href) {
  if (href.endsWith('/hotel-recommender')) return STYLES.resort.image
  if (href.endsWith('/golf-day-builder')) return '/images/courses/son-gual.webp'
  if (href.endsWith('/green-fees') || href.endsWith('/course-comparison')) return '/images/courses/alcanada.webp'
  if (href.endsWith('/handicap-checker')) return '/images/courses/son-quint.webp'
  if (href.endsWith('/golf-cost-calculator')) return '/images/blog-trip-planning/Old Town Palma.webp'
  return '/images/courses/t-golf-calvia.webp'
}

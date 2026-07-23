'use client'

import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { GOLF_COURSE_DATA } from '../lib/golf-courses-data'
import { COURSE_COORDINATES } from '../lib/golf-courses-coordinates'
import { getCourseShortName } from '../lib/golf-courses-helpers'

const REGION_IDS = ['all', 'palma', 'southwest', 'south', 'east', 'north']

const LABELS = {
  en: { title: 'Where the courses are', hint: 'Hover a pin or tap a course below to locate it.', regions: ['All courses', 'Palma', 'Southwest', 'South', 'East', 'North'] },
  de: { title: 'Wo die Plätze liegen', hint: 'Fahren Sie über eine Markierung oder tippen Sie unten auf einen Platz.', regions: ['Alle Plätze', 'Palma', 'Südwesten', 'Süden', 'Osten', 'Norden'] },
  es: { title: 'Dónde están los campos', hint: 'Pase el cursor por un pin o toque un campo abajo para localizarlo.', regions: ['Todos los campos', 'Palma', 'Suroeste', 'Sur', 'Este', 'Norte'] },
  fr: { title: 'Où sont les parcours', hint: 'Survolez un repère ou touchez un parcours ci-dessous pour le localiser.', regions: ['Tous les parcours', 'Palma', 'Sud-ouest', 'Sud', 'Est', 'Nord'] },
  nl: { title: 'Waar de banen liggen', hint: 'Beweeg over een pin of tik hieronder op een baan om die te vinden.', regions: ['Alle banen', 'Palma', 'Zuidwesten', 'Zuiden', 'Oosten', 'Noorden'] },
  sv: { title: 'Var banorna ligger', hint: 'Håll muspekaren över en nål eller tryck på en bana nedan.', regions: ['Alla banor', 'Palma', 'Sydväst', 'Söder', 'Öster', 'Norr'] },
  zh: { title: '球场分布图', hint: '将鼠标悬停在标记上，或点击下方球场进行定位。', regions: ['所有球场', '帕尔马', '西南', '南部', '东部', '北部'] },
}

// Flatten once, attaching the parent region to each course.
const ALL_COURSES = GOLF_COURSE_DATA.flatMap(region =>
  region.courses.map(course => ({ ...course, region: region.region }))
)

// Join grouped course short names, collapsing a shared leading word-prefix so
// "Santa Ponsa 2" + "Santa Ponsa 3" reads "Santa Ponsa 2 & 3", and
// "Son Antem East" + "Son Antem West" reads "Son Antem East & West".
function collapseSharedPrefix(shortNames) {
  if (shortNames.length < 2) return shortNames.join(' & ')
  const wordLists = shortNames.map((s) => s.split(' '))
  const minLen = Math.min(...wordLists.map((w) => w.length))
  const common = []
  for (let i = 0; i < minLen - 1; i += 1) {
    const word = wordLists[0][i]
    if (wordLists.every((w) => w[i] === word)) common.push(word)
    else break
  }
  if (common.length === 0) return shortNames.join(' & ')
  const suffixes = wordLists.map((w) => w.slice(common.length).join(' '))
  return `${common.join(' ')} ${suffixes.join(' & ')}`
}

export default function CourseMapView({ lang = 'en' }) {
  const labels = LABELS[lang] || LABELS.en
  const regions = REGION_IDS.map((id, i) => ({ id, label: labels.regions[i] }))
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerLayerRef = useRef(null)
  const markersRef = useRef({})
  const pointsRef = useRef([])
  const didFitRef = useRef(false)
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [legend, setLegend] = useState([])

  const filteredCourses = selectedRegion === 'all'
    ? ALL_COURSES
    : ALL_COURSES.filter(c => c.region === selectedRegion)

  // Initialise the map once.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    let cancelled = false
    let observer = null
    import('leaflet').then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return

      // zoomAnimation is disabled: the site's global CSS transitions interfere
      // with Leaflet's zoom animation, which then reverts every zoom change
      // (including fitBounds and the +/- buttons) back to the start. Instant
      // zoom avoids that and keeps every zoom control working.
      const map = L.map(containerRef.current, { scrollWheelZoom: false, zoomAnimation: false }).setView([39.62, 2.95], 9)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map)

      markerLayerRef.current = L.layerGroup().addTo(map)
      mapRef.current = { L, map }
      drawMarkers()

      // The map is lazy-loaded below the fold, so its container often has no
      // settled size when L.map() runs — Leaflet then caches a zero size, never
      // requests tiles, and fitBounds zooms wrong. Recompute size and refit
      // once the container reports a real width.
      map.invalidateSize()
      fitToMarkers()
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(() => {
          map.invalidateSize()
          if (!didFitRef.current && containerRef.current && containerRef.current.offsetWidth > 0) {
            fitToMarkers()
            didFitRef.current = true
          }
        })
        observer.observe(containerRef.current)
      }
    })

    return () => {
      cancelled = true
      if (observer) observer.disconnect()
      if (mapRef.current) {
        mapRef.current.map.remove()
        mapRef.current = null
        markerLayerRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Redraw markers and refit whenever the region filter changes.
  useEffect(() => {
    drawMarkers()
    fitToMarkers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion])

  function fitToMarkers() {
    if (!mapRef.current || !containerRef.current || containerRef.current.offsetWidth === 0) return
    const { map } = mapRef.current
    const pts = pointsRef.current
    if (pts.length > 1) map.fitBounds(pts, { padding: [25, 25], maxZoom: 12 })
    else if (pts.length === 1) map.setView(pts[0], 12)
  }

  function drawMarkers() {
    if (!mapRef.current || !markerLayerRef.current) return
    const { L } = mapRef.current
    markerLayerRef.current.clearLayers()
    markersRef.current = {}

    // Group courses that share the same coordinate (e.g. Santa Ponsa 2 & 3,
    // Son Antem East & West) so they render as one numbered pin.
    const groups = new Map()
    filteredCourses.forEach((course) => {
      const coords = COURSE_COORDINATES[course.name]
      if (!coords) return
      const key = `${coords[0]},${coords[1]}`
      if (!groups.has(key)) groups.set(key, { coords, courses: [] })
      groups.get(key).courses.push(course)
    })

    const points = []
    const legendItems = []
    let n = 0
    groups.forEach(({ coords, courses }) => {
      n += 1
      points.push(coords)
      const fullNames = courses.map((c) => c.name).join(' & ')
      const shortNames = collapseSharedPrefix(courses.map((c) => getCourseShortName(c.name)))
      const location = courses[0].location || ''
      const isGrouped = courses.length > 1
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:26px;height:26px;border-radius:50%;background:#CBA968;border:2px solid #2D4A3E;display:flex;align-items:center;justify-content:center;color:#20362C;font-family:'Jost',sans-serif;font-weight:600;font-size:12px;box-shadow:0 1px 4px rgba(0,0,0,0.35);position:relative">${n}${isGrouped ? '<span style="position:absolute;bottom:-2px;right:-2px;width:14px;height:14px;background:#E8B854;border:1px solid #2D4A3E;border-radius:50%;font-size:9px;display:flex;align-items:center;justify-content:center">+</span>' : ''}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -14],
      })
      const popupContent = courses.length > 1
        ? `<strong>${courses.map(c => getCourseShortName(c.name)).join('</strong><br/><strong>')}</strong><br/><span style="font-size:0.85em;color:#6B6862">${location}</span>`
        : `<strong>${fullNames}</strong><br/><span style="font-size:0.85em;color:#6B6862">${location}</span>`
      const marker = L.marker(coords, { icon })
        .bindPopup(popupContent)
        .bindTooltip(shortNames, { direction: 'top', offset: [0, -12] })
        .addTo(markerLayerRef.current)
        .on('popupopen', () => marker.closeTooltip())
      markersRef.current[n] = marker
      legendItems.push({ n, label: shortNames, coords })
    })

    pointsRef.current = points
    setLegend(legendItems)
  }

  function focusPin(item) {
    if (!mapRef.current) return
    const { map } = mapRef.current
    map.flyTo(item.coords, 13, { duration: 1.5 })
    markersRef.current[item.n]?.openPopup()
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', color: '#1A1916', marginBottom: 8 }}>
        {labels.title}
      </h2>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', color: '#6B6862', margin: '0 0 16px' }}>{labels.hint}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {regions.map(region => {
          const active = selectedRegion === region.id
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedRegion(region.id)}
              style={{
                padding: '8px 16px',
                fontSize: '0.78rem',
                fontFamily: "'Jost', sans-serif",
                letterSpacing: '0.04em',
                border: active ? '1px solid #2D4A3E' : '1px solid rgba(26,25,22,0.14)',
                background: active ? '#2D4A3E' : '#fff',
                color: active ? '#F7F4EF' : '#5A5248',
                borderRadius: 99,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {region.label}
            </button>
          )
        })}
      </div>

      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: 480,
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid rgba(26,25,22,0.1)',
          background: '#e8ece6',
          // Own stacking context so Leaflet's internal panes (z-index up to
          // 1000) stay below the fixed nav (z-index 100) when scrolled.
          position: 'relative',
          zIndex: 0,
        }}
      />

      {legend.length > 0 && (
        <ol style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '4px 18px' }}>
          {legend.map(item => (
            <li key={item.n}>
              <button
                type="button"
                onClick={() => focusPin(item)}
                style={{ display: 'flex', alignItems: 'center', gap: 9, width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '5px 0', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '0.83rem', color: '#3A342C', lineHeight: 1.3 }}
              >
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#CBA968', border: '1.5px solid #2D4A3E', color: '#20362C', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.n}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

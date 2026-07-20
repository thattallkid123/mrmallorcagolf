'use client'

import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { GOLF_COURSE_DATA } from '../lib/golf-courses-data'
import { COURSE_COORDINATES } from '../lib/golf-courses-coordinates'

const REGION_IDS = ['all', 'palma', 'southwest', 'south', 'east', 'north']

const LABELS = {
  en: { title: 'Where the courses are', regions: ['All courses', 'Palma', 'Southwest', 'South', 'East', 'North'] },
  de: { title: 'Wo die Plätze liegen', regions: ['Alle Plätze', 'Palma', 'Südwesten', 'Süden', 'Osten', 'Norden'] },
  es: { title: 'Dónde están los campos', regions: ['Todos los campos', 'Palma', 'Suroeste', 'Sur', 'Este', 'Norte'] },
  fr: { title: 'Où sont les parcours', regions: ['Tous les parcours', 'Palma', 'Sud-ouest', 'Sud', 'Est', 'Nord'] },
  nl: { title: 'Waar de banen liggen', regions: ['Alle banen', 'Palma', 'Zuidwesten', 'Zuiden', 'Oosten', 'Noorden'] },
  sv: { title: 'Var banorna ligger', regions: ['Alla banor', 'Palma', 'Sydväst', 'Söder', 'Öster', 'Norr'] },
  zh: { title: '球场分布图', regions: ['所有球场', '帕尔马', '西南', '南部', '东部', '北部'] },
}

// Flatten once, attaching the parent region to each course.
const ALL_COURSES = GOLF_COURSE_DATA.flatMap(region =>
  region.courses.map(course => ({ ...course, region: region.region }))
)

export default function CourseMapView({ lang = 'en' }) {
  const labels = LABELS[lang] || LABELS.en
  const regions = REGION_IDS.map((id, i) => ({ id, label: labels.regions[i] }))
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerLayerRef = useRef(null)
  const [selectedRegion, setSelectedRegion] = useState('all')

  const filteredCourses = selectedRegion === 'all'
    ? ALL_COURSES
    : ALL_COURSES.filter(c => c.region === selectedRegion)

  // Initialise the map once.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    let cancelled = false
    import('leaflet').then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView([39.62, 2.95], 9)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map)

      markerLayerRef.current = L.layerGroup().addTo(map)
      mapRef.current = { L, map }
      drawMarkers()
    })

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.map.remove()
        mapRef.current = null
        markerLayerRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Redraw markers whenever the region filter changes.
  useEffect(() => {
    drawMarkers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion])

  function drawMarkers() {
    if (!mapRef.current || !markerLayerRef.current) return
    const { L, map } = mapRef.current
    markerLayerRef.current.clearLayers()

    const points = []
    filteredCourses.forEach((course) => {
      const coords = COURSE_COORDINATES[course.name]
      if (!coords) return
      points.push(coords)
      L.circleMarker(coords, {
        radius: 7,
        color: '#2D4A3E',
        weight: 2,
        fillColor: '#CBA968',
        fillOpacity: 0.9,
      })
        .bindPopup(`<strong>${course.name}</strong><br/>${course.location || ''}`)
        .addTo(markerLayerRef.current)
    })

    if (points.length > 1) {
      map.fitBounds(points, { padding: [40, 40], maxZoom: 12 })
    } else if (points.length === 1) {
      map.setView(points[0], 12)
    }
  }

  return (
    <div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', color: '#1A1916', marginBottom: 20 }}>
        {labels.title}
      </h2>
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
        }}
      />
    </div>
  )
}

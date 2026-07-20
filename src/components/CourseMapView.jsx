'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { GOLF_COURSE_DATA } from '../lib/golf-courses-data'
import { COURSE_COORDINATES } from '../lib/golf-courses-coordinates'

export default function CourseMapView({ onCourseSelect }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [mapReady, setMapReady] = useState(false)

  const regions = [
    { id: 'all', label: 'All Courses' },
    { id: 'palma', label: 'Palma' },
    { id: 'southwest', label: 'Southwest' },
    { id: 'south', label: 'South' },
    { id: 'east', label: 'East' },
    { id: 'north', label: 'North' },
  ]

  const allCourses = GOLF_COURSE_DATA.flatMap(region => region.courses)

  const filteredCourses = selectedRegion === 'all'
    ? allCourses
    : allCourses.filter(c => c.region === selectedRegion)

  useEffect(() => {
    if (!mapContainer.current) return

    const initializeMap = async () => {
      const L = await import('leaflet')

      if (map.current) {
        map.current.remove()
      }

      map.current = L.map(mapContainer.current).setView([39.6953, 3.0176], 9)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map.current)

      filteredCourses.forEach(course => {
        const coords = COURSE_COORDINATES[course.name]
        if (coords) {
          L.marker(coords)
            .addTo(map.current)
            .bindPopup(`<strong>${course.name}</strong><br/>${course.region}`)
        }
      })

      setMapReady(true)
    }

    initializeMap()

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [filteredCourses])

  return (
    <div style={{ marginTop: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 12 }}>
          Filter by region
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {regions.map(region => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                border: selectedRegion === region.id ? '2px solid var(--pine)' : '1px solid var(--linen)',
                background: selectedRegion === region.id ? 'var(--pine-pale)' : 'var(--white)',
                color: selectedRegion === region.id ? 'var(--pine)' : 'var(--taupe)',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={mapContainer}
        style={{
          width: '100%',
          height: '600px',
          backgroundColor: 'var(--cream)',
          borderRadius: 8,
          border: '1px solid var(--linen)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--taupe)',
          fontSize: '0.9rem',
          position: 'relative',
        }}
      >
        {!mapReady && (
          <div style={{ textAlign: 'center' }}>
            <p>Map loading...</p>
            <p style={{ fontSize: '0.8rem', marginTop: 8 }}>Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: 20, padding: '16px', backgroundColor: 'var(--cream)', borderRadius: 4 }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--charcoal)' }}>
          <strong>{filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} in {selectedRegion === 'all' ? 'all regions' : regions.find(r => r.id === selectedRegion)?.label}</strong>
        </p>
      </div>
    </div>
  )
}

'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { COMPREHENSIVE_COURSES } from '../../../../lib/golf-courses-comprehensive'
import { getCoursePricingByName } from '../../../../lib/course-pricing-data'

export default function CourseComparisonClient() {
  const [selectedCourses, setSelectedCourses] = useState(['Son Gual', 'Alcanada'])

  const allCourses = useMemo(() =>
    COMPREHENSIVE_COURSES.map(c => {
      const pricing = getCoursePricingByName(c.name)
      return {
        ...c,
        peakFee: pricing?.peak ? `€${pricing.peak}` : (c.peakText || `approx. €${c.peak}`),
        lowFee: pricing?.low ? `€${pricing.low}` : (c.lowText || `approx. €${c.low}`),
      }
    })
  , [])

  const compared = useMemo(() =>
    selectedCourses.map(name => allCourses.find(c => c.name === name)).filter(Boolean)
  , [selectedCourses, allCourses])

  const handleCourseChange = (index, newName) => {
    const updated = [...selectedCourses]
    updated[index] = newName
    setSelectedCourses(updated)
  }

  const factRows = [
    { label: 'Location', key: 'location' },
    { label: 'Region', key: 'region' },
    { label: 'Par', key: 'par' },
    { label: 'Length', key: 'length', format: (v) => `${v} yards` },
    { label: 'Difficulty', key: 'difficulty', format: (v) => v ? `${v}/10` : '–' },
    { label: 'Rating', key: 'rating', format: (v) => v ? `${v}/5` : '–' },
    { label: 'Holes', key: 'nineHoles', format: (v) => v ? '9 holes' : '18 holes' },
    { label: 'Green Fee (peak)', key: 'peakFee' },
    { label: 'Green Fee (low)', key: 'lowFee' },
    { label: 'Buggy', key: 'buggy' },
    { label: 'Walking', key: 'walking', format: (c) => {
      const label = c?.walking === 'yes' ? 'Yes' : c?.walking === 'no' ? 'Buggy only' : c?.walkingNote || 'Restricted'
      const note = c?.walkingNote && c?.walking !== 'yes' ? ` (${c.walkingNote})` : ''
      return `${label}${note}`
    }},
    { label: 'Handicap requirement', key: 'handicapNote' },
    { label: "Andy's verdict", key: 'verdict' },
  ]

  return (
    <main style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <section style={{ marginBottom: 60 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>
          Compare up to 3 courses
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--deep)', marginBottom: 32 }}>
          Side-by-side course comparison
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', maxWidth: 640, lineHeight: 1.6 }}>
          Compare greens fees, difficulty, par, and handicap requirements across any two or three Mallorca courses. Select courses below to start.
        </p>
      </section>

      <section style={{ marginBottom: 60, display: 'grid', gridTemplateColumns: `repeat(${compared.length}, 1fr)`, gap: 24 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ display: i < 3 ? 'block' : 'none' }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 8 }}>
              Course {i + 1}
            </label>
            <select
              value={selectedCourses[i] || ''}
              onChange={(e) => handleCourseChange(i, e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                fontSize: '0.9rem',
                border: '1px solid var(--linen)',
                borderRadius: 4,
                backgroundColor: 'var(--white)',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <option value="">Select a course...</option>
              {allCourses.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        ))}
      </section>

      {compared.length > 0 && (
        <section style={{ overflowX: 'auto', border: '1px solid var(--linen)', borderRadius: 8, backgroundColor: 'var(--white)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <tbody>
              {factRows.map((row, idx) => (
                <tr key={row.label} style={{ borderBottom: idx < factRows.length - 1 ? '1px solid var(--cream)' : 'none' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 500, color: 'var(--deep)', backgroundColor: 'var(--cream)', minWidth: 160 }}>
                    {row.label}
                  </td>
                  {compared.map((course, colIdx) => {
                    let value = course?.[row.key]
                    let display = row.format ? row.format(value || course) : value || '–'
                    return (
                      <td key={`${row.label}-${colIdx}`} style={{ padding: '16px 20px', color: 'var(--charcoal)' }}>
                        {display}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {compared.length > 0 && (
        <section style={{ marginTop: 60, padding: 40, backgroundColor: 'var(--cream)', borderRadius: 8 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--deep)', marginBottom: 16 }}>
            Need help deciding?
          </h2>
          <p style={{ color: 'var(--charcoal)', marginBottom: 16, lineHeight: 1.6 }}>
            Send me your handicap, group size, and what you're looking for. I'll refine the recommendation and help you book.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: 'var(--pine)', color: 'white', textDecoration: 'none', borderRadius: 4, fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Get in touch
          </Link>
        </section>
      )}
    </main>
  )
}

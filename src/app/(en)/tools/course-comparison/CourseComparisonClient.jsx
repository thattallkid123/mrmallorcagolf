'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { COMPREHENSIVE_COURSES } from '../../../../lib/golf-courses-comprehensive'
import { getCoursePricingByName } from '../../../../lib/course-pricing-data'
import { findCourseByName } from '../../../../lib/golf-courses-helpers'
import { getScorecardByCourseName } from '../../../../lib/scorecard-data'

function walkingLabel(c) {
  if (c.walking === 'yes') return c.walkingNote ? `Yes (${c.walkingNote})` : 'Yes'
  if (c.walking === 'no') return c.walkingNote ? `Buggy only (${c.walkingNote})` : 'Buggy only'
  return c.walkingNote ? `Restricted (${c.walkingNote})` : 'Restricted'
}

export default function CourseComparisonClient() {
  const [selectedCourses, setSelectedCourses] = useState(['Son Gual', 'Alcanada'])

  const allCourses = useMemo(() =>
    COMPREHENSIVE_COURSES.map(c => {
      const listing = findCourseByName(c.name)
      const scorecard = listing ? getScorecardByCourseName(listing.name) : null
      const pricing = getCoursePricingByName(c.name)
      return {
        ...c,
        location: listing?.location || c.area,
        region: c.area,
        par: scorecard?.par ?? null,
        diffScore: listing?.diffScore ?? null,
        peakFee: pricing?.peak ? `€${pricing.peak}` : (c.peakText || (c.peak ? `€${c.peak}` : '–')),
        lowFee: pricing?.low ? `€${pricing.low}` : (c.lowText || (c.low ? `€${c.low}` : '–')),
      }
    }).sort((a, b) => a.name.localeCompare(b.name))
  , [])

  const compared = useMemo(() =>
    selectedCourses.map(name => allCourses.find(c => c.name === name)).filter(Boolean)
  , [selectedCourses, allCourses])

  const handleCourseChange = (index, newName) => {
    const updated = [...selectedCourses]
    if (newName) {
      updated[index] = newName
    } else {
      updated.splice(index, 1)
    }
    setSelectedCourses(updated)
  }

  const factRows = [
    { label: 'Location', get: c => c.location || '–' },
    { label: 'Region', get: c => c.region || '–' },
    { label: 'Par', get: c => (c.par ? `Par ${c.par}` : '–') },
    { label: 'Difficulty', get: c => c.diffScore || '–' },
    { label: 'Holes', get: c => (c.nineHoles ? '9 holes' : '18 holes') },
    { label: 'Green fee (peak)', get: c => c.peakFee },
    { label: 'Green fee (low)', get: c => c.lowFee },
    { label: 'Buggy', get: c => c.buggy || '–' },
    { label: 'Walking', get: c => walkingLabel(c) },
    { label: 'Handicap requirement', get: c => c.handicapNote || '–' },
    { label: "Andy's verdict", get: c => c.verdict || '–' },
  ]

  const columns = Math.max(compared.length, 1)

  return (
    <main style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <section style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>
          Compare up to 3 courses
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--deep)', marginBottom: 20 }}>
          Side-by-side course comparison
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', maxWidth: 640, lineHeight: 1.6 }}>
          Put any two or three of Mallorca&rsquo;s 24 courses head to head: location, par, difficulty, green fees, buggy and walking rules, handicap requirements, and a one-line verdict from Andy on each.
        </p>
      </section>

      <section style={{ marginBottom: 48, display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 24 }}>
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 8 }}>
              Course {i + 1}{i === 2 ? ' (optional)' : ''}
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
              <option value="">{i === 2 ? 'Add a third course...' : 'Select a course...'}</option>
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
            <thead>
              <tr>
                <th style={{ padding: '16px 20px', backgroundColor: 'var(--cream)', minWidth: 160 }} />
                {compared.map((course, colIdx) => (
                  <th key={`head-${colIdx}`} style={{ padding: '16px 20px', textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 500, color: 'var(--deep)', backgroundColor: 'var(--cream)' }}>
                    {course.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {factRows.map((row, idx) => (
                <tr key={row.label} style={{ borderBottom: idx < factRows.length - 1 ? '1px solid var(--cream)' : 'none' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 500, color: 'var(--deep)', backgroundColor: 'var(--cream)', minWidth: 160, verticalAlign: 'top' }}>
                    {row.label}
                  </td>
                  {compared.map((course, colIdx) => (
                    <td key={`${row.label}-${colIdx}`} style={{ padding: '16px 20px', color: 'var(--charcoal)', verticalAlign: 'top', lineHeight: 1.55 }}>
                      {row.get(course)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {compared.length > 0 && (
        <section style={{ marginTop: 48, padding: 40, backgroundColor: 'var(--cream)', borderRadius: 8 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--deep)', marginBottom: 16 }}>
            Need help deciding?
          </h2>
          <p style={{ color: 'var(--charcoal)', marginBottom: 16, lineHeight: 1.6 }}>
            Send me your handicap, group size, and what you&rsquo;re looking for. I&rsquo;ll refine the recommendation and help you book.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: 'var(--pine)', color: 'white', textDecoration: 'none', borderRadius: 4, fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Get in touch
          </Link>
        </section>
      )}
    </main>
  )
}

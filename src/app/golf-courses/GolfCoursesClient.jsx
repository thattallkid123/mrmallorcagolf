'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buildLocalePath } from '../../lib/site'
import { getGolfCoursesContent } from '../../lib/golf-courses-content'
import { GOLF_COURSE_DATA } from '../../lib/golf-courses-data'
import {
  GOLF_COURSE_REGION_HEADERS,
  GOLF_COURSE_TRANSLATIONS,
  GOLF_COURSE_UI_TRANSLATIONS,
  getGolfCourseRegions,
} from '../../lib/golf-courses-translations'
import {
  getShortCourseId,
  SHORT_TO_ID,
  slugifyCourseName,
} from '../../lib/golf-courses-helpers'

function CourseCard({ c, lang = 'en' }) {
  return (
    <div id={slugifyCourseName(c.name)} className={`course${c.expert ? ' course--expert' : ''}${c.full ? ' course--full' : ''}`} style={{scrollMarginTop:'90px'}}>
      {/* Mobile: image on top, full width, fixed height */}
      {c.img && (
        <div className="course__img-mobile" style={{ position: 'relative' }}>
          <Image
            src={c.img}
            alt={c.name}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}
      <div className="course__inner" style={{display:'flex',gap:20,alignItems:'flex-start'}}>
        <div style={{flex:1,minWidth:0}}>
          {c.badges.length > 0 && (
            <div className="course__badges">
              {c.badges.map((b, i) => (
                <span key={i} className={`badge ${b.startsWith('★') ? 'badge--expert' : b.includes('Members') ? 'badge--members' : 'badge--award'}`}>{b}</span>
              ))}
            </div>
          )}
          <h3 className="course__name">{c.name}</h3>
          <p className="course__location">{(lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.location) || c.location}</p>
          <div className="course__stats">
            {c.pills.map((p, i) => <span key={i} className={`stat-pill${i === 0 ? ' stat-pill--gold' : ''}`}>{p}</span>)}
          </div>
          <div className="difficulty">
            <div className="difficulty__track"><div className="difficulty__fill" style={{width:`${c.difficulty}%`}}></div></div>
            <span className="difficulty__score">{c.diffScore}</span>
          </div>
          <p className="course__text">{(lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.text) || c.text}</p>
          {(c.text2 || (lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.text2)) && <p className="course__text" style={{marginTop:12}}>{(lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.text2) || c.text2}</p>}
          {(c.note || (lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.note)) && <div className="course__note"><p>{(lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.note) || c.note}</p></div>}
        </div>
        {/* Desktop: image on right, full card height */}
        {c.img && (
          <div className="course__img-desktop" style={{ position: 'relative' }}>
            <Image
              src={c.img}
              alt={c.name}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        )}
      </div>
      <div className="course__footer">
        <span className="course__footer-info">{(lang !== 'en' && GOLF_COURSE_TRANSLATIONS[lang]?.[c.name]?.footer) || c.footer}</span>
      </div>
    </div>
  )
}

export default function GolfCoursesClient({ lang = 'en' }) {
  const sharedContent = getGolfCoursesContent('en')
  const t = lang === 'en' ? sharedContent.ui : (GOLF_COURSE_UI_TRANSLATIONS[lang] || sharedContent.ui)
  const regionHeaders = lang === 'en' ? sharedContent.regionHeaders : GOLF_COURSE_REGION_HEADERS
  const REGIONS = getGolfCourseRegions(t)
  const [activeFilter, setActiveFilter] = useState('all')
  const contactHref = buildLocalePath('/contact', lang)
  const experiencesHref = buildLocalePath('/play-with-a-pro', lang)

  const visibleRegions = GOLF_COURSE_DATA.filter(region => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'expert') return region.courses.some(c => c.expert)
    return region.region === activeFilter
  })

  return (
    <>
      {/* GEOGRAPHY */}
      <section className="geography reveal" style={{background:'var(--cream)'}}>
        <div className="geography__left">
          <p className="eyebrow" style={{color:'var(--gold)'}}>{t.geoEyebrow}</p>
          <h2 style={{color:'var(--deep)'}}>{t.geoH2}</h2>
          <p style={{color:'var(--charcoal)'}}>{t.geoP1}</p>
          <p style={{color:'var(--charcoal)'}}>{t.geoP2}</p>
        </div>
        <div className="geography__right">
          {t.geoRegions.map((row, i) => (
            <div key={i} className="geo-row">
              <span className="geo-region" style={{color:'var(--charcoal)'}}>{row.region}</span>
              <span className="geo-courses">
                {row.courses.split(/\s+[^\w\s]+\s+/).map((name, j) => {
                  const id = getShortCourseId(name)
                  return (
                    <span key={j}>
                      {j > 0 && <span style={{color:'var(--stone)'}}> · </span>}
                      <a href={`#${id}`} style={{color: j % 2 === 0 ? 'var(--pine)' : 'var(--charcoal)',textDecoration:'none',fontWeight:400}} onMouseOver={e=>e.currentTarget.style.textDecoration='underline'} onMouseOut={e=>e.currentTarget.style.textDecoration='none'}>{name}</a>
                    </span>
                  )
                })}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO BAR */}
      <div className="intro-bar">
        <div className="intro-bar__text reveal" style={{maxWidth:'100%'}}>
          <p>{t.intro1} {t.intro2}</p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div id="all-courses" className="filter-tabs" style={{scrollMarginTop:'80px'}}>
        {REGIONS.map(r => (
          <button
            key={r.key}
            className={`filter-tab${activeFilter === r.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(r.key)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* COURSE LISTING */}
      <div className="page-layout">
        <div className="page-main">
          {visibleRegions.map((regionData, i) => {
            const header = regionHeaders[regionData.region]
            const coursesToShow = activeFilter === 'expert'
              ? regionData.courses.filter(c => c.expert)
              : regionData.courses
            return (
              <div key={regionData.region + activeFilter}>
                {i > 0 && <div className="divider" />}
                <section className="region-section">
                  <div className="region-header">
                    <h2 className="region-title">{header.title}</h2>
                    <p className="region-subtitle">{header.subtitle}</p>
                    <span className="region-count">{header.count}</span>
                  </div>
                  {t.courseNote && (
            <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',padding:'12px 0',borderBottom:'1px solid var(--linen)',marginBottom:16}}>{t.courseNote}</p>
          )}
          <div className="courses-grid-list">
                    {coursesToShow.map((c, j) => <CourseCard key={j} c={c} lang={lang} />)}
                  </div>
                </section>
              </div>
            )
          })}
        </div>

        <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>{t.sidebarH3}</h3>
            <p>{t.sidebarP}</p>
            <Link href={contactHref} className="sidebar-btn">{t.sidebarBtn}</Link>
          </div>
          <div className="sidebar-card sidebar-card--cream">
            <h3 style={{fontSize:'1rem'}}>{t.quickPicksTitle}</h3>
            <ul className="sidebar-quick">
              {t.quickPicks.map((p,i) => {
                // Split label at colon, link only the course-name part
                const colonIdx = p.indexOf(': ')
                const prefix = colonIdx >= 0 ? p.slice(0, colonIdx + 2) : ''
                const coursesPart = colonIdx >= 0 ? p.slice(colonIdx + 2) : p
                // Split on " or ", " oder ", " eller ", " ou ", " o ", " of " to support multi-language
                const separator = coursesPart.match(/ (or|oder|eller|ou|o) /)
                const parts = separator ? coursesPart.split(separator[0]) : [coursesPart]
                const sepWord = separator ? separator[0] : null
                return (
                  <li key={i}>
                    {prefix}
                    {parts.map((part, j) => {
                      const id = getShortCourseId(part)
                      return (
                        <span key={j}>
                          {j > 0 && sepWord}
                          {id ? <a href={`#${id}`} style={{color:'inherit',textDecoration:'none'}} onMouseOver={e=>e.currentTarget.style.color='var(--pine)'} onMouseOut={e=>e.currentTarget.style.color='inherit'}>{part}</a> : part}
                        </span>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>

      {/* FINAL CTA */}
      <section className="guide-cta">
        <div>
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'0.75rem'}}>{t.ctaEyebrow}</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem',marginBottom:'1.25rem'}}>{t.ctaH2}</h2>
          <p>{t.ctaP}</p>
        </div>
        <div className="guide-cta__actions">
          <Link href={experiencesHref} className="btn btn--gold" style={{fontSize:10,padding:'14px 32px'}}>{t.seeExperiences}</Link>
          <Link href={contactHref} className="btn btn--outline-white">{t.getInTouch}</Link>
        </div>
      </section>
    </>
  )
}

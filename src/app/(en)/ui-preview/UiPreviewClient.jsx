'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const categories = [
  ['all', 'All'],
  ['reviews', 'Course Reviews'],
  ['planning', 'Trip Planning'],
  ['costs', 'Golf Costs'],
]

const guideCategoryMap = {
  'play-with-a-pro-explained': 'planning',
  'on-course-coaching-mallorca': 'planning',
  'best-golf-courses-mallorca': 'planning',
  'is-mallorca-good-for-golf': 'planning',
  'best-time-play-golf-mallorca': 'planning',
  'golf-trip-planning-mallorca': 'planning',
  'golf-cost-mallorca': 'costs',
  'golf-club-hire-mallorca': 'costs',
}

const tools = [
  ['Start here', 'Find the right three courses', 'A shortlist based on group size, handicap, base, budget, travel tolerance, and the kind of golf day you want.', '/tools/course-selector', '/images/son-gual-card.webp', 'lead'],
  ['Rules', 'Can I play it?', 'Check handicap limits and certificate rules before a course goes on the shortlist.', '/tools/handicap-checker'],
  ['Budget', 'Trip cost', 'A realistic estimate across green fees, buggies, hotel, transport, and food.', '/tools/golf-cost-calculator'],
  ['Base', 'Where to stay', 'Match the hotel area to the courses and driving pattern, not just the prettiest town.', '/tools/hotel-recommender'],
  ['Human route', 'Prefer Andy to build it?', 'Use the tools for orientation, or send the details and have the plan shaped properly.', '/plan-your-trip', null, 'wide'],
]

const courseCards = [
  ['Serious golf', 'Son Gual', 'Best for golfers who want a proper test near Palma.', '/images/son-gual-card.webp', '/guides/son-gual-review', ['Premium inland', 'Wind exposed', 'Strong greens']],
  ['Memory round', 'Alcanada', 'Best when one round needs to feel like the trip highlight.', '/images/alcanada-card.webp', '/guides/alcanada-review', ['Coastal views', 'Buggy sensible', 'North base']],
  ['Value character', 'Son Termes', 'Best when you want views and interest without premium pricing.', '/images/courses/son-termes.webp', '/guides/son-termes-review', ['Close to Palma', 'Back nine hills', 'Good value']],
]

function Section({ eyebrow, title, body, verdict, href, children }) {
  return (
    <section className="ui-preview-section">
      <div className="ui-preview-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="serif-display">{title}</h2>
          <p>{body}</p>
        </div>
        <aside>
          <strong>Decision test</strong>
          <span>{verdict}</span>
          <Link href={href}>Open current page</Link>
        </aside>
      </div>
      {children}
    </section>
  )
}

function BentoCompare() {
  return (
    <div className="ui-preview-single">
      <p className="ui-preview-label">Keep current direction</p>
      <div className="ui-preview-current">
        {tools.slice(0, 4).map(([label, title, body]) => (
          <article key={title}>
            <small>{label}</small>
            <h3>{title}</h3>
            <p>{body}</p>
            <span>Start</span>
          </article>
        ))}
      </div>
    </div>
  )
}

function PhotoPreview({ photos }) {
  const stripViewportRef = useRef(null)
  const stripTrackRef = useRef(null)
  const loopedPhotos = [...photos, ...photos]

  useEffect(() => {
    const viewport = stripViewportRef.current
    const track = stripTrackRef.current
    if (!viewport || !track) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let pausedUntil = 0
    let timer
    let halfWidth = 0

    const setHalfWidth = () => {
      halfWidth = track.scrollWidth / 2
    }

    const pauseBriefly = () => {
      pausedUntil = performance.now() + 1800
    }

    const normalizeLoopPosition = () => {
      if (!halfWidth) return
      if (viewport.scrollLeft >= halfWidth) viewport.scrollLeft -= halfWidth
      if (viewport.scrollLeft < 0) viewport.scrollLeft += halfWidth
    }

    const tick = () => {
      if (performance.now() > pausedUntil) {
        viewport.scrollLeft = Math.round(viewport.scrollLeft + 1)
        normalizeLoopPosition()
      }
    }

    setHalfWidth()
    window.addEventListener('resize', setHalfWidth)
    viewport.addEventListener('pointerdown', pauseBriefly)
    viewport.addEventListener('wheel', pauseBriefly, { passive: true })
    viewport.addEventListener('touchstart', pauseBriefly, { passive: true })
    viewport.addEventListener('scroll', normalizeLoopPosition, { passive: true })
    timer = window.setInterval(tick, 18)

    return () => {
      window.clearInterval(timer)
      window.removeEventListener('resize', setHalfWidth)
      viewport.removeEventListener('pointerdown', pauseBriefly)
      viewport.removeEventListener('wheel', pauseBriefly)
      viewport.removeEventListener('touchstart', pauseBriefly)
      viewport.removeEventListener('scroll', normalizeLoopPosition)
    }
  }, [])

  return (
    <div>
      <div className="ui-preview-pwap-strip" aria-label="Reordered Play With A Pro photo strip" ref={stripViewportRef}>
        <div className="ui-preview-pwap-strip__track" ref={stripTrackRef}>
          {loopedPhotos.map((item, index) => (
            <figure key={`${item.src}-${index}`} className={item.variant === 'portrait' ? 'is-portrait' : ''}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 78vw, 360px" style={{ objectFit: 'cover', objectPosition: item.position || 'center center' }} />
            </figure>
          ))}
        </div>
      </div>
      <p className="ui-preview-note">Only the order changes: the existing horizontal strip stays, the visible scrollbar stays hidden, and the photo border is removed.</p>
    </div>
  )
}

function shortGuideTitle(title) {
  return title
    .replace(/ - A PGA Professional's Honest (Review|Take|Ranking) \(2026\)$/, '')
    .replace(/ - A PGA Professional's Honest (Review|Take|Ranking)$/, '')
    .replace(/, Mallorca\. A PGA Professional's Honest Review \(2026\)$/, ', Mallorca')
    .replace(/\s*\(2026\)$/, '')
    .trim()
}

function GuideRail({ guides, emptyTitle, emptyBody }) {
  const railRef = useRef(null)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    let isDragging = false
    let startX = 0
    let startScrollLeft = 0

    const onPointerDown = (event) => {
      isDragging = true
      startX = event.clientX
      startScrollLeft = rail.scrollLeft
      rail.setPointerCapture?.(event.pointerId)
      rail.classList.add('is-dragging')
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      rail.scrollLeft = startScrollLeft - (event.clientX - startX)
    }

    const endDrag = (event) => {
      if (!isDragging) return
      isDragging = false
      rail.releasePointerCapture?.(event.pointerId)
      rail.classList.remove('is-dragging')
    }

    rail.addEventListener('pointerdown', onPointerDown)
    rail.addEventListener('pointermove', onPointerMove)
    rail.addEventListener('pointerup', endDrag)
    rail.addEventListener('pointercancel', endDrag)
    rail.addEventListener('lostpointercapture', endDrag)

    return () => {
      rail.removeEventListener('pointerdown', onPointerDown)
      rail.removeEventListener('pointermove', onPointerMove)
      rail.removeEventListener('pointerup', endDrag)
      rail.removeEventListener('pointercancel', endDrag)
      rail.removeEventListener('lostpointercapture', endDrag)
    }
  }, [])

  if (!guides.length) {
    return (
      <div className="ui-preview-guide-empty">
        <strong>{emptyTitle}</strong>
        <p>{emptyBody}</p>
      </div>
    )
  }

  return (
    <div className="ui-preview-guide-rail" aria-label="Guide preview rail" ref={railRef}>
      {guides.map((guide) => (
        <Link href={`/guides/${guide.slug}`} className="ui-preview-guide-card" key={guide.slug}>
          <span className="ui-preview-guide-card__image">
            <Image
              src={guide.img}
              alt={guide.title}
              fill
              sizes="(max-width: 640px) 78vw, 340px"
              style={{ objectFit: 'cover', objectPosition: guide.imgPosition || 'center 40%' }}
            />
          </span>
          <span className="ui-preview-guide-card__body">
            <small>{guide.badge}</small>
            <strong>{shortGuideTitle(guide.title)}</strong>
            <em>{guide.keywords}</em>
          </span>
        </Link>
      ))}
    </div>
  )
}

function GuidesPreview({ guides }) {
  const [active, setActive] = useState('all')
  const liveGuides = guides?.liveGuides || []
  const reviewGuides = liveGuides.filter((guide) => guide.slug.endsWith('-review'))
  const articleGuides = liveGuides.filter((guide) => !guide.slug.endsWith('-review'))
  const filteredArticles = active === 'all'
    ? articleGuides
    : articleGuides.filter((guide) => guideCategoryMap[guide.slug] === active)
  const reviewCount = reviewGuides.length
  const planningCount = articleGuides.filter((guide) => guideCategoryMap[guide.slug] === 'planning').length
  const costsCount = articleGuides.filter((guide) => guideCategoryMap[guide.slug] === 'costs').length
    const tabLabels = {
      all: `All (${liveGuides.length})`,
      reviews: `Course Reviews (${reviewCount})`,
      planning: `Trip Planning (${planningCount})`,
      costs: `Golf Costs (${costsCount})`,
    }
  const showReviewRail = active === 'all' || active === 'reviews'
  const showGuidesRail = active !== 'reviews'
  const guidesHeading = active === 'costs' ? 'Guides: Golf Costs' : active === 'planning' ? 'Guides: Trip Planning' : 'Guides'

  return (
    <div className="ui-preview-guides">
      <div className="ui-preview-tabs">
        {categories.map(([id, label]) => (
          <button key={id} type="button" aria-pressed={id === active} onClick={() => setActive(id)}>{tabLabels[id] || label}</button>
        ))}
      </div>
      <p className="ui-preview-category-note">
        Default view stays on <strong>All</strong>, so every guide is still discoverable. The filter only changes which horizontal rail is in focus; it does not turn the page into four separate long sections.
      </p>
      <div className="ui-preview-guides-stack">
        {showReviewRail ? (
          <div className="ui-preview-rail-block">
            <div className="ui-preview-rail-head">
              <h3 className="serif-display">Course Reviews</h3>
              <div className="ui-preview-rail-meta">
                <span>{reviewCount} live</span>
                <p className="ui-preview-rail-hint">{'<- scroll ->'}</p>
              </div>
            </div>
            <GuideRail
              guides={reviewGuides}
              emptyTitle="No course reviews in this filter."
              emptyBody="The review rail stays visible in All, then stands alone when Course Reviews is selected."
            />
          </div>
        ) : null}
        {showGuidesRail ? (
          <div className="ui-preview-rail-block">
            <div className="ui-preview-rail-head">
              <h3 className="serif-display">{guidesHeading}</h3>
              <div className="ui-preview-rail-meta">
                <span>{filteredArticles.length} live</span>
                <p className="ui-preview-rail-hint">{'<- scroll ->'}</p>
              </div>
            </div>
            <GuideRail
              guides={filteredArticles}
              emptyTitle="No guides in this category yet."
              emptyBody="That keeps the structure stable while we wait for more content in this bucket."
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

function CoursePreview() {
  return (
    <div className="ui-preview-course-grid ui-preview-course-grid--muted">
      {courseCards.map(([label, name, body, image, href, points]) => (
        <Link href={href} className="ui-preview-course" key={name}>
          <span className="ui-preview-course-image">
            <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 380px" style={{ objectFit: 'cover', objectPosition: 'center 42%' }} />
          </span>
          <span className="ui-preview-course-body">
            <small>{label}</small>
            <strong>{name}</strong>
            <em>{body}</em>
            <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function UiPreviewClient({ photos, guides }) {
  return (
    <>
      <header className="ui-preview-hero">
        <Image src="/images/home-hero-mandarin.webp" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 52%' }} />
        <div className="ui-preview-hero-overlay" />
        <div className="ui-preview-hero-inner">
          <p className="eyebrow eyebrow--gold">Local UI preview</p>
          <h1 className="serif-display">Compare real-site upgrade directions before changing live pages.</h1>
          <p>These are local preview sections using the site fonts, colours, spacing, image assets, and content shape. The current pages remain unchanged.</p>
          <div>
            <Link href="/" className="btn btn--outline-white">Current home</Link>
            <Link href="/play-with-a-pro" className="btn btn--outline-white">Current PWAP</Link>
            <Link href="/guides" className="btn btn--outline-white">Current guides</Link>
            <Link href="/golf-courses" className="btn btn--outline-white">Current courses</Link>
          </div>
        </div>
      </header>

      <Section eyebrow="1. Homepage planning tools" title="Keep the clean four-card layout." body="If the four current tools fit cleanly in one box, bento is not automatically an upgrade. The preview now treats this as a no-change recommendation." verdict="Current layout wins unless we find a specific problem it fails to solve." href="/">
        <BentoCompare />
      </Section>

      <Section eyebrow="2. Play With A Pro photos" title="Keep the existing strip. Only adjust the order." body="The live strip was already the right product: horizontal, light, visual, and easy to scan. The only useful change is separating the similar red-shirt and grey-shirt photos." verdict="No lightbox. No visible scrollbar. No border line. Just reorder the photos." href="/play-with-a-pro">
        <PhotoPreview photos={photos} />
      </Section>

      <Section eyebrow="3-4. Guides discovery" title="Keep the rails. Add one filter bar above them." body="This version keeps the current horizontal browsing, but gives people a clean way to focus on Course Reviews, Trip Planning, or Golf Costs without creating four separate scroll sections." verdict="Best next step if we want categories: keep the rails, add a top filter, and leave All as the default." href="/guides">
        <GuidesPreview guides={guides} />
      </Section>

      <Section eyebrow="5. Course decision layer" title="Probably skip this for now." body="The existing tables and course page already handle comparison. Extra cards risk adding another layer without solving a clear problem." verdict="Do not implement unless later evidence shows users are not finding the right course." href="/golf-courses">
        <CoursePreview />
      </Section>

      <section className="ui-preview-final">
        <p className="eyebrow eyebrow--gold">Recommended decision</p>
        <h2 className="serif-display">Current decision: do not change the site structure yet.</h2>
        <p>Keep the four tool cards. Keep the PWAP strip and only change photo order. Keep the current guides browsing for now; the category names are useful but the vertical grid is not a better product. Skip course decision cards.</p>
      </section>

      <style>{`
        .ui-preview-hero { position: relative; min-height: 78vh; display: flex; align-items: flex-end; overflow: hidden; background: var(--deep); padding: calc(var(--nav-h) + 76px) clamp(20px, 5vw, 60px) 76px; }
        .ui-preview-hero-overlay { position: absolute; inset: 0; background: linear-gradient(105deg, rgba(12,11,9,.82), rgba(12,11,9,.54) 44%, rgba(12,11,9,.16)), linear-gradient(to top, rgba(12,11,9,.62), rgba(12,11,9,.08)); }
        .ui-preview-hero-inner { position: relative; z-index: 1; width: min(1180px,100%); margin: 0 auto; color: var(--cream); text-shadow: 0 3px 28px rgba(0,0,0,.6); }
        .ui-preview-hero h1 { max-width: 840px; color: #fff; font-size: clamp(2.45rem, 5.6vw, 5rem); line-height: .94; margin-bottom: 1.2rem; }
        .ui-preview-hero p:not(.eyebrow) { max-width: 690px; color: rgba(247,244,239,.82); line-height: 1.75; }
        .ui-preview-hero-inner div { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 1.7rem; }
        .ui-preview-section { padding: clamp(58px,7vw,96px) clamp(20px,5vw,60px); background: linear-gradient(180deg,#fbfaf7,var(--cream)); border-bottom: 1px solid rgba(26,25,22,.08); }
        .ui-preview-section:nth-of-type(odd) { background: linear-gradient(180deg,var(--linen),#fbfaf7); }
        .ui-preview-head { width: min(1180px,100%); margin: 0 auto 34px; display: grid; grid-template-columns: minmax(0,1fr) minmax(260px,360px); gap: clamp(22px,5vw,54px); align-items: end; }
        .ui-preview-head h2 { max-width: 780px; color: var(--deep); font-size: clamp(2rem,4vw,3.4rem); line-height: 1; margin-bottom: 1rem; }
        .ui-preview-head p:not(.eyebrow) { max-width: 740px; color: var(--charcoal); line-height: 1.75; }
        .ui-preview-head aside { padding: 22px; background: #fff; border-left: 3px solid var(--gold); box-shadow: var(--shadow-soft); }
        .ui-preview-head aside strong, .ui-preview-head aside span, .ui-preview-head aside a { display: block; }
        .ui-preview-head aside strong { margin-bottom: 8px; color: var(--deep); font-size: .78rem; letter-spacing: .12em; text-transform: uppercase; }
        .ui-preview-head aside span { color: var(--charcoal); font-size: .92rem; line-height: 1.65; }
        .ui-preview-head aside a { margin-top: 14px; color: var(--gold); font-size: .78rem; font-weight: 600; letter-spacing: .1em; text-decoration: none; text-transform: uppercase; }
        .ui-preview-compare, .ui-preview-single { width: min(1180px,100%); margin: 0 auto; }
        .ui-preview-compare { display: grid; grid-template-columns: .85fr 1.15fr; gap: 18px; align-items: start; }
        .ui-preview-label { margin-bottom: 10px; color: var(--taupe); font-size: .74rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
        .ui-preview-current { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 12px; }
        .ui-preview-current article { min-height: 174px; padding: 22px; background: #fff; border: 1px solid rgba(26,25,22,.09); box-shadow: 0 8px 24px rgba(18,17,15,.05); display: flex; flex-direction: column; }
        .ui-preview-current small, .ui-preview-bento-card small, .ui-preview-guide small, .ui-preview-course small, .ui-preview-guide-card small { display: block; margin-bottom: .55rem; color: var(--gold); font-size: .65rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .ui-preview-current h3 { margin: 0 0 .6rem; color: var(--deep); font-family: var(--font-serif); font-size: 1.36rem; font-weight: 500; line-height: 1.1; }
        .ui-preview-current p { color: var(--taupe); font-size: .88rem; line-height: 1.6; }
        .ui-preview-current span { margin-top: auto; padding-top: 16px; color: var(--gold); font-size: .68rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
        .ui-preview-bento { display: grid; grid-template-columns: minmax(280px,1.22fr) minmax(180px,.78fr) minmax(180px,.78fr); grid-auto-rows: minmax(166px,auto); gap: 12px; }
        .ui-preview-bento-card { position: relative; min-height: 166px; overflow: hidden; display: flex; align-items: flex-end; padding: 24px; background: #fff; border: 1px solid rgba(26,25,22,.09); box-shadow: var(--shadow-soft); color: var(--deep); text-decoration: none; transition: transform .25s var(--ease-luxury), border-color .25s var(--ease-luxury); }
        .ui-preview-bento-card:hover { transform: translateY(-3px); border-color: rgba(184,151,60,.42); }
        .ui-preview-bento-card--lead { grid-row: span 2; min-height: 344px; color: #fff; background: var(--deep); }
        .ui-preview-bento-card--wide { grid-column: span 2; color: #fff; background: linear-gradient(135deg,var(--pine),var(--pine-mid)); }
        .ui-preview-shade { position: absolute; inset: 0; background: linear-gradient(to top,rgba(8,8,7,.84),rgba(8,8,7,.14)); opacity: 0; }
        .ui-preview-bento-card--lead .ui-preview-shade, .ui-preview-bento-card--wide .ui-preview-shade, .ui-preview-guide--featured .ui-preview-shade { opacity: 1; }
        .ui-preview-card-copy { position: relative; z-index: 1; display: block; }
        .ui-preview-bento-card--lead small, .ui-preview-bento-card--wide small, .ui-preview-guide--featured small { color: var(--gold-light); }
        .ui-preview-bento-card strong, .ui-preview-guide strong, .ui-preview-course strong { display: block; color: inherit; font-family: var(--font-serif); font-size: clamp(1.28rem,2.2vw,1.85rem); font-weight: 500; line-height: 1.08; }
        .ui-preview-bento-card em, .ui-preview-guide em, .ui-preview-course em { display: block; margin-top: .7rem; color: inherit; font-size: .9rem; font-style: normal; line-height: 1.62; opacity: .78; }
        .ui-preview-pwap-strip { width: min(1180px,100%); margin: 0 auto; overflow-x: auto; overflow-y: hidden; -ms-overflow-style: none; scrollbar-width: none; overscroll-behavior-x: contain; touch-action: pan-x; cursor: grab; background: transparent; }
        .ui-preview-pwap-strip:active { cursor: grabbing; }
        .ui-preview-pwap-strip::-webkit-scrollbar { display: none; }
        .ui-preview-pwap-strip__track { display: flex; gap: 10px; width: max-content; padding: 0; }
        .ui-preview-pwap-strip figure { position: relative; flex: 0 0 352px; height: 248px; overflow: hidden; margin: 0; border: 0; background: var(--deep); color: #fff; padding: 0; }
        .ui-preview-pwap-strip figure.is-portrait { flex-basis: 228px; }
        .ui-preview-note { width: min(1180px,100%); margin: 14px auto 0; color: var(--taupe); font-size: .9rem; line-height: 1.65; }
        .ui-preview-lightbox { position: fixed; inset: 0; z-index: 1000; display: grid; grid-template-columns: 96px minmax(0,1fr) 96px; align-items: center; gap: 16px; padding: 28px; background: rgba(8,8,7,.92); }
        .ui-preview-lightbox figure { margin: 0; min-width: 0; }
        .ui-preview-lightbox figure div { position: relative; height: min(76vh,760px); }
        .ui-preview-lightbox figcaption { margin-top: 12px; color: rgba(255,255,255,.78); text-align: center; font-size: .92rem; }
        .ui-preview-lightbox button { min-height: 54px; border: 1px solid rgba(255,255,255,.24); background: rgba(255,255,255,.08); color: #fff; cursor: pointer; font-size: .74rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
        .ui-preview-close { position: absolute; top: 18px; right: 18px; min-height: 0 !important; padding: 11px 14px; }
        .ui-preview-guides, .ui-preview-course-grid { width: min(1180px,100%); margin: 0 auto; }
        .ui-preview-tabs { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 12px; }
        .ui-preview-tabs button { min-height: 50px; border: 1px solid rgba(26,25,22,.14); background: #fff; color: var(--charcoal); cursor: pointer; padding: 9px 14px; font-size: .82rem; font-weight: 500; text-align: center; }
        .ui-preview-tabs button[aria-pressed="true"] { background: var(--pine); border-color: var(--pine); color: #fff; }
        .ui-preview-category-note { margin: 0 0 18px; color: var(--taupe); font-size: .9rem; line-height: 1.65; }
        .ui-preview-category-note strong { color: var(--charcoal); }
        .ui-preview-guides-stack { display: grid; gap: 22px; }
        .ui-preview-rail-block { padding: clamp(18px,2.8vw,26px); background: rgba(255,255,255,.82); border: 1px solid rgba(26,25,22,.08); box-shadow: var(--shadow-soft); }
        .ui-preview-rail-head { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; margin-bottom: 14px; }
        .ui-preview-rail-head h3 { margin: 0; color: var(--deep); font-size: clamp(1.55rem,2.8vw,2.2rem); line-height: 1.02; }
        .ui-preview-rail-meta { display: flex; align-items: center; gap: 14px; flex: 0 0 auto; }
        .ui-preview-rail-meta span { color: var(--taupe); font-size: .8rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
        .ui-preview-rail-hint { color: var(--taupe); font-size: .76rem; letter-spacing: .12em; text-transform: uppercase; opacity: .82; white-space: nowrap; }
        .ui-preview-guide-rail { display: flex; gap: 12px; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; -ms-overflow-style: none; padding: 0 0 4px; cursor: grab; scroll-behavior: smooth; }
        .ui-preview-guide-rail::-webkit-scrollbar { display: none; }
        .ui-preview-guide-rail.is-dragging { cursor: grabbing; scroll-behavior: auto; }
        .ui-preview-guide-card { flex: 0 0 324px; min-width: 0; background: #fff; border: 1px solid rgba(26,25,22,.08); box-shadow: 0 10px 26px rgba(18,17,15,.05); color: var(--deep); text-decoration: none; overflow: hidden; }
        .ui-preview-guide-card__image { position: relative; display: block; height: 208px; background: var(--linen); }
        .ui-preview-guide-card__body { display: block; padding: 20px 20px 22px; min-width: 0; }
        .ui-preview-guide-card strong { display: block; color: inherit; font-family: var(--font-serif); font-size: clamp(1.28rem,1.8vw,1.56rem); font-weight: 500; line-height: 1.08; }
        .ui-preview-guide-card em { display: block; margin-top: .72rem; color: var(--taupe); font-size: .86rem; font-style: normal; line-height: 1.58; }
        .ui-preview-guide-empty { padding: 28px; background: #fff; border: 1px dashed rgba(26,25,22,.16); }
        .ui-preview-guide-empty strong { display: block; margin-bottom: .6rem; color: var(--deep); font-family: var(--font-serif); font-size: 1.4rem; font-weight: 500; }
        .ui-preview-guide-empty p { margin: 0; color: var(--taupe); line-height: 1.65; }
        .ui-preview-guide-decision { max-width: 760px; padding: clamp(24px,4vw,38px); background: #fff; border-left: 3px solid var(--gold); box-shadow: var(--shadow-soft); }
        .ui-preview-guide-decision h3 { margin: 0 0 1rem; color: var(--deep); font-family: var(--font-serif); font-size: clamp(1.7rem,3vw,2.4rem); font-weight: 500; line-height: 1.06; }
        .ui-preview-guide-decision p:not(.eyebrow) { color: var(--charcoal); font-size: .98rem; line-height: 1.75; }
        .ui-preview-guide-decision p + p { margin-top: .75rem; }
        .ui-preview-guide-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; align-items: stretch; }
        .ui-preview-guide { min-width: 0; min-height: 0; display: grid; grid-template-rows: 240px minmax(0,1fr); background: #fff; border: 1px solid rgba(26,25,22,.08); box-shadow: var(--shadow-soft); color: var(--deep); text-decoration: none; overflow: hidden; }
        .ui-preview-guide-thumb { position: relative; min-height: 0; background: var(--linen); }
        .ui-preview-guide-body { display: flex; flex-direction: column; padding: 24px; min-width: 0; }
        .ui-preview-guide strong { font-size: clamp(1.34rem,1.8vw,1.72rem); }
        .ui-preview-guide em { color: var(--taupe); font-size: .94rem; line-height: 1.68; }
        .ui-preview-course-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; }
        .ui-preview-course-grid--muted { opacity: .72; }
        .ui-preview-course { overflow: hidden; background: #fff; border: 1px solid rgba(26,25,22,.08); box-shadow: var(--shadow-soft); color: var(--deep); text-decoration: none; }
        .ui-preview-course-image { position: relative; display: block; height: 190px; background: var(--linen); }
        .ui-preview-course-body { display: block; padding: 22px; }
        .ui-preview-course ul { display: grid; gap: 7px; margin: 1rem 0 0; padding: 0; list-style: none; }
        .ui-preview-course li { color: var(--taupe); font-size: .82rem; line-height: 1.45; }
        .ui-preview-course li::before { content: ""; display: inline-block; width: 5px; height: 5px; margin-right: 8px; background: var(--gold); transform: rotate(45deg) translateY(-1px); }
        .ui-preview-final { padding: clamp(60px,8vw,104px) clamp(20px,5vw,60px); background: linear-gradient(135deg,var(--pine),var(--pine-mid)); color: var(--cream); }
        .ui-preview-final h2, .ui-preview-final p { width: min(960px,100%); margin-left: auto; margin-right: auto; }
        .ui-preview-final h2 { color: #fff; font-size: clamp(2rem,4vw,3.6rem); line-height: 1; margin-bottom: 1.4rem; }
        .ui-preview-final p:not(.eyebrow) { color: rgba(255,255,255,.78); line-height: 1.8; }
        @media (max-width: 980px) {
          .ui-preview-head, .ui-preview-compare, .ui-preview-current, .ui-preview-course-grid, .ui-preview-bento, .ui-preview-guide-grid { grid-template-columns: 1fr; }
          .ui-preview-bento-card, .ui-preview-bento-card--lead, .ui-preview-bento-card--wide, .ui-preview-guide--featured { grid-column: auto; grid-row: auto; min-height: 220px; }
          .ui-preview-lightbox { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .ui-preview-hero { min-height: 82vh; padding: calc(var(--nav-h) + 48px) 20px 52px; }
          .ui-preview-hero h1 { font-size: clamp(2.2rem,12vw,3.35rem); }
          .ui-preview-current { grid-template-columns: 1fr; }
          .ui-preview-pwap-strip figure { flex-basis: 78vw; height: 230px; }
          .ui-preview-pwap-strip figure.is-portrait { flex-basis: 58vw; }
          .ui-preview-tabs { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .ui-preview-tabs button { min-width: 0; min-height: 58px; padding-left: 8px; padding-right: 8px; font-size: .78rem; line-height: 1.25; }
          .ui-preview-rail-head { align-items: flex-start; flex-direction: column; }
          .ui-preview-rail-meta { width: 100%; justify-content: space-between; }
          .ui-preview-rail-hint { font-size: .72rem; }
          .ui-preview-guide-card { flex-basis: 76vw; }
          .ui-preview-guide-card__image { height: 188px; }
          .ui-preview-guide { grid-template-columns: none; grid-template-rows: 208px minmax(0,1fr); }
          .ui-preview-guide-body { padding: 20px; }
        }
      `}</style>
    </>
  )
}

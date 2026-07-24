'use client'

function scrollToHash(hash) {
  const id = hash.replace('#', '')
  const target = document.getElementById(id)

  if (!target) {
    window.location.hash = hash
    return
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', hash)
}

export default function GuidesHeroAnchors({ reviewsLabel, articlesLabel }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '1.75rem' }}>
      <a
        href="#course-reviews"
        className="btn btn--gold"
        onClick={(event) => {
          event.preventDefault()
          scrollToHash('#course-reviews')
        }}
      >
        {reviewsLabel}
      </a>
      <a
        href="#guides-articles"
        className="btn btn--outline-gold"
        onClick={(event) => {
          event.preventDefault()
          scrollToHash('#guides-articles')
        }}
      >
        {articlesLabel}
      </a>
    </div>
  )
}

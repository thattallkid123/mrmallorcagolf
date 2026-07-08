import siteSocialProof from '../data/site-social-proof.json' with { type: 'json' }

const {
  reviewRating: REVIEW_RATING,
  reviewCount: REVIEW_COUNT,
  reviewUrl: REVIEW_URL,
} = siteSocialProof

function Stars({ rating = 5, size = 14 }) {
  const full = Math.floor(rating)
  const partial = rating - full
  const empty = 5 - full - (partial > 0 ? 1 : 0)

  return (
    <span className="review-stars" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <StarIcon key={`f${i}`} fill={1} size={size} />
      ))}
      {partial > 0 && <StarIcon key="p" fill={partial} size={size} />}
      {Array.from({ length: empty }).map((_, i) => (
        <StarIcon key={`e${i}`} fill={0} size={size} />
      ))}
    </span>
  )
}

function StarIcon({ fill, size }) {
  const id = `review-grad-${Math.round(fill * 100)}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {fill > 0 && fill < 1 && (
        <defs>
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop offset={`${fill * 100}%`} stopColor="#B8973C" />
            <stop offset={`${fill * 100}%`} stopColor="#dcdce6" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2l2.9 6.26 6.6.95-4.75 4.88 1.12 6.91L12 17.77l-5.87 3.23 1.12-6.91L2.5 9.21l6.6-.95z"
        fill={fill === 1 ? '#B8973C' : fill === 0 ? '#dcdce6' : `url(#${id})`}
      />
    </svg>
  )
}

export default function ReviewBadge({ variant = 'compact', theme = 'dark' }) {
  const ratingLabel = REVIEW_RATING.toFixed(1)

  if (variant === 'mini') {
    return (
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="review-badge review-badge--mini"
        aria-label={`Rated ${ratingLabel} out of 5 on Google, ${REVIEW_COUNT} reviews`}
      >
        <Stars rating={REVIEW_RATING} size={11} />
        <span className="review-badge__score">{ratingLabel}</span>
        <span className="review-badge__brand">Google</span>
        <span className="review-badge__divider">·</span>
        <span className="review-badge__count">{REVIEW_COUNT} reviews</span>
      </a>
    )
  }

  if (variant === 'footer-block') {
    return (
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="review-footer-block"
        aria-label={`Rated ${ratingLabel} out of 5 by golfers on Google, ${REVIEW_COUNT} reviews`}
      >
        <p className="review-footer-block__eyebrow">Rated by golfers on Google</p>
        <div className="review-footer-block__rating">
          <Stars rating={REVIEW_RATING} size={22} />
          <span className="review-footer-block__score">{ratingLabel}</span>
          <span className="review-footer-block__out-of">/ 5</span>
        </div>
        <p className="review-footer-block__count">{REVIEW_COUNT} reviews</p>
      </a>
    )
  }

  if (variant === 'text') {
    return (
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`review-text review-text--${theme}`}
        aria-label={`Rated ${ratingLabel} out of 5 by golfers on Google, ${REVIEW_COUNT} reviews`}
      >
        <Stars rating={REVIEW_RATING} size={15} />
        <span className="review-text__line">
          Rated <span className="review-text__score">{ratingLabel}</span> by golfers on{' '}
          <span className="review-text__brand">Google</span>
          <span className="review-text__count"> · {REVIEW_COUNT} reviews</span>
        </span>
      </a>
    )
  }

  return (
    <a
      href={REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="review-badge review-badge--compact"
      aria-label={`Rated ${ratingLabel} out of 5 on Google, ${REVIEW_COUNT} reviews`}
    >
      <Stars rating={REVIEW_RATING} size={14} />
      <span className="review-badge__score">{ratingLabel}</span>
      <span className="review-badge__brand">on Google</span>
      <span className="review-badge__divider">·</span>
      <span className="review-badge__count">{REVIEW_COUNT} reviews</span>
    </a>
  )
}

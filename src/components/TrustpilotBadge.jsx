import Link from 'next/link'

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/mrmallorcagolf.com'
// Update these manually when new reviews come in
const TP_RATING = 4.4
const TP_COUNT = 6

function Stars({ rating = 4.4, size = 14 }) {
  const full = Math.floor(rating)
  const partial = rating - full
  const empty = 5 - full - (partial > 0 ? 1 : 0)

  return (
    <span className="tp-stars" aria-label={`${rating} out of 5 stars`}>
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
  const id = `tp-grad-${Math.round(fill * 100)}`
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
            <stop offset={`${fill * 100}%`} stopColor="#00b67a" />
            <stop offset={`${fill * 100}%`} stopColor="#dcdce6" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2l2.9 6.26 6.6.95-4.75 4.88 1.12 6.91L12 17.77l-5.87 3.23 1.12-6.91L2.5 9.21l6.6-.95z"
        fill={fill === 1 ? '#00b67a' : fill === 0 ? '#dcdce6' : `url(#${id})`}
      />
    </svg>
  )
}

export default function TrustpilotBadge({ variant = 'compact', theme = 'dark' }) {
  if (variant === 'mini') {
    return (
      <a
        href={TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="tp-badge tp-badge--mini"
        aria-label={`${TP_RATING} out of 5 on Trustpilot`}
      >
        <Stars rating={TP_RATING} size={11} />
        <span className="tp-badge__score">{TP_RATING}</span>
        <span className="tp-badge__brand">Trustpilot</span>
      </a>
    )
  }

  if (variant === 'footer-block') {
    return (
      <a
        href={TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="tp-footer-block"
        aria-label={`Rated ${TP_RATING} out of 5 on Trustpilot, ${TP_COUNT} reviews`}
      >
        <p className="tp-footer-block__eyebrow">Rated by our guests</p>
        <div className="tp-footer-block__rating">
          <Stars rating={TP_RATING} size={22} />
          <span className="tp-footer-block__score">{TP_RATING}</span>
          <span className="tp-footer-block__out-of">/ 5</span>
        </div>
        <p className="tp-footer-block__count">
          {TP_COUNT} reviews on <span className="tp-footer-block__brand">Trustpilot</span>
        </p>
      </a>
    )
  }

  if (variant === 'text') {
    return (
      <a
        href={TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`tp-text tp-text--${theme}`}
        aria-label={`Rated ${TP_RATING} out of 5 on Trustpilot, ${TP_COUNT} reviews`}
      >
        <Stars rating={TP_RATING} size={15} />
        <span className="tp-text__line">
          <span className="tp-text__score">{TP_RATING}</span> on{' '}
          <span className="tp-text__brand">Trustpilot</span>
          <span className="tp-text__count"> · {TP_COUNT} reviews</span>
        </span>
      </a>
    )
  }

  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="tp-badge tp-badge--compact"
      aria-label={`Rated ${TP_RATING} out of 5 on Trustpilot, ${TP_COUNT} reviews`}
    >
      <Stars rating={TP_RATING} size={14} />
      <span className="tp-badge__score">{TP_RATING}</span>
      <span className="tp-badge__divider">·</span>
      <span className="tp-badge__count">{TP_COUNT} reviews</span>
      <span className="tp-badge__divider">·</span>
      <span className="tp-badge__brand">Trustpilot</span>
    </a>
  )
}

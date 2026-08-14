import siteSocialProof from '../data/site-social-proof.json' with { type: 'json' }

const {
  reviewRating: REVIEW_RATING,
  reviewCount: REVIEW_COUNT,
  reviewUrl: REVIEW_URL,
} = siteSocialProof

const REVIEW_BADGE_TEXT = {
  en: {
    ratedByGolfers: 'Rated by golfers on Google',
    ratedByGolfersAriaLabel: 'Rated {rating} out of 5 by golfers on Google, {count} reviews',
    ratedAriaLabel: 'Rated {rating} out of 5 on Google, {count} reviews',
    ratedLineBefore: 'Rated ',
    ratedLineAfter: ' by golfers on Google',
    onGoogle: 'on Google',
    reviews: 'reviews',
  },
  de: {
    ratedByGolfers: 'Von Golfern auf Google bewertet',
    ratedByGolfersAriaLabel: 'Mit {rating} von 5 Sternen von Golfern auf Google bewertet, {count} Bewertungen',
    ratedAriaLabel: 'Mit {rating} von 5 Sternen auf Google bewertet, {count} Bewertungen',
    ratedLineBefore: 'Mit ',
    ratedLineAfter: ' Sternen von Golfern auf Google bewertet',
    onGoogle: 'auf Google',
    reviews: 'Bewertungen',
  },
  es: {
    ratedByGolfers: 'Puntuado por golfistas en Google',
    ratedByGolfersAriaLabel: 'Puntuado con {rating} de 5 estrellas por golfistas en Google, {count} reseñas',
    ratedAriaLabel: 'Puntuado con {rating} de 5 estrellas en Google, {count} reseñas',
    ratedLineBefore: 'Puntuado con ',
    ratedLineAfter: ' estrellas por golfistas en Google',
    onGoogle: 'en Google',
    reviews: 'reseñas',
  },
  fr: {
    ratedByGolfers: 'Noté par les golfeurs sur Google',
    ratedByGolfersAriaLabel: 'Noté {rating} sur 5 par les golfeurs sur Google, {count} avis',
    ratedAriaLabel: 'Noté {rating} sur 5 sur Google, {count} avis',
    ratedLineBefore: 'Noté ',
    ratedLineAfter: ' sur 5 par les golfeurs sur Google',
    onGoogle: 'sur Google',
    reviews: 'avis',
  },
  nl: {
    ratedByGolfers: 'Beoordeeld door golfspelers op Google',
    ratedByGolfersAriaLabel: 'Beoordeeld met {rating} van 5 sterren door golfspelers op Google, {count} recensies',
    ratedAriaLabel: 'Beoordeeld met {rating} van 5 sterren op Google, {count} recensies',
    ratedLineBefore: 'Beoordeeld met ',
    ratedLineAfter: ' sterren door golfspelers op Google',
    onGoogle: 'op Google',
    reviews: 'recensies',
  },
  sv: {
    ratedByGolfers: 'Betygsatt av golfspelare på Google',
    ratedByGolfersAriaLabel: 'Betygsatt {rating} av 5 stjärnor av golfspelare på Google, {count} recensioner',
    ratedAriaLabel: 'Betygsatt {rating} av 5 stjärnor på Google, {count} recensioner',
    ratedLineBefore: 'Betygsatt ',
    ratedLineAfter: ' av 5 stjärnor av golfspelare på Google',
    onGoogle: 'på Google',
    reviews: 'recensioner',
  },
  zh: {
    ratedByGolfers: '高尔夫球手在 Google 上的评分',
    ratedByGolfersAriaLabel: '在 Google 上获得{rating}颗星（满分5颗），共{count}条高尔夫球手的评价',
    ratedAriaLabel: '在 Google 上获得{rating}颗星（满分5颗），共{count}条评价',
    ratedLineBefore: '',
    ratedLineAfter: '，高尔夫球手在 Google 上的评分',
    onGoogle: '在 Google 上',
    reviews: '评价',
  },
}

function getReviewText(locale = 'en') {
  return REVIEW_BADGE_TEXT[locale] || REVIEW_BADGE_TEXT.en
}

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

export default function ReviewBadge({ variant = 'compact', theme = 'dark', locale = 'en' }) {
  const ratingLabel = REVIEW_RATING.toFixed(1)
  const text = getReviewText(locale)

  if (variant === 'mini') {
    return (
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="review-badge review-badge--mini"
        aria-label={text.ratedAriaLabel.replace('{rating}', ratingLabel).replace('{count}', REVIEW_COUNT)}
      >
        <Stars rating={REVIEW_RATING} size={11} />
        <span className="review-badge__score">{ratingLabel}</span>
        <span className="review-badge__brand">Google</span>
        <span className="review-badge__divider">·</span>
        <span className="review-badge__count">{REVIEW_COUNT} {text.reviews}</span>
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
        aria-label={text.ratedByGolfersAriaLabel.replace('{rating}', ratingLabel).replace('{count}', REVIEW_COUNT)}
      >
        <p className="review-footer-block__eyebrow">{text.ratedByGolfers}</p>
        <div className="review-footer-block__rating">
          <Stars rating={REVIEW_RATING} size={22} />
          <span className="review-footer-block__score">{ratingLabel}</span>
          <span className="review-footer-block__out-of">/ 5</span>
        </div>
        <p className="review-footer-block__count">{REVIEW_COUNT} {text.reviews}</p>
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
        aria-label={text.ratedByGolfersAriaLabel.replace('{rating}', ratingLabel).replace('{count}', REVIEW_COUNT)}
      >
        <Stars rating={REVIEW_RATING} size={15} />
        <span className="review-text__line">
          {text.ratedLineBefore}<span className="review-text__score">{ratingLabel}</span>{text.ratedLineAfter}
          <span className="review-text__count"> · {REVIEW_COUNT} {text.reviews}</span>
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
      aria-label={text.ratedAriaLabel.replace('{rating}', ratingLabel).replace('{count}', REVIEW_COUNT)}
    >
      <Stars rating={REVIEW_RATING} size={14} />
      <span className="review-badge__score">{ratingLabel}</span>
      <span className="review-badge__brand">{text.onGoogle}</span>
      <span className="review-badge__divider">·</span>
      <span className="review-badge__count">{REVIEW_COUNT} {text.reviews}</span>
    </a>
  )
}

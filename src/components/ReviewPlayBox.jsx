import Image from 'next/image'
import Link from 'next/link'
import { localizeAlt } from '../lib/alt-text'

// End-of-review box: the line, a client's own words, and a photo from that course when one is cleared.
export default function ReviewPlayBox({ box, playHref, planHref, locale = 'en' }) {
  return (
    <div className="post-cta review-play">
      <div className={`review-play__row${box.photo ? '' : ' review-play__row--text-only'}`}>
        {box.photo ? (
          <div className="review-play__photo">
            <Image
              src={box.photo.src}
              alt={localizeAlt(box.photo.alt, locale)}
              fill
              sizes="110px"
              className="review-play__img"
              style={{ objectPosition: box.photo.position || 'center center' }}
            />
          </div>
        ) : null}
        <p className="post-cta__text">{box.heading}</p>
      </div>
      <p className="review-play__quote">
        &ldquo;{box.quote}&rdquo; &middot; {box.credit}
      </p>
      <div className="post-cta__actions">
        <a href={playHref} className="post-cta__button">{box.button}</a>
      </div>
      {locale === 'en' ? (
        <p className="post-cta__secondary">
          Still narrowing down the trip? Start with <Link href={planHref} className="post-cta__secondary-link">Plan Your Trip</Link> and send me your dates, hotel area, handicap, and shortlist.
        </p>
      ) : null}
    </div>
  )
}

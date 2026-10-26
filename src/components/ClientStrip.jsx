import Image from 'next/image'
import Link from 'next/link'
import { localizeAlt } from '../lib/alt-text'
import { PwapPhotoStrip } from './PwapCarousels'

// Client photos with one client's own words. Since 2026-10-26 the homepage shows the same scrolling
// strip as Play With A Pro (one photo list, src/lib/pwap-photos.js) instead of three fixed photos.
export default function ClientStrip({ eyebrow, quote, credit, linkLabel, linkHref, photos, locale = 'en' }) {
  const photosLoop = [...photos, ...photos]
  return (
    <section className="client-strip" aria-label={eyebrow}>
      <p className="client-strip__eyebrow">{eyebrow}</p>
      <PwapPhotoStrip label={eyebrow}>
        {photosLoop.map((photo, index) => (
          <figure
            key={`${photo.src}-${index}`}
            className={`pwap-day-strip__card${photo.variant === 'portrait' ? ' pwap-day-strip__card--portrait' : ''}`}
          >
            <Image
              src={photo.src}
              alt={localizeAlt(photo.alt, locale)}
              fill
              sizes="(max-width: 920px) 78vw, 360px"
              style={{ objectFit: 'cover', objectPosition: photo.position || 'center center' }}
            />
          </figure>
        ))}
      </PwapPhotoStrip>
      <blockquote className="client-strip__quote">
        <p>&ldquo;{quote}&rdquo;</p>
        <footer>
          {credit} &middot; <Link href={linkHref}>{linkLabel}</Link>
        </footer>
      </blockquote>
    </section>
  )
}

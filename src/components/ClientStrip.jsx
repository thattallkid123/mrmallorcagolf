import Image from 'next/image'
import Link from 'next/link'
import { localizeAlt } from '../lib/alt-text'

// A short row of real client photos with one client's own words. Used on the homepage; the
// Play With A Pro page uses its scrolling photo strip instead, so the two never repeat each other.
export default function ClientStrip({ eyebrow, quote, credit, linkLabel, linkHref, photos, locale = 'en' }) {
  return (
    <section className="client-strip" aria-label={eyebrow}>
      <p className="client-strip__eyebrow">{eyebrow}</p>
      <div className="client-strip__grid">
        {photos.map((photo) => (
          <div key={photo.src} className="client-strip__photo">
            <Image
              src={photo.src}
              alt={localizeAlt(photo.alt, locale)}
              fill
              sizes="(max-width: 768px) 30vw, 290px"
              className="client-strip__img"
              style={{ objectPosition: photo.position || 'center center' }}
            />
          </div>
        ))}
      </div>
      <blockquote className="client-strip__quote">
        <p>&ldquo;{quote}&rdquo;</p>
        <footer>
          {credit} &middot; <Link href={linkHref}>{linkLabel}</Link>
        </footer>
      </blockquote>
    </section>
  )
}

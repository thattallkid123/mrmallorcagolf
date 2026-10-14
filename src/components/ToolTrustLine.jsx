import ReviewBadge from './ReviewBadge'

export default function ToolTrustLine({ locale = 'en' }) {
  return (
    <div className="tool-trust-line">
      <ReviewBadge variant="mini" locale={locale} />
      <p className="tool-trust-line__byline">
        Built by Andy Griffiths · UK PGA Advanced Professional, based in Mallorca
      </p>
    </div>
  )
}

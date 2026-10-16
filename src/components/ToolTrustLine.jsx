import ReviewBadge from './ReviewBadge'

const REVIEWED = {
  "en": "Tool reviewed: 16 October 2026",
  "de": "Tool geprüft: 16. Oktober 2026",
  "es": "Herramienta revisada: 16 de octubre de 2026",
  "fr": "Outil vérifié le 16 octobre 2026",
  "nl": "Tool gecontroleerd: 16 oktober 2026",
  "sv": "Verktyget granskat: 16 oktober 2026",
  "zh": "工具检查日期：2026年10月16日"
}

export default function ToolTrustLine({ locale = 'en' }) {
  return (
    <div className="tool-trust-line">
      {locale === 'en' && <ReviewBadge variant="mini" locale={locale} />}
      {locale === 'en' && <p className="tool-trust-line__byline">
        Built by Andy Griffiths · UK PGA Advanced Professional, based in Mallorca
      </p>}
      <p className="tool-trust-line__byline"><time dateTime="2026-10-16">{REVIEWED[locale] || REVIEWED.en}</time></p>
    </div>
  )
}

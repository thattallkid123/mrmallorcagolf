const LABELS = {
  en: 'On this page', de: 'Auf dieser Seite', es: 'En esta página',
  fr: 'Sur cette page', nl: 'Op deze pagina', sv: 'På den här sidan', zh: '本页内容',
}

export default function GuideSectionNav({ blocks, locale = 'en' }) {
  const headings = blocks.map((block, index) => ({ ...block, index })).filter(block => block.type === 'heading')
  if (headings.length < 4) return null
  const label = LABELS[locale] || LABELS.en
  return <details className="guide-section-nav">
    <summary>{label}</summary>
    <nav aria-label={label}>
      <ul>{headings.map(heading => <li key={heading.index}>
        <a href={`#guide-section-${heading.index}`}>{heading.text}</a>
      </li>)}</ul>
    </nav>
  </details>
}

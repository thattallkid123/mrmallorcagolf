import { buildLocalePath } from '../../lib/site'

const ANCHOR_PATTERN = /<a\s+href=(["'])(.*?)\1>(.*?)<\/a>/g

function localizeHref(href, locale) {
  if (!href || locale === 'en') return href
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href
  return buildLocalePath(href, locale)
}

export default function InlineRichText({ text, locale = 'en' }) {
  if (!text || !text.includes('<a')) return text

  const parts = []
  let lastIndex = 0

  for (const match of text.matchAll(ANCHOR_PATTERN)) {
    const [fullMatch, , href, label] = match
    const index = match.index

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index))
    }

    parts.push(
      <a key={`${href}-${index}`} href={localizeHref(href, locale)}>
        {label}
      </a>
    )

    lastIndex = index + fullMatch.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

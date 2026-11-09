import { localizeGuideHref as localizeHref } from '../../../lib/guide-link'
import { bindTail } from '../../../lib/bind-tail'

const ANCHOR_PATTERN = /<a\s+href=(["'])(.*?)\1>(.*?)<\/a>/g


export default function InlineRichText({ text, locale = 'en' }) {
  if (!text || !text.includes('<a')) return bindTail(text)

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
    parts.push(bindTail(text.slice(lastIndex), 0))
  }

  return parts
}

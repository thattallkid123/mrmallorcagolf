// Keeps the last two words of a sentence together with a no-break space, so a paragraph can never end
// on one lone word. `text-wrap: pretty` does most of this in the browser; this covers the cases it misses
// (long guide paragraphs at phone width). Short text and long last words are left alone.
// `minLength` is 40 for a whole paragraph. After a link, the trailing piece is short on its own, so it is called with 0.
const NBSP = String.fromCharCode(160)

export function bindTail(text, minLength = 40) {
  if (typeof text !== 'string') return text
  const body = text.trimEnd()
  if (body.length < minLength) return text
  const lastSpace = body.lastIndexOf(' ')
  if (lastSpace < 0) return text
  // a single word right after a link: keep it with the link's last word
  if (lastSpace === 0) return body.length - 1 <= 16 ? NBSP + body.slice(1) + text.slice(body.length) : text
  const lastWord = body.slice(lastSpace + 1)
  const prevSpace = body.lastIndexOf(' ', lastSpace - 1)
  const prevWord = body.slice(prevSpace + 1, lastSpace)
  if (lastWord.length > 16 || prevWord.length + lastWord.length > 26) return text
  return body.slice(0, lastSpace) + NBSP + lastWord + text.slice(body.length)
}

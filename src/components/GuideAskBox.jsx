import Link from 'next/link'

// "Not sure which of these suits your game?" box near the top of the best-courses guide.
export default function GuideAskBox({ text, button, href }) {
  return (
    <aside className="guide-ask">
      <p className="guide-ask__text">{text}</p>
      <Link href={href} className="guide-ask__button">{button}</Link>
    </aside>
  )
}

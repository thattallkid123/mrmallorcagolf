import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'
import PostLayout from './PostLayout'

function normalizeContainerStyle(style, fallback) {
  const merged = style || fallback
  if (!merged) return merged
  if (merged.aspectRatio === '21/9' || merged.aspectRatio === '16/9' || merged.aspectRatio === '15/8') {
    return { ...merged, aspectRatio: '5/4' }
  }
  return merged
}

function getImagePresentation(block, imageOrdinal) {
  if (block.presentation) return block.presentation
  return 'full'
}

function renderBlock(block, index, imageOrdinal) {
  if (block.type === 'image') {
    const presentation = getImagePresentation(block, imageOrdinal)
    return (
      <figure
        key={`${block.src}-${index}`}
        className={`post-media${block.caption ? '' : ' post-media--plain'}${
          presentation === 'half-left' || presentation === 'half-right'
            ? ` post-media--half post-media--${presentation}`
            : ''
        }`}
      >
        <FillImageFrame
          src={block.src}
          alt={block.alt}
          priority={block.priority}
          containerStyle={normalizeContainerStyle(block.containerStyle, { borderRadius: 2, aspectRatio: '5/4' })}
          imageStyle={{ objectPosition: 'center center', ...block.imageStyle }}
        />
        {block.caption ? <figcaption className="post-media__caption">{block.caption}</figcaption> : null}
      </figure>
    )
  }

  if (block.type === 'heading') {
    return <h2 key={`${block.text}-${index}`}>{block.text}</h2>
  }

  if (block.type === 'paragraph') {
    return <p key={`${block.text.slice(0, 20)}-${index}`}>{block.text}</p>
  }

  if (block.type === 'pull') {
    return (
      <div key={`${block.text}-${index}`} className="post-pull">
        <p>"{block.text}"</p>
      </div>
    )
  }

  if (block.type === 'facts') {
    return (
      <div key={`facts-${index}`} className="post-fact">
        {block.items.map(([value, label]) => (
          <div key={label} className="post-fact__item">
            <span className="post-fact__val">{value}</span>
            <span className="post-fact__label">{label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (block.type === 'cta') {
    return (
      <div key={`cta-${index}`} className="post-cta">
        <p>{block.text}</p>
        <a href={block.href}>{block.linkLabel}</a>
      </div>
    )
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn(`[GuidePostView] Unknown block type "${block.type}" at index ${index}`)
  }

  return null
}

export default function GuidePostView({ locale = 'en', meta, blocks }) {
  const pageLang = locale === 'en' ? undefined : locale
  let imageOrdinal = 0

  return (
    <PageLayout lang={pageLang}>
      <RevealObserver />
      <PostLayout meta={meta} lang={pageLang}>
        {blocks.map((block, index) => {
          const currentImageOrdinal = block.type === 'image' ? imageOrdinal++ : null
          return renderBlock(block, index, currentImageOrdinal)
        })}
      </PostLayout>
    </PageLayout>
  )
}

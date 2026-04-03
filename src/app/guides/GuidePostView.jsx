import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'
import PostLayout from './PostLayout'

function normalizeContainerStyle(style, fallback) {
  const merged = style || fallback
  if (!merged) return merged
  if (merged.aspectRatio === '21/9' || merged.aspectRatio === '16/9') {
    return { ...merged, aspectRatio: '3/2' }
  }
  return merged
}

function renderBlock(block, index) {
  if (block.type === 'image') {
    return (
      <figure key={`${block.src}-${index}`} className={`post-media${block.caption ? '' : ' post-media--plain'}`}>
        <FillImageFrame
          src={block.src}
          alt={block.alt}
          priority={block.priority}
          containerStyle={normalizeContainerStyle(block.containerStyle, { borderRadius: 2, aspectRatio: '3/2' })}
          imageStyle={{ objectPosition: 'center 24%', ...block.imageStyle }}
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

  return null
}

export default function GuidePostView({ locale = 'en', meta, blocks }) {
  const pageLang = locale === 'en' ? undefined : locale

  return (
    <PageLayout lang={pageLang}>
      <RevealObserver />
      <PostLayout meta={meta} lang={pageLang}>
        {blocks.map((block, index) => renderBlock(block, index))}
      </PostLayout>
    </PageLayout>
  )
}

import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'
import PostLayout from './PostLayout'

function renderBlock(block, index) {
  if (block.type === 'paragraph') {
    return <p key={`${index}-${block.text.slice(0, 24)}`}>{block.text}</p>
  }

  if (block.type === 'heading') {
    return <h2 key={`${index}-${block.text}`}>{block.text}</h2>
  }

  if (block.type === 'subheading') {
    return <h3 key={`${index}-${block.text}`}>{block.text}</h3>
  }

  if (block.type === 'image') {
    const defaultStyle =
      block.fit === 'contain'
        ? { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '16/9', background: '#f5f5f5' }
        : { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '16/9' }

    return (
      <div key={`${index}-${block.src}`}>
        <FillImageFrame
          src={block.src}
          alt={block.alt}
          priority={block.priority}
          containerStyle={block.containerStyle || defaultStyle}
          imageStyle={
            block.fit === 'contain'
              ? { objectFit: 'contain', backgroundColor: '#f5f5f5' }
              : block.imageStyle
          }
        />
        {block.caption ? (
          <p
            style={{
              fontSize: block.captionSize || '0.85rem',
              fontStyle: 'italic',
              color: '#666',
              margin: block.captionMargin || '0.25rem 0 0 0',
            }}
          >
            {block.caption}
          </p>
        ) : null}
      </div>
    )
  }

  if (block.type === 'pull') {
    return (
      <div key={`${index}-${block.text}`} className="post-pull">
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

  if (block.type === 'list') {
    return (
      <ul key={`list-${index}`}>
        {block.items.map((item) => (
          <li key={item.label || item.text}>
            {item.label ? <strong>{item.label}</strong> : null}
            {item.label ? ' ' : null}
            {item.text}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'splitImages') {
    return (
      <div
        key={`split-${index}`}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}
      >
        {block.items.map((item) => (
          <div key={item.src}>
            <FillImageFrame
              src={item.src}
              alt={item.alt}
              containerStyle={{ position: 'relative', width: '100%', aspectRatio: item.aspectRatio || '4/3' }}
            />
            {item.caption ? (
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', margin: '0.25rem 0 0 0' }}>
                {item.caption}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    )
  }

  if (block.type === 'quoteBox') {
    return (
      <div
        key={`quote-${index}`}
        style={{ background: 'var(--cream)', border: '1px solid var(--linen)', padding: '28px 32px', margin: '2.5rem 0' }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'var(--deep)',
            lineHeight: 1.65,
            marginBottom: '1rem',
          }}
        >
          &ldquo;{block.text}&rdquo;
        </p>
        <p
          style={{
            fontSize: '9px',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            fontFamily: "'Jost',sans-serif",
            color: 'var(--taupe)',
            margin: 0,
          }}
        >
          {block.attribution}
        </p>
      </div>
    )
  }

  if (block.type === 'cta') {
    return (
      <div key={`cta-${index}`} className="post-cta">
        <p>{block.text}</p>
        {block.internal ? <Link href={block.href}>{block.linkLabel}</Link> : <a href={block.href}>{block.linkLabel}</a>}
      </div>
    )
  }

  return null
}

export default function GuideArticleView({ meta, blocks }) {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={meta}>{blocks.map((block, index) => renderBlock(block, index))}</PostLayout>
    </PageLayout>
  )
}

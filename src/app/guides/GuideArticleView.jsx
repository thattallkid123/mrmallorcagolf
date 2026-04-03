import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'
import PostLayout from './PostLayout'

function joinHref(locale, path) {
  if (!path || path.startsWith('http')) return path
  if (locale === 'en') return path
  return `/${locale}${path === '/' ? '' : path}`
}

function normalizeContainerStyle(style, fallback) {
  const merged = style || fallback
  if (!merged) return merged
  if (merged.aspectRatio === '21/9' || merged.aspectRatio === '16/9') {
    return { ...merged, aspectRatio: '15/8' }
  }
  return merged
}

function renderBlock(block, index, locale) {
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
        ? { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8', background: '#f5f5f5' }
        : { margin: '1.5rem 0 0.5rem 0', borderRadius: 2, aspectRatio: '15/8' }

    return (
      <div key={`${index}-${block.src}`}>
        <FillImageFrame
          src={block.src}
          alt={block.alt}
          priority={block.priority}
          containerStyle={normalizeContainerStyle(block.containerStyle, defaultStyle)}
          imageStyle={
            block.fit === 'contain'
              ? { objectFit: 'contain', backgroundColor: '#f5f5f5' }
              : { objectPosition: 'center 24%', ...block.imageStyle }
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
      <div key={`split-${index}`} className="post-split-media">
        {block.items.map((item) => (
          <div key={item.src}>
            <FillImageFrame
              src={item.src}
              alt={item.alt}
              containerStyle={normalizeContainerStyle({ position: 'relative', width: '100%', aspectRatio: item.aspectRatio || '4/3' })}
              imageStyle={item.imageStyle || { objectPosition: 'center 24%' }}
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
      <div key={`quote-${index}`} className="post-quote-box">
        <p className="post-quote-box__text">
          &ldquo;{block.text}&rdquo;
        </p>
        <p className="post-quote-box__attribution">
          {block.attribution}
        </p>
      </div>
    )
  }

  if (block.type === 'cta') {
    const href = joinHref(locale, block.href)
    return (
      <div key={`cta-${index}`} className="post-cta">
        <p>{block.text}</p>
        {block.internal ? <Link href={href}>{block.linkLabel}</Link> : <a href={href}>{block.linkLabel}</a>}
      </div>
    )
  }

  return null
}

export default function GuideArticleView({ meta, blocks, locale = 'en' }) {
  return (
    <PageLayout lang={locale === 'en' ? undefined : locale}>
      <RevealObserver />
      <PostLayout meta={meta} lang={locale}>
        {blocks.map((block, index) => renderBlock(block, index, locale))}
      </PostLayout>
    </PageLayout>
  )
}

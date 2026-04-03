import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import FillImageFrame from '../../components/FillImageFrame'
import PostLayout from './PostLayout'

function renderBlock(block, index) {
  if (block.type === 'image') {
    return (
      <FillImageFrame
        key={`${block.src}-${index}`}
        src={block.src}
        alt={block.alt}
        priority={block.priority}
        containerStyle={block.containerStyle || { margin: '2rem 0', borderRadius: 2, aspectRatio: '15/8' }}
        imageStyle={{ objectPosition: 'center 24%', ...block.imageStyle }}
      />
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

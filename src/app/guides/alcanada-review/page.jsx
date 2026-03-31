import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import PostLayout from '../PostLayout'
import { buildGuidePostMetadata } from '../../../lib/page-metadata'
import { getGuidePostContent } from '../../../lib/guide-post-content'

const content = getGuidePostContent('alcanada-review', 'en')

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'en',
  title: content.metadata.title,
  description: content.metadata.description,
  imagePath: content.metadata.imagePath,
})

function PostImage({ src, alt, caption }) {
  return (
    <figure style={{ margin: '2rem 0', padding: 0 }}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={520}
        loading="lazy"
        style={{ width: '100%', height: 'auto', maxHeight: 520, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
      />
      {caption ? (
        <figcaption style={{ fontSize: '0.78rem', color: 'var(--taupe)', marginTop: '0.5rem', fontStyle: 'italic', lineHeight: 1.5 }}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function Post() {
  return (
    <PageLayout>
      <RevealObserver />
      <PostLayout meta={content.meta}>
        {content.blocks.map((block, index) => {
          if (block.type === 'image') {
            return <PostImage key={`${block.src}-${index}`} src={block.src} alt={block.alt} caption={block.caption} />
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
        })}
      </PostLayout>
    </PageLayout>
  )
}

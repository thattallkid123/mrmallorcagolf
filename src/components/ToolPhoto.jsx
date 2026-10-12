import Image from 'next/image'

export default function ToolPhoto({ src, alt, sizes = '(max-width: 768px) 100vw, 720px', className = '' }) {
  if (!src) return null
  return (
    <div className={`tool-photo ${className}`.trim()}>
      <Image src={src} alt={alt} fill sizes={sizes} className="tool-photo__image" />
    </div>
  )
}

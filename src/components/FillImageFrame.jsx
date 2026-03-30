import Image from 'next/image'

export default function FillImageFrame({
  src,
  alt,
  sizes = '(max-width: 768px) 100vw, 720px',
  priority = false,
  containerStyle,
  imageStyle,
}) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...containerStyle,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{
          objectFit: 'cover',
          ...imageStyle,
        }}
      />
    </div>
  )
}

'use client'

export default function HorizontalWheelScroll({ as: Tag = 'div', className = '', children, ...props }) {
  function handleWheel(event) {
    const element = event.currentTarget
    const canScroll = element.scrollWidth > element.clientWidth
    if (!canScroll || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return

    const atStart = element.scrollLeft <= 0
    const atEnd = Math.ceil(element.scrollLeft + element.clientWidth) >= element.scrollWidth

    if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) return

    event.preventDefault()
    element.scrollLeft += event.deltaY
  }

  return (
    <Tag className={className} onWheel={handleWheel} {...props}>
      {children}
    </Tag>
  )
}

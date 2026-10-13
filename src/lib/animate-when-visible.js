// Schedule scrolling animation only while its strip is visible in an active tab.
// The caller retains its existing motion, manual-scroll and reduced-motion rules.
export function animateWhenVisible(element, tick) {
  let visible = false
  let frame = null
  const nextFrame = () => {
    frame = null
    if (!visible || document.hidden) return
    tick()
    frame = requestAnimationFrame(nextFrame)
  }
  const sync = () => {
    if (visible && !document.hidden) {
      if (frame === null) frame = requestAnimationFrame(nextFrame)
    } else if (frame !== null) {
      cancelAnimationFrame(frame)
      frame = null
    }
  }
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    sync()
  })
  observer.observe(element)
  document.addEventListener('visibilitychange', sync)
  return () => {
    observer.disconnect()
    document.removeEventListener('visibilitychange', sync)
    if (frame !== null) cancelAnimationFrame(frame)
  }
}

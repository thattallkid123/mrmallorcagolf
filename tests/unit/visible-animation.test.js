import { afterEach, expect, test, vi } from 'vitest'
import { animateWhenVisible } from '../../src/lib/animate-when-visible'

afterEach(() => vi.unstubAllGlobals())

test('scroll animation runs only while visible and pauses in a hidden tab', () => {
  let observerCallback
  const observer = { observe: vi.fn(), disconnect: vi.fn() }
  const frames = new Map()
  const listeners = new Map()
  let nextId = 0
  const doc = {
    hidden: false,
    addEventListener: (event, callback) => listeners.set(event, callback),
    removeEventListener: (event) => listeners.delete(event),
  }
  vi.stubGlobal('document', doc)
  vi.stubGlobal('IntersectionObserver', class { constructor(callback) { observerCallback = callback; return observer } })
  vi.stubGlobal('requestAnimationFrame', callback => { const id = ++nextId; frames.set(id, callback); return id })
  vi.stubGlobal('cancelAnimationFrame', id => frames.delete(id))
  const tick = vi.fn()
  const stop = animateWhenVisible({}, tick)
  expect(frames.size).toBe(0)

  observerCallback([{ isIntersecting: true }])
  expect(frames.size).toBe(1)
  const [id, callback] = frames.entries().next().value
  frames.delete(id)
  callback()
  expect(tick).toHaveBeenCalledOnce()
  expect(frames.size).toBe(1)

  observerCallback([{ isIntersecting: false }])
  expect(frames.size).toBe(0)
  observerCallback([{ isIntersecting: true }])
  expect(frames.size).toBe(1)
  doc.hidden = true
  listeners.get('visibilitychange')()
  expect(frames.size).toBe(0)
  doc.hidden = false
  listeners.get('visibilitychange')()
  listeners.get('visibilitychange')()
  expect(frames.size).toBe(1)

  stop()
  expect(frames.size).toBe(0)
  expect(listeners.size).toBe(0)
  expect(observer.disconnect).toHaveBeenCalledOnce()
})

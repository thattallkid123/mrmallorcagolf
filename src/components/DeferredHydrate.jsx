'use client'

import { useEffect, useState } from 'react'

export default function DeferredHydrate({ children, fallback = null, timeoutMs = 1200 }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const activate = () => {
      if (!cancelled) setReady(true)
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(activate, { timeout: timeoutMs })
      return () => {
        cancelled = true
        window.cancelIdleCallback(id)
      }
    }

    const timer = setTimeout(activate, 350)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [timeoutMs])

  return ready ? children : fallback
}

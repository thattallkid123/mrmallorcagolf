'use client'
import { useCallback, useEffect, useRef } from 'react'

// A manual navigation action must not leave an automatic advance pending.
export default function useQuizTransition() {
  const timer = useRef(null)
  const cancelAdvance = useCallback(() => {
    clearTimeout(timer.current)
    timer.current = null
  }, [])
  useEffect(() => cancelAdvance, [cancelAdvance])
  const scheduleAdvance = useCallback(action => {
    cancelAdvance()
    timer.current = setTimeout(() => {
      timer.current = null
      action()
    }, 220)
  }, [cancelAdvance])
  return { scheduleAdvance, cancelAdvance }
}

'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const reveals = document.querySelectorAll('.reveal')

    root.classList.add('js-enhanced')

    if (prefersReducedMotion) {
      reveals.forEach((element) => element.classList.add('visible'))
      return () => root.classList.remove('js-enhanced')
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })

    reveals.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove('js-enhanced')
    }
  }, [])
  return null
}

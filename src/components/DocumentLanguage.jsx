'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getDocumentLanguage, getLocaleFromPath } from '../lib/site'

export default function DocumentLanguage() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang = getDocumentLanguage(getLocaleFromPath(pathname || '/'))
  }, [pathname])

  return null
}

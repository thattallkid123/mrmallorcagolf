'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ZHADayRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Temporarily redirect to EN version while zh content is being prepared
    router.push('/a-day')
  }, [router])

  return <div style={{ padding: '40px', textAlign: 'center' }}>重定向中...</div>
}

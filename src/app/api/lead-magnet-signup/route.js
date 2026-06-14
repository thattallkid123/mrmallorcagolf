import { NextResponse } from 'next/server'
import { LEAD_MAGNET_GROUPS } from '../../../lib/signup-config'

export async function POST(request) {
  try {
    const { email, guide } = await request.json()

    if (!email || !guide) {
      return NextResponse.json({ error: 'Missing email or guide' }, { status: 400 })
    }

    const groupId = LEAD_MAGNET_GROUPS[guide]
    if (!groupId) {
      return NextResponse.json({ error: 'Unknown guide' }, { status: 400 })
    }

    const apiToken = process.env.MAILERLITE_API_TOKEN
    if (!apiToken) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
        fields: { source: guide },
      }),
    })

    const data = await response.json()

    if (response.ok || response.status === 200 || response.status === 201) {
      return NextResponse.json({ success: true })
    }

    const message = data?.message || 'Subscription failed'
    return NextResponse.json({ error: message }, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

import { ImageResponse } from 'next/og'
import { SITE_ORIGIN } from '../../../lib/site.js'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Mr Mallorca Golf'
  const badge = searchParams.get('badge') || 'Golf Guide'
  const imageParam = searchParams.get('image') || ''

  const requestOrigin = new URL(request.url).origin
  const isJpegOrPng = /\.(jpe?g|png)$/i.test(imageParam)
  const bgImageUrl = imageParam && isJpegOrPng
    ? imageParam.startsWith('http') ? imageParam : `${requestOrigin}${imageParam}`
    : null

  const logoUrl = `${requestOrigin}/MMG_Logo_White_Transparent.png`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background: course photo or fallback gradient */}
        {bgImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgImageUrl}
            alt=""
            width={1200}
            height={630}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />
        ) : null}

        {/* Dark overlay — heavier at top and bottom for logo/text legibility */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            inset: 0,
            background: bgImageUrl
              ? 'linear-gradient(180deg, rgba(26,25,22,0.68) 0%, rgba(26,25,22,0.30) 45%, rgba(26,25,22,0.80) 100%)'
              : 'linear-gradient(145deg, #1A1916 0%, #2D4A3E 55%, #3D6455 100%)',
          }}
        />

        {/* Content layer */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '48px 64px',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* Top row: logo left, badge right */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl}
              alt="Mr Mallorca Golf"
              width={60}
              height={60}
              style={{ width: '60px', height: '60px' }}
            />
            <div
              style={{
                background: '#B8973C',
                color: '#1A1916',
                padding: '10px 20px',
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {badge}
            </div>
          </div>

          {/* Bottom: accent line + title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ width: '56px', height: '2px', background: '#B8973C' }} />
            <div
              style={{
                color: '#F7F4EF',
                fontSize: title.length > 55 ? '50px' : '60px',
                fontWeight: 600,
                lineHeight: 1.1,
                maxWidth: '950px',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 16px rgba(0,0,0,0.6)',
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 88, 90],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/zh-Hans',
        destination: '/zh',
        permanent: true,
      },
      {
        source: '/zh-Hans/:path*',
        destination: '/zh/:path*',
        permanent: true,
      },
      {
        source: '/golf-trip-calculator',
        destination: '/tools/golf-cost-calculator',
        permanent: true,
      },
      {
        source: '/hotel-recommender',
        destination: '/tools/hotel-recommender',
        permanent: true,
      },
      {
        source: '/golf-day-builder',
        destination: '/tools/golf-day-builder',
        permanent: true,
      },
    ]
  },
  async headers() {
    const allowUnsafeEval = process.env.NODE_ENV !== 'production'
    const contentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "font-src 'self' https://fonts.gstatic.com data:",
      "form-action 'self' https://assets.mailerlite.com",
      "frame-ancestors 'self'",
      "frame-src https://preview.mailerlite.io",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://www.google.es https://www.google.com https://preview.mailerlite.io https://assets.mailerlite.com https://*.tile.openstreetmap.org",
      "object-src 'none'",
      `script-src 'self' 'unsafe-inline'${allowUnsafeEval ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://assets.mailerlite.com`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://assets.mailerlite.com",
      'upgrade-insecure-requests',
    ].join('; ')

    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(webp|png|jpg|jpeg|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'No-Vary-Search', value: 'key-order, params=("utm_source" "utm_medium" "utm_campaign" "utm_content" "utm_term")' },
        ],
      },
    ]
  },
}

module.exports = nextConfig

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
        source: '/fr/privacy-policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/golf-courses/alcanada',
        destination: '/guides/alcanada-review',
        permanent: true,
      },
      {
        source: '/golf-courses/alcanada-review',
        destination: '/guides/alcanada-review',
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
      "form-action 'self' https://subscribe-forms.beehiiv.com https://assets.mailerlite.com",
      "frame-ancestors 'self'",
      "frame-src https://subscribe-forms.beehiiv.com https://preview.mailerlite.io",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://preview.mailerlite.io https://assets.mailerlite.com",
      "object-src 'none'",
      `script-src 'self' 'unsafe-inline'${allowUnsafeEval ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://subscribe-forms.beehiiv.com https://assets.mailerlite.com`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://subscribe-forms.beehiiv.com https://assets.mailerlite.com",
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
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

module.exports = nextConfig

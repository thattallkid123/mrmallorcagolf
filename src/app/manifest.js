export default function manifest() {
  return {
    name: 'Mr Mallorca Golf',
    short_name: 'Mr Mallorca Golf',
    description:
      'Private golf days in Mallorca with PGA Advanced Professional Andy Griffiths.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f4ef',
    theme_color: '#2d4a3e',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

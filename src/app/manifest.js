export default function manifest() {
  return {
    name: 'Mr Mallorca Golf Tracker',
    short_name: 'MMG Tracker',
    description:
      'Mallorca-first golf tracker for rounds, hole overviews, GPS shots, stats, and handicap history.',
    start_url: '/shot-tracker',
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

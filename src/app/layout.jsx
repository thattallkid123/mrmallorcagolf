import '../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://mrmallorcagolf.com'),
  title: {
    template: '%s | Mr Mallorca Golf',
    default: "Mr Mallorca Golf — Play Mallorca's Best Courses with a PGA Professional",
  },
  description: 'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more — on-course coaching, everything arranged.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

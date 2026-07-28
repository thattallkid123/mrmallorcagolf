import { permanentRedirect } from 'next/navigation'

export const metadata = {
  robots: { index: false, follow: true },
}

export default function ADayPage() {
  permanentRedirect('/guides/play-with-a-pro-explained')
}

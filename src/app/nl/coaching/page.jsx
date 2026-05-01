import { permanentRedirect } from 'next/navigation'
export const metadata = { robots: { index: false, follow: false } }
export default function CoachingRedirect() { permanentRedirect('/nl/play-with-a-pro') }

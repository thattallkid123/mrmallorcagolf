import { permanentRedirect } from 'next/navigation'

// The tool is canonical at /zh/tools/course-selector, which matches where every
// other locale keeps it. This older path redirects, the same way /course-selector
// redirects to /tools/course-selector on the English site.
export const metadata = {
  robots: { index: false, follow: false },
}

export default function ZhCourseSelectorRedirect() {
  permanentRedirect('/zh/tools/course-selector')
}

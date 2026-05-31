import {
  createGuideSlugMetadata,
  createGuideSlugPage,
  createGuideSlugStaticParams,
} from '../../../_locale/guide-slug-factory'

const LOCALE = 'fr'

export function generateStaticParams() {
  return createGuideSlugStaticParams()
}

export function generateMetadata({ params }) {
  return createGuideSlugMetadata(LOCALE, params)
}

export default function Post({ params }) {
  return createGuideSlugPage(LOCALE, params)
}

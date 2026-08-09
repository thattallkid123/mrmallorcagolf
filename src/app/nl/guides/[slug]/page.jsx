import {
  createGuideSlugMetadata,
  createGuideSlugPage,
  createGuideSlugStaticParams,
} from '../../../_locale/guide-slug-factory'

const LOCALE = 'nl'

export function generateStaticParams() {
  return createGuideSlugStaticParams()
}

export async function generateMetadata({ params }) {
  return createGuideSlugMetadata(LOCALE, params)
}

export default async function Post({ params }) {
  return createGuideSlugPage(LOCALE, params)
}

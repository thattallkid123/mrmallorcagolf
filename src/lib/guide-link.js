import { buildLocalePath } from './site'

// Guide prose and guide buttons must use the same route availability rules.
// Download pages are intentionally English where no translated page exists.
export function localizeGuideHref(href, locale = 'en') {
  if (!href || /^(?:https?:|mailto:|tel:|#)/.test(href)) return href
  const [, path, suffix] = href.match(/^([^?#]*)(.*)$/)
  const canonical = path.replace(/^\/(?:de|es|fr|nl|sv|zh)(?=\/|$)/, '') || '/'
  const download = canonical.match(/^\/guides\/(cost-guide|course-comparison)\/?$/)?.[1]
  if (download === 'cost-guide' || (download === 'course-comparison' && ['nl', 'sv'].includes(locale))) return canonical + suffix
  return buildLocalePath(canonical, locale) + suffix
}

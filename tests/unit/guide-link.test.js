import { describe, expect, test } from 'vitest'
import { localizeGuideHref } from '../../src/lib/guide-link'

describe('guide download destinations', () => {
  test('all translated cost-guide buttons use the working English page', () => {
    for (const locale of ['de','es','fr','nl','sv','zh']) {
      expect(localizeGuideHref('/guides/cost-guide', locale)).toBe('/guides/cost-guide')
      expect(localizeGuideHref(`/${locale}/guides/cost-guide`, locale)).toBe('/guides/cost-guide')
    }
  })
  test('course comparison uses a translation only where one exists', () => {
    for (const locale of ['nl','sv']) expect(localizeGuideHref('/guides/course-comparison', locale)).toBe('/guides/course-comparison')
    for (const locale of ['de','es','fr','zh']) expect(localizeGuideHref('/guides/course-comparison', locale)).toBe(`/${locale}/guides/course-comparison`)
  })
  test('retains enquiry parameters and anchors without doubling the language prefix', () => {
    expect(localizeGuideHref('/contact?service=pwap#form', 'de')).toBe('/de/contact?service=pwap#form')
    expect(localizeGuideHref('/de/plan-your-trip#trip-ideas', 'de')).toBe('/de/plan-your-trip#trip-ideas')
    expect(localizeGuideHref('/guides/cost-guide?source=article#download', 'fr')).toBe('/guides/cost-guide?source=article#download')
    expect(localizeGuideHref('https://example.com/page', 'de')).toBe('https://example.com/page')
  })
})

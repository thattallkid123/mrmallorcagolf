// The locale overlay files that mirror an English content file, shared by the
// integrity check (shape) and the sync check (is the translation still current).
// Add a new overlay pair here and both checks cover it.

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

const OVERLAY_CONFIGS = [
  {
    label: 'HOME',
    baseModulePath: 'src/lib/homepage-content.js',
    baseGetterName: 'getHomeContent',
    overlayModulePath: 'src/lib/homepage-content-localized.js',
    overlayGetterName: 'getLocalizedHomeContent',
    overlayExportName: 'HOME_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^HOME\.[^.]+\.whyMallorca\.stats$/,
      /^HOME\.[^.]+\.packages\.multiDay\.(detail|button)$/,
    ],
  },
  {
    label: 'ABOUT',
    baseModulePath: 'src/lib/about-content.js',
    baseGetterName: 'getAboutContent',
    overlayModulePath: 'src/lib/about-content-localized.js',
    overlayGetterName: 'getLocalizedAboutContent',
    overlayExportName: 'ABOUT_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^ABOUT\.[^.]+\.sidebarCta$/,
      /^ABOUT\.[^.]+\.careerStripProps\.(label|heading)$/,
    ],
  },
  {
    label: 'COACHING',
    baseModulePath: 'src/lib/coaching-content.js',
    baseGetterName: 'getCoachingContent',
    overlayModulePath: 'src/lib/coaching-content-localized.js',
    overlayGetterName: 'getLocalizedCoachingContent',
    overlayExportName: 'COACHING_LOCALIZED_CONTENT',
  },
  {
    label: 'CONTACT',
    baseModulePath: 'src/lib/contact-content.js',
    baseGetterName: 'getContactContent',
    overlayModulePath: 'src/lib/contact-content-localized.js',
    overlayGetterName: 'getLocalizedContactContent',
    overlayExportName: 'CONTACT_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^CONTACT\.zh\.cards\.(wechatLabel|wechatValue)$/,
      /^CONTACT\.zh\.form\.(sendPromptLabel|handicapOptional)$/,
    ],
  },
  {
    label: 'GOLF_COURSES',
    baseModulePath: 'src/lib/golf-courses-content.js',
    baseGetterName: 'getGolfCoursesContent',
    overlayModulePath: 'src/lib/golf-courses-content-localized.js',
    overlayGetterName: 'getLocalizedGolfCoursesContent',
    overlayExportName: 'GOLF_COURSES_LOCALIZED_CONTENT',
  },
  {
    label: 'GUIDES_INDEX',
    baseModulePath: 'src/lib/guides-content.js',
    baseGetterName: 'getGuidesContent',
    overlayModulePath: 'src/lib/guides-content-localized.js',
    overlayGetterName: 'getLocalizedGuidesContent',
    overlayExportName: 'GUIDES_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^GUIDES_INDEX\.[^.]+\.liveGuides$/,
    ],
  },
  {
    label: 'PLAN_YOUR_TRIP',
    baseModulePath: 'src/lib/plan-your-trip-content.js',
    baseGetterName: 'getPlanYourTripContent',
    overlayModulePath: 'src/lib/plan-your-trip-content-localized.js',
    overlayGetterName: 'getLocalizedPlanYourTripContent',
    overlayExportName: 'PLAN_YOUR_TRIP_LOCALIZED_CONTENT',
  },
  {
    label: 'PLAY_WITH_A_PRO',
    baseModulePath: 'src/lib/play-with-a-pro-content.js',
    baseGetterName: 'getPlayWithAProContent',
    overlayModulePath: 'src/lib/play-with-a-pro-content-localized.js',
    overlayGetterName: 'getLocalizedPlayWithAProContent',
    overlayExportName: 'PLAY_WITH_A_PRO_LOCALIZED_CONTENT',
    allowedPathPatterns: [
      /^PLAY_WITH_A_PRO\.[^.]+\.packages\.multiDay\.detail$/,
    ],
  },
]

module.exports = { LOCALES, OVERLAY_CONFIGS }

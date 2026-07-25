// UI translations for GolfDayBuilderClient
export const GOLF_DAY_BUILDER_T = {
  en: {
    pageTitle: 'Build your golf day',
    intro: { h2: 'How this works' },
  },
  de: { pageTitle: 'Bauen Sie Ihren Golftag auf', intro: { h2: 'So funktioniert es' } },
  es: { pageTitle: 'Construye tu día de golf', intro: { h2: 'Cómo funciona' } },
  fr: { pageTitle: 'Construisez votre jour de golf', intro: { h2: 'Comment ça marche' } },
  nl: { pageTitle: 'Bouw je golfdag op', intro: { h2: 'Hoe het werkt' } },
  sv: { pageTitle: 'Bygga din golfdag', intro: { h2: 'Hur det fungerar' } },
  zh: { pageTitle: '规划你的高尔夫行程', intro: { h2: '工作原理' } },
}

export function getGolfDayBuilderT(lang = 'en') {
  return GOLF_DAY_BUILDER_T[lang] || GOLF_DAY_BUILDER_T.en
}

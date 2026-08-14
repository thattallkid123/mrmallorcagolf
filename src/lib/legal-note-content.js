const PRIVACY_LINK_LABEL = {
  en: 'Privacy Policy',
  es: 'Política de Privacidad',
  de: 'Datenschutzerklärung',
  fr: 'Politique de confidentialité',
  nl: 'Privacybeleid',
  sv: 'Integritetspolicy',
  zh: '隐私政策',
}

export function getPrivacyLinkLabel(locale = 'en') {
  return PRIVACY_LINK_LABEL[locale] || PRIVACY_LINK_LABEL.en
}

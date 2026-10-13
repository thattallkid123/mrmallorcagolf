const LABELS = {
  "en": [
    "Scroll to see all choices",
    "Previous choices",
    "Next choices"
  ],
  "de": [
    "Scrollen Sie, um alle Optionen zu sehen",
    "Vorherige Optionen",
    "Weitere Optionen"
  ],
  "es": [
    "Deslice para ver todas las opciones",
    "Opciones anteriores",
    "Opciones siguientes"
  ],
  "fr": [
    "Faites défiler pour voir tous les choix",
    "Choix précédents",
    "Choix suivants"
  ],
  "nl": [
    "Scroll om alle opties te zien",
    "Vorige opties",
    "Volgende opties"
  ],
  "sv": [
    "Bläddra för att se alla alternativ",
    "Föregående alternativ",
    "Nästa alternativ"
  ],
  "zh": [
    "横向滑动查看所有选项",
    "上一组选项",
    "下一组选项"
  ]
}
export function getToolChoiceLabels(locale = 'en') { return LABELS[locale] || LABELS.en }

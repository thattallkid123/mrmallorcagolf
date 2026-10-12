// Labels for shared planning-tool photos. Names stay in their original form.
const LABELS = {
  "en": {
    "property": "{name} in Mallorca",
    "course": "Golf course: {name}",
    "area": "Area example: {name}",
    "villa": "Villa style example: Villa Jade, Cap Vermell Estate",
    "villaNote": "Villa style example. The property is chosen for your group.",
    "areaNote": "Area example.",
    "example": "Example: {name}"
  },
  "de": {
    "property": "{name} auf Mallorca",
    "course": "Golfplatz: {name}",
    "area": "Beispiel für die Gegend: {name}",
    "villa": "Beispiel für den Villenstil: Villa Jade, Cap Vermell Estate",
    "villaNote": "Beispiel für den Villenstil. Die Unterkunft wird für Ihre Gruppe ausgewählt.",
    "areaNote": "Beispiel für die Gegend.",
    "example": "Beispiel: {name}"
  },
  "es": {
    "property": "{name} en Mallorca",
    "course": "Campo de golf: {name}",
    "area": "Ejemplo de la zona: {name}",
    "villa": "Ejemplo de estilo de villa: Villa Jade, Cap Vermell Estate",
    "villaNote": "Ejemplo de estilo de villa. La propiedad se elige para su grupo.",
    "areaNote": "Ejemplo de la zona.",
    "example": "Ejemplo: {name}"
  },
  "fr": {
    "property": "{name} à Majorque",
    "course": "Parcours de golf : {name}",
    "area": "Exemple de la région : {name}",
    "villa": "Exemple de style de villa : Villa Jade, Cap Vermell Estate",
    "villaNote": "Exemple de style de villa. La propriété est choisie pour votre groupe.",
    "areaNote": "Exemple de la région.",
    "example": "Exemple : {name}"
  },
  "nl": {
    "property": "{name} op Mallorca",
    "course": "Golfbaan: {name}",
    "area": "Voorbeeld van de omgeving: {name}",
    "villa": "Voorbeeld van de villastijl: Villa Jade, Cap Vermell Estate",
    "villaNote": "Voorbeeld van de villastijl. De accommodatie wordt voor uw groep gekozen.",
    "areaNote": "Voorbeeld van de omgeving.",
    "example": "Voorbeeld: {name}"
  },
  "sv": {
    "property": "{name} på Mallorca",
    "course": "Golfbana: {name}",
    "area": "Exempel på området: {name}",
    "villa": "Exempel på villastil: Villa Jade, Cap Vermell Estate",
    "villaNote": "Exempel på villastil. Boendet väljs för din grupp.",
    "areaNote": "Exempel på området.",
    "example": "Exempel: {name}"
  },
  "zh": {
    "property": "马略卡的{name}",
    "course": "高尔夫球场：{name}",
    "area": "区域示例：{name}",
    "villa": "别墅风格示例：Cap Vermell Estate 的 Villa Jade",
    "villaNote": "别墅风格示例。具体房源会根据您的同行人员选择。",
    "areaNote": "区域示例。",
    "example": "示例：{name}"
  }
}

export function planningImageText(key, locale = 'en', name = '') {
  return (LABELS[locale] || LABELS.en)[key].replace('{name}', name)
}

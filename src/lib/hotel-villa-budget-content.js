const COPY = {
  en: ['What is your whole-villa budget per night?', 'Optional. Enter the total for the property. The tool suggests areas; I confirm villa options and prices for your dates.', 'Whole villa per night (€)', 'Not sure yet', 'Villa area suggestions', 'These are area suggestions, not available properties or confirmed prices. Capacity, dates and budget need checking before a villa is recommended.', 'Whole-villa nightly budget'],
  de: ['Wie hoch ist Ihr Budget pro Nacht für die ganze Villa?', 'Optional. Geben Sie den Gesamtbetrag für das Haus an. Das Tool schlägt Regionen vor; ich bestätige Villen und Preise für Ihre Reisedaten.', 'Ganze Villa pro Nacht (€)', 'Noch unklar', 'Regionen für Ihre Villa', 'Dies sind Regionsvorschläge, keine verfügbaren Häuser oder bestätigten Preise. Belegung, Daten und Budget müssen vor einer Empfehlung geprüft werden.', 'Nächtliches Budget für die ganze Villa'],
  es: ['¿Cuál es su presupuesto por noche para toda la villa?', 'Opcional. Indique el total para la propiedad. La herramienta sugiere zonas; yo confirmo villas y precios para sus fechas.', 'Villa completa por noche (€)', 'Aún no lo sé', 'Zonas para su villa', 'Son sugerencias de zonas, no propiedades disponibles ni precios confirmados. Hay que comprobar capacidad, fechas y presupuesto antes de recomendar una villa.', 'Presupuesto por noche para toda la villa'],
  fr: ['Quel est votre budget par nuit pour la villa entière ?', 'Facultatif. Indiquez le total pour la propriété. L’outil propose des zones ; je confirme les villas et les prix pour vos dates.', 'Villa entière par nuit (€)', 'Pas encore décidé', 'Zones pour votre villa', 'Il s’agit de zones suggérées, pas de propriétés disponibles ni de prix confirmés. Capacité, dates et budget sont à vérifier avant de recommander une villa.', 'Budget par nuit pour la villa entière'],
  nl: ['Wat is uw budget per nacht voor de hele villa?', 'Optioneel. Vul het totaal voor de woning in. De tool stelt gebieden voor; ik bevestig villa’s en prijzen voor uw data.', 'Hele villa per nacht (€)', 'Nog niet zeker', 'Gebieden voor uw villa', 'Dit zijn gebiedssuggesties, geen beschikbare woningen of bevestigde prijzen. Capaciteit, data en budget moeten worden gecontroleerd voordat ik een villa aanbeveel.', 'Nachtbudget voor de hele villa'],
  sv: ['Vad är er budget per natt för hela villan?', 'Valfritt. Ange totalen för boendet. Verktyget föreslår områden; jag bekräftar villor och priser för era datum.', 'Hela villan per natt (€)', 'Inte säker än', 'Områden för er villa', 'Detta är områdesförslag, inte tillgängliga boenden eller bekräftade priser. Kapacitet, datum och budget behöver kontrolleras före en rekommendation.', 'Nattbudget för hela villan'],
  zh: ['整栋别墅每晚的预算是多少？', '可不填。请输入整栋物业的总额。工具仅推荐区域，具体别墅及出行日期的价格由Andy确认。', '整栋别墅每晚（€）', '暂不确定', '适合寻找别墅的区域', '以下仅为区域建议，并非可预订的具体物业或已确认报价。推荐别墅前，还需核实入住人数、日期和预算。', '整栋别墅每晚预算'],
}

const RECOVERY = {
  en: ['Change group size', 'No villa area suggestions for these answers', 'Try another area or style, or review the group size. Live villa availability has not been checked.'],
  de: ['Gruppengröße ändern', 'Keine Villenregion für diese Angaben', 'Versuchen Sie eine andere Region oder Unterkunftsart oder prüfen Sie die Gruppengröße. Die aktuelle Verfügbarkeit wurde nicht geprüft.'],
  es: ['Cambiar tamaño del grupo', 'Sin zonas de villas para estas respuestas', 'Pruebe otra zona o estilo, o revise el tamaño del grupo. No se ha comprobado la disponibilidad actual de villas.'],
  fr: ['Modifier la taille du groupe', 'Aucune zone de villa pour ces réponses', 'Essayez une autre zone ou un autre style, ou revoyez la taille du groupe. La disponibilité actuelle des villas n’a pas été vérifiée.'],
  nl: ['Groepsgrootte wijzigen', 'Geen villagebieden voor deze antwoorden', 'Probeer een ander gebied of type verblijf, of controleer de groepsgrootte. De actuele beschikbaarheid is niet gecontroleerd.'],
  sv: ['Ändra gruppstorlek', 'Inga villaområden för dessa svar', 'Prova ett annat område eller en annan boendetyp, eller se över gruppstorleken. Aktuell tillgänglighet har inte kontrollerats.'],
  zh: ['修改同行人数', '这些条件暂未匹配到别墅区域建议', '可更换区域或住宿类型，或核对同行人数。工具尚未查询具体别墅的实时空房。'],
}

export function getVillaBudgetT(lang = 'en') {
  const [title, sub, label, unknown, resultsTitle, resultsNote, summary] = COPY[lang] || COPY.en
  const [size, emptyTitle, emptyTip] = RECOVERY[lang] || RECOVERY.en
  return { title, sub, label, unknown, resultsTitle, resultsNote, summary, size, emptyTitle, emptyTip }
}

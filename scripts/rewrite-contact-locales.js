const fs = require('fs')
const path = require('path')

const filePath = path.join(process.cwd(), 'src', 'lib', 'contact-content.js')
let source = fs.readFileSync(filePath, 'utf8')

function replaceBetween(startMarker, endMarker, replacement) {
  const start = source.indexOf(startMarker)
  const end = source.indexOf(endMarker, start)
  if (start === -1 || end === -1) throw new Error(`Could not replace block from ${startMarker} to ${endMarker}`)
  source = source.slice(0, start) + replacement + source.slice(end)
}

replaceBetween(
  "  de: {",
  "  es: {",
String.raw`  de: {
    locale: 'de',
    hero: {
      eyebrow: 'Kontakt',
      title: 'Sagen Sie mir, was Sie suchen. Ich kümmere mich um den Rest.',
      intro:
        'Kein Buchungssystem. Sagen Sie mir Ihre Daten, Ihr Handicap und was Sie sich von dem Tag erhoffen. Ich melde mich persönlich bei Ihnen, meist innerhalb weniger Stunden und immer innerhalb von 24 Stunden.',
    },
    cards: {
      emailLabel: 'E-Mail',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Per WhatsApp schreiben →',
      responseLabel: 'Antwortzeit',
      responseValue: 'Innerhalb von 24 Stunden - meist schneller',
      basedLabel: 'Standort',
      basedValue: 'Mallorca, Spanien',
    },
    success: {
      title: 'Anfrage erhalten.',
      body: 'Ich melde mich persönlich innerhalb von 24 Stunden. Wenn es schneller gehen soll, ist WhatsApp der einfachste Weg.',
    },
    form: {
      eyebrow: 'Anfrageformular',
      title: 'Beginnen Sie mit der Planung Ihres Tages.',
      intro: 'Je mehr Details Sie mir geben, desto besser kann ich den Tag auf Sie abstimmen.',
      labels: {
        fname: 'Vorname',
        lname: 'Nachname',
        email: 'E-Mail-Adresse',
        dates: 'Bevorzugte Termine',
        handicap: 'Ihr Handicap',
        groupsize: 'Gruppengröße',
        experience: 'Welche Erfahrung interessiert Sie?',
        message: 'Was sollte ich sonst noch wissen?',
      },
      placeholders: {
        fname: 'Max',
        lname: 'Mustermann',
        email: 'max@beispiel.de',
        dates: 'z. B. 15.-22. Oktober 2026',
        handicap: "z. B. 14 oder 'Anfänger'",
        message: 'Ziele für den Tag, Wunschplätze, gemischte Gruppe, besondere Wünsche - alles hilft mir, den richtigen Tag für Sie zu planen.',
      },
      groupsizeOptions: [
        { value: '', label: 'Gruppengröße wählen' },
        { value: '1 - solo', label: '1 - allein' },
        { value: '2 - pair', label: '2 - zu zweit' },
        { value: '3-4 - small group', label: '3-4 - kleine Gruppe' },
        { value: '5+ - larger group / corporate', label: '5+ - größere Gruppe / Firma' },
      ],
      experiences: [
        ['mallorca-round', 'Die Mallorca-Runde', '€350 + Greenfee'],
        ['signature-day', 'Der Signature Day', 'Ab €450 + Greenfee'],
        ['full-experience', 'Das komplette Erlebnis', 'Auf Anfrage'],
        ['not-sure', 'Noch unsicher - beraten Sie mich', ''],
      ],
      submit: 'Anfrage senden →',
      note: 'Ich beantworte jede Anfrage persönlich innerhalb von 24 Stunden. Ihre Angaben nutze ich nur, um Ihren Tag zu planen.',
    },
  },
`,
)

replaceBetween(
  "  fr: {",
  "  nl: {",
String.raw`  fr: {
    locale: 'fr',
    hero: {
      eyebrow: 'Prendre contact',
      title: "Dites-moi ce que vous cherchez. Je m'occupe du reste.",
      intro:
        'Pas de système de réservation. Donnez-moi vos dates, votre handicap et ce que vous attendez de la journée. Je vous répondrai personnellement, souvent en quelques heures et toujours sous 24 heures.',
    },
    cards: {
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Écrire sur WhatsApp →',
      responseLabel: 'Délai de réponse',
      responseValue: 'Sous 24 heures - souvent plus vite',
      basedLabel: 'Basé à',
      basedValue: 'Majorque, Espagne',
    },
    success: {
      title: 'Demande reçue.',
      body: 'Je vous répondrai personnellement sous 24 heures. Si vous préférez parler directement, WhatsApp est le plus rapide.',
    },
    form: {
      eyebrow: 'Formulaire de contact',
      title: 'Commencez à planifier votre journée.',
      intro: 'Plus vous me donnez de détails, mieux je pourrai adapter la journée à vous.',
      labels: {
        fname: 'Prénom',
        lname: 'Nom',
        email: 'Adresse e-mail',
        dates: 'Dates souhaitées',
        handicap: 'Votre handicap',
        groupsize: 'Taille du groupe',
        experience: 'Quelle expérience vous intéresse ?',
        message: 'Autre chose que je devrais savoir',
      },
      placeholders: {
        fname: 'Jean',
        lname: 'Dupont',
        email: 'jean@exemple.com',
        dates: 'ex. 15-22 octobre 2026',
        handicap: "ex. 14 ou 'débutant'",
        message: 'Vos objectifs, les parcours que vous regardez, un groupe mixte, des demandes spécifiques : tout m’aide à préparer la bonne journée.',
      },
      groupsizeOptions: [
        { value: '', label: 'Choisir la taille du groupe' },
        { value: '1 - solo', label: '1 - seul(e)' },
        { value: '2 - pair', label: '2 - duo' },
        { value: '3-4 - small group', label: '3-4 - petit groupe' },
        { value: '5+ - larger group / corporate', label: '5+ - grand groupe / entreprise' },
      ],
      experiences: [
        ['mallorca-round', 'Le tour de Majorque', '€350 + green fee'],
        ['signature-day', 'La Journée Signature', 'À partir de €450 + green fee'],
        ['full-experience', "L'Expérience complète", 'Sur demande'],
        ['not-sure', 'Je ne suis pas encore certain(e) - conseillez-moi', ''],
      ],
      submit: 'Envoyer la demande →',
      note: 'Je réponds personnellement à chaque demande sous 24 heures. Vos coordonnées servent uniquement à organiser votre expérience.',
    },
  },
`,
)

replaceBetween(
  "  nl: {",
  "  sv: {",
String.raw`  nl: {
    locale: 'nl',
    hero: {
      eyebrow: 'Neem contact op',
      title: 'Vertel me wat u zoekt. Ik regel de rest.',
      intro:
        'Geen boekingssysteem. Vertel me uw data, uw handicap en wat u van de dag wilt. Ik reageer persoonlijk, meestal binnen een paar uur en altijd binnen 24 uur.',
    },
    cards: {
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Stuur een WhatsApp-bericht →',
      responseLabel: 'Reactietijd',
      responseValue: 'Binnen 24 uur - meestal sneller',
      basedLabel: 'Gevestigd in',
      basedValue: 'Mallorca, Spanje',
    },
    success: {
      title: 'Aanvraag ontvangen.',
      body: 'Ik reageer persoonlijk binnen 24 uur. Als u liever direct spreekt, is WhatsApp de snelste route.',
    },
    form: {
      eyebrow: 'Aanvraagformulier',
      title: 'Begin met het plannen van uw dag.',
      intro: 'Hoe meer details u me geeft, hoe beter ik de dag op u kan afstemmen.',
      labels: {
        fname: 'Voornaam',
        lname: 'Achternaam',
        email: 'E-mailadres',
        dates: 'Gewenste data',
        handicap: 'Uw handicap',
        groupsize: 'Groepsgrootte',
        experience: 'Welke ervaring interesseert u?',
        message: 'Is er verder nog iets dat ik moet weten?',
      },
      placeholders: {
        fname: 'Jan',
        lname: 'de Vries',
        email: 'jan@voorbeeld.com',
        dates: 'bijv. 15-22 oktober 2026',
        handicap: "bijv. 14 of 'beginner'",
        message: 'Doelen voor de dag, banen die u op het oog heeft, gemengde groep, speciale wensen - elk detail helpt.',
      },
      groupsizeOptions: [
        { value: '', label: 'Kies groepsgrootte' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - tweetal' },
        { value: '3-4 - small group', label: '3-4 - kleine groep' },
        { value: '5+ - larger group / corporate', label: '5+ - grotere groep / bedrijf' },
      ],
      experiences: [
        ['mallorca-round', 'De Mallorca-ronde', '€350 + green fee'],
        ['signature-day', 'De Signature Dag', 'Vanaf €450 + green fee'],
        ['full-experience', 'De volledige ervaring', 'Op aanvraag'],
        ['not-sure', 'Nog niet zeker - adviseer me', ''],
      ],
      submit: 'Aanvraag versturen →',
      note: 'Ik reageer persoonlijk op elke aanvraag binnen 24 uur. Uw gegevens worden alleen gebruikt om uw ervaring te organiseren.',
    },
  },
`,
)

replaceBetween(
  "  sv: {",
  "  zh: {",
String.raw`  sv: {
    locale: 'sv',
    hero: {
      eyebrow: 'Hör av dig',
      title: 'Berätta vad du söker. Jag ordnar resten.',
      intro:
        'Inga bokningssystem. Berätta om dina datum, ditt handicap och vad du vill få ut av dagen. Jag svarar personligen, oftast inom några timmar och alltid inom 24 timmar.',
    },
    cards: {
      emailLabel: 'E-post',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Skicka ett WhatsApp-meddelande →',
      responseLabel: 'Svarstid',
      responseValue: 'Inom 24 timmar - oftast snabbare',
      basedLabel: 'Bas i',
      basedValue: 'Mallorca, Spanien',
    },
    success: {
      title: 'Förfrågan mottagen.',
      body: 'Jag återkommer personligen inom 24 timmar. Om du vill prata direkt är WhatsApp den snabbaste vägen.',
    },
    form: {
      eyebrow: 'Förfrågan',
      title: 'Börja planera din dag.',
      intro: 'Ju mer detaljer du ger mig, desto bättre kan jag anpassa dagen efter dig.',
      labels: {
        fname: 'Förnamn',
        lname: 'Efternamn',
        email: 'E-postadress',
        dates: 'Önskade datum',
        handicap: 'Ditt handicap',
        groupsize: 'Gruppstorlek',
        experience: 'Vilken upplevelse är du intresserad av?',
        message: 'Något annat jag bör veta',
      },
      placeholders: {
        fname: 'Erik',
        lname: 'Svensson',
        email: 'erik@exempel.se',
        dates: 't.ex. 15-22 oktober 2026',
        handicap: "t.ex. 14 eller 'nybörjare'",
        message: 'Mål för dagen, banor du tittar på, blandad grupp, särskilda önskemål - allt hjälper mig att skapa rätt dag.',
      },
      groupsizeOptions: [
        { value: '', label: 'Välj gruppstorlek' },
        { value: '1 - solo', label: '1 - solo' },
        { value: '2 - pair', label: '2 - par' },
        { value: '3-4 - small group', label: '3-4 - liten grupp' },
        { value: '5+ - larger group / corporate', label: '5+ - större grupp / företag' },
      ],
      experiences: [
        ['mallorca-round', 'Mallorca-rundan', '€350 + green fee'],
        ['signature-day', 'Signature-dagen', 'Från €450 + green fee'],
        ['full-experience', 'Den kompletta upplevelsen', 'På förfrågan'],
        ['not-sure', 'Inte säker ännu - ge mig råd', ''],
      ],
      submit: 'Skicka förfrågan →',
      note: 'Jag svarar personligen på varje förfrågan inom 24 timmar. Dina uppgifter används bara för att planera din upplevelse.',
    },
  },
`,
)

replaceBetween(
  "  zh: {",
  "}\n\nexport function getContactContent",
String.raw`  zh: {
    locale: 'zh',
    hero: {
      eyebrow: '联系我',
      title: '告诉我您想要怎样的一天。其余的我来安排。',
      intro:
        '这里没有自动预订系统。告诉我您的日期、差点以及您希望这一天达到什么效果。我会亲自回复您，通常几小时内，最晚不超过 24 小时。',
    },
    cards: {
      emailLabel: '电子邮箱',
      whatsappLabel: 'WhatsApp',
      whatsappValue: '通过 WhatsApp 联系 →',
      responseLabel: '回复时间',
      responseValue: '24 小时内 - 通常更快',
      basedLabel: '所在地',
      basedValue: '马略卡，西班牙',
      wechatLabel: '微信',
      wechatValue: 'andygriffiths1',
    },
    success: {
      title: '已收到您的咨询。',
      body: '我会在 24 小时内亲自回复您。如果您希望更快沟通，WhatsApp 是最直接的方式。',
    },
    form: {
      eyebrow: '咨询表单',
      title: '开始安排您的这一天。',
      intro: '您提供的信息越详细，我就越能把这一天安排得更贴合您的球和您的需求。',
      labels: {
        fname: '名字',
        lname: '姓氏',
        email: '电子邮箱',
        dates: '希望的日期',
        handicap: '您的差点',
        groupsize: '人数',
        experience: '您对哪种体验感兴趣？',
        message: '还有什么我应该知道的？',
      },
      placeholders: {
        fname: '张',
        lname: '先生',
        email: 'zhang@example.com',
        dates: '例如 2026 年 10 月 15-22 日',
        handicap: "例如 14 或 '初学者'",
        message: '这一天的目标、您在考虑的球场、是否为混合水平小组、特别要求等，任何信息都能帮助我安排得更准确。',
      },
      groupsizeOptions: [
        { value: '', label: '选择人数' },
        { value: '1 - solo', label: '1 人 - 单人' },
        { value: '2 - pair', label: '2 人 - 双人' },
        { value: '3-4 - small group', label: '3-4 人 - 小组' },
        { value: '5+ - larger group / corporate', label: '5 人以上 - 团队 / 公司' },
      ],
      experiences: [
        ['mallorca-round', 'Mallorca 经典一轮', '€350 + green fee'],
        ['signature-day', 'Signature Day', '€450 起 + green fee'],
        ['full-experience', '完整体验', '按需报价'],
        ['not-sure', '暂时不确定 - 请给我建议', ''],
      ],
      submit: '发送咨询 →',
      note: '我会在 24 小时内亲自回复每一条咨询。您的信息只会用于安排这一天的体验。',
    },
  },
}

export function getContactContent`)

fs.writeFileSync(filePath, source, 'utf8')

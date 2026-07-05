import { buildPageMetadata } from './page-metadata'

const SIGNATURE_DAY_CONTENT = {
  de: {
    metadata: {
      title: 'Signature Day Mallorca | Privater Golftag mit Physio und Dinner',
      description:
        'Ein kompletter Golftag auf Mallorca: private Runde mit Andy Griffiths, Golf-Physio mit John Brazier, Transfers und Dinner im Hotel. Ab 3.000 EUR.',
    },
    heroEyebrow: 'Das komplette Erlebnis auf Mallorca',
    heroTitle: 'Ein Tag.\nSauber durchgeplant.',
    heroBody:
      'Golf mit mir, eine Physio-Session mit The Golf Doctor, private Transfers und ein Abendessen im Partnerhotel. Alles wird im Voraus rund um Sie organisiert.',
    price: 'Ab 3.000 EUR',
    primaryCta: 'Anfragen',
    secondaryCta: 'Leistungen ansehen',
    coursesCta: 'Alle Plaetze ansehen',
    playCta: 'Play With A Pro ansehen',
    sections: {
      introTitle: 'Ein Play With A Pro Tag mit dem ganzen Rahmen darum.',
      introBody:
        'Wir spielen 18 Loecher zusammen. Ich beobachte, wie Ihr Spiel unter echten Bedingungen reagiert. Danach uebernimmt John Brazier die physische Seite dessen, was ich auf dem Platz gesehen habe. Sie gehen mit einem klaren Gesamtbild nach Hause.',
      includedTitle: 'Was enthalten ist',
      included: [
        'Platzwahl passend zu Ihrem Spiel und Anlass',
        'Private Startzeit, die freien Plaetze sind reserviert und im Preis enthalten, sodass die Runde nur Ihrer Gruppe gehoert',
        '18 Loecher mit Andy Griffiths',
        'Physio-Session mit John Brazier nach der Runde',
        'Private Transfers zum und vom Platz',
        'Abendessen im Hotel oder Partner-Setup',
      ],
      whyTitle: 'Warum es anders ist',
      whyBody:
        'Normalerweise bleiben Coaching und Physio getrennt. Hier greifen beide Teile ineinander: Meine Beobachtungen aus der Runde gehen direkt in Johns Analyse ein. So entsteht eine gemeinsame, konkrete Empfehlung.',
      courseTitle: 'Platz und Ablauf werden bewusst gewaehlt',
      courseBody:
        'Son Gual und Alcanada sind die staerksten Kandidaten fuer diesen Tag, aber die Wahl haengt immer von Ihnen, Ihrer Gruppe und dem Anlass ab. Ich empfehle ehrlich, was am meisten Sinn ergibt.',
      finalTitle: 'Jeder Signature Day beginnt mit einem Gespraech.',
      finalBody:
        'Keine automatische Buchung. Schicken Sie mir Ihre Daten, Gruppengroesse und was Sie sich vom Tag versprechen. Ich melde mich persoenlich mit dem richtigen Format zurueck.',
    },
  },
  es: {
    metadata: {
      title: 'Signature Day Mallorca | Dia privado de golf, fisio y cena',
      description:
        'Un dia completo de golf en Mallorca: vuelta privada con Andy Griffiths, fisio de golf con John Brazier, traslados y cena en hotel asociado. Desde 3.000 EUR.',
    },
    heroEyebrow: 'La experiencia completa en Mallorca',
    heroTitle: 'Un dia.\nTodo bien hecho.',
    heroBody:
      'Golf conmigo, una sesion de fisio con The Golf Doctor, traslados privados y cena en hotel asociado. Todo coordinado de antemano alrededor de usted.',
    price: 'Desde 3.000 EUR',
    primaryCta: 'Contactar',
    secondaryCta: 'Ver lo incluido',
    coursesCta: 'Ver todos los campos',
    playCta: 'Ver Play With A Pro',
    sections: {
      introTitle: 'Un dia de Play With A Pro con todo lo que lo rodea.',
      introBody:
        'Jugamos 18 hoyos juntos. Yo observo como se comporta su juego en condiciones reales. Despues, John Brazier trabaja la parte fisica de lo que vi en el campo. Sale con una vision conectada y util.',
      includedTitle: 'Que esta incluido',
      included: [
        'Eleccion del campo segun su juego y el tipo de dia',
        'Hora de salida privada, las plazas libres quedan reservadas e incluidas en el precio, asi que la vuelta es solo para su grupo',
        '18 hoyos con Andy Griffiths',
        'Sesion de fisio con John Brazier despues de la vuelta',
        'Traslados privados de ida y vuelta',
        'Cena en su hotel o en un partner adecuado',
      ],
      whyTitle: 'Por que es diferente',
      whyBody:
        'Lo normal es recibir por un lado coaching y por otro lado fisio. Aqui las dos partes se conectan: mis notas de la vuelta pasan directamente a la evaluacion de John. El resultado es una recomendacion unica y clara.',
      courseTitle: 'El campo y el ritmo del dia se eligen con criterio',
      courseBody:
        'Son Gual y Alcanada son dos opciones muy fuertes para este formato, pero la eleccion siempre depende de usted, su grupo y la ocasion. Le recomendare lo que realmente tenga sentido.',
      finalTitle: 'Cada Signature Day empieza con una conversacion.',
      finalBody:
        'No hay reserva automatica. Envieme sus fechas, tamano del grupo y que quiere sacar del dia. Le respondere personalmente con el formato correcto.',
    },
  },
  fr: {
    metadata: {
      title: 'Signature Day Majorque | Journee privee golf, physio et diner',
      description:
        'Une journee de golf complete a Majorque : partie privee avec Andy Griffiths, physio golf avec John Brazier, transferts et diner a l hotel. A partir de 3 000 EUR.',
    },
    heroEyebrow: 'L experience complete a Majorque',
    heroTitle: 'Une journee.\nTout est bien prepare.',
    heroBody:
      'Du golf avec moi, une session de physio avec The Golf Doctor, des transferts prives et un diner dans un hotel partenaire. Tout est coordonne a l avance autour de vous.',
    price: 'A partir de 3 000 EUR',
    primaryCta: 'Prendre contact',
    secondaryCta: 'Voir ce qui est inclus',
    coursesCta: 'Voir tous les parcours',
    playCta: 'Voir Play With A Pro',
    sections: {
      introTitle: 'Une journee Play With A Pro avec tout ce qui va autour.',
      introBody:
        'Nous jouons 18 trous ensemble. J observe votre jeu dans de vraies conditions. Ensuite, John Brazier prend la partie physique de ce que j ai vu sur le parcours. Vous repartez avec une lecture claire et connectee.',
      includedTitle: 'Ce qui est inclus',
      included: [
        'Choix du parcours selon votre jeu et l occasion',
        'Depart prive, les places restantes sont reservees et incluses dans le prix, la partie est donc reservee a votre groupe',
        '18 trous avec Andy Griffiths',
        'Session de physio avec John Brazier apres la partie',
        'Transferts prives aller-retour',
        'Diner a l hotel ou dans un cadre partenaire adapte',
      ],
      whyTitle: 'Pourquoi c est different',
      whyBody:
        'D habitude, coaching et physio restent separes. Ici, les deux se rejoignent : mes notes du parcours passent directement dans l analyse de John. Vous recevez ensuite une seule recommandation, claire et utile.',
      courseTitle: 'Le parcours et le rythme sont choisis avec intention',
      courseBody:
        'Son Gual et Alcanada sont deux grandes options pour ce format, mais le bon choix depend toujours de vous, de votre groupe et de l occasion. Je vous dirai franchement ce qui convient le mieux.',
      finalTitle: 'Chaque Signature Day commence par une conversation.',
      finalBody:
        'Pas de reservation automatique. Envoyez-moi vos dates, la taille du groupe et ce que vous attendez de la journee. Je vous repondrai personnellement avec la bonne formule.',
    },
  },
  nl: {
    metadata: {
      title: 'Signature Day Mallorca | Prive golfdag met fysio en diner',
      description:
        'Een complete golfdag op Mallorca: prive ronde met Andy Griffiths, golffysio met John Brazier, transfers en diner in het hotel. Vanaf 3.000 EUR.',
    },
    heroEyebrow: 'De complete ervaring op Mallorca',
    heroTitle: 'Een dag.\nGoed geregeld van begin tot eind.',
    heroBody:
      'Golf met mij, een fysiosessie met The Golf Doctor, prive transfers en diner in een partnerhotel. Alles wordt vooraf rond u opgebouwd.',
    price: 'Vanaf 3.000 EUR',
    primaryCta: 'Contact opnemen',
    secondaryCta: 'Bekijk wat is inbegrepen',
    coursesCta: 'Bekijk alle banen',
    playCta: 'Bekijk Play With A Pro',
    sections: {
      introTitle: 'Een Play With A Pro dag, maar dan met het hele plaatje eromheen.',
      introBody:
        'We spelen 18 holes samen. Ik zie hoe uw spel zich onder echte omstandigheden gedraagt. Daarna pakt John Brazier het fysieke deel op van wat ik op de baan heb gezien. U gaat weg met een helder totaalbeeld.',
      includedTitle: 'Wat is inbegrepen',
      included: [
        'Baankeuze passend bij uw spel en de gelegenheid',
        'Prive starttijd, de vrije plekken zijn gereserveerd en inbegrepen in de prijs, zodat de ronde alleen voor uw groep is',
        '18 holes met Andy Griffiths',
        'Fysiosessie met John Brazier na de ronde',
        'Prive transfers van en naar de baan',
        'Diner in het hotel of een passende partneropzet',
      ],
      whyTitle: 'Waarom dit anders is',
      whyBody:
        'Meestal blijven coaching en fysio twee losse dingen. Hier komen ze samen: mijn observaties van de ronde gaan direct door naar Johns analyse. Daardoor krijgt u een enkel, concreet plan terug.',
      courseTitle: 'Baan en dagritme worden bewust gekozen',
      courseBody:
        'Son Gual en Alcanada zijn sterke kandidaten voor dit format, maar de juiste keuze hangt altijd af van u, uw groep en de reden van de dag. Ik adviseer wat echt het meeste zin heeft.',
      finalTitle: 'Elke Signature Day begint met een gesprek.',
      finalBody:
        'Geen automatische boeking. Stuur uw data, groepsgrootte en wat u uit de dag wilt halen. Ik kom persoonlijk bij u terug met het juiste voorstel.',
    },
  },
  sv: {
    metadata: {
      title: 'Signature Day Mallorca | Privat golfdag med fysio och middag',
      description:
        'En komplett golfdag pa Mallorca: privat rond med Andy Griffiths, golf-fysio med John Brazier, privata transfers och middag pa hotellet. Fran 3 000 EUR.',
    },
    heroEyebrow: 'Den kompletta upplevelsen pa Mallorca',
    heroTitle: 'En dag.\nAllt ordentligt ordnat.',
    heroBody:
      'Golf med mig, en fysiosession med The Golf Doctor, privata transfers och middag pa partnerhotell. Allt planeras i forvag runt er.',
    price: 'Fran 3 000 EUR',
    primaryCta: 'Kontakta mig',
    secondaryCta: 'Se vad som ingar',
    coursesCta: 'Se alla banor',
    playCta: 'Se Play With A Pro',
    sections: {
      introTitle: 'En Play With A Pro-dag med hela ramen runt omkring.',
      introBody:
        'Vi spelar 18 hal tillsammans. Jag ser hur ditt spel beter sig i riktiga forhallanden. Efter rundan tar John Brazier hand om den fysiska sidan av det jag sag pa banan. Du lamnar dagen med en tydlig helhetsbild.',
      includedTitle: 'Detta ingar',
      included: [
        'Bana vald efter ditt spel och sammanhanget',
        'Privat starttid, de lediga platserna ar bokade och ingar i priset, sa rundan ar reserverad for ert sallskap',
        '18 hal med Andy Griffiths',
        'Fysiosession med John Brazier efter rundan',
        'Privata transfers till och fran banan',
        'Middag pa hotellet eller hos en passande partner',
      ],
      whyTitle: 'Varfor det ar annorlunda',
      whyBody:
        'Vanligtvis ar coaching och fysio separata delar. Har kopplas de ihop: mina observationer fran rundan gar direkt in i Johns analys. Resultatet ar en sammanhangande och konkret rekommendation.',
      courseTitle: 'Bana och upplagg valjs med avsikt',
      courseBody:
        'Son Gual och Alcanada ar starka val for detta format, men ratt bana beror alltid pa dig, gruppen och syftet med dagen. Jag rekommenderar det som faktiskt passar bast.',
      finalTitle: 'Varje Signature Day borjar med ett samtal.',
      finalBody:
        'Ingen automatisk bokning. Skicka dina datum, gruppstorlek och vad du vill fa ut av dagen. Jag svarar personligen med ratt upplagg.',
    },
  },
  zh: {
    metadata: {
      title: '马略卡高端定制高尔夫日 | 私人高尔夫日、理疗与晚餐',
      description:
        '在马略卡的一整天高尔夫体验：与 Andy Griffiths 私人同场，John Brazier 高尔夫理疗，私人接送，以及酒店晚餐。3,000 欧元起。',
    },
    heroEyebrow: '马略卡的完整体验',
    heroTitle: '一天。\n每个环节都安排妥当。',
    heroBody:
      '和我一起下场，再加上 John Brazier 的理疗、私人接送，以及合作酒店晚餐。所有环节都会提前围绕您来安排。',
    price: '3,000 欧元起',
    primaryCta: '联系我',
    secondaryCta: '查看包含内容',
    coursesCta: '查看全部球场',
    playCta: '查看陪打体验',
    sections: {
      introTitle: '这是一个把前后所有环节都接起来的高端体验。',
      introBody:
        '我们一起打 18 洞。我会看到您的球在真实条件下如何表现。随后，John Brazier 会接手我在球场上观察到的身体层面问题。您带走的是一套连贯、清楚的整体判断。',
      includedTitle: '包含内容',
      included: [
        '按您的球技与场合选择最合适的球场',
        '私人开球时段：其余名额已一并预订并含在价格内，整组球局仅属于您这一行人',
        '与 Andy Griffiths 同打 18 洞',
        '赛后由 John Brazier 进行理疗分析',
        '往返球场的私人接送',
        '酒店晚餐或匹配的合作安排',
      ],
      whyTitle: '它为什么不同',
      whyBody:
        '通常教学和理疗是分开的两件事。这里两者会真正连起来：我在球场上的观察会直接进入 John 的分析。最后给您的不是两份意见，而是一套清楚可执行的建议。',
      courseTitle: '球场和当天节奏都会有意识地选择',
      courseBody:
        'Son Gual 和 Alcanada 都很适合这个形式，但真正合适的选择仍然取决于您、您的同行人，以及这一天想达到什么效果。我会坦白告诉您什么最合适。',
      finalTitle: '每一个高端定制高尔夫日都从一次沟通开始。',
      finalBody:
        '没有自动下单。把您的日期、人数和期待发给我，我会亲自回复，给您最合适的安排。',
    },
  },
}

export function getSignatureDayContent(locale = 'zh') {
  return SIGNATURE_DAY_CONTENT[locale] || SIGNATURE_DAY_CONTENT.zh
}

export function buildSignatureDayMetadata(locale = 'zh') {
  const content = getSignatureDayContent(locale)
  return buildPageMetadata(
    `/${locale}/signature-day`,
    locale,
    {
      ...content.metadata,
      robots: { index: false, follow: false },
    },
  )
}

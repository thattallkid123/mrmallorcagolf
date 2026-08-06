import { buildPageMetadata } from './page-metadata'

const HOTEL_PARTNERS = {
  de: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Matsuhisa, Lena by Dani Garcia.' },
    { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor. Llum i Sal, Mel. Alcanada 35 Minuten entfernt.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular by Ramon Freixa. Alcanada 20 Minuten entfernt.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA Meeresfrucht-Terrasse. Golf de Andratx 10 Minuten entfernt.' },
    { name: 'Belmond La Residencia', note: 'Deia. Son Marroig. Alcanada 40 Minuten entfernt.' },
  ],
  es: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Matsuhisa, Lena by Dani Garcia.' },
    { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor. Llum i Sal, Mel. Alcanada a 35 minutos.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular by Ramon Freixa. Alcanada a 20 minutos.' },
    { name: 'Aethos Mallorca', note: 'Peguera. Terraza de marisco ONDA. Golf de Andratx a 10 minutos.' },
    { name: 'Belmond La Residencia', note: 'Deia. Son Marroig. Alcanada a 40 minutos.' },
  ],
  fr: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Matsuhisa, Lena by Dani Garcia.' },
    { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor. Llum i Sal, Mel. Alcanada a 35 minutes.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular by Ramon Freixa. Alcanada a 20 minutes.' },
    { name: 'Aethos Mallorca', note: 'Peguera. Terrasse fruits de mer ONDA. Golf de Andratx a 10 minutes.' },
    { name: 'Belmond La Residencia', note: 'Deia. Son Marroig. Alcanada a 40 minutes.' },
  ],
  nl: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Matsuhisa, Lena by Dani Garcia.' },
    { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor. Llum i Sal, Mel. Alcanada 35 minuten verderop.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular by Ramon Freixa. Alcanada 20 minuten verderop.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA visterras. Golf de Andratx 10 minuten verderop.' },
    { name: 'Belmond La Residencia', note: 'Deia. Son Marroig. Alcanada 40 minuten verderop.' },
  ],
  sv: [
    { name: 'Mandarin Oriental Punta Negra', note: 'Calvia. Matsuhisa, Lena by Dani Garcia.' },
    { name: 'Four Seasons Resort at Formentor', note: 'Cap de Formentor. Llum i Sal, Mel. Alcanada 35 minuter bort.' },
    { name: 'The Lodge Mallorca', note: 'Sa Pobla. Singular by Ramon Freixa. Alcanada 20 minuter bort.' },
    { name: 'Aethos Mallorca', note: 'Peguera. ONDA skaldjursterrass. Golf de Andratx 10 minuter bort.' },
    { name: 'Belmond La Residencia', note: 'Deia. Son Marroig. Alcanada 40 minuter bort.' },
  ],
  zh: [
    { name: 'Mandarin Oriental Punta Negra 文华东方', note: '位于Calvia。设有Matsuhisa、Lena by Dani Garcia餐厅。' },
    { name: 'Four Seasons Resort at Formentor 四季', note: '位于Formentor角。Llum i Sal、Mel餐厅。距Alcanada球场35分钟。' },
    { name: 'The Lodge Mallorca', note: '位于Sa Pobla。Singular by Ramon Freixa餐厅。距Alcanada球场20分钟。' },
    { name: 'Aethos Mallorca', note: '位于Peguera。ONDA海鲜露台。距Golf de Andratx球场10分钟。' },
    { name: 'Belmond La Residencia', note: '位于Deia。Son Marroig庄园。距Alcanada球场40分钟。' },
  ],
}

const SIGNATURE_DAY_CONTENT = {
  de: {
    metadata: {
      title: 'Signature Day Mallorca | Privater Golftag mit Physio und Dinner',
      description:
        'Ein kompletter Golftag auf Mallorca: private Runde mit Andy Griffiths, Golf-Physio mit John Brazier, Transfers und Dinner im Hotel. Ab 3.000 EUR.',
    },
    heroEyebrow: 'Das komplette Erlebnis auf Mallorca',
    heroTitle: 'Ein privater Golftag,\naufgebaut um Runde, Koerper und Abend.',
    heroBody:
      'Golf mit mir, eine Physio-Session mit John Brazier, private Transfers und ein Abendessen im Partnerhotel. Alles wird im Voraus koordiniert, damit der Tag durchdacht und persoenlich wirkt. Videografie und Fotobegleitung koennen dazugebucht werden.',
    price: 'Ab 3.000 EUR',
    primaryCta: 'Anfragen',
    secondaryCta: 'Leistungen ansehen',
    coursesCta: 'Alle 24 Plaetze ansehen',
    playCta: 'Play With A Pro ansehen',
    whatsappLabel: 'Per WhatsApp schreiben',
    sections: {
      introTitle: 'Ein premium Golftag, nicht nur eine laengere Runde.',
      introBody:
        'Ich spiele 18 Loecher mit Ihnen, beobachte, wie sich Ihr Spiel unter echten Bedingungen verhaelt, und mache waehrenddessen Notizen. Nach der Runde untersucht John Brazier die physische Seite dessen, was ich gesehen habe. Zusammen bekommen Sie ein verbundenes Gesamtbild: was auf dem Platz passiert ist, warum es koerperlich so ist, und woran Sie arbeiten sollten.',
      introBody2:
        'Der Tag umfasst ausserdem private Transfers, einen kleinen Empfang am Platz, wo moeglich, und ein Abendessen im Partnerhotel. Ich koordiniere das Ganze direkt, damit Sie es nicht muessen.',
      includedTitle: 'Was enthalten ist',
      included: [
        ['Platzwahl', 'Persoenlich ausgewaehlt fuer Ihr Spiel, Ihre Gruppe und den Anlass. Mitgliederplaetze verfuegbar, wo passend.'],
        ['Private Startzeit', 'Vor Ihrer Ankunft gebucht und organisiert, freie Plaetze sind reserviert und im Preis enthalten, sodass die Runde nur Ihrer Gruppe gehoert.'],
        ['18 Loecher mit Andy', 'PGA Advanced Professional, Trackman Master, TPI Level 3. Ich mache waehrenddessen Notizen zu dem, was ich in Ihrem Spiel sehe.'],
        ['Gemeinsame Empfehlung von Andy und John', 'Meine Beobachtungen auf dem Platz und Johns koerperliche Befunde werden zu einer konkreten Empfehlung verbunden. Keine zwei getrennten Sitzungen.'],
        ['Golf-Physio mit John Brazier', 'Session nach der Runde mit The Golf Doctor. Bewegungsanalyse, Erholung und persoenliche Empfehlungen zum Mitnehmen.'],
        ['Private Transfers', 'Zum und vom Platz, abgestimmt mit Ihrem Hotel.'],
        ['Abendessen', 'Private Dinner-Organisation in Ihrem Hotel, zwischen mir und Ihrem Concierge-Team abgestimmt.'],
      ],
      introEyebrow: 'Was das ist',
      whoForEyebrow: 'Fuer wen das geeignet ist',
      whoForHeadline: 'Hochwertig, premium, und fuer einen besonderen Anlass gemacht.',
      courseEyebrow: 'Der Platz',
      whoForTitle: 'Ideal fuer',
      whoForIdeal: [
        ['Golfer, denen der Tag besonders sein soll', 'Eine ernsthafte private Buchung, keine Standard-Startzeit mit ein paar Extras.'],
        ['Spieler, die eine klare Erkenntnis wollen', 'Sie bekommen ein verbundenes Bild von Runde, Koerper und Prioritaeten danach.'],
        ['Gruppen, die einen Anlass feiern', 'Ideal fuer eine Reise, die durchdacht, unvergesslich und gut organisiert sein soll.'],
      ],
      whoForNotIdealTitle: 'Weniger geeignet fuer',
      whoForNotIdeal: [
        ['Preisorientierte Buchungen', 'Dies ist ein Premium-Tag und entsprechend bepreist.'],
        ['Alle, die nur ein schnelles Extra suchen', 'Fuer eine reine Startzeit ist der normale Play With A Pro Weg die bessere Wahl.'],
      ],
      whoForNote:
        'Der Premium-Preis spiegelt die vollstaendige Koordination wider: Golf, Physio, Transfers, Dinner und die Aufmerksamkeit rund um den Tag. Es soll sich wie ein durchdachtes Erlebnis anfuehlen, nicht wie eine normale Runde mit teuren Extras.',
      howEyebrow: 'Wie der Tag ablaeuft',
      howTitle: 'Sechs Teile. Alles verbunden.',
      howBody: 'Jeder Teil baut auf dem naechsten auf. Die Notizen aus der Runde fliessen in die Physio-Session. Johns Befunde kommen zurueck zu mir. Sie gehen mit einer Empfehlung nach Hause, nicht mit sechs getrennten Erlebnissen.',
      dayArc: [
        { time: 'Vor der Runde', title: 'Transfer und Platzbriefing', body: 'Privater Transfer von Ihrem Hotel zum Platz. Ich empfange Sie bei der Ankunft. Vor dem Spiel will ich verstehen, wie Ihr Spiel funktioniert, woran Sie gearbeitet haben und was Sie sich vom Tag wuenschen. Kurz und konkret, kein allgemeines Willkommenspaket.' },
        { time: 'Die Runde', title: '18 Loecher mit mir', body: 'Ein Platz, gewaehlt fuer Ihr Spiel und den Anlass. Ich spiele die vollen 18 Loecher mit Ihnen. Platzmanagement, Schlagwahl und die Muster in Ihrem Spiel, die nur in einer echten Runde sichtbar werden.' },
        { time: 'Nach der Runde', title: 'Physio mit John Brazier', body: 'John Brazier, The Golf Doctor, knuepft genau dort an, wo die Runde endete. Ich gebe ihm meine Notizen aus den 18 Loechern: Bewegungsmuster, Kompensationen unter Druck, Tendenzen, die zu Score-Problemen wurden. John ergaenzt das koerperliche Bild.' },
        { time: 'Das Debriefing', title: 'Was Sie mitnehmen', body: 'Vor dem Abend setzen wir uns zusammen. Sie gehen mit einem klaren Bild davon, was auf dem Platz passiert ist, warum es koerperlich so ist, und woran Sie arbeiten sollten. Kein allgemeines Feedback-Blatt, sondern konkrete, verbundene Beobachtungen aus einer Runde, die Sie tatsaechlich gespielt haben.' },
        { time: 'Der Abend', title: 'Dinner in Ihrem Hotel', body: 'Der Tag endet in Ihrem Hotel. Ich stimme mich direkt mit Ihrem Concierge-Team ab, um den Abend rund um das zu organisieren, was Ihr Hotel gut kann: ein Chef’s Table, eine private Terrasse oder ein eigenes Dinner-Arrangement.' },
        { time: 'Optional', title: 'Empfang und Extras', body: 'Ein kleiner Empfang vom Platz bei Ankunft, wo verfuegbar. Ein Caddy kann je nach Platz und Datum organisiert und bei der Buchung bestaetigt werden. Videografie und Fotobegleitung koennen dazugebucht werden. Premium-Schlaegermiete kann vorab am Platz arrangiert werden.' },
      ],
      whyTitle: 'Warum es anders ist',
      whyEyebrow: 'Warum es anders ist',
      whyHeading: 'Eine Empfehlung. Zwei Blickwinkel.',
      whyBody:
        'Die meisten Golfer, die eine Coaching- und eine Physio-Session bekommen, erhalten zwei getrennte Meinungen, die sich nie treffen. Beim Signature Day ist das anders.',
      whyBody2:
        'Waehrend der Runde beobachte ich alles: welche Kompensationen unter Druck auftreten, wo die Entscheidungsfindung ins Wanken geraet, welche Muster zu Score-Problemen fuehren. Nach der Runde gebe ich diese Notizen direkt an John weiter. Er untersucht die koerperliche Seite dessen, was ich gesehen habe: eine verspannte Hueft, die den Schwungpfad erklaert, eine Schulterblockade, die den Durchschwung unangenehm macht, ein Bewegungsmuster, das wie ein technisches Problem aussieht, aber eigentlich eine Beweglichkeitsfrage ist.',
      whyBody3:
        'Bis zum Debriefing haben Sie ein Bild: was ich auf dem Platz gesehen habe, was John im Koerper gefunden hat, und woran Sie zuerst arbeiten sollten.',
      johnEyebrow: 'John Brazier, The Golf Doctor',
      johnBody:
        'John lebt auf Mallorca und arbeitet mit Golfern aller Spielstaerken. Er ist dafuer bekannt, koerperliche Befunde direkt mit dem zu verbinden, was tatsaechlich auf dem Platz passiert. Die Kombination aus seiner und meiner Arbeit sorgt dafuer, dass die Empfehlungen, die Sie mitnehmen, konkret, verbunden und in einer tatsaechlich gespielten Runde begruendet sind.',
      johnBody2: 'John kann auch ausserhalb des Signature Day mit Klienten arbeiten. Fragen Sie bei der Anfrage, wenn Sie eine Session zu einer normalen Play With A Pro Buchung hinzufuegen moechten.',
      courseTitle: 'Fuer den Anlass gewaehlt.',
      courseBody:
        'Son Gual und Alcanada sind meine bevorzugten Plaetze fuer diesen kompletten Tag. Son Gual ist mein Lieblingsplatz auf Mallorca: Thomas Himmels Design von 2007, die Schlussfolge von 15 bis 18 gehoert zu den besten im europaeischen Golf. Alcanada ist Robert Trent Jones Jr. in seiner schoensten Form, der Leuchtturm ist fast die ganze Runde ueber sichtbar.',
      courseBody2: 'Der richtige Platz haengt von Ihnen, Ihrer Gruppe und dem ab, was Sie sich vom Tag wuenschen. Ich empfehle ehrlich und erklaere warum.',
      eveningEyebrow: 'Der Abend',
      eveningTitle: 'Dinner in Ihrem Hotel.',
      eveningBody:
        'Der Signature Day endet bewusst in Ihrem Hotel. Ich arbeite direkt mit Ihrem Concierge-Team zusammen, um den Abend rund um das zu organisieren, was Ihr Hotel gut kann: eine private Terrasse, ein Chef’s Table oder ein eigenes Dinner-Arrangement.',
      eveningBody2: 'Das genaue Arrangement haengt von Ihrem Hotel und den Moeglichkeiten an Ihrem Datum ab, aber das ist der Standard, den Sie erwarten koennen.',
      eveningBody3: 'Wohnen Sie in einem Hotel, das nicht in der Liste steht, sprechen Sie mich an. Die meisten Fuenf-Sterne-Hotels der Insel koennen das mit genug Vorlauf einrichten.',
      extrasEyebrow: 'Optional und zusaetzlich',
      extrasTitle: 'Ergaenzen, was fuer Ihren Tag sinnvoll ist.',
      extrasBody: 'Nicht alles muss dazugebucht werden. Diese Optionen sind verfuegbar, wenn Sie sie moechten.',
      extras: [
        ['Caddy', 'Ich arbeite daran, einen Caddy als Standard einzuschliessen. Wird bei der Buchung bestaetigt. Ortskenntnis, Schlaegerwahl und Platzlesen fuer die ganze Runde.'],
        ['Videograf', 'Ein eigener Videograf fuer den Tag. Schwungaufnahmen, Platz-Highlights und Inhalte, die Sie behalten und nutzen koennen.'],
        ['Premium-Schlaegermiete', 'Die beste verfuegbare Ausruestung am Platz, vorab organisiert.'],
        ['Willkommenspaket', 'Eine kleine Auswahl vom Platz oder der Insel bei Ankunft, wo verfuegbar. Nicht immer moeglich, aber inklusive, wo es geht.'],
        ['Mehrtaegiges Paket', 'Der Signature Day als Teil einer geplanten Reise. Ich kann die komplette Route drumherum aufbauen, inklusive weiterer Plaetze und Tage auf der Insel.'],
      ],
      pricingEyebrow: 'Preise',
      pricingTitle: 'Bestaetigt nach dem ersten Gespraech.',
      pricingBody: 'Der Signature Day startet bei 3.000 EUR. Der endgueltige Preis haengt vom Platz, dem Hotel, der Personenzahl und den gewuenschten Extras ab. Alles wird bestaetigt, bevor Sie sich festlegen.',
      pricingBody2:
        'Enthalten ist der Tag selbst: Platzwahl, Startzeit, die komplette Runde, John Braziers Session, private Transfers und die Dinner-Koordination. Getrennt sind Greenfee, Mittagessen und alle optionalen Extras. Diese Trennung macht das Angebot klar und den Premium-Teil des Tages leicht verstaendlich.',
      alwaysIncludedLabel: 'Immer enthalten',
      separateNote: 'Greenfee, Mittagessen und optionale Extras sind getrennt und werden mit Ihnen vor dem Tag bestaetigt.',
      pricingCta: 'Signature Day anfragen',
      finalEyebrow: 'Bereit zu buchen',
      finalTitle: 'Nennen Sie mir Ihre Daten, ich melde mich persoenlich zurueck.',
      finalBody: 'Jeder Signature Day beginnt mit einem Gespraech. Keine automatische Buchung. Nur eine persoenliche Antwort innerhalb von 24 Stunden.',
      finalCta: 'Kontakt aufnehmen',
    },
  },
  es: {
    metadata: {
      title: 'Signature Day Mallorca | Dia privado de golf, fisio y cena',
      description:
        'Un dia completo de golf en Mallorca: vuelta privada con Andy Griffiths, fisio de golf con John Brazier, traslados y cena en hotel asociado. Desde 3.000 EUR.',
    },
    heroEyebrow: 'La experiencia completa en Mallorca',
    heroTitle: 'Un dia privado de golf,\npensado alrededor de la vuelta, el cuerpo y la noche.',
    heroBody:
      'Golf conmigo, una sesion de fisio con John Brazier, traslados privados y cena en un hotel asociado. Todo se coordina de antemano para que el dia se sienta deliberado, personal y a la altura del precio. Se puede anadir videografia y fotografia si quiere el dia documentado.',
    price: 'Desde 3.000 EUR',
    primaryCta: 'Contactar',
    secondaryCta: 'Ver lo incluido',
    coursesCta: 'Ver los 24 campos',
    playCta: 'Ver Play With A Pro',
    whatsappLabel: 'Escribir por WhatsApp',
    sections: {
      introTitle: 'Un dia de golf premium, no solo una vuelta mas larga.',
      introBody:
        'Juego 18 hoyos con usted, observo como se comporta su juego en condiciones reales y tomo notas durante toda la vuelta. Despues, John Brazier examina la parte fisica de lo que he visto. Entre los dos, sale con una vision conectada: que paso en el campo, por que pasa en su cuerpo y que trabajar.',
      introBody2:
        'El dia tambien incluye traslados privados, una pequena bienvenida en el club cuando es posible, y cena esa noche en un hotel asociado. Yo coordino todo directamente para que usted no tenga que hacerlo.',
      includedTitle: 'Que esta incluido',
      included: [
        ['Eleccion del campo', 'Elegido personalmente segun su juego, su grupo y la ocasion. Campos solo para socios disponibles cuando corresponde.'],
        ['Hora de salida privada', 'Reservada y gestionada antes de su llegada, con las plazas libres reservadas e incluidas en el precio, asi que la vuelta es solo para su grupo.'],
        ['18 hoyos conmigo', 'PGA Advanced Professional, Trackman Master, TPI Level 3. Tomo notas durante toda la vuelta sobre lo que veo en su juego.'],
        ['Diagnostico conjunto de Andy y John', 'Mis observaciones en el campo y los hallazgos fisicos de John se combinan en un conjunto de recomendaciones concreto. No dos sesiones separadas.'],
        ['Fisio de golf con John Brazier', 'Sesion tras la vuelta con The Golf Doctor. Evaluacion del movimiento, recuperacion y recomendaciones personalizadas para llevarse a casa.'],
        ['Traslados privados', 'De ida y vuelta al campo, coordinados con su hotel.'],
        ['Cena por la noche', 'Organizacion privada de la cena en su hotel, coordinada entre yo y su equipo de conserjeria.'],
      ],
      introEyebrow: 'Que es esto',
      whoForEyebrow: 'Para quien es esto',
      whoForHeadline: 'De alto nivel, premium, y pensado para una ocasion especial.',
      courseEyebrow: 'El campo',
      whoForTitle: 'Ideal para',
      whoForIdeal: [
        ['Golfistas que quieren que el dia sea especial', 'Una reserva privada seria, no una salida estandar con algunos extras anadidos.'],
        ['Jugadores que quieren una conclusion clara', 'Se lleva una lectura conectada de la vuelta, el cuerpo y las prioridades despues.'],
        ['Grupos que celebran una ocasion', 'Ideal para un viaje que debe sentirse cuidado, memorable y bien gestionado.'],
      ],
      whoForNotIdealTitle: 'No es lo ideal para',
      whoForNotIdeal: [
        ['Quien busca el precio mas bajo', 'Es un dia premium y tiene el precio correspondiente.'],
        ['Quien busca solo un extra rapido', 'Si solo quiere una hora de salida, la opcion estandar de Play With A Pro encaja mejor.'],
      ],
      whoForNote:
        'El precio premium refleja la coordinacion completa: golf, fisio, traslados, cena y el nivel de atencion alrededor del dia. Esta pensado para sentirse como una experiencia bien construida, no como una vuelta estandar con extras caros anadidos.',
      howEyebrow: 'Como se desarrolla el dia',
      howTitle: 'Seis partes. Todas conectadas.',
      howBody: 'Cada parte alimenta la siguiente. Las notas de la vuelta pasan a la sesion de fisio. Los hallazgos de John vuelven a mi. Sale con una sola recomendacion, no con seis experiencias separadas.',
      dayArc: [
        { time: 'Antes de la vuelta', title: 'Traslado y briefing del campo', body: 'Traslado privado desde su hotel hasta el campo. Le recibo a su llegada. Antes de jugar, quiero entender como funciona su juego, en que ha estado trabajando y que quiere del dia. El briefing es corto y concreto, nada de bienvenida generica.' },
        { time: 'La vuelta', title: '18 hoyos conmigo', body: 'Un campo, elegido para su juego y la ocasion. Juego a su lado los 18 hoyos completos. Gestion del campo, seleccion de golpes y los patrones de su juego que solo aparecen en una vuelta real.' },
        { time: 'Despues de la vuelta', title: 'Fisio con John Brazier', body: 'John Brazier, The Golf Doctor, continua exactamente donde termino la vuelta. Le paso mis notas de los 18 hoyos: los patrones de movimiento que vi, las compensaciones bajo presion, las tendencias que se convirtieron en problemas de score. John anade la parte fisica.' },
        { time: 'El resumen', title: 'Lo que se lleva', body: 'Antes de la noche, nos sentamos juntos. Sale con una imagen clara de lo que paso en el campo, por que paso fisicamente y en que trabajar. No una hoja de comentarios generica, sino observaciones concretas y conectadas de una vuelta que realmente jugo.' },
        { time: 'La noche', title: 'Cena en su hotel', body: 'El dia termina en su hotel. Coordino directamente con su equipo de conserjeria para organizar la noche alrededor de lo que su alojamiento hace bien: una mesa del chef, una terraza privada o un montaje propio.' },
        { time: 'Opcional', title: 'Bienvenida y extras', body: 'Una pequena bienvenida del club a la llegada, cuando esta disponible. El caddy se puede organizar segun el campo y la fecha, y se confirma en la reserva. Se puede anadir videografia y fotografia si quiere documentar el dia. El alquiler de palos premium se puede organizar de antemano en el campo.' },
      ],
      whyTitle: 'Por que es diferente',
      whyEyebrow: 'Por que es diferente',
      whyHeading: 'Un diagnostico. Dos puntos de vista.',
      whyBody:
        'La mayoria de golfistas que reciben una sesion de coaching y otra de fisio obtienen dos opiniones separadas que nunca se encuentran. En el Signature Day, si lo hacen.',
      whyBody2:
        'Durante la vuelta observo todo: que compensaciones aparecen bajo presion, donde falla la toma de decisiones, que patrones causan los problemas de score. Despues de la vuelta, le paso esas notas directamente a John. El examina la parte fisica de lo que vi: una cadera rigida que explica el plano del swing, una restriccion en el hombro que incomoda el follow-through, un patron de movimiento que parece un problema tecnico pero es en realidad una cuestion de movilidad.',
      whyBody3:
        'Cuando llegamos al resumen, tiene una sola imagen: lo que vi en el campo, lo que John encontro en el cuerpo, y en que trabajar primero.',
      johnEyebrow: 'John Brazier, The Golf Doctor',
      johnBody:
        'John vive en Mallorca y trabaja con golfistas de todos los niveles. Es conocido por conectar los hallazgos fisicos con lo que realmente ocurre en el campo. La combinacion de su trabajo y el mio hace que las recomendaciones que se lleva sean concretas, conectadas y basadas en una vuelta que realmente jugo.',
      johnBody2: 'John tambien puede trabajar con clientes fuera del Signature Day. Pregunte al hacer su consulta si quiere anadir una sesion a una reserva estandar de Play With A Pro.',
      courseTitle: 'Elegido para la ocasion.',
      courseBody:
        'Son Gual y Alcanada son mis campos principales para un dia completo de esta categoria. Son Gual es mi campo favorito de Mallorca: el diseno de Thomas Himmel de 2007, el tramo final del 15 al 18 esta entre los mejores del golf europeo. Alcanada es Robert Trent Jones Jr. en su version mas espectacular, con el faro visible durante casi toda la vuelta.',
      courseBody2: 'El campo adecuado depende de usted, su grupo y lo que busque del dia. Le recomendare con honestidad y le explicare por que.',
      eveningEyebrow: 'La noche',
      eveningTitle: 'Cena en su hotel.',
      eveningBody:
        'El Signature Day esta pensado para terminar en su hotel. Trabajo directamente con su equipo de conserjeria para coordinar la noche alrededor de lo que su alojamiento hace bien: una terraza privada, una mesa del chef o un montaje de cena propio.',
      eveningBody2: 'El montaje concreto depende de su hotel y de lo que puedan ofrecer en sus fechas, pero este es el estandar que puede esperar.',
      eveningBody3: 'Si se aloja en un hotel que no aparece en la lista, contacteme. La mayoria de los cinco estrellas de la isla pueden organizarlo con suficiente antelacion.',
      extrasEyebrow: 'Opcional y adicional',
      extrasTitle: 'Anada lo que tenga sentido para su dia.',
      extrasBody: 'No todo hace falta anadirlo. Estas opciones estan disponibles si las quiere.',
      extras: [
        ['Caddy', 'Estoy trabajando para incluir un caddy de forma estandar. Se confirma en la reserva. Conocimiento local, seleccion de palos y lectura del campo durante toda la vuelta.'],
        ['Videografo', 'Un videografo dedicado para el dia. Grabacion del swing, momentos destacados del campo y contenido que puede conservar y usar.'],
        ['Alquiler de palos premium', 'El mejor equipo disponible en el campo, organizado de antemano.'],
        ['Detalle de bienvenida', 'Una pequena seleccion del campo o de la isla a la llegada, cuando esta disponible. No siempre es posible, pero se incluye cuando se puede.'],
        ['Paquete de varios dias', 'El Signature Day como parte de un viaje planificado. Puedo construir el itinerario completo alrededor, incluyendo otros campos y dias en la isla.'],
      ],
      pricingEyebrow: 'Precios',
      pricingTitle: 'Confirmado tras la primera conversacion.',
      pricingBody: 'El Signature Day empieza en 3.000 EUR. La cifra final depende del campo, el hotel, el numero de personas y los extras que quiera. Todo se confirma antes de comprometerse a nada.',
      pricingBody2:
        'Lo que esta incluido es el dia en si: eleccion del campo, hora de salida, la vuelta completa, la sesion de John Brazier, traslados privados y la coordinacion de la cena. Lo que es aparte es el green fee, el almuerzo y cualquier extra opcional. Esa division mantiene la oferta clara y hace que la parte premium del dia sea facil de entender.',
      alwaysIncludedLabel: 'Siempre incluido',
      separateNote: 'El green fee, el almuerzo y los extras opcionales van aparte y se confirman con usted antes del dia.',
      pricingCta: 'Consultar sobre el Signature Day',
      finalEyebrow: 'Listo para reservar',
      finalTitle: 'Digame sus fechas y le respondere personalmente.',
      finalBody: 'Cada Signature Day empieza con una conversacion. Sin reserva automatica. Solo una respuesta directa y personal en 24 horas.',
      finalCta: 'Ponerse en contacto',
    },
  },
  fr: {
    metadata: {
      title: 'Signature Day Majorque | Journee privee golf, physio et diner',
      description:
        'Une journee de golf complete a Majorque : partie privee avec Andy Griffiths, physio golf avec John Brazier, transferts et diner a l hotel. A partir de 3 000 EUR.',
    },
    heroEyebrow: 'L experience complete a Majorque',
    heroTitle: 'Une journee privee de golf,\nconstruite autour de la partie, du corps et de la soiree.',
    heroBody:
      'Du golf avec moi, une session de physio avec John Brazier, des transferts prives et un diner dans un hotel partenaire. Tout est coordonne a l avance pour que la journee soit deliberee, personnelle et a la hauteur du prix. Videographie et photos peuvent etre ajoutees si vous voulez garder une trace de la journee.',
    price: 'A partir de 3 000 EUR',
    primaryCta: 'Prendre contact',
    secondaryCta: 'Voir ce qui est inclus',
    coursesCta: 'Voir les 24 parcours',
    playCta: 'Voir Play With A Pro',
    whatsappLabel: 'Ecrire sur WhatsApp',
    sections: {
      introTitle: 'Une journee de golf haut de gamme, pas juste une partie plus longue.',
      introBody:
        'Je joue 18 trous avec vous, j observe comment votre jeu se comporte en conditions reelles, et je prends des notes tout au long de la partie. Apres la partie, John Brazier examine la dimension physique de ce que j ai observe. Ensemble, vous repartez avec une vision connectee : ce qui s est passe sur le parcours, pourquoi cela se manifeste dans votre corps, et sur quoi travailler.',
      introBody2:
        'La journee comprend aussi des transferts prives, un accueil au club quand c est possible, et un diner ce soir-la dans un hotel partenaire. Je coordonne l ensemble directement pour que vous n ayez pas a le faire.',
      includedTitle: 'Ce qui est inclus',
      included: [
        ['Choix du parcours', 'Choisi personnellement selon votre jeu, votre groupe et l occasion. Parcours reserves aux membres disponibles quand c est pertinent.'],
        ['Depart prive', 'Reserve et gere avant votre arrivee, les places restantes sont reservees et incluses dans le prix, la partie est donc reservee a votre groupe.'],
        ['18 trous avec moi', 'PGA Advanced Professional, Trackman Master, TPI Level 3. Je prends des notes tout au long de la partie sur ce que je vois dans votre jeu.'],
        ['Diagnostic commun d Andy et John', 'Mes observations sur le parcours et les constats physiques de John sont combines en un ensemble de recommandations concret. Pas deux sessions separees.'],
        ['Physio golf avec John Brazier', 'Session apres la partie avec The Golf Doctor. Evaluation du mouvement, recuperation et recommandations personnalisees a emporter.'],
        ['Transferts prives', 'Aller-retour au parcours, coordonnes avec votre hotel.'],
        ['Diner du soir', 'Organisation privee du diner dans votre hotel, coordonnee entre moi et votre equipe de conciergerie.'],
      ],
      introEyebrow: 'Ce que c est',
      whoForEyebrow: 'Pour qui c est fait',
      whoForHeadline: 'Haut de gamme, premium, et pense pour une occasion particuliere.',
      courseEyebrow: 'Le parcours',
      whoForTitle: 'Ideal pour',
      whoForIdeal: [
        ['Golfeurs qui veulent une journee qui se demarque', 'Une reservation privee serieuse, pas un depart standard avec quelques extras ajoutes.'],
        ['Joueurs qui veulent une conclusion claire', 'Vous repartez avec une lecture connectee de la partie, du corps et des priorites ensuite.'],
        ['Groupes qui marquent une occasion', 'Ideal pour un voyage qui doit se sentir pense, memorable et bien gere.'],
      ],
      whoForNotIdealTitle: 'Moins adapte pour',
      whoForNotIdeal: [
        ['Ceux qui cherchent le prix le plus bas', 'C est une journee haut de gamme, au prix en consequence.'],
        ['Ceux qui cherchent juste un petit extra', 'Si vous voulez simplement un depart, la formule standard Play With A Pro convient mieux.'],
      ],
      whoForNote:
        'Le prix eleve reflete la coordination complete : golf, physio, transferts, diner et le niveau d attention autour de la journee. L objectif est que cela ressemble a une experience bien construite, pas a une partie standard avec quelques extras couteux ajoutes.',
      howEyebrow: 'Comment se deroule la journee',
      howTitle: 'Six etapes. Toutes connectees.',
      howBody: 'Chaque etape alimente la suivante. Les notes de la partie passent dans la session de physio. Les constats de John me reviennent. Vous repartez avec une seule recommandation, pas six experiences separees.',
      dayArc: [
        { time: 'Avant la partie', title: 'Transfert et briefing du parcours', body: 'Transfert prive depuis votre hotel jusqu au parcours. Je vous accueille a votre arrivee. Avant de jouer, je veux comprendre comment fonctionne votre jeu, sur quoi vous avez travaille et ce que vous attendez de la journee. Le briefing est court et precis, pas de pack d accueil generique.' },
        { time: 'La partie', title: '18 trous avec moi', body: 'Un parcours, choisi pour votre jeu et l occasion. Je joue a vos cotes les 18 trous complets. Gestion du parcours, choix des coups et les schemas de votre jeu qui n apparaissent que dans une vraie partie.' },
        { time: 'Apres la partie', title: 'Physio avec John Brazier', body: 'John Brazier, The Golf Doctor, reprend exactement la ou la partie s est arretee. Je lui transmets mes notes des 18 trous : les schemas de mouvement observes, les compensations sous pression, les tendances devenues des problemes de score. John ajoute la dimension physique.' },
        { time: 'Le bilan', title: 'Ce que vous emportez', body: 'Avant la soiree, nous nous asseyons ensemble. Vous repartez avec une image claire de ce qui s est passe sur le parcours, pourquoi cela se manifeste physiquement, et sur quoi travailler. Pas une fiche de retour generique, mais des observations precises et connectees issues d une partie que vous avez reellement jouee.' },
        { time: 'La soiree', title: 'Diner a votre hotel', body: 'La journee se termine a votre hotel. Je coordonne directement avec votre equipe de conciergerie pour organiser la soiree autour de ce que votre etablissement fait bien : une table du chef, une terrasse privee ou un arrangement de diner dedie.' },
        { time: 'Optionnel', title: 'Accueil et extras', body: 'Un petit accueil du club a l arrivee, quand disponible. Un caddy peut etre organise selon le parcours et la date, confirme a la reservation. Videographie et photos peuvent etre ajoutees si vous voulez documenter la journee. La location de clubs premium peut etre organisee a l avance au parcours.' },
      ],
      whyTitle: 'Pourquoi c est different',
      whyEyebrow: 'Pourquoi c est different',
      whyHeading: 'Un diagnostic. Deux regards.',
      whyBody:
        'La plupart des golfeurs qui font une session de coaching et une session de physio obtiennent deux avis separes qui ne se rejoignent jamais. Sur le Signature Day, si.',
      whyBody2:
        'Pendant la partie, j observe tout : quelles compensations apparaissent sous pression, ou la prise de decision faiblit, quels schemas causent les problemes de score. Apres la partie, je transmets ces notes directement a John. Il examine la dimension physique de ce que j ai vu : une hanche raide qui explique le plan de swing, une restriction d epaule qui rend le follow-through inconfortable, un schema de mouvement qui ressemble a un probleme technique mais qui est en realite une question de mobilite.',
      whyBody3:
        'Au moment du bilan, vous avez une seule image : ce que j ai vu sur le parcours, ce que John a trouve dans le corps, et sur quoi travailler en priorite.',
      johnEyebrow: 'John Brazier, The Golf Doctor',
      johnBody:
        'John vit a Majorque et travaille avec des golfeurs de tous niveaux. Il est reconnu pour relier les constats physiques a ce qui se passe reellement sur le parcours. La combinaison de son travail et du mien fait que les recommandations que vous emportez sont precises, connectees et ancrees dans une partie que vous avez reellement jouee.',
      johnBody2: 'John peut aussi travailler avec des clients en dehors du Signature Day. Demandez lors de votre demande si vous voulez ajouter une session a une reservation Play With A Pro standard.',
      courseTitle: 'Choisi pour l occasion.',
      courseBody:
        'Son Gual et Alcanada sont mes parcours principaux pour une journee complete de ce niveau. Son Gual est mon parcours prefere a Majorque : le dessin de Thomas Himmel de 2007, l enchainement final du 15 au 18 compte parmi les meilleurs du golf europeen. Alcanada, c est Robert Trent Jones Jr. dans sa version la plus spectaculaire, avec le phare visible presque toute la partie.',
      courseBody2: 'Le bon parcours depend de vous, de votre groupe et de ce que vous attendez de la journee. Je vous conseillerai honnetement et vous expliquerai pourquoi.',
      eveningEyebrow: 'La soiree',
      eveningTitle: 'Diner a votre hotel.',
      eveningBody:
        'Le Signature Day est pense pour se terminer a votre hotel. Je travaille directement avec votre equipe de conciergerie pour organiser la soiree autour de ce que votre etablissement fait bien : une terrasse privee, une table du chef ou un arrangement de diner dedie.',
      eveningBody2: 'L arrangement precis depend de votre hotel et de ce qu il peut offrir a vos dates, mais c est le standard auquel vous attendre.',
      eveningBody3: 'Si vous logez dans un hotel qui n est pas dans la liste ci-dessous, contactez-moi. La plupart des hotels cinq etoiles de l ile peuvent s organiser avec suffisamment de preavis.',
      extrasEyebrow: 'Optionnel et supplementaire',
      extrasTitle: 'Ajoutez ce qui a du sens pour votre journee.',
      extrasBody: 'Tout n a pas besoin d etre ajoute. Ces options sont disponibles si vous les souhaitez.',
      extras: [
        ['Caddy', 'Je travaille a inclure un caddy en standard. Confirme a la reservation. Connaissance locale, choix des clubs et lecture du parcours pendant toute la partie.'],
        ['Videaste', 'Un videaste dedie pour la journee. Images de swing, temps forts du parcours et contenu que vous pouvez garder et utiliser.'],
        ['Location de clubs premium', 'Le meilleur equipement disponible au parcours, organise a l avance.'],
        ['Pack d accueil', 'Une petite selection du parcours ou de l ile a l arrivee, quand disponible. Pas toujours possible, mais inclus quand ca l est.'],
        ['Formule multi-jours', 'Le Signature Day comme partie d un voyage planifie. Je peux construire l itineraire complet autour, avec d autres parcours et journees sur l ile.'],
      ],
      pricingEyebrow: 'Tarifs',
      pricingTitle: 'Confirme apres le premier echange.',
      pricingBody: 'Le Signature Day commence a 3 000 EUR. Le tarif final depend du parcours, de l hotel, du nombre de personnes et des extras souhaites. Tout est confirme avant de vous engager.',
      pricingBody2:
        'Ce qui est inclus, c est la journee elle-meme : choix du parcours, depart, la partie complete, la session de John Brazier, les transferts prives et la coordination du diner. Ce qui est a part, c est le green fee, le dejeuner et les extras optionnels. Cette separation garde l offre claire et rend la partie haut de gamme de la journee facile a comprendre.',
      alwaysIncludedLabel: 'Toujours inclus',
      separateNote: 'Le green fee, le dejeuner et les extras optionnels sont a part et confirmes avec vous avant la journee.',
      pricingCta: 'Demander le Signature Day',
      finalEyebrow: 'Pret a reserver',
      finalTitle: 'Donnez-moi vos dates, je reviens vers vous personnellement.',
      finalBody: 'Chaque Signature Day commence par une conversation. Pas de reservation automatique. Juste une reponse directe et personnelle sous 24 heures.',
      finalCta: 'Prendre contact',
    },
  },
  nl: {
    metadata: {
      title: 'Signature Day Mallorca | Prive golfdag met fysio en diner',
      description:
        'Een complete golfdag op Mallorca: prive ronde met Andy Griffiths, golffysio met John Brazier, transfers en diner in het hotel. Vanaf 3.000 EUR.',
    },
    heroEyebrow: 'De complete ervaring op Mallorca',
    heroTitle: 'Een prive golfdag,\nopgebouwd rond de ronde, het lichaam en de avond.',
    heroBody:
      'Golf met mij, een fysiosessie met John Brazier, prive transfers en diner bij een partnerhotel. Alles wordt vooraf gecoordineerd zodat de dag doordacht, persoonlijk en de prijs waard aanvoelt. Videografie en fotografie kunnen worden toegevoegd als u de dag wilt vastleggen.',
    price: 'Vanaf 3.000 EUR',
    primaryCta: 'Contact opnemen',
    secondaryCta: 'Bekijk wat is inbegrepen',
    coursesCta: 'Bekijk alle 24 banen',
    playCta: 'Bekijk Play With A Pro',
    whatsappLabel: 'Bericht via WhatsApp',
    sections: {
      introTitle: 'Een premium golfdag, geen langere ronde.',
      introBody:
        'Ik speel 18 holes met u, zie hoe uw spel zich onder echte omstandigheden gedraagt en maak de hele ronde aantekeningen. Daarna onderzoekt John Brazier de fysieke kant van wat ik heb gezien. Samen krijgt u een verbonden totaalbeeld: wat er op de baan gebeurde, waarom dat lichamelijk zo is, en waaraan te werken.',
      introBody2:
        'De dag omvat ook prive transfers, een kleine ontvangst bij de baan waar mogelijk, en die avond diner bij een partnerhotel. Ik coordineer alles rechtstreeks zodat u dat niet hoeft te doen.',
      includedTitle: 'Wat is inbegrepen',
      included: [
        ['Baankeuze', 'Persoonlijk gekozen voor uw spel, uw groep en de gelegenheid. Ledenbanen beschikbaar waar passend.'],
        ['Prive starttijd', 'Geboekt en geregeld voor uw aankomst, met de vrije plekken gereserveerd en inbegrepen in de prijs, zodat de ronde alleen voor uw groep is.'],
        ['18 holes met mij', 'PGA Advanced Professional, Trackman Master, TPI Level 3. Ik maak de hele ronde aantekeningen over wat ik in uw spel zie.'],
        ['Gezamenlijk advies van Andy en John', 'Mijn observaties op de baan en Johns fysieke bevindingen worden samengevoegd tot een concreet advies. Geen twee losse sessies.'],
        ['Golffysio met John Brazier', 'Sessie na de ronde met The Golf Doctor. Bewegingsanalyse, herstel en persoonlijke adviezen om mee te nemen.'],
        ['Prive transfers', 'Van en naar de baan, afgestemd met uw hotel.'],
        ['Diner die avond', 'Prive dinerorganisatie in uw hotel, afgestemd tussen mij en uw conciergeteam.'],
      ],
      introEyebrow: 'Wat dit is',
      whoForEyebrow: 'Voor wie dit is',
      whoForHeadline: 'Persoonlijk, premium, en gemaakt voor een bijzondere gelegenheid.',
      courseEyebrow: 'De baan',
      whoForTitle: 'Ideaal voor',
      whoForIdeal: [
        ['Golfers die willen dat de dag speciaal aanvoelt', 'Een serieuze prive boeking, geen standaard starttijd met wat extra s erbij.'],
        ['Spelers die een duidelijke conclusie willen', 'U krijgt een verbonden beeld van de ronde, het lichaam en de prioriteiten daarna.'],
        ['Groepen die een gelegenheid vieren', 'Ideaal voor een reis die doordacht, memorabel en goed geregeld moet aanvoelen.'],
      ],
      whoForNotIdealTitle: 'Minder geschikt voor',
      whoForNotIdeal: [
        ['Wie op zoek is naar de laagste prijs', 'Dit is een premium dag en dienovereenkomstig geprijsd.'],
        ['Wie alleen een snelle toevoeging zoekt', 'Wilt u gewoon een starttijd, dan is de standaard Play With A Pro route de betere keuze.'],
      ],
      whoForNote:
        'De premium prijs weerspiegelt de volledige coordinatie: golf, fysio, transfers, diner en het niveau van aandacht rond de dag. Het moet aanvoelen als een goed opgebouwde ervaring, niet als een standaard ronde met dure extra s erbij.',
      howEyebrow: 'Hoe de dag verloopt',
      howTitle: 'Zes onderdelen. Allemaal verbonden.',
      howBody: 'Elk onderdeel voedt het volgende. De aantekeningen van de ronde gaan naar de fysiosessie. Johns bevindingen komen terug naar mij. U gaat naar huis met een advies, niet met zes losse ervaringen.',
      dayArc: [
        { time: 'Voor de ronde', title: 'Transfer en briefing bij de baan', body: 'Prive transfer van uw hotel naar de baan. Ik ontvang u bij aankomst. Voor we spelen wil ik begrijpen hoe uw spel werkt, waar u aan heeft gewerkt en wat u van de dag wilt. De briefing is kort en concreet, geen algemeen welkomstpakket.' },
        { time: 'De ronde', title: '18 holes met mij', body: 'Een baan, gekozen voor uw spel en de gelegenheid. Ik speel de volledige 18 holes naast u. Baanmanagement, slagkeuze en de patronen in uw spel die alleen in een echte ronde zichtbaar worden.' },
        { time: 'Na de ronde', title: 'Fysio met John Brazier', body: 'John Brazier, The Golf Doctor, pakt precies op waar de ronde eindigde. Ik geef hem mijn aantekeningen van de 18 holes: de bewegingspatronen die ik zag, de compensaties onder druk, de neigingen die scoreproblemen werden. John voegt het fysieke beeld toe.' },
        { time: 'De nabespreking', title: 'Wat u meeneemt', body: 'Voor de avond gaan we samen zitten. U vertrekt met een helder beeld van wat er op de baan gebeurde, waarom dat lichamelijk zo is, en waaraan te werken. Geen algemeen feedbackformulier, maar concrete, verbonden observaties van een ronde die u echt heeft gespeeld.' },
        { time: 'De avond', title: 'Diner in uw hotel', body: 'De dag eindigt in uw hotel. Ik stem rechtstreeks af met uw conciergeteam om de avond te organiseren rond wat uw hotel goed doet: een chef s table, een prive terras of een eigen dinerarrangement.' },
        { time: 'Optioneel', title: 'Ontvangst en extra s', body: 'Een kleine ontvangst van de baan bij aankomst, waar beschikbaar. Een caddy kan worden geregeld afhankelijk van baan en datum, bevestigd bij boeking. Videografie en fotografie kunnen worden toegevoegd als u de dag wilt vastleggen. Premium clubverhuur kan vooraf bij de baan worden geregeld.' },
      ],
      whyTitle: 'Waarom dit anders is',
      whyEyebrow: 'Waarom dit anders is',
      whyHeading: 'Een advies. Twee invalshoeken.',
      whyBody:
        'De meeste golfers die een coachingsessie en een fysiosessie krijgen, krijgen twee losse meningen die elkaar nooit ontmoeten. Bij de Signature Day wel.',
      whyBody2:
        'Tijdens de ronde zie ik alles: welke compensaties onder druk verschijnen, waar de besluitvorming hapert, welke patronen de scoreproblemen veroorzaken. Na de ronde geef ik die aantekeningen direct door aan John. Hij onderzoekt de fysieke kant van wat ik zag: een stijve heup die het swingpad verklaart, een schouderbeperking die de doorzwaai oncomfortabel maakt, een bewegingspatroon dat op een technisch probleem lijkt maar eigenlijk een mobiliteitskwestie is.',
      whyBody3:
        'Tegen de tijd van de nabespreking heeft u een beeld: wat ik op de baan zag, wat John in het lichaam vond, en waaraan als eerste te werken.',
      johnEyebrow: 'John Brazier, The Golf Doctor',
      johnBody:
        'John woont op Mallorca en werkt met golfers van alle niveaus. Hij staat bekend om het verbinden van fysieke bevindingen met wat er daadwerkelijk op de baan gebeurt. De combinatie van zijn werk en het mijne zorgt ervoor dat de adviezen die u meeneemt concreet, verbonden en gegrond zijn in een ronde die u echt heeft gespeeld.',
      johnBody2: 'John kan ook buiten de Signature Day met clienten werken. Vraag ernaar bij uw aanvraag als u een sessie wilt toevoegen aan een standaard Play With A Pro boeking.',
      courseTitle: 'Gekozen voor de gelegenheid.',
      courseBody:
        'Son Gual en Alcanada zijn mijn belangrijkste banen voor deze complete dag. Son Gual is mijn favoriete baan op Mallorca: het ontwerp van Thomas Himmel uit 2007, het slotstuk van 15 tot en met 18 hoort bij de beste van Europees golf. Alcanada is Robert Trent Jones Jr. in zijn meest fotogenieke vorm, met de vuurtoren bijna de hele ronde zichtbaar.',
      courseBody2: 'De juiste baan hangt af van u, uw groep en wat u van de dag wilt. Ik adviseer eerlijk en leg uit waarom.',
      eveningEyebrow: 'De avond',
      eveningTitle: 'Diner in uw hotel.',
      eveningBody:
        'De Signature Day is bewust ontworpen om te eindigen in uw hotel. Ik werk rechtstreeks samen met uw conciergeteam om de avond te organiseren rond wat uw hotel goed doet: een prive terras, een chef s table of een eigen dinerarrangement.',
      eveningBody2: 'Het precieze arrangement hangt af van uw hotel en wat zij op uw data kunnen bieden, maar dit is de standaard om te verwachten.',
      eveningBody3: 'Verblijft u in een hotel dat niet in de lijst hieronder staat, neem dan contact op. De meeste vijfsterrenhotels op het eiland kunnen dit met genoeg voorbereidingstijd regelen.',
      extrasEyebrow: 'Optioneel en aanvullend',
      extrasTitle: 'Voeg toe wat zinvol is voor uw dag.',
      extrasBody: 'Niet alles hoeft te worden toegevoegd. Deze opties zijn beschikbaar als u ze wilt.',
      extras: [
        ['Caddy', 'Ik werk eraan om een caddy standaard toe te voegen. Wordt bevestigd bij boeking. Lokale kennis, clubkeuze en het lezen van de baan tijdens de hele ronde.'],
        ['Videograaf', 'Een eigen videograaf voor de dag. Swingbeelden, hoogtepunten van de baan en content die u kunt bewaren en gebruiken.'],
        ['Premium clubverhuur', 'De beste beschikbare uitrusting bij de baan, vooraf geregeld.'],
        ['Welkomstpakket', 'Een kleine selectie van de baan of het eiland bij aankomst, waar beschikbaar. Niet altijd mogelijk, maar inbegrepen waar het kan.'],
        ['Meerdaags pakket', 'De Signature Day als onderdeel van een geplande reis. Ik kan de volledige route eromheen bouwen, inclusief andere banen en dagen op het eiland.'],
      ],
      pricingEyebrow: 'Prijzen',
      pricingTitle: 'Bevestigd na het eerste gesprek.',
      pricingBody: 'De Signature Day begint bij 3.000 EUR. Het uiteindelijke bedrag hangt af van de baan, het hotel, het aantal personen en de gewenste extra s. Alles wordt bevestigd voordat u zich ergens aan verbindt.',
      pricingBody2:
        'Inbegrepen is de dag zelf: baankeuze, starttijd, de volledige ronde, John Braziers sessie, prive transfers en de dinercoordinatie. Apart zijn greenfee, lunch en eventuele optionele extra s. Die scheiding houdt het aanbod duidelijk en maakt het premium deel van de dag makkelijk te begrijpen.',
      alwaysIncludedLabel: 'Altijd inbegrepen',
      separateNote: 'Greenfee, lunch en optionele extra s zijn apart en worden met u bevestigd voor de dag.',
      pricingCta: 'Vraag naar de Signature Day',
      finalEyebrow: 'Klaar om te boeken',
      finalTitle: 'Geef uw data door en ik reageer persoonlijk.',
      finalBody: 'Elke Signature Day begint met een gesprek. Geen automatische boeking. Gewoon een persoonlijk antwoord binnen 24 uur.',
      finalCta: 'Contact opnemen',
    },
  },
  sv: {
    metadata: {
      title: 'Signature Day Mallorca | Privat golfdag med fysio och middag',
      description:
        'En komplett golfdag pa Mallorca: privat rond med Andy Griffiths, golf-fysio med John Brazier, privata transfers och middag pa hotellet. Fran 3 000 EUR.',
    },
    heroEyebrow: 'Den kompletta upplevelsen pa Mallorca',
    heroTitle: 'En privat golfdag,\nbyggd runt rundan, kroppen och kvallen.',
    heroBody:
      'Golf med mig, en fysiosession med John Brazier, privata transfers och middag pa ett partnerhotell. Allt koordineras i forvag sa att dagen kanns genomtankt, personlig och vard priset. Videografi och fotografering kan laggas till om du vill dokumentera dagen.',
    price: 'Fran 3 000 EUR',
    primaryCta: 'Kontakta mig',
    secondaryCta: 'Se vad som ingar',
    coursesCta: 'Se alla 24 banor',
    playCta: 'Se Play With A Pro',
    whatsappLabel: 'Skriv pa WhatsApp',
    sections: {
      introTitle: 'En premium golfdag, inte bara en langre rond.',
      introBody:
        'Jag spelar 18 hal med dig, ser hur ditt spel beter sig under verkliga forhallanden, och antecknar hela rundan. Efteratt undersoker John Brazier den fysiska sidan av det jag sett. Tillsammans far du en sammanhangande helhetsbild: vad som hande pa banan, varfor det visar sig i kroppen, och vad du bor jobba pa.',
      introBody2:
        'Dagen inkluderar ocksa privata transfers, ett litet valkomnande vid banan dar det gar, och middag den kvallen pa ett partnerhotell. Jag koordinerar allt direkt sa att du slipper.',
      includedTitle: 'Detta ingar',
      included: [
        ['Banval', 'Personligen valt for ditt spel, ditt sallskap och tillfallet. Medlemsbanor tillgangliga dar det passar.'],
        ['Privat starttid', 'Bokad och ordnad innan du anlander, med lediga platser reserverade och inkluderade i priset, sa rundan ar reserverad enbart for ert sallskap.'],
        ['18 hal med mig', 'PGA Advanced Professional, Trackman Master, TPI Level 3. Jag antecknar hela rundan om det jag ser i ditt spel.'],
        ['Gemensam bedomning fran Andy och John', 'Mina observationer pa banan och Johns fysiska fynd kopplas samman till en konkret rekommendation. Inte tva separata sessioner.'],
        ['Golf-fysio med John Brazier', 'Session efter rundan med The Golf Doctor. Rorelseanalys, aterhamtning och personliga rekommendationer att ta med hem.'],
        ['Privata transfers', 'Till och fran banan, koordinerade med ditt hotell.'],
        ['Middag pa kvallen', 'Privat middagsarrangemang pa ditt hotell, koordinerat mellan mig och er concierge.'],
      ],
      introEyebrow: 'Vad det ar',
      whoForEyebrow: 'Vem det ar for',
      whoForHeadline: 'Personlig, premium, och byggd for ett sarskilt tillfalle.',
      courseEyebrow: 'Banan',
      whoForTitle: 'Idealiskt for',
      whoForIdeal: [
        ['Golfare som vill att dagen ska kannas speciell', 'En serios privat bokning, inte en standardstarttid med nagra extra tillagg.'],
        ['Spelare som vill ha en tydlig slutsats', 'Du far en sammanhangande bild av rundan, kroppen och prioriteringarna efterat.'],
        ['Grupper som firar ett tillfalle', 'Perfekt for en resa som ska kannas genomtankt, minnesvard och val skott.'],
      ],
      whoForNotIdealTitle: 'Mindre lampligt for',
      whoForNotIdeal: [
        ['Den som letar efter lagsta pris', 'Detta ar en premiumdag och prissatt darefter.'],
        ['Den som bara vill ha ett snabbt tillagg', 'Vill du bara ha en starttid ar standardvagen Play With A Pro battre lampad.'],
      ],
      whoForNote:
        'Premiumpriset speglar den fullstandiga koordinationen: golf, fysio, transfers, middag och niva av uppmarksamhet runt dagen. Det ska kannas som en genomtankt upplevelse, inte en standardrond med dyra tillagg.',
      howEyebrow: 'Sa gar dagen till',
      howTitle: 'Sex delar. Allt sammankopplat.',
      howBody: 'Varje del bygger pa nasta. Anteckningarna fran rundan gar in i fysiosessionen. Johns fynd kommer tillbaka till mig. Du lamnar dagen med en rekommendation, inte sex separata upplevelser.',
      dayArc: [
        { time: 'Fore rundan', title: 'Transfer och genomgang vid banan', body: 'Privat transfer fran ditt hotell till banan. Jag tar emot dig vid ankomst. Innan vi spelar vill jag forsta hur ditt spel fungerar, vad du har jobbat pa och vad du vill fa ut av dagen. Genomgangen ar kort och konkret, inget generiskt valkomstpaket.' },
        { time: 'Rundan', title: '18 hal med mig', body: 'En bana, vald for ditt spel och tillfallet. Jag spelar hela de 18 halen vid din sida. Bahantering, slagval och de monster i ditt spel som bara syns i en verklig rond.' },
        { time: 'Efter rundan', title: 'Fysio med John Brazier', body: 'John Brazier, The Golf Doctor, tar vid precis dar rundan slutade. Jag ger honom mina anteckningar fran de 18 halen: rorelsemonster jag sag, kompensationer under press, tendenser som blev scoreproblem. John lagger till den fysiska bilden.' },
        { time: 'Genomgangen', title: 'Vad du tar med dig', body: 'Fore kvallen satter vi oss ner tillsammans. Du lamnar med en tydlig bild av vad som hande pa banan, varfor det visar sig fysiskt, och vad du bor jobba pa. Inget generiskt feedbackblad, utan konkreta, sammankopplade observationer fran en rond du faktiskt spelat.' },
        { time: 'Kvallen', title: 'Middag pa ditt hotell', body: 'Dagen slutar pa ditt hotell. Jag koordinerar direkt med er concierge for att arrangera kvallen runt det ert hotell gor bra: ett chef s table, en privat terrass eller ett eget middagsarrangemang.' },
        { time: 'Valfritt', title: 'Valkomnande och extra', body: 'Ett litet valkomnande fran klubben vid ankomst, dar tillgangligt. En caddie kan ordnas beroende pa bana och datum, bekraftas vid bokning. Videografi och fotografering kan laggas till om du vill dokumentera dagen. Premiumhyra av klubbor kan ordnas i forvag pa banan.' },
      ],
      whyTitle: 'Varfor det ar annorlunda',
      whyEyebrow: 'Varfor det ar annorlunda',
      whyHeading: 'En bedomning. Tva perspektiv.',
      whyBody:
        'De flesta golfare som far en coachingsession och en fysiosession far tva separata asikter som aldrig motts. Pa Signature Day gor de det.',
      whyBody2:
        'Under rundan ser jag allt: vilka kompensationer som dyker upp under press, var beslutsfattandet brister, vilka monster som orsakar scoreproblemen. Efter rundan ger jag de anteckningarna direkt till John. Han undersoker den fysiska sidan av det jag sag: en stel hoft som forklarar svingplanet, en axelbegransning som gor genomsvingen obekvam, ett rorelsemonster som ser ut som ett tekniskt problem men egentligen ar en rorlighetsfraga.',
      whyBody3:
        'Nar vi kommer till genomgangen har du en bild: vad jag sag pa banan, vad John hittade i kroppen, och vad du bor jobba pa forst.',
      johnEyebrow: 'John Brazier, The Golf Doctor',
      johnBody:
        'John bor pa Mallorca och arbetar med golfare pa alla nivaer. Han ar kand for att koppla fysiska fynd till det som faktiskt visar sig pa banan. Kombinationen av hans arbete och mitt gor att rekommendationerna du tar med dig ar konkreta, sammankopplade och forankrade i en rond du faktiskt spelat.',
      johnBody2: 'John kan ocksa arbeta med klienter utanfor Signature Day. Fraga vid din forfragan om du vill lagga till en session till en vanlig Play With A Pro-bokning.',
      courseTitle: 'Vald for tillfallet.',
      courseBody:
        'Son Gual och Alcanada ar mina forsta val for en fullstandig dag av den har kalibern. Son Gual ar min favoritbana pa Mallorca: Thomas Himmels design fran 2007, avslutningen fran hal 15 till 18 hor till de basta i europeisk golf. Alcanada ar Robert Trent Jones Jr. i sin mest fotogeniska form, med fyren synlig under nastan hela rundan.',
      courseBody2: 'Ratt bana beror pa dig, ditt sallskap och vad du vill fa ut av dagen. Jag rekommenderar arligt och forklarar varfor.',
      eveningEyebrow: 'Kvallen',
      eveningTitle: 'Middag pa ditt hotell.',
      eveningBody:
        'Signature Day ar utformad for att sluta pa ditt hotell. Jag arbetar direkt med er concierge for att koordinera kvallen runt det ert hotell gor bra: en privat terrass, ett chef s table eller ett eget middagsarrangemang.',
      eveningBody2: 'Det exakta upplagget beror pa ditt hotell och vad de kan erbjuda pa dina datum, men detta ar standarden att forvanta sig.',
      eveningBody3: 'Bor du pa ett hotell som inte star med i listan nedan, hor av dig. De flesta femstjarniga hotell pa on kan ordna detta med tillrackligt varsel.',
      extrasEyebrow: 'Valfritt och tillagg',
      extrasTitle: 'Lagg till det som ar meningsfullt for din dag.',
      extrasBody: 'Allt behover inte laggas till. Dessa alternativ finns tillgangliga om du vill ha dem.',
      extras: [
        ['Caddie', 'Jag arbetar pa att inkludera en caddie som standard. Bekraftas vid bokning. Lokalkannedom, klubbval och banlasning under hela rundan.'],
        ['Videograf', 'En dedikerad videograf for dagen. Svingbilder, banhojdpunkter och innehall du kan spara och anvanda.'],
        ['Premiumhyra av klubbor', 'Den basta tillgangliga utrustningen pa banan, forberedd i forvag.'],
        ['Valkomstpaket', 'Ett litet urval fran banan eller on vid ankomst, dar tillgangligt. Inte alltid mojligt, men inkluderat nar det gar.'],
        ['Flerdagarspaket', 'Signature Day som en del av en planerad resa. Jag kan bygga hela resplanen runt det, inklusive andra banor och dagar pa on.'],
      ],
      pricingEyebrow: 'Priser',
      pricingTitle: 'Bekraftas efter forsta samtalet.',
      pricingBody: 'Signature Day borjar pa 3 000 EUR. Slutpriset beror pa banan, hotellet, antalet personer och de tillagg du vill ha. Allt bekraftas innan du bestammer dig for nagot.',
      pricingBody2:
        'Det som ingar ar sjalva dagen: banval, starttid, hela rundan, John Braziers session, privata transfers och middagskoordinering. Det som ar separat ar greenfee, lunch och eventuella tillval. Den uppdelningen haller erbjudandet tydligt och gor den premium delen av dagen latt att forsta.',
      alwaysIncludedLabel: 'Ingar alltid',
      separateNote: 'Greenfee, lunch och tillval ar separata och bekraftas med dig fore dagen.',
      pricingCta: 'Fraga om Signature Day',
      finalEyebrow: 'Redo att boka',
      finalTitle: 'Ge mig dina datum sa aterkommer jag personligen.',
      finalBody: 'Varje Signature Day borjar med ett samtal. Ingen automatisk bokning. Bara ett personligt svar inom 24 timmar.',
      finalCta: 'Ta kontakt',
    },
  },
  zh: {
    metadata: {
      title: '马略卡高端定制高尔夫日 | 私人高尔夫日、理疗与晚餐',
      description:
        '在马略卡的一整天高尔夫体验：与 Andy Griffiths 私人同场，John Brazier 高尔夫理疗，私人接送，以及酒店晚餐。3,000 欧元起。',
    },
    heroEyebrow: '马略卡的完整体验',
    heroTitle: '一场私人高尔夫日，\n围绕球局、身体状态与晚间体验精心安排。',
    heroBody:
      '与我同场，加上 John Brazier 的理疗环节、私人接送，以及在合作酒店的晚餐。每个环节都提前协调好，让这一天显得用心、私人，也配得上这个价格。如果您想留下记录，可以加订摄像与摄影服务。',
    price: '3,000 欧元起',
    primaryCta: '联系我',
    secondaryCta: '查看包含内容',
    coursesCta: '查看全部24座球场',
    playCta: '查看陪打体验',
    whatsappLabel: '通过 WhatsApp 联系',
    sections: {
      introTitle: '这是高端高尔夫日，不只是打得更久。',
      introBody:
        '我会陪您打满18洞，观察您的球技在真实条件下如何表现，并全程记录。结束后，John Brazier 会对我观察到的身体层面问题做进一步分析。两人合力，您会得到一套连贯的判断：球场上发生了什么、身体层面为什么会这样、接下来该练什么。',
      introBody2:
        '这一天还包含私人接送、条件允许时球场方的小小欢迎，以及当晚在合作酒店的晚餐。整个流程由我直接协调，您不需要操心。',
      includedTitle: '包含内容',
      included: [
        ['球场选择', '根据您的球技、同行人数与场合亲自挑选，适合时可安排仅限会员的球场。'],
        ['私人开球时段', '在您到达前就已预订安排好，其余名额一并预订并计入价格，整场球局只属于您这一行人。'],
        ['与我同打18洞', 'PGA高级职业教练资格，Trackman Master认证，TPI Level 3认证。全程记录我在您球技中观察到的细节。'],
        ['Andy与John的联合诊断', '我在球场上的观察与John的身体层面发现会汇总成一套具体建议，而不是两次互不相关的分析。'],
        ['John Brazier高尔夫理疗', '赛后由The Golf Doctor提供的理疗环节：动作评估、恢复建议，以及可以带走的个性化建议。'],
        ['私人接送', '往返球场，与您的酒店协调安排。'],
        ['当晚晚餐', '在您酒店的私人晚餐安排，由我与酒店礼宾团队协调完成。'],
      ],
      introEyebrow: '这是什么',
      whoForEyebrow: '适合谁',
      whoForHeadline: '高触点、高端定制，专为特殊场合打造。',
      courseEyebrow: '球场',
      whoForTitle: '适合人群',
      whoForIdeal: [
        ['希望这一天与众不同的球手', '这是一次认真的私人预订，而不是加了几个附加项的普通开球时段。'],
        ['想要清晰收获的球手', '您会得到关于这一轮球、身体状态与之后重点的连贯判断。'],
        ['想要纪念某个特殊场合的团体', '适合希望整趟行程用心、难忘、安排到位的旅程。'],
      ],
      whoForNotIdealTitle: '不太适合',
      whoForNotIdeal: [
        ['追求最低价格的客人', '这是一个高端定制项目，定价也相应更高。'],
        ['只想加一点小附加的客人', '如果只是想要一个开球时段，标准的陪打体验会更合适。'],
      ],
      whoForNote:
        '这个价格对应的是完整的协调工作：高尔夫、理疗、接送、晚餐，以及围绕这一天的关注度。它的目标是让您感受到一次精心搭建的体验，而不是加了几个昂贵附加项的普通球局。',
      howEyebrow: '这一天如何安排',
      howTitle: '六个环节，环环相扣。',
      howBody: '每个环节都为下一个环节做铺垫：球局中的记录会进入理疗环节，John的发现又会反馈给我。最终您带走的是一套建议，而不是六段互不相关的体验。',
      dayArc: [
        { time: '球局之前', title: '接送与球场情况说明', body: '从酒店到球场的私人接送。抵达时我会亲自迎接。开球前，我想了解您的球技情况、最近在练什么、以及您对这一天的期待。说明简短而具体，不是笼统的欢迎套话。' },
        { time: '球局', title: '与我同打18洞', body: '一座为您和这个场合挑选的球场。我会全程18洞陪您同打，包括球场策略、选杆判断，以及只有在真实球局中才会显现的球技规律。' },
        { time: '球局之后', title: '与John Brazier的理疗环节', body: 'John Brazier（The Golf Doctor）会从球局结束的地方接手。我会把18洞中记录的内容交给他：观察到的动作模式、压力下的代偿动作、逐渐演变成成绩问题的习惯性倾向。John会补上身体层面的分析。' },
        { time: '总结环节', title: '您带走的收获', body: '在晚餐前，我们会坐下来一起复盘。您离开时会清楚知道球场上发生了什么、身体层面为什么会这样、接下来该练什么，而不是一张笼统的反馈表，而是基于您真实打过的这一轮球给出的具体、连贯的观察。' },
        { time: '晚间', title: '酒店晚餐', body: '这一天在您的酒店结束。我会直接与酒店礼宾团队协调，围绕酒店擅长的方式安排晚间体验：主厨餐桌、私人露台，或专属的用餐安排。' },
        { time: '可选', title: '欢迎环节与附加项', body: '条件允许时，球场会有小小的到场欢迎。球童可根据球场与日期安排，预订时确认。如果您想记录这一天，可加订摄像与摄影服务。高端球杆租赁也可以提前在球场安排好。' },
      ],
      whyTitle: '它为什么不同',
      whyEyebrow: '它为什么不同',
      whyHeading: '一套建议，两种视角。',
      whyBody:
        '大多数球手分别做教学课和理疗课，得到的是两份互不相关的意见。而在高端定制高尔夫日，这两者是连起来的。',
      whyBody2:
        '球局中我会关注一切：压力下会出现哪些代偿动作、决策在哪个环节出问题、哪些习惯性模式导致了成绩问题。球局结束后，我会把这些记录直接交给John。他会检查我所观察内容对应的身体层面问题：可能是髋部僵硬导致了挥杆轨迹的问题，肩部活动受限让送杆不舒服，或者一个看似技术问题的动作模式，其实是柔韧性的问题。',
      whyBody3:
        '到总结环节时，您会得到一套完整的判断：我在球场上看到的、John在身体层面发现的，以及应该优先练什么。',
      johnEyebrow: 'John Brazier，The Golf Doctor',
      johnBody:
        'John常驻马略卡，为各水平的球手提供服务。他擅长把身体层面的发现，与球场上实际发生的情况直接联系起来。他与我的工作结合在一起，意味着您带走的建议是具体的、彼此关联的，并且是基于您真实打过的一轮球得出的。',
      johnBody2: 'John也可以在高端定制高尔夫日之外单独为客人提供服务。如果您想在标准陪打预订中加入一次理疗环节，咨询时可以提出。',
      courseTitle: '为这个场合而选。',
      courseBody:
        'Son Gual和Alcanada是我为这类完整体验首选的球场。Son Gual是我在马略卡最喜欢的球场：Thomas Himmel在2007年的设计，15洞到18洞的收官段落，在欧洲高尔夫球场中都属顶尖水准。Alcanada则是Robert Trent Jones Jr.最具画面感的作品，几乎全程都能看到灯塔。',
      courseBody2: '具体选哪座球场取决于您、您的同行人数，以及您对这一天的期待。我会坦诚给出建议，并解释原因。',
      eveningEyebrow: '晚间',
      eveningTitle: '在您的酒店用晚餐。',
      eveningBody:
        '高端定制高尔夫日刻意安排在您的酒店收尾。我会直接与酒店礼宾团队协调，围绕酒店擅长的方式安排晚间体验：私人露台、主厨餐桌，或专属的用餐安排。',
      eveningBody2: '具体安排取决于您的酒店以及您入住日期能提供的条件，但这是您可以预期的标准。',
      eveningBody3: '如果您入住的酒店不在下面的名单中，请与我联系。岛上大多数五星级酒店只要提前告知都能安排。',
      extrasEyebrow: '可选与附加项目',
      extrasTitle: '为您的这一天加上真正合适的内容。',
      extrasBody: '并非所有项目都需要加订，以下是可供选择的附加内容。',
      extras: [
        ['球童', '我正在努力把球童服务作为标配的一部分。将在预订时确认。提供本地经验、选杆建议，以及全程的球场路线判断。'],
        ['摄像师', '为这一天安排专属摄像师，记录挥杆画面、球场高光时刻，以及您可以保留使用的内容。'],
        ['高端球杆租赁', '在球场提前安排好的最优质可用装备。'],
        ['欢迎礼', '条件允许时，抵达时提供来自球场或岛上的小份心意。并非每次都能安排，但只要可行都会包含在内。'],
        ['多日行程套餐', '把高端定制高尔夫日作为整体行程的一部分。我可以围绕它安排完整的行程，包括岛上的其他球场与其他天数。'],
      ],
      pricingEyebrow: '价格',
      pricingTitle: '在第一次沟通后确认。',
      pricingBody: '高端定制高尔夫日起价3,000欧元。最终价格取决于球场、酒店、人数以及您想要的附加项目。所有内容都会在您确认前敲定清楚。',
      pricingBody2:
        '包含的是这一天本身：球场选择、开球时段、完整18洞、John Brazier的理疗环节、私人接送，以及晚餐协调。另计的是果岭费、午餐以及任何可选附加项目。这样区分能让整体报价清楚明了，也让高端部分的价值一目了然。',
      alwaysIncludedLabel: '始终包含',
      separateNote: '果岭费、午餐以及可选附加项目另计，会在活动当天前与您确认。',
      pricingCta: '咨询高端定制高尔夫日',
      finalEyebrow: '准备预订',
      finalTitle: '告诉我您的日期，我会亲自回复您。',
      finalBody: '每一次高端定制高尔夫日都从一次沟通开始。没有自动下单，只有24小时内的亲自、直接回复。',
      finalCta: '联系我',
    },
  },
}

export function getSignatureDayContent(locale = 'zh') {
  const content = SIGNATURE_DAY_CONTENT[locale] || SIGNATURE_DAY_CONTENT.zh
  const resolvedLocale = SIGNATURE_DAY_CONTENT[locale] ? locale : 'zh'
  return {
    ...content,
    hotelPartners: HOTEL_PARTNERS[resolvedLocale] || HOTEL_PARTNERS.zh,
  }
}

export function buildSignatureDayMetadata(locale = 'zh') {
  const content = getSignatureDayContent(locale)
  return buildPageMetadata(
    `/${locale}/signature-day`,
    locale,
    {
      ...content.metadata,
      robots: { index: true, follow: true },
    },
  )
}

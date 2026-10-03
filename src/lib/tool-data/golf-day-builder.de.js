// golf-day-builder copy for 'de'. Generated overlay: the English master is in
// golf-day-builder-logic.js (COURSES, RESTAURANTS, ADDONS, QUESTIONS) and EN_PLAN in golf-day-builder-localize.js.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "stepFmt": "Schritt {n} von {total} · {section}",
 "sections": {
  "region": "Standort",
  "dayStyle": "Tagesstil",
  "level": "Spielniveau",
  "start": "Startzeit",
  "courseType": "Platztyp",
  "addons": "Neben dem Golf",
  "transport": "Transport",
  "group": "Ihre Gruppe"
 },
 "teeWindows": {
  "early": "8:00 bis 9:00 Uhr",
  "mid": "10:00 bis 11:00 Uhr",
  "pm": "13:30 bis 14:30 Uhr"
 },
 "factLabels": {
  "par": "Par",
  "nineHoles": "9 Löcher",
  "hotelOnly": "Nur Hotelgäste",
  "noHandicap": "Kein Handicap erforderlich",
  "handicapRequired": "Handicap erforderlich",
  "certificate": " + Handicap-Ausweis"
 },
 "built": {
  "line": "Zusammengestellt für {group}, {region}.",
  "groups": {
   "solo": "einen Einzelspieler",
   "couple": "ein Paar",
   "friends": "eine Gruppe von Freunden",
   "family": "eine Familie",
   "vip": "eine VIP- oder Firmengruppe"
  },
  "regions": {
   "southwest": "Unterkunft im Südwesten",
   "palma": "Unterkunft in oder bei Palma",
   "north": "Unterkunft im Norden",
   "east": "Unterkunft im Osten",
   "south": "Unterkunft im Süden",
   "unbooked": "Unterkunft dort, wo es für das Golf am besten passt"
  }
 },
 "questions": {
  "region": {
   "title": "Wo übernachten Sie?",
   "sub": "Der Plan wird um Ihren Standort herum aufgebaut.",
   "opts": {
    "southwest": [
     "Südwesten",
     "Santa Ponsa, Andratx, Bendinat, Calvià"
    ],
    "palma": [
     "Palma und Umgebung",
     "Stadt Palma, Son Vida, zentrale Insel"
    ],
    "north": [
     "Norden",
     "Alcúdia, Pollença, die Buchten"
    ],
    "east": [
     "Osten",
     "Cala Millor, Canyamel, Artà"
    ],
    "south": [
     "Süden",
     "Llucmajor, Flughafengegend, Son Antem"
    ],
    "unbooked": [
     "Noch nicht gebucht",
     "Wir schlagen Ihnen die beste Golfbasis vor"
    ]
   }
  },
  "dayStyle": {
   "title": "Was für einen Tag wünschen Sie sich?",
   "sub": "Wählen Sie, was am ehesten zu Ihnen passt.",
   "opts": {
    "serious": [
     "Ernsthaftes Golf",
     "Die Runde ist das Hauptereignis"
    ],
    "relaxed": [
     "Entspanntes Golf",
     "Gutes Golf ohne Druck"
    ],
    "luxury": [
     "Luxus",
     "Das Beste von allem, alles erledigt"
    ],
    "family": [
     "Familientag",
     "Golf plus etwas für alle"
    ],
    "scenic": [
     "Landschaftlich",
     "Erst die Aussicht, dann das Ergebnis"
    ],
    "food": [
     "Essen zuerst",
     "Golf rund um ein großartiges Mittagessen"
    ]
   }
  },
  "level": {
   "title": "Wie würden Sie Ihr Golf beschreiben?",
   "sub": "Ehrliche Antworten ergeben bessere Tage.",
   "opts": {
    "beginner": [
     "Anfänger",
     "Neu im Spiel oder Wiedereinsteiger"
    ],
    "casual": [
     "Gelegenheitsspieler",
     "Ein paar Runden im Jahr"
    ],
    "confident": [
     "Sicher",
     "Regelmäßiger Golfer, mittleres Handicap"
    ],
    "low": [
     "Niedriges Handicap",
     "Einstellig, gern mit einem echten Test"
    ]
   }
  },
  "start": {
   "title": "Wann starten Sie gern?",
   "sub": "",
   "opts": {
    "early": [
     "Frühmorgens",
     "Als Erster raus, danach gehört der Tag Ihnen"
    ],
    "mid": [
     "Vormittags",
     "Ein gemütlicher Start mit einem vollen Tag danach"
    ],
    "pm": [
     "Nachmittags",
     "Langsamer Morgen, Golf im späten Licht"
    ]
   }
  },
  "courseType": {
   "title": "Was ist Ihnen beim Platz am wichtigsten?",
   "sub": "",
   "opts": {
    "famous": [
     "Ein bekannter Name",
     "Die Plätze, nach denen alle fragen"
    ],
    "scenic": [
     "Landschaft",
     "Meerblick, Berge, Höhenunterschiede"
    ],
    "challenging": [
     "Ein echter Test",
     "Ein Platz, der Fragen stellt"
    ],
    "forgiving": [
     "Verzeihend",
     "Breit, freundlich und unterhaltsam"
    ],
    "close": [
     "Nah an meinem Hotel",
     "Möglichst wenig Zeit im Auto"
    ]
   }
  },
  "addons": {
   "title": "Was würde den Tag abrunden?",
   "sub": "Wählen Sie alles, was Sie anspricht, oder nichts",
   "opts": {
    "lunch": [
     "Langes Mittagessen",
     "Ein richtiger mallorquinischer Tisch"
    ],
    "beach": [
     "Strand",
     "Ein Bad nach der Runde"
    ],
    "spa": [
     "Spa",
     "Erholung, gut gemacht"
    ],
    "village": [
     "Dorf vor Ort",
     "Eine Stunde in einer historischen Stadt"
    ],
    "wine": [
     "Wein",
     "Ein Bodega-Besuch oder eine Verkostung"
    ],
    "family": [
     "Familienaktivität",
     "Etwas für die Nicht-Golfer"
    ],
    "coaching": [
     "Coaching mit mir",
     "Session mit einem PGA Advanced Professional"
    ]
   }
  },
  "transport": {
   "title": "Soll der Transport organisiert werden?",
   "sub": "",
   "opts": {
    "yes": [
     "Ja, bitte organisieren",
     "Fahrer oder Transfers, von Tür zu Tür"
    ],
    "no": [
     "Nein, wir fahren selbst",
     "Mietwagen oder eigenes Auto"
    ]
   }
  },
  "group": {
   "title": "Wer kommt mit?",
   "sub": "",
   "opts": {
    "solo": [
     "Nur ich",
     "Golf allein, volle Konzentration"
    ],
    "couple": [
     "Ein Paar",
     "Zu zweit"
    ],
    "friends": [
     "Freunde",
     "Eine kleine Gruppenreise"
    ],
    "family": [
     "Familie",
     "Gemischte Altersgruppen und Interessen"
    ],
    "vip": [
     "VIP oder Firma",
     "Kunden empfangen oder einen Anlass feiern"
    ]
   }
  }
 },
 "courses": {
  "son-gual": {
   "facts": [
    "Par 72 · Championship",
    "Thomas Himmel, 2007"
   ],
   "blurb": "Die beste Pflege der Insel und ein Layout, das jeden Teil Ihres Spiels prüft. Breit genug zum Genießen, fordernd genug, um in Erinnerung zu bleiben. Beachten Sie, dass ein Handicap-Ausweis erforderlich ist."
  },
  "alcanada": {
   "facts": [
    "Par 72 · Robert Trent Jones Jr.",
    "58 Bunker"
   ],
   "blurb": "Meerblick auf fast der gesamten Runde und ein Design von Robert Trent Jones Jr., das auch ohne ihn überzeugt. Die 58 Bunker liegen so, dass sie im Spiel sind, rechnen Sie also damit, Ihr Sandwedge zu benutzen."
  },
  "t-golf-palma": {
   "facts": [
    "Par 71 · Jack-Nicklaus-Design",
    "Einziger Nicklaus-Platz auf Mallorca"
   ],
   "blurb": "Ein Design von Jack Nicklaus, zwanzig Minuten von Palma. Fest, strategisch und ehrlich: Gute Schläge werden belohnt, schlechte im richtigen Verhältnis bestraft."
  },
  "son-muntaner": {
   "facts": [
    "Par 72 · Bester Platz Spaniens 2025",
    "Olivenbaum Sa Capitana, Loch 15"
   ],
   "blurb": "Das Flaggschiff der Arabella-Plätze und das polierteste Cluberlebnis nahe Palma. Pflege und Service sind hier der Reiz, und beides hält, was es verspricht."
  },
  "santa-ponsa": {
   "facts": [
    "Par 72 · Längster Platz der Insel",
    "Austragungsort der European Tour 2021"
   ],
   "blurb": "Breite Fairways und ein entspanntes Tempo im Südwesten. Die Länge sieht auf der Scorekarte einschüchternd aus, aber die Breite hält ihn für die meisten Niveaus spielbar."
  },
  "andratx": {
   "facts": [
    "Par 72 · David Kidd, 1999",
    "Längstes Par 5 Spaniens (609 m)"
   ],
   "blurb": "Dramatische Höhenwechsel in den Hügeln oberhalb von Camp de Mar. Die Aussicht ist der Höhepunkt, aber die engen Linien und schrägen Lagen machen den Platz schwerer, als die Scorekarte vermuten lässt."
  },
  "son-vida": {
   "facts": [
    "Par 70 · Gegr. 1964 · Ältester Platz Mallorcas",
    "Seve gewann hier 1990"
   ],
   "blurb": "Mallorcas ältester Platz, der seine Geschichte gut trägt. Nach modernen Maßstäben kurz, durchgehend charmant und eine vernünftige Wahl, wenn es an dem Tag um mehr als das Ergebnis geht."
  },
  "bendinat": {
   "facts": [
    "Par 70 · Martin Hawtree, 1986",
    "5.660 m"
   ],
   "blurb": "Eng, hübsch und zwischen Pinien versteckt, mit Blicken aufs Meer von den höheren Löchern. Eine kürzere, gesellige Runde, die zu einem Halbtagesplan passt. Lassen Sie den Driver auf mehreren Abschlägen im Bag."
  },
  "capdepera": {
   "facts": [
    "Par 73 · Dan Maples",
    "Loch 15 zum besten Loch Mallorcas gewählt"
   ],
   "blurb": "Golf in sanfter Hügellandschaft im ruhigen Osten, selbst in der Saison meist nicht überlaufen. Freundlich vom Abschlag, mit genug Abwechslung, um auch bessere Spieler zu fesseln."
  },
  "canyamel": {
   "facts": [
    "Par 73 · José Gancedo",
    "Steinhütte auf Loch 9, einzigartig auf Mallorca"
   ],
   "blurb": "Ein Talplatz nahe der Küste, den wenige Besucher einplanen und über den sich die meisten freuen. Leise fordernd, besonders die Annäherungen an geneigte Grüns."
  },
  "pula": {
   "facts": [
    "Par 72 · Redesign von Olazábal",
    "Zweistöckige Range · TrackMan Range"
   ],
   "blurb": "Ein einladender Platz an der Ostküste mit ernsthafter Turniervergangenheit, von José María Olazábal neu gestaltet. Großzügig, wo es zählt, und das ganze Jahr über gut gepflegt."
  },
  "son-servera": {
   "facts": [
    "Par 72 · Gegr. 1967 · Zweitältester Platz Mallorcas",
    "Küsten-Parkland"
   ],
   "blurb": "Klassisches, von Pinien gesäumtes Parkland am Meer und einer der ältesten Clubs der Insel. Gemächlich, traditionell und ein fairer Test ohne Drama."
  },
  "son-antem-west": {
   "facts": [
    "Par 72 · Francisco Lopez Segales, 1995",
    "25 Min. von Palma"
   ],
   "blurb": "Golf in offener Landschaft nahe Llucmajor, 15 Minuten von Palma und 25 vom Flughafen. Großzügige Fairways und ein flaches Layout machen ihn für die meisten Niveaus zugänglich."
  },
  "son-termes": {
   "facts": [
    "Par 70 · Grupo Harris, 1998",
    "Bergblick auf Palma"
   ],
   "blurb": "Berggolf in der Na Burguesa, 20 Minuten von Palma. Bei klarem Wetter sind von den oberen Löchern das Castell de Bellver und die Kathedrale zu sehen, dahinter das Mittelmeer."
  },
  "t-golf-calvia": {
   "facts": [
    "Par 72 · 15 Seen",
    "Austragungsort der Mallorca Open"
   ],
   "blurb": "Nach einer Renovierung für 10 Millionen Euro komplett neu aufgebaut, wirkt T Golf Calvià von der Ankunft bis zum Ende makellos. Breite Abschlaglinien, 15 Seen im Spiel und durchgehend hervorragende Pflege."
  },
  "son-antem-east": {
   "facts": [
    "Par 72 · Francisco Lopez-Segalés, 1994",
    "Marriott-Resort · 5 Seen"
   ],
   "blurb": "Der zugänglichere der beiden Son-Antem-Plätze. Großzügige Fairways und fünf Seen auf einem ehemaligen Jagdgut nahe Llucmajor."
  },
  "son-quint": {
   "facts": [
    "Par 71 · Eröffnet 2007",
    "Tiger Woods und Charlie spielten hier, Juli 2022"
   ],
   "blurb": "Der zugänglichste der Son-Vida-Plätze. Breite Fairways, vier Abschlagpositionen und von Loch 8 ein Blick direkt auf die Kathedrale von Palma."
  },
  "maioris": {
   "facts": [
    "Par 72 · Eröffnet 2006",
    "Eine der wenigen öffentlichen Rasen-Driving-Ranges auf Mallorca"
   ],
   "blurb": "Die vordere Neun schottisch und holprig, die hintere eher amerikanisch und flacher: zwei Persönlichkeiten in einer Runde. Weniger voll als die Plätze um Palma."
  },
  "vall-dor": {
   "facts": [
    "Par 71 · 1986",
    "Abschluss an der Klippe mit Meerblick an der Ostküste"
   ],
   "blurb": "Eine Runde, die im Verlauf besser wird: eine enge, traditionelle vordere Neun, dann öffnet sich die hintere Neun zur Küste mit Meerblick und einem Abschluss an der Klippe."
  },
  "golf-pollenca": {
   "facts": [
    "Par 35 · 9 Löcher · José Gancedo, 1986",
    "Blicke auf Tramuntana, Bucht von Pollença und Bucht von Alcúdia"
   ],
   "blurb": "Neun Löcher, in den Hang oberhalb der Stadt Pollença integriert: Blicke auf die Tramuntana, zwei Buchten und das Meer. Die richtige Ergänzung am Nachmittag zu einem Alcanada-Vormittag. In 90 Minuten spielbar."
  },
  "santa-ponsa-2": {
   "facts": [
    "Par 72 · Nur Mitglieder",
    "Gäste müssen mit einem Mitglied spielen"
   ],
   "blurb": "Meist der ruhigste Platz der Südwest-Gruppe. Von Bäumen gesäumte Fairways belohnen Platzierung statt Kraft. Ich kann Kunden als meine Gäste mitnehmen, wenn ich selbst spiele."
  },
  "santa-ponsa-3": {
   "facts": [
    "Par 30 · 9 Löcher · Nur Mitglieder",
    "Gäste müssen mit einem Mitglied spielen"
   ],
   "note": "9 Löcher. Planen Sie ihn als Nachmittags-Ergänzung zu einer vollen Runde auf Santa Ponsa 1 oder 2",
   "blurb": "Neun Löcher durch die Wohnanlage von Santa Ponsa: kurz, präzise und gut geeignet für Anfänger, Junioren oder alle, die eine schnelle Runde wollen."
  },
  "palma-pitch-putt": {
   "facts": [
    "Par 27 · 9 Löcher, alles Par 3 · ab 17 €",
    "Der einzige Pitch & Putt auf Mallorca"
   ],
   "note": "9 Löcher. Funktioniert als Halbtagesplan, als Aufwärmen vor der Runde oder als Einführung ins Spiel",
   "blurb": "Der einzige Pitch & Putt auf Mallorca und der Platz, den ich für Coaching-Einführungen nutze. Alles Par 3 zwischen 50 und 100 m."
  },
  "reserva-rotana": {
   "facts": [
    "9 Löcher · Nur Hotelgäste · Platz auf dem Anwesen",
    "Capdepera und Pula innerhalb von 25 Minuten"
   ],
   "note": "Nur Hotelgäste. Diese Option gilt nur, wenn Ihre Gruppe im Reserva Rotana übernachtet",
   "blurb": "Ein privater 9-Loch-Platz auf dem Anwesen des Reserva Rotana bei Manacor, ausschließlich für Hotelgäste verfügbar."
  }
 },
 "restaurants": {
  "southwest": {
   "casual": "Restaurant Campino im Golf de Andratx: italienische und mediterrane Küche auf der Terrasse, gebucht passend zum Ende Ihrer Runde",
   "premium": "Sa Clastra (1 Michelin-Stern) im Castell Son Claret, Es Capdellà (etwa 15 Minuten von den meisten Plätzen im Südwesten). Einer der besten Mittagstische der Insel",
   "village": "Mittagessen im Dorf Calvià: ein ruhiges Bergdorf mit lokalen Restaurants, die kaum Touristen sehen. Ich buche den richtigen Tisch",
   "michelin": "Sa Clastra (1★) im Castell Son Claret, Es Capdellà, oder Es Fum (1★) im St. Regis Mardavall: zwei der feinsten Tische der Insel, beide im Südwesten"
  },
  "palma": {
   "casual": "Na Capitana im Son Muntaner: verlässliches mediterranes Mittagessen auf der Terrasse mit Blick auf den Platz, oder eine kurze Fahrt zum Markt von Santa Catalina für Tapas",
   "premium": "DINS Santi Taura (1 Michelin-Stern) im Zentrum von Palma oder Marc Fosh (1 Michelin-Stern) in der Altstadt. Ich lege die Buchung passend zu Ihrer Runde",
   "village": "Markt von Santa Catalina: das beste Viertel für Essen in Palma, 10 Minuten von den meisten Plätzen. Ich wähle den richtigen Ort für die Gruppe",
   "michelin": "DINS Santi Taura (1★), Marc Fosh (1★) und Zaranda (1★) sind alle in Palma: die stärkste Michelin-Gruppe der Insel, alle innerhalb von 15 Minuten von den Plätzen um Palma"
  },
  "north": {
   "casual": "Mittagessen am Strand in Port de Pollença: Die Promenade bietet mehrere gute Fisch- und Meeresfrüchte-Optionen. In der Hochsaison buche ich im Voraus",
   "premium": "Maca de Castro (1 Michelin-Stern + Green Star) in Port d'Alcúdia: saisonale Degustationsmenüs aus lokalen Produkten. Etwa 10 Minuten von Alcanada",
   "village": "Altstadt von Pollença: ein ruhiges Bergstädtchen mit schönem Marktplatz, verlässlichen lokalen Restaurants und einem Sonntagsmarkt. Den kurzen Umweg wert",
   "michelin": "Maca de Castro (1★ + Green Star) in Port d'Alcúdia: eines der interessantesten, von Köchen geprägten Restaurants der Insel, nahe dem Golfplatz Alcanada"
  },
  "east": {
   "casual": "Restaurant Roca Viva im Capdepera Golf: mediterran und mallorquinisch, mit eigenem Gemüsegarten und Terrasse am 18. Grün. Eines der besseren Clubhaus-Mittagessen der Insel",
   "premium": "VORO (2 Michelin-Sterne) im Cap Vermell Grand Hotel, Canyamel: Mallorcas einziges Zwei-Sterne-Restaurant, Küchenchef Álvaro Salazar. Degustationsmenü mit 18 oder 22 Gängen",
   "village": "Altstadt von Artà: eine der charaktervollsten Städte im Osten Mallorcas. Ein guter Halt für Kaffee und Mittagessen vor oder nach der Runde",
   "michelin": "VORO (2★) im Cap Vermell, Canyamel: das stärkste Michelin-Argument für eine Nacht an der Ostküste"
  },
  "south": {
   "casual": "T19 Restobar im Golf Maioris: Außenterrasse, deutsche und mediterrane Clubhausküche, ein nützlicher Halt nahe dem Flughafen",
   "premium": "Andreu Genestra (1 Michelin-Stern + Green Star) bei Llucmajor: saisonale Degustationsmenüs, nachhaltigkeitsorientierte Küche. Etwa 10 Minuten von Golf Maioris und Son Antem. Weit im Voraus buchen",
   "village": "Altstadt von Llucmajor: eine ruhige Marktstadt 20 Minuten von Palma mit guten lokalen Restaurants und einem Samstagsmarkt",
   "michelin": "Andreu Genestra (1★ + Green Star) bei Llucmajor: eines der interessantesten, von Köchen geprägten Restaurants Mallorcas, nahe der Platzgruppe im Süden"
  }
 },
 "addons": {
  "beach": [
   "Strandstunde",
   "Eine nahe Bucht für ein Bad und eine ruhige Stunde im Schatten. Der Strand wird nach Region gewählt, sobald der Plan bestätigt ist."
  ],
  "spa": [
   "Spa und Erholung",
   "Eine Anwendung nach der Runde in einem Resort-Spa der Gegend. Möglich sind unter anderem Arabella Son Vida, Secrets Paguera und Bendinat. Ich bestätige den Ort bei der Buchung."
  ],
  "village": [
   "Stunde im Ort",
   "Eine Stunde in einer der historischen Städte der Insel: Kaffee, Seitenstraßen und ein oder zwei Aussichtspunkte."
  ],
  "wine": [
   "Weinverkostung",
   "Eine geführte Verkostung in einer lokalen Bodega. Mallorca hat eine kleine, aber ernsthafte Weinszene: José L. Ferrer in Binissalem und Macià Batle sind beide den Umweg wert. Ich lege das passend zur Runde."
  ],
  "family": [
   "Familienaktivität",
   "Eine Bootsfahrt, die Höhlen oder ein Wasserpark, je nach Region und Alter. Wird mit der Buchung bestätigt."
  ],
  "coaching": [
   "Coaching mit mir",
   "Eine gezielte Session mit mir, einem UK PGA Advanced Professional: Aufwärmen, Technik oder Platzstrategie."
  ],
  "lunch": [
   "Langes Mittagessen",
   "Ein richtiger mallorquinischer Tisch, gebucht und zeitlich auf Ihre Runde abgestimmt."
  ]
 },
 "plan": {
  "names": {
   "efficient": "Effizienter Golftag",
   "lunch": "Golf & langes Mittagessen",
   "experience": "Vollständiges Erlebnis"
  },
  "taglines": {
   "efficient": "Die Runde ist der Tag. Gut gespielt, danach ist der Nachmittag frei.",
   "lunch": "Eine ernsthafte Runde, gefolgt von einem ernsthaften Tisch.",
   "experience": "Das Golf ist das Herzstück. Die Insel füllt den Rest des Programms."
  },
  "time": {
   "depart": "{depart} (Schätzung)",
   "onArrival": "Bei Ankunft",
   "beforeRound": "Vor der Runde",
   "teeWindow": "Startzeitfenster {tee} (Schätzung)",
   "afterRound": "Nach der Runde",
   "earlyAfternoon": "Früher Nachmittag",
   "lateAfternoon": "Später Nachmittag",
   "lunch": "Mittagessen",
   "afternoon": "Nachmittag",
   "evening": "Abend"
  },
  "title": {
   "depart": "Abfahrt von Ihrer Unterkunft",
   "unhurried": "Eine entspannte Abfahrt",
   "clubhouse": "Ein Getränk im Clubhaus",
   "return": "Rückfahrt",
   "longLunch": "Ein langes mallorquinisches Mittagessen",
   "relaxedReturn": "Eine entspannte Rückfahrt",
   "lunchBooked": "Mittagessen, gebucht und getaktet",
   "beachOrVillage": "Strand- oder Dorfstunde",
   "lastLight": "Rückfahrt im letzten Licht",
   "warmupCoach": "Coaching-Aufwärmen mit mir",
   "warmupCoffee": "Aufwärmen und Kaffee",
   "holes18": "18 Löcher auf {course}",
   "holes9": "9 Löcher auf {course}"
  },
  "desc": {
   "transfer": "Ein privater Transfer holt Sie an Ihrer Unterkunft ab. Etwa {drive} Minuten bis zum Platz (Schätzung).",
   "selfDrive": "Selbstfahrt zum Platz, etwa {drive} Minuten (Schätzung). Hinweise zum Parken folgen mit dem bestätigten Plan.",
   "warmupCoach": "Eine 45-minütige Session mit mir: Aufwärmen auf der Range, kurzes Spiel und ein Plan für die Löcher, die vor Ihnen liegen.",
   "warmupCoffee": "Rangebälle, das Putting-Grün und ein Kaffee auf der Terrasse. Kommen Sie 45 Minuten vor Ihrer Startzeit an.",
   "holeNote": " Hinweis: {note}",
   "clubhouse": "Ein entspanntes Getränk auf der Terrasse, während über die Scorekarten gestritten wird.",
   "returnEfficient": "Zurück an Ihrer Basis, mit dem Rest des Tages unangetastet. Etwa {drive} Minuten (Schätzung).",
   "longLunch": "{lunch}. Der Tisch ist gebucht und so getaktet, dass Sie vom letzten Loch direkt zum Essen kommen.",
   "relaxedReturn": "Eine gemütliche Rückfahrt, etwa {drive} Minuten (Schätzung).",
   "lunchBooked": "{lunch}. Ich buche den passenden Tisch für Ihre Gruppe.",
   "beachOrVillage": "Eine nahe Bucht oder eine historische Stadt, nach Region gewählt, sobald der Plan bestätigt ist.",
   "lastLight": "Zurück zu Ihrer Basis, etwa {drive} Minuten (Schätzung), mit einem vollen Mallorca-Tag im Rücken."
  },
  "why": {
   "efficient": "Das Golf steht an erster Stelle, und die Zeiten bleiben knapp. {course} Nichts im Programm, was Sie nicht wollten.",
   "lunch": "Gutes Golf und gutes Essen sind die beiden Dinge, die diese Insel am zuverlässigsten liefert. {course} Dieser Tag gibt beidem angemessen Zeit.",
   "experienceAddons": "{course} Die gewählten Extras verdienen echte Zeit im Programm, deshalb baut dieser Plan den ganzen Tag um sie herum auf.",
   "experiencePlain": "{course} Dieser Plan fügt die Insel um die Runde herum hinzu, ohne sie zu überladen."
  },
  "whyCourse": {
   "courseType": {
    "famous": "er gehört zu den bekanntesten Plätzen der Insel",
    "scenic": "er bietet die Aussicht, die Sie sich gewünscht haben",
    "challenging": "er ist der anspruchsvollste Platz in Reichweite Ihrer Basis",
    "forgiving": "das Layout ist breit und verzeihend",
    "close": "er ist der nächstgelegene Qualitätsplatz zu Ihrer Unterkunft"
   },
   "dayStyle": {
    "serious": "er bietet eine ernsthafte Runde",
    "relaxed": "Tempo und Layout passen zu einem entspannten Tag",
    "luxury": "er ist die Premium-Option in Ihrer Gegend",
    "family": "er funktioniert für alle Spielstärken in der Gruppe",
    "scenic": "die Umgebung ist der Höhepunkt",
    "food": "er liegt nahe an den besten Restaurants der Gegend"
   },
   "matched": "er passt gut zu Ihrem Spiel",
   "fallback": "Die beste verfügbare Übereinstimmung mit Ihren Antworten in dieser Gegend.",
   "separator": ", ",
   "end": ".",
   "capitalise": true
  },
  "handles": {
   "tee": "Startzeit zum richtigen Tarif gesichert",
   "table": "Restauranttisch gebucht und auf Ihre Runde abgestimmt",
   "transportYes": "Transport von Tür zu Tür organisiert",
   "transportNo": "Routen- und Parkhinweise für Ihre Fahrt",
   "buggies": "Buggys, Schläger und Leihmaterial bei Bedarf organisiert",
   "coachingYes": "Ihre Coaching-Session mit mir bestätigt",
   "coachingNo": "Optionales Aufwärmen oder Coaching auf dem Platz mit mir",
   "whatsapp": "Ein WhatsApp-Kontakt für den ganzen Tag"
  }
 },
 "phrases": {
  "1993 redesign/expansion to 18 holes": "Neugestaltung/Erweiterung auf 18 Löcher 1993",
  "Historic established course (1964+)": "Historischer, etablierter Platz (ab 1964)",
  "(original 9 holes)": "(ursprüngliche 9 Löcher)",
  "(18-hole expansion)": "(Erweiterung auf 18 Löcher)",
  "(original)": "(Original)",
  "(2000 redesign)": "(Neugestaltung 2000)",
  "Opened in 1995": "Eröffnet 1995",
  "redesign completed in 2006": "Neugestaltung 2006 abgeschlossen",
  "9 holes; extended to 18 in 1995": "9 Löcher; 1995 auf 18 erweitert",
  "renovated €10M": "renoviert für 10 Mio. €",
  "(9 holes)": "(9 Löcher)"
 }
}

export default data

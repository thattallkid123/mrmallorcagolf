# Translation Style Guide And Common Mistakes

Read this before writing or proofreading any de, es, fr, nl, sv or zh copy on mrmallorcagolf.com, whichever model you are. It collects the rules the site already follows and the mistakes that have actually been found in review, with the fix. When a review finds a new kind of mistake, add it here; when it finds who read what, log it in `docs/translation-workflow.md` (Review Log).

The tone rules for English live in the Drive voice guide (`Systems & Planning\MMG_BRAND_VOICE_GUIDELINES.md`). This file is only about the other six languages.

## How to use it

1. Translate the meaning and the job of the sentence, not the English word order. A good test: would a golfer who only speaks that language write this sentence?
2. Then go through the checklist at the end of this file, one item at a time.
3. Run the checks (`npm run check:content`, `npm run check:i18n-release`), but treat a green run as the floor. None of the checks can tell a natural sentence from a calque.

## Rules for every language

- **Andy writes in the first person.** "I book the golf", never "Andy books the golf", except in labels such as "Andy's note" or a byline.
- **Never add a claim the English does not make.** No "exclusive access", no "best price", no extra services. If a sentence feels thin, leave it thin.
- **Names stay as they are:** courses (Son Gual, Alcanada, T Golf Calvià), restaurants, hotels, towns (Palma, Port de Sóller, Canyamel), "Play With A Pro", "Signature Day", "PGA Advanced Professional", "Trackman". Exceptions: French writes "Majorque" for Mallorca; Chinese writes 马略卡 and 帕尔马, and zh card titles and buttons may use the Chinese-facing service names the pages already use (与我同场, 陪打服务, 规划行程) rather than the English product name (see the `localize-check` skill).
- **Keep Spanish place spellings with accents:** Calvià, Sóller, Artà.
- **Prices and numbers must match the English exactly.** Format the euro the way the language does (de/es/fr/sv "200 €", nl "€ 200", zh "200 欧元"), but never change the number.
- **One form of address per page type** (decided 2026-10-03):

  | Language | Pages, tools, forms, emails | Reviews and guide articles |
  |---|---|---|
  | de | Sie | Sie |
  | fr | vous | vous |
  | es | usted | tú |
  | nl | u | je |
  | sv | du | du |
  | zh | 您 | 你 |

  Legal pages (privacy, terms) keep whatever they already use; do not switch them without asking Andy.

## Golf vocabulary (use these)

| English | de | es | fr | nl | sv | zh |
|---|---|---|---|---|---|---|
| course | Platz (never "Kurs") | campo | parcours | baan | bana | 球场 |
| round | Runde | vuelta (prefer over "ronda") | partie | ronde | runda / rundor (never "ronder") | 一轮 / 球局 |
| tee time | Startzeit | hora de salida (avoid English "tee time" in new copy) | départ / heure de départ | starttijd | starttid | 开球时间 |
| buggy | Buggy | buggy | voiturette | buggy | golfbil | 球车 |
| green fee | Greenfee | green fee | green fee | greenfee | green fee | 果岭费 |
| handicap | Handicap | hándicap | handicap | handicap | handicap | 差点 |
| club hire / rental clubs | Leihschläger | palos de alquiler | clubs de location | huurclubs | hyrklubbor | 租杆 / 球具租借 |
| first tee | erster Abschlag | primer tee | premier départ | eerste tee | första utslaget | 第一洞发球台 |

## Common mistakes found in review, with the fix

These are real examples from the site (October 2026). The pattern matters more than the example.

### 1. Calques of English nouns

The English uses "base", "golf base", "city base" loosely. Translating the word gives nonsense or office language.

| Language | Wrong | Right |
|---|---|---|
| de | Stadtbasis, Küstenbasis, Golf-Basis | In der Stadt, An der Küste, Golfhotel |
| fr | Base en ville, Base côtière, Base golf | En ville, Sur la côte, Hôtel de golf |
| es | Base en la ciudad, Base de golf | En la ciudad, Hotel de golf |
| nl | Basis in de stad, Golfbasis | In de stad, Golfhotel |
| sv | Bas i staden, Golfbas | I staden, Golfhotell |
| zh | 城市据点, 高尔夫据点 | 市中心, 高尔夫度假酒店 (据点 sounds military) |

In the where-to-stay guide the hotel area is the "base": German says Standort (not Basis), Dutch uitvalsbasis (not basis); Spanish and French "base" and Chinese 大本营 are fine.

Same family: German "Jenseits des Golfs" for "Beyond golf" (use "Neben dem Golf"), "Der Preis ist eine Fahrt" for "The trade-off is a drive" (use "Der Nachteil: …"), Spanish "Patrón de vuelos" and Dutch "Vluchtpatroon" for "Flight pattern" (say what it means: "Llegada del grupo", "Aankomst van de groep").

### 2. English left inside a translated sentence

- Room types: "Single", "twin" left in English (de, es, fr, nl, sv). Use the local room names: de Einzelzimmer / Zweibettzimmer / Doppelzimmer; es individual / con dos camas / doble; fr individuelle / à deux lits / double; nl eenpersoonskamer / kamer met aparte bedden / kamer met tweepersoonsbed; sv enkelrum / tvåbäddsrum / dubbelrum.
- "Routing" left in English in de, es, nl, sv (use Route / Ruta / Route / Rutt).
- `check:rendered-english` catches whole English sentences, not single English words inside a translated one. Read for them.

### 3. A sentence that points the wrong way

The English placeholder "e.g. Son Gual, Alcanada, or suggest some for me" (the visitor asks Andy to suggest) was translated in five languages as "or you make suggestions to me" ("machen Sie mir Vorschläge", "sugiérame usted", "proposez-moi des idées", "doe me een voorstel", "föreslå själv"). Check who does what to whom in every sentence with "me", "you" or "for me".

### 4. Form-of-address slips

- Swedish copy is written with "du", but "ert samtal" (ni form) slipped in. Use "vårt samtal" / "ditt".
- Spanish pages use usted: watch for "quieres", "tu" in page and form copy (fine in reviews).
- German: "drumherum" is too casual for Sie copy; use "darum herum" or "rund um".

### 5. Words that look right but are not the local word

- Swedish "ronder" (Norwegian/Danish) for rounds: Swedish golf says "runda / rundor".
- Swedish "Fin middag" for "fine dining": use "finare restauranger" or "finare matupplevelse".
- Chinese "一个夜生活之夜" for "a night out": use 夜间外出.
- Accented words that are also valid without the accent (sv saker/säker, fr ou/où, joue/joué, es esta/está): no word list catches these; read them.

### 6. Stiff or literal phrasing

- English idioms translated word for word: "the course flatters you" (it plays easier than it is, not "schmeichelt Ihnen" / "vous flatte" / 讨好你), "play on autopilot" (zh: 几乎不用动脑, not 自动驾驶), "a fair trade" (a fair compromise, not "Tausch" / "ruil" / 交换), "shake off the flight" (recover from it), "once your game is warm" (once you have played yourself in).
- Golf words that do not carry over: "the greens rolled pure" (de "rollten sauber", es "rodaban muy bien", not "rein" / "puros" / 纯净), "the halfway hut" (es "parada a mitad de vuelta", fr "pause à mi-parcours"), "a long hitter" (de Longhitter, nl lange hitter, not "weiter Schläger" / "lange slager"), "reachable" on a par 5 means in two.
- Short headings that drop the noun: "T Golf Palma: the quiet one" needs the noun back ("el campo tranquilo", "le parcours calme", "de rustige baan", "den lugna banan").

- de "Woran würden Sie den Erfolg dieser Reise messen?" for "What would make this trip a success?": use "Was würde diese Reise für Sie zu einem Erfolg machen?"
- nl "waar uw groep plezier aan zou beleven": use "waar uw groep van zou genieten".
- es "comer junto": "comer juntos" (agreement).
- A note card that ends "The one to book for a milestone" needs a natural local closing, not a literal one (de "Das Restaurant für einen besonderen Anlass", nl "Hier boekt u voor een bijzondere gelegenheid").

### 7. Meaning drift in small words

- Times of day: English "by mid-morning" became "until late morning" in German, Dutch, Swedish and Chinese in one guide, which changes the advice. Check every time, day and number word.
- "Despite" read as "because": "For all the height, the sea is only in view from the 2nd" means despite the height (es "Pese a", not "Con tanta altura").
- Spanish "Conforma tu par" (shape your par) for "Take your par": "Confórmate con el par".
- Swedish: score par is neuter ("nöj dig med par"), tee forms without the plural article ("från gul tee", "från främre tee"), times written 8.16 not 8:16, players are "lottade" not "ihopkopplade".

### 8. Typography

- French: a space before ? ! : ; and « guillemets » around quoted labels; apostrophes as ’.
- German quotation marks „…“; Dutch ‘…’ for quoted labels.
- Chinese: full-width punctuation （），。？！：, no space between Chinese characters, a space either side of a Latin name or number (在 Son Gual 打球, 约 1 小时).

## Checklist before a translation ships

1. Every sentence says what the English says, no more and no less, and the numbers match.
2. Who does what to whom is right in every "me / you / for me" sentence.
3. No calques: read each noun phrase and ask if a local golfer would write it (see section 1).
4. No English words left inside translated sentences (room types, "routing", "tee time" in new Spanish copy).
5. Form of address matches the table, all the way through the page.
6. Golf terms match the vocabulary table.
7. Names, accents and place spellings are intact.
8. Typography follows section 8.
9. The checks pass, then add a row to the Review Log in `docs/translation-workflow.md` with the model that wrote it and the model that read it.

Translations written by a model other than Opus get a full Opus read before they go live (see the Review Log for why).

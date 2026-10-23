// Box near the top of the best-courses guide (added 23 Oct 2026). Guide-article register: de Sie, es tu, fr vous, nl je, sv du, zh ni.

export const GUIDE_ASK_BOX = {
  "text": {
    "en": "Not sure which of these suits your game? Send me your handicap, your dates and where you are staying, and I will suggest two or three courses.",
    "de": "Nicht sicher, welcher dieser Plätze zu Ihrem Spiel passt? Schicken Sie mir Ihr Handicap, Ihre Reisedaten und Ihre Unterkunft, und ich schlage zwei oder drei Plätze vor.",
    "es": "¿No sabes cuál de estos se adapta a tu juego? Envíame tu hándicap, tus fechas y dónde te alojas, y te propondré dos o tres campos.",
    "fr": "Vous ne savez pas lequel de ces parcours convient à votre jeu ? Envoyez-moi votre handicap, vos dates et votre lieu de séjour, et je vous proposerai deux ou trois parcours.",
    "nl": "Weet je niet welke hiervan bij jouw spel past? Stuur me je handicap, je reisdata en waar je verblijft, dan stel ik twee of drie banen voor.",
    "sv": "Osäker på vilken av dessa som passar ditt spel? Skicka mig ditt handicap, dina datum och var du bor, så föreslår jag två eller tre banor.",
    "zh": "不确定其中哪座球场适合你的水平？把你的差点、日期和住宿地点发给我，我会推荐两三个球场。"
  },
  "button": {
    "en": "Ask me which courses suit you",
    "de": "Fragen Sie mich, welche Plätze zu Ihnen passen",
    "es": "Pregúntame qué campos te encajan",
    "fr": "Demandez-moi quels parcours vous conviennent",
    "nl": "Vraag me welke banen bij je passen",
    "sv": "Fråga mig vilka banor som passar dig",
    "zh": "问问我哪些球场适合你"
  }
}

export function getGuideAskBox(locale) {
  const loc = GUIDE_ASK_BOX.text[locale] ? locale : 'en'
  return { text: GUIDE_ASK_BOX.text[loc], button: GUIDE_ASK_BOX.button[loc] }
}

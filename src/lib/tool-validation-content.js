const COPY = {
  "en": {
    "handicapError": "Enter a handicap from 0 to 54, or select that you do not have an official handicap.",
    "areaFallback": "No suitable match was found in your selected area. These alternatives are elsewhere on the island; check the journey before choosing.",
    "roundsError": "Allow at least half a day per round. Reduce the rounds or add days before continuing. Two rounds in one day need suitable tee times and enough daylight.",
    "units": {
      "days": [
        "day",
        "days"
      ],
      "golfers": [
        "golfer",
        "golfers"
      ],
      "rounds": [
        "round",
        "rounds"
      ]
    }
  },
  "de": {
    "handicapError": "Geben Sie ein Handicap von 0 bis 54 ein oder wählen Sie aus, dass Sie kein offizielles Handicap haben.",
    "areaFallback": "In dem von Ihnen gewählten Gebiet wurde kein passender Treffer gefunden. Diese Alternativen liegen in anderen Teilen der Insel; prüfen Sie die Anfahrt, bevor Sie wählen.",
    "roundsError": "Rechnen Sie mindestens einen halben Tag pro Runde ein. Reduzieren Sie die Runden oder fügen Sie Tage hinzu, bevor Sie fortfahren. Zwei Runden an einem Tag brauchen passende Startzeiten und genügend Tageslicht.",
    "units": {
      "days": [
        "Tag",
        "Tage"
      ],
      "golfers": [
        "Golfer",
        "Golfer"
      ],
      "rounds": [
        "Runde",
        "Runden"
      ]
    }
  },
  "es": {
    "handicapError": "Introduzca un hándicap de 0 a 54, o indique que no tiene hándicap oficial.",
    "areaFallback": "No se encontró ninguna opción adecuada en la zona que ha seleccionado. Estas alternativas están en otras partes de la isla; compruebe el trayecto antes de elegir.",
    "roundsError": "Calcule al menos medio día por vuelta. Reduzca las vueltas o añada días antes de continuar. Dos vueltas en un mismo día requieren horas de salida adecuadas y suficiente luz natural.",
    "units": {
      "days": [
        "día",
        "días"
      ],
      "golfers": [
        "golfista",
        "golfistas"
      ],
      "rounds": [
        "vuelta",
        "vueltas"
      ]
    }
  },
  "fr": {
    "handicapError": "Saisissez un handicap de 0 à 54, ou indiquez que vous n'avez pas de handicap officiel.",
    "areaFallback": "Aucune option adaptée n'a été trouvée dans la zone que vous avez sélectionnée. Ces alternatives se trouvent ailleurs sur l'île ; vérifiez le trajet avant de choisir.",
    "roundsError": "Comptez au moins une demi-journée par partie. Réduisez le nombre de parties ou ajoutez des jours avant de continuer. Deux parties le même jour exigent des départs adaptés et suffisamment de lumière du jour.",
    "units": {
      "days": [
        "jour",
        "jours"
      ],
      "golfers": [
        "golfeur",
        "golfeurs"
      ],
      "rounds": [
        "partie",
        "parties"
      ]
    }
  },
  "nl": {
    "handicapError": "Voer een handicap van 0 tot 54 in, of geef aan dat u geen officiële handicap hebt.",
    "areaFallback": "In het door u gekozen gebied is geen passende match gevonden. Deze alternatieven liggen elders op het eiland; controleer de reis voordat u kiest.",
    "roundsError": "Reken minstens een halve dag per ronde. Verminder het aantal rondes of voeg dagen toe voordat u verdergaat. Twee rondes op één dag vereisen geschikte starttijden en genoeg daglicht.",
    "units": {
      "days": [
        "dag",
        "dagen"
      ],
      "golfers": [
        "golfer",
        "golfers"
      ],
      "rounds": [
        "ronde",
        "rondes"
      ]
    }
  },
  "sv": {
    "handicapError": "Ange ett handicap från 0 till 54, eller välj att du inte har något officiellt handicap.",
    "areaFallback": "Ingen lämplig träff hittades i det område du valde. Dessa alternativ ligger på andra delar av ön; kontrollera resan innan du väljer.",
    "roundsError": "Räkna med minst en halv dag per runda. Minska antalet rundor eller lägg till dagar innan du fortsätter. Två rundor på samma dag kräver lämpliga starttider och tillräckligt med dagsljus.",
    "units": {
      "days": [
        "dag",
        "dagar"
      ],
      "golfers": [
        "golfare",
        "golfare"
      ],
      "rounds": [
        "runda",
        "rundor"
      ]
    }
  },
  "zh": {
    "handicapError": "请输入 0 至 54 之间的差点，或选择您没有官方差点。",
    "areaFallback": "在您所选区域内未找到合适的匹配。以下备选球场位于岛上其他地区；请在选择前确认路程。",
    "roundsError": "每打一轮请预留至少半天时间。请先减少轮数或增加天数，然后再继续。一天打两轮需要合适的开球时间和足够的日照。",
    "units": {
      "days": [
        "天",
        "天"
      ],
      "golfers": [
        "球手",
        "球手"
      ],
      "rounds": [
        "轮",
        "轮"
      ]
    }
  }
}

export function getToolValidationT(locale = 'en') { return COPY[locale] || COPY.en }

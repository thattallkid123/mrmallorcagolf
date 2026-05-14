# Add t-golf-calvia-review to non-English liveGuides in guides-content.js
# Inserts after golf-andratx-review in each locale

path = r'C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\src\lib\guides-content.js'

with open(path, 'rb') as f:
    data = f.read()

entries = {
    'de': b"""      {
        slug: 't-golf-calvia-review',
        badge: 'Platz-Bewertung',
        badgeGold: true,
        title: 'T Golf Calvi\xc3\xa0 Bewertung - Die ehrliche Einsch\xc3\xa4tzung eines PGA-Professionals (2026)',
        intro:
          'F\xc3\xbcnfzehn Seen, Windm\xc3\xbchlen \xc3\xbcberall und einige der reinsten Gr\xc3\xbcns, die ich auf Mallorca gespielt habe. 9 von 10 und einer der bestgepflegten Pl\xc3\xa4tze der Insel.',
        readTime: '6 Min.',
        keywords: 'Par 72 \xc2\xb7 Bis zu \xe2\x82\xac210 \xc2\xb7 S\xc3\xbcdwest Mallorca \xc2\xb7 15 Seen',
      },
""",
    'es': b"""      {
        slug: 't-golf-calvia-review',
        badge: 'An\xc3\xa1lisis del campo',
        badgeGold: true,
        title: 'T Golf Calvi\xc3\xa0 An\xc3\xa1lisis - La Opini\xc3\xb3n Honesta de un Profesional PGA (2026)',
        intro:
          'Quince lagos, molinos de viento en todo el campo y algunos de los greens m\xc3\xa1s puros que he jugado en Mallorca. Un 9 sobre 10 y uno de los campos mejor cuidados de la isla.',
        readTime: '6 min',
        keywords: 'Par 72 \xc2\xb7 Hasta \xe2\x82\xac210 \xc2\xb7 Suroeste de Mallorca \xc2\xb7 15 lagos',
      },
""",
    'fr': b"""      {
        slug: 't-golf-calvia-review',
        badge: 'Avis Parcours',
        badgeGold: true,
        title: 'T Golf Calvi\xc3\xa0 Avis - L\'Avis Honn\xc3\xaate d\'un Professionnel PGA (2026)',
        intro:
          'Quinze lacs, des moulins \xc3\xa0 vent sur tout le parcours et certains des greens les plus purs que j\'aie jou\xc3\xa9s \xc3\xa0 Majorque. Un 9 sur 10 et l\'un des parcours les mieux entretenus de l\'\xc3\xaele.',
        readTime: '6 min',
        keywords: 'Par 72 \xc2\xb7 Jusqu\'\xc3\xa0 \xe2\x82\xac210 \xc2\xb7 Sud-ouest de Majorque \xc2\xb7 15 lacs',
      },
""",
    'nl': b"""      {
        slug: 't-golf-calvia-review',
        badge: 'Baanreview',
        badgeGold: true,
        title: 'T Golf Calvi\xc3\xa0 Review - De Eerlijke Mening van een PGA Professional (2026)',
        intro:
          'Vijftien meren, windmolens door de hele baan en enkele van de zuiverste greens die ik op Mallorca heb gespeeld. Een 9 uit 10 en een van de best onderhouden banen op het eiland.',
        readTime: '6 min',
        keywords: 'Par 72 \xc2\xb7 Tot \xe2\x82\xac210 \xc2\xb7 Zuidwest Mallorca \xc2\xb7 15 meren',
      },
""",
    'sv': b"""      {
        slug: 't-golf-calvia-review',
        badge: 'Banrecension',
        badgeGold: true,
        title: 'T Golf Calvi\xc3\xa0 Recension - En PGA-Professionals \xc3\x84rliga Omd\xc3\xb6me (2026)',
        intro:
          'Femton sj\xc3\xb6ar, v\xc3\xa4derkvarnar p\xc3\xa5 hela banan och n\xc3\xa5gra av de renaste greenerna jag spelat p\xc3\xa5 Mallorca. En 9 av 10 och en av de b\xc3\xa4st sk\xc3\xb6tta banorna p\xc3\xa5 \xc3\xb6n.',
        readTime: '6 min',
        keywords: 'Par 72 \xc2\xb7 Upp till \xe2\x82\xac210 \xc2\xb7 Sydv\xc3\xa4stra Mallorca \xc2\xb7 15 sj\xc3\xb6ar',
      },
""",
    'zh': b"""      {
        slug: 't-golf-calvia-review',
        badge: '\xe7\x90\x83\xe5\xb9\xb4\xe8\xaf\x84\xe6\xb5\x8b',
        badgeGold: true,
        title: 'T Golf Calvi\xc3\xa0 \xe8\xaf\x84\xe6\xb5\x8b \xe2\x80\x94 PGA\xe8\x81\x8c\xe4\xb8\x9a\xe7\x90\x83\xe5\x91\x98\xe7\x9a\x84\xe7\x9c\x9f\xe5\xae\x9e\xe8\xaf\x84\xe4\xbb\xb7（2026）',
        intro:
          '\xe5\x8d\x81\xe4\xba\x94\xe4\xb8\xaa\xe6\xb9\x96\xe6\xb3\x8a，\xe9\xa3\x8e\xe8\xbd\xa6\xe9\x81\x8d\xe5\xb8\x83\xe5\x85\xa8\xe5\x9c\xba，\xe6\x8e\xa8\xe6\x9d\x86\xe5\x8c\xba\xe7\xba\xaf\xe5\x87\x80\xe5\xa6\x82\xe6\x88\x91\xe5\x9c\xa8\xe9\xa9\xac\xe7\x95\xa5\xe5\x8d\xa1\xe5\xb2\x9b\xe6\x89\x80\xe6\x89\x93\xe8\xbf\x87\xe7\x9a\x84\xe6\x9c\x80\xe4\xbc\x98\xe6\xb0\xb4\xe5\xb9\xb3\xe3\x80\x829/10，\xe5\xb2\x9b\xe4\xb8\x8a\xe7\xbb\xb4\xe6\x8a\xa4\xe6\x9c\x80\xe4\xbd\xb3\xe7\x9a\x84\xe7\x90\x83\xe5\x9c\xba\xe4\xb9\x8b\xe4\xb8\x80\xe3\x80\x82',
        readTime: '6\xe5\x88\x86\xe9\x92\x9f',
        keywords: '\xe6\xa0\x87\xe5\x87\x86\xe6\x9d\xaf72 \xc2\xb7 \xe6\x9c\x80\xe9\xab\x98210\xe6\xac\xa7\xe5\x85\x83 \xc2\xb7 \xe9\xa9\xac\xe7\x95\xa5\xe5\x8d\xa1\xe5\xb2\x9b\xe8\xa5\xbf\xe5\x8d\x97\xe9\x83\xa8 \xc2\xb7 15\xe4\xb8\xaa\xe6\xb9\x96\xe6\xb3\x8a',
      },
""",
}

# For each locale, find the golf-andratx-review block and insert t-golf-calvia after it
# Each locale has its andratx block ending with a closing brace before the next slug or a-day-at-son-gual

locale_andratx = {
    'de': b"        keywords: 'Bergkurs \xc2\xb7 Par 72 \xc2\xb7 ~\xe2\x82\xac125 \xc2\xb7 S\xc3\xbcdwest Mallorca',\n      },\n",
    'es': b"        keywords: 'Campo de monta\xc3\xb1a \xc2\xb7 Par 72 \xc2\xb7 ~\xe2\x82\xac125 \xc2\xb7 Suroeste de Mallorca',\n      },\n",
    'fr': b"        keywords: 'Parcours de montagne \xc2\xb7 Par 72 \xc2\xb7 ~\xe2\x82\xac125 \xc2\xb7 Sud-ouest de Majorque',\n      },\n",
    'nl': b"        keywords: 'Bergbaan \xc2\xb7 Par 72 \xc2\xb7 ~\xe2\x82\xac125 \xc2\xb7 Zuidwest Mallorca',\n      },\n",
    'sv': b"        keywords: 'Bergbana \xc2\xb7 Par 72 \xc2\xb7 ~\xe2\x82\xac125 \xc2\xb7 S\xc3\xbcdv\xc3\xa4stra Mallorca',\n      },\n",
    'zh': b"        keywords: '\xe5\xb1\xb1\xe5\x9c\xb0\xe7\x90\x83\xe5\x9c\xba \xc2\xb7 \xe6\xa0\x87\xe5\x87\x86\xe6\x9d\xaf72 \xc2\xb7 \xe7\xba\xa6125\xe6\xac\xa7\xe5\x85\x83 \xc2\xb7 \xe9\xa9\xac\xe7\x95\xa5\xe5\x8d\xa1\xe5\xb2\x9b\xe8\xa5\xbf\xe5\x8d\x97\xe9\x83\xa8',\n      },\n",
}

for locale, andratx_end in locale_andratx.items():
    entry = entries[locale]
    if andratx_end not in data:
        print(f"WARNING: Could not find andratx end marker for {locale}")
        continue
    # Only replace first occurrence in this locale section
    idx = data.find(andratx_end)
    data = data[:idx + len(andratx_end)] + entry + data[idx + len(andratx_end):]
    print(f"{locale}: inserted")

with open(path, 'wb') as f:
    f.write(data)

print("Done.")

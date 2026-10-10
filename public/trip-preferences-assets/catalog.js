// Draft shortlist. Replace venue choices and photos after Shane's review.
// `note` is Andy's planning line (his voice, drafted for him to edit), `facts` is a
// short practical line, `price` is a rough level for restaurants only.
// Photo rule: landscape 3:2, daylight or golden hour, the room / terrace / place rather
// than a plate close-up. Process new photos to the card-*.webp pattern (1200x800 max).
window.MMGTripCatalog = {
  "areas": [
    {
      "id": "palma",
      "tag": "City base",
      "title": "Palma",
      "detail": "Restaurants within walking distance, with transfers out to the courses.",
      "note": "The best base if the group wants a different restaurant every night. Son Gual, Son Muntaner and Son Vida are all close.",
      "image": "card-area-palma.webp"
    },
    {
      "id": "southwest",
      "tag": "Coastal base",
      "title": "South West",
      "detail": "Marina and beach evenings around Calvià and Andratx.",
      "note": "Bendinat, Santa Ponsa, T Golf Calvià and Golf de Andratx are all on this side of the island.",
      "image": "card-area-southwest.webp",
      "alt": "Port Adriano marina from above",
      "photoLabel": "Photo: Port Adriano"
    },
    {
      "id": "east",
      "tag": "Quieter coast",
      "title": "East Mallorca",
      "detail": "Canyamel, Capdepera and Son Servera golf nearby.",
      "note": "Quieter, and Palma's courses are about an hour away. Pick it if most of the golf is on the east coast.",
      "image": "card-area-east.webp"
    },
    {
      "id": "open",
      "tag": "Advice welcome",
      "title": "You choose",
      "detail": "Tell me the golf and the group; I will suggest an area.",
      "note": "Send me the courses you want to play and I will match the base to the driving.",
      "image": "card-area-open.webp"
    }
  ],
  "stays": [
    {
      "id": "city",
      "tag": "Easy evenings",
      "title": "City hotel",
      "detail": "Walk to dinner and back after golf.",
      "note": "The trade-off is a drive to every round. Fine for Son Gual or Son Vida, longer for Alcanada.",
      "image": "card-stay-city.webp",
      "source": "https://www.hotelsaratoga.com/en/",
      "alt": "Hotel Saratoga rooftop view over Palma towards the cathedral",
      "photoLabel": "Example photo: Hotel Saratoga",
      "photoType": "venue"
    },
    {
      "id": "golf",
      "tag": "Golf first",
      "title": "Golf base",
      "detail": "A resort close to the first tee.",
      "note": "Short drives to golf, fewer restaurants within walking distance.",
      "image": "card-stay-golf.webp",
      "source": "https://capvermellgrandhotel.com/en/",
      "alt": "Cap Vermell Grand Hotel pool and terraces",
      "photoLabel": "Example photo: Cap Vermell Grand Hotel",
      "photoType": "venue"
    },
    {
      "id": "coast",
      "tag": "By the water",
      "title": "Coastal hotel",
      "detail": "Beach or sea views, depending on the area.",
      "note": "Pick the coast that matches the courses, or the evenings cost you an hour in the car.",
      "image": "card-stay-coast.webp",
      "source": "https://www.cansimoneta.com/en",
      "photoType": "venue",
      "photoLabel": "Example photo: Can Simoneta",
      "alt": "Can Simoneta pool and sea view"
    },
    {
      "id": "finca",
      "tag": "Smaller stay",
      "title": "Country finca",
      "detail": "A quieter base with space between rounds.",
      "note": "Quiet and spacious. Plan on transfers or hire cars for every meal out.",
      "image": "card-stay-finca.webp",
      "source": "https://www.songener.com/en/gallery/",
      "alt": "Finca Son Gener in the countryside",
      "photoLabel": "Example photo: Son Gener",
      "photoType": "venue"
    },
    {
      "id": "villa",
      "tag": "Your own space",
      "title": "Private villa",
      "detail": "Shared evenings and your own pool.",
      "note": "Best for a group that wants to eat together. Ask me about a private chef for one night.",
      "image": "card-stay-villa.webp",
      "photoType": "illustrative",
      "alt": "Villa pool looking over the Mallorca countryside"
    }
  ],
  "dinners": [
    {
      "id": "can-eduardo",
      "tag": "Palma · seafood",
      "title": "Ca n’Eduardo",
      "detail": "Fish and rice above Palma’s fishing port.",
      "note": "Upstairs from the fish market, looking across the port. An easy first night after an afternoon arrival.",
      "price": "€€€",
      "image": "card-dine-eduardo.webp",
      "source": "https://www.caneduardo.com/en/about-ca-neduardo/",
      "photoType": "venue",
      "alt": "Ca n’Eduardo dining room with a view over Palma port"
    },
    {
      "id": "marc-fosh",
      "tag": "Palma · Michelin star",
      "title": "Marc Fosh",
      "detail": "Michelin-starred tasting menu in the old town, with a private table.",
      "note": "The Michelin-starred dinner of the trip. The private table suits a prize-giving for a smaller group; book well ahead in summer.",
      "price": "€€€€",
      "image": "card-dine-fosh.webp",
      "source": "https://www.marcfosh.com/es/",
      "photoType": "venue",
      "alt": "Marc Fosh private dining table"
    },
    {
      "id": "fera",
      "tag": "Palma · occasion",
      "title": "Fera",
      "detail": "A Palma tasting-menu evening.",
      "note": "One proper food night in the old town. Ask about group arrangements early.",
      "price": "€€€€",
      "image": "card-dine-fera.webp",
      "source": "https://ferapalma.com/fera/fera-restaurant-bar-mallorca-gallery/",
      "photoType": "venue",
      "alt": "Fera dining room in Palma"
    },
    {
      "id": "siso",
      "tag": "Palmanova · on the beach",
      "title": "Siso Beach",
      "detail": "Beachfront lunch or dinner.",
      "note": "A short drive from T Golf Calvià. Good for a beachside prize-giving after the last round.",
      "price": "€€€",
      "image": "card-dine-siso.webp",
      "source": "https://sisobeachmallorca.com/",
      "photoType": "venue",
      "alt": "Siso Beach terrace in Palmanova"
    },
    {
      "id": "annabel",
      "tag": "Palmanova · sea view",
      "title": "Annabel",
      "detail": "Sea views, music and cocktails.",
      "note": "A private room for the group, and the terrace looks straight onto the sea.",
      "price": "€€€",
      "image": "card-dine-annabel.webp",
      "source": "https://www.annabelmallorca.com/",
      "photoType": "venue",
      "alt": "Annabel terrace in Palmanova"
    },
    {
      "id": "cova-negra",
      "tag": "Capdepera · East",
      "title": "Cova Negra",
      "detail": "Dinner beneath stone arches.",
      "note": "The private room seats eight. Close to Capdepera and Canyamel golf.",
      "price": "€€€",
      "image": "card-dine-cova.webp",
      "source": "https://www.covanegra.com/",
      "photoType": "venue",
      "alt": "Cova Negra dining room under stone arches"
    },
    {
      "id": "sa-punta",
      "tag": "Port Verd · East",
      "title": "Sa Punta",
      "detail": "A longer lunch or dinner beside the water.",
      "note": "A short drive from Son Servera golf. Good for a long lunch on the last day.",
      "price": "€€€",
      "image": "card-dine-sapunta.webp",
      "source": "https://www.restaurantesapunta.com/en/",
      "photoType": "venue",
      "alt": "Sa Punta terrace by the sea at sunset"
    },
    {
      "id": "voro",
      "tag": "Canyamel · East",
      "title": "VORO",
      "detail": "Fine dining at Cap Vermell Grand Hotel.",
      "note": "In the same valley as Canyamel Golf. The one to book for a milestone.",
      "price": "€€€€",
      "image": "card-dine-voro.webp",
      "source": "https://vororestaurant.com/",
      "photoType": "venue",
      "alt": "Garden terrace at VORO, Cap Vermell"
    }
  ],
  "extras": [
    {
      "id": "winery",
      "tag": "Food & drink",
      "title": "Winery visit",
      "detail": "A tasting on a free afternoon.",
      "facts": "Consell · about 25 minutes from Palma",
      "note": "Book transfers so nobody drives back.",
      "image": "card-do-winery.webp",
      "source": "https://bodegaribas.com/ca/visitin/",
      "photoType": "venue",
      "alt": "Bodega Ribas courtyard set for a tasting",
      "photoLabel": "Photo: Bodega Ribas"
    },
    {
      "id": "boat",
      "tag": "On the water",
      "title": "Private boat",
      "detail": "Half a day with a skipper, matched to the group.",
      "facts": "Half day · skipper",
      "note": "Back in time for dinner. Mornings are usually calmer.",
      "image": "card-do-boat.webp",
      "source": "https://www.cansimoneta.com/en",
      "photoType": "venue",
      "photoLabel": "Example photo: Can Simoneta boat",
      "alt": "Motorboat off the Mallorca coast"
    },
    {
      "id": "cooking",
      "tag": "Palma",
      "title": "Moltak cooking",
      "detail": "Cook and eat together in a windmill kitchen.",
      "facts": "Palma · evening",
      "note": "Works well on an arrival day with no golf.",
      "image": "card-do-cooking.webp",
      "source": "https://moltak.com/",
      "photoType": "venue",
      "alt": "Cooking class at Moltak in Palma"
    },
    {
      "id": "beach",
      "tag": "Free afternoon",
      "title": "Beach club",
      "detail": "Sunbeds, a pool and a long lunch.",
      "facts": "Calvià · April to September",
      "note": "After a morning round, or on a day off. Book sunbeds ahead in summer.",
      "image": "card-do-beach.webp",
      "source": "https://www.nikkibeach.com/mallorca/",
      "photoType": "venue",
      "photoLabel": "Example photo: Nikki Beach Mallorca",
      "alt": "Nikki Beach Mallorca pool terrace"
    },
    {
      "id": "balloon",
      "tag": "Free morning",
      "title": "Hot-air balloon",
      "detail": "A sunrise flight over the plain.",
      "facts": "Sunrise · weather dependent",
      "note": "Pick a morning with no golf booked.",
      "image": "card-do-balloon.webp",
      "source": "https://www.mallorcaballoons.com/es/",
      "photoType": "venue",
      "alt": "Hot-air balloons over Mallorca at sunrise",
      "photoLabel": "Photo: Mallorca Balloons"
    },
    {
      "id": "olive",
      "tag": "Food & drink",
      "title": "Olive-oil tasting",
      "detail": "Son Moragues organic oil, bread and cheese.",
      "facts": "Valldemossa · 1 hour · minimum 6 people",
      "note": "Pair it with lunch in Valldemossa on a day off.",
      "image": "card-do-olive.webp",
      "source": "https://sonmo.es/en/products/valldemossa-catas-de-aceite",
      "photoType": "venue",
      "photoLabel": "Photo: Son Moragues, Valldemossa",
      "alt": "Son Moragues shop in Valldemossa"
    },
    {
      "id": "salt",
      "tag": "South coast",
      "title": "Es Trenc salt flats",
      "detail": "A guided walk round the salt pans, with a tasting.",
      "facts": "Campos · 45 minutes",
      "note": "Short and easy. Add a swim at Es Trenc beach.",
      "image": "card-do-salt.webp",
      "source": "https://www.flordesal.com/",
      "photoType": "venue",
      "photoLabel": "Photo: Flor de Sal d’Es Trenc",
      "alt": "Salt pans at Es Trenc"
    },
    {
      "id": "caves",
      "tag": "Canyamel · East",
      "title": "Coves d’Artà",
      "detail": "A guided cave visit above the sea.",
      "facts": "Canyamel · guided visit",
      "note": "Close to Canyamel Golf. Fits around an afternoon tee time.",
      "image": "card-do-caves.webp",
      "source": "https://www.cuevasdearta.com/es/",
      "photoType": "venue",
      "alt": "Entrance to the Coves d’Artà above the coast"
    },
    {
      "id": "train",
      "tag": "Day off",
      "title": "Sóller train",
      "detail": "The wooden train through the mountains to Sóller.",
      "facts": "Palma to Sóller · about 1 hour",
      "note": "A day without clubs. Lunch in Port de Sóller, then the tram back up.",
      "image": "card-do-train.webp",
      "source": "https://trendesoller.com/en/",
      "photoType": "venue",
      "photoLabel": "Photo: Tren de Sóller",
      "alt": "Sóller train crossing a stone viaduct"
    },
    {
      "id": "nadal",
      "tag": "Manacor · East",
      "title": "Rafa Nadal Museum",
      "detail": "Trophies and sports simulators at the Rafa Nadal Academy.",
      "facts": "Manacor · Rafa Nadal Academy",
      "note": "A good rainy-day option, close to the eastern courses.",
      "image": "card-do-nadal.webp",
      "source": "https://www.rafanadalmuseum.com/en",
      "photoType": "venue",
      "photoLabel": "Photo: Rafa Nadal Museum Xperience",
      "alt": "Visitors at the Rafa Nadal Academy"
    }
  ]
};

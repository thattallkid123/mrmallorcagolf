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
      "detail": "A city base with restaurants, bars and the old town on your doorstep.",
      "note": "My pick if dinners matter as much as golf. Son Gual, Son Muntaner and Son Vida fit well from here.",
      "image": "card-area-palma.webp"
    },
    {
      "id": "southwest",
      "tag": "Coastal base",
      "title": "South West",
      "detail": "Beach towns and marinas around Calvià and Andratx.",
      "note": "Works well for rounds at Bendinat, Santa Ponsa, T Golf Calvià and Andratx, with evenings by the water.",
      "image": "card-area-southwest.webp",
      "alt": "Port Adriano marina from above",
      "photoLabel": "Photo: Port Adriano"
    },
    {
      "id": "east",
      "tag": "Quieter coast",
      "title": "East Mallorca",
      "detail": "A quieter coast near Canyamel, Capdepera and Son Servera golf.",
      "note": "Choose this when most of your rounds are in the east. Mixing in Palma’s courses adds more driving.",
      "image": "card-area-east.webp"
    },
    {
      "id": "open",
      "tag": "Advice welcome",
      "title": "You choose",
      "detail": "Let me suggest the area that suits your golf and your group.",
      "note": "Send me your preferred courses and what you want from the evenings. I’ll work out where to base you.",
      "image": "card-area-open.webp"
    }
  ],
  "stays": [
    {
      "id": "city",
      "tag": "Easy evenings",
      "title": "City hotel",
      "detail": "Stay in Palma and walk out for dinner after golf.",
      "note": "Good if everyone wants freedom in the evenings. We’ll plan transfers to each round, especially courses further from Palma.",
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
      "detail": "A hotel or resort close to your main courses.",
      "note": "Choose this for easy starts and shorter golf transfers. Check the restaurant options if you want to walk out at night.",
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
      "detail": "Beach access or sea views, with time by the water between rounds.",
      "note": "Pick the coast close to your courses. A sea view is less useful if you spend the evening driving back to it.",
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
      "detail": "A quiet country stay with space to slow down between rounds.",
      "note": "Enjoy the peace, but plan transport for meals out. A private chef can make an evening at the finca part of the trip.",
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
      "detail": "Your own pool and shared space to stay, swim and eat together.",
      "note": "Good for keeping the group together after golf. Ask me about a private chef so everyone can enjoy dinner without organising it.",
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
      "detail": "Fish and rice above Palma’s fish market, overlooking the port.",
      "note": "An easy first dinner after an afternoon arrival. Get everyone together over seafood before the golf starts.",
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
      "detail": "Creative Michelin-starred tasting menus using seasonal Mallorcan ingredients.",
      "note": "Make this the main food evening and book well ahead. Ask about the private table for a smaller group or prize presentation.",
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
      "detail": "A tasting-menu restaurant combining Japanese and Mediterranean influences in the old town.",
      "note": "Choose it for a group that enjoys trying different flavours. Arrange larger tables early so the evening works for everyone.",
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
      "detail": "Beachfront lunch and dinner looking across Palmanova bay.",
      "note": "Close to T Golf Calvià. A good place to finish the last round with dinner and a beachside prize-giving.",
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
      "detail": "Mediterranean food, a sea-facing terrace, music and cocktails.",
      "note": "Ask about private dining for the group. It suits an evening where dinner carries on into drinks without changing venue.",
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
      "detail": "Mediterranean cooking beneath stone arches in Capdepera.",
      "note": "The private room seats eight. A good smaller-group dinner when you’re playing Capdepera or Canyamel.",
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
      "detail": "Lunch or dinner beside the water on Mallorca’s east coast.",
      "note": "Leave time for a long lunch after Son Servera Golf. Particularly good for a final day without rushing straight to the airport.",
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
      "detail": "Álvaro Salazar’s creative tasting menu at Cap Vermell Grand Hotel.",
      "note": "The one I’d suggest for a milestone dinner. Give it its own evening rather than squeezing it in after a late round.",
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
      "detail": "A tour of Bodega Ribas followed by a tasting of its Mallorcan wines.",
      "facts": "Consell · about 25 minutes from Palma",
      "note": "Book transfers so everyone can enjoy the tasting. Fits well into a free afternoon without taking up the whole day.",
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
      "detail": "Half a day exploring the coast with a skipper and your group on board.",
      "facts": "Half day · skipper",
      "note": "I’d favour a morning when conditions allow. You’ll have time back ashore to relax before dinner.",
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
      "detail": "Cook a local menu together in a restored windmill, then sit down to eat it.",
      "facts": "Palma · evening",
      "note": "A good way to get everyone talking on the first evening. Choose an arrival day with enough time to settle in.",
      "image": "card-do-cooking.webp",
      "source": "https://moltak.com/",
      "photoType": "venue",
      "alt": "Cooking class at Moltak in Palma"
    },
    {
      "id": "beach",
      "tag": "Free afternoon",
      "title": "Beach club",
      "detail": "Sunbeds, a pool and lunch that can stretch into the afternoon.",
      "facts": "Calvià · April to September",
      "note": "Works after a morning round or on a day off. Book sunbeds ahead in summer so the group can stay together.",
      "image": "card-do-beach.webp",
      "source": "https://www.nikkibeach.com/mallorca/",
      "photoType": "venue",
      "photoLabel": "Example photo: Nikki Beach Mallorca",
      "alt": "Nikki Beach Mallorca pool terrace"
    },
    {
      "id": "balloon",
      "tag": "Day off",
      "title": "Hot-air balloon",
      "detail": "A sunrise or sunset flight above Mallorca’s villages, farmland and mountains.",
      "facts": "Weather dependent",
      "note": "Give it a slot without golf immediately afterwards. Weather can change the plan, so keep some flexibility in the trip.",
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
      "detail": "Son Moragues olive oil, local bread and cheese in a village garden.",
      "facts": "Valldemossa · 1 hour · minimum 6 people",
      "note": "Pair it with lunch and time to explore Valldemossa. A good choice for a quieter day away from the courses.",
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
      "detail": "A guided walk through the salt pans, with a tasting of the salt produced here.",
      "facts": "Campos · 45 minutes",
      "note": "Add a swim at Es Trenc beach afterwards. That turns a short visit into an afternoon on the south coast.",
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
      "detail": "A guided visit through the caves above Canyamel bay.",
      "facts": "Canyamel · guided visit",
      "note": "Easy to combine with a day playing Canyamel Golf. Allow time for the visit before an afternoon tee time.",
      "image": "card-do-caves.webp",
      "source": "https://www.cuevasdearta.com/es/",
      "photoType": "venue",
      "alt": "Entrance to the Coves d’Artà above the coast"
    },
    {
      "id": "train",
      "tag": "Day off",
      "title": "Sóller train",
      "detail": "The wooden train through the mountains, with a tram connection to Port de Sóller.",
      "facts": "Palma to Sóller · about 1 hour",
      "note": "Give this a day without golf. Take the tram to the harbour for lunch rather than turning straight back from Sóller.",
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
      "detail": "Nadal’s trophies, interactive sports exhibits and memorabilia from sporting legends, including Tiger Woods.",
      "facts": "Manacor · Rafa Nadal Academy",
      "note": "Worth considering for anyone who enjoys sport. Add an Academy tour if the group wants to see the training facilities too.",
      "image": "card-do-nadal.webp",
      "source": "https://www.rafanadalmuseum.com/en",
      "photoType": "venue",
      "photoLabel": "Photo: Rafa Nadal Museum Xperience",
      "alt": "Visitors at the Rafa Nadal Academy"
    }
  ]
};

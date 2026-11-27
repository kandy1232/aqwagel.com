// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: Italy. (Locale it of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'Una parata di animali di compleanno con un elefante che tiene una torta di compleanno con 3 candeline al centro, insieme a un orso con un palloncino, un coniglio con un regalo, un uccello, una tartaruga con un cappello da festa, un\'anatra con un cupcake e un gatto con bandierine. Grandi forme semplici e ampie zone aperte da colorare.',
    category: 'birthday-party',
    categoryLabel: 'Festa di compleanno',
    collection: 'Feste & Vacanze',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'Un allegro giardino di insetti sotto un grande arcobaleno, con un sole sorridente, fiori e fragole. Api, farfalle, libellule, coccinelle, formiche, lumache, un ragno nella sua ragnatela, una cavalletta e un piccolo verme si nascondono in tutta la scena, in attesa di essere colorati.',
    category: 'insects-garden',
    categoryLabel: 'Insetti & Giardino',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'Un fiume serpeggia in una giungla soleggiata, con un leone, una scimmia, una zebra, un elefante, una giraffa, un cavallo, un coniglio, un\'anatra, una rana e pesci, alberi da frutto sulla riva e un lungo serpente che scende lungo le rocce.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'Un soleggiato prato di animali con un leone, un elefante, un cavallo, una scimmia, un pappagallo, una pecora, un canguro, un coniglio, un\'anatra e una rana, una lumaca e un\'ape, e un pinguino con un cappellino sul ghiaccio ai margini.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Animali della fattoria e animali del safari si incontrano vicino a un fienile — un gatto, un cane, un pulcino e un maiale vicino alla fattoria, e un elefante, una giraffa, una zebra, un leone, un ippopotamo, una scimmia, un orso, una volpe, un cervo, un rinoceronte, un gufo e un riccio intorno al ruscello e allo stagno.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'Un leone amichevole e un gattino davanti, un elefante vicino a un ruscello sinuoso, e un grande sole mandala con una piccola faccia di leopardo, con alberi, nuvole, fiori, lumache, coleotteri, uccelli, pesci e rane tutt\'intorno.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Cuccioli di animali si radunano vicino a un ruscello sinuoso sotto un grande albero frondoso — un cucciolo di leone, un puledro zebra, un cucciolo di giraffa, un cucciolo di elefante e un cucciolo di ippopotamo, con una scimmia, un uccello, una tartaruga, pesci, farfalle e una coccinella.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'Un allegro gattino dondola in un giardino di fiori con un albero sorridente, conigli, cervi, uccelli, farfalle e funghi, e un piccolo stagno con rane e pesci sotto un cielo stellato.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Due gattini giocano in un giardino al chiaro di luna — uno su un ramo, uno che sale su una scala — sotto una luna crescente sorridente, stelle e cuori, con tulipani, margherite e un sentiero di pietra.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Animali del safari vicino a un fiume, pieni di dettagli fini da colorare — elefante, rinoceronte, ippopotamo, coccodrillo, fenicotteri, giraffa, leone, koala con il suo cucciolo e un camaleonte, con palme, montagne e fiori di loto.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Woodland Friends Stream',
    description: 'Amici del bosco vicino a un ruscello sinuoso — un cervo tra gli alberi, un orsacchiotto che pesca, volpi che riposano, e un gufo, uccelli, scoiattoli, un coniglio, un riccio e topi tra funghi e foglie.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Woodland Friends Stream Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Woodland Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-safari-friends',
    title: 'Giraffe Safari Friends',
    description: 'Animali del safari in una giungla con un grande ZOO al centro — una giraffa alta, un leone e una zebra, un grande elefante con un elefantino, scimmie che dondolano sugli alberi, un pappagallo, pinguini, farfalle e fiori.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/giraffe-safari-friends.webp',
    alt: 'Giraffe Safari Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/dtCA7', // Giraffe Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'bear-safari-jeep',
    title: 'Bear Safari Jeep',
    description: 'Un orso amichevole con un binocolo davanti a una jeep da safari, una grande giraffa che si sporge, due fenicotteri vicino a un ruscello, e un\'altra giraffa, un cucciolo di giraffa e un leone a riposo nella savana.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/bear-safari-jeep.webp',
    alt: 'Bear Safari Jeep Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/BV4af', // Bear Safari Jeep — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-zebra-savanna',
    title: 'Giraffe Zebra Savanna',
    description: 'Una giraffa alta piega il suo lungo collo per mangiare foglie, un ippopotamo riposa vicino a un ruscello sinuoso, e una zebra sta vicino a uno stagno soleggiato, con uccelli, una lumaca e una farfalla, e colline con disegni di animali dietro.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/giraffe-zebra-savanna.webp',
    alt: 'Giraffe Zebra Savanna Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/JzuRr', // Giraffe Zebra Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-savanna',
    title: 'Elephant Lion Savanna',
    description: 'Un grande elefante e una giraffa alta in un\'ampia savana, un leone che riposa davanti, due cervi e un coniglietto che pascolano, con acacie, montagne, un ruscello, uccelli e nuvole.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/elephant-lion-savanna.webp',
    alt: 'Elephant Lion Savanna Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/SDs1W', // Elephant Lion Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-animal-friends',
    title: 'Woodland Animal Friends',
    description: 'Amici del bosco in un bosco soleggiato — una volpe, un cervo, un coniglio, un orso che saluta, uno scoiattolo con una ghianda, un gufo, un riccio e topi tra alberi, fiori, funghi e un piccolo ruscello.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Woodland Animal Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Woodland Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Woodland Friends Meadow',
    description: 'Tre amici del bosco in un prato fiorito — una volpe, un gattino e un cervo con grandi corna nere — tra fiori alti, con uccelli, farfalle, soli sorridenti, lune e stelle sopra.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Woodland Friends Meadow Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Woodland Friends Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-gathering',
    title: 'Safari Animal Gathering',
    description: 'Un grande raduno di animali del safari, pieno di dettagli fini da colorare — elefante, leoni, ippopotamo, giraffa, tigre, coccodrillo, panda, koala, rinoceronte, tucano, scimmia, fenicotteri, tartarughe e un camaleonte nella giungla e nel fiume.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/safari-animal-gathering.webp',
    alt: 'Safari Animal Gathering Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2XfIB', // Safari Animal Gathering — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-hippo-friends',
    title: 'Elephant Hippo Friends',
    description: 'Amici del safari nella giungla — un ippopotamo sorridente, un grande elefante, una giraffa e un leone vicino a un ruscello sinuoso, con una scimmia, una farfalla, un serpentello e un pappagallo sotto alberi e montagne.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/elephant-hippo-friends.webp',
    alt: 'Elephant Hippo Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jNdDi', // Elephant Hippo Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'jungle-animal-pond',
    title: 'Jungle Animal Pond',
    description: 'Animali della giungla intorno a uno stagno — un elefante con la proboscide alzata, un gorilla, un rinoceronte, un leone, una tigre su un ramo, un tucano, un leopardo, una zebra, un ippopotamo nello stagno, un facocero, una giraffa, una scimmia e un coccodrillo.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/jungle-animal-pond.webp',
    alt: 'Jungle Animal Pond Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/0FGfy', // Jungle Animal Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'farm-barn-friends',
    title: 'Farm Barn Friends',
    description: 'Amici della fattoria in un giorno di pioggia — una mucca davanti a un fienile, un gatto, un\'anatra con un ombrello, un coniglio con carote, un pulcino, rane con ombrelli in uno stagno, un tricheco e un delfino, un bruco, farfalle e un grande sole.',
    category: 'farm',
    categoryLabel: 'Fattoria',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/farm-barn-friends.webp',
    alt: 'Farm Barn Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Farm Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-forest-portrait',
    title: 'Lion Forest Portrait',
    description: 'Un adorabile cucciolo di leone in una foresta — un leone con una grande criniera rotonda sta in mezzo, con alberi alti su entrambi i lati, un sole sorridente e nuvole sopra, un baobab, una giraffa e un elefante in lontananza, fiori, felci e impronte di zampe ovunque, e un ruscello con pesci in basso.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/lion-forest-portrait.webp',
    alt: 'Lion Forest Portrait Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/4c9lZ', // Lion Forest Portrait — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-pond',
    title: 'Safari Friends Pond',
    description: 'Amici del safari intorno a uno stagno — una zebra sta a sinistra, un elefantino sta al centro, una giraffa, un cucciolo di tigre e un ippopotamo nello stagno riempiono la parte anteriore, con una scimmia su un ramo, un fenicottero e un tucano sopra, un coccodrillo nel ruscello e un leone seduto vicino a un piccolo tempio di pietra.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/safari-friends-pond.webp',
    alt: 'Safari Friends Pond Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jARbz', // Safari Friends Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'garden-pond-friends',
    title: 'Garden Pond Friends',
    description: 'Amici del giardino vicino a uno stagno — un elefante con fiori sul corpo sta a sinistra, un gufo, un coniglietto che tiene un uovo a pois, un uccello, un granchio, un anatroccolo, un pesce, una tartaruga e una formica condividono il giardino, con una casetta per uccelli, una casetta a forma di teiera, un forziere pieno di fiori, una medusa, canne e un sole sorridente.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/garden-pond-friends.webp',
    alt: 'Garden Pond Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/zpry7', // Garden Pond Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'leopard-cubs-river',
    title: 'Leopard Cubs River',
    description: 'Cuccioli di leopardo vicino a un fiume — tre cuccioli di leopardo maculati e un piccolo leone stanno vicino a un ruscello tortuoso, con palme, acacie, farfalle, una tartaruga, uccelli, un sole sorridente e nuvole sopra, e rocce e felci tutt\'intorno.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/leopard-cubs-river.webp',
    alt: 'Leopard Cubs River Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hCxAn', // Leopard Cubs River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cub-friends',
    title: 'Tiger Cub Friends',
    description: 'Un cucciolo di tigre e i suoi amici — un cucciolo di tigre siede vicino a un ruscello al centro, un elefantino sta a sinistra, un ippopotamo sorridente sta a destra e un grande pappagallo siede su un ramo, con palme e nuvole sopra.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/tiger-cub-friends.webp',
    alt: 'Tiger Cub Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/chONP', // Tiger Cub Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-elephant-river',
    title: 'Giraffe Elephant River',
    description: 'Animali del safari vicino a un fiume tortuoso — una giraffa alta sta a sinistra, un grande elefante e una zebra stanno al centro, un leone e un ippopotamo riposano a destra, una tigre siede vicino a un grande baobab, con buceri e uccelli su un ramo, pesci nel fiume, impronte di zampe e un sole sorridente sopra.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/giraffe-elephant-river.webp',
    alt: 'Giraffe Elephant River Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/3hdlV', // Giraffe Elephant River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cubs-savannah',
    title: 'Tiger Cubs Savannah',
    description: 'Cuccioli di tigre nella savana — un cucciolo di tigre e un piccolo leopardo siedono su una roccia al centro, una giraffa sorridente sbircia da dietro un grande albero, una zebra sta a sinistra, i cervi pascolano dietro, e un serpente, anatre, tartarughe e alte canne riempiono lo stagno davanti, sotto un grande sole.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/tiger-cubs-savannah.webp',
    alt: 'Tiger Cubs Savannah Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Lgd6z', // Tiger Cubs Savannah — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-monument-friends',
    title: 'Safari Monument Friends',
    description: 'Amici del safari vicino a un monumento di pietra — una giraffa e un elefante stanno a sinistra, un leone siede su una pietra scolpita al centro sotto un grande monumento a forma di faccia di leone, una scimmia siede su un albero, una zebra e una cicogna stanno vicino a uno stagno, con suricati, un pinguino, farfalle, montagne e un sole sorridente.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/safari-monument-friends.webp',
    alt: 'Safari Monument Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/HqYCe', // Safari Monument Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-deer-friends',
    title: 'Woodland Deer Friends',
    description: 'Tre amici del bosco in una foresta di fiori — un cervo con grandi corna nere, un gattino e un piccolo cerbiatto maculato stanno tra rose, tulipani e margherite, con un uccello, una farfalla, un sole sorridente, una luna sorridente e stelle nel cielo, e impronte di zampe lungo un sentiero.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-deer-friends.webp',
    alt: 'Woodland Deer Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/I7uhl', // Woodland Deer Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-jungle',
    title: 'Elephant Lion Jungle',
    description: 'Un grande raduno nella giungla, pieno di piccoli dettagli da colorare — un elefante sorridente con una scimmia e una rana sulla testa sta al centro, un leone, un ippopotamo, una giraffa, un pappagallo, due tucani, un tapiro e un bradipo riempiono la giungla, con serpenti, palme, fiori e un grande sole.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/elephant-lion-jungle.webp',
    alt: 'Elephant Lion Jungle Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/bDK4l', // Elephant Lion Jungle — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-pyramid-adventure',
    title: 'Safari Pyramid Adventure',
    description: 'Animali da safari vicino alle piramidi. Un grande elefante sta al centro con un tucano sulla schiena, un leone e un cucciolo di tigre giocano su una roccia davanti a sinistra, una giraffa alta sta dietro, un ippopotamo riposa in uno stagno a destra, con koala su un albero, tartarughe, un camaleonte, una volpe, farfalle, palme, cactus, piramidi e un tempio sotto un sole sorridente.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/safari-pyramid-adventure.webp',
    alt: 'Safari Pyramid Adventure Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/gIXqk', // Safari Pyramid Adventure — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-adventure-scene',
    title: 'Safari Adventure Scene',
    description: 'Un fitto safari nella giungla, pieno di piccoli dettagli da colorare. Un branco di elefanti attraversa il centro, un leone con un cucciolo e una tigre vicino a un coccodrillo riempiono il davanti, un leopardo, una zebra, una giraffa, un gorilla e scimmie si nascondono tra gli alberi, con una jeep da safari, una capanna-lodge su un albero, cicogne, un serpente e fitte piante della giungla tutt\'intorno.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/safari-adventure-scene.webp',
    alt: 'Safari Adventure Scene Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/A5XIE', // Safari Adventure Scene — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'bear-picnic-forest',
    title: 'Bear Picnic Forest',
    description: 'Un picnic di orsi in una foresta soleggiata. Un orso, un coniglio e una volpe condividono panini e frutta su una coperta da picnic a quadri, un elefante pesca in un ruscello sinuoso, una giraffa sta vicino, una scimmia e uno scoiattolo giocano in un albero-casa sull\'albero a spirale, con un castello in lontananza, un grande sole sorridente, uccelli, farfalle, fiori e funghi.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/bear-picnic-forest.webp',
    alt: 'Bear Picnic Forest Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/rT9f4', // Bear Picnic Forest — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-rainbow-friends',
    title: 'Giraffe Rainbow Friends',
    description: 'Una giraffa sorridente e i suoi amici sotto un arcobaleno. Una giraffa alta sta a sinistra, uno struzzo e una scimmia con una banana siedono vicino a un ruscello, un suricato sta su una roccia, un pappagallo, uccelli e libellule volano sopra, con un grande arcobaleno sopra le montagne, un sentiero sinuoso, fiori e un piccolo serpente nell\'erba.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/giraffe-rainbow-friends.webp',
    alt: 'Giraffe Rainbow Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5gaNW', // Giraffe Rainbow Friends — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-monkey-river',
    title: 'Elephant Monkey River',
    description: 'Un elefantino vicino a un fiume. Un elefantino sta a sinistra sulla riva, una scimmia con una banana e un pappagallo con una farfalla siedono su un ramo sopra, un leone riposa a destra, una giraffa e un tucano stanno dietro, con due suricati su una roccia nel fiume, un grande sole e fiori.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/elephant-monkey-river.webp',
    alt: 'Elephant Monkey River Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Gq3UK', // Elephant Monkey River — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'sloth-jungle-friends',
    title: 'Sloth Jungle Friends',
    description: 'Un bradipo assonnato e i suoi amici della giungla. Un bradipo è appeso a un ramo in alto, una scimmia, un tucano e un pappagallo siedono sugli alberi, un cucciolo di tigre sbircia dai cespugli, un elefantino sta vicino a uno stagno con una rana su una foglia di ninfea, sotto due soli e nuvole, con grandi foglie e fiori tutt\'intorno.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/sloth-jungle-friends.webp',
    alt: 'Sloth Jungle Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/LweK8', // Sloth Jungle Friends — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'winter-deer-mountains',
    title: 'Winter Deer Mountains',
    description: 'Un cervo in una foresta di montagna innevata. Un grande cervo con grandi corna sta al centro mentre cadono i fiocchi di neve, con pini, una baita di tronchi, un piccolo castello vicino a uno stagno, un gufo, un coniglio e una volpe, impronte di zampe nella neve, aurore boreali vorticose nel cielo e uno stendardo di pigne appeso in alto.',
    category: 'polar-arctic',
    categoryLabel: 'Polare & Artico',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/winter-deer-mountains.webp',
    alt: 'Winter Deer Mountains Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/XrliN', // Winter Deer Mountains — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'dense-safari-scene',
    title: 'Dense Safari Scene',
    description: 'Un fitto safari, pieno di piccoli dettagli da colorare. Un elefante, una tigre, un leopardo, un rinoceronte, una giraffa, un tucano, un leone, un ippopotamo in uno stagno, una zebra, un facocero, un gorilla e una scimmia che dondola riempiono la giungla, con fiori e foglie fitte ovunque.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/dense-safari-scene.webp',
    alt: 'Dense Safari Scene Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/q4z5H', // Dense Safari Scene — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'jungle-animal-parade',
    title: 'Jungle Animal Parade',
    description: 'Una parata di animali della giungla, piena di piccoli dettagli da colorare. Una scimmia siede a sinistra in un grande albero da frutto, un leone sta su una roccia, una zebra, un elefante, una giraffa, un rinoceronte, un cavallo e un ippopotamo in un ruscello riempiono la scena, con un cervo, gatti, un orso, pesci, api, lumache e fiori tutt\'intorno.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/jungle-animal-parade.webp',
    alt: 'Jungle Animal Parade Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/MqxZ1', // Jungle Animal Parade — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'forest-friends-gathering',
    title: 'Forest Friends Gathering',
    description: 'Adorabili cuccioli amici del bosco, pieni di piccoli dettagli da colorare. Un cucciolo di leone, un elefantino e un cucciolo di volpe siedono davanti, un unicorno, un panda che mangia bambù, un gufo, un bradipo, un camaleonte, una tartaruga e un\'ape si raccolgono intorno a un ruscello sinuoso, con un sole mandala, una luna crescente, montagne e pini.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Giungla',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 anni',
    image: '/images/forest-friends-gathering.webp',
    alt: 'Forest Friends Gathering Poster gigante da colorare per bambini di 8-12 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/cmX3K', // Forest Friends Gathering — live Payhip product, verified 27 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  }
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Feste & Vacanze', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Natura & Animali', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Veicoli & Esplorazione', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantasia & Avventura', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Imparare & Divertirsi', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
];

function getProductsByCategory(category) {
  return PRODUCTS.filter(function (p) { return p.category === category; });
}
function getProductsByCollection(slug) {
  return PRODUCTS.filter(function (p) { return p.collectionSlug === slug; });
}
function getProductsByAge(age) {
  return PRODUCTS.filter(function (p) { return p.age === age; });
}

if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
  window.COLLECTIONS = COLLECTIONS;
  window.getProductsByCategory = getProductsByCategory;
  window.getProductsByCollection = getProductsByCollection;
  window.getProductsByAge = getProductsByAge;
}

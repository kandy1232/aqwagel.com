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
    title: 'Bosco Friends Stream',
    description: 'Amici del bosco vicino a un ruscello sinuoso — un cervo tra gli alberi, un orsacchiotto che pesca, volpi che riposano, e un gufo, uccelli, scoiattoli, un coniglio, un riccio e topi tra funghi e foglie.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Bosco Friends Stream Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Bosco Friends Stream — live Payhip product, verified 26 Nov 2026
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
    title: 'Bosco Animal Friends',
    description: 'Amici del bosco in un bosco soleggiato — una volpe, un cervo, un coniglio, un orso che saluta, uno scoiattolo con una ghianda, un gufo, un riccio e topi tra alberi, fiori, funghi e un piccolo ruscello.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Bosco Animal Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Bosco Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Bosco Friends Meadow',
    description: 'Tre amici del bosco in un prato fiorito — una volpe, un gattino e un cervo con grandi corna nere — tra fiori alti, con uccelli, farfalle, soli sorridenti, lune e stelle sopra.',
    category: 'woodland',
    categoryLabel: 'Bosco',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Bosco Friends Meadow Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Bosco Friends Meadow — live Payhip product, verified 26 Nov 2026
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
    title: 'Fattoria Barn Friends',
    description: 'Amici della fattoria in un giorno di pioggia — una mucca davanti a un fienile, un gatto, un\'anatra con un ombrello, un coniglio con carote, un pulcino, rane con ombrelli in uno stagno, un tricheco e un delfino, un bruco, farfalle e un grande sole.',
    category: 'farm',
    categoryLabel: 'Fattoria',
    collection: 'Natura & Animali',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 anni',
    image: '/images/farm-barn-friends.webp',
    alt: 'Fattoria Barn Friends Poster gigante da colorare per bambini di 4-7 anni',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Fattoria Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
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

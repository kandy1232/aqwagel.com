// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: Netherlands. (Locale nl of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'Een verjaardagsdierenparade met een olifant die een verjaardagstaart met 3 kaarsjes in het midden vasthoudt, samen met een beer met een ballon, een konijn met een cadeau, een vogel, een schildpad met een feesthoedje, een eend met een cupcake en een kat met slingers. Grote eenvoudige vormen en grote open vlakken om in te kleuren.',
    category: 'birthday-party',
    categoryLabel: 'Verjaardagsfeest',
    collection: 'Feesten & Vakanties',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'Een vrolijke insectentuin onder een grote regenboog, met een lachende zon, bloemen en aardbeien. Bijen, vlinders, libellen, lieveheersbeestjes, mieren, slakken, een spin in zijn web, een sprinkhaan en een kleine worm verstoppen zich door de hele scène, wachtend om ingekleurd te worden.',
    category: 'insects-garden',
    categoryLabel: 'Insecten & Tuin',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'Een rivier slingert door een zonnige jungle, met een leeuw, een aap, een zebra, een olifant, een giraf, een paard, een konijn, een eend, een kikker en vissen, fruitbomen aan de oever en een lange slang die langs de rotsen naar beneden kronkelt.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'Een zonnige dierenweide met een leeuw, een olifant, een paard, een aap, een papegaai, een schaap, een kangoeroe, een konijn, een eend en een kikker, een slak en een bij, en een pinguïn met een klein hoedje op het ijs aan de rand.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Boerderijdieren en safaridieren ontmoeten elkaar bij een schuur — een kat, een hond, een kuiken en een varken bij de boerderij, en een olifant, een giraf, een zebra, een leeuw, een nijlpaard, een aap, een beer, een vos, een hert, een neushoorn, een uil en een egel rond de beek en de vijver.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'Een vriendelijke leeuw en een kitten vooraan, een olifant bij een kronkelende beek, en een grote mandalazon met een klein luipaardgezicht, met bomen, wolken, bloemen, slakken, kevers, vogels, vissen en kikkers eromheen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Babydieren verzamelen zich bij een kronkelende beek onder een grote bladerrijke boom — een leeuwenwelp, een zebraveulen, een girafkalf, een olifantenkalf en een babynijlpaard, met een aap, een vogel, een schildpad, vissen, vlinders en een lieveheersbeestje.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'Een vrolijk kitten schommelt in een bloementuin met een lachende boom, konijnen, herten, vogels, vlinders en paddenstoelen, en een kleine vijver met kikkers en vissen onder een sterrenhemel.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Twee kittens spelen in een tuin in het maanlicht — een op een boomtak, een klimt op een ladder — onder een lachende halve maan, sterren en harten, met tulpen, madeliefjes en een stenen pad.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Safaridieren bij een rivier, vol fijne details om in te kleuren — olifant, neushoorn, nijlpaard, krokodil, flamingo\'s, giraf, leeuw, koala met haar baby en een kameleon, met palmbomen, bergen en lotusbloemen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 jaar',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals Reuze kleurposter voor kinderen van 8-12 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Bos Friends Stream',
    description: 'Bosvrienden bij een kronkelende beek — een hert tussen de bomen, een kleine beer die vist, vossen die rusten, en een uil, vogels, eekhoorns, een konijn, een egel en muizen tussen de paddenstoelen en bladeren.',
    category: 'woodland',
    categoryLabel: 'Bos',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Bos Friends Stream Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Bos Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Feesten & Vakanties', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Natuur & Dieren', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Voertuigen & Ontdekken', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantasie & Avontuur', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Leren & Plezier', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

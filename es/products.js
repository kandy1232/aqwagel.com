// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: Spain. (Locale es of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'Un desfile de animales de cumpleaños con un elefante que sostiene un pastel de cumpleaños con 3 velas en el centro, acompañado por un oso con un globo, un conejo con un regalo, un pájaro, una tortuga con un sombrero de fiesta, un pato con un cupcake y un gato con banderines. Formas grandes y simples y amplias zonas abiertas para colorear.',
    category: 'birthday-party',
    categoryLabel: 'Fiesta de cumpleaños',
    collection: 'Celebraciones y Fiestas',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'Un alegre jardín de insectos bajo un gran arcoíris, con un sol sonriente, flores y fresas. Abejas, mariposas, libélulas, mariquitas, hormigas, caracoles, una araña en su telaraña, un saltamontes y un pequeño gusano se esconden por toda la escena, esperando a ser coloreados.',
    category: 'insects-garden',
    categoryLabel: 'Insectos y Jardín',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'Un río serpentea por una selva soleada, con un león, un mono, una cebra, un elefante, una jirafa, un caballo, un conejo, un pato, una rana y peces, árboles frutales en la orilla y una larga serpiente que baja por las rocas.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'Un soleado prado de animales con un león, un elefante, un caballo, un mono, un loro, una oveja, un canguro, un conejo, un pato y una rana, un caracol y una abeja, y un pingüino con un sombrerito sobre el hielo en el borde.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Los animales de la granja y del safari se encuentran junto a un granero — un gato, un perro, un pollito y un cerdo junto a la granja, y un elefante, una jirafa, una cebra, un león, un hipopótamo, un mono, un oso, un zorro, un ciervo, un rinoceronte, un búho y un erizo alrededor del arroyo y el estanque.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'Un león amable y un gatito al frente, un elefante junto a un arroyo sinuoso, y un gran sol mandala con una pequeña cara de leopardo, con árboles, nubes, flores, caracoles, escarabajos, pájaros, peces y ranas alrededor.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Animales bebés se reúnen junto a un arroyo sinuoso bajo un gran árbol frondoso — un cachorro de león, un potrillo cebra, una cría de jirafa, una cría de elefante y un bebé hipopótamo, con un mono, un pájaro, una tortuga, peces, mariposas y una mariquita.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'Un gatito alegre se columpia en un jardín de flores con un árbol sonriente, conejos, ciervos, pájaros, mariposas y hongos, y un pequeño estanque con ranas y peces bajo un cielo estrellado.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Dos gatitos juegan en un jardín a la luz de la luna — uno en una rama, otro subiendo por una escalera — bajo una luna creciente sonriente, estrellas y corazones, con tulipanes, margaritas y un camino de piedra.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Animales de safari junto a un río, llenos de detalles finos para colorear — elefante, rinoceronte, hipopótamo, cocodrilo, flamencos, jirafa, león, koala con su bebé y un camaleón, con palmeras, montañas y flores de loto.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 años',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals Póster gigante para colorear para niños de 8-12 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Bosque Friends Stream',
    description: 'Amigos del bosque junto a un arroyo sinuoso — un ciervo entre los árboles, un pequeño oso pescando, zorros descansando, y un búho, pájaros, ardillas, un conejo, un erizo y ratones entre los hongos y las hojas.',
    category: 'woodland',
    categoryLabel: 'Bosque',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Bosque Friends Stream Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Bosque Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Celebraciones y Fiestas', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Naturaleza y Animales', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Vehículos y Exploración', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantasía y Aventura', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Aprender y Diversión', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

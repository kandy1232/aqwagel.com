// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: France. (Locale fr of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'Une parade d\'animaux d\'anniversaire avec un éléphant tenant un gâteau d\'anniversaire avec 3 bougies au centre, accompagné d\'un ours avec un ballon, d\'un lapin tenant un cadeau, d\'un oiseau, d\'une tortue avec un chapeau de fête, d\'un canard avec un cupcake et d\'un chat avec des fanions. Grandes formes simples et grandes zones ouvertes à colorier.',
    category: 'birthday-party',
    categoryLabel: 'Fête d\'anniversaire',
    collection: 'Fêtes & Vacances',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'Un joyeux jardin d\'insectes sous un grand arc-en-ciel, avec un soleil souriant, des fleurs et des fraises. Abeilles, papillons, libellules, coccinelles, fourmis, escargots, une araignée dans sa toile, une sauterelle et un petit ver se cachent partout dans la scène, en attendant d\'être coloriés.',
    category: 'insects-garden',
    categoryLabel: 'Insectes & Jardin',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'Une rivière serpente dans une jungle ensoleillée, avec un lion, un singe, un zèbre, un éléphant, une girafe, un cheval, un lapin, un canard, une grenouille et des poissons, des arbres fruitiers sur la rive et un long serpent qui descend le long des rochers.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'Une prairie animale ensoleillée avec un lion, un éléphant, un cheval, un singe, un perroquet, un mouton, un kangourou, un lapin, un canard et une grenouille, un escargot et une abeille, et un pingouin avec un petit chapeau sur la glace au bord.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Les animaux de la ferme et du safari se rencontrent près d\'une grange — un chat, un chien, un poussin et un cochon près de la ferme, et un éléphant, une girafe, un zèbre, un lion, un hippopotame, un singe, un ours, un renard, un cerf, un rhinocéros, un hibou et un hérisson autour du ruisseau et de l\'étang.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'Un lion amical et un chaton devant, un éléphant près d\'un ruisseau sinueux, et un grand soleil mandala avec un petit visage de léopard, avec des arbres, des nuages, des fleurs, des escargots, des coléoptères, des oiseaux, des poissons et des grenouilles tout autour.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Des bébés animaux se rassemblent près d\'un ruisseau sinueux sous un grand arbre feuillu — un lionceau, un poulain zèbre, un girafon, un éléphanteau et un bébé hippopotame, avec un singe, un oiseau, une tortue, des poissons, des papillons et une coccinelle.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'Un joyeux chaton se balance dans un jardin de fleurs avec un arbre souriant, des lapins, des cerfs, des oiseaux, des papillons et des champignons, et un petit étang avec des grenouilles et des poissons sous un ciel étoilé.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Deux chatons jouent dans un jardin au clair de lune — l\'un sur une branche, l\'autre grimpant à une échelle — sous un croissant de lune souriant, des étoiles et des cœurs, avec des tulipes, des marguerites et un chemin de pierre.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Des animaux de safari au bord d\'une rivière, pleins de fins détails à colorier — éléphant, rhinocéros, hippopotame, crocodile, flamants roses, girafe, lion, koala avec son bébé et un caméléon, avec des palmiers, des montagnes et des fleurs de lotus.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 ans',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals Poster géant à colorier pour enfants de 8-12 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Forêt Friends Stream',
    description: 'Des amis de la forêt près d\'un ruisseau sinueux — un cerf dans les arbres, un petit ours qui pêche, des renards qui se reposent, et un hibou, des oiseaux, des écureuils, un lapin, un hérisson et des souris parmi les champignons et les feuilles.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Forêt Friends Stream Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Forêt Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-safari-friends',
    title: 'Giraffe Safari Friends',
    description: 'Des animaux de safari dans une jungle avec un grand ZOO au milieu — une grande girafe, un lion et un zèbre, un grand éléphant avec un bébé éléphant, des singes qui se balancent dans les arbres, un perroquet, des pingouins, des papillons et des fleurs.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/giraffe-safari-friends.webp',
    alt: 'Giraffe Safari Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/dtCA7', // Giraffe Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'bear-safari-jeep',
    title: 'Bear Safari Jeep',
    description: 'Un ours amical avec des jumelles devant un jeep de safari, une grande girafe qui se penche, deux flamants roses près d\'un ruisseau, et une autre girafe, un bébé girafe et un lion au repos dans la savane.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/bear-safari-jeep.webp',
    alt: 'Bear Safari Jeep Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/BV4af', // Bear Safari Jeep — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-zebra-savanna',
    title: 'Giraffe Zebra Savanna',
    description: 'Une grande girafe plie son long cou pour manger des feuilles, un hippopotame se repose près d\'un ruisseau sinueux, et un zèbre se tient près d\'un étang ensoleillé, avec des oiseaux, un escargot et un papillon, et des collines avec des dessins d\'animaux derrière.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/giraffe-zebra-savanna.webp',
    alt: 'Giraffe Zebra Savanna Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/JzuRr', // Giraffe Zebra Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-savanna',
    title: 'Elephant Lion Savanna',
    description: 'Un grand éléphant et une grande girafe dans une large savane, un lion qui se repose devant, deux cerfs et un petit lapin qui broutent, avec des acacias, des montagnes, un ruisseau, des oiseaux et des nuages.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/elephant-lion-savanna.webp',
    alt: 'Elephant Lion Savanna Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/SDs1W', // Elephant Lion Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-animal-friends',
    title: 'Forêt Animal Friends',
    description: 'Des amis de la forêt dans une forêt ensoleillée — un renard, un cerf, un lapin, un ours qui fait signe, un écureuil avec un gland, un hibou, un hérisson et des souris parmi les arbres, les fleurs, les champignons et un petit ruisseau.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Forêt Animal Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Forêt Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Forêt Friends Meadow',
    description: 'Trois amis de la forêt dans un pré fleuri — un renard, un chaton et un cerf avec de grands bois noirs — parmi les hautes fleurs, avec des oiseaux, des papillons, des soleils souriants, des lunes et des étoiles au-dessus.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Forêt Friends Meadow Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Forêt Friends Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-gathering',
    title: 'Safari Animal Gathering',
    description: 'Un grand rassemblement d\'animaux de safari, plein de fins détails à colorier — éléphant, lions, hippopotame, girafe, tigre, crocodile, panda, koalas, rhinocéros, toucan, singe, flamants roses, tortues et un caméléon dans la jungle et la rivière.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 ans',
    image: '/images/safari-animal-gathering.webp',
    alt: 'Safari Animal Gathering Poster géant à colorier pour enfants de 8-12 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2XfIB', // Safari Animal Gathering — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-hippo-friends',
    title: 'Elephant Hippo Friends',
    description: 'Des amis de safari dans la jungle — un hippopotame souriant, un grand éléphant, une girafe et un lion près d\'un ruisseau sinueux, avec un singe, un papillon, un petit serpent et un perroquet sous les arbres et les montagnes.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/elephant-hippo-friends.webp',
    alt: 'Elephant Hippo Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jNdDi', // Elephant Hippo Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'jungle-animal-pond',
    title: 'Jungle Animal Pond',
    description: 'Des animaux de la jungle autour d\'un étang — un éléphant avec sa trompe levée, un gorille, un rhinocéros, un lion, un tigre sur une branche, un toucan, un léopard, un zèbre, un hippopotame dans l\'étang, un phacochère, une girafe, un singe et un crocodile.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/jungle-animal-pond.webp',
    alt: 'Jungle Animal Pond Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/0FGfy', // Jungle Animal Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'farm-barn-friends',
    title: 'Ferme Barn Friends',
    description: 'Des amis de la ferme un jour de pluie — une vache devant une grange, un chat, un canard avec un parapluie, un lapin avec des carottes, un poussin, des grenouilles avec des parapluies dans un étang, un morse et un dauphin, une chenille, des papillons et un grand soleil.',
    category: 'farm',
    categoryLabel: 'Ferme',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/farm-barn-friends.webp',
    alt: 'Ferme Barn Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Ferme Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Fêtes & Vacances', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Nature & Animaux', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Véhicules & Exploration', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantaisie & Aventure', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Apprendre & S\'amuser', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

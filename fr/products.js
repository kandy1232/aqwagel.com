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
    title: 'Woodland Friends Stream',
    description: 'Des amis de la forêt près d\'un ruisseau sinueux — un cerf dans les arbres, un petit ours qui pêche, des renards qui se reposent, et un hibou, des oiseaux, des écureuils, un lapin, un hérisson et des souris parmi les champignons et les feuilles.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Woodland Friends Stream Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Woodland Friends Stream — live Payhip product, verified 26 Nov 2026
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
    title: 'Woodland Animal Friends',
    description: 'Des amis de la forêt dans une forêt ensoleillée — un renard, un cerf, un lapin, un ours qui fait signe, un écureuil avec un gland, un hibou, un hérisson et des souris parmi les arbres, les fleurs, les champignons et un petit ruisseau.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Woodland Animal Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Woodland Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Woodland Friends Meadow',
    description: 'Trois amis de la forêt dans un pré fleuri — un renard, un chaton et un cerf avec de grands bois noirs — parmi les hautes fleurs, avec des oiseaux, des papillons, des soleils souriants, des lunes et des étoiles au-dessus.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Woodland Friends Meadow Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Woodland Friends Meadow — live Payhip product, verified 26 Nov 2026
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
    title: 'Farm Barn Friends',
    description: 'Des amis de la ferme un jour de pluie — une vache devant une grange, un chat, un canard avec un parapluie, un lapin avec des carottes, un poussin, des grenouilles avec des parapluies dans un étang, un morse et un dauphin, une chenille, des papillons et un grand soleil.',
    category: 'farm',
    categoryLabel: 'Ferme',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/farm-barn-friends.webp',
    alt: 'Farm Barn Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Farm Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-forest-portrait',
    title: 'Lion Forest Portrait',
    description: 'Un adorable lionceau dans une forêt — un lion avec une grande crinière ronde se tient au milieu, avec de grands arbres des deux côtés, un soleil souriant et des nuages au-dessus, un baobab, une girafe et un éléphant au loin, des fleurs, des fougères et des traces de pattes partout, et un ruisseau avec des poissons en bas.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/lion-forest-portrait.webp',
    alt: 'Lion Forest Portrait Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/4c9lZ', // Lion Forest Portrait — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-pond',
    title: 'Safari Friends Pond',
    description: 'Des amis du safari autour d\'un étang — un zèbre se tient à gauche, un bébé éléphant se tient au centre, une girafe, un bébé tigre et un hippopotame dans l\'étang remplissent le devant, avec un singe sur une branche, un flamant rose et un toucan au-dessus, un crocodile dans le ruisseau et un lion assis près d\'un petit temple en pierre.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/safari-friends-pond.webp',
    alt: 'Safari Friends Pond Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jARbz', // Safari Friends Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'garden-pond-friends',
    title: 'Garden Pond Friends',
    description: 'Des amis du jardin près d\'un étang — un éléphant avec des fleurs sur le corps se tient à gauche, un hibou, un lapin tenant un œuf à pois, un oiseau, un crabe, un caneton, un poisson, une tortue et une fourmi partagent le jardin, avec un nichoir, un nichoir en forme de théière, un coffre au trésor plein de fleurs, une méduse, des roseaux et un soleil souriant.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/garden-pond-friends.webp',
    alt: 'Garden Pond Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/zpry7', // Garden Pond Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'leopard-cubs-river',
    title: 'Leopard Cubs River',
    description: 'Des bébés léopards près d\'une rivière — trois bébés léopards tachetés et un petit lion se tiennent près d\'un ruisseau sinueux, avec des palmiers, des acacias, des papillons, une tortue, des oiseaux, un soleil souriant et des nuages au-dessus, et des rochers et des fougères tout autour.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/leopard-cubs-river.webp',
    alt: 'Leopard Cubs River Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hCxAn', // Leopard Cubs River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cub-friends',
    title: 'Tiger Cub Friends',
    description: 'Un bébé tigre et ses amis — un bébé tigre est assis près d\'un ruisseau au milieu, un bébé éléphant se tient à gauche, un hippopotame souriant se tient à droite et un grand perroquet est perché sur une branche, avec des palmiers et des nuages au-dessus.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/tiger-cub-friends.webp',
    alt: 'Tiger Cub Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/chONP', // Tiger Cub Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-elephant-river',
    title: 'Giraffe Elephant River',
    description: 'Des animaux du safari près d\'une rivière sinueuse — une grande girafe se tient à gauche, un grand éléphant et un zèbre se tiennent au milieu, un lion et un hippopotame se reposent à droite, un tigre est assis près d\'un grand baobab, avec des calaos et des oiseaux sur une branche, des poissons dans la rivière, des traces de pattes et un soleil souriant au-dessus.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/giraffe-elephant-river.webp',
    alt: 'Giraffe Elephant River Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/3hdlV', // Giraffe Elephant River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cubs-savannah',
    title: 'Tiger Cubs Savannah',
    description: 'Des bébés tigres dans la savane — un bébé tigre et un petit léopard sont assis sur un rocher au milieu, une girafe souriante regarde derrière un grand arbre, un zèbre se tient à gauche, des cerfs broutent derrière, et un serpent, des canards, des tortues et de grands roseaux remplissent l\'étang devant, sous un grand soleil.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/tiger-cubs-savannah.webp',
    alt: 'Tiger Cubs Savannah Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Lgd6z', // Tiger Cubs Savannah — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-monument-friends',
    title: 'Safari Monument Friends',
    description: 'Des amis du safari près d\'un monument en pierre — une girafe et un éléphant se tiennent à gauche, un lion est assis sur une pierre sculptée au milieu sous un grand monument en forme de tête de lion, un singe est assis dans un arbre, un zèbre et une cigogne se tiennent près d\'un étang, avec des suricates, un pingouin, des papillons, des montagnes et un soleil souriant.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/safari-monument-friends.webp',
    alt: 'Safari Monument Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/HqYCe', // Safari Monument Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-deer-friends',
    title: 'Woodland Deer Friends',
    description: 'Trois amis de la forêt dans une forêt de fleurs — un cerf avec de grands bois noirs, un chaton et un petit cerf tacheté se tiennent parmi des roses, des tulipes et des marguerites, avec un oiseau, un papillon, un soleil souriant, une lune souriante et des étoiles dans le ciel, et des traces de pattes le long d\'un chemin.',
    category: 'woodland',
    categoryLabel: 'Forêt',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 ans',
    image: '/images/woodland-deer-friends.webp',
    alt: 'Woodland Deer Friends Poster géant à colorier pour enfants de 4-7 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/I7uhl', // Woodland Deer Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-jungle',
    title: 'Elephant Lion Jungle',
    description: 'Un grand rassemblement dans la jungle, plein de petits détails à colorier — un éléphant souriant avec un singe et une grenouille sur la tête se tient au centre, un lion, un hippopotame, une girafe, un perroquet, deux toucans, un tapir et un paresseux remplissent la jungle, avec des serpents, des palmiers, des fleurs et un grand soleil.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Animaux',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 ans',
    image: '/images/elephant-lion-jungle.webp',
    alt: 'Elephant Lion Jungle Poster géant à colorier pour enfants de 8-12 ans',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/bDK4l', // Elephant Lion Jungle — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  }
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

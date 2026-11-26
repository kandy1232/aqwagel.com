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
    title: 'Woodland Friends Stream',
    description: 'Amigos del bosque junto a un arroyo sinuoso — un ciervo entre los árboles, un pequeño oso pescando, zorros descansando, y un búho, pájaros, ardillas, un conejo, un erizo y ratones entre los hongos y las hojas.',
    category: 'woodland',
    categoryLabel: 'Bosque',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Woodland Friends Stream Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Woodland Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-safari-friends',
    title: 'Giraffe Safari Friends',
    description: 'Animales de safari en una selva con un gran ZOO en el centro — una jirafa alta, un león y una cebra, un gran elefante con un elefante bebé, monos que se balancean en los árboles, un loro, pingüinos, mariposas y flores.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/giraffe-safari-friends.webp',
    alt: 'Giraffe Safari Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/dtCA7', // Giraffe Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'bear-safari-jeep',
    title: 'Bear Safari Jeep',
    description: 'Un oso amable con prismáticos frente a un jeep de safari, una gran jirafa que se asoma, dos flamencos junto a un arroyo, y otra jirafa, una jirafa bebé y un león descansando en la sabana.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/bear-safari-jeep.webp',
    alt: 'Bear Safari Jeep Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/BV4af', // Bear Safari Jeep — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-zebra-savanna',
    title: 'Giraffe Zebra Savanna',
    description: 'Una jirafa alta dobla su largo cuello para comer hojas, un hipopótamo descansa junto a un arroyo sinuoso, y una cebra está junto a un estanque soleado, con pájaros, un caracol y una mariposa, y colinas con dibujos de animales detrás.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/giraffe-zebra-savanna.webp',
    alt: 'Giraffe Zebra Savanna Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/JzuRr', // Giraffe Zebra Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-savanna',
    title: 'Elephant Lion Savanna',
    description: 'Un gran elefante y una jirafa alta en una amplia sabana, un león descansando al frente, dos ciervos y un conejito pastando, con acacias, montañas, un arroyo, pájaros y nubes.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/elephant-lion-savanna.webp',
    alt: 'Elephant Lion Savanna Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/SDs1W', // Elephant Lion Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-animal-friends',
    title: 'Woodland Animal Friends',
    description: 'Amigos del bosque en un bosque soleado — un zorro, un ciervo, un conejo, un oso que saluda, una ardilla con una bellota, un búho, un erizo y ratones entre árboles, flores, hongos y un pequeño arroyo.',
    category: 'woodland',
    categoryLabel: 'Bosque',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Woodland Animal Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Woodland Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Woodland Friends Meadow',
    description: 'Tres amigos del bosque en un prado de flores — un zorro, un gatito y un ciervo con grandes cuernos negros — entre flores altas, con pájaros, mariposas, soles sonrientes, lunas y estrellas arriba.',
    category: 'woodland',
    categoryLabel: 'Bosque',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Woodland Friends Meadow Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Woodland Friends Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-gathering',
    title: 'Safari Animal Gathering',
    description: 'Una gran reunión de animales de safari, llena de detalles finos para colorear — elefante, leones, hipopótamo, jirafa, tigre, cocodrilo, panda, koalas, rinoceronte, tucán, mono, flamencos, tortugas y un camaleón en la selva y el río.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 años',
    image: '/images/safari-animal-gathering.webp',
    alt: 'Safari Animal Gathering Póster gigante para colorear para niños de 8-12 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2XfIB', // Safari Animal Gathering — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-hippo-friends',
    title: 'Elephant Hippo Friends',
    description: 'Amigos de safari en la selva — un hipopótamo sonriente, un gran elefante, una jirafa y un león junto a un arroyo sinuoso, con un mono, una mariposa, una pequeña serpiente y un loro bajo árboles y montañas.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/elephant-hippo-friends.webp',
    alt: 'Elephant Hippo Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jNdDi', // Elephant Hippo Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'jungle-animal-pond',
    title: 'Jungle Animal Pond',
    description: 'Animales de la selva alrededor de un estanque — un elefante con la trompa levantada, un gorila, un rinoceronte, un león, un tigre en una rama, un tucán, un leopardo, una cebra, un hipopótamo en el estanque, un jabalí verrugoso, una jirafa, un mono y un cocodrilo.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/jungle-animal-pond.webp',
    alt: 'Jungle Animal Pond Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/0FGfy', // Jungle Animal Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'farm-barn-friends',
    title: 'Farm Barn Friends',
    description: 'Amigos de la granja en un día lluvioso — una vaca frente a un granero, un gato, un pato con un paraguas, un conejo con zanahorias, un pollito, ranas con paraguas en un estanque, una morsa y un delfín, una oruga, mariposas y un gran sol.',
    category: 'farm',
    categoryLabel: 'Granja',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/farm-barn-friends.webp',
    alt: 'Farm Barn Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Farm Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-forest-portrait',
    title: 'Lion Forest Portrait',
    description: 'Un adorable cachorro de león en un bosque — un león con una gran melena redonda está en el medio, con árboles altos a ambos lados, un sol sonriente y nubes arriba, un baobab, una jirafa y un elefante a lo lejos, flores, helechos y huellas de patas por todas partes, y un arroyo con peces abajo.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/lion-forest-portrait.webp',
    alt: 'Lion Forest Portrait Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/4c9lZ', // Lion Forest Portrait — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-pond',
    title: 'Safari Friends Pond',
    description: 'Amigos del safari alrededor de un estanque — una cebra está a la izquierda, un elefante bebé está en el centro, una jirafa, un cachorro de tigre y un hipopótamo en el estanque llenan el frente, con un mono en una rama, un flamenco y un tucán arriba, un cocodrilo en el arroyo y un león sentado junto a un pequeño templo de piedra.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/safari-friends-pond.webp',
    alt: 'Safari Friends Pond Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jARbz', // Safari Friends Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'garden-pond-friends',
    title: 'Garden Pond Friends',
    description: 'Amigos del jardín junto a un estanque — un elefante con flores en el cuerpo está a la izquierda, un búho, un conejito con un huevo de lunares, un pájaro, un cangrejo, un patito, un pez, una tortuga y una hormiga comparten el jardín, con una casita para pájaros, una casita en forma de tetera, un cofre del tesoro lleno de flores, una medusa, juncos y un sol sonriente.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/garden-pond-friends.webp',
    alt: 'Garden Pond Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/zpry7', // Garden Pond Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'leopard-cubs-river',
    title: 'Leopard Cubs River',
    description: 'Cachorros de leopardo junto a un río — tres cachorros de leopardo moteados y un pequeño león están junto a un arroyo sinuoso, con palmeras, acacias, mariposas, una tortuga, pájaros, un sol sonriente y nubes arriba, y rocas y helechos por todas partes.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/leopard-cubs-river.webp',
    alt: 'Leopard Cubs River Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hCxAn', // Leopard Cubs River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cub-friends',
    title: 'Tiger Cub Friends',
    description: 'Un cachorro de tigre y sus amigos — un cachorro de tigre se sienta junto a un arroyo en el medio, un elefante bebé está a la izquierda, un hipopótamo sonriente está a la derecha y un gran loro se sienta en una rama, con palmeras y nubes arriba.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/tiger-cub-friends.webp',
    alt: 'Tiger Cub Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/chONP', // Tiger Cub Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-elephant-river',
    title: 'Giraffe Elephant River',
    description: 'Animales del safari junto a un río sinuoso — una jirafa alta está a la izquierda, un gran elefante y una cebra están en el medio, un león y un hipopótamo descansan a la derecha, un tigre se sienta junto a un gran baobab, con cálaos y pájaros en una rama, peces en el río, huellas de patas y un sol sonriente arriba.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/giraffe-elephant-river.webp',
    alt: 'Giraffe Elephant River Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/3hdlV', // Giraffe Elephant River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cubs-savannah',
    title: 'Tiger Cubs Savannah',
    description: 'Cachorros de tigre en la sabana — un cachorro de tigre y un pequeño leopardo se sientan en una roca en el medio, una jirafa sonriente se asoma detrás de un gran árbol, una cebra está a la izquierda, los ciervos pastan detrás, y una serpiente, patos, tortugas y juncos altos llenan el estanque del frente, bajo un gran sol.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/tiger-cubs-savannah.webp',
    alt: 'Tiger Cubs Savannah Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Lgd6z', // Tiger Cubs Savannah — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-monument-friends',
    title: 'Safari Monument Friends',
    description: 'Amigos del safari junto a un monumento de piedra — una jirafa y un elefante están a la izquierda, un león se sienta en una piedra tallada en el medio bajo un gran monumento en forma de cara de león, un mono se sienta en un árbol, una cebra y una cigüeña están junto a un estanque, con suricatas, un pingüino, mariposas, montañas y un sol sonriente.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/safari-monument-friends.webp',
    alt: 'Safari Monument Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/HqYCe', // Safari Monument Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-deer-friends',
    title: 'Woodland Deer Friends',
    description: 'Tres amigos del bosque en un bosque de flores — un ciervo con grandes cuernos negros, un gatito y un pequeño ciervo moteado están entre rosas, tulipanes y margaritas, con un pájaro, una mariposa, un sol sonriente, una luna sonriente y estrellas en el cielo, y huellas de patas a lo largo de un sendero.',
    category: 'woodland',
    categoryLabel: 'Bosque',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 años',
    image: '/images/woodland-deer-friends.webp',
    alt: 'Woodland Deer Friends Póster gigante para colorear para niños de 4-7 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/I7uhl', // Woodland Deer Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-jungle',
    title: 'Elephant Lion Jungle',
    description: 'Una gran reunión en la selva, llena de pequeños detalles para colorear — un elefante sonriente con un mono y una rana en la cabeza está en el centro, un león, un hipopótamo, una jirafa, un loro, dos tucanes, un tapir y un perezoso llenan la selva, con serpientes, palmeras, flores y un gran sol.',
    category: 'safari-jungle',
    categoryLabel: 'Safari y Selva',
    collection: 'Naturaleza y Animales',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 años',
    image: '/images/elephant-lion-jungle.webp',
    alt: 'Elephant Lion Jungle Póster gigante para colorear para niños de 8-12 años',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/bDK4l', // Elephant Lion Jungle — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  }
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

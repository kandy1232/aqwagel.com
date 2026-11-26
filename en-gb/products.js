// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: United Kingdom, Australia. (Locale en-gb of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'A birthday animal parade with an elephant holding a birthday cake with 3 candles in the center, joined by a bear with a balloon, a bunny holding a gift, a bird, a turtle in a party hat, a duck with a cupcake, and a cat with bunting. Big simple shapes and large open areas to color.',
    category: 'birthday-party',
    categoryLabel: 'Birthday Party',
    collection: 'Celebrations & Holidays',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'A happy insect garden under a big rainbow, with a smiling sun, flowers and strawberries. Bees, butterflies, dragonflies, ladybugs, ants, snails, a spider in its web, a grasshopper and a little worm hide all through the scene, waiting to be colored.',
    category: 'insects-garden',
    categoryLabel: 'Insects & Garden',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'A river winds through a sunny jungle, with a lion, monkey, zebra, elephant, giraffe, horse, rabbit, duck, frog and fish, fruit trees on the bank and a long snake winding down the rocks.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'A sunny animal meadow with a lion, elephant, horse, monkey, parrot, sheep, kangaroo, rabbit, duck and frog, a snail and a bee, and a penguin in a little hat on the ice at the edge.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Farm animals and safari animals meet by a barn — a cat, dog, chick and pig by the farmhouse, and an elephant, giraffe, zebra, lion, hippo, monkey, bear, fox, deer, rhino, owl and hedgehog around the stream and the pond.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'A friendly lion and a kitten in front, an elephant by a winding stream, and a big mandala sun with a little leopard face, with trees, clouds, flowers, snails, beetles, birds, fish and frogs all around.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Baby animals gather by a winding stream under a big leafy tree — a lion cub, zebra foal, giraffe calf, elephant calf and baby hippo, with a monkey, a bird, a turtle, fish, butterflies and a ladybug.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'A happy kitten swings in a flower garden with a smiling tree, bunnies, deer, birds, butterflies and mushrooms, and a little pond with frogs and fish under a starry sky.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Two kittens play in a moonlit garden — one on a tree branch, one climbing a ladder — under a smiling crescent moon, stars and hearts, with tulips, daisies and a stone path.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Safari animals by a river, full of fine details to color — elephant, rhino, hippo, crocodile, flamingos, giraffe, lion, koala with her baby and a chameleon, with palm trees, mountains and lotus flowers.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: 'Ages 8-12',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals giant colouring poster for kids ages 8-12',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Woodland Friends Stream',
    description: 'Woodland friends by a winding stream — a deer in the trees, a little bear fishing, foxes resting, and an owl, birds, squirrels, a rabbit, a hedgehog and mice among the mushrooms and leaves.',
    category: 'woodland',
    categoryLabel: 'Woodland',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Woodland Friends Stream giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Woodland Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-safari-friends',
    title: 'Giraffe Safari Friends',
    description: 'Safari animals in a jungle with a big ZOO in the middle — a tall giraffe, a lion and a zebra, a big elephant with a baby elephant, monkeys swinging in the trees, a parrot, penguins, butterflies and flowers.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/giraffe-safari-friends.webp',
    alt: 'Giraffe Safari Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/dtCA7', // Giraffe Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'bear-safari-jeep',
    title: 'Bear Safari Jeep',
    description: 'A friendly bear with binoculars in front of a safari jeep, a big giraffe leaning in, two flamingos by a stream, and another giraffe, a baby giraffe and a resting lion on the savanna.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/bear-safari-jeep.webp',
    alt: 'Bear Safari Jeep giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/BV4af', // Bear Safari Jeep — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-zebra-savanna',
    title: 'Giraffe Zebra Savanna',
    description: 'A tall giraffe bends its long neck to eat leaves, a hippo rests by a winding stream, and a zebra stands by a sunny pond, with birds, a snail and a butterfly, and hills with animal drawings behind.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/giraffe-zebra-savanna.webp',
    alt: 'Giraffe Zebra Savanna giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/JzuRr', // Giraffe Zebra Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-savanna',
    title: 'Elephant Lion Savanna',
    description: 'A big elephant and a tall giraffe on a wide savanna, a lion resting in front, two deer and a little rabbit grazing, with acacia trees, mountains, a stream, birds and clouds.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/elephant-lion-savanna.webp',
    alt: 'Elephant Lion Savanna giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/SDs1W', // Elephant Lion Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-animal-friends',
    title: 'Woodland Animal Friends',
    description: 'Woodland friends in a sunny forest — a fox, a deer, a rabbit, a waving bear, a squirrel with an acorn, an owl, a hedgehog and mice among trees, flowers, mushrooms and a little stream.',
    category: 'woodland',
    categoryLabel: 'Woodland',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Woodland Animal Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Woodland Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Woodland Friends Meadow',
    description: 'Three woodland friends in a flower meadow — a fox, a kitten and a deer with big black antlers — among tall flowers, with birds, butterflies, smiling suns, moons and stars above.',
    category: 'woodland',
    categoryLabel: 'Woodland',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Woodland Friends Meadow giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Woodland Friends Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-gathering',
    title: 'Safari Animal Gathering',
    description: 'A big safari animal gathering, full of fine details to color — elephant, lions, hippo, giraffe, tiger, crocodile, panda, koalas, rhino, toucan, monkey, flamingos, turtles and a chameleon in the jungle and the river.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: 'Ages 8-12',
    image: '/images/safari-animal-gathering.webp',
    alt: 'Safari Animal Gathering giant colouring poster for kids ages 8-12',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2XfIB', // Safari Animal Gathering — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-hippo-friends',
    title: 'Elephant Hippo Friends',
    description: 'Safari friends in the jungle — a smiling hippo, a big elephant, a giraffe and a lion by a winding stream, with a monkey, a butterfly, a little snake and a parrot under trees and mountains.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/elephant-hippo-friends.webp',
    alt: 'Elephant Hippo Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jNdDi', // Elephant Hippo Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'jungle-animal-pond',
    title: 'Jungle Animal Pond',
    description: 'Jungle animals around a pond — an elephant with its trunk raised, a gorilla, a rhino, a lion, a tiger on a branch, a toucan, a leopard, a zebra, a hippo in the pond, a warthog, a giraffe, a monkey and a crocodile.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/jungle-animal-pond.webp',
    alt: 'Jungle Animal Pond giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/0FGfy', // Jungle Animal Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'farm-barn-friends',
    title: 'Farm Barn Friends',
    description: 'Farm friends on a rainy day — a cow in front of a barn, a cat, a duck with an umbrella, a bunny with carrots, a chick, frogs with umbrellas in a pond, a walrus and a dolphin, a caterpillar, butterflies and a big sun.',
    category: 'farm',
    categoryLabel: 'Farm',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/farm-barn-friends.webp',
    alt: 'Farm Barn Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Farm Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-forest-portrait',
    title: 'Lion Forest Portrait',
    description: 'A giant black-and-white coloring poster of a cute lion cub in a forest. A lion with a big round mane stands in the middle, with tall trees on both sides, a smiling sun and clouds above, a baobab tree, a giraffe and an elephant in the distance, flowers, ferns and paw prints all around, and a stream with fish at the bottom.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/lion-forest-portrait.webp',
    alt: 'Lion Forest Portrait giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/4c9lZ', // Lion Forest Portrait — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-pond',
    title: 'Safari Friends Pond',
    description: 'A giant black-and-white coloring poster of safari friends around a pond. A zebra stands on the left, a baby elephant stands in the center, a giraffe, a tiger cub and a hippo in the pond fill the front, with a monkey on a branch, a flamingo and a toucan above, a crocodile in the stream, and a lion sitting by a little stone temple.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/safari-friends-pond.webp',
    alt: 'Safari Friends Pond giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jARbz', // Safari Friends Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'garden-pond-friends',
    title: 'Garden Pond Friends',
    description: 'A giant black-and-white coloring poster of garden friends by a pond. An elephant with flowers on its body stands on the left, an owl, a bunny holding a dotted egg, a bird, a crab, a duckling, a fish, a turtle and an ant share the garden, with a birdhouse, a teapot birdhouse, a treasure chest full of flowers, a jellyfish, reeds and a smiling sun.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/garden-pond-friends.webp',
    alt: 'Garden Pond Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/zpry7', // Garden Pond Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'leopard-cubs-river',
    title: 'Leopard Cubs River',
    description: 'A giant black-and-white coloring poster of leopard cubs by a river. Three spotted leopard cubs and a little lion stand by a winding stream, with palm trees, acacia trees, butterflies, a turtle, birds, a smiling sun and clouds above, and rocks and ferns all around.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/leopard-cubs-river.webp',
    alt: 'Leopard Cubs River giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hCxAn', // Leopard Cubs River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cub-friends',
    title: 'Tiger Cub Friends',
    description: 'A giant black-and-white coloring poster of a tiger cub and its friends. A tiger cub sits by a stream in the middle, a baby elephant stands on the left, a smiling hippo stands on the right, and a big parrot sits on a branch, with palm trees and clouds above.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/tiger-cub-friends.webp',
    alt: 'Tiger Cub Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/chONP', // Tiger Cub Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-elephant-river',
    title: 'Giraffe Elephant River',
    description: 'A giant black-and-white coloring poster of safari animals by a winding river. A tall giraffe stands on the left, a big elephant and a zebra stand in the middle, a lion and a hippo rest on the right, a tiger sits by a big baobab tree, with hornbills and birds on a branch, fish in the river, paw prints and a smiling sun above.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/giraffe-elephant-river.webp',
    alt: 'Giraffe Elephant River giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/3hdlV', // Giraffe Elephant River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cubs-savannah',
    title: 'Tiger Cubs Savannah',
    description: 'A giant black-and-white coloring poster of tiger cubs on the savanna. A tiger cub and a little leopard sit on a rock in the middle, a smiling giraffe peeks from behind a big tree, a zebra stands on the left, deer graze behind, and a snake, ducks, turtles and tall reeds fill the pond at the front, under a big sun.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/tiger-cubs-savannah.webp',
    alt: 'Tiger Cubs Savannah giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Lgd6z', // Tiger Cubs Savannah — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-monument-friends',
    title: 'Safari Monument Friends',
    description: 'A giant black-and-white coloring poster of safari friends at a stone monument. A giraffe and an elephant stand on the left, a lion sits on a carved stone in the middle under a big lion-face monument, a monkey sits in a tree, a zebra and a stork stand by a pond, with meerkats, a penguin, butterflies, mountains and a smiling sun.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/safari-monument-friends.webp',
    alt: 'Safari Monument Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/HqYCe', // Safari Monument Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-deer-friends',
    title: 'Woodland Deer Friends',
    description: 'A giant black-and-white coloring poster of three woodland friends in a flower forest. A deer with big black antlers, a kitten and a little spotted deer stand among roses, tulips and daisies, with a bird, a butterfly, a smiling sun, a smiling moon and stars in the sky, and paw prints along a path.',
    category: 'woodland',
    categoryLabel: 'Woodland',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: '/images/woodland-deer-friends.webp',
    alt: 'Woodland Deer Friends giant colouring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/I7uhl', // Woodland Deer Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-jungle',
    title: 'Elephant Lion Jungle',
    description: 'A giant black-and-white coloring poster of a big jungle gathering, full of fine details to color. A smiling elephant with a monkey and a frog on its head stands in the center, a lion, a hippo, a giraffe, a parrot, two toucans, a tapir and a sloth fill the jungle, with snakes, palm trees, flowers and a big sun.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: 'Ages 8-12',
    image: '/images/elephant-lion-jungle.webp',
    alt: 'Elephant Lion Jungle giant colouring poster for kids ages 8-12',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/bDK4l', // Elephant Lion Jungle — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  }
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Celebrations & Holidays', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Nature & Wildlife', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Vehicles & Exploration', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantasy & Adventure', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Learning & Fun', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

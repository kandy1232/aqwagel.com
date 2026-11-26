// AQWAGEL — Giant Coloring Posters
// Digital downloads only. US, UK, Canada, EU, Australia.
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'A birthday animal parade with an elephant holding a birthday cake with 3 candles in the centre, joined by a bear with a balloon, a bunny holding a gift, a bird, a turtle in a party hat, a duck with a cupcake, and a cat with bunting. Big simple shapes and large open areas to colour.',
    category: 'birthday-party',
    categoryLabel: 'Birthday Party',
    collection: 'Celebrations & Holidays',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: 'images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade giant coloring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1.5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'A happy insect garden under a big rainbow, with a smiling sun, flowers and strawberries. Bees, butterflies, dragonflies, ladybugs, ants, snails, a spider in its web, a grasshopper and a little worm hide all through the scene, waiting to be coloured.',
    category: 'insects-garden',
    categoryLabel: 'Insects & Garden',
    collection: 'Nature & Wildlife',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Ages 4-7',
    image: 'images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden giant coloring poster for kids ages 4-7',
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
    image: 'images/safari-friends-river.webp',
    alt: 'Safari Friends River giant coloring poster for kids ages 4-7',
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
    image: 'images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow giant coloring poster for kids ages 4-7',
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
    image: 'images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends giant coloring poster for kids ages 4-7',
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
    image: 'images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari giant coloring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
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

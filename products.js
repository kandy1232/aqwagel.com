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
    image: 'images/birthday-animal-parade.jpg',
    alt: 'Birthday Animal Parade giant coloring poster for kids ages 4-7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
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

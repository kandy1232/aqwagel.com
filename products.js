/* === AQWAGEL PRODUCTS === */
/* Hardcoded products - works on ALL devices, no localStorage needed */

const AQWAGEL_PRODUCTS = [
  {id: 'p1', name: 'World Map Poster', description: 'Detailed political world map with country names, capitals, and flags for classroom learning.', category: 'maps', image: 'images/world-map.webp', alt: 'Aqwagel world map poster Sri Lanka for school', price: '1500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p2', name: 'Sri Lanka Map', description: 'Colorful Sri Lanka map showing districts, major cities, rivers, and landmarks for students.', category: 'maps', image: 'images/srilanka-map.webp', alt: 'Aqwagel Sri Lanka map poster for school children', price: '1200', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p3', name: 'Solar System Poster', description: 'Vibrant solar system chart with all planets, their orbits, and fun facts for young astronomers.', category: 'solar', image: 'images/solar-system.webp', alt: 'Aqwagel solar system poster planets for kids Sri Lanka', price: '1500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p4', name: 'Human Body Chart', description: 'Educational human body diagram showing organs, bones, and body systems for school biology.', category: 'human', image: 'images/human-body.webp', alt: 'Aqwagel human body poster parts anatomy for children Sri Lanka', price: '1800', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p5', name: 'Giant World Map Coloring', description: 'Extra-large world map coloring poster for group classroom activities and creative learning.', category: 'giant', image: 'images/giant-coloring.webp', alt: 'Aqwagel giant coloring poster for kids creative activity Sri Lanka', price: '2500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p6', name: 'Animal Kingdom Poster', description: 'Beautiful animal poster featuring mammals, birds, reptiles, and marine life for nature education.', category: 'animals', image: 'images/animal-kingdom.webp', alt: 'Aqwagel animal kingdom poster for children Sri Lanka', price: '1500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p7', name: 'Insects of the World', description: 'Detailed insect chart showing butterflies, beetles, ants, and bees with labeled body parts.', category: 'animals', image: 'images/insects.webp', alt: 'Aqwagel insects of the world poster for school Sri Lanka', price: '1200', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p8', name: 'Educational Stationery Set', description: 'Complete stationery set with rulers, pencils, and erasers featuring educational designs.', category: 'stationeries', image: 'images/stationery-set.webp', alt: 'Aqwagel educational stationery set for Sri Lankan students', price: '800', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p9', name: 'Periodic Table Poster', description: 'Colorful periodic table of elements with atomic numbers, symbols, and categories for chemistry class.', category: 'science', image: 'images/periodic-table.webp', alt: 'Aqwagel periodic table poster Sri Lanka school science', price: '1500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p10', name: 'Sinhala Alphabet Chart', description: 'Complete Sinhala alphabet chart with vowels, consonants, and example words for Grade 1 students.', category: 'alphabet', image: 'images/sinhala-alphabet.webp', alt: 'Aqwagel Sinhala alphabet chart Grade 1 Sri Lanka', price: '1000', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p11', name: 'Multiplication Table Chart', description: '1 to 12 multiplication table chart with color-coded rows for easy memorization by Sri Lankan students.', category: 'math', image: 'images/multiplication-table.webp', alt: 'Aqwagel multiplication table chart Sri Lanka students', price: '1000', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p12', name: 'Sri Lanka National Symbols', description: 'Educational poster featuring Sri Lanka national flag, anthem, flower, bird, tree, and animal with descriptions.', category: 'srilanka', image: 'images/sl-symbols.webp', alt: 'Aqwagel Sri Lanka national symbols poster for schools', price: '1200', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p13', name: 'English Phonics Poster', description: 'Complete English phonics sounds chart with letter blends, digraphs, and example words for early readers.', category: 'languages', image: 'images/phonics.webp', alt: 'Aqwagel English phonics poster preschool Sri Lanka', price: '1200', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'},
  {id: 'p14', name: 'Ancient Sri Lanka Timeline', description: 'Historical timeline of ancient Sri Lanka from Vijaya to Kandyan kingdom for school history projects.', category: 'history', image: 'images/history-timeline.webp', alt: 'Aqwagel ancient Sri Lanka timeline poster school project', price: '1500', priceCurrency: 'LKR', availability: 'https://schema.org/InStock'}
];

// Function to get products by category
function getProductsByCategory(category) {
  return AQWAGEL_PRODUCTS.filter(p => p.category === category);
}

// Function to get all products
function getAllProducts() {
  return AQWAGEL_PRODUCTS;
}

// Function to get featured products (first 8)
function getFeaturedProducts() {
  return AQWAGEL_PRODUCTS.slice(0, 8);
}

// Function to get giant coloring products
function getGiantProducts() {
  return AQWAGEL_PRODUCTS.filter(p => p.category === 'giant');
}

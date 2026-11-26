// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: Germany. (Locale de of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'Eine Geburtstagstierparade mit einem Elefanten, der eine Geburtstagstorte mit 3 Kerzen in der Mitte hält, begleitet von einem Bären mit einem Luftballon, einem Hasen mit einem Geschenk, einem Vogel, einer Schildkröte mit Partyhut, einer Ente mit einem Cupcake und einer Katze mit Wimpelkette. Große einfache Formen und große offene Flächen zum Ausmalen.',
    category: 'birthday-party',
    categoryLabel: 'Geburtstagsparty',
    collection: 'Feiern & Feiertage',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'Ein fröhlicher Insektengarten unter einem großen Regenbogen, mit einer lächelnden Sonne, Blumen und Erdbeeren. Bienen, Schmetterlinge, Libellen, Marienkäfer, Ameisen, Schnecken, eine Spinne in ihrem Netz, eine Heuschrecke und ein kleiner Wurm verstecken sich in der ganzen Szene und warten darauf, ausgemalt zu werden.',
    category: 'insects-garden',
    categoryLabel: 'Insekten & Garten',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'Ein Fluss schlängelt sich durch einen sonnigen Dschungel, mit einem Löwen, einem Affen, einem Zebra, einem Elefanten, einer Giraffe, einem Pferd, einem Hasen, einer Ente, einem Frosch und Fischen, Obstbäumen am Ufer und einer langen Schlange, die sich die Felsen hinunterwindet.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'Eine sonnige Tierwiese mit einem Löwen, einem Elefanten, einem Pferd, einem Affen, einem Papagei, einem Schaf, einem Känguru, einem Hasen, einer Ente und einem Frosch, einer Schnecke und einer Biene, und einem Pinguin mit einem kleinen Hut auf dem Eis am Rand.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Bauerntiere und Safaritiere treffen sich an einer Scheune — eine Katze, ein Hund, ein Küken und ein Schwein am Bauernhaus, und ein Elefant, eine Giraffe, ein Zebra, ein Löwe, ein Nilpferd, ein Affe, ein Bär, ein Fuchs, ein Reh, ein Nashorn, eine Eule und ein Igel rund um den Bach und den Teich.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'Ein freundlicher Löwe und ein Kätzchen vorne, ein Elefant an einem gewundenen Bach und eine große Mandala-Sonne mit einem kleinen Leopardengesicht, mit Bäumen, Wolken, Blumen, Schnecken, Käfern, Vögeln, Fischen und Fröschen ringsherum.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Babytiere versammeln sich an einem gewundenen Bach unter einem großen belaubten Baum — ein Löwenbaby, ein Zebrafohlen, ein Giraffenkalb, ein Elefantenkalb und ein Baby-Nilpferd, mit einem Affen, einem Vogel, einer Schildkröte, Fischen, Schmetterlingen und einem Marienkäfer.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'Ein fröhliches Kätzchen schaukelt in einem Blumengarten mit einem lächelnden Baum, Hasen, Rehen, Vögeln, Schmetterlingen und Pilzen, und einem kleinen Teich mit Fröschen und Fischen unter einem Sternenhimmel.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Zwei Kätzchen spielen in einem Garten im Mondlicht — eines auf einem Ast, eines klettert eine Leiter hinauf — unter einem lächelnden Sichelmond, Sternen und Herzen, mit Tulpen, Gänseblümchen und einem Steinweg.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Safaritiere an einem Fluss, voller feiner Details zum Ausmalen — Elefant, Nashorn, Nilpferd, Krokodil, Flamingos, Giraffe, Löwe, Koala mit ihrem Baby und ein Chamäleon, mit Palmen, Bergen und Lotosblumen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Dschungel',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: 'Alter 8–12',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals Riesiges Ausmalposter für Kinder, Alter 8–12',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Wald Friends Stream',
    description: 'Waldfreunde an einem gewundenen Bach — ein Reh zwischen den Bäumen, ein kleiner Bär beim Angeln, Füchse beim Ausruhen, und eine Eule, Vögel, Eichhörnchen, ein Hase, ein Igel und Mäuse zwischen den Pilzen und Blättern.',
    category: 'woodland',
    categoryLabel: 'Wald',
    collection: 'Natur & Tierwelt',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: 'Alter 4–7',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Wald Friends Stream Riesiges Ausmalposter für Kinder, Alter 4–7',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Wald Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Feiern & Feiertage', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Natur & Tierwelt', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Fahrzeuge & Entdecken', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantasie & Abenteuer', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Lernen & Spaß', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

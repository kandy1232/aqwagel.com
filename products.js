// Aqwagel Products - Hardcoded for all devices
// Google Merchant Listings Fixed: price format, availability, shipping, returns

const products = [
    {
        id: 'p1',
        name: 'World Map Poster',
        description: 'Educational World Map Poster for kids. Large size, colorful design, perfect for classrooms and homes in Sri Lanka.',
        category: 'maps',
        image: 'images/world-map.webp',
        alt: 'Aqwagel World Map Poster educational Sri Lanka',
        price: '1500.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.8',
        ratingCount: '12'
    },
    {
        id: 'p2',
        name: 'Sri Lanka Map',
        description: 'Detailed Sri Lanka Map with districts, cities, and landmarks. Perfect for school projects and home learning.',
        category: 'maps',
        image: 'images/srilanka-map.webp',
        alt: 'Aqwagel Sri Lanka Map educational poster',
        price: '1200.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.9',
        ratingCount: '15'
    },
    {
        id: 'p3',
        name: 'Solar System Poster',
        description: 'Colorful Solar System Poster showing all planets. Great for science learning and classroom decoration.',
        category: 'science',
        image: 'images/solar-system.webp',
        alt: 'Aqwagel Solar System Poster planets educational',
        price: '1500.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.7',
        ratingCount: '8'
    },
    {
        id: 'p4',
        name: 'Human Body Chart',
        description: 'Educational Human Body Chart showing organs and systems. Perfect for biology learning in Sri Lankan schools.',
        category: 'science',
        image: 'images/human-body.webp',
        alt: 'Aqwagel Human Body Chart educational biology',
        price: '1800.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.6',
        ratingCount: '10'
    },
    {
        id: 'p5',
        name: 'Giant World Map Coloring',
        description: 'Giant coloring poster of the World Map. Kids can color countries while learning geography. Fun and educational!',
        category: 'giant-coloring',
        image: 'images/giant-coloring.webp',
        alt: 'Aqwagel Giant World Map Coloring poster kids',
        price: '2500.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.9',
        ratingCount: '20'
    },
    {
        id: 'p6',
        name: 'Animal Kingdom Poster',
        description: 'Beautiful Animal Kingdom Poster showing mammals, birds, fish, and reptiles. Great for young learners in Sri Lanka.',
        category: 'animals',
        image: 'images/animal-kingdom.webp',
        alt: 'Aqwagel Animal Kingdom Poster educational',
        price: '1500.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.8',
        ratingCount: '14'
    },
    {
        id: 'p7',
        name: 'Insects of the World',
        description: 'Educational poster showing various insects and bugs. Perfect for science projects and nature learning.',
        category: 'animals',
        image: 'images/insects.webp',
        alt: 'Aqwagel Insects of the World educational poster',
        price: '1200.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.5',
        ratingCount: '6'
    },
    {
        id: 'p8',
        name: 'Educational Stationery Set',
        description: 'Complete educational stationery set with rulers, pencils, and learning tools. Perfect for Sri Lankan school students.',
        category: 'stationeries',
        image: 'images/stationery-set.webp',
        alt: 'Aqwagel Educational Stationery Set Sri Lanka',
        price: '800.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.7',
        ratingCount: '18'
    },
    {
        id: 'p9',
        name: 'Periodic Table Poster',
        description: 'Complete Periodic Table of Elements poster. Color-coded and easy to read. Essential for chemistry students.',
        category: 'science',
        image: 'images/periodic-table.webp',
        alt: 'Aqwagel Periodic Table Poster chemistry educational',
        price: '1500.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.8',
        ratingCount: '11'
    },
    {
        id: 'p10',
        name: 'Sinhala Alphabet Chart',
        description: 'Colorful Sinhala Alphabet Chart with examples. Perfect for teaching Sinhala to children and beginners.',
        category: 'languages',
        image: 'images/sinhala-alphabet.webp',
        alt: 'Aqwagel Sinhala Alphabet Chart educational Sri Lanka',
        price: '1000.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.9',
        ratingCount: '22'
    },
    {
        id: 'p11',
        name: 'Multiplication Table Chart',
        description: 'Large Multiplication Table Chart from 1 to 20. Essential math learning tool for Sri Lankan primary students.',
        category: 'math',
        image: 'images/multiplication-table.webp',
        alt: 'Aqwagel Multiplication Table Chart math educational',
        price: '1000.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.6',
        ratingCount: '9'
    },
    {
        id: 'p12',
        name: 'Sri Lanka National Symbols',
        description: 'Educational poster showing Sri Lanka National Symbols - flag, emblem, flower, bird, and more. Great for patriotism education.',
        category: 'srilanka',
        image: 'images/sl-symbols.webp',
        alt: 'Aqwagel Sri Lanka National Symbols educational poster',
        price: '1200.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.8',
        ratingCount: '16'
    },
    {
        id: 'p13',
        name: 'English Phonics Poster',
        description: 'English Phonics Poster with sounds and examples. Perfect for teaching English pronunciation to Sri Lankan children.',
        category: 'languages',
        image: 'images/phonics.webp',
        alt: 'Aqwagel English Phonics Poster educational',
        price: '1200.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.7',
        ratingCount: '13'
    },
    {
        id: 'p14',
        name: 'Ancient Sri Lanka Timeline',
        description: 'Historical timeline of Ancient Sri Lanka. From Anuradhapura to Kandy kingdom. Perfect for history lessons.',
        category: 'history',
        image: 'images/history-timeline.webp',
        alt: 'Aqwagel Ancient Sri Lanka Timeline history educational',
        price: '1500.00',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        ratingValue: '4.9',
        ratingCount: '7'
    }
];

// Shipping and Return Policy Data for Google Merchant
const merchantPolicies = {
    shippingDetails: {
        shippingRate: {
            value: '250.00',
            currency: 'LKR'
        },
        shippingDestination: {
            addressCountry: 'LK',
            addressRegion: 'Western Province'
        },
        deliveryTime: {
            handlingTime: {
                minValue: '1',
                maxValue: '2',
                unitText: 'DAY'
            },
            transitTime: {
                minValue: '2',
                maxValue: '5',
                unitText: 'DAY'
            }
        }
    },
    hasMerchantReturnPolicy: {
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: '7',
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn'
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.products = products;
    window.merchantPolicies = merchantPolicies;
}

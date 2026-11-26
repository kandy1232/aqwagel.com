// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: Netherlands. (Locale nl of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'Een verjaardagsdierenparade met een olifant die een verjaardagstaart met 3 kaarsjes in het midden vasthoudt, samen met een beer met een ballon, een konijn met een cadeau, een vogel, een schildpad met een feesthoedje, een eend met een cupcake en een kat met slingers. Grote eenvoudige vormen en grote open vlakken om in te kleuren.',
    category: 'birthday-party',
    categoryLabel: 'Verjaardagsfeest',
    collection: 'Feesten & Vakanties',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'Een vrolijke insectentuin onder een grote regenboog, met een lachende zon, bloemen en aardbeien. Bijen, vlinders, libellen, lieveheersbeestjes, mieren, slakken, een spin in zijn web, een sprinkhaan en een kleine worm verstoppen zich door de hele scène, wachtend om ingekleurd te worden.',
    category: 'insects-garden',
    categoryLabel: 'Insecten & Tuin',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'Een rivier slingert door een zonnige jungle, met een leeuw, een aap, een zebra, een olifant, een giraf, een paard, een konijn, een eend, een kikker en vissen, fruitbomen aan de oever en een lange slang die langs de rotsen naar beneden kronkelt.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'Een zonnige dierenweide met een leeuw, een olifant, een paard, een aap, een papegaai, een schaap, een kangoeroe, een konijn, een eend en een kikker, een slak en een bij, en een pinguïn met een klein hoedje op het ijs aan de rand.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'Boerderijdieren en safaridieren ontmoeten elkaar bij een schuur — een kat, een hond, een kuiken en een varken bij de boerderij, en een olifant, een giraf, een zebra, een leeuw, een nijlpaard, een aap, een beer, een vos, een hert, een neushoorn, een uil en een egel rond de beek en de vijver.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'Een vriendelijke leeuw en een kitten vooraan, een olifant bij een kronkelende beek, en een grote mandalazon met een klein luipaardgezicht, met bomen, wolken, bloemen, slakken, kevers, vogels, vissen en kikkers eromheen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'Babydieren verzamelen zich bij een kronkelende beek onder een grote bladerrijke boom — een leeuwenwelp, een zebraveulen, een girafkalf, een olifantenkalf en een babynijlpaard, met een aap, een vogel, een schildpad, vissen, vlinders en een lieveheersbeestje.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'Een vrolijk kitten schommelt in een bloementuin met een lachende boom, konijnen, herten, vogels, vlinders en paddenstoelen, en een kleine vijver met kikkers en vissen onder een sterrenhemel.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'Twee kittens spelen in een tuin in het maanlicht — een op een boomtak, een klimt op een ladder — onder een lachende halve maan, sterren en harten, met tulpen, madeliefjes en een stenen pad.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'Safaridieren bij een rivier, vol fijne details om in te kleuren — olifant, neushoorn, nijlpaard, krokodil, flamingo\'s, giraf, leeuw, koala met haar baby en een kameleon, met palmbomen, bergen en lotusbloemen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 jaar',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals Reuze kleurposter voor kinderen van 8-12 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-stream',
    title: 'Woodland Friends Stream',
    description: 'Bosvrienden bij een kronkelende beek — een hert tussen de bomen, een kleine beer die vist, vossen die rusten, en een uil, vogels, eekhoorns, een konijn, een egel en muizen tussen de paddenstoelen en bladeren.',
    category: 'woodland',
    categoryLabel: 'Bos',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/woodland-friends-stream.webp',
    alt: 'Woodland Friends Stream Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // Woodland Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-safari-friends',
    title: 'Giraffe Safari Friends',
    description: 'Safaridieren in een jungle met een grote ZOO in het midden — een grote giraf, een leeuw en een zebra, een grote olifant met een babyolifant, apen die in de bomen slingeren, een papegaai, pinguïns, vlinders en bloemen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/giraffe-safari-friends.webp',
    alt: 'Giraffe Safari Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/dtCA7', // Giraffe Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'bear-safari-jeep',
    title: 'Bear Safari Jeep',
    description: 'Een vriendelijke beer met een verrekijker voor een safarijeep, een grote giraf die naar binnen leunt, twee flamingo\'s bij een beek, en nog een giraf, een babygiraf en een rustende leeuw op de savanne.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/bear-safari-jeep.webp',
    alt: 'Bear Safari Jeep Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/BV4af', // Bear Safari Jeep — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-zebra-savanna',
    title: 'Giraffe Zebra Savanna',
    description: 'Een grote giraf buigt zijn lange nek om bladeren te eten, een nijlpaard rust bij een kronkelende beek, en een zebra staat bij een zonnige vijver, met vogels, een slak en een vlinder, en heuvels met dierentekeningen erachter.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/giraffe-zebra-savanna.webp',
    alt: 'Giraffe Zebra Savanna Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/JzuRr', // Giraffe Zebra Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-savanna',
    title: 'Elephant Lion Savanna',
    description: 'Een grote olifant en een grote giraf op een wijde savanne, een leeuw die vooraan rust, twee herten en een klein konijn die grazen, met acacia\'s, bergen, een beek, vogels en wolken.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/elephant-lion-savanna.webp',
    alt: 'Elephant Lion Savanna Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/SDs1W', // Elephant Lion Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-animal-friends',
    title: 'Woodland Animal Friends',
    description: 'Bosvrienden in een zonnig bos — een vos, een hert, een konijn, een zwaaiende beer, een eekhoorn met een eikel, een uil, een egel en muizen tussen bomen, bloemen, paddenstoelen en een kleine beek.',
    category: 'woodland',
    categoryLabel: 'Bos',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/woodland-animal-friends.webp',
    alt: 'Woodland Animal Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // Woodland Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'Woodland Friends Meadow',
    description: 'Drie bosvrienden in een bloemenweide — een vos, een kitten en een hert met grote zwarte geweien — tussen hoge bloemen, met vogels, vlinders, lachende zonnen, manen en sterren erboven.',
    category: 'woodland',
    categoryLabel: 'Bos',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'Woodland Friends Meadow Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // Woodland Friends Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-animal-gathering',
    title: 'Safari Animal Gathering',
    description: 'Een grote safaridierenbijeenkomst, vol fijne details om in te kleuren — olifant, leeuwen, nijlpaard, giraf, tijger, krokodil, panda, koala\'s, neushoorn, toekan, aap, flamingo\'s, schildpadden en een kameleon in de jungle en de rivier.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 jaar',
    image: '/images/safari-animal-gathering.webp',
    alt: 'Safari Animal Gathering Reuze kleurposter voor kinderen van 8-12 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2XfIB', // Safari Animal Gathering — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-hippo-friends',
    title: 'Elephant Hippo Friends',
    description: 'Safarivrienden in de jungle — een lachend nijlpaard, een grote olifant, een giraf en een leeuw bij een kronkelende beek, met een aap, een vlinder, een klein slangetje en een papegaai onder bomen en bergen.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/elephant-hippo-friends.webp',
    alt: 'Elephant Hippo Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jNdDi', // Elephant Hippo Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'jungle-animal-pond',
    title: 'Jungle Animal Pond',
    description: 'Jungledieren rond een vijver — een olifant met zijn slurf omhoog, een gorilla, een neushoorn, een leeuw, een tijger op een tak, een toekan, een luipaard, een zebra, een nijlpaard in de vijver, een wrattenzwijn, een giraf, een aap en een krokodil.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/jungle-animal-pond.webp',
    alt: 'Jungle Animal Pond Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/0FGfy', // Jungle Animal Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'farm-barn-friends',
    title: 'Farm Barn Friends',
    description: 'Boerderijvrienden op een regenachtige dag — een koe voor een schuur, een kat, een eend met een paraplu, een konijn met wortels, een kuiken, kikkers met paraplu\'s in een vijver, een walrus en een dolfijn, een rups, vlinders en een grote zon.',
    category: 'farm',
    categoryLabel: 'Boerderij',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/farm-barn-friends.webp',
    alt: 'Farm Barn Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // Farm Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'lion-forest-portrait',
    title: 'Lion Forest Portrait',
    description: 'Een schattige leeuwenwelp in een bos — een leeuw met een grote ronde manen staat in het midden, met hoge bomen aan beide kanten, een lachende zon en wolken erboven, een baobabboom, een giraf en een olifant in de verte, bloemen, varens en pootafdrukken overal, en een beek met vissen onderaan.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/lion-forest-portrait.webp',
    alt: 'Lion Forest Portrait Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/4c9lZ', // Lion Forest Portrait — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-friends-pond',
    title: 'Safari Friends Pond',
    description: 'Safarivrienden rond een vijver — een zebra staat links, een babyolifant staat in het midden, een giraf, een tijgerwelp en een nijlpaard in de vijver vullen de voorkant, met een aap op een tak, een flamingo en een toekan erboven, een krokodil in de beek en een leeuw die bij een klein stenen tempeltje zit.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/safari-friends-pond.webp',
    alt: 'Safari Friends Pond Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jARbz', // Safari Friends Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'garden-pond-friends',
    title: 'Garden Pond Friends',
    description: 'Tuinvrienden bij een vijver — een olifant met bloemen op zijn lichaam staat links, een uil, een konijn met een gestippeld ei, een vogel, een krab, een eendje, een vis, een schildpad en een mier delen de tuin, met een vogelhuisje, een theepot-vogelhuisje, een schatkist vol bloemen, een kwal, riet en een lachende zon.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/garden-pond-friends.webp',
    alt: 'Garden Pond Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/zpry7', // Garden Pond Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'leopard-cubs-river',
    title: 'Leopard Cubs River',
    description: 'Luipaardwelpen bij een rivier — drie gevlekte luipaardwelpen en een kleine leeuw staan bij een kronkelende beek, met palmbomen, acacia\'s, vlinders, een schildpad, vogels, een lachende zon en wolken erboven, en rotsen en varens overal.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/leopard-cubs-river.webp',
    alt: 'Leopard Cubs River Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hCxAn', // Leopard Cubs River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cub-friends',
    title: 'Tiger Cub Friends',
    description: 'Een tijgerwelp en zijn vrienden — een tijgerwelp zit bij een beek in het midden, een babyolifant staat links, een lachend nijlpaard staat rechts en een grote papegaai zit op een tak, met palmbomen en wolken erboven.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/tiger-cub-friends.webp',
    alt: 'Tiger Cub Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/chONP', // Tiger Cub Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'giraffe-elephant-river',
    title: 'Giraffe Elephant River',
    description: 'Safaridieren bij een kronkelende rivier — een hoge giraf staat links, een grote olifant en een zebra staan in het midden, een leeuw en een nijlpaard rusten rechts uit, een tijger zit bij een grote baobabboom, met neushoornvogels en vogels op een tak, vissen in de rivier, pootafdrukken en een lachende zon erboven.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/giraffe-elephant-river.webp',
    alt: 'Giraffe Elephant River Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/3hdlV', // Giraffe Elephant River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'tiger-cubs-savannah',
    title: 'Tiger Cubs Savannah',
    description: 'Tijgerwelpen op de savanne — een tijgerwelp en een kleine luipaard zitten op een rots in het midden, een lachende giraf kijkt achter een grote boom vandaan, een zebra staat links, herten grazen erachter, en een slang, eenden, schildpadden en hoog riet vullen de vijver vooraan, onder een grote zon.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/tiger-cubs-savannah.webp',
    alt: 'Tiger Cubs Savannah Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Lgd6z', // Tiger Cubs Savannah — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'safari-monument-friends',
    title: 'Safari Monument Friends',
    description: 'Safarivrienden bij een stenen monument — een giraf en een olifant staan links, een leeuw zit op een gebeeldhouwde steen in het midden onder een groot monument in de vorm van een leeuwengezicht, een aap zit in een boom, een zebra en een ooievaar staan bij een vijver, met stokstaartjes, een pinguïn, vlinders, bergen en een lachende zon.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/safari-monument-friends.webp',
    alt: 'Safari Monument Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/HqYCe', // Safari Monument Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'woodland-deer-friends',
    title: 'Woodland Deer Friends',
    description: 'Drie bosvrienden in een bloemenbos — een hert met een groot zwart gewei, een katje en een klein gevlekt hert staan tussen rozen, tulpen en madeliefjes, met een vogel, een vlinder, een lachende zon, een lachende maan en sterren aan de hemel, en pootafdrukken langs een pad.',
    category: 'woodland',
    categoryLabel: 'Bos',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 jaar',
    image: '/images/woodland-deer-friends.webp',
    alt: 'Woodland Deer Friends Reuze kleurposter voor kinderen van 4-7 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/I7uhl', // Woodland Deer Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  },
  {
    id: 'elephant-lion-jungle',
    title: 'Elephant Lion Jungle',
    description: 'Een grote junglebijeenkomst vol fijne details om in te kleuren — een lachende olifant met een aap en een kikker op zijn hoofd staat in het midden, een leeuw, een nijlpaard, een giraf, een papegaai, twee toekans, een tapir en een luiaard vullen de jungle, met slangen, palmbomen, bloemen en een grote zon.',
    category: 'safari-jungle',
    categoryLabel: 'Safari & Jungle',
    collection: 'Natuur & Dieren',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 jaar',
    image: '/images/elephant-lion-jungle.webp',
    alt: 'Elephant Lion Jungle Reuze kleurposter voor kinderen van 8-12 jaar',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/bDK4l', // Elephant Lion Jungle — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 x 1,5 ft, 6 x 3 ft, 8 x 4 ft, 12 x 6 ft'
  }
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'Feesten & Vakanties', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'Natuur & Dieren', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'Voertuigen & Ontdekken', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'Fantasie & Avontuur', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'Leren & Plezier', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

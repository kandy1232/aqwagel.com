// AQWAGEL — Giant Coloring Posters
// Digital downloads only. Target countries: UAE, Saudi Arabia. (Locale ar of aqwagel.com)
// Price: $1.00 USD for every poster, all ages.
// Buy Now opens the Payhip product page.

const PRODUCTS = [
  {
    id: 'birthday-animal-parade',
    title: 'Birthday Animal Parade',
    description: 'موكب حيوانات عيد ميلاد مع فيل يحمل كعكة عيد ميلاد بثلاث شموع في الوسط، وينضم إليه دب يحمل بالونًا، وأرنب يحمل هدية، وطائر، وسلحفاة ترتدي قبعة حفلة، وبطة تحمل كعكة صغيرة، وقطة تحمل أعلامًا. أشكال كبيرة وبسيطة ومساحات مفتوحة واسعة للتلوين.',
    category: 'birthday-party',
    categoryLabel: 'حفلة عيد ميلاد',
    collection: 'الاحتفالات والأعياد',
    collectionSlug: 'celebrations-holidays',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/birthday-animal-parade.webp',
    alt: 'Birthday Animal Parade ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Z3TY6', // Birthday Animal Parade — live Payhip product, verified 25 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'rainbow-insect-garden',
    title: 'Rainbow Insect Garden',
    description: 'حديقة حشرات سعيدة تحت قوس قزح كبير، مع شمس مبتسمة وزهور وفراولة. النحل والفراشات واليعاسيب والدعاسيق والنمل والحلزونات وعنكبوت في شبكته وجندب ودودة صغيرة يختبئون في كل مكان في المشهد، في انتظار التلوين.',
    category: 'insects-garden',
    categoryLabel: 'الحشرات والحديقة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/rainbow-insect-garden.webp',
    alt: 'Rainbow Insect Garden ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/1XUHo', // Rainbow Insect Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'safari-friends-river',
    title: 'Safari Friends River',
    description: 'نهر يلتف عبر غابة مشمسة، مع أسد وقرد وحمار وحشي وفيل وزرافة وحصان وأرنب وبطة وضفدع وأسماك، وأشجار فاكهة على الضفة وثعبان طويل يلتف على الصخور.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/safari-friends-river.webp',
    alt: 'Safari Friends River ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/UA8vp', // Safari Friends River — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'safari-animal-meadow',
    title: 'Safari Animal Meadow',
    description: 'مرج حيوانات مشمس مع أسد وفيل وحصان وقرد وببغاء وخروف وكنغر وأرنب وبطة وضفدع وحلزون ونحلة، وبطريق يرتدي قبعة صغيرة على الجليد عند الحافة.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/safari-animal-meadow.webp',
    alt: 'Safari Animal Meadow ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/Rarwk', // Safari Animal Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'barn-safari-friends',
    title: 'Barn Safari Friends',
    description: 'حيوانات المزرعة وحيوانات السفاري تلتقي عند حظيرة — قطة وكلب وكتكوت وخنزير عند بيت المزرعة، وفيل وزرافة وحمار وحشي وأسد وفرس نهر وقرد ودب وثعلب وغزال ووحيد قرن وبومة وقنفذ حول الجدول والبركة.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/barn-safari-friends.webp',
    alt: 'Barn Safari Friends ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/7oYLX', // Barn Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'lion-mandala-safari',
    title: 'Lion Mandala Safari',
    description: 'أسد ودود وقطة صغيرة في المقدمة، وفيل بجانب جدول متعرج، وشمس ماندالا كبيرة بوجه نمر صغير، مع أشجار وغيوم وزهور وحلزونات وخنافس وطيور وأسماك وضفادع حولها.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/lion-mandala-safari.webp',
    alt: 'Lion Mandala Safari ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/5pKUH', // Lion Mandala Safari — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'animal-friends-stream',
    title: 'Animal Friends Stream',
    description: 'حيوانات صغيرة تتجمع عند جدول متعرج تحت شجرة مورقة كبيرة — شبل أسد ومهر حمار وحشي وصغير زرافة وصغير فيل وصغير فرس نهر، مع قرد وطائر وسلحفاة وأسماك وفراشات ودعسوقة.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/animal-friends-stream.webp',
    alt: 'Animal Friends Stream ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/iGTk0', // Animal Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'kitten-garden-swing',
    title: 'Kitten Garden Swing',
    description: 'قطة صغيرة سعيدة تتأرجح في حديقة زهور مع شجرة مبتسمة وأرانب وغزلان وطيور وفراشات وفطر، وبركة صغيرة فيها ضفادع وأسماك تحت سماء مرصعة بالنجوم.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/kitten-garden-swing.webp',
    alt: 'Kitten Garden Swing ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/fNbBy', // Kitten Garden Swing — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'kittens-moonlight-garden',
    title: 'Kittens Moonlight Garden',
    description: 'قطتان صغيرتان تلعبان في حديقة مضيئة بضوء القمر — واحدة على غصن شجرة والأخرى تتسلق سلمًا — تحت هلال مبتسم ونجوم وقلوب، مع زهور التوليب والأقحوان وطريق حجري.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/kittens-moonlight-garden.webp',
    alt: 'Kittens Moonlight Garden ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/hkoI5', // Kittens Moonlight Garden — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'safari-river-animals',
    title: 'Safari River Animals',
    description: 'حيوانات سفاري بجانب نهر، مليئة بتفاصيل دقيقة للتلوين — فيل ووحيد قرن وفرس نهر وتمساح وطيور فلامنغو وزرافة وأسد وكوالا مع صغيرها وحرباء، مع أشجار نخيل وجبال وزهور لوتس.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 سنة',
    image: '/images/safari-river-animals.webp',
    alt: 'Safari River Animals ملصق تلوين ضخم للأطفال من عمر 8-12 سنة',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/AqtgD', // Safari River Animals — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'woodland-friends-stream',
    title: 'الغابة Friends Stream',
    description: 'أصدقاء الغابة بجانب جدول متعرج — غزال بين الأشجار، ودب صغير يصطاد، وثعالب تستريح، وبومة وطيور وسناجب وأرنب وقنفذ وفئران بين الفطر والأوراق.',
    category: 'woodland',
    categoryLabel: 'الغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/woodland-friends-stream.webp',
    alt: 'الغابة Friends Stream ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/lU7fE', // الغابة Friends Stream — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'giraffe-safari-friends',
    title: 'Giraffe Safari Friends',
    description: 'حيوانات سفاري في غابة مع حديقة حيوان كبيرة في الوسط — زرافة طويلة وأسد وحمار وحشي، وفيل كبير مع فيل صغير، وقرود تتأرجح في الأشجار، وببغاء، وبطاريق، وفراشات وزهور.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/giraffe-safari-friends.webp',
    alt: 'Giraffe Safari Friends ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/dtCA7', // Giraffe Safari Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'bear-safari-jeep',
    title: 'Bear Safari Jeep',
    description: 'دب ودود يحمل منظارًا أمام سيارة سفاري، وزرافة كبيرة تنحني، وطائرا فلامنغو بجانب جدول، وزرافة أخرى وزرافة صغيرة وأسد يستريح في السافانا.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/bear-safari-jeep.webp',
    alt: 'Bear Safari Jeep ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/BV4af', // Bear Safari Jeep — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'giraffe-zebra-savanna',
    title: 'Giraffe Zebra Savanna',
    description: 'زرافة طويلة تحني عنقها الطويل لتأكل الأوراق، وفرس نهر يستريح بجانب جدول متعرج، وحمار وحشي يقف بجانب بركة مشمسة، مع طيور وحلزون وفراشة، وتلال عليها رسوم حيوانات في الخلف.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/giraffe-zebra-savanna.webp',
    alt: 'Giraffe Zebra Savanna ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/JzuRr', // Giraffe Zebra Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'elephant-lion-savanna',
    title: 'Elephant Lion Savanna',
    description: 'فيل كبير وزرافة طويلة في سافانا واسعة، وأسد يستريح في المقدمة، وغزالان وأرنب صغير يرعون، مع أشجار أكاسيا وجبال وجدول وطيور وغيوم.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/elephant-lion-savanna.webp',
    alt: 'Elephant Lion Savanna ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/SDs1W', // Elephant Lion Savanna — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'woodland-animal-friends',
    title: 'الغابة Animal Friends',
    description: 'أصدقاء الغابة في غابة مشمسة — ثعلب وغزال وأرنب ودب يلوح وسنجاب يحمل جوزة بلوط وبومة وقنفذ وفئران بين الأشجار والزهور والفطر وجدول صغير.',
    category: 'woodland',
    categoryLabel: 'الغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/woodland-animal-friends.webp',
    alt: 'الغابة Animal Friends ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/vhUCJ', // الغابة Animal Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'woodland-friends-meadow',
    title: 'الغابة Friends Meadow',
    description: 'ثلاثة أصدقاء من الغابة في مرج زهور — ثعلب وقطة صغيرة وغزال بقرون سوداء كبيرة — بين زهور طويلة، مع طيور وفراشات وشموس مبتسمة وأقمار ونجوم في الأعلى.',
    category: 'woodland',
    categoryLabel: 'الغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/woodland-friends-meadow.webp',
    alt: 'الغابة Friends Meadow ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/xYXn0', // الغابة Friends Meadow — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'safari-animal-gathering',
    title: 'Safari Animal Gathering',
    description: 'تجمع كبير لحيوانات السفاري، مليء بتفاصيل دقيقة للتلوين — فيل وأسود وفرس نهر وزرافة ونمر وتمساح وباندا وكوالا ووحيد قرن وطوقان وقرد وطيور فلامنغو وسلاحف وحرباء في الغابة والنهر.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '8-12',
    ageLabel: '8-12 سنة',
    image: '/images/safari-animal-gathering.webp',
    alt: 'Safari Animal Gathering ملصق تلوين ضخم للأطفال من عمر 8-12 سنة',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2XfIB', // Safari Animal Gathering — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'elephant-hippo-friends',
    title: 'Elephant Hippo Friends',
    description: 'أصدقاء سفاري في الغابة — فرس نهر مبتسم وفيل كبير وزرافة وأسد بجانب جدول متعرج، مع قرد وفراشة وثعبان صغير وببغاء تحت الأشجار والجبال.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/elephant-hippo-friends.webp',
    alt: 'Elephant Hippo Friends ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/jNdDi', // Elephant Hippo Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'jungle-animal-pond',
    title: 'Jungle Animal Pond',
    description: 'حيوانات الغابة حول بركة — فيل يرفع خرطومه وغوريلا ووحيد قرن وأسد ونمر على غصن وطوقان ونمر مرقط وحمار وحشي وفرس نهر في البركة وخنزير بري وزرافة وقرد وتمساح.',
    category: 'safari-jungle',
    categoryLabel: 'السفاري والغابة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/jungle-animal-pond.webp',
    alt: 'Jungle Animal Pond ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/0FGfy', // Jungle Animal Pond — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
  {
    id: 'farm-barn-friends',
    title: 'المزرعة Barn Friends',
    description: 'أصدقاء المزرعة في يوم ممطر — بقرة أمام حظيرة، وقطة، وبطة تحمل مظلة، وأرنب يحمل جزرًا، وكتكوت، وضفادع تحمل مظلات في بركة، وفظ ودلفين، ويسروع، وفراشات وشمس كبيرة.',
    category: 'farm',
    categoryLabel: 'المزرعة',
    collection: 'الطبيعة والحياة البرية',
    collectionSlug: 'nature-wildlife',
    age: '4-7',
    ageLabel: '4-7 سنوات',
    image: '/images/farm-barn-friends.webp',
    alt: 'المزرعة Barn Friends ملصق تلوين ضخم للأطفال من عمر 4-7 سنوات',
    price: '1.00',
    priceCurrency: 'USD',
    payhipUrl: 'https://payhip.com/b/2NvFM', // المزرعة Barn Friends — live Payhip product, verified 26 Nov 2026
    formats: 'SVG + PDF',
    sizes: '3 × 1.5 قدم، 6 × 3 قدم، 8 × 4 قدم، 12 × 6 قدم'
  },
];

// The 5 collections, each with its categories (from the AQWAGEL plan)
const COLLECTIONS = [
  { name: 'الاحتفالات والأعياد', slug: 'celebrations-holidays', categories: ['birthday-party', 'halloween'] },
  { name: 'الطبيعة والحياة البرية', slug: 'nature-wildlife', categories: ['safari-jungle', 'ocean', 'dinosaur', 'woodland', 'farm', 'birds', 'insects-garden', 'polar-arctic'] },
  { name: 'المركبات والاستكشاف', slug: 'vehicles-exploration', categories: ['space', 'construction-trucks', 'city-traffic', 'trains'] },
  { name: 'الخيال والمغامرة', slug: 'fantasy-adventure', categories: ['fairy-tale-unicorn', 'mermaids', 'pirates'] },
  { name: 'التعلم والمرح', slug: 'learning-fun', categories: ['community-helpers', 'world-map-landmarks', 'amusement-park'] }
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

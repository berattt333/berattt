export const brandLogo = '/wysteria-clear.png';
export const brandMark = '/mark.png';

export const siteConfig = {
  name: 'Wysteria Works',
  tagline: 'Waffle keyfi, iyi kahveyle tamamlanır.',
  address: 'Çark Caddesi No. 54, Adapazarı, Sakarya',
  addressShort: 'Çark Caddesi, Adapazarı, Sakarya',
  phone: '+90 554 054 54',
  phoneDisplay: '+90 554 054 54',
  email: 'merhaba@wysteriaworks.com',
  instagram: '@wysteriaworks',
  instagramUrl: 'https://www.instagram.com/wysteriaworks',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Çark+Caddesi+No.+54+Adapazarı+Sakarya',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Çark+Caddesi+No.+54+Adapazarı+Sakarya',
  mapEmbedUrl: 'https://www.google.com/maps?q=Çark+Caddesi+No.+54+Adapazarı+Sakarya&output=embed',
  hours: [
    { day: 'Pazartesi – Cuma', time: '08:00 – 22:00' },
    { day: 'Cumartesi', time: '09:00 – 23:00' },
    { day: 'Pazar', time: '09:00 – 21:00' },
  ],
  menuUrl: '/menu',
  qrUrl: '/menu',
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  featured?: boolean;
};

export const products: Product[] = [
  // --- Kahveler ---
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'Kahveler',
    description: 'Yoğun espresso ve ipeksi mikroköpük, kadifemsi bitiriş.',
    price: 95,
    image: 'https://images.pexels.com/photos/37095935/pexels-photo-37095935.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Flat white kahve',
    featured: true,
  },
  {
    id: 'v60',
    name: 'V60 Filtre Kahve',
    category: 'Kahveler',
    description: 'Tek köken Etiyopya, pour-over demleme; çiçeksi asidite.',
    price: 110,
    image: 'https://images.pexels.com/photos/19723762/pexels-photo-19723762.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'V60 pour-over kahve',
    featured: true,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Kahveler',
    description: 'Klasik İtalyan oranı; zengin espresso, yoğun köpük.',
    price: 80,
    image: 'https://images.pexels.com/photos/14689202/pexels-photo-14689202.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Cappuccino',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'Kahveler',
    description: 'Tek shot; yoğun, koyu, kısa ve kremalı.',
    price: 55,
    image: 'https://images.pexels.com/photos/1924955/pexels-photo-1924955.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Espresso çekimi',
  },
  {
    id: 'latte',
    name: 'Sütlü Latte',
    category: 'Kahveler',
    description: 'Espresso, buharla ısıtılmış süt, ince köpük katmanı.',
    price: 90,
    image: 'https://images.pexels.com/photos/4913342/pexels-photo-4913342.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Sütlü latte',
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'Kahveler',
    description: 'Espresso üzerine sıcak su; uzun, yumuşak içim.',
    price: 75,
    image: 'https://images.pexels.com/photos/19873677/pexels-photo-19873677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Americano kahve',
  },

  // --- Soğuk İçecekler ---
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    category: 'Soğuk İçecekler',
    description: '12 saat soğuk demleme; pürüzsüz, az asitli.',
    price: 100,
    image: 'https://images.pexels.com/photos/39218055/pexels-photo-39218055.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Cold brew kahve',
  },
  {
    id: 'iced-latte',
    name: 'Buzlu Latte',
    category: 'Soğuk İçecekler',
    description: 'Espresso, soğuk süt ve buz; hafif ve ferahlatıcı.',
    price: 90,
    image: 'https://images.pexels.com/photos/13735958/pexels-photo-13735958.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Buzlu latte',
  },
  {
    id: 'iced-caramel',
    name: 'Karamelli Buzlu Kahve',
    category: 'Soğuk İçecekler',
    description: 'Espresso, karamel şerbeti, süt ve buz.',
    price: 115,
    image: 'https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Karamelli buzlu kahve',
  },
  {
    id: 'iced-mocha',
    name: 'Buzlu Mocha',
    category: 'Soğuk İçecekler',
    description: 'Espresso, çikolata sosu, soğuk süt ve buz.',
    price: 110,
    image: 'https://images.pexels.com/photos/36572435/pexels-photo-36572435.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Buzlu mocha',
  },

  // --- Sıcak İçecekler ---
  {
    id: 'turkish-tea',
    name: 'Türk Çayı',
    category: 'Sıcak İçecekler',
    description: 'Geleneksel ince belli bardakta, taze demlenmiş Rize çayı.',
    price: 35,
    image: 'https://images.pexels.com/photos/15445468/pexels-photo-15445468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Türk çayı ince belli bardakta',
  },
  {
    id: 'salep',
    name: 'Salep',
    category: 'Sıcak İçecekler',
    description: 'Geleneksel salep, üzeri tarçın tozu; sıcak ve kremsi.',
    price: 65,
    image: 'https://images.pexels.com/photos/31845609/pexels-photo-31845609.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Salep içeceği',
    featured: true,
  },
  {
    id: 'hot-chocolate',
    name: 'Sıcak Çikolata',
    category: 'Sıcak İçecekler',
    description: 'Eriyen bitter çikolata, süt ve tarçın; kalın ve kadifemsi.',
    price: 80,
    image: 'https://images.pexels.com/photos/9228428/pexels-photo-9228428.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Sıcak çikolata',
  },

  // --- Waffle'lar ---
  {
    id: 'waffle',
    name: 'Çilekli Meyveli Waffle',
    category: 'Waffle\'lar',
    description: 'Çıtır waffle, muz, çilek, vanilyalı dondurma ve akçaağaç şurubu.',
    price: 145,
    image: 'https://images.pexels.com/photos/17558647/pexels-photo-17558647.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Muz, çilek ve dondurmalı waffle',
    featured: true,
  },
  {
    id: 'chocolate-waffle',
    name: 'Bitter Çikolatalı Waffle',
    category: 'Waffle\'lar',
    description: 'Bitter çikolata sosu, muz, çilek ve kavrulmuş fındıkla servis edilir.',
    price: 155,
    image: 'https://images.pexels.com/photos/12148861/pexels-photo-12148861.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Çikolata soslu waffle ve dondurma',
    featured: true,
  },
  {
    id: 'classic-waffle',
    name: 'Klasik Brüksel Waffle',
    category: 'Waffle\'lar',
    description: 'Ilık waffle, pudra şekeri ve seçtiğiniz meyve sosuyla sade bir klasik.',
    price: 125,
    image: 'https://images.pexels.com/photos/1131810/pexels-photo-1131810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Pudra şekerli klasik waffle',
  },

  // --- Tatlılar ---
  {
    id: 'chocolate-cake',
    name: 'Bitter Çikolatalı Kek',
    category: 'Tatlılar',
    description: 'Tek köken ganaj, nemli kek katları.',
    price: 110,
    image: 'https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Bitter çikolatalı kek',
  },
  {
    id: 'lemon-cheesecake',
    name: 'Limonlu Cheesecake',
    category: 'Tatlılar',
    description: 'Taze limon kabuğu, hafif krema, tuzlu bisküvi tabanı.',
    price: 105,
    image: 'https://images.pexels.com/photos/30133543/pexels-photo-30133543.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Limonlu cheesecake',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    category: 'Tatlılar',
    description: 'İtalyan mascarpone, kahve emdirilmiş kek katları.',
    price: 125,
    image: 'https://images.pexels.com/photos/26838690/pexels-photo-26838690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Tiramisu',
  },
  {
    id: 'pistachio-dessert',
    name: 'Fıstıklı Tatlı',
    category: 'Tatlılar',
    description: 'Kremamsı fıstık ganaj, karamelize çıra fıstığı.',
    price: 130,
    image: 'https://images.pexels.com/photos/31145291/pexels-photo-31145291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Fıstıklı tatlı',
  },
];

export const categories = ['Kahveler', 'Waffle\'lar', 'Soğuk İçecekler', 'Sıcak İçecekler', 'Tatlılar'];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/2079452/pexels-photo-2079452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Ahşap raflar ve sıcak ışıkla döşenmiş vintage kafe iç mekanı',
    label: 'Mekan',
  },
  {
    url: 'https://images.pexels.com/photos/34902483/pexels-photo-34902483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Baristanın fincana latte sanatı dökmesi',
    label: 'Barista',
  },
  {
    url: 'https://images.pexels.com/photos/35518412/pexels-photo-35518412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vintage detaylarla dekore edilmiş sıcak ve rustik kafe',
    label: 'Atmosfer',
  },
  {
    url: 'https://images.pexels.com/photos/16192282/pexels-photo-16192282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sepette servis edilen taze kruvasanlar',
    label: 'Fırından',
  },
  {
    url: 'https://images.pexels.com/photos/18405036/pexels-photo-18405036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pencereleri ve masaları olan aydınlık, davetkâr kafe oturma alanı',
    label: 'Oturma',
  },
  {
    url: 'https://images.pexels.com/photos/38591677/pexels-photo-38591677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Baristanın sütü kahveye dökerek latte sanatı hazırlaması',
    label: 'El sanatı',
  },
];

export const storyImages = {
  primary: 'https://images.pexels.com/photos/20825644/pexels-photo-20825644.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  secondary: 'https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  barista: 'https://images.pexels.com/photos/4927237/pexels-photo-4927237.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  interior: 'https://images.pexels.com/photos/34746696/pexels-photo-34746696.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  pour: 'https://images.pexels.com/photos/16839946/pexels-photo-16839946.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  detail: 'https://images.pexels.com/photos/13428169/pexels-photo-13428169.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
};

export const heroImage = 'https://images.pexels.com/photos/8165374/pexels-photo-8165374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const aboutImages = {
  hero: 'https://images.pexels.com/photos/39784929/pexels-photo-39784929.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  story1: 'https://images.pexels.com/photos/18280357/pexels-photo-18280357.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  story2: 'https://images.pexels.com/photos/16541078/pexels-photo-16541078.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
};

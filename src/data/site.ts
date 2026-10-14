export const siteConfig = {
  name: 'Wysteria Works',
  tagline: 'Küçük bir mola, unutulmaz bir tat.',
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

// Helper for image URLs at smaller sizes (menu thumbnails)
const img = (id: string, w = 400, h = 400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=1`;

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

  // --- Fırından ---
  {
    id: 'pistachio-croissant',
    name: 'Fıstıklı Kruvasan',
    category: 'Fırından',
    description: 'Kat kat tereyağı hamur, Antep fıstığı kreması.',
    price: 85,
    image: 'https://images.pexels.com/photos/39817069/pexels-photo-39817069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Fıstıklı kruvasan',
    featured: true,
  },
  {
    id: 'pain-au-chocolat',
    name: 'Çikolatalı Kruvasan',
    category: 'Fırından',
    description: 'Eriyen bitter çikolata parçacıkları iç dolumu.',
    price: 75,
    image: 'https://images.pexels.com/photos/30926134/pexels-photo-30926134.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Çikolatalı kruvasan',
  },
  {
    id: 'sourdough',
    name: 'Ekşi Maya Ekmek',
    category: 'Fırından',
    description: '24 saat fermente, çıtır kabuk, nemli iç.',
    price: 70,
    image: 'https://images.pexels.com/photos/30350359/pexels-photo-30350359.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Ekşi maya ekmek',
  },
  {
    id: 'cinnamon-roll',
    name: 'Tarçınlı Çörek',
    category: 'Fırından',
    description: 'Tereyağı, tarçın ve şeker; üzerine kremalı glazür.',
    price: 80,
    image: 'https://images.pexels.com/photos/27098506/pexels-photo-27098506.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'Tarçınlı çörek',
  },

  // --- Tatlılar ---
  {
    id: 'san-sebastian',
    name: 'San Sebastian Cheesecake',
    category: 'Tatlılar',
    description: 'Karamelize yüzey, kremsi merkez; fırından yeni çıkmış.',
    price: 120,
    image: 'https://images.pexels.com/photos/38495630/pexels-photo-38495630.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    alt: 'San Sebastian cheesecake',
    featured: true,
  },
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

export const categories = ['Kahveler', 'Soğuk İçecekler', 'Fırından', 'Tatlılar'];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/18832554/pexels-photo-18832554.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
    alt: 'Vintage porselenlerle döşenmiş kafe iç mekanı, sıcak ışık',
    label: 'Mekan',
  },
  {
    url: 'https://images.pexels.com/photos/1924955/pexels-photo-1924955.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
    alt: 'Barista fincana latte sanatı dökerken',
    label: 'Barista',
  },
  {
    url: 'https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
    alt: 'Kitaplı, ahşap duvarlı, vintage dekorlu sıcak kahve dükkanı',
    label: 'Atmosfer',
  },
  {
    url: 'https://images.pexels.com/photos/38935410/pexels-photo-38935410.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
    alt: 'Yeni fırınlanmış altın renkli kruvasanların katmanları',
    label: 'Fırından',
  },
  {
    url: 'https://images.pexels.com/photos/20285606/pexels-photo-20285606.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
    alt: 'Sıcak ışıkla döşenmiş davetkâr kafe oturma alanı',
    label: 'Oturma',
  },
  {
    url: 'https://images.pexels.com/photos/3952059/pexels-photo-3952059.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
    alt: 'Kafede barista elinde taze latte sanatı hazırlarken',
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

export const heroImage = 'https://images.pexels.com/photos/37095935/pexels-photo-37095935.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1440&dpr=1';

export const aboutImages = {
  hero: 'https://images.pexels.com/photos/39784929/pexels-photo-39784929.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  story1: 'https://images.pexels.com/photos/18280357/pexels-photo-18280357.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
  story2: 'https://images.pexels.com/photos/16541078/pexels-photo-16541078.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1',
};

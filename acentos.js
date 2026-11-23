// Lectura editorial de los textos de marca. Una nota sin valoración conserva
// su lugar en la pirámide. 2 = matiz, 3 = perceptible, 4 = destacada.
// Una posición en la pirámide o en una lista de ingredientes no da un nivel.
const acentosElite = {
  '9pm': {
    notas: { Bergamota: 3, Canela: 3 },
    fuente: 'https://afnan.com/products/9-pm'
  },
  '9am-dive': {
    notas: { Limón: 3 },
    fuente: 'https://afnan.com/products/9-am-dive'
  },
  khamrah: {
    notas: { Dátiles: 4, Praliné: 3, Canela: 3, Vainilla: 4, 'Haba tonka tostada': 4 },
    fuente: 'https://lattafa.com/lattafa-khamrah-vs-khamrah-qahwa/'
  },
  'khamrah-qahwa': {
    notas: { 'Café arábica': 4, Cardamomo: 3, Jengibre: 3, Canela: 3, Praliné: 3, Vainilla: 3 },
    fuente: 'https://lattafa.com/lattafa-khamrah-vs-khamrah-qahwa/'
  },
  'khamrah-dukhan': {
    notas: { Tabaco: 4, Ámbar: 4, 'Pimienta de Jamaica': 4 },
    fuente: 'https://www.lattafa-usa.com/products/khamrah-dukhan'
  },
  asad: {
    notas: { 'Pimienta negra': 3, Piña: 3, Tabaco: 3, Café: 3, Iris: 3, Pachulí: 3, Ámbar: 4 },
    fuente: 'https://www.lattafaindia.com/products/asad-black'
  },
  'asad-bourbon': {
    notas: { 'Pimienta rosa': 3, Lavanda: 3, Cacao: 3, Davana: 3, 'Vainilla Bourbon': 3, Ámbar: 3, Vetiver: 3 },
    fuente: 'https://www.lattafa-usa.com/products/asad-bourbon-3-pcs-giftset'
  },
  'asad-elixir': {
    notas: { 'Pimienta rosa': 3, Azafrán: 3, Toronja: 3, Tabaco: 4, Cedro: 4 },
    fuente: 'https://www.lattafaindia.com/products/asad-elixir'
  },
  yara: {
    notas: { Mandarina: 4, Orquídea: 4, Vainilla: 4, Heliotropo: 3, 'Acorde gourmand': 2 },
    fuente: 'https://www.lattafaindia.com/products/yara'
  },
  'yara-candy': {
    notas: { 'Mandarina verde': 3, 'Grosella negra': 3, 'Caramelo efervescente de fresa': 4, Gardenia: 3, 'Jarabe de vainilla': 4 },
    fuente: 'https://www.lattafa-usa.com/products/yara-candy'
  },
  'yara-moi': {
    notas: { Pera: 3, Nardo: 4, Jazmín: 4, Almendra: 2 },
    fuente: 'https://www.lattafaindia.com/products/yara-moi'
  },
  'yara-tous': {
    notas: { Mango: 3, Coco: 3, Maracuyá: 3, Jazmín: 2, Heliotropo: 2, 'Flor de azahar': 2 },
    fuente: 'https://www.lattafaindia.com/products/yara-tous'
  },
  'oud-for-glory': {
    notas: { Oud: 4, Almizcle: 3, Pachulí: 3 },
    fuente: 'https://lattafa.com/finding-your-signature-scent-tips-for-choosing-the-perfect-perfume/'
  },
  'honor-glory': {
    notas: { 'Piña caramelizada': 4, Cúrcuma: 3, Canela: 3, 'Pimienta negra': 3, Benjuí: 3 },
    fuente: 'https://www.lattafaindia.com/products/badee-al-oud-honor'
  },
  'bade-sublime': {
    notas: { Manzana: 3, Lichi: 3, Rosa: 3, Ciruela: 2, Jazmín: 2, Vainilla: 3, Musgo: 3, Pachulí: 3 },
    fuente: 'https://www.lattafa-usa.com/products/badee-al-oud-sublime-gift-set'
  },
  mandarinsky: {
    notas: { Mandarina: 3, 'Haba tonka': 3, Ambroxan: 3 },
    fuente: 'https://armafperfume.com/products/armaf-odyssey-mandarin-sky-for-men-100ml'
  },
  'mandarinsky-elixir': {
    notas: { Mandarina: 3, Naranja: 3, Caramelo: 3, Incienso: 3 },
    fuente: 'https://www.armaf.ae/products/odyssey_mandarin-sky-elixir-limited-edition'
  },
  'odyssey-limoni': {
    notas: { Limón: 4, 'Naranja dulce': 4, Bergamota: 4, Mandarina: 4, Jengibre: 3, 'Flor de azahar': 3, 'Notas marinas': 3 },
    fuente: 'https://www.armaf.ae/products/odyssey-limoni-fresh-edition'
  },
  'odyssey-homme-white': {
    notas: { Salvia: 3, Piña: 3, 'Acordes acuáticos': 2, Cedro: 4, 'Madera ambarada': 4, Vainilla: 2 },
    fuente: 'https://www.armaf.ae/products/odyssey-homme-white-edition'
  },
  'hawas-ice': {
    notas: { Manzana: 4, 'Bergamota siciliana': 3, 'Limón italiano': 3, 'Anís estrellado': 2, 'Acorde marino': 4, Ciruela: 2, 'Flor de azahar': 2, Cardamomo: 2, Musgo: 4, 'Madera de deriva': 4, Ámbar: 4, Almizcle: 4 },
    fuente: 'https://rasasionline.com/collections/long-lasting-perfumes/products/hawas-ice'
  },
  'amber-oud-gold': {
    notas: { Melón: 4, Piña: 4, Vainilla: 3, Almizcle: 3 },
    fuente: 'https://shop.alharamainperfumes.com/uae/blog/post/amber-oud-collection-guide'
  },
  'most-wanted': {
    notas: { Cardamomo: 4, 'Caramelo toffee': 3, 'Madera ambarada': 4 },
    fuente: 'https://www.azzaro.com/fr/parfums/azzaro-the-most-wanted'
  },
  'stronger-intensely': {
    notas: { 'Pimienta rosa': 4, Lavanda: 3, Vainilla: 3 },
    fuente: 'https://www.giorgioarmanibeauty-usa.com/fragrances/mens-cologne/stronger-with-you/stronger-with-you-intensely-eau-de-parfum-holiday-gift-set/3614275040905.html'
  },
  'acqua-di-gio': {
    notas: { 'Notas marinas': 4, Bergamota: 4, Cedro: 3, Nerolí: 3, Romero: 3, Pachulí: 3 },
    fuente: 'https://www.giorgioarmanibeauty-usa.com/fragrances/mens-cologne/acqua-di-gio/acqua-di-gio-eau-de-toilette/A005.html'
  },
  'le-male': {
    notas: { Lavanda: 4, Menta: 4, Vainilla: 3 },
    fuente: 'https://www.jeanpaulgaultier.com/ww/en/p/range-le-male/le-male-eau-de-toilette-000000000065120120'
  },
  'le-beau': {
    notas: { Bergamota: 3, 'Madera de cocotero': 2, 'Haba tonka': 3 },
    fuente: 'https://www.jeanpaulgaultier.com/us/en_US/c/le-beau--le-beau'
  },
  'scandal-le-parfum': {
    notas: { 'Jazmín sambac': 4, 'Caramelo salado': 4, 'Vainilla negra': 4 },
    fuente: 'https://www.jeanpaulgaultier.com/ww/en/p/range-scandal/scandal-le-parfum-eau-de-parfum-intense-000000000065168247'
  },
  'born-in-roma': {
    notas: { 'Vainilla Bourbon': 4, Lavandín: 3, 'Vetiver ahumado': 3 },
    fuente: 'https://www.valentino-beauty.us/fragrances/fragrances-men/born-in-roma-uomo-intense/born-in-roma-uomo-eau-de-parfum-intense-3614273790833.html'
  },
  'le-male-elixir': {
    notas: { Lavanda: 4, 'Haba tonka': 4, Benjuí: 4, Menta: 3, Miel: 2, Tabaco: 2 },
    fuente: 'https://www.jeanpaulgaultier.com/ww/en/p/range-le-male-elixir/le-male-elixir-parfum-000000000065188980'
  },
  mayar: {
    notas: { Frambuesa: 4, Lichi: 4, Rosa: 2, Magnolia: 2, Ámbar: 3, Pachulí: 3 },
    fuente: 'https://www.lattafa-usa.com/products/mayar-3pcs-gift-set'
  }
};

const CONFIG_FIREBASE={apiKey:"AIzaSyBD3RbrQUsYtFABqIs_5Pi97DpW034ukYY",authDomain:"elite-114bc.firebaseapp.com",projectId:"elite-114bc",storageBucket:"elite-114bc.firebasestorage.app",messagingSenderId:"544878346059",appId:"1:544878346059:web:42f399a5174087e5f272ce"};
const productosBase=[
  {
    "img": "img/9pm.png",
    "name": "9pm",
    "brand": "Afnan",
    "fam": "Oriental dulce",
    "gen": "Hombre",
    "price": 139,
    "notes": [
      "Manzana",
      "Canela",
      "Vainilla"
    ],
    "ver": "perfume.html?i=0"
  },
  {
    "img": "img/9am-dive.png",
    "name": "9AM Dive",
    "brand": "Afnan",
    "fam": "Acuático fresco",
    "gen": "Hombre",
    "price": 149,
    "notes": [
      "Marino",
      "Cítricos",
      "Ámbar"
    ],
    "ver": "perfume.html?i=1"
  },
  {
    "img": "img/khamrah.png",
    "name": "Khamrah",
    "brand": "Lattafa",
    "fam": "Oriental gourmand",
    "gen": "Unisex",
    "price": 139,
    "notes": [
      "Canela",
      "Dátiles",
      "Vainilla"
    ],
    "ver": "perfume.html?i=2"
  },
  {
    "img": "img/khamrah-qahwa.png",
    "name": "Khamrah Qahwa",
    "brand": "Lattafa",
    "fam": "Oriental café",
    "gen": "Unisex",
    "price": 139,
    "notes": [
      "Café",
      "Cardamomo",
      "Caramelo"
    ],
    "ver": "perfume.html?i=3"
  },
  {
    "img": "img/khamrah-dukhan.png",
    "name": "Khamrah Dukhan",
    "brand": "Lattafa",
    "fam": "Oriental ahumado",
    "gen": "Unisex",
    "price": 139,
    "notes": [
      "Incienso",
      "Canela",
      "Café"
    ],
    "ver": "perfume.html?i=4"
  },
  {
    "img": "img/asad.png",
    "name": "Asad",
    "brand": "Lattafa",
    "fam": "Amaderado afrutado",
    "gen": "Hombre",
    "price": 125,
    "notes": [
      "Piña",
      "Bergamota",
      "Ámbar gris"
    ],
    "ver": "perfume.html?i=5"
  },
  {
    "img": "img/asad-bourbon.png",
    "name": "Asad Bourbon",
    "brand": "Lattafa",
    "fam": "Amaderado especiado",
    "gen": "Hombre",
    "price": 149,
    "notes": [
      "Bourbon",
      "Canela",
      "Vainilla"
    ],
    "ver": "perfume.html?i=6"
  },
  {
    "img": "img/asad-elixir.png",
    "name": "Asad Elixir",
    "brand": "Lattafa",
    "fam": "Amaderado dulce",
    "gen": "Hombre",
    "price": 149,
    "notes": [
      "Piña",
      "Ron",
      "Vainilla"
    ],
    "ver": "perfume.html?i=7"
  },
  {
    "img": "img/yara.png",
    "name": "Yara",
    "brand": "Lattafa",
    "fam": "Floral dulce",
    "gen": "Mujer",
    "price": 129,
    "notes": [
      "Orquídea",
      "Heliotropo",
      "Sándalo"
    ],
    "ver": "perfume.html?i=8"
  },
  {
    "img": "img/yara-candy.png",
    "name": "Yara Candy",
    "brand": "Lattafa",
    "fam": "Gourmand dulce",
    "gen": "Mujer",
    "price": 129,
    "notes": [
      "Frutas",
      "Caramelo",
      "Vainilla"
    ],
    "ver": "perfume.html?i=9"
  },
  {
    "img": "img/yara-moi.png",
    "name": "Yara Moi",
    "brand": "Lattafa",
    "fam": "Floral frutal",
    "gen": "Mujer",
    "price": 129,
    "notes": [
      "Frambuesa",
      "Jazmín",
      "Vainilla"
    ],
    "ver": "perfume.html?i=10"
  },
  {
    "img": "img/yara-tous.png",
    "name": "Yara Tous",
    "brand": "Lattafa",
    "fam": "Floral frutal",
    "gen": "Mujer",
    "price": 129,
    "notes": [
      "Frutas",
      "Flores",
      "Almizcle"
    ],
    "ver": "perfume.html?i=11"
  },
  {
    "img": "img/oud-for-glory.png",
    "name": "Oud for Glory",
    "brand": "Lattafa",
    "fam": "Amaderado oud",
    "gen": "Unisex",
    "price": 135,
    "notes": [
      "Oud",
      "Azafrán",
      "Pachulí"
    ],
    "ver": "perfume.html?i=12"
  },
  {
    "img": "img/honor-glory.png",
    "name": "Honor & Glory",
    "brand": "Lattafa",
    "fam": "Amaderado ambarado",
    "gen": "Unisex",
    "price": 135,
    "notes": [
      "Oud",
      "Ámbar",
      "Especias"
    ],
    "ver": "perfume.html?i=13"
  },
  {
    "img": "img/bade-sublime.png",
    "name": "Bade'e Al Oud Sublime",
    "brand": "Lattafa",
    "fam": "Oriental oud",
    "gen": "Unisex",
    "price": 135,
    "notes": [
      "Oud",
      "Rosa",
      "Azafrán"
    ],
    "ver": "perfume.html?i=14"
  },
  {
    "img": "img/mandarinsky.png",
    "name": "Mandarin Sky",
    "brand": "Armaf",
    "fam": "Cítrico ámbar",
    "gen": "Hombre",
    "price": 135,
    "notes": [
      "Mandarina",
      "Especias",
      "Ámbar"
    ],
    "ver": "perfume.html?i=15"
  },
  {
    "img": "img/mandarinsky-elixir.png",
    "name": "Mandarin Sky Elixir",
    "brand": "Armaf",
    "fam": "Cítrico ámbar intenso",
    "gen": "Hombre",
    "price": 165,
    "notes": [
      "Mandarina",
      "Canela",
      "Ámbar"
    ],
    "ver": "perfume.html?i=16"
  },
  {
    "img": "img/odyssey-limoni.png",
    "name": "Odyssey Limoni",
    "brand": "Armaf",
    "fam": "Cítrico aromático",
    "gen": "Hombre",
    "price": 139,
    "notes": [
      "Limón",
      "Albahaca",
      "Almizcle"
    ],
    "ver": "perfume.html?i=17"
  },
  {
    "img": "img/odyssey-homme-white.png",
    "name": "Odyssey Homme White",
    "brand": "Armaf",
    "fam": "Amaderado fresco",
    "gen": "Hombre",
    "price": 135,
    "notes": [
      "Bergamota",
      "Lavanda",
      "Cedro"
    ],
    "ver": "perfume.html?i=18"
  },
  {
    "img": "img/hawas-ice.png",
    "name": "Hawas Ice",
    "brand": "Rasasi",
    "fam": "Acuático fresco",
    "gen": "Hombre",
    "price": 159,
    "notes": [
      "Menta",
      "Cítricos",
      "Ámbar gris"
    ],
    "ver": "perfume.html?i=19"
  },
  {
    "img": "img/hawas-malibu.png",
    "name": "Hawas Malibu",
    "brand": "Rasasi",
    "fam": "Acuático afrutado",
    "gen": "Hombre",
    "price": 159,
    "notes": [
      "Piña",
      "Coco",
      "Ámbar"
    ],
    "ver": "perfume.html?i=20"
  },
  {
    "img": "img/amber-oud-gold.png",
    "name": "Amber Oud Gold Edition",
    "brand": "Al Haramain",
    "fam": "Ambarado afrutado",
    "gen": "Unisex",
    "price": 239,
    "notes": [
      "Frutas",
      "Ámbar",
      "Almizcle"
    ],
    "ver": "perfume.html?i=21"
  },
  {
    "img": "img/most-wanted.png",
    "name": "The Most Wanted",
    "brand": "Azzaro",
    "fam": "Amaderado especiado",
    "gen": "Hombre",
    "price": 299,
    "notes": [
      "Cardamomo",
      "Bourbon",
      "Madera"
    ],
    "ver": "perfume.html?i=22"
  },
  {
    "img": "img/stronger-intensely.png",
    "name": "Stronger With You Intensely",
    "brand": "Armani",
    "fam": "Oriental vainilla",
    "gen": "Hombre",
    "price": 379,
    "notes": [
      "Cardamomo",
      "Vainilla",
      "Ámbar"
    ],
    "ver": "perfume.html?i=23",
    "destacado": true
  },
  {
    "img": "img/acqua-di-gio.png",
    "name": "Acqua di Gio",
    "brand": "Giorgio Armani",
    "fam": "Acuático cítrico",
    "gen": "Hombre",
    "price": 449,
    "notes": [
      "Marino",
      "Bergamota",
      "Pachulí"
    ],
    "ver": "perfume.html?i=24"
  },
  {
    "img": "img/le-male.png",
    "name": "Le Male",
    "brand": "Jean Paul Gaultier",
    "fam": "Aromático fougère",
    "gen": "Hombre",
    "price": 479,
    "notes": [
      "Lavanda",
      "Menta",
      "Vainilla"
    ],
    "ver": "perfume.html?i=25"
  },
  {
    "img": "img/le-beau.png",
    "name": "Le Beau",
    "brand": "Jean Paul Gaultier",
    "fam": "Amaderado coco",
    "gen": "Hombre",
    "price": 479,
    "notes": [
      "Coco",
      "Bergamota",
      "Haba tonka"
    ],
    "ver": "perfume.html?i=26"
  },
  {
    "img": "img/scandal-le-parfum.png",
    "name": "Scandal Le Parfum",
    "brand": "Jean Paul Gaultier",
    "fam": "Oriental gourmand",
    "gen": "Mujer",
    "price": 399,
    "notes": [
      "Miel",
      "Caramelo",
      "Haba tonka"
    ],
    "ver": "perfume.html?i=27"
  },
  {
    "img": "img/born-in-roma.png",
    "name": "Born in Roma Intense",
    "brand": "Valentino",
    "fam": "Amaderado aromático",
    "gen": "Hombre",
    "price": 479,
    "notes": [
      "Salvia",
      "Vetiver",
      "Vainilla"
    ],
    "ver": "perfume.html?i=28"
  }
];

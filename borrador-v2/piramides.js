// Pirámides olfativas de las presentaciones que aparecen en la colección.
const piramidesElite = {
  "9pm": {
    salida: ["Bergamota", "Lavandín", "Canela", "Manzana"],
    corazon: ["Lirio del valle", "Flor de azahar"],
    fondo: ["Pachulí", "Ámbar", "Vainilla", "Haba tonka"],
    fuente: "https://afnan.com/products/9-pm"
  },
  "9am-dive": {
    salida: ["Limón", "Pimienta rosa", "Menta", "Grosella negra"],
    corazon: ["Manzana", "Incienso", "Cedro"],
    fondo: ["Pachulí", "Jazmín", "Jengibre", "Sándalo"],
    fuente: "https://afnan.com/products/9-am-dive"
  },
  "khamrah": {
    salida: ["Bergamota", "Canela", "Nuez moscada"],
    corazon: ["Dátiles", "Lirio del valle", "Praliné", "Nardo"],
    fondo: ["Haba tonka tostada", "Benjuí de Laos", "Mirra", "Akigalawood", "Vainilla", "Madera ambarada"],
    fuente: "https://lattafa.com/product/khamrah/"
  },
  "khamrah-qahwa": {
    salida: ["Jengibre", "Canela", "Cardamomo"],
    corazon: ["Praliné", "Frutas confitadas", "Flores blancas"],
    fondo: ["Café arábica", "Haba tonka", "Almizcle", "Benjuí", "Vainilla"],
    fuente: "https://lattafa.com/product/khamrah-qahwa/"
  },
  "khamrah-dukhan": {
    salida: ["Mandarina", "Pimienta de Jamaica", "Especias ahumadas"],
    corazon: ["Jara", "Flor de azahar", "Incienso", "Pachulí"],
    fondo: ["Tabaco", "Ámbar", "Haba tonka", "Benjuí", "Praliné"],
    fuente: "https://lattafa.com/product/khamrah-dukhan/"
  },
  "asad": {
    salida: ["Pimienta negra", "Piña", "Tabaco"],
    corazon: ["Café", "Iris", "Pachulí"],
    fondo: ["Ámbar", "Vainilla", "Maderas secas", "Benjuí", "Ládano"],
    fuente: "https://lattafa.com/product/asad/"
  },
  "asad-bourbon": {
    salida: ["Pimienta rosa", "Lavanda", "Ciruela mirabel"],
    corazon: ["Cacao", "Davana", "Nuez moscada"],
    fondo: ["Vetiver", "Vainilla Bourbon", "Ámbar"],
    fuente: "https://lattafa.com/product/asad-bourbon/"
  },
  "asad-elixir": {
    salida: ["Pimienta rosa", "Azafrán", "Toronja"],
    corazon: ["Tabaco", "Cedro", "Vainilla"],
    fondo: ["Pachulí", "Olíbano", "Cashmeran", "Ámbar seco"],
    fuente: "https://lattafa.com/product/asad-elixir/"
  },
  "yara": {
    salida: ["Mandarina", "Heliotropo", "Orquídea"],
    corazon: ["Notas tropicales", "Acorde gourmand"],
    fondo: ["Vainilla", "Sándalo", "Almizcle"],
    fuente: "https://lattafa.com/product/yara/"
  },
  "yara-candy": {
    salida: ["Mandarina verde", "Grosella negra"],
    corazon: ["Caramelo efervescente de fresa", "Gardenia"],
    fondo: ["Sándalo", "Jarabe de vainilla", "Almizcle", "Ámbar"],
    fuente: "https://lattafa.com/product/yara-candy/"
  },
  "yara-moi": {
    salida: ["Pera", "Pimienta rosa", "Grosella negra"],
    corazon: ["Nardo", "Jazmín", "Almendra"],
    fondo: ["Vainilla", "Cashmeran", "Pachulí"],
    fuente: "https://lattafa.com/product/yara-moii/"
  },
  "yara-tous": {
    salida: ["Coco", "Mango", "Maracuyá"],
    corazon: ["Jazmín", "Heliotropo", "Flor de azahar"],
    fondo: ["Cashmeran", "Vainilla", "Almizcle"],
    fuente: "https://lattafa.com/product/yara-tous/"
  },
  "oud-for-glory": {
    salida: ["Azafrán", "Nuez moscada", "Lavanda"],
    corazon: ["Oud", "Pachulí"],
    fondo: ["Oud", "Pachulí", "Almizcle"],
    fuente: "https://www.lattafa-usa.com/products/badee-al-oud-glory"
  },
  "honor-glory": {
    salida: ["Piña caramelizada"],
    corazon: ["Cúrcuma", "Canela", "Pimienta negra", "Benjuí"],
    fondo: ["Vainilla", "Cashmeran", "Sándalo", "Musgo"],
    fuente: "https://lattafa.com/product/badee-al-oud-honor-and-glory/"
  },
  "bade-sublime": {
    salida: ["Manzana", "Lichi", "Rosa"],
    corazon: ["Ciruela", "Jazmín"],
    fondo: ["Vainilla", "Musgo", "Pachulí"],
    fuente: "https://www.lattafa-usa.com/products/badee-al-oud-sublime"
  },
  "mandarinsky": {
    salida: ["Salvia", "Mandarina", "Naranja", "Azafrán"],
    corazon: ["Caramelo", "Haba tonka", "Tagetes"],
    fondo: ["Vetiver", "Cedro", "Ambroxan"],
    fuente: "https://armaf.com/products/odyssey-mega-for-men"
  },
  "mandarinsky-elixir": {
    salida: ["Mandarina", "Naranja", "Salvia esclarea", "Lavanda", "Cardamomo", "Pimienta negra"],
    corazon: ["Incienso", "Pachulí", "Caramelo", "Haba tonka"],
    fondo: ["Vetiver", "Vainilla"],
    fuente: "https://www.armaf.ae/products/odyssey-mandarin-sky-elixir-limited-edition"
  },
  "odyssey-limoni": {
    salida: ["Limón", "Naranja dulce", "Bergamota", "Mandarina"],
    corazon: ["Jengibre", "Flor de azahar", "Notas marinas"],
    fondo: ["Ámbar", "Almizcle", "Té azul"],
    fuente: "https://armaf.com/products/armaf-odyssey-limoni-fresh-edition"
  },
  "odyssey-homme-white": {
    salida: ["Menta", "Pimienta rosa", "Cardamomo"],
    corazon: ["Salvia", "Piña", "Acordes acuáticos"],
    fondo: ["Cedro", "Madera ambarada", "Vainilla"],
    fuente: "https://www.armaf.ae/products/odyssey-homme-white-edition"
  },
  "hawas-ice": {
    salida: ["Manzana", "Bergamota siciliana", "Limón italiano", "Anís estrellado"],
    corazon: ["Acorde marino", "Ciruela", "Flor de azahar", "Cardamomo"],
    fondo: ["Musgo", "Madera de deriva", "Ámbar", "Almizcle"],
    fuente: "https://rasasionline.com/collections/long-lasting-perfumes/products/hawas-ice"
  },
  "hawas-malibu": {
    salida: ["Piña", "Naranja", "Toronja"],
    corazon: ["Ámbar", "Iris", "Lavanda"],
    fondo: ["Haba tonka", "Almizcle", "Cashmeran", "Pachulí"],
    fuente: "https://store.rasasi.com.sa/en/bpzlndr/p533992836"
  },
  "amber-oud-gold": {
    salida: ["Bergamota", "Notas verdes"],
    corazon: ["Melón", "Piña", "Acorde gourmand", "Ámbar"],
    fondo: ["Notas amaderadas", "Vainilla", "Almizcle"],
    fuente: "https://us.alharamainperfumes.com/en/amber-oud-gold-edition-200ml.html"
  },
  "most-wanted": {
    salida: ["Cardamomo"],
    corazon: ["Caramelo toffee"],
    fondo: ["Madera ambarada"],
    fuente: "https://www.azzaro.com/en/fragrances/azzaro-the-most-wanted/eau-de-parfum-intense"
  },
  "stronger-intensely": {
    salida: ["Pimienta rosa", "Enebro", "Violeta"],
    corazon: ["Caramelo toffee", "Canela", "Lavanda", "Salvia"],
    fondo: ["Vainilla", "Ámbar", "Haba tonka", "Gamuza"],
    fuente: "https://www.fragrantica.com/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Intensely--52802.html"
  },
  "acqua-di-gio": {
    salida: ["Lima", "Limón", "Bergamota", "Jazmín", "Naranja", "Mandarina", "Nerolí"],
    corazon: ["Notas marinas", "Jazmín", "Calone", "Romero", "Durazno", "Fresia", "Jacinto", "Ciclamen", "Violeta", "Cilantro", "Rosa", "Nuez moscada", "Reseda"],
    fondo: ["Almizcle blanco", "Cedro", "Musgo de roble", "Pachulí", "Ámbar"],
    fuente: "https://www.fragrantica.com/perfume/Giorgio-Armani/Acqua-di-Gio-410.html"
  },
  "le-male": {
    salida: ["Lavanda", "Menta", "Cardamomo", "Bergamota", "Artemisa"],
    corazon: ["Canela", "Flor de azahar", "Alcaravea"],
    fondo: ["Vainilla", "Haba tonka", "Ámbar", "Sándalo", "Cedro"],
    fuente: "https://www.fragrantica.com/perfume/jean-paul-gaultier/le-male-430.html"
  },
  "le-beau": {
    salida: ["Bergamota"],
    corazon: ["Madera de cocotero"],
    fondo: ["Haba tonka"],
    fuente: "https://www.jeanpaulgaultier.com/ww/en/p/range-le-beau/le-beau-eau-de-toilette-000000000065132208"
  },
  "scandal-le-parfum": {
    salida: ["Jazmín sambac"],
    corazon: ["Caramelo salado"],
    fondo: ["Vainilla negra"],
    fuente: "https://www.jeanpaulgaultier.com/ww/en/p/range-scandal/scandal-le-parfum-eau-de-parfum-intense-000000000065168247"
  },
  "born-in-roma": {
    salida: ["Vainilla Bourbon", "Jengibre"],
    corazon: ["Lavandín", "Nuez moscada"],
    fondo: ["Vetiver ahumado"],
    fuente: "https://www.dillards.com/p/valentino-uomo-born-in-roma-intense-eau-de-parfum-mens-fragrance/516188751"
  },
  "le-male-elixir": {
    salida: ["Lavanda", "Menta"],
    corazon: ["Vainilla", "Benjuí"],
    fondo: ["Miel", "Haba tonka", "Tabaco"],
    fuente: "https://www.fragrantica.com/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html"
  },
  "mayar": {
    salida: ["Frambuesa", "Lichi", "Grosella negra"],
    corazon: ["Rosa", "Magnolia", "Benjuí"],
    fondo: ["Ámbar", "Pachulí"],
    fuente: "https://www.lattafa-usa.com/products/mayar-3pcs-gift-set"
  },
  "fakhar": {
    salida: ["Durazno", "Pera", "Naranja", "Manzana", "Grosella negra"],
    corazon: ["Flor de azahar", "Rosa", "Jazmín sambac"],
    fondo: ["Vainilla", "Pachulí", "Sándalo", "Almizcle"],
    fuente: "https://www.fragrantica.com/perfume/Lattafa-Perfumes/Fakhar-Lattafa-30864.html"
  }
};

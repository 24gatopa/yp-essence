const fotosColeccion = {
  "9am-dive": "img/9am-dive.webp?foto=8bfe9022b1",
  "9pm": "img/9pm.webp?foto=3e8915770e",
  "acqua-di-gio": "img/acqua-di-gio.webp?foto=dc3f80e671",
  "amber-oud-gold": "img/amber-oud-gold.webp?foto=f51ec29049",
  "asad-bourbon": "img/asad-bourbon.webp?foto=96de6b3169",
  "asad-elixir": "img/asad-elixir.webp?foto=3f7cd403d8",
  "asad": "img/asad.webp?foto=d3abe9acf4",
  "bade-sublime": "img/bade-sublime.webp?foto=ba284b8461",
  "born-in-roma": "img/born-in-roma.webp?foto=f77d07ad43",
  "fakhar": "img/fakhar.webp?foto=e558448636",
  "hawas-ice": "img/hawas-ice.webp?foto=daab3877bc",
  "hawas-malibu": "img/hawas-malibu.webp?foto=dd06a43393",
  "honor-glory": "img/honor-glory.webp?foto=6420b382d3",
  "khamrah-dukhan": "img/khamrah-dukhan.webp?foto=51fe8dbd04",
  "khamrah-qahwa": "img/khamrah-qahwa.webp?foto=5ced4ab45d",
  "khamrah": "img/khamrah.webp?foto=01b354a7be",
  "le-beau": "img/le-beau.webp?foto=fca3b3c57d",
  "le-male": "img/le-male.webp?foto=f8647a0ae3",
  "mandarinsky-elixir": "img/mandarinsky-elixir.webp?foto=cf1dddb935",
  "mandarinsky": "img/mandarinsky.webp?foto=9e0bbb27fa",
  "mayar": "img/mayar.webp?foto=6fc5ca9a85",
  "most-wanted": "img/most-wanted.webp?foto=2fb209a7fe",
  "odyssey-homme-white": "img/odyssey-homme-white.webp?foto=9fe8b3a951",
  "odyssey-limoni": "img/odyssey-limoni.webp?foto=f9f778b880",
  "oud-for-glory": "img/oud-for-glory.webp?foto=b48268bd32",
  "scandal-le-parfum": "img/scandal-le-parfum.webp?foto=e86371ba4d",
  "stronger-intensely": "img/stronger-intensely.webp?foto=3871189c3b",
  "yara-candy": "img/yara-candy.webp?foto=5017108116",
  "yara-moi": "img/yara-moi.webp?foto=b0d442d9e5",
  "yara-tous": "img/yara-tous.webp?foto=5631f7d139",
  "yara": "img/yara.webp?foto=3e2ad25978"
};
const nombresColeccion = {
  "9pm": "9pm",
  "9am dive": "9am-dive",
  "khamrah": "khamrah",
  "khamrah qahwa": "khamrah-qahwa",
  "khamrah dukhan": "khamrah-dukhan",
  "asad": "asad",
  "asad bourbon": "asad-bourbon",
  "asad elixir": "asad-elixir",
  "yara": "yara",
  "yara candy": "yara-candy",
  "yara moi": "yara-moi",
  "yara tous": "yara-tous",
  "oud for glory": "oud-for-glory",
  "honor & glory": "honor-glory",
  "bade'e al oud sublime": "bade-sublime",
  "mandarin sky": "mandarinsky",
  "mandarin sky elixir": "mandarinsky-elixir",
  "odyssey limoni": "odyssey-limoni",
  "odyssey homme white": "odyssey-homme-white",
  "hawas ice": "hawas-ice",
  "hawas malibu": "hawas-malibu",
  "amber oud gold edition": "amber-oud-gold",
  "the most wanted": "most-wanted",
  "stronger with you intensely": "stronger-intensely",
  "acqua di gio": "acqua-di-gio",
  "le male": "le-male",
  "le beau": "le-beau",
  "scandal le parfum": "scandal-le-parfum",
  "born in roma intense": "born-in-roma"
};
// La foto de la web manda cuando existe; la foto subida desde el panel se usa
// para perfumes que aún no tienen foto en la colección.
// La foto subida desde el panel manda; si no hay, se usa la foto de la web.
function fotoColeccion(producto) {
  const ruta = String(producto.img || '').split(/[?#]/)[0];
  if (/^data:/i.test(ruta)) return producto.img;
  const archivo = ruta.split('/').pop().replace(/\.(png|webp|jpe?g)$/i, '');
  const nombre = String(producto.name || '').trim().toLowerCase();
  return fotosColeccion[archivo] || fotosColeccion[nombresColeccion[nombre]] || producto.img;
}

const dimensionesFoto = {"img/9am-dive.webp?foto=8bfe9022b1": [223, 492], "img/9pm.webp?foto=3e8915770e": [223, 493], "img/acqua-di-gio.webp?foto=dc3f80e671": [420, 489], "img/amber-oud-gold.webp?foto=f51ec29049": [281, 488], "img/asad-bourbon.webp?foto=96de6b3169": [237, 486], "img/asad-elixir.webp?foto=3f7cd403d8": [232, 486], "img/asad.webp?foto=d3abe9acf4": [236, 490], "img/bade-sublime.webp?foto=ba284b8461": [298, 480], "img/born-in-roma.webp?foto=f77d07ad43": [303, 479], "img/fakhar.webp?foto=e558448636": [382, 319], "img/hawas-ice.webp?foto=daab3877bc": [296, 489], "img/hawas-malibu.webp?foto=dd06a43393": [292, 483], "img/honor-glory.webp?foto=6420b382d3": [282, 461], "img/khamrah-dukhan.webp?foto=51fe8dbd04": [339, 457], "img/khamrah-qahwa.webp?foto=5ced4ab45d": [340, 462], "img/khamrah.webp?foto=01b354a7be": [351, 452], "img/le-beau.webp?foto=fca3b3c57d": [229, 489], "img/le-male.webp?foto=f8647a0ae3": [216, 489], "img/mandarinsky-elixir.webp?foto=cf1dddb935": [331, 457], "img/mandarinsky.webp?foto=9e0bbb27fa": [334, 457], "img/mayar.webp?foto=6fc5ca9a85": [212, 475], "img/most-wanted.webp?foto=2fb209a7fe": [267, 471], "img/odyssey-homme-white.webp?foto=9fe8b3a951": [323, 463], "img/odyssey-limoni.webp?foto=f9f778b880": [336, 461], "img/oud-for-glory.webp?foto=b48268bd32": [271, 484], "img/scandal-le-parfum.webp?foto=e86371ba4d": [419, 489], "img/stronger-intensely.webp?foto=3871189c3b": [1261, 1247], "img/yara-candy.webp?foto=5017108116": [237, 481], "img/yara-moi.webp?foto=b0d442d9e5": [232, 481], "img/yara-tous.webp?foto=5631f7d139": [238, 480], "img/yara.webp?foto=3e2ad25978": [234, 482]};

function tamanoFoto(url) {
  const [width,height]=dimensionesFoto[url] || [375,500];
  return {width,height};
}
function productoTienda(p) {
  const brand=String(p.brand || '').trim();
  const jpg=brand.toLowerCase()==='jean paul gaultier';
  const elixir=jpg && p.name.trim().toLowerCase()==='elixir';
  const fam=String(p.fam || '').trim();
  return {...p, img:fotoColeccion(p), name:elixir?'Le Male Elixir':p.name,
    brand:jpg?'Jean Paul Gaultier':brand,
    fam:elixir && (!fam || fam.toLowerCase()===brand.toLowerCase())?'Amaderada ambarada aromática':fam,
    notes:Array.isArray(p.notes)?p.notes:[]};
}
function pedidoWhatsApp(p) {
  const interes=p.disponible===false?'quisiera consultar la reposición de ':'quisiera pedir ';
  const mensaje='Hola ÉLITÉ, '+interes+p.name+' de '+p.brand+' (S/ '+p.price+'). ¿Me confirman la presentación, disponibilidad y envío a mi distrito?';
  return 'https://wa.me/51938430692?text='+encodeURIComponent(mensaje);
}

function profile(p){
    var fam=(p.fam||'').toLowerCase(), key=((p.name||'')+' '+(p.fam||'')).toLowerCase();
    var noche = /oriental|dulce|gourmand|[áa]mbar|oud|amaderad|especiad|tabaco|cuero|caf[ée]|ahumado/.test(fam) ? 80
              : /c[íi]tric|acu[áa]tic|fresc|arom[áa]tic|marino/.test(fam) ? 25
              : /floral/.test(fam) ? 48 : 55;
    var est = noche>=60 ? {Invierno:92,'Otoño':82,Primavera:45,Verano:26}
            : noche<=35 ? {Invierno:28,'Otoño':48,Primavera:82,Verano:92}
            : {Invierno:55,'Otoño':62,Primavera:78,Verano:60};
    var arabic=/lattafa|afnan|armaf|rasasi|haramain/.test((p.brand||'').toLowerCase());
    var strong=/intens|elixir|extrait|parfum|oud|amber|[áa]mbar|khamrah|asad|glory/.test(key);
    var longH=strong?9:(arabic?8:7), longPct=strong?88:(arabic?80:68);
    var sill=strong?88:(arabic?80:64), sillTxt=sill>=80?'Fuerte':(sill>=60?'Moderada-fuerte':'Moderada');
    var ideal = noche>=60 ? 'Noche · clima frío · ocasiones especiales'
              : noche<=35 ? 'Día · clima cálido · uso diario'
              : 'Día y noche · versátil, todo el año';
    return {noche:noche,est:est,longH:longH,longPct:longPct,sill:sill,sillTxt:sillTxt,ideal:ideal};
  }


function claveAroma(texto){
 return String(texto||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}

function escenaPerfume(p){
 const familia=claveAroma(p.fam || p.notes.join(' '));
 if(/acuatic|marin|fresc/.test(familia)) return 'escena-agua';
 if(/flor/.test(familia)) return 'escena-flores';
 if(/citric|fougere/.test(familia)) return 'escena-marfil';
 if(/oriental|amaderad|ambar|gourmand|dulce|especiad/.test(familia)) return 'escena-ciruela';
 return 'escena-marfil';
}

function miniaturaElite(url){
 const foto=String(url || "").match(/^img\/([\w-]+)\.webp(?:\?.*)?$/);
 return foto && fotosColeccion[foto[1]] ? "img/mini/"+foto[1]+".webp" : url;
}

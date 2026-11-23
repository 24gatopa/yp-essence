const clavesProductos = new Map();
const porNombreMarca = (p) => claveAroma(p.brand).trim() + '/' + claveAroma(p.name).trim();
for (const p of productosBase) {
  clavesProductos.set(porNombreMarca(p), p.img.split('/').pop().replace(/\.png$/, ''));
}
clavesProductos.set('jean paul gaultier/elixir','le-male-elixir');
clavesProductos.set('jean paul gaultier/le male elixir','le-male-elixir');
clavesProductos.set('lattafa/mayar','mayar');
clavesProductos.set('lattafa/fakhar','fakhar');

function slugProducto(p) {
  return clavesProductos.get(porNombreMarca(p)) || '';
}
function gruposNotas(p) {
  const oficial = piramidesElite[slugProducto(p)];
  const grupos = p.notasPersonalizadas ? p.piramidePersonalizada : oficial;
  const lista = [];
  if (grupos) {
    for (const [key,title] of [['salida','Salida'],['corazon','Corazón'],['fondo','Fondo'],['notas','Notas']]) {
      if (Array.isArray(grupos[key]) && grupos[key].length) lista.push([title,grupos[key]]);
    }
  }
  if (!lista.length) return [['Notas',p.notes || []]];
  if (!p.notasPersonalizadas && p.id) {
    const base=productosBase.find(item=>slugProducto(item)===slugProducto(p));
    const antiguos=new Set((base?.notes || []).map(claveAroma));
    const registrados=new Set(lista.flatMap(([,notas])=>notas.map(claveAroma)));
    const extras=(p.notes || []).filter(n=>!antiguos.has(claveAroma(n)) && !registrados.has(claveAroma(n)));
    if(extras.length) lista.push(['Otras notas registradas',extras]);
  }
  return lista;
}
function prepararProducto(raw) {
  const p = productoTienda(raw);
  const slug = slugProducto(p);
  p.ver = slug && (p.id || productosBase.some(item=>slugProducto(item)===slug))
    ? 'fichas/'+slug+'.html'+(p.id?'?id='+encodeURIComponent(p.id):'')
    : p.ver;
  p.notes = [...new Set(gruposNotas(p).flatMap(([,notas])=>notas))];
  return p;
}
function productoDocumento(doc) {
  const o=doc.data();
  return {id:doc.id, name:o.nombre,brand:o.marca || '',fam:o.fam || '',gen:o.genero || '',price:o.precio,
    notes:Array.isArray(o.notas)?o.notas:[],img:o.img || '',disponible:o.disponible,destacado:o.destacado,orden:o.orden,
    intensidades:o.intensidades || {},notasPersonalizadas:o.notasPersonalizadas===true,piramidePersonalizada:o.piramidePersonalizada,
    ver:'perfume.html?id='+encodeURIComponent(doc.id)};
}
const cacheCatalogo='elite.catalogo.v3';
function leerCatalogo() {
  try { const datos=JSON.parse(sessionStorage.getItem(cacheCatalogo)); return Array.isArray(datos)?datos:[]; }
  catch { return []; }
}
function guardarCatalogo(productos) {
  try { sessionStorage.setItem(cacheCatalogo,JSON.stringify(productos)); } catch {}
}
function recordarProducto(p) {
  if (!p.id) return;
  try { sessionStorage.setItem('elite.ficha.v3',JSON.stringify(p)); } catch {}
}
let promesaBase;
function baseTienda() {
  if (!promesaBase) {
    promesaBase = Promise.all(['firebase-app-compat','firebase-firestore-compat'].map(nombre=>new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.async=false;
      script.src='https://www.gstatic.com/firebasejs/10.12.5/'+nombre+'.js';
      script.onload=resolve; script.onerror=reject;
      document.head.append(script);
    }))).then(()=>{
      if (!firebase.apps.length) firebase.initializeApp(CONFIG_FIREBASE);
      return firebase.firestore().collection('productos');
    });
  }
  return promesaBase;
}
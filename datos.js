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
// Nivel de presencia de una nota (1–5): primero lo que fijó la tienda en el
// panel, luego la lectura editorial. Sin dato devuelve null.
function nivelNota(p,nota){
  const comparar=claveAroma(nota).trim();
  const editorial=(typeof acentosElite!=='undefined' && acentosElite[slugProducto(p)]?.notas) || {};
  for(const datos of [p.intensidades || {},editorial]){
    const dato=Object.entries(datos).find(([key])=>claveAroma(key).trim()===comparar);
    if(dato && Number.isInteger(dato[1]) && dato[1]>=1 && dato[1]<=5) return dato[1];
  }
  return null;
}
// Pirámide completa registrada (editorial o personalizada en el panel).
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
// Notas que la ficha muestra: solo las que tienen presencia valorada. Si la
// tienda personalizó la pirámide se respetan todas sus notas. Si ninguna nota
// tiene valoración se muestra la pirámide tal cual, sin niveles.
function notasPresentes(p) {
  const grupos=gruposNotas(p);
  const valoradas=grupos.map(([titulo,notas])=>[titulo,notas.filter(n=>nivelNota(p,n))]).filter(([,notas])=>notas.length);
  if (p.notasPersonalizadas || !valoradas.length) return grupos;
  return valoradas;
}
// Lista plana para tarjetas, buscador y relacionados: primero las notas
// valoradas (de mayor a menor presencia), después el resto de la pirámide.
function notasOrdenadas(p) {
  const todas=[...new Set(gruposNotas(p).flatMap(([,notas])=>notas))];
  const presentes=new Set(notasPresentes(p).flatMap(([,notas])=>notas));
  const orden=new Map(todas.map((n,i)=>[n,i]));
  const peso=n=>(presentes.has(n)?0:100)-(nivelNota(p,n) || 0)*10+orden.get(n)/1000;
  return todas.sort((a,b)=>peso(a)-peso(b));
}
function prepararProducto(raw) {
  const p = productoTienda(raw);
  const slug = slugProducto(p);
  p.ver = slug && (p.id || productosBase.some(item=>slugProducto(item)===slug))
    ? 'fichas/'+slug+'.html'+(p.id?'?id='+encodeURIComponent(p.id):'')
    : p.ver;
  p.notes = notasOrdenadas(p);
  return p;
}

// ——— Catálogo en vivo (Firestore por REST, sin SDK) ———
const RUTA_CATALOGO='https://firestore.googleapis.com/v1/projects/'+CONFIG_FIREBASE.projectId+'/databases/(default)/documents/productos';
const MASCARA_LIGERA=['nombre','marca','fam','genero','precio','notas','disponible','destacado','orden','intensidades','notasPersonalizadas','piramidePersonalizada'].map(c=>'mask.fieldPaths='+c).join('&');
function valorFirestore(v) {
  if (!v || typeof v!=='object') return v;
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return Number(v.doubleValue);
  if ('booleanValue' in v) return v.booleanValue;
  if ('nullValue' in v) return null;
  if ('timestampValue' in v) return v.timestampValue;
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(valorFirestore);
  if ('mapValue' in v) return Object.fromEntries(Object.entries(v.mapValue.fields || {}).map(([k,x])=>[k,valorFirestore(x)]));
  return null;
}
function productoDocumento(doc) {
  const o=Object.fromEntries(Object.entries(doc.fields || {}).map(([k,v])=>[k,valorFirestore(v)]));
  const id=String(doc.name || '').split('/').pop();
  return {id, name:o.nombre || '',brand:o.marca || '',fam:o.fam || '',gen:o.genero || '',price:o.precio,
    notes:Array.isArray(o.notas)?o.notas:[],img:o.img || '',disponible:o.disponible,destacado:o.destacado,orden:o.orden,
    intensidades:o.intensidades || {},notasPersonalizadas:o.notasPersonalizadas===true,piramidePersonalizada:o.piramidePersonalizada,
    ver:'perfume.html?id='+encodeURIComponent(id)};
}
async function pedirJSON(url) {
  const r=await fetch(url+(url.includes('?')?'&':'?')+'key='+CONFIG_FIREBASE.apiKey);
  if(!r.ok) throw new Error('Firestore '+r.status);
  return r.json();
}
// Fotos subidas desde el panel: se piden aparte (son pesadas) después de
// pintar la lista, y mandan sobre la foto de la web.
async function fotosDelPanel() {
  const fotos=new Map(); let token='';
  do {
    const pagina=await pedirJSON(RUTA_CATALOGO+'?pageSize=300&mask.fieldPaths=img'+(token?'&pageToken='+encodeURIComponent(token):''));
    for (const doc of pagina.documents || []) {
      const img=valorFirestore(doc.fields?.img);
      if (typeof img==='string' && /^data:image\//i.test(img)) fotos.set(String(doc.name).split('/').pop(), img);
    }
    token=pagina.nextPageToken || '';
  } while(token);
  return fotos;
}
function aplicarFotos(productos,fotos) {
  let cambios=0;
  for (const p of productos) { const img=fotos.get(p.id); if (img && p.img!==img) { p.img=img; cambios++; } }
  return cambios;
}
// Lista ligera primero (rápida). Si se pasa `conFotos`, se llama después con
// la lista ya con las fotos del panel cuando alguna cambió.
async function cargarCatalogo(conFotos) {
  let docs=[],token='';
  do {
    const pagina=await pedirJSON(RUTA_CATALOGO+'?pageSize=300&'+MASCARA_LIGERA+(token?'&pageToken='+encodeURIComponent(token):''));
    docs=docs.concat(pagina.documents || []); token=pagina.nextPageToken || '';
  } while(token);
  const productos=docs.map(productoDocumento).sort((a,b)=>(Number(b.destacado===true)-Number(a.destacado===true)) || (Number(a.disponible===false)-Number(b.disponible===false)) || ((a.orden||0)-(b.orden||0)));
  const previas=new Map(leerCatalogo().filter(p=>/^data:/.test(p.img||'')).map(p=>[p.id,p.img]));
  aplicarFotos(productos,previas);
  guardarCatalogo(productos);
  const fotos=fotosDelPanel().then(f=>{ if(aplicarFotos(productos,f) || [...previas.keys()].some(id=>!f.has(id))) { for(const p of productos) if(!f.has(p.id) && /^data:/.test(p.img||'')) p.img=''; guardarCatalogo(productos); if(conFotos) conFotos(productos); } }).catch(()=>{});
  if (!conFotos) await fotos;
  return productos;
}
async function cargarProducto(id) {
  const doc=await pedirJSON(RUTA_CATALOGO+'/'+encodeURIComponent(id));
  return doc.fields?productoDocumento(doc):null;
}
async function buscarProducto(slug) {
  const productos=await cargarCatalogo(()=>{});
  const p=productos.find(p=>slugProducto(p)===slug);
  return p?cargarProducto(p.id):null;
}
// Copia local del catálogo: la página pinta al instante y se actualiza después.
const cacheCatalogo='elite.catalogo.v4';
function leerCatalogo() {
  try {
    const datos=JSON.parse(localStorage.getItem(cacheCatalogo) || sessionStorage.getItem(cacheCatalogo));
    return Array.isArray(datos)?datos:[];
  } catch { return []; }
}
function guardarCatalogo(productos) {
  const texto=JSON.stringify(productos);
  try { localStorage.setItem(cacheCatalogo,texto); } catch { try { sessionStorage.setItem(cacheCatalogo,texto); } catch {} }
}
function recordarProducto(p) {
  if (!p.id) return;
  try { sessionStorage.setItem('elite.ficha.v4',JSON.stringify(p)); } catch {}
}

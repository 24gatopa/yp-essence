const main=document.getElementById('main');
const safe=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Longitudes relativas reproducidas de la referencia visual de 9pm.
const acordes9pm = [
 ['Avainillado',100,'#fff0b0'], ['Ámbar',63,'#edbd8a'],
 ['Cálido especiado',60,'#e9a583'], ['Afrutado',58,'#e99d95'],
 ['Canela',56,'#dca779'], ['Dulce',55,'#e6a1ac'],
 ['Lavanda',54,'#c9b5d7'], ['Fresco',52,'#b5d4da'],
 ['Aromático',51,'#a9cfc0'], ['Atalcado',50,'#d9cdc4']
];
const paletaNotas=[
 [/vainill|avainill/,'#fff0b0'],[/canela/,'#dca779'],[/ambar gris/,'#c6c2b6'],
 [/bourbon|ron|ambar/,'#edbd8a'],[/lavanda|heliotropo|orquidea/,'#c9b5d7'],
 [/cardamomo|salvia|menta|albahaca|vetiver/,'#a9cfc0'],[/marin|acuatic|fresco/,'#b5d4da'],
 [/limon|citric|bergamota|pina/,'#ebdf97'],[/mandarina|azafran/,'#f0be86'],
 [/frambuesa|rosa|frut|manzana/,'#e99d95'],[/jasmin|jazmin|flor/,'#efd4de'],
 [/cedro|madera|oud|sandalo|pachul/,'#cbb096'],[/cafe|incienso|tabaco|datil/,'#c39f88'],
 [/miel|caramelo|tonka/,'#e5c298'],[/coco|almizcle/,'#ded4c8'],[/especi/,'#e9a583']
];
function colorNota(nota){
 return paletaNotas.find(([patron])=>patron.test(claveAroma(nota)))?.[1] || '#ded2c5';
}
const logosMarca = {
  "lattafa": "https://cdn.brandfetch.io/idqeRWNOVl/w/594/h/594/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1763306746936",
  "afnan": "https://abscents.com.mx/cdn/shop/files/afnan_hp-fotor-20240321103724_8712566a-77ac-4f61-98de-545f94745190.jpg?v=1753634437&width=1080",
  "al haramain": "https://theluxeaurasa.co.za/cdn/shop/collections/rn-image_picker_lib_temp_d306a6f7-37f0-40fc-a200-c03d15666e73.jpg?v=1759402773",
  "armaf": "https://www.perfumeriakennedy.com/cdn/shop/collections/armaf-logo-png_seeklogo-511415.png?v=1762464625&width=1500",
  "rasasi": "https://emiratesoud.co.uk/cdn/shop/collections/Rasasi-Perfumes-169991956.jpg?v=1750954030",
  "giorgio armani": "https://images.ctfassets.net/hzgho8wo5m1w/5IAAg63UwaYDF9bVBKEhd/aefc2f879556aeebabee8685a4fb7e02/chemist-warehouse-giorgio-armani-logo.jpg?fm=webp&q=90&w=3840",
  "jean paul gaultier": "https://perfumology.co.za/cdn/shop/collections/52.jpg?v=1718613309",
  "valentino": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Valentino_logo.svg/250px-Valentino_logo.svg.png",
  "azzaro": "https://bestperfumesmiami.com/cdn/shop/collections/Logo_Azzaro.png?v=1747247191",
  "armani": "https://images.ctfassets.net/hzgho8wo5m1w/5IAAg63UwaYDF9bVBKEhd/aefc2f879556aeebabee8685a4fb7e02/chemist-warehouse-giorgio-armani-logo.jpg?fm=webp&q=90&w=3840"
};
function tituloPerfume(p){
 const logo=logosMarca[String(p.brand || '').trim().toLowerCase()];
 return '<div class="titulo-perfume"><div><div class="brand">'+safe(p.brand)+'</div><h1>'+safe(p.name)+'</h1></div>'+
   (logo?'<span class="soporte-marca"><img class="firma-marca" src="'+safe(logo)+'" width="88" height="64" alt="" referrerpolicy="no-referrer" onerror="this.parentElement.hidden=true"></span>':'')+'</div>';
}
const nombresNivel=['','Muy sutil','Sutil','Presente','Destacada','Dominante'];
function icono(i) {
  return '<span class="grabado" aria-hidden="true" style="--x:'+((i%4)*100/3)+'%;--y:'+(Math.floor(i/4)*100/3)+'%"></span>';
}
function iconoNota(nota) {
  const k=claveAroma(nota);
  for (const [r,i] of [[/ambar|resin|benjui|incienso|labdano|mirra/,8],[/limon|lima|bergamota|mandarina|naranja|pomelo|citric/,9],[/vainilla|tonka|caramelo|pralin|chocol|azucar|miel|cafe|crema/,10],[/cedro|sandalo|madera|oud|vetiver|pachul|cipres|abeto/,11],[/jazmin|rosa|violeta|azahar|orquidea|flor|lavanda|geranio|lirio|iris|ylang|nard|heliotrop/,12],[/pina|manzan|frut|pera|cereza|datil|durazno|coco|grosella|lichi|ciruela|melon|mango/,13],[/canela|especi|pimienta|cardamomo|jengibre|azafran|nuez|clavo|salvia|menta/,14],[/marin|agua|acuatic/,5]]) if(r.test(k)) return i;
  return 15;
}
function barra(n,tono='') {
  return '<span class="pista" aria-hidden="true" style="--valor:'+n+'%;'+(tono?'--tinta:'+tono:'')+'"><i></i></span>';
}
function fuenteEnlace(url,texto){
  return /^https:\/\//i.test(url || '')?'<a class="origen" target="_blank" rel="noopener" href="'+safe(url)+'">'+texto+'</a>':'';
}
// Solo las notas con presencia valorada; una nota sin nivel (pirámide propia
// de la tienda o perfume sin valoración) se lista sin barra.
function notasFicha(p) {
  const grupos=notasPresentes(p);
  const total=grupos.reduce((n,[,notas])=>n+notas.length,0);
  if(!total) return '';
  const conNivel=grupos.some(([,notas])=>notas.some(n=>nivelNota(p,n)));
  const bloques=grupos.map(([titulo,notas])=>'<section class="fase"><h3>'+safe(titulo)+'</h3><ul>'+notas.map(n=>{
    const valor=nivelNota(p,n);
    return '<li>'+icono(iconoNota(n))+'<div><span class="nombre-nota">'+safe(n)+'</span>'+(valor?'<small>'+nombresNivel[valor]+' · '+valor+'/5</small>'+barra(valor*20,colorNota(n)):'')+'</div></li>';
  }).join('')+'</ul></section>').join('');
  const fuente=p.notasPersonalizadas?'':fuenteEnlace(piramidesElite[slugProducto(p)]?.fuente,'Consultar notas de referencia');
  const fuenteAcento=acentosElite[slugProducto(p)]?.fuente;
  const acento=fuenteAcento===piramidesElite[slugProducto(p)]?.fuente && fuente?'':fuenteEnlace(fuenteAcento,'Referencia de presencia aromática');
  const leyenda=conNivel?'Las notas que más se perciben al olerlo. La barra indica cuánto destaca cada una, de 1 a 5, según una valoración editorial.':'Notas registradas de este perfume.';
  return '<section class="panel-notas"><h2>Notas del perfume</h2><p class="leyenda">'+leyenda+'</p>'+bloques+'<div class="fuentes">'+[fuente,acento].filter(Boolean).join(' ')+'</div></section>';
}
function perfilFicha(pr) {
  const momento=pr.noche>=60?'Noche':pr.noche<=35?'Día':'Día y noche';
  function fila(i,nombre,valor,n) {return '<li>'+icono(i)+'<div><div class="medida"><strong>'+nombre+'</strong><span>'+valor+'</span></div>'+barra(n)+'</div></li>'}
  const estaciones=[['Primavera',4],['Verano',5],['Otoño',6],['Invierno',7]];
  return '<aside class="panel-perfil"><h2>Cuándo llevarlo</h2><p class="leyenda">Orientación según la familia olfativa.</p><ul class="metricas">'+
    fila(0,'Duración','≈ '+pr.longH+' h',pr.longH/12*100)+fila(1,'Estela',safe(pr.sillTxt),pr.sill)+
    '<li>'+icono(momento==='Noche'?3:2)+'<div class="medida"><strong>Uso sugerido</strong><span>'+momento+'</span></div></li></ul>'+
    '<h3>Afinidad por estación</h3><ul class="metricas estaciones">'+estaciones.map(([s,i])=>fila(i,s,pr.est[s]>=75?'Alta':pr.est[s]>=45?'Media':'Baja',pr.est[s])).join('')+'</ul></aside>';
}
function draw(raw,disponibles=productosBase){
 const p=prepararProducto(raw), pr=profile(p);
 const related=disponibles.map(prepararProducto).filter(x=>porNombreMarca(x)!==porNombreMarca(p)&&x.disponible!==false)
   .sort((a,b)=>similar(b)-similar(a)).slice(0,3);
 function similar(x){return x.notes.filter(n=>p.notes.includes(n)).length*2+Number(x.gen===p.gen)}
 const link=pedidoWhatsApp(p),size=tamanoFoto(p.img);
 document.title=p.name+' de '+p.brand+' · ÉLITÉ';
 const acorde9=slugProducto(p)==='9pm'?'<details class="acordes-extra"><summary>Acordes principales de 9pm</summary><p class="leyenda">Intensidad relativa entre acordes.</p><ul>'+acordes9pm.map(([n,v,c])=>'<li>'+safe(n)+barra(v,c)+'</li>').join('')+'</ul></details>':'';
 main.innerHTML='<section class="showcase"><div class="portrait '+escenaPerfume(p)+'"><img fetchpriority="high" width="'+size.width+'" height="'+size.height+'" src="'+safe(p.img)+'" alt="'+safe(p.name)+'"></div><div class="intro">'+tituloPerfume(p)+'<div class="classify">'+[p.fam,p.gen,p.disponible===false?'Agotado':''].filter(Boolean).map(safe).join(' · ')+'</div><div class="purchase"><strong>S/ '+safe(p.price)+'</strong><a href="'+safe(link)+'" target="_blank" rel="noopener">'+(p.disponible===false?'Consultar reposición':'Pedir por WhatsApp')+'</a></div><details class="shipping"><summary>Entrega y formas de pago</summary><p>Envíos a todo el Perú. Confirma el costo y el plazo para tu distrito por WhatsApp. Yape y Plin disponibles. Contraentrega según cobertura.</p></details></div></section>'+
 '<div class="lectura-perfume"><div>'+notasFicha({...p,notes:raw.notes || []})+acorde9+'</div>'+perfilFicha(pr)+'</div>'+
 '<section class="section"><h2>También te puede gustar</h2><div class="recs">'+related.map(x=>'<a href="'+safe(x.ver)+'"><img width="'+tamanoFoto(x.img).width+'" height="'+tamanoFoto(x.img).height+'" src="'+safe(x.img)+'" alt="" loading="lazy"><span><small>'+safe(x.brand)+'</small>'+safe(x.name)+'<small>S/ '+safe(x.price)+'</small></span></a>').join('')+'</div></section>';
 if(window.carritoElite&&p.disponible!==false){main.querySelector('.purchase').append(carritoElite.boton(p));carritoElite.refrescar();}
}
function fail(){main.innerHTML='<p>Esta ficha no está disponible.</p><a href="index.html#coleccion">Volver a la colección</a>'}
async function start(){
  const query=new URLSearchParams(location.search),id=query.get('id'),slug=document.body.dataset.perfume;
  const cache=leerCatalogo();
  let previo;
  try { previo=JSON.parse(sessionStorage.getItem('elite.ficha.v4')); } catch {}
  let p;
  if(id) p=(previo?.id===id && previo) || cache.find(x=>x.id===id);
  if(!p && slug) p=cache.find(x=>slugProducto(x)===slug) || productosBase.find(x=>slugProducto(x)===slug);
  if(!id && !slug) p=productosBase[Number(query.get('i') || 0)];
  if(p) draw(p,cache.length?cache:productosBase);
  if(!id && !slug) return p || fail();
  try {
    const doc=id?await cargarProducto(id):await buscarProducto(slug);
    if(doc) draw(doc,leerCatalogo().length?leerCatalogo():productosBase);
    else if(id || !p) fail();
  } catch { if(!p) fail(); }
}
start();

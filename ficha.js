const perfumes=[{"img":"img/9pm.png","name":"9pm","brand":"Afnan","fam":"Oriental dulce","gen":"Hombre","price":139,"notes":["Manzana","Canela","Vainilla"],"ver":"perfume.html?i=0"},{"img":"img/9am-dive.png","name":"9AM Dive","brand":"Afnan","fam":"Acuático fresco","gen":"Hombre","price":149,"notes":["Marino","Cítricos","Ámbar"],"ver":"perfume.html?i=1"},{"img":"img/khamrah.png","name":"Khamrah","brand":"Lattafa","fam":"Oriental gourmand","gen":"Unisex","price":129,"notes":["Canela","Dátiles","Vainilla"],"ver":"perfume.html?i=2"},{"img":"img/khamrah-qahwa.png","name":"Khamrah Qahwa","brand":"Lattafa","fam":"Oriental café","gen":"Unisex","price":129,"notes":["Café","Cardamomo","Caramelo"],"ver":"perfume.html?i=3"},{"img":"img/khamrah-dukhan.png","name":"Khamrah Dukhan","brand":"Lattafa","fam":"Oriental ahumado","gen":"Unisex","price":139,"notes":["Incienso","Canela","Café"],"ver":"perfume.html?i=4"},{"img":"img/asad.png","name":"Asad","brand":"Lattafa","fam":"Amaderado afrutado","gen":"Hombre","price":125,"notes":["Piña","Bergamota","Ámbar gris"],"ver":"perfume.html?i=5"},{"img":"img/asad-bourbon.png","name":"Asad Bourbon","brand":"Lattafa","fam":"Amaderado especiado","gen":"Hombre","price":139,"notes":["Bourbon","Canela","Vainilla"],"ver":"perfume.html?i=6"},{"img":"img/asad-elixir.png","name":"Asad Elixir","brand":"Lattafa","fam":"Amaderado dulce","gen":"Hombre","price":149,"notes":["Piña","Ron","Vainilla"],"ver":"perfume.html?i=7"},{"img":"img/yara.png","name":"Yara","brand":"Lattafa","fam":"Floral dulce","gen":"Mujer","price":129,"notes":["Orquídea","Heliotropo","Sándalo"],"ver":"perfume.html?i=8"},{"img":"img/yara-candy.png","name":"Yara Candy","brand":"Lattafa","fam":"Gourmand dulce","gen":"Mujer","price":129,"notes":["Frutas","Caramelo","Vainilla"],"ver":"perfume.html?i=9"},{"img":"img/yara-moi.png","name":"Yara Moi","brand":"Lattafa","fam":"Floral frutal","gen":"Mujer","price":129,"notes":["Frambuesa","Jazmín","Vainilla"],"ver":"perfume.html?i=10"},{"img":"img/yara-tous.png","name":"Yara Tous","brand":"Lattafa","fam":"Floral frutal","gen":"Mujer","price":129,"notes":["Frutas","Flores","Almizcle"],"ver":"perfume.html?i=11"},{"img":"img/oud-for-glory.png","name":"Oud for Glory","brand":"Lattafa","fam":"Amaderado oud","gen":"Unisex","price":129,"notes":["Oud","Azafrán","Pachulí"],"ver":"perfume.html?i=12"},{"img":"img/honor-glory.png","name":"Honor & Glory","brand":"Lattafa","fam":"Amaderado ambarado","gen":"Unisex","price":129,"notes":["Oud","Ámbar","Especias"],"ver":"perfume.html?i=13"},{"img":"img/bade-sublime.png","name":"Bade'e Al Oud Sublime","brand":"Lattafa","fam":"Oriental oud","gen":"Unisex","price":129,"notes":["Oud","Rosa","Azafrán"],"ver":"perfume.html?i=14"},{"img":"img/mandarinsky.png","name":"Mandarin Sky","brand":"Armaf","fam":"Cítrico ámbar","gen":"Hombre","price":125,"notes":["Mandarina","Especias","Ámbar"],"ver":"perfume.html?i=15"},{"img":"img/mandarinsky-elixir.png","name":"Mandarin Sky Elixir","brand":"Armaf","fam":"Cítrico ámbar intenso","gen":"Hombre","price":149,"notes":["Mandarina","Canela","Ámbar"],"ver":"perfume.html?i=16"},{"img":"img/odyssey-limoni.png","name":"Odyssey Limoni","brand":"Armaf","fam":"Cítrico aromático","gen":"Hombre","price":129,"notes":["Limón","Albahaca","Almizcle"],"ver":"perfume.html?i=17"},{"img":"img/odyssey-homme-white.png","name":"Odyssey Homme White","brand":"Armaf","fam":"Amaderado fresco","gen":"Hombre","price":135,"notes":["Bergamota","Lavanda","Cedro"],"ver":"perfume.html?i=18"},{"img":"img/hawas-ice.png","name":"Hawas Ice","brand":"Rasasi","fam":"Acuático fresco","gen":"Hombre","price":149,"notes":["Menta","Cítricos","Ámbar gris"],"ver":"perfume.html?i=19"},{"img":"img/hawas-malibu.png","name":"Hawas Malibu","brand":"Rasasi","fam":"Acuático afrutado","gen":"Hombre","price":149,"notes":["Piña","Coco","Ámbar"],"ver":"perfume.html?i=20"},{"img":"img/amber-oud-gold.png","name":"Amber Oud Gold Edition","brand":"Al Haramain","fam":"Ambarado afrutado","gen":"Unisex","price":239,"notes":["Frutas","Ámbar","Almizcle"],"ver":"perfume.html?i=21"},{"img":"img/most-wanted.png","name":"The Most Wanted","brand":"Azzaro","fam":"Amaderado especiado","gen":"Hombre","price":299,"notes":["Cardamomo","Bourbon","Madera"],"ver":"perfume.html?i=22"},{"img":"img/stronger-intensely.png","name":"Stronger With You Intensely","brand":"Armani","fam":"Oriental vainilla","gen":"Hombre","price":365,"notes":["Cardamomo","Vainilla","Ámbar"],"ver":"perfume.html?i=23"},{"img":"img/acqua-di-gio.png","name":"Acqua di Gio","brand":"Giorgio Armani","fam":"Acuático cítrico","gen":"Hombre","price":449,"notes":["Marino","Bergamota","Pachulí"],"ver":"perfume.html?i=24"},{"img":"img/le-male.png","name":"Le Male","brand":"Jean Paul Gaultier","fam":"Aromático fougère","gen":"Hombre","price":479,"notes":["Lavanda","Menta","Vainilla"],"ver":"perfume.html?i=25"},{"img":"img/le-beau.png","name":"Le Beau","brand":"Jean Paul Gaultier","fam":"Amaderado coco","gen":"Hombre","price":479,"notes":["Coco","Bergamota","Haba tonka"],"ver":"perfume.html?i=26"},{"img":"img/scandal-le-parfum.png","name":"Scandal Le Parfum","brand":"Jean Paul Gaultier","fam":"Oriental gourmand","gen":"Mujer","price":399,"notes":["Miel","Caramelo","Haba tonka"],"ver":"perfume.html?i=27"},{"img":"img/born-in-roma.png","name":"Born in Roma Intense","brand":"Valentino","fam":"Amaderado aromático","gen":"Hombre","price":479,"notes":["Salvia","Vetiver","Vainilla"],"ver":"perfume.html?i=28"}];
const families=[
 ['Frutal','manzana|fruta|frambuesa|piña|dátil|coco'],
 ['Cítrica','bergamota|cítrico|mandarina|limón'],
 ['Floral','flor|rosa|jazmín|orquídea|azahar|heliotropo'],
 ['Especiada','canela|cardamomo|especia|azafrán'],
 ['Gourmand','vainilla|tonka|miel|caramelo'],
 ['Ambarada','ámbar|incienso'],['Amaderada','cedro|madera|oud|sándalo|vetiver|pachulí'],
 ['Aromática','menta|lavanda|salvia|albahaca'],['Marina','marino|acuático'],['Tostada','café'],
 ['Almizclada','almizcle'],['Licorosa','bourbon|ron']
];
const main=document.getElementById('main');
const safe=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function art(note){
 const index=families.findIndex(([,pattern])=>new RegExp(pattern,'i').test(note));
 const icon=index<0?'':'<span aria-hidden="true" class="illustration" style="--pos:'+((index%4)*100/3)+'% '+(Math.floor(index/4)*50)+'%"></span>';
 return '<span class="note">'+icon+safe(note)+'</span>';
}
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
function graficoAromas(p,nine,perfil){
 const filas=nine?acordes9pm:p.notes.map(nota=>[nota,100,colorNota(nota)]);
 const barras=filas.map(([nombre,ancho,color])=>'<li style="--largo:'+ancho+'%;--tono:'+color+'">'+safe(nombre)+'</li>').join('');
 const aromas=barras?'<h2>'+(nine?'Acordes principales':'Notas del perfume')+'</h2><ul class="acordes">'+barras+'</ul>':'';
 const momento=perfil.noche>=60?'De noche':perfil.noche<=35?'De día':'Día y noche';
 const posicion=perfil.noche>=60?88:perfil.noche<=35?12:50;
 return `<section class="lectura-aroma">${aromas}
   <div class="guias-uso">
     <div class="duracion">
       <div><span>Duración estimada</span><strong>≈ ${perfil.longH} h</strong></div>
       <meter min="0" max="12" value="${perfil.longH}" aria-label="Duración estimada en horas"></meter>
       <div class="escala" aria-hidden="true"><span>0 h</span><span>6 h</span><span>12 h</span></div>
     </div>
     <div class="momento">
       <div class="momento-titulo"><span>Uso sugerido</span><strong>${momento}</strong></div>
       <div class="ciclo" style="--posicion:${posicion}%" aria-hidden="true"></div>
       <div class="extremos" aria-hidden="true"><span>☀ Día</span><span>Noche ☾</span></div>
     </div>
   </div></section>`;

}
function item(term,value){return '<div><dt>'+safe(term)+'</dt><dd>'+safe(value)+'</dd></div>'}
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
function draw(p,available=perfumes){
 p=productoTienda(p);
 available=available.map(productoTienda);
 const pr=profile(p),nine=p.name.toLowerCase()==='9pm'&&p.brand.toLowerCase()==='afnan';
 const [light,deep]=pr.noche>60?['#846371','#291824']:pr.noche<35?['#8caeac','#223e42']:['#b79080','#55343c'];
 const link=pedidoWhatsApp(p);
 const season=Object.entries(pr.est).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([s])=>s).join(' · ');
 const related=available.filter(x=>x.name!==p.name&&x.disponible!==false).sort((a,b)=>similar(b)-similar(a)).slice(0,3);
 function similar(x){return x.notes.filter(n=>p.notes.includes(n)).length*2+Number(x.gen===p.gen)}
 document.title=p.name+' de '+p.brand+' · ÉLITÉ';
 main.innerHTML='<section class="showcase"><div class="portrait '+escenaPerfume(p)+'" style="--light:'+light+';--deep:'+deep+'"><img width="'+tamanoFoto(p.img).width+'" height="'+tamanoFoto(p.img).height+'" src="'+safe(p.img)+'" alt="'+safe(p.name)+'"></div><div class="intro">'+tituloPerfume(p)+'<div class="classify">'+[p.fam,p.gen,p.disponible===false?'Agotado':''].filter(Boolean).map(safe).join(' · ')+'</div><div class="purchase"><strong>S/ '+safe(p.price)+'</strong><a href="'+safe(link)+'" target="_blank" rel="noopener"> '+(p.disponible===false?'Consultar reposición':'Pedir por WhatsApp')+' ↗</a></div>'+graficoAromas(p,nine,pr)+'<details class="shipping"><summary>Entrega y formas de pago</summary><p>Envíos a todo el Perú. Confirma el costo y el plazo para tu distrito por WhatsApp. Yape y Plin disponibles. Contraentrega según cobertura.</p></details></div></section>'+
 (nine?'<section class="section"><h2>La evolución de 9pm</h2><dl class="pyramid">'+item('Salida','Manzana · Lavanda · Bergamota')+item('Corazón','Canela')+item('Fondo','Vainilla · Haba tonka · Ámbar')+'</dl></section>':'')+
 '<section class="section"><h2>Perfil olfativo</h2><dl class="facts">'+item('Estela',pr.sillTxt)+item('Estaciones',season)+'</dl><p class="caption">Orientación según la familia olfativa. '+safe(pr.ideal)+'.</p></section>'+
 '<section class="section"><h2>También te puede gustar</h2><div class="recs">'+related.map(x=>'<a href="'+safe(x.ver)+'"><img width="'+tamanoFoto(x.img).width+'" height="'+tamanoFoto(x.img).height+'" src="'+safe(x.img)+'" alt="" loading="lazy"><span><small>'+safe(x.brand)+'</small>'+safe(x.name)+'<small>S/ '+safe(x.price)+'</small></span></a>').join('')+'</div></section>';
}
function fail(){main.innerHTML='<p>No se pudo cargar esta ficha.</p><a href="index.html#coleccion">Volver a la colección →</a>'}
async function start(){
 const query=new URLSearchParams(location.search),id=query.get('id');
 if(!id){const p=perfumes[Number(query.get('i')||0)];return p?draw(p):fail()}
 for(const module of ['firebase-app-compat','firebase-firestore-compat']){
 await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://www.gstatic.com/firebasejs/10.12.5/'+module+'.js';script.onload=resolve;script.onerror=reject;document.head.append(script)});
 }
 firebase.initializeApp({apiKey:"AIzaSyBD3RbrQUsYtFABqIs_5Pi97DpW034ukYY",authDomain:"elite-114bc.firebaseapp.com",projectId:"elite-114bc",storageBucket:"elite-114bc.firebasestorage.app",messagingSenderId:"544878346059",appId:"1:544878346059:web:42f399a5174087e5f272ce"});
  const snapshot=await firebase.firestore().collection('productos').get();
 const doc=snapshot.docs.find(entry=>entry.id===id);
 const available=snapshot.docs.map(entry=>{const o=entry.data();return {name:o.nombre,brand:o.marca||'',img:o.img,gen:o.genero,price:o.precio,notes:o.notas||[],disponible:o.disponible,ver:'perfume.html?id='+encodeURIComponent(entry.id)}});
 if(!doc)return fail();const o=doc.data();
 draw({name:o.nombre,brand:o.marca||'',fam:o.fam,gen:o.genero,price:o.precio,notes:o.notas||[],img:o.img,disponible:o.disponible},available);
}
start().catch(fail);




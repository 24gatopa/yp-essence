const fondosEditoriales={"9pm": 0, "9am-dive": 5, "khamrah": 3, "khamrah-qahwa": 4, "khamrah-dukhan": 4, "asad": 0, "asad-bourbon": 4, "asad-elixir": 3, "yara": 2, "yara-candy": 3, "yara-moi": 0, "yara-tous": 0, "oud-for-glory": 4, "honor-glory": 4, "bade-sublime": 4, "mandarinsky": 1, "mandarinsky-elixir": 1, "odyssey-limoni": 1, "odyssey-homme-white": 4, "hawas-ice": 5, "hawas-malibu": 5, "amber-oud-gold": 0, "most-wanted": 4, "stronger-intensely": 4, "acqua-di-gio": 5, "le-male": 4, "le-beau": 4, "scandal-le-parfum": 3, "born-in-roma": 4};
function fondoEditorial(p){return "url(img/editorial/escenas-"+(fondosEditoriales[slugProducto(p)] ?? 4)+".webp)"}
const local=productosBase;
const el=id=>document.getElementById(id);
let catalog=local,gender='Todos';
const normalize=value=>String(value||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
for(const label of ['Todos','Hombre','Mujer','Unisex']){
 const b=document.createElement('button');b.textContent=label;b.onclick=()=>{gender=label;render()};el('groups').append(b);
}
let retorno=null;
try {
 if(new URLSearchParams(location.search).has('volver') || performance.getEntriesByType('navigation')[0]?.type==='back_forward'){
   retorno=JSON.parse(sessionStorage.getItem('elite-vuelta'));
 }
} catch {}
function recordarFicha(p){
 recordarProducto(p);
 try{sessionStorage.setItem('elite-vuelta',JSON.stringify({key:productKey(p),gender,aroma,brand:el('brands').value,search:el('search').value,sort:el('sort').value,scroll:scrollY}));}catch{}
}
// ——— Portada: uno o varios destacados en rotación ———
const escena=document.querySelector('.scene');
let destacados=[],heroActual=0,heroTimer=null;
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
function pintarHero(hero){
 escena.dataset.escena=escenaPerfume(hero);el('discover').onclick=()=>recordarFicha(hero);
 el('house').textContent=hero.brand;el('title').textContent=hero.name;
 el('title').style.fontSize=hero.name.length>9?'clamp(36px,5.2vw,84px)':'';
 el('notes').textContent=hero.notes.slice(0,4).join(' · ');
 Object.assign(el('bottle'),tamanoFoto(hero.img));el('bottle').src=hero.img;el('bottle').alt=hero.name+' de '+hero.brand;el('discover').href=hero.ver;el('discover').textContent='Descubrir '+hero.name;
 for(const [i,b] of [...el('heroPuntos').children].entries()) b.setAttribute('aria-current',String(i===heroActual));
}
function mostrarHero(indice,animar=true){
 if(!destacados.length)return;
 heroActual=(indice+destacados.length)%destacados.length;
 const hero=destacados[heroActual];
 if(!animar||reduceMotion){pintarHero(hero);return;}
 escena.classList.add('cambiando');
 setTimeout(()=>{pintarHero(hero);escena.classList.remove('cambiando')},360);
}
function programarHero(){
 clearInterval(heroTimer);heroTimer=null;
 if(destacados.length>1&&!reduceMotion&&!document.hidden&&!escena.matches(':hover,:focus-within')) heroTimer=setInterval(()=>mostrarHero(heroActual+1),6000);
}
if(!el('heroPuntos')){
 const puntos=document.createElement('div');puntos.id='heroPuntos';puntos.className='hero-puntos';puntos.setAttribute('aria-label','Perfumes destacados');puntos.hidden=true;
 document.querySelector('.hero-copy').append(puntos);
}
for(const evento of ['mouseenter','mouseleave','focusin','focusout']) escena.addEventListener(evento,programarHero);
document.addEventListener('visibilitychange',programarHero);
function configurarHero(arr){
 destacados=arr.filter(p=>p.destacado&&p.disponible!==false);
 if(!destacados.length){const unico=arr.find(p=>p.name==='9pm'&&p.disponible!==false)||arr.find(p=>p.disponible!==false);destacados=unico?[unico]:[]}
 escena.hidden=!destacados.length;
 const puntos=el('heroPuntos');puntos.replaceChildren();puntos.hidden=destacados.length<2;
 destacados.forEach((p,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Ver '+p.name);b.onclick=()=>{mostrarHero(i);programarHero()};puntos.append(b)});
 if(heroActual>=destacados.length)heroActual=0;
 mostrarHero(heroActual,false);programarHero();
}
function update(arr){
 arr=arr.map(prepararProducto);
 catalog=arr;
 const chosen=el('brands').value;
 el('brands').replaceChildren(new Option('Todas las marcas',''));
 for(const brand of [...new Set(arr.map(p=>p.brand).filter(Boolean))].sort()) el('brands').add(new Option(brand,brand));
 el('brands').value=chosen;if(el('brands').selectedIndex<0)el('brands').selectedIndex=0;
 configurarHero(arr);
 if(retorno){
   gender=retorno.gender;aroma=retorno.aroma;el('search').value=retorno.search;el('sort').value=retorno.sort;el('brands').value=retorno.brand;
 }
 render();
 if(retorno) requestAnimationFrame(()=>{
   if(!retorno)return;
   const card=[...el('grid').querySelectorAll('.pick')].find(b=>b.dataset.key===retorno.key);
   if(card)card.closest('article').scrollIntoView({block:'center',behavior:'instant'});
   else window.scrollTo({top:retorno.scroll,behavior:'instant'});
 });
}
const aromaChoices=[
 ['Frutales',0,/frut|manzana|pina|coco|frambuesa/],['Cítricos',1,/citric|bergamota|limon|mandarina/],['Florales',2,/flor|jazmin|rosa|orquidea/],['Dulces',4,/gourmand|dulce|vainilla|caramelo|miel/],['Amaderados',6,/amaderad|madera|cedro|oud|sandalo/],['Acuáticos',8,/marino|acuatic/]
];
let aroma='',selection=[];
try{selection=JSON.parse(sessionStorage.getItem('elite-selection')||'[]');if(!Array.isArray(selection))selection=[]}catch{}
const productKey=p=>p.brand+' / '+p.name;
for(const [name,index] of aromaChoices){
 const button=document.createElement('button');button.dataset.aroma=name;
 const icon=document.createElement('i');icon.style.backgroundPosition=(index%4)*100/3+'% '+Math.floor(index/4)*50+'%';button.append(icon,document.createTextNode(name));el('aroma-list').append(button);
 button.onclick=()=>{aroma=aroma===name?'':name;render()};
}
el('aromaChip').onclick=()=>{aroma='';render()};
for(const event of ['pointerdown','keydown','wheel']) window.addEventListener(event,()=>{retorno=null},{once:true,passive:true});
function botonPedido(p){
 return window.carritoElite&&p.disponible!==false?carritoElite.boton(p):null;
}
function syncCompare(){
 const selected=catalog.filter(p=>selection.includes(productKey(p)));
 el('chosen').textContent=selected.length+' de 3';el('compare').disabled=selected.length<2;
 el('compareBar').hidden=!selected.length;
 for(const b of document.querySelectorAll('.pick')){
 const picked=selection.includes(b.dataset.key);
 b.setAttribute('aria-pressed',String(picked));b.textContent=picked?'✓ Seleccionado':'+ Comparar';
 b.disabled=!picked&&selected.length>=3;
 }
 try{sessionStorage.setItem('elite-selection',JSON.stringify(selection))}catch{}
}
el('discard').onclick=()=>{selection=[];syncCompare()};
el('compare').onclick=()=>{
 const container=el('compareItems');container.replaceChildren();
 for(const p of catalog.filter(p=>selection.includes(productKey(p)))){
 const column=document.createElement('article');
 const photo=new Image();Object.assign(photo,tamanoFoto(p.img));photo.src=p.img;photo.alt='';
 const stage=document.createElement('div');stage.className='compare-stage';stage.append(photo);
 const brand=document.createElement('p');brand.className='compare-brand';brand.textContent=p.brand;
 const title=document.createElement('h3');title.textContent=p.name;
 const dl=document.createElement('dl');
 const pr=profile(p);
 for(const [label,value] of [['Familia',p.fam],['Notas',p.notes.slice(0,6).join(' · ')],['Duración estimada','≈ '+pr.longH+' h'],['Uso sugerido',pr.noche>=60?'De noche':pr.noche<=35?'De día':'Día y noche'],['Existencias',p.disponible===false?'Agotado':'Consultar stock']]){
 const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;const row=document.createElement('div');row.append(dt,dd);
 if(label==='Duración estimada'||label==='Uso sugerido'){
   const line=document.createElement('div');line.setAttribute('aria-hidden','true');
   line.className=label==='Uso sugerido'?'cmp-line cmp-cycle':'cmp-line';
   line.style.setProperty('--pos',(label==='Uso sugerido'?(pr.noche>=60?88:pr.noche<=35?12:50):pr.longH/12*100)+'%');row.append(line);
 }
 dl.append(row);
 }
 const link=document.createElement('a');link.href=p.ver;link.textContent='Ver ficha ↗';link.onclick=()=>recordarFicha(p);
 const price=document.createElement('strong');price.textContent='S/ '+p.price;
 const order=document.createElement('a');order.href=pedidoWhatsApp(p);order.target='_blank';order.rel='noopener';order.className='cmp-order';
 order.textContent=p.disponible===false?'Consultar reposición':'Pedir por WhatsApp';
 order.setAttribute('aria-label',order.textContent+' · '+p.name);
 column.append(stage,brand,title,dl,price,order);
 const pedido=botonPedido(p);if(pedido)column.append(pedido);
 column.append(link);container.append(column);
 }
 if(window.carritoElite)carritoElite.refrescar();
 el('comparison').showModal();
};
el('closeCompare').onclick=()=>el('comparison').close();el('sort').onchange=render;

function render(){
 const q=normalize(el('search').value.trim()), brand=el('brands').value;
 const visible=catalog.filter(p=>(!brand||p.brand===brand)&&(gender==='Todos'||p.gen===gender)&&normalize(p.name+' '+p.brand+' '+p.fam+' '+(p.notes||[]).join(' ')).includes(q));
  const match=aromaChoices.find(x=>x[0]===aroma);
 if(match){
   for(let i=visible.length-1;i>=0;i--){
     const p=visible[i], family=normalize(p.fam);
     const usable=family!==normalize(p.brand) && aromaChoices.some(choice=>choice[2].test(family));
     const descriptor=usable?family:normalize(p.notes.join(' '));
     if(!match[2].test(descriptor)) visible.splice(i,1);
   }
 }
 if(el('sort').value)visible.sort((a,b)=>el('sort').value==='asc'?a.price-b.price:b.price-a.price);
 for(const b of el('aroma-list').children)b.setAttribute('aria-pressed',String(b.dataset.aroma===aroma));
 el('aromaChip').hidden=!aroma;el('aromaChip').textContent=aroma+' ×';el('aromaChip').setAttribute('aria-label','Quitar filtro '+aroma);
 el('clear').hidden=!(aroma||brand||q||gender!=='Todos'||el('sort').value);
 for(const b of el('groups').children)b.setAttribute('aria-pressed',String(b.textContent===gender));
 const fragment=document.createDocumentFragment();
 for(const p of visible){
 const a=document.createElement('a');a.href=p.ver;a.className='product';a.onclick=()=>recordarFicha(p);
 a.innerHTML='<div class="photo"><img alt="" loading="lazy"></div><div class="meta"><span></span><span></span></div><h3></h3><p class="scent"></p><div class="product-foot"><span></span><b></b></div>';
 a.querySelector('.photo').style.setProperty('--portada',fondoEditorial(p)); Object.assign(a.querySelector('img'),tamanoFoto(p.img));a.querySelector('img').src=miniaturaElite(p.img);a.querySelector('img').decoding='async';a.querySelector('.meta span').textContent=p.brand;a.querySelector('.meta span:last-child').textContent=p.disponible===false?'Agotado':p.destacado?'Destacado':'';
 a.querySelector('h3').textContent=p.name; a.querySelector('.scent').textContent=p.notes.slice(0,3).join(' · ');a.querySelector('.product-foot span').textContent=p.fam;a.querySelector('b').textContent='S/ '+p.price; const entry=document.createElement('article');entry.className='entry';
 const pick=document.createElement('button');pick.className='pick';pick.dataset.key=productKey(p);pick.setAttribute('aria-label','Comparar '+p.name);
 pick.onclick=()=>{const key=productKey(p);selection=selection.includes(key)?selection.filter(x=>x!==key):[...selection,key];syncCompare()};
 const order=document.createElement('a');
 order.className='order-card';order.href=pedidoWhatsApp(p);order.target='_blank';order.rel='noopener';
 order.textContent=p.disponible===false?'Consultar reposición':'Pedir por WhatsApp';
 order.setAttribute('aria-label',order.textContent+' · '+p.name+' de '+p.brand);
 a.setAttribute('aria-label','Ver ficha de '+p.name+' de '+p.brand);
 const actions=document.createElement('div');actions.className='card-actions';
 const pedido=botonPedido(p);actions.append(pedido || order);
 actions.append(pick);
 entry.append(a,actions);fragment.append(entry);
 }
 el('grid').replaceChildren(fragment);syncCompare();el('count').textContent=visible.length+(visible.length===1?' perfume':' perfumes');el('empty').hidden=visible.length>0;
 if(window.carritoElite)carritoElite.refrescar();
}
el('clear').onclick=el('reset').onclick=()=>{aroma='';el('sort').value='';gender='Todos';el('search').value='';el('brands').value='';render()};el('search').oninput=render;el('brands').onchange=render;
const lead=['9AM Dive','Asad','Amber Oud Gold Edition'];
const rank=p=>lead.includes(p.name)?lead.indexOf(p.name):3;
// 1) Copia guardada en este navegador (instantánea). 2) Catálogo en vivo.
const copia=leerCatalogo();
update(copia.length?copia:[...local].sort((a,b)=>rank(a)-rank(b)));
cargarCatalogo(conFotos=>update(conFotos)).then(frescos=>{
  if(!frescos.length)return;
  if(JSON.stringify(copia)!==JSON.stringify(frescos)) update(frescos);
}).catch(()=>{});


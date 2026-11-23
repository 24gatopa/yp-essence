// ÉLITÉ — pedido múltiple. Guarda la selección en el navegador y arma un solo
// mensaje de WhatsApp con todos los perfumes elegidos.
(function(){
  const CLAVE='elite.carrito.v1', TELEFONO='51938430692';
  const sanear=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const iconoBolsa='<i class="picto-pedido picto-bolsa" aria-hidden="true"></i>';
  const iconoWa='<i class="picto-pedido picto-chat" aria-hidden="true"></i>';
  let items=leer();
  function leer(){ try{ const d=JSON.parse(localStorage.getItem(CLAVE)); return Array.isArray(d)?d.filter(i=>i&&i.key):[]; }catch{ return []; } }
  function guardar(){ try{ localStorage.setItem(CLAVE,JSON.stringify(items)); }catch{} }
  const claveDe=p=>String(p.brand||'').trim().toLowerCase()+' / '+String(p.name||'').trim().toLowerCase();
  function fotoLigera(p){
    const url=String(p.img||'');
    if(/^data:/i.test(url)) return '';
    return typeof miniaturaElite==='function'?miniaturaElite(url):url;
  }
  function agregar(p,cantidad=1){
    const key=claveDe(p); const actual=items.find(i=>i.key===key);
    if(actual) actual.qty=Math.min(20,actual.qty+cantidad);
    else items.push({key,name:p.name,brand:p.brand,price:Number(p.price)||0,img:fotoLigera(p),ver:p.ver||'',qty:cantidad});
    guardar(); pintar(); avisar(p.name+' añadido al pedido');
  }
  function cambiar(key,delta){
    const it=items.find(i=>i.key===key); if(!it) return;
    it.qty+=delta; if(it.qty<=0) items=items.filter(i=>i!==it); else it.qty=Math.min(20,it.qty);
    guardar(); pintar();
  }
  function quitar(key){ items=items.filter(i=>i.key!==key); guardar(); pintar(); }
  function vaciar(){ items=[]; guardar(); pintar(); }
  const total=()=>items.reduce((n,i)=>n+i.price*i.qty,0);
  const unidades=()=>items.reduce((n,i)=>n+i.qty,0);
  function mensaje(){
    const lineas=items.map(i=>'• '+i.name+' de '+i.brand+(i.qty>1?' × '+i.qty:'')+' — S/ '+(i.price*i.qty));
    return 'Hola ÉLITÉ, quisiera hacer este pedido:\n'+lineas.join('\n')+'\nTotal referencial: S/ '+total()+'\n¿Me confirman presentación, disponibilidad y envío a mi distrito?';
  }
  const enlace=()=>'https://wa.me/'+TELEFONO+'?text='+encodeURIComponent(mensaje());
  let flotante,panel,aviso,temporizador;
  function montar(){
    if(flotante) return;
    flotante=document.createElement('button'); flotante.type='button'; flotante.className='carrito-flotante'; flotante.setAttribute('aria-label','Ver mi pedido'); flotante.setAttribute('aria-haspopup','dialog');
    flotante.innerHTML=iconoBolsa+'<span class="carrito-cantidad" aria-hidden="true"></span>';
    flotante.onclick=()=>{ pintar(); panel.showModal(); };
    panel=document.createElement('dialog'); panel.id='carrito'; panel.setAttribute('aria-labelledby','carritoTitulo');
    panel.innerHTML='<div class="carrito-cabecera"><div><h2 id="carritoTitulo">Mi pedido</h2><p id="carritoResumen"></p></div><button id="carritoCerrar" type="button" aria-label="Cerrar pedido">×</button></div><ul class="carrito-lista" id="carritoLista"></ul><div class="carrito-pie"><div class="carrito-total"><span>Total referencial</span><strong id="carritoTotal"></strong></div><p class="carrito-nota">El envío se confirma por WhatsApp según tu distrito. Yape y Plin.</p><a class="carrito-enviar" id="carritoEnviar" target="_blank" rel="noopener">'+iconoWa+'<span>Pedir todo por WhatsApp</span></a><button class="carrito-vaciar" id="carritoVaciar" type="button">Vaciar pedido</button></div>';
    aviso=document.createElement('div'); aviso.className='carrito-aviso'; aviso.setAttribute('role','status'); aviso.setAttribute('aria-live','polite');
    document.body.append(flotante,panel,aviso);
    panel.querySelector('#carritoCerrar').onclick=()=>panel.close();
    panel.querySelector('#carritoVaciar').onclick=()=>{ if(!items.length||confirm('¿Vaciar el pedido?')) vaciar(); };
    panel.addEventListener('click',e=>{ if(e.target===panel) panel.close(); });
    panel.querySelector('#carritoLista').addEventListener('click',e=>{
      const b=e.target.closest('button[data-accion]'); if(!b) return;
      const key=b.closest('li').dataset.key;
      if(b.dataset.accion==='mas') cambiar(key,1); else if(b.dataset.accion==='menos') cambiar(key,-1); else quitar(key);
    });
    pintar();
  }
  function pintar(){
    if(!flotante) return;
    const n=unidades();
    flotante.querySelector('.carrito-cantidad').textContent=n?String(n):'';
    flotante.setAttribute('aria-label',n?'Ver mi pedido ('+n+' '+(n===1?'perfume':'perfumes')+')':'Ver mi pedido');
    panel.querySelector('#carritoResumen').textContent=n?n+(n===1?' perfume':' perfumes')+' seleccionados':'Todavía no has añadido perfumes';
    panel.querySelector('#carritoTotal').textContent='S/ '+total();
    const enviar=panel.querySelector('#carritoEnviar'); enviar.href=items.length?enlace():'#'; enviar.setAttribute('aria-disabled',String(!items.length));
    panel.querySelector('#carritoVaciar').hidden=!items.length;
    const lista=panel.querySelector('#carritoLista');
    lista.innerHTML=items.length?items.map(i=>'<li data-key="'+sanear(i.key)+'"><div class="carrito-foto">'+(i.img?'<img src="'+sanear(i.img)+'" alt="" loading="lazy">':'')+'</div><div><h3>'+sanear(i.name)+'</h3><small>'+sanear(i.brand)+'</small><div class="precio">S/ '+(i.price*i.qty)+(i.qty>1?' <small>('+i.price+' c/u)</small>':'')+'</div></div><div><div class="carrito-cantidades" aria-label="Cantidad de '+sanear(i.name)+'"><button type="button" data-accion="menos" aria-label="Quitar uno">−</button><output>'+i.qty+'</output><button type="button" data-accion="mas" aria-label="Añadir uno">+</button></div><button type="button" class="carrito-quitar" data-accion="quitar">Quitar</button></div></li>').join(''):'<li class="carrito-vacio">Añade perfumes desde la colección o desde cada ficha y pídelos todos en un solo mensaje.<br><a href="index.html#coleccion">Ver la colección</a></li>';
    for(const b of document.querySelectorAll('.agregar-pedido[data-key]')){
      const dentro=items.some(i=>i.key===b.dataset.key);
      b.classList.toggle('anadido',dentro);
      b.querySelector('span').textContent=dentro?'En el pedido ✓':'Añadir al pedido';
    }
  }
  function avisar(texto){
    if(!aviso) return;
    aviso.textContent=texto; aviso.classList.add('visible');
    clearTimeout(temporizador); temporizador=setTimeout(()=>aviso.classList.remove('visible'),1800);
  }
  function boton(p){
    const b=document.createElement('button'); b.type='button'; b.className='agregar-pedido'; b.dataset.key=claveDe(p);
    b.innerHTML=iconoBolsa+'<span>Añadir al pedido</span>';
    b.setAttribute('aria-label','Añadir '+p.name+' de '+p.brand+' al pedido');
    b.onclick=e=>{ e.preventDefault(); e.stopPropagation(); agregar(p); };
    return b;
  }
  window.carritoElite={agregar,boton,refrescar:pintar,items:()=>items.slice()};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',montar); else montar();
})();

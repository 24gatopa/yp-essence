// ÉLITÉ — pedido múltiple. Guarda la selección en el navegador y arma un solo
// mensaje de WhatsApp con todos los perfumes elegidos.
(function(){
  const CLAVE='elite.carrito.v1', TELEFONO='51938430692';
  const sanear=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const iconoBolsa='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M9 13c.8 1.3 1.8 2 3 2s2.2-.7 3-2"/></svg>';
  const iconoWa='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4.4c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.2l-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5l-.9-2.2c-.2-.5-.5-.5-.7-.5z"/></svg>';
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

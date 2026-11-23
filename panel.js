var firebaseConfig = {
    apiKey: "AIzaSyBD3RbrQUsYtFABqIs_5Pi97DpW034ukYY",
    authDomain: "elite-114bc.firebaseapp.com",
    projectId: "elite-114bc",
    storageBucket: "elite-114bc.firebasestorage.app",
    messagingSenderId: "544878346059",
    appId: "1:544878346059:web:42f399a5174087e5f272ce"
  };
  if (!window.firebase || !firebase.firestore || !firebase.auth) {
    document.getElementById('boot').textContent = 'No se pudo conectar al panel. Comprueba tu conexión y vuelve a cargar.';
    throw new Error('Servicios del catálogo no disponibles');
  }
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth(), db = firebase.firestore();
  var COL = 'productos';
  var products = [], editingId = null, photoData = '';
  var BASEIMG = 'https://24gatopa.github.io/yp-essence/img/';
  var SEED = [
    ['9pm.png','9pm','Afnan','Oriental dulce','Hombre',139,'Manzana, Canela, Vainilla'],
    ['9am-dive.png','9AM Dive','Afnan','Acuático fresco','Hombre',149,'Marino, Cítricos, Ámbar'],
    ['khamrah.png','Khamrah','Lattafa','Oriental gourmand','Unisex',129,'Canela, Dátiles, Vainilla'],
    ['khamrah-qahwa.png','Khamrah Qahwa','Lattafa','Oriental café','Unisex',129,'Café, Cardamomo, Caramelo'],
    ['khamrah-dukhan.png','Khamrah Dukhan','Lattafa','Oriental ahumado','Unisex',139,'Incienso, Canela, Café'],
    ['asad.png','Asad','Lattafa','Amaderado afrutado','Hombre',125,'Piña, Bergamota, Ámbar gris'],
    ['asad-bourbon.png','Asad Bourbon','Lattafa','Amaderado especiado','Hombre',139,'Bourbon, Canela, Vainilla'],
    ['asad-elixir.png','Asad Elixir','Lattafa','Amaderado dulce','Hombre',149,'Piña, Ron, Vainilla'],
    ['yara.png','Yara','Lattafa','Floral dulce','Mujer',129,'Orquídea, Heliotropo, Sándalo'],
    ['yara-candy.png','Yara Candy','Lattafa','Gourmand dulce','Mujer',129,'Frutas, Caramelo, Vainilla'],
    ['yara-moi.png','Yara Moi','Lattafa','Floral frutal','Mujer',129,'Frambuesa, Jazmín, Vainilla'],
    ['yara-tous.png','Yara Tous','Lattafa','Floral frutal','Mujer',129,'Frutas, Flores, Almizcle'],
    ['oud-for-glory.png','Oud for Glory','Lattafa','Amaderado oud','Unisex',129,'Oud, Azafrán, Pachulí'],
    ['honor-glory.png','Honor & Glory','Lattafa','Amaderado ambarado','Unisex',129,'Oud, Ámbar, Especias'],
    ['bade-sublime.png',"Bade'e Al Oud Sublime",'Lattafa','Oriental oud','Unisex',129,'Oud, Rosa, Azafrán'],
    ['mandarinsky.png','Mandarin Sky','Armaf','Cítrico ámbar','Hombre',125,'Mandarina, Especias, Ámbar'],
    ['mandarinsky-elixir.png','Mandarin Sky Elixir','Armaf','Cítrico ámbar intenso','Hombre',149,'Mandarina, Canela, Ámbar'],
    ['odyssey-limoni.png','Odyssey Limoni','Armaf','Cítrico aromático','Hombre',129,'Limón, Albahaca, Almizcle'],
    ['odyssey-homme-white.png','Odyssey Homme White','Armaf','Amaderado fresco','Hombre',135,'Bergamota, Lavanda, Cedro'],
    ['hawas-ice.png','Hawas Ice','Rasasi','Acuático fresco','Hombre',149,'Menta, Cítricos, Ámbar gris'],
    ['hawas-malibu.png','Hawas Malibu','Rasasi','Acuático afrutado','Hombre',149,'Piña, Coco, Ámbar'],
    ['amber-oud-gold.png','Amber Oud Gold Edition','Al Haramain','Ambarado afrutado','Unisex',239,'Frutas, Ámbar, Almizcle'],
    ['most-wanted.png','The Most Wanted','Azzaro','Amaderado especiado','Hombre',299,'Cardamomo, Bourbon, Madera'],
    ['stronger-intensely.png','Stronger With You Intensely','Armani','Oriental vainilla','Hombre',365,'Cardamomo, Vainilla, Ámbar'],
    ['acqua-di-gio.png','Acqua di Gio','Giorgio Armani','Acuático cítrico','Hombre',449,'Marino, Bergamota, Pachulí'],
    ['le-male.png','Le Male','Jean Paul Gaultier','Aromático fougère','Hombre',479,'Lavanda, Menta, Vainilla'],
    ['le-beau.png','Le Beau','Jean Paul Gaultier','Amaderado coco','Hombre',479,'Coco, Bergamota, Haba tonka'],
    ['scandal-le-parfum.png','Scandal Le Parfum','Jean Paul Gaultier','Oriental gourmand','Mujer',399,'Miel, Caramelo, Haba tonka'],
    ['born-in-roma.png','Born in Roma Intense','Valentino','Amaderado aromático','Hombre',479,'Salvia, Vetiver, Vainilla']
  ];

  function $(id){ return document.getElementById(id); }
  function show(id){ $(id).hidden=false; } function hide(id){ $(id).hidden=true; }

  // Authorized, single-record correction from the private owner panel.
  async function corregirElixir() {
    const url = new URL(location.href);
    if (url.searchParams.get('corregir') !== 'elixir') return;
    const ref = db.collection(COL).doc('4rODfxB3tS6MKchoONWO');
    try {
      await db.runTransaction(async function(tx) {
        const snap = await tx.get(ref);
        if (!snap.exists) throw Error('No se encontró el producto.');
        const p = snap.data();
        if (p.nombre === 'Le Male Elixir' && p.marca === 'Jean Paul Gaultier' && p.fam === 'Amaderada ambarada aromática') return;
        if (p.nombre !== 'elixir' || p.marca !== 'JEAN PAUL GAULTIER' || p.fam !== p.marca) {
          throw Error('El producto ya fue editado. Revisa los campos en el panel.');
        }
        tx.update(ref, {nombre:'Le Male Elixir', marca:'Jean Paul Gaultier', fam:'Amaderada ambarada aromática'});
      });
      url.searchParams.delete('corregir');
      history.replaceState(null, '', url);
      alert('Le Male Elixir actualizado en Firestore.');
    } catch (err) { alert('No se guardó la corrección: '+err.message); }
  }
  let saving=false, unsubscribe = null;
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) $('storeLink').href = 'http://127.0.0.1:4174/';
  if (/^(www\.)?eliteperfumes\.xyz$/.test(location.hostname)) $('storeLink').href='https://eliteperfumes.xyz/';
  auth.onAuthStateChanged(function(user){
    if (unsubscribe) { unsubscribe(); unsubscribe = null; }
    hide('boot');
    if(user){ hide('login'); show('app'); listen(); corregirElixir(); }
    else { closeForm(); products=[]; $('list').replaceChildren(); hide('app'); show('login'); }
  });

  $('loginForm').addEventListener('submit', function(e){
    e.preventDefault(); $('loginErr').hidden=true;
    var email=$('email').value.trim(), pass=$('pass').value;
    var p = auth.signInWithEmailAndPassword(email, pass);
    p.catch(function(err){
      var m;
      if(err.code==='auth/invalid-credential'||err.code==='auth/wrong-password'||err.code==='auth/user-not-found') m='Correo o contraseña incorrectos.';
      else if(err.code==='auth/email-already-in-use') m='Ese correo ya tiene cuenta — toca "¿Ya tienes cuenta? Entrar".';
      else if(err.code==='auth/weak-password') m='La contraseña debe tener al menos 6 caracteres.';
      else if(err.code==='auth/unauthorized-domain') m='Dominio no autorizado (agrégalo en Authentication → Configuración → Dominios autorizados).';
      else m=err.message;
      $('loginErr').textContent=m; $('loginErr').hidden=false;
    });
  });
  $('logout').addEventListener('click', function(){ auth.signOut(); });

  function listen(){
    unsubscribe=db.collection(COL).orderBy('orden').onSnapshot(function(snap){
      products = snap.docs.map(function(d){ var o=d.data(); o.id=d.id; return o; });
      render();
    }, function(err){ $('stats').textContent='Error: '+err.message; });
  }

  function textNode(tag, value, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = value;
    return node;
  }
  function action(label, className, handler) {
    const button = textNode('button', label, className);
    button.type = 'button';
    button.onclick = handler;
    return button;
  }
  function showPhoto(container, url) {
    container.replaceChildren();
    if (!url) { container.textContent = 'Sin foto'; return; }
    const photo = new Image();
    photo.alt = ''; photo.loading='lazy'; photo.decoding='async';
    photo.onerror = () => { container.textContent='Sin foto'; };
    photo.src = url;
    container.append(photo);
  }
  function productRow(p) {
    const row = document.createElement('article');
    row.className = 'record';
    const photo = document.createElement('div'); photo.className = 'thumb';
    showPhoto(photo, p.img);
    const info = document.createElement('div');
    info.append(textNode('small',p.marca||''),textNode('h3',p.nombre),textNode('p',[p.fam,p.genero].filter(Boolean).join(' · ')));
    const states = document.createElement('div'); states.className = 'states';
    const available = p.disponible !== false;
    const stock = action(available?'Disponible':'Agotado','pill available',()=>toggleAvail(p.id));
    stock.setAttribute('aria-pressed',String(available));
    stock.setAttribute('aria-label','Disponibilidad de '+p.nombre);
    const featured = action(p.destacado?'Destacado':'Destacar','pill featured',()=>toggleFeat(p.id));
    featured.setAttribute('aria-pressed',String(!!p.destacado));
    featured.setAttribute('aria-label','Destacar '+p.nombre);
    states.append(stock,featured);
    const price = action('S/ '+p.precio,'price',()=>editPrice(p.id));
    price.setAttribute('aria-label','Cambiar precio de '+p.nombre+', S/ '+p.precio);
    const edit = action('Editar','edit',()=>openForm(p.id)); edit.setAttribute('aria-label','Editar '+p.nombre);
    row.append(photo,info,states,price,edit);
    return row;
  }
  const normalize = v => String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  function render() {
    const available = products.filter(p=>p.disponible!==false).length;
    $('totalCount').textContent=products.length;
    $('availableCount').textContent=available;
    $('featuredCount').textContent=products.filter(p=>p.destacado).length;
    $('seedBtn').hidden=products.length>0;
    const search=normalize($('buscar').value), state=$('estado').value;
    const visible=products.filter(p=>normalize([p.nombre,p.marca].join(' ')).includes(search) &&
      (!state || (state==='featured'?p.destacado:state==='available'?p.disponible!==false:p.disponible===false)));
    const sold = products.length-available;
    $('stats').textContent=(sold===1?'1 perfume agotado':sold+' perfumes agotados')+' en la colección.';
    $('list').replaceChildren(...(visible.length?visible.map(productRow):
      [textNode('p',products.length?'Ningún perfume coincide con tu búsqueda.':'Tu colección está vacía. Añade un perfume o carga la colección inicial.','empty')]));
  }
  $('buscar').addEventListener('input',render);
  $('estado').addEventListener('change',render);
  function toggleAvail(id){ var p=products.find(function(x){return x.id===id;}); if(p) db.collection(COL).doc(id).update({disponible:p.disponible===false}).catch(function(e){alert('Error: '+e.message);}); }
  function toggleFeat(id){ var p=products.find(function(x){return x.id===id;}); if(p) db.collection(COL).doc(id).update({destacado:!p.destacado}).catch(function(e){alert('Error: '+e.message);}); }
  function editPrice(id){ var p=products.find(function(x){return x.id===id;}); if(!p) return; var np=prompt('Nuevo precio (S/) para '+p.nombre+':', p.precio); if(np===null) return; np=Number(np); if(isNaN(np)||np<=0){ alert('Pon un precio válido.'); return; } db.collection(COL).doc(id).update({precio:np}).catch(function(e){alert('Error: '+e.message);}); }
  const etapas = ['salida','corazon','fondo','notas'];
  let initialGroups, initialLevels, levelsDraft, fileRead=0, photoPending=false;
  function notesIn(text) {
    const unique = new Map();
    for (const value of String(text||'').split(/[,\n]/)) {
      const name=value.trim();
      if (name && !unique.has(normalize(name))) unique.set(normalize(name),name);
    }
    return [...unique.values()];
  }
  function slugPanel(product) {
    if(!product)return "";
    const name=normalize(product.nombre),brand=normalize(product.marca);
    if(brand==="jean paul gaultier" && (name==="elixir"||name==="le male elixir")) return "le-male-elixir";
    const seed=SEED.find(s=>normalize(s[1])===name && normalize(s[2])===brand);
    return seed?seed[0].replace(/\.png$/,""):name.replace(/[^\w]+/g,"-").replace(/-$/,"");
  }
  function publishedNotes(product) {
    if (!product) return {};
    if (product.notasPersonalizadas) {
      return product.piramidePersonalizada || {notas:product.notas||[]};
    }
    const source=piramidesElite[slugPanel(product)];
    if(!source) return {notas:product.notas||[]};
    const base=SEED.find(s=>normalize(s[1])===normalize(product.nombre)&&normalize(s[2])===normalize(product.marca));
    const known=new Set([...allNotes(source),...notesIn(base?.[6])].map(normalize));
    const extras=(product.notas||[]).filter(n=>!known.has(normalize(n)));
    return {...source,notas:[...(source.notas||[]),...extras]};
  }
  function readGroups() {
    return Object.fromEntries(etapas.map(key=>[key,notesIn($('notes-'+key).value)]));
  }
  function allNotes(groups){
    return notesIn(etapas.flatMap(stage=>groups[stage]||[]).join(','));
  }
  function readLevels(names) {
    return Object.fromEntries(names.filter(n=>levelsDraft.has(normalize(n))).map(n=>[n,levelsDraft.get(normalize(n))]));
  }
  function displayLevels() {
    const names=allNotes(readGroups());
    const p=products.find(item=>item.id===editingId);
    const referencias=Object.entries(acentosElite[slugPanel(p)]?.notas||{});
    const choices=['Sin valorar','1 · Muy sutil','2 · Sutil','3 · Media','4 · Alta','5 · Dominante'];
    const rows=names.map(name=>{
      const label=textNode('label',name,'level-row'), select=document.createElement('select');
      const nivelBase=referencias.find(([key])=>normalize(key)===normalize(name))?.[1];
      choices.forEach((caption,index)=>select.add(new Option(!index && nivelBase?'Editorial · '+nivelBase+'/5':caption,index?String(index):'')));
      select.value=String(levelsDraft.get(normalize(name))||'');
      select.onchange=()=>{if(select.value)levelsDraft.set(normalize(name),Number(select.value));else levelsDraft.delete(normalize(name));};
      label.append(select);return label;
    });
    $('intensityRows').replaceChildren(...(rows.length?rows:[textNode('p','Agrega una nota para valorar su intensidad.')]));
  }
  $('noteGroups').addEventListener('input',displayLevels);
  function openForm(id) {
    const p=id?products.find(item=>item.id===id):null;
    if(id&&!p)return;
    editingId=id||null; photoData=''; fileRead++; photoPending=false;
    $('saveBtn').disabled=false; $('saveBtn').textContent='Guardar';
    $('dangerArea').hidden=!id;
    $('editForm').reset(); $('formErr').hidden=true; $('levels').open=false;
    $('modalTitle').textContent=id?'Editar perfume':'Añadir perfume';
    for (const [input,key] of [['f_name','nombre'],['f_brand','marca'],['f_fam','fam'],['f_price','precio']]) $(input).value=p?.[key]??'';
    $('f_gen').value=p?.genero||'Hombre';
    $('f_avail').checked=p?.disponible!==false; $('f_feat').checked=!!p?.destacado;
    const notes=publishedNotes(p);
    for (const key of etapas) $('notes-'+key).value=(notes[key]||[]).join(', ');
    initialGroups=readGroups();
    levelsDraft=new Map(Object.entries(p?.intensidades||{}).filter(([,n])=>Number.isInteger(n)&&n>=1&&n<=5).map(([name,n])=>[normalize(name),n]));
    initialLevels=readLevels(allNotes(initialGroups));
    displayLevels(); showPhoto($('photoPrev'),p?.img);
    $('modal').showModal(); $('modal').querySelector('.edit-body').scrollTop=0;
  }
  function closeForm(){ if($('modal').open && !saving) $('modal').close(); }

  $('modal').addEventListener('cancel',e=>{if(saving)e.preventDefault();});
  $('f_photo').addEventListener('change', function(e) {
    const file=e.target.files[0], ticket=++fileRead;
    if(!file)return;
    photoPending=true; $('saveBtn').disabled=true;
    const reader=new FileReader(), photo=new Image();
    function done(error) {
      if(ticket!==fileRead)return;
      photoPending=false; $('saveBtn').disabled=false;
      if(error){$('formErr').textContent='Elige otra imagen. No pudimos abrir esa fotografía.';$('formErr').hidden=false;}
    }
    reader.onerror=photo.onerror=()=>done(true);
    photo.onload=()=>{
      if(ticket!==fileRead)return;
      try {
        const factor=Math.min(1,640/Math.max(photo.width,photo.height));
        const canvas=document.createElement('canvas');
        canvas.width=Math.max(1,Math.round(photo.width*factor));canvas.height=Math.max(1,Math.round(photo.height*factor));
        canvas.getContext('2d').drawImage(photo,0,0,canvas.width,canvas.height);
        photoData=canvas.toDataURL('image/webp',.82);showPhoto($('photoPrev'),photoData);done();
      } catch {done(true);}
    };
    reader.onload=()=>{photo.src=reader.result;};reader.readAsDataURL(file);
  });
  $('editForm').addEventListener('submit',async function(e) {
    e.preventDefault();if(saving||photoPending)return;
    const groups=readGroups(),names=allNotes(groups),intensidades=readLevels(names);
    const name=$('f_name').value.trim(),price=$('f_price').valueAsNumber;
    if(!name||!Number.isFinite(price)||price<=0){$('formErr').textContent='Completa el nombre y un precio mayor que cero.';$('formErr').hidden=false;return;}
    saving=true;$('saveBtn').disabled=true;$('saveBtn').textContent='Guardando…';$('formErr').hidden=true;
    const data={nombre:name,marca:$('f_brand').value.trim(),fam:$('f_fam').value.trim(),genero:$('f_gen').value,precio:price,disponible:$('f_avail').checked,destacado:$('f_feat').checked};
    const changed=JSON.stringify(groups)!==JSON.stringify(initialGroups);
    if(changed||!editingId) {
      data.notas=names;
      if(changed) {data.notasPersonalizadas=true;data.piramidePersonalizada=groups;}
    }
    if(changed||!editingId||JSON.stringify(initialLevels)!==JSON.stringify(intensidades))data.intensidades=intensidades;
    if(photoData)data.img=photoData;
    try{
      if(editingId) await db.collection(COL).doc(editingId).update(data);
      else await db.collection(COL).add({...data,img:data.img||'',orden:Date.now(),creado:firebase.firestore.FieldValue.serverTimestamp()});
      $('modal').close();
    } catch(err){$('formErr').textContent='No se pudo guardar. '+err.message;$('formErr').hidden=false;}
    finally{saving=false;$('saveBtn').disabled=false;$('saveBtn').textContent='Guardar';}
  });
  function del(id){ if(confirm('¿Borrar este perfume?')) db.collection(COL).doc(id).delete().then(closeForm).catch(function(e){alert('Error: '+e.message);}); }

  function seed(){
    if(!confirm('¿Cargar los 29 perfumes iniciales?')) return;
    $('seedBtn').disabled=true; $('seedBtn').textContent='Cargando…';
    var batch=db.batch();
    SEED.forEach(function(s,i){
      var ref=db.collection(COL).doc();
      batch.set(ref,{ nombre:s[1], marca:s[2], fam:s[3], genero:s[4], precio:s[5],
        notas:s[6].split(',').map(function(x){return x.trim();}), img:BASEIMG+s[0],
        disponible:true, destacado:false, orden:i, creado:firebase.firestore.FieldValue.serverTimestamp() });
    });
    batch.commit().then(function(){ $('seedBtn').hidden=true; }).catch(function(err){ alert('Error al cargar: '+err.message); })
      .finally(function(){ $('seedBtn').disabled=false; $('seedBtn').textContent='Cargar los 29 iniciales'; });
  }

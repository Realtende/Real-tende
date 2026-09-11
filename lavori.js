const workPhotos={
 'Portoni, cancelli e grate':[
 {src:'cancello-luxury.png',title:'Cancello decorativo — ambientazione luxury elaborata dalla foto del lavoro'},
 {src:'recinzione-luxury.png',title:'Recinzione decorativa — ambientazione luxury elaborata dalla foto del lavoro'}],
 'Pergole e outdoor':[
 {src:'lavoro-pergola-luci.jpeg',title:'Pergola illuminata al tramonto',rotate:true},
 {src:'pergola-giardino.jpeg',title:'Pergola in giardino'},
 {src:'pergola-mare.jpeg',title:'Pergole affacciate sul mare'}],
 'Vetrate panoramiche':[{src:'pergola-sera.jpeg',title:'Spazio esterno con vetrate'}],
 'Pavimenti in legno e pedane':[{src:'piscina.jpeg',title:'Pedana a bordo piscina'}]
};
const workDialog=document.createElement('dialog');workDialog.className='work-dialog';workDialog.setAttribute('aria-labelledby','work-title');workDialog.innerHTML='<div class="work-heading"><div><span class="eyebrow">GALLERIA REAL TENDE</span><h2 id="work-title"></h2></div><button type="button" class="work-close">Chiudi</button></div><div class="work-content"></div><a class="button work-request" href="#contatti">Richiedi informazioni</a>';document.body.append(workDialog);
workDialog.querySelector('.work-close').onclick=()=>workDialog.close();workDialog.addEventListener('click',e=>{if(e.target===workDialog)workDialog.close()});workDialog.querySelector('.work-request').onclick=()=>{document.querySelector('#interest').value=workDialog.dataset.product;workDialog.close()};
function openWork(title){workDialog.dataset.product=title;document.querySelector('#work-title').textContent=title;const content=workDialog.querySelector('.work-content');content.replaceChildren();const photos=workPhotos[title]||[];if(!photos.length){const note=document.createElement('p');note.textContent='La galleria dei lavori per questa soluzione è in aggiornamento. Scrivici per informazioni sul tuo progetto.';content.append(note)}photos.forEach(photo=>{const figure=document.createElement('figure');const wrap=document.createElement('div');wrap.className=photo.rotate?'rotated-media':'work-image';const img=document.createElement('img');img.src=photo.src;img.alt=photo.title;img.loading='lazy';wrap.append(img);const caption=document.createElement('figcaption');caption.textContent=photo.title;figure.append(wrap,caption);content.append(figure)});workDialog.showModal()}
document.querySelectorAll('.product').forEach(card=>{const title=card.querySelector('h3').textContent;const visual=card.querySelector('.product-visual');const button=document.createElement('button');button.type='button';button.className='work-cover';button.setAttribute('aria-label','Apri galleria: '+title);visual.before(button);button.append(visual);const badge=document.createElement('span');badge.className='work-badge';badge.textContent=(workPhotos[title]||[]).length?'Guarda i lavori':'Esplora la soluzione';button.append(badge);button.onclick=()=>openWork(title)});


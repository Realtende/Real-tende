const whatsappContacts=[['393491287740','349 128 7740'],['393519114911','351 911 4911']];
function whatsappLink(number,label,message){
 const link=document.createElement('a');
 link.className='btn whatsapp-link';
 link.href='https://wa.me/'+number+'?text='+encodeURIComponent(message);
 link.target='_blank';link.rel='noopener noreferrer';
 link.textContent='WhatsApp · '+label+' ↗';
 return link;
}
const whatsappBox=document.createElement('div');whatsappBox.className='whatsapp-contacts';
const whatsappTitle=document.createElement('p');whatsappTitle.textContent='Scrivici su WhatsApp';whatsappBox.append(whatsappTitle);
whatsappContacts.forEach(([number,label])=>whatsappBox.append(whatsappLink(number,label,'Buongiorno Real Tende, vorrei informazioni per un progetto.')));
document.querySelector('.phone-contacts').after(whatsappBox);
const requestWhatsapp=document.createElement('div');requestWhatsapp.className='whatsapp-contacts';
const requestWhatsappTitle=document.createElement('p');requestWhatsappTitle.textContent='Oppure invia la richiesta su WhatsApp:';requestWhatsapp.append(requestWhatsappTitle);
const requestWhatsappLinks=whatsappContacts.map(([number,label])=>{const link=whatsappLink(number,label,'');requestWhatsapp.append(link);return link});
document.querySelector('#result').append(requestWhatsapp);
document.querySelector('#request').addEventListener('submit',()=>{
 const message=document.querySelector('#request-text').value;
 requestWhatsappLinks.forEach((link,i)=>link.href='https://wa.me/'+whatsappContacts[i][0]+'?text='+encodeURIComponent(message));
 document.querySelector('#result [role="status"]').textContent='La richiesta è pronta. Scegli email o uno dei due contatti WhatsApp, poi conferma l’invio nell’app.';
});

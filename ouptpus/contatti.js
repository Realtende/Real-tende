const emailAddress='realtende8@gmail.com';
const emailContact=document.createElement('a');
emailContact.href='mailto:'+emailAddress;
emailContact.className='email-contact';
emailContact.textContent=emailAddress+' ↗';
document.querySelector('.phone-contacts').append(emailContact);
document.querySelector('.phone-contacts>span').textContent='CONTATTA REAL TENDE';
document.querySelector('.contact>div>.form-note').textContent='Compila il modulo per preparare la richiesta, poi aprila nella tua app di posta e conferma l’invio.';
const emailButton=document.createElement('a');
emailButton.className='btn';emailButton.id='email-request';
emailButton.href='mailto:'+emailAddress;
emailButton.textContent='Apri email per inviare ↗';
document.querySelector('#result').append(emailButton);
document.querySelector('#result [role="status"]').textContent='La richiesta è pronta. Apri la tua app di posta per inviarla a '+emailAddress+'. Puoi anche copiare il testo qui sopra.';
document.querySelector('#request').addEventListener('submit',()=>{
 emailButton.href='mailto:'+emailAddress+'?subject='+encodeURIComponent('Richiesta di preventivo — Real Tende')+'&body='+encodeURIComponent(document.querySelector('#request-text').value);
});

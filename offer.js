(()=>{'use strict';
  const complete=window.STORE_CONFIG?.plans?.complete||{};
  const link=document.querySelector('[data-checkout="complete"]');
  const status=document.querySelector('#sales-state');
  const paymentNote=document.querySelector('#payment-note');
  document.querySelectorAll('[data-price="complete"]').forEach(e=>e.textContent=complete.price||'27,99');
  document.querySelectorAll('[data-regular-price]').forEach(e=>e.textContent=complete.regularPrice||'37,99');
  paymentNote.textContent=complete.serviceFee?`Pagamento único. + R$ ${complete.serviceFee} de taxa de serviço no checkout.`:'Pagamento único.';
  let usable=false;
  try{usable=new URL(complete.checkoutUrl).protocol==='https:';}catch{}
  if(usable){
    link.href=complete.checkoutUrl;
    link.removeAttribute('aria-disabled');link.removeAttribute('role');link.removeAttribute('tabindex');
    status.textContent='Conclua sua compra no checkout.';
  }else{
    link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.setAttribute('role','link');link.tabIndex=0;
    status.textContent='Compras em breve.';
  }
  link.addEventListener('click',e=>{if(link.getAttribute('aria-disabled')==='true')e.preventDefault();});
})();

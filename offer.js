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
    const checkout=new URL(complete.checkoutUrl);
    const incoming=new URLSearchParams(window.location.search);
    // Preserve campaign attribution while excluding unrelated or personal query fields.
    for(const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_id','utm_source_platform','fbclid','src','sck']){
      const value=incoming.get(key);
      if(value)checkout.searchParams.set(key,value);
    }
    link.href=checkout.href;
    link.removeAttribute('aria-disabled');link.removeAttribute('role');link.removeAttribute('tabindex');
    status.textContent='Conclua sua compra no checkout.';
  }else{
    link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.setAttribute('role','link');link.tabIndex=0;
    status.textContent='Compras em breve.';
  }
  link.addEventListener('click',e=>{if(link.getAttribute('aria-disabled')==='true')e.preventDefault();});
})();

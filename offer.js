(()=>{'use strict';
  const plans=window.STORE_CONFIG?.plans||{};
  const complete=plans.complete||{};
  const key='pintasurpresa:complete-offer:v1';
  const duration=49*60*1000;
  const clock=document.querySelector('#offer-clock');
  const countdown=document.querySelector('#offer-countdown');
  const original=document.querySelector('#original-price');
  const ended=document.querySelector('#offer-ended');
  let deadline=0,storageReady=false,lastActive;
  try{
    const saved=Number(sessionStorage.getItem(key));
    const navigation=performance.getEntriesByType('navigation')[0]?.type;
    const now=Date.now();
    // A fresh navigation starts a visit; reload and history keep its deadline.
    deadline=navigation==='navigate'||!Number.isFinite(saved)||saved<=0||saved>now+duration
      ?now+duration:saved;
    sessionStorage.setItem(key,String(deadline));
    storageReady=true;
  }catch{ /* Without persistence, do not advertise a deadline that reload resets. */ }
  const setPrice=(name,value)=>document.querySelectorAll(`[data-price="${name}"]`).forEach(e=>e.textContent=value);
  function configureLink(name,url){
    const link=document.querySelector(`[data-checkout="${name}"]`);
    const status=document.querySelector(name==='normal'?'#sales-state-normal':'#sales-state');
    let usable=false;
    try{usable=new URL(url).protocol==='https:';}catch{}
    if(usable){link.href=url;link.removeAttribute('aria-disabled');link.removeAttribute('role');link.removeAttribute('tabindex');status.textContent='Pagamento único.';}
    else{link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.setAttribute('role','link');link.tabIndex=0;status.textContent='Compras em breve.';}
  }
  document.querySelectorAll('[data-checkout]').forEach(a=>a.addEventListener('click',e=>{if(a.getAttribute('aria-disabled')==='true')e.preventDefault();}));
  setPrice('normal',plans.normal?.price||'14,90');
  configureLink('normal',plans.normal?.checkoutUrl);
  document.querySelectorAll('[data-regular-price]').forEach(e=>e.textContent=complete.regularPrice||'37,99');
  function update(){
    const remaining=storageReady?Math.max(0,Math.ceil((deadline-Date.now())/1000)):0;
    const active=remaining>0;
    if(active)clock.textContent=`${String(Math.floor(remaining/60)).padStart(2,'0')}:${String(remaining%60).padStart(2,'0')}`;
    if(active===lastActive)return;
    lastActive=active;
    original.hidden=!active;
    countdown.hidden=!active;
    ended.hidden=active;
    ended.textContent=storageReady?'Oferta desta visita encerrada. Valor regular aplicado.':'Valor regular. Oferta por visita indisponível neste navegador.';
    setPrice('complete',active?(complete.price||'27,99'):(complete.regularPrice||'37,99'));
    configureLink('complete',active?complete.checkoutUrl:complete.regularCheckoutUrl);
  }
  update();
  setInterval(update,1000);
  document.addEventListener('visibilitychange',update);
  window.addEventListener('pageshow',update);
})();

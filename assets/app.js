(()=>{
  'use strict';
  const prevent=e=>e.preventDefault();
  document.addEventListener('contextmenu',prevent,{passive:false});
  document.addEventListener('copy',prevent,{passive:false});
  document.addEventListener('cut',prevent,{passive:false});
  document.addEventListener('dragstart',prevent,{passive:false});
  document.addEventListener('selectstart',prevent,{passive:false});
  document.addEventListener('keydown',e=>{
    const k=e.key.toLowerCase();
    if((e.ctrlKey||e.metaKey)&&['c','s','u','p','a'].includes(k)) e.preventDefault();
    if((e.ctrlKey||e.metaKey)&&['+','-','=','0'].includes(k)) e.preventDefault();
  },{passive:false});
  document.addEventListener('wheel',e=>{if(e.ctrlKey)e.preventDefault()},{passive:false});
  ['gesturestart','gesturechange','gestureend'].forEach(ev=>document.addEventListener(ev,prevent,{passive:false}));
  let lastTouch=0;
  document.addEventListener('touchend',e=>{const now=Date.now();if(now-lastTouch<=300)e.preventDefault();lastTouch=now},{passive:false});
  document.querySelectorAll('[style*="data:image"],.brand-logo,.core-logo,.footer-logo').forEach(el=>{
    el.addEventListener('contextmenu',prevent);el.addEventListener('dragstart',prevent);
  });
  const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const bar=document.getElementById('progress');
  const setProgress=()=>{const h=document.documentElement;const d=h.scrollHeight-h.clientHeight;bar.style.width=(d?Math.min(100,(h.scrollTop/d)*100):0)+'%'};
  addEventListener('scroll',setProgress,{passive:true});setProgress();
})();
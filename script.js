(function(){
var root=document.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var tb=document.querySelector('.theme');
if(tb)tb.addEventListener('click',function(){
var cur=root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
var nx=cur==='dark'?'light':'dark';root.dataset.theme=nx;
try{localStorage.setItem('theme',nx)}catch(e){}});
document.querySelectorAll('.codebar button').forEach(function(b){b.addEventListener('click',function(){
var t=b.closest('.code').querySelector('code').innerText;
if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){b.textContent='Copiado';setTimeout(function(){b.textContent='Copiar'},1500)})})});
var cs=document.querySelectorAll('[data-count]');
function run(el){var end=+el.dataset.count,t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);el.textContent='+'+Math.round(end*p);if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if(rm||!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')});cs.forEach(function(e){e.textContent='+'+e.dataset.count});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(run);io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(function(e){io.observe(e)});
})();

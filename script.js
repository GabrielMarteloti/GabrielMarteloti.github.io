document.querySelectorAll('.codebar button').forEach(function(b){
b.addEventListener('click',function(){
var t=b.closest('.code').querySelector('code').innerText;
var ok=function(){b.textContent='Copiado';setTimeout(function(){b.textContent='Copiar'},1500)};
if(navigator.clipboard){navigator.clipboard.writeText(t).then(ok)}
});});

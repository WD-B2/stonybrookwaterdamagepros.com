(function(){
var d=document,de=d.documentElement;
de.classList.add('js');
var hb=d.getElementById('hamburger'),dr=d.getElementById('drawer'),ov=d.getElementById('overlay'),cl=d.getElementById('drawer-close');
function openD(){dr.hidden=false;void dr.offsetWidth;ov.classList.add('visible');hb.setAttribute('aria-expanded','true');de.style.overflow='hidden';}
function closeD(){dr.hidden=true;ov.classList.remove('visible');hb.setAttribute('aria-expanded','false');de.style.overflow='';}
if(hb&&dr){hb.addEventListener('click',function(){dr.hidden?openD():closeD();});
if(ov)ov.addEventListener('click',closeD);if(cl)cl.addEventListener('click',closeD);
dr.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeD);});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!dr.hidden)closeD();});
window.addEventListener('resize',function(){if(window.innerWidth>768&&!dr.hidden)closeD();});}
d.querySelectorAll('.drawer-toggle').forEach(function(b){b.addEventListener('click',function(){var s=d.getElementById(b.getAttribute('aria-controls'));var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));s.hidden=o;});});
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var it=q.closest('.faq-item'),a=it.querySelector('.faq-a');var open=it.classList.toggle('open');q.setAttribute('aria-expanded',String(open));});});
var fab=d.querySelector('.fab'),ft=d.querySelector('.site-footer');
if(fab&&ft&&'IntersectionObserver' in window){new IntersectionObserver(function(e){fab.classList.toggle('hide',e[0].isIntersecting);}).observe(ft);}
})();

(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}})}
var t=document.querySelector('.topbar');addEventListener('scroll',function(){t&&t.classList.toggle('scrolled',scrollY>20)});
var els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e,i){e.style.transitionDelay=(i%4)*160+'ms';io.observe(e)})})();
(function(){var f=document.getElementById('contact-form');if(!f)return;var err=f.querySelector('.ferr'),btn=f.querySelector('button');
f.addEventListener('submit',function(e){e.preventDefault();err.textContent='';
if(!f.checkValidity()){var bad=f.querySelector(':invalid');err.textContent='Please complete the '+(bad.labels&&bad.labels[0]?bad.labels[0].textContent.replace('(optional)','').trim().toLowerCase():'required')+' field.';bad.focus();return}
if(f._honey&&f._honey.value)return;
var data={};new FormData(f).forEach(function(v,k){data[k]=v});btn.disabled=true;btn.textContent='Sending';
fetch(f.action,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)}).then(function(r){return r.json()}).then(function(j){
if(j.success===true||j.success==='true'){f.hidden=true;var t=document.getElementById('cf-thanks');t.hidden=false;t.focus()}else throw 0}).catch(function(){err.innerHTML='Sorry, your message could not be sent. Please email <a href="mailto:val.khazin@summitstone-llc.com">val.khazin@summitstone-llc.com</a>.';btn.disabled=false;btn.textContent='Send Message'})})})();

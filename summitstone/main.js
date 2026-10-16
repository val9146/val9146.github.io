(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}})}
var t=document.querySelector('.topbar');addEventListener('scroll',function(){t&&t.classList.toggle('scrolled',scrollY>20)});
var els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e,i){e.style.transitionDelay=(i%4)*160+'ms';io.observe(e)})})();

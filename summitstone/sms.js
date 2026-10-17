(function(){var f=document.getElementById('sms-form');if(!f)return;var err=f.querySelector('.ferr'),btn=f.querySelector('.fsubmit'),txt=btn.querySelector('.btxt'),cb=f.querySelector('#sf-consent');
var fields=f.querySelectorAll('.fl input');
function check(el){var bad=!el.checkValidity();el.closest('.fl').classList.toggle('invalid',bad);el.setAttribute('aria-invalid',bad);return !bad}
fields.forEach(function(el){el.addEventListener('input',function(){if(el.closest('.fl').classList.contains('invalid'))check(el)})});
cb.addEventListener('change',function(){cb.closest('.chk').classList.remove('invalid')});
f.addEventListener('submit',function(e){e.preventDefault();err.textContent='';var ok=true,first=null;
fields.forEach(function(el){if(!check(el)){ok=false;first=first||el}});
if(!ok){err.textContent='Please correct the highlighted fields.';first.focus();return}
if(!cb.checked){cb.closest('.chk').classList.add('invalid');err.textContent='To sign up for text messages, please check the consent box.';cb.focus();return}
if(f._honey&&f._honey.value)return;
var data={};new FormData(f).forEach(function(v,k){data[k]=v});data.consent_page=location.href;data.consent_time=new Date().toString();
btn.disabled=true;btn.classList.add('loading');txt.textContent='Sending';
fetch(f.action,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)}).then(function(r){return r.json()}).then(function(j){
if(j.success===true||j.success==='true'){f.hidden=true;var t=document.getElementById('sf-thanks');t.hidden=false;t.focus()}else throw 0}).catch(function(){err.innerHTML='Sorry, your request could not be sent. Please email <a href="mailto:val.khazin@summitstone-llc.com">val.khazin@summitstone-llc.com</a>.';btn.disabled=false;btn.classList.remove('loading');txt.textContent='Sign Up for Texts'})})})();

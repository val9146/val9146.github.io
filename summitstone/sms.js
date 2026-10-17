(function(){var f=document.getElementById('sms-form');if(!f)return;var err=f.querySelector('.ferr'),btn=f.querySelector('.fsubmit'),txt=btn.querySelector('.btxt'),cb=f.querySelector('#sf-consent'),wrap=f.querySelector('#sf-consent-wrap'),sel=f.querySelector('#sf-choice');
var fields=f.querySelectorAll('.fl input,.fl select');
function optin(){return sel.value==='Opt in to text messages'}
function check(el){var bad=!el.checkValidity();el.closest('.fl').classList.toggle('invalid',bad);el.setAttribute('aria-invalid',bad);return !bad}
fields.forEach(function(el){el.addEventListener('input',function(){if(el.closest('.fl').classList.contains('invalid'))check(el)})});
sel.addEventListener('change',function(){wrap.hidden=!optin();cb.required=optin();if(!optin())cb.checked=false;check(sel)});
cb.addEventListener('change',function(){wrap.classList.remove('invalid')});
f.addEventListener('submit',function(e){e.preventDefault();err.textContent='';var ok=true,first=null;
fields.forEach(function(el){if(!check(el)){ok=false;first=first||el}});
if(!ok){err.textContent='Please correct the highlighted fields.';first.focus();return}
if(optin()&&!cb.checked){wrap.classList.add('invalid');err.textContent='To opt in, please check the consent box.';cb.focus();return}
if(f._honey&&f._honey.value)return;
var data={};new FormData(f).forEach(function(v,k){data[k]=v});data.submitted_from=location.href;data.submitted_at=new Date().toString();
btn.disabled=true;btn.classList.add('loading');txt.textContent='Sending';
fetch(f.action,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)}).then(function(r){return r.json()}).then(function(j){
if(j.success===true||j.success==='true'){document.getElementById('sf-thanks-msg').textContent=optin()?'Your opt-in request has been received by SummitStone LLC. You can reply STOP at any time to opt out.':'Your opt-out request has been received by SummitStone LLC. You will no longer receive text messages from us.';f.hidden=true;var t=document.getElementById('sf-thanks');t.hidden=false;t.focus()}else throw 0}).catch(function(){err.innerHTML='Sorry, your request could not be sent. Please email <a href="mailto:val.khazin@summitstone-llc.com">val.khazin@summitstone-llc.com</a>.';btn.disabled=false;btn.classList.remove('loading');txt.textContent='Submit'})})})();

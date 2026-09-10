(function(){
const root=document.querySelector('#classroom-root'),plans=window.MatematikONClassroomPlans||{},id=new URLSearchParams(location.search).get('id'),plan=plans[id];
let current=0;
const tr=(value,script)=>Array.isArray(value)?value[script==='latn'?0:1]:value;
const labels={latn:{back:'← Nazad na lekciju',area:'Pregled oblasti',goals:'Ciljevi časa',minutes:'min',stage:'Deo',previous:'← Prethodno',next:'Sledeće →',finish:'Završi čas',projector:'Prikaz za projektor',exit:'Izađi iz prikaza'},cyrl:{back:'← Назад на лекцију',area:'Преглед области',goals:'Циљеви часа',minutes:'мин',stage:'Део',previous:'← Претходно',next:'Следеће →',finish:'Заврши час',projector:'Приказ за пројектор',exit:'Изађи из приказа'}};
function script(){return window.getSiteScript?window.getSiteScript():'cyrl'}
function areaUrl(){return `/oblast.html?oblast=${encodeURIComponent(plan.area)}`}
function lessonUrl(){return `/lekcija.html?id=${encodeURIComponent(id)}`}
function render(){
 const s=script(),l=labels[s];
 if(!plan){root.innerHTML=`<section class="classroom-error"><h1>${s==='latn'?'Čas nije pronađen':'Час није пронађен'}</h1><a href="/">${s==='latn'?'Početna':'Почетна'}</a></section>`;return}
 const item=plan.stages[current],percent=Math.round((current+1)/plan.stages.length*100);
 root.innerHTML=`<section class="classroom-shell"><div class="classroom-top"><div><a href="${lessonUrl()}" class="class-back">${l.back}</a><p>${l.stage} ${current+1} / ${plan.stages.length} · ${item.duration} ${l.minutes}</p><h1>${tr(plan.title,s)}</h1></div><div class="classroom-actions"><a href="${areaUrl()}">${l.area}</a><button type="button" data-fullscreen>${document.fullscreenElement?l.exit:l.projector}</button></div></div><div class="classroom-progress" aria-label="${percent}%"><i style="width:${percent}%"></i></div><div class="classroom-layout"><aside><h2>${l.goals}</h2><ul>${tr(plan.goals,s).map(x=>`<li>${x}</li>`).join('')}</ul><nav class="stage-list" aria-label="${l.stage}">${plan.stages.map((x,i)=>`<button type="button" data-stage="${i}" class="${i===current?'active':''}"><b>${i+1}</b><span>${tr(x.label,s)}<small>${x.duration} ${l.minutes}</small></span></button>`).join('')}</nav></aside><article class="classroom-card"><header><span>${current+1}</span><div><small>${item.duration} ${l.minutes}</small><h2>${tr(item.label,s)}</h2></div></header><div class="classroom-content">${tr(item.content,s)}</div><footer><button type="button" data-prev ${current===0?'disabled':''}>${l.previous}</button><button type="button" class="primary" data-next>${current===plan.stages.length-1?l.finish:l.next}</button></footer></article></div></section>`;
 root.querySelectorAll('.class-answer summary').forEach(el=>el.textContent=s==='latn'?el.dataset.lat:el.dataset.cyrl);
 bind();document.title=`${tr(plan.title,s)} — MatematikON`;
}
function bind(){root.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>{current=+b.dataset.stage;render()}));root.querySelector('[data-prev]')?.addEventListener('click',()=>{if(current>0){current--;render()}});root.querySelector('[data-next]')?.addEventListener('click',()=>{if(current<plan.stages.length-1){current++;render()}else location.href=lessonUrl()});root.querySelector('[data-fullscreen]')?.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch(e){}render()})}
window.renderRouteText=render;document.addEventListener('fullscreenchange',render);document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&plan&&current<plan.stages.length-1){current++;render()}if(e.key==='ArrowLeft'&&current>0){current--;render()}});render();
})();

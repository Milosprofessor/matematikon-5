(function(){
const L=(latn,cyrl)=>[latn,cyrl];
function signature(value){const text=JSON.stringify(value);let number=0;for(let i=0;i<text.length;i++)number=(number*31+text.charCodeAt(i))>>>0;return number}
function rotated(items,value){if(!items.length)return items;const shift=signature(value)%items.length;return items.slice(shift).concat(items.slice(0,shift))}
function baseQuestion(base,variant){return Object.assign({kind:base.kind},base.make(variant))}
function labelFor(value,unit=''){const text=String(value).replace('.',',')+(unit?' '+unit:'');return L(text,text)}
function rounded(value){return Math.round(value*1000)/1000}
function numberDistractors(answer,variant){const value=Number(answer),whole=Number.isInteger(value),step=whole?Math.max(1,Math.min(10,Math.round(Math.abs(value)*.1)||1)):Math.max(.1,Math.min(1,Math.abs(value)*.1)),first=rounded(value+step),second=rounded(value-step<0?value+2*step:value-step);return signature(variant)%2?[first,second]:[second,first]}
function chooseAnswerType(base){return{id:base.id+'--izbor-odgovora',sourceTypeId:base.id,typeKind:'answer-choice',level:base.level,topic:base.topic,kind:'choice',variants:base.variants,make(variant){const question=baseQuestion(base,variant),values=[question.answer,...numberDistractors(question.answer,variant)];return{prompt:question.prompt,answer:String(question.answer),choices:rotated(values.map(value=>({value:String(value),label:labelFor(value,question.unit)})),variant),hint:question.hint,steps:question.steps,diagram:question.diagram}}}}
for(const config of Object.values(window.MatematikONPracticeAreas||{})){const originals=config.templates.filter(template=>!template.sourceTypeId),extra=[];for(const base of originals)if(base.kind==='number')extra.push(chooseAnswerType(base));config.templates.push(...extra);config.structure='oblast > lekcija > nivo > tip > varijanta'}
})();

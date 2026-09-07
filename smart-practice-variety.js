(function(){
const L=(latn,cyrl)=>[latn,cyrl];
const pick=(pair,index)=>pair?.[index]||'';
const choice=(value,latn,cyrl)=>({value,label:L(latn,cyrl)});

function signature(value){
 const text=JSON.stringify(value);let number=0;
 for(let i=0;i<text.length;i++)number=(number*31+text.charCodeAt(i))>>>0;
 return number;
}
function rotated(items,value){
 if(!items.length)return items;
 const shift=signature(value)%items.length;
 return items.slice(shift).concat(items.slice(0,shift));
}
function baseQuestion(base,variant){return Object.assign({kind:base.kind},base.make(variant))}
function answerOption(question){return question.choices?.find(item=>String(item.value)===String(question.answer))}
function labelFor(value,unit=''){const text=String(value)+(unit?' '+unit:'');return L(text,text)}
function rounded(value){return Math.round(value*1000)/1000}
function numberDistractors(answer,variant){
 const value=Number(answer),whole=Number.isInteger(value),step=whole?Math.max(1,Math.min(10,Math.round(Math.abs(value)*.1)||1)):Math.max(.1,Math.min(1,Math.abs(value)*.1));
 const first=rounded(value+step),second=rounded(value-step<0?value+2*step:value-step);
 return signature(variant)%2?[first,second]:[second,first];
}
function wrongChoice(question,variant){
 const options=question.choices.filter(item=>String(item.value)!==String(question.answer));
 return options[signature(variant)%options.length];
}

function chooseAnswerType(base){return{
 id:base.id+'--izbor-odgovora',sourceTypeId:base.id,typeKind:'answer-choice',level:base.level,topic:base.topic,kind:'choice',variants:base.variants,
 make(variant){
  const question=baseQuestion(base,variant),values=[question.answer,...numberDistractors(question.answer,variant)];
  return{prompt:question.prompt,answer:String(question.answer),choices:rotated(values.map(value=>({value:String(value),label:labelFor(value,question.unit)})),variant),hint:question.hint,steps:question.steps,diagram:question.diagram};
 }
}}

function checkAnswerType(base){return{
 id:base.id+'--proveri-odgovor',sourceTypeId:base.id,typeKind:'quick-check',level:base.level,topic:base.topic,kind:'choice',variants:base.variants,
 make(variant){
  const question=baseQuestion(base,variant),correct=signature(variant)%2===0;
  const proposed=correct?(question.kind==='choice'?answerOption(question):{label:labelFor(question.answer,question.unit)}):(question.kind==='choice'?wrongChoice(question,variant):{label:labelFor(numberDistractors(question.answer,variant)[0],question.unit)});
  return{
   prompt:L(`${pick(question.prompt,0)}<br><b>Učenik bira „${pick(proposed.label,0)}“. Da li je u pravu?</b>`,`${pick(question.prompt,1)}<br><b>Ученик бира „${pick(proposed.label,1)}“. Да ли је у праву?</b>`),
   answer:correct?'yes':'no',
   choices:rotated([choice('yes','Da','Да'),choice('no','Ne','Не')],variant),
   hint:L(`${pick(question.hint,0)} Proveri ponuđeni odgovor.`,`${pick(question.hint,1)} Провери понуђени одговор.`),
   steps:[...question.steps,L(correct?'Ponuđeni odgovor je tačan.':'Ponuđeni odgovor nije tačan.',correct?'Понуђени одговор је тачан.':'Понуђени одговор није тачан.')],
   diagram:question.diagram
  };
 }
}}

for(const config of Object.values(window.MatematikONPracticeAreas||{})){
 const originals=config.templates.filter(template=>!template.sourceTypeId),extra=[];
 for(const base of originals){
  if(base.kind==='number')extra.push(chooseAnswerType(base));
  extra.push(checkAnswerType(base));
 }
 config.templates.push(...extra);
 config.structure='oblast > lekcija > nivo > tip > varijanta';
}
})();

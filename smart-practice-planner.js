(function(){
function shuffled(items,random=Math.random){
 const copy=[...items];
 for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}
 return copy;
}
function sourceId(template){return template.sourceTypeId||template.id}
function recentTypeOrder(history=[]){
 const seen=new Set(),result=[];
 for(const item of history)if(!seen.has(item.templateId)){seen.add(item.templateId);result.push(item.templateId)}
 return result;
}
function chooseVariant(template,history,usedKeys,random=Math.random){
 const recentIndex=new Map();
 history.slice(0,80).forEach((item,index)=>{const key=item.contentKey||item.key;if(!recentIndex.has(key))recentIndex.set(key,index)});
 const score=index=>{const position=recentIndex.get(sourceId(template)+':'+index);return position===undefined?0:Math.max(1,500-position*5)};
 const available=shuffled(template.variants.map((_,index)=>index),random).filter(index=>!usedKeys.has(template.id+':'+index)&&!usedKeys.has(sourceId(template)+':'+index));
 return available.sort((a,b)=>score(a)-score(b))[0]??0;
}
function chooseTemplate(pool,{usedTypes=new Set(),usedSources=new Set(),usedKeys=new Set(),recentTypes=[],recentContent=new Set(),topicCounts={},lastSource='',preferredTopics=null,random=Math.random}={}){
 const recentIndex=new Map(recentTypes.map((id,index)=>[id,index]));
 const ranked=pool.map(template=>{
  const source=sourceId(template);
  const repeatedType=usedTypes.has(template.id)?10000:0;
  const repeatedSource=usedSources.has(source)?900:0;
  const consecutiveSource=source===lastSource?20000:0;
  const noFreshVariant=template.variants.every((_,index)=>recentContent.has(source+':'+index)||usedKeys.has(source+':'+index))?15000:0;
  const recent=recentIndex.has(template.id)?Math.max(0,120-recentIndex.get(template.id)*4):0;
  const topic=(topicCounts[template.topic]||0)*35;
  const focus=preferredTopics?.size&&!preferredTopics.has(template.topic)?45:0;
  return{template,score:repeatedType+repeatedSource+consecutiveSource+noFreshVariant+recent+topic+focus+random()*12};
 }).sort((a,b)=>a.score-b.score);
 return ranked[0]?.template;
}
function buildPlan({config,level,mode='normal',history=[],weakTopics=[],count=10,random=Math.random}){
 const levelPool=config.templates.filter(template=>template.level===level),pool=mode==='weak'?config.templates:levelPool;
 if(!pool.length)return[];
 const usedTypes=new Set(),usedSources=new Set(),usedKeys=new Set(),topicCounts={},recentTypes=recentTypeOrder(history),recentContent=new Set(history.slice(0,10).map(item=>item.contentKey||item.key)),preferredTopics=new Set(weakTopics.slice(0,4)),items=[];
 let lastSource='';
 for(let index=0;index<count;index++){
  let candidates=pool;
  if(mode==='weak'){
   const wantWeak=index<Math.ceil(count*.7),focused=pool.filter(template=>wantWeak?preferredTopics.has(template.topic):!preferredTopics.has(template.topic));
   if(focused.length)candidates=focused;
  }
  const template=chooseTemplate(candidates,{usedTypes,usedSources,usedKeys,topicCounts,recentTypes,recentContent,lastSource,preferredTopics,random})||pool[index%pool.length];
  const variantIndex=chooseVariant(template,history,usedKeys,random),key=template.id+':'+variantIndex,contentKey=sourceId(template)+':'+variantIndex;
  items.push({templateId:template.id,variantIndex,key,contentKey});
  usedTypes.add(template.id);usedSources.add(sourceId(template));usedKeys.add(key);usedKeys.add(contentKey);
  topicCounts[template.topic]=(topicCounts[template.topic]||0)+1;lastSource=sourceId(template);
 }
 return items;
}
function alternate({config,current,items=[],history=[],random=Math.random}){
 const original=config.templates.find(template=>template.id===current.templateId);
 if(!original)return current;
 const usedTypes=new Set(items.map(item=>item.templateId)),usedKeys=new Set(items.flatMap(item=>[item.key,item.contentKey].filter(Boolean))),recentTypes=recentTypeOrder(history),sameTopic=config.templates.filter(template=>template.topic===original.topic&&template.level===original.level&&template.id!==original.id);
 const differentSource=sameTopic.filter(template=>sourceId(template)!==sourceId(original)&&!usedTypes.has(template.id));
 const unusedSameTopic=sameTopic.filter(template=>!usedTypes.has(template.id));
 const pool=differentSource.length?differentSource:unusedSameTopic.length?unusedSameTopic:sameTopic;
 if(pool.length){
  const chosen=chooseTemplate(pool,{usedTypes:new Set(),usedSources:new Set(),topicCounts:{},recentTypes,lastSource:sourceId(original),random}),variantIndex=chooseVariant(chosen,history,usedKeys,random);
  return{templateId:chosen.id,variantIndex,key:chosen.id+':'+variantIndex,contentKey:sourceId(chosen)+':'+variantIndex};
 }
 const variantIndex=chooseVariant(original,history,usedKeys,random);
 return{templateId:original.id,variantIndex,key:original.id+':'+variantIndex,contentKey:sourceId(original)+':'+variantIndex};
}
window.MatematikONPracticePlanner={buildPlan,alternate,chooseVariant,recentTypeOrder,sourceId};
})();

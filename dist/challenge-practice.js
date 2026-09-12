(function(){
const L=(lat,cyrl)=>[lat,cyrl];
const ch=(value,lat,cyrl=lat)=>({value:String(value),label:L(String(lat),String(cyrl))});
const T=(id,level,topic,kind,variants,make)=>({id,level,topic,kind,variants,make});
const sumDigits=n=>String(n).split('').reduce((sum,digit)=>sum+Number(digit),0);
const setText=values=>`{${values.join(', ')}}`;
const rotate=(values,shift)=>values.slice(shift).concat(values.slice(0,shift));
const chooseNumbers=(answer,seed)=>rotate([...new Set([answer,Math.max(0,answer-1),answer+1,answer+2])].slice(0,3),seed%3).map(value=>ch(value,value));

function add(area,templates){
 const config=window.MatematikONPracticeAreas?.[area];
 if(!config)return;
 for(const template of templates)if(!config.templates.some(item=>item.id===template.id))config.templates.push(template);
}
function countRange(lo,hi,divisor,remainder){let count=0;for(let n=lo;n<=hi;n++)if(n%divisor===remainder)count++;return count}
function numberFromPattern(pattern,digit){return Number(pattern.replace('□',String(digit)))}
function validDigits(pattern,must,mustNot=[]){
 const result=[];
 for(let digit=0;digit<=9;digit++){
  if(pattern[0]==='□'&&digit===0)continue;
  const number=numberFromPattern(pattern,digit);
  if(must.every(divisor=>number%divisor===0)&&mustNot.every(divisor=>number%divisor!==0))result.push(digit);
 }
 return result;
}
function fourDigitWithDigitSum(sum,lastDivisor=5){
 const values=[];
 for(let n=1000;n<=9999;n++)if(sumDigits(n)===sum&&n%lastDivisor===0)values.push(n);
 return values;
}
function threeDigitNumbers(digits){
 const values=[];
 for(const a of digits)for(const b of digits)for(const c of digits){
  if(a===0||new Set([a,b,c]).size<3)continue;
  values.push(100*a+10*b+c);
 }
 return values;
}
function pointDiagram(variant){
 const lines=variant.guides.map(([a,b])=>{const p=variant.points[a],q=variant.points[b];return `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" class="guide"/>`}).join('');
 const points=variant.points.map((p,index)=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" class="accent-point"/><text x="${p[0]+7}" y="${p[1]-7}">${variant.labels[index]}</text>`).join('');
 return `<svg viewBox="0 0 230 135" role="img" aria-label="${variant.aria}">${lines}${points}</svg>`;
}
function centralTriangleDiagram(v){
 const reflect=p=>[2*v.o[0]-p[0],2*v.o[1]-p[1]],image=v.points.map(reflect);
 const polygon=points=>points.map(p=>p.join(',')).join(' ');
 const labels=(points,names)=>points.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" class="accent-point"/><text x="${p[0]+6}" y="${p[1]-6}">${names[i]}</text>`).join('');
 const joins=v.points.map((p,i)=>`<line x1="${p[0]}" y1="${p[1]}" x2="${image[i][0]}" y2="${image[i][1]}" class="guide dashed"/>`).join('');
 return `<svg viewBox="0 0 260 170" role="img" aria-label="Trougao ABC i njegova centralno simetrična slika A′B′C′ sa centrom O"><polygon points="${polygon(v.points)}"/><polygon points="${polygon(image)}" class="image-shape"/>${joins}${labels(v.points,['A','B','C'])}${labels(image,['A′','B′','C′'])}<circle cx="${v.o[0]}" cy="${v.o[1]}" r="4"/><text x="${v.o[0]+6}" y="${v.o[1]-6}">O</text></svg>`;
}
function lineCircleDiagram(r,d){
 const cx=115,cy=70,scale=44/r,lineY=cy+d*scale;
 return `<svg viewBox="0 0 230 145" role="img" aria-label="Kružnica k sa centrom O i prava p na rastojanju ${d} cm"><circle cx="${cx}" cy="${cy}" r="44"/><circle cx="${cx}" cy="${cy}" r="4"/><text x="${cx+7}" y="${cy-7}">O</text><line x1="22" y1="${lineY}" x2="208" y2="${lineY}"/><text x="194" y="${lineY-8}">p</text><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${lineY}" class="guide dashed"/><text x="${cx+7}" y="${(cy+lineY)/2}">d</text></svg>`;
}
function segmentOrderDiagram(u,v){
 const x=v-2*u,y=u,z=u,w=x,total=x+y+z+w,scale=205/total,start=20;
 const positions=[start,start+x*scale,start+(x+y)*scale,start+(x+y+z)*scale,start+total*scale];
 return `<svg viewBox="0 0 245 100" role="img" aria-label="Tačke A, C, D, E i B tim redom na duži AB"><line x1="${positions[0]}" y1="45" x2="${positions[4]}" y2="45"/>${positions.map((px,i)=>`<circle cx="${px}" cy="45" r="4"/><text x="${px-4}" y="70">${['A','C','D','E','B'][i]}</text>`).join('')}</svg>`;
}
function vennThreeDiagram(){return `<svg viewBox="0 0 250 160" role="img" aria-label="Venov dijagram za skupove A, B i C"><circle cx="92" cy="72" r="52"/><circle cx="158" cy="72" r="52"/><circle cx="125" cy="112" r="52"/><text x="52" y="35">A</text><text x="190" y="35">B</text><text x="121" y="156">C</text></svg>`}

add('prirodni',[
 T('ml-p-a-remainder-sum','advanced','ostatak','number',[
  [742,[9,11,13]],[865,[7,12,16]],[931,[8,14,17]],[1205,[11,18,20]],[1574,[12,15,19]]
 ],v=>{const remainders=v[1].map(d=>v[0]%d),answer=remainders.reduce((a,b)=>a+b,0);return{
  prompt:L(`Odredi zbir ostataka pri deljenju broja <b>${v[0]}</b> sa ${v[1].join(', ')}.`,`Одреди збир остатака при дељењу броја <b>${v[0]}</b> са ${v[1].join(', ')}.`),answer,
  hint:L('Odredi svaki ostatak posebno, pa ih saberi.','Одреди сваки остатак посебно, па их сабери.'),
  steps:[...v[1].map((d,i)=>L(`${v[0]} = ${d} · ${Math.floor(v[0]/d)} + ${remainders[i]}.`,`${v[0]} = ${d} · ${Math.floor(v[0]/d)} + ${remainders[i]}.`)),L(`Zbir ostataka je ${remainders.join(' + ')} = ${answer}.`,`Збир остатака је ${remainders.join(' + ')} = ${answer}.`)]
 }}),
 T('ml-p-a-remainder-interval','advanced','ostatak','number',[
  [320,780,14,5],[405,905,16,7],[510,990,18,4],[250,650,12,7],[600,1200,25,9]
 ],v=>{const answer=countRange(...v);let first=v[0]+((v[3]-v[0])%v[2]+v[2])%v[2],last=v[1]-((v[1]-v[3])%v[2]+v[2])%v[2];return{
  prompt:L(`Koliko brojeva od <b>${v[0]}</b> do <b>${v[1]}</b> pri deljenju sa ${v[2]} daje ostatak ${v[3]}?`,`Колико бројева од <b>${v[0]}</b> до <b>${v[1]}</b> при дељењу са ${v[2]} даје остатак ${v[3]}?`),answer,
  hint:L('Nađi prvi i poslednji takav broj. Oni grade niz sa razlikom jednakom deliocu.','Нађи први и последњи такав број. Они граде низ са разликом једнаком делиоцу.'),
  steps:[L(`Prvi broj je ${first}, a poslednji ${last}.`,`Први број је ${first}, а последњи ${last}.`),L(`Broj članova je (${last} − ${first}) : ${v[2]} + 1 = ${answer}.`,`Број чланова је (${last} − ${first}) : ${v[2]} + 1 = ${answer}.`)]
 }}),
 T('ml-p-a-expression-values','advanced','jednacine','number',[
  [4,7,5,8,4,6,5],[6,8,4,6,4,7,5],[3,8,8,5,4,5,4],[7,6,6,5,3,8,4],[5,7,4,6,2,5,3]
 ],v=>{const [x,y,a,b,c,d,e]=v,first=(a*x+b*y)/c,second=y*(d*y-e*x),answer=first+second;return{
  prompt:L(`Za x = ${x} i y = ${y} izračunaj <b>(${a}x + ${b}y) : ${c} + y · (${d}y − ${e}x)</b>.`,`За x = ${x} и y = ${y} израчунај <b>(${a}x + ${b}y) : ${c} + y · (${d}y − ${e}x)</b>.`),answer,
  hint:L('Zameni x i y brojevima. Najpre računaj u zagradama.','Замени x и y бројевима. Најпре рачунај у заградама.'),
  steps:[L(`(${a} · ${x} + ${b} · ${y}) : ${c} = ${first}.`,`(${a} · ${x} + ${b} · ${y}) : ${c} = ${first}.`),L(`${y} · (${d} · ${y} − ${e} · ${x}) = ${second}.`,`${y} · (${d} · ${y} − ${e} · ${x}) = ${second}.`),L(`${first} + ${second} = ${answer}.`,`${first} + ${second} = ${answer}.`)]
 }})
]);

add('skupovi',[
 T('ml-s-m-membership-rule','medium','skupovi','choice',[
  [10,25,3],[15,36,5],[20,50,7],[8,30,4],[25,60,6]
 ],v=>{const result=[];for(let n=v[0]+1;n<v[1];n++)if(n%v[2]===0)result.push(n);const wrong1=result.slice(1),wrong2=[v[0],...result];return{
  prompt:L(`B = {x ∈ N | ${v[0]} &lt; x &lt; ${v[1]} i ${v[2]} | x}. Odredi B.`,`B = {x ∈ N | ${v[0]} &lt; x &lt; ${v[1]} и ${v[2]} | x}. Одреди B.`),answer:'ok',
  choices:[ch('ok',setText(result)),ch('a',setText(wrong1)),ch('b',setText(wrong2))],
  hint:L('Nabroj brojeve u intervalu, pa zadrži sadržaoce datog broja.','Наброј бројеве у интервалу, па задржи садржаоце датог броја.'),
  steps:[L(`Sadržaoci broja ${v[2]} u datom intervalu su ${result.join(', ')}.`,`Садржаоци броја ${v[2]} у датом интервалу су ${result.join(', ')}.`),L(`B = ${setText(result)}.`,`B = ${setText(result)}.`)]
 }}),
 T('ml-s-a-infer-set','advanced','podskup','choice',[
  [['a','b'],['a','c'],[3,8]],[['m','n'],['m','p'],[2,7]],[['x','y'],['x','z'],[4,9]],[['p','q'],['p','r'],[1,6]],[['u','v'],['u','w'],[5,8]]
 ],v=>{const result=[...new Set(v.flat())];return{
  prompt:L(`Skup A ima pet elemenata. Njegovi podskupovi su ${v.map(setText).join(', ')}. Odredi A.`,`Скуп A има пет елемената. Његови подскупови су ${v.map(setText).join(', ')}. Одреди A.`),answer:'ok',
  choices:[ch('ok',setText(result)),ch('a',setText(result.slice(0,4))),ch('b',setText([...result.slice(0,3),'k',result[4]]))],
  hint:L('Svaki element navedenih podskupova mora pripadati skupu A.','Сваки елемент наведених подскупова мора припадати скупу A.'),
  steps:[L(`Zajedno se pojavljuju elementi ${result.join(', ')}.`,`Заједно се појављују елементи ${result.join(', ')}.`),L(`To je pet različitih elemenata, pa je A = ${setText(result)}.`,`То је пет различитих елемената, па је A = ${setText(result)}.`)]
 }}),
 T('ml-s-a-four-operations','advanced','unija-presek','choice',[
  [[1,3,5,7],[3,4,7,8]],[[2,4,6,8],[1,2,6,9]],[[1,2,5,9],[2,4,5,8]],[[3,6,9,12],[6,8,9,14]],[[2,5,7,10],[1,5,8,10]]
 ],v=>{const [a,b]=v,inter=a.filter(x=>b.includes(x)),union=[...new Set([...a,...b])],ab=a.filter(x=>!b.includes(x)),ba=b.filter(x=>!a.includes(x));const correct=`A ∩ B = ${setText(inter)}; A ∪ B = ${setText(union)}; A ∖ B = ${setText(ab)}; B ∖ A = ${setText(ba)}`;return{
  prompt:L(`A = ${setText(a)}, B = ${setText(b)}. Koji zapis je tačan?`,`A = ${setText(a)}, B = ${setText(b)}. Који запис је тачан?`),answer:'ok',
  choices:[ch('ok',correct),ch('a',`A ∩ B = ${setText(union)}; A ∪ B = ${setText(inter)}`),ch('b',`A ∖ B = ${setText(ba)}; B ∖ A = ${setText(ab)}`)],
  hint:L('Odredi redom zajedničke, sve, samo A i samo B elemente.','Одреди редом заједничке, све, само A и само B елементе.'),
  steps:[L(`A ∩ B = ${setText(inter)}, a A ∪ B = ${setText(union)}.`,`A ∩ B = ${setText(inter)}, а A ∪ B = ${setText(union)}.`),L(`A ∖ B = ${setText(ab)}, a B ∖ A = ${setText(ba)}.`,`A ∖ B = ${setText(ab)}, а B ∖ A = ${setText(ba)}.`)]
 }}),
 T('ml-s-a-venn-three','advanced','primena-skupova','number',[
  [4,6,12,11,10,9],[3,5,10,9,8,7],[2,4,9,8,7,8],[5,7,13,12,11,10],[1,6,11,10,9,8]
 ],v=>{const [none,all,ab,bc,ac,onlyOne]=v,onlyPairs=[ab-all,bc-all,ac-all],answer=none+all+onlyOne+onlyPairs.reduce((a,b)=>a+b,0);return{
  prompt:L(`Učenici rešavaju tri zadatka. Nijedan nije rešilo ${none}, sva tri ${all}, prvi i drugi ${ab}, drugi i treći ${bc}, prvi i treći ${ac}, a tačno jedan zadatak ${onlyOne} učenika. Koliko je učenika u odeljenju?`,`Ученици решавају три задатка. Ниједан није решило ${none}, сва три ${all}, први и други ${ab}, други и трећи ${bc}, први и трећи ${ac}, а тачно један задатак ${onlyOne} ученика. Колико је ученика у одељењу?`),diagram:vennThreeDiagram(),answer,
  hint:L('Iz svakog podatka o dva zadatka oduzmi učenike koji su rešili sva tri.','Из сваког податка о два задатка одузми ученике који су решили сва три.'),
  steps:[L(`Tačno dva zadatka rešilo je ${ab} − ${all} = ${onlyPairs[0]}, ${bc} − ${all} = ${onlyPairs[1]} i ${ac} − ${all} = ${onlyPairs[2]} učenika.`,`Тачно два задатка решило је ${ab} − ${all} = ${onlyPairs[0]}, ${bc} − ${all} = ${onlyPairs[1]} и ${ac} − ${all} = ${onlyPairs[2]} ученика.`),L(`Ukupno: ${none} + ${onlyOne} + ${onlyPairs.join(' + ')} + ${all} = ${answer}.`,`Укупно: ${none} + ${onlyOne} + ${onlyPairs.join(' + ')} + ${all} = ${answer}.`)]
 }}),
 T('ml-s-a-symbol-truth','advanced','podskup','choice',[
  [[1,2,4],[1,2,3,4]],[['a','b'],['a','b','c']],[[2,6,10],[2,4,6,8,10]],[[3,5],[1,3,5,7]],[[4,8,12],[2,4,6,8,10,12]]
 ],v=>{const [a,b]=v,element=a[0];return{
  prompt:L(`A = ${setText(a)}, B = ${setText(b)}. Koje tvrđenje je tačno?`,`A = ${setText(a)}, B = ${setText(b)}. Које тврђење је тачно?`),answer:'subset',
  choices:[ch('subset','A ⊆ B'),ch('member','A ∈ B'),ch('notmember',`${element} ∉ B`)],
  hint:L('A je skup. Proveri da li svaki njegov element pripada skupu B.','A је скуп. Провери да ли сваки његов елемент припада скупу B.'),
  steps:[L('Svaki element skupa A pripada skupu B.','Сваки елемент скупа A припада скупу B.'),L('Zato je A ⊆ B. Oznaka ∈ povezuje element i skup, ne dva skupa.','Зато је A ⊆ B. Ознака ∈ повезује елемент и скуп, не два скупа.')]
 }})
]);

add('deljivost',[
 T('ml-d-a-divisible-quotient','advanced','kriterijumi-pregled','choice',[
  [[468,734,1020],3],[[544,875,1260],4],[[625,972,1450],5],[[738,999,1236],9],[[1248,1575,2025],25]
 ],v=>{const [numbers,divisor]=v,valid=numbers.filter(n=>n%divisor===0),correct=valid.map(n=>`${n} : ${divisor} = ${n/divisor}`).join('; ');const wrongA=numbers.map(n=>`${n} : ${divisor} = ${Math.floor(n/divisor)}`).join('; '),wrongB=numbers.filter(n=>n%divisor!==0).map(n=>`${n} : ${divisor} = ${Math.floor(n/divisor)}`).join('; ')||'nijedan broj';return{
  prompt:L(`Koji zapis tačno navodi brojeve deljive sa ${divisor} i njihove količnike?`,`Који запис тачно наводи бројеве дељиве са ${divisor} и њихове количнике?`),answer:'ok',
  choices:[ch('ok',correct),ch('a',wrongA),ch('b',wrongB,wrongB==='nijedan broj'?'ниједан број':wrongB)],
  hint:L('Najpre primeni pravilo deljivosti. Deli samo brojeve koji prolaze proveru.','Најпре примени правило дељивости. Дели само бројеве који пролазе проверу.'),
  steps:[L(`Deljivi su: ${valid.join(', ')}.`,`Дељиви су: ${valid.join(', ')}.`),L(`Količnici su: ${valid.map(n=>`${n} : ${divisor} = ${n/divisor}`).join('; ')}.`,`Количници су: ${valid.map(n=>`${n} : ${divisor} = ${n/divisor}`).join('; ')}.`)]
 }}),
 T('ml-d-a-form-digits-4','advanced','kriterijumi-4-25','number',[
  [0,2,3,6],[0,1,4,8],[0,3,5,6],[1,2,4,7],[0,4,5,8]
 ],digits=>{const all=threeDigitNumbers(digits),answer=all.filter(n=>n%4===0).length;return{
  prompt:L(`Od cifara ${digits.join(', ')} formiraj trocifrene brojeve sa različitim ciframa. Koliko ih je deljivo sa 4?`,`Од цифара ${digits.join(', ')} формирај троцифрене бројеве са различитим цифрама. Колико их је дељиво са 4?`),answer,
  hint:L('Broj ne može početi nulom. Za deljivost sa 4 proveri poslednje dve cifre.','Број не може почети нулом. За дељивост са 4 провери последње две цифре.'),
  steps:[L(`Mogući brojevi deljivi sa 4 su ${all.filter(n=>n%4===0).join(', ')}.`,`Могући бројеви дељиви са 4 су ${all.filter(n=>n%4===0).join(', ')}.`),L(`Ima ih ${answer}.`,`Има их ${answer}.`)]
 }}),
 T('ml-d-a-missing-digit-conditions','advanced','kriterijumi-3-9','choice',[
  ['53□4',[9,4],[]],['7□20',[9,4],[]],['4□50',[9,25],[]],['12□6',[9,2],[]],['□215',[3,5],[]]
 ],v=>{const digits=validDigits(...v),wrong1=digits.length>1?[digits[0]]:[(digits[0]+3)%10],wrong2=[...new Set(digits.map(d=>(d+1)%10))];return{
  prompt:L(`Koje cifre mogu zameniti □ u broju <b>${v[0]}</b> da bude deljiv sa ${v[1].join(' i ')}?`,`Које цифре могу заменити □ у броју <b>${v[0]}</b> да буде дељив са ${v[1].join(' и ')}?`),answer:'ok',
  choices:[ch('ok',setText(digits)),ch('a',setText(wrong1)),ch('b',setText(wrong2))],
  hint:L('Primeni oba uslova. Cifra mora zadovoljiti oba istovremeno.','Примени оба услова. Цифра мора задовољити оба истовремено.'),
  steps:[L(`Provera svih cifara daje ${setText(digits)}.`,`Провера свих цифара даје ${setText(digits)}.`),L(`Samo te cifre zadovoljavaju oba uslova.`,`Само те цифре задовољавају оба услова.`)]
 }}),
 T('ml-d-a-digit-sum-five','advanced','kriterijumi-pregled','number',[3,4,5,6,7],sum=>{const values=fourDigitWithDigitSum(sum,5),endingZero=values.filter(n=>n%10===0).length,endingFive=values.filter(n=>n%10===5).length,answer=values.length;return{
  prompt:L(`Koliko četvorocifrenih brojeva ima zbir cifara ${sum} i deljivo je sa 5?`,`Колико четвороцифрених бројева има збир цифара ${sum} и дељиво је са 5?`),answer,
  hint:L('Poslednja cifra mora biti 0 ili 5. Zatim rasporedi preostali zbir cifara.','Последња цифра мора бити 0 или 5. Затим распореди преостали збир цифара.'),
  steps:[L(`Sa poslednjom cifrom 0 ima ${endingZero}, a sa poslednjom cifrom 5 ima ${endingFive} brojeva.`,`Са последњом цифром 0 има ${endingZero}, а са последњом цифром 5 има ${endingFive} бројева.`),L(`${endingZero} + ${endingFive} = ${answer}.`,`${endingZero} + ${endingFive} = ${answer}.`)]
 }}),
 T('ml-d-a-four-digit-extremes','advanced','kriterijumi-pregled','number',[3,4,5,6,7],sum=>{const values=fourDigitWithDigitSum(sum,1),min=values[0],max=values.at(-1),answer=max-min;return{
  prompt:L(`Odredi razliku najvećeg i najmanjeg četvorocifrenog broja čiji je zbir cifara ${sum}.`,`Одреди разлику највећег и најмањег четвороцифреног броја чији је збир цифара ${sum}.`),answer,
  hint:L('Za najmanji broj stavi što manje cifre sleva. Za najveći stavi što veće cifre sleva.','За најмањи број стави што мање цифре слева. За највећи стави што веће цифре слева.'),
  steps:[L(`Najmanji je ${min}, a najveći ${max}.`,`Најмањи је ${min}, а највећи ${max}.`),L(`${max} − ${min} = ${answer}.`,`${max} − ${min} = ${answer}.`)]
 }})
]);

const pointVariants=[
 {labels:['A','B','C','D'],points:[[28,92],[98,92],[168,92],[102,28]],guides:[[0,2]],text:L('A, B i C su kolinearne, a D nije na toj pravoj.','A, B и C су колинеарне, а D није на тој правој.'),answer:4,aria:'A, B i C su na jednoj pravoj, D je van nje'},
 {labels:['A','B','C','D'],points:[[28,96],[78,26],[150,38],[198,104]],guides:[],text:L('Nijedne tri tačke nisu kolinearne.','Ниједне три тачке нису колинеарне.'),answer:6,aria:'Četiri tačke, nijedne tri nisu kolinearne'},
 {labels:['P','Q','R','S','T'],points:[[24,96],[82,96],[140,96],[55,28],[194,42]],guides:[[0,2]],text:L('P, Q i R su kolinearne; ostale trojke nisu.','P, Q и R су колинеарне; остале тројке нису.'),answer:8,aria:'Pet tačaka, P Q i R su kolinearne'},
 {labels:['A','B','C','D','E'],points:[[24,92],[72,92],[120,92],[168,92],[110,28]],guides:[[0,3]],text:L('A, B, C i D su kolinearne, a E nije na toj pravoj.','A, B, C и D су колинеарне, а E није на тој правој.'),answer:5,aria:'Četiri tačke su na jednoj pravoj, peta je van nje'},
 {labels:['M','N','P'],points:[[36,102],[112,24],[198,98]],guides:[],text:L('Tačke M, N i P nisu kolinearne.','Тачке M, N и P нису колинеарне.'),answer:3,aria:'Tri nekolinearne tačke'}
];
add('geometrija',[
 T('ml-g-a-all-lines','advanced','polozaj-pravih','choice',pointVariants,v=>({
  prompt:L(`${v.text[0]} Koliko različitih pravih određuju parovi tačaka?`,`${v.text[1]} Колико различитих правих одређују парови тачака?`),diagram:pointDiagram(v),answer:String(v.answer),choices:chooseNumbers(v.answer,v.labels.length),
  hint:L('Svaki par određuje pravu, ali parovi kolinearnih tačaka mogu određivati istu pravu.','Сваки пар одређује праву, али парови колинеарних тачака могу одређивати исту праву.'),
  steps:[L(v.answer===6?'Četiri tačke daju šest parova i nijedne tri nisu na istoj pravoj.':`Prebrojimo različite prave i zajedničku pravu kolinearnih tačaka računamo samo jednom.`,`Пребројимо различите праве и заједничку праву колинеарних тачака рачунамо само једном.`),L(`Ukupno je ${v.answer} različitih pravih.`,`Укупно је ${v.answer} различитих правих.`)]
 })),
 T('ml-g-m-opposite-rays','medium','osnovni-geometrijski-pojmovi','choice',[
  ['A','D','B','C'],['M','N','P','Q'],['R','S','T','U'],['K','L','M','N'],['P','Q','R','S']
 ],v=>{const diagramVariant={labels:v,points:[[28,88],[112,88],[198,88],[112,26]],guides:[[0,2]],aria:'Tri kolinearne tačke i jedna tačka van prave'};return{
  prompt:L(`${v[0]}–${v[1]}–${v[2]} su tim redom na pravoj. Koje poluprave sa početkom ${v[1]} su suprotne?`,`${v[0]}–${v[1]}–${v[2]} су тим редом на правој. Које полуправе са почетком ${v[1]} су супротне?`),diagram:pointDiagram(diagramVariant),answer:'ok',
  choices:[ch('ok',`[${v[1]}${v[0]}) i [${v[1]}${v[2]})`,`[${v[1]}${v[0]}) и [${v[1]}${v[2]})`),ch('a',`[${v[0]}${v[1]}) i [${v[1]}${v[2]})`,`[${v[0]}${v[1]}) и [${v[1]}${v[2]})`),ch('b',`[${v[1]}${v[0]}) i [${v[1]}${v[3]})`,`[${v[1]}${v[0]}) и [${v[1]}${v[3]})`)],
  hint:L('Suprotne poluprave imaju isti početak i pružaju se u suprotnim smerovima iste prave.','Супротне полуправе имају исти почетак и пружају се у супротним смеровима исте праве.'),
  steps:[L(`Početak je ${v[1]}, a tačke ${v[0]} i ${v[2]} su sa različitih strana.`,`Почетак је ${v[1]}, а тачке ${v[0]} и ${v[2]} су са различитих страна.`),L(`Suprotne su [${v[1]}${v[0]}) i [${v[1]}${v[2]}).`,`Супротне су [${v[1]}${v[0]}) и [${v[1]}${v[2]}).`)]
 }}),
 T('ml-g-a-central-triangle','advanced','centralna-simetrija','choice',[
  {points:[[40,38],[72,96],[30,108]],o:[130,82]},{points:[[54,30],[90,72],[38,98]],o:[132,86]},{points:[[42,52],[76,104],[22,114]],o:[128,80]},{points:[[62,34],[92,92],[44,112]],o:[138,82]},{points:[[46,26],[84,74],[30,102]],o:[130,88]}
 ],v=>({
  prompt:L('Trougao A′B′C′ je centralno simetrična slika trougla ABC sa centrom O. Koje tvrđenje je tačno?','Троугао A′B′C′ је централно симетрична слика троугла ABC са центром O. Које тврђење је тачно?'),diagram:centralTriangleDiagram(v),answer:'mid',
  choices:[ch('mid','O je središte duži AA′, BB′ i CC′.','O је средиште дужи AA′, BB′ и CC′.'),ch('double','AO = 2 · OA′.'),ch('side','O pripada stranici AB.','O припада страници AB.')],
  hint:L('Spoji svako teme sa njegovom slikom. Gde se nalazi O?','Споји свако теме са његовом сликом. Где се налази O?'),
  steps:[L('Tačke A, O, A′ su kolinearne i AO = OA′. Isto važi za B i C.','Тачке A, O, A′ су колинеарне и AO = OA′. Исто важи за B и C.'),L('Zato je O središte sve tri duži.','Зато је O средиште све три дужи.')]
 })),
 T('ml-g-a-line-circle-diagram','advanced','polozaj-prave-i-kruznice','choice',[[6,4],[6,6],[5,8],[8,3],[7,9]],v=>{const relation=v[1]<v[0]?'lt':v[1]===v[0]?'eq':'gt';return{
  prompt:L(`Za prikazanu kružnicu r = ${v[0]} cm, a d(O,p) = ${v[1]} cm. Koji odnos je tačan?`,`За приказану кружницу r = ${v[0]} cm, а d(O,p) = ${v[1]} cm. Који однос је тачан?`),diagram:lineCircleDiagram(...v),answer:relation,
  choices:[ch('lt','d(O,p) < r'),ch('eq','d(O,p) = r'),ch('gt','d(O,p) > r')],
  hint:L('Uporedi rastojanje centra od prave sa poluprečnikom.','Упореди растојање центра од праве са полупречником.'),
  steps:[L(`Upoređujemo ${v[1]} cm i ${v[0]} cm.`,`Упоређујемо ${v[1]} cm и ${v[0]} cm.`),L(relation==='lt'?'Prava je sečica.':relation==='eq'?'Prava je tangenta.':'Prava nema zajedničkih tačaka sa kružnicom.',relation==='lt'?'Права је сечица.':relation==='eq'?'Права је тангента.':'Права нема заједничких тачака са кружницом.')]
 }}),
 T('ml-g-a-segment-midpoints','advanced','prenos-racunanje-duzi','number',[[28,96],[35,115],[42,134],[24,82],[31,101]],v=>{const answer=2*(v[1]-v[0]);return{
  prompt:L(`Tačke A–C–D–E–B dele duž AB. Rastojanje središta CD i DE je ${v[0]} mm, a središta AC i EB ${v[1]} mm. Odredi |AB|.`,`Тачке A–C–D–E–B деле дуж AB. Растојање средишта CD и DE је ${v[0]} mm, а средишта AC и EB ${v[1]} mm. Одреди |AB|.`),diagram:segmentOrderDiagram(...v),answer,unit:'mm',
  hint:L('Prvo rastojanje je polovina CD + DE. Drugo obuhvata još polovine AC i EB.','Прво растојање је половина CD + DE. Друго обухвата још половине AC и EB.'),
  steps:[L(`CD + DE = 2 · ${v[0]} = ${2*v[0]} mm.`,`CD + DE = 2 · ${v[0]} = ${2*v[0]} mm.`),L(`AC + EB = 2 · (${v[1]} − ${2*v[0]}) = ${2*(v[1]-2*v[0])} mm.`,`AC + EB = 2 · (${v[1]} − ${2*v[0]}) = ${2*(v[1]-2*v[0])} mm.`),L(`AB = AC + CD + DE + EB = ${answer} mm.`,`AB = AC + CD + DE + EB = ${answer} mm.`)]
 }})
]);

const added=[];
for(const [area,config] of Object.entries(window.MatematikONPracticeAreas||{}))for(const template of config.templates)if(template.id.startsWith('ml-'))added.push({area,id:template.id,level:template.level,topic:template.topic,variants:template.variants.length});
window.MatematikONChallengeMeta={source:'Matematički list — originalne MatematikON varijante',types:added,summary:added.reduce((out,item)=>{out.types++;out.variants+=item.variants;out.levels[item.level]=(out.levels[item.level]||0)+1;return out},{types:0,variants:0,levels:{basic:0,medium:0,advanced:0}})};
})();

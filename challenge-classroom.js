(function(){
const plans=window.MatematikONClassroomPlans||{};
const L=(lat,cyrl)=>[lat,cyrl];
function activity(id,type,questionLat,questionCyrl,choicesLat,choicesCyrl,answer,explanationLat,explanationCyrl){
 const plan=plans[id];if(!plan?.stages?.[3])return;
 plan.stages[3].content=L(`<h2>Izazov na tabli</h2><p>${questionLat}</p>`,`<h2>Изазов на табли</h2><p>${questionCyrl}</p>`);
 plan.stages[3].activity={type,question:L(questionLat,questionCyrl),choices:L(choicesLat||[],choicesCyrl||[]),answer,explanation:L(explanationLat,explanationCyrl)};
}
activity('ostatak','number','Odredi zbir ostataka pri deljenju 742 sa 9, 11 i 13.','Одреди збир остатака при дељењу 742 са 9, 11 и 13.',[],[],10,'742 daje ostatke 4, 5 i 1; zbir je 10.','742 даје остатке 4, 5 и 1; збир је 10.');
activity('kriterijumi-4-25','multi','Od cifara 0, 3, 4 i 5 označi sve trocifrene brojeve deljive sa 4.','Од цифара 0, 3, 4 и 5 означи све троцифрене бројеве дељиве са 4.',['304','340','350','504','530','540'],['304','340','350','504','530','540'],[0,1,3,5],'Poslednje dve cifre su 04 ili 40.','Последње две цифре су 04 или 40.');
activity('kriterijumi-3-9','single','Koja cifra dopunjava 53□4 da broj bude deljiv sa 9 i sa 4?','Која цифра допуњава 53□4 да број буде дељив са 9 и са 4?',['2','6','8'],['2','6','8'],1,'Zbir cifara je 18, a završetak 64 je deljiv sa 4.','Збир цифара је 18, а завршетак 64 је дељив са 4.');
activity('primena-skupova','single','Nijedan zadatak nisu rešila 4 učenika, sva tri 6, prvi i drugi 12, drugi i treći 11, prvi i treći 10, a tačno jedan zadatak 9 učenika. Koliko učenika ima?','Ниједан задатак нису решила 4 ученика, сва три 6, први и други 12, други и трећи 11, први и трећи 10, а тачно један задатак 9 ученика. Колико ученика има?',['32','34','36'],['32','34','36'],1,'Tačno dva: 6 + 5 + 4; ukupno 4 + 6 + 9 + 15 = 34.','Тачно два: 6 + 5 + 4; укупно 4 + 6 + 9 + 15 = 34.');
activity('polozaj-pravih','single','A, B i C su kolinearne, a D nije na toj pravoj. Koliko različitih pravih određuju ovi parovi tačaka?','A, B и C су колинеарне, а D није на тој правој. Колико различитих правих одређују ови парови тачака?',['3','4','6'],['3','4','6'],1,'Zajednička prava ABC računa se jednom, a do D vode još tri prave.','Заједничка права ABC рачуна се једном, а до D воде још три праве.');
activity('centralna-simetrija','single','Trougao A′B′C′ je slika trougla ABC centralnom simetrijom sa centrom O. Šta važi?','Троугао A′B′C′ је слика троугла ABC централном симетријом са центром O. Шта важи?',['AO = OA′, BO = OB′, CO = OC′','AO = 2 · OA′','O pripada stranici AB'],['AO = OA′, BO = OB′, CO = OC′','AO = 2 · OA′','O припада страници AB'],0,'O je središte duži AA′, BB′ i CC′.','O је средиште дужи AA′, BB′ и CC′.');
})();

(function(){
const plans=window.MatematikONClassroomPlans||{};
const L=(latn,cyrl)=>[latn,cyrl];
function set(id,type,questionLatn,questionCyrl,choices,answer,explanationLatn,explanationCyrl){
 const stage=plans[id]?.stages?.[3];
 if(!stage)return;
 stage.content=L(`<h2>Izazov na tabli</h2><p>${questionLatn}</p>`,`<h2>Изазов на табли</h2><p>${questionCyrl}</p>`);
 stage.activity={type,question:L(questionLatn,questionCyrl),choices:L(choices,choices),answer,explanation:L(explanationLatn,explanationCyrl)};
}
set('sito','multi','Precrtani su sadržaoci 2, 3 i 5. Označi brojeve koji ostaju prosti.','Прецртани су садржаоци 2, 3 и 5. Означи бројеве који остају прости.',['29','35','41','49','47','39'],[0,2,4],'29, 41 i 47 nisu deljivi sa 2, 3 ni 5.','29, 41 и 47 нису дељиви са 2, 3 ни 5.');
set('nzd','number','Brojevi 83, 119 i 155 pri deljenju daju ostatak 11. Odredi najveći mogući delilac.','Бројеви 83, 119 и 155 при дељењу дају остатак 11. Одреди највећи могући делилац.',[],36,'NZD(72, 108, 144) = 36.','НЗД(72, 108, 144) = 36.');
set('nzs','single','Za brojeve 18 i b važi NZD = 6 i NZS = 72. Odredi b.','За бројеве 18 и b важи НЗД = 6 и НЗС = 72. Одреди b.',['12','24','36'],1,'18 · b = 6 · 72, pa je b = 24.','18 · b = 6 · 72, па је b = 24.');
set('brojevna-poluprava','single','Jedinica je podeljena na četiri jednaka dela. Tačka P je sedam delova od nule. Koji broj predstavlja?','Јединица је подељена на четири једнака дела. Тачка P је седам делова од нуле. Који број представља?',['7/4','4/7','3/4'],0,'Sedam četvrtina je 7/4, odnosno 1 i 3/4.','Седам четвртина је 7/4, односно 1 и 3/4.');
set('prosirivanje-skracivanje','single','Koji razlomak je jednak razlomku 3/5?','Који разломак је једнак разломку 3/5?',['6/10','6/8','9/20'],0,'Brojilac i imenilac množimo istim brojem: 3/5 = 6/10.','Бројилац и именилац множимо истим бројем: 3/5 = 6/10.');
set('uporedjivanje-razlomaka','single','Koji znak nedostaje: 5/12 □ 7/18?','Који знак недостаје: 5/12 □ 7/18?',['<','=','>'],2,'5/12 = 15/36, a 7/18 = 14/36, zato je 5/12 > 7/18.','5/12 = 15/36, а 7/18 = 14/36, зато је 5/12 > 7/18.');
set('vektori','single','Vektori u i v imaju isti pravac i dužinu, ali suprotan smer. Da li su jednaki?','Вектори u и v имају исти правац и дужину, али супротан смер. Да ли су једнаки?',['da','ne'],1,'Nisu. Jednaki vektori moraju imati i isti smer.','Нису. Једнаки вектори морају имати и исти смер.');
set('translacija','single','Tačku P pomeramo 4 polja udesno i 2 polja nagore. Koje pomeranje mora važiti za svaku tačku figure?','Тачку P померамо 4 поља удесно и 2 поља нагоре. Које померање мора важити за сваку тачку фигуре?',['isto pomeranje','dvostruko pomeranje','pomeranje po izboru'],0,'Translacija svaku tačku pomera za isti vektor.','Транслација сваку тачку помера за исти вектор.');
window.MatematikONTextbookClassroomMeta={updated:['sito','nzd','nzs','brojevna-poluprava','prosirivanje-skracivanje','uporedjivanje-razlomaka','vektori','translacija']};
})();

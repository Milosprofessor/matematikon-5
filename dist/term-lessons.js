(function(){
const P=(latn,cyrl)=>[latn,cyrl];
const F=(a,b)=>`<span class="math-fraction" aria-label="${a} kroz ${b}"><span>${a}</span><span>${b}</span></span>`;
const lessonData=[
{
 id:'kriterijumi-2-5-10',quiz:'mini-kriterijumi-2-5-10',num:60,area:P('DELJIVOST','ДЕЉИВОСТ'),title:P('Deljivost sa 2, 5 i dekadnim jedinicama','Дељивост са 2, 5 и декадним јединицама'),
 intro:P('Za ove kriterijume ne delimo ceo broj. Posmatramo njegov završetak.','За ове критеријуме не делимо цео број. Посматрамо његов завршетак.'),
 visual:`<div class="digit-detector" aria-label="Detektor deljivosti broja 47 350"><strong>47 350</strong><div><span data-look="1"><b>2</b><i>0</i></span><span data-look="1"><b>5</b><i>0</i></span><span data-look="1"><b>10</b><i>0</i></span><span data-look="2"><b>100</b><i>50</i></span><span data-look="3"><b>1 000</b><i>350</i></span></div></div>`,
 rules:P(['sa 2: poslednja cifra je parna','sa 5: poslednja cifra je 0 ili 5','sa 10, 100, 1 000: završava se sa 1, 2 ili 3 nule'],['са 2: последња цифра је парна','са 5: последња цифра је 0 или 5','са 10, 100, 1 000: завршава се са 1, 2 или 3 нуле']),
 examples:P([
  ['4 738 i 2','Poslednja cifra je 8, pa je broj deljiv sa 2.'],['6 215 i 5','Poslednja cifra je 5, pa je broj deljiv sa 5.'],['47 350','Deljiv je sa 2, 5 i 10, ali nije sa 100 ni sa 1 000.'],['83 000','Deljiv je sa 10 i 100 i 1 000.']],
  [['4 738 и 2','Последња цифра је 8, па је број дељив са 2.'],['6 215 и 5','Последња цифра је 5, па је број дељив са 5.'],['47 350','Дељив је са 2, 5 и 10, али није са 100 ни са 1 000.'],['83 000','Дељив је са 10 и 100 и 1 000.']]),
 questions:[
  {t:'2',p:P('Koji broj je deljiv sa 2?','Који број је дељив са 2?'),a:['317','428','555'],c:1,e:P('Posmatraj poslednju cifru.','Посматрај последњу цифру.')},
  {t:'5',p:P('Koji broj je deljiv sa 5?','Који број је дељив са 5?'),a:['742','915','338'],c:1,e:P('Broj se završava cifrom 5.','Број се завршава цифром 5.')},
  {t:'10',p:P('Koji broj je deljiv sa 10?','Који број је дељив са 10?'),a:['2 340','2 345','2 304'],c:0,e:P('Broj deljiv sa 10 završava se nulom.','Број дељив са 10 завршава се нулом.')},
  {t:'100',p:P('Da li je 64 500 deljivo sa 100?','Да ли је 64 500 дељиво са 100?'),a:P(['Da','Ne'],['Да','Не']),c:0,e:P('Poslednje dve cifre su 00.','Последње две цифре су 00.')},
  {t:'1000',p:P('Koji broj je deljiv sa 1 000?','Који број је дељив са 1 000?'),a:['81 000','81 100','81 010'],c:0,e:P('Potrebne su tri nule na kraju.','Потребне су три нуле на крају.')},
  {t:'kombinovanje',p:P('Sa kojim brojevima je deljiv 3 750?','Са којим бројевима је дељив 3 750?'),a:P(['2, 5 i 10','2, 5, 10 i 100','samo 5'],['2, 5 и 10','2, 5, 10 и 100','само 5']),c:0,e:P('Završava se sa 0, ali ne sa 00.','Завршава се са 0, али не са 00.')}
 ]
},
{
 id:'kriterijumi-4-25',quiz:'mini-kriterijumi-4-25',num:61,area:P('DELJIVOST','ДЕЉИВОСТ'),title:P('Deljivost sa 4 i 25','Дељивост са 4 и 25'),
 intro:P('Posmatramo samo broj koji čine poslednje dve cifre.','Посматрамо само број који чине последње две цифре.'),
 visual:`<div class="last-two"><span>38</span><strong>24</strong><i>→ 24 : 4 = 6</i></div>`,
 rules:P(['sa 4: broj od poslednje dve cifre deljiv je sa 4','sa 25: poslednje dve cifre su 00, 25, 50 ili 75','ostale cifre ne utiču na odluku'],['са 4: број од последње две цифре дељив је са 4','са 25: последње две цифре су 00, 25, 50 или 75','остале цифре не утичу на одлуку']),
 examples:P([
  ['3 824 i 4','Posmatramo 24. Pošto je 24 : 4 = 6, broj je deljiv sa 4.'],['7 318 i 4','Broj 18 nije deljiv sa 4, pa nije ni 7 318.'],['12 675 i 25','Završava se sa 75, pa jeste deljiv sa 25.'],['9 240','Završava se sa 40: deljiv je sa 4, ali nije sa 25.']],
  [['3 824 и 4','Посматрамо 24. Пошто је 24 : 4 = 6, број је дељив са 4.'],['7 318 и 4','Број 18 није дељив са 4, па није ни 7 318.'],['12 675 и 25','Завршава се са 75, па јесте дељив са 25.'],['9 240','Завршава се са 40: дељив је са 4, али није са 25.']]),
 questions:[
  {t:'4',p:P('Koji broj je deljiv sa 4?','Који број је дељив са 4?'),a:['2 314','2 316','2 318'],c:1,e:P('Poslednje dve cifre su 16.','Последње две цифре су 16.')},
  {t:'25',p:P('Koji broj je deljiv sa 25?','Који број је дељив са 25?'),a:['4 215','4 225','4 235'],c:1,e:P('Broj se završava sa 25.','Број се завршава са 25.')},
  {t:'4',p:P('Da li je 73 408 deljivo sa 4?','Да ли је 73 408 дељиво са 4?'),a:P(['Da','Ne'],['Да','Не']),c:0,e:P('08 predstavlja broj 8, a 8 je deljivo sa 4.','08 представља број 8, а 8 је дељиво са 4.')},
  {t:'25',p:P('Koji završetak ne daje deljivost sa 25?','Који завршетак не даје дељивост са 25?'),a:['00','25','40','75'],c:2,e:P('Dozvoljeni završeci su 00, 25, 50 i 75.','Дозвољени завршеци су 00, 25, 50 и 75.')},
  {t:'kombinovanje',p:P('Sa kojim brojevima je deljiv 6 500?','Са којим бројевима је дељив 6 500?'),a:P(['samo sa 4','samo sa 25','sa 4 i 25'],['само са 4','само са 25','са 4 и 25']),c:2,e:P('00 je deljivo sa 4, a ujedno je završetak za 25.','00 је дељиво са 4, а уједно је завршетак за 25.')},
  {t:'greska',p:P('Mila kaže: „1 425 nije deljivo sa 25.“ Da li je u pravu?','Мила каже: „1 425 није дељиво са 25.“ Да ли је у праву?'),a:P(['Jeste','Nije'],['Јесте','Није']),c:1,e:P('Poslednje dve cifre su 25.','Последње две цифре су 25.')}
 ]
},
{
 id:'kriterijumi-3-9',quiz:'mini-kriterijumi-3-9',num:62,area:P('DELJIVOST','ДЕЉИВОСТ'),title:P('Deljivost sa 3 i 9','Дељивост са 3 и 9'),
 intro:P('Saberemo cifre broja. Zatim proverimo da li je taj zbir deljiv sa 3 ili sa 9.','Саберемо цифре броја. Затим проверимо да ли је тај збир дељив са 3 или са 9.'),
 visual:`<div class="digit-sum" aria-label="Zbir cifara broja 7452"><b>7</b><span>+</span><b>4</b><span>+</span><b>5</b><span>+</span><b>2</b><strong>= 18</strong></div>`,
 rules:P(['zbir cifara deljiv sa 3 ⇒ broj je deljiv sa 3','zbir cifara deljiv sa 9 ⇒ broj je deljiv sa 9','ako je broj deljiv sa 9, deljiv je i sa 3'],['збир цифара дељив са 3 ⇒ број је дељив са 3','збир цифара дељив са 9 ⇒ број је дељив са 9','ако је број дељив са 9, дељив је и са 3']),
 examples:P([
  ['7 452','7 + 4 + 5 + 2 = 18. Broj je deljiv sa 3 i sa 9.'],['2 314','2 + 3 + 1 + 4 = 10. Nije deljiv ni sa 3 ni sa 9.'],['8 127','8 + 1 + 2 + 7 = 18. Deljiv je sa 3 i 9.'],['4 725','Zbir je 18; poslednja cifra je 5. Broj je deljiv sa 3, 5 i 9.']],
  [['7 452','7 + 4 + 5 + 2 = 18. Број је дељив са 3 и са 9.'],['2 314','2 + 3 + 1 + 4 = 10. Није дељив ни са 3 ни са 9.'],['8 127','8 + 1 + 2 + 7 = 18. Дељив је са 3 и 9.'],['4 725','Збир је 18; последња цифра је 5. Број је дељив са 3, 5 и 9.']]),
 questions:[
  {t:'zbir',p:P('Koliki je zbir cifara broja 6 327?','Колики је збир цифара броја 6 327?'),a:['15','18','21'],c:1,e:P('6 + 3 + 2 + 7 = 18.','6 + 3 + 2 + 7 = 18.')},
  {t:'3',p:P('Koji broj je deljiv sa 3?','Који број је дељив са 3?'),a:['421','423','425'],c:1,e:P('4 + 2 + 3 = 9.','4 + 2 + 3 = 9.')},
  {t:'9',p:P('Koji broj je deljiv sa 9?','Који број је дељив са 9?'),a:['5 418','5 419','5 420'],c:0,e:P('5 + 4 + 1 + 8 = 18.','5 + 4 + 1 + 8 = 18.')},
  {t:'odnos',p:P('Broj je deljiv sa 9. Da li je sigurno deljiv sa 3?','Број је дељив са 9. Да ли је сигурно дељив са 3?'),a:P(['Da','Ne'],['Да','Не']),c:0,e:P('Svaki sadržalac broja 9 sadržalac je i broja 3.','Сваки садржалац броја 9 садржалац је и броја 3.')},
  {t:'cifra',p:P('Koja cifra dopunjava 24_ da broj bude deljiv sa 9?','Која цифра допуњава 24_ да број буде дељив са 9?'),a:['1','3','5'],c:1,e:P('2 + 4 + 3 = 9.','2 + 4 + 3 = 9.')},
  {t:'greska',p:P('Ognjen je sabrao samo poslednje dve cifre. Da li je postupak dobar?','Огњен је сабрао само последње две цифре. Да ли је поступак добар?'),a:P(['Jeste','Nije'],['Јесте','Није']),c:1,e:P('Za 3 i 9 sabiramo sve cifre.','За 3 и 9 сабирамо све цифре.')}
 ]
},
{
 id:'kriterijumi-pregled',quiz:'mini-kriterijumi-pregled',num:63,area:P('DELJIVOST','ДЕЉИВОСТ'),title:P('Uslovi deljivosti — pregled','Услови дељивости — преглед'),
 intro:P('Najpre biramo pravo pravilo. Tek onda posmatramo završetak broja ili zbir njegovih cifara.','Најпре бирамо право правило. Тек онда посматрамо завршетак броја или збир његових цифара.'),
 visual:`<div class="criteria-map"><span><b>poslednja cifra</b>2 · 5 · 10</span><span><b>poslednje dve</b>4 · 25 · 100</span><span><b>zbir cifara</b>3 · 9</span><span><b>završne nule</b>10 · 100 · 1 000</span></div>`,
 rules:P(['odredi delilac koji proveravaš','izaberi odgovarajući deo zapisa','primeni pravilo i obrazloži zaključak'],['одреди делилац који провераваш','изабери одговарајући део записа','примени правило и образложи закључак']),
 examples:P([
  ['8 640 i 4','Poslednje dve cifre su 40, a 40 je deljivo sa 4.'],['8 640 i 9','Zbir cifara je 18, pa je broj deljiv sa 9.'],['8 640 i 25','Završetak 40 nije 00, 25, 50 ili 75.'],['8 640 i 10','Poslednja cifra je 0, pa je broj deljiv sa 10.']],
  [['8 640 и 4','Последње две цифре су 40, а 40 је дељиво са 4.'],['8 640 и 9','Збир цифара је 18, па је број дељив са 9.'],['8 640 и 25','Завршетак 40 није 00, 25, 50 или 75.'],['8 640 и 10','Последња цифра је 0, па је број дељив са 10.']]),
 questions:[
  {t:'pravilo',p:P('Šta posmatramo za deljivost sa 4?','Шта посматрамо за дељивост са 4?'),a:P(['poslednju cifru','poslednje dve cifre','zbir cifara'],['последњу цифру','последње две цифре','збир цифара']),c:1,e:P('Pravilo za 4 koristi poslednje dve cifre.','Правило за 4 користи последње две цифре.')},
  {t:'pravilo',p:P('Šta posmatramo za deljivost sa 9?','Шта посматрамо за дељивост са 9?'),a:P(['zbir svih cifara','poslednje dve cifre','samo poslednju cifru'],['збир свих цифара','последње две цифре','само последњу цифру']),c:0,e:P('Sabiramo sve cifre.','Сабирамо све цифре.')},
  {t:'izbor',p:P('Sa kojim brojem je 12 375 deljivo?','Са којим бројем је 12 375 дељиво?'),a:['4','8','25'],c:2,e:P('Broj se završava sa 75.','Број се завршава са 75.')},
  {t:'izbor',p:P('Koji broj je deljiv sa 2, 3 i 5?','Који број је дељив са 2, 3 и 5?'),a:['420','425','432'],c:0,e:P('420 je paran, zbir cifara je 6 i završava se nulom.','420 је паран, збир цифара је 6 и завршава се нулом.')},
  {t:'zakljucivanje',p:P('Da li je 5 400 deljivo sa 2, 3, 5, 9, 10, 25 i 100?','Да ли је 5 400 дељиво са 2, 3, 5, 9, 10, 25 и 100?'),a:P(['Sa svim navedenim','Nije sa 25','Nije sa 9'],['Са свим наведеним','Није са 25','Није са 9']),c:0,e:P('Završava se sa 00, a zbir cifara je 9.','Завршава се са 00, а збир цифара је 9.')},
  {t:'cifra',p:P('Koja cifra dopunjava 81_ da broj bude deljiv sa 9 i sa 5?','Која цифра допуњава 81_ да број буде дељив са 9 и са 5?'),a:['0','5','9'],c:0,e:P('Mora se završiti sa 0 ili 5; 8 + 1 + 0 = 9.','Мора се завршити са 0 или 5; 8 + 1 + 0 = 9.')}
 ]
},
{
 id:'veza-nzd-nzs',quiz:'mini-veza-nzd-nzs',num:64,area:P('DELJIVOST','ДЕЉИВОСТ'),title:P('Veza između NZD i NZS','Веза између НЗД и НЗС'),
 intro:P('Za dva pozitivna prirodna broja proizvod NZD-a i NZS-a jednak je proizvodu tih brojeva.','За два позитивна природна броја производ НЗД-а и НЗС-а једнак је производу тих бројева.'),
 visual:`<div class="relation-formula"><span>NZD(a, b) · NZS(a, b)</span><b>=</b><span>a · b</span></div>`,
 rules:P(['pravilo važi za dva pozitivna prirodna broja','ako znamo tri podatka, četvrti možemo izračunati','rezultat uvek proverimo proizvodom'],['правило важи за два позитивна природна броја','ако знамо три податка, четврти можемо израчунати','резултат увек проверимо производом']),
 examples:P([
  ['a = 12, b = 18','NZD = 6, NZS = 36; 6 · 36 = 12 · 18 = 216.'],['a = 8, b = 20','NZD = 4, pa je NZS = (8 · 20) : 4 = 40.'],['NZD = 5, NZS = 60, a = 15','b = (5 · 60) : 15 = 20.'],['Uzajamno prosti brojevi 7 i 12','NZD = 1, pa je NZS = 7 · 12 = 84.']],
  [['a = 12, b = 18','НЗД = 6, НЗС = 36; 6 · 36 = 12 · 18 = 216.'],['a = 8, b = 20','НЗД = 4, па је НЗС = (8 · 20) : 4 = 40.'],['НЗД = 5, НЗС = 60, a = 15','b = (5 · 60) : 15 = 20.'],['Узајамно прости бројеви 7 и 12','НЗД = 1, па је НЗС = 7 · 12 = 84.']]),
 questions:[
  {t:'provera',p:P('NZD(12, 18) = 6 i NZS(12, 18) = 36. Koliki je njihov proizvod?','НЗД(12, 18) = 6 и НЗС(12, 18) = 36. Колики је њихов производ?'),a:['42','108','216'],c:2,e:P('6 · 36 = 216.','6 · 36 = 216.')},
  {t:'nzs',p:P('NZD(8, 20) = 4. Odredi NZS(8, 20).','НЗД(8, 20) = 4. Одреди НЗС(8, 20).'),a:['20','40','160'],c:1,e:P('(8 · 20) : 4 = 40.','(8 · 20) : 4 = 40.')},
  {t:'broj',p:P('NZD = 3, NZS = 60 i a = 12. Odredi b.','НЗД = 3, НЗС = 60 и a = 12. Одреди b.'),a:['12','15','20'],c:1,e:P('b = (3 · 60) : 12 = 15.','b = (3 · 60) : 12 = 15.')},
  {t:'uzajamno-prosti',p:P('Brojevi 5 i 8 su uzajamno prosti. Koliki je njihov NZS?','Бројеви 5 и 8 су узајамно прости. Колики је њихов НЗС?'),a:['13','40','80'],c:1,e:P('Kada je NZD = 1, NZS je proizvod brojeva.','Када је НЗД = 1, НЗС је производ бројева.')},
  {t:'tacnost',p:P('Da li uvek važi NZD(a,b) · NZS(a,b) = a · b?','Да ли увек важи НЗД(a,b) · НЗС(a,b) = a · b?'),a:P(['Da, za pozitivne prirodne brojeve','Ne'],['Да, за позитивне природне бројеве','Не']),c:0,e:P('To je veza između NZD-a i NZS-a.','То је веза између НЗД-а и НЗС-а.')},
  {t:'obrnuti',p:P('NZD(9, 15) = 3. Odredi NZS(9, 15).','НЗД(9, 15) = 3. Одреди НЗС(9, 15).'),a:['15','45','135'],c:1,e:P('(9 · 15) : 3 = 45.','(9 · 15) : 3 = 45.')}
 ]
},
{
 id:'duz-i-duzina',quiz:'mini-duz-i-duzina',num:65,area:P('GEOMETRIJA','ГЕОМЕТРИЈА'),title:P('Duž i dužina duži','Дуж и дужина дужи'),
 intro:P('Duž je deo prave između dve krajnje tačke. Duž i njena dužina nisu isto.','Дуж је део праве између две крајње тачке. Дуж и њена дужина нису исто.'),
 visual:`<div class="term-geometry"><svg viewBox="0 0 640 190" role="img" aria-label="Duž AB dužine 7 centimetara"><line x1="100" y1="85" x2="540" y2="85"/><circle cx="100" cy="85" r="8"/><circle cx="540" cy="85" r="8"/><text x="82" y="60">A</text><text x="535" y="60">B</text><path d="M100 125v18M540 125v18M100 134h440"/><text x="288" y="174">7 cm</text></svg></div>`,
 rules:P(['duž označavamo krajnjim tačkama: AB','dužinu zapisujemo |AB| ili AB = 7 cm, prema dogovoru u udžbeniku','dužina je broj izražen jedinicom mere'],['дуж означавамо крајњим тачкама: AB','дужину записујемо |AB| или AB = 7 cm, према договору у уџбенику','дужина је број изражен јединицом мере']),
 examples:P([
  ['Krajnje tačke A i B','One određuju duž AB.'],['|AB| = 7 cm','To je dužina duži AB.'],['AB = 35 mm','35 mm = 3,5 cm.'],['M je između A i B','Ako je AM = 3 cm i MB = 5 cm, onda je AB = 8 cm.']],
  [['Крајње тачке A и B','Оне одређују дуж AB.'],['|AB| = 7 cm','То је дужина дужи AB.'],['AB = 35 mm','35 mm = 3,5 cm.'],['M је између A и B','Ако је AM = 3 cm и MB = 5 cm, онда је AB = 8 cm.']]),
 questions:[
  {t:'pojam',p:P('Koliko krajnjih tačaka ima duž?','Колико крајњих тачака има дуж?'),a:['0','1','2'],c:2,e:P('Duž je ograničena sa dve krajnje tačke.','Дуж је ограничена са две крајње тачке.')},
  {t:'oznaka',p:P('Koji zapis predstavlja dužinu duži AB?','Који запис представља дужину дужи AB?'),a:['|AB| = 6 cm','AB = {6}','A ∈ 6 cm'],c:0,e:P('Dužina je broj sa jedinicom mere.','Дужина је број са јединицом мере.')},
  {t:'jedinice',p:P('Koliko je 48 mm u centimetrima i milimetrima?','Колико је 48 mm у центиметрима и милиметрима?'),a:['4 cm 8 mm','48 cm','8 cm 4 mm'],c:0,e:P('10 mm = 1 cm.','10 mm = 1 cm.')},
  {t:'zbir',p:P('M je između A i B. AM = 4 cm, MB = 6 cm. Odredi AB.','M је између A и B. AM = 4 cm, MB = 6 cm. Одреди AB.'),a:['2 cm','10 cm','24 cm'],c:1,e:P('AB = AM + MB.','AB = AM + MB.')},
  {t:'deo',p:P('AB = 13 cm, AM = 5 cm. M je između A i B. Odredi MB.','AB = 13 cm, AM = 5 cm. M је између A и B. Одреди MB.'),a:['8 cm','18 cm','65 cm'],c:0,e:P('MB = AB − AM.','MB = AB − AM.')},
  {t:'razlika',p:P('Koja duž je duža: 72 mm ili 8 cm?','Која дуж је дужа: 72 mm или 8 cm?'),a:P(['72 mm','8 cm','Jednake su'],['72 mm','8 cm','Једнаке су']),c:1,e:P('8 cm = 80 mm.','8 cm = 80 mm.')}
 ]
},
{
 id:'prenos-racunanje-duzi',quiz:'mini-prenos-racunanje-duzi',num:66,area:P('GEOMETRIJA','ГЕОМЕТРИЈА'),title:P('Prenošenje, sabiranje i oduzimanje duži','Преношење, сабирање и одузимање дужи'),
 intro:P('Šestarom prenosimo duž bez očitavanja broja. Na polupravi zatim možemo konstruisati zbir ili razliku duži.','Шестаром преносимо дуж без очитавања броја. На полуправој затим можемо конструисати збир или разлику дужи.'),
 visual:`<div class="term-geometry"><svg viewBox="0 0 680 250" role="img" aria-label="Sabiranje duži AB i CD"><line x1="70" y1="65" x2="260" y2="65"/><circle cx="70" cy="65" r="7"/><circle cx="260" cy="65" r="7"/><text x="55" y="42">A</text><text x="255" y="42">B</text><line x1="380" y1="65" x2="520" y2="65"/><circle cx="380" cy="65" r="7"/><circle cx="520" cy="65" r="7"/><text x="365" y="42">C</text><text x="515" y="42">D</text><line x1="70" y1="180" x2="400" y2="180"/><circle cx="70" cy="180" r="7"/><circle cx="260" cy="180" r="7"/><circle cx="400" cy="180" r="7"/><text x="55" y="215">O</text><text x="248" y="215">M</text><text x="390" y="215">N</text><text x="180" y="155">AB</text><text x="315" y="155">CD</text></svg></div>`,
 rules:P(['otvor šestara postavimo na krajeve zadate duži','isti otvor prenesemo na polupravu','za zbir duži prenosimo jednu pa drugu; za razliku kraću odvojimo od duže'],['отвор шестара поставимо на крајеве задате дужи','исти отвор пренесемо на полуправу','за збир дужи преносимо једну па другу; за разлику краћу одвојимо од дуже']),
 examples:P([
  ['a = 4 cm, b = 3 cm','a + b = 7 cm.'],['a = 8 cm, b = 5 cm','a − b = 3 cm.'],['OM ≅ AB','Duž OM preneta je šestarom i podudarna je duži AB.'],['AB = 6 cm, BC = 2 cm','Ako je B između A i C, onda je AC = 8 cm.']],
  [['a = 4 cm, b = 3 cm','a + b = 7 cm.'],['a = 8 cm, b = 5 cm','a − b = 3 cm.'],['OM ≅ AB','Дуж OM пренета је шестаром и подударна је дужи AB.'],['AB = 6 cm, BC = 2 cm','Ако је B између A и C, онда је AC = 8 cm.']]),
 questions:[
  {t:'alat',p:P('Kojim priborom najtačnije prenosimo duž?','Којим прибором најтачније преносимо дуж?'),a:P(['šestarom','uglomером','lenjirom bez merenja'],['шестаром','угломером','лењиром без мерења']),c:0,e:P('Otvor šestara čuva rastojanje krajnjih tačaka.','Отвор шестара чува растојање крајњих тачака.')},
  {t:'zbir',p:P('a = 5 cm i b = 4 cm. Odredi a + b.','a = 5 cm и b = 4 cm. Одреди a + b.'),a:['1 cm','9 cm','20 cm'],c:1,e:P('Saberi dužine: 5 + 4.','Сабери дужине: 5 + 4.')},
  {t:'razlika',p:P('a = 11 cm i b = 7 cm. Odredi a − b.','a = 11 cm и b = 7 cm. Одреди a − b.'),a:['4 cm','18 cm','77 cm'],c:0,e:P('Oduzmi dužine: 11 − 7.','Одузми дужине: 11 − 7.')},
  {t:'redosled',p:P('Šta prvo radimo pri prenošenju duži AB?','Шта прво радимо при преношењу дужи AB?'),a:P(['Merimo ugao','Šestar otvorimo od A do B','Crtamo krug'],['Меримо угао','Шестар отворимо од A до B','Цртамо круг']),c:1,e:P('Otvor šestara mora biti jednak dužini AB.','Отвор шестара мора бити једнак дужини AB.')},
  {t:'nepoznato',p:P('a + b = 14 cm i a = 9 cm. Odredi b.','a + b = 14 cm и a = 9 cm. Одреди b.'),a:['5 cm','23 cm','126 cm'],c:0,e:P('b = 14 − 9.','b = 14 − 9.')},
  {t:'poredjenje',p:P('a = 6 cm, b = 2 cm. Koliko je a duža od b?','a = 6 cm, b = 2 cm. Колико је a дужа од b?'),a:['3 cm','4 cm','8 cm'],c:1,e:P('Tražimo razliku 6 − 2.','Тражимо разлику 6 − 2.')}
 ]
},
{
 id:'brojevna-poluprava',quiz:'mini-brojevna-poluprava',num:67,area:P('RAZLOMCI','РАЗЛОМЦИ'),title:P('Razlomci na brojevnoj polupravoj','Разломци на бројевној полуправој'),
 intro:P('Jediničnu duž podelimo na jednake delove. Imenilac kaže na koliko delova, a brojilac koliko delova brojimo od nule.','Јединичну дуж поделимо на једнаке делове. Именилац каже на колико делова, а бројилац колико делова бројимо од нуле.'),
 visual:`<div class="term-geometry fraction-ray"><svg viewBox="0 0 700 220" role="img" aria-label="Brojevna poluprava podeljena na četvrtine"><defs><marker id="rayArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z"/></marker></defs><line x1="55" y1="120" x2="650" y2="120" marker-end="url(#rayArrow)"/>${[70,190,310,430,550].map((x,i)=>`<line x1="${x}" y1="105" x2="${x}" y2="135"/><text x="${x-8}" y="170">${i===0?'0':i===4?'1':''}</text>`).join('')}<g class="svg-fraction"><text x="184" y="64">1</text><line x1="176" y1="72" x2="202" y2="72"/><text x="184" y="96">4</text></g><g class="svg-fraction"><text x="304" y="64">2</text><line x1="296" y1="72" x2="322" y2="72"/><text x="304" y="96">4</text></g><g class="svg-fraction"><text x="424" y="64">3</text><line x1="416" y1="72" x2="442" y2="72"/><text x="424" y="96">4</text></g></svg></div>`,
 rules:P(['od 0 do 1 podeli na onoliko delova koliko pokazuje imenilac','od 0 prebroj onoliko delova koliko pokazuje brojilac','razlomci veći od 1 nalaze se desno od broja 1'],['од 0 до 1 подели на онолико делова колико показује именилац','од 0 преброј онолико делова колико показује бројилац','разломци већи од 1 налазе се десно од броја 1']),
 examples:P([
  [F(1,4),'Prva od četiri jednake podele između 0 i 1.'],[F(3,4),'Treća podela od nule kada je jedinica podeljena na četiri dela.'],[F(4,4),'Ista tačka kao broj 1.'],[F(5,4),'Jedna četvrtina desno od broja 1.']],
  [[F(1,4),'Прва од четири једнаке поделе између 0 и 1.'],[F(3,4),'Трећа подела од нуле када је јединица подељена на четири дела.'],[F(4,4),'Иста тачка као број 1.'],[F(5,4),'Једна четвртина десно од броја 1.']]),
 questions:[
  {t:'podela',p:P(`Na koliko delova delimo jedinicu za ${F(3,5)}?`,`На колико делова делимо јединицу за ${F(3,5)}?`),a:['3','5','8'],c:1,e:P('Imenilac određuje broj jednakih delova.','Именилац одређује број једнаких делова.')},
  {t:'brojanje',p:P(`Koliko delova brojimo od nule za ${F(3,5)}?`,`Колико делова бројимо од нуле за ${F(3,5)}?`),a:['3','5','2'],c:0,e:P('Brojilac je 3.','Бројилац је 3.')},
  {t:'jedan',p:P('Koji razlomak predstavlja broj 1?','Који разломак представља број 1?'),a:[F(3,4),F(4,4),F(5,4)],c:1,e:P('Brojilac i imenilac su jednaki.','Бројилац и именилац су једнаки.')},
  {t:'poredak',p:P('Koji razlomak je najbliži nuli?','Који разломак је најближи нули?'),a:[F(1,6),F(3,6),F(5,6)],c:0,e:P('Jednaki imenioci: manji brojilac daje manji razlomak.','Једнаки имениоци: мањи бројилац даје мањи разломак.')},
  {t:'desno',p:P('Koji razlomak se nalazi desno od broja 1?','Који разломак се налази десно од броја 1?'),a:[F(2,3),F(3,3),F(4,3)],c:2,e:P('Razlomak veći od 1 ima brojilac veći od imenioca.','Разломак већи од 1 има бројилац већи од имениоца.')},
  {t:'jednakost',p:P(`Koji razlomak je na istoj tački kao ${F(1,2)}?`,`Који разломак је на истој тачки као ${F(1,2)}?`),a:[F(1,4),F(2,4),F(3,4)],c:1,e:P(`${F(1,2)} = ${F(2,4)}.`,`${F(1,2)} = ${F(2,4)}.`)}
 ]
},
{
 id:'zaokruzivanje-decimalnih',quiz:'mini-zaokruzivanje-decimalnih',num:68,area:P('RAZLOMCI','РАЗЛОМЦИ'),title:P('Zaokruživanje decimalnih brojeva','Заокруживање децималних бројева'),
 intro:P('Posmatramo cifru odmah desno od mesta na koje zaokružujemo. Cifre 0–4 ne menjaju posmatranu cifru, a 5–9 je povećavaju za 1.','Посматрамо цифру одмах десно од места на које заокружујемо. Цифре 0–4 не мењају посматрану цифру, а 5–9 је повећавају за 1.'),
 visual:`<div class="rounding-visual"><span>7,<b>4</b><i>6</i></span><strong>→ 7,5</strong><small>cifra 6 podiže desetinku 4 na 5</small></div>`,
 rules:P(['podvuci cifru na mestu na koje zaokružuješ','pogledaj prvu cifru desno od nje','0–4: ostaje; 5–9: povećaj za 1'],['подвуци цифру на месту на које заокружујеш','погледај прву цифру десно од ње','0–4: остаје; 5–9: повећај за 1']),
 examples:P([
  ['4,27 na desetine','Gledamo stotinku 7, pa dobijamo 4,3.'],['8,43 na desetine','Gledamo stotinku 3, pa dobijamo 8,4.'],['12,586 na stotine','Gledamo hiljaditinku 6, pa dobijamo 12,59.'],['19,5 na jedinice','Gledamo desetinku 5, pa dobijamo 20.']],
  [['4,27 на десетине','Гледамо стотинку 7, па добијамо 4,3.'],['8,43 на десетине','Гледамо стотинку 3, па добијамо 8,4.'],['12,586 на стотине','Гледамо хиљадитинку 6, па добијамо 12,59.'],['19,5 на јединице','Гледамо десетинку 5, па добијамо 20.']]),
 questions:[
  {t:'desetine',p:P('Zaokruži 6,27 na jednu decimalu.','Заокружи 6,27 на једну децималу.'),a:['6,2','6,3','6,27'],c:1,e:P('Stotinka je 7, pa desetinku povećavamo.','Стотинка је 7, па десетинку повећавамо.')},
  {t:'desetine',p:P('Zaokruži 3,84 na jednu decimalu.','Заокружи 3,84 на једну децималу.'),a:['3,8','3,9','4,0'],c:0,e:P('Stotinka je 4, pa desetinka ostaje 8.','Стотинка је 4, па десетинка остаје 8.')},
  {t:'stotine',p:P('Zaokruži 5,376 na dve decimale.','Заокружи 5,376 на две децимале.'),a:['5,37','5,38','5,4'],c:1,e:P('Hiljaditinka je 6, pa stotinku povećavamo.','Хиљадитинка је 6, па стотинку повећавамо.')},
  {t:'jedinice',p:P('Zaokruži 14,6 na ceo broj.','Заокружи 14,6 на цео број.'),a:['14','15','14,6'],c:1,e:P('Desetinka je 6, pa 14 zaokružujemo na 15.','Десетинка је 6, па 14 заокружујемо на 15.')},
  {t:'granica',p:P('Zaokruži 9,95 na jednu decimalu.','Заокружи 9,95 на једну децималу.'),a:['9,9','10,0','9,95'],c:1,e:P('Stotinka 5 povećava 9 desetinki, pa prelazimo na 10,0.','Стотинка 5 повећава 9 десетинки, па прелазимо на 10,0.')},
  {t:'procena',p:P('Koji broj se na jednu decimalu zaokružuje na 7,3?','Који број се на једну децималу заокружује на 7,3?'),a:['7,24','7,27','7,36'],c:1,e:P('Kod 7,27 stotinka 7 podiže desetinku 2 na 3.','Код 7,27 стотинка 7 подиже десетинку 2 на 3.')}
 ]
}
];

function pick(v,s){return Array.isArray(v)?v[s==='latn'?0:1]:v}
function langBlock(latn,cyrl){return `<div class="term-lang term-latn">${latn}</div><div class="term-lang term-cyrl">${cyrl}</div>`}
function examplesMarkup(items){return `<div class="term-example-grid">${items.map((x,i)=>`<article><b>${i+1}</b><strong>${x[0]}</strong><p>${x[1]}</p></article>`).join('')}</div>`}
function ruleMarkup(items){return `<ol class="term-rule-list">${items.map(x=>`<li>${x}</li>`).join('')}</ol>`}
function lessonMarkup(x){const lat=`<p>${x.intro[0]}</p>${x.visual}<h3>Pravilo korak po korak</h3>${ruleMarkup(x.rules[0])}<h3>Rešeni primeri</h3>${examplesMarkup(x.examples[0])}<div class="remember"><strong>ZAPAMTI</strong><p>Najpre prepoznaj šta se traži. Zatim primeni samo odgovarajuće pravilo i proveri zaključak.</p></div>`,cy=`<p>${x.intro[1]}</p>${x.visual}<h3>Правило корак по корак</h3>${ruleMarkup(x.rules[1])}<h3>Решени примери</h3>${examplesMarkup(x.examples[1])}<div class="remember"><strong>ЗАПАМТИ</strong><p>Најпре препознај шта се тражи. Затим примени само одговарајуће правило и провери закључак.</p></div>`;return `<section id="${x.id}" class="lesson term-lesson route-hidden"><div class="wrap lesson-grid"><aside><span>${x.area[1]}</span><div class="progress"><i></i></div><small>Комплетна лекција</small></aside><article><p class="eyebrow term-latn">${x.area[0]}</p><p class="eyebrow term-cyrl">${x.area[1]}</p><h2 class="term-latn">${x.title[0]}</h2><h2 class="term-cyrl">${x.title[1]}</h2>${langBlock(lat,cy)}</article></div></section><section id="${x.quiz}" class="quiz wrap term-mini route-hidden" data-term-quiz="${x.num}"><div class="quiz-head"><div><p class="eyebrow term-latn">MINI-PROVERA</p><p class="eyebrow term-cyrl">МИНИ-ПРОВЕРА</p><h2 class="term-latn">${x.title[0]} — 6 zadataka</h2><h2 class="term-cyrl">${x.title[1]} — 6 задатака</h2></div><div class="score"><span class="term-latn">REZULTAT</span><span class="term-cyrl">РЕЗУЛТАТ</span><strong><i data-mini-score>0</i>/6</strong></div></div><div class="question-card" data-mini-card><div class="question-meta"><span data-mini-number>1 / 6</span><span class="term-latn">KRATKO I JASNO</span><span class="term-cyrl">КРАТКО И ЈАСНО</span></div><h3 data-mini-question></h3><div class="answer-grid" data-mini-answers></div><p data-mini-feedback aria-live="polite"></p><button class="next" data-mini-next hidden></button></div><div class="result" data-mini-result hidden><span class="result-icon">✓</span><h2 data-mini-title></h2><p data-mini-text></p><button class="cta" data-mini-restart></button></div></section>`}
function script(){return window.getSiteScript?window.getSiteScript():'cyrl'}
function initQuiz(section,x){let index=0,score=0,answered=false;const $=s=>section.querySelector(s);function render(){const s=script(),q=x.questions[index];$('[data-mini-number]').textContent=`${index+1} / ${x.questions.length}`;$('[data-mini-question]').innerHTML=pick(q.p,s);const choices=Array.isArray(q.a[0])?q.a[s==='latn'?0:1]:q.a;$('[data-mini-answers]').innerHTML=choices.map((a,i)=>`<button type="button" data-mini-choice="${i}">${a}</button>`).join('');$('[data-mini-feedback]').textContent='';$('[data-mini-feedback]').className='';$('[data-mini-next]').hidden=true;answered=false;section.querySelectorAll('[data-mini-choice]').forEach(b=>b.addEventListener('click',()=>answer(+b.dataset.miniChoice,b)))}function answer(choice,button){if(answered)return;answered=true;const q=x.questions[index],ok=choice===q.c;if(ok){score++;button.classList.add('correct');$('[data-mini-feedback]').textContent=script()==='latn'?'Tačno!':'Тачно!';$('[data-mini-feedback]').className='correct'}else{button.classList.add('wrong');section.querySelector(`[data-mini-choice="${q.c}"]`)?.classList.add('correct');$('[data-mini-feedback]').textContent=pick(q.e,script());$('[data-mini-feedback]').className='wrong'}$('[data-mini-score]').textContent=score;section.querySelectorAll('[data-mini-choice]').forEach(b=>b.disabled=true);$('[data-mini-next]').hidden=false;$('[data-mini-next]').textContent=index===x.questions.length-1?(script()==='latn'?'Prikaži rezultat':'Прикажи резултат'):(script()==='latn'?'Sledeći zadatak':'Следећи задатак');window.dispatchEvent(new CustomEvent('matematikon:quiz-answer',{detail:{quizNumber:x.num,questionIndex:index,correct:ok}}))}function next(){if(!answered)return;if(index<x.questions.length-1){index++;render();return}const pct=Math.round(score/x.questions.length*100),s=script(),weak=x.questions.filter((_,i)=>section.querySelectorAll?false:false);$('[data-mini-card]').hidden=true;$('[data-mini-result]').hidden=false;$('[data-mini-title]').textContent=s==='latn'?`Rezultat: ${score}/${x.questions.length}`:`Резултат: ${score}/${x.questions.length}`;$('[data-mini-text]').textContent=pct>=85?(s==='latn'?'Odlično razumeš ovu lekciju.':'Одлично разумеш ову лекцију.'):pct>=60?(s==='latn'?'Dobro. Ponovi pitanja na kojima si pogrešio.':'Добро. Понови питања на којима си погрешио.'):(s==='latn'?'Vrati se na primere, pa pokušaj ponovo.':'Врати се на примере, па покушај поново.');$('[data-mini-restart]').textContent=s==='latn'?'Pokušaj ponovo':'Покушај поново';window.dispatchEvent(new CustomEvent('matematikon:quiz-complete',{detail:{quizNumber:x.num,score,total:x.questions.length}}))}function restart(){index=0;score=0;$('[data-mini-score]').textContent='0';$('[data-mini-result]').hidden=true;$('[data-mini-card]').hidden=false;render()}$('[data-mini-next]').addEventListener('click',next);$('[data-mini-restart]').addEventListener('click',restart);section._termRender=()=>{if(!$('[data-mini-result]').hidden){const s=script(),pct=Math.round(score/x.questions.length*100);$('[data-mini-title]').textContent=s==='latn'?`Rezultat: ${score}/${x.questions.length}`:`Резултат: ${score}/${x.questions.length}`;$('[data-mini-text]').textContent=pct>=85?(s==='latn'?'Odlično razumeš ovu lekciju.':'Одлично разумеш ову лекцију.'):pct>=60?(s==='latn'?'Dobro. Ponovi pitanja na kojima si pogrešio.':'Добро. Понови питања на којима си погрешио.'):(s==='latn'?'Vrati se na primere, pa pokušaj ponovo.':'Врати се на примере, па покушај поново.');$('[data-mini-restart]').textContent=s==='latn'?'Pokušaj ponovo':'Покушај поново'}else render()};render()}
window.MatematikONTermLessons=lessonData;const stage=document.querySelector('#source-stage');if(!stage)return;stage.insertAdjacentHTML('beforeend',`<div id="term-lessons-root" class="route-hidden">${lessonData.map(lessonMarkup).join('')}</div>`);lessonData.forEach(x=>initQuiz(document.querySelector(`#${x.quiz}`),x));
const geometryFinal=window.geometryExtraQuestions?.[47];if(Array.isArray(geometryFinal)&&geometryFinal.length>=2){geometryFinal[0]={l:0,q:P('M je između A i B. AM = 4 cm, MB = 7 cm. Odredi AB.','M је између A и B. AM = 4 cm, MB = 7 cm. Одреди AB.'),a:['3 cm','11 cm','28 cm','14 cm'],c:1,e:P('AB = AM + MB = 4 cm + 7 cm = 11 cm.','AB = AM + MB = 4 cm + 7 cm = 11 cm.')};geometryFinal[1]={l:1,q:P('Dužine su a = 9 cm i b = 4 cm. Kolika je dužina a − b?','Дужине су a = 9 cm и b = 4 cm. Колика је дужина a − b?'),a:['5 cm','13 cm','36 cm','2,25 cm'],c:0,e:P('a − b = 9 cm − 4 cm = 5 cm.','a − b = 9 cm − 4 cm = 5 cm.')}}
})();

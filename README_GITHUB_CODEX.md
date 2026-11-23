# MatematikON 5 — originalni izvoz za privatni GitHub i Codex Cloud

Datum provere: 14.10.2026. Originalna Sites verzija: **v45**.

Izvor je preuzet iz originalnog autentifikovanog Git skladišta projekta. Njegov HEAD `78aafa37cd9505aacefa14758dc27bf4d97a12d7` tačno odgovara najnovijoj sačuvanoj verziji i njenom uspešnom objavljivanju. Paket sadrži svih **71** originalno praćenih fajlova i dostupnu istoriju od **46** Git commit-a. Nije pravljen prema HTML-u javnog sajta.

Produkcioni sajt: https://matematikon-5.milos-python.chatgpt.site

## Prvo pokretanje

Sve komande pokreći iz korena raspakovanog `matematikon-5/` foldera.

```bash
python3 migration/verify-original.py
python3 -m http.server 5175 --bind 127.0.0.1 --directory dist
```

Otvori http://localhost:5175. Na Windowsu sa instaliranim Pythonom možeš koristiti `py -m http.server 5175 --bind 127.0.0.1 --directory dist`.

Ovo je statički projekat bez npm zavisnosti. `package.json` i lock fajl nisu postojali i nisu izmišljeni. HTML, CSS i JavaScript u korenu predstavljaju izvor; originalni `dist/` sadrži identične objavljene fajlove. Za pregled izvorne kopije koristi isti server bez `--directory dist`. Nemoj dvoklikom otvarati HTML preko `file://`: sajt koristi putanje koje počinju sa `/`.

Jedina uočena spoljašnja vizuelna zavisnost je Manrope iz Google Fonts (`fonts.googleapis.com` i `fonts.gstatic.com`). Originalne reference su sačuvane. Font nije vendorizovan, pa ZIP nije potpuna offline kopija fonta; ako font nije dostupan, browser koristi CSS fallback.

Provera: `bash codex/check.sh` (Node 24.19.0 korišćen pri izvozu). Kopiranje izvora u `dist/` nije rađeno: oba originalna skupa fajlova su sačuvana bez izmena.

## Privatni GitHub — dva potpuno odvojena repozitorijuma

Za ovaj paket koristi ime `matematikon-5`. Drugi MatematikON projekat mora imati svoj repozitorijum. Na GitHubu napravi prazan **Private** repozitorijum bez automatski dodatog README-a, licence ili .gitignore-a. Autentifikaciju obavi kroz GitHub/SSH ili credential manager; token se ne stavlja u kod ili URL.

Najjednostavniji uvoz, sa jednim početnim commit-om:

```bash
git init -b main
git add .
git commit -m "Import original MatematikON 5 v45"
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/matematikon-5.git
git push -u origin main
```

Zameni `YOUR_GITHUB_USERNAME` svojim stvarnim korisničkim imenom. Ovaj izvoz nije povezan ni sa jednim novim GitHub remote-om i nema GitHub credentiale.

Ako želiš sačuvati originalnu istoriju umesto jednog početnog commit-a, prvo u drugom, praznom folderu kloniraj `migration/original-history.bundle`:

```bash
git clone /absolute/path/matematikon-5/migration/original-history.bundle matematikon-5-with-history
```

Taj klon sadrži originalne fajlove i istoriju. Kopiraj samo dodatke za prenos iz ZIP-a u klon (spisak je u `migration/added-files.json`), proveri `python3 migration/verify-original.py`, commit-uj dodatke, pa zameni bundle remote sa `git remote set-url origin git@github.com:YOUR_GITHUB_USERNAME/matematikon-5.git` i uradi `git push -u origin main`. Ne šalji postojeći Sites Git remote na GitHub kao credential.

## Codex Cloud

Napravi zasebno privatno okruženje samo za repozitorijum `matematikon-5`. Omogući Codex GitHub konektoru pristup tom privatnom repozitorijumu. U web/desktop interfejsu pokreni `Work in > Cloud > Select environment > Create environment`; odaberi samo ovaj repozitorijum. Nazivi opcija mogu se razlikovati između trenutnog i starijeg interfejsa.

Zadaj da koristi Node 24.19.0, Python 3 i Linux. Komanda za instalaciju/pripremu je `bash codex/setup.sh`, iz korena ovog projekta. Komanda za start je `bash codex/start-preview.sh`; provera je `bash codex/check.sh`. Komanda `migration/verify-original.py` služi proveri netaknutog početnog uvoza i namerno prijavljuje buduće izmene originalnog koda; ne koristi je kao uslov koji zabranjuje kasniji autorizovani razvoj.

Za instalaciju nema mrežnih npm zahteva; Google Fonts može biti potreban browseru za originalni font. Nakon provere sačuvaj i objavi **Codex okruženje** za korišćenje u novim zadacima; ovo nije objavljivanje MatematikON sajta. U ovom izvozu okruženje nije kreirano ili aktivirano.

Predlog prvog Codex zadatka:

> Pročitaj AGENTS.md i README_GITHUB_CODEX.md. Proveri početni uvoz bez menjanja aplikacije. Radi samo u ovom repozitorijumu. Ne objavljuj sajt, ne menjaj matematički sadržaj, localStorage ključeve ili napredak učenika. Prijavi provere, nedostajuće zahteve i ograničenja.

Zvanično uputstvo, provereno 14.10.2026: https://learn.chatgpt.com/docs/environments/cloud-environments

## Napredak učenika i postojeći sajt

Originalni ključevi su `matematikon-learning-v1` i `matematikon-script`. Izvorni kod koji ih čita/upisuje nije menjan. Nisu izvršeni `localStorage.clear`, brisanje napretka, promena domena ili nova publikacija.

localStorage pripada konkretnoj adresi/origin-u, browseru i uređaju. Prenos koda na GitHub ne prenosi podatke iz browsera učenika. Lokalni ili drugi budući domen imaće svoj zaseban storage; to ne briše napredak na staroj adresi. Ovaj paket ne sadrži privatne podatke učenika niti kopiju njihovog localStorage-a.

Originalni `.openai/hosting.json` sa identitetom postojećeg sajta je zadržan i nema token. Njegovo prisustvo nije automatsko objavljivanje. Nisu dodati deploy skriptovi ili GitHub Actions. Bez posebne instrukcije ne pokretati Sites save/deploy niti push na originalni Sites remote.

## Dokaz o izvozu i provere

- `migration/source-provenance.json`: projekat, verzija, commit i metapodaci svih dostupnih verzija.
- `migration/original-files.sha256.json`: SHA-256 svih originalnih fajlova.
- `migration/original-history.bundle`: originalna preuzeta Git istorija bez tokena.
- `migration/verify-original.py`: proverava bajtove, bez pisanja ili vraćanja fajlova.
- `migration/added-files.json`: samo novi dokumenti i pomoćne komande za prenos.
- `migration/validation.json`: stvarni rezultati provera i ograničenja.

Nijedan originalni fajl nije prepisan. Dodati su samo dokumentacija, `.nvmrc`, pomoćne komande i metapodaci izvoza, kao i .gitignore koji izvorni statički projekat nije imao. Originalni sadržaj i funkcije ostaju isti.

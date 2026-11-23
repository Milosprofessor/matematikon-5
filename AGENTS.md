# MatematikON 5 — pravila rada

Radi isključivo u ovom projektu. MatematikON6-8 je odvojen projekat.
Početna kopija je originalna Sites v45, commit `78aafa37cd9505aacefa14758dc27bf4d97a12d7`.

- Pročitaj README_GITHUB_CODEX.md pre prvog zadatka.
- U početnom uvozu ne menjaj matematički sadržaj, teoriju, zadatke, nivoe, crteže, ID-jeve, navigaciju, pismo ili funkcionalnosti.
- Čuvaj postojeće localStorage ključeve, šemu i kompatibilnost napretka. Ne izvršavaj reset, clear ili removeItem pri proveri/importu.
- Ne objavljuj sajt, ne menjaj produkcioni domen, pristup, Sites verzije ili hosting identitet bez izričitog zahteva za objavljivanje.
- Ne push-uj na originalni Sites remote. Predviđen je zaseban privatni GitHub repozitorijum.
- Nikad ne stavljaj tokene, .env, npm cache ili podatke učenika u Git.
- `.nvmrc` sadrži runtime korišćen za proveru izvoza.
- Početni uvoz: `python3 migration/verify-original.py`. Ovo proverava početne bajtove; buduće autorizovane izmene će promeniti rezultat i ne treba ih automatski vraćati.
- Provera aplikacije: `bash codex/check.sh`. Projekat nema npm zavisnosti; proveravaju se originalni JS fajlovi. Server: python3 -m http.server 5175 --bind 127.0.0.1 --directory dist.
- Izveštavaj šta je stvarno provereno i šta nije; ne nazivaj samo build potpunim browser testiranjem.

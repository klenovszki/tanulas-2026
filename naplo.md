# Tanulási napló

## 2026.04.26 - Nap 1

Mit csináltam ma:
- GitHub fiók aktiválva, első repó (tanulas-2026) létrehozva
- Git telepítve és konfigurálva (név, email)
- Repó klónozva a gépre
- Első commit ciklus: szerkesztés → add → commit → push
- Homebrew telepítve
- GitHub CLI bekötve, jelszó-mentes push működik
- VS Code beállítva alapértelmezett Git editor-nak
- Vim-csapdából kimásztam (Esc → :q! → Enter)

Mit tanultam:
- Git ≠ GitHub (motor és garázs)
- A "command not found" hibák értelmezése
- A staging area koncepciója (working dir → staging → repository)

Amit holnapra megőriznék:
- A `git push` jelszó nélkül működik
- A `code .` parancs megnyitja VS Code-ban a mappát
- Ha valami furcsa, először `git status`

## 2026.04.27 - Nap 2

Mit csináltam ma:
- nvm (Node Version Manager) telepítve Homebrew-val
- Node.js v24.15.0 (LTS - krypton) telepítve
- npm 11.12.1 elérhető
- ~/.zshrc bővítve nvm beállításokkal
- Node REPL kipróbálva (interaktív JavaScript)
- Új mappa: nap2-elso-script
- Első saját JavaScript script (hello.js): változók, console.log, template literal, függvény
- Kód módosítás → mentés → futtatás ciklus megérzése
- Git ciklus magadtól (git add . trükk megtanulva)

Mit tanultam:
- LTS = Long Term Support, stabil Node verziók (krypton kódnévvel a v24)
- A shell (zsh) és a JavaScript két különböző "nyelv": shell az eszköz, JS a tartalom
- A .zshrc minden új terminálban automatikusan lefut (tartós beállítások helye)
- Template literal: `${valtozo}` szintaxis a backtick-ekben (Python f-string megfelelője)
- const = nem változtatható változó, ezt használjuk 95%-ban
- function() {} szintaxis - a Pythonos def megfelelője
- A Node REPL (`node` parancs önmagában) jó kísérletezésre, scripteket fájlból futtatunk
- git add . = "minden változás ebben a mappában"

Amit holnapra megőriznék:
- A `node fajl.js` parancs futtat egy JavaScript fájlt
- Mindig `cd` vissza a repó főmappájába a Git parancsok előtt
- Ha bizonytalan vagyok, először `git status`
- A `nvm ls` mutatja az összes telepített Node verziót

Holnap: Git branch-ek (Nap 3)

## 2026.04.29 - Nap 3

Mit csináltam ma:
- Megértettem a branch fogalmat (párhuzamos univerzum, ugyanaz a mappa)
- Új branch létrehozása (`git checkout -b feature/...`)
- Branch-ek listázása (`git branch`, `git branch -a`)
- Branch-váltás (`git checkout BRANCHNEV`)
- Pull Request workflow GitHub-on (Open → Merge)
- Lokális szinkronizálás (`git pull`)
- Branch-ek törlése (`-d` kis d biztonságos, `-D` nagy D erővel)
- Vizuális Git-fa (`git log --oneline --all --graph`)

Mit tanultam:
- A branch NEM külön mappa, csak egy mutató egy commit-ra
- A Git ugyanabban a mappában cseréli a fájltartalmat branch-váltáskor
- A merge célja: branch munkáját átemelni a main-be
- Pull Request = "kapu" a változásokhoz, csapatmunkában kötelező
- A `git pull` letölti a GitHub változásokat (push ellentéte)
- A `Fast-forward` jelentése: tisztán szinkronizálható volt
- A VS Code bal alsó sarka mindig a jelenlegi branchet mutatja
- Az `origin/...` mutató = "ezt látja a GitHub"
- Az AI (Claude Code) tud Git parancsokat futtatni, de a workflow-t nekem kell érteni

Konvenciók megtanulva:
- `feature/` prefix az új feature branch-ekhez
- Merge után a branchet illik törölni (takarítás)
- Mindig `git status`-szal kezdjük a munkát

Holnap: .gitignore és .env titkok (Nap 4)
## 2026.05.09 - Nap 4

Mit csináltam ma:
- Megértettem az API kulcs biztonsági kockázatát (a $5,000 horror sztori)
- Létrehoztam .env fájlt API_KEY-vel a nap2-elso-script mappában
- Létrehoztam .gitignore fájlt, kizárva: .env és node_modules/
- Telepítettem a dotenv csomagot (npm install dotenv)
- Megírtam env-test.js scriptet ami beolvassa és kiírja a kulcsot
- Sikeresen futtattam: node env-test.js
- Git ciklus magadtól (3 új fájl ment fel: env-test.js, package.json, package-lock.json)

Mit tanultam:
- A .env egy szöveges fájl kulcs-érték párokkal (API_KEY=...)
- A .gitignore egy LISTA - ami benne van, azt a Git ignorálja
- A "biztonság" nem a fájlra vonatkozik, hanem a TERJEDÉS megakadályozására
- A dotenv csomag betölti a .env-et a process.env változóba
- A kódban SOSEM szerepel a kulcs - csak hivatkozás rá: process.env.API_KEY
- A node_modules/ azért zárjuk ki, mert mások npm install-lal letöltik
- A package.json és package-lock.json viszont MEGY GitHub-ra (a projekt leírása)

A vibe coder workflow elvei (élesben tapasztalva):
- Az elgépelések normálisak (.nv vs .env, gip vs git, -commit vs commit)
- A hibaüzenetek konkrétak - olvasni kell, nem panaszkodni
- A `cat fájlnév` a legbiztosabb módja annak, hogy lássuk, mi van benne
- A -m kapcsoló a commit-nál a "message" rövidítése

Konvenciók:
- A .gitignore-ba MINDIG kerüljön: .env és node_modules/ (alapcsomag)
- Új projekt elején ELŐSZÖR csináld meg a .gitignore-t
- API kulcs SOHA ne kerüljön kódba, mindig .env-be

Holnap (Nap 5): Python ↔ JavaScript szintaxis összevetés

## 2026.05.09 - Nap 5

Mit csináltam ma:
- Áttekintettem a Python ↔ JavaScript szintaxis legfontosabb különbségeit
- Megtanultam: const, console.log, template literal (${} backtick-ben)
- Olvasási gyakorlatok JavaScript kódokon (3 példa)
- Megértettem a beszélgetés-előzmény (messages array) működését
- Ráláttam, hogy ez lesz a kurzus első hetének alapköve

Mit tanultam (a 3 kulcs JS-Python megfeleltetés):
- print() ↔ console.log()
- f"Szia {nev}" ↔ `Szia ${nev}` (backtick!)
- def() ↔ function()
- list ↔ array (ugyanaz, más szó)
- len(x) ↔ x.length
- list.append() ↔ array.push()
- for x in lista ↔ for (const x of array)
- dict ↔ object ({...})
- == ↔ === (három egyenlőségjel JS-ben!)
- True/False ↔ true/false (kis betűvel!)
- None ↔ null

Vibe coder felismerések:
- Nem kell fejből írni JS-t, OLVASNI kell tudni
- A {role: "user", content: "..."} objektum lesz a Claude API alapköve
- A messages.push() pattern minden chatbot szíve
- A felismerés: "ha valami nem érthető a kódban, az AI-nak el tudom mondani, mit változtasson"

A 3 dolog amit MOST rögzítek (mostantól reflex):
1. JS-ben mindig const a változók elé
2. JS-ben mindig console.log a print helyett
3. JS-ben mindig backtick (`) a template literal-hoz

Holnap (Nap 6): Heti összefoglaló - 1. hét lezárása

## 2026.05.09 - Nap 6 (1. hét lezárása)

Mit csináltam:
- Készítettem egy 1-het-osszefoglalo.md fájlt a repóba
- Áttekintettem az 5 nap eredményeit
- Ráláttam, hogy az oktatói előkövetelmény "Git + terminál" része KÉSZ
- Ráláttam: az AI (Claude Code) és én EGYÜTT haladunk - ez a vibe coder lényege

A vibe coder mindset reflexei (most már automatikusak):
- Ha hibaüzenetet kapok, ELŐSZÖR olvasom, csak utána kérdezek
- Ha bizonytalan vagyok, futtatok cat-et a fájlra
- Ha tévedek a kvízen, ÚJRA megpróbálom a megértés után
- Az AI nem helyettesít, hanem GYORSÍT - a felismerés rajtam van

A repóm: https://github.com/klenovszki/tanulas-2026

Holnaptól: 2. hét - JavaScript mélyítés
## 2026.05.09 - Nap 8 (2. hét indítás, pihenőt átugrottam)

Mit csináltam:
- Megtanultam: const vs let vs var
- Megértettem a scope koncepciót: a {} az életsáv határa
- Felfedeztem: a return ÉRTÉKET ad át, NEM változót
- Életszerű példán láttam, hogy néz ki egy Anthropic API hívás

Mit tanultam (a 3 kulcs):
- const: 95% használat, nem változik
- let: 5% használat, számlálók, frissülő érték
- var: kerüld, régi (ha látod, javítsd)
- Scope: a {} zárójelek között deklarált változó CSAK ott él
- A függvényen belül deklarált változó a függvény végén MEGHAL
- A return az értéket adja át, az új változó (a hívónál) ezt kapja meg

A vibe coder felismerés:
- Ha hibaüzenet "X is not defined", scope a baj
- A megoldás 90%-ban: hozd ki a deklarációt feljebb
- Vagy ne hivatkozz rá kívül, ha nincs rá szükség

Ráláttam:
- A 3. heti kurzus első napi kódjának struktúráját már OLVASNI tudom
- A const valasz = await client.messages.create({...}) sor érthető
- A return valaszSzoveg az ÉRTÉKET adja vissza, nem a változót

Mai eredmény: 4 napi anyag egy nap alatt (Nap 4 gyakorlat + 5 + 6 + 8)
- Az 1. hét hivatalosan lezárva
- Vibe coder utazási stratégia tesztelve (tablet → Mac)
- Hányattatás érzés feldolgozva, magabiztos vagyok az 1. hét teljesítésére

Holnap: Nap 9 - Tömb műveletek (map, filter, reduce)
## 2026.05.17 - Nap 9

Mit csináltam:
- Megtanultam az arrow function (=>) szintaxist
- Megértettem: map, filter, reduce működését
- 3 olvasási gyakorlaton alkalmaztam (NRC kontextusban)
- Felismertem: filter().map() láncolás lehetséges

Mit tanultam (a 4 kulcskifejezés):
- map: átalakítja minden elemre (pl. × 0.8 = 20% kedvezmény)
- filter: kiszűri a megfelelőket (pl. >= 6)
- reduce: összesíti egy értékre (összeadja, átlagot számol)
- .length: megszámolja az elemeket

A vibe coder felismerés:
- Ha látok reduce + / length = átlagszámítás
- A map/filter/reduce az NRC adatelemzés alapja
- Pontos szóhasználat = pontos AI-kommunikáció
- filter().map() = szűrés MAJD átalakítás (sorrend számít!)

Holnap: Nap 10 - Objektumok és destrukturálás

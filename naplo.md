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
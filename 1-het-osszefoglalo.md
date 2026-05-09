# 1. hét – Fejlesztői környezet + Git fluencia

**Időszak:** 2026.04.26 – 2026.05.09 (5 aktív nap)
**Kontextus:** Felkészülés a robot_dreams AI ágensfejlesztés kurzusra

## Mit építettem

Egy működő, GitHub-on közzétett tanulási repó:
**https://github.com/klenovszki/tanulas-2026**

## Mit tudok mostantól

### Fejlesztői környezet
- macOS terminál (zsh) napi szintű használata
- Homebrew, GitHub CLI, nvm, Node.js LTS (v24)
- VS Code mint integrált IDE (terminál + szerkesztő + Git)
- ⌘+J gyorsbillentyű a saját workflow-mhoz beállítva

### Git és GitHub
- `git init`, `git status`, `git add`, `git commit -m`, `git push`
- Branch workflow: `checkout -b`, Pull Request, Merge, `git pull`
- Branch törlés (`-d` biztonságos vs `-D` erővel)
- Vizuális Git-fa: `git log --oneline --all --graph`
- Hibadiagnosztika hibaüzenetek alapján

### Biztonság (kulcsok kezelése)
- `.env` fájl mint kulcs-érték pár tároló
- `.gitignore` mint "tűzfal" (`.env`, `node_modules/` kizárva)
- A védelem nem a fájlban, hanem a TERJEDÉS megakadályozásában van
- `dotenv` csomag használata Node.js-ben

### JavaScript olvasás
- `console.log`, `const`, template literal (backtick + `${}`)
- Tömbök: `.length`, `.push()`, `for...of` ciklus
- Objektumok: `{ key: value }`, `obj.key` elérés
- Egyenlőség: `===` (nem `==`)
- Python ↔ JS megfeleltetések (mintha angol-német)

## A vibe coder felismerések

1. **A számítógép pontosan azt csinálja, amit írsz** – nem találja ki, mit gondoltál
2. **A hibaüzenetek konkrétak** – mindig olvasd el, mielőtt panaszkodsz
3. **Az elgépelések normálisak** – javíthatók, nem kell stresszelni
4. **`cat fájlnév`** mindig mutatja az igazat – ne hagyatkozz csak a VS Code-ra
5. **AI-val való kommunikáció előfeltétele**: értsd a kódot olvasásszinten

## Konvenciók, amiket mostantól betartok

- Új projekt elején ELŐSZÖR `.gitignore` (`.env`, `node_modules/` alapcsomag)
- API kulcs SOHA ne kerüljön kódba, mindig `.env`-be
- Git ciklust mindig `git status`-szal kezdem
- Commit message MINDIG leíró és érthető
- Branch nevek `feature/...` prefix-szel

## Statisztikák

- **GitHub commit-ok:** 11+ (és növekszik)
- **Sikeres kvízek:** 6 (5 elméleti + 5 gyakorlati)
- **Tanulási napok:** 5 / 56 (9%)
- **Készenléti szint a kurzusra:** 1. heti előkövetelmény TELJESÍTVE

## Mi következik – 2. hét

JavaScript mélyítés (Node.js + olvasás-fókusz). A cél: ráhangolódás az
Anthropic SDK használatára Node-ban. Eddig terminálon és Git-en dolgoztunk;
mostantól a **kódra** koncentrálunk.

A 3. héten jön az ELSŐ Claude API hívás Node-ból - ott már látható
formában AI agentet építünk.
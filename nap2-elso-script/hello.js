// Az első Node.js scriptem - 2026.04.27
// Ez egy egysoros üdvözlés és pár alapművelet bemutatására

const nev = "Klenovszki János";
const ev = 2027;
const projekt = "AI ágensfejlesztés tanulás";

console.log("===================================");
console.log(`Szia ${nev}!`);
console.log(`Ma ${ev}, és ezen dolgozunk: ${projekt}`); 
console.log ("TESZT ELEK");

// Egy egyszerű számítás
const napokKurzusig = 56;
const napokVegezve = 2;
const hatraVan = napokKurzusig - napokVegezve;
console.log(`A kurzusig még ${hatraVan} nap van.`);

// Egy függvény példa
function udvozles(name) {
  return `Helló, ${name}! Készen állsz egy újabb tanulási napra?`;
}

console.log(udvozles(nev));
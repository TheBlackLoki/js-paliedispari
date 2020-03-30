// Creo gioco pari o dispari casuale tra due computer

var pariDispariPC = Math.floor(Math.random() * 2)

if (pariDispariPC = 0) {
  console.log("Il Computer 1 è pari")
  console.log("Il Computer 2 è dispari")
}else {
  console.log("Il Computer 1 è dispari")
  console.log("Il Computer 2 è pari")
}
// Generiamo due numeri da 1 a 5 per i computer

var primoNumero = numberGenerator(1,5)
var secondoNumero = numberGenerator(1,5)
console.log("Il numero del Computer 1 è " + primoNumero);
console.log("Il numero del Computer 2 è " + secondoNumero);

 // Sommiamo i due numeri e dichiariamo se è pari o dispari

var somma = primoNumero + secondoNumero

console.log("La somma dei numeri è " + somma);

var finale = pari(somma);
if (finale===true) {
  console.log("il numero è pari");
}else {
  console.log("il numero è dispari");
}

// Decretiamo il vincitore

if (finale===true & pariDispariPC===1||finale===false && pariDispariPC===0) {
  console.log("Ha vinto il Computer 1")
}else {
  console.log("Ha vinto il Computer 2")
}

 // Creo funzioni per il generatore dei numeri e per il check sul pari e dispari

function numberGenerator(min, max){
    var risultato = Math.floor(Math.random() * (max - min + 1) + min);
    return risultato;
}
function pari(a){
  if (a % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}

// Creo gioco pari o dispari

var pariDispariPC = Math.floor(Math.random() * 2)

if (pariDispariPC = 0) {
  alert("Il Computer 1 è pari")
  alert("Il Computer 2 è dispari")
}else {
  alert("Il Computer 1 è dispari")
  alert("Il Computer 2 è pari")
}
// Generiamo due numeri da 1 a 5 per il pc

var primoNumero = numberGenerator(1,5)
var secondoNumero = numberGenerator(1,5)
console.log(primoNumero);
console.log(secondoNumero);

 // Sommiamo i due numeri e dichiariamo chi ha vinto.

var somma = primoNumero + secondoNumero
console.log(somma);
var finale = pari(somma);
console.log(finale);
if (finale = true && pariDispariPC = 0 || finale = false && pariDispariPC = 1) {
  alert("Ha vinto il Computer 1")
}else {
  alert("Ha vinto il Computer 2")
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

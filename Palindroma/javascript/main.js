// Chiedo a utente di inserire come input una parola
var parola = prompt("Scrivi una parola")

// controllo che la parola sia palindroma

check = controlloPal(parola)
console.log(parola);
console.log(check);

// dò output a utente dicendogli che ho verificato

if (check === parola) {
  alert("la parola è palindroma")
}else {
  alert("la parola non è palindroma")
}

// tramite una funzione verifico se la parola inserita è palindroma o meno

function controlloPal(a) {
  return a.split("").reverse().join("");
}

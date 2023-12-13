// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const scelta = prompt('Scegli pari o dispari');
console.log('scelta',scelta , typeof scelta)

const numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('numeroGiocatore',numeroGiocatore , typeof numeroGiocatore)

const numeroComputer =getRndInteger(1,5);
console.log('numeroComputer',numeroComputer , typeof numeroComputer)

const sommaNumeri = numeroGiocatore + numeroComputer;
console.log('sommaNumeri',sommaNumeri , typeof sommaNumeri)

const even = isEven(sommaNumeri);
console.log('even',even , typeof even)


if(even && scelta == 'pari'){
    alert('Hai vinto');
}
else if(!even && scelta =='dispari'){
    alert('Hai vinto');
}
else{
    alert('Hai perso');
}

// if (scelta == 'pari' && isEven(sommaNumeri) == true) {
//     alert('Hai vinto');
// }
// else if (scelta == 'dispari' && isEven(sommaNumeri) == false) {
//     alert('Hai vinto');
// }
// else{
//     alert('Hai perso');
// }




// funzione random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// function pari
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }    
    return false;
}
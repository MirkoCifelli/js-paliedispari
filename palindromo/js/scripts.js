// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parolaInserita = prompt('Inserisci una parola');
console.log('parolaInserita', parolaInserita, typeof parolaInserita)

const parolaPalindroma = reverse(parolaInserita);
console.log('parolaPalindroma', parolaPalindroma, typeof parolaPalindroma)


if(parolaInserita == parolaPalindroma){
    alert('Palindroma');
}
else{
    alert('non e palindroma');
}



function reverse(parola) {
    let  parolaReverse = ('');
    for (let i = parola.length -1; i >= 0; i--){
        parolaReverse += parola[i];    
    }
    return parolaReverse;
}
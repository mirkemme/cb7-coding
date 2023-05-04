// ESERCIZIO 2
// Dato un array di numeri, stampare il velore minimo e massimo

let myArray = [10, 30, 20, 50, 40, 100];
let max = 0;
let min = myArray[0];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > max)
        max = myArray[i];
    if (myArray[i] < min)
        min = myArray[i];
}

console.log(myArray);
console.log("Il valore minimo è " + min);
console.log("Il valore massimo è " + max);
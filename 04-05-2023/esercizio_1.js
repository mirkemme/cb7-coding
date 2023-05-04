// ESERCIZIO 1
// Scrivere un piccolo script javascript che inverta un array senza utilizzare il metodo reverse().

let myArray = ["uno", "due", "tre", "quattro", "cinque"];

for (let i = myArray.length - 1; i >= 0; i--) {
    let element = myArray[i];
    myArray.splice(i, 1);
    myArray.push(element);
}

console.log(myArray);
/* ESERCIZIO 1 */

let myNumber = parseInt(prompt("Inserisci un numero: "));

if (isNaN(myNumber))
    console.log("Non hai inserito numero!");
else
    if (!(myNumber % 2))
        console.log("Hai inserito un numero pari.")
    else
        console.log("Hai inserito un numero dispari.");

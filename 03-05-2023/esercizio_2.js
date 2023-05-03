/* ESERCIZIO 2 */

let myNumber = parseInt(prompt("Inserisci un numero: "));
let flag = false;

isNaN(myNumber) ? console.log("Non hai inserito un numero") : flag = true;
                
if (flag)
    flag && myNumber % 2 ? console.log("Hai inserito un numero dispari")
                         : console.log("Hai inserito un numero pari"); 
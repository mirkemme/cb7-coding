/* ESERCIZIO AVANZATO */

let firstOperand = parseInt(prompt("Inserisci il primo numero: "));
let operator = prompt("Inserisci l'operatore (+, -, /, *): ");
let secondOperand = parseInt(prompt("Inserisci il secondo numero: "));

if (isNaN(firstOperand) || isNaN(secondOperand))
    console.log("Dati inseriti errati!")
else {
    switch (operator) {
        case "+": console.log(firstOperand + secondOperand);
            break
        case "-": console.log(firstOperand - secondOperand);
            break
        case "*": console.log(firstOperand * secondOperand);
            break
        case "/":
            if (secondOperand === 0)
                console.log("Impossibile dividere per zero!")
            else console.log(firstOperand / secondOperand);
            break
        }
}
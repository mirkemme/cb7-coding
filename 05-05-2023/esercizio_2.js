// ESERCIZIO 2
// Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno 03-05-2023.

// function declarations
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}
// end function declarations

let firstOperand = parseInt(prompt("Inserisci il primo numero: "));
let operator = prompt("Inserisci l'operatore (+, -, /, *): ");
let secondOperand = parseInt(prompt("Inserisci il secondo numero: "));

if (isNaN(firstOperand) || isNaN(secondOperand))
    console.log("Dati inseriti errati!")
else {
    switch (operator) {
        case "+": console.log(addition(firstOperand, secondOperand));
            break
        case "-": console.log(subtraction(firstOperand, secondOperand));
            break
        case "*": console.log(multiplication(firstOperand, secondOperand));
            break
        case "/":
            if (secondOperand === 0)
                console.log("Impossibile dividere per zero!")
            else console.log(division(firstOperand, secondOperand));
            break
    }
}
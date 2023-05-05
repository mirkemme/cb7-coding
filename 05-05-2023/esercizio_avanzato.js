// ESERCIZIO AVANZATO
// Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.

// function declarations
function calculator(op, num1, num2) {
    switch (op) {
        case "+": console.log(addition(num1, num2));
            break
        case "-": console.log(subtraction(num1, num2));
            break
        case "*": console.log(multiplication(num1, num2));
            break
        case "/":
            if (num2 === 0)
                alert("Impossibile dividere per zero!")
            else console.log(division(num1, num2));
            break
    }
}

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

function percentage(num, per) {
    let result = (num / 100) * per;
    return result;
}
// end function declarations

let operator = prompt("Inserisci l'operatore (+, -, /, *, %): ");
let firstOperand, secondOperand;

if (operator === "%") {
    firstOperand = parseInt(prompt("Inserisci il numero di cui vuoi calcolare la percentuale: "));
    let percent = prompt("Inserisci il valore della percentuale: ");
    console.log(percentage(firstOperand, percent));
} else {
    firstOperand = parseInt(prompt("Inserisci il primo numero: "));
    secondOperand = parseInt(prompt("Inserisci il secondo numero: "));
    if (isNaN(firstOperand) || isNaN(secondOperand))
        console.log("Dati inseriti errati!");
    else
        calculator(operator, firstOperand, secondOperand);
}
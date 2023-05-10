// ESERCIZIO 2
/* Utilizzando callbacks, ricreare la calcolatrice in forma base includento il DOM, pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina
(qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente, per es.potrete avere anche un solo operatore e due valori da sommare)
 */

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const divResult = qS(".result");
const firstOperand = qS(".firstNum");
const op = qS(".operator");
const secondOperand = qS(".secondNum");
const calculate = qS(".submit");

const sum = (num1, num2) => {
    showResult(parseInt(num1) + parseInt(num2));
}

const sub = (num1, num2) => {
    showResult(parseInt(num1) - parseInt(num2));
}

const mult = (num1, num2) => {
    showResult(parseInt(num1) * parseInt(num2));
}

const div = (num1, num2) => {
    showResult(parseInt(num1) / parseInt(num2));
}

const showResult = (result) => {
    let newPar = cE("h2");
    newPar.textContent = `Il risultato è ${result}`;
    divResult.appendChild(newPar);
}

const calculator = (num1, num2, opFn) => opFn(num1, num2);

const opName = () => {
    switch (op.value) {
        case "+": calculator(firstOperand.value, secondOperand.value, sum);
            break
        case "-": calculator(firstOperand.value, secondOperand.value, sub);
            break
        case "*": calculator(firstOperand.value, secondOperand.value, mult);
            break
        case "/": calculator(firstOperand.value, secondOperand.value, div);
            break
    }
}

calculate.addEventListener("click", opName);

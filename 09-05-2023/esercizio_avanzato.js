// ESERCIZIO AVANZATO
/* creare un 'input', una lista HTML 'ul' e un 'button' "Aggiungi elemento" che aggiungerà un elemento alla lista.
l'elemento aggiunto deve contenere come "textContent" il valore dell'input inserito */

const myBtn = document.querySelector(".myButton");
const newElement = document.querySelector(".addElement");
const myList = document.querySelector(".list");

function myFunction() {
    let newElementList = document.createElement("li");
    newElementList.textContent = newElement.value;
    myList.appendChild(newElementList);
    document.querySelector(".myForm").reset();
}

myBtn.addEventListener("click", myFunction);
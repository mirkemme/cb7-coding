// ESERCIZIO 2
/* Creare un campo di input HTML e un pulsante.
Aggiungere un gestore di eventi 'submit'.
Al submit dell'utente il gestore di eventi deve leggere il valore dell'input dell'utente
e visualizzarlo in un elemento di testo come un 'div' o un 'p'. */

const myDiv = document.querySelector(".myDiv");
const myInput = document.querySelector(".input");
const myBtn = document.querySelector(".button");

function myFunction() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = myInput.value;
    myDiv.appendChild(newParagraph);
    document.querySelector(".myForm").reset();
}

myBtn.addEventListener("click", myFunction);
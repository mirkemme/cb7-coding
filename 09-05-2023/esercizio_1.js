// ESERCIZIO 1
/* Creare un pulsante HTML e un elemento di testo vuoto come una un 'p'.
Aggiungere un gestore di eventi click al pulsante utilizzando il metodo addEventListener().
Al click dell'utente deve modificare il testo dell'elemento di testo per visualizzare un messaggio di saluto.
 */

const myBtn = document.querySelector(".btn");
const myParagraph = document.querySelector(".paragraph");

function myFunction() {
    myParagraph.textContent = "Sotto la panca la capra crepa. Bye Bye!";
}

myBtn.addEventListener("click", myFunction);
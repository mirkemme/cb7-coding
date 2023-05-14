/* ESERCIZIO 1
Sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi.
La seguente lista deve essere renderizzata sul DOM e non su console.log.Attenzione: non scrivere in modo statico alcun elemento(il body della pagina HTML sarà vuoto) */

/* Ho cercato di seguire il meno possibile il codice visto oggi a lezione per concentrare il focus esclusivamente sulla richiesta dell`esercizio.
Ho creato un'array di oggetti che viene scansionato da un forEach che passa alla funzione itemGen ogni singolo oggetto per renderizzarlo.
Quindi itemGen chiama la funzione createDiv per creare un nuovo elemento div che conterrà 3 elementi: "h2" per il titolo della canzone
e due "p" per il nome dell'artista e per l'anno. I tre elementi vengono quindi appesi al div padre e successivamente la funzione itemGen
chiama la funzione appendNewElem per appendere il div completo al body.

Continuerò inserendo la possibilità di creare nuove cards o eliminarle. 

*********** EDIT 14/05/2023 ************
Aggiunto form per la creazione di nuove cards.
*/

const songs = [
    {
        id: 1,
        title: "Back in Black",
        artist: "AC/DC",
        year: 1981,
        listened: true,
    },
    {
        id: 2,
        title: "Lithium",
        artist: "Nirvana",
        year: 1991,
        listened: false,
    },
    {
        id: 3,
        title: "Twist and Shout",
        artist: "The Beatles",
        year: 1963,
        listened: false,
    },
    {
        id: 4,
        title: "Radio Ga Ga",
        artist: "Queen",
        year: 1984,
        listened: true,
    },
    {
        id: 5,
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        year: 1971,
        listened: false,
    },
    {
        id: 6,
        title: "Starlight",
        artist: "Muse",
        year: 2006,
        listened: true,
    },
]

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);

const titleGen = (value) => {
    let title = cE("h2");
    title.className = "songTitle";
    title.textContent = value;
    return title;
}

const artistGen = (value) => {
    let artist = cE("p");
    artist.className = "nameArtist";
    artist.textContent = value;
    return artist;
}

const yearGen = (value) => {
    let year = cE("p");
    year.className = "year";
    year.textContent = value;
    return year;
}

const createDiv = (object) => {
    let newDiv = cE("div");
    newDiv.className = "card";
    newDiv.id = object.id;
    if (object.listened) newDiv.classList.add("listened");
    return newDiv;
}

const appendElementToDiv = (father, child) => father.append(child); //appende il figlio (h1 o p) al div padre
const appendNewElem = (value) => document.body.appendChild(value);  //appende il nuovo div (con i figli) al body

/* renderizza la card (oggetto) passata come parametro */
const itemGen = (itemObj) => {
    let newElem = createDiv(itemObj);
    appendElementToDiv(newElem, titleGen(itemObj.title));   //appende l'elemento h1 (title) al div padre
    appendElementToDiv(newElem, artistGen(itemObj.artist));  //appende l'elemento p (artist) al div padre
    appendElementToDiv(newElem, yearGen(itemObj.year));    //appende l'elemento p (year) al div padre
    appendNewElem(newElem);
}

// aggiunge il listener alle nuove cards inserite dall'utente
const addListener = (id) => {
    let selectCard = document.getElementById(id);
    console.log(selectCard);
    selectCard.addEventListener("click", () => {
        selectCard.classList.toggle("listened");
        let songObj = songs.find((item) => item.id === parseInt(selectCard.id));
        songObj.listened = !songObj.listened;
    });
};

songs.forEach((item) => itemGen(item));

let listCards = qSA(".card");
const formDiv = cE("div"); //creo il div che conterrà il form per l'inserimento di nuove cards da parta dell'utente
const formEl = cE("form"); //creo l'elemento di tipo form 
const inputTitle = cE("input");  //creo un nuovo elemento di tipo input per inserire il titolo della canzone
const inputArtist = cE("input");  //creo un nuovo elemento di tipo input per inserire l'artista
const inputYear = cE("input");  //creo un nuovo elemento di tipo input per inserire l'anno
const submitEl = cE("input"); //creo un elemento di tipo input per il submit dle form

// crea un elemento di tipo form per far inserire all'utente nuove cards
formEl.className = "form";
formDiv.className = "inputCard";

inputTitle.setAttribute("type", "text");
inputTitle.setAttribute("placeholder", "titolo");
inputTitle.className = "inputTitle";

inputArtist.setAttribute("type", "text");
inputArtist.setAttribute("placeholder", "artista");
inputArtist.className = "inputArtist";

inputYear.setAttribute("type", "number");
inputYear.setAttribute("placeholder", "anno pubblicazione");
inputYear.className = "inputYear";

submitEl.setAttribute("type", "submit");
submitEl.setAttribute("placeholder", "anno pubblicazione");
submitEl.value = "Inserisci";
submitEl.className = "submitEl";

formEl.append(inputTitle, inputArtist, inputYear, submitEl);
appendElementToDiv(formDiv, formEl);
document.body.prepend(formDiv); // appendo il div contenente il form all'inizio del body
//***************************************************************************************

listCards.forEach((element) => element.addEventListener("click", (event) => {
    element.classList.toggle("listened");
    let songObj = songs.find((item) => item.id === parseInt(event.target.id));
    songObj.listened = !songObj.listened;
}));

/* event listener per catturare gli input inseriti nel form ed aggiungerli al nuovo oggetto che rappresenta la nuova card */
submitEl.addEventListener("click", (event) => {
    event.preventDefault();
    let newCard = {};
    newCard.id = songs.length + 1;
    newCard.title = event.target.form[0].value;
    newCard.artist = event.target.form[1].value;
    newCard.year = parseInt(event.target.form[2].value);
    newCard.listened = false;
    songs.push(newCard); //aggiunge la nuova card all'array di quelle già esistenti
    itemGen(newCard); //renderizza la nuova card
    addListener(newCard.id); //chiamata alla funzione che aggiungerà il listener per il toggle della classe "listened" alla nuova card
});

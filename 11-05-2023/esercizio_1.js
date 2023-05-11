/* ESERCIZIO 1
Sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi.
La seguente lista deve essere renderizzata sul DOM e non su console.log.Attenzione: non scrivere in modo statico alcun elemento(il body della pagina HTML sarà vuoto) */

/* Ho cercato di seguire il meno possibile il codice visto oggi a lezione per concentrare il focus esclusivamente sulla richiesta dell`esercizio.
Ho creato un'array di oggetti che viene scansionato da un forEach che passa alla funzione itemGen ogni singolo oggetto.
Quindi itemGen chiama la funzione createDiv per creare un nuovo elemento div che conterrà 3 elementi: "h2" per il titolo della canzone
e due "p" per il nome dell'artista e per l'anno. I tre elementi vengono quindi appesi al div padre e successivamente la funzione itemGen
chiama la funzione appendNewElem per appendere il div completo al body.

Continuerò inserendo la possibilità di creare nuove cards o eliminarle. */

const songs = [
    {
        id: 1,
        title: "Back in Black",
        artist: "AC/DC",
        year: 1981,
    },
    {
        id: 2,
        title: "Lithium",
        artist: "Nirvana",
        year: 1991,
    },
    {
        id: 3,
        title: "Twist and Shout",
        artist: "The Beatles",
        year: 1963,
    },
    {
        id: 4,
        title: "Radio Ga Ga",
        artist: "Queen",
        year: 1984,
    },
]

const cE = (element) => document.createElement(element);

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

const createDiv = () => {
    let newDiv = cE("div");
    newDiv.className = "card";
    return newDiv;
}

const appendElementToDiv = (father, child) => father.append(child); //appende il figlio (h1 o p) al div padre
const appendNewElem = (value) => document.body.appendChild(value);  //appende il nuovo div (con i figli) al body

const itemGen = (itemObj) => {
    let newElem = createDiv();

    appendElementToDiv(newElem, titleGen(itemObj.title));   //appende l'elemento h1 (title) al div padre
    appendElementToDiv(newElem, artistGen(itemObj.artist));  //appende l'elemento p (artist) al div padre
    appendElementToDiv(newElem, yearGen(itemObj.year));    //appende l'elemento p (year) al div padre

    appendNewElem(newElem);
}

songs.forEach((item) => itemGen(item));
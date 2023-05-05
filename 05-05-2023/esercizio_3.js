// ESERCIZIO 3
// Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni.

function completeName(object) {
    return `Nome: ${object.name}\nCognome: ${object.surname}`;
};

function completeBirthPlace(object) {
    return `Nato a: ${object.birth_place.city}\nRegione: ${object.birth_place.region}\nNazione: ${object.birth_place.country}`;
}

let myObject = {
    name: "Mirko",
    surname: "Montaina",
    age: 36,
    birth_place: {
        city: "Palermo",
        region: "Sicily",
        country: "Italy",
    }
};

console.log(completeName(myObject));
console.log(completeBirthPlace(myObject));
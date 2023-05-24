import { } from "./utils/http.js";
import { createEl, bookGen, personGen } from "./utils/fn.js";
import { person1, people, books } from "./utils/data_mock.js";

const bodyEl = document.querySelector("body");
const peopleWrapper = createEl("div", "", { name: "class", value: "peopleWrapper" });
const booksWrapper = createEl("div", "", { name: "class", value: "booksWrapper" });

/******************** ESERCIZIO 1 ********************/
/* let [name, surname, city] = person1;
console.log("Name: " + name + "\nSurname: " + surname + "\nCity: " + city); */


/******************** ESERCIZIO 2 ********************/
/* const book = {
    title: "IT",
    author: "Stephen King",
    year: "1986",
}

const { title, author, year } = book;
console.log("Title: " + title + "\nAuthor: " + author + "\nYear: " + year); */


/******************** ESERCIZIO AVANZATO 1 ********************/
people.forEach((person) => peopleWrapper.append(personGen(person)));
bodyEl.append(peopleWrapper);

books.forEach((book) => booksWrapper.append(bookGen(book)));
bodyEl.append(booksWrapper);

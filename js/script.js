import { GET } from "./utils/http.js";
import { cardGen, qS, getRandomDate } from "./utils/fn.js";

export const dataMock = [
    {
        name: "Pippo Pippo",
        date: "2023-06-05",
        priority: 3,
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        name: "Paperino Paperino",
        date: "2023-06-05",
        priority: 2,
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        name: "Pluto Pluto",
        date: "2023-06-05",
        priority: 1,
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    }
];

const todayCardsContainerEl = qS(".todayCardsContainer");
const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');
let todoList = [];

/* ASYNC */
let remoteData = GET("");
remoteData
    .then((data) => todoList = data)
    .then(() => {
        todoList.map((user) => {
            user.date = getRandomDate(startDate, endDate);
            user.priority = 1; //aggiungere funzione numero random nell'intervallo 1-4
        });
        console.log(todoList);
    })

/* SYNC */
dataMock.forEach((user) => todayCardsContainerEl.append(cardGen(user)));

/* LISTENERS */
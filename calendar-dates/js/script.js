import { GET } from "./utils/http.js";
import { cardGen, qS, getRandomDate, randomNumber, onHandleClickDate, onHandleClickPriority } from "./utils/fn.js";

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

export const todayCardsContainerEl = qS(".todayCardsContainer");
export const upcomingCardsContainerEl = qS(".upcomingCardsContainer");
export const pastCardsContainerEl = qS(".pastCardsContainer");
export const priorityBtnEl = qS(".filter__priority__wrapper");
export const dateBtnEl = qS(".filter__date__wrapper");
export const iconSortingPriorityEl = qS(".priority__icon");
export const iconSortingDateEl = qS(".date__icon");
const startDate = new Date('2023-05-31');
const endDate = new Date('2023-06-10');
const minPriority = 1;
const maxPriority = 4;
export let todoList = [];
export let todoTodayList = [];
export let todoUpcomingList = [];
export let todoPastList = [];
export let currentDate = new Date();

/* ASYNC */
let remoteData = GET("");
remoteData
    .then((data) => todoList = data)
    .then(() => {
        todoList.map((user) => {
            user.date = getRandomDate(startDate, endDate);
            user.priority = randomNumber(minPriority, maxPriority);
            return user;
        })
    })
    .then(() => todoList.forEach((todo) => {
        if (todo.date.toISOString().slice(0, 10) === currentDate.toISOString().slice(0, 10)) {
            todayCardsContainerEl.append(cardGen(todo));
            todoTodayList.push(todo);
        }
        else if (todo.date.toISOString().slice(0, 10) > currentDate.toISOString().slice(0, 10)) {
            upcomingCardsContainerEl.append(cardGen(todo));
            todoUpcomingList.push(todo);
        } else {
            pastCardsContainerEl.append(cardGen(todo));
            todoPastList.push(todo);
        }
    }))

/* SYNC */

/* LISTENERS */
priorityBtnEl.addEventListener("click", onHandleClickPriority);

dateBtnEl.addEventListener("click", onHandleClickDate);
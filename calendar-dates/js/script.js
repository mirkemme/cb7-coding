import { GET } from "./utils/http.js";
import { cardGen, qS, getRandomDate, randomNumber, onHandleClickDate, onHandleClickPriority, listNotFoundModalGen, noAppointmentsMessage } from "./utils/fn.js";

export const bodyEl = qS("body");
export const todayCardsContainerEl = qS(".todayCardsContainer");
export const upcomingCardsContainerEl = qS(".upcomingCardsContainer");
export const pastCardsContainerEl = qS(".pastCardsContainer");
export const priorityBtnEl = qS(".filter__priority__wrapper");
export const dateBtnEl = qS(".filter__date__wrapper");
export const iconSortingPriorityEl = qS(".priority__icon");
export const iconSortingDateEl = qS(".date__icon");
const startDate = new Date('2023-05-01');
const endDate = new Date('2023-06-30');
const minPriority = 1;
const maxPriority = 4;
export let todoList = [];
export let todoTodayList = [];
export let todoUpcomingList = [];
export let todoPastList = [];
export let currentDate = new Date().toISOString().slice(0, 10);

/* ASYNC */
let remoteData = GET("");
remoteData
    .then((data) => {
        todoList = data;
        if (data[0].title === "Appuntamenti non trovati")
            throw new Error("Response failed!");
    })
    .then(() => {
        todoList.map((user) => {
            user.date = getRandomDate(startDate, endDate);
            user.priority = randomNumber(minPriority, maxPriority);
            return user;
        }).forEach((todo) => {
            if (todo.date === currentDate) {
                todayCardsContainerEl.append(cardGen(todo));
                todoTodayList.push(todo);
            }
            else if (todo.date > currentDate) {
                upcomingCardsContainerEl.append(cardGen(todo));
                todoUpcomingList.push(todo);
            } else {
                pastCardsContainerEl.append(cardGen(todo));
                todoPastList.push(todo);
            }
        })
    })
    .then(() => {
        if (todoTodayList.length === 0) {
            todayCardsContainerEl.appendChild(noAppointmentsMessage("today"));
        }
        if (todoUpcomingList.length === 0) {
            upcomingCardsContainerEl.appendChild(noAppointmentsMessage("upcoming"));
        }
        if (todoPastList.length === 0) {
            pastCardsContainerEl.appendChild(noAppointmentsMessage("past"));
        }
    })
    .catch((error) => listNotFoundModalGen());

/* SYNC */

/* LISTENERS */
priorityBtnEl.addEventListener("click", onHandleClickPriority);

dateBtnEl.addEventListener("click", onHandleClickDate);
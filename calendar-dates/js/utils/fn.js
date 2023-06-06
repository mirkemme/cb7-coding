import { todoList, todoTodayList, todoUpcomingList, todoPastList, currentDate, todayCardsContainerEl, upcomingCardsContainerEl, pastCardsContainerEl } from "../script.js";

export const qS = (type) => document.querySelector(type);
export const qSA = (type) => document.querySelectorAll(type);

/* Create element function */
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);

    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
}

export const getRandomDate = (startDate, endDate) => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.random() * timeDiff;
    const randomDate = new Date(startDate.getTime() + randomTime);

    return randomDate;
}

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const cardGen = ({ priority = "Not specified", date = "Not specified", title = "Not specified" }) => {
    const cardWrapperEl = createEl("div", "", { name: "class", value: "card__wrapper" });
    const cardInfoEls = createEl("div", "", { name: "class", value: "card__info" });
    const priorityEl = createEl("p", `Priority: ${priority}`, { name: "class", value: "card__priority" });
    const dateEl = createEl("p", date.toLocaleDateString("it-IT"), { name: "class", value: "card__date" });
    const titleEl = createEl("h4", title, { name: "class", value: "card__title" });

    cardInfoEls.append(priorityEl, dateEl);
    cardWrapperEl.append(cardInfoEls, titleEl);

    return cardWrapperEl;
}

export const renderElements = (todoItems, listEl) => {
    listEl.append(todoItems.forEach((todo) => listEl.appendChild(cardGen(todo))));
}

const renderTodoList = () => {
    todoList.forEach((todo) => {
        if (todo.date.toISOString().slice(0, 10) === currentDate.toISOString().slice(0, 10)) {
            todayCardsContainerEl.append(cardGen(todo));
        }
        else if (todo.date.toISOString().slice(0, 10) > currentDate.toISOString().slice(0, 10)) {
            upcomingCardsContainerEl.append(cardGen(todo));
        } else {
            pastCardsContainerEl.append(cardGen(todo));
        }
    })
}

export const orderByPriority = (sorting) => {
    let todayCardsContainerEl = qS(".todayCardsContainer");
    let upcomingCardsContainerEl = qS(".upcomingCardsContainer");
    let pastCardsContainerEl = qS(".pastCardsContainer");

    todayCardsContainerEl.textContent = "";
    upcomingCardsContainerEl.textContent = "";
    pastCardsContainerEl.textContent = "";

    if (sorting === "none") renderTodoList();
    else {
        if (sorting === "descending") {
            todoTodayList.sort((item1, item2) => item2.priority - item1.priority);
            todoUpcomingList.sort((item1, item2) => item2.priority - item1.priority);
            todoPastList.sort((item1, item2) => item2.priority - item1.priority);
        } else if (sorting === "ascending") {
            todoTodayList.sort((item1, item2) => item1.priority - item2.priority);
            todoUpcomingList.sort((item1, item2) => item1.priority - item2.priority);
            todoPastList.sort((item1, item2) => item1.priority - item2.priority);
        }
        renderElements(todoTodayList, todayCardsContainerEl);
        renderElements(todoUpcomingList, upcomingCardsContainerEl);
        renderElements(todoPastList, pastCardsContainerEl);

    }
}
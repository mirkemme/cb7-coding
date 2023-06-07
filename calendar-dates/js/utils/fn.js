import {
    todoList, todoTodayList, todoUpcomingList, todoPastList, currentDate, todayCardsContainerEl, upcomingCardsContainerEl, pastCardsContainerEl,
    priorityBtnEl, dateBtnEl, iconSortingPriorityEl, iconSortingDateEl
} from "../script.js";

export const qS = (type) => document.querySelector(type);
export const qSA = (type) => document.querySelectorAll(type);
let sortingPriorityClickCounter = 0;
let sortingDateClickCounter = 0;

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
    const priorityEl = createEl("div", "Priority: ", { name: "class", value: "card__priority" });
    const priorityValueEl = createEl("p", priority, { name: "class", value: "card__priority__value" });
    const dateEl = createEl("p", date.toLocaleDateString("it-IT"), { name: "class", value: "card__date" });
    const titleEl = createEl("h4", title, { name: "class", value: "card__title" });

    priorityEl.append(priorityValueEl);
    cardInfoEls.append(priorityEl, dateEl);
    cardWrapperEl.append(cardInfoEls, titleEl);

    return cardWrapperEl;
}

export const renderElements = (todoItems, listEl) => {
    todoItems.forEach((todo) => listEl.appendChild(cardGen(todo)));
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

const showSortingPriorityIcon = (sorting) => {
    const iconEl = createEl("img", "");

    if (sorting === "descending") {
        iconEl.setAttribute("src", "../assets/icons/arrow-down.svg");
        iconEl.setAttribute("alt", "descending");
    } else if (sorting === "ascending") {
        iconSortingPriorityEl.textContent = "";
        iconEl.setAttribute("src", "../assets/icons/arrow-up.svg");
        iconEl.setAttribute("alt", "ascending");
    } else {
        iconSortingPriorityEl.textContent = "";
        return 0;
    }
    iconSortingPriorityEl.append(iconEl);
}

const showSortingDateIcon = (sorting) => {
    const iconEl = createEl("img", "");

    if (sorting === "descending") {
        iconEl.setAttribute("src", "../assets/icons/arrow-down.svg");
        iconEl.setAttribute("alt", "descending");
    } else if (sorting === "ascending") {
        iconSortingDateEl.textContent = "";
        iconEl.setAttribute("src", "../assets/icons/arrow-up.svg");
        iconEl.setAttribute("alt", "ascending");
    } else {
        iconSortingDateEl.textContent = "";
        return 0;
    }
    iconSortingDateEl.append(iconEl);
}

export const sortingByPriority = (sorting) => {
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

const sortingByDate = (sorting) => {
    todayCardsContainerEl.textContent = "";
    upcomingCardsContainerEl.textContent = "";
    pastCardsContainerEl.textContent = "";

    if (sorting === "none") renderTodoList();
    else {
        if (sorting === "descending") {
            todoTodayList.sort((item1, item2) => item2.date - item1.date);
            todoUpcomingList.sort((item1, item2) => item2.date - item1.date);
            todoPastList.sort((item1, item2) => item2.date - item1.date);
        } else if (sorting === "ascending") {
            todoTodayList.sort((item1, item2) => item1.date - item2.date);
            todoUpcomingList.sort((item1, item2) => item1.date - item2.date);
            todoPastList.sort((item1, item2) => item1.date - item2.date);
        }
        renderElements(todoTodayList, todayCardsContainerEl);
        renderElements(todoUpcomingList, upcomingCardsContainerEl);
        renderElements(todoPastList, pastCardsContainerEl);
    }
}

export const onHandleClickPriority = () => {
    if (sortingDateClickCounter != 0) {
        sortingDateClickCounter = 0;
        dateBtnEl.classList.remove("active");
        iconSortingDateEl.textContent = "";
    }
    ++sortingPriorityClickCounter;
    if (sortingPriorityClickCounter === 1) {
        priorityBtnEl.classList.add("active");
        showSortingPriorityIcon("descending");
        sortingByPriority("descending");
    }
    else if (sortingPriorityClickCounter === 2) {
        showSortingPriorityIcon("ascending");
        sortingByPriority("ascending");
    } else {
        showSortingPriorityIcon("none");
        sortingByPriority("none");
        sortingPriorityClickCounter = 0;
        priorityBtnEl.classList.remove("active");
    }
}

export const onHandleClickDate = () => {
    if (sortingPriorityClickCounter != 0) {
        sortingPriorityClickCounter = 0;
        priorityBtnEl.classList.remove("active");
        iconSortingPriorityEl.textContent = "";
    }
    ++sortingDateClickCounter;
    if (sortingDateClickCounter === 1) {
        dateBtnEl.classList.add("active");
        showSortingDateIcon("descending");
        sortingByDate("descending");
    }
    else if (sortingDateClickCounter === 2) {
        showSortingDateIcon("ascending");
        sortingByDate("ascending");
    }
    else {
        showSortingDateIcon("none");
        sortingByDate("none");
        sortingDateClickCounter = 0;
        dateBtnEl.classList.remove("active");
    }
}
import { GET, POST, DELETE } from "./http.js";
import { bodyEl, rootEl, todoListWrapper } from "../script.js";

const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);

/* Create element function */
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);

    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
}

/* Crea la card della todo list */
export const todoCardGen = (dataItem) => {
    const wrapperEl = createEl("div", "", { name: "class", value: "card" });
    const textEl = createEl("p", dataItem.todo, { name: "class", value: "card__text" }, { name: "id", value: dataItem.id });

    wrapperEl.append(textEl);
    return wrapperEl;
}

/* Genera la todo list */
export const todoListGen = () => {
    GET(`/user/1`)
        .then((data) => data.todos.forEach((item) => todoListWrapper.append(todoCardGen(item))))
        .then(() => rootEl.append(todoListWrapper))
        .then(() => addListeners());
}

/* Aggiunge i listeners alle card per segnare come "eseguita" una todo card */
const addListeners = () => {
    let listCards = qSA(".card");
    listCards.forEach((card) => card.addEventListener("click", (event) => {
        card.classList.toggle("done");
    })
    );
}

/* Aggiunge una nuova todo list di un nuovo utente */
export const addTodo = (todo) => {
    POST("", todo);
}

/* Elimina la lista dell'utente identificato da userId */
export const deleteTodo = (userId) => {
    DELETE(userId);
}
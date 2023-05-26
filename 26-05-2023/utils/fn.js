import { GET, POST, DELETE } from "./http.js";
import { bodyEl, rootEl, todoListWrapper } from "../script.js";

export const qS = (element) => document.querySelector(element);
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

/* Aggiunge i listeners alle card per segnarle, al click, come "eseguite" o "da fare" */
const addListeners = () => {
    let listCards = qSA(".card");
    listCards.forEach((card) => card.addEventListener("click", (event) => {
        card.classList.toggle("done");
    })
    );
}

/* Aggiunge una nuova todo nella todo list dell'utente */
export const addTodo = (todo) => {
    POST("", todo);
}

/* Elimina la lista dell'utente identificato da userId */
export const deleteTodo = (userId) => {
    DELETE(userId);
}

/* Costruisce e visualizza la modale per l'inserimento di una nuova card */
export const createInputModal = () => {
    const overlayEl = createEl("div", "", { name: "class", value: "overlay" });
    const wrapperEl = createEl("div", "", { name: "class", value: "form__wrapper" });
    const formEl = createEl("form", "", { name: "class", value: "form" });
    const inputEl = createEl("input", "", { name: "type", value: "text" }, { name: "class", value: "form__input" }, { name: "palceholder", value: "Inserisci una nuova cosa da fare" });
    const submitBtn = createEl("input", "", { name: "type", value: "submit" }, { name: "class", value: "form__submit" });

    formEl.append(inputEl, submitBtn);
    wrapperEl.append(formEl);
    bodyEl.prepend(overlayEl);
    rootEl.prepend(wrapperEl);

    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const newTodo = todoCardGen({
            todo: event.target[0].value,
            completed: false,
            userId: 1,
        });
        todoListWrapper.append(newTodo);
        newTodo.addEventListener("click", () => newTodo.classList.toggle("done"));
        formEl.reset();
    });

    overlayEl.addEventListener("click", () => {
        bodyEl.removeChild(overlayEl);
        rootEl.removeChild(wrapperEl);
    });
}
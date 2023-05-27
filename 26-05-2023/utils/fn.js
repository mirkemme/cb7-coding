import { GET, POST, DELETE } from "./http.js";
import { bodyEl, rootEl, todoListWrapper } from "../script.js";

export const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);
export let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

/* Create element function */
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);

    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
}

/* Genera la todo list iniziale con una chiamata GET API su dummyjson */
export const getTodoList = () => {
    GET(`/user/1`)
        .then((data) => data.todos.forEach((item) => {
            console.log(todoList);
            todoListWrapper.append(todoCardGen(item));
            todoList.push(item);
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }))
        .then(() => rootEl.append(todoListWrapper))
        .then(() => addListeners())
}

/* Aggiunge una nuova todo nella todo list dell'utente */
/* export const addTodo = (todo) => {
    POST("", todo);
} */

export const listItemRender = () => {
    // rootEl.removeChild(todoListWrapper);
    todoListWrapper.textContent = "";
    todoList.forEach((todo) => {
        todoListWrapper.appendChild(todoCardGen(todo));
    })
    rootEl.appendChild(todoListWrapper);
}

/* Elimina un elemento dall'array todoList e renderizza nuovament gli elementi */
const onHandleItemDel = (event) => {
    todoList = todoList.filter((item) => item.todo !== event.target.textContent);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    listItemRender();
    addListeners();
}

export const deleteTodo = () => {
    // DELETE();
    const todoListEls = qSA(".card");
    todoListEls.forEach((card) => card.addEventListener("click", onHandleItemDel)); /* Listener per gestire l'eliminazione delle card e degli elementi dell'array todoList */
}

/* Crea la card della todo list */
export const todoCardGen = (dataItem) => {
    const wrapperEl = createEl("div", "", { name: "class", value: "card" });
    const textEl = createEl("p", dataItem.todo, { name: "class", value: "card__text" }, { name: "id", value: dataItem.id });

    wrapperEl.append(textEl);
    return wrapperEl;
}

const onHandleSubmit = (event) => {
    event.preventDefault();
    const formEl = qS(".form");
    const newTodo = {
        id: Date.now(),
        todo: event.target[0].value,
        completed: false,
        userId: 1,
    }
    todoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    const newTodoCard = todoCardGen(newTodo);
    todoListWrapper.append(newTodoCard);
    newTodoCard.addEventListener("click", () => newTodoCard.classList.toggle("done"));
    formEl.reset();
};

/* Costruisce e visualizza la modale per l'inserimento di una nuova card */
export const createInputModal = () => {
    const overlayEl = createEl("div", "", { name: "class", value: "overlay" });
    const wrapperEl = createEl("div", "", { name: "class", value: "form__wrapper" });
    const formEl = createEl("form", "", { name: "class", value: "form" });
    const inputEl = createEl("input", "", { name: "type", value: "text" }, { name: "class", value: "form__input" }, { name: "placeholder", value: "Inserisci una nuova cosa da fare" }, { name: "required" });
    const submitBtn = createEl("input", "", { name: "type", value: "submit" }, { name: "class", value: "form__submit" });

    formEl.append(inputEl, submitBtn);
    wrapperEl.append(formEl);
    bodyEl.prepend(overlayEl);
    rootEl.prepend(wrapperEl);

    formEl.addEventListener("submit", onHandleSubmit);

    overlayEl.addEventListener("click", () => {
        bodyEl.removeChild(overlayEl);
        rootEl.removeChild(wrapperEl);
    });
}
/* Aggiunge i listeners alle card per segnarle, al click, come "eseguite" o "da fare" */
export const addListeners = () => {
    let listCards = qSA(".card");
    listCards.forEach((card) => card.addEventListener("click", (event) => {
        card.classList.toggle("done");
    })
    );
}
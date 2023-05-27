import { GET, POST, DELETE } from "./utils/http.js";
import { todoList, getTodoList, createEl, deleteTodo, qS, createInputModal, listItemRender, addListeners } from "./utils/fn.js";

export const bodyEl = qS("body");
export const rootEl = qS("#root");

export const todoListWrapper = createEl("div", "", { name: "class", value: "todoListWrapper" });
const buttonsContainer = createEl("div", "", { name: "class", value: "buttonsContainer" });
const addBtn = createEl("button", "Add", { name: "class", value: "addBtn" });
const deleteBtn = createEl("button", "Delete", { name: "class", value: "deleteBtn" });
const editBtn = createEl("button", "Edit", { name: "class", value: "editBtn" });

buttonsContainer.append(addBtn, deleteBtn, editBtn);
rootEl.append(buttonsContainer);

/* Se la todoList è vuota (todoList.length == 0) allora chiamo getTodoList() per popolare la mia todo list con una chiamata
GET API su dummyjson. Altrimenti, avendo usato local storage, la todo list sarà già popolata e quindi procedo a renderizzare
la lista e ad aggiungere i listeners sulle cards */
if (todoList.length) {
    listItemRender();
    addListeners();
} else {
    getTodoList();
}

addBtn.addEventListener("click", () => createInputModal());
deleteBtn.addEventListener("click", () => deleteTodo());
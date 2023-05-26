import { GET, POST, DELETE } from "./utils/http.js";
import { todoListGen, createEl, addTodo, deleteTodo, qS, createInputModal } from "./utils/fn.js";

export const bodyEl = qS("body");
export const rootEl = qS("#root");

export const todoListWrapper = createEl("div", "", { name: "class", value: "todoListWrapper" });
const buttonsContainer = createEl("div", "", { name: "class", value: "buttonsContainer" });
const addBtn = createEl("button", "Add", { name: "class", value: "addBtn" });
const deleteBtn = createEl("button", "Delete", { name: "class", value: "deleteBtn" });
const editBtn = createEl("button", "Edit", { name: "class", value: "editBtn" });

buttonsContainer.append(addBtn, deleteBtn, editBtn);
rootEl.append(buttonsContainer);

todoListGen();

deleteTodo("1");

addBtn.addEventListener("click", () => createInputModal());
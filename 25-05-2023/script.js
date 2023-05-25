import { GET, POST, DELETE } from "./utils/http.js";
import { todoListGen, createEl, addTodo, deleteTodo } from "./utils/fn.js";

export const bodyEl = document.querySelector("body");
export const rootEl = document.querySelector("#root");
export const todoListWrapper = createEl("div", "", { name: "class", value: "todoListWrapper" });

todoListGen();

addTodo({
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
});

deleteTodo("1");
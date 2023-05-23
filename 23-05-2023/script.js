import { GET, POST, DELETE } from "./utils/http.js";
import { createEl, productGen } from "./utils/fn.js";
import { usersDB } from "./utils/credentials.js";

const bodyEl = document.querySelector("body");
const rootEl = document.querySelector("#root");
const loginEl = document.querySelector(".login");
const loginForm = document.querySelector(".loginForm");
const wrapperEl = createEl("div", "", { name: "class", value: "cart" });

/* ASYNC */
/* GET("/1").then((cart) =>
    cart.products.forEach((product) => wrapperEl.append(productGen(product)))); */

/* SYNC */
/* bodyEl.append(wrapperEl); */

/* LISTENERS */
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let user = usersDB.find((user) =>
        user.username === event.srcElement[0].value &&
        user.password === event.srcElement[1].value)
    if (user) {
        GET(`/${user.id}`).then((cart) =>
            cart.products.forEach((product) => wrapperEl.append(productGen(product))));
        const welcomeEl = createEl("h3", `Bentornat* ${user.name}`, { name: "class", value: "welcomeMessage" });
        bodyEl.removeChild(loginEl);
        bodyEl.prepend(welcomeEl);
        rootEl.append(wrapperEl);
        console.log(user.id);
    } else {
        alert("Dati inseriti non corretti!");
    }
})


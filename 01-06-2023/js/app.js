import { tweetGen } from "../utils/fn.js";
import { GET } from "../utils/http.js";

let postList = [];
let userList = [];
const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");
const tabsEl = document.querySelectorAll(".tabBar__tab");

/*** ASYNC ***/
const remoteData = Promise.all([GET("/posts"), GET("/users")]);
remoteData
    .then((data) => {
        postList = data[0].posts;
        userList = data[1].users;
    })
    .then(() => postList.map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
    }).forEach((post) => contentEl.append(tweetGen(post))))



/*** EVENTS ***/
navItems.forEach((element) => {
    element.addEventListener("click", () => {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });
        element.classList.add("active");
    });
});

if (tabsEl) {
    tabsEl.forEach((tab) => {
        tab.addEventListener("click", () => {
            let activeTab = document.querySelector(".tabBar__tab.active");
            activeTab.classList.remove("active");
            tab.classList.add("active");
        });
    });
};
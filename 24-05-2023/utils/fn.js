import { person1, person2, person3, books } from "./data_mock.js";

/* Create element function */
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);

    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
}

export const personGen = ([name = "Not specified", surname = "Not specified", city = "Not specified"]) => {
    const wrapperEl = createEl("div", "", { name: "class", value: "personItem" });
    const nameEl = createEl("h4", `Name: ${name}`, { name: "class", value: "personData__name" });
    const surnameEl = createEl("h4", `Surname: ${surname}`, { name: "class", value: "personData__surname" });
    const cityEl = createEl("p", `City: ${city}`, { name: "class", value: "personData__city" });

    wrapperEl.append(nameEl, surnameEl, cityEl);
    return wrapperEl;
}

export const bookGen = ({ title = "Not specified", author = "Not specified", year = "Not specified" }) => {
    const wrapperEl = createEl("div", "", { name: "class", value: "bookItem" });
    const titleEl = createEl("h3", title, { name: "class", value: "bookData__title" });
    const authorEl = createEl("h4", `Author: ${author}`, { name: "class", value: "bookData__author" });
    const yearEl = createEl("p", `Year: ${year}`, { name: "class", value: "bookData__year" });

    wrapperEl.append(titleEl, authorEl, yearEl);
    return wrapperEl;
}
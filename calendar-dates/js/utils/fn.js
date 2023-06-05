import { dataMock } from "../script.js";

export const qS = (type) => document.querySelector(type);
export const qSA = (type) => document.querySelectorAll(type);

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

    return randomDate.toISOString().slice(0, 10);
}

export const cardGen = ({ name = "Not specified", date = "Not specified", title = "Not specified" }) => {
    const cardWrapperEl = createEl("div", "", { name: "class", value: "card__wrapper" });
    const cardInfoEls = createEl("div", "", { name: "class", value: "card__info" });
    const nameEl = createEl("p", name, { name: "class", value: "card__name" });
    const dateEl = createEl("p", date, { name: "class", value: "card__date" });
    const titleEl = createEl("h4", title, { name: "class", value: "card__title" });

    cardInfoEls.append(nameEl, dateEl);
    cardWrapperEl.append(cardInfoEls, titleEl);

    return cardWrapperEl;
}
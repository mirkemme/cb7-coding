export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);

export const createProduct = (data) => {
    const wrapperEl = cE("div");
    const textWrapperEl = cE("div");
    const imageEl = cE("img");
    const titleEl = cE("h3");
    const descriptionEl = cE("p");
    const ratingEl = cE("p");
    const priceEl = cE("h4");
    const buttonEl = cE("button");

    wrapperEl.className = "productCard";
    textWrapperEl.className = "productCard__text";
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    descriptionEl.textContent = data.description;
    descriptionEl.className = "productCard__text__description";
    ratingEl.textContent = data.rating;
    priceEl.textContent = data.price + " €";
    buttonEl.textContent = "Add to Cart";

    textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);
    wrapperEl.append(imageEl, textWrapperEl);

    return wrapperEl;
};
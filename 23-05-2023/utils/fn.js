/* Create element function */
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);

    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
}

export const productGen = (productData) => {
    const wrapperEl = createEl("div", "", { name: "class", value: "cartItem" });
    const titleEl = createEl("h4", productData.title, { name: "class", value: "cartItem__title" });
    const priceEl = createEl("p", `Prezzo: ${productData.price} €`, { name: "class", value: "cartItem__price" });
    const quantityEl = createEl("p", `Quantità: ${productData.quantity}`, { name: "class", value: "cartItem__quantity" });

    wrapperEl.append(titleEl, priceEl, quantityEl);
    return wrapperEl;
}
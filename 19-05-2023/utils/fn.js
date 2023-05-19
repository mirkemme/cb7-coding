export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const qSA = (element) => document.querySelectorAll(element);
import { navbar, hero, filters, rootEl, cartItems, cartBtn, productList, productListTitle } from "../script.js"
import { usersDB } from "./credentials.js";

/* Crea una singola card che rappresenta un prodotto */
export const createProduct = (data) => {
    const wrapper = cE("div");
    const textWrapper = cE("div");
    const image = cE("img");
    const title = cE("h3");
    const description = cE("p");
    const rating = cE("p");
    const price = cE("h4");
    const button = cE("button");

    wrapper.className = "productCard";
    wrapper.setAttribute("id", data.id);
    textWrapper.className = "productCard__text";
    image.src = data.thumbnail;
    image.alt = data.title;
    title.textContent = data.title;
    description.textContent = data.description;
    description.className = "productCard__text__description";
    rating.textContent = data.rating;
    price.textContent = data.price + " €";
    button.textContent = "Buy now";

    textWrapper.append(title, description, rating, price, button);
    wrapper.append(image, textWrapper);

    return wrapper;
};

/* Crea il wrapper MODALE che contiene una singola card  */
export const createProductModal = (product, parent = null) => {
    const wrapper = cE("div");
    const gallery = cE("div");
    const mainImg = cE("img");
    // const thumbWrapper = cE("div");
    const texts = cE("div");
    const mainText = cE("div");
    const mainTextTitle = cE("h1");
    const mainTextDesc = cE("p");
    const mainTextRate = cE("p");
    const buyText = cE("div");
    const addToCartBtn = cE("button");
    const addToWishListBtn = cE("button");
    const closeBtn = cE("button");
    const overlay = cE("div");

    wrapper.className = "modalProduct";
    overlay.className = "modalOverlay";
    gallery.className = "modalProduct__gallery";
    mainImg.src = product.thumbnail;
    mainImg.alt = product.title;

    texts.className = "modalProduct__texts";
    mainText.className = "modalMainText";
    mainTextTitle.textContent = product.title;
    mainTextDesc.textContent = product.description;
    mainTextRate.className = "rating";
    mainTextRate.textContent = "Rating " + product.rating + "/5";

    buyText.className = "modalMainBuy";
    addToCartBtn.textContent = "Add to cart";
    addToWishListBtn.textContent = "Add to wish list";

    closeBtn.className = "closeModalBtn";
    closeBtn.textContent = "X";

    mainText.append(mainTextTitle, mainTextDesc, mainTextRate);
    buyText.append(addToCartBtn, addToWishListBtn);
    gallery.append(mainImg);
    texts.append(mainText, buyText);
    wrapper.append(overlay, gallery, texts, closeBtn);

    if (parent) {
        closeBtn.addEventListener("click", () => parent.removeChild(wrapper));
        /* MEMO: aggiungere anche la chiusura tramite l'overlay */
    }

    addToCartBtn.addEventListener("click", () => {
        cartItems.push(product);
        if (cartItems.length > 0) cartBtn.classList.add("productsInCart");
    });

    return wrapper;
}

/* Crea la modale che visualizza il carrello */
export const createCartModal = () => {
    const wrapper = cE("div");
    wrapper.className = "cartModal";

    cartItems.forEach((element) => {
        const title = cE("h4");
        const price = cE("h5");
        title.textContent = element.title;
        price.textContent = element.price + "€";
        wrapper.append(title, price);
    })

    return wrapper;
};

/* Crea la modale del login */
export const createLogin = () => {
    const wrapper = cE("form");
    const usernameInput = cE("input");
    const pswInput = cE("input");
    const submitBtn = cE("input");

    wrapper.className = "login";
    usernameInput.type = "text";
    usernameInput.placeholder = "username";
    pswInput.type = "password";
    pswInput.placeholder = "password";
    submitBtn.type = "submit";
    submitBtn.value = "Login";

    wrapper.addEventListener("submit", (event) => {
        event.preventDefault();
        if (usersDB.find((user) =>
            user.username === event.srcElement[0].value &&
            user.password === event.srcElement[1].value)) {
            rootEl.append(productListTitle, productList);
            navbar.classList.remove("hidden");
            hero.classList.remove("hidden");
            filters.classList.remove("hidden");
            rootEl.removeChild(wrapper);
        } else { alert("Dati inseriti non corretti!"); }
    })

    wrapper.append(usernameInput, pswInput, submitBtn);

    return wrapper;
}
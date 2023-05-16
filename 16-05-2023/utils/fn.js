export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const qSA = (element) => document.querySelectorAll(element);

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
    button.textContent = "Add to Cart";

    textWrapper.append(title, description, rating, price, button);
    wrapper.append(image, textWrapper);

    return wrapper;
};

/* Crea il wrapper MODALE che contiene una singola card  */
export const createProductModal = (data, parent = null) => {
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
    const firstBtn = cE("button");
    const secondBtn = cE("button");
    const closeBtn = cE("button");
    const overlay = cE("div");

    wrapper.className = "modalProduct";
    overlay.className = "modalOverlay";
    gallery.className = "modalProduct__gallery";
    mainImg.src = data.thumbnail;
    mainImg.alt = data.title;

    /*productData.images.forEach(element => {    
    }); */

    texts.className = "modalProduct__texts";
    mainText.className = "modalMainText";
    mainTextTitle.textContent = data.title;
    mainTextDesc.textContent = data.description;
    mainTextRate.className = "rating";
    mainTextRate.textContent = "Rating " + data.rating + "/5";

    buyText.className = "modalMainBuy";
    firstBtn.textContent = "Buy now";
    secondBtn.textContent = "Add to wish list";

    closeBtn.className = "closeModalBtn";
    closeBtn.textContent = "X";

    mainText.append(mainTextTitle, mainTextDesc, mainTextRate);
    buyText.append(firstBtn, secondBtn);
    gallery.append(mainImg);
    texts.append(mainText, buyText);
    wrapper.append(overlay, gallery, texts, closeBtn);

    if (parent) {
        closeBtn.addEventListener("click", () => parent.removeChild(wrapper));
    }

    return wrapper;
}
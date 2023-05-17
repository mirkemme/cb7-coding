import { cE, qS, qSA, createProduct, createProductModal } from "./utils/fn.js";

/* const productMock = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
} */

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
// const priceBtn = qS(".filters__priceBtn");
const sortBtn = qS(".filters__sort");
const sortMenu = qS(".sortMenu");
const searchInput = qS(".searchInput");
let productListItems = [];

productList.className = "productList";
productListTitle.textContent = "Popular products";
rootEl.append(productListTitle, productList);

fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        productListItems = data.products;
        productListItems.forEach((element) => {
            productList.append(createProduct(element))
        }
        );
    })
    .then(() => {
        const productCardEls = qSA(".productCard");
        productCardEls.forEach((element) =>
            element.addEventListener("click", () =>
                fetch(`https://dummyjson.com/products/${element.id}`)
                    .then((res) => res.json())
                    .then((data) => rootEl.append(createProductModal(data, rootEl)))
            )
        );
    });

/* Listeners per gestire i menu a comparsa dei filtri. (per ora attivi solo su "Sort by") */
sortBtn.addEventListener("mouseover", () => {
    sortMenu.classList.remove("hidden");
})

sortBtn.addEventListener("mouseout", () => {
    sortMenu.classList.add("hidden");
})

/* Listener per gestire l'ordinamento dei prodotti tramite il pulsante "sort by" */
sortMenu.addEventListener("click", (event) => {
    productList.textContent = "";
    if (event.target.className === "ascending") {
        productListItems.sort((item1, item2) => item1.title.localeCompare(item2.title)).forEach((object) => productList.append(createProduct(object)));
    }
    if (event.target.className === "descending") {
        productListItems.sort((item1, item2) => item1.title.localeCompare(item2.title)).reverse().forEach((object) => productList.append(createProduct(object)));
    }
    if (event.target.className === "priceLow") {
        productListItems.sort((item1, item2) => item1.price - item2.price).forEach((object) => productList.append(createProduct(object)));
    }
    if (event.target.className === "priceHigh") {
        productListItems.sort((item1, item2) => item1.price - item2.price).reverse().forEach((object) => productList.append(createProduct(object)));
    }
})

/* Listener per gestire la ricerca dei prodotti */
searchInput.addEventListener("input", (event) => {
    if (event.target.value === "") {
        productListItems.forEach((product) => rootEl.append(createProduct(product)));
    } else {
        productList.textContent = "";
        productListItems.filter((product) =>
            product.title.toLowerCase().includes(event.target.value.toLowerCase())
        ).forEach((object) => productList.append(createProduct(object)));
    }
});
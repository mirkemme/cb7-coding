import { cE, qS, qSA, createProduct, createProductModal } from "./utils/fn.js";

const productMock = {
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
}

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
// const priceBtn = qS(".filters__priceBtn");
const sortBtn = qS(".filters__sort");
const panelRight = qS(".panelRight");

productList.className = "productList";
productListTitle.textContent = "Products for you!";


fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((element) =>
            productList.append(createProduct(element))
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

rootEl.append(productListTitle, productList);

/* Listeners per gestire i menu a comparsa dei filtri. (per ora solo su "Sort by") */
sortBtn.addEventListener("mouseover", () => {
    panelRight.classList.remove("hidden");
})

sortBtn.addEventListener("mouseout", () => {
    panelRight.classList.add("hidden");
})




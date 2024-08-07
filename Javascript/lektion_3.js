import { storeProducts } from "./storeProducts.js";

const container = document.getElementById("product-container");

const buildProducts = (products) => {
    container.innerHTML = "";

    let selectOptions = `
    <select id="product-selecter">
        <option value="default"></option>
        <option value="High Price" class="product-filter">Pris Høj - Lav</option>
        <option value="Low Price" class="product-filter">Pris Lav - Høj</option>
        <option value="High Popular" class="product-filter">Popularitet Høj - Lav</option>
        <option value="Low Popular" class="product-filter">Popularitet Lav - Høj</option>
        <option value="Alphabetically" class="product-filter">Alfabetisk</option>
    </select>`;
    container.innerHTML += selectOptions;

    products.map((product) => {
        let productCard = `
            <figure class="product-card" data-product-name="${product.title}">
                <header>
                    <img src="${product.image}" alt="${product.title}"/>
                    <h2>${product.title}</h2>
                </header>
                <figcaption>
                    <p>Price: ${product.price} ,-</p>
                    <p>Amount: ${product.quantity}</p>
                    <p>Popularity: ${product.popularity}</p>
                </figcaption>
            </figure>`;
            container.innerHTML += productCard;

        const cards = document.querySelectorAll(".product-card");
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                const productName = card.getAttribute("data-product-name");
                alert(`Du har tilføjet ${productName} til din kurv`);
            })
        });

    });
    const selecter = document.getElementById("product-selecter");
    selecter.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        filterProducts(storeProducts, selectedValue);
    })
};

buildProducts(storeProducts);

const filterProducts = (arr, type) => {
    console.log(type);
    let sortedProducts = [...arr];
    switch(type) {
        case "High Price":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "Low Price":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "High Popular":
            sortedProducts.sort((a, b) => b.popularity - a.popularity);
            break;
        case "Low Popular":
            sortedProducts.sort((a, b) => a.popularity - b.popularity);
            break;
        case "Alphabetically":
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            sortedProducts = arr;
            break;
    };
    console.log(sortedProducts);
    buildProducts(sortedProducts);
}
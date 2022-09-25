class Product {
    constructor(id, name, price, img, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = quantity;
    }
}

const products = [];

const prod1 = new Product("1", "Black Paradox", 1500, "img/blackparadox.webp", 1);
const prod2 = new Product("2", "Fragmentos del Horror", 1500, "img/fragmentosdelhorror.webp", 3);
const prod3 = new Product("3", "Pokemon 1", 750, "img/pokemon1.jpeg", 2);
const prod4 = new Product("3", "Pokemon 2", 750, "img/pokemon2.jpeg", 1);
const prod5 = new Product("5", "Tomie 1", 1500, "img/tomie1.jpg", 4);
const prod6 = new Product("6", "Uzumaki", 1500, "img/uzumaki.webp", 1);

products.push(prod1, prod2, prod3, prod4, prod5, prod6);

const showProducts = (products) => {
    const productContainer = document.querySelector("#product-container");
    console.log(productContainer);

    for (const product of products) {
        const card = document.createElement("card");

        card.innerHTML = `
            <img src="${product.img}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: $${product.price}</p>
                <p id="quantity" class="card-text">${product.quantity}</p>
                <button class="btn btn-primary" id="button${product.id}">Add to Card</button>
            </div>
        `;

        productContainer.appendChild(card);

        const button = document.querySelector(`#button${product.id}`);

        button.addEventListener("click", () => {
            cart(`${product.id}`)
            alert(`Agregaste ${product.name}`);
        });
    }
};

showProducts(products);

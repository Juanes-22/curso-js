const shoppingCart = [];

const cart = (productId) => {
    const cartContainer = document.getElementById("cart-container");

    const showProductsInCart = () => {
        let product = cartProducts.find((product) => product.id === productId);

        shoppingCart.push(product);

        // agregar el localStorage

        let div = document.createElement("div");

        div.classList.add("productInCart");

        div.innerHTML = `
            <p>${product.name}</p>
            <p>Precio: ${product.price}</p>
            <p id="quantity${product.id}">Quantity: ${product.quantity}</p>
            <button class="btn btn-danger btn-sm" id="delete${product.id}">Eliminar</button>        
        `;

        cartContainer.appendChild(div);

        let buttonDelete = document.getElementById(`delete${product.id}`);
        buttonDelete.addEventListener("click", (e) => {
            deleteProduct(e);
        });
    };

    showProductsInCart();
};

function deleteProduct(e) {
    let btnClicked = e.target;
    btnClicked.parentElement.remove();
}

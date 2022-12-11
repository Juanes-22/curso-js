let catalogo = [];

fetchProductos().then((productos) => {
    catalogo = productos;
    mostrarCatalogo();
});

async function fetchProductos() {
    const response = await fetch("./data.json");
    return await response.json();
}

function mostrarCatalogo() {
    const seccionProductos = document.querySelector("#productos");

    for (const producto of catalogo) {
        const { id, nombre, precio, imagen } = producto;
        const productoHTML = `
            <div class="producto">
                <img src="${imagen}" />
                <h3>${nombre}</h3>
                <p>${precio}</p>
                <button class="btn" onclick="sumarAlCarrito(${id})">Sumar al carrito</button>
            </div>        
        `;
        seccionProductos.innerHTML += productoHTML;
    }
}

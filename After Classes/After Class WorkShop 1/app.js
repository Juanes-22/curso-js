const baseDeDatos = [
    {
        id: 1,
        nombre: "Papa",
        precio: 5.5,
        imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
    },
    {
        id: 2,
        nombre: "Cebolla",
        precio: 10,
        imagen: "https://source.unsplash.com/random/500x500/?onion&sig=2",
    },
    {
        id: 3,
        nombre: "Calaza",
        precio: 8,
        imagen: "https://source.unsplash.com/random/500x500/?zucchini&sig=3",
    },
    {
        id: 4,
        nombre: "Frutilla",
        precio: 15,
        imagen: "https://source.unsplash.com/random/500x500/?burrs&sig=4",
    },
];

// VARIABLES GLOBALES
const carrito = [];
const divisa = "$";

// DOM
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

DOMbotonVaciar.addEventListener("click", emptyCarrito);

//inicio
renderizarProductos();
renderizarCarrito();

// FUNCIONES
function renderizarProductos() {
    baseDeDatos.forEach((producto) => {
        // estructura del nodo
        const card = document.createElement("div");
        card.classList.add("card", "col-sm-4");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = producto.nombre;

        const cardImg = document.createElement("img");
        cardImg.classList.add("img-fluid");
        cardImg.setAttribute("src", producto.imagen);

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = `${divisa}${producto.precio}`;

        const cardButton = document.createElement("button");
        cardButton.classList.add("btn", "btn-primary");
        cardButton.textContent = "+";
        cardButton.setAttribute("marcador", producto.id);
        cardButton.addEventListener("click", addToCarrito);

        // insertar nodo
        cardBody.appendChild(cardImg);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardButton);

        card.appendChild(cardBody);

        DOMitems.appendChild(card);
    });
}

function renderizarCarrito() {
    DOMcarrito.textContent = "";

    // quitar duplicados
    const carritoSinDuplicados = [...new Set(carrito)];

    // generamos los nodos a partir del carrito
    carritoSinDuplicados.forEach((producto) => {
        // obtenemos el producto que necesitamos de la base de datos
        const miProducto = baseDeDatos.filter((productoBaseDatos) => {
            // coinciden los id? -> solo puede existir un caso
            return productoBaseDatos.id === parseInt(producto);
        });

        // cuenta el número de veces que se repite el producto
        const unidadesProducto = carrito.reduce((total, productoId) => {
            // coinciden los id? -> incremente el contador, en caso contrario se mantiene
            return productoId === producto ? (total += 1) : total;
        }, 0);

        // creamos el nodo del producto del carrito
        const miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "text-right", "mx-2");
        miNodo.textContent = `${unidadesProducto} x ${miProducto[0].nombre} : ${divisa}${miProducto[0].precio}`;

        // boton de borrar
        const miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-danger", "mx-5");
        miBoton.textContent = "X";
        miBoton.style.margin = "1rem";
        miBoton.dataset.item = miProducto;
        miBoton.addEventListener("click", removeFromCarrito);

        // mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });

    // mostrar precio total en el html
    DOMtotal.textContent = calcularTotal();
}

function calcularTotal() {
    // recorriendo el array de carrito
    return carrito
        .reduce((total, item) => {
            // de cada item obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            // los sumamos al total
            return total + miItem[0].precio;
        }, 0)
        .toFixed(2);
}

function addToCarrito(e) {
    // añade nodo a nuestro carrito
    carrito.push(e.target.getAttribute("marcador"));

    // actualizar el carrito
    renderizarCarrito();
}

function removeFromCarrito(e) {
    // obtenemos el id del producto del botón que se presionó
    const id = e.target.dataset.item;

    // borramos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    // volvemos a renderizar
    renderizarCarrito();
}

function emptyCarrito() {
    // limpiar carrito
    carrito = [];

    // renderizar cambios
    renderizarCarrito();
}

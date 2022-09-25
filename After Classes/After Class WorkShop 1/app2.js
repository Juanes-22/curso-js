document.addEventListener("DOMContentLoaded", () => {
    //el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado.
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

    let carrito = [];
    const divisa = "$";
    const DOMitems = document.querySelector("#items");
    const DOMcarrito = document.querySelector("#carrito");
    const DOMtotal = document.querySelector("#total");
    const DOMbotonVaciar = document.querySelector("#boton-vaciar");

    // funciones

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            //estructura
            const miNodo = document.createElement("div");
            miNodo.classList.add("card", "col-sm-4");

            // body
            const miNodoBody = document.createElement("div");
            miNodoBody.classList.add("card-body");

            // titulo
            const miNodoTitulo = document.createElement("h5");
            miNodoTitulo.classList.add("card-title");
            miNodoTitulo.textContent = info.nombre;

            // imagen
            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src", info.imagen);

            // precio
            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            //boton
            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn", "btn-primary");
            miNodoBoton.textContent = "+";
            miNodoBoton.setAttribute("marcador", info.id);
            miNodoBoton.addEventListener("click", añadirProductoAlCarrito);

            //Insertamos
            miNodoBody.appendChild(miNodoImagen);
            miNodoBody.appendChild(miNodoTitulo);
            miNodoBody.appendChild(miNodoPrecio);
            miNodoBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoBody);
            DOMitems.appendChild(miNodo);
        });
    }

    function añadirProductoAlCarrito(evento) {
        //añadir el nodo a nuestro carrito
        carrito.push(evento.target.getAttribute("marcador"));
        //actualizar el carrito
        renderizarCarrito();
    }

    function renderizarCarrito() {
        // vaciamos todo el html
        DOMcarrito.textContent = "";
        // quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];

        console.log(carrito)
        console.log(carritoSinDuplicados)
        //generamos los nodos a partir del carrito
        carritoSinDuplicados.forEach((item) => {
            //obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // coincide los id? solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });



            // cuenta el numero de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                //coincide los id? incremento el contador, en caso contrario no mantengo
                console.log(total, itemId, item)

                return itemId === item ? (total += 1) : total;
            }, 0);
            // creamos el nodo del item del carrito
            const miNodo = document.createElement("li");
            miNodo.classList.add("list-group-item", "text-right", "mx-2");
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa} `;
            //boton de borrar
            const miBoton = document.createElement("button");
            miBoton.classList.add("btn", "btn-danger", "mx-5");
            miBoton.textContent = "X";
            miBoton.style.marginLeft = "1rem";
            miBoton.dataset.item = item;
            miBoton.addEventListener("click", borrarItemCarrito);
            //mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        //renderizamos el precio ttotal en el html
        DOMtotal.textContent = calcularTotal();
    }

    //evento para borrar un elemento del carrito
    function borrarItemCarrito(evento) {
        //obtenemos el producto id que hay en el boton pulsado
        const id = evento.target.dataset.item;
        //borramos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        //volvemos a renderizar
        renderizarCarrito();
    }

    //calcula el precio total teniendo en cuenta los productos repetidos

    function calcularTotal() {
        //recorremos el array del carrito
        return carrito
            .reduce((total, item) => {
                // de cada elemento obtenemos su precio
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                // los sumamos al total
                return total + miItem[0].precio;
            }, 0)
            .toFixed(2);
    }

    //vaciar el carrito
    function vaciarCarrito() {
        //limpiar los productos guardados
        carrito = [];
        // renderizamos los cambios
        renderizarCarrito();
    }

    //eventos
    DOMbotonVaciar.addEventListener("click", vaciarCarrito);

    //inicio
    renderizarProductos();
    renderizarCarrito();
});

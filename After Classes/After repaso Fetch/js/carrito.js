const carrito = getCarritoLocalStorage();

function sumarAlCarrito(id) {
    const producto = catalogo.find((producto) => producto.id === id);
    const existing = carrito.find((producto) => producto.id === id);

    if (existing) {
        existing.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1,
        });
    }

    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    saveCarritoLocalStorage();
}

function getCarritoLocalStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function saveCarritoLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarNotificacion(mensaje) {
    Toastify({
        text: mensaje,
        destination: "/pages/carrito.html",
        duration: 3000,
        stopOnFocus: true,
    }).showToast();
}
